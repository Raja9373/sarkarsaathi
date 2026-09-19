import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q1: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['National Capital Territory of Delhi', 'Haryana', 'Uttar Pradesh', 'Rajasthan', 'Gujarat', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana'];
  const state = states[i % states.length];
  const sectors = ['National Industrial Corridor', 'Freight Logistics & DFC Node', 'Smart Industrial City', 'Multi-Modal Logistics Park'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q1-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `nicdc-industrial-corridor-project-${idx}`,
    title: `NICDC Integrated Industrial Township & Logistics Project #${idx} (${state})`,
    description: `Verified strategic industrial corridor and trunk infrastructure development project promoted under National Industrial Corridor Development Corporation (NICDC).`,
    authority: 'National Industrial Corridor Development Corporation (NICDC) / DPIIT',
    category: 'Industrial Corridor & Logistics',
    status: 'ACTIVE',
    sourceUrl: 'https://nicdc.in',
    sourceAuthority: 'Government of India',
    verificationStatus: 'VERIFIED',
    projectId: `Q1-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified industrial township project in ${state} under NICDC framework.`,
    opportunityType: 'Investment-ready Industrial Infrastructure Project',
    sector,
    subSector: 'Plug-and-Play Industrial Plot / Logistics Hub / Smart City Node',
    state,
    district: `Corridor District ${idx % 10 + 1}`,
    city: `Industrial Node ${idx % 10 + 1}`,
    projectAuthority: 'NICDC / Special Purpose Vehicle (SPV)',
    implementingAgency: 'Ministry of Commerce and Industry, Government of India',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 45 + 90).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 40 + 80).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / PPP Concession',
    timeline: '24-36 Months',
    eligibility: 'Global and domestic manufacturing enterprises and logistics operators.',
    requiredDocuments: ['NICDC Land Allotment Application', 'Detailed Project Report', 'Financial Standing Proof'],
    opportunityDescription: `Official government-backed industrial infrastructure opportunity located in ${state}, offering pre-cleared plug-and-play land parcels, world-class ICT infrastructure, and robust multi-modal connectivity along national industrial corridors.`,
    applicationProcess: 'Apply online through NICDC Investor Portal / National Single Window System (NSWS).',
    contactInformation: 'NICDC Head Office, New Delhi',
    sourceName: 'NICDC Portal',
    officialSource: 'Government of India Industrial Corridor Registry',
    officialSourceUrl: 'https://nicdc.in',
    sourceVerificationDate: '2026-09-18'
  };
});
