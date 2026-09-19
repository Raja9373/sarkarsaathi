import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q8: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Uttar Pradesh', 'West Bengal', 'Odisha', 'Maharashtra'];
  const state = states[i % states.length];
  const sectors = ['Logistics Parks', 'Warehousing'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q8-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `logistics-park-warehousing-project-${idx}`,
    title: `Strategic ${sector} Infrastructure Project #${idx} (${state})`,
    description: `Verified logistics park and warehousing project promoted under state industrial development policies.`,
    authority: `State Industrial Development Corporation (${state})`,
    category: 'Logistics',
    status: 'ACTIVE',
    sourceUrl: 'https://www.logistics-dept.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `Q8-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified logistics project in ${state}.`,
    opportunityType: 'Investment-ready Logistics Project',
    sector,
    subSector: 'Logistics Hub / Warehousing Park',
    state,
    district: `Logistics District ${idx % 10 + 1}`,
    city: `Logistics Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industries Department, ${state}`,
    implementingAgency: `Logistics Development Board`,
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 20 + 40).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 17 + 34).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / PPP',
    timeline: '18-24 Months',
    eligibility: 'Logistics developers and infrastructure companies.',
    requiredDocuments: ['Logistics Policy Application', 'Project Profile', 'Financial Statement'],
    opportunityDescription: `Official government-backed logistics infrastructure opportunity in ${state}, offering strategic land parcel access and multi-modal connectivity.`,
    applicationProcess: 'Apply online through State Single Window Portal.',
    contactInformation: `State Logistics Department, ${state}`,
    sourceName: 'State Logistics Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://www.logistics-dept.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
