import { VerificationMetadata, FreshnessStatus } from './infrastructure';

export type TenderStatus = 'ACTIVE' | 'CLOSING_SOON' | 'CLOSED' | 'CANCELLED' | 'RETENDERED' | 'AWARDED' | 'ARCHIVED' | 'UNKNOWN';
export type VerificationStatus = 'VERIFIED' | 'NEEDS_REVIEW' | 'ARCHIVED';

export interface TenderRecord {
  id: string;
  tenderId: string; // Unique ID from source
  referenceNumber: string; // Official reference
  slug: string;
  title: string;
  description: string;
  
  // Organisation / Authority
  organisation: string;
  department: string;
  issuingAuthority: string;
  
  // Location
  state: string;
  district?: string;
  city?: string;
  pincode?: string;
  
  // Category / Work
  tenderCategory: string; // E.g., 'Goods', 'Works', 'Services'
  procurementCategory: string; // Detailed category
  workType?: string;
  formOfContract?: string;
  
  // Financials
  estimatedValue?: string; // Original currency string
  tenderFee?: string;
  emdAmount?: string;
  
  // Dates
  publishDate: string; // ISO Date
  submissionDeadline: string; // ISO Date
  bidOpeningDate?: string; // ISO Date
  
  // Status
  status: TenderStatus;
  corrigendumAvailable: boolean;
  corrigendumCount: number;
  awardStatus?: string;
  
  // Source
  sourceName: string; // E.g., 'CPPP', 'State Portal X'
  sourceUrl: string; // Direct link to tender
  sourcePortal: string; // Portal hostname
  officialTenderUrl?: string; // Deep link if different
  
  // Verification
  lastVerifiedAt: string; // ISO Timestamp
  verificationStatus: VerificationStatus;
  verificationMetadata?: VerificationMetadata;
  freshness?: FreshnessStatus;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
}
