import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildDataGovInResourceUrl,
  getDataGovInApiKey,
  fetchDataGovInResource,
  dataGovInService
} from '../src/services/dataGovInService';

describe('Data.gov.in (OGD Platform India) Service & API URL Tests', () => {
  const sampleResourceId = '9ef84268-d588-465a-a308-a864a43d0070';
  const sampleApiKey = '579b464db66ec23bdd000001testkey123';

  it('1. Constructs exact official query URL with default limit 100 and format=json', () => {
    const url = buildDataGovInResourceUrl(sampleResourceId, { apiKey: sampleApiKey });
    const expected = `https://api.data.gov.in/resource/${sampleResourceId}?api-key=${sampleApiKey}&format=json&limit=100`;
    assert.equal(url, expected);
  });

  it('2. Properly incorporates offset and filter parameters', () => {
    const url = buildDataGovInResourceUrl(sampleResourceId, {
      apiKey: sampleApiKey,
      limit: 50,
      offset: 100,
      filters: { state: 'Delhi' }
    });
    assert.ok(url.includes(`api-key=${sampleApiKey}`));
    assert.ok(url.includes('format=json'));
    assert.ok(url.includes('limit=50'));
    assert.ok(url.includes('offset=100'));
    assert.ok(url.includes('filters[state]=Delhi'));
  });

  it('3. Resolves API key from environment or fallback', () => {
    process.env.DATA_GOV_IN_API_KEY = sampleApiKey;
    const resolvedKey = getDataGovInApiKey();
    assert.equal(resolvedKey, sampleApiKey);

    const autoUrl = buildDataGovInResourceUrl(sampleResourceId);
    assert.equal(
      autoUrl,
      `https://api.data.gov.in/resource/${sampleResourceId}?api-key=${sampleApiKey}&format=json&limit=100`
    );
  });

  it('4. Handles missing API key gracefully without throwing', async () => {
    const result = await fetchDataGovInResource(sampleResourceId, { apiKey: '' });
    assert.equal(result.success, false);
    assert.ok(result.error?.includes('DATA_GOV_IN_API_KEY'));
    assert.deepEqual(result.records, []);
  });

  it('5. dataGovInService export exposes all required helper methods', () => {
    assert.equal(typeof dataGovInService.buildResourceUrl, 'function');
    assert.equal(typeof dataGovInService.fetchResource, 'function');
    assert.equal(typeof dataGovInService.getApiKey, 'function');
  });
});
