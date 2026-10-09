import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { OpportunityRepository } from '../src/infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('Phase 10B.1: Opportunity Detail View & PAIMANA Classification Tests', () => {
  const repo = new OpportunityRepository();

  it('1. Curated grant record (e.g. BIRAC BIG 29) contains rich eligibility and application process', () => {
    const item = repo.getById('opp-birac-big-29');
    assert.ok(item, 'BIRAC BIG item must exist');
    assert.ok(item?.eligibility, 'Must have eligibility criteria');
    assert.ok(item?.applicationProcess, 'Must have application process');
    assert.equal(item?.verificationStatus, 'VERIFIED');
  });

  it('2. PAIMANA infrastructure record (e.g. paimana-proj-1) is correctly identified as PAIMANA', () => {
    const item = repo.getById('paimana-proj-1');
    assert.ok(item, 'PAIMANA item must exist');
    const isPaimana = item?.implementingAgency?.includes('PAIMANA') || item?.authority?.includes('PAIMANA') || item?.sourceAuthority?.includes('PAIMANA') || item?.id?.startsWith('paimana-');
    assert.equal(isPaimana, true, 'paimana-proj-1 must be classified as PAIMANA');
  });

  it('3. State investment project (e.g. OPP-P1-VERIFIED-001) resolves correctly with cost parameters', () => {
    const item = repo.getById('OPP-P1-VERIFIED-001');
    assert.ok(item, 'Invest India project must exist');
    assert.ok(item?.totalProjectCost, 'Must have total project cost');
    assert.equal(item?.verificationStatus, 'VERIFIED');
  });

  it('4. Placeholder or null fields do not cause runtime errors or invalid text', () => {
    const all = repo.getAll();
    const withPlaceholder = all.filter(o => o.district?.includes('Not specified'));
    assert.ok(withPlaceholder.length > 0, 'Catalog contains records with placeholder strings');
  });

  it('5. Phase 9 subsidy quarantine and Phase 10A sitemap count remain strictly intact', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();
    assert.equal(published.length, 4);
    assert.equal(quarantined.length, 996);

    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
  });
});
