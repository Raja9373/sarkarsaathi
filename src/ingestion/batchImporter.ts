import { Opportunity, Tender } from '../types';
import { BatchImportRequest, BatchImportResult, StagedOpportunity, StagedTender } from './types';
import { validateOpportunityRecord, validateTenderRecord } from './validation';
import { DuplicateDetector } from './duplicates';
import { globalStagingQueue } from './staging';

export interface ProgressCallback {
  (processed: number, total: number, chunkIndex: number): void;
}

export interface ChunkedImportOptions {
  chunkSize?: number;
  onProgress?: ProgressCallback;
}

export class BatchImporter {
  constructor(
    private existingOpportunities: Opportunity[],
    private existingTenders: Tender[]
  ) {}

  async importOpportunityBatch(
    request: BatchImportRequest<Partial<Opportunity>>,
    options: ChunkedImportOptions = {}
  ): Promise<BatchImportResult> {
    const stagedOpps = globalStagingQueue.getStagedOpportunities();
    const detector = new DuplicateDetector(this.existingOpportunities, []);
    for (const staged of stagedOpps) {
      detector.registerOpportunity(staged);
    }

    const total = request.records.length;
    const result: BatchImportResult = {
      batchId: request.batchId,
      totalReceived: total,
      successfullyStaged: 0,
      autoApproved: 0, // Auto-publish MUST remain disabled
      duplicatesDetected: 0,
      validationFailed: 0,
      errors: []
    };

    // Recommended batch/chunk size: 1,000 records or custom
    const chunkSize = options.chunkSize && options.chunkSize > 0 ? options.chunkSize : 1000;
    let processed = 0;
    let chunkIndex = 0;

    for (let i = 0; i < total; i += chunkSize) {
      const chunkEnd = Math.min(i + chunkSize, total);
      
      for (let idx = i; idx < chunkEnd; idx++) {
        const rec = request.records[idx];

        // 1. Check for Duplicate
        const dupCheck = detector.isOpportunityDuplicate(rec);
        if (dupCheck.isDuplicate) {
          result.duplicatesDetected++;
          result.errors.push({
            index: idx,
            message: dupCheck.reason || 'Duplicate record detected',
            title: rec.title || `Project ID: ${rec.projectId}`
          });
          continue;
        }

        // 2. Validate strictly against Opportunity schema
        const val = validateOpportunityRecord(rec);
        if (!val.isValid) {
          result.validationFailed++;
          result.errors.push({
            index: idx,
            message: `Validation failed: ${val.errors.join('; ')}`,
            title: rec.title || `Project ID: ${rec.projectId || 'Unknown'}`
          });
          continue;
        }

        // 3. Stage only valid NEW records with exact preserved values
        const rawHash = JSON.stringify(rec);
        const stagedId = rec.id || `opp-stage-${request.batchId}-${idx}-${Date.now()}`;
        const stagedSlug = rec.slug || (rec.title ? rec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : `opp-${idx}-${Date.now()}`);

        const staged: StagedOpportunity = {
          ...rec as Opportunity,
          id: stagedId,
          projectId: rec.projectId!,
          title: rec.title!,
          slug: stagedSlug,
          description: rec.description!,
          authority: rec.authority!,
          category: rec.category!,
          status: rec.status || 'PENDING',
          sourceUrl: rec.sourceUrl!,
          sourceAuthority: (rec.sourceAuthority || (rec as any).sourceName || request.sourceSystem)!,
          verificationStatus: 'PENDING', // Auto-publish disabled; must go to REVIEW -> PUBLISH
          deadline: rec.deadline!,
          fundingAmount: rec.fundingAmount,
          lifecycleStatus: val.lifecycleStatus,
          provenance: {
            sourceSystem: request.sourceSystem,
            importedAt: new Date().toISOString(),
            batchId: request.batchId,
            rawRecordHash: rawHash,
            confidenceScore: 0.95
          },
          validationErrors: []
        };

        // Stage into global staging queue - NEVER auto-publish
        globalStagingQueue.addOpportunity(staged);
        detector.registerOpportunity(staged); // Prevent internal duplicates in the batch
        result.successfullyStaged++;
      }

      processed = chunkEnd;
      chunkIndex++;
      if (options.onProgress) {
        options.onProgress(processed, total, chunkIndex);
      }

      // Yield to event loop to keep UI thread responsive during 1,000+ chunks
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    return result;
  }

  async importTenderBatch(
    request: BatchImportRequest<Partial<Tender>>,
    options: ChunkedImportOptions = {}
  ): Promise<BatchImportResult> {
    const stagedTenders = globalStagingQueue.getStagedTenders();
    const detector = new DuplicateDetector([], this.existingTenders);
    for (const staged of stagedTenders) {
      detector.registerTender(staged);
    }

    const total = request.records.length;
    const result: BatchImportResult = {
      batchId: request.batchId,
      totalReceived: total,
      successfullyStaged: 0,
      autoApproved: 0, // Auto-publish MUST remain disabled
      duplicatesDetected: 0,
      validationFailed: 0,
      errors: []
    };

    // Recommended batch/chunk size: 1,000 records or custom
    const chunkSize = options.chunkSize && options.chunkSize > 0 ? options.chunkSize : 1000;
    let processed = 0;
    let chunkIndex = 0;

    for (let i = 0; i < total; i += chunkSize) {
      const chunkEnd = Math.min(i + chunkSize, total);

      for (let idx = i; idx < chunkEnd; idx++) {
        const rec = request.records[idx];

        // 1. Check for Duplicate
        const dupCheck = detector.isTenderDuplicate(rec);
        if (dupCheck.isDuplicate) {
          result.duplicatesDetected++;
          result.errors.push({
            index: idx,
            message: dupCheck.reason || 'Duplicate record detected',
            title: rec.title || `Tender ID: ${rec.id || (rec as any).tenderId}`
          });
          continue;
        }

        // 2. Validate strictly against Tender schema
        const val = validateTenderRecord(rec);
        if (!val.isValid) {
          result.validationFailed++;
          result.errors.push({
            index: idx,
            message: `Validation failed: ${val.errors.join('; ')}`,
            title: rec.title || `Tender ID: ${rec.id || (rec as any).tenderId || 'Unknown'}`
          });
          continue;
        }

        // 3. Stage only valid NEW records with exact preserved values
        const refId = (rec.id || (rec as any).tenderId || (rec as any).referenceId || (rec as any).tenderRefNumber)?.toString().trim()!;
        const rawHash = JSON.stringify(rec);
        const stagedSlug = rec.slug || (rec.title ? rec.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : `tender-${idx}-${Date.now()}`);

        const staged: StagedTender = {
          ...rec as Tender,
          id: refId,
          title: rec.title!,
          slug: stagedSlug,
          description: rec.description!,
          authority: rec.authority!,
          category: rec.category!,
          status: rec.status || 'PENDING',
          sourceUrl: rec.sourceUrl!,
          sourceAuthority: (rec.sourceAuthority || (rec as any).sourceName || request.sourceSystem)!,
          verificationStatus: 'PENDING', // Auto-publish disabled; must go to REVIEW -> PUBLISH
          tenderValue: rec.tenderValue!,
          submissionDeadline: rec.submissionDeadline!,
          location: rec.location!,
          lifecycleStatus: val.lifecycleStatus,
          provenance: {
            sourceSystem: request.sourceSystem,
            importedAt: new Date().toISOString(),
            batchId: request.batchId,
            rawRecordHash: rawHash,
            confidenceScore: 0.95
          },
          validationErrors: []
        };

        // Stage into global staging queue - NEVER auto-publish
        globalStagingQueue.addTender(staged);
        detector.registerTender(staged); // Prevent internal duplicates in the batch
        result.successfullyStaged++;
      }

      processed = chunkEnd;
      chunkIndex++;
      if (options.onProgress) {
        options.onProgress(processed, total, chunkIndex);
      }

      // Yield to event loop to keep UI thread responsive during 1,000+ chunks
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    return result;
  }
}
