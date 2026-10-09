import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { globalSafeTenderImportPipeline } from '../src/ingestion/tenderImportPipeline';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { tenderRepository } from '../src/infrastructure/repositories/InvestmentRepository';

describe('Phase 11E: Safe Official Tender Import Pipeline Tests', () => {
  it('1. Valid CSV tender export is parsed, validated, and staged for admin review', async () => {
    const csvContent = `id,title,description,authority,category,sourceAuthority,sourceUrl,tenderValue,submissionDeadline,location
NIC-PROC-2026-901,Procurement of Cloud Blade Servers,Supply and maintenance of Blade servers for National Data Centre.,National Informatics Centre,IT Hardware,NIC CPPP,https://eprocure.gov.in/app,₹5.50 Crores,2026-11-30,New Delhi`;

    const summary = await globalSafeTenderImportPipeline.processTenderImportFile({
      filename: 'official_nic_tenders.csv',
      fileContent: csvContent,
      sourceSystem: 'Central Public Procurement Portal (CPPP)'
    });

    assert.equal(summary.format, 'CSV');
    assert.equal(summary.totalRowsRead, 1);
    assert.equal(summary.validRows, 1);
    assert.equal(summary.stagedCount, 1);
    assert.equal(summary.rejectedRows, 0);
    assert.equal(summary.duplicatesDetected, 0);
  });

  it('2. Valid JSON tender export is parsed and staged with provenance', async () => {
    const jsonContent = JSON.stringify([
      {
        id: 'MEITY-TND-2026-88',
        title: 'Development of AI Citizen Helpdesk Portal',
        description: 'Design and implementation of cloud-native AI portal.',
        authority: 'MeitY',
        category: 'Software Development',
        sourceAuthority: 'MeitY Procurement',
        sourceUrl: 'https://eprocure.gov.in/app',
        tenderValue: '₹2.80 Crores',
        submissionDeadline: '2026-12-15',
        location: 'New Delhi'
      }
    ]);

    const summary = await globalSafeTenderImportPipeline.processTenderImportFile({
      filename: 'meity_tenders.json',
      fileContent: jsonContent,
      sourceSystem: 'MeitY E-Procurement Portal'
    });

    assert.equal(summary.format, 'JSON');
    assert.equal(summary.stagedCount, 1);
  });

  it('3. Duplicate tender ID is detected and rejected', async () => {
    const existingTender = tenderRepository.getAll()[0];
    assert.ok(existingTender);

    const dupCsv = `id,title,description,authority,category,sourceAuthority,sourceUrl,tenderValue,submissionDeadline,location
${existingTender.id},${existingTender.title},${existingTender.description},${existingTender.authority},IT,NIC,https://eprocure.gov.in,₹1 Cr,2026-12-31,Delhi`;

    const summary = await globalSafeTenderImportPipeline.processTenderImportFile({
      filename: 'duplicate_test.csv',
      fileContent: dupCsv,
      sourceSystem: 'CPPP Export'
    });

    assert.equal(summary.duplicatesDetected, 1);
    assert.equal(summary.stagedCount, 0);
  });

  it('4. Malformed record missing required fields is rejected with error details', async () => {
    const badCsv = `id,title,description,authority,category,sourceAuthority,sourceUrl,tenderValue,submissionDeadline,location
BAD-01,Short,Missing description,NIC,IT,NIC,not-a-url,,2026-12-31,Delhi`;

    const summary = await globalSafeTenderImportPipeline.processTenderImportFile({
      filename: 'bad_test.csv',
      fileContent: badCsv,
      sourceSystem: 'CPPP Export'
    });

    assert.equal(summary.rejectedRows, 1);
    assert.equal(summary.stagedCount, 0);
    assert.ok(summary.errors.length > 0);
  });

  it('5. Expired submission deadline is flagged', async () => {
    const expiredCsv = `id,title,description,authority,category,sourceAuthority,sourceUrl,tenderValue,submissionDeadline,location
EXP-01,Expired Equipment Procurement,Supply of legacy networking gear.,NIC,Hardware,NIC,https://eprocure.gov.in,₹50 Lakhs,2020-01-01,Delhi`;

    const summary = await globalSafeTenderImportPipeline.processTenderImportFile({
      filename: 'expired_test.csv',
      fileContent: expiredCsv,
      sourceSystem: 'CPPP Export'
    });

    assert.equal(summary.stagedCount, 1);
    assert.equal(summary.expiredDeadlinesDetected, 1);
  });

  it('6. Phase 9 subsidy quarantine and Phase 10A sitemap protections remain intact', () => {
    const published = subsidyRepository.getPublished();
    const quarantined = subsidyRepository.getQuarantined();
    assert.equal(published.length, 4);
    assert.equal(quarantined.length, 996);

    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    assert.equal(sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing'), false);
    assert.ok(sitemapContent.includes('anrf-core-research-grant-autumn'));
  });
});
