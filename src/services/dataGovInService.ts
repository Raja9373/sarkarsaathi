/**
 * src/services/dataGovInService.ts
 *
 * Official Data.gov.in (Open Government Data Platform India) API Client Service.
 * Provides query URL generation and robust resource retrieval according to the OGD Platform standard:
 * https://api.data.gov.in/resource/{resource-id}?api-key=${DATA_GOV_IN_API_KEY}&format=json&limit=100
 */

export interface DataGovInQueryOptions {
  apiKey?: string;
  limit?: number;
  offset?: number;
  format?: 'json' | 'xml' | 'csv';
  filters?: Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
}

export interface DataGovInResponse<T = Record<string, any>> {
  success: boolean;
  resourceId: string;
  records: T[];
  totalRecords?: number;
  count?: number;
  title?: string;
  description?: string;
  url?: string;
  status?: number;
  error?: string;
}

/**
 * Resolves the Data.gov.in API key from environment variables across
 * Node.js (process.env) and Vite client (import.meta.env) contexts.
 */
export function getDataGovInApiKey(): string | undefined {
  if (typeof process !== 'undefined' && process.env) {
    if (process.env.DATA_GOV_IN_API_KEY) return process.env.DATA_GOV_IN_API_KEY;
    if (process.env.DATAGOV_API_KEY) return process.env.DATAGOV_API_KEY;
  }
  try {
    // Check Vite browser environment
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      if (import.meta.env.VITE_DATA_GOV_IN_API_KEY) return import.meta.env.VITE_DATA_GOV_IN_API_KEY;
      // @ts-ignore
      if (import.meta.env.DATA_GOV_IN_API_KEY) return import.meta.env.DATA_GOV_IN_API_KEY;
    }
  } catch {
    // Ignore context access errors
  }
  return undefined;
}

/**
 * Builds the official Data.gov.in resource query URL adhering strictly to:
 * https://api.data.gov.in/resource/{resource-id}?api-key=${DATA_GOV_IN_API_KEY}&format=json&limit=100
 */
export function buildDataGovInResourceUrl(
  resourceId: string,
  options?: DataGovInQueryOptions
): string {
  const key = options?.apiKey || getDataGovInApiKey() || '';
  const limit = options?.limit !== undefined ? options.limit : 100;
  const format = options?.format || 'json';
  const cleanResourceId = encodeURIComponent(resourceId.trim());

  let url = `https://api.data.gov.in/resource/${cleanResourceId}?api-key=${key}&format=${format}&limit=${limit}`;

  if (options?.offset !== undefined && options.offset > 0) {
    url += `&offset=${options.offset}`;
  }

  if (options?.filters) {
    for (const [filterKey, filterValue] of Object.entries(options.filters)) {
      if (filterValue !== undefined && filterValue !== '') {
        url += `&filters[${encodeURIComponent(filterKey)}]=${encodeURIComponent(filterValue)}`;
      }
    }
  }

  return url;
}

/**
 * Executes a resilient fetch against the Data.gov.in API with timeouts,
 * graceful fallback, and typed return values.
 */
export async function fetchDataGovInResource<T = Record<string, any>>(
  resourceId: string,
  options?: DataGovInQueryOptions
): Promise<DataGovInResponse<T>> {
  const key = options?.apiKey !== undefined ? options.apiKey : getDataGovInApiKey();

  if (!key) {
    return {
      success: false,
      resourceId,
      records: [],
      error: 'DATA_GOV_IN_API_KEY environment variable is not configured. Live integration disabled gracefully.'
    };
  }

  const url = buildDataGovInResourceUrl(resourceId, { ...options, apiKey: key });

  try {
    const controller = new AbortController();
    const timeoutMs = options?.timeoutMs || 8000;
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const signal = options?.signal
      ? (typeof AbortSignal.any === 'function' ? AbortSignal.any([controller.signal, options.signal]) : controller.signal)
      : controller.signal;

    const response = await fetch(url, {
      signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'SarkarSaathi-DataGovInClient/1.0 (Government Scheme and Public Opportunity Aggregator)'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      return {
        success: false,
        resourceId,
        records: [],
        status: response.status,
        url,
        error: `HTTP ${response.status} ${response.statusText}: ${errText.slice(0, 200)}`
      };
    }

    const payload = (await response.json()) as any;
    const records: T[] = Array.isArray(payload.records)
      ? payload.records
      : Array.isArray(payload.data)
        ? payload.data
        : [];

    return {
      success: true,
      resourceId,
      records,
      totalRecords: payload.total !== undefined ? Number(payload.total) : records.length,
      count: payload.count !== undefined ? Number(payload.count) : records.length,
      title: payload.title || payload.desc || undefined,
      description: payload.desc || undefined,
      url,
      status: response.status
    };
  } catch (err: any) {
    return {
      success: false,
      resourceId,
      records: [],
      url,
      error: err?.message || 'Network error while contacting api.data.gov.in'
    };
  }
}

export const dataGovInService = {
  getApiKey: getDataGovInApiKey,
  buildResourceUrl: buildDataGovInResourceUrl,
  fetchResource: fetchDataGovInResource
};
