import { Opportunity, Tender } from '../types';
import { OpportunityLifecycleStatus, TenderLifecycleStatus, VerificationState } from './types';

export function validateOpportunityRecord(record: Partial<Opportunity>): {
  isValid: boolean;
  errors: string[];
  fieldErrors: Array<{ field: string; reason: string }>;
  lifecycleStatus: OpportunityLifecycleStatus;
  verificationStatus: VerificationState;
} {
  const errors: string[] = [];
  const fieldErrors: Array<{ field: string; reason: string }> = [];

  // 1. Require Project ID
  if (!record.projectId || typeof record.projectId !== 'string' || record.projectId.trim().length === 0) {
    errors.push('Project ID is required.');
    fieldErrors.push({ field: 'projectId', reason: 'Project ID is required.' });
  }

  // 2. Validate title
  if (!record.title || typeof record.title !== 'string' || record.title.trim().length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
    fieldErrors.push({ field: 'title', reason: 'Title is missing or too short (min 3 chars).' });
  }

  // 3. Description
  if (!record.description || typeof record.description !== 'string' || record.description.trim().length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
    fieldErrors.push({ field: 'description', reason: 'Description is missing or too short (min 10 chars).' });
  }

  // 4. Authority
  if (!record.authority || typeof record.authority !== 'string' || record.authority.trim().length === 0) {
    errors.push('Authority is required.');
    fieldErrors.push({ field: 'authority', reason: 'Authority is required.' });
  }

  // 5. Category (Optional / Defaultable)
  if (record.category && (typeof record.category !== 'string' || record.category.trim().length === 0)) {
    errors.push('Category must be a non-empty string if provided.');
    fieldErrors.push({ field: 'category', reason: 'Category must be a non-empty string if provided.' });
  }

  // 6. Require sourceName / sourceAuthority
  const sourceName = record.sourceAuthority || (record as any).sourceName || record.authority;
  if (!sourceName || typeof sourceName !== 'string' || sourceName.trim().length === 0) {
    errors.push('sourceName (source authority) is required.');
    fieldErrors.push({ field: 'sourceAuthority', reason: 'sourceAuthority is required.' });
  }

  // 7. Require sourceUrl
  if (!record.sourceUrl || typeof record.sourceUrl !== 'string' || !record.sourceUrl.trim().startsWith('http')) {
    errors.push('Valid sourceUrl starting with http:// or https:// is required.');
    fieldErrors.push({ field: 'sourceUrl', reason: 'Valid sourceUrl starting with http:// or https:// is required.' });
  }

  // 8. Deadline (Optional for ongoing infrastructure / investment opportunities)
  if (record.deadline && (typeof record.deadline !== 'string' || record.deadline.trim().length === 0)) {
    errors.push('Deadline must be a non-empty string if provided.');
    fieldErrors.push({ field: 'deadline', reason: 'Deadline must be a non-empty string if provided.' });
  }

  const isValid = errors.length === 0;
  const verificationStatus: VerificationState = isValid ? 'VERIFIED' : 'NEEDS_REVIEW';
  const lifecycleStatus: OpportunityLifecycleStatus = isValid ? 'ACTIVE' : 'NEEDS_REVIEW';

  return { isValid, errors, fieldErrors, lifecycleStatus, verificationStatus };
}

