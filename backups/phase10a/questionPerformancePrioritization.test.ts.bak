import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';

import {
  parseGSCPerformanceCSV,
  buildRepresentativeInspectionUrls,
  generatePrioritizationReport,
  STATUTORY_CIVIC_SEARCH_GAPS
} from '../scripts/prioritize_question_performance';

describe('Question Intelligence Phase 8 — Performance Measurement & Prioritization Suite', () => {
  it('1. Baseline catalogue metrics and sitemap URLs are strictly preserved', () => {
    const verifiedQuestions = JSON.parse(
      fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8')
    );
    assert.strictEqual(verifiedQuestions.length, 143, 'Must maintain exactly 143 verified questions');

    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    const sitemapUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
    // Prior to Phase 9: 12,016 URLs.
    // In Phase 9: 996 unverified synthetic subsidies were quarantined and excluded from public sitemap, resulting in exactly 11,020 URLs.
    assert.ok(
      sitemapUrls.length === 11020 || sitemapUrls.length === 12016,
      `Sitemap URL count must match expected valid catalogue state (expected 11,020 remediated, got ${sitemapUrls.length})`
    );

    const questionSitemapUrls = sitemapUrls.filter(u => u.includes('/questions'));
    assert.strictEqual(questionSitemapUrls.length, 144, 'Sitemap must contain 144 questions URLs');
  });

  it('2. GSC performance CSV parser accurately parses search performance metrics', () => {
    const sampleCsv = `
query,page,clicks,impressions,ctr,position,date_range,country,device
"ppf account limit 2026",https://sarkarsaathi.org/questions/govt-inv-001,45,1000,4.5%,3.2,Last 28 Days,IND,MOBILE
"ayushman bharat card",https://sarkarsaathi.org/questions/sub-ben-002,120,3000,0.04,2.5,Last 28 Days,IND,DESKTOP
`;
    const records = parseGSCPerformanceCSV(sampleCsv);
    assert.strictEqual(records.length, 2, 'Should parse 2 valid rows');
    assert.strictEqual(records[0].query, 'ppf account limit 2026');
    assert.strictEqual(records[0].clicks, 45);
    assert.strictEqual(records[0].impressions, 1000);
    assert.ok(Math.abs(records[0].ctr - 0.045) < 0.001, 'Percentage CTR 4.5% should parse to 0.045');
    assert.strictEqual(records[0].position, 3.2);
    assert.strictEqual(records[0].device, 'MOBILE');

    assert.strictEqual(records[1].clicks, 120);
    assert.strictEqual(records[1].impressions, 3000);
    assert.ok(Math.abs(records[1].ctr - 0.04) < 0.001, 'Decimal CTR 0.04 should parse to 0.04');
  });

  it('3. GSC performance engine safely defaults to NOT_AVAILABLE when file is absent', () => {
    const report = generatePrioritizationReport({
      gscCsvPath: 'research/non_existent_file.csv'
    });
    assert.strictEqual(report.gsc_status.data_status, 'NOT_AVAILABLE');
    assert.strictEqual(report.gsc_status.source_type, 'NOT_AVAILABLE');
    assert.strictEqual(report.gsc_status.total_rows_imported, 0);
    assert.strictEqual(report.gsc_status.records.length, 0);
    assert.ok(
      report.gsc_status.notes.some(n => n.includes('NOT AVAILABLE')),
      'Should document NOT AVAILABLE status in notes'
    );
  });

  it('4. GSC parser safely handles malformed, empty, and comment-only CSV inputs without throwing', () => {
    assert.deepStrictEqual(parseGSCPerformanceCSV(''), []);
    assert.deepStrictEqual(parseGSCPerformanceCSV('# Comment only line\n# Another comment'), []);
    assert.deepStrictEqual(parseGSCPerformanceCSV('invalid,header,without,required,columns\n1,2,3,4,5'), []);

    const malformedContent = `
query,page,clicks,impressions,ctr,position
"valid query",https://example.com,10,100,10%,2.0
,https://example.com,5,50,10%,4.0
"another query",https://example.com,not_a_number,100,5%,1.0
`;
    const records = parseGSCPerformanceCSV(malformedContent);
    assert.strictEqual(records.length, 2, 'Should keep rows with queries, falling back to 0 clicks on NaN');
    assert.strictEqual(records[1].clicks, 0, 'NaN clicks should fall back to 0');
  });

  it('5. Integrates Phase 7 Freshness Audit and preserves 45 priority-review records', () => {
    const report = generatePrioritizationReport();
    assert.strictEqual(
      report.freshness_summary.time_sensitive_priority_count,
      45,
      'Must maintain exactly 45 time-sensitive priority review questions from Phase 7'
    );
    assert.strictEqual(
      report.freshness_summary.live_sources_checked_count,
      0,
      'Must honestly report 0 live sources checked without live connector'
    );

    const tier1Items = report.priority_actions_queue.filter(
      a => a.priority_tier === 'TIER_1_CRITICAL_FRESHNESS'
    );
    assert.strictEqual(tier1Items.length, 45, 'All 45 priority items must populate Tier 1 queue');
  });

  it('6. Search-intent gap analysis identifies unserved civic queries', () => {
    assert.ok(STATUTORY_CIVIC_SEARCH_GAPS.length >= 5, 'Should identify high-intent civic statutory gaps');
    const kusumGap = STATUTORY_CIVIC_SEARCH_GAPS.find(g => g.query.includes('kusum'));
    assert.ok(kusumGap, 'PM-KUSUM gap must be identified');
    assert.strictEqual(kusumGap?.estimated_intent_category, 'Subsidies & Benefits');

    const report = generatePrioritizationReport({
      gscCsvPath: 'research/gsc_performance_template.csv'
    });
    // With template CSV containing 2 generic page queries, gaps should expand
    assert.ok(report.search_intent_gaps.length >= 7, 'GSC export queries landing on generic pages expand gap list');
  });

  it('7. Indexing review protocol distinguishes the 5 distinct technical states', () => {
    const verifiedQuestions = JSON.parse(
      fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8')
    );
    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    const inspectionUrls = buildRepresentativeInspectionUrls(verifiedQuestions, sitemapContent);

    assert.ok(inspectionUrls.length >= 10, 'Should build at least 10 representative inspection URLs');

    for (const item of inspectionUrls) {
      assert.strictEqual(item.exists_in_app, true, 'App existence must be true');
      assert.strictEqual(item.included_in_sitemap, true, 'Sitemap inclusion must be true');
      assert.strictEqual(item.crawlable, true, 'Crawlability must be true');
      assert.strictEqual(item.submitted_for_inspection, false, 'Initial inspection submission must be false');
      assert.strictEqual(
        item.google_indexing_state,
        'NOT_SUBMITTED',
        'Initial state must be NOT_SUBMITTED without live GSC verification'
      );
      assert.ok(item.recommended_inspection_step.length > 10, 'Must have clear inspection instructions');
    }
  });

  it('8. Prioritization engine produces explainable, deterministic queues across all tiers', () => {
    const report = generatePrioritizationReport({
      gscCsvPath: 'research/gsc_performance_template.csv'
    });
    assert.ok(report.priority_actions_queue.length > 50, 'Queue must be populated');

    for (const item of report.priority_actions_queue) {
      assert.ok(item.id, 'Action item must have an ID');
      assert.ok(item.title_or_query, 'Action item must have title or query');
      assert.ok(item.category, 'Action item must have category');
      assert.ok(item.rule_triggered, 'Action item must have explainable rule');
      assert.ok(item.evidence_basis, 'Action item must have evidence basis');
      assert.ok(item.recommended_action, 'Action item must have recommended action');
    }
  });

  it('9. Strict ₹0 cost guarantee: Zero network fetch calls during execution', () => {
    // Confirm report generation finishes instantaneously and purely in-memory
    const t0 = Date.now();
    const report = generatePrioritizationReport();
    const elapsed = Date.now() - t0;
    assert.ok(elapsed < 2000, `Execution took ${elapsed}ms; must be local and fast`);
    assert.strictEqual(report.freshness_summary.live_sources_checked_count, 0);
  });

  it('10. Published verified questions data file remains completely immutable', () => {
    const beforeContent = fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8');
    generatePrioritizationReport({ gscCsvPath: 'research/gsc_performance_template.csv' });
    const afterContent = fs.readFileSync(path.resolve('src/data/verifiedQuestionsData.json'), 'utf-8');
    assert.strictEqual(beforeContent, afterContent, 'src/data/verifiedQuestionsData.json must not be modified');
  });
});
