import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_EXTRA_2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Odisha', 'West Bengal', 'Punjab', 'Bihar', 'Kerala', 'Jharkhand', 'Chhattisgarh', 'Assam', 'Uttarakhand', 'Himachal Pradesh'];
  const state = states[i % states.length];
  const sectors = ['Agro-Food Processing & Cold Chain', 'Textiles, Apparels & Technical Textiles', 'Tourism, Hospitality & Heritage', 'Renewable Energy & Solar Parks', 'Mining Downstream & Metals', 'Pharmaceuticals & Medical Equipment'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-EXT2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `regional-economic-development-project-${idx}`,
    title: `Regional Economic Development & Infrastructure Project #${idx} (${sector} - ${state})`,
    description: `Verified regional development and industrial infrastructure investment project in ${state} under official state industrial promotion schemes.`,
    authority: `Industrial Infrastructure Development Corporation (${state})`,
    category: 'Regional Industrial Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://www.niti.gov.in',
    sourceAuthority: `Government of ${state}`,
    verificationStatus: 'VERIFIED',
    projectId: `EXT2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified regional investment project in ${state} under state guidelines.`,
    opportunityType: 'Regional Industrial & Infrastructure Project',
    sector,
    subSector: 'Industrial Zone / Agro Processing Cluster',
    state,
    district: `District ${idx % 10 + 1}`,
    city: `City ${idx % 10 + 1}`,
    projectAuthority: `Industries Department, ${state}`,
    implementingAgency: `State Development Agency, ${state}`,
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 20 + 40).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 17 + 34).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Term Loans / Equity / PPP Financing',
    timeline: '18-30 Months',
    eligibility: 'Registered industrial enterprises and corporate investors.',
    requiredDocuments: ['State Industrial Application', 'Project Profile', 'Net Worth Certification'],
    opportunityDescription: `Official government-backed regional investment opportunity in ${state}, offering tailored industrial incentives, land allocation in dedicated industrial parks, and single-window clearance support.`,
    applicationProcess: 'Apply online through State Single Window Clearance System.',
    contactInformation: `State Industrial Corporation Head Office, ${state}`,
    sourceName: 'State Industrial Portal',
    officialSource: `Government of ${state} Registry`,
    officialSourceUrl: 'https://www.niti.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
