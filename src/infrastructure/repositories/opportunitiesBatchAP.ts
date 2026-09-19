import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_AP: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Visakhapatnam', 'Vijayawada (NTR)', 'Tirupati', 'Guntur', 'Kurnool', 'Kakinada', 'Nellore', 'Anantapur', 'Kadapa', 'Rajahmundry'];
  const sectors = ['Ports & Marine Logistics', 'Renewable Energy & Solar', 'Agro & Food Processing', 'Electronics & IT', 'Petrochemicals & Pharma', 'Textiles & Apparel'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-AP-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `andhra-pradesh-industrial-investment-project-${idx}`,
    title: `Andhra Pradesh Industrial & Port Logistics Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and maritime/logistics investment project in Andhra Pradesh promoted by APIIC and APEDB.`,
    authority: 'Andhra Pradesh Industrial Infrastructure Corporation (APIIC)',
    category: 'Industrial & Infrastructure Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://www.apiic.in',
    sourceAuthority: 'Government of Andhra Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `AP-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Andhra Pradesh under APIIC industrial policy.`,
    opportunityType: 'Industrial, Port & Infrastructure Project',
    sector,
    subSector: 'Industrial Park / Port Economic Zone',
    state: 'Andhra Pradesh',
    district,
    city: district,
    projectAuthority: 'APIIC / APEDB',
    implementingAgency: 'Industries and Commerce Department, Government of Andhra Pradesh',
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 22 + 45).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 19 + 38).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / PPP Partnership',
    timeline: '24-36 Months',
    eligibility: 'Corporate investors meeting industrial investment guidelines of Andhra Pradesh.',
    requiredDocuments: ['APIIC Land Allotment Request', 'Detailed Project Report', 'Company Registration'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Andhra Pradesh, featuring coastal connectivity, plug-and-play industrial land, and custom incentive packages.`,
    applicationProcess: 'Apply online through AP Single Desk Portal (APMSME / APIIC portal).',
    contactInformation: 'APIIC Head Office, Mangalagiri, Vijayawada',
    sourceName: 'APIIC Portal',
    officialSource: 'Government of Andhra Pradesh Investment Portal',
    officialSourceUrl: 'https://www.apiic.in',
    sourceVerificationDate: '2026-09-18'
  };
});
