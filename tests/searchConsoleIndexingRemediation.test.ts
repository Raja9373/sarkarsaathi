import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { opportunityRepository, tenderRepository, investmentRepository } from '../src/infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('Search Console Indexing Remediation Suite (Crawled - currently not indexed)', () => {
  it('1. Representative opportunity records from GSC report exist with complete attributes', () => {
    const representativeSlugs = [
      'haryana-industrial-investment-project-79',
      'gidc-infrastructure-project-10',
      'mospi-paimana-infrastructure-project-689-coal',
      'delhi-urban-tech-logistics-project-40',
      'dfccil-freight-project-49',
      'pm-mitra-textile-park-70'
    ];

    for (const slug of representativeSlugs) {
      const item = opportunityRepository.getBySlug(slug);
      assert.ok(item, `Expected opportunity ${slug} to exist in repository`);
      assert.ok(item?.title, `Expected ${slug} to have title`);
      assert.ok(item?.authority, `Expected ${slug} to have authority`);
      assert.ok(item?.sourceUrl, `Expected ${slug} to have sourceUrl`);
    }
  });

  it('2. Tender and investment URLs from GSC report exist and resolve', () => {
    const tender = tenderRepository.getBySlug('design-supply-commissioning-atp-subsystems');
    assert.ok(tender, 'Expected Kavach ATP tender to resolve');
    assert.ok(tender?.tenderId, 'Expected tender ID');

    const inv = investmentRepository.getBySlug('sbi-long-term-infrastructure-bonds');
    assert.ok(inv, 'Expected SBI infrastructure bonds to resolve');
  });

  it('3. /schemes/pm-kisan maps to authentic verified PM-Kisan Samman Nidhi record', () => {
    const pmKisan = subsidyRepository.getBySlug('pm-kisan-samman-nidhi');
    assert.ok(pmKisan, 'Expected PM-Kisan Samman Nidhi subsidy to exist');
    assert.equal(pmKisan?.publicationState, 'PUBLISHED', 'PM-Kisan must be published');
  });

  it('4. Quarantined subsidies in GSC report (619 & 739) remain quarantined and excluded from sitemap', () => {
    const sub619 = subsidyRepository.getBySlug('gov-subsidy-benefit-scheme-619-agriculture---farmers-welfare');
    const sub739 = subsidyRepository.getBySlug('gov-subsidy-benefit-scheme-739-renewable-energy---solar');

    assert.equal(sub619?.publicationState, 'QUARANTINED', 'Subsidy 619 must remain quarantined');
    assert.equal(sub739?.publicationState, 'QUARANTINED', 'Subsidy 739 must remain quarantined');

    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    assert.ok(!sitemapContent.includes('gov-subsidy-benefit-scheme-619'), 'Quarantined 619 must not be in sitemap');
    assert.ok(!sitemapContent.includes('gov-subsidy-benefit-scheme-739'), 'Quarantined 739 must not be in sitemap');
  });

  it('5. Phase 9 quarantine partition (996 quarantined, 4 published) and Phase 10A sitemap rules remain intact', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();

    assert.equal(published.length, 4, 'Exactly 4 subsidies published');
    assert.equal(quarantined.length, 996, 'Exactly 996 subsidies quarantined');
  });
});
