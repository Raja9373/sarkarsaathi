import { BankInfo, BankProduct } from '../types';

export const MAJOR_BANKS: BankInfo[] = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    shortName: 'SBI',
    type: 'Public',
    logoText: 'SBI',
    officialWebsite: 'https://sbi.co.in',
    customerCare: '1800 1234 / 1800 2100',
    netBankingUrl: 'https://www.onlinesbi.sbi'
  },
  {
    id: 'pnb',
    name: 'Punjab National Bank',
    shortName: 'PNB',
    type: 'Public',
    logoText: 'PNB',
    officialWebsite: 'https://www.pnbindia.in',
    customerCare: '1800 180 2222',
    netBankingUrl: 'https://netpnb.com'
  },
  {
    id: 'bob',
    name: 'Bank of Baroda',
    shortName: 'BOB',
    type: 'Public',
    logoText: 'BOB',
    officialWebsite: 'https://www.bankofbaroda.in',
    customerCare: '1800 5700',
    netBankingUrl: 'https://www.bobibanking.com'
  },
  {
    id: 'canara',
    name: 'Canara Bank',
    shortName: 'Canara',
    type: 'Public',
    logoText: 'CAN',
    officialWebsite: 'https://canarabank.com',
    customerCare: '1800 1030',
    netBankingUrl: 'https://netbanking.canarabank.in'
  },
  {
    id: 'union',
    name: 'Union Bank of India',
    shortName: 'Union Bank',
    type: 'Public',
    logoText: 'UBI',
    officialWebsite: 'https://www.unionbankofindia.co.in',
    customerCare: '1800 22 2244',
    netBankingUrl: 'https://www.unionbankonline.co.in'
  },
  {
    id: 'indian-bank',
    name: 'Indian Bank',
    shortName: 'Indian Bank',
    type: 'Public',
    logoText: 'INDB',
    officialWebsite: 'https://www.indianbank.in',
    customerCare: '1800 425 00000',
    netBankingUrl: 'https://www.indianbank.net.in'
  },
  {
    id: 'boi',
    name: 'Bank of India',
    shortName: 'BOI',
    type: 'Public',
    logoText: 'BOI',
    officialWebsite: 'https://bankofindia.co.in',
    customerCare: '1800 103 1906',
    netBankingUrl: 'https://www.bankofindia.co.in'
  },
  {
    id: 'psb',
    name: 'Punjab & Sind Bank',
    shortName: 'PSB',
    type: 'Public',
    logoText: 'PSB',
    officialWebsite: 'https://punjabandsindbank.co.in',
    customerCare: '1800 419 8300',
    netBankingUrl: 'https://psbonline.in'
  },
  {
    id: 'central-bank',
    name: 'Central Bank of India',
    shortName: 'Central Bank',
    type: 'Public',
    logoText: 'CBI',
    officialWebsite: 'https://www.centralbankofindia.co.in',
    customerCare: '1800 22 1911',
    netBankingUrl: 'https://www.centralbanknet.co.in'
  },
  {
    id: 'iob',
    name: 'Indian Overseas Bank',
    shortName: 'IOB',
    type: 'Public',
    logoText: 'IOB',
    officialWebsite: 'https://www.iob.in',
    customerCare: '1800 425 4445',
    netBankingUrl: 'https://www.iobnet.co.in'
  },
  {
    id: 'uco',
    name: 'UCO Bank',
    shortName: 'UCO Bank',
    type: 'Public',
    logoText: 'UCO',
    officialWebsite: 'https://www.ucobank.com',
    customerCare: '1800 103 0123',
    netBankingUrl: 'https://www.e-ucobank.com'
  },
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    shortName: 'HDFC',
    type: 'Private',
    logoText: 'HDFC',
    officialWebsite: 'https://www.hdfcbank.com',
    customerCare: '1800 202 6161',
    netBankingUrl: 'https://netbanking.hdfcbank.com'
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    shortName: 'ICICI',
    type: 'Private',
    logoText: 'ICICI',
    officialWebsite: 'https://www.icicibank.com',
    customerCare: '1800 1080',
    netBankingUrl: 'https://infinity.icicibank.com'
  },
  {
    id: 'axis',
    name: 'Axis Bank',
    shortName: 'Axis Bank',
    type: 'Private',
    logoText: 'AXIS',
    officialWebsite: 'https://www.axisbank.com',
    customerCare: '1860 419 5555',
    netBankingUrl: 'https://omni.axisbank.co.in'
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    shortName: 'Kotak',
    type: 'Private',
    logoText: 'KOTAK',
    officialWebsite: 'https://www.kotak.com',
    customerCare: '1860 266 2666',
    netBankingUrl: 'https://www.kotak.com'
  },
  {
    id: 'idfc',
    name: 'IDFC FIRST Bank',
    shortName: 'IDFC FIRST',
    type: 'Private',
    logoText: 'IDFC',
    officialWebsite: 'https://www.idfcfirstbank.com',
    customerCare: '1800 10 888',
    netBankingUrl: 'https://my.idfcfirstbank.com'
  },
  {
    id: 'yes-bank',
    name: 'Yes Bank',
    shortName: 'Yes Bank',
    type: 'Private',
    logoText: 'YES',
    officialWebsite: 'https://www.yesbank.in',
    customerCare: '1800 1200',
    netBankingUrl: 'https://mnet.yesbank.in'
  },
  {
    id: 'federal',
    name: 'Federal Bank',
    shortName: 'Federal',
    type: 'Private',
    logoText: 'FED',
    officialWebsite: 'https://www.federalbank.co.in',
    customerCare: '1800 425 1199',
    netBankingUrl: 'https://www.fednetbank.com'
  },
  {
    id: 'bandhan',
    name: 'Bandhan Bank',
    shortName: 'Bandhan',
    type: 'Private',
    logoText: 'BAN',
    officialWebsite: 'https://bandhanbank.com',
    customerCare: '1800 258 8181',
    netBankingUrl: 'https://netbanking.bandhanbank.com'
  },
  {
    id: 'au-bank',
    name: 'AU Small Finance Bank',
    shortName: 'AU Bank',
    type: 'Small Finance',
    logoText: 'AU',
    officialWebsite: 'https://www.aubank.in',
    customerCare: '1800 1200 1200',
    netBankingUrl: 'https://netbanking.aubank.in'
  }
];

