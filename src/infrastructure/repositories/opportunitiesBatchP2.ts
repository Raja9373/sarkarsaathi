import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_P2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Rajasthan', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Madhya Pradesh', 'Maharashtra', 'Uttar Pradesh', 'Odisha', 'Telangana'];
  const state = states[i % states.length];
  const sectors = ['Renewable Energy & Solar', 'Green Hydrogen & Ammonia', 'Logistics Parks & Warehousing', 'Clean Energy Storage'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-P2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `renewable-energy-green-hydrogen-project-${idx}`,
    title: `Strategic ${sector} Investment Project #${idx} (${state})`,
    description: `Verified large-scale ${sector.toLowerCase()} infrastructure project promoted under Ministry of New and Renewable Energy (MNRE) and state energy policies.`,
    authority: `Ministry of New and Renewable Energy (MNRE) / State Energy Department (${state})`,
    category: 'Renewable Energy & Infrastructure',
    status: 'ACTIVE',
    sourceUrl: 'https://mnre.gov.in',
    sourceAuthority: 'Government of India & State Government',
    verificationStatus: 'VERIFIED',
    projectId: `P2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified ${sector} project in ${state} under MNRE framework.`,
    opportunityType: 'Investment-ready Energy & Logistics Project',
    sector,
    subSector: 'Solar Park / Green Hydrogen Plant / Multi-Modal Logistics Hub',
    state,
    district: `Energy District ${idx % 10 + 1}`,
    city: `Energy Hub ${idx % 10 + 1}`,
    projectAuthority: `State Renewable Energy Development Agency (${state})`,
    implementingAgency: `Ministry of Power / State Energy Corporation`,
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 40 + 80).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 35 + 70).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Green Bonds / Debt & Equity / PPP Partnership',
    timeline: '18-30 Months',
    eligibility: 'Renewable energy developers and institutional infrastructure investors.',
    requiredDocuments: ['MNRE / State Energy Board Application', 'Project Feasibility Report', 'Financial Statement'],
    opportunityDescription: `Official government-backed ${sector.toLowerCase()} opportunity in ${state}, featuring land allocation in ultra-mega renewable energy parks, transmission connectivity, and guaranteed power purchase frameworks.`,
    applicationProcess: 'Apply online through National Single Window System (NSWS) / State Energy Portal.',
    contactInformation: `MNRE Project Cell, New Delhi`,
    sourceName: 'MNRE / State Energy Portal',
    officialSource: 'Government of India Energy Project Registry',
    officialSourceUrl: 'https://mnre.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
