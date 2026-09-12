import { VerificationMetadata, FreshnessStatus } from './infrastructure';

export interface NewsRecord {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  content: string;
  category: 'Investment' | 'Pension' | 'Banking' | 'General' | 'EPFO';
  status: 'PUBLISHED' | 'UPDATED' | 'ARCHIVED';
  publishedAt: string;
  updatedAt?: string;
  sourceAuthority: string;
  sourceUrl: string;
  sourceType: string;
  sourcePublishedDate?: string;
  lastVerifiedAt: string;
  verificationStatus: 'VERIFIED' | 'NEEDS_REVIEW' | 'ARCHIVED';
  
  verificationMetadata?: VerificationMetadata;
  freshness?: FreshnessStatus;
  
  relatedInvestmentIds?: string[];
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
}
