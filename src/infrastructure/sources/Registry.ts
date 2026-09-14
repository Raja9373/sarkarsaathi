
export interface SourceRegistryEntry {
  name: string;
  url: string;
  catalogType: 'Opportunities' | 'Tenders' | 'News' | 'Investments' | 'Investment Schemes';
  accessMethod: 'Manual Export/Upload' | 'API (Authenticated)' | 'Public Download';
  provenanceRequirement: string;
  verificationRequirement: string;
  notes: string;
}

export const sourceRegistry: Record<string, SourceRegistryEntry> = {
  investIndia: {
    name: 'Invest India / IIG',
    url: 'https://www.investindia.gov.in/',
    catalogType: 'Opportunities',
    accessMethod: 'Manual Export/Upload',
    provenanceRequirement: 'Full source URL and date of export.',
    verificationRequirement: 'Cross-reference with official policy circulars.',
    notes: 'No automated API; requires manual export by authorized admin.',
  },
  startupIndia: {
    name: 'Startup India / DPIIT',
    url: 'https://www.startupindia.gov.in/',
    catalogType: 'Opportunities',
    accessMethod: 'Manual Export/Upload',
    provenanceRequirement: 'Official scheme document URL.',
    verificationRequirement: 'Verify active status on portal.',
    notes: 'Primary source for govt startup grants. Includes resources from DPIIT (dpiit.gov.in).',
  },
  dataGovIn: {
    name: 'data.gov.in',
    url: 'https://data.gov.in',
    catalogType: 'Opportunities',
    accessMethod: 'API (Authenticated)',
    provenanceRequirement: 'API reference and data ID.',
    verificationRequirement: 'Dataset metadata audit.',
    notes: 'Requires API key; manual extraction or authorized app link.',
  },
  cppp: {
    name: 'CPPP / eprocure.gov.in',
    url: 'https://eprocure.gov.in/',
    catalogType: 'Tenders',
    accessMethod: 'Manual Export/Upload',
    provenanceRequirement: 'Tender ID and published date.',
    verificationRequirement: 'Manual check against official tender notice.',
    notes: 'No public automated route.',
  },
  gem: {
    name: 'GeM / gem.gov.in',
    url: 'https://gem.gov.in',
    catalogType: 'Tenders',
    accessMethod: 'Manual Export/Upload',
    provenanceRequirement: 'Official tender documents URL.',
    verificationRequirement: 'Verify active status on portal.',
    notes: 'Only legitimate publicly/exportable data.',
  },
};
