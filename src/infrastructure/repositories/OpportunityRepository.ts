import { OpportunityRecord } from '../../types/opportunity';
import { PaginationParams, FilterParams, PaginatedResponse } from '../../types/infrastructure';

export interface IOpportunityRepository {
  getAll(): Promise<OpportunityRecord[]>;
  getPaginated(params: PaginationParams, filters?: FilterParams): Promise<PaginatedResponse<OpportunityRecord>>;
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
  },
  {
    id: 'pli-semiconductor-design-001',
    slug: 'pli-semiconductor-design-opportunity',
    title: 'PLI Scheme for Semiconductor Design',
    shortSummary: 'Support for semiconductor design-linked manufacturing.',
    description: 'Government incentives for semiconductor design-linked manufacturing and deployment.',
    opportunityType: 'Investment Opportunity',
    sector: 'Electronics',
    industry: 'Semiconductors',
    authority: 'Ministry of Electronics and Information Technology (MeitY)',
    organisation: 'DPIIT / MeitY',
    state: 'Pan-India',
    projectStage: 'Operational',
    participationType: 'Investment',
    eligibility: 'Manufacturing entities complying with MeitY guidelines',
    applicationProcess: 'MeitY official portal',
    status: 'ACTIVE',
    officialSourceUrl: 'https://www.meity.gov.in',
    sourceAuthority: 'MeitY',
    sourceType: 'Government Portal',
    lastVerifiedAt: '2026-09-13',
    verificationStatus: 'VERIFIED',
    tags: ['Semiconductor', 'PLI', 'Design'],
    seoTitle: 'PLI Scheme for Semiconductor Design | SarkarSaathi',
    seoDescription: 'Explore investment opportunities in Semiconductor Design under PLI schemes.',
    canonicalUrl: 'https://www.sarkarsaathi.org/opportunities/pli-semiconductor-design-opportunity'
  },
  {
    id: 'nlp-logistics-park-001',
    slug: 'national-logistics-policy-logistics-park',
    title: 'National Logistics Policy: Logistics Park Development',
    shortSummary: 'Opportunities for developing multi-modal logistics parks.',
    description: 'Infrastructure opportunities for multi-modal logistics parks under the National Logistics Policy.',
    opportunityType: 'Infrastructure Opportunity',
    sector: 'Logistics',
    industry: 'Infrastructure / Logistics',
    authority: 'Ministry of Road Transport and Highways (MoRTH)',
    organisation: 'National Logistics Policy (NLP) Cell',
    state: 'Pan-India',
    projectStage: 'Implementation',
    participationType: 'PPP / Investment',
    eligibility: 'Infrastructure developers',
    applicationProcess: 'MoRTH and NLP portals',
    status: 'ACTIVE',
    officialSourceUrl: 'https://logistics.gov.in',
    sourceAuthority: 'MoRTH',
    sourceType: 'Government Portal',
    lastVerifiedAt: '2026-09-13',
    verificationStatus: 'VERIFIED',
    tags: ['Logistics', 'Infrastructure', 'NLP'],
    seoTitle: 'National Logistics Policy: Logistics Park Development | SarkarSaathi',
    seoDescription: 'Explore opportunities for Logistics Park development under National Logistics Policy.',
    canonicalUrl: 'https://www.sarkarsaathi.org/opportunities/national-logistics-policy-logistics-park'
  },
  {
    id: 'pm-gati-shakti-infra-001',
    slug: 'pm-gati-shakti-integrated-infrastructure',
    title: 'PM Gati Shakti: Integrated Infrastructure Development',
    shortSummary: 'Investment in integrated infrastructure projects.',
    description: 'Opportunities for private sector investment in projects aligned with PM Gati Shakti National Master Plan.',
    opportunityType: 'Infrastructure Opportunity',
    sector: 'Infrastructure',
    industry: 'Integrated Infrastructure',
    authority: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    organisation: 'DPIIT',
    state: 'Pan-India',
    projectStage: 'Conceptualization',
    participationType: 'Investment / Partnership',
    eligibility: 'Infrastructure development firms',
    applicationProcess: 'Gati Shakti portal and DPIIT',
    status: 'ACTIVE',
    officialSourceUrl: 'https://gati-shakti.gov.in',
    sourceAuthority: 'DPIIT',
    sourceType: 'Government Portal',
    lastVerifiedAt: '2026-09-13',
    verificationStatus: 'VERIFIED',
    tags: ['Infrastructure', 'Gati Shakti', 'Investment'],
    seoTitle: 'PM Gati Shakti: Integrated Infrastructure Development | SarkarSaathi',
    seoDescription: 'Explore opportunities in integrated infrastructure under PM Gati Shakti.',
    canonicalUrl: 'https://www.sarkarsaathi.org/opportunities/pm-gati-shakti-integrated-infrastructure'
  }

];

export class MockOpportunityRepository implements IOpportunityRepository {
  async getAll(): Promise<OpportunityRecord[]> {
    return MOCK_OPPORTUNITIES;
  }
  async getPaginated(params: PaginationParams, filters?: FilterParams): Promise<PaginatedResponse<OpportunityRecord>> {
    return { data: MOCK_OPPORTUNITIES, total: MOCK_OPPORTUNITIES.length, page: params.page, limit: params.limit };
  }
  async getBySlug(slug: string): Promise<OpportunityRecord | null> {
    return MOCK_OPPORTUNITIES.find(o => o.slug === slug) || null;
  }
}