export function validateTenderRecord(record: Partial<Tender>): {
  isValid: boolean;
  errors: string[];
  fieldErrors: Array<{ field: string; reason: string }>;
  lifecycleStatus: TenderLifecycleStatus;
  verificationStatus: VerificationState;
} {
  const errors: string[] = [];
  const fieldErrors: Array<{ field: string; reason: string }> = [];

  // 1. Require stable tender/reference identifier
  const refId = record.id || (record as any).tenderId || (record as any).referenceId || (record as any).tenderRefNumber;
  if (!refId || typeof refId !== 'string' || refId.trim().length === 0) {
    errors.push('Stable tender/reference identifier (id/tenderId/referenceId) is required.');
    fieldErrors.push({ field: 'id', reason: 'Stable tender/reference identifier is required.' });
  }

  // 2. Validate title
  if (!record.title || typeof record.title !== 'string' || record.title.trim().length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
    fieldErrors.push({ field: 'title', reason: 'Title is missing or too short (min 3 chars).' });
  }

  // 3. Description
  if (!record.description || typeof record.description !== 'string' || record.description.trim().length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
    fieldErrors.push({ field: 'description', reason: 'Description is missing or too short (min 10 chars).' });
  }

  // 4. Authority
  if (!record.authority || typeof record.authority !== 'string' || record.authority.trim().length === 0) {
    errors.push('Authority is required.');
    fieldErrors.push({ field: 'authority', reason: 'Authority is required.' });
  }

  // 5. Category
  if (!record.category || typeof record.category !== 'string' || record.category.trim().length === 0) {
    errors.push('Category is required.');
    fieldErrors.push({ field: 'category', reason: 'Category is required.' });
  }

  // 6. Require sourceName / sourceAuthority
  const sourceName = record.sourceAuthority || (record as any).sourceName;
  if (!sourceName || typeof sourceName !== 'string' || sourceName.trim().length === 0) {
    errors.push('sourceName (source authority) is required.');
    fieldErrors.push({ field: 'sourceAuthority', reason: 'sourceAuthority is required.' });
  }

  // 7. Require sourceUrl
  if (!record.sourceUrl || typeof record.sourceUrl !== 'string' || !record.sourceUrl.trim().startsWith('http')) {
    errors.push('Valid sourceUrl starting with http:// or https:// is required.');
    fieldErrors.push({ field: 'sourceUrl', reason: 'Valid sourceUrl starting with http:// or https:// is required.' });
  }

  // 8. Tender Value
  if (!record.tenderValue || typeof record.tenderValue !== 'string' || record.tenderValue.trim().length === 0) {
    errors.push('Tender value is required.');
    fieldErrors.push({ field: 'tenderValue', reason: 'Tender value is required.' });
  }

  // 9. Submission Deadline
  if (!record.submissionDeadline || typeof record.submissionDeadline !== 'string' || record.submissionDeadline.trim().length === 0) {
    errors.push('Submission deadline is required for tenders.');
    fieldErrors.push({ field: 'submissionDeadline', reason: 'Submission deadline is required for tenders.' });
  }

  // 10. Location
  if (!record.location || typeof record.location !== 'string' || record.location.trim().length === 0) {
    errors.push('Location is required for tenders.');
    fieldErrors.push({ field: 'location', reason: 'Location is required for tenders.' });
  }

  const isValid = errors.length === 0;
  const verificationStatus: VerificationState = isValid ? 'VERIFIED' : 'NEEDS_REVIEW';
  const lifecycleStatus: TenderLifecycleStatus = isValid ? 'ACTIVE' : 'NEEDS_REVIEW';

  return { isValid, errors, fieldErrors, lifecycleStatus, verificationStatus };
}

import { Subsidy } from '../types';

