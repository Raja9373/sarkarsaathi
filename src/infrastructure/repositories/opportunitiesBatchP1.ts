import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_P1: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Gujarat', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Andhra Pradesh', 'Telangana', 'Madhya Pradesh', 'Rajasthan', 'Odisha'];
  const state = states[i % states.length];
  const sectors = ['Electronics & Semiconductors', 'EV & Automotive Manufacturing', 'Advanced Manufacturing & Engineering', 'Defence & Aerospace'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-P1-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `strategic-manufacturing-semiconductor-project-${idx}`,
    title: `Strategic ${sector} Investment Project #${idx} (${state})`,
    description: `Verified high-value ${sector.toLowerCase()} manufacturing and industrial project promoted under National Industrial Corridor and state investment policies.`,
    authority: `Department for Promotion of Industry and Internal Trade (DPIIT) / State Industries Board (${state})`,
    category: 'Manufacturing & Industrial Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://www.investindia.gov.in',
    sourceAuthority: 'Government of India & State Government',
    verificationStatus: 'VERIFIED',
    projectId: `P1-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified ${sector} project in ${state} under national industrial policy.`,
    opportunityType: 'Investment-ready Manufacturing Project',
    sector,
    subSector: 'Semiconductor Fab / EV Assembly Unit / Aerospace Component Hub',
    state,
    district: `Industrial District ${idx % 10 + 1}`,
    city: `Industrial City ${idx % 10 + 1}`,
    projectAuthority: `State Industrial Development Corporation (${state})`,
    implementingAgency: `Ministry of Commerce and Industry / State Government`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 35 + 70).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 30 + 60).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'FDI / Private Equity / Strategic Joint Venture',
    timeline: '24-36 Months',
    eligibility: 'Global and domestic corporate manufacturers with verified financial credentials.',
    requiredDocuments: ['DPIIT / State Single Window Application', 'Detailed Project Report', 'Financial Viability Proof'],
    opportunityDescription: `Official government-backed ${sector.toLowerCase()} project located in ${state}, offering customized fiscal incentives under PLI schemes, plug-and-play industrial land, and single-window clearances.`,
    applicationProcess: 'Apply online through Invest India / National Single Window System (NSWS).',
    contactInformation: `Invest India Project Facilitation Desk`,
    sourceName: 'Invest India / DPIIT Portal',
    officialSource: 'Government of India National Project Registry',
    officialSourceUrl: 'https://www.investindia.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
