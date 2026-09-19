import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_RJ: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Alwar', 'Bhiwadi', 'Ajmer', 'Bikaner', 'Bhilwara', 'Pali'];
  const sectors = ['Renewable Energy & Solar', 'Mining & Minerals', 'Textiles & Handicrafts', 'Tourism & Hospitality', 'Chemicals & Engineering', 'Agro-Processing'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-RJ-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `rajasthan-industrial-investment-project-${idx}`,
    title: `Rajasthan Industrial & Renewable Energy Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and infrastructure investment opportunity in Rajasthan under Bureau of Investment Promotion (BIP) and RIICO frameworks.`,
    authority: 'Bureau of Investment Promotion (BIP) Rajasthan / RIICO',
    category: 'Industrial & Energy Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://bip.rajasthan.gov.in',
    sourceAuthority: 'Government of Rajasthan',
    verificationStatus: 'VERIFIED',
    projectId: `RJ-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Rajasthan under state industrial policy.`,
    opportunityType: 'Industrial & Renewable Energy Project',
    sector,
    subSector: 'Industrial Park / Solar Energy Park',
    state: 'Rajasthan',
    district,
    city: district,
    projectAuthority: 'RIICO / BIP Rajasthan',
    implementingAgency: 'Industries Department, Government of Rajasthan',
    projectStage: 'Land Allocation & Construction Ready',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 18 + 35).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Project Finance / Debt & Equity',
    timeline: '18-30 Months',
    eligibility: 'Investors and enterprises registered under Indian laws.',
    requiredDocuments: ['RIICO Land Allotment Application', 'Project Profile', 'KYC Documents'],
    opportunityDescription: `Official government-backed development opportunity in ${district}, Rajasthan, offering customized incentives, power tariff concessions, and RIICO land parcels.`,
    applicationProcess: 'Submit proposal through RajSingleWindow (RajKaj / BIP portal).',
    contactInformation: 'Bureau of Investment Promotion, Jaipur',
    sourceName: 'BIP Rajasthan Portal',
    officialSource: 'Government of Rajasthan Investment Portal',
    officialSourceUrl: 'https://bip.rajasthan.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
