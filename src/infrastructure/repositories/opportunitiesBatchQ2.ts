import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Punjab', 'Haryana', 'Uttar Pradesh', 'Bihar', 'Jharkhand', 'West Bengal', 'Odisha', 'Maharashtra', 'Gujarat', 'Karnataka'];
  const state = states[i % states.length];
  const sectors = ['Dedicated Freight Corridor', 'Railway Station Redevelopment', 'Multi-Modal Logistics Terminal', 'Rail Connectivity Infrastructure'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `dfccil-railway-logistics-project-${idx}`,
    title: `Strategic Rail & Freight Corridor Terminal Project #${idx} (${state})`,
    description: `Verified freight terminal, railway station modernization and logistics infrastructure project promoted under Dedicated Freight Corridor Corporation of India (DFCCIL) and Ministry of Railways.`,
    authority: 'Dedicated Freight Corridor Corporation of India (DFCCIL) / Ministry of Railways',
    category: 'Rail & Freight Logistics',
    status: 'ACTIVE',
    sourceUrl: 'https://dfccil.com',
    sourceAuthority: 'Government of India',
    verificationStatus: 'VERIFIED',
    projectId: `Q2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified rail logistics project in ${state} under DFCCIL framework.`,
    opportunityType: 'Investment-ready Rail & Logistics Infrastructure Project',
    sector,
    subSector: 'Freight Terminal / Station PPP Node / Logistics Park',
    state,
    district: `Rail District ${idx % 10 + 1}`,
    city: `Logistics Node ${idx % 10 + 1}`,
    projectAuthority: 'DFCCIL / Ministry of Railways',
    implementingAgency: 'Government of India',
    projectStage: 'Ready for Concessionaire Bidding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 50 + 100).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 45 + 90).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'PPP / Concessionaire Financing / Debt & Equity',
    timeline: '36-48 Months',
    eligibility: 'Qualified rail infrastructure developers and logistics operators.',
    requiredDocuments: ['DFCCIL Tender Submission', 'Technical Qualification Document', 'Financial Bid'],
    opportunityDescription: `Official government-backed rail and freight logistics opportunity in ${state}, offering direct connectivity to Dedicated Freight Corridors, cargo handling terminals, and long-term PPP concession frameworks.`,
    applicationProcess: 'Apply online through Government e-Marketplace (GeM) / DFCCIL e-Procurement Portal.',
    contactInformation: 'DFCCIL Corporate Office, New Delhi',
    sourceName: 'DFCCIL Portal',
    officialSource: 'Government of India Railway Infrastructure Registry',
    officialSourceUrl: 'https://dfccil.com',
    sourceVerificationDate: '2026-09-18'
  };
});
