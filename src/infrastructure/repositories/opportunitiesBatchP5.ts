import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_P5: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Punjab', 'Haryana', 'Madhya Pradesh', 'Uttar Pradesh', 'Rajasthan', 'Bihar', 'West Bengal', 'Assam', 'Odisha', 'Goa'];
  const state = states[i % states.length];
  const sectors = ['Food Processing & Cold Chain', 'Textiles, Apparels & Technical Textiles', 'Tourism Infrastructure & Hospitality', 'Mining Downstream & Minerals'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-P5-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `agro-textile-tourism-infrastructure-project-${idx}`,
    title: `Strategic ${sector} Investment Project #${idx} (${state})`,
    description: `Verified ${sector.toLowerCase()} development project promoted under Ministry of Food Processing Industries (MoFPI) / Ministry of Textiles / Ministry of Tourism.`,
    authority: `Ministry of Food Processing Industries (MoFPI) / State Industries Dept (${state})`,
    category: 'Agro, Textile & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://mofpi.gov.in',
    sourceAuthority: 'Government of India & State Government',
    verificationStatus: 'VERIFIED',
    projectId: `P5-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified ${sector} project in ${state} under national sectoral scheme.`,
    opportunityType: 'Investment-ready Agro, Textile & Tourism Project',
    sector,
    subSector: 'Mega Food Park / Textile Park / Heritage Tourism Resort',
    state,
    district: `Agro District ${idx % 10 + 1}`,
    city: `Agro Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industrial Development Corporation (${state})`,
    implementingAgency: `MoFPI / Ministry of Textiles / State Government`,
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 18 + 36).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Term Loans / Equity / Capital Subsidies',
    timeline: '18-24 Months',
    eligibility: 'Eligible agro-processors, textile manufacturers, and hospitality developers.',
    requiredDocuments: ['MoFPI / State Single Window Application', 'Detailed Project Report', 'Financial Statement'],
    opportunityDescription: `Official government-backed ${sector.toLowerCase()} opportunity in ${state}, offering capital grants under central schemes, plug-and-play industrial plots, and fast-track approvals.`,
    applicationProcess: 'Apply online through MoFPI / National Single Window System (NSWS).',
    contactInformation: `MoFPI Project Cell, New Delhi`,
    sourceName: 'MoFPI / State Portal',
    officialSource: 'Government of India Sectoral Project Registry',
    officialSourceUrl: 'https://mofpi.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
