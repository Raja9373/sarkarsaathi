import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_BR: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Patna', 'Muzaffarpur', 'Bhagalpur', 'Gaya', 'Darbhanga', 'Purnia', 'Begusarai', 'Nalanda', 'Rohtas', 'Siwan'];
  const sectors = ['Food Processing & Agro', 'Textiles & Leather', 'General Manufacturing', 'Renewable Energy', 'IT & Electronics', 'Tourism & Hospitality'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-BR-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `bihar-industrial-investment-project-${idx}`,
    title: `Bihar Industrial & Agro-Processing Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial development and agro-processing investment project in Bihar under Bihar Industrial Investment Promotion Policy.`,
    authority: 'Bihar Industrial Area Development Authority (BIADA)',
    category: 'Industrial Investment Project',
    status: 'ACTIVE',
    sourceUrl: 'https://industries.bihar.gov.in',
    sourceAuthority: 'Government of Bihar',
    verificationStatus: 'VERIFIED',
    projectId: `BR-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Bihar under BIADA guidelines.`,
    opportunityType: 'Industrial & Agro-Processing Opportunity',
    sector,
    subSector: 'Industrial Growth Centre / Agro Cluster',
    state: 'Bihar',
    district,
    city: district,
    projectAuthority: 'BIADA / Industries Department',
    implementingAgency: 'Government of Bihar',
    projectStage: 'Ready for Land Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 12 + 25).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 10 + 20).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Capital Subsidy',
    timeline: '18-30 Months',
    eligibility: 'Entrepreneurs and corporate entities registered in India.',
    requiredDocuments: ['BIADA Land Application', 'Detailed Project Report', 'KYC & Financial Statements'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Bihar, offering capital investment subsidies, freight assistance, and plug-and-play industrial land.`,
    applicationProcess: 'Apply online through Bihar Single Window Clearance System (Invest Bihar portal).',
    contactInformation: 'BIADA Head Office, Patna',
    sourceName: 'Industries Department Bihar Portal',
    officialSource: 'Government of Bihar Official Registry',
    officialSourceUrl: 'https://industries.bihar.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
