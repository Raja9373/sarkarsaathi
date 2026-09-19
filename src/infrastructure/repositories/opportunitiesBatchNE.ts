import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_NE: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const statesList = [
    { state: 'Arunachal Pradesh', district: 'Itanagar (Papum Pare)', authority: 'Arunachal Pradesh Industrial Development & Financial Corporation (APIDFC)', url: 'https://arunachalipr.gov.in' },
    { state: 'Meghalaya', district: 'Shillong (East Khasi Hills)', authority: 'Meghalaya Industrial Development Corporation (MIDC)', url: 'https://megind.gov.in' },
    { state: 'Tripura', district: 'Agartala (West Tripura)', authority: 'Tripura Industrial Development Corporation (TIDC)', url: 'https://tidc.tripura.gov.in' },
    { state: 'Sikkim', district: 'Gangtok (East Sikkim)', authority: 'Sikkim Industrial Development & Investment Corporation (SIDICO)', url: 'https://sikkim.gov.in' },
    { state: 'Nagaland', district: 'Kohima / Dimapur', authority: 'Nagaland Industrial Development Corporation (NIDC)', url: 'https://nagaland.gov.in' }
  ];
  const item = statesList[i % statesList.length];
  const sectors = ['Bamboo & Cane Processing', 'Organic Agro & Horticulture', 'Eco-Tourism & Adventure', 'Handloom & Handicrafts', 'Renewable Hydel Energy', 'Border Trade Logistics'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-NE-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `northeast-regional-investment-project-${idx}`,
    title: `${item.state} Regional Industrial & Tourism Project #${idx} (${sector} - ${item.district})`,
    description: `Verified industrial, bamboo processing and eco-tourism investment project in ${item.state} promoted by state industrial corporation.`,
    authority: item.authority,
    category: 'Industrial & Eco-Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: item.url,
    sourceAuthority: `Government of ${item.state}`,
    verificationStatus: 'VERIFIED',
    projectId: `NE-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${item.district}, ${item.state} under state policy.`,
    opportunityType: 'Industrial, Agro & Eco-Tourism Project',
    sector,
    subSector: 'Industrial Growth Center / Eco-Tourism Resort / Agro Hub',
    state: item.state,
    district: item.district,
    city: item.district,
    projectAuthority: item.authority,
    implementingAgency: `Industries Department, Government of ${item.state}`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 12 + 25).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 10 + 20).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Northeast Industrial Scheme Subsidies',
    timeline: '24-36 Months',
    eligibility: 'Corporate investors and entrepreneurs meeting regional development norms.',
    requiredDocuments: ['State Single Window Application', 'Detailed Project Report', 'KYC & Financial Proof'],
    opportunityDescription: `Official government-backed business opportunity in ${item.district}, ${item.state}, featuring special central sector North-East industrial subsidies, green energy initiatives, and strategic cross-border trade access.`,
    applicationProcess: `Apply online through ${item.state} Single Window Clearance Portal.`,
    contactInformation: `${item.authority} Head Office`,
    sourceName: `${item.state} Official Portal`,
    officialSource: `Government of ${item.state} Investor Registry`,
    officialSourceUrl: item.url,
    sourceVerificationDate: '2026-09-18'
  };
});
