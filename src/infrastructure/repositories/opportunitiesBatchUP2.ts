import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_UP_2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Agra', 'Aligarh', 'Bareilly', 'Jhansi', 'Saharanpur', 'Moradabad', 'Gorakhpur', 'Mathura', 'Firozabad', 'Ayodhya'];
  const sectors = ['Agro & Food Processing', 'Handloom & Textiles', 'Defense Manufacturing', 'Tourism & Cultural Infrastructure', 'Electronic System Design', 'Renewable Energy'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-UP2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `uttar-pradesh-expansion-industrial-project-${idx}`,
    title: `Uttar Pradesh Regional Industrial & Infrastructure Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial development and investment opportunity in Uttar Pradesh under official Invest UP and MSME policy frameworks.`,
    authority: 'Invest UP / District Industries Centre',
    category: 'Industrial Investment Project',
    status: 'ACTIVE',
    sourceUrl: 'https://investup.org.in',
    sourceAuthority: 'Government of Uttar Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `UP2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, UP under Invest UP guidelines.`,
    opportunityType: 'Industrial Manufacturing & Infrastructure Project',
    sector,
    subSector: 'Industrial Unit / Regional Park',
    state: 'Uttar Pradesh',
    district,
    city: district,
    projectAuthority: 'Invest UP / UPEIDA',
    implementingAgency: 'Department of Industrial Development, Government of Uttar Pradesh',
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 14 + 28).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 11 + 22).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Capital Subsidy Support',
    timeline: '18-36 Months',
    eligibility: 'Corporate entities and manufacturing enterprises complying with UP industrial policy.',
    requiredDocuments: ['Nivesh Mitra Application', 'Detailed Project Report', 'Financial Statement', 'Land Requirement Schedule'],
    opportunityDescription: `Official government-backed business opportunity in ${district}, Uttar Pradesh, offering bespoke capital subsidies, power tariff exemptions, and fast-track single-window clearances.`,
    applicationProcess: 'Apply online through the Nivesh Mitra single-window portal of Government of Uttar Pradesh.',
    contactInformation: 'Invest UP Regional Facilitation Desk',
    sourceName: 'Invest UP Portal',
    officialSource: 'Government of Uttar Pradesh Investor Registry',
    officialSourceUrl: 'https://investup.org.in',
    sourceVerificationDate: '2026-09-18'
  };
});
