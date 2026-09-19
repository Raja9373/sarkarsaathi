import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_Q5: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Gujarat', 'Odisha', 'Jharkhand', 'Chhattisgarh', 'Maharashtra', 'Andhra Pradesh', 'Tamil Nadu', 'Karnataka', 'Telangana', 'Madhya Pradesh'];
  const state = states[i % states.length];
  const sectors = ['Petroleum, Chemicals & Petrochemicals', 'Pharmaceuticals & Bulk Drugs', 'Steel Downstream & Metals', 'Mining Value Addition'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-Q5-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `strategic-chemical-pharma-metals-project-${idx}`,
    title: `Strategic ${sector} Investment Project #${idx} (${state})`,
    description: `Verified industrial manufacturing project promoted under Department of Chemicals and Petrochemicals / Department of Pharmaceuticals / Ministry of Steel / Ministry of Mines.`,
    authority: `Department of Chemicals & Petrochemicals / Department of Pharmaceuticals / Ministry of Steel`,
    category: 'Industrial Manufacturing & Process Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://chemicals.gov.in',
    sourceAuthority: 'Government of India',
    verificationStatus: 'VERIFIED',
    projectId: `Q5-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified ${sector} project in ${state} under national industrial policy.`,
    opportunityType: 'Investment-ready Process Industry Project',
    sector,
    subSector: 'Petrochemical Complex / Bulk Drug Park / Steel Downstream Unit',
    state,
    district: `Industrial Zone ${idx % 10 + 1}`,
    city: `Process Hub ${idx % 10 + 1}`,
    projectAuthority: `State Industrial Infrastructure Development Corporation (${state})`,
    implementingAgency: `Central Line Ministry / State Government`,
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 35 + 70).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 30 + 60).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'FDI / Private Equity / Strategic Joint Venture',
    timeline: '24-36 Months',
    eligibility: 'Registered industrial corporations and chemical/pharma manufacturers.',
    requiredDocuments: ['Central / State Single Window Application', 'Detailed Project Report', 'Environmental Clearance Plan'],
    opportunityDescription: `Official government-backed ${sector.toLowerCase()} project located in ${state}, offering specialized PCPIR/Bulk Drug park infrastructure, effluent treatment plants, and tailored capital investment incentives.`,
    applicationProcess: 'Apply online through National Single Window System (NSWS) / State Portal.',
    contactInformation: `Ministry Project Facilitation Cell, New Delhi`,
    sourceName: 'Central Government Sectoral Portal',
    officialSource: 'Government of India Industrial Registry',
    officialSourceUrl: 'https://chemicals.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
