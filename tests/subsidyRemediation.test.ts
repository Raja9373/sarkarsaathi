import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { auditSubsidyRemediation } from '../scripts/audit_subsidy_remediation';

describe('SarkarSaathi Phase 9 & Recovery — Safe Subsidy Catalogue Remediation & Recovery Suite', () => {
  it('1. Catalogue preservation: Total catalogue count preserves 1,000+ records without data loss', () => {
    const total = subsidyRepository.getAll().length;
    assert.ok(total >= 1000, `Total catalogue subsidies must preserve at least 1,000 records (got ${total})`);
  });

  it('2. Remediation partition: Genuine schemes are published and 996 unverified placeholders remain quarantined', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();

    assert.ok(published.length >= 38, `At least 38 verified schemes must be published (got ${published.length})`);
    assert.strictEqual(quarantined.length, 996, 'Exactly 996 unverified placeholder subsidies must be quarantined');

    const expectedCuratedIds = ['SUB-001', 'SUB-002', 'SUB-003', 'SUB-004'];
    const actualCuratedIds = published.map(p => p.id);
    for (const expectedId of expectedCuratedIds) {
      assert.ok(actualCuratedIds.includes(expectedId), `Published list must contain curated scheme ${expectedId}`);
    }
  });

  it('3. Public sitemap remediation: Only verified published subsidies exist in sitemap, 996 quarantined are excluded', () => {
    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    const sitemapUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
    const subsidyUrls = sitemapUrls.filter(u => u.includes('/subsidies/'));

    assert.ok(subsidyUrls.length >= 38, `Sitemap must contain verified published subsidies (got ${subsidyUrls.length})`);
    assert.strictEqual(subsidyUrls.length, subsidyRepository.getPublished().length);
    assert.ok(!sitemapContent.includes('gov-subsidy-benefit-scheme-836'), 'Quarantined SUB-836 must be excluded from sitemap');
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

  it('6. Audit script execution: Produces deterministic metrics matching the remediation & recovery state', () => {
    const audit = auditSubsidyRemediation();
    assert.ok(audit.totalSubsidies >= 1000);
    assert.ok(audit.publishedCount >= 38);
    assert.strictEqual(audit.quarantinedCount, 996);
    assert.strictEqual(audit.subsidiesInSitemapCount, audit.publishedCount);
    assert.strictEqual(audit.representativeCaseCheck.includedInSitemap, false);
    assert.strictEqual(audit.representativeCaseCheck.hasNoIndexDirective, true);
  });

  it('7. Incident fix: No unverified quarantined records contain "Verified" in their title', () => {
    const all = subsidyRepository.getAll();
    const misleadingTitles = all.filter(
      s => s.publicationState === 'QUARANTINED' && s.title.toLowerCase().startsWith('verified')
    );
    assert.strictEqual(
      misleadingTitles.length,
      0,
      `Quarantined records must not claim "Verified" in their titles. Found ${misleadingTitles.length}`
    );
  });

  it('8. Incident fix: Published directory strictly contains only verified schemes', () => {
    const published = subsidyRepository.getPublished();
    assert.ok(published.length >= 38, 'Verified published schemes directory is restored');
    for (const item of published) {
      assert.strictEqual(item.publicationState, 'PUBLISHED');
      assert.strictEqual(item.verificationStatus, 'VERIFIED');
      assert.ok(
        !item.title.includes('Scheme #'),
        `Published scheme ${item.id} must not have generic number title: ${item.title}`
      );
    }
  });

  it('9. Incident fix: Legacy slug resolution for pilot records resolves cleanly to quarantined record', () => {
    const sub5 = subsidyRepository.getBySlug('verified-government-subsidy-scheme-5');
    assert.ok(sub5, 'Legacy slug must resolve to SUB-005');
    assert.strictEqual(sub5.id, 'SUB-005');
    assert.strictEqual(sub5.publicationState, 'QUARANTINED');
    assert.strictEqual(sub5.verificationStatus, 'UNVERIFIED');
  });
});
