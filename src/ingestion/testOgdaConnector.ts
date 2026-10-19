/**
 * src/ingestion/testOgdaConnector.ts
 * Uses the DATAGOV_API_KEY to fetch from the data.gov.in API, logging the HTTP status
 * and a sample record to verify connectivity.
 */
export async function testOgdaConnector(resourceId?: string, apiKey?: string): Promise<{
  success: boolean;
  status?: number;
  sampleRecord?: any;
  error?: string;
}> {
  const key = apiKey || (typeof process !== 'undefined' ? process.env.DATAGOV_API_KEY : undefined);
  const resource = resourceId || '3b01bcb8-0b14-4abf-b4f2-c1c118adba9e'; // official sample resource

  if (!key) {
    console.warn('[OGD Connector Test] DATAGOV_API_KEY is not configured in the environment.');
    return {
      success: false,
      error: 'DATAGOV_API_KEY missing'
    };
  }

  const url = `https://api.data.gov.in/resource/${resource}?api-key=${key}&format=json&limit=1`;
  console.log(`[OGD Connector Test] Fetching from: https://api.data.gov.in/resource/${resource}`);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'SarkarSaathi-TestConnector/1.0'
      }
    });
    clearTimeout(timeout);

    console.log(`[OGD Connector Test] HTTP Status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errBody = await response.text();
      console.error(`[OGD Connector Test] Error Response: ${errBody}`);
      return {
        success: false,
        status: response.status,
        error: `HTTP ${response.status}: ${errBody}`
      };
    }

    const data = await response.json() as any;
    const records = data.records || data.data || [];
    const sampleRecord = records.length > 0 ? records[0] : null;

    console.log('[OGD Connector Test] Sample Record:', JSON.stringify(sampleRecord, null, 2));

    return {
      success: true,
      status: response.status,
      sampleRecord
    };
  } catch (err: any) {
    console.error('[OGD Connector Test] Exception:', err.message);
    return {
      success: false,
      error: err.message
    };
  }
}

if (typeof process !== 'undefined' && process.argv[1]?.endsWith('testOgdaConnector.ts')) {
  testOgdaConnector().then(res => {
    console.log('[OGD Connector Test Result]:', JSON.stringify(res, null, 2));
  });
}
