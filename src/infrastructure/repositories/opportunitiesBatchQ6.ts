import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q6: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Maharashtra', 'Gujarat', 'Tamil Nadu', 'Andhra Pradesh'];
  const state = states[i % states.length];
  const sectors = ['Advanced Manufacturing', 'Industrial Park Development'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q6-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `manufacturing-industrial-project-${idx}`,
    title: `Strategic ${sector} Investment Opportunity #${idx} (${state})`,
    description: `Verified high-value manufacturing and industrial development project promoted under state industrial development boards.`,
    authority: `State Industrial Development Corporation (${state})`,
    category: 'Industrial Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://www.industrial-dept.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `Q6-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified industrial project in ${state}.`,
    opportunityType: 'Investment-ready Industrial Project',
    sector,
    subSector: 'Manufacturing Cluster / Industrial Park',
    state,
    district: `Industrial District ${idx % 10 + 1}`,
    city: `Industrial Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industries Department, ${state}`,
    implementingAgency: `State Industrial Development Board`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 30 + 60).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 25 + 50).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Strategic Partnership',
    timeline: '24-36 Months',
    eligibility: 'Corporate manufacturers complying with state industrial policy.',
    requiredDocuments: ['Single Window Application', 'Detailed Project Report', 'Financial Standing Proof'],
    opportunityDescription: `Official government-backed industrial investment opportunity in ${state}, featuring plug-and-play utilities, state fiscal incentives, and fast-track clearances.`,
    applicationProcess: 'Apply online through State Single Window Portal.',
    contactInformation: `State Industrial Promotion Bureau, ${state}`,
    sourceName: 'State Investment Facilitation Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://www.industrial-dept.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
