import { OfficialSource } from './OfficialSource';
import { IOfficialDataSource } from '../../types/infrastructure';
import { OpportunityRecord } from '../../types/opportunity';

export class OpenGovDataOpportunitySource implements IOfficialDataSource {
  sourceId = 'ogd-india-opp-poc';
  sourceName = 'Open Government Data Platform India (POC)';
  officialSourceUrl = 'https://data.gov.in';

  async fetchData(): Promise<OpportunityRecord[]> {
    console.warn('Live ingestion from data.gov.in is currently DISABLED for this POC.');
    // Return controlled, normalized sample data.
    return [
      { id: 'ogd-opp-1', slug: 'opp-1', title: 'Opportunity 1', shortSummary: 'Summary 1', description: 'Desc 1', opportunityType: 'Type', sector: 'Sector', industry: 'Ind', authority: 'Auth', organisation: 'Org', state: 'State', projectStage: 'Stage', participationType: 'Type', eligibility: 'Elig', applicationProcess: 'Proc', status: 'OPEN', lastVerifiedAt: '2026-09-13', verificationStatus: 'NEEDS_REVIEW', officialSourceUrl: this.officialSourceUrl, sourceAuthority: 'Auth', sourceType: 'Data', tags: [], seoTitle: 'SEO', seoDescription: 'SEO', canonicalUrl: 'url' },
    ] as OpportunityRecord[];
  }
  validate(data: any): boolean { return true; }
  compare(existing: any, incoming: any): any[] { return []; }
}
