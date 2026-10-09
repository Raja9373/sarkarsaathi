import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { OpportunityRepository } from '../src/infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { isExcludedSearchOrFilterUrl } from '../src/utils/sitemapGenerator';

describe('Phase 10A: Verified P0 Fixes Regression Suite', () => {
  const repo = new OpportunityRepository();
  const allOpportunities = repo.getAll();

  it('1. P2 and Q7 records have 100% unique slugs (zero collisions)', () => {
    const p2Records = allOpportunities.filter(o => o.id.startsWith('OPP-P2-'));
    const q7Records = allOpportunities.filter(o => o.id.startsWith('OPP-Q7-'));

    assert.equal(p2Records.length, 100, 'P2 must contain exactly 100 records');
    assert.equal(q7Records.length, 100, 'Q7 must contain exactly 100 records');

    const p2Slugs = new Set(p2Records.map(o => o.slug));
    const q7Slugs = new Set(q7Records.map(o => o.slug));

    assert.equal(p2Slugs.size, 100, 'All P2 slugs must be unique');
    assert.equal(q7Slugs.size, 100, 'All Q7 slugs must be unique');

    // Confirm zero overlap between P2 and Q7
    for (const qSlug of q7Slugs) {
      assert.equal(p2Slugs.has(qSlug), false, `Slug ${qSlug} must not collide with any P2 slug`);
    }

    // Confirm global uniqueness across all 10,500 opportunities
    const allSlugs = allOpportunities.map(o => o.slug);
    assert.equal(new Set(allSlugs).size, 10500, 'All 10,500 opportunities must now have distinct slugs');
  });

  it('2. The four legitimate research grant slugs are NOT excluded by sitemap filter', () => {
    const legitimateGrantUrls = [
      'https://sarkarsaathi.org/opportunities/anrf-core-research-grant-autumn',
      'https://sarkarsaathi.org/opportunities/icmr-translational-research-grant',
      'https://sarkarsaathi.org/opportunities/ccrum-startup-research-grant',
      'https://sarkarsaathi.org/opportunities/cci-market-research-tech-policy-grant',
    ];

    for (const url of legitimateGrantUrls) {
      const isExcluded = isExcludedSearchOrFilterUrl(url);
      assert.equal(isExcluded, false, `Legitimate research grant ${url} must NOT be excluded`);
    }
  });

  it('3. Genuine search and filter query URLs remain strictly excluded', () => {
    const searchAndFilterUrls = [
      'https://sarkarsaathi.org/search',
      'https://sarkarsaathi.org/search/schemes',
      'https://sarkarsaathi.org/filter',
      'https://sarkarsaathi.org/opportunities?search=solar',
      'https://sarkarsaathi.org/investments?filter=state',
      'https://sarkarsaathi.org/opportunities#overview',
    ];

    for (const url of searchAndFilterUrls) {
      const isExcluded = isExcludedSearchOrFilterUrl(url);
      assert.equal(isExcluded, true, `Search/filter URL ${url} must be excluded`);
    }
  });

  it('4. Sitemap contains no duplicate URLs and includes the 4 grants and Q7 slugs', () => {
    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
    const urls = locMatches.map(m => m.replace(/<\/?loc>/g, ''));

    assert.equal(new Set(urls).size, urls.length, 'Sitemap must contain zero duplicate URLs');
    assert.equal(urls.length, 11124, 'Sitemap must contain exactly 11,124 valid URLs (11,020 + 100 resolved Q7 + 4 restored research grants)');

    // Check inclusion of research grants
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
    assert.ok(sitemapContent.includes('icmr-translational-research-grant'));
    assert.ok(sitemapContent.includes('ccrum-startup-research-grant'));
    assert.ok(sitemapContent.includes('cci-market-research-tech-policy-grant'));

    // Check inclusion of both P2 and Q7
    assert.ok(sitemapContent.includes('renewable-energy-green-hydrogen-project-1'));
    assert.ok(sitemapContent.includes('state-energy-infrastructure-project-1'));
  });

  it('5. Each affected P2 and Q7 published record resolves to the correct detail record', () => {
    for (let idx = 1; idx <= 10; idx++) {
      const p2Slug = `renewable-energy-green-hydrogen-project-${idx}`;
      const p2Item = repo.getBySlug(p2Slug);
      assert.ok(p2Item, `P2 slug ${p2Slug} must resolve to a record`);
      assert.equal(p2Item?.id, `OPP-P2-VERIFIED-${String(idx).padStart(3, '0')}`);

      const q7Slug = `state-energy-infrastructure-project-${idx}`;
      const q7Item = repo.getBySlug(q7Slug);
      assert.ok(q7Item, `Q7 slug ${q7Slug} must resolve to a record`);
      assert.equal(q7Item?.id, `OPP-Q7-VERIFIED-${String(idx).padStart(3, '0')}`);
    }
  });

  it('6. All 996 quarantined subsidy records remain excluded from publication and sitemap', () => {
    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    const publishedSubsidies = subsidyRepository.getPublished();
    const quarantinedSubsidies = subsidyRepository.getQuarantined();

    assert.equal(publishedSubsidies.length, 4, 'Published subsidies must remain exactly 4');
    assert.equal(quarantinedSubsidies.length, 996, 'Quarantined subsidies must remain exactly 996');

    // Confirm no quarantined slugs are in sitemap
    for (const q of quarantinedSubsidies) {
      assert.equal(sitemapContent.includes(q.slug), false, `Quarantined subsidy ${q.slug} must not be in sitemap`);
    }

    // Confirm representative record SUB-836
    const sub836 = subsidyRepository.getById('SUB-836');
    assert.equal(sub836?.publicationState, 'QUARANTINED');
    assert.equal(sub836?.verificationStatus, 'UNVERIFIED');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
  });
});
