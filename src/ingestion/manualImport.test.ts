import { ManualImportService } from './manualImportService';
import { OpportunityRecord } from '../types/opportunity';

// Mock dependencies
const mockPipeline: any = {};
const mockNormalizer = { normalize: (raw: any) => ({ ...raw, id: raw.id || 'new-id' }) };
const mockValidator = { validate: (data: any) => data.id !== 'new-id' };
const mockDeduplicator = { isDuplicate: (data: any) => data.id === 'duplicate-id' };

async function runTests() {
  const service = new ManualImportService(mockPipeline, mockNormalizer, mockValidator, mockDeduplicator, 'OPPORTUNITY');

  // 1. Valid Opportunity CSV
  const csvContent = 'id,title,category\nopp-1,Opp 1,General';
  const csvResult = await service.importFile('test.csv', csvContent);
  console.log('CSV Valid Test:', csvResult.recordsStaged === 1 ? 'PASS' : 'FAIL');

  // 2. Valid Tender JSON
  const jsonContent = JSON.stringify([{ id: 'ten-1', title: 'Ten 1' }]);
  const jsonResult = await service.importFile('test.json', jsonContent);
  console.log('JSON Valid Test:', jsonResult.recordsStaged === 1 ? 'PASS' : 'FAIL');

  // 3. Invalid record (no ID)
  const invalidContent = JSON.stringify([{ title: 'Invalid' }]);
  const invalidResult = await service.importFile('invalid.json', invalidContent);
  console.log('Invalid Test:', invalidResult.recordsInvalid === 1 ? 'PASS' : 'FAIL');

  // 4. Duplicate record
  const duplicateContent = JSON.stringify([{ id: 'duplicate-id', title: 'Duplicate' }]);
  const duplicateResult = await service.importFile('dup.json', duplicateContent);
  console.log('Duplicate Test:', duplicateResult.duplicatesDetected === 1 ? 'PASS' : 'FAIL');
}

runTests().catch(console.error);
