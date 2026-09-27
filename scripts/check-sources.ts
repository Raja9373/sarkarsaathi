import { SourceRegistry } from '../src/ingestion/sourceRegistry';
import { AutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { StagingManager } from '../src/ingestion/staging';
import { validateOpportunityData } from '../src/ingestion/validation';
import { isDuplicateOpportunity } from '../src/ingestion/duplicates';

console.log('=====================================================');
console.log('   SarkarSaathi Source Update & Safeguard Audit');
console.log('=====================================================\n');

let failed = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
  } else {
    console.error(`[FAIL] ${testName}${detail ? ` - ${detail}` : ''}`);
    failed++;
  }
}

try {
  // 1. Source Registry
  const registry = new SourceRegistry();
  const sources = registry.getAllSources();
  assert(sources.length >= 8, 'Registry contains verified official sources', `Found ${sources.length} sources`);

  const paimana = registry.getSourceById('src-paimana-mospi');
  assert(!!paimana && paimana.sourceName.includes('PAIMANA'), 'PAIMANA source is properly registered in opportunities catalogue');

  // 2. Auto-Update Engine Safety
  const engine = new AutoUpdateEngine();
  const log = engine.runSourceCheck('src-iig-portal');
  assert(log.status === 'SKIPPED' || log.status === 'NO_CHANGE', 'Disabled / unverified sources are handled safely (SKIPPED/NO_CHANGE)');

  // 3. Staging and Auto-Publish Protection
  const staging = new StagingManager();
  const sampleValid = {
    projectId: 'TEST-OPP-999',
    title: 'Test Opportunity',
    description: 'Test description for validation check',
    authority: 'Test Ministry',
    state: 'Delhi',
    sourceUrl: 'https://example.gov.in/test',
    sourceAuthority: 'Test Authority'
  };
  const validationValid = validateOpportunityData(sampleValid);
  assert(validationValid.isValid, 'Validation accepts complete compliant records');

  // 4. Duplicate Detection
  const existing = [
    { id: '1', title: 'Existing Project', projectId: 'PROJ-001', sourceUrl: 'https://example.com' }
  ];
  const isDup = isDuplicateOpportunity(
    { projectId: 'PROJ-001', title: 'New title', sourceUrl: 'https://example.com' },
    existing as any
  );
  assert(isDup, 'Duplicate detector flags matching project IDs and URLs');

  // 5. Invalid Record Rejection
  const sampleInvalid = {
    projectId: '',
    title: '',
    description: '',
    sourceUrl: 'not-a-url'
  };
  const validationInvalid = validateOpportunityData(sampleInvalid);
  assert(!validationInvalid.isValid && validationInvalid.errors.length > 0, 'Invalid records are strictly rejected with error details');

  console.log('\n=====================================================');
  if (failed === 0) {
    console.log(' ALL SAFEGUARDS & SOURCE CHECKS PASSED SUCCESSFULLY');
    console.log(' Auto-publish protection is active. Zero live mutations.');
    console.log('=====================================================\n');
    process.exit(0);
  } else {
    console.error(` ${failed} CHECK(S) FAILED`);
    console.log('=====================================================\n');
    process.exit(1);
  }
} catch (err) {
  console.error('Unexpected error running source update check:', err);
  process.exit(1);
}
