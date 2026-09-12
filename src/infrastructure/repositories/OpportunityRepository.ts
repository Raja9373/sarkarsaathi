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
  },
  {
    id: 'iig-green-hydrogen-001',
    slug: 'green-hydrogen-mission-manufacturing-opportunity',
    title: 'Green Hydrogen Mission: Electrolyzer Manufacturing Opportunity',
    shortSummary: 'Incentives and infrastructure support for Electrolyzer manufacturing.',
    description: 'Opportunities for manufacturing Electrolyzers required for Green Hydrogen production under the National Green Hydrogen Mission.',
    opportunityType: 'Investment Opportunity',
    sector: 'Renewable Energy',
    industry: 'Green Hydrogen / Manufacturing',
    authority: 'Ministry of New and Renewable Energy (MNRE)',
    organisation: 'India Investment Grid (IIG)',
    state: 'Pan-India',
    projectStage: 'Operational',
    participationType: 'Investment',
    eligibility: 'Manufacturing entities complying with MNRE guidelines',
    applicationProcess: 'Via IIG portal and MNRE directives',
    status: 'ACTIVE',
    officialSourceUrl: 'https://indiainvestmentgrid.gov.in',
    sourceAuthority: 'IIG',
    sourceType: 'Government Portal',
    lastVerifiedAt: '2026-09-12',
    verificationStatus: 'VERIFIED',
    tags: ['Green Energy', 'Manufacturing', 'Green Hydrogen'],
    seoTitle: 'Green Hydrogen Electrolyzer Manufacturing Investment Opportunity | SarkarSaathi',
    seoDescription: 'Explore investment opportunities in Electrolyzer manufacturing under the National Green Hydrogen Mission.',
    canonicalUrl: 'https://www.sarkarsaathi.org/opportunities/green-hydrogen-mission-manufacturing-opportunity'
  },
  {
    id: 'iig-electronic-components-002',
    slug: 'electronic-components-manufacturing-opportunity',
    title: 'Electronic Components Manufacturing Opportunity',
    shortSummary: 'Investment opportunity in electronic components under PLI schemes.',
    description: 'Project opportunities for manufacturing various electronic components under the incentive schemes managed by MeitY.',
    opportunityType: 'Investment Opportunity',
    sector: 'Electronics',
    industry: 'Electronic Components / Manufacturing',
    authority: 'Ministry of Electronics and Information Technology (MeitY)',
    organisation: 'India Investment Grid (IIG)',
    state: 'Pan-India',
    projectStage: 'Conceptualization',
    participationType: 'Investment',
    eligibility: 'As per PLI scheme guidelines',
    applicationProcess: 'Via IIG portal and MeitY platform',
    status: 'ACTIVE',
    officialSourceUrl: 'https://indiainvestmentgrid.gov.in',
    sourceAuthority: 'IIG',
    sourceType: 'Government Portal',
    lastVerifiedAt: '2026-09-12',
    verificationStatus: 'NEEDS_REVIEW',
    tags: ['Electronics', 'PLI', 'Manufacturing'],
    seoTitle: 'Electronic Components Manufacturing Opportunity | SarkarSaathi',
    seoDescription: 'Explore investment opportunities for electronic components manufacturing in India.',
    canonicalUrl: 'https://www.sarkarsaathi.org/opportunities/electronic-components-manufacturing-opportunity'
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
