import { Tender } from '../types';
import { StagedTender, ImportErrorDetail, IngestionProvenance } from './types';
import { parseCsvToObjects } from './csvParser';
import { parseXmlToObjects } from './fileParsers';
import { validateTenderRecord } from './validation';
import { DuplicateDetector } from './duplicates';
import { globalStagingQueue } from './staging';
import { tenderRepository } from '../infrastructure/repositories/InvestmentRepository';

export interface TenderImportOptions {
  filename: string;
  fileContent: string;
  sourceSystem?: string;
  sourceId?: string;
  format?: 'CSV' | 'JSON' | 'XML';
}

export interface TenderImportSummary {
  batchId: string;
  filename: string;
  importTimestamp: string;
  sourceSystem: string;
  format: 'CSV' | 'JSON' | 'XML';
  totalRowsRead: number;
  validRows: number;
  rejectedRows: number;
  duplicatesDetected: number;
  stagedCount: number;
  expiredDeadlinesDetected: number;
  dateAnomaliesDetected: number;
  errors: ImportErrorDetail[];
}

export class SafeTenderImportPipeline {
  async processTenderImportFile(options: TenderImportOptions): Promise<TenderImportSummary> {
    const timestamp = new Date().toISOString();
    const batchId = `tender-batch-${Date.now()}`;
    const filename = options.filename;
    const sourceSystem = options.sourceSystem || 'CPPP / Official Administrator Export';
    const text = options.fileContent.trim();

    if (!text) {
      throw new Error('Import file is empty.');
    }

    // Determine format
    let format: 'CSV' | 'JSON' | 'XML' = options.format || 'CSV';
    if (filename.toLowerCase().endsWith('.json')) format = 'JSON';
    if (filename.toLowerCase().endsWith('.xml')) format = 'XML';

    let rawRecords: Record<string, any>[] = [];

    try {
      if (format === 'JSON') {
        const parsed = JSON.parse(text);
        rawRecords = Array.isArray(parsed) ? parsed : (parsed.tenders || parsed.records || [parsed]);
      } else if (format === 'XML') {
        rawRecords = parseXmlToObjects(text);
      } else {
        rawRecords = parseCsvToObjects(text);
      }
    } catch (parseErr: any) {
      throw new Error(`Failed to parse ${format} file: ${parseErr.message}`);
    }

    const totalRowsRead = rawRecords.length;
    let validRows = 0;
    let rejectedRows = 0;
    let duplicatesDetected = 0;
    let stagedCount = 0;
    let expiredDeadlinesDetected = 0;
    let dateAnomaliesDetected = 0;
    const errors: ImportErrorDetail[] = [];

    const existingTenders = tenderRepository.getAll();
    const stagedTenders = globalStagingQueue.getStagedTenders();
    const detector = new DuplicateDetector([], existingTenders);
    for (const staged of stagedTenders) {
      detector.registerTender(staged);
    }

    const currentDateStr = new Date().toISOString().split('T')[0];

    for (let idx = 0; idx < rawRecords.length; idx++) {
      const raw = rawRecords[idx];

      // Normalize fields from official export columns
      const refId = (raw.id || raw.tenderId || raw.referenceNumber || raw.tenderRefNumber || raw.ref_id || `TND-${Date.now()}-${idx}`).toString().trim();
      const title = (raw.title || raw.tenderTitle || raw.workName || raw.subject || '').toString().trim();
      const description = (raw.description || raw.detailedDescription || raw.scopeOfWork || title || 'Official tender notice export record.').toString().trim();
      const authority = (raw.authority || raw.procuringAuthority || raw.department || raw.ministry || raw.organisation || 'Government Authority').toString().trim();
      const category = (raw.category || raw.tenderCategory || raw.workCategory || 'General Procurement').toString().trim();
      const sourceAuthority = (raw.sourceAuthority || raw.sourceName || sourceSystem).toString().trim();
      const sourceUrl = (raw.sourceUrl || raw.nitDocumentUrl || raw.officialPortalUrl || 'https://eprocure.gov.in').toString().trim();
      const tenderValue = (raw.tenderValue || raw.estimatedValue || raw.value || 'As per Tender Document').toString().trim();
      const submissionDeadline = (raw.submissionDeadline || raw.bidSubmissionDeadline || raw.closingDate || raw.deadline || '').toString().trim();
      const publishedDate = (raw.publishedDate || raw.tenderPublishingDate || raw.pubDate || currentDateStr).toString().trim();
      const location = (raw.location || raw.state || raw.district || 'India').toString().trim();

      const candidate: Partial<Tender> = {
        id: refId,
        tenderId: refId,
        referenceNumber: refId,
        title,
        description,
        detailedDescription: description,
        authority,
        procuringAuthority: authority,
        category,
        tenderCategory: category,
        sourceAuthority,
        sourceName: sourceAuthority,
        sourceUrl,
        tenderValue,
        submissionDeadline,
        publishedDate,
        location,
        state: raw.state || 'All India',
        status: 'OPEN'
      };

      // 1. Check Duplicates
      const dupCheck = detector.isTenderDuplicate(candidate);
      if (dupCheck.isDuplicate) {
        duplicatesDetected++;
        errors.push({
          index: idx,
          field: 'id',
          reason: dupCheck.reason || 'Duplicate tender ID or reference detected',
          message: dupCheck.reason || 'Duplicate tender ID or reference detected',
          title: title || refId,
          referenceId: refId
        });
        continue;
      }

      // 2. Validate Schema
      const val = validateTenderRecord(candidate);
      if (!val.isValid) {
        rejectedRows++;
        errors.push({
          index: idx,
          field: val.fieldErrors[0]?.field || 'record',
          reason: val.errors.join('; '),
          message: val.errors.join('; '),
          title: title || refId,
          referenceId: refId
        });
        continue;
      }

      validRows++;

      // 3. Date Integrity Checks
      if (submissionDeadline && submissionDeadline < currentDateStr) {
        expiredDeadlinesDetected++;
      }
      if (publishedDate && submissionDeadline && publishedDate > submissionDeadline) {
        dateAnomaliesDetected++;
      }

      // 4. Create Staged Record with Provenance
      const provenance: IngestionProvenance = {
        sourceSystem,
        importedAt: timestamp,
        batchId,
        rawRecordHash: JSON.stringify(raw),
        confidenceScore: 0.95,
        sourceId: options.sourceId || 'src-cppp-eprocure',
        sourceName: sourceAuthority,
        authority,
        officialUrl: sourceUrl,
        accessType: 'ADMIN_UPLOAD',
        verificationStatus: 'VERIFIED'
      };

      const stagedTender: StagedTender = {
        ...(candidate as Tender),
        id: `staged-tnd-${Date.now()}-${stagedCount + 1}`,
        lifecycleStatus: submissionDeadline < currentDateStr ? 'CLOSED' : 'ACTIVE',
        provenance,
        reviewStatus: 'PENDING_REVIEW'
      };

      // Stage for review — NEVER auto-publish
      globalStagingQueue.addTender(stagedTender);
      detector.registerTender(stagedTender);
      stagedCount++;
    }

    return {
      batchId,
      filename,
      importTimestamp: timestamp,
      sourceSystem,
      format,
      totalRowsRead,
      validRows,
      rejectedRows,
      duplicatesDetected,
      stagedCount,
      expiredDeadlinesDetected,
      dateAnomaliesDetected,
      errors
    };
  }
}

export const globalSafeTenderImportPipeline = new SafeTenderImportPipeline();
