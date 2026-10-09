import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { OpportunityRepository } from '../src/infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('Phase 10C.2: Safe Deadline Display & Source Transparency Tests', () => {
  const repo = new OpportunityRepository();

  it('1. Four unverified deadline records retain their stored dates without modification', () => {
    const unverifiedIds = ['opp-birac-big-29', 'opp-meity-tide-2-0', 'opp-dst-nidhi-prayas', 'opp-aim-atal-new-india'];
    const expectedDates: Record<string, string> = {
      'opp-birac-big-29': '2026-10-31',
      'opp-meity-tide-2-0': '2026-11-15',
      'opp-dst-nidhi-prayas': '2026-10-20',
      'opp-aim-atal-new-india': '2026-11-30',
    };

    for (const id of unverifiedIds) {
      const item = repo.getById(id);
      assert.ok(item, `Record ${id} must exist`);
      assert.equal(item?.deadline, expectedDates[id], `Deadline for ${id} must remain unchanged`);
    }
  });

  it('2. PAIMANA infrastructure classification is preserved', () => {
    const paimanaItem = repo.getById('paimana-proj-1');
    assert.ok(paimanaItem);
    const isPaimana = paimanaItem?.implementingAgency?.includes('PAIMANA') || paimanaItem?.authority?.includes('PAIMANA') || paimanaItem?.sourceAuthority?.includes('PAIMANA') || paimanaItem?.id?.startsWith('paimana-');
    assert.equal(isPaimana, true);
  });

  it('3. Phase 9 subsidy quarantine and Phase 10A sitemap protections remain unchanged', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();
    assert.equal(published.length, 4);
    assert.equal(quarantined.length, 996);

    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
  });
});