export function validateSubsidyRecord(record: Partial<Subsidy>): {
  isValid: boolean;
  errors: string[];
  fieldErrors: Array<{ field: string; reason: string }>;
  publicationState: 'PUBLISHED' | 'QUARANTINED' | 'DRAFT';
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  authenticityClassification: 'SOURCE_VERIFIED' | 'PARTIALLY_SUPPORTED' | 'GENERIC_OR_SYNTHETIC_SUSPECTED' | 'SOURCE_MISSING';
  editorialReviewStatus: 'APPROVED' | 'PENDING_REVIEW' | 'REQUIRES_OFFICIAL_EVIDENCE';
} {
  const errors: string[] = [];
  const fieldErrors: Array<{ field: string; reason: string }> = [];

  // 1. Title validation
  const title = String(record.title || '').trim();
  if (!title || title.length < 3) {
    errors.push('Title is missing or too short (min 3 chars).');
    fieldErrors.push({ field: 'title', reason: 'Title is missing or too short.' });
  }

  // Anti-synthetic check: reject/quarantine generic synthetic titles
  const isSynthetic = 
    /Verified Government Subsidy & Assistance Scheme #\d+/i.test(title) ||
    /Government Subsidy & Incentive Scheme #\d+/i.test(title) ||
    /Government Subsidy & Benefit Scheme #\d+/i.test(title) ||
    /\b(dummy|placeholder|sample scheme|test subsidy)\b/i.test(title);

  if (isSynthetic) {
    errors.push('Title contains generic synthetic pattern without verified statutory scheme name.');
    fieldErrors.push({ field: 'title', reason: 'Generic synthetic scheme title detected.' });
  }

  // 2. Authority / Ministry
  const authority = String(record.authority || record.ministry || record.department || '').trim();
  if (!authority) {
    errors.push('Issuing authority, ministry, or department is required.');
    fieldErrors.push({ field: 'authority', reason: 'Authority or ministry is required.' });
  }

  // 3. Official Source URL
  const sourceUrl = String(record.officialSourceUrl || record.sourceUrl || '').trim();
  const isValidUrl = sourceUrl.startsWith('http://') || sourceUrl.startsWith('https://');
  if (!sourceUrl || !isValidUrl) {
    errors.push('Valid official source URL starting with http:// or https:// is required.');
    fieldErrors.push({ field: 'officialSourceUrl', reason: 'Valid source URL is required.' });
  }

  // Controlled, auditable official government and statutory institution domain verification
  const VERIFIED_STATUTORY_DOMAINS = [
    'gov.in',
    'nic.in',
    'ac.in',
    'res.in',
    'org.in',
    'standupmitra.in',
    'cgtmse.in',
    'pfrda.org.in',
    'rbi.org.in',
    'sidbi.in',
    'nabard.org',
    'nhb.org.in',
    'startupindia.gov.in',
    'investindia.gov.in',
    'apprenticeshipindia.gov.in',
    'dbtbharat.gov.in',
    'myscheme.gov.in',
    'alimpco.in',
    'nikshay.in',
    'udyamimitra.in'
  ];

  let isOfficialGovDomain = false;
  try {
    const parsed = new URL(sourceUrl.startsWith('http') ? sourceUrl : `https://${sourceUrl}`);
    const host = parsed.hostname.toLowerCase();
    isOfficialGovDomain = VERIFIED_STATUTORY_DOMAINS.some(d => host === d || host.endsWith('.' + d));
  } catch {
    isOfficialGovDomain = false;
  }

  if (!isOfficialGovDomain) {
    errors.push('Official source URL must resolve to a recognized .gov.in, .nic.in, or verified statutory portal domain.');
    fieldErrors.push({ field: 'officialSourceUrl', reason: 'Unrecognized or non-statutory source domain.' });
  }

  // 4. Description
  const description = String(record.description || record.shortDescription || '').trim();
  if (!description || description.length < 10) {
    errors.push('Description is missing or too short (min 10 chars).');
    fieldErrors.push({ field: 'description', reason: 'Description is missing or too short.' });
  }

  // 5. Benefits and Eligibility
  const benefits = String(record.benefits || '').trim();
  const eligibility = String(record.eligibility || '').trim();
  if (!benefits && !eligibility) {
    errors.push('Benefits or eligibility information must be provided.');
    fieldErrors.push({ field: 'benefits', reason: 'Benefits or eligibility is required.' });
  }

  const isValid = errors.length === 0;

  if (isValid && isOfficialGovDomain && !isSynthetic) {
    return {
      isValid: true,
      errors: [],
      fieldErrors: [],
      publicationState: 'PUBLISHED',
      verificationStatus: 'VERIFIED',
      authenticityClassification: 'SOURCE_VERIFIED',
      editorialReviewStatus: 'APPROVED'
    };
  }

  // Safe quarantine for unverified, synthetic, or incomplete records
  return {
    isValid: false,
    errors,
    fieldErrors,
    publicationState: 'QUARANTINED',
    verificationStatus: 'UNVERIFIED',
    authenticityClassification: isSynthetic ? 'GENERIC_OR_SYNTHETIC_SUSPECTED' : (!sourceUrl ? 'SOURCE_MISSING' : 'PARTIALLY_SUPPORTED'),
    editorialReviewStatus: 'REQUIRES_OFFICIAL_EVIDENCE'
  };
}

export const validateOpportunityData = validateOpportunityRecord;
export const validateTenderData = validateTenderRecord;
export const validateSubsidyData = validateSubsidyRecord;
