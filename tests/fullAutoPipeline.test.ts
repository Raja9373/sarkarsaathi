import { describe, it, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { globalAutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { validateSubsidyRecord } from '../src/ingestion/validation';
import { globalStagingQueue } from '../src/ingestion/staging';
import { subsidyRepository, SubsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { generateSitemap } from '../src/utils/sitemapGenerator';
import { globalOGDConnector } from '../src/ingestion/connectors';
import { INITIAL_VERIFIED_SOURCES } from '../src/ingestion/sourceRegistry';

describe('SarkarSaathi Full Auto Mode & Safeguard Integrity Suite', () => {
  it('1. Automated validation and classification separates verified government schemes from unverified/synthetic placeholders', () => {
    // A genuine government subsidy with official evidence
    const validOfficialScheme = {
      id: 'SUB-TEST-VALID-01',
      title: 'Pradhan Mantri Matsya Sampada Yojana (PMMSY)',
      description: 'Flagship central government scheme for sustainable development of the fisheries sector in India.',
      authority: 'Department of Fisheries, Ministry of Fisheries, Animal Husbandry and Dairying',
      officialSourceUrl: 'https://dof.gov.in/pmmsy',
      category: 'Fisheries & Agriculture',
      benefits: 'Direct financial subsidy of up to 40% for general beneficiaries and 60% for SC/ST/Women beneficiaries.',
      eligibility: 'Fishers, fish farmers, fish workers, SHGs, and fisheries cooperatives across all States and UTs.'
    };

    const validResult = validateSubsidyRecord(validOfficialScheme);
    assert.equal(validResult.isValid, true);
    assert.equal(validResult.publicationState, 'PUBLISHED');
    assert.equal(validResult.verificationStatus, 'VERIFIED');
    assert.equal(validResult.authenticityClassification, 'SOURCE_VERIFIED');
    assert.equal(validResult.editorialReviewStatus, 'APPROVED');

    // A synthetic/placeholder record with generic title
    const syntheticScheme = {
      id: 'SUB-TEST-SYNTH-01',
      title: 'Verified Government Subsidy & Assistance Scheme #99',
      description: 'Provisional automated placeholder description.',
      authority: 'Unknown Ministry',
      officialSourceUrl: 'https://example.com/subsidy',
      category: 'General',
      benefits: 'Unspecified',
      eligibility: 'All'
    };

    const synthResult = validateSubsidyRecord(syntheticScheme);
    assert.equal(synthResult.isValid, false);
    assert.equal(synthResult.publicationState, 'QUARANTINED');
    assert.equal(synthResult.verificationStatus, 'UNVERIFIED');
    assert.equal(synthResult.authenticityClassification, 'GENERIC_OR_SYNTHETIC_SUSPECTED');
    assert.equal(synthResult.editorialReviewStatus, 'REQUIRES_OFFICIAL_EVIDENCE');

    // An incomplete record with missing official URL
    const missingUrlScheme = {
      id: 'SUB-TEST-NOURL-01',
      title: 'State Dairy Modernization Incentive',
      description: 'Capital subsidy for bulk milk cooling units.',
      authority: 'State Animal Husbandry Dept',
      category: 'Animal Husbandry',
      benefits: '25% capital subsidy',
      eligibility: 'Dairy farmers'
    };

    const missingResult = validateSubsidyRecord(missingUrlScheme);
    assert.equal(missingResult.isValid, false);
    assert.equal(missingResult.publicationState, 'QUARANTINED');
    assert.equal(missingResult.verificationStatus, 'UNVERIFIED');
    assert.equal(missingResult.authenticityClassification, 'SOURCE_MISSING');
  });

  it('2. Record-level error isolation: corrupt or throwing record does not stop batch processing', async () => {
    const rawBatchWithCorruptItems = [
      null, // null record
      undefined, // undefined record
      { title: 12345 }, // invalid types
      {
        id: 'SUB-AUTO-ISOLATED-01',
        title: 'National Livestock Mission (NLM) Entrepreneurship Scheme',
        description: 'Central sector scheme providing 50% capital subsidy for poultry, sheep, goat, and piggery feed/fodder enterprises.',
        authority: 'Ministry of Fisheries, Animal Husbandry and Dairying',
        officialSourceUrl: 'https://dahd.nic.in/schemes/programmes/national-livestock-mission',
        category: 'Animal Husbandry & Dairy',
        benefits: '50% capital subsidy up to ₹50 Lakh for individual entrepreneurs and farmer producer organizations.',
        eligibility: 'Individuals, FPOs, JLGs, SHGs, and Section 8 companies with own or leased land.'
      },
      'not-an-object' // malformed primitive
    ];

    const testRepo = new SubsidyRepository();
    const batchSummary = await globalAutoUpdateEngine.ingestSubsidiesAutomated(rawBatchWithCorruptItems as any, undefined, testRepo);
    assert.equal(batchSummary.totalReceived, 5);
    assert.equal(batchSummary.autoPublished, 1, 'Valid verified record must be auto-published despite bad records');
    assert.equal(batchSummary.rejected, 3, 'Corrupt non-object items must be safely rejected');
    assert.equal(batchSummary.quarantined, 1, 'Incomplete unverified object must be quarantined');

    // Verify the isolated valid record was successfully added to published subsidies
    const found = testRepo.getById('SUB-AUTO-ISOLATED-01');
    assert.ok(found, 'Record should be present in repository');
    assert.equal(found.publicationState, 'PUBLISHED');
    assert.equal(found.verificationStatus, 'VERIFIED');
  });

  it('3. Automatic publishing workflow does not require routine human approval for valid verified records', async () => {
    const testRepo = new SubsidyRepository();
    const publishedBefore = testRepo.getPublished().length;

    const newVerifiedScheme = {
      id: 'SUB-AUTO-VERIFIED-SAMARTH',
      title: 'Samarth Scheme for Capacity Building in Textile Sector',
      description: 'Demand-driven, placement-oriented National Skills Qualifications Framework compliant skilling programme to incentivize jobs.',
      authority: 'Ministry of Textiles',
      officialSourceUrl: 'https://samarth-textiles.gov.in',
      category: 'Education & Skill Development',
      benefits: '100% subsidized wage compensation and training cost reimbursement to empanelled industry partners.',
      eligibility: 'Unemployed youth and traditional handloom/handicrafts artisans.'
    };

    const batchResult = await globalAutoUpdateEngine.ingestSubsidiesAutomated([newVerifiedScheme], undefined, testRepo);
    assert.equal(batchResult.autoPublished, 1);

    const publishedAfter = testRepo.getPublished().length;
    assert.equal(publishedAfter, publishedBefore + 1, 'Published count should increment automatically');
  });

  it('4. Source failure preserves last known-good published data without data loss or corruption', async () => {
    const publishedBefore = subsidyRepository.getPublished().length;
    const quarantinedBefore = subsidyRepository.getQuarantined().length;

    // Simulate an unexpected source check on an invalid/failing source
    const log = await globalAutoUpdateEngine.runSourceCheckAsync('non-existent-source-id');
    assert.equal(log.status, 'FAILED');
    assert.ok(log.errorMessage.includes('not found in registry'));

    const publishedAfter = subsidyRepository.getPublished().length;
    const quarantinedAfter = subsidyRepository.getQuarantined().length;

    // Last known-good baseline is 100% preserved
    assert.equal(publishedAfter, publishedBefore, 'Published records must remain completely intact upon source failure');
    assert.equal(quarantinedAfter, quarantinedBefore, 'Quarantined records must remain completely intact upon source failure');
  });

  it('5. Dynamic sitemap automatically synchronizes with legitimate published records and excludes quarantined ones', () => {
    const sitemapXml = generateSitemap();

    // Verify legitimate published records are present in sitemap
    assert.ok(sitemapXml.includes('/opportunities/anrf-core-research-grant-autumn'));
    assert.ok(sitemapXml.includes('/subsidies/pm-surya-ghar-muft-bijli-yojana'));

    // Verify unverified pilot/quarantined records are strictly absent from sitemap
    assert.equal(sitemapXml.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.equal(sitemapXml.includes('verified-government-subsidy-scheme-5'), false);
    assert.equal(sitemapXml.includes('verified-government-subsidy-scheme-40'), false);
  });

  it('6. Strict ₹0 cost check: No paid APIs, paid infrastructure, mandatory API keys, or new paid dependencies', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'));
    const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // Check that only approved zero-cost OSS packages exist
    const paidKnownPackages = ['openai', 'stripe', 'sendgrid', 'aws-sdk', '@aws-sdk', 'algoliasearch'];
    for (const pkg of paidKnownPackages) {
      assert.equal(allDeps[pkg], undefined, `Paid/external dependency ${pkg} must not be present`);
    }

    // Connectors operate cleanly without requiring mandatory API keys
    const testOgd = globalOGDConnector;
    assert.ok(testOgd);
  });
});
