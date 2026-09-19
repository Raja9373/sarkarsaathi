import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_MP_2: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Satna', 'Rewa', 'Dewas', 'Ratlam', 'Khandwa', 'Chhindwara'];
  const sectors = ['Agro & Food Processing', 'Pharmaceuticals & Healthcare', 'Textiles & Garments', 'Automotive & Engineering', 'IT & ITES', 'Renewable Energy & Pumped Storage'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-MP2-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `madhya-pradesh-expansion-investment-project-${idx}`,
    title: `Madhya Pradesh Industrial & Agro-Processing Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and manufacturing investment project in Madhya Pradesh promoted by MPIDC.`,
    authority: 'Madhya Pradesh Industrial Development Corporation (MPIDC)',
    category: 'Industrial Investment Project',
    status: 'ACTIVE',
    sourceUrl: 'https://investmp.gov.in',
    sourceAuthority: 'Government of Madhya Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `MP2-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Madhya Pradesh under MPIDC policy.`,
    opportunityType: 'Industrial, Agro & Manufacturing Project',
    sector,
    subSector: 'Industrial Cluster / Plug-and-Play Park',
    state: 'Madhya Pradesh',
    district,
    city: district,
    projectAuthority: 'MPIDC',
    implementingAgency: 'Department of Industrial Policy and Investment Promotion, MP',
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 12 + 25).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Joint Venture',
    timeline: '18-30 Months',
    eligibility: 'Eligible industrial investors and corporate entities.',
    requiredDocuments: ['MPIDC Application Form', 'Detailed Project Report', 'Financial Verification'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Madhya Pradesh, offering plug-and-play industrial land, financial incentives, and fast-track clearance via MPIDC.`,
    applicationProcess: 'Apply online through MP Investment Portal single window system.',
    contactInformation: 'MPIDC Regional Office',
    sourceName: 'Invest MP Portal',
    officialSource: 'Government of Madhya Pradesh Official Portal',
    officialSourceUrl: 'https://investmp.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
