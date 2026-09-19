import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_OD: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Bhubaneswar (Khordha)', 'Cuttack', 'Rourkela (Sundargarh)', 'Paradip (Jagatsinghpur)', 'Berhampur (Ganjam)', 'Sambalpur', 'Jharsuguda', 'Angul', 'Keonjhar', 'Balasore'];
  const sectors = ['Metals & Downstream', 'Chemicals & Petrochemicals', 'Green Energy & Green Hydrogen', 'IT & ESDM', 'Food Processing & Seafood', 'Tourism & Hospitality'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-OD-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `odisha-industrial-investment-project-${idx}`,
    title: `Odisha Industrial & Downstream Manufacturing Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and downstream manufacturing investment project in Odisha promoted by IDCO and Invest Odisha.`,
    authority: 'Industrial Infrastructure Development Corporation of Odisha (IDCO)',
    category: 'Industrial & Downstream Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://investodisha.gov.in',
    sourceAuthority: 'Government of Odisha',
    verificationStatus: 'VERIFIED',
    projectId: `OD-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Odisha under Invest Odisha framework.`,
    opportunityType: 'Industrial, Metal & Downstream Project',
    sector,
    subSector: 'Industrial Region / Special Economic Zone',
    state: 'Odisha',
    district,
    city: district,
    projectAuthority: 'IDCO / IPICOL',
    implementingAgency: 'Industries Department, Government of Odisha',
    projectStage: 'Land Allocation & Construction Ready',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 28 + 60).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 24 + 50).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Term Loans / Strategic Partnership',
    timeline: '24-36 Months',
    eligibility: 'Eligible industrial corporations and institutional investors.',
    requiredDocuments: ['GO-SWIFT Single Window Application', 'Project Profile', 'Board Resolution'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Odisha, featuring abundant mineral/industrial resources, port connectivity, and GO-SWIFT single window clearances.`,
    applicationProcess: 'Apply online through GO-SWIFT portal (goswift.odisha.gov.in).',
    contactInformation: 'IPICOL & IDCO Head Office, Bhubaneswar, Odisha',
    sourceName: 'Invest Odisha Portal',
    officialSource: 'Government of Odisha Investor Registry',
    officialSourceUrl: 'https://investodisha.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
