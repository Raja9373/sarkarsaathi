import { Opportunity, Tender } from '../types';
import { OpportunityLifecycleStatus, TenderLifecycleStatus, VerificationState } from './types';

export function validateOpportunityRecord(record: Partial<Opportunity>): { isValid: boolean; errors: string[]; lifecycleStatus: OpportunityLifecycleStatus; verificationStatus: VerificationState } {
  const errors: string[] = [];

  if (!record.title || typeof record.title !== 'string' || record.title.trim().length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
  }
  if (!record.slug || typeof record.slug !== 'string') {
    errors.push('Slug is required.');
  }
  if (!record.description || typeof record.description !== 'string' || record.description.trim().length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
  }
  if (!record.authority || typeof record.authority !== 'string') {
    errors.push('Authority is required.');
  }
  if (!record.category || typeof record.category !== 'string') {
    errors.push('Category is required.');
  }
  if (!record.sourceUrl || typeof record.sourceUrl !== 'string' || !record.sourceUrl.startsWith('http')) {
    errors.push('Valid sourceUrl starting with http is required.');
  }
  if (!record.sourceAuthority || typeof record.sourceAuthority !== 'string') {
    errors.push('Source Authority is required.');
  }
  if (!record.deadline || typeof record.deadline !== 'string') {
    errors.push('Deadline is required for opportunities.');
  }

  const isValid = errors.length === 0;
  const verificationStatus: VerificationState = isValid ? 'VERIFIED' : 'NEEDS_REVIEW';
  const lifecycleStatus: OpportunityLifecycleStatus = isValid ? 'ACTIVE' : 'NEEDS_REVIEW';

  return { isValid, errors, lifecycleStatus, verificationStatus };
}

export function validateTenderRecord(record: Partial<Tender>): { isValid: boolean; errors: string[]; lifecycleStatus: TenderLifecycleStatus; verificationStatus: VerificationState } {
  const errors: string[] = [];

  if (!record.title || typeof record.title !== 'string' || record.title.trim().length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
  }
  if (!record.slug || typeof record.slug !== 'string') {
    errors.push('Slug is required.');
  }
  if (!record.description || typeof record.description !== 'string' || record.description.trim().length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
  }
  if (!record.authority || typeof record.authority !== 'string') {
    errors.push('Authority is required.');
  }
  if (!record.category || typeof record.category !== 'string') {
    errors.push('Category is required.');
  }
  if (!record.sourceUrl || typeof record.sourceUrl !== 'string' || !record.sourceUrl.startsWith('http')) {
    errors.push('Valid sourceUrl starting with http is required.');
  }
  if (!record.sourceAuthority || typeof record.sourceAuthority !== 'string') {
    errors.push('Source Authority is required.');
  }
  if (!record.tenderValue || typeof record.tenderValue !== 'string') {
    errors.push('Tender value is required.');
  }
  if (!record.submissionDeadline || typeof record.submissionDeadline !== 'string') {
    errors.push('Submission deadline is required for tenders.');
  }
  if (!record.location || typeof record.location !== 'string') {
    errors.push('Location is required for tenders.');
  }

  const isValid = errors.length === 0;
  const verificationStatus: VerificationState = isValid ? 'VERIFIED' : 'NEEDS_REVIEW';
  const lifecycleStatus: TenderLifecycleStatus = isValid ? 'ACTIVE' : 'NEEDS_REVIEW';

  return { isValid, errors, lifecycleStatus, verificationStatus };
}
