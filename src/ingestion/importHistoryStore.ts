import { ImportJobHistory } from './types';

export class ImportHistoryStore {
  private history: ImportJobHistory[] = [
    {
      id: 'job-iig-audit-01',
      timestamp: '2026-09-15 14:30:00 IST',
      targetCatalogue: 'Opportunities',
      sourceName: 'India Investment Grid (IIG)',
      sourceUrl: 'https://indiainvestmentgrid.gov.in',
      inputCount: 127,
      validCount: 127,
      duplicateCount: 0,
      stagedCount: 127,
      publishedCount: 127,
      status: 'PUBLISHED'
    },
    {
      id: 'job-cppp-audit-02',
      timestamp: '2026-09-14 11:15:00 IST',
      targetCatalogue: 'Tenders',
      sourceName: 'Central Public Procurement Portal (CPPP)',
      sourceUrl: 'https://eprocure.gov.in',
      inputCount: 30,
      validCount: 30,
      duplicateCount: 0,
      stagedCount: 30,
      publishedCount: 30,
      status: 'PUBLISHED'
    }
  ];

  addJob(job: ImportJobHistory): void {
    this.history.unshift(job);
  }

  addEntry(job: ImportJobHistory): void {
    this.addJob(job);
  }

  updateJobPublishedCount(batchId: string, count: number): void {
    const job = this.history.find(j => j.id === batchId);
    if (job) {
      job.publishedCount += count;
      if (job.publishedCount >= job.stagedCount) {
        job.status = 'PUBLISHED';
      } else if (job.publishedCount > 0) {
        job.status = 'PARTIAL';
      }
    }
  }

  getAll(): ImportJobHistory[] {
    return [...this.history];
  }
}

export const globalImportHistory = new ImportHistoryStore();
