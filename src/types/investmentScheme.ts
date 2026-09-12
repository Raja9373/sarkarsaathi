import { VerificationMetadata, FreshnessStatus } from './infrastructure';
import { InvestmentFAQ } from './index';

export type InvestmentSchemeStatus = 'ACTIVE' | 'ARCHIVED' | 'UNKNOWN';

export interface GovernmentInvestmentSchemeRecord {
  id: string;
  schemeName: string;
  slug: string;
  ministry: string;
  department: string;
  implementingAuthority: string;
  level: 'Central' | 'State' | 'UT';
  state?: string;
  category: string;
  subCategory?: string;
  investmentPurpose: string; // The reason it qualifies as investment-related
  targetBeneficiary: string;
  description: string;
  benefits: string;
  eligibility: string;
  applicationProcess: string;
  documentsRequired: string;
  officialApplicationUrl?: string;
  officialSourceUrl: string;
  mySchemeUrl?: string;
  status: InvestmentSchemeStatus;
  publishedDate?: string;
  lastUpdatedDate?: string;
  
  lastVerifiedAt: string;
  verificationStatus: 'VERIFIED' | 'NEEDS_REVIEW' | 'ARCHIVED';
  
  sourceAuthority: string;
  sourceType: 'myScheme' | 'Ministry' | 'Department' | 'StatePortal';
  
  verificationMetadata?: VerificationMetadata;
  freshness?: FreshnessStatus;

  keyBenefits?: string[];
  availabilityNote?: string;
  statusNote?: string;
  faqItems?: InvestmentFAQ[];
  seoTitle?: string;
  seoDescription?: string;
  primaryKeywords?: string[];
  secondaryKeywords?: string[];

  // Relations
  relatedInvestmentProductIds?: string[];
  relatedOpportunityIds?: string[];
  relatedProjectIds?: string[];
  relatedTenderIds?: string[];
}
