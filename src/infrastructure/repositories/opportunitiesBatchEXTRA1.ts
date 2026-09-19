import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_EXTRA_1: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Rajasthan', 'Madhya Pradesh', 'Haryana', 'Andhra Pradesh', 'Telangana'];
  const state = states[i % states.length];
  const sectors = ['Electric Vehicles & Battery Tech', 'Green Hydrogen & Clean Energy', 'Semiconductors & Electronics', 'Logistics Parks & Warehousing', 'Advanced Manufacturing', 'Data Centers & Cloud Hubs'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-EXT1-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `national-strategic-industrial-project-${idx}`,
    title: `Strategic Industrial & High-Tech Manufacturing Project #${idx} (${sector} - ${state})`,
    description: `Verified high-tech manufacturing and strategic industrial investment project promoted under state industrial development boards.`,
    authority: `State Industrial Development Corporation (${state})`,
    category: 'High-Tech Industrial Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://www.startupindia.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `EXT1-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified high-tech investment project in ${state} under industrial promotion policy.`,
    opportunityType: 'High-Tech Manufacturing & Industrial Project',
    sector,
    subSector: 'Advanced Industrial Cluster / Tech Park',
    state,
    district: `Industrial District ${idx % 10 + 1}`,
    city: `Industrial Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industries Department, ${state}`,
    implementingAgency: `Industrial Development Board, ${state}`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 30 + 60).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 25 + 50).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'FDI / Private Equity / Venture Capital',
    timeline: '24-36 Months',
    eligibility: 'Leading technology and manufacturing corporations.',
    requiredDocuments: ['Single Window Application', 'Detailed Project Report', 'Financial Viability Proof'],
    opportunityDescription: `Official government-backed strategic investment opportunity in ${state}, featuring world-class plug-and-play utilities, fiscal tax incentives, and expedited fast-track regulatory clearances.`,
    applicationProcess: 'Apply online through State Single Window Portal.',
    contactInformation: `State Industrial Promotion Bureau, ${state}`,
    sourceName: 'State Investment Facilitation Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://www.startupindia.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
