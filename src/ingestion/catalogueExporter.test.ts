import { exportCataloguesToJSON } from './catalogueExporter';
import assert from 'assert';
import fs from 'fs';

async function testExporter() {
  console.log('Testing catalogue export utility...');
  const filePath = await exportCataloguesToJSON('./test-exports');
  assert.ok(fs.existsSync(filePath), 'Export file must be created');
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  assert.ok(content.metadata.exportedAt, 'Metadata exportedAt required');
  assert.ok(content.catalogues.investments, 'Investments catalogue required');
  assert.ok(content.catalogues.opportunities, 'Opportunities catalogue required');
  assert.ok(content.catalogues.tenders, 'Tenders catalogue required');
  assert.ok(content.catalogues.news, 'News catalogue required');
  assert.ok(content.catalogues.schemes, 'Schemes catalogue required');
  console.log('Catalogue export test PASSED successfully.');
}

testExporter().catch(err => {
  console.error('Exporter test failed:', err);
  process.exit(1);
});
