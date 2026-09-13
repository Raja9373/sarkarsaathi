import { IOfficialDataSource } from '../../types/infrastructure';
import { TenderRecord } from '../../types/tender';
import { MockTenderRepository } from '../repositories/TenderRepository';

export class OpenGovDataTenderSource implements IOfficialDataSource {
  sourceId = 'ogd-india-tender-poc';
  sourceName = 'Open Government Data Platform India (CPPP API)';
  officialSourceUrl = 'https://data.gov.in';

  private tenderRepo = new MockTenderRepository();

  async fetchData(): Promise<TenderRecord[]> {
    const meta = import.meta as unknown as { env?: Record<string, string> };
    const apiKey = 
      (typeof process !== 'undefined' && process.env?.DATA_GOV_IN_API_KEY) ||
      (meta && meta.env?.VITE_DATA_GOV_IN_API_KEY);

    if (!apiKey) {
      console.warn('DATA_GOV_IN_API_KEY environment variable is missing. OpenGovDataTenderSource is safely disabled / fail-closed (0 records returned).');
      return [];
    }

    try {
      const resourceId = (meta && meta.env?.VITE_DATA_GOV_RESOURCE_ID) || '9ef84268-d588-465a-a308-a864a43d0070';
      const url = `https://api.data.gov.in/resource/${resourceId}?api-key=${apiKey}&format=json&limit=3`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch from data.gov.in API: ${response.statusText}`);
      }

      const json = await response.json();
      const records = json.records || json.data || [];
      const limitedRecords = records.slice(0, 3); // Max 3 records

      const existingTenders = await this.tenderRepo.getAll();
      const existingIds = new Set(existingTenders.map(t => t.tenderId || t.id));

      const normalizedTenders: TenderRecord[] = [];

      for (const raw of limitedRecords) {
        const tenderId = raw.tender_id || raw.tenderId || `cppp-${Math.random().toString(36).substring(2, 9)}`;
        
        // Deduplicate against existing records
        if (existingIds.has(tenderId)) {
          continue;
        }

        const normalized: TenderRecord = {
          id: `ogd-${tenderId}`,
          tenderId,
          referenceNumber: raw.reference_number || raw.tender_ref_no || tenderId,
          slug: (raw.title || 'tender').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
          title: raw.title || raw.tender_title || 'Untitled Tender',
          description: raw.description || raw.tender_description || 'No description provided',
          organisation: raw.organisation || raw.ministry || 'Government of India',
          department: raw.department || 'Central Procurement',
          issuingAuthority: raw.issuing_authority || raw.organisation || 'CPPP',
          state: raw.state || 'Pan-India',
          tenderCategory: raw.category || 'Goods',
          procurementCategory: raw.procurement_category || 'General',
          publishDate: raw.publish_date || new Date().toISOString().split('T')[0],
          submissionDeadline: raw.closing_date || raw.submission_deadline || new Date().toISOString().split('T')[0],
          status: 'ACTIVE',
          corrigendumAvailable: false,
          corrigendumCount: 0,
          sourceName: 'CPPP (data.gov.in)',
          sourceUrl: raw.source_url || 'https://eprocure.gov.in',
          sourcePortal: 'eprocure.gov.in',
          lastVerifiedAt: new Date().toISOString().split('T')[0],
          verificationStatus: 'NEEDS_REVIEW', // Staged flow, auto-publish OFF
          seoTitle: raw.title || 'Tender',
          seoDescription: raw.description || 'Tender details',
          canonicalUrl: `https://www.sarkarsaathi.org/tenders/${tenderId}`
        };

        if (this.validate(normalized)) {
          normalizedTenders.push(normalized);
        }
      }

      return normalizedTenders;
    } catch (err) {
      console.error('Error fetching data.gov.in CPPP tenders:', err);
      return [];
    }
  }

  validate(data: TenderRecord): boolean {
    return Boolean(data.tenderId && data.title && data.sourceUrl);
  }

  compare(existing: TenderRecord, incoming: TenderRecord): any[] {
    return [];
  }
}

