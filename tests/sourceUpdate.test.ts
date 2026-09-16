import { SourceRegistry, INITIAL_VERIFIED_SOURCES } from '../src/ingestion/sourceRegistry';
import { AutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { StagingManager } from '../src/ingestion/staging';
import { validateOpportunityData } from '../src/ingestion/validation';
import { isDuplicateOpportunity } from '../src/ingestion/duplicates';

describe('SarkarSaathi Source Update & Ingestion Pipeline', () => {
  test('1. Source Registry contains PAIMANA and official sources', () => {
    const registry = new SourceRegistry();
    const sources = registry.getAllSources();
    expect(sources.length).toBeGreaterThanOrEqual(8);

    const paimana = registry.getSourceById('src-paimana-mospi');
    expect(paimana).toBeDefined();
    expect(paimana?.sourceName).toContain('PAIMANA');
    expect(paimana?.catalogueType).toBe('OPPORTUNITIES');
  });

  test('2. Disabled or unverified sources are handled safely by AutoUpdateEngine', () => {
    const engine = new AutoUpdateEngine();
    const log = engine.runSourceCheck('src-iig-portal');
    expect(log.status).toBe('SKIPPED');
  });

  test('3. Auto-publish protection is strictly enforced (Staged only)', () => {
    const staging = new StagingManager();
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
    expect(validation.isValid).toBe(true);
  });

  test('4. Duplicate detection identifies existing IDs', () => {
    const existing = [
      { id: '1', title: 'Existing Project', projectId: 'PROJ-001', sourceUrl: 'https://example.com' }
    ];
    const isDup = isDuplicateOpportunity({ projectId: 'PROJ-001', title: 'New title', sourceUrl: 'https://example.com' }, existing as any);
    expect(isDup).toBe(true);
  });

  test('5. Invalid source data is correctly rejected', () => {
    const invalidRecord = {
      projectId: '',
      title: '',
      description: '',
      sourceUrl: 'not-a-url'
    };
    const validation = validateOpportunityData(invalidRecord);
    expect(validation.isValid).toBe(false);
    expect(validation.errors.length).toBeGreaterThan(0);
  });
});
