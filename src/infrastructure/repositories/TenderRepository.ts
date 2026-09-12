import { TenderRecord } from '../../types/tender';

export interface ITenderRepository {
  getAll(): Promise<TenderRecord[]>;
  getBySlug(slug: string): Promise<TenderRecord | null>;
}

const MOCK_TENDERS: TenderRecord[] = [
  {
    id: 'historical-central-1',
    tenderId: 'CPPP-2023-001',
    referenceNumber: 'CPPP-2023-001',
    slug: 'historical-central-procurement-2023',
    title: 'Supply of Office Stationery for Central Govt Office',
    description: 'Procurement of stationery items for various central government ministries in Delhi.',
    organisation: 'Ministry of Finance',
    department: 'General Administration',
    issuingAuthority: 'Department of Expenditure',
    state: 'Delhi',
    tenderCategory: 'Goods',
    procurementCategory: 'Stationery',
    publishDate: '2023-01-15',
    submissionDeadline: '2023-02-15',
    status: 'ARCHIVED',
    corrigendumAvailable: false,
    corrigendumCount: 0,
    sourceName: 'CPPP',
    sourceUrl: 'https://eprocure.gov.in',
    sourcePortal: 'eprocure.gov.in',
    lastVerifiedAt: '2026-09-11',
    verificationStatus: 'ARCHIVED',
    seoTitle: 'Historical Tender: Office Stationery Procurement 2023',
    seoDescription: 'Details of the historical 2023 stationery procurement tender.',
    canonicalUrl: 'https://www.sarkarsaathi.org/tenders/historical-central-procurement-2023'
  }
];

export class MockTenderRepository implements ITenderRepository {
  async getAll(): Promise<TenderRecord[]> {
    return MOCK_TENDERS;
  }
  async getBySlug(slug: string): Promise<TenderRecord | null> {
    return MOCK_TENDERS.find(t => t.slug === slug) || null;
  }
}
