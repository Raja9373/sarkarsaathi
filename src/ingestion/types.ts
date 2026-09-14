import { Opportunity, Tender } from '../types';

export type OpportunityLifecycleStatus = 'ACTIVE' | 'UPCOMING' | 'CLOSED' | 'EXPIRED' | 'NEEDS_REVIEW';
export type TenderLifecycleStatus = 'ACTIVE' | 'UPCOMING' | 'CLOSED' | 'CANCELLED' | 'EXTENDED' | 'NEEDS_REVIEW';
export type VerificationState = 'VERIFIED' | 'PENDING' | 'REJECTED' | 'NEEDS_REVIEW';

export interface IngestionProvenance {
  sourceSystem: string;
  importedAt: string;
  batchId: string;
  rawRecordHash: string;
  verifiedBy?: string;
  confidenceScore: number; // 0 to 1
}

export interface StagedOpportunity extends Opportunity {
  lifecycleStatus: OpportunityLifecycleStatus;
  provenance: IngestionProvenance;
  validationErrors?: string[];
}

export interface StagedTender extends Tender {
  lifecycleStatus: TenderLifecycleStatus;
  provenance: IngestionProvenance;
  validationErrors?: string[];
}

export interface BatchImportRequest<T> {
  batchId: string;
  sourceSystem: string;
  records: T[];
  autoApproveVerified?: boolean;
}

export interface BatchImportResult {
  batchId: string;
  totalReceived: number;
  successfullyStaged: number;
  autoApproved: number;
  duplicatesDetected: number;
  validationFailed: number;
  errors: Array<{ index: number; message: string; title?: string }>;
}

export interface CatalogQueryOptions {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  lifecycleStatus?: string;
  verificationStatus?: string;
  authority?: string;
  sortBy?: 'title' | 'date' | 'value';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
