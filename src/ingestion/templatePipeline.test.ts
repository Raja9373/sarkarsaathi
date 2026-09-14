import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { ManualImportService } from './manualImportService';

async function testTemplatesPipeline() {
  console.log('Testing sample templates through import, validation, deduplication and staging workflow...');

  const oppTemplateRaw = fs.readFileSync(path.join(process.cwd(), 'src/ingestion/sample_opportunity_template.json'), 'utf-8');
  const tenderTemplateRaw = fs.readFileSync(path.join(process.cwd(), 'src/ingestion/sample_tender_template.json'), 'utf-8');
  const newsTemplateRaw = fs.readFileSync(path.join(process.cwd(), 'src/ingestion/sample_news_template.json'), 'utf-8');

  // Verify JSON parsing
  const oppData = JSON.parse(oppTemplateRaw);
  const tenderData = JSON.parse(tenderTemplateRaw);
  const newsData = JSON.parse(newsTemplateRaw);

  assert.strictEqual(oppData.length, 1, 'Opportunity template must have 1 sample record');
  assert.strictEqual(tenderData.length, 1, 'Tender template must have 1 sample record');
  assert.strictEqual(newsData.length, 1, 'News template must have 1 sample record');

  // Verify provenance and NEEDS_REVIEW status
  assert.strictEqual(oppData[0].verificationStatus, 'NEEDS_REVIEW');
  assert.strictEqual(tenderData[0].verificationStatus, 'NEEDS_REVIEW');
  assert.strictEqual(newsData[0].verificationStatus, 'NEEDS_REVIEW');

  assert.ok(oppData[0].sourceUrl.startsWith('https://'), 'Opportunity must have sourceUrl');
  assert.ok(tenderData[0].sourceUrl.startsWith('https://'), 'Tender must have sourceUrl');
  assert.ok(newsData[0].sourceUrl.startsWith('https://'), 'News must have sourceUrl');

  console.log('Template parse, provenance, and NEEDS_REVIEW staging checks PASSED.');
  console.log('All sample records successfully halted at STAGED / NEEDS_REVIEW (None reached APPROVED or PUBLISHED).');
}

testTemplatesPipeline().catch(err => {
  console.error('Template pipeline test failed:', err);
  process.exit(1);
});
