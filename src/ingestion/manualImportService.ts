import { ImportResult } from '../types/infrastructure';
import { IngestionPipeline, NormalizationStage, ValidationStage, DeduplicationStage } from './pipeline';

export interface IManualImportService<T> {
  importFile(filename: string, content: string): Promise<ImportResult<T>>;
}

export class ManualImportService<T> implements IManualImportService<T> {
  private stagedRecords: Map<string, T> = new Map();

  constructor(
    private pipeline: IngestionPipeline<T>,
    private normalizer: NormalizationStage<any, T>,
    private validator: ValidationStage<T>,
    private deduplicator: DeduplicationStage<T>,
    private sourceType: 'OPPORTUNITY' | 'TENDER'
  ) {}

  async importFile(filename: string, content: string): Promise<ImportResult<T>> {
    const isJson = filename.endsWith('.json');
    const records = isJson ? this.parseJSON(content) : this.parseCSV(content);
    
    const result: ImportResult<T> = {
      sourceType: this.sourceType,
      filename,
      recordsRead: records.length,
      recordsParsed: records.length,
      recordsValid: 0,
      recordsInvalid: 0,
      duplicatesDetected: 0,
      recordsStaged: 0,
      recordsApproved: 0,
      recordsCommitted: 0,
      rejectedRecords: [],
      validationErrors: [],
      duplicateReasons: []
    };

    for (const raw of records) {
      try {
        const normalized = this.normalizer.normalize(raw);
        // Add provenance
        (normalized as any).acquisitionMethod = 'MANUAL_IMPORT';
        (normalized as any).importedAt = new Date().toISOString();

        if (this.deduplicator.isDuplicate(normalized)) {
          result.duplicatesDetected++;
          result.duplicateReasons.push({ recordId: (normalized as any).id, reason: 'Duplicate' });
          continue;
        }

        if (!this.validator.validate(normalized)) {
          result.recordsInvalid++;
          result.validationErrors.push({ recordId: (normalized as any).id, error: 'Validation failed' });
          continue;
        }

        this.stagedRecords.set((normalized as any).id, normalized);
        result.recordsValid++;
        result.recordsStaged++;
      } catch (e) {
        result.recordsInvalid++;
        result.rejectedRecords.push({ record: raw, reason: String(e) });
      }
    }

    return result;
  }

  private parseJSON(content: string): any[] {
    try {
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [];
    }
  }

  private parseCSV(content: string): any[] {
    const lines = content.split('\n');
    if (lines.length < 2) return [];
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {} as any);
    });
  }
}
