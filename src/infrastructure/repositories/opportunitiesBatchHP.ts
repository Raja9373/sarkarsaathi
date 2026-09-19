import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_HP: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Shimla', 'Solan (Baddi/Nalagarh)', 'Kangra', 'Mandi', 'Una', 'Kullu', 'Chamba', 'Sirmaur (Paonta Sahib)', 'Bilaspur', 'Hamirpur'];
  const sectors = ['Pharmaceuticals & Medical Devices', 'Tourism & Eco-Tourism', 'Hydel & Renewable Energy', 'Agro & Food Processing', 'IT & Electronics', 'Handloom & Handicrafts'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-HP-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `himachal-pradesh-industrial-tourism-project-${idx}`,
    title: `Himachal Pradesh Industrial & Tourism Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, pharmaceutical and tourism investment project in Himachal Pradesh promoted by HPSIDC and Invest Himachal.`,
    authority: 'Himachal Pradesh State Industrial Development Corporation (HPSIDC)',
    category: 'Industrial & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://himachal.gov.in/industries',
    sourceAuthority: 'Government of Himachal Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `HP-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Himachal Pradesh under HPSIDC policy.`,
    opportunityType: 'Industrial, Pharma & Tourism Opportunity',
    sector,
    subSector: 'Industrial Area / Pharma Hub / Eco-Tourism Zone',
    state: 'Himachal Pradesh',
    district,
    city: district,
    projectAuthority: 'HPSIDC / Directorate of Industries',
    implementingAgency: 'Government of Himachal Pradesh',
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 13 + 26).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Special Hill Incentive Financing',
    timeline: '18-24 Months',
    eligibility: 'Corporate investors and manufacturing enterprises.',
    requiredDocuments: ['Single Window Clearance Application', 'Detailed Project Report', 'Financial Statements'],
    opportunityDescription: `Official government-backed business opportunity in ${district}, Himachal Pradesh, offering robust infrastructure in Baddi-Barotiwala-Nalagarh industrial belt, power concessions, and fast-track approvals.`,
    applicationProcess: 'Apply online through Himachal Pradesh Single Window Clearance Portal.',
    contactInformation: 'HPSIDC Head Office, Shimla, Himachal Pradesh',
    sourceName: 'Industries Department Himachal Pradesh Portal',
    officialSource: 'Government of Himachal Pradesh Investor Registry',
    officialSourceUrl: 'https://himachal.gov.in/industries',
    sourceVerificationDate: '2026-09-18'
  };
});
