export type VerificationStatus = 'VERIFIED' | 'NEEDS_REVIEW' | 'UNVERIFIED' | 'OUTDATED';
export type FreshnessStatus = 'FRESH' | 'DUE_FOR_REVIEW' | 'STALE' | 'UNKNOWN';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface FilterParams {
  [key: string]: any;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ImportResult<T> {
  sourceType: 'OPPORTUNITY' | 'TENDER';
  filename: string;
  recordsRead: number;
  recordsParsed: number;
  recordsValid: number;
  recordsInvalid: number;
  duplicatesDetected: number;
  recordsStaged: number;
  recordsApproved: number;
  recordsCommitted: number;
  rejectedRecords: { record: Partial<T>, reason: string }[];
  validationErrors: { recordId: string, error: string }[];
  duplicateReasons: { recordId: string, reason: string }[];
}

export interface IStagingRepository<T> {
  stage(data: T[]): Promise<void>;
  getPending(): Promise<T[]>;
  approve(recordId: string): Promise<void>;
  reject(recordId: string): Promise<void>;
  commitApproved(): Promise<void>;
}

export interface VerificationMetadata {
  sourceId: string;
  sourceUrl: string;
  authority: string;
  verificationStatus: VerificationStatus;
  lastVerified: string; // ISO Date
  publishedAt?: string;
  effectiveFrom?: string;
  effectiveTo?: string;
  verificationNote?: string;
  verifiedByType?: 'MANUAL' | 'AUTOMATED' | 'OFFICIAL_SOURCE';
  confidence?: number; // 0-1
}

export interface DataChangeRecord {
  recordId: string;
  entityType: 'INVESTMENT' | 'SCHEME' | 'OPPORTUNITY' | 'TENDER' | 'NEWS';
  entityId: string;
  changedField: string;
  previousValue: any;
  newValue: any;
  sourceId: string;
  detectedAt: string;
  reason: string;
  verificationStatus: VerificationStatus;
}

export interface IOfficialDataSource {
  sourceId: string;
  fetchData(): Promise<any>;
  validate(data: any): boolean;
  compare(existing: any, incoming: any): any[];
}

/**
 * SOURCE PRIORITY
 * 1. Official Government Ministry/Department
 * 2. Official Government Portal
 * 3. Official Regulator
 * 4. Official Government Investment/Procurement Portal
 * 5. Official PSU/Statutory Authority
 * 6. Other authoritative source
 */

/**
 * UPDATE POLICY
 * Investments: Quarterly or As Needed
 * Schemes: Monthly or As Needed
 * Tenders: Weekly
 * Opportunities: Monthly
 * News: As Needed
 */
