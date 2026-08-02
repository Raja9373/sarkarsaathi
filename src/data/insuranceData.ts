export interface GovtInsuranceCompany {
  id: string;
  name: string;
  hindiName: string;
  category: 'Life Insurance' | 'General Insurance' | 'Specialized & Agriculture' | 'Postal & Social Security' | 'Health Insurance Scheme';
  ownership: string;
  headOffice: string;
  delhiOffice: string;
  officialWebsite: string;
  portalUrl: string;
  helpline: string;
  keyProducts: string[];
  keyFeatures: string[];
  claimProcess: string;
  irdaRegistrationNo?: string;
  isPopular?: boolean;
}

export const GOVT_INSURANCE_COMPANIES: GovtInsuranceCompany[] = [
  {
    id: 'lic',
    name: 'Life Insurance Corporation of India (LIC)',
    hindiName: 'भारतीय जीवन बीमा निगम (एलआईसी)',
    category: 'Life Insurance',
    ownership: 'Government of India Public Sector Undertaking (Under LIC Act 1956)',
    headOffice: 'Yogakshema Building, Jeevan Bima Marg, Nariman Point, Mumbai - 400021',
    delhiOffice: 'Jeevan Deep Building, Parliament Street, Connaught Place, New Delhi - 110001 (Zonal Office: 011-23742001)',
    officialWebsite: 'https://licindia.in',
    portalUrl: 'https://ebiz.licindia.in',
    helpline: '022-68276827 / 1800 425 9876',
    irdaRegistrationNo: 'IRDAI Reg. 512',
    keyProducts: [
      'LIC Jeevan Umang (Whole Life Assurance)',
      'LIC Jeevan Anand (Endowment Assurance)',
      'LIC Tech Term Plan (Online pure term insurance)',
      'LIC Nivesh Plus (ULIP plan)',
      'LIC Pradhan Mantri Vaya Vandana Yojana (Senior Citizen Pension)'
    ],
    keyFeatures: [
      '100% Sovereign Guarantee by Govt. of India under Section 37 of LIC Act 1956',
      'Over 28 Crore active policies across India',
      'Online premium payment via UPI, Credit Card, Net Banking without login',
      'Instant policy loan availability up to 90% of surrender value'
    ],
    claimProcess: 'Submit original policy bond, claim form 3783, NEFT bank details, and death certificate (for death claims) at home LIC branch or any Delhi divisional branch.',
    isPopular: true
  },
  {
    id: 'niacl',
    name: 'The New India Assurance Company Limited (NIACL)',
    hindiName: 'दि न्यू इंडिया एश्योरेंस कंपनी लिमिटेड',
    category: 'General Insurance',
    ownership: '100% Government of India Owned Public Sector Undertaking',
    headOffice: '87, Mahatma Gandhi Road, Fort, Mumbai - 400001',
    delhiOffice: 'Delhi Regional Office I: Asaf Ali Road, Daryaganj | Office II: NBCC Complex, Kidwai Nagar East, New Delhi',
    officialWebsite: 'https://newindia.co.in',
    portalUrl: 'https://newindia.co.in/portal/online-renewal',
    helpline: '1800 209 1415 / 022-22638000',
    irdaRegistrationNo: 'IRDAI Reg. 190',
    keyProducts: [
      'New India Mediclaim Policy (Individual & Family Floater)',
      'Arogya Sanjeevani Policy (Standard Health Insurance)',
      'New India Motor Insurance (Car, Bike, Commercial Vehicles)',
      'Global Mediclaim & Overseas Travel Insurance',
      'Personal Accident & Shopkeeper Insurance'
    ],
    keyFeatures: [
      'India’s largest multinational general insurance company with AAA Rating',
      'Cashless hospitalisation across 10,000+ empanelled hospitals',
      'Instant online policy renewal and e-policy PDF download',
      'No Claim Bonus (NCB) up to 50% on vehicle and health policies'
    ],
    claimProcess: 'Intimate claim online at newindia.co.in or call 18002091415 within 24 hours. For cashless health claims, submit TPA pre-authorization at hospital TPA desk.',
    isPopular: true
  },
  {
    id: 'nicl',
    name: 'National Insurance Company Limited (NICL)',
    hindiName: 'नेशनल इंश्योरेंस कंपनी लिमिटेड',
    category: 'General Insurance',
    ownership: 'Government of India Public Sector Undertaking',
    headOffice: '3, Middleton Street, Kolkata - 700071',
    delhiOffice: 'Delhi Regional Office: Scope Minar, Core 3, Laxmi Nagar / 2E/9, Jhandewalan Extension, New Delhi',
    officialWebsite: 'https://nationalinsurance.nic.co.in',
    portalUrl: 'https://nationalinsurance.nic.co.in/en/pay-premium-online',
    helpline: '1800 345 0330 / 033-22831705',
    irdaRegistrationNo: 'IRDAI Reg. 058',
    keyProducts: [
      'National Parivar Mediclaim Policy (Family Health Insurance)',
      'National Senior Citizen Mediclaim Policy',
      'National Motor & Two Wheeler Package Insurance',
      'National Overseas Mediclaim Policy',
      'SAMPORNA Suraksha Individual Personal Accident'
    ],
    keyFeatures: [
      'Oldest public sector general insurance company in India (established 1906)',
      'Widespread branch network across all Delhi NCR districts',
      'Online cashless claim tracking and instant policy endorsement',
      'Special health insurance schemes for senior citizens with pre-existing disease cover options'
    ],
    claimProcess: 'Register claim through National Insurance Customer Portal or mobile app. Submit claim form with original bills and prescription to TPA within 15 days.',
    isPopular: true
  },
  {
    id: 'oicl',
    name: 'The Oriental Insurance Company Limited (OICL)',
    hindiName: 'दि ओरिएंटल इंश्योरेंस कंपनी लिमिटेड',
    category: 'General Insurance',
    ownership: 'Government of India Public Sector Undertaking',
    headOffice: 'Oriental House, A-25/27, Asaf Ali Road, New Delhi - 110002',
    delhiOffice: 'Head Office & Regional Office: Oriental House, A-25/27, Asaf Ali Road, Near Delhi Gate, New Delhi - 110002 (011-23279221)',
    officialWebsite: 'https://orientalinsurance.org.in',
    portalUrl: 'https://orientalinsurance.org.in/quick-renewal',
    helpline: '1800 11 8485 / 011-23279221',
    irdaRegistrationNo: 'IRDAI Reg. 556',
    keyProducts: [
      'Oriental Individual Mediclaim Policy',
      'Happy Family Floater Policy',
      'Oriental Motor Private Car & Two Wheeler Policy',
      'Nagrik Suraksha Policy (Accident & Hospital Cash)',
      'Oriental Trade & Shopkeeper Insurance'
    ],
    keyFeatures: [
      'Headquartered in New Delhi with extensive capital region footprint',
      'Online premium discount up to 10% for direct web purchases',
      'In-house TPA claims processing for hassle-free hospital bills settlement',
      '24x7 online motor policy renewal with instant inspection upload'
    ],
    claimProcess: 'Notify claim at orientalinsurance.org.in or visit Oriental House, Delhi Gate. For motor accident claims, submit FIR copy, DL, RC, and repair estimate.',
    isPopular: true
  },
  {
    id: 'uiic',
    name: 'United India Insurance Company Limited (UIIC)',
    hindiName: 'यूनाइटेड इंडिया इंश्योरेंस कंपनी लिमिटेड',
    category: 'General Insurance',
    ownership: 'Government of India Public Sector Undertaking',
    headOffice: '24, Whites Road, Royapettah, Chennai - 600014',
    delhiOffice: 'Delhi Regional Office: Kanchenjunga Building, 8th Floor, 18, Barakhamba Road, Connaught Place, New Delhi - 110001 (011-23313136)',
    officialWebsite: 'https://uiic.co.in',
    portalUrl: 'https://uiic.co.in/pay-online',
    helpline: '1800 425 33333 / 044-28520161',
    irdaRegistrationNo: 'IRDAI Reg. 545',
    keyProducts: [
      'UIIC Family Medicare Policy',
      'UIIC Individual Health Insurance Policy',
      'UIIC Super Top-Up Health Insurance',
      'UIIC Motor & Commercial Vehicle Insurance',
      'Pradhan Mantri Fasal Bima Yojana (Crop Insurance)'
    ],
    keyFeatures: [
      'Over 1.7 Crore policies issued annually with robust public trust',
      'Cashless claim network in over 7,500 hospitals nationwide',
      'Instant policy renewal using Policy Number or Vehicle Registration Number',
      'Specialized micro-insurance products for rural and low-income families'
    ],
    claimProcess: 'Initiate claim on UIIC website or mobile app. For health cashless claim, inform hospital TPA desk 48 hours prior to planned admission.',
    isPopular: true
  },
  {
    id: 'pli-rpli',
    name: 'Postal Life Insurance (PLI) & Rural Postal Life Insurance (RPLI)',
    hindiName: 'डाक जीवन बीमा (पीएलआई) एवं ग्रामीण डाक जीवन बीमा (आरपीएलआई)',
    category: 'Postal & Social Security',
    ownership: 'Department of Posts, Ministry of Communications, Govt. of India',
    headOffice: 'Directorate of Postal Life Insurance, Chanakyapuri Post Office Complex, New Delhi - 110021',
    delhiOffice: 'Delhi Postal Circle: Meghdoot Bhawan, Link Road, New Delhi - 110001 & 1,800+ Post Offices in Delhi NCR',
    officialWebsite: 'https://pli.indiapost.gov.in',
    portalUrl: 'https://pli.indiapost.gov.in/CustomerPortal/login.action',
    helpline: '1800 266 6868 / 011-23096073',
    keyProducts: [
      'Suraksha (Whole Life Assurance - PLI)',
      'Santosh (Endowment Assurance - PLI)',
      'Suvidha (Convertible Whole Life Assurance)',
      'Yugal Suraksha (Joint Life Assurance)',
      'Gram Santosh & Gram Suraksha (Rural Postal Life Insurance)'
    ],
    keyFeatures: [
      'Highest bonus rate and lowest premium among all life insurers in India',
      'Available for Central & State Govt employees, Defence forces, Teachers, Doctors, Engineers, Lawyers & Rural Citizens',
      '100% Sovereign Guarantee by Govt. of India',
      'Pay premium at any Post Office counter or online via IPPB app / PLI portal'
    ],
    claimProcess: 'Submit PLI/RPLI claim form along with original policy document, premium receipt book, and bank passbook to any Head Post Office in Delhi NCR.',
    isPopular: true
  },
  {
    id: 'esic',
    name: 'Employees’ State Insurance Corporation (ESIC)',
    hindiName: 'कर्मचारी राज्य बीमा निगम (ईएसआईसी)',
    category: 'Postal & Social Security',
    ownership: 'Statutory Body under Ministry of Labour & Employment, Govt. of India',
    headOffice: 'Panchdeep Bhawan, Comrade Indrajit Gupta Marg, ITO, New Delhi - 110002',
    delhiOffice: 'Delhi Regional Office: Rajendra Bhawan, Rajendra Place, New Delhi - 110008 (Helpline: 011-25734381)',
    officialWebsite: 'https://www.esic.gov.in',
    portalUrl: 'https://www.esic.in/EmployeePortal/login.aspx',
    helpline: '1800 11 2526 / 011-23234092',
    keyProducts: [
      'ESIC Full Medical Care (OPD & IPD for insured worker & family)',
      'Sickness Benefit (70% cash wages during certified illness up to 91 days)',
      'Maternity Benefit (100% full wages for 26 weeks for female employees)',
      'Disablement & Dependent Pension for work-related accidents',
      'Atal Beemit Vyakti Kalyan Yojana (Unemployment cash benefit)'
    ],
    keyFeatures: [
      'Mandatory social health security for employees earning gross salary up to ₹21,000/month (₹25,000 for PwD)',
      'Free complete medical treatment at 1,500+ ESIC Dispensaries and 150+ ESIC Hospitals in Delhi NCR',
      'Instant e-Pehchan Identity Card generation on ESIC Portal',
      'Super-specialty treatment referral to top private hospitals at zero cost'
    ],
    claimProcess: 'Present ESIC Pehchan Card / Pehchan Mobile App at ESIC Dispensary or Hospital. Employer registers claims online via ESIC Portal for cash benefits.',
    isPopular: true
  },
  {
    id: 'aicil',
    name: 'Agriculture Insurance Company of India Limited (AICIL)',
    hindiName: 'भारतीय कृषि बीमा कंपनी लिमिटेड',
    category: 'Specialized & Agriculture',
    ownership: 'Govt. Sponsored Company (Promoted by NABARD, GIC Re, LIC, and 4 Public Insurers)',
    headOffice: 'Plate B&C, 5th Floor, Office Block 1, East Kidwai Nagar, New Delhi - 110023',
    delhiOffice: 'Head Office: East Kidwai Nagar, New Delhi - 110023 (011-24104129)',
    officialWebsite: 'https://www.aicofindia.com',
    portalUrl: 'https://pmfby.gov.in',
    helpline: '1800 11 6554 / 011-24104129',
    irdaRegistrationNo: 'IRDAI Reg. 126',
    keyProducts: [
      'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      'Restructured Weather Based Crop Insurance Scheme (RWBCIS)',
      'Coconut Palm Insurance Scheme (CPIS)',
      'Bio-Fuel Tree Insurance Policy'
    ],
    keyFeatures: [
      'World’s largest crop insurance company covering millions of farmers',
      'Protects against drought, flood, hailstorm, pest attack, and post-harvest losses',
      'Nominal farmer premium (1.5% for Rabi, 2% for Kharif, 5% for Commercial crops)',
      'Direct Benefit Transfer (DBT) of crop claim payout straight into farmer bank account'
    ],
    claimProcess: 'Report crop loss within 72 hours on PMFBY Farmer App or toll-free 1800116554. Joint survey conducted by Agriculture Officer & AICIL team for claim payout.',
    isPopular: false
  },
  {
    id: 'ecgc',
    name: 'ECGC Limited (Export Credit Guarantee Corporation)',
    hindiName: 'ईसीजीसी लिमिटेड (निर्यात साख गारंटी निगम)',
    category: 'Specialized & Agriculture',
    ownership: 'Wholly Owned Government of India Enterprise (Ministry of Commerce & Industry)',
    headOffice: 'Express Towers, 10th Floor, Nariman Point, Mumbai - 400021',
    delhiOffice: 'Delhi Regional Office: Jeevan Deep Building, 5th Floor, Parliament Street, CP, New Delhi - 110001 (011-23342080)',
    officialWebsite: 'https://www.ecgc.in',
    portalUrl: 'https://www.ecgc.in/online-services/',
    helpline: '1800 22 4500 / 022-66590500',
    irdaRegistrationNo: 'IRDAI Reg. 124',
    keyProducts: [
      'ECGC Export Credit Insurance for Exporters',
      'Buyer Exposure Policies (Commercial & Political risk cover)',
      'Export Credit Insurance for Banks (Packing Credit & Post-Shipment)',
      'Overseas Investment Insurance for Indian Investors'
    ],
    keyFeatures: [
      'Protects Indian exporters against non-payment by foreign buyers due to insolvency or political turmoil',
      'Helps exporters obtain collateral-free pre-shipment export credit from commercial banks',
      'Covers up to 90% of credit loss incurred in international trade'
    ],
    claimProcess: 'Submit Default Intimation Notice on ECGC portal within 30 days of payment due date. File formal claim along with export documents & bill of lading.',
    isPopular: false
  },
  {
    id: 'gic-re',
    name: 'General Insurance Corporation of India (GIC Re)',
    hindiName: 'भारतीय सामान्य बीमा निगम (जीआईसी रे)',
    category: 'Specialized & Agriculture',
    ownership: '100% Government of India Owned National Reinsurer',
    headOffice: 'Suraksha, 170, J. Tata Road, Churchgate, Mumbai - 400020',
    delhiOffice: 'Delhi Liaison Office: Core-5A, 5th Floor, India Habitat Centre, Lodhi Road, New Delhi - 110003',
    officialWebsite: 'https://www.gicre.in',
    portalUrl: 'https://www.gicre.in',
    helpline: '022-22867000 / 011-24601131',
    irdaRegistrationNo: 'IRDAI Reg. 008',
    keyProducts: [
      'Reinsurance for Property, Fire, Aviation, Marine, Energy, & Engineering',
      'Nuclear Energy Risk Pool Management',
      'Terrorism & Disaster Risk Pool Reinsurance',
      'Life Reinsurance for Primary Life Insurers'
    ],
    keyFeatures: [
      'Sole Indian public sector reinsurance company operating globally in 160+ countries',
      'Ranked among top 15 international reinsurers by AM Best',
      'Provides financial backing and risk capacity to all Indian direct insurance companies'
    ],
    claimProcess: 'Reinsurance claims handled B2B with direct primary insurance companies and IRDAI regulated underwriters.',
    isPopular: false
  },
  {
    id: 'pmjjby',
    name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    hindiName: 'प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)',
    category: 'Health Insurance Scheme',
    ownership: 'Govt. Sponsored Scheme (Administered by LIC, Public Banks & Post Offices)',
    headOffice: 'Department of Financial Services (DFS), Ministry of Finance, Govt. of India, New Delhi',
    delhiOffice: 'Available at all State Bank of India, PNB, BOB, Post Office & Bank Branches in Delhi',
    officialWebsite: 'https://www.jansuraksha.gov.in',
    portalUrl: 'https://www.jansuraksha.gov.in/Forms-PMJJBY.aspx',
    helpline: '1800 180 1111 / 1800 110 001',
    keyProducts: [
      '₹2,00,000 (Two Lakh Rupees) Life Insurance Cover on death due to any reason',
      'Annual Premium: ₹436/year (Auto-debited from bank savings account)',
      'Eligibility: Bank account holders aged 18 to 50 years'
    ],
    keyFeatures: [
      'No medical checkup or health declaration required',
      '1-year renewable life insurance cover from June 1 to May 31',
      'Direct Benefit Transfer (DBT) claim amount credited directly to nominee’s bank account',
      'Over 18 Crore citizens enrolled across India'
    ],
    claimProcess: 'Nominee submits PMJJBY Claim Form, Death Certificate, cancelled cheque, and nominee ID proof at the bank branch where the deceased held the account.',
    isPopular: true
  },
  {
    id: 'pmsby',
    name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    hindiName: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)',
    category: 'Health Insurance Scheme',
    ownership: 'Govt. Sponsored Scheme (Administered by Public General Insurers & Banks)',
    headOffice: 'Department of Financial Services (DFS), Ministry of Finance, Govt. of India, New Delhi',
    delhiOffice: 'Available at all Bank Branches & Post Offices across Delhi NCR',
    officialWebsite: 'https://www.jansuraksha.gov.in',
    portalUrl: 'https://www.jansuraksha.gov.in/Forms-PMSBY.aspx',
    helpline: '1800 180 1111 / 1800 110 001',
    keyProducts: [
      '₹2,00,000 Accidental Death / Permanent Total Disability Cover',
      '₹1,00,000 Permanent Partial Disability Cover',
      'Annual Premium: ₹20/year (Auto-debited from bank savings account)',
      'Eligibility: Bank account holders aged 18 to 70 years'
    ],
    keyFeatures: [
      'Lowest cost accidental insurance policy in the world (₹20 per year)',
      'Covers road accidents, railway accidents, fall, drowning, snakebite, & work accidents',
      'Auto-renewal via single bank mandate'
    ],
    claimProcess: 'Submit PMSBY Claim Form, FIR / Post Mortem report / Disability Certificate, and nominee bank passbook at the bank branch holding the account.',
    isPopular: true
  },
  {
    id: 'pmjay',
    name: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)',
    hindiName: 'आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY)',
    category: 'Health Insurance Scheme',
    ownership: 'National Health Authority (NHA), Ministry of Health & Family Welfare, Govt. of India',
    headOffice: 'National Health Authority, 3rd, 7th & 9th Floor, Tower-l, Jeevan Bharati Building, Connaught Place, New Delhi - 110001',
    delhiOffice: 'Delhi State Health Authority (SHA) / AIIMS, Safdarjung, RML & Empanelled Hospitals in Delhi',
    officialWebsite: 'https://pmjay.gov.in',
    portalUrl: 'https://beneficiary.nha.gov.in',
    helpline: '14555 / 1800 111 555',
    keyProducts: [
      '₹5,00,000 (Five Lakh Rupees) Annual Cashless Health Insurance Cover per family',
      'Covers secondary & tertiary hospitalization, surgeries, ICU, medicines & pre/post hospital expenses',
      'All senior citizens aged 70+ now eligible under AB-PMJAY Senior Citizen Scheme'
    ],
    keyFeatures: [
      '100% Cashless & Paperless treatment at 27,000+ public and private empanelled hospitals',
      'No cap on family size or age of family members',
      'Pre-existing diseases covered from Day 1',
      'Download Ayushman e-Card instantly using Aadhaar OTP on beneficiary.nha.gov.in'
    ],
    claimProcess: 'Present Ayushman Card or Aadhaar Card at the Ayushman Mitra Helpdesk in any empanelled hospital. Hospital handles 100% cashless treatment & billing.',
    isPopular: true
  }
];

export function getFilteredInsuranceCompanies(category: string, query: string): GovtInsuranceCompany[] {
  const cleanQuery = query.trim().toLowerCase();
  return GOVT_INSURANCE_COMPANIES.filter(item => {
    const matchesCategory = category === 'all' || item.category.toLowerCase() === category.toLowerCase();
    if (!cleanQuery) return matchesCategory;

    return matchesCategory && (
      item.name.toLowerCase().includes(cleanQuery) ||
      item.hindiName.includes(cleanQuery) ||
      item.ownership.toLowerCase().includes(cleanQuery) ||
      item.headOffice.toLowerCase().includes(cleanQuery) ||
      item.delhiOffice.toLowerCase().includes(cleanQuery) ||
      item.keyProducts.some(p => p.toLowerCase().includes(cleanQuery))
    );
  });
}
