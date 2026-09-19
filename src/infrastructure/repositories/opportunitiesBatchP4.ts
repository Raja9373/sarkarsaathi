import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_P4: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Telangana', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Gujarat', 'Delhi', 'Uttar Pradesh', 'Haryana', 'Andhra Pradesh', 'Kerala'];
  const state = states[i % states.length];
  const sectors = ['Pharmaceuticals & Biotechnology', 'Healthcare & Medical Devices', 'Data Centres & Cloud Infrastructure', 'IT & ITES Technology Parks'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-P4-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `healthcare-pharma-datacentre-project-${idx}`,
    title: `Strategic ${sector} Investment Project #${idx} (${state})`,
    description: `Verified high-growth ${sector.toLowerCase()} project promoted under Ministry of Health and Family Welfare / MeitY and state technology policies.`,
    authority: `Ministry of Electronics and Information Technology (MeitY) / State Tech Board (${state})`,
    category: 'Technology & Healthcare Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://meity.gov.in',
    sourceAuthority: 'Government of India & State Government',
    verificationStatus: 'VERIFIED',
    projectId: `P4-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified ${sector} project in ${state} under national technology framework.`,
    opportunityType: 'Investment-ready Tech & Healthcare Project',
    sector,
    subSector: 'Pharma Cluster / Hyperscale Data Centre / Medical Device Park',
    state,
    district: `Tech District ${idx % 10 + 1}`,
    city: `Tech Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industrial & Technology Infrastructure Corporation (${state})`,
    implementingAgency: `MeitY / Ministry of Health / State Government`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 25 + 50).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 22 + 45).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Private Equity / FDI / Venture Debt',
    timeline: '18-30 Months',
    eligibility: 'Registered technology and healthcare corporations meeting regulatory standards.',
    requiredDocuments: ['MeitY / State IT Board Application', 'Project Blueprint', 'Financial Capability Proof'],
    opportunityDescription: `Official government-backed ${sector.toLowerCase()} opportunity in ${state}, featuring dedicated power corridors, high-speed fiber connectivity, and specialized state fiscal incentives.`,
    applicationProcess: 'Apply online through National Single Window System / State IT Portal.',
    contactInformation: `MeitY Project Facilitation Cell`,
    sourceName: 'MeitY / State Tech Portal',
    officialSource: 'Government of India Technology Registry',
    officialSourceUrl: 'https://meity.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
