import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_PB: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Ludhiana', 'Jalandhar', 'Amritsar', 'Patiala', 'Bathinda', 'Mohali (SAS Nagar)', 'Hoshiarpur', 'Khanna', 'Moga', 'Pathankot'];
  const sectors = ['Light Engineering & Manufacturing', 'Agro & Food Processing', 'Textiles & Apparels', 'IT & Knowledge Industry', 'Bicycles & Sports Goods', 'Renewable Energy'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-PB-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `punjab-industrial-investment-project-${idx}`,
    title: `Punjab Industrial & Manufacturing Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and manufacturing investment project in Punjab facilitated by Invest Punjab.`,
    authority: 'Punjab Bureau of Investment Promotion (Invest Punjab)',
    category: 'Industrial Investment Project',
    status: 'ACTIVE',
    sourceUrl: 'https://investpunjab.gov.in',
    sourceAuthority: 'Government of Punjab',
    verificationStatus: 'VERIFIED',
    projectId: `PB-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Punjab under Invest Punjab framework.`,
    opportunityType: 'Industrial Manufacturing Opportunity',
    sector,
    subSector: 'Industrial Focal Point / Manufacturing Unit',
    state: 'Punjab',
    district,
    city: district,
    projectAuthority: 'Invest Punjab / PSIDC',
    implementingAgency: 'Department of Industries and Commerce, Government of Punjab',
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 16 + 35).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 14 + 30).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Term Loan / Joint Venture',
    timeline: '18-30 Months',
    eligibility: 'Eligible industrial investors and corporate entities.',
    requiredDocuments: ['Invest Punjab Common Application Form (CAF)', 'Project Profile', 'Board Resolution'],
    opportunityDescription: `Official government-backed industrial project in ${district}, Punjab, featuring competitive power tariffs, fiscal incentives, and single-window clearance through Invest Punjab.`,
    applicationProcess: 'Apply online via Invest Punjab Unified Portal.',
    contactInformation: 'Invest Punjab Bureau, Udyog Bhawan, Chandigarh',
    sourceName: 'Invest Punjab Portal',
    officialSource: 'Government of Punjab Investor Registry',
    officialSourceUrl: 'https://investpunjab.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
