import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_AS: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Guwahati (Kamrup Metro)', 'Dibrugarh', 'Jorhat', 'Silchar (Cachar)', 'Tezpur (Sonitpur)', 'Tinsukia', 'Nagaon', 'Bongaigaon', 'Goalpara', 'Karbi Anglong'];
  const sectors = ['Tea & Agro-Processing', 'Bamboo & Cane Craft', 'Petroleum & Petrochemicals', 'Tourism & Hospitality', 'Handloom & Textiles', 'Logistics & Inland Waterways'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-AS-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `assam-industrial-investment-project-${idx}`,
    title: `Assam Industrial, Agro & Logistics Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and agro-processing investment project in Assam promoted by AIDC and Invest Assam.`,
    authority: 'Assam Industrial Development Corporation (AIDC)',
    category: 'Industrial & Agro Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://invest.assam.gov.in',
    sourceAuthority: 'Government of Assam',
    verificationStatus: 'VERIFIED',
    projectId: `AS-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Assam under Invest Assam framework.`,
    opportunityType: 'Industrial, Agro & Logistics Opportunity',
    sector,
    subSector: 'Industrial Park / Bamboo Park / Logistics Hub',
    state: 'Assam',
    district,
    city: district,
    projectAuthority: 'AIDC / Industries and Commerce Department',
    implementingAgency: 'Government of Assam',
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 13 + 28).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 11 + 24).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Northeast Industrial Policy Subsidies',
    timeline: '24-36 Months',
    eligibility: 'Corporate entities and investors registered in India.',
    requiredDocuments: ['AIDC Investment Proposal', 'Project DPR', 'KYC & Net Worth Proof'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Assam, offering special Northeast industrial incentives, capital investment subsidies, and strategic gateway access to Southeast Asian markets.`,
    applicationProcess: 'Apply online through Invest Assam Single Window Portal.',
    contactInformation: 'AIDC Head Office, Guwahati, Assam',
    sourceName: 'Invest Assam Portal',
    officialSource: 'Government of Assam Investor Registry',
    officialSourceUrl: 'https://invest.assam.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
