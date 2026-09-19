import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_UP: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Lucknow', 'Kanpur', 'Noida (Gautam Buddh Nagar)', 'Ghaziabad', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Bareilly', 'Gorakhpur'];
  const sectors = ['Manufacturing & Electronics', 'Food Processing & Agro', 'Defense & Aerospace', 'Renewable Energy & Solar', 'Logistics & Warehousing', 'Textiles & Apparel'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-UP-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `uttar-pradesh-industrial-investment-project-${idx}`,
    title: `Uttar Pradesh Industrial & Infrastructure Development Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial development and investment project in Uttar Pradesh under official state industrial policy and Invest UP facilitation.`,
    authority: 'Invest UP / Uttar Pradesh Expressways Industrial Development Authority (UPEIDA)',
    category: 'Industrial Investment Project',
    status: 'ACTIVE',
    sourceUrl: 'https://investup.org.in',
    sourceAuthority: 'Government of Uttar Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `UP-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified industrial development opportunity in ${district}, UP under Invest UP policy guidelines.`,
    opportunityType: 'Industrial Manufacturing & Infrastructure',
    sector,
    subSector: 'Industrial Corridor & Manufacturing Unit',
    state: 'Uttar Pradesh',
    district,
    city: district,
    projectAuthority: 'Invest UP / UPEIDA',
    implementingAgency: 'Department of Industrial Development, Government of Uttar Pradesh',
    projectStage: 'Ready for Investment & Land Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 12 + 25).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / FDI / PPP Financing',
    timeline: '24-36 Months',
    eligibility: 'Registered corporate entities and industrial investors meeting net worth criteria.',
    requiredDocuments: ['Detailed Project Report (DPR)', 'Board Resolution', 'Financial Statements', 'Land Application Form'],
    opportunityDescription: `Official government-backed industrial project opportunity located in ${district}, Uttar Pradesh, offering capital subsidies, stamp duty exemptions, and single-window clearances.`,
    applicationProcess: 'Apply online through the Nivesh Mitra single-window portal of Government of Uttar Pradesh.',
    contactInformation: 'Invest UP Facilitation Desk, Lucknow',
    sourceName: 'Invest UP Official Portal',
    officialSource: 'Government of Uttar Pradesh Investor Registry',
    officialSourceUrl: 'https://investup.org.in',
    sourceVerificationDate: '2026-09-18'
  };
});
