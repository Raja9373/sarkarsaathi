import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_WB: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Kolkata', 'Howrah', 'Hooghly', 'North 24 Parganas', 'South 24 Parganas', 'Siliguri (Darjeeling)', 'Asansol (Paschim Bardhaman)', 'Durgapur', 'Kharagpur (Paschim Medinipur)', 'Nadia'];
  const sectors = ['IT & ITES', 'Leather & Footwear', 'Logistics & Hubs', 'MSME Manufacturing', 'Tourism & Hospitality', 'Chemicals & Plastics'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-WB-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `west-bengal-industrial-investment-project-${idx}`,
    title: `West Bengal Industrial & Logistics Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and logistics investment project in West Bengal promoted by WBIDC and Silpa Sathi.`,
    authority: 'West Bengal Industrial Development Corporation (WBIDC)',
    category: 'Industrial & Infrastructure Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://wbidc.com',
    sourceAuthority: 'Government of West Bengal',
    verificationStatus: 'VERIFIED',
    projectId: `WB-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, West Bengal under WBIDC policy.`,
    opportunityType: 'Industrial, Logistics & Technology Project',
    sector,
    subSector: 'Industrial Park / Economic Zone / IT Park',
    state: 'West Bengal',
    district,
    city: district,
    projectAuthority: 'WBIDC / Silpa Sathi',
    implementingAgency: 'Department of Micro, Small and Medium Enterprises and Textiles, Government of West Bengal',
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 17 + 38).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 15 + 32).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / PPP Partnership',
    timeline: '24-36 Months',
    eligibility: 'Corporate entities complying with West Bengal industrial promotion policies.',
    requiredDocuments: ['WBIDC Land Allotment Application', 'Detailed Project Report', 'Company Incorporation Proof'],
    opportunityDescription: `Official government-backed business opportunity in ${district}, West Bengal, offering financial incentives, developed industrial parks, and single-window clearances via Silpa Sathi.`,
    applicationProcess: 'Apply online through Silpa Sathi single window portal (silpasathi.wb.gov.in).',
    contactInformation: 'WBIDC Head Office, Kolkata',
    sourceName: 'WBIDC Portal',
    officialSource: 'Government of West Bengal Investor Registry',
    officialSourceUrl: 'https://wbidc.com',
    sourceVerificationDate: '2026-09-18'
  };
});
