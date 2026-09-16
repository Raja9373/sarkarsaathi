import { QueueJobItem, QueueJobStatus, QueueDashboardStats } from './types';
import { parseImportFile } from './fileParsers';
import { BatchImporter } from './batchImporter';
import { opportunityRepository, tenderRepository } from '../infrastructure/repositories/InvestmentRepository';
import { globalSourceRegistry } from './sourceRegistry';
import { globalImportHistory } from './importHistoryStore';

export interface QueueProgressEvent {
  jobId: string;
  processed: number;
  total: number;
  chunkIndex: number;
}

export type QueueListener = () => void;

export class BulkImportQueueManager {
  private jobs: QueueJobItem[] = [];
  private isProcessing = false;
  private currentJobId: string | null = null;
  private listeners: Set<QueueListener> = new Set();
  private abortRequested = false;

  subscribe(listener: QueueListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    for (const listener of this.listeners) {
      try {
        listener();
      } catch (err) {
        console.error('Queue listener error:', err);
      }
    }
  }

  getJobs(): QueueJobItem[] {
    return [...this.jobs];
  }

  getJobById(id: string): QueueJobItem | undefined {
    return this.jobs.find(j => j.id === id);
  }

  getCurrentJobId(): string | null {
    return this.currentJobId;
  }

  getIsProcessing(): boolean {
    return this.isProcessing;
  }

  addFilesToQueue(
    files: File[],
    config: {
      targetCatalogue: 'Opportunities' | 'Tenders';
      sourceId: string;
      sourceAuthority?: string;
      sourceName?: string;
      sourceUrl?: string;
    }
  ): { addedCount: number; errors: string[] } {
    const errors: string[] = [];
    let addedCount = 0;

    const registeredSource = globalSourceRegistry.getSourceById(config.sourceId);
    if (!registeredSource) {
      return { addedCount: 0, errors: [`Source '${config.sourceId}' is not registered in Verified Source Registry.`] };
    }

    const avail = globalSourceRegistry.isSourceAvailableForImport(config.sourceId);
    if (!avail.available) {
      return { addedCount: 0, errors: [avail.reason || `Source '${registeredSource.sourceName}' is marked as NOT_AVAILABLE.`] };
    }

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');

    for (const file of files) {
      // Validate file extension
      const fileNameLower = file.name.toLowerCase();
      if (!fileNameLower.endsWith('.csv') && !fileNameLower.endsWith('.json') && !fileNameLower.endsWith('.xml')) {
        errors.push(`Skipped '${file.name}': Unsupported format. Only CSV, JSON, and XML are allowed.`);
        continue;
      }

      const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      const jobId = `JOB-${dateStr}-${config.targetCatalogue === 'Opportunities' ? 'OPP' : 'TND'}-${randomSuffix}`;

      const job: QueueJobItem = {
        id: jobId,
        file,
        fileName: file.name,
        fileSize: file.size,
        targetCatalogue: config.targetCatalogue,
        sourceId: registeredSource.sourceId,
        sourceName: config.sourceName || registeredSource.sourceName,
        sourceAuthority: config.sourceAuthority || registeredSource.authority,
        sourceUrl: config.sourceUrl || registeredSource.officialUrl,
        accessType: registeredSource.accessType,
        verificationStatus: registeredSource.verificationStatus,
        status: 'QUEUED',
        processedCount: 0,
        newStagedCount: 0,
        duplicateCount: 0,
        invalidCount: 0,
        createdAt: now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST'
      };

      this.jobs.push(job);
      addedCount++;
    }

    this.notify();
    return { addedCount, errors };
  }

  cancelJob(id: string): boolean {
    const job = this.jobs.find(j => j.id === id);
    if (job && (job.status === 'QUEUED')) {
      job.status = 'CANCELLED';
      this.notify();
      return true;
    }
    return false;
  }

  retryJob(id: string): boolean {
    const job = this.jobs.find(j => j.id === id);
    if (job && (job.status === 'FAILED' || job.status === 'CANCELLED')) {
      job.status = 'QUEUED';
      job.failureReason = undefined;
      job.errors = undefined;
      job.startedAt = undefined;
      job.completedAt = undefined;
      job.processedCount = 0;
      job.newStagedCount = 0;
      job.duplicateCount = 0;
      job.invalidCount = 0;
      this.notify();
      return true;
    }
    return false;
  }

  removeJob(id: string): boolean {
    const idx = this.jobs.findIndex(j => j.id === id);
    if (idx !== -1 && this.jobs[idx].status !== 'PROCESSING') {
      this.jobs.splice(idx, 1);
      this.notify();
      return true;
    }
    return false;
  }

  clearFinishedJobs() {
    this.jobs = this.jobs.filter(j => j.status === 'QUEUED' || j.status === 'PROCESSING');
    this.notify();
  }

  stopProcessing() {
    this.abortRequested = true;
  }

