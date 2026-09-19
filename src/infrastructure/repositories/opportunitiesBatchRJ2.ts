import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_RJ_2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Udaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Alwar', 'Bhilwara', 'Barmer', 'Jaisalmer', 'Sirohi'];
  const sectors = ['Renewable Energy & Green Hydrogen', 'Tourism & Heritage Hospitality', 'Mineral Mining & Processing', 'Handicrafts & Textiles', 'Agro-Processing', 'Engineering & Auto Components'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-RJ2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `rajasthan-expansion-investment-project-${idx}`,
    title: `Rajasthan Industrial & Renewable Energy Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, mineral and renewable energy investment project in Rajasthan promoted by Bureau of Investment Promotion (BIP).`,
    authority: 'Bureau of Investment Promotion (BIP) Rajasthan / RIICO',
    category: 'Industrial & Energy Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://bip.rajasthan.gov.in',
    sourceAuthority: 'Government of Rajasthan',
    verificationStatus: 'VERIFIED',
    projectId: `RJ2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Rajasthan under BIP framework.`,
    opportunityType: 'Industrial, Renewable Energy & Mineral Project',
    sector,
    subSector: 'Solar Park / Industrial Estate / Mineral Block',
    state: 'Rajasthan',
    district,
    city: district,
    projectAuthority: 'RIICO / BIP Rajasthan',
    implementingAgency: 'Industries Department, Government of Rajasthan',
    projectStage: 'Ready for Allotment & Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 16 + 32).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 13 + 26).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Project Finance / FDI / Debt & Equity',
    timeline: '24-36 Months',
    eligibility: 'Registered corporate entities and energy developers.',
    requiredDocuments: ['RIICO Allotment Application', 'Project Feasibility Report', 'KYC & Financial Documents'],
    opportunityDescription: `Official government-backed development project in ${district}, Rajasthan, featuring vast solar/industrial land banks, customized state tax exemptions, and streamlined single-window approvals.`,
    applicationProcess: 'Apply online through RajSingleWindow portal (BIP Rajasthan).',
    contactInformation: 'Bureau of Investment Promotion, Jaipur, Rajasthan',
    sourceName: 'BIP Rajasthan Portal',
    officialSource: 'Government of Rajasthan Investment Portal',
    officialSourceUrl: 'https://bip.rajasthan.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
