import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { globalOGDConnector } from '../src/ingestion/connectors';
import { INITIAL_VERIFIED_SOURCES } from '../src/ingestion/sourceRegistry';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('Phase 11B.1: OGD Dataset Identity Correction & Mandi Rejection Tests', () => {
  const ogdSource = INITIAL_VERIFIED_SOURCES.find(s => s.sourceId === 'src-datagov-opp') || {
    sourceId: 'src-datagov-opp',
    sourceName: 'Open Government Data (OGD) Platform India - Opportunities',
    authority: 'National Informatics Centre (NIC)',
    catalogueType: 'OPPORTUNITIES',
    officialUrl: 'https://data.gov.in',
    accessType: 'API',
    verificationStatus: 'VERIFIED',
    notes: 'OGD test source'
  };

  it('1. Connector rejects Mandi commodity price rows and prevents misclassification', async () => {
    const mandiFixture = [
      {
        commodity: 'Wheat',
        market: 'Azadpur Mandi',
        modal_price: '2275',
        min_price: '2200',
        max_price: '2350',
        arrival_date: '2026-10-09'
      },
      {
        project_id: 'OGD-SCHEME-001',
        title: 'National Solar Mission Incentive Scheme',
        description: 'Official solar subsidy framework for manufacturing high-efficiency solar photovoltaic modules.',
        ministry: 'Ministry of New and Renewable Energy (MNRE)',
        state: 'All India',
        source_url: 'https://mnre.gov.in/solar-scheme',
        deadline: '2026-12-31',
        type: 'Subsidy & Incentive'
      }
    ];

    const result = await globalOGDConnector.fetchAndStage(ogdSource as any, 'mock-key-12345', mandiFixture);
    assert.equal(result.success, true);
    assert.equal(result.recordsFetched, 2);
    assert.equal(result.recordsRejected, 1, 'Mandi commodity price row must be strictly rejected');
    assert.equal(result.recordsStaged, 1, 'Valid scheme record must be staged');
    assert.equal(result.stagedRecords.length, 1);
    assert.equal(result.stagedRecords[0].title, 'National Solar Mission Incentive Scheme');
  });

  it('2. Phase 9 subsidy quarantine and Phase 10A sitemap protections remain intact', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();
    assert.equal(published.length, 4);
    assert.equal(quarantined.length, 996);

    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
  });
});
