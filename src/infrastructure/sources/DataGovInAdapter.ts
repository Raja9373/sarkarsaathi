import { Opportunity } from '../../types';
import { StagedOpportunity, IngestionProvenance } from '../../ingestion/types';
import { OfficialSourceAdapter, SourceAdapterConfig } from './SourceAdapters';

export const DATA_GOV_IN_CONFIG: SourceAdapterConfig = {
  sourceId: 'data-gov-in-api',
  sourceName: 'data.gov.in',
  baseUrl: process.env.DATA_GOV_IN_BASE_URL || 'https://api.data.gov.in/',
  requiresApiKey: true,
  apiKeyEnvVar: 'DATA_GOV_IN_API_KEY',
  supportedFormats: ['api'],
  rateLimitPerMinute: 60,
};

export class DataGovInAdapter implements OfficialSourceAdapter<any, StagedOpportunity> {
  config = DATA_GOV_IN_CONFIG;

  constructor(private resourceId: string) {}

  async fetchBatch(page: number, limit: number): Promise<{ records: any[]; hasMore: boolean }> {
    if (!process.env.DATA_GOV_IN_API_KEY) {
      throw new Error('DATA_GOV_IN_API_KEY is not configured');
    }

    const offset = (page - 1) * limit;
    // API pattern: GET /resource/{RESOURCE_ID}
    const url = `${this.config.baseUrl}resource/${this.resourceId}?api-key=${process.env.DATA_GOV_IN_API_KEY}&offset=${offset}&limit=${limit}`;
    
    // SAFE IMPLEMENTATION: Mocked fetch for testability/safety per prompt constraints
    console.log(`[Adapter Test] Requesting: ${url}`);
    
    // Return empty results for safe testing
    return { records: [], hasMore: false };
  }

  normalize(raw: any, batchId: string): StagedOpportunity {
    const provenance: IngestionProvenance = {
      sourceSystem: this.config.sourceId,
      importedAt: new Date().toISOString(),
      batchId: batchId,
      rawRecordHash: 'mock-hash', // Hash of raw record should be calculated here
      confidenceScore: 1.0,
    };
    
    return {
      id: raw.id || `dg-${Math.random().toString(36).substr(2, 9)}`,
      title: raw.title || 'Unknown Opportunity',
      slug: (raw.title || 'unknown').toLowerCase().replace(/\s+/g, '-'),
      description: raw.description || '',
      authority: raw.authority || 'Government of India',
      category: 'General',
      status: 'STAGED',
      sourceUrl: `${this.config.baseUrl}resource/${this.resourceId}`,
      sourceAuthority: this.config.sourceName,
      verificationStatus: 'PENDING',
      deadline: new Date().toISOString(),
      fundingAmount: raw.funding || '0',
      lifecycleStatus: 'ACTIVE',
      provenance: provenance,
    };
  }

  validateExpiry(record: StagedOpportunity): 'ACTIVE' | 'UPCOMING' | 'CLOSED' | 'EXPIRED' | 'CANCELLED' {
    return 'ACTIVE';
  }
}
