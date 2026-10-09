import * as fs from 'fs';
import * as path from 'path';

export interface QuestionCandidate {
  candidate_id: string;
  original_question_wording: string;
  proposed_canonical_intent: string;
  category: string;
  subcategory: string;
  discovery_source: string;
  discovery_date: string;
  source_url: string;
  source_type: string;
  supporting_evidence_excerpt: string;
  existing_related_question_id?: string | null;
  proposed_language?: string;
  alternate_phrasings?: string[];
  review_status: string;
  reviewer_notes?: string;
}

export interface ValidationIssue {
  candidate_id: string;
  severity: 'ERROR' | 'WARNING';
  field: string;
  message: string;
}

export interface CandidateClassification {
  candidate_id: string;
  status: 'VALID_INTAKE' | 'DUPLICATE_CANDIDATE' | 'NEEDS_RESEARCH' | 'NEEDS_HUMAN_REVIEW' | 'READY_FOR_EDITORIAL_VERIFICATION' | 'REJECTED';
  rationale: string;
  matched_existing_id?: string;
  similarity_score?: number;
}

export interface IntakeValidationReport {
  timestamp: string;
  total_candidates: number;
  valid_intake_count: number;
  error_count: number;
  warning_count: number;
  exact_duplicates_count: number;
  similar_candidates_flagged_count: number;
  missing_provenance_count: number;
  missing_evidence_count: number;
  invalid_source_urls_count: number;
  classifications: CandidateClassification[];
  issues: ValidationIssue[];
  published_contamination_detected: boolean;
}

export const VALID_CATEGORIES = [
  'Government Investments',
  'Investment Schemes',
  'Subsidies & Benefits',
  'Opportunities',
  'Tenders',
  'News & Updates',
  'Official Sources',
  'Comparisons',
  'Tools & Calculators'
];

export const VALID_DISCOVERY_SOURCES = [
  'MANUAL_RESEARCH',
  'GSC_QUERY_EXPORT',
  'OFFICIAL_GOV_CIRCULAR',
  'SITE_SEARCH_LOG',
  'USER_FEEDBACK',
  'STATUTORY_FAQ_IMPORT'
];

export const VALID_SOURCE_TYPES = [
  'PRIMARY_STATUTORY_RULE',
  'OFFICIAL_GOV_NOTIFICATION',
  'OFFICIAL_DEPARTMENT_PORTAL',
  'OFFICIAL_FAQ_DOCUMENT',
  'RESEARCH_SYNTHESIS'
];

export const FORBIDDEN_PUBLICATION_STATUSES = [
  'VERIFIED',
  'PUBLISHED',
  'LIVE',
  'APPROVED_FOR_PRODUCTION'
];

