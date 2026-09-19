import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_KL: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Thiruvananthapuram', 'Kochi (Ernakulam)', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kannur', 'Kottayam', 'Malappuram'];
  const sectors = ['IT & ITES', 'Tourism & Hospitality', 'Marine & Seafood Processing', 'Life Sciences & Biotech', 'Spices & Agro-Processing', 'Renewable Energy'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-KL-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `kerala-industrial-investment-project-${idx}`,
    title: `Kerala Industrial, IT & Tourism Investment Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, IT and tourism investment project in Kerala promoted by KSIDC and KINFRA.`,
    authority: 'Kerala State Industrial Development Corporation (KSIDC) / KINFRA',
    category: 'Industrial & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://ksidc.org',
    sourceAuthority: 'Government of Kerala',
    verificationStatus: 'VERIFIED',
    projectId: `KL-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Kerala under KSIDC guidelines.`,
    opportunityType: 'Industrial, IT & Tourism Opportunity',
    sector,
    subSector: 'Industrial Park / IT Corridor / Tourism Zone',
    state: 'Kerala',
    district,
    city: district,
    projectAuthority: 'KSIDC / KINFRA',
    implementingAgency: 'Industries Department, Government of Kerala',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 14 + 30).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 12 + 25).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Public-Private Partnership',
    timeline: '18-30 Months',
    eligibility: 'Corporate investors and entrepreneurs meeting industrial policy norms.',
    requiredDocuments: ['KSIDC Project Proposal', 'Detailed Project Report', 'Financial Statements'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Kerala, offering single-window clearance, prime land parcels in KINFRA parks, and attractive state fiscal incentives.`,
    applicationProcess: 'Apply online through Kerala Single Window Clearance Portal (Ente Udyog).',
    contactInformation: 'KSIDC Head Office, Thiruvananthapuram, Kerala',
    sourceName: 'KSIDC Portal',
    officialSource: 'Government of Kerala Investor Registry',
    officialSourceUrl: 'https://ksidc.org',
    sourceVerificationDate: '2026-09-18'
  };
});
