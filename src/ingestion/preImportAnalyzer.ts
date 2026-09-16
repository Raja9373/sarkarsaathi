import { Opportunity, Tender } from '../types';
import { PreImportSummary, ImportErrorDetail } from './types';
import { validateOpportunityRecord, validateTenderRecord } from './validation';
import { DuplicateDetector } from './duplicates';
import { globalStagingQueue } from './staging';

export class PreImportAnalyzer {
  constructor(
    private existingOpportunities: Opportunity[],
    private existingTenders: Tender[]
  ) {}

  analyzeOpportunities(records: Partial<Opportunity>[]): PreImportSummary {
    const stagedOpps = globalStagingQueue.getStagedOpportunities();
    const detector = new DuplicateDetector(this.existingOpportunities, []);
    for (const staged of stagedOpps) {
      detector.registerOpportunity(staged);
    }

    let validCount = 0;
    let invalidCount = 0;
    let duplicateCount = 0;
    let newCount = 0;
    let requiringReviewCount = 0;
    const errors: ImportErrorDetail[] = [];

    // Local detector tracking to also catch duplicate records inside the same batch
    const batchDetector = new DuplicateDetector(this.existingOpportunities, []);
    for (const staged of stagedOpps) {
      batchDetector.registerOpportunity(staged);
    }

    records.forEach((rec, idx) => {
      const dupCheck = batchDetector.isOpportunityDuplicate(rec);
      if (dupCheck.isDuplicate) {
        duplicateCount++;
        errors.push({
          index: idx,
          field: 'projectId',
          reason: dupCheck.reason || 'Duplicate project record detected in catalog or batch',
          message: dupCheck.reason || 'Duplicate record detected',
          title: rec.title || `Project ID: ${rec.projectId || 'Unknown'}`,
          referenceId: rec.projectId || rec.id
        });
        return;
      }

      const val = validateOpportunityRecord(rec);
      if (!val.isValid) {
        invalidCount++;
        requiringReviewCount++;
        const primaryField = val.fieldErrors[0]?.field || 'record';
        const reasonStr = val.errors.join('; ');
        errors.push({
          index: idx,
          field: primaryField,
          reason: reasonStr,
          message: `Validation failed: ${reasonStr}`,
          title: rec.title || `Project ID: ${rec.projectId || 'Unknown'}`,
          referenceId: rec.projectId || rec.id
        });
        return;
      }

      validCount++;
      newCount++;
      if (val.verificationStatus === 'NEEDS_REVIEW' || val.lifecycleStatus === 'NEEDS_REVIEW') {
        requiringReviewCount++;
      }

      // Register into batch detector to catch duplicates within the batch
      batchDetector.registerOpportunity(rec as Opportunity);
    });

    return {
      totalInput: records.length,
      validRecords: validCount,
      invalidRecords: invalidCount,
      duplicateRecords: duplicateCount,
      newRecords: newCount,
      requiringReview: requiringReviewCount,
      errors
    };
  }

  analyzeTenders(records: Partial<Tender>[]): PreImportSummary {
    const stagedTenders = globalStagingQueue.getStagedTenders();
    const batchDetector = new DuplicateDetector([], this.existingTenders);
    for (const staged of stagedTenders) {
      batchDetector.registerTender(staged);
    }

    let validCount = 0;
    let invalidCount = 0;
    let duplicateCount = 0;
    let newCount = 0;
    let requiringReviewCount = 0;
    const errors: ImportErrorDetail[] = [];

    records.forEach((rec, idx) => {
      const dupCheck = batchDetector.isTenderDuplicate(rec);
      const refId = (rec.id || (rec as any).tenderId || (rec as any).referenceId || (rec as any).tenderRefNumber)?.toString().trim();

      if (dupCheck.isDuplicate) {
        duplicateCount++;
        errors.push({
          index: idx,
          field: 'id',
          reason: dupCheck.reason || 'Duplicate tender record detected in catalog or batch',
          message: dupCheck.reason || 'Duplicate tender record detected',
          title: rec.title || `Tender ID: ${refId || 'Unknown'}`,
          referenceId: refId
        });
        return;
      }

      const val = validateTenderRecord(rec);
      if (!val.isValid) {
        invalidCount++;
        requiringReviewCount++;
        const primaryField = val.fieldErrors[0]?.field || 'record';
        const reasonStr = val.errors.join('; ');
        errors.push({
          index: idx,
          field: primaryField,
          reason: reasonStr,
          message: `Validation failed: ${reasonStr}`,
          title: rec.title || `Tender ID: ${refId || 'Unknown'}`,
          referenceId: refId
        });
        return;
      }

      validCount++;
      newCount++;
      if (val.verificationStatus === 'NEEDS_REVIEW' || val.lifecycleStatus === 'NEEDS_REVIEW') {
        requiringReviewCount++;
      }

      batchDetector.registerTender(rec as Tender);
    });

    return {
      totalInput: records.length,
      validRecords: validCount,
      invalidRecords: invalidCount,
      duplicateRecords: duplicateCount,
      newRecords: newCount,
      requiringReview: requiringReviewCount,
      errors
    };
  }
}
