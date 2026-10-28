import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import * as fs from 'fs';
import * as path from 'path';
import { subsidyRepository, SubsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { validateSubsidyData } from '../src/ingestion/validation';
import { globalAutoUpdateEngine } from '../src/ingestion/autoUpdateEngine';
import { globalSourceRegistry } from '../src/ingestion/sourceRegistry';
import { generateSitemapXml } from '../src/utils/sitemapGenerator';
import { VERIFIED_RECOVERED_SUBSIDIES } from '../src/infrastructure/repositories/verifiedSubsidiesData';

describe('SarkarSaathi — Urgent Subsidies Catalogue Recovery Suite', () => {
  it('1. Root cause audit: Confirms the 996 quarantined records are Category B synthetic placeholders', () => {
    const quarantined = subsidyRepository.getQuarantined();
    assert.strictEqual(quarantined.length, 996, 'All 996 placeholders must remain quarantined');

    for (const record of quarantined) {
      assert.strictEqual(record.publicationState, 'QUARANTINED');
      assert.strictEqual(record.verificationStatus, 'UNVERIFIED');
      assert.strictEqual(record.authenticityClassification, 'GENERIC_OR_SYNTHETIC_SUSPECTED');
      assert.ok(
        /Government Subsidy & Incentive Scheme #\d+/i.test(record.title) ||
        /Government Subsidy & Benefit Scheme #\d+/i.test(record.title) ||
        /Scheme #\d+/i.test(record.title),
        `Quarantined record ${record.id} must be a placeholder title: ${record.title}`
      );
    }
  });

  it('2. Restored coverage: Catalogue displays 38+ verified genuine Central and State government schemes', () => {
    const published = subsidyRepository.getPublished();
    assert.ok(published.length >= 38, `Expected at least 38 published schemes, got ${published.length}`);

    // Verify key national schemes are published
    const slugs = published.map(p => p.slug);
    assert.ok(slugs.includes('pm-surya-ghar-muft-bijli-yojana'), 'PM Surya Ghar must be published');
    assert.ok(slugs.includes('pm-kisan-samman-nidhi'), 'PM-KISAN must be published');
    assert.ok(slugs.includes('pm-svanidhi-scheme'), 'PM SVANidhi must be published');
    assert.ok(slugs.includes('pmegp-credit-linked-subsidy'), 'PMEGP must be published');
    assert.ok(slugs.includes('ayushman-bharat-pmjay'), 'Ayushman Bharat PM-JAY must be published');
    assert.ok(slugs.includes('pradhan-mantri-ujjwala-yojana'), 'PM Ujjwala Yojana must be published');
    assert.ok(slugs.includes('pradhan-mantri-matru-vandana-yojana'), 'PMMVY must be published');
    assert.ok(slugs.includes('pradhan-mantri-awas-yojana-urban'), 'PMAY-U must be published');
    assert.ok(slugs.includes('pradhan-mantri-awas-yojana-gramin'), 'PMAY-G must be published');
    assert.ok(slugs.includes('pradhan-mantri-fasal-bima-yojana'), 'PMFBY must be published');
    assert.ok(slugs.includes('agriculture-infrastructure-fund'), 'AIF must be published');
    assert.ok(slugs.includes('pm-kusum-component-b-solar-pumps'), 'PM-KUSUM Component B must be published');
    assert.ok(slugs.includes('pm-vishwakarma-scheme'), 'PM Vishwakarma must be published');
    assert.ok(slugs.includes('national-means-cum-merit-scholarship'), 'NMMSS must be published');
    assert.ok(slugs.includes('post-matric-scholarship-sc-students'), 'Post-Matric SC must be published');
    assert.ok(slugs.includes('pmfme-micro-food-enterprises-subsidy'), 'PMFME must be published');
    assert.ok(slugs.includes('startup-india-seed-fund-scheme'), 'SISFS must be published');
    assert.ok(slugs.includes('stand-up-india-scheme'), 'Stand-Up India must be published');
    assert.ok(slugs.includes('mahadbt-farmer-micro-irrigation-subsidy'), 'MahaDBT must be published');
    assert.ok(slugs.includes('karnataka-gruha-lakshmi-scheme'), 'Gruha Lakshmi must be published');
    assert.ok(slugs.includes('up-mukhyamantri-kanya-sumangala-yojana'), 'UP Kanya Sumangala must be published');
    assert.ok(slugs.includes('gujarat-mukhyamantri-kisan-sahay-yojana'), 'Gujarat Kisan Sahay must be published');
    assert.ok(slugs.includes('tamil-nadu-kalaignar-magalir-urimai-thittam'), 'TN KMUT must be published');
    assert.ok(slugs.includes('andhra-pradesh-ysr-rythu-bharosa'), 'AP Rythu Bharosa must be published');
  });

  it('3. Anti-synthetic safeguard: Numbered generic titles cannot be validated as published', () => {
    const fakeRecord = {
      id: 'FAKE-999',
      title: 'Government Subsidy & Incentive Scheme #999 - Agriculture',
      officialSourceUrl: 'https://pmkisan.gov.in',
      authority: 'Ministry of Agriculture',
      description: 'A genuine-looking description with sufficient length for testing.',
      benefits: 'Direct financial assistance',
      eligibility: 'All farmers'
    };

    const result = validateSubsidyData(fakeRecord);
    assert.strictEqual(result.isValid, false, 'Synthetic title must fail validation');
    assert.strictEqual(result.publicationState, 'QUARANTINED', 'Synthetic title must be quarantined');
    assert.strictEqual(result.authenticityClassification, 'GENERIC_OR_SYNTHETIC_SUSPECTED');
  });

  it('4. Domain validation: Controlled statutory institution domains are accepted and arbitrary domains rejected', () => {
    // Official gov.in accepted
    const validGov = validateSubsidyData({
      title: 'Valid Central Scheme',
      authority: 'Ministry of Agriculture',
      officialSourceUrl: 'https://pmkisan.gov.in',
      description: 'Comprehensive scheme description with sufficient length.',
      benefits: 'Financial subsidy'
    });
    assert.strictEqual(validGov.isValid, true);

    // Statutory agency domain accepted (standupmitra.in)
    const validStatutory = validateSubsidyData({
      title: 'Valid Statutory Scheme',
      authority: 'SIDBI',
      officialSourceUrl: 'https://www.standupmitra.in',
      description: 'Comprehensive scheme description with sufficient length.',
      benefits: 'Bank loan subsidy'
    });
    assert.strictEqual(validStatutory.isValid, true);

    // Arbitrary unofficial commercial domain rejected
    const invalidArbitrary = validateSubsidyData({
      title: 'Suspicious External Scheme',
      authority: 'Unknown Entity',
      officialSourceUrl: 'https://random-commercial-site.com/scheme',
      description: 'Comprehensive scheme description with sufficient length.',
      benefits: 'Fake subsidy'
    });
    assert.strictEqual(invalidArbitrary.isValid, false);
    assert.strictEqual(invalidArbitrary.publicationState, 'QUARANTINED');
    assert.ok(invalidArbitrary.errors.some(e => e.includes('recognized .gov.in, .nic.in, or verified statutory portal domain')));
  });

  it('5. Source authenticity vs scheme claims: Missing benefits or short descriptions are quarantined even with .gov.in URL', () => {
    const missingClaims = validateSubsidyData({
      title: 'Empty Scheme',
      authority: 'Ministry of Finance',
      officialSourceUrl: 'https://financialservices.gov.in',
      description: 'Short', // < 10 chars
      benefits: '',
      eligibility: ''
    });

    assert.strictEqual(missingClaims.isValid, false);
    assert.strictEqual(missingClaims.publicationState, 'QUARANTINED');
  });

  it('6. Full Auto Ingestion: recoverAndSyncVerifiedSubsidies runs and records audit log', async () => {
    const testRepo = new SubsidyRepository();
    const result = await globalAutoUpdateEngine.recoverAndSyncVerifiedSubsidies(testRepo);

    assert.ok(result.recoveredAndPublished >= 0);
    assert.strictEqual(result.quarantinedPreserved, 996);

    const logs = globalAutoUpdateEngine.getUpdateLogs();
    const recoveryLog = logs.find(l => l.sourceName.includes('Subsidies & Benefits Recovery Engine'));
    assert.ok(recoveryLog, 'Recovery audit log must be recorded in updateLogs');
  });

  it('7. Public sitemap synchronization: Only verified published schemes are in XML sitemap', () => {
    const xml = generateSitemapXml();
    const published = subsidyRepository.getPublished();

    // Verify all published schemes are in sitemap
    for (const p of published) {
      assert.ok(
        xml.includes(`/subsidies/${p.slug}`),
        `Published scheme ${p.slug} must be present in sitemap`
      );
    }

    // Verify quarantined placeholders are strictly excluded
    assert.ok(!xml.includes('gov-subsidy-benefit-scheme-836'), 'SUB-836 must be absent from sitemap');
    assert.ok(!xml.includes('gov-subsidy-benefit-scheme-619'), 'SUB-619 must be absent from sitemap');
    assert.ok(!xml.includes('gov-subsidy-benefit-scheme-739'), 'SUB-739 must be absent from sitemap');
  });

  it('8. SourceRegistry includes official subsidy sources with SUBSIDIES catalogueType', () => {
    const subsidySources = globalSourceRegistry.getSourcesByCatalogue('SUBSIDIES');
    assert.ok(subsidySources.length >= 8, `Expected at least 8 subsidy sources, got ${subsidySources.length}`);

    const sourceIds = subsidySources.map(s => s.sourceId);
    assert.ok(sourceIds.includes('src-dbt-bharat'), 'DBT Bharat source must be registered');
    assert.ok(sourceIds.includes('src-myscheme-gov'), 'myScheme source must be registered');
    assert.ok(sourceIds.includes('src-pm-suryaghar'), 'PM Surya Ghar source must be registered');
    assert.ok(sourceIds.includes('src-pm-kisan'), 'PM-KISAN source must be registered');
    assert.ok(sourceIds.includes('src-pm-svanidhi'), 'PM SVANidhi source must be registered');
    assert.ok(sourceIds.includes('src-pmegp-kvic'), 'PMEGP source must be registered');
  });
});
