import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { opportunityRepository } from '../src/infrastructure/repositories/InvestmentRepository';
import { CatalogQueryManager } from '../src/ingestion/catalogManager';
import { SECTOR_ROUTES } from '../src/utils/sitemapGenerator';
import { stateOfficialSources } from '../src/utils/officialSources';

describe('Google Search Console Soft 404 Remediation Suite', () => {
  const gscStateSlugs = [
    'andaman-nicobar-islands',
    'west-bengal',
    'puducherry',
    'jammu-kashmir',
    'himachal-pradesh',
    'madhya-pradesh',
    'dadra-nagar-haveli-and-daman-diu',
    'andhra-pradesh',
    'arunachal-pradesh',
    'tamil-nadu'
  ];

  const gscSectorSlugs = [
    'it-ites-technology-parks',
    'renewable-energy-solar'
  ];

  it('1. All 10 state URLs from GSC report return >= 4 records (zero soft 404)', () => {
    for (const stateSlug of gscStateSlugs) {
      const res = opportunityRepository.getPaginated({ page: 1, limit: 10, state: stateSlug });
      assert.ok(
        res.total >= 4,
        `Expected state ${stateSlug} to return at least 4 opportunities, got ${res.total}`
      );
      assert.ok(
        res.items.length >= 4,
        `Expected state ${stateSlug} to have at least 4 paginated items, got ${res.items.length}`
      );
    }
  });

  it('2. High-volume state pages return extensive state-specific records', () => {
    const wb = opportunityRepository.getPaginated({ page: 1, limit: 10, state: 'west-bengal' });
    assert.ok(wb.total >= 300, `Expected West Bengal to have >= 300 records, got ${wb.total}`);

    const tn = opportunityRepository.getPaginated({ page: 1, limit: 10, state: 'tamil-nadu' });
    assert.ok(tn.total >= 400, `Expected Tamil Nadu to have >= 400 records, got ${tn.total}`);

    const ap = opportunityRepository.getPaginated({ page: 1, limit: 10, state: 'andhra-pradesh' });
    assert.ok(ap.total >= 400, `Expected Andhra Pradesh to have >= 400 records, got ${ap.total}`);

    const mp = opportunityRepository.getPaginated({ page: 1, limit: 10, state: 'madhya-pradesh' });
    assert.ok(mp.total >= 400, `Expected Madhya Pradesh to have >= 400 records, got ${mp.total}`);
  });

  it('3. Both sector URLs from GSC report return extensive records (zero soft 404)', () => {
    for (const sectorSlug of gscSectorSlugs) {
      const res = opportunityRepository.getPaginated({ page: 1, limit: 10, sector: sectorSlug });
      assert.ok(
        res.total >= 100,
        `Expected sector ${sectorSlug} to return at least 100 opportunities, got ${res.total}`
      );
      assert.equal(res.items.length, 10, `Expected sector ${sectorSlug} to have full first page of 10 items`);
    }
  });

  it('4. CatalogQueryManager fallback logic mirrors IndexedCatalogStore protection', () => {
    const all = opportunityRepository.getAll();
    for (const stateSlug of gscStateSlugs) {
      const res = CatalogQueryManager.paginateOpportunities(all, { page: 1, limit: 10, state: stateSlug });
      assert.ok(
        res.total >= 4,
        `CatalogQueryManager: Expected state ${stateSlug} to return >= 4, got ${res.total}`
      );
    }

    for (const sectorSlug of gscSectorSlugs) {
      const res = CatalogQueryManager.paginateOpportunities(all, { page: 1, limit: 10, sector: sectorSlug });
      assert.ok(
        res.total >= 4,
        `CatalogQueryManager: Expected sector ${sectorSlug} to return >= 4, got ${res.total}`
      );
    }
  });

  it('5. All 36 stateOfficialSources have valid officialUrl and name', () => {
    assert.ok(stateOfficialSources.length >= 30, `Expected >= 30 states/UTs, got ${stateOfficialSources.length}`);
    for (const s of stateOfficialSources) {
      assert.ok(s.state, 'State entry must define state name');
      assert.ok(s.officialUrl, `State entry ${s.state} must define officialUrl`);
      assert.ok(s.officialUrl.startsWith('https://'), `officialUrl for ${s.state} must be HTTPS`);
    }
  });

  it('6. SECTOR_ROUTES includes all core and GSC reported sectors', () => {
    assert.ok(SECTOR_ROUTES.includes('it-ites-technology-parks'));
    assert.ok(SECTOR_ROUTES.includes('renewable-energy-solar'));
    assert.ok(SECTOR_ROUTES.includes('infrastructure'));
    assert.ok(SECTOR_ROUTES.includes('agriculture'));
  });
});
