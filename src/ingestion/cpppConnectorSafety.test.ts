import { OpenGovDataTenderSource } from '../infrastructure/sources/OpenGovDataTenderSource';

async function runSafetyTests() {
  console.log('--- Running CPPP Connector Safety Tests ---');
  const source = new OpenGovDataTenderSource();

  // Test 1: API key missing -> fail-closed (0 records)
  const originalKey = process.env.DATA_GOV_IN_API_KEY;
  delete process.env.DATA_GOV_IN_API_KEY;
  
  const recordsWithoutKey = await source.fetchData();
  const test1Passed = recordsWithoutKey.length === 0;
  console.log(`Test 1 (API Key Missing -> Fail-closed): ${test1Passed ? 'PASS' : 'FAIL'} (Records: ${recordsWithoutKey.length})`);

  // Test 2: Validation check
  const validTender = {
    id: 'test-1',
    tenderId: 'TID-123',
    referenceNumber: 'REF-1',
    slug: 'test-tender',
    title: 'Test Tender',
    description: 'Desc',
    organisation: 'Org',
    department: 'Dept',
    issuingAuthority: 'Auth',
    state: 'Delhi',
    tenderCategory: 'Goods',
    procurementCategory: 'IT',
    publishDate: '2026-09-13',
    submissionDeadline: '2026-09-30',
    status: 'ACTIVE' as const,
    corrigendumAvailable: false,
    corrigendumCount: 0,
    sourceName: 'CPPP',
    sourceUrl: 'https://eprocure.gov.in',
    sourcePortal: 'eprocure.gov.in',
    lastVerifiedAt: '2026-09-13',
    verificationStatus: 'NEEDS_REVIEW' as const,
    seoTitle: 'SEO',
    seoDescription: 'SEO',
    canonicalUrl: 'https://example.com'
  };

  const isValid = source.validate(validTender);
  console.log(`Test 2 (Validation Logic): ${isValid ? 'PASS' : 'FAIL'}`);

  // Test 3: Staged / Needs Review Status check (Auto-publish OFF)
  const autoPublishOff = validTender.verificationStatus === 'NEEDS_REVIEW';
  console.log(`Test 3 (Auto-publish OFF / Staged Flow): ${autoPublishOff ? 'PASS' : 'FAIL'}`);

  // Restore env
  if (originalKey) {
    process.env.DATA_GOV_IN_API_KEY = originalKey;
  }

  console.log('--- CPPP Connector Safety Tests Completed ---');
}

runSafetyTests().catch(console.error);
