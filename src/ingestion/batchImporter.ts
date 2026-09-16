import { Opportunity, Tender } from '../types';
import { BatchImportRequest, BatchImportResult, StagedOpportunity, StagedTender } from './types';
import { validateOpportunityRecord, validateTenderRecord } from './validation';
import { DuplicateDetector } from './duplicates';
import { globalStagingQueue } from './staging';

export class BatchImporter {
  constructor(
    private existingOpportunities: Opportunity[],
    private existingTenders: Tender[]
  ) {}

  async importOpportunityBatch(request: BatchImportRequest<Partial<Opportunity>>): Promise<BatchImportResult> {
    const stagedOpps = globalStagingQueue.getStagedOpportunities();
    const detector = new DuplicateDetector(this.existingOpportunities, []);
    for (const staged of stagedOpps) {
      detector.registerOpportunity(staged);
    }
    const result: BatchImportResult = {
      batchId: request.batchId,
      totalReceived: request.records.length,
      successfullyStaged: 0,
      autoApproved: 0,
      duplicatesDetected: 0,
      validationFailed: 0,
      errors: []
    };

    const chunkSize = 100;
    for (let i = 0; i < request.records.length; i += chunkSize) {
      const chunk = request.records.slice(i, i + chunkSize);
      
      for (let j = 0; j < chunk.length; j++) {
        const idx = i + j;
        const rec = chunk[j];
        
        const dupCheck = detector.isOpportunityDuplicate(rec);
        if (dupCheck.isDuplicate) {
          result.duplicatesDetected++;
          result.errors.push({ index: idx, message: dupCheck.reason || 'Duplicate record', title: rec.title });
          continue;
        }

        const val = validateOpportunityRecord(rec);
        if (!val.isValid && !request.autoApproveVerified) {
          result.validationFailed++;
          result.errors.push({ index: idx, message: `Validation failed: ${val.errors.join(', ')}`, title: rec.title });
          continue;
        }

        const rawHash = JSON.stringify(rec);
        const staged: StagedOpportunity = {
          id: rec.id || `opp-batch-${request.batchId}-${idx}-${Date.now()}`,
          title: rec.title || 'Untitled Opportunity',
          slug: rec.slug || `opp-${idx}-${Date.now()}`,
          description: rec.description || '',
          authority: rec.authority || 'Unknown',
          category: rec.category || 'General',
          status: val.isValid ? 'ACTIVE' : 'PENDING',
          sourceUrl: rec.sourceUrl || 'https://gov.in',
          sourceAuthority: rec.sourceAuthority || request.sourceSystem,
          verificationStatus: val.verificationStatus,
          deadline: rec.deadline || new Date().toISOString().split('T')[0],
          fundingAmount: rec.fundingAmount,
          lifecycleStatus: val.lifecycleStatus,
          provenance: {
            sourceSystem: request.sourceSystem,
            importedAt: new Date().toISOString(),
            batchId: request.batchId,
            rawRecordHash: rawHash,
            confidenceScore: val.isValid ? 0.95 : 0.4
          },
          validationErrors: val.errors
        };

        if (request.autoApproveVerified && val.isValid) {
          this.existingOpportunities.push(staged);
          detector.registerOpportunity(staged);
          result.autoApproved++;
          result.successfullyStaged++;
        } else {
          globalStagingQueue.addOpportunity(staged);
          detector.registerOpportunity(staged); // Register staged to prevent duplicates in batch
          result.successfullyStaged++;
        }
      }
      
      // Yield to UI thread
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    return result;
  }

  async importTenderBatch(request: BatchImportRequest<Partial<Tender>>): Promise<BatchImportResult> {
    const stagedTenders = globalStagingQueue.getStagedTenders();
    const detector = new DuplicateDetector([], this.existingTenders);
    for (const staged of stagedTenders) {
      detector.registerTender(staged);
    }
    const result: BatchImportResult = {
      batchId: request.batchId,
      totalReceived: request.records.length,
      successfullyStaged: 0,
      autoApproved: 0,
      duplicatesDetected: 0,
      validationFailed: 0,
      errors: []
    };

    const chunkSize = 100;
    for (let i = 0; i < request.records.length; i += chunkSize) {
      const chunk = request.records.slice(i, i + chunkSize);
      
      for (let j = 0; j < chunk.length; j++) {
        const idx = i + j;
        const rec = chunk[j];

        const dupCheck = detector.isTenderDuplicate(rec);
        if (dupCheck.isDuplicate) {
          result.duplicatesDetected++;
          result.errors.push({ index: idx, message: dupCheck.reason || 'Duplicate record', title: rec.title });
          continue;
        }

        const val = validateTenderRecord(rec);
        if (!val.isValid && !request.autoApproveVerified) {
          result.validationFailed++;
          result.errors.push({ index: idx, message: `Validation failed: ${val.errors.join(', ')}`, title: rec.title });
          continue;
        }

        const rawHash = JSON.stringify(rec);
        const staged: StagedTender = {
          id: rec.id || `tender-batch-${request.batchId}-${idx}-${Date.now()}`,
          title: rec.title || 'Untitled Tender',
          slug: rec.slug || `tender-${idx}-${Date.now()}`,
          description: rec.description || '',
          authority: rec.authority || 'Unknown',
          category: rec.category || 'General',
          status: val.isValid ? 'ACTIVE' : 'PENDING',
          sourceUrl: rec.sourceUrl || 'https://gov.in',
          sourceAuthority: rec.sourceAuthority || request.sourceSystem,
          verificationStatus: val.verificationStatus,
          tenderValue: rec.tenderValue || '₹0',
          submissionDeadline: rec.submissionDeadline || new Date().toISOString().split('T')[0],
          location: rec.location || 'India',
          lifecycleStatus: val.lifecycleStatus,
          provenance: {
            sourceSystem: request.sourceSystem,
            importedAt: new Date().toISOString(),
            batchId: request.batchId,
            rawRecordHash: rawHash,
            confidenceScore: val.isValid ? 0.95 : 0.4
          },
          validationErrors: val.errors
        };

        if (request.autoApproveVerified && val.isValid) {
          this.existingTenders.push(staged);
          detector.registerTender(staged);
          result.autoApproved++;
          result.successfullyStaged++;
        } else {
          globalStagingQueue.addTender(staged);
          detector.registerTender(staged); // Register staged to prevent duplicates in batch
          result.successfullyStaged++;
        }
      }
      
      // Yield to UI thread
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    return result;
  }

}
