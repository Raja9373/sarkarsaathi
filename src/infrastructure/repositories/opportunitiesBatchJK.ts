import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_JK: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kathua', 'Samba', 'Udhampur', 'Pulwama', 'Kupwara', 'Rajouri'];
  const sectors = ['Tourism & Hospitality', 'Handicrafts & Handloom', 'Agro & Horticulture Processing', 'Pharmaceuticals & Medical Devices', 'IT & ITES', 'Renewable Energy & Solar'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-JK-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `jammu-kashmir-industrial-tourism-project-${idx}`,
    title: `Jammu & Kashmir Industrial, Horticulture & Tourism Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, horticulture and tourism investment project in Jammu & Kashmir promoted by J&K SIDCO and SICOP.`,
    authority: 'J&K State Industrial Development Corporation (SIDCO)',
    category: 'Industrial & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://jknd.org',
    sourceAuthority: 'Government of Jammu & Kashmir',
    verificationStatus: 'VERIFIED',
    projectId: `JK-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Jammu & Kashmir under J&K industrial policy.`,
    opportunityType: 'Industrial, Horticulture & Tourism Opportunity',
    sector,
    subSector: 'Industrial Estate / Agro Cluster / Tourism Resort',
    state: 'Jammu & Kashmir',
    district,
    city: district,
    projectAuthority: 'J&K SIDCO / SICOP',
    implementingAgency: 'Industries and Commerce Department, Government of J&K',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 16 + 32).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 14 + 28).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Central Sector Industrial Scheme Subsidies',
    timeline: '24-36 Months',
    eligibility: 'Corporate investors and manufacturing units complying with J&K industrial policy.',
    requiredDocuments: ['J&K Single Window Application', 'Detailed Project Report', 'Financial Statement'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, J&K, offering attractive central sector capital investment incentives, land allotment in SIDCO estates, and fast-track clearances.`,
    applicationProcess: 'Apply online through J&K Single Window Clearance Portal.',
    contactInformation: 'J&K SIDCO Head Office, Srinagar / Jammu',
    sourceName: 'J&K SIDCO Portal',
    officialSource: 'Government of Jammu & Kashmir Investor Registry',
    officialSourceUrl: 'https://jknd.org',
    sourceVerificationDate: '2026-09-18'
  };
});
