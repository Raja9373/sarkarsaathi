import { VerificationStatus, FreshnessStatus } from '../types/infrastructure';

export interface DataQualityReport {
  recordId: string;
  needsReview: boolean;
  dueForReview: boolean;
  stale: boolean;
  missingProvenance: boolean;
  missingOfficialUrl: boolean;
}

export function checkDataQuality(
  recordId: string,
  verificationStatus: VerificationStatus,
  freshness: FreshnessStatus,
  provenancePresent: boolean,
  officialUrlPresent: boolean
): DataQualityReport {
  return {
    recordId,
    needsReview: verificationStatus === 'NEEDS_REVIEW',
    dueForReview: freshness === 'DUE_FOR_REVIEW',
    stale: freshness === 'STALE',
    missingProvenance: !provenancePresent,
    missingOfficialUrl: !officialUrlPresent,
  };
}
