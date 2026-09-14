import { Opportunity, Tender } from '../../types';
import { StagedOpportunity, StagedTender, IngestionProvenance } from '../../ingestion/types';

export interface SourceAdapterConfig {
  sourceId: string;
  sourceName: string;
  baseUrl: string;
  requiresApiKey: boolean;
  apiKeyEnvVar?: string;
  supportedFormats: ('json' | 'csv' | 'api')[];
  rateLimitPerMinute: number;
}

export interface OfficialSourceAdapter<T, S> {
  config: SourceAdapterConfig;
  fetchBatch(page: number, limit: number): Promise<{ records: T[]; hasMore: boolean; totalAvailable?: number }>;
  normalize(raw: T, batchId: string): S;
  validateExpiry(record: S): 'ACTIVE' | 'UPCOMING' | 'CLOSED' | 'EXPIRED' | 'CANCELLED';
}

export const OPEN_GOV_DATA_CONFIG: SourceAdapterConfig = {
  sourceId: 'data-gov-in-open-api',
  sourceName: 'Open Government Data (OGD) Platform India / data.gov.in',
  baseUrl: 'https://data.gov.in/api/3/action/resource_search',
  requiresApiKey: true,
  apiKeyEnvVar: 'DATA_GOV_API_KEY',
  supportedFormats: ['json', 'api'],
  rateLimitPerMinute: 30,
};

export const CPPP_TENDER_CONFIG: SourceAdapterConfig = {
  sourceId: 'cppp-eprocure-portal',
  sourceName: 'Central Public Procurement Portal (CPP Portal) / eprocure.gov.in',
  baseUrl: 'https://eprocure.gov.in/cppp/',
  requiresApiKey: false, // Access requires public download / manual batch file drop or authorized gateway
  supportedFormats: ['json', 'csv'],
  rateLimitPerMinute: 10,
};

export const INVEST_INDIA_CONFIG: SourceAdapterConfig = {
  sourceId: 'invest-india-portal',
  sourceName: 'Invest India National Investment Promotion & Facilitation Agency',
  baseUrl: 'https://www.investindia.gov.in',
  requiresApiKey: false,
  supportedFormats: ['json', 'csv'],
  rateLimitPerMinute: 20,
};
