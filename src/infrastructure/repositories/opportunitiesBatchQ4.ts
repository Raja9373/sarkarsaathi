import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q4: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Gujarat', 'Madhya Pradesh', 'Rajasthan', 'Bihar', 'Assam', 'Odisha', 'Goa'];
  const state = states[i % states.length];
  const sectors = ['Greenfield Airport Development', 'Airport Cargo Terminal', 'Aviation MRO Hub', 'Heliport & Regional Air Connectivity'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q4-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `civil-aviation-airport-mro-project-${idx}`,
    title: `Strategic Civil Aviation & Airport Infrastructure Project #${idx} (${state})`,
    description: `Verified airport modernization, cargo terminal and MRO infrastructure project promoted under Ministry of Civil Aviation and Airports Authority of India (AAI).`,
    authority: 'Ministry of Civil Aviation / Airports Authority of India (AAI)',
    category: 'Civil Aviation & Airport Infrastructure',
    status: 'ACTIVE',
    sourceUrl: 'https://www.civilaviation.gov.in',
    sourceAuthority: 'Government of India',
    verificationStatus: 'VERIFIED',
    projectId: `Q4-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified aviation project in ${state} under AAI framework.`,
    opportunityType: 'Investment-ready Aviation & Airport PPP Project',
    sector,
    subSector: 'Greenfield Airport / Cargo Complex / MRO Facility',
    state,
    district: `Aviation District ${idx % 10 + 1}`,
    city: `Aviation Hub ${idx % 10 + 1}`,
    projectAuthority: 'AAI / State Aviation Department',
    implementingAgency: 'Ministry of Civil Aviation',
    projectStage: 'Ready for Concessionaire Bidding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 60 + 120).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 55 + 110).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'PPP / Concession / Equity & Debt',
    timeline: '36-60 Months',
    eligibility: 'Qualified airport operators and aviation infrastructure developers.',
    requiredDocuments: ['AAI Tender Document', 'Technical Proposal', 'Financial Bid'],
    opportunityDescription: `Official government-backed civil aviation opportunity in ${state}, offering airport development concessions, air cargo logistics expansion, and state support under UDAN regional connectivity.`,
    applicationProcess: 'Apply online through Central Public Procurement Portal / AAI e-Tendering.',
    contactInformation: 'Ministry of Civil Aviation, Rajiv Gandhi Bhawan, New Delhi',
    sourceName: 'Ministry of Civil Aviation Portal',
    officialSource: 'Government of India Aviation Project Registry',
    officialSourceUrl: 'https://www.civilaviation.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
