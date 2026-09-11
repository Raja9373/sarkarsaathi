import { OpportunityRecord } from '../../types/opportunity';

export interface IOpportunityRepository {
  getAll(): Promise<OpportunityRecord[]>;
  getBySlug(slug: string): Promise<OpportunityRecord | null>;
}

const MOCK_OPPORTUNITIES: OpportunityRecord[] = [
  {
    id: 'invest-india-ppp-1',
    slug: 'national-infrastructure-pipeline-ppp',
    title: 'National Infrastructure Pipeline (NIP) - PPP Opportunity',
    shortSummary: 'Opportunities for private participation in infrastructure projects under NIP.',
    description: 'Various infrastructure projects in energy, transport, and urban sectors offered under Public-Private Partnership models.',
    opportunityType: 'PPP Opportunity',
    sector: 'Infrastructure',
    industry: 'Energy, Transport, Urban',
    authority: 'Ministry of Finance / Invest India',
    organisation: 'Invest India',
    state: 'Pan-India',
    projectStage: 'Implementation',
    participationType: 'PPP',
    eligibility: 'As per project-specific RFP',
    applicationProcess: 'Portal application on Invest India/DPIIT platform',
    status: 'ACTIVE',
    officialSourceUrl: 'https://www.investindia.gov.in',
    sourceAuthority: 'Invest India',
    sourceType: 'Government Portal',
    lastVerifiedAt: '2026-09-11',
    verificationStatus: 'VERIFIED',
    tags: ['PPP', 'Infrastructure', 'NIP'],
    seoTitle: 'National Infrastructure Pipeline PPP Opportunities | SarkarSaathi',
    seoDescription: 'Explore Public-Private Partnership opportunities under the National Infrastructure Pipeline.',
    canonicalUrl: 'https://www.sarkarsaathi.org/opportunities/national-infrastructure-pipeline-ppp'
  }
];

export class MockOpportunityRepository implements IOpportunityRepository {
  async getAll(): Promise<OpportunityRecord[]> {
    return MOCK_OPPORTUNITIES;
  }
  async getBySlug(slug: string): Promise<OpportunityRecord | null> {
    return MOCK_OPPORTUNITIES.find(o => o.slug === slug) || null;
  }
}
