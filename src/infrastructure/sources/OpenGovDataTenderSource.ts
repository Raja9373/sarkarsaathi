import { IOfficialDataSource } from '../../types/infrastructure';
import { TenderRecord } from '../../types/tender';

export class OpenGovDataTenderSource implements IOfficialDataSource {
  sourceId = 'ogd-india-tender-poc';
  sourceName = 'Open Government Data Platform India (POC)';
  officialSourceUrl = 'https://data.gov.in';

  async fetchData(): Promise<TenderRecord[]> {
    console.warn('Live ingestion from data.gov.in is currently DISABLED for this POC.');
    // Return controlled, normalized sample data.
    return [
      { id: 'ogd-tender-1', tenderId: 'tid-1', referenceNumber: 'ref-1', slug: 'tender-1', title: 'Tender 1', description: 'Desc 1', organisation: 'Org', department: 'Dept', issuingAuthority: 'Auth', state: 'State', tenderCategory: 'Goods', procurementCategory: 'Cat', publishDate: '2026-09-13', submissionDeadline: '2026-09-30', status: 'ACTIVE', corrigendumAvailable: false, corrigendumCount: 0, sourceName: 'Portal', sourceUrl: 'https://data.gov.in', sourcePortal: 'Portal', lastVerifiedAt: '2026-09-13', verificationStatus: 'NEEDS_REVIEW', seoTitle: 'SEO', seoDescription: 'SEO', canonicalUrl: 'url' },
    ] as TenderRecord[];
  }
  validate(data: any): boolean { return true; }
  compare(existing: any, incoming: any): any[] { return []; }
}
