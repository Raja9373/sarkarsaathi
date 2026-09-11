export type TenderStatus = 'OPEN' | 'CLOSED' | 'AWARDED' | 'CANCELLED' | 'CORRIGENDUM' | 'UNKNOWN';
export type VerificationStatus = 'VERIFIED' | 'NEEDS_REVIEW' | 'ARCHIVED';

export interface TenderRecord {
  id: string;
  tenderReferenceNumber: string;
  slug: string;
  title: string;
  description: string;
  issuingAuthority: string;
  department: string;
  organisation: string;
  state: string;
  city?: string;
  tenderCategory: string;
  procurementType: 'Goods' | 'Services' | 'Works' | 'Other';
  estimatedValue?: string;
  emdAmount?: string;
  tenderFee?: string;
  publicationDate: string;
  submissionDeadline: string;
  openingDate?: string;
  status: TenderStatus;
  officialSourceUrl: string;
  sourceAuthority: string;
  sourceType: string;
  sourcePublishedDate?: string;
  lastVerifiedAt: string;
  verificationStatus: VerificationStatus;
  corrigendumInfo?: string;
  eligibilitySummary?: string;
  relatedCategories: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
}
