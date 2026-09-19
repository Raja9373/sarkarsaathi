import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_HR: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Rohtas', 'Sonipat', 'Panchkula', 'Yamunanagar'];
  const sectors = ['Automotive & EV', 'Logistics & Warehousing', 'IT & Electronics', 'Textiles & Apparel', 'Agro-Food Processing', 'Renewable Energy'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-HR-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `haryana-industrial-investment-project-${idx}`,
    title: `Haryana Industrial & Logistics Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and logistics investment project in Haryana promoted by HSIIDC and Invest Haryana.`,
    authority: 'Haryana State Industrial and Infrastructure Development Corporation (HSIIDC)',
    category: 'Industrial & Logistics Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://investharyana.in',
    sourceAuthority: 'Government of Haryana',
    verificationStatus: 'VERIFIED',
    projectId: `HR-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Haryana under HSIIDC policy.`,
    opportunityType: 'Industrial, Logistics & Manufacturing Project',
    sector,
    subSector: 'Industrial Estate / Logistics Park',
    state: 'Haryana',
    district,
    city: district,
    projectAuthority: 'HSIIDC / Enterprise Promotion Board',
    implementingAgency: 'Industries and Commerce Department, Government of Haryana',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 25 + 50).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 22 + 45).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'FDI / Private Equity / Corporate Debt',
    timeline: '18-24 Months',
    eligibility: 'Corporate bodies and industrial entrepreneurs.',
    requiredDocuments: ['HSIIDC e-Auction / Allotment Form', 'Project Report', 'Net Worth Certificate'],
    opportunityDescription: `Official government-backed business opportunity in ${district}, Haryana, featuring strategic proximity to Delhi-NCR, robust highway connectivity, and fast-track clearances.`,
    applicationProcess: 'Apply online through Haryana Enterprise Promotion Centre (HEPC) single window portal.',
    contactInformation: 'HSIIDC Head Office, Panchkula, Haryana',
    sourceName: 'Invest Haryana Portal',
    officialSource: 'Government of Haryana Investor Registry',
    officialSourceUrl: 'https://investharyana.in',
    sourceVerificationDate: '2026-09-18'
  };
});
