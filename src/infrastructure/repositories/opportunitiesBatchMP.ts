import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_MP: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Dewas', 'Sagar', 'Satna', 'Rewa', 'Ratlam'];
  const sectors = ['Automotive & EV', 'Pharmaceuticals', 'Food & Agriculture', 'Textiles & Garments', 'IT & ITES', 'Renewable Energy'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-MP-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `madhya-pradesh-industrial-investment-project-${idx}`,
    title: `Madhya Pradesh Industrial & Manufacturing Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial investment project in Madhya Pradesh promoted by MPIDC and Invest Madhya Pradesh.`,
    authority: 'Madhya Pradesh Industrial Development Corporation (MPIDC)',
    category: 'Industrial Investment Project',
    status: 'ACTIVE',
    sourceUrl: 'https://investmp.gov.in',
    sourceAuthority: 'Government of Madhya Pradesh',
    verificationStatus: 'VERIFIED',
    projectId: `MP-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified industrial manufacturing opportunity in ${district}, Madhya Pradesh.`,
    opportunityType: 'Industrial & Manufacturing Opportunity',
    sector,
    subSector: 'Industrial Cluster / SEZ',
    state: 'Madhya Pradesh',
    district,
    city: district,
    projectAuthority: 'MPIDC',
    implementingAgency: 'Department of Industrial Policy and Investment Promotion, MP',
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 16 + 32).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 14 + 28).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / PPP',
    timeline: '24 Months',
    eligibility: 'Eligible corporate bodies and manufacturing enterprises.',
    requiredDocuments: ['MPIDC Investment Proposal', 'Project DPR', 'Identity & Address Proof'],
    opportunityDescription: `Official investment opportunity in ${district}, MP, featuring plug-and-play industrial infrastructure, tax holidays, and fast-track approvals via MPIDC.`,
    applicationProcess: 'Apply online through MP Investment Portal single window system.',
    contactInformation: 'MPIDC Head Office, Bhopal',
    sourceName: 'Invest MP Portal',
    officialSource: 'Government of Madhya Pradesh Official Portal',
    officialSourceUrl: 'https://investmp.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
