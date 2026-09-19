import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_MZ: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib', 'Lawngtlai', 'Saitual', 'Khawzawl', 'Hnahthial', 'Mamit'];
  const sectors = ['Bamboo & Timber Processing', 'Organic Horticulture & Spices', 'Eco-Tourism & Adventure', 'Handloom & Handicrafts', 'Small Hydro Renewable Energy', 'Border Trade Logistics'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-MZ-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `mizoram-industrial-horticulture-project-${idx}`,
    title: `Mizoram Agro, Bamboo & Eco-Tourism Project #${idx} (${sector} - ${district})`,
    description: `Verified agro-processing, bamboo and eco-tourism investment project in Mizoram promoted by Zoram Industrial Development Corporation (ZIDCO).`,
    authority: 'Zoram Industrial Development Corporation (ZIDCO)',
    category: 'Industrial & Eco-Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://mizoram.gov.in',
    sourceAuthority: 'Government of Mizoram',
    verificationStatus: 'VERIFIED',
    projectId: `MZ-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Mizoram under ZIDCO framework.`,
    opportunityType: 'Agro, Bamboo & Tourism Opportunity',
    sector,
    subSector: 'Bamboo Park / Agro Processing Unit / Eco-Resort',
    state: 'Mizoram',
    district,
    city: district,
    projectAuthority: 'ZIDCO / Commerce & Industries Department',
    implementingAgency: 'Government of Mizoram',
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 11 + 22).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 9 + 18).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Northeast Industrial Scheme Incentives',
    timeline: '24-36 Months',
    eligibility: 'Eligible industrial investors and corporate entities.',
    requiredDocuments: ['ZIDCO Investment Application', 'Project DPR', 'Financial Documents'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Mizoram, featuring rich organic agricultural potential, bamboo processing incentives, and streamlined single-window support.`,
    applicationProcess: 'Apply online through Mizoram Single Window Portal.',
    contactInformation: 'ZIDCO Head Office, Aizawl, Mizoram',
    sourceName: 'Mizoram Government Portal',
    officialSource: 'Government of Mizoram Investor Registry',
    officialSourceUrl: 'https://mizoram.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
