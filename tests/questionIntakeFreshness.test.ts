import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';

import {
  parseCSV,
  validateIntakeCandidates,
  QuestionCandidate
} from '../scripts/validate_question_intake';

import {
  auditQuestionFreshness,
  DEFAULT_AUDIT_CONFIG
} from '../scripts/audit_question_freshness';

describe('Phase 7: Question Intake & Validation Pipeline', () => {
  const sampleValidCandidate: QuestionCandidate = {
    candidate_id: 'CAND-TEST-001',
    original_question_wording: 'What is the minimum lock-in period for Senior Citizens Savings Scheme?',
    proposed_canonical_intent: 'What is the statutory lock-in period and premature closure penalty for SCSS accounts?',
    category: 'Government Investments',
    subcategory: 'Senior Citizens Savings Scheme (SCSS)',
    discovery_source: 'MANUAL_RESEARCH',
    discovery_date: '2026-10-09',
    source_url: 'https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=102',
    source_type: 'PRIMARY_STATUTORY_RULE',
    supporting_evidence_excerpt: 'SCSS account matures after 5 years from deposit date. Premature closure permitted after 1 year with 1.5% deduction.',
    proposed_language: 'en',
    review_status: 'PENDING_TRIAGE'
  };

  // Test 1: A valid candidate passes schema validation
  it('1. A valid candidate passes schema validation', () => {
    const report = validateIntakeCandidates([sampleValidCandidate]);
    assert.strictEqual(report.error_count, 0, 'Valid candidate must have 0 errors');
    assert.strictEqual(report.valid_intake_count, 1, 'Valid candidate must count as valid intake');
    assert.strictEqual(report.classifications[0].status, 'VALID_INTAKE');
  });

  // Test 2: A malformed candidate is rejected
  it('2. A malformed candidate is rejected', () => {
    const malformed: QuestionCandidate = {
      ...sampleValidCandidate,
      candidate_id: 'INVALID_ID_FORMAT',
      source_url: 'not-a-url',
      supporting_evidence_excerpt: 'Too short',
      category: 'Fake Category'
    };
    const report = validateIntakeCandidates([malformed]);
    assert.ok(report.error_count > 0, 'Malformed candidate must produce validation errors');
    assert.strictEqual(report.classifications[0].status, 'REJECTED');
  });

  // Test 3: An exact duplicate is detected deterministically
  it('3. An exact duplicate is detected deterministically', () => {
    const candidateA: QuestionCandidate = {
      ...sampleValidCandidate,
      candidate_id: 'CAND-TEST-002',
      proposed_canonical_intent: 'What is the maximum investment limit in Public Provident Fund (PPF) in a financial year?'
    };
    const candidateB: QuestionCandidate = {
      ...sampleValidCandidate,
      candidate_id: 'CAND-TEST-003',
      proposed_canonical_intent: 'What is the maximum investment limit in Public Provident Fund (PPF) in a financial year?'
    };
    const report = validateIntakeCandidates([candidateA, candidateB]);
    assert.ok(report.exact_duplicates_count >= 1, 'Duplicate batch candidate must be detected');
    assert.strictEqual(report.classifications[1].status, 'DUPLICATE_CANDIDATE');
  });

  // Test 4: Similar but non-identical questions are flagged without automatic destructive merging
  it('4. Similar but non-identical questions are flagged without automatic destructive merging', () => {
    const similarCandidate: QuestionCandidate = {
      ...sampleValidCandidate,
      candidate_id: 'CAND-TEST-004',
      proposed_canonical_intent: 'What is the maximum investment limit in PPF in a financial year?'
    };
    const existing = [
      {
        question_id: 'Q-GI-001',
        canonical_question: 'What is the maximum investment limit in Public Provident Fund (PPF) in a financial year?'
      }
    ];
    const report = validateIntakeCandidates([similarCandidate], existing);
    assert.strictEqual(report.exact_duplicates_count, 0, 'Must NOT mark similar question as exact duplicate');
    assert.ok(report.similar_candidates_flagged_count >= 1, 'Must flag high token overlap for human review');
    assert.strictEqual(report.classifications[0].status, 'NEEDS_HUMAN_REVIEW');
    assert.ok(report.classifications[0].rationale.includes('Requires editorial comparison'));
  });

  // Test 5: Missing provenance is detected
  it('5. Missing provenance is detected', () => {
    const missingProv: QuestionCandidate = {
      ...sampleValidCandidate,
      candidate_id: 'CAND-TEST-005',
      discovery_source: 'INVALID_SCRAPER',
      discovery_date: ''
    };
    const report = validateIntakeCandidates([missingProv]);
    assert.ok(report.missing_provenance_count >= 2, 'Missing discovery source and date must be flagged');
    assert.strictEqual(report.classifications[0].status, 'REJECTED');
  });

  // Test 6: A freshness audit with missing dates does not invent dates
  it('6. A freshness audit with missing dates does not invent dates', () => {
    const questionWithoutDates = {
      id: 'Q-TEST-NO-DATE',
      canonical_question: 'Sample question without verification timestamp',
      category: 'Government Investments',
      subcategory: 'Test',
      verified_at: null,
      effective_date: null,
      next_review_due: null,
      official_source_urls: ['https://example.gov.in']
    };
    const report = auditQuestionFreshness([questionWithoutDates]);
    assert.strictEqual(report.freshness_metadata_missing_count, 1);
    assert.strictEqual(report.records[0].verified_at, null, 'Must NOT invent a verification date');
    assert.strictEqual(report.records[0].classification, 'FRESHNESS_METADATA_MISSING');
  });

  // Test 7: An unchecked or unavailable source is explicitly marked NOT CHECKED
  it('7. An unchecked or unavailable source is explicitly marked NOT CHECKED', () => {
    const question = {
      id: 'Q-TEST-SOURCE',
      canonical_question: 'Question with official source',
      category: 'Investment Schemes',
      subcategory: 'Test Scheme',
      verified_at: '2026-10-09',
      official_source_urls: ['https://www.rbi.org.in/notification']
    };
    const report = auditQuestionFreshness([question]);
    assert.strictEqual(report.records[0].live_source_status, 'NOT_CHECKED');
    assert.strictEqual(report.sources_genuinely_checked_count, 0, 'Zero speculative fetches allowed');
    assert.strictEqual(report.sources_not_checked_count, 1);
  });

  // Test 8: A candidate cannot enter the production publication dataset automatically
  it('8. A candidate cannot enter the production publication dataset automatically', () => {
    const rogueCandidate: QuestionCandidate = {
      ...sampleValidCandidate,
      candidate_id: 'CAND-ROGUE-001',
      review_status: 'VERIFIED' // Attempting to bypass review
    };
    const report = validateIntakeCandidates([rogueCandidate]);
    assert.strictEqual(report.published_contamination_detected, true, 'Publication bypass must be flagged');
    assert.strictEqual(report.classifications[0].status, 'REJECTED');

    // Verify production verifiedQuestionsData.json does NOT contain rogue candidate
    const prodData = JSON.parse(fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8'));
    const foundInProd = prodData.some((q: any) => q.id === 'CAND-ROGUE-001' || q.slug === 'cand-rogue-001');
    assert.strictEqual(foundInProd, false, 'Production data must never contain intake candidate');
  });

  // Test 9: An outdated flag does not overwrite published answer text
  it('9. An outdated flag does not overwrite published answer text', () => {
    const prodDataBefore = JSON.parse(fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8'));
    const targetQ = prodDataBefore[0];
    const originalAnswer = targetQ.short_answer;

    // Run audit simulating 1000 days in future to trigger stale age
    const report = auditQuestionFreshness([targetQ], '2030-01-01');
    assert.ok(report.records[0].review_reasons.length > 0, 'Audit must flag staleness');

    // Re-verify production file has not been mutated
    const prodDataAfter = JSON.parse(fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8'));
    assert.strictEqual(prodDataAfter[0].short_answer, originalAnswer, 'Published text must remain pristine');
    assert.strictEqual(prodDataAfter[0].verification_status, targetQ.verification_status, 'Verification status must not change');
  });

  // Test 10: Re-running the same audit produces deterministic results
  it('10. Re-running the same audit produces deterministic results', () => {
    const prodData = JSON.parse(fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8'));
    const report1 = auditQuestionFreshness(prodData, '2026-10-09');
    const report2 = auditQuestionFreshness(prodData, '2026-10-09');

    assert.strictEqual(report1.total_questions_audited, report2.total_questions_audited);
    assert.strictEqual(report1.time_sensitive_priority_count, report2.time_sensitive_priority_count);
    assert.strictEqual(report1.freshness_metadata_present_count, report2.freshness_metadata_present_count);
    assert.strictEqual(report1.sources_not_checked_count, report2.sources_not_checked_count);
    assert.deepStrictEqual(report1.category_breakdown, report2.category_breakdown);
  });
});
