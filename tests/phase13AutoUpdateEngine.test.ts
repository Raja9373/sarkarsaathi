import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { AutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { globalOGDConnector } from '../src/ingestion/connectors';
import { INITIAL_VERIFIED_SOURCES, globalSourceRegistry } from '../src/ingestion/sourceRegistry';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('SarkarSaathi Phase 13 — Real Daily Auto-Update Engine & Capability Audit', () => {
  it('1. Source-by-source capability audit confirms registered official sources and access types', () => {
    const sources = globalSourceRegistry.getAllSources();
    assert.ok(sources.length >= 8);
    const iig = globalSourceRegistry.getSourceById('src-iig-portal');
    assert.ok(iig);
    assert.equal(iig.syncFrequency, 'DAILY');
    assert.equal(iig.scheduledSyncTime, '05:00 AM IST');
  });

  it('2. OGD connector successfully processes sanitized test fixture without auto-publishing', async () => {
    const source = INITIAL_VERIFIED_SOURCES.find(s => s.sourceId === 'src-datagov-opp') || INITIAL_VERIFIED_SOURCES[0];
    const mockRecords = [
      {
        project_id: 'OGD-TEST-101',
        title: 'National Green Hydrogen Mission Pilot Scheme',
        description: 'Comprehensive financial incentive framework for green hydrogen production and electrolyser manufacturing in India.',
        ministry: 'Ministry of New and Renewable Energy (MNRE)',
        state: 'All India',
        source_url: 'https://mnre.gov.in/green-hydrogen',
        deadline: '2026-12-31',
        type: 'Subsidy & Incentive'
      }
    ];

    const result = await globalOGDConnector.fetchAndStage(source, 'mock-api-key', mockRecords);
    assert.equal(result.success, true);
    assert.equal(result.recordsFetched, 1);
    assert.equal(result.recordsValid, 1);
    assert.equal(result.recordsStaged, 1);
    assert.equal(result.stagedRecords[0].reviewStatus, 'PENDING_REVIEW', 'Staged records must be strictly PENDING_REVIEW');
  });

  it('3. AutoUpdateEngine executes daily 05:00 AM IST sync and logs correct workflow report', async () => {
    const engine = new AutoUpdateEngine();
    const report = await engine.triggerDailyFiveAMSync('05:00 AM IST');
    assert.ok(report);
    assert.ok(report.runTimestamp);
    const logs = engine.getUpdateLogs();
    const cronLog = logs.find(l => l.sourceId === 'SYSTEM-CRON-JOB');
    assert.ok(cronLog, 'System cron log entry must exist');
    assert.ok(cronLog?.errorMessage?.includes('05:00 AM IST'));
  });

  it('4. Phase 9 subsidy quarantine and Phase 10A sitemap protections remain intact', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();
    assert.ok(published.length >= 38);
    assert.equal(quarantined.length, 996);

    const sitemapContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf-8');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
  });
});
