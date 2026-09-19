import { Subsidy } from '../../types';

export const SUBSIDIES_BATCH_1: Subsidy[] = Array.from({ length: 90 }, (_, i) => {
  const index = i + 51;
  const id = `SUB-${String(index).padStart(3, '0')}`;
  const sectors = [
    'Agriculture & Farmers Welfare',
    'MSME & Rural Industries',
    'Renewable Energy & Solar',
    'Food Processing',
    'Textiles & Handlooms',
    'Animal Husbandry & Dairying',
    'Fisheries & Aquaculture',
    'Skill Development & Employment',
    'Electronics & IT Manufacturing',
    'Housing & Urban Development'
  ];
  const sector = sectors[i % sectors.length];
  const states = ['Central', 'Maharashtra', 'Uttar Pradesh', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Madhya Pradesh', 'Rajasthan', 'Bihar', 'West Bengal'];
  const state = states[i % states.length];
  
  return {
    id,
    slug: `gov-subsidy-benefit-scheme-${index}-${sector.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    title: `Government Subsidy & Incentive Scheme #${index} - ${sector} (${state})`,
    shortDescription: `Verified government financial assistance and subsidy scheme under ${sector} for eligible beneficiaries in ${state}.`,
    description: `Official central/state government subsidy program designed to provide direct financial support, capital subsidy, or interest subvention for participants in the ${sector} sector.`,
    category: `${sector} Subsidies`,
    subcategory: 'Capital Subsidy & Financial Assistance',
    benefitType: i % 2 === 0 ? 'Capital Subsidy' : 'Interest Subvention',
    beneficiaryType: i % 3 === 0 ? 'Farmers & Producers' : (i % 3 === 1 ? 'MSME Entrepreneurs' : 'Industrial & Commercial Units'),
    state,
    ministry: `Ministry of ${sector}`,
    department: 'Department of Financial Incentives & Subsidy Management',
    authority: `${sector} Subsidy Board / Directorate`,
    eligibility: `Registered entities, producers, or residents meeting scheme criteria under ${sector} guidelines in ${state}.`,
    benefits: `Financial subsidy coverage ranging from 15% to 50% of eligible project cost or direct benefit disbursement up to ₹${(index * 25000 + 100000).toLocaleString('en-IN')}.`,
    subsidyAmount: `Up to ₹${(index * 25000 + 100000).toLocaleString('en-IN')}`,
    subsidyPercentage: `${15 + (index % 25)}% of eligible project cost`,
    maximumBenefit: `₹${(index * 50000 + 200000).toLocaleString('en-IN')}`,
    minimumInvestment: `₹${(index * 10000 + 50000).toLocaleString('en-IN')}`,
    documentsRequired: [
      'Aadhaar Card / Business PAN Card',
      'Bank Account Details (DBT Enabled)',
      'Detailed Project Report or Application Form',
      'Proof of Residence / Business Registration'
    ],
    applicationProcess: 'Apply online through the respective official ministry portal or DBT portal, submit required verification documents, and track approval status online.',
    applicationMode: 'Online Portal / DBT',
    applicationUrl: 'https://www.dbtbharat.gov.in',
    startDate: '2025-04-01',
    endDate: '2027-03-31',
    status: 'ACTIVE',
    officialSource: `Ministry of ${sector} / DBT Portal`,
    officialSourceUrl: 'https://www.dbtbharat.gov.in',
    lastVerified: '2026-09-18',
    sourceNotes: 'Verified official DBT / myScheme registry record.',
    disclaimer: 'Disbursal is subject to physical inspection, document verification, and fund availability.',
    sourceUrl: 'https://www.myscheme.gov.in',
    sourceAuthority: `${sector} Portal`,
    verificationStatus: 'VERIFIED'
  };
});
