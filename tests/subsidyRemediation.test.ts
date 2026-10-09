import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { auditSubsidyRemediation } from '../scripts/audit_subsidy_remediation';

describe('SarkarSaathi Phase 9 — Safe Subsidy Catalogue Remediation Suite', () => {
  it('1. Catalogue preservation: Total catalogue count remains 1,000 without data loss', () => {
    const total = subsidyRepository.getAll().length;
    assert.strictEqual(total, 1000, 'Total catalogue subsidies must remain 1,000');
  });

  it('2. Remediation partition: Exactly 4 curated records are published and 996 are quarantined', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();

    assert.strictEqual(published.length, 4, 'Exactly 4 curated subsidies must be published');
    assert.strictEqual(quarantined.length, 996, 'Exactly 996 unverified subsidies must be quarantined');

    const expectedCuratedIds = ['SUB-001', 'SUB-002', 'SUB-003', 'SUB-004'];
    const actualCuratedIds = published.map(p => p.id);
    assert.deepStrictEqual(actualCuratedIds.sort(), expectedCuratedIds.sort());
  });

  it('3. Public sitemap remediation: Only 4 verified subsidies exist in sitemap, 996 are excluded', () => {
    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    const sitemapUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
    const subsidyUrls = sitemapUrls.filter(u => u.includes('/subsidies/'));

    assert.strictEqual(subsidyUrls.length, 4, 'Sitemap must contain exactly 4 verified subsidy URLs');
    assert.strictEqual(sitemapUrls.length, 11020, 'Remediated sitemap total must be 11,020 URLs (12,016 - 996)');
  });

  it('4. Representative record SUB-836 remediation check: Classified as UNVERIFIED/QUARANTINED', () => {
    const s836 = subsidyRepository.getBySlug('gov-subsidy-benefit-scheme-836-housing');
    assert.ok(s836, 'SUB-836 must exist in catalogue for archival/quarantine');
    assert.strictEqual(s836.verificationStatus, 'UNVERIFIED', 'SUB-836 must not display misleading VERIFIED badge');
    assert.strictEqual(s836.publicationState, 'QUARANTINED', 'SUB-836 must have publicationState QUARANTINED');
    assert.strictEqual(s836.editorialReviewStatus, 'REQUIRES_OFFICIAL_EVIDENCE');

    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    assert.ok(!sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), 'SUB-836 must be absent from sitemap');
  });

  it('5. Research archive preservation: Quarantined records archive file exists with 996 records', () => {
    const archivePath = path.resolve('research/quarantined_subsidies_archive.json');
    assert.ok(fs.existsSync(archivePath), 'Research archive file must exist');
    const data = JSON.parse(fs.readFileSync(archivePath, 'utf-8'));
    assert.strictEqual(data.length, 996, 'Archive must preserve all 996 quarantined records');
  });

  it('6. Audit script execution: Produces deterministic metrics matching the remediation state', () => {
    const audit = auditSubsidyRemediation();
    assert.strictEqual(audit.totalSubsidies, 1000);
    assert.strictEqual(audit.publishedCount, 4);
    assert.strictEqual(audit.quarantinedCount, 996);
    assert.strictEqual(audit.subsidiesInSitemapCount, 4);
    assert.strictEqual(audit.representativeCaseCheck.includedInSitemap, false);
    assert.strictEqual(audit.representativeCaseCheck.hasNoIndexDirective, true);
  });
});
