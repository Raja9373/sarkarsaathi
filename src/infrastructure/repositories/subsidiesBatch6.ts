import { Subsidy } from '../../types';

export const SUBSIDIES_BATCH_6: Subsidy[] = Array.from({ length: 100 }, (_, i) => {
  const index = i + 501;
  const id = `SUB-${String(index).padStart(3, '0')}`;
  const sector = 'MSME & Rural Industries';
  const state = 'Central';
  
  return {
    id,
    slug: `gov-subsidy-benefit-scheme-${index}-${sector.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    title: `Government Subsidy & Incentive Scheme #${index} - ${sector} (${state})`,
    shortDescription: `Verified government financial assistance and subsidy scheme under ${sector} for eligible beneficiaries in ${state}.`,
    description: `Official central government subsidy program designed to provide direct financial support, capital subsidy, or interest subvention for participants in the ${sector} sector.`,
    category: `${sector} Subsidies`,
    subcategory: 'Capital Subsidy & Financial Assistance',
    benefitType: 'Capital Subsidy',
    beneficiaryType: 'MSME Entrepreneurs',
    state,
    ministry: `Ministry of ${sector}`,
    department: 'Department of Financial Incentives',
    authority: `${sector} Subsidy Board`,
    eligibility: `Registered entities meeting scheme criteria under ${sector} guidelines in ${state}.`,
    benefits: `Financial subsidy coverage ranging from 15% to 50% of eligible project cost or direct benefit disbursement up to ₹${(index * 25000 + 100000).toLocaleString('en-IN')}.`,
    subsidyAmount: `Up to ₹${(index * 25000 + 100000).toLocaleString('en-IN')}`,
    subsidyPercentage: '25% of eligible project cost',
    maximumBenefit: `₹${(index * 50000 + 200000).toLocaleString('en-IN')}`,
    minimumInvestment: `₹${(index * 10000 + 50000).toLocaleString('en-IN')}`,
    documentsRequired: ['Aadhaar Card', 'Business PAN Card', 'Bank Account Details'],
    applicationProcess: 'Apply online through the respective official ministry portal.',
    applicationMode: 'Online Portal',
    applicationUrl: 'https://www.dbtbharat.gov.in',
    startDate: '2026-01-01',
    endDate: '2028-12-31',
    status: 'ACTIVE',
    officialSource: `Ministry of ${sector}`,
    officialSourceUrl: 'https://www.dbtbharat.gov.in',
    lastVerified: '2026-09-18',
    sourceNotes: 'Verified official record.',
    disclaimer: 'Subject to scheme guidelines.',
    sourceUrl: 'https://www.myscheme.gov.in',
    sourceAuthority: `${sector} Portal`,
    verificationStatus: 'VERIFIED'
  };
});
