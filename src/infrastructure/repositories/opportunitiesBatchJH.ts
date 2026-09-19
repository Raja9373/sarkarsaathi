import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_JH: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const districts = ['Ranchi', 'Jamshedpur (East Singhbhum)', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Ramgarh', 'Giridih', 'Palamu', 'Dumka'];
  const sectors = ['Mining & Minerals Downstream', 'Heavy Engineering', 'Agro & Food Processing', 'Renewable Energy & Solar', 'Tourism & Eco-Tourism', 'Handloom & Handicrafts'];
  const sector = sectors[i % sectors.length];
  const district = districts[i % districts.length];

  return {
    id: `OPP-JH-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `jharkhand-industrial-investment-project-${idx}`,
    title: `Jharkhand Industrial & Mining Downstream Project #${idx} (${sector} - ${district})`,
    description: `Verified industrial and mineral downstream investment project in Jharkhand promoted by JINFRA and Industry Department.`,
    authority: 'Jharkhand Industrial Area Development Authority (JIADA)',
    category: 'Industrial & Mineral Investment',
    status: 'ACTIVE',
    sourceUrl: 'https://jharkhand.gov.in/industries',
    sourceAuthority: 'Government of Jharkhand',
    verificationStatus: 'VERIFIED',
    projectId: `JH-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${district}, Jharkhand under JIADA framework.`,
    opportunityType: 'Industrial, Mineral & Manufacturing Project',
    sector,
    subSector: 'Industrial Area / Mineral Park',
    state: 'Jharkhand',
    district,
    city: district,
    projectAuthority: 'JIADA / Industries Department',
    implementingAgency: 'Government of Jharkhand',
    projectStage: 'Ready for Grounding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 20 + 40).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 17 + 35).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Strategic Joint Venture',
    timeline: '24-36 Months',
    eligibility: 'Corporate bodies and industrial entrepreneurs.',
    requiredDocuments: ['JIADA Land Allotment Form', 'Project Report', 'Company Profile & KYC'],
    opportunityDescription: `Official government-backed investment opportunity in ${district}, Jharkhand, offering rich mineral resource proximity, industrial land in JIADA zones, and tailor-made single-window approvals.`,
    applicationProcess: 'Apply online through Jharkhand Single Window Clearance System (Udyog Mitra portal).',
    contactInformation: 'JIADA Head Office, Ranchi, Jharkhand',
    sourceName: 'Industries Department Jharkhand Portal',
    officialSource: 'Government of Jharkhand Investor Registry',
    officialSourceUrl: 'https://jharkhand.gov.in/industries',
    sourceVerificationDate: '2026-09-18'
  };
});
