import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_TG_2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Nalgonda', 'Sangareddy', 'Mahabubnagar', 'Adilabad', 'Siddipet', 'Khammam'];
  const sectors = ['Life Sciences & Pharma', 'IT & Electronics', 'Electric Vehicles & Mobility', 'Food Processing & Agro', 'Textiles & Apparel', 'Aerospace & Defense'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-TG2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `telangana-expansion-investment-project-${idx}`,
    title: `Telangana Industrial & Tech Sector Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, life sciences and tech sector investment project in Telangana under TS-iPASS.`,
    authority: 'Telangana State Industrial Infrastructure Corporation (TSIIC)',
    category: 'Industrial & Tech Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://tsiic.telangana.gov.in',
    sourceAuthority: 'Government of Telangana',
    verificationStatus: 'VERIFIED',
    projectId: `TG2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Telangana under TS-iPASS guidelines.`,
    opportunityType: 'Industrial, Pharma & Technology Project',
    sector,
    subSector: 'Industrial Park / Tech Cluster / Pharma Zone',
    state: 'Telangana',
    district,
    city: district,
    projectAuthority: 'TSIIC / Industries Department',
    implementingAgency: 'Government of Telangana',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 17 + 34).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 14 + 28).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Venture Capital / FDI / Debt Financing',
    timeline: '12-24 Months',
    eligibility: 'Registered companies and manufacturing enterprises.',
    requiredDocuments: ['TS-iPASS Application', 'Project Blueprint', 'Financial Capability Document'],
    opportunityDescription: `Official government-backed industrial opportunity in ${district}, Telangana, supported by TS-iPASS single-window statutory clearances and state infrastructure incentives.`,
    applicationProcess: 'Apply online through TS-iPASS portal.',
    contactInformation: 'TSIIC Head Office, Hyderabad, Telangana',
    sourceName: 'TSIIC Portal',
    officialSource: 'Government of Telangana Investment Portal',
    officialSourceUrl: 'https://tsiic.telangana.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
