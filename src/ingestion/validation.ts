import { Opportunity, Tender } from '../types';
import { OpportunityLifecycleStatus, TenderLifecycleStatus, VerificationState } from './types';

export function validateOpportunityRecord(record: Partial<Opportunity>): {
  isValid: boolean;
  errors: string[];
  lifecycleStatus: OpportunityLifecycleStatus;
  verificationStatus: VerificationState;
} {
  const errors: string[] = [];

  // 1. Require Project ID
  if (!record.projectId || typeof record.projectId !== 'string' || record.projectId.trim().length === 0) {
    errors.push('Project ID is required.');
  }

  // 2. Validate title
  if (!record.title || typeof record.title !== 'string' || record.title.trim().length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
  }

  // 3. Description
  if (!record.description || typeof record.description !== 'string' || record.description.trim().length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
  }

  // 4. Authority
  if (!record.authority || typeof record.authority !== 'string' || record.authority.trim().length === 0) {
    errors.push('Authority is required.');
  }

  // 5. Category
  if (!record.category || typeof record.category !== 'string' || record.category.trim().length === 0) {
    errors.push('Category is required.');
  }

  // 6. Require sourceName / sourceAuthority
  const sourceName = record.sourceAuthority || (record as any).sourceName;
  if (!sourceName || typeof sourceName !== 'string' || sourceName.trim().length === 0) {
    errors.push('sourceName (source authority) is required.');
  }

  // 7. Require sourceUrl
  if (!record.sourceUrl || typeof record.sourceUrl !== 'string' || !record.sourceUrl.trim().startsWith('http')) {
    errors.push('Valid sourceUrl starting with http:// or https:// is required.');
  }

  // 8. Deadline
  if (!record.deadline || typeof record.deadline !== 'string' || record.deadline.trim().length === 0) {
    errors.push('Deadline is required for opportunities.');
  }

  const isValid = errors.length === 0;
  const verificationStatus: VerificationState = isValid ? 'VERIFIED' : 'NEEDS_REVIEW';
  const lifecycleStatus: OpportunityLifecycleStatus = isValid ? 'ACTIVE' : 'NEEDS_REVIEW';

  return { isValid, errors, lifecycleStatus, verificationStatus };
}

export function validateTenderRecord(record: Partial<Tender>): {
  isValid: boolean;
  errors: string[];
  lifecycleStatus: TenderLifecycleStatus;
  verificationStatus: VerificationState;
} {
  const errors: string[] = [];

  // 1. Require stable tender/reference identifier
  const refId = record.id || (record as any).tenderId || (record as any).referenceId || (record as any).tenderRefNumber;
  if (!refId || typeof refId !== 'string' || refId.trim().length === 0) {
    errors.push('Stable tender/reference identifier (id/tenderId/referenceId) is required.');
  }

  // 2. Validate title
  if (!record.title || typeof record.title !== 'string' || record.title.trim().length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
  }

  // 3. Description
  if (!record.description || typeof record.description !== 'string' || record.description.trim().length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
  }

  // 4. Authority
  if (!record.authority || typeof record.authority !== 'string' || record.authority.trim().length === 0) {
    errors.push('Authority is required.');
  }

  // 5. Category
  if (!record.category || typeof record.category !== 'string' || record.category.trim().length === 0) {
    errors.push('Category is required.');
  }

  // 6. Require sourceName / sourceAuthority
  const sourceName = record.sourceAuthority || (record as any).sourceName;
  if (!sourceName || typeof sourceName !== 'string' || sourceName.trim().length === 0) {
    errors.push('sourceName (source authority) is required.');
  }

  // 7. Require sourceUrl
  if (!record.sourceUrl || typeof record.sourceUrl !== 'string' || !record.sourceUrl.trim().startsWith('http')) {
    errors.push('Valid sourceUrl starting with http:// or https:// is required.');
  }

  // 8. Tender Value
  if (!record.tenderValue || typeof record.tenderValue !== 'string' || record.tenderValue.trim().length === 0) {
    errors.push('Tender value is required.');
  }

  // 9. Submission Deadline
  if (!record.submissionDeadline || typeof record.submissionDeadline !== 'string' || record.submissionDeadline.trim().length === 0) {
    errors.push('Submission deadline is required for tenders.');
  }

  // 10. Location
  if (!record.location || typeof record.location !== 'string' || record.location.trim().length === 0) {
    errors.push('Location is required for tenders.');
  }

  const isValid = errors.length === 0;
  const verificationStatus: VerificationState = isValid ? 'VERIFIED' : 'NEEDS_REVIEW';
  const lifecycleStatus: TenderLifecycleStatus = isValid ? 'ACTIVE' : 'NEEDS_REVIEW';

  return { isValid, errors, lifecycleStatus, verificationStatus };
}
