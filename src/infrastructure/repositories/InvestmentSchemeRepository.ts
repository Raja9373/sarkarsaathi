import { GovernmentInvestmentSchemeRecord } from '../../types/investmentScheme';

export class MockInvestmentSchemeRepository {
  private schemes: GovernmentInvestmentSchemeRecord[] = [
    {
      id: 'pli-electronics-001',
      schemeName: 'Production Linked Incentive (PLI) Scheme for Large Scale Electronics Manufacturing',
      slug: 'pli-electronics',
      ministry: 'Ministry of Electronics and Information Technology',
      department: 'MeitY',
      implementingAuthority: 'MeitY',
      level: 'Central',
      category: 'Industrial Incentives',
      subCategory: 'Manufacturing',
      investmentPurpose: 'Promote large-scale manufacturing and investment in the electronics sector.',
      targetBeneficiary: 'Electronics manufacturers',
      description: 'The scheme provides financial incentives for incremental sales of goods manufactured in India over a base year.',
      benefits: 'Financial incentives ranging from 4% to 6% on incremental sales.',
      eligibility: 'Companies meeting specific investment and sales thresholds.',
      applicationProcess: 'Online application through the official MeitY portal.',
      documentsRequired: 'Investment proof, audited financial statements, manufacturing unit certificates.',
      officialSourceUrl: 'https://www.meity.gov.in/pli',
      mySchemeUrl: 'https://www.myscheme.gov.in/schemes/pli-electronics',
      status: 'ACTIVE',
      lastVerifiedAt: '2026-09-12',
      verificationStatus: 'VERIFIED',
      sourceAuthority: 'MeitY',
      sourceType: 'Ministry',
    }
  ];

  async getAll(): Promise<GovernmentInvestmentSchemeRecord[]> {
    return this.schemes;
  }

  async getBySlug(slug: string): Promise<GovernmentInvestmentSchemeRecord | null> {
    return this.schemes.find(s => s.slug === slug) || null;
  }
}
