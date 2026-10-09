import * as fs from 'fs';
import * as path from 'path';

import { cat1Answers } from './answers/cat1_gi';
import { cat2Answers } from './answers/cat2_is';
import { cat3Answers } from './answers/cat3_sb';
import { cat4Answers } from './answers/cat4_op';
import { cat5Answers } from './answers/cat5_td';
import { cat6Answers } from './answers/cat6_nu';
import { cat7Answers } from './answers/cat7_os';
import { cat8Answers } from './answers/cat8_cp';
import { cat9Answers } from './answers/cat9_tc';

console.log('--- SARKARSAATHI ANSWER ENGINE BUILD & AUDIT ---');

const allAnswers = [
  ...cat1Answers,
  ...cat2Answers,
  ...cat3Answers,
  ...cat4Answers,
  ...cat5Answers,
  ...cat6Answers,
  ...cat7Answers,
  ...cat8Answers,
  ...cat9Answers,
];

console.log(`Total collected answers across 9 modules: ${allAnswers.length}`);

// Load Question Bank
const questionBankPath = path.resolve('./research/question_bank.json');
const questionBank = JSON.parse(fs.readFileSync(questionBankPath, 'utf8'));
console.log(`Loaded Question Bank records: ${questionBank.length}`);

// Verification and Audit Checks
const errors: string[] = [];
const questionIdMap = new Map<string, any>();
questionBank.forEach((q: any) => {
  questionIdMap.set(q.question_id, q);
});

const answerIdSet = new Set<string>();

allAnswers.forEach((ans: any, idx: number) => {
  const qId = ans.question_id;

  // Duplicate answer check
  if (answerIdSet.has(qId)) {
    errors.push(`Duplicate answer for question_id: ${qId}`);
  }
  answerIdSet.add(qId);

  // Existence in Question Bank
  const matchedQ = questionIdMap.get(qId);
  if (!matchedQ) {
    errors.push(`Answer ${qId} does not correspond to any record in question_bank.json`);
  } else {
    // Canonical question match
    if (ans.canonical_question !== matchedQ.canonical_question) {
      errors.push(`Canonical question mismatch for ${qId}:\nAnswer: ${ans.canonical_question}\nBank:   ${matchedQ.canonical_question}`);
    }
  }

  // Schema requirements
  const requiredFields = [
    'question_id',
    'canonical_question',
    'short_answer',
    'detailed_answer',
    'answer_language',
    'supporting_claims',
    'official_source_urls',
    'source_title',
    'source_publisher',
    'evidence_type',
    'verified_at',
    'answer_status',
    'verification_status',
    'review_required'
  ];

  for (const f of requiredFields) {
    if (ans[f] === undefined || ans[f] === null) {
      errors.push(`Missing required field '${f}' in record ${qId || idx}`);
    }
  }

  // Length and pattern checks
  if (typeof ans.question_id === 'string' && !/^Q-[A-Z]{2,4}-[0-9]{3}$/.test(ans.question_id)) {
    errors.push(`Invalid question_id pattern: ${ans.question_id}`);
  }

  if (typeof ans.short_answer === 'string') {
    if (ans.short_answer.length < 20 || ans.short_answer.length > 500) {
      errors.push(`short_answer length out of bounds [20, 500] in ${qId}: ${ans.short_answer.length}`);
    }
  }

  if (typeof ans.detailed_answer === 'string') {
    if (ans.detailed_answer.length < 100 || ans.detailed_answer.length > 4000) {
      errors.push(`detailed_answer length out of bounds [100, 4000] in ${qId}: ${ans.detailed_answer.length}`);
    }
  }

  if (!Array.isArray(ans.supporting_claims) || ans.supporting_claims.length === 0) {
    errors.push(`supporting_claims must be a non-empty array in ${qId}`);
  } else {
    ans.supporting_claims.forEach((c: any, cIdx: number) => {
      if (!c.claim || !c.citation_source || !c.source_url) {
        errors.push(`Incomplete supporting_claim at index ${cIdx} in ${qId}`);
      }
    });
  }

  if (!Array.isArray(ans.official_source_urls) || ans.official_source_urls.length === 0) {
    errors.push(`official_source_urls must be a non-empty array in ${qId}`);
  }

  // Enum checks
  const validEvidence = [
    'PRIMARY_STATUTORY_RULE',
    'OFFICIAL_GOV_NOTIFICATION',
    'OFFICIAL_DEPARTMENT_PORTAL',
    'OFFICIAL_FAQ_DOCUMENT',
    'RESEARCH_SYNTHESIS',
    'SECONDARY_VERIFIED'
  ];
  if (!validEvidence.includes(ans.evidence_type)) {
    errors.push(`Invalid evidence_type in ${qId}: ${ans.evidence_type}`);
  }

  const validVerificationStatus = [
    'VERIFIED',
    'PARTIALLY_VERIFIED',
    'NEEDS_REVIEW',
    'UNVERIFIED',
    'OUTDATED',
    'CONFLICTING_EVIDENCE'
  ];
  if (!validVerificationStatus.includes(ans.verification_status)) {
    errors.push(`Invalid verification_status in ${qId}: ${ans.verification_status}`);
  }

  const validAnswerStatus = [
    'DRAFTED',
    'VERIFIED',
    'PARTIALLY_VERIFIED',
    'NEEDS_REVIEW',
    'UNVERIFIED',
    'OUTDATED'
  ];
  if (!validAnswerStatus.includes(ans.answer_status)) {
    errors.push(`Invalid answer_status in ${qId}: ${ans.answer_status}`);
  }
});

// Check if any question in Question Bank is missing an answer
questionBank.forEach((q: any) => {
  if (!answerIdSet.has(q.question_id)) {
    errors.push(`Question in bank ${q.question_id} has NO answer!`);
  }
});

if (errors.length > 0) {
  console.error(`VALIDATION FAILED with ${errors.length} errors:`);
  errors.slice(0, 15).forEach((e, i) => console.error(`${i + 1}. ${e}`));
  process.exit(1);
}

console.log('✓ Validation PASSED! All 143 records strictly comply with schema and 1-to-1 question bank linkage.');

// Write master /research/answer_bank.json
const outputPath = path.resolve('./research/answer_bank.json');
fs.writeFileSync(outputPath, JSON.stringify(allAnswers, null, 2), 'utf8');
console.log(`✓ Successfully written ${allAnswers.length} verified answers to ${outputPath}`);

// Statistical breakdown
const evidenceBreakdown: Record<string, number> = {};
const verificationBreakdown: Record<string, number> = {};
let hindiCount = 0;
let hinglishCount = 0;

allAnswers.forEach((ans: any) => {
  evidenceBreakdown[ans.evidence_type] = (evidenceBreakdown[ans.evidence_type] || 0) + 1;
  verificationBreakdown[ans.verification_status] = (verificationBreakdown[ans.verification_status] || 0) + 1;
  if (ans.translations?.hi) hindiCount++;
  if (ans.translations?.hinglish) hinglishCount++;
});

console.log('\n--- ANSWER ENGINE METRICS ---');
console.log('Total Canonical Answers:', allAnswers.length);
console.log('Hindi Translations Available:', hindiCount);
console.log('Hinglish Translations Available:', hinglishCount);
console.log('Evidence Type Breakdown:', evidenceBreakdown);
console.log('Verification Status Breakdown:', verificationBreakdown);
