import * as fs from 'fs';
import * as path from 'path';

export interface FreshnessAuditConfig {
  /** Maximum days since verified_at before recommending review (default 180 days = ~6 months) */
  staleAgeDaysThreshold: number;
  /** Categories with volatile time-sensitive rules requiring priority attention */
  priorityCategories: string[];
  /** Subcategories or topics with volatile annual limits, interest rates, or deadlines */
  timeSensitiveTopics: string[];
}

export const DEFAULT_AUDIT_CONFIG: FreshnessAuditConfig = {
  staleAgeDaysThreshold: 180,
  priorityCategories: [
    'Government Investments',
    'Investment Schemes',
    'Subsidies & Benefits',
    'Tenders',
    'Opportunities'
  ],
  timeSensitiveTopics: [
    'interest rate',
    'deposit limit',
    'tax',
    'section 80c',
    'financial year',
    'fy 20',
    'budget',
    'subsidy amount',
    'tender value',
    'deadline',
    'emd',
    'turnover'
  ]
};

export interface QuestionFreshnessRecord {
  id: string;
  canonical_question: string;
  category: string;
  subcategory: string;
  verified_at: string | null;
  effective_date: string | null;
  next_review_due: string | null;
  official_source_urls: string[];
  evidence_type: string;
  classification:
    | 'FRESH_METADATA_PRESENT'
    | 'FRESHNESS_METADATA_MISSING'
    | 'REVIEW_RECOMMENDED_AGE'
    | 'TIME_SENSITIVE_PRIORITY_REVIEW'
    | 'SOURCE_NOT_CHECKED';
  is_time_sensitive: boolean;
  days_since_verification: number | null;
  review_reasons: string[];
  live_source_status: 'NOT_CHECKED' | 'CHECKED_NO_CHANGE' | 'CHECKED_POTENTIAL_CHANGE' | 'CHECK_FAILED';
}

export interface FreshnessAuditReport {
  timestamp: string;
  total_questions_audited: number;
  freshness_metadata_present_count: number;
  freshness_metadata_missing_count: number;
  review_recommended_age_count: number;
  time_sensitive_priority_count: number;
  sources_genuinely_checked_count: number;
  sources_not_checked_count: number;
  category_breakdown: Record<string, { total: number; priority_review: number; fresh: number }>;
  records: QuestionFreshnessRecord[];
  guarantee_notice: string;
}

/**
 * Deterministically audits an array of question records without inventing dates or assuming source changes.
 */
