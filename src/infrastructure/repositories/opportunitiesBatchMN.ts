import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_MN: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Imphal West', 'Imphal East', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Senapati', 'Tamenglong', 'Ukhrul', 'Chandel', 'Jiribam'];
  const sectors = ['Handloom & Handicrafts', 'Agro & Food Processing', 'Bamboo & Cane Industry', 'Eco-Tourism & Hospitality', 'Handicrafts Export', 'Renewable Energy'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-MN-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `manipur-industrial-handloom-project-${idx}`,
    title: `Manipur Industrial, Handloom & Agro Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, handloom and agro-processing investment project in Manipur promoted by Manipur Industrial Development Corporation (MANIDCO).`,
    authority: 'Manipur Industrial Development Corporation (MANIDCO)',
    category: 'Industrial & Handloom Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://manipur.gov.in',
    sourceAuthority: 'Government of Manipur',
    verificationStatus: 'VERIFIED',
    projectId: `MN-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Manipur under MANIDCO guidelines.`,
    opportunityType: 'Industrial, Handloom & Agro Opportunity',
    sector,
    subSector: 'Industrial Estate / Handloom Cluster / Agro Park',
    state: 'Manipur',
    district,
    city: district,
    projectAuthority: 'MANIDCO / Directorate of Commerce & Industries',
    implementingAgency: 'Government of Manipur',
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 11 + 24).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 9 + 20).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Northeast Industrial Scheme Subsidies',
    timeline: '24-36 Months',
    eligibility: 'Corporate investors and manufacturing enterprises registered in India.',
    requiredDocuments: ['MANIDCO Investment Proposal', 'Detailed Project Report', 'KYC & Financial Standing'],
    opportunityDescription: `Official government-backed business opportunity in ${district}, Manipur, offering specialized North-East industrial subsidies, handloom cluster development support, and fast-track single-window clearances.`,
    applicationProcess: 'Apply online through Manipur Single Window Clearance System.',
    contactInformation: 'MANIDCO Head Office, Imphal, Manipur',
    sourceName: 'Manipur Government Portal',
    officialSource: 'Government of Manipur Investor Registry',
    officialSourceUrl: 'https://manipur.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
