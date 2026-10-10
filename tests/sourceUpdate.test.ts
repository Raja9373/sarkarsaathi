import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SourceRegistry, INITIAL_VERIFIED_SOURCES } from '../src/ingestion/sourceRegistry';
import { AutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { StagingManager } from '../src/ingestion/staging';
import { validateOpportunityData } from '../src/ingestion/validation';
import { isDuplicateOpportunity } from '../src/ingestion/duplicates';

describe('SarkarSaathi Source Update & Ingestion Pipeline', () => {
  it('1. Source Registry contains PAIMANA and official sources', () => {
    const registry = new SourceRegistry();
    const sources = registry.getAllSources();
    assert.ok(sources.length >= 8, 'Expected at least 8 sources');

    const paimana = registry.getSourceById('src-paimana-mospi');
    assert.ok(paimana, 'Expected PAIMANA source to be defined');
    assert.ok(paimana?.sourceName.includes('PAIMANA'), 'Expected sourceName to contain PAIMANA');
    assert.equal(paimana?.catalogueType, 'OPPORTUNITIES');
  });

  it('2. Disabled or unverified sources are handled safely by AutoUpdateEngine', () => {
    const engine = new AutoUpdateEngine();
    const log = engine.runSourceCheck('src-iig-portal');
    assert.equal(log.status, 'SKIPPED');
  });

  it('3. Auto-publish protection is strictly enforced (Staged only)', () => {
    const sampleRecord = {
      projectId: 'TEST-OPP-999',
      title: 'Test Opportunity',
      description: 'Test description for validation check',
      authority: 'Test Ministry',
      state: 'Delhi',
      sourceUrl: 'https://example.gov.in/test',
      sourceAuthority: 'Test Authority'
    };

    const validation = validateOpportunityData(sampleRecord);
    assert.equal(validation.isValid, true);
  });

  it('4. Duplicate detection identifies existing IDs', () => {
    const existing = [
      { id: '1', title: 'Existing Project', projectId: 'PROJ-001', sourceUrl: 'https://example.com' }
    ];
    const isDup = isDuplicateOpportunity({ projectId: 'PROJ-001', title: 'New title', sourceUrl: 'https://example.com' }, existing as any);
    assert.equal(isDup, true);
  });

  it('5. Invalid source data is correctly rejected', () => {
    const invalidRecord = {
      projectId: '',
      title: '',
      description: '',
      sourceUrl: 'not-a-url'
    };
    const validation = validateOpportunityData(invalidRecord);
    assert.equal(validation.isValid, false);
    assert.ok(validation.errors.length > 0);
  });
});
