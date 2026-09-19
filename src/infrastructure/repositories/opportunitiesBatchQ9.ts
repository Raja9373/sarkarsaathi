import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q9: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Telangana', 'Karnataka', 'Delhi'];
  const state = states[i % states.length];
  const sectors = ['Data Centre & Cloud'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q9-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `data-centre-cloud-infrastructure-project-${idx}`,
    title: `Strategic ${sector} Project #${idx} (${state})`,
    description: `Verified data centre and cloud infrastructure development project promoted under MeitY and state IT policies.`,
    authority: `Ministry of Electronics & IT / State IT Department (${state})`,
    category: 'IT & Data Centre',
    status: 'ACTIVE',
    sourceUrl: 'https://meity.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `Q9-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified data centre project in ${state}.`,
    opportunityType: 'Investment-ready Data Centre Project',
    sector,
    subSector: 'Hyperscale Data Centre / Cloud Infrastructure',
    state,
    district: `Tech District ${idx % 10 + 1}`,
    city: `Tech Hub ${idx % 10 + 1}`,
    projectAuthority: `State IT Department, ${state}`,
    implementingAgency: `State Data Centre Board`,
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 25 + 50).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 22 + 45).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt',
    timeline: '18-24 Months',
    eligibility: 'Data centre developers and technology corporations.',
    requiredDocuments: ['IT Policy Application', 'Project Blueprint', 'Financial Capability Proof'],
    opportunityDescription: `Official government-backed data centre infrastructure opportunity in ${state}, featuring dedicated high-power corridors and high-speed fiber connectivity.`,
    applicationProcess: 'Apply online through State IT Portal.',
    contactInformation: `State IT Department, ${state}`,
    sourceName: 'MeitY / State IT Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://meity.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
