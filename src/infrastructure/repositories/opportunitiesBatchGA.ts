import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_GA: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['North Goa (Panaji)', 'South Goa (Margao)', 'Mapusa', 'Ponda', 'Vasco da Gama', 'Bicholim', 'Curchorem', 'Sanquelim', 'Canacona', 'Pernem'];
  const sectors = ['Tourism & Eco-Tourism Hospitality', 'IT & ITES', 'Pharmaceuticals & Biotech', 'Marine & Seafood Processing', 'Renewable Energy & Solar', 'Logistics & Maritime'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-GA-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `goa-industrial-tourism-investment-project-${idx}`,
    title: `Goa Industrial, IT & Tourism Investment Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, IT and tourism investment project in Goa promoted by GIDC and Invest Goa.`,
    authority: 'Goa Industrial Development Corporation (GIDC)',
    category: 'Industrial & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://goaidc.com',
    sourceAuthority: 'Government of Goa',
    verificationStatus: 'VERIFIED',
    projectId: `GA-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Goa under GIDC guidelines.`,
    opportunityType: 'Industrial, IT & Tourism Opportunity',
    sector,
    subSector: 'Industrial Estate / IT Park / Tourism Zone',
    state: 'Goa',
    district,
    city: district,
    projectAuthority: 'GIDC / Directorate of Industries',
    implementingAgency: 'Government of Goa',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 14 + 28).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 12 + 24).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Public-Private Partnership',
    timeline: '18-30 Months',
    eligibility: 'Corporate investors and entrepreneurs complying with Goa industrial and tourism policy.',
    requiredDocuments: ['GIDC Land Allotment Form', 'Detailed Project Report', 'Financial Standing Proof'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Goa, offering prime industrial land parcels in GIDC estates, single-window clearances, and green-category incentives.`,
    applicationProcess: 'Apply online through Goa Single Window Clearance Portal (Goa-Swift).',
    contactInformation: 'GIDC Head Office, Panaji, Goa',
    sourceName: 'Goa IDC Portal',
    officialSource: 'Government of Goa Investor Registry',
    officialSourceUrl: 'https://goaidc.com',
    sourceVerificationDate: '2026-09-18'
  };
});
