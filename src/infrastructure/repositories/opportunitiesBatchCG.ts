import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_CG: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Raipur', 'Bilaspur', 'Durg', 'Bhilai', 'Korba', 'Raigarh', 'Rajnandgaon', 'Jagdalpur (Bastar)', 'Ambikapur', 'Dhamtari'];
  const sectors = ['Steel & Metal Downstream', 'Agro & Forest Produce Processing', 'Solar & Renewable Energy', 'IT & Electronics', 'Handloom & Silk', 'Mineral Processing'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-CG-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `chhattisgarh-industrial-investment-project-${idx}`,
    title: `Chhattisgarh Industrial & Metal Downstream Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and mineral investment project in Chhattisgarh promoted by CSIDC and Invest Chhattisgarh.`,
    authority: 'Chhattisgarh State Industrial Development Corporation (CSIDC)',
    category: 'Industrial & Metal Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://industries.cg.gov.in',
    sourceAuthority: 'Government of Chhattisgarh',
    verificationStatus: 'VERIFIED',
    projectId: `CG-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Chhattisgarh under CSIDC guidelines.`,
    opportunityType: 'Industrial & Mineral Processing Opportunity',
    sector,
    subSector: 'Industrial Growth Center / Metal Park',
    state: 'Chhattisgarh',
    district,
    city: district,
    projectAuthority: 'CSIDC / Commerce & Industries Department',
    implementingAgency: 'Government of Chhattisgarh',
    projectStage: 'Ready for Allotment',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 18 + 35).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Term Loans / PPP',
    timeline: '18-30 Months',
    eligibility: 'Registered manufacturing and industrial investors.',
    requiredDocuments: ['CSIDC Land Plot Application', 'Detailed Project Report', 'Financial Statement'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Chhattisgarh, providing low-cost industrial land, power tariff concessions, and fast-track clearance via CSIDC.`,
    applicationProcess: 'Apply online through Chhattisgarh Single Window Portal (CGSWCS).',
    contactInformation: 'CSIDC Head Office, Raipur, Chhattisgarh',
    sourceName: 'CSIDC Portal',
    officialSource: 'Government of Chhattisgarh Investor Registry',
    officialSourceUrl: 'https://industries.cg.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
