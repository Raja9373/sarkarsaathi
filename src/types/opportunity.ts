import { VerificationMetadata, FreshnessStatus } from './infrastructure';

export type OpportunityStatus = 'OPEN' | 'ACTIVE' | 'UPCOMING' | 'ONGOING' | 'CLOSED' | 'COMPLETED' | 'CANCELLED' | 'SUSPENDED' | 'ARCHIVED' | 'UNKNOWN';

export interface OpportunityRecord {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  description: string;
  opportunityType: string;
  sector: string;
  industry: string;
  authority: string;
  organisation: string;
  state: string;
  city?: string;
  projectStage: string;
  participationType: string;
  investmentRequired?: string;
  projectValue?: string;
  expectedReturns?: string;
  eligibility: string;
  applicationProcess: string;
  openingDate?: string;
  closingDate?: string;
  status: OpportunityStatus;
  
  lastVerifiedAt: string;
  verificationStatus: 'VERIFIED' | 'NEEDS_REVIEW' | 'ARCHIVED';
  
  verificationMetadata?: VerificationMetadata;
  freshness?: FreshnessStatus;

  officialSourceUrl: string;
  sourceAuthority: string;
  sourceType: string;
  sourcePublishedDate?: string;
  effectiveDate?: string;

  relatedInvestmentIds?: string[];
  relatedTenderIds?: string[];
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
}
