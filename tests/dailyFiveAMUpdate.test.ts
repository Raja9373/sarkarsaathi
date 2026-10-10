import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SourceRegistry } from '../src/ingestion/sourceRegistry';
import { globalAutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';

describe('Daily 5:00 AM Government Schemes, Subsidies & Tenders Sync Engine Suite', () => {
  it('1. Source Registry contains 05:00 AM IST daily sync schedule configuration for all government sources', () => {
    const registry = new SourceRegistry();
    const sources = registry.getAllSources();
    assert.ok(sources.length >= 8, 'Expected at least 8 verified government sources');

    for (const src of sources) {
      assert.equal(src.syncFrequency, 'DAILY', `Source ${src.sourceId} should be scheduled for DAILY sync`);
      assert.equal(src.scheduledSyncTime, '05:00 AM IST', `Source ${src.sourceId} should have 05:00 AM IST schedule`);
    }
  });

  it('2. AutoUpdateEngine triggerDailyFiveAMSync executes daily scheduled sync routine', async () => {
    const report = await globalAutoUpdateEngine.triggerDailyFiveAMSync('05:00 AM IST');
    assert.ok(report, 'Report should be returned by daily sync trigger');
    assert.ok(['SUCCESS', 'PARTIAL', 'FAILED', 'NO_CHANGE'].includes(report.workflowStatus));

    const logs = globalAutoUpdateEngine.getUpdateLogs();
    assert.ok(logs.length > 0, 'Update logs should contain entries');
    const cronLog = logs.find(l => l.sourceId === 'SYSTEM-CRON-JOB');
    assert.ok(cronLog, 'Expected SYSTEM-CRON-JOB log entry for daily 5 AM sync');
    assert.ok(cronLog.errorMessage.includes('05:00 AM IST'), 'Expected schedule timestamp in log message');
  });

  it('3. Auto-publish protection is strictly enforced during daily sync (Zero unverified direct publishes)', async () => {
    const report = await globalAutoUpdateEngine.triggerDailyFiveAMSync();
    assert.equal(report.catalogueDataChanged, false, 'Catalogue published data must not be directly changed without operator review');
  });

  it('4. Phase 9 subsidy quarantine and Phase 10A sitemap integrity remain strictly preserved', () => {
    const totalSubsidies = subsidyRepository.getAll().length;
    const quarantinedSubsidies = subsidyRepository.getQuarantined().length;
    const publishedSubsidies = subsidyRepository.getPublished().length;

    assert.equal(totalSubsidies, 1000, 'Total subsidy catalogue count must remain 1000');
    assert.equal(quarantinedSubsidies, 996, 'Quarantined subsidy count must remain 996');
    assert.equal(publishedSubsidies, 4, 'Published subsidy count must remain 4');
  });
});
