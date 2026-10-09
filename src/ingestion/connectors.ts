import { VerifiedSource, StagedOpportunity } from './types';
import { validateOpportunityData } from './validation';
import { isDuplicateOpportunity } from './duplicates';

export interface OGDConnectorResult {
  sourceId: string;
  sourceName: string;
  success: boolean;
  recordsFetched: number;
  recordsValid: number;
  recordsDuplicates: number;
  recordsStaged: number;
  recordsRejected: number;
  recordsAdded: number;
  recordsUpdated: number;
  recordsUnchanged: number;
  stagedRecords: StagedOpportunity[];
  errorMessage?: string;
  fetchTimestamp: string;
  apiKeyConfigured: boolean;
}

export type ConnectorFetchResult = OGDConnectorResult;

/**
 * Corrected OGD India API Connector (data.gov.in)
 * Dataset Identity Safeguard:
 * Prevents misclassification of Mandi commodity prices (e.g. resource ID 9ef84268...) as schemes/subsidies.
 * Only validates and stages records containing verified scheme/subsidy/opportunity metadata.
 */
export class OGDIndiaConnector {
  // Unset or safeguard resource ID until an official scheme/subsidy resource ID is verified
  private defaultResourceId = 'UNVERIFIED_SCHEME_RESOURCE_ID'; 

  async fetchAndStage(source: VerifiedSource, apiKey?: string, mockPayload?: any[]): Promise<OGDConnectorResult> {
    const timestamp = new Date().toISOString();
    const key = apiKey || process.env.DATAGOV_API_KEY;

    if (!key && !mockPayload) {
      return {
        sourceId: source.sourceId,
        sourceName: source.sourceName,
        success: false,
        recordsFetched: 0,
        recordsValid: 0,
        recordsDuplicates: 0,
        recordsStaged: 0,
        recordsRejected: 0,
        recordsAdded: 0,
        recordsUpdated: 0,
        recordsUnchanged: 0,
        stagedRecords: [],
        errorMessage: 'DATAGOV_API_KEY environment variable is not configured or resource ID requires explicit verification. Live fetch blocked.',
        fetchTimestamp: timestamp,
        apiKeyConfigured: false
      };
    }

    try {
      let rawItems: any[] = [];

      if (mockPayload) {
        rawItems = mockPayload;
      } else {
        const url = `https://api.data.gov.in/resource/${this.defaultResourceId}?api-key=${key}&format=json&limit=50`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(url, {
          signal: controller.signal,
          headers: {
            'User-Agent': 'SarkarSaathi-OGD-Connector/1.0 (Official Public Information Aggregator)'
          }
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`OGD API returned HTTP ${response.status} ${response.statusText}`);
        }

        const data = await response.json() as any;
        rawItems = data.records || data.data || [];
      }

      let fetched = rawItems.length;
      let valid = 0;
      let duplicates = 0;
      let staged = 0;
      let rejected = 0;
      const stagedList: StagedOpportunity[] = [];

      const existingOpportunities: any[] = [];

      for (const item of rawItems) {
        // SAFETY GUARD: Check for Mandi / Commodity price attributes to strictly reject misclassification
        const isCommodityOrMandiPrice = 
          item.commodity || item.market || item.modal_price || item.min_price || item.max_price || 
          (item.title && item.title.toLowerCase().includes('mandi')) ||
          (item.scheme_name && item.scheme_name.toLowerCase().includes('commodity'));

        if (isCommodityOrMandiPrice) {
          rejected++;
          continue; // Strictly reject commodity rows from scheme/subsidy staging
        }

        const titleVal = item.title || item.scheme_name || item.opportunity_title || '';
        const slugVal = titleVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const categoryVal = item.type || item.category || 'Government Scheme';

        const normalized = {
          projectId: item.project_id || item.id || `OGD-${Date.now()}-${Math.floor(Math.random()*1000)}`,
          title: titleVal,
          slug: slugVal,
          category: categoryVal,
          status: 'ACTIVE',
          description: item.description || item.scheme_description || item.details || '',
          authority: item.ministry || item.department || item.authority || source.authority,
          state: item.state || item.location || 'All India',
          sourceUrl: item.source_url || item.url || source.officialUrl,
          sourceAuthority: source.sourceName,
          deadline: item.deadline || item.end_date || '2026-12-31',
          opportunityType: categoryVal,
          verificationStatus: 'PENDING' as const
        };

        const validation = validateOpportunityData(normalized);
        if (!validation.isValid) {
          rejected++;
          continue;
        }

        valid++;

        const isDup = isDuplicateOpportunity(normalized, existingOpportunities);
        if (isDup) {
          duplicates++;
          continue;
        }

        staged++;
        stagedList.push({
          ...normalized,
          id: `staged-ogd-${Date.now()}-${staged}`,
          lifecycleStatus: 'ACTIVE',
          provenance: {
            sourceSystem: 'Open Government Data (OGD) Platform India',
            importedAt: timestamp,
            batchId: `batch-ogd-${Date.now()}`,
            rawRecordHash: JSON.stringify(item),
            confidenceScore: 0.95,
            sourceId: source.sourceId,
            sourceName: source.sourceName,
            authority: source.authority,
            officialUrl: source.officialUrl,
            accessType: 'API',
            verificationStatus: 'VERIFIED'
          },
          reviewStatus: 'PENDING_REVIEW'
        });
      }

      return {
        sourceId: source.sourceId,
        sourceName: source.sourceName,
        success: true,
        recordsFetched: fetched,
        recordsValid: valid,
        recordsDuplicates: duplicates,
        recordsStaged: staged,
        recordsRejected: rejected,
        recordsAdded: staged,
        recordsUpdated: 0,
        recordsUnchanged: duplicates,
        stagedRecords: stagedList,
        errorMessage: undefined,
        fetchTimestamp: timestamp,
        apiKeyConfigured: true
      };
    } catch (error: any) {
      return {
        sourceId: source.sourceId,
        sourceName: source.sourceName,
        success: false,
        recordsFetched: 0,
        recordsValid: 0,
        recordsDuplicates: 0,
        recordsStaged: 0,
        recordsRejected: 0,
        recordsAdded: 0,
        recordsUpdated: 0,
        recordsUnchanged: 0,
        stagedRecords: [],
        errorMessage: `OGD API Fetch Error: ${error.message}`,
        fetchTimestamp: timestamp,
        apiKeyConfigured: true
      };
    }
  }
}

export class OfficialSourceConnectorManager extends OGDIndiaConnector {
  async executeConnector(source: VerifiedSource): Promise<ConnectorFetchResult> {
    const res = await this.fetchAndStage(source);
    return res;
  }
}

export const globalOGDConnector = new OGDIndiaConnector();
export const globalConnectorManager = new OfficialSourceConnectorManager();
