/**
 * Diagnostic test script for OGD India API Connector (data.gov.in)
 * Attempts a single fetch using the DATAGOV_API_KEY environment variable and logs
 * HTTP status code, response headers, and the first item of the payload.
 */
export async function testOgdaApiConnection(resourceId?: string, apiKey?: string): Promise<{
  success: boolean;
  statusCode?: number;
  headers?: Record<string, string>;
  firstItem?: any;
  error?: string;
}> {
  const key = apiKey || process.env.DATAGOV_API_KEY;
  const targetResource = resourceId || '3b01bcb8-0b14-4abf-b4f2-c1c118adba9e'; // official sample resource if configured

  if (!key) {
    console.warn('[OGD Test] DATAGOV_API_KEY is not set in environment. Skipping live diagnostic fetch.');
    return {
      success: false,
      error: 'DATAGOV_API_KEY not configured'
    };
  }

  const url = `https://api.data.gov.in/resource/${targetResource}?api-key=${key}&format=json&limit=1`;
  console.log(`[OGD Test] Initiating diagnostic fetch to: https://api.data.gov.in/resource/${targetResource}`);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'SarkarSaathi-Diagnostic-Connector/1.0 (Official Public Information Aggregator)'
      }
    });
    clearTimeout(timeoutId);

    const headersObj: Record<string, string> = {};
    response.headers.forEach((value, name) => {
      headersObj[name] = value;
    });

    console.log(`[OGD Test] HTTP Status Code: ${response.status} ${response.statusText}`);
    console.log('[OGD Test] Response Headers:', JSON.stringify(headersObj, null, 2));

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[OGD Test] Error Response Body: ${errorText}`);
      return {
        success: false,
        statusCode: response.status,
        headers: headersObj,
        error: `HTTP ${response.status} ${response.statusText}: ${errorText}`
      };
    }

    const data = await response.json() as any;
    const records = data.records || data.data || [];
    const firstItem = records.length > 0 ? records[0] : null;

    console.log('[OGD Test] Payload First Item:', JSON.stringify(firstItem, null, 2));

    return {
      success: true,
      statusCode: response.status,
      headers: headersObj,
      firstItem
    };
  } catch (err: any) {
    console.error('[OGD Test] Fetch Exception:', err.message);
    return {
      success: false,
      error: err.message
    };
  }
}

if (typeof process !== 'undefined' && process.argv[1]?.endsWith('testOgdaConnector.ts')) {
  testOgdaApiConnection().then(res => {
    console.log('[OGD Test Result]:', JSON.stringify(res, null, 2));
  });
}