export function auditQuestionFreshness(
  questions: any[],
  currentDateStr: string = '2026-10-09',
  config: FreshnessAuditConfig = DEFAULT_AUDIT_CONFIG
): FreshnessAuditReport {
  const currentDate = new Date(currentDateStr);
  const records: QuestionFreshnessRecord[] = [];

  let metadataPresent = 0;
  let metadataMissing = 0;
  let reviewRecommendedAge = 0;
  let timeSensitivePriority = 0;
  let sourcesChecked = 0;
  let sourcesNotChecked = 0;

  const categoryBreakdown: Record<string, { total: number; priority_review: number; fresh: number }> = {};

  for (const q of questions) {
    const id = q.id || q.question_id || 'UNKNOWN';
    const cat = q.category || 'Uncategorized';
    if (!categoryBreakdown[cat]) {
      categoryBreakdown[cat] = { total: 0, priority_review: 0, fresh: 0 };
    }
    categoryBreakdown[cat].total++;

    const verifiedAt = q.verified_at ? String(q.verified_at) : null;
    const effectiveDate = q.effective_date ? String(q.effective_date) : null;
    const nextReviewDue = q.next_review_due ? String(q.next_review_due) : null;
    const sources: string[] = Array.isArray(q.official_source_urls) ? q.official_source_urls : [];

    const reviewReasons: string[] = [];

    // Check if question text or answer mentions time-sensitive topics
    const fullText = `${q.canonical_question || ''} ${q.short_answer || ''} ${q.detailed_answer || ''}`.toLowerCase();
    const isTopicTimeSensitive = config.timeSensitiveTopics.some(topic => fullText.includes(topic));
    const isCategoryPriority = config.priorityCategories.includes(cat);
    const isTimeSensitive = isTopicTimeSensitive || isCategoryPriority;

    let daysSinceVerification: number | null = null;
    if (verifiedAt && /^\d{4}-\d{2}-\d{2}/.test(verifiedAt)) {
      const vDate = new Date(verifiedAt);
      if (!isNaN(vDate.getTime())) {
        const diffMs = currentDate.getTime() - vDate.getTime();
        daysSinceVerification = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
      }
    }

    // Determine classification
    let classification: QuestionFreshnessRecord['classification'] = 'FRESH_METADATA_PRESENT';

    if (!verifiedAt) {
      classification = 'FRESHNESS_METADATA_MISSING';
      reviewReasons.push('Missing verified_at timestamp; publication date uncertain.');
      metadataMissing++;
    } else {
      metadataPresent++;

      // Check next_review_due expiry
      if (nextReviewDue && /^\d{4}-\d{2}-\d{2}/.test(nextReviewDue)) {
        const dDate = new Date(nextReviewDue);
        if (!isNaN(dDate.getTime()) && currentDate.getTime() > dDate.getTime()) {
          reviewReasons.push(`Next review due date passed (${nextReviewDue}).`);
        }
      }

      // Check age threshold
      if (daysSinceVerification !== null && daysSinceVerification > config.staleAgeDaysThreshold) {
        reviewReasons.push(`Verification age (${daysSinceVerification} days) exceeds ${config.staleAgeDaysThreshold} day threshold.`);
      }

      if (isTimeSensitive && (reviewReasons.length > 0 || cat === 'Government Investments' || cat === 'Subsidies & Benefits')) {
        classification = 'TIME_SENSITIVE_PRIORITY_REVIEW';
        timeSensitivePriority++;
        categoryBreakdown[cat].priority_review++;
      } else if (reviewReasons.length > 0) {
        classification = 'REVIEW_RECOMMENDED_AGE';
        reviewRecommendedAge++;
      } else {
        classification = 'FRESH_METADATA_PRESENT';
        categoryBreakdown[cat].fresh++;
      }
    }

    // Explicit source check tracking: live HTTP fetching is disabled by ₹0 cost rule unless authorized connector exists.
    // Therefore, all sources are marked as NOT_CHECKED. Never invent source status.
    const liveSourceStatus: QuestionFreshnessRecord['live_source_status'] = 'NOT_CHECKED';
    sourcesNotChecked += sources.length > 0 ? sources.length : 1;

    records.push({
      id,
      canonical_question: q.canonical_question || '',
      category: cat,
      subcategory: q.subcategory || '',
      verified_at: verifiedAt,
      effective_date: effectiveDate,
      next_review_due: nextReviewDue,
      official_source_urls: sources,
      evidence_type: q.evidence_type || 'UNKNOWN',
      classification,
      is_time_sensitive: isTimeSensitive,
      days_since_verification: daysSinceVerification,
      review_reasons: reviewReasons,
      live_source_status: liveSourceStatus
    });
  }

  return {
    timestamp: new Date().toISOString(),
    total_questions_audited: questions.length,
    freshness_metadata_present_count: metadataPresent,
    freshness_metadata_missing_count: metadataMissing,
    review_recommended_age_count: reviewRecommendedAge,
    time_sensitive_priority_count: timeSensitivePriority,
    sources_genuinely_checked_count: sourcesChecked,
    sources_not_checked_count: sourcesNotChecked,
    category_breakdown: categoryBreakdown,
    records,
    guarantee_notice:
      'STRICT EVIDENCE SAFETY: Threshold classifications are triage cues only. No live sources were falsely reported as updated or fetched, and zero published answer texts were modified.'
  };
}

// CLI runner
if (process.argv[1] && process.argv[1].endsWith('audit_question_freshness.ts')) {
  const verifiedPath = path.resolve('src/data/verifiedQuestionsData.json');
  console.log('Auditing Question Freshness from:', verifiedPath);

  if (!fs.existsSync(verifiedPath)) {
    console.error('File not found:', verifiedPath);
    process.exit(1);
  }

  const questions = JSON.parse(fs.readFileSync(verifiedPath, 'utf-8'));
  const report = auditQuestionFreshness(questions);

  console.log('\n--- QUESTION FRESHNESS AUDIT REPORT ---');
  console.log(`Total Questions Audited: ${report.total_questions_audited}`);
  console.log(`Freshness Metadata Present: ${report.freshness_metadata_present_count}`);
  console.log(`Freshness Metadata Missing: ${report.freshness_metadata_missing_count}`);
  console.log(`Review Recommended (Age): ${report.review_recommended_age_count}`);
  console.log(`Time-Sensitive Priority Review: ${report.time_sensitive_priority_count}`);
  console.log(`Sources Genuinely Checked: ${report.sources_genuinely_checked_count}`);
  console.log(`Sources Not Checked (Manual Review Queue): ${report.sources_not_checked_count}`);
  console.log('\nCategory Breakdown:');
  for (const [cat, data] of Object.entries(report.category_breakdown)) {
    console.log(`  ${cat}: Total ${data.total} | Priority Review ${data.priority_review} | Fresh ${data.fresh}`);
  }
  console.log(`\nNotice: ${report.guarantee_notice}`);
}
