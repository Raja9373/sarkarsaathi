import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { AutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { OfficialSourceConnectorManager } from '../src/ingestion/connectors';
import { SourceRegistry } from '../src/ingestion/sourceRegistry';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('Phase 11: Official Government Data Auto-Update Engine & Pipeline Tests', () => {
  it('1. Source Registry contains verified official sources and metadata', () => {
    const registry = new SourceRegistry();
    const sources = registry.getAllSources();
    assert.ok(sources.length >= 8, 'Must contain at least 8 verified official sources');
    
    const paimana = registry.getSourceById('src-paimana-mospi');
    assert.ok(paimana, 'PAIMANA source must exist');
    assert.equal(paimana?.catalogueType, 'OPPORTUNITIES');
  });

  it('2. Connector manager executes safe handling for disabled or invalid sources', async () => {
    const connector = new OfficialSourceConnectorManager();
    const result = await connector.executeConnector({
      sourceId: 'test-src',
      sourceName: 'Test Source',
      authority: 'Test Authority',
      catalogueType: 'OPPORTUNITIES',
      officialUrl: 'invalid-url',
      accessType: 'API',
      verificationStatus: 'VERIFIED',
      notes: 'Test note',
      lastVerified: '2026-10-09',
      enabled: true
    });

    assert.equal(result.success, false);
    assert.ok(result.errorMessage?.length! > 0);
  });

  it('3. AutoUpdateEngine generates a machine-readable run report with coverage gap notice', async () => {
    const engine = new AutoUpdateEngine();
    const report = await engine.generateRunReport();

    assert.ok(report.runTimestamp);
    assert.ok(['SUCCESS', 'PARTIAL', 'FAILED'].includes(report.workflowStatus));
    assert.equal(report.catalogueDataChanged, false, 'Should not claim data changed without verified payloads');
    assert.ok(report.coverageGapsNote.includes('NO VERIFIED FEED AVAILABLE'), 'Must explicitly display coverage gap notice');
  });

  it('4. Phase 9 subsidy quarantine and Phase 10A sitemap protections remain intact', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();
    assert.equal(published.length, 4);
    assert.equal(quarantined.length, 996);

    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
  });
});
