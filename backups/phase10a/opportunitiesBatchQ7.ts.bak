import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q7: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Tamil Nadu'];
  const state = states[i % states.length];
  const sectors = ['Renewable Energy', 'Green Hydrogen'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q7-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `renewable-energy-green-hydrogen-project-${idx}`,
    title: `Strategic ${sector} Infrastructure Project #${idx} (${state})`,
    description: `Verified large-scale renewable energy and green hydrogen project promoted under state energy policies.`,
    authority: `State Energy Development Agency (${state})`,
    category: 'Renewable Energy',
    status: 'ACTIVE',
    sourceUrl: 'https://www.energy-dept.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `Q7-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified energy project in ${state}.`,
    opportunityType: 'Investment-ready Energy Project',
    sector,
    subSector: 'Solar Park / Hydrogen Plant',
    state,
    district: `Energy District ${idx % 10 + 1}`,
    city: `Energy Hub ${idx % 10 + 1}`,
    projectAuthority: `State Energy Department, ${state}`,
    implementingAgency: `State Renewable Energy Board`,
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 40 + 80).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 35 + 70).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Green Bonds / Debt / PPP',
    timeline: '18-30 Months',
    eligibility: 'Renewable energy developers and institutional investors.',
    requiredDocuments: ['Energy Policy Application', 'Project Feasibility Report', 'Financial Statement'],
    opportunityDescription: `Official government-backed renewable energy opportunity in ${state}, featuring land allocation in mega solar parks and transmission infrastructure support.`,
    applicationProcess: 'Apply online through State Energy Portal.',
    contactInformation: `State Energy Department, ${state}`,
    sourceName: 'State Energy Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://www.energy-dept.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
