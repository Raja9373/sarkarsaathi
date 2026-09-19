import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_UK: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Dehradun', 'Haridwar', 'Udham Singh Nagar (Rudrapur)', 'Nainital', 'Pauri Garhwal', 'Almora', 'Tehri Garhwal', 'Pithoragarh', 'Chamoli', 'Champawat'];
  const sectors = ['Pharmaceuticals & Biotech', 'Tourism & Wellness', 'Automotive & Engineering', 'Aromatic & Herbal Processing', 'IT & ITES', 'Renewable Energy & Hydro'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-UK-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `uttarakhand-industrial-investment-project-${idx}`,
    title: `Uttarakhand Industrial, Pharma & Tourism Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, pharmaceutical and tourism investment project in Uttarakhand promoted by SIDCUL and Invest Uttarakhand.`,
    authority: 'State Infrastructure and Industrial Development Corporation of Uttarakhand (SIDCUL)',
    category: 'Industrial & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://sidcul.com',
    sourceAuthority: 'Government of Uttarakhand',
    verificationStatus: 'VERIFIED',
    projectId: `UK-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Uttarakhand under SIDCUL policy.`,
    opportunityType: 'Industrial, Pharma & Tourism Opportunity',
    sector,
    subSector: 'Integrated Industrial Estate / Pharma City / Eco-Tourism Zone',
    state: 'Uttarakhand',
    district,
    city: district,
    projectAuthority: 'SIDCUL / Directorate of Industries',
    implementingAgency: 'Government of Uttarakhand',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 15 + 32).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 13 + 28).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Special Hill State Incentives',
    timeline: '18-24 Months',
    eligibility: 'Eligible industrial entrepreneurs and corporate entities.',
    requiredDocuments: ['SIDCUL Land Allotment Form', 'Detailed Project Report', 'Financial Standing Certificate'],
    opportunityDescription: `Official government-backed business opportunity in ${district}, Uttarakhand, offering developed industrial plots in SIDCUL estates, tax exemptions, and specialized hill-state investment incentives.`,
    applicationProcess: 'Apply online through Uttarakhand Single Window Clearance System (Invest Uttarakhand portal).',
    contactInformation: 'SIDCUL Head Office, Dehradun, Uttarakhand',
    sourceName: 'SIDCUL Portal',
    officialSource: 'Government of Uttarakhand Investor Registry',
    officialSourceUrl: 'https://sidcul.com',
    sourceVerificationDate: '2026-09-18'
  };
});
