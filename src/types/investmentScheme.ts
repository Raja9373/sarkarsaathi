import { VerificationMetadata, FreshnessStatus } from './infrastructure';
import { InvestmentFAQ } from './index';

export type InvestmentSchemeStatus = 'ACTIVE' | 'CLOSED' | 'DISCONTINUED' | 'UPCOMING' | 'NEEDS_REVIEW';

export interface GovernmentInvestmentSchemeRecord {
  id: string;
  schemeName: string;
  slug: string;
  ministry: string;
  department: string;
  implementingAgency: string;
  level: 'Central' | 'State' | 'UT';
  state?: string;
  category: string;
  subCategory?: string;
  shortDescription: string;
  detailedDescription: string;
  
  targetBeneficiary: string;
  eligibility: string;
  eligibleBeneficiaries?: string;
  ageCriteria?: string;
  incomeCriteria?: string;
  businessCriteria?: string;
  
  benefits: string; // Legacy field
  keyBenefits?: string[];
  benefitAmount?: string;
  benefitType?: string;
  
  minimumInvestment?: string;
  maximumInvestment?: string;
  subsidy?: string;
  incentive?: string;
  contribution?: string;
  tenure?: string;
  lockIn?: string;
  withdrawalRules?: string;
  
  applicationProcess: string;
  documentsRequired: string;
  applicationUrl?: string;
  
  officialSourceUrl: string;
  mySchemeUrl?: string;
  sourceType: 'myScheme' | 'Ministry' | 'Department' | 'StatePortal';
  
  status: InvestmentSchemeStatus;
  statusNote?: string;
  availabilityNote?: string;
  
  lastVerifiedAt: string;
  verificationStatus: 'VERIFIED' | 'NEEDS_REVIEW' | 'ARCHIVED';
  
  faqItems?: InvestmentFAQ[];
  seoTitle?: string;
  seoDescription?: string;
  primaryKeywords?: string[];
  secondaryKeywords?: string[];

  // Relations
  relatedInvestmentProductIds?: string[];
  relatedOpportunityIds?: string[];
  relatedTenderIds?: string[];
}