export const BANKING_PRODUCTS: BankProduct[] = [
  {
    id: 'saving-account',
    category: 'saving',
    title: 'Savings Bank Account (बचत खाता)',
    hindiTitle: 'बचत बैंक खाता',
    eligibility: [
      'Individual Resident Indians age 18+',
      'Minors above 10 years (First Step / Self operated minor accounts)',
      'Joint account holding allowed'
    ],
    documentsRequired: [
      'Aadhaar Card (for video KYC or physical verification)',
      'PAN Card / Form 60',
      'Passport size photograph',
      'Proof of Address (if different from Aadhaar address)'
    ],
    minBalance: 'Public Banks: ₹0 to ₹1,000 (Metro/Delhi) | Private Banks: ₹2,500 to ₹10,000 (MAB)',
    charges: 'Debit Card Annual Fee: ₹150 - ₹500 | ATM Transactions: 5 Free Metro monthly | SMS Charges: ₹15/quarter',
    processingTime: 'Instant (Video KYC) | 1 to 2 Days (Branch Visit)',
    benefits: [
      'Earn 2.70% to 7.00% annual interest credited quarterly',
      'Free UPI transfers & IMPS/NEFT facility',
      'RuPay / Visa / Mastercard Debit card with accident insurance cover',
      'Free passbook and net banking access'
    ],
    features: [
      'Digital Video KYC account opening from home using smartphone',
      'Auto-sweep FD facility (Sweep-in) available to earn higher interest',
      'Nomination facility mandatory for security'
    ],
    officialWebsite: 'https://sbi.co.in/web/personal-banking/accounts/saving-account',
    officialApplyLink: 'https://sbi.co.in/web/personal-banking/accounts/saving-account',
    faqs: [
      { question: 'What is Average Monthly Balance (MAB)?', answer: 'MAB is the average of daily closing balances in a calendar month. Public sector banks like SBI have waived MAB penalty for regular savings accounts.' },
      { question: 'Is Video KYC safe for opening savings account online?', answer: 'Yes, RBI approved Video KYC uses live photograph, Aadhaar OTP verification, and PAN card verification in a encrypted video call.' }
    ]
  },
  {
    id: 'current-account',
    category: 'current',
    title: 'Current Account for Business (चालू खाता)',
    hindiTitle: 'बिजनेस चालू खाता',
    eligibility: [
      'Sole Proprietorship, Partnership Firm, LLP, Private Limited Company, Trust, Society',
      'Individual business owners with valid Udyam MSME or GST registration'
    ],
    documentsRequired: [
      'PAN of Entity / Owner',
      'GST Registration Certificate / Udyam MSME Certificate / MCD Trade Licence',
      'Entity Address Proof (Rent agreement + Utility Bill)',
      'Partnership Deed / Certificate of Incorporation / MOA & AOA'
    ],
    minBalance: '₹5,000 to ₹25,000 MAB depending on bank scale',
    charges: 'Cash Deposit Limit: Free up to 10x MAB | Cheque Book: Free 50 to 100 leaves/month',
    processingTime: '2 to 5 Working Days',
    benefits: [
      'Unlimited deposit and withdrawal transaction volume',
      'Bulk RTGS/NEFT/IMPS payment engine for vendor and salary payout',
      'Corporate Credit Card and POS / Payment Gateway merchant onboarding'
    ],
    features: [
      'Overdraft (OD) facility linked to business turnover',
      'Dedicated relationship manager for business advisory'
    ],
    officialWebsite: 'https://www.pnbindia.in/current-account.html',
    officialApplyLink: 'https://www.pnbindia.in/current-account.html',
    faqs: [
      { question: 'Does a Current Account pay interest?', answer: 'As per RBI guidelines, commercial banks do not pay interest on funds held in standard Current Accounts.' }
    ]
  },
  {
    id: 'zero-balance-account',
    category: 'zero-balance',
    title: 'Zero Balance Savings Account / BSBD Account',
    hindiTitle: 'जीरो बैलेंस बचत खाता (BSBDA)',
    eligibility: [
      'Any Indian citizen (No minimum income requirement)',
      'BSBDA (Basic Savings Bank Deposit) guidelines mandated by RBI'
    ],
    documentsRequired: [
      'Aadhaar Card',
      'PAN Card / Form 60'
    ],
    minBalance: '₹0 (Zero Minimum Balance requirement forever - No Non-Maintenance penalty)',
    charges: 'Zero MAB charges | Free RuPay debit card | 4 free ATM monthly withdrawals',
    processingTime: 'Instant via Mobile App / Video KYC',
    benefits: [
      'No penalty for zero balance in account',
      'Free RuPay debit card with complimentary insurance',
      'Full eligibility for government DBT direct subsidy transfers'
    ],
    features: [
      'Can be upgraded to regular savings account anytime',
      'Full UPI access via PhonePe, Google Pay, BHIM'
    ],
    officialWebsite: 'https://www.bankofbaroda.in/personal-banking/accounts/saving-accounts/baroda-advantage-savings-account',
    officialApplyLink: 'https://www.bankofbaroda.in',
    faqs: [
      { question: 'Can I have both regular savings account and BSBD zero balance account in same bank?', answer: 'No, as per RBI rules, an individual cannot hold another savings account in the same bank if holding a BSBD account.' }
    ]
  },
  {
    id: 'ppf-scheme',
    category: 'ppf-nps',
    title: 'Public Provident Fund (PPF - पीपीएफ खाता)',
    hindiTitle: 'पब्लिक प्रॉविडेंट फंड (पीपीएफ)',
    eligibility: [
      'Resident Individual Indian Citizens (Single or on behalf of Minor)',
      'HUFs and NRIs cannot open new PPF accounts'
    ],
    documentsRequired: [
      'PAN Card',
      'Aadhaar Card',
      'PPF Account Opening Form Form-1',
      'Passport photograph'
    ],
    minBalance: 'Minimum ₹500 per financial year | Maximum ₹1.5 Lakh per financial year',
    charges: 'Nil account opening fee | Discontinuation penalty: ₹50/year if minimum ₹500 not deposited',
    processingTime: 'Same day online activation',
    benefits: [
      'EEE Status: Exempt-Exempt-Exempt tax status (Tax deduction under 80C, Tax-free interest, Tax-free maturity)',
      'Current Interest Rate: 7.1% per annum compounded annually (Govt guaranteed)',
      '15-year lock-in with extension blocks of 5 years',
      'Loan against PPF available from 3rd to 6th financial year'
    ],
    features: [
      'Guaranteed by Government of India',
      'Immune from court attachments or debt liabilities'
    ],
    officialWebsite: 'https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ppf',
    officialApplyLink: 'https://sbi.co.in',
    faqs: [
      { question: 'When is interest calculated in PPF?', answer: 'PPF interest is calculated on the lowest balance between the 5th and last day of every month, so deposit before the 5th of the month to maximize interest.' }
    ]
  },
  {
    id: 'sukanya-samriddhi',
    category: 'sukanya',
    title: 'Sukanya Samriddhi Yojana (SSY - सुकन्या समृद्धि खाता)',
    hindiTitle: 'सुकन्या समृद्धि योजना (बेटी के लिए)',
    eligibility: [
      'Girl child below 10 years of age',
      'Maximum 2 girl children per family (3 in case of twin girls first birth)'
    ],
    documentsRequired: [
      'Birth Certificate of Girl Child',
      'Aadhaar & PAN of Parent/Legal Guardian',
      'Address Proof of Guardian'
    ],
    minBalance: 'Minimum ₹250 per financial year | Maximum ₹1.5 Lakh per financial year',
    charges: 'Nil charges | Penalty for defaulted year: ₹50',
    processingTime: '1 to 2 Days at Bank Branch or Post Office',
    benefits: [
      'Highest Government Scheme Interest Rate: 8.2% per annum',
      'Tax Deduction under Section 80C up to ₹1.5 Lakh',
      'Maturity payout after 21 years or on marriage after age 18',
      '50% partial withdrawal allowed for higher education after age 18 / 10th pass'
    ],
    features: [
      'Account transferred anywhere across India post office/banks',
      'Deposits required only for initial 15 years; balance earns interest for full 21 years'
    ],
    officialWebsite: 'https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Savings-Schemes.aspx',
    officialApplyLink: 'https://www.indiapost.gov.in',
    faqs: [
      { question: 'Who operates the Sukanya Samriddhi account?', answer: 'Parent or legal guardian operates the account until the girl child reaches 18 years of age.' }
    ]
  }
];