export function normalizeQuestionText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[₹$,.?!:;'"()\[\]{}/\\-_#@*&^%+=~`<>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Calculates Jaccard token similarity between two normalized strings.
 */
export function calculateTokenSimilarity(strA: string, strB: string): number {
  const tokensA = new Set(normalizeQuestionText(strA).split(' ').filter(t => t.length > 2));
  const tokensB = new Set(normalizeQuestionText(strB).split(' ').filter(t => t.length > 2));
  if (tokensA.size === 0 || tokensB.size === 0) return 0;
  
  let intersection = 0;
  for (const t of tokensA) {
    if (tokensB.has(t)) intersection++;
  }
  const union = new Set([...tokensA, ...tokensB]).size;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Parses simple CSV format used by question intake.
 */
export function parseCSV(csvContent: string): QuestionCandidate[] {
  const lines = csvContent.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const candidates: QuestionCandidate[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === 0 || values.every(v => v.trim() === '')) continue;
    
    const record: any = {};
    headers.forEach((h, idx) => {
      record[h.trim()] = values[idx] !== undefined ? values[idx].trim() : '';
    });

    // Parse alternate phrasings if separated by semicolon
    let alternates: string[] = [];
    if (record.alternate_phrasings) {
      alternates = record.alternate_phrasings
        .split(';')
        .map((s: string) => s.trim())
        .filter((s: string) => s.length > 0);
    }

    candidates.push({
      candidate_id: record.candidate_id || '',
      original_question_wording: record.original_question_wording || '',
      proposed_canonical_intent: record.proposed_canonical_intent || '',
      category: record.category || '',
      subcategory: record.subcategory || '',
      discovery_source: record.discovery_source || '',
      discovery_date: record.discovery_date || '',
      source_url: record.source_url || '',
      source_type: record.source_type || '',
      supporting_evidence_excerpt: record.supporting_evidence_excerpt || '',
      existing_related_question_id: record.existing_related_question_id || null,
      proposed_language: record.proposed_language || 'en',
      alternate_phrasings: alternates,
      review_status: record.review_status || 'PENDING_TRIAGE',
      reviewer_notes: record.reviewer_notes || ''
    });
  }

  return candidates;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

/**
 * Validates candidates against existing published canonical question bank.
 */
export function validateIntakeCandidates(
  candidates: QuestionCandidate[],
  existingBank: Array<{ id?: string; question_id?: string; canonical_question: string; alternate_phrasings?: string[] }> = []
): IntakeValidationReport {
  const issues: ValidationIssue[] = [];
  const classifications: CandidateClassification[] = [];
  const seenCandidateIds = new Set<string>();
  const seenNormalizedIntents = new Map<string, string>(); // normalized -> candidate_id

  let exactDuplicates = 0;
  let similarFlagged = 0;
  let missingProvenance = 0;
  let missingEvidence = 0;
  let invalidSourceUrls = 0;
  let publishedContamination = false;

  // Build lookup of existing published canonical questions
  const existingMap = new Map<string, string>(); // normalized -> existingId
  existingBank.forEach(q => {
    const id = q.question_id || q.id || 'EXISTING';
    existingMap.set(normalizeQuestionText(q.canonical_question), id);
    if (q.alternate_phrasings && Array.isArray(q.alternate_phrasings)) {
      q.alternate_phrasings.forEach(alt => {
        existingMap.set(normalizeQuestionText(alt), id);
      });
    }
  });

  for (const c of candidates) {
    const id = c.candidate_id;
    let hasFatalError = false;

    // 1. Candidate ID validation
    if (!id || !/^CAND-[A-Z0-9_-]{3,32}$/.test(id)) {
      issues.push({
        candidate_id: id || 'MISSING_ID',
        severity: 'ERROR',
        field: 'candidate_id',
        message: `Candidate ID "${id}" is missing or does not match pattern ^CAND-[A-Z0-9_-]{3,32}$`
      });
      hasFatalError = true;
    } else if (seenCandidateIds.has(id)) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'candidate_id',
        message: `Duplicate candidate ID "${id}" in batch.`
      });
      exactDuplicates++;
      hasFatalError = true;
    } else {
      seenCandidateIds.add(id);
    }

    // 2. Strict Publication Boundary Check
    if (FORBIDDEN_PUBLICATION_STATUSES.includes(c.review_status.toUpperCase())) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'review_status',
        message: `VIOLATION: Candidate status "${c.review_status}" attempts to bypass review boundary. Intake candidates cannot be published directly.`
      });
      publishedContamination = true;
      hasFatalError = true;
    }

    // 3. Wording and Intent validation
    if (!c.original_question_wording || c.original_question_wording.trim().length < 5) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'original_question_wording',
        message: 'Original question wording is missing or under 5 characters.'
      });
      hasFatalError = true;
    }

    if (!c.proposed_canonical_intent || c.proposed_canonical_intent.trim().length < 10) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'proposed_canonical_intent',
        message: 'Proposed canonical intent is missing or under 10 characters.'
      });
      hasFatalError = true;
    }

    // 4. Category and Subcategory
    if (!VALID_CATEGORIES.includes(c.category)) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'category',
        message: `Category "${c.category}" is invalid. Must be one of: ${VALID_CATEGORIES.join(', ')}`
      });
      hasFatalError = true;
    }

    if (!c.subcategory || c.subcategory.trim().length < 2) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'subcategory',
        message: 'Subcategory is missing.'
      });
      hasFatalError = true;
    }

    // 5. Discovery provenance
    if (!VALID_DISCOVERY_SOURCES.includes(c.discovery_source)) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'discovery_source',
        message: `Discovery source provenance "${c.discovery_source}" is invalid.`
      });
      missingProvenance++;
      hasFatalError = true;
    }

    if (!c.discovery_date || !/^\d{4}-\d{2}-\d{2}$/.test(c.discovery_date)) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'discovery_date',
        message: `Discovery date "${c.discovery_date}" must follow ISO YYYY-MM-DD.`
      });
      missingProvenance++;
      hasFatalError = true;
    }

    // 6. Source URL & Evidence Validation
    if (!c.source_url || !/^https?:\/\/.+/.test(c.source_url)) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'source_url',
        message: `Source URL "${c.source_url}" is invalid or missing.`
      });
      invalidSourceUrls++;
      hasFatalError = true;
    }

    if (!VALID_SOURCE_TYPES.includes(c.source_type)) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'source_type',
        message: `Source type "${c.source_type}" is invalid.`
      });
      hasFatalError = true;
    }

    if (!c.supporting_evidence_excerpt || c.supporting_evidence_excerpt.trim().length < 20) {
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'supporting_evidence_excerpt',
        message: 'Supporting evidence excerpt is missing or under 20 characters.'
      });
      missingEvidence++;
      hasFatalError = true;
    }

    // 7. Deduplication Check against Current Batch & Existing Published Bank
    const normIntent = normalizeQuestionText(c.proposed_canonical_intent);
    let isExactDup = false;
    let isSimilarFlagged = false;
    let matchedId = '';
    let highestSim = 0;

    // Check exact match in current batch
    if (seenNormalizedIntents.has(normIntent)) {
      const priorId = seenNormalizedIntents.get(normIntent)!;
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'proposed_canonical_intent',
        message: `Exact duplicate canonical intent of batch candidate "${priorId}".`
      });
      exactDuplicates++;
      isExactDup = true;
      matchedId = priorId;
      hasFatalError = true;
    } else {
      seenNormalizedIntents.set(normIntent, id);
    }

    // Check exact match against existing published bank
    if (existingMap.has(normIntent)) {
      const existingId = existingMap.get(normIntent)!;
      issues.push({
        candidate_id: id,
        severity: 'ERROR',
        field: 'proposed_canonical_intent',
        message: `Exact duplicate of existing published question "${existingId}".`
      });
      exactDuplicates++;
      isExactDup = true;
      matchedId = existingId;
      hasFatalError = true;
    }

    // Check high similarity (> 0.65) against existing published questions without destroying either
    if (!isExactDup) {
      for (const [existingNorm, exId] of existingMap.entries()) {
        const sim = calculateTokenSimilarity(normIntent, existingNorm);
        if (sim > 0.65 && sim > highestSim) {
          highestSim = sim;
          matchedId = exId;
        }
      }
      if (highestSim > 0.65) {
        issues.push({
          candidate_id: id,
          severity: 'WARNING',
          field: 'proposed_canonical_intent',
          message: `High intent similarity (${(highestSim * 100).toFixed(1)}%) with existing question "${matchedId}". Flagged for human review; NOT auto-merged.`
        });
        similarFlagged++;
        isSimilarFlagged = true;
      }
    }

    // Classification decision
    if (hasFatalError && isExactDup) {
      classifications.push({
        candidate_id: id,
        status: 'DUPLICATE_CANDIDATE',
        rationale: `Exact duplicate of ${matchedId}. Candidate rejected from intake.`,
        matched_existing_id: matchedId
      });
    } else if (hasFatalError) {
      classifications.push({
        candidate_id: id,
        status: 'REJECTED',
        rationale: 'Rejected due to validation errors (missing provenance, malformed source, or rule violations).'
      });
    } else if (isSimilarFlagged) {
      classifications.push({
        candidate_id: id,
        status: 'NEEDS_HUMAN_REVIEW',
        rationale: `Semantic overlap with ${matchedId} (${(highestSim * 100).toFixed(1)}%). Requires editorial comparison before authoring.`,
        matched_existing_id: matchedId,
        similarity_score: highestSim
      });
    } else if (c.review_status === 'NEEDS_RESEARCH') {
      classifications.push({
        candidate_id: id,
        status: 'NEEDS_RESEARCH',
        rationale: 'Valid candidate structure; statutory clauses require additional corroboration.'
      });
    } else if (c.review_status === 'READY_FOR_EDITORIAL_VERIFICATION') {
      classifications.push({
        candidate_id: id,
        status: 'READY_FOR_EDITORIAL_VERIFICATION',
        rationale: 'Complete candidate with primary evidence. Ready for editorial authoring (not production).'
      });
    } else {
      classifications.push({
        candidate_id: id,
        status: 'VALID_INTAKE',
        rationale: 'Structurally valid intake record queued for research triage.'
      });
    }
  }

  const errors = issues.filter(i => i.severity === 'ERROR').length;
  const warnings = issues.filter(i => i.severity === 'WARNING').length;
  const validIntakeCount = classifications.filter(c => c.status !== 'REJECTED' && c.status !== 'DUPLICATE_CANDIDATE').length;

  return {
    timestamp: new Date().toISOString(),
    total_candidates: candidates.length,
    valid_intake_count: validIntakeCount,
    error_count: errors,
    warning_count: warnings,
    exact_duplicates_count: exactDuplicates,
    similar_candidates_flagged_count: similarFlagged,
    missing_provenance_count: missingProvenance,
    missing_evidence_count: missingEvidence,
    invalid_source_urls_count: invalidSourceUrls,
    classifications,
    issues,
    published_contamination_detected: publishedContamination
  };
}

