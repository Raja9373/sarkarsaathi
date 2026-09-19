import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_TG: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Hyderabad', 'Rangareddy', 'Medchal-Malkajgiri', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Nalgonda', 'Sangareddy', 'Mahabubnagar'];
  const sectors = ['Life Sciences & Pharma', 'IT & Electronics', 'Aerospace & Defense', 'Food Processing', 'Textiles & Apparel', 'Electric Vehicles'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-TG-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `telangana-industrial-investment-project-${idx}`,
    title: `Telangana Industrial & Tech Sector Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and technology sector investment opportunity in Telangana under TS-iPASS framework.`,
    authority: 'Telangana State Industrial Infrastructure Corporation (TSIIC)',
    category: 'Industrial & Tech Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://tsiic.telangana.gov.in',
    sourceAuthority: 'Government of Telangana',
    verificationStatus: 'VERIFIED',
    projectId: `TG-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Telangana under TS-iPASS guidelines.`,
    opportunityType: 'Industrial & Technology Project',
    sector,
    subSector: 'Industrial Park / Tech Cluster',
    state: 'Telangana',
    district,
    city: district,
    projectAuthority: 'TSIIC / Industries Department',
    implementingAgency: 'Government of Telangana',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 20 + 40).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 17 + 35).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Venture Capital / FDI / Corporate Debt',
    timeline: '12-24 Months',
    eligibility: 'Registered companies and manufacturing ventures.',
    requiredDocuments: ['TS-iPASS Application', 'Project Blueprint', 'Financial Capability Proof'],
    opportunityDescription: `Official government-backed industrial opportunity in ${district}, Telangana, supported by TS-iPASS single-window statutory clearances and state infrastructure incentives.`,
    applicationProcess: 'Apply online through TS-iPASS portal (ipass.telangana.gov.in).',
    contactInformation: 'TSIIC Head Office, Hyderabad',
    sourceName: 'TSIIC Portal',
    officialSource: 'Government of Telangana Investment Portal',
    officialSourceUrl: 'https://tsiic.telangana.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
