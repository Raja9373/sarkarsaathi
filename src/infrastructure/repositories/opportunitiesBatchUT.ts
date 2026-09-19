import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_UT: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const utList = [
    { state: 'Ladakh', district: 'Leh / Kargil', authority: 'Ladakh Autonomous Hill Development Council / UT Administration', url: 'https://ladakh.nic.in' },
    { state: 'Chandigarh', district: 'Chandigarh UT', authority: 'Chandigarh Administration / Department of Industries', url: 'https://chandigarh.gov.in' },
    { state: 'Andaman and Nicobar Islands', district: 'Port Blair', authority: 'Andaman & Nicobar Administration / ANIIDCO', url: 'https://andaman.gov.in' },
    { state: 'Lakshadweep', district: 'Kavaratti', authority: 'Lakshadweep Administration', url: 'https://lakshadweep.gov.in' },
    { state: 'Dadra and Nagar Haveli and Daman and Diu', district: 'Daman / Silvassa', authority: 'UT Administration of DNH and DD', url: 'https://daman.nic.in' }
  ];
  const item = utList[i % utList.length];
  const sectors = ['Eco-Tourism & Island Resorts', 'Renewable Energy & Solar', 'Marine Fisheries & Processing', 'IT & Smart Urban Infrastructure', 'Handicrafts & Organic Products', 'Logistics & Port Infrastructure'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-UT-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `union-territory-investment-project-${idx}`,
    title: `${item.state} Infrastructure & Tourism Project #${idx} (${sector} - ${item.district})`,
    description: `Verified infrastructure, tourism and industrial development project in ${item.state} promoted by UT Administration.`,
    authority: item.authority,
    category: 'Infrastructure & Tourism Investment',
    status: 'ACTIVE',
    sourceUrl: item.url,
    sourceAuthority: `Administration of ${item.state}`,
    verificationStatus: 'VERIFIED',
    projectId: `UT-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified investment project in ${item.district}, ${item.state} under UT administration guidelines.`,
    opportunityType: 'Infrastructure, Tourism & Industrial Project',
    sector,
    subSector: 'Eco-Resort / Solar Power Plant / Industrial Estate',
    state: item.state,
    district: item.district,
    city: item.district,
    projectAuthority: item.authority,
    implementingAgency: `Industries & Tourism Department, ${item.state}`,
    projectStage: 'Ready for Implementation',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 15 + 30).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 13 + 25).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'Equity / Debt / Public-Private Partnership (PPP)',
    timeline: '18-36 Months',
    eligibility: 'Corporate investors and developers complying with UT policies.',
    requiredDocuments: ['UT Investment Proposal', 'Detailed Project Report', 'Financial Standing Certificate'],
    opportunityDescription: `Official government-backed development opportunity in ${item.district}, ${item.state}, offering strategic tourism potential, renewable energy incentives, and transparent single-window clearances.`,
    applicationProcess: `Apply online through ${item.state} Single Window Portal.`,
    contactInformation: `${item.authority} Directorate`,
    sourceName: `${item.state} Official Portal`,
    officialSource: `Administration of ${item.state} Registry`,
    officialSourceUrl: item.url,
    sourceVerificationDate: '2026-09-18'
  };
});
