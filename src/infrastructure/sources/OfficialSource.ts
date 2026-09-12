export type SourceCategory = 
  | 'CENTRAL_GOVERNMENT'
  | 'STATE_GOVERNMENT'
  | 'REGULATOR'
  | 'PSU'
  | 'PROCUREMENT_PORTAL'
  | 'INVESTMENT_PORTAL'
  | 'OFFICIAL_NEWS';

export type AuthorityType = 'MINISTRY' | 'DEPARTMENT' | 'REGULATOR' | 'PSU' | 'OTHER';

export interface OfficialSource {
  id: string;
  name: string;
  authority: string;
  authorityType: AuthorityType;
  sourceCategory: SourceCategory;
  officialUrl: string;
  sourceType: string;
  scope: 'Central' | 'State' | 'National' | 'Multi-State';
  country: string;
  stateOrUT?: string;
  domain: string;
  description: string;
  verificationStatus: 'VERIFIED' | 'NEEDS_REVIEW' | 'UNVERIFIED';
  lastVerified: string;
  verificationFrequency: 'Weekly' | 'Monthly' | 'Quarterly' | 'As Needed';
  active: boolean;
  notes?: string;
}
