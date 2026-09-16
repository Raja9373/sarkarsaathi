import { Opportunity, Tender } from '../types';

export type OpportunityLifecycleStatus = 'ACTIVE' | 'UPCOMING' | 'CLOSED' | 'EXPIRED' | 'NEEDS_REVIEW';
export type TenderLifecycleStatus = 'ACTIVE' | 'UPCOMING' | 'CLOSED' | 'CANCELLED' | 'EXTENDED' | 'NEEDS_REVIEW';
export type VerificationState = 'VERIFIED' | 'PENDING' | 'REJECTED' | 'NEEDS_REVIEW';

export type SourceAccessType = 'API' | 'DOWNLOAD' | 'MANUAL_EXPORT' | 'ADMIN_UPLOAD' | 'UNKNOWN';
export type SourceVerificationStatus = 'VERIFIED' | 'UNVERIFIED' | 'NOT_AVAILABLE';
export type SourceCatalogueType = 'OPPORTUNITIES' | 'TENDERS' | 'BOTH';

export interface VerifiedSource {
  sourceId: string;
  sourceName: string;
  authority: string;
  catalogueType: SourceCatalogueType;
  officialUrl: string;
  accessType: SourceAccessType;
  verificationStatus: SourceVerificationStatus;
  notes: string;
  lastVerified: string;
  enabled?: boolean;
  updateMethod?: string;
  lastChecked?: string;
  lastSuccessfulFetch?: string;
  lastChangeDetected?: string;
  status?: string;
}

export interface IngestionProvenance {
  sourceSystem: string;
  importedAt: string;
  batchId: string;
  rawRecordHash: string;
  verifiedBy?: string;
  confidenceScore: number; // 0 to 1
  sourceId?: string;
  sourceName?: string;
  authority?: string;
  officialUrl?: string;
  accessType?: SourceAccessType;
  verificationStatus?: SourceVerificationStatus;
}

export type ReviewStatus = 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED';

export interface StagedOpportunity extends Opportunity {
  lifecycleStatus: OpportunityLifecycleStatus;
  provenance: IngestionProvenance;
  validationErrors?: string[];
  reviewStatus?: ReviewStatus;
  rejectionReason?: string;
  reviewedAt?: string;
  isDuplicate?: boolean;
  duplicateReason?: string;
}

export interface StagedTender extends Tender {
  lifecycleStatus: TenderLifecycleStatus;
  provenance: IngestionProvenance;
  validationErrors?: string[];
  reviewStatus?: ReviewStatus;
  rejectionReason?: string;
  reviewedAt?: string;
  isDuplicate?: boolean;
  duplicateReason?: string;
}

export interface ImportErrorDetail {
  index: number;
  field?: string;
  reason?: string;
  message: string;
  title?: string;
  referenceId?: string;
}

export interface PreImportSummary {
  totalInput: number;
  validRecords: number;
  invalidRecords: number;
  duplicateRecords: number;
  newRecords: number;
  requiringReview: number;
  errors: ImportErrorDetail[];
}

export interface ImportJobHistory {
  id: string;
  timestamp: string;
  targetCatalogue: 'Opportunities' | 'Tenders';
  sourceId?: string;
  sourceName: string;
  sourceUrl?: string;
  accessType?: SourceAccessType;
  inputCount: number;
  validCount: number;
  duplicateCount: number;
  stagedCount: number;
  publishedCount: number;
  status: 'STAGED' | 'PUBLISHED' | 'PARTIAL' | 'FAILED';
}

export interface BatchImportRequest<T> {
  batchId: string;
  sourceSystem: string;
  sourceId?: string;
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
  errors: ImportErrorDetail[];
}

export interface CatalogQueryOptions {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  lifecycleStatus?: string;
  verificationStatus?: string;
  authority?: string;
  state?: string;
  sector?: string;
  type?: string;
  status?: string;
  source?: string;
  sortBy?: 'title' | 'date' | 'value' | 'cost' | 'id';
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type QueueJobStatus = 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

export interface QueueJobItem {
  id: string; // Unique job ID (e.g. JOB-...)
  file: File;
  fileName: string;
  fileSize: number;
  targetCatalogue: 'Opportunities' | 'Tenders';
  sourceId: string;
  sourceName: string;
  sourceAuthority: string;
  sourceUrl: string;
  accessType?: SourceAccessType;
  verificationStatus?: SourceVerificationStatus;
  status: QueueJobStatus;
  recordCount?: number;
  processedCount: number;
  newStagedCount: number;
  duplicateCount: number;
  invalidCount: number;
  failureReason?: string;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  errors?: ImportErrorDetail[];
}

export interface QueueDashboardStats {
  queued: number;
  processing: number;
  completed: number;
  failed: number;
  cancelled: number;
  totalRecordsProcessed: number;
  totalNewStaged: number;
  totalDuplicate: number;
  totalInvalid: number;
}

export interface UpdateLogEntry {
  id: string;
  sourceId: string;
  sourceName: string;
  checkTime: string;
  status: 'SUCCESS' | 'FAILED' | 'SKIPPED' | 'NO_CHANGE';
  recordsDetected: number;
  recordsStaged: number;
  duplicates: number;
  validationFailures: number;
  errorMessage?: string;
  sourceUrl: string;
  checksumHash?: string;
}

