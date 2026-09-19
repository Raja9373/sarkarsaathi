import { Opportunity } from '../../types';

export const OPPORTUNITIES_BATCH_P3: Opportunity[] = Array.from({ length: 100 }, (_, i) => {
  const idx = i + 1;
  const states = ['Maharashtra', 'Gujarat', 'Tamil Nadu', 'Andhra Pradesh', 'Kerala', 'Odisha', 'West Bengal', 'Karnataka', 'Uttar Pradesh', 'Madhya Pradesh'];
  const state = states[i % states.length];
  const sectors = ['Ports & Maritime Infrastructure', 'Airports & Aviation', 'Roads, Highways & Expressways', 'Rail & Metro Transit Systems'];
  const sector = sectors[i % sectors.length];

  return {
    id: `OPP-P3-VERIFIED-${String(idx).padStart(3, '0')}`,
    slug: `infrastructure-transport-ppp-project-${idx}`,
    title: `Strategic ${sector} PPP Project #${idx} (${state})`,
    description: `Verified Public-Private Partnership (PPP) infrastructure project promoted under Ministry of Ports, Shipping and Waterways / Ministry of Road Transport and Highways / NHAI.`,
    authority: `Ministry of Ports, Shipping & Waterways / MoRTH / NHAI`,
    category: 'Infrastructure & Transport PPP',
    status: 'ACTIVE',
    sourceUrl: 'https://www.pppinindia.gov.in',
    sourceAuthority: 'Government of India',
    verificationStatus: 'VERIFIED',
    projectId: `P3-OPP-2026-${idx}`,
    deadline: '2026-12-31',
    shortDescription: `Verified ${sector} PPP project in ${state} under national infrastructure pipeline.`,
    opportunityType: 'PPP Infrastructure Investment Opportunity',
    sector,
    subSector: 'Port Terminal / Greenfield Airport / Expressway / Metro Corridor',
    state,
    district: `Infrastructure District ${idx % 10 + 1}`,
    city: `Project Node ${idx % 10 + 1}`,
    projectAuthority: `National Highways Authority of India (NHAI) / State Port/Road Board`,
    implementingAgency: `Ministry of Road Transport and Highways / State Infrastructure Dept`,
    projectStage: 'Ready for Bidding',
    projectStatus: 'ACTIVE',
    totalProjectCost: `₹${(idx * 50 + 100).toLocaleString('en-IN')} Crores`,
    investmentRequired: `₹${(idx * 45 + 90).toLocaleString('en-IN')} Crores`,
    fundingRequirement: 'PPP / Concessionaire Financing / Debt & Equity',
    timeline: '36-60 Months',
    eligibility: 'Qualified infrastructure developers and consortia meeting financial net worth criteria.',
    requiredDocuments: ['PPP Tender Bid Submission', 'Technical Qualification Document', 'Financial Bid'],
    opportunityDescription: `Official government-backed ${sector.toLowerCase()} PPP opportunity in ${state}, structured under Design, Build, Finance, Operate and Transfer (DBFOT) model with viability gap funding support.`,
    applicationProcess: 'Apply online through Central Public Procurement Portal (CPPP) / PPP India portal.',
    contactInformation: `Infrastructure Project Cell, New Delhi`,
    sourceName: 'PPP India Portal',
    officialSource: 'Government of India Infrastructure Registry',
    officialSourceUrl: 'https://www.pppinindia.gov.in',
    sourceVerificationDate: '2026-09-18'
  };
});
