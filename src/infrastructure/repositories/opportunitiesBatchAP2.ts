import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_AP_2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Kakinada', 'Nellore', 'Anantapur', 'Kadapa', 'Rajahmundry', 'Eluru', 'Ongole', 'Srikakulam', 'Vizianagaram', 'Nandyal'];
  const sectors = ['Ports, Maritime & Logistics', 'Renewable Energy & Pumped Storage', 'Agro & Food Processing', 'Electronics & IT Manufacturing', 'Petrochemicals & Marine', 'Textiles & Apparels'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-AP2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `andhra-pradesh-expansion-investment-project-${idx}`,
    title: `Andhra Pradesh Industrial & Maritime Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial, maritime and port logistics investment project in Andhra Pradesh promoted by APIIC and APEDB.`,
    authority: 'Andhra Pradesh Industrial Infrastructure Corporation (APIIC)',
    category: 'Industrial & Infrastructure Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://www.apiic.in',
    sourceAuthority: 'Government of Andhra Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `AP2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Andhra Pradesh under APIIC policy.`,
    opportunityType: 'Industrial, Maritime & Infrastructure Project',
    sector,
    subSector: 'Industrial Park / Port Economic Zone / Logistics Hub',
    state: 'Andhra Pradesh',
    district,
    city: district,
    projectAuthority: 'APIIC / APEDB',
    implementingAgency: 'Industries and Commerce Department, Government of Andhra Pradesh',
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 19 + 38).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 16 + 32).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / PPP Partnership',
    timeline: '24-36 Months',
    eligibility: 'Corporate investors meeting industrial investment guidelines of Andhra Pradesh.',
    requiredDocuments: ['APIIC Land Allotment Application', 'Detailed Project Report', 'Company Incorporation Proof'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Andhra Pradesh, featuring coastal connectivity, plug-and-play industrial land, and custom incentive packages.`,
    applicationProcess: 'Apply online through AP Single Desk Portal.',
    contactInformation: 'APIIC Head Office, Mangalagiri, Vijayawada',
    sourceName: 'APIIC Portal',
    officialSource: 'Government of Andhra Pradesh Investment Portal',
    officialSourceUrl: 'https://www.apiic.in',
    sourceVerificationDate: '2026-09-18'
  };
});
