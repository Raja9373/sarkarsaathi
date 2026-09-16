import { Investment } from '../../types';

export const coreInvestmentsData: Investment[] = [
  {
    id: 'inv-ppf',
    title: 'Public Provident Fund (PPF)',
    slug: 'public-provident-fund',
    description: 'Long-term statutory small savings scheme backed by sovereign guarantee under the Government Savings Promotion Act, offering triple tax exemption (EEE).',
    authority: 'Ministry of Finance / National Savings Institute / Department of Posts',
    category: 'Small Savings',
    status: 'OPEN',
    sourceUrl: 'https://www.nsiindia.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 150000,
    expectedReturn: '7.1% p.a. (Compounded Annually, Notified Quarterly)',
    notifiedRate: '7.1% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '15 Financial Years',
    lockInPeriod: '15 Years (Partial withdrawals available from 7th financial year)',
    riskLevel: 'Low',
    returnMechanism: 'Interest is calculated monthly on the lowest balance between the close of the 5th day and the end of the month, compounded and credited annually on 31st March.',
    depositRules: 'Minimum ₹500, Maximum ₹1,50,000 per financial year. Deposits can be made in lump sum or in up to unlimited installments throughout the financial year.',
    maturityRules: 'Matures after 15 full financial years from the end of the financial year in which the account was opened.',
    extensionRules: 'Extendable in unlimited blocks of 5 years with or without fresh contributions upon submitting Form-4 within one year of maturity.',
    withdrawalRules: 'One partial withdrawal permitted per financial year from the 7th financial year onward (up to 50% of the balance at the end of the 4th preceding year or preceding year, whichever is lower).',
    prematureClosureRules: 'Permitted after 5 full financial years for life-threatening medical treatment of holder/dependents, higher education of holder/dependent children, or residency status change (subject to 1% interest deduction penalty).',
    loanFacilityRules: 'Available from the 3rd financial year up to the 6th financial year (up to 25% of balance at credit at the end of the 2nd preceding FY). Repayable in 36 months at 1% interest p.a. above PPF rate.',
    taxTreatment: 'Exempt-Exempt-Exempt (EEE): Annual contributions qualify for deduction up to ₹1.5 Lakh under Section 80C; accrued annual interest is tax-free; entire maturity amount is tax-exempt under Section 10(11).',
    nominationRules: 'Nomination facility available at opening or subsequently. Multiple nominees with defined percentage shares can be designated.',
    accountOpeningProcess: [
      'Visit any authorized Post Office or designated Commercial Bank branch (SBI, PNB, HDFC, ICICI, etc.) or log in to net banking.',
      'Fill and submit Form-1 (Application for opening PPF account) along with KYC documents.',
      'Deposit initial subscription amount (minimum ₹500) via cash, cheque, or electronic transfer.',
      'Obtain PPF passbook or digital account statement and set up auto-debit if desired.'
    ],
    whereToInvest: 'All Head and Sub Post Offices, State Bank of India, and authorized public/private sector commercial banks (physically or via internet/mobile banking portals).',
    requiredDocuments: [
      'Form-1 (PPF Account Opening Application)',
      'Identity Proof (Aadhaar Card, Passport, Voter ID, Driving License)',
      'Address Proof (Aadhaar Card, Utility Bills, Bank Statement)',
      'Permanent Account Number (PAN) Card or Form 60',
      'Passport-sized photographs'
    ],
    importantRules: [
      'Only one PPF account is permitted per individual across all post offices and banks in India (excluding accounts opened as legal guardian on behalf of minors).',
      'Joint accounts are not permissible under the Public Provident Fund Scheme, 2019.',
      'Non-Resident Indians (NRIs) cannot open new PPF accounts. Existing accounts opened before becoming NRI remain operative till maturity without extension.',
      'PPF balances cannot be attached by any court decree in respect of any debt or liability under the Government Savings Banks Act.'
    ],
    risksAndLimitations: [
      '15-year statutory lock-in with restricted conditional liquidity.',
      'Annual deposit ceiling strictly capped at ₹1,50,000 across all accounts held by an individual.',
      'Interest rate is variable and reviewed quarterly by the Ministry of Finance.'
    ],
    faqs: [
      {
        question: 'What is the minimum and maximum deposit limit in PPF per year?',
        answer: 'The minimum annual deposit is ₹500 and the maximum allowable deposit is ₹1,50,000 per financial year.'
      },
      {
        question: 'Why is PPF considered triple tax-exempt (EEE)?',
        answer: 'Under the Income Tax Act, 1961, your deposit is deductible under Section 80C, annual accrued interest is completely tax-free under Section 10(11), and final maturity proceeds are 100% tax-free.'
      },
      {
        question: 'How is PPF monthly interest calculated?',
        answer: 'Interest is calculated on the minimum balance maintained in the account between the close of the 5th day and the end of each calendar month.'
      },
      {
        question: 'Can I extend my PPF account after 15 years?',
        answer: 'Yes, after 15 years you can extend the account in continuous blocks of 5 years indefinitely, either with or without further contributions.'
      }
    ],
    comparisonSlugs: ['national-savings-certificate', 'sukanya-samriddhi-account'],
    calculatorType: 'ppf',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nsc',
    title: 'National Savings Certificate (NSC - VIII Issue)',
    slug: 'national-savings-certificate',
    description: 'Fixed-income postal investment certificate scheme under the National Savings Certificates (VIII Issue) Scheme, 2019, providing guaranteed sovereign returns with Section 80C tax benefits.',
    authority: 'Ministry of Finance / Department of Posts / National Savings Institute',
    category: 'Small Savings',
    status: 'OPEN',
    sourceUrl: 'https://www.nsiindia.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: '7.7% p.a. (Compounded Annually, Payable at Maturity)',
    notifiedRate: '7.7% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '5 Years Fixed',
    lockInPeriod: '5 Years',
    riskLevel: 'Low',
    returnMechanism: 'Interest is compounded annually and deemed reinvested for the first 4 years, paid as a single lump sum upon maturity.',
    depositRules: 'Minimum ₹1,000 in multiples of ₹100. Any number of certificates/accounts can be purchased.',
    maturityRules: 'Matures exactly on completion of 5 years from the date of deposit.',
    extensionRules: 'No statutory provision for extension of the matured certificate; proceeds must be withdrawn or reinvested into a fresh issue.',
    withdrawalRules: 'No partial withdrawals permitted prior to the 5-year maturity.',
    prematureClosureRules: 'Premature encashment is strictly restricted, allowed only on the death of the holder/joint holders, upon forfeiture by a pledgee (Gazetted officer/Bank), or on an order by a court of law.',
    loanFacilityRules: 'Certificates can be pledged as security/collateral against bank loans to the President of India, Governor of State, RBI, scheduled banks, or cooperative credit societies.',
    taxTreatment: 'Deposits qualify for deduction under Section 80C up to ₹1.5 Lakh. Accrued interest in the first 4 years is deemed reinvested and also qualifies for Section 80C deduction; 5th year interest is taxable as income.',
    nominationRules: 'Nomination facility available at the time of purchase or subsequently before maturity.',
    accountOpeningProcess: [
      'Visit any Department of Posts branch or log in to India Post Internet Banking.',
      'Submit Form-1 for purchase of National Savings Certificates along with KYC documentation.',
      'Deposit funds via cash, cheque, Demand Draft, or electronic fund transfer.',
      'Receive NSC passbook or electronic certificate confirmation.'
    ],
    whereToInvest: 'All Head Post Offices and Sub-Post Offices across India, as well as India Post Internet Banking portal.',
    requiredDocuments: [
      'Form-1 (Application for purchase of NSC)',
      'Identity Proof (Aadhaar Card, Passport, Voter ID, Driving License)',
      'Address Proof (Aadhaar, Utility Bills)',
      'PAN Card or Form 60',
      'Passport size photographs'
    ],
    importantRules: [
      'Available to Indian resident individuals (Single, Joint A, or Joint B accounts) and guardians on behalf of minors.',
      'Hindu Undivided Families (HUFs), Trusts, and NRIs are not eligible to purchase NSC.',
      'Certificates can be transferred from one person to another only once with official postal authority sanction.'
    ],
    risksAndLimitations: [
      'Complete 5-year lock-in with virtually no liquidity except in extreme statutory exceptions.',
      'Interest earned in the final 5th year is fully taxable without reinvestment deduction.'
    ],
    faqs: [
      {
        question: 'What is the maturity period and interest rate for NSC?',
        answer: 'NSC VIII Issue has a fixed tenure of 5 years with an annual compounding interest rate of 7.7% p.a., paid out at maturity.'
      },
      {
        question: 'How is NSC interest taxed under Section 80C?',
        answer: 'The interest accrued annually for the first 4 years is treated as reinvested and is eligible for deduction under Section 80C. Only the final year interest is fully taxable.'
      },
      {
        question: 'Can NSC certificates be used as loan collateral?',
        answer: 'Yes, NSC certificates can be pledged to commercial and cooperative banks as collateral security for loans.'
      }
    ],
    comparisonSlugs: ['public-provident-fund', 'kisan-vikas-patra'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-ssy',
    title: 'Sukanya Samriddhi Account (SSY)',
    slug: 'sukanya-samriddhi-account',
    description: 'Government of India small savings initiative under the Beti Bachao Beti Padhao campaign, offering high sovereign interest rates and EEE tax exemption for the education and marriage of the girl child.',
    authority: 'Ministry of Finance / Department of Posts / National Savings Institute',
    category: 'Small Savings',
    status: 'OPEN',
    sourceUrl: 'https://www.nsiindia.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 250,
    maxInvestment: 150000,
    expectedReturn: '8.2% p.a. (Compounded Annually, Notified Quarterly)',
    notifiedRate: '8.2% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '21 Years from Account Opening',
    lockInPeriod: 'Until the girl child reaches 21 years of age or marries after attaining 18 years',
    riskLevel: 'Low',
    returnMechanism: 'Interest is calculated on the lowest balance between the close of the 5th day and the end of the month, compounded and credited annually.',
    depositRules: 'Minimum ₹250, maximum ₹1,50,000 per financial year. Deposits must be made for a mandatory period of 15 years from the date of account opening.',
    maturityRules: 'Matures after 21 years from account opening or upon marriage of the girl child after attaining 18 years of age.',
    extensionRules: 'If account is not closed after 21 years, the balance continues to earn the applicable post office savings scheme interest until final withdrawal.',
    withdrawalRules: 'Partial withdrawal up to 50% of the balance at credit at the end of the preceding financial year is permitted after the girl child attains 18 years of age or clears 10th standard, exclusively for higher education.',
    prematureClosureRules: 'Permitted on the unfortunate death of the girl child, or after 5 years on compassionate grounds for life-threatening medical treatment of the account holder.',
    loanFacilityRules: 'No loan facility is available against Sukanya Samriddhi Accounts.',
    taxTreatment: 'Exempt-Exempt-Exempt (EEE): Contributions qualify for deduction under Section 80C up to ₹1.5 Lakh; interest is tax-exempt under Section 10(11A); maturity and partial withdrawals are 100% tax-free.',
    nominationRules: 'Nomination facility is available. The girl child operates the account independently upon attaining 18 years of age.',
    accountOpeningProcess: [
      'Visit any authorized Post Office or designated Commercial Bank branch.',
      'Submit Form-1 (SSY opening application) along with the birth certificate of the girl child.',
      'Submit parent/guardian KYC documents (Aadhaar, PAN) and address verification.',
      'Deposit initial subscription (minimum ₹250) via cash, cheque, or electronic transfer.',
      'Receive physical SSY passbook for record and future deposit tracking.'
    ],
    whereToInvest: 'All Post Offices across India and authorized branches of public and private sector commercial banks (SBI, PNB, BoB, Canara, Axis, HDFC, ICICI).',
    requiredDocuments: [
      'Birth Certificate of the girl child issued by competent municipal authority',
      'Identity Proof of parent/guardian (Aadhaar Card, PAN Card, Passport)',
      'Address Proof of parent/guardian',
      'Medical certificate/affidavit in case of twin/triplet girl children',
      'Passport size photographs of child and guardian'
    ],
    importantRules: [
      'Account can be opened from birth until the girl child reaches 10 years of age.',
      'Maximum of 2 accounts per family (one for each girl child). Exception granted for twins/triplets born in first/second order with medical certificate.',
      'Account becomes defaulted if minimum ₹250 is not deposited in a financial year (can be regularized with ₹50 penalty per defaulted year).'
    ],
    risksAndLimitations: [
      'Strict 21-year lock-in with partial liquidity restricted strictly to higher education after age 18.',
      'Mandatory annual deposit requirement for 15 continuous years.'
    ],
    faqs: [
      {
        question: 'Who can open an SSY account and what is the age limit?',
        answer: 'A natural or legal guardian can open an SSY account in the name of a girl child from her birth up to the age of 10 years.'
      },
      {
        question: 'What happens if I fail to deposit the minimum ₹250 in a year?',
        answer: 'The account becomes defaulted. It can be revived before maturity by paying a penalty of ₹50 along with the minimum deposit of ₹250 for each defaulted year.'
      },
      {
        question: 'Can money be withdrawn for higher education?',
        answer: 'Yes, up to 50% of the balance at the end of the preceding financial year can be withdrawn once the girl child turns 18 or clears 10th standard.'
      }
    ],
    comparisonSlugs: ['public-provident-fund', 'national-savings-certificate'],
    calculatorType: 'ssy',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-kvp',
    title: 'Kisan Vikas Patra (KVP)',
    slug: 'kisan-vikas-patra',
    description: 'Statutory small savings certificate scheme under the Kisan Vikas Patra Scheme, 2019, that doubles the invested capital over a government-notified tenure with complete sovereign backing.',
    authority: 'Ministry of Finance / Department of Posts / National Savings Institute',
    category: 'Small Savings',
    status: 'OPEN',
    sourceUrl: 'https://www.nsiindia.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: '7.5% p.a. (Compounded Annually, Doubles in 115 Months)',
    notifiedRate: '7.5% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '115 Months (9 Years and 7 Months to Double Principal)',
    lockInPeriod: '2 Years and 6 Months (30 Months)',
    riskLevel: 'Low',
    returnMechanism: 'Interest is compounded annually and paid along with the principal at maturity upon surrender of the certificate.',
    depositRules: 'Minimum ₹1,000 in multiples of ₹100. Any number of accounts/certificates can be purchased without an upper limit.',
    maturityRules: 'Invested amount doubles exactly at the completion of 115 months from the deposit date.',
    extensionRules: 'No statutory automatic extension; upon maturity proceeds must be withdrawn or reinvested into a fresh scheme.',
    withdrawalRules: 'No partial withdrawals permitted; encashment is allowed only after the statutory 30-month lock-in.',
    prematureClosureRules: 'Permitted anytime after 2 years and 6 months (30 months) in predetermined 6-month redemption slabs; or earlier in case of death of holder or court order.',
    loanFacilityRules: 'KVP certificates can be pledged as security/collateral against loans from scheduled banks and cooperative credit institutions.',
    taxTreatment: 'Fully taxable: Returns are taxable as "Income from Other Sources" at the applicable slab rates. Does not qualify for Section 80C tax deduction. No TDS is deducted at maturity by the post office.',
    nominationRules: 'Nomination facility is available at the time of opening or subsequently.',
    accountOpeningProcess: [
      'Visit any Post Office branch or access India Post Internet Banking portal.',
      'Submit Form-1 (Application for purchase of KVP) along with KYC documents.',
      'Deposit funds via cash, cheque, demand draft, or online account transfer.',
      'Receive KVP passbook or digital account confirmation.'
    ],
    whereToInvest: 'All Department of Posts branches and designated commercial banks throughout India.',
    requiredDocuments: [
      'Form-1 (KVP Application Form)',
      'Identity Proof (Aadhaar Card, Passport, Voter ID, Driving License)',
      'Address Proof (Aadhaar Card, Utility Bills)',
      'PAN Card (Mandatory for investments above ₹50,000)',
      'Passport size photographs'
    ],
    importantRules: [
      'Can be purchased by individual adults (Single, Joint A, Joint B) or guardians on behalf of minors.',
      'Non-Resident Indians (NRIs) and HUFs are not eligible to invest in KVP.',
      'Certificates are transferable from one individual to another with postmaster approval.'
    ],
    risksAndLimitations: [
      'No tax exemption on investment or returns (no Section 80C benefit).',
      'Mandatory minimum lock-in period of 2.5 years before any premature redemption is permitted.'
    ],
    faqs: [
      {
        question: 'In how many months does money double in Kisan Vikas Patra?',
        answer: 'At the current notified rate of 7.5% p.a., the invested amount doubles in 115 months (9 years and 7 months).'
      },
      {
        question: 'What is the lock-in period and premature closure rule in KVP?',
        answer: 'KVP has a mandatory lock-in of 2 years and 6 months (30 months). After 30 months, premature encashment is allowed in specified 6-month rate intervals.'
      },
      {
        question: 'Is KVP eligible for tax deduction under Section 80C?',
        answer: 'No, KVP does not provide tax deduction under Section 80C, and all interest income is taxable at your income tax slab rate.'
      }
    ],
    comparisonSlugs: ['national-savings-certificate', 'post-office-time-deposit'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nps',
    title: 'National Pension System (NPS - All Citizen Model)',
    slug: 'national-pension-system',
    description: 'Voluntary, market-linked defined-contribution retirement security framework regulated by PFRDA, offering asset allocation choices, dual account structure (Tier I & II), and dedicated tax incentives.',
    authority: 'Pension Fund Regulatory and Development Authority (PFRDA)',
    category: 'Pension & Retirement',
    status: 'OPEN',
    sourceUrl: 'https://www.pfrda.org.in',
    sourceAuthority: 'PFRDA, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Market Linked Asset Class Returns (Equity, Corporate Debt, G-Sec)',
    notifiedRate: 'Market-linked NAV Returns',
    rateEffectivePeriod: 'Daily NAV Valuation',
    tenure: 'Accumulation until Age 60 (or up to Age 75 upon deferment)',
    lockInPeriod: 'Until Retirement / Age 60',
    riskLevel: 'Medium',
    returnMechanism: 'Returns are generated via market-linked investments across Asset Class E (Equity up to 75%), Asset Class C (Corporate Debt), Asset Class G (Government Securities), and Asset Class A (Alternative Assets).',
    depositRules: 'Tier-I: Minimum ₹500 at opening, minimum ₹1,000 total per financial year. Tier-II: Minimum ₹1,000 at opening, minimum ₹250 per transaction. No upper ceiling on contributions.',
    maturityRules: 'At age 60: Minimum 40% of the accumulated corpus must be utilized to purchase a registered annuity plan; up to 60% can be withdrawn as a tax-free lump sum. If total corpus is ≤ ₹5 Lakh, 100% lump sum exit is permitted.',
    extensionRules: 'Subscribers can defer lump sum withdrawal and annuity purchase, or continue contributing up to the age of 75 years.',
    withdrawalRules: 'Partial withdrawal up to 25% of subscriber own contributions permitted after 3 years for higher education/marriage of children, residential house purchase/construction, or specified critical illnesses (maximum 3 times during tenure).',
    prematureClosureRules: 'Premature exit before age 60 is permitted after 5 years of subscription: minimum 80% of corpus must be annuitized; up to 20% can be withdrawn as lump sum. (If corpus ≤ ₹2.5 Lakh, 100% lump sum permitted).',
    loanFacilityRules: 'No loan facility is permitted against NPS Tier-I or Tier-II accounts.',
    taxTreatment: 'Contributions eligible under Sec 80CCD(1) up to ₹1.5L (within 80C ceiling) + exclusive additional deduction up to ₹50,000 under Sec 80CCD(1B). Employer contributions eligible under Sec 80CCD(2). 60% lump sum exit at retirement is 100% tax-exempt.',
    nominationRules: 'Up to 3 nominees can be appointed with specified percentage distribution shares in both Tier-I and Tier-II.',
    accountOpeningProcess: [
      'Visit eNPS portal (enps.nsdl.com / enps.kfintech.com) or any registered Point of Presence (PoP) bank.',
      'Authenticate using Aadhaar XML / Digilocker or PAN-based KYC verification.',
      'Select Central Recordkeeping Agency (CRA), Pension Fund Manager (PFM), and choice of investment (Auto or Active choice).',
      'Make initial contribution (minimum ₹500) via net banking / UPI / debit card.',
      'Permanent Retirement Account Number (PRAN) is generated and dispatched digitally/physically.'
    ],
    whereToInvest: 'Online via eNPS portals (Protean CRA / KFintech CRA / CAMS CRA) and physically through authorized Points of Presence (all major scheduled commercial banks and post offices).',
    requiredDocuments: [
      'Aadhaar Card or PAN Card for digital/physical KYC',
      'Cancelled cheque or bank statement showing IFSC and account number',
      'Scanned copy of signature and photograph',
      'Proof of identity and address if using offline PoP channel'
    ],
    importantRules: [
      'Open to any Indian citizen (resident, NRI, or OCI) aged between 18 and 70 years.',
      'Active Choice permits customized allocation up to 75% in Equity (E). Auto Choice automatically rebalances asset allocation based on age lifecycle funds.',
      'Tier-II is a voluntary liquid savings facility available only to active Tier-I account holders with no lock-in.'
    ],
    risksAndLimitations: [
      'Market-linked returns with no guaranteed sovereign floor return.',
      'Mandatory minimum 40% annuitization at retirement; monthly annuity payments are taxable at prevailing income slab rates.'
    ],
    faqs: [
      {
        question: 'What is the special tax benefit available under Section 80CCD(1B)?',
        answer: 'Subscribers get an exclusive additional tax deduction of up to ₹50,000 under Section 80CCD(1B) over and above the ₹1.5 Lakh limit under Section 80C.'
      },
      {
        question: 'What percentage of the NPS corpus is tax-free at retirement?',
        answer: 'Up to 60% of the accumulated corpus can be withdrawn as a 100% tax-free lump sum at age 60. The remaining 40% must be used to purchase an annuity.'
      },
      {
        question: 'Can NRIs and OCIs invest in NPS?',
        answer: 'Yes, NRIs and OCIs between 18 and 70 years can open an NPS Tier-I account, provided contributions are made from NRE/NRO banking channels.'
      }
    ],
    comparisonSlugs: ['public-provident-fund', 'atal-pension-yojana'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-scss',
    title: "Senior Citizens' Savings Scheme (SCSS)",
    slug: 'senior-citizens-savings-scheme',
    description: 'Sovereign-backed fixed-income retirement savings program under the Senior Citizens Savings Scheme, 2019 (as amended 2023), offering quarterly interest payouts and Section 80C tax benefits.',
    authority: 'Ministry of Finance / Department of Posts / Reserve Bank of India',
    category: 'Retirement & Fixed Income',
    status: 'OPEN',
    sourceUrl: 'https://www.nsiindia.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 3000000,
    expectedReturn: '8.2% p.a. (Paid Quarterly on 1st of April, July, Oct, Jan)',
    notifiedRate: '8.2% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '5 Years Fixed',
    lockInPeriod: '5 Years (Extendable in 3-Year blocks)',
    riskLevel: 'Low',
    returnMechanism: 'Interest is paid on a quarterly basis directly into the investor linked savings bank or post office account on the first working day of April, July, October, and January.',
    depositRules: 'Minimum ₹1,000, Maximum ₹30,00,000 (₹30 Lakh) per individual across all single or joint accounts held. Deposit must be in multiples of ₹1,000.',
    maturityRules: 'Matures at the end of 5 years from the date of account opening.',
    extensionRules: 'Can be extended for 3 years after the 5-year tenure by submitting an application within one year of maturity. Subsequent 3-year block extensions are also permitted under amended 2023 rules.',
    withdrawalRules: 'No partial withdrawals permitted; regular liquidity is provided via scheduled quarterly interest payouts.',
    prematureClosureRules: 'Premature closure permitted anytime: 1% deduction from deposit if closed after 1 year but before 2 years; 1% deduction if closed after 2 years. If closed before 1 year, all paid interest is recovered from principal.',
    loanFacilityRules: 'No loan facility is permitted against SCSS accounts.',
    taxTreatment: 'Deposits qualify for deduction under Section 80C up to ₹1.5 Lakh. Quarterly interest is taxable as income; senior citizens can claim deduction up to ₹50,000 on interest income under Section 80TTB. TDS applies if interest exceeds ₹50,000/year (Form 15H eligible).',
    nominationRules: 'Nomination facility is mandatory at account opening; multiple nominees with proportionate shares can be appointed.',
    accountOpeningProcess: [
      'Visit an authorized Post Office or designated Commercial Bank branch (SBI, PNB, Canara, BoB, HDFC, ICICI, etc.).',
      'Fill Form-1 (Application for opening SCSS Account) and provide age verification.',
      'Retired personnel between 55-60 years must attach employer certificate showing retirement date and retiral disbursement timeline.',
      'Deposit funds via cheque, demand draft, or bank transfer (cash allowed up to ₹1 Lakh).',
      'Receive SCSS passbook and link bank account for automated quarterly interest credit.'
    ],
    whereToInvest: 'All Head/Sub Post Offices and authorized public and private sector commercial bank branches across India.',
    requiredDocuments: [
      'Form-1 (SCSS Account Opening Form)',
      'Age Proof (Aadhaar Card, Passport, Voter ID, PAN Card, Birth Certificate)',
      'Identity and Address Proof',
      'Retirement proof & disbursement certificate (for retired individuals aged 55 to 60)',
      'Two passport size photographs'
    ],
    importantRules: [
      'Eligibility: Individuals aged 60+; retired civilian employees aged 55-60 (invested within 3 months of receiving retiral benefits); retired defence personnel aged 50+.',
      'Individual deposit limit ceiling enhanced to ₹30 Lakh under the 2023 amendment.',
      'Spouses can open individual accounts up to ₹30 Lakh each if both meet the qualifying eligibility criteria.',
      'Joint accounts permitted exclusively with spouse.'
    ],
    risksAndLimitations: [
      'Interest payout is strictly quarterly with no compounding/reinvestment option within the account.',
      'Interest income above ₹50,000 per financial year is subject to statutory TDS.'
    ],
    faqs: [
      {
        question: 'What is the maximum investment limit in SCSS?',
        answer: 'The maximum deposit limit is ₹30,00,000 (₹30 Lakh) per individual. A married couple where both qualify can invest up to ₹60 Lakh across separate/joint accounts.'
      },
      {
        question: 'When is interest paid in SCSS?',
        answer: 'Interest is credited quarterly on the first working day of April, July, October, and January directly into the linked savings account.'
      },
      {
        question: 'Can SCSS accounts be extended after 5 years?',
        answer: 'Yes, SCSS accounts can be extended for a 3-year block upon application within 1 year of maturity, and can be extended for further 3-year blocks thereafter.'
      }
    ],
    comparisonSlugs: ['post-office-monthly-income-scheme', 'floating-rate-savings-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-mis',
    title: 'Monthly Income Scheme (Post Office MIS / POMIS)',
    slug: 'post-office-monthly-income-scheme',
    description: 'Post Office monthly income generating savings program under the National Savings (Monthly Income Account) Scheme, 2019 (as amended 2023), offering guaranteed monthly cash flow with sovereign backing.',
    authority: 'Ministry of Finance / Department of Posts / National Savings Institute',
    category: 'Fixed Income',
    status: 'OPEN',
    sourceUrl: 'https://www.indiapost.gov.in',
    sourceAuthority: 'Department of Posts, Ministry of Communications, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 900000,
    expectedReturn: '7.4% p.a. (Paid Monthly into Savings Account)',
    notifiedRate: '7.4% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '5 Years Fixed',
    lockInPeriod: '5 Years',
    riskLevel: 'Low',
    returnMechanism: 'Fixed monthly interest is calculated on the principal deposit and credited automatically on the monthly anniversary date into the linked Post Office Savings Account (POSA) or electronic bank account.',
    depositRules: 'Minimum ₹1,000 in multiples of ₹1,000. Maximum single account deposit: ₹9,00,000 (₹9 Lakh); Maximum joint account deposit (up to 3 adults): ₹15,00,000 (₹15 Lakh).',
    maturityRules: 'Matures at the completion of exactly 5 years from the date of account opening.',
    extensionRules: 'No direct extension facility. Upon maturity, the principal can be withdrawn or reinvested into a fresh 5-year POMIS account.',
    withdrawalRules: 'No partial withdrawals of principal are permitted; monthly payouts provide steady income liquidity.',
    prematureClosureRules: 'Closure before 1 year is strictly prohibited. Between 1 and 3 years: 2% deducted from principal. Between 3 and 5 years: 1% deducted from principal.',
    loanFacilityRules: 'No loan facility is available against Post Office Monthly Income Scheme accounts.',
    taxTreatment: 'Fully taxable: Monthly interest income is taxable as "Income from Other Sources" at applicable income tax slab rates. No Section 80C deduction applies. No TDS is deducted by the Post Office.',
    nominationRules: 'Nomination facility is available at the time of opening and can be updated anytime.',
    accountOpeningProcess: [
      'Open a linked Post Office Savings Account (POSA) if not already held.',
      'Submit Form-1 (Application for POMIS Account) along with KYC documents and photographs.',
      'Deposit funds via cash (up to permissible limit) or cheque/POSA transfer.',
      'Set up ECS / auto-credit mandate to transfer monthly interest directly into your bank or POSA.'
    ],
    whereToInvest: 'All Department of Posts Head Offices, Sub-Post Offices, and Branch Post Offices throughout India.',
    requiredDocuments: [
      'Form-1 (POMIS Account Opening Form)',
      'Identity Proof (Aadhaar Card, Passport, Voter ID, Driving License)',
      'Address Proof (Aadhaar, Utility Bills)',
      'PAN Card or Form 60',
      'Passport size photographs'
    ],
    importantRules: [
      'Maximum holding limits: ₹9 Lakh for single accounts, ₹15 Lakh for joint accounts (where all joint holders share equal parts).',
      'Minors aged 10+ can open and operate accounts in their own name.',
      'Unclaimed monthly interest does not earn any extra interest if kept in the MIS account without auto-sweep into POSA.'
    ],
    risksAndLimitations: [
      'No tax-saving deduction under Section 80C on deposit.',
      '1-year complete premature closure lock-in with penalty thereafter.'
    ],
    faqs: [
      {
        question: 'What is the revised maximum investment limit in Post Office MIS?',
        answer: 'The enhanced limits (effective 2023) are ₹9,00,000 (₹9 Lakh) for a single account and ₹15,00,000 (₹15 Lakh) for a joint account.'
      },
      {
        question: 'How is interest paid and does it compound?',
        answer: 'Interest is paid monthly and does not compound. It should be linked to your Post Office Savings Account for automatic credit.'
      },
      {
        question: 'Can POMIS account be closed before 5 years?',
        answer: 'Premature closure is permitted after 1 year with a 2% deduction between 1-3 years and a 1% deduction between 3-5 years.'
      }
    ],
    comparisonSlugs: ['senior-citizens-savings-scheme', 'post-office-time-deposit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-potd',
    title: 'Post Office Time Deposit (POTD - 1, 2, 3, 5 Years)',
    slug: 'post-office-time-deposit',
    description: 'Sovereign-backed fixed deposit facility under the National Savings Time Deposit Scheme, 2019, offering fixed returns across 1, 2, 3, and 5-year tenures, with 5-year deposits eligible for Section 80C tax benefits.',
    authority: 'Ministry of Finance / Department of Posts / National Savings Institute',
    category: 'Fixed Income',
    status: 'OPEN',
    sourceUrl: 'https://www.indiapost.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: '6.9% to 7.5% p.a. (Quarterly Compounded, Payable Annually)',
    notifiedRate: '1-Yr: 6.9%, 2-Yr: 7.0%, 3-Yr: 7.1%, 5-Yr: 7.5% p.a.',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '1, 2, 3, or 5 Years Choice',
    lockInPeriod: 'Chosen Tenure (1, 2, 3, or 5 Years)',
    riskLevel: 'Low',
    returnMechanism: 'Interest is compounded quarterly and paid out annually into the linked savings account.',
    depositRules: 'Minimum ₹1,000 in multiples of ₹100. No upper limit on deposit amount or number of accounts.',
    maturityRules: 'Matures at the completion of the chosen period (1, 2, 3, or 5 years) from the deposit date.',
    extensionRules: 'Can be extended on maturity for the same period as originally opened upon submitting an extension application within prescribed timelines.',
    withdrawalRules: 'No partial withdrawals permitted prior to maturity.',
    prematureClosureRules: 'No premature closure permitted before 6 months. Between 6 to 12 months: Post Office Savings Account interest rate (4.0%) applies. After 1 year: 2% lower than the specified rate for completed years.',
    loanFacilityRules: 'Time deposits can be pledged as security/collateral against loans from commercial banks and government bodies.',
    taxTreatment: '5-Year Time Deposit qualifies for tax deduction under Section 80C up to ₹1.5 Lakh. Tenures of 1, 2, and 3 years do not qualify for 80C. Annual interest is taxable as income under individual slab.',
    nominationRules: 'Nomination facility available at opening or subsequently.',
    accountOpeningProcess: [
      'Visit any Post Office branch or use India Post Internet Banking / Mobile Banking.',
      'Submit Form-1 (Application for POTD Account) and specify the chosen tenure (1, 2, 3, or 5 years).',
      'Submit KYC documents (Aadhaar Card, PAN Card).',
      'Deposit funds via cash, cheque, or savings transfer.',
      'Receive Time Deposit passbook or digital deposit acknowledgement.'
    ],
    whereToInvest: 'All Department of Posts Head Offices, Sub-Post Offices, and Branch Post Offices throughout India.',
    requiredDocuments: [
      'Form-1 (Time Deposit Opening Form)',
      'Identity Proof (Aadhaar, Passport, Voter ID, Driving License)',
      'Address Proof (Aadhaar, Utility Bills)',
      'PAN Card (Mandatory for deposits over ₹50,000)',
      'Recent passport size photographs'
    ],
    importantRules: [
      'Available to Indian resident adults (Single, Joint A, Joint B) and guardians of minors.',
      'Only the 5-Year tenure deposit qualifies for Section 80C income tax deduction.',
      'Interest is calculated quarterly but disbursed annually.'
    ],
    risksAndLimitations: [
      'Strict 6-month closure prohibition with penalty deductions on early closure thereafter.',
      'Interest earned is fully taxable at your income slab.'
    ],
    faqs: [
      {
        question: 'Which Post Office Time Deposit tenure provides Section 80C tax deduction?',
        answer: 'Only the 5-Year Post Office Time Deposit qualifies for deduction up to ₹1.5 Lakh under Section 80C of the Income Tax Act.'
      },
      {
        question: 'How frequently is interest calculated and paid in POTD?',
        answer: 'Interest is compounded quarterly and paid annually into the investor savings account.'
      },
      {
        question: 'Can POTD accounts be extended after maturity?',
        answer: 'Yes, accounts can be extended for an identical tenure upon submitting an application to the post office within prescribed limits.'
      }
    ],
    comparisonSlugs: ['national-savings-certificate', 'post-office-monthly-income-scheme'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-pord',
    title: 'Post Office Recurring Deposit (PORD - 5 Year)',
    slug: 'post-office-recurring-deposit',
    description: 'Statutory 5-year monthly recurring deposit scheme under the National Savings Recurring Deposit Scheme, 2019, fostering systematic savings with sovereign guarantee and quarterly compounding.',
    authority: 'Ministry of Finance / Department of Posts / National Savings Institute',
    category: 'Small Savings',
    status: 'OPEN',
    sourceUrl: 'https://www.indiapost.gov.in',
    sourceAuthority: 'Ministry of Finance, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit',
    expectedReturn: '6.7% p.a. (Quarterly Compounded, 60 Monthly Installments)',
    notifiedRate: '6.7% per annum',
    rateEffectivePeriod: 'Current Notified Quarter',
    tenure: '5 Years (60 Monthly Deposits)',
    lockInPeriod: '3 Years (Premature closure allowed after 3 years)',
    riskLevel: 'Low',
    returnMechanism: 'Interest is compounded quarterly and credited on the cumulative monthly installments, paid in full upon 5-year maturity.',
    depositRules: 'Minimum ₹100 per month in multiples of ₹10. Deposits must be made by 15th (if opened 1st-15th) or by last working day of the month (if opened after 15th).',
    maturityRules: 'Matures after 5 years (60 complete monthly deposits) from the date of account opening.',
    extensionRules: 'Can be extended for another 5-year block on application; deposits can be continued or the existing maturity amount can remain earning RD interest.',
    withdrawalRules: 'No partial withdrawals; liquidity is offered through a loan facility up to 50% of the balance after 1 year.',
    prematureClosureRules: 'Permitted after 3 years from account opening. In case of premature closure, only the Post Office Savings Account interest rate (4.0%) is payable.',
    loanFacilityRules: 'Loan up to 50% of credit balance is available after 1 year (12 continuous deposits). Repayable in lump sum or monthly installments with 2% interest above RD rate.',
    taxTreatment: 'Fully taxable: Interest income is taxable under "Income from Other Sources" at individual slab rates. No Section 80C tax deduction. No TDS deducted by post office.',
    nominationRules: 'Nomination facility available at opening or subsequently.',
    accountOpeningProcess: [
      'Visit any Post Office branch or use India Post Mobile Banking / IPPB app.',
      'Submit Form-1 (Application for Recurring Deposit Account) along with KYC documents.',
      'Deposit first monthly installment (minimum ₹100) via cash, cheque, or electronic transfer.',
      'Set up standing instructions / auto-debit from Post Office Savings Account or IPPB account.',
      'Receive PORD passbook.'
    ],
    whereToInvest: 'All Department of Posts Head Offices, Sub-Post Offices, and Branch Post Offices across India.',
    requiredDocuments: [
      'Form-1 (PORD Account Opening Form)',
      'Identity Proof (Aadhaar Card, Passport, Voter ID, Driving License)',
      'Address Proof (Aadhaar, Utility Bills)',
      'PAN Card or Form 60',
      'Passport size photographs'
    ],
    importantRules: [
      'Default fee of ₹1 per ₹100 per month is charged if monthly installment is not paid within the due date.',
      'If account has more than 4 defaults, it becomes discontinued and can be revived within 2 months.',
      'Advance deposits can be made with rebate incentives for 6 or 12 advance monthly installments.'
    ],
    risksAndLimitations: [
      'Default penalties on missed monthly deadlines.',
      'Premature closure before 5 years reduces the entire return to the basic savings account interest rate.'
    ],
    faqs: [
      {
        question: 'What is the minimum monthly deposit and tenure for Post Office RD?',
        answer: 'The minimum monthly deposit is ₹100 (in multiples of ₹10) and the standard tenure is 5 years (60 monthly installments).'
      },
      {
        question: 'Can I take a loan against my Post Office Recurring Deposit?',
        answer: 'Yes, after 1 year of continuous operation (12 deposits), a loan of up to 50% of the accumulated balance is available at 2% above the RD interest rate.'
      },
      {
        question: 'What happens if I miss a monthly installment?',
        answer: 'A default fine of ₹1 for every ₹100 of denomination is charged per month of delay.'
      }
    ],
    comparisonSlugs: ['post-office-time-deposit', 'public-provident-fund'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-apy',
    title: 'Atal Pension Yojana (APY)',
    slug: 'atal-pension-yojana',
    description: 'Government of India guaranteed defined-pension program administered by PFRDA, delivering guaranteed monthly pensions of ₹1,000 to ₹5,000 from age 60 to unorganized sector workers and Indian citizens.',
    authority: 'Pension Fund Regulatory and Development Authority (PFRDA) / Ministry of Finance',
    category: 'Pension',
    status: 'OPEN',
    sourceUrl: 'https://www.pfrda.org.in',
    sourceAuthority: 'PFRDA, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 42,
    maxInvestment: 1454,
    expectedReturn: 'Guaranteed Monthly Pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000',
    notifiedRate: 'Government Guaranteed Pension Matrix',
    rateEffectivePeriod: 'Statutory Pension Guarantee',
    tenure: 'Contributory period until Age 60 (Pension lifelong thereafter)',
    lockInPeriod: 'Until Age 60',
    riskLevel: 'Low',
    returnMechanism: 'Monthly, quarterly, or half-yearly auto-debit contributions during working years fund a government-guaranteed lifetime pension stream post age 60.',
    depositRules: 'Fixed contribution based on entry age (18 to 40 years) and chosen pension slab (₹1,000 to ₹5,000/month). E.g., at age 18: ₹42/month for ₹1,000 pension, ₹210/month for ₹5,000 pension.',
    maturityRules: 'Upon reaching 60 years of age, the subscriber receives the chosen guaranteed monthly pension lifelong through their linked bank branch.',
    extensionRules: 'No extension beyond age 60; pension payments commence automatically on attaining 60 years.',
    withdrawalRules: 'No partial withdrawals permitted prior to age 60.',
    prematureClosureRules: 'Premature exit before 60 is permitted only under exceptional circumstances: terminal illness of subscriber or unfortunate death. In case of death before 60, spouse can continue account or claim corpus.',
    loanFacilityRules: 'No loan facility is available under Atal Pension Yojana.',
    taxTreatment: 'Contributions qualify for tax deduction under Section 80CCD(1) and Section 80CCD(1B) up to ₹50,000. Monthly pension received after age 60 is taxable as income under individual slab.',
    nominationRules: 'Nomination is mandatory. Spouse is the default primary beneficiary; secondary nominee receives the entire accumulated pension corpus upon demise of both subscriber and spouse.',
    accountOpeningProcess: [
      'Visit the bank branch or post office where you hold a savings account (or enroll via net banking).',
      'Fill the APY Registration Form and choose the desired monthly pension slab (₹1,000 to ₹5,000).',
      'Provide Aadhaar and mobile number, and designate spouse/nominee details.',
      'Authorize auto-debit mandate from your savings account.',
      'Obtain APY PRAN Acknowledgement receipt.'
    ],
    whereToInvest: 'All Scheduled Commercial Banks, Regional Rural Banks (RRBs), Cooperative Banks, and Department of Posts branches across India.',
    requiredDocuments: [
      'APY Subscriber Registration Form',
      'Savings Bank Account / Post Office Account details (Account Number, IFSC)',
      'Aadhaar Card copy',
      'Mobile number for transaction alerts and OTP verification'
    ],
    importantRules: [
      'Eligible for all Indian citizens aged between 18 and 40 years.',
      'Income Tax Payers Rule: Effective 1st October 2022, any citizen who is or has been an income-tax payer is NOT eligible to join APY.',
      'Triple Guarantee: Guaranteed pension to subscriber, same lifelong pension to spouse upon subscriber death, and return of 100% accumulated pension wealth (up to ₹8.5 Lakh for ₹5,000 slab) to nominee.'
    ],
    risksAndLimitations: [
      'Ineligible for income tax payers.',
      'Penalty interest of ₹1 to ₹10 per month applies if savings account has insufficient balance on the scheduled auto-debit date.'
    ],
    faqs: [
      {
        question: 'Who is eligible to join Atal Pension Yojana?',
        answer: 'Any Indian citizen aged 18 to 40 years who holds a bank/post office savings account and is NOT an income tax payer can enroll in APY.'
      },
      {
        question: 'What happens to the pension if the subscriber passes away?',
        answer: 'Upon subscriber death, the exact same monthly pension is paid to the surviving spouse for life. Upon spouse death, 100% of the accumulated corpus is handed to the nominee.'
      },
      {
        question: 'What is the monthly contribution for a ₹5,000 pension at age 18?',
        answer: 'At entry age 18, a monthly contribution of ₹210 provides a guaranteed monthly pension of ₹5,000 for life starting from age 60.'
      }
    ],
    comparisonSlugs: ['national-pension-system', 'pm-kisan-maandhan-yojana'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-frsb',
    title: 'Floating Rate Savings Bonds (FRSB 2020 - Taxable)',
    slug: 'floating-rate-savings-bonds',
    description: 'Government of India taxable floating rate debt securities issued under Government Notification F.No.4(10)-B(W&M)/2020, offering semi-annual interest pegged 35 bps above the NSC rate.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://rbi.org.in',
    sourceAuthority: 'Reserve Bank of India (RBI)',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Floating Rate: 8.05% p.a. (Reset Semi-Annually, NSC + 0.35%)',
    notifiedRate: '8.05% per annum (Current Cycle)',
    rateEffectivePeriod: 'Reset semi-annually on 1st January and 1st July',
    tenure: '7 Years Fixed',
    lockInPeriod: '7 Years (Premature encashment permitted only for Senior Citizens)',
    riskLevel: 'Low',
    returnMechanism: 'Interest coupon resets semi-annually based on the National Savings Certificate (NSC) rate + 35 basis points spread, paid half-yearly on 1st January and 1st July directly into bank account.',
    depositRules: 'Minimum ₹1,000 and in multiples of ₹1,000 thereafter. No upper limit on investment.',
    maturityRules: 'Bonds are repaid at par upon the expiry of 7 years from the date of issue.',
    extensionRules: 'No statutory provision for extension; principal is credited to the registered bank account upon 7-year maturity.',
    withdrawalRules: 'No partial withdrawals of principal are permitted.',
    prematureClosureRules: 'Premature encashment is permitted strictly for senior citizen investors: 60-70 years (after 6 years), 70-80 years (after 5 years), 80+ years (after 4 years), subject to a 50% interest penalty for the preceding half-year.',
    loanFacilityRules: 'Bonds are non-transferable, non-tradable in secondary markets, and CANNOT be pledged as collateral for bank loans.',
    taxTreatment: 'Fully taxable: Coupon interest is taxable as income under the investor income tax slab. TDS is deducted at source under Section 193 of the Income Tax Act (Form 15G/15H eligible). No Section 80C deduction.',
    nominationRules: 'Nomination facility is available (single or multiple nominees with defined percentage shares).',
    accountOpeningProcess: [
      'Apply online via RBI Retail Direct portal (retaildirect.rbi.org.in) or visit authorized bank branches (SBI, PNB, BoB, HDFC, ICICI, Axis).',
      'Submit Form-A (Application for FRSB) along with KYC and bank mandate details.',
      'Transfer subscription funds through net banking, NEFT, RTGS, or cheque.',
      'Receive Bond Ledger Account (BLA) Certificate of Holding issued by RBI.'
    ],
    whereToInvest: 'RBI Retail Direct portal online, State Bank of India, nationalized commercial banks, and designated private banks (HDFC, ICICI, Axis, Kotak Mahindra).',
    requiredDocuments: [
      'Form-A (Application for Floating Rate Savings Bonds)',
      'PAN Card (Mandatory)',
      'Aadhaar Card or Passport for identity and address verification',
      'Cancelled cheque showing bank account number and IFSC for electronic interest payout',
      'Age proof (for senior citizen premature redemption privilege)'
    ],
    importantRules: [
      'Eligible for Indian resident individuals and Hindu Undivided Families (HUFs). NRIs are NOT eligible to invest.',
      'Interest is payable strictly half-yearly on 1st January and 1st July; no cumulative compounding option is available.',
      'Held in electronic Bond Ledger Account (BLA) format with RBI.'
    ],
    risksAndLimitations: [
      'Interest rate fluctuates with changes in small savings rate benchmarks.',
      'Complete 7-year lock-in for non-senior citizens with no secondary market liquidity.'
    ],
    faqs: [
      {
        question: 'How is the interest rate on Floating Rate Savings Bonds determined?',
        answer: 'The rate is linked to the National Savings Certificate (NSC) benchmark with a fixed markup of +0.35% (35 bps), resetting semi-annually on 1st January and 1st July.'
      },
      {
        question: 'Can I sell or transfer FRSB bonds before 7 years?',
        answer: 'No, FRSB bonds are non-tradable and non-transferable. Premature redemption is permitted solely for senior citizens aged 60 and above after completing specified lock-in periods.'
      },
      {
        question: 'Is TDS deducted on interest earned from FRSB?',
        answer: 'Yes, TDS is deducted under Section 193 of the Income Tax Act unless an eligible Form 15G/15H is submitted.'
      }
    ],
    comparisonSlugs: ['senior-citizens-savings-scheme', 'national-savings-certificate'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-ups',
    title: 'Unified Pension Scheme (UPS)',
    slug: 'unified-pension-scheme',
    description: 'Statutory pension architecture approved by the Union Cabinet on August 24, 2024 (operational from April 1, 2025) for Central Government employees, assuring 50% pension, family pension, and dearness relief.',
    authority: 'Ministry of Personnel, Public Grievances and Pensions / Department of Expenditure',
    category: 'Pension',
    status: 'ACTIVE',
    sourceUrl: 'https://pib.gov.in',
    sourceAuthority: 'Press Information Bureau, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 0,
    maxInvestment: 'Statutory 10% Contribution of Basic + DA',
    expectedReturn: 'Assured 50% Pension + Dearness Relief (DR) + Gratuity Lump Sum',
    notifiedRate: '50% of Average Basic Pay (last 12 months)',
    rateEffectivePeriod: 'Operational from 1st April 2025',
    tenure: 'Qualifying service period (minimum 10 years for minimum pension, 25 years for full assured pension)',
    lockInPeriod: 'Service Tenure until Superannuation',
    riskLevel: 'Low',
    returnMechanism: 'Assured defined benefit pension funded through employee contribution of 10% of (Basic Pay + DA) and Central Government enhanced contribution of 18.5%.',
    depositRules: 'Employee contribution: 10% of monthly Basic Pay + DA. Government co-contribution: 18.5% of monthly Basic Pay + DA.',
    maturityRules: 'Upon superannuation after minimum 25 years of qualifying service: Assured pension equal to 50% of average basic pay drawn in the last 12 months prior to retirement (proportionate for 10-25 years). Minimum assured pension of ₹10,000/month after at least 10 years of service.',
    extensionRules: 'Not applicable (linked to government employment superannuation rules).',
    withdrawalRules: 'Separate lump sum payment on superannuation equal to 1/10th of monthly emoluments (Basic + DA) for every completed 6 months of service, which does not reduce the quantum of assured pension.',
    prematureClosureRules: 'Governed by Central Civil Services pension regulations for voluntary retirement / medical invalidation after qualifying service thresholds.',
    loanFacilityRules: 'Governed by standard Central Government employee provident fund / advances regulations.',
    taxTreatment: 'Pension received is taxable as "Income from Salaries" as per standard pension taxation rules under the Income Tax Act. Retiral lump sum benefits enjoy statutory gratuity exemptions under Section 10(10).',
    nominationRules: 'Assured Family Pension: 60% of the pension drawn by the employee immediately before demise is guaranteed to the surviving spouse/eligible family member.',
    accountOpeningProcess: [
      'Central Government employees covered under National Pension System (NPS) are provided an explicit option to switch to UPS.',
      'Submit the unified enrollment/option form to the respective Department Drawing and Disbursing Officer (DDO).',
      'Systematic recording of service record and contributions via the Central Personnel & Pension portal.',
      'PPO (Pension Payment Order) generation upon superannuation.'
    ],
    whereToInvest: 'Directly administered through Central Government ministries, departments, and authorized pension disbursing agencies / public sector banks.',
    requiredDocuments: [
      'Option Form for Unified Pension Scheme (UPS)',
      'Government Employee Service Book / Employee ID',
      'Aadhaar and PAN details',
      'Bank account mandate for pension disbursement',
      'Family details and nomination declarations'
    ],
    importantRules: [
      'Open to existing Central Government NPS subscribers (with one-time switch option) and future Central Government entrants.',
      'Full assured 50% pension requires minimum 25 years of service; pro-rata pension for service between 10 and 25 years.',
      'Minimum guaranteed pension of ₹10,000 per month for employees with at least 10 years of service.',
      'Full indexation with Dearness Relief (DR) based on All India Consumer Price Index for Industrial Workers (AICPI-IW).'
    ],
    risksAndLimitations: [
      'Restricted exclusively to Central Government employees.',
      'Choice to switch between NPS and UPS is irrevocable once exercised.'
    ],
    faqs: [
      {
        question: 'What are the main pillar guarantees of the Unified Pension Scheme (UPS)?',
        answer: 'UPS provides: (1) Assured 50% pension for 25+ years service, (2) Assured 60% family pension, (3) Assured minimum ₹10,000/month pension after 10 years service, (4) Dearness Relief indexation, and (5) A lump-sum retiral payment of 1/10th emoluments per 6 months service.'
      },
      {
        question: 'What are the employee and government contribution rates under UPS?',
        answer: 'The employee contributes 10% of Basic Pay + DA, while the Central Government contributes 18.5% of Basic Pay + DA.'
      },
      {
        question: 'Can existing NPS central government employees opt for UPS?',
        answer: 'Yes, existing Central Government employees under NPS have the option to opt into UPS with retrospective benefit calculations.'
      }
    ],
    comparisonSlugs: ['national-pension-system', 'employees-pension-scheme'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-epf',
    title: "Employees' Provident Fund (EPF)",
    slug: 'employees-provident-fund',
    description: 'Mandatory statutory retirement savings framework governed by the Employees Provident Funds & Miscellaneous Provisions Act, 1952, administered by EPFO for salaried employees in India.',
    authority: 'Employees Provident Fund Organisation (EPFO) / Ministry of Labour & Employment',
    category: 'Retirement',
    status: 'ACTIVE',
    sourceUrl: 'https://www.epfindia.gov.in',
    sourceAuthority: 'EPFO, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: '12% of Basic + DA (Higher voluntary VPF allowed)',
    expectedReturn: '8.25% p.a. (EPFO CBT Declared Interest Rate)',
    notifiedRate: '8.25% per annum',
    rateEffectivePeriod: 'Annually declared by EPFO Central Board of Trustees (CBT)',
    tenure: 'Until Superannuation / Retirement (Age 58)',
    lockInPeriod: 'Employment Tenure (Partial advances allowed for specific needs)',
    riskLevel: 'Low',
    returnMechanism: 'Interest is calculated monthly on the running balance and credited annually to the member EPF account at the rate declared by EPFO CBT and approved by the Ministry of Finance.',
    depositRules: 'Employee contributes 12% of Basic Pay + DA. Employer contributes 12%: 3.67% goes to EPF, 8.33% goes to EPS (capped at wage ceiling of ₹15,000), and 0.50% goes to EDLI insurance.',
    maturityRules: 'Accumulated EPF corpus (employee contribution + employer contribution + accrued interest) is payable upon retirement after attaining 58 years of age or post-employment cessation.',
    extensionRules: 'Can remain in the EPF account earning interest up to 36 months after leaving employment if not transferred or withdrawn.',
    withdrawalRules: 'Partial withdrawals (advances) permitted via UAN Member e-Sewa portal for housing purchase/construction, home renovation, medical illness of family, child higher education, marriage, or 1-month unemployment (75% withdrawal).',
    prematureClosureRules: 'Full settlement permitted upon remaining unemployed for 2 continuous months or upon permanent migration abroad / retirement.',
    loanFacilityRules: 'Non-refundable advances (partial withdrawals) are available without repayment obligation for approved statutory purposes.',
    taxTreatment: 'EEE Status: Employee contribution qualifies for Section 80C deduction up to ₹1.5L. Interest on annual employee contributions up to ₹2.5 Lakh is 100% tax-free (taxable above ₹2.5L as per Sec 10(11)/(12)). Full withdrawal is tax-free after 5 years of continuous service.',
    nominationRules: 'e-Nomination facility is available on the Member e-Sewa portal; multiple nominees with designated percentage shares can be registered.',
    accountOpeningProcess: [
      'Account is initiated by the employer upon joining an establishment with 20+ employees.',
      'Universal Account Number (UAN) is generated and linked to the employee Aadhaar and PAN.',
      'Employee activates UAN on the EPFO Member e-Sewa portal (unifiedportal-mem.epfindia.gov.in).',
      'Monthly contributions are deducted automatically from payroll and deposited into EPFO.'
    ],
    whereToInvest: 'Administered through employer payroll deductions directly deposited into the Employees Provident Fund Organisation (EPFO).',
    requiredDocuments: [
      'Universal Account Number (UAN)',
      'Aadhaar Card linked with mobile number for OTP',
      'Permanent Account Number (PAN)',
      'Bank Account details (Bank Passbook / Cancelled Cheque with IFSC)',
      'Form 11 (Declaration Form upon joining new company)'
    ],
    importantRules: [
      'Mandatory for all employees earning basic wages up to ₹15,000/month in covered establishments; voluntary for higher wage earners.',
      'Voluntary Provident Fund (VPF): Employees can contribute up to 100% of basic pay + DA into VPF earning the same EPF interest rate.',
      'TDS at 10% applies on withdrawals before 5 years of continuous service if withdrawal amount exceeds ₹50,000 (unless Form 15G/15H submitted).'
    ],
    risksAndLimitations: [
      'Interest on employee annual contributions exceeding ₹2.5 Lakh per financial year is subject to income tax.',
      'Full premature withdrawal before 5 continuous years of service triggers tax liability on past exemptions.'
    ],
    faqs: [
      {
        question: 'What is the current EPFO declared interest rate for EPF?',
        answer: 'The EPFO Central Board of Trustees (CBT) has declared an annual interest rate of 8.25% p.a., credited into member accounts.'
      },
      {
        question: 'How does the tax rule on EPF contributions above ₹2.5 Lakh work?',
        answer: 'Interest accrued on employee contributions exceeding ₹2.5 Lakh in a financial year is separated into a taxable contribution account and taxed at your income slab.'
      },
      {
        question: 'When can I withdraw my EPF corpus tax-free?',
        answer: 'Full withdrawal is completely tax-free if you have completed 5 or more years of continuous service across one or multiple employers (transferred via UAN).'
      }
    ],
    comparisonSlugs: ['public-provident-fund', 'national-pension-system'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-eps',
    title: "Employees' Pension Scheme (EPS-95)",
    slug: 'employees-pension-scheme',
    description: 'Statutory defined-benefit social security pension framework under the Employees Pension Scheme, 1995, delivering monthly lifetime pensions to retired formal sector employees.',
    authority: 'Employees Provident Fund Organisation (EPFO) / Ministry of Labour & Employment',
    category: 'Pension',
    status: 'ACTIVE',
    sourceUrl: 'https://www.epfindia.gov.in',
    sourceAuthority: 'EPFO, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 0,
    maxInvestment: '8.33% of employer contribution (wage cap ₹15,000)',
    expectedReturn: 'Lifelong Monthly Pension via Statutory EPS Formula',
    notifiedRate: 'Statutory Formula: (Pensionable Salary × Pensionable Service) ÷ 70',
    rateEffectivePeriod: 'Continuous Statutory Benefit',
    tenure: 'Minimum 10 years of contributory service to qualify for pension',
    lockInPeriod: 'Until Superannuation Age (58 Years)',
    riskLevel: 'Low',
    returnMechanism: 'Funded by diverting 8.33% of the employer monthly 12% contribution (up to the wage ceiling of ₹15,000, i.e., ₹1,250/month) plus 1.16% Central Government budgetary support.',
    depositRules: 'No direct employee deduction; funded through employer payroll allocation (8.33% of basic pay capped at ₹15,000/month).',
    maturityRules: 'Lifelong monthly member pension commences upon superannuation at age 58 after completing a minimum of 10 years of contributory service.',
    extensionRules: 'Members can defer pension commencement up to age 60 with an increment of 4% per year (8.16% higher pension for 2-year deferment).',
    withdrawalRules: 'If total service is less than 10 years upon leaving employment, the member can withdraw the lump sum EPS accumulation using Form 10C, or obtain an EPS Scheme Certificate to carry forward service.',
    prematureClosureRules: 'Early pension is available from age 50 to 57 after 10 years of service, subject to a reduction of 4% for each year the member is below 58 years of age.',
    loanFacilityRules: 'No loan facility is available under the Employees Pension Scheme.',
    taxTreatment: 'Monthly pension received is taxable as "Income from Salaries / Other Sources" under individual income tax slabs. Lump sum withdrawal via Form 10C (for service under 10 years) is tax-exempt if conditions are satisfied.',
    nominationRules: 'Family Pension: In the event of member demise, widow/widower receives 50% of member pension for life; up to 2 children simultaneously receive 25% of widow pension each until age 25.',
    accountOpeningProcess: [
      'Automatically linked with EPF account enrollment by the employer via Universal Account Number (UAN).',
      'Monthly contributions are tracked under the EPS ledger in EPFO.',
      'Upon reaching 58 years of age with 10+ years service, submit Form 10D on the EPFO Member Portal to claim monthly pension.'
    ],
    whereToInvest: 'Administered centrally through EPFO across all covered employer establishments in India.',
    requiredDocuments: [
      'Form 10D (Application for monthly member pension)',
      'Form 10C (For withdrawal benefit or Scheme Certificate if service < 10 years)',
      'Universal Account Number (UAN) & Member ID',
      'Bank account passbook / cancelled cheque with IFSC for pension credit',
      'Family photographs and birth certificates of children for family pension'
    ],
    importantRules: [
      'Minimum qualifying service of 10 years is mandatory to receive lifelong monthly pension.',
      'Minimum monthly pension is fixed at ₹1,000 per month by the Government of India.',
      'Pensionable salary is calculated as the average monthly basic pay drawn during the last 60 months of contributory service.',
      'Scheme Certificate enables continuous aggregation of pension service across different employers.'
    ],
    risksAndLimitations: [
      'Statutory wage ceiling cap of ₹15,000 limits the maximum standard pension accumulation.',
      'Early pension before age 58 incurs a permanent 4% reduction penalty per year.'
    ],
    faqs: [
      {
        question: 'What is the formula used to calculate monthly EPS pension?',
        answer: 'Monthly Pension = (Pensionable Salary × Pensionable Service) ÷ 70, where pensionable salary is the average of the last 60 months basic pay (capped at ₹15,000).'
      },
      {
        question: 'What happens if I leave employment before completing 10 years of service?',
        answer: 'You can either withdraw your EPS accumulated amount using Form 10C or apply for an EPS Scheme Certificate to carry forward your service count to your next employer.'
      },
      {
        question: 'What is the minimum pension guaranteed under EPS-95?',
        answer: 'The Government of India guarantees a minimum monthly pension of ₹1,000 under EPS-95.'
      }
    ],
    comparisonSlugs: ['unified-pension-scheme', 'atal-pension-yojana'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-pmkmy',
    title: 'PM-Kisan Maandhan Yojana (PM-KMY)',
    slug: 'pm-kisan-maandhan-yojana',
    description: 'Central sector old-age pension program administered by the Ministry of Agriculture & Farmers Welfare and LIC, providing a guaranteed monthly pension of ₹3,000 to small and marginal farmers.',
    authority: 'Ministry of Agriculture and Farmers Welfare / LIC',
    category: 'Pension & Farmer Welfare',
    status: 'OPEN',
    sourceUrl: 'https://pmkisan.gov.in',
    sourceAuthority: 'Ministry of Agriculture and Farmers Welfare, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 55,
    maxInvestment: 200,
    expectedReturn: 'Guaranteed Monthly Pension of ₹3,000 after Age 60',
    notifiedRate: '₹3,000 / Month Assured Pension',
    rateEffectivePeriod: 'Statutory Scheme Benefit',
    tenure: 'Contributory period until Age 60 (Lifelong pension thereafter)',
    lockInPeriod: 'Until Age 60',
    riskLevel: 'Low',
    returnMechanism: 'Farmer contributes a monthly subscription of ₹55 to ₹200 (based on entry age 18-40) matched with an equal 50% co-contribution by the Central Government, managed by LIC Pension Fund.',
    depositRules: 'Monthly contribution ranges from ₹55 (entry age 18) to ₹200 (entry age 40). Farmers can opt to auto-debit contributions directly from their PM-KISAN installment payments.',
    maturityRules: 'Upon attaining 60 years of age, the farmer receives a fixed assured pension of ₹3,000 every month directly credited into their bank account.',
    extensionRules: 'Not applicable; pension starts automatically upon attaining 60 years of age.',
    withdrawalRules: 'No partial withdrawals permitted prior to age 60.',
    prematureClosureRules: 'Exit before 10 years: Farmer receives only own contribution with savings bank interest. Exit after 10 years but before 60: Farmer receives own contribution plus fund-earned interest or savings bank interest, whichever is higher.',
    loanFacilityRules: 'No loan facility is permitted under PM-Kisan Maandhan Yojana.',
    taxTreatment: 'Contributions and pension payouts are subject to standard agricultural/income tax provisions.',
    nominationRules: 'Family Pension: If the subscriber passes away after age 60, the spouse is entitled to receive 50% of the pension (₹1,500/month) as family pension lifelong.',
    accountOpeningProcess: [
      'Visit the nearest Common Services Centre (CSC) or access the self-enrollment portal (maandhan.in).',
      'Provide Aadhaar Card, Savings Bank Account details, and landholding documentation.',
      'Calculate monthly installment based on age and authorize auto-debit / PM-KISAN linking.',
      'Sign auto-debit mandate and receive the Kisan Pension Card with Pension Account Number.'
    ],
    whereToInvest: 'All Common Services Centres (CSCs) across India and online via the Ministry of Agriculture portal (maandhan.in).',
    requiredDocuments: [
      'Aadhaar Card',
      'Bank Account Passbook / details with IFSC',
      'Proof of cultivable landholding (up to 2 hectares) from state land records (Khasra/Khatauni)',
      'Mobile number for enrollment and transaction SMS'
    ],
    importantRules: [
      'Eligibility: Small and Marginal Farmers (SMFs) owning cultivable land up to 2 hectares (5 acres), aged between 18 and 40 years.',
      'Exclusions: Farmers covered under NPS, EPFO, ESIC, PM-SYM, or taxpayers/institutional landholders are not eligible.',
      '50% Central Government matching co-contribution deposited directly into the pension fund for each active farmer.'
    ],
    risksAndLimitations: [
      'Restricted strictly to small and marginal farmers owning up to 2 hectares of cultivable land.',
      'Discontinuation of auto-debit can lead to lapsed account status until dues are paid.'
    ],
    faqs: [
      {
        question: 'What is the monthly pension and government co-contribution in PM-KMY?',
        answer: 'Farmers receive an assured pension of ₹3,000 per month after age 60. The farmer pays 50% (₹55-₹200/month) and the Central Government pays an equal 50% matching share.'
      },
      {
        question: 'Can my PM-KISAN quarterly installment pay for PM-KMY contributions?',
        answer: 'Yes, farmers can opt to auto-debit their monthly PM-KMY contribution directly from their PM-KISAN ₹6,000 annual financial benefit.'
      },
      {
        question: 'What happens if the farmer passes away after age 60?',
        answer: 'The surviving spouse is entitled to receive 50% of the monthly pension (₹1,500/month) as a family pension for life.'
      }
    ],
    comparisonSlugs: ['atal-pension-yojana', 'national-pension-system'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sdl',
    title: 'State Development Loans (SDL)',
    slug: 'state-development-loans',
    description: 'Sovereign-grade dated debt securities issued by State Governments through Reserve Bank of India fortnightly auctions under the Government Securities Act, 2006, offering attractive yields.',
    authority: 'Reserve Bank of India (RBI) / Respective State Governments',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://retaildirect.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India (RBI)',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit for Retail Non-Competitive Bidding',
    expectedReturn: 'Prevailing State Auction Yield (Typically 25-60 bps spread over Central G-Sec)',
    notifiedRate: 'Auction Cut-off Yield (Semi-Annual Coupon)',
    rateEffectivePeriod: 'Fixed coupon determined at RBI auction',
    tenure: 'Typically 10 Years (Ranges from 3 to 30 Years per tranche)',
    lockInPeriod: 'Tenure of Bond (Liquid in secondary market via NDS-OM and exchanges)',
    riskLevel: 'Low',
    returnMechanism: 'Fixed semi-annual coupon interest paid directly into the investor bank account every 6 months, with principal redeemed at face value upon maturity.',
    depositRules: 'Minimum ₹10,000 (face value ₹100 per unit, min 100 units via RBI Retail Direct) in multiples of ₹10,000. No maximum limit for non-competitive bidding.',
    maturityRules: 'Full principal face value is redeemed upon maturity date by the issuing State Government through RBI.',
    extensionRules: 'No extension; principal is credited directly to the registered bank account upon maturity.',
    withdrawalRules: 'No premature redemption with the issuer; liquidity is obtained by selling the security on the secondary market (NDS-OM or stock exchanges).',
    prematureClosureRules: 'Can be sold on secondary market platforms (RBI Retail Direct NDS-OM screen, NSE, or BSE) at prevailing market prices.',
    loanFacilityRules: 'SDL securities can be pledged with commercial banks as collateral for loans and are eligible for repo borrowing.',
    taxTreatment: 'Coupon interest is fully taxable as "Income from Other Sources" at individual slab rates. Capital gains on sale before maturity are taxed under debt security provisions. No TDS applies on retail SDL held in Retail Direct Gilt accounts.',
    nominationRules: 'Nomination facility available via RBI Retail Direct Gilt Account (single or multiple nominees with percentage allocation).',
    accountOpeningProcess: [
      'Open a free RBI Retail Direct Gilt Account online at retaildirect.rbi.org.in.',
      'Complete online KYC using Aadhaar and PAN verification.',
      'Participate in scheduled fortnightly Tuesday SDL auctions via non-competitive bidding.',
      'Pay via UPI or Net Banking; allotted SDL units are credited to your Gilt account.'
    ],
    whereToInvest: 'Online through RBI Retail Direct portal (retaildirect.rbi.org.in) with zero brokerage/custody fee, or through registered SEBI stockbrokers on NSE/BSE.',
    requiredDocuments: [
      'Permanent Account Number (PAN)',
      'Aadhaar Card for digital e-KYC',
      'Bank Account details (Cancelled Cheque / Bank Statement with IFSC)',
      'Valid Email ID and Mobile Number linked with Aadhaar'
    ],
    importantRules: [
      'Sovereign Status: State Government borrowings are managed and serviced directly by RBI with automatic debit mechanisms on state accounts, ensuring zero credit default.',
      'SLR Eligible: Qualifies as Statutory Liquidity Ratio (SLR) security for commercial banks.',
      'Retail Non-Competitive Bidding allows individual investors to secure the cut-off yield without placing speculative bids.'
    ],
    risksAndLimitations: [
      'Secondary market trading volume for specific state tranches can vary in liquidity.',
      'Subject to interest rate risk: bond prices fluctuate inversely with market interest rate movements if sold prior to maturity.'
    ],
    faqs: [
      {
        question: 'What is a State Development Loan (SDL) and how safe is it?',
        answer: 'SDLs are dated sovereign debt securities issued by State Governments through RBI auctions. They carry sovereign safety because RBI directly services the principal and coupon payments.'
      },
      {
        question: 'How much higher is the yield on SDL compared to Central Government G-Secs?',
        answer: 'SDLs typically trade at an attractive spread of 25 to 60 basis points (0.25% to 0.60%) higher yield compared to corresponding central government securities.'
      },
      {
        question: 'Can retail investors buy SDLs with zero commission?',
        answer: 'Yes, retail investors can open a free RBI Retail Direct Gilt Account and bid in SDL primary auctions without paying any brokerage or custody fees.'
      }
    ],
    comparisonSlugs: ['floating-rate-savings-bonds', 'sovereign-green-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-54ec',
    title: '54EC Capital Gains Tax Exemption Bonds',
    slug: '54ec-capital-gains-bonds',
    description: 'Long-term specified infrastructure bonds issued by notified PSUs (REC, PFC, NHAI, IRFC) under Section 54EC of the Income Tax Act, 1961, providing 100% LTCG tax exemption on real estate property sales.',
    authority: 'Ministry of Finance / Income Tax Department / REC Ltd / PFC Ltd / NHAI / IRFC',
    category: 'Tax Saving Bonds',
    status: 'OPEN',
    sourceUrl: 'https://incometaxindia.gov.in',
    sourceAuthority: 'Income Tax Department, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 5000000,
    expectedReturn: '5.25% p.a. (Annual Coupon Payout)',
    notifiedRate: '5.25% per annum',
    rateEffectivePeriod: 'Notified Annual Rate',
    tenure: '5 Years Fixed',
    lockInPeriod: '5 Years Mandatory',
    riskLevel: 'Low',
    returnMechanism: 'Simple annual coupon interest paid annually directly into the investor bank account, with principal redeemed at face value upon completion of 5 years.',
    depositRules: 'Minimum ₹10,000 (1 bond at ₹10,000 face value). Maximum ₹50,00,000 (₹50 Lakh) per individual/investor across all issuers in a financial year.',
    maturityRules: 'Bonds are automatically redeemed at par (₹10,000 per bond) upon completion of 5 years from the date of allotment.',
    extensionRules: 'No extension provision; redemption proceeds are credited to the bank account upon 5-year maturity.',
    withdrawalRules: 'No premature withdrawals or partial encashment permitted under statutory Section 54EC rules.',
    prematureClosureRules: 'Premature redemption is strictly prohibited. Pledging the bond or taking a loan against it converts the capital gains back to taxable income in the year of such violation.',
    loanFacilityRules: 'Bonds CANNOT be pledged, assigned, mortgaged, or hypothecated as security for any loan. Taking any advance against 54EC bonds violates statutory tax exemption conditions.',
    taxTreatment: 'Long-Term Capital Gains (LTCG) arising from the sale of land, building, or both are 100% exempt from capital gains tax up to ₹50 Lakh. Annual coupon interest of 5.25% is taxable as income under individual slab. No TDS is deducted if Form 15G/15H is submitted or if interest is below statutory threshold.',
    nominationRules: 'Nomination facility available (single or multiple nominees with proportionate percentage allocation).',
    accountOpeningProcess: [
      'Download application form from authorized PSU websites (REC Ltd, PFC Ltd, NHAI, or IRFC) or apply through your demat broker/bank.',
      'Attach copy of real estate sale deed / capital gains computation, PAN card, Aadhaar card, and cancelled cheque.',
      'Deposit funds via RTGS/NEFT or account payee cheque/draft within 6 months of property sale.',
      'Receive physical Bond Certificate or electronic credit in your Demat account.'
    ],
    whereToInvest: 'Directly with authorized issuer collection banks (SBI, HDFC, ICICI, Canara, Axis) and designated portals of REC Ltd, PFC Ltd, NHAI, and IRFC.',
    requiredDocuments: [
      '54EC Bond Application Form',
      'PAN Card (Mandatory)',
      'Proof of Identity and Address (Aadhaar / Passport)',
      'Cancelled cheque showing bank account number and IFSC',
      'Copy of property sale deed demonstrating long-term capital asset transfer within the last 6 months'
    ],
    importantRules: [
      '6-Month Rule: Investment must be executed strictly within 6 months from the date of transfer/sale of the original long-term real estate asset.',
      'Eligible Assets: Exemption applies exclusively to LTCG arising from transfer of land or building (or both). Does not apply to equity, gold, or other asset classes.',
      'Cap of ₹50 Lakh: Total exemption cannot exceed ₹50,00,000 in the financial year of transfer and subsequent financial year.',
      'Mandatory 5-Year Lock-in: Lock-in period was amended from 3 years to 5 years by the Finance Act, 2018.'
    ],
    risksAndLimitations: [
      'Non-negotiable, non-transferable, and non-pledgeable for 5 full years.',
      'Annual interest of 5.25% is fully taxable as per your income tax slab.'
    ],
    faqs: [
      {
        question: 'What is the deadline to invest in 54EC bonds after selling property?',
        answer: 'You must invest in 54EC bonds within exactly 6 months from the date of transfer/sale of the long-term real estate asset to claim tax exemption.'
      },
      {
        question: 'What is the maximum investment limit in 54EC Capital Gains Bonds?',
        answer: 'The maximum allowable investment limit is ₹50,00,000 (₹50 Lakh) per investor across all notified issuers in a financial year.'
      },
      {
        question: 'Can I take a loan against 54EC bonds?',
        answer: 'No. Pledging or taking a loan against 54EC bonds is legally prohibited and revokes your tax exemption, making the entire capital gain taxable.'
      }
    ],
    comparisonSlugs: ['public-provident-fund', 'floating-rate-savings-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sgrn',
    title: 'Sovereign Green Bonds (SGrB)',
    slug: 'sovereign-green-bonds',
    description: 'Government of India green debt securities issued through scheduled RBI auctions under the Sovereign Green Bond Framework (2022) to finance public sector clean energy and climate resilience infrastructure.',
    authority: 'Ministry of Finance / Reserve Bank of India (RBI)',
    category: 'Green Sovereign Securities',
    status: 'AUCTION BASED / TRANCHE ISSUED',
    sourceUrl: 'https://rbi.org.in',
    sourceAuthority: 'Ministry of Finance & Reserve Bank of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit for Retail Non-Competitive Bidding',
    expectedReturn: 'Sovereign Coupon Auction Yield (e.g. 7.10% to 7.33% across 5-Yr, 10-Yr, 30-Yr tranches)',
    notifiedRate: 'Tranche Specific Auction Yield (Semi-Annual Coupon)',
    rateEffectivePeriod: 'Issued periodically via RBI auction borrowing calendar',
    tenure: 'Tranche Specific: 5 Years, 10 Years, or 30 Years',
    lockInPeriod: 'Tenure of Bond (Freely tradable on secondary market)',
    riskLevel: 'Low',
    returnMechanism: 'Fixed semi-annual coupon interest paid directly into the investor bank account every 6 months, with principal redeemed at face value upon maturity.',
    depositRules: 'Minimum ₹10,000 (100 units at face value ₹100 per unit via RBI Retail Direct) in multiples of ₹10,000. Available during announced issuance tranches.',
    maturityRules: 'Redeemed at par (100% of face value) by the Government of India on the notified maturity date.',
    extensionRules: 'No extension; principal face value is refunded directly to the registered bank account upon maturity.',
    withdrawalRules: 'No direct encashment with the government; liquidity is accessible via secondary market trading on NDS-OM or stock exchanges.',
    prematureClosureRules: 'Investors can sell their holdings on the secondary debt market through the RBI Retail Direct portal or stock exchanges at prevailing market prices.',
    loanFacilityRules: 'Eligible for repo transactions and can be pledged with scheduled commercial banks as loan security.',
    taxTreatment: 'Coupon interest is fully taxable as "Income from Other Sources" at applicable income tax slab rates. Capital gains on secondary market transfers follow standard listed government securities tax rules. No TDS in RBI Retail Direct Gilt accounts.',
    nominationRules: 'Nomination facility available via RBI Retail Direct Gilt Account.',
    accountOpeningProcess: [
      'Open an RBI Retail Direct Gilt Account online at retaildirect.rbi.org.in.',
      'Monitor the Reserve Bank of India / Ministry of Finance indicative borrowing calendar for Sovereign Green Bond auction announcements.',
      'Place non-competitive bids during the primary auction window.',
      'Make payment via UPI or Net Banking; allotted green bonds are credited directly to your Gilt account.'
    ],
    whereToInvest: 'Primary auctions via RBI Retail Direct portal (retaildirect.rbi.org.in) and secondary debt market trading on NDS-OM / NSE / BSE.',
    requiredDocuments: [
      'Permanent Account Number (PAN)',
      'Aadhaar Card for digital KYC verification',
      'Bank Account details (Cancelled Cheque / Bank Statement with IFSC)',
      'Active mobile number and email ID'
    ],
    importantRules: [
      'Tranche-based: Not open on continuous tap; issued via specific scheduled auctions notified by RBI in the government borrowing calendar.',
      'Green Ring-Fencing: Proceeds are deposited in the Consolidated Fund of India and earmarked exclusively for eligible green projects (renewable energy, clean transportation, energy efficiency, climate change adaptation) vetted by the Green Finance Working Committee.',
      'Second-Party Opinion: Evaluated by CICERO (Center for International Climate Research) with "Medium Green" rating and "Excellent" governance score.'
    ],
    risksAndLimitations: [
      'Subject to interest rate market price fluctuations if sold on secondary market before maturity.',
      'Periodic auction availability rather than continuous on-demand subscription.'
    ],
    faqs: [
      {
        question: 'What makes Sovereign Green Bonds (SGrB) different from regular G-Secs?',
        answer: 'SGrBs are sovereign debt securities whose proceeds are ring-fenced and utilized exclusively for certified green public projects such as solar, wind, metro rail, and clean energy.'
      },
      {
        question: 'Are Sovereign Green Bonds continuously available for purchase?',
        answer: 'No. Sovereign Green Bonds are issued through periodic auctions notified by RBI in the Government of India borrowing calendar, or can be bought on the secondary market via RBI Retail Direct.'
      },
      {
        question: 'Is the interest earned from Sovereign Green Bonds tax-free?',
        answer: 'No. Coupon interest from Sovereign Green Bonds is fully taxable at your applicable income tax slab rate, identical to regular Central Government Securities.'
      }
    ],
    comparisonSlugs: ['state-development-loans', 'floating-rate-savings-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  }
];