// CLI execution helper
if (process.argv[1] && process.argv[1].endsWith('validate_question_intake.ts')) {
  const filePath = process.argv[2] || path.resolve('research/question_intake_template.csv');
  console.log('Validating Question Intake file:', filePath);

  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const candidates = parseCSV(content);

  // Load existing questions for deduplication check
  let existingQuestions: any[] = [];
  const verifiedPath = path.resolve('src/data/verifiedQuestionsData.json');
  if (fs.existsSync(verifiedPath)) {
    existingQuestions = JSON.parse(fs.readFileSync(verifiedPath, 'utf-8'));
  }

  const report = validateIntakeCandidates(candidates, existingQuestions);
  console.log('\n--- INTAKE VALIDATION REPORT ---');
  console.log(`Total Candidates: ${report.total_candidates}`);
  console.log(`Valid Intake Records: ${report.valid_intake_count}`);
  console.log(`Errors: ${report.error_count}`);
  console.log(`Warnings: ${report.warning_count}`);
  console.log(`Exact Duplicates: ${report.exact_duplicates_count}`);
  console.log(`Similar Flagged: ${report.similar_candidates_flagged_count}`);
  console.log(`Missing Provenance: ${report.missing_provenance_count}`);
  console.log(`Missing Evidence: ${report.missing_evidence_count}`);
  console.log(`Invalid Source URLs: ${report.invalid_source_urls_count}`);
  console.log(`Published Contamination Detected: ${report.published_contamination_detected}`);
  console.log('\nClassifications:');
  report.classifications.forEach(c => {
    console.log(`  [${c.status}] ${c.candidate_id}: ${c.rationale}`);
  });

  if (report.issues.length > 0) {
    console.log('\nDetailed Issues:');
    report.issues.forEach(iss => {
      console.log(`  [${iss.severity}] ${iss.candidate_id} (${iss.field}): ${iss.message}`);
    });
  }
}
