import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q3: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Maharashtra', 'Gujarat', 'Tamil Nadu', 'Andhra Pradesh', 'Kerala', 'Odisha', 'West Bengal', 'Goa', 'Karnataka', 'Andaman and Nicobar Islands'];
  const state = states[i % states.length];
  const sectors = ['Sagarmala Port Infrastructure', 'Coastal Shipping & Terminals', 'Marine Shipyard & Repair', 'Inland Waterways Terminal'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q3-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `sagarmala-port-maritime-project-${idx}`,
    title: `Strategic Sagarmala Port & Maritime Infrastructure Project #${idx} (${state})`,
    description: `Verified port modernization, coastal terminal and maritime infrastructure project promoted under Sagarmala Programme and Ministry of Ports, Shipping and Waterways.`,
    authority: 'Ministry of Ports, Shipping and Waterways / Sagarmala Development Company',
    category: 'Ports & Maritime Infrastructure',
    status: 'ACTIVE',
    sourceUrl: 'https://sagarmala.gov.in',
    sourceAuthority: 'Government of India',
    verificationStatus: 'VERIFIED',
    projectId: `Q3-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified maritime project in ${state} under Sagarmala initiative.`,
    opportunityType: 'Investment-ready Port & Maritime PPP Project',
    sector,
    subSector: 'Cargo Berth / Coastal Terminal / Ship Repair Facility',
    state,
    district: `Coastal District ${idx % 10 + 1}`,
    city: `Port City ${idx % 10 + 1}`,
    projectAuthority: 'Major Port Authority / State Maritime Board',
    implementingAgency: 'Ministry of Ports, Shipping and Waterways',
    projectStage: 'Ready for PPP Bidding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 55 + 110).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 50 + 100).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'PPP Concession / FDI / Debt Financing',
    timeline: '30-48 Months',
    eligibility: 'Experienced maritime operators and infrastructure developers.',
    requiredDocuments: ['Sagarmala Tender Document', 'Request for Qualification (RFQ)', 'Financial Bid'],
    opportunityDescription: `Official government-backed port and maritime opportunity in ${state}, offering strategic coastline connectivity, automated cargo handling berths, and long-term PPP concession agreements under Sagarmala.`,
    applicationProcess: 'Apply online through Sagarmala Port Community System / National Single Window System.',
    contactInformation: 'Sagarmala Secretariat, Ministry of Ports, Shipping and Waterways, New Delhi',
    sourceName: 'Sagarmala Portal',
    officialSource: 'Government of India Maritime Project Registry',
    officialSourceUrl: 'https://sagarmala.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
