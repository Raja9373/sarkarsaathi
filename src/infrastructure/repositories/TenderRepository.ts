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
  },
  {
    id: 'active-tender-001',
    tenderId: 'CPPP-2026-0001-MEITY',
    referenceNumber: 'MEITY/2026/IT/001',
    slug: 'procurement-server-hardware-meity-2026',
    title: 'Procurement of Server Hardware for Data Center',
    description: 'Supply and installation of high-performance server hardware for data center upgrade.',
    organisation: 'Ministry of Electronics and Information Technology',
    department: 'Digital India Corporation',
    issuingAuthority: 'MeitY Procurement Division',
    state: 'Delhi',
    tenderCategory: 'Goods',
    procurementCategory: 'IT Hardware',
    publishDate: '2026-09-10',
    submissionDeadline: '2026-10-10',
    status: 'ACTIVE',
    corrigendumAvailable: false,
    corrigendumCount: 0,
    sourceName: 'CPPP',
    sourceUrl: 'https://eprocure.gov.in',
    sourcePortal: 'eprocure.gov.in',
    lastVerifiedAt: '2026-09-12',
    verificationStatus: 'VERIFIED',
    seoTitle: 'Active Tender: Server Hardware Procurement 2026',
    seoDescription: 'Details of the active 2026 server hardware procurement tender by MeitY.',
    canonicalUrl: 'https://www.sarkarsaathi.org/tenders/procurement-server-hardware-meity-2026'
  },
  {
    id: 'active-tender-002',
    tenderId: 'CPPP-2026-0002-FCI',
    referenceNumber: 'FCI/2026/INFRA/099',
    slug: 'construction-silos-fci-2026',
    title: 'Construction of Silos for Food Corporation of India',
    description: 'Design, supply, and construction of steel silos for food grain storage.',
    organisation: 'Ministry of Consumer Affairs, Food and Public Distribution',
    department: 'Food Corporation of India',
    issuingAuthority: 'FCI Engineering Division',
    state: 'Punjab',
    tenderCategory: 'Works',
    procurementCategory: 'Civil Construction',
    publishDate: '2026-09-08',
    submissionDeadline: '2026-10-08',
    status: 'ACTIVE',
    corrigendumAvailable: true,
    corrigendumCount: 1,
    sourceName: 'CPPP',
    sourceUrl: 'https://eprocure.gov.in',
    sourcePortal: 'eprocure.gov.in',
    lastVerifiedAt: '2026-09-12',
    verificationStatus: 'VERIFIED',
    seoTitle: 'Active Tender: Silo Construction FCI 2026',
    seoDescription: 'Details of the active 2026 silo construction tender by FCI.',
    canonicalUrl: 'https://www.sarkarsaathi.org/tenders/construction-silos-fci-2026'
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