  async processQueue(onProgress?: (event: QueueProgressEvent) => void): Promise<void> {
    if (this.isProcessing) return;

    this.isProcessing = true;
    this.abortRequested = false;
    this.notify();

    try {
      while (true) {
        if (this.abortRequested) {
          break;
        }

        // Find next queued job sequentially
        const nextJob = this.jobs.find(j => j.status === 'QUEUED');
        if (!nextJob) {
          break; // All jobs completed or none queued
        }

        this.currentJobId = nextJob.id;
        nextJob.status = 'PROCESSING';
        nextJob.startedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
        this.notify();

        try {
          // 1. Verify Source Registry rules strictly
          const avail = globalSourceRegistry.isSourceAvailableForImport(nextJob.sourceId);
          if (!avail.available) {
            nextJob.status = 'FAILED';
            nextJob.failureReason = avail.reason || 'Source unavailable for import according to Verified Source Registry.';
            nextJob.completedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
            this.notify();
            continue;
          }

          // 2. Parse file on-demand (does NOT keep all files parsed in memory)
          const parsed = await parseImportFile(nextJob.file);
          nextJob.recordCount = parsed.records.length;
          this.notify();

          if (parsed.records.length === 0) {
            nextJob.status = 'FAILED';
            nextJob.failureReason = 'File contains 0 records.';
            nextJob.completedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
            this.notify();
            continue;
          }

          // 3. Process via existing BatchImporter (Large batch engine with deduplication + chunking)
          const importer = new BatchImporter(
            opportunityRepository.getAll(),
            tenderRepository.getAll()
          );

          if (nextJob.targetCatalogue === 'Opportunities') {
            const result = await importer.importOpportunityBatch(
              {
                batchId: nextJob.id,
                sourceSystem: nextJob.sourceName,
                sourceId: nextJob.sourceId,
                records: parsed.records,
                autoApproveVerified: false // STAGING ONLY: NEVER auto-publish
              },
              {
                chunkSize: 1000,
                onProgress: (processed, total, chunkIndex) => {
                  nextJob.processedCount = processed;
                  this.notify();
                  if (onProgress) {
                    onProgress({
                      jobId: nextJob.id,
                      processed,
                      total,
                      chunkIndex
                    });
                  }
                }
              }
            );

            nextJob.processedCount = result.totalReceived;
            nextJob.newStagedCount = result.successfullyStaged;
            nextJob.duplicateCount = result.duplicatesDetected;
            nextJob.invalidCount = result.validationFailed;
            nextJob.errors = result.errors;
            nextJob.status = 'COMPLETED';
            nextJob.completedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

            // Record in Import History
            globalImportHistory.addEntry({
              id: nextJob.id,
              timestamp: nextJob.completedAt,
              targetCatalogue: 'Opportunities',
              sourceId: nextJob.sourceId,
              sourceName: nextJob.sourceName,
              sourceUrl: nextJob.sourceUrl,
              accessType: nextJob.accessType || 'ADMIN_UPLOAD',
              inputCount: result.totalReceived,
              validCount: result.totalReceived - result.validationFailed,
              duplicateCount: result.duplicatesDetected,
              stagedCount: result.successfullyStaged,
              publishedCount: 0,
              status: result.successfullyStaged > 0 ? 'STAGED' : 'FAILED'
            });

          } else {
            const result = await importer.importTenderBatch(
              {
                batchId: nextJob.id,
                sourceSystem: nextJob.sourceName,
                sourceId: nextJob.sourceId,
                records: parsed.records,
                autoApproveVerified: false // STAGING ONLY: NEVER auto-publish
              },
              {
                chunkSize: 1000,
                onProgress: (processed, total, chunkIndex) => {
                  nextJob.processedCount = processed;
                  this.notify();
                  if (onProgress) {
                    onProgress({
                      jobId: nextJob.id,
                      processed,
                      total,
                      chunkIndex
                    });
                  }
                }
              }
            );

            nextJob.processedCount = result.totalReceived;
            nextJob.newStagedCount = result.successfullyStaged;
            nextJob.duplicateCount = result.duplicatesDetected;
            nextJob.invalidCount = result.validationFailed;
            nextJob.errors = result.errors;
            nextJob.status = 'COMPLETED';
            nextJob.completedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

            // Record in Import History
            globalImportHistory.addEntry({
              id: nextJob.id,
              timestamp: nextJob.completedAt,
              targetCatalogue: 'Tenders',
              sourceId: nextJob.sourceId,
              sourceName: nextJob.sourceName,
              sourceUrl: nextJob.sourceUrl,
              accessType: nextJob.accessType || 'ADMIN_UPLOAD',
              inputCount: result.totalReceived,
              validCount: result.totalReceived - result.validationFailed,
              duplicateCount: result.duplicatesDetected,
              stagedCount: result.successfullyStaged,
              publishedCount: 0,
              status: result.successfullyStaged > 0 ? 'STAGED' : 'FAILED'
            });
          }

        } catch (jobErr: any) {
          // Failure handling: Preserve completed work, mark job FAILED, record reason
          nextJob.status = 'FAILED';
          nextJob.failureReason = jobErr?.message || 'Unexpected processing error';
          nextJob.completedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
        }

        this.notify();
      }
    } finally {
      this.isProcessing = false;
      this.currentJobId = null;
      this.notify();
    }
  }

  getDashboardStats(): QueueDashboardStats {
    let queued = 0;
    let processing = 0;
    let completed = 0;
    let failed = 0;
    let cancelled = 0;
    let totalRecordsProcessed = 0;
    let totalNewStaged = 0;
    let totalDuplicate = 0;
    let totalInvalid = 0;

    for (const job of this.jobs) {
      if (job.status === 'QUEUED') queued++;
      else if (job.status === 'PROCESSING') processing++;
      else if (job.status === 'COMPLETED') completed++;
      else if (job.status === 'FAILED') failed++;
      else if (job.status === 'CANCELLED') cancelled++;

      totalRecordsProcessed += job.processedCount || 0;
      totalNewStaged += job.newStagedCount || 0;
      totalDuplicate += job.duplicateCount || 0;
      totalInvalid += job.invalidCount || 0;
    }

    return {
      queued,
      processing,
      completed,
      failed,
      cancelled,
      totalRecordsProcessed,
      totalNewStaged,
      totalDuplicate,
      totalInvalid
    };
  }
}

export const globalBulkImportQueue = new BulkImportQueueManager();
