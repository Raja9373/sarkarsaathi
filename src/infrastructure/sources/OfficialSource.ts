export type SourceCategory = 
  | 'CENTRAL_GOVERNMENT'
  | 'STATE_GOVERNMENT'
  | 'REGULATOR'
  | 'PSU'
  | 'PROCUREMENT_PORTAL'
  | 'INVESTMENT_PORTAL'
  | 'OFFICIAL_NEWS';

export interface OfficialSource {
  id: string;
  name: string;
  authority: string;
  sourceCategory: SourceCategory;
  officialUrl: string;
  jurisdiction: 'Central' | 'State' | 'National' | 'Multi-State';
  supportedDataTypes: string[];
  verificationFrequency: 'Weekly' | 'Monthly' | 'Quarterly' | 'As Needed';
  active: boolean;
  notes?: string;
}
