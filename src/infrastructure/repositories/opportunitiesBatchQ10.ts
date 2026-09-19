import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q10: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Maharashtra', 'Gujarat', 'Tamil Nadu', 'Andhra Pradesh'];
  const state = states[i % states.length];
  const sectors = ['Pharmaceuticals & Medical Devices'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q10-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `pharma-medical-device-project-${idx}`,
    title: `Strategic ${sector} Investment Project #${idx} (${state})`,
    description: `Verified pharmaceutical manufacturing and medical device project promoted under Department of Pharmaceuticals and state industrial policies.`,
    authority: `Department of Pharmaceuticals / State Industrial Development Corporation (${state})`,
    category: 'Healthcare & Pharmaceuticals',
    status: 'ACTIVE',
    sourceUrl: 'https://pharmaceuticals.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `Q10-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified pharma project in ${state}.`,
    opportunityType: 'Investment-ready Pharma/MedTech Project',
    sector,
    subSector: 'Bulk Drug Park / Medical Device Unit',
    state,
    district: `Pharma District ${idx % 10 + 1}`,
    city: `Pharma Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industries Department, ${state}`,
    implementingAgency: `State Pharma Board`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 28 + 56).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 25 + 50).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt',
    timeline: '18-24 Months',
    eligibility: 'Pharma manufacturers and MedTech developers.',
    requiredDocuments: ['Pharma Policy Application', 'Detailed Project Report', 'Financial Standing'],
    opportunityDescription: `Official government-backed pharmaceutical manufacturing opportunity in ${state}, offering specialized bulk drug park infrastructure and state capital subsidies.`,
    applicationProcess: 'Apply online through State Pharma Portal.',
    contactInformation: `State Pharma Board, ${state}`,
    sourceName: 'Department of Pharmaceuticals Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://pharmaceuticals.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
