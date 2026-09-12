import { Investment } from '../../types/investment';
import { IInvestmentRepository } from './InvestmentRepository';

const MOCK_INVESTMENTS: Investment[] = [
  {
    id: 'ppf',
    slug: 'public-provident-fund',
    name: 'Public Provident Fund (PPF)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '7.1%',
    tenure: '15 Years',
    lockIn: '15 Years',
    minimumInvestment: '₹500',
    maximumInvestment: '₹1.5 Lakh',
    eligibility: 'Resident Indians',
    taxation: 'EEE',
    taxBenefits: '80C',
    withdrawalRules: 'After 7 years',
    maturityRules: '15 Years',
    riskInformation: 'Low',
    officialSource: 'India Post / Ministry of Finance',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'nps',
    slug: 'national-pension-system',
    name: 'National Pension System (NPS)',
    category: 'Pension',
    authority: 'PFRDA',
    status: 'ACTIVE',
    interestRate: 'Market Linked',
    tenure: 'Until 60/70 Years',
    lockIn: 'Until 60 Years',
    minimumInvestment: '₹500',
    maximumInvestment: 'No Limit',
    eligibility: '18-70 Years',
    taxation: 'EET',
    taxBenefits: '80CCD(1B)',
    withdrawalRules: 'Partial at 60',
    maturityRules: '60 Years',
    riskInformation: 'Moderate to High',
    officialSource: 'PFRDA',
    officialInformationUrl: 'https://www.npscra.nsdl.co.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Market-linked pension growth',
      'Tax deduction under 80CCD(1B)',
      'Low fund management costs',
      'Portability across employment'
    ],
    availabilityNote: 'Continuously available',
    statusNote: 'Active and operational for fresh subscribers',
    faqItems: [
      { question: 'Is NPS return guaranteed?', answer: 'No, NPS returns are market-linked.' }
    ],
    seoTitle: 'National Pension System (NPS) 2026: Eligibility & Benefits',
    seoDescription: 'Understand NPS eligibility, tax benefits under 80CCD(1B), and market-linked retirement planning.',
    primaryKeywords: ['NPS', 'pension', 'retirement planning'],
    secondaryKeywords: ['NPS interest', 'NPS tax benefits', 'PFRDA']
  },
  {
    id: 'nsc',
    slug: 'national-savings-certificate',
    name: 'National Savings Certificate (NSC)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '7.7%',
    tenure: '5 Years',
    lockIn: '5 Years',
    minimumInvestment: '₹1000',
    maximumInvestment: 'No Limit',
    eligibility: 'Resident Indians',
    taxation: 'Taxable',
    taxBenefits: '80C',
    officialSource: 'India Post',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'kvp',
    slug: 'kisan-vikas-patra',
    name: 'Kisan Vikas Patra (KVP)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '7.5%',
    tenure: '115 Months',
    lockIn: '2.5 Years',
    minimumInvestment: '₹1000',
    maximumInvestment: 'No Limit',
    eligibility: 'Resident Indians',
    taxation: 'Taxable',
    officialSource: 'India Post',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'scss',
    slug: 'senior-citizen-savings-scheme',
    name: 'Senior Citizen Savings Scheme (SCSS)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '8.2% (Jul-Sep 2026)',
    tenure: '5 Years',
    lockIn: '5 Years',
    minimumInvestment: '₹1000',
    maximumInvestment: '₹30 Lakh',
    eligibility: '60+ Years',
    taxation: 'Taxable',
    taxBenefits: '80C',
    officialSource: 'India Post / Ministry of Finance',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Government-backed safety',
      'Quarterly interest payment',
      'Tax deduction under 80C'
    ],
    availabilityNote: 'Continuously available at post offices and banks',
    statusNote: 'Active, rates revised quarterly',
    faqItems: [
      { question: 'Is interest taxable?', answer: 'Yes, interest is fully taxable.' }
    ],
    seoTitle: 'Senior Citizen Savings Scheme (SCSS) 2026: Interest Rate',
    seoDescription: 'Details on SCSS eligibility, current 8.2% interest rate, and 5-year tenure.',
    primaryKeywords: ['SCSS', 'senior citizen scheme', 'savings'],
    secondaryKeywords: ['SCSS interest rate', 'SCSS tax benefit']
  },
  {
    id: 'ssa',
    slug: 'sukanya-samriddhi-account',
    name: 'Sukanya Samriddhi Account (SSA)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '8.2%',
    tenure: '21 Years',
    lockIn: 'Until girl attains 18/21 years',
    minimumInvestment: '₹250',
    maximumInvestment: '₹1.5 Lakh',
    eligibility: 'Girl child <10 yrs',
    taxation: 'EEE',
    taxBenefits: '80C',
    officialSource: 'India Post',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'po-rd',
    slug: 'post-office-recurring-deposit',
    name: 'Post Office Recurring Deposit (PORD)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '6.7% (Jul-Sep 2026)',
    tenure: '5 Years',
    minimumInvestment: '₹100',
    eligibility: 'Resident Indians',
    taxation: 'Taxable',
    officialSource: 'India Post / Ministry of Finance',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Government-backed security',
      'Small monthly contributions',
      'Flexible deposit amounts'
    ],
    availabilityNote: 'Continuously available at post offices',
    statusNote: 'Active, rates revised quarterly',
    faqItems: [
      { question: 'Is interest taxable?', answer: 'Yes, interest earned is taxable as per individual income slab.' }
    ],
    seoTitle: 'Post Office Recurring Deposit (PORD) 2026: Rates',
    seoDescription: 'Check Post Office RD interest rates, eligibility, and maturity rules for 2026.',
    primaryKeywords: ['Post Office RD', 'PORD', 'recurring deposit'],
    secondaryKeywords: ['RD interest rate', 'Post Office savings']
  },
  {
    id: 'po-mis',
    slug: 'post-office-mis',
    name: 'Monthly Income Scheme (MIS)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '7.4% (Jul-Sep 2026)',
    tenure: '5 Years',
    minimumInvestment: '₹1000',
    maximumInvestment: '₹9 Lakh (Single) / ₹15 Lakh (Joint)',
    eligibility: 'Resident Indians',
    taxation: 'Taxable',
    officialSource: 'India Post / Ministry of Finance',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Fixed monthly income',
      'Government-backed safety',
      'Flexible joint account options'
    ],
    availabilityNote: 'Continuously available at post offices',
    statusNote: 'Active, rates revised quarterly',
    faqItems: [
      { question: 'Is interest taxable?', answer: 'Yes, interest earned is taxable as per income slab.' }
    ],
    seoTitle: 'Post Office Monthly Income Scheme (MIS) 2026',
    seoDescription: 'Get regular monthly income with the Post Office MIS. Check 7.4% interest rate and eligibility.',
    primaryKeywords: ['Post Office MIS', 'monthly income scheme', 'savings'],
    secondaryKeywords: ['MIS interest rate', 'MIS eligibility']
  },
  {
    id: 'po-sb',
    slug: 'post-office-savings-account',
    name: 'Post Office Savings Account',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'LEGACY',
    interestRate: '4.0%',
    eligibility: 'Resident Indians',
    taxation: 'Taxable (with 80TTA/TTB benefit)',
    officialSource: 'India Post',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'po-td',
    slug: 'national-savings-time-deposit',
    name: 'National Savings Time Deposit (PO-TD)',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: '6.9% to 7.5% (varies by tenure, Jul-Sep 2026)',
    tenure: '1, 2, 3, 5 Years',
    minimumInvestment: '₹1000',
    eligibility: 'Resident Indians',
    taxation: 'Taxable',
    taxBenefits: '80C (for 5yr TD only)',
    officialSource: 'India Post / Ministry of Finance',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Government-backed safety',
      'Flexible tenures',
      '80C benefit for 5-year deposit'
    ],
    availabilityNote: 'Continuously available at post offices',
    statusNote: 'Active, rates revised quarterly',
    faqItems: [
      { question: 'Is interest taxable?', answer: 'Yes, interest earned is taxable as per income slab.' }
    ],
    seoTitle: 'Post Office Time Deposit (POTD) 2026: Interest Rates',
    seoDescription: 'Check Post Office Time Deposit (POTD) interest rates for different tenures and tax benefits.',
    primaryKeywords: ['Post Office Time Deposit', 'POTD', 'fixed deposit'],
    secondaryKeywords: ['POTD interest rate', 'POTD tenure', '80C tax benefit']
  },
  {
    id: 'apy',
    slug: 'atal-pension-yojana',
    name: 'Atal Pension Yojana (APY)',
    category: 'Pension',
    authority: 'PFRDA',
    status: 'ACTIVE',
    interestRate: 'Pension slabs based on contribution',
    tenure: 'Until 60',
    eligibility: '18-40 Years',
    taxation: 'Taxable',
    officialSource: 'PFRDA',
    officialInformationUrl: 'https://www.npscra.nsdl.co.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Guaranteed minimum pension',
      'Spouse pension benefit',
      'Government co-contribution (eligible cases)'
    ],
    availabilityNote: 'Continuously available through banks',
    statusNote: 'Active for fresh subscribers',
    faqItems: [
      { question: 'Is the pension guaranteed?', answer: 'Yes, the scheme provides a defined minimum monthly pension.' }
    ],
    seoTitle: 'Atal Pension Yojana (APY) 2026: Pension Benefits',
    seoDescription: 'Understand APY pension slabs, eligibility (18-40 years), and contribution rules.',
    primaryKeywords: ['Atal Pension Yojana', 'APY', 'pension scheme'],
    secondaryKeywords: ['APY pension amount', 'APY age limit']
  },
  {
    id: 'pm-sym',
    slug: 'pm-sym',
    name: 'PM-SYM (Shram Yogi Maandhan)',
    category: 'Social Security',
    authority: 'Ministry of Labour',
    status: 'LEGACY',
    interestRate: 'Guaranteed pension',
    tenure: 'Until 60',
    eligibility: 'Unorganized workers',
    officialSource: 'Ministry of Labour',
    officialInformationUrl: 'https://labour.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'nps-vatsalya',
    slug: 'nps-vatsalya',
    name: 'NPS Vatsalya',
    category: 'Pension',
    authority: 'PFRDA',
    status: 'LEGACY',
    interestRate: 'Market Linked',
    eligibility: 'Minors',
    officialSource: 'PFRDA',
    officialInformationUrl: 'https://www.npscra.nsdl.co.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'sgb',
    slug: 'sovereign-gold-bonds',
    name: 'Sovereign Gold Bonds (SGB)',
    category: 'Gold',
    authority: 'RBI',
    status: 'DISCONTINUED',
    interestRate: '2.5% p.a.',
    tenure: '8 Years',
    lockIn: '5 Years',
    taxation: 'Taxable',
    officialSource: 'RBI',
    officialInformationUrl: 'https://www.rbi.org.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'frsb',
    slug: 'floating-rate-savings-bonds',
    name: 'Floating Rate Savings Bonds (FRSB)',
    category: 'Government Securities',
    authority: 'RBI',
    status: 'ACTIVE',
    interestRate: 'Floating (linked to NSC rate + 0.35%)',
    tenure: '7 Years',
    minimumInvestment: '₹1000',
    eligibility: 'Resident Indians',
    taxation: 'Taxable',
    officialSource: 'RBI',
    officialInformationUrl: 'https://www.rbi.org.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Floating interest rate',
      'Government-backed safety',
      'Interest payable half-yearly'
    ],
    availabilityNote: 'Available through authorized banks',
    statusNote: 'Active',
    faqItems: [
      { question: 'Is the interest rate fixed?', answer: 'No, it is a floating rate adjusted every six months.' }
    ],
    seoTitle: 'Floating Rate Savings Bonds (FRSB) 2026',
    seoDescription: 'Details on RBI Floating Rate Savings Bonds, interest rate formula, and 7-year tenure.',
    primaryKeywords: ['FRSB', 'Floating Rate Savings Bonds', 'RBI bonds'],
    secondaryKeywords: ['FRSB interest rate', 'FRSB maturity']
  },
  {
    id: 'gms',
    slug: 'gold-monetisation-scheme',
    name: 'Gold Monetisation Scheme (GMS)',
    category: 'Gold',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: 'Variable',
    officialSource: 'Ministry of Finance',
    officialInformationUrl: 'https://finmin.nic.in',
    lastVerified: '2026-09-11',
    verificationMetadata: {
      sourceId: 'min-finance-dea',
      sourceUrl: 'https://finmin.nic.in',
      authority: 'Ministry of Finance',
      verificationStatus: 'NEEDS_REVIEW',
      lastVerified: '2026-09-12'
    }
  },
  {
    id: 'ups',
    slug: 'unified-pension-scheme',
    name: 'Unified Pension Scheme (UPS)',
    category: 'Pension',
    authority: 'Ministry of Finance',
    status: 'ACTIVE',
    interestRate: 'Assured pension benefit',
    eligibility: 'Government Employees',
    officialSource: 'Ministry of Finance',
    officialInformationUrl: 'https://finmin.nic.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Assured pension amount',
      'Defined benefit structure',
      'Family pension provision'
    ],
    availabilityNote: 'Applicable to eligible government employees',
    statusNote: 'Active',
    faqItems: [
      { question: 'How is the pension calculated?', answer: 'Based on defined rules linked to service and salary.' }
    ],
    seoTitle: 'Unified Pension Scheme (UPS) 2026: Features',
    seoDescription: 'Overview of the Unified Pension Scheme, assured payout structure, and eligibility.',
    primaryKeywords: ['Unified Pension Scheme', 'UPS', 'govt pension'],
    secondaryKeywords: ['UPS pension benefits', 'UPS rules']
  },
  {
    id: 'epf',
    slug: 'epf',
    name: 'Employees Provident Fund (EPF)',
    category: 'EPFO',
    authority: 'EPFO',
    status: 'ACTIVE',
    interestRate: 'Declared Annually',
    taxBenefits: '80C',
    eligibility: 'Employees',
    officialSource: 'EPFO / Ministry of Labour',
    officialInformationUrl: 'https://www.epfindia.gov.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Long-term retirement savings',
      'Tax-efficient accumulation',
      'Government-backed returns'
    ],
    availabilityNote: 'Mandatory for eligible employees',
    statusNote: 'Active',
    faqItems: [
      { question: 'Is EPF interest taxable?', answer: 'Interest is tax-exempt subject to certain limits under Income Tax rules.' }
    ],
    seoTitle: 'Employees Provident Fund (EPF) 2026: Benefits',
    seoDescription: 'Understand EPF contribution rules, tax benefits, and retirement saving features for employees.',
    primaryKeywords: ['EPF', 'provident fund', 'retirement savings'],
    secondaryKeywords: ['EPF interest', 'EPF withdrawal', 'EPFO']
  },
  {
    id: 'eps',
    slug: 'eps',
    name: 'Employees Pension Scheme (EPS)',
    category: 'EPFO',
    authority: 'EPFO',
    status: 'ACTIVE',
    interestRate: 'Defined benefit based on service',
    eligibility: 'Employees (EPF members)',
    officialSource: 'EPFO / Ministry of Labour',
    officialInformationUrl: 'https://www.epfindia.gov.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Assured pension on retirement',
      'Family pension provision',
      'Service-linked benefits'
    ],
    availabilityNote: 'Applicable to EPF members',
    statusNote: 'Active',
    faqItems: [
      { question: 'What is EPS?', answer: 'A pension scheme for employees providing retirement income.' }
    ],
    seoTitle: 'Employees Pension Scheme (EPS) 2026: Features',
    seoDescription: 'Overview of the Employees Pension Scheme (EPS), pension benefits, and eligibility rules.',
    primaryKeywords: ['EPS', 'pension scheme', 'retirement income'],
    secondaryKeywords: ['EPS benefits', 'EPS eligibility']
  },
  {
    id: 'pm-kmy',
    slug: 'pm-kisan-maandhan',
    name: 'PM-Kisan Maandhan (PM-KMY)',
    category: 'Pension',
    authority: 'Ministry of Agriculture',
    status: 'ACTIVE',
    interestRate: 'Contribution-linked guaranteed pension',
    eligibility: 'Small/Marginal Farmers',
    officialSource: 'Ministry of Agriculture',
    officialInformationUrl: 'https://maandhan.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Assured monthly pension',
      'Old-age income support',
      'Spouse pension provision'
    ],
    availabilityNote: 'Continuously available for eligible farmers',
    statusNote: 'Active',
    faqItems: [
      { question: 'What is the pension amount?', answer: 'Provides a guaranteed monthly pension after age 60.' }
    ],
    seoTitle: 'PM-Kisan Maandhan (PM-KMY) 2026: Pension',
    seoDescription: 'Details on PM-Kisan Maandhan eligibility, contribution, and pension benefits for small farmers.',
    primaryKeywords: ['PM-Kisan Maandhan', 'PM-KMY', 'farmers pension'],
    secondaryKeywords: ['PM-KMY pension', 'farmers social security']
  },
  {
    id: 'rbi-retail',
    slug: 'rbi-retail-direct',
    name: 'RBI Retail Direct',
    category: 'Government Securities',
    authority: 'RBI',
    status: 'LEGACY',
    interestRate: 'Market Linked',
    eligibility: 'Resident Indians',
    officialSource: 'RBI',
    officialInformationUrl: 'https://rbiretaildirect.org.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'mahila-samman',
    slug: 'mahila-samman-savings-certificate',
    name: 'Mahila Samman Savings Certificate',
    category: 'Government Savings',
    authority: 'Ministry of Finance',
    status: 'DISCONTINUED',
    interestRate: '7.5%',
    tenure: '2 Years',
    eligibility: 'Women/Girls',
    taxation: 'Taxable',
    officialSource: 'India Post',
    officialInformationUrl: 'https://www.indiapost.gov.in',
    lastVerified: '2026-09-11'
  },
  {
    id: 'sdl',
    slug: 'state-development-loans',
    name: 'State Development Loans (SDL)',
    category: 'Government Securities',
    authority: 'RBI / State Governments',
    status: 'ACTIVE',
    interestRate: 'Market Linked (Auction based)',
    eligibility: 'Resident Indians',
    officialSource: 'RBI',
    officialInformationUrl: 'https://www.rbi.org.in',
    lastVerified: '2026-09-12',
    keyBenefits: [
      'Sovereign-backed safety',
      'Market-linked interest rates',
      'Tradable in secondary market'
    ],
    availabilityNote: 'Issuance/auction based',
    statusNote: 'Active',
    faqItems: [
      { question: 'Are SDLs safe?', answer: 'Yes, they are guaranteed by State Governments.' }
    ],
    seoTitle: 'State Development Loans (SDL) 2026: Features',
    seoDescription: 'Overview of State Development Loans (SDL), auction mechanism, and investment features.',
    primaryKeywords: ['SDL', 'State Development Loans', 'govt securities'],
    secondaryKeywords: ['SDL interest rate', 'SDL investment']
  },
  {
    id: '54ec-bonds',
    slug: '54ec-capital-gains-bonds',
    name: '54EC Capital Gains Bonds',
    category: 'Government Securities',
    authority: 'NHAI / REC',
    status: 'ACTIVE',
    interestRate: 'As declared by issuing entity',
    tenure: '5 Years',
    lockIn: '5 Years',
    minimumInvestment: '₹10,000',
    eligibility: 'Resident Indians',
    taxation: 'Interest Taxable',
    taxBenefits: 'Section 54EC',
    officialSource: 'NHAI / REC',
    officialInformationUrl: 'https://nhai.gov.in',
    lastVerified: '2026-09-12',
    sourceLastChecked: '2026-09-12',
    sourceVerificationStatus: 'VERIFIED',
    keyBenefits: [
      'Capital gains tax exemption',
      'Government-backed safety',
      '5-year lock-in'
    ],
    availabilityNote: 'Depends on issue/issuer status',
    statusNote: 'Active',
    faqItems: [
      { question: 'What is the lock-in?', answer: 'Bonds have a 5-year lock-in period.' }
    ],
    seoTitle: '54EC Capital Gains Bonds 2026: Tax Saving',
    seoDescription: 'Learn about 54EC Capital Gains Bonds for tax saving on long-term capital gains.',
    primaryKeywords: ['54EC bonds', 'capital gains tax', 'tax saving'],
    secondaryKeywords: ['54EC lock-in', 'REC bonds']
  },
  {
    id: 'sovereign-green-bonds',
    slug: 'sovereign-green-bonds',
    name: 'Sovereign Green Bonds',
    category: 'Government Securities',
    authority: 'RBI / Ministry of Finance',
    status: 'ACTIVE',
    interestRate: 'Market Linked (Auction based)',
    eligibility: 'Resident Indians',
    officialSource: 'RBI',
    officialInformationUrl: 'https://www.rbi.org.in',
    lastVerified: '2026-09-12',
    sourceLastChecked: '2026-09-12',
    sourceVerificationStatus: 'VERIFIED',
    keyBenefits: [
      'Environment-friendly project funding',
      'Sovereign-backed safety',
      'Market-linked yields'
    ],
    availabilityNote: 'Issuance/auction based',
    statusNote: 'Active',
    faqItems: [
      { question: 'What is a Green Bond?', answer: 'A security to fund environmentally sustainable projects.' }
    ],
    seoTitle: 'Sovereign Green Bonds 2026: Investment',
    seoDescription: 'Overview of Sovereign Green Bonds, issuance mechanism, and environmental impact.',
    primaryKeywords: ['green bonds', 'Sovereign Green Bonds', 'RBI bonds'],
    secondaryKeywords: ['green investment', 'sustainable finance']
  }
];


export class MockInvestmentRepository implements IInvestmentRepository {
  async getAll(): Promise<Investment[]> {
    return MOCK_INVESTMENTS;
  }
  async getBySlug(slug: string): Promise<Investment | null> {
    return MOCK_INVESTMENTS.find(i => i.slug === slug) || null;
  }
  async getByCategory(category: string): Promise<Investment[]> {
    return MOCK_INVESTMENTS.filter(i => i.category === category);
  }
}
