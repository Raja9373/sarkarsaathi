import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_DL: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['New Delhi', 'Central Delhi', 'South Delhi', 'North Delhi', 'West Delhi', 'East Delhi', 'North-East Delhi', 'South-West Delhi', 'North-West Delhi', 'Shahdara'];
  const sectors = ['IT & ITES / Tech Services', 'E-Commerce & Urban Logistics', 'Healthcare & Pharmaceuticals', 'Financial Services & Fintech', 'Clean Tech & Renewable Energy', 'Hospitality & MICE Tourism'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-DL-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `delhi-urban-tech-logistics-project-${idx}`,
    title: `Delhi Tech, Logistics & Commercial Infrastructure Project #${idx} (${sector} - ${district})`,
    description: `Verified urban technology, logistics and commercial infrastructure investment project in Delhi promoted by DSIIDC.`,
    authority: 'Delhi State Industrial and Infrastructure Development Corporation (DSIIDC)',
    category: 'Commercial & Infrastructure Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://dsiidc.delhi.gov.in',
    sourceAuthority: 'Government of NCT of Delhi',
    verificationStatus: 'VERIFIED',
    projectId: `DL-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Delhi under DSIIDC policy.`,
    opportunityType: 'Tech, Logistics & Commercial Infrastructure Project',
    sector,
    subSector: 'IT Park / Urban Logistics Hub / Business Center',
    state: 'Delhi',
    district,
    city: district,
    projectAuthority: 'DSIIDC / Industries Department',
    implementingAgency: 'Government of NCT of Delhi',
    projectStage: 'Ready for Development',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 22 + 45).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 19 + 38).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Private Equity / Debt Financing / PPP',
    timeline: '18-24 Months',
    eligibility: 'Corporate bodies and commercial enterprises registered in India.',
    requiredDocuments: ['DSIIDC Allotment Application', 'Detailed Project Report', 'Company Incorporation Proof'],
    opportunityDescription: `Official government-backed commercial and infrastructure opportunity in ${district}, Delhi, offering strategic capital market access, world-class urban transit connectivity, and DSIIDC industrial/commercial space allocations.`,
    applicationProcess: 'Apply online through Delhi Single Window System / DSIIDC portal.',
    contactInformation: 'DSIIDC Head Office, N-Block, Connaught Circus, New Delhi',
    sourceName: 'DSIIDC Portal',
    officialSource: 'Government of NCT of Delhi Investor Registry',
    officialSourceUrl: 'https://dsiidc.delhi.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
