// src/data/allIndiaServices.ts
// Consolidates pan-India schemes, services, finders, banking, and life events for BharatSaathiChatbot.

import { SERVICES_LIST } from './servicesData';
import { MASTER_YOJANA_LIST } from './yojanaData';
import { MAJOR_BANKS } from './bankingData';
import { FINDER_CATEGORIES } from './findersData';
import { LIFE_EVENTS_LIST } from './lifeEventsData';
import { STATES_LIST, getStateInfo } from './statesData';

export interface ChatbotKnowledgeItem {
  id: string;
  type: 'scheme' | 'service' | 'finder' | 'bank' | 'life_event' | 'state_portal';
  title: string;
  hindiTitle: string;
  state: string; // 'all' | stateId
  keywords: string[];
  summary: string;
  hindiSummary: string;
  benefits?: string;
  eligibility?: string[];
  documents?: string[];
  processSteps?: string[];
  officialUrl: string;
  officialPortalName: string;
  helpline?: string;
  fees?: string;
  internalTab?: string;
  internalId?: string;
}

// Pre-indexed database for fast offline fuzzy matching
export const CHATBOT_KNOWLEDGE_BASE: ChatbotKnowledgeItem[] = [
  // --- CENTRAL SCHEMES ---
  {
    id: 'pm-kisan',
    type: 'scheme',
    title: 'PM Kisan Samman Nidhi Yojana',
    hindiTitle: 'प्रधानमंत्री किसान सम्मान निधि योजना',
    state: 'all',
    keywords: ['pm kisan', 'kisan', 'farmer', 'khedut', 'krishi', 'kisan samman nidhi', 'kisan yojana', '6000', 'kist', 'installment', 'ekyc', 'dbt'],
    summary: 'Direct income support of ₹6,000 per year paid in 3 equal installments of ₹2,000 directly into the bank accounts of all landholding farmer families across India.',
    hindiSummary: 'भारत के सभी भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की प्रत्यक्ष वित्तीय सहायता (₹2,000 की 3 किस्तों में सीधे बैंक खाते में)।',
    benefits: '₹6,000/year in 3 installments (₹2,000 each every 4 months) via Aadhaar DBT',
    eligibility: [
      'Small and marginal landholding farmer families in all States & UTs',
      'Cultivable land registered in applicant’s name in state land revenue records',
      'Bank account must be Aadhaar-seeded with active e-KYC on PM-Kisan portal'
    ],
    documents: ['Aadhaar Card', 'Land Khatiyan / Khasra-Khatauni / Jamabandi', 'Bank Passbook & IFSC', 'Aadhaar-linked Mobile Number'],
    processSteps: [
      'Visit official portal pmkisan.gov.in and click "New Farmer Registration"',
      'Enter Aadhaar Number, State, District, and Mobile Number for OTP verification',
      'Fill landholding survey number, khasra number, area, and upload land records PDF',
      'Complete mandatory e-KYC using OTP or biometric at nearest CSC centre'
    ],
    officialUrl: 'https://pmkisan.gov.in',
    officialPortalName: 'PM-Kisan Official Portal (Ministry of Agriculture)',
    helpline: '155261 / 1800 115 526 (Toll-Free)',
    fees: '₹0 (100% Free Application)',
    internalTab: 'schemes',
    internalId: 'pm-kisan-samman-nidhi'
  },
  {
    id: 'pm-awas-yojana',
    type: 'scheme',
    title: 'Pradhan Mantri Awas Yojana (PMAY - Urban & Gramin)',
    hindiTitle: 'प्रधानमंत्री आवास योजना (शहरी एवं ग्रामीण)',
    state: 'all',
    keywords: ['pm awas', 'awas yojana', 'pmay', 'housing', 'ghar', 'makan', 'home subsidy', 'pucca house', 'pmayg', 'pmayu'],
    summary: 'Central government housing scheme providing financial assistance and interest subsidy up to ₹2.67 Lakh for building or buying a pucca permanent house for poor and middle-class families.',
    hindiSummary: 'कच्चे मकानों में रहने वाले या बेघर परिवारों को पक्का मकान बनाने अथवा खरीदने हेतु ₹1.20 लाख से ₹2.67 लाख तक की सब्सिडी।',
    benefits: 'Up to ₹1.20 Lakh - ₹1.30 Lakh direct grant (Gramin) or up to ₹2.67 Lakh interest subsidy (Urban CLSS)',
    eligibility: [
      'Family must not own a pucca house anywhere in India',
      'Gramin: Listed in SECC 2011 / Awas+ survey list',
      'Urban: EWS (income up to ₹3L), LIG (up to ₹6L), or MIG categories'
    ],
    documents: ['Aadhaar Card of all family members', 'Income Certificate', 'Bank Passbook', 'Land / Property documents or Gram Panchayat NOC', 'BPL / SECC survey number (if available)'],
    processSteps: [
      'For PMAY Gramin: Contact Gram Panchayat / Block Development Officer (BDO) to verify your name in Awas+ list',
      'For PMAY Urban: Visit pmaymis.gov.in -> Citizen Assessment -> Apply Online (or visit CSC)',
      'Enter Aadhaar details, address, family members, income details, and submit application',
      'Track geotagging inspection stages and direct DBT fund release in installments'
    ],
    officialUrl: 'https://pmaymis.gov.in',
    officialPortalName: 'PMAY Urban / PMAY Gramin (Ministry of Housing & Urban Affairs)',
    helpline: '1800 11 3377 / 1800 11 6163 (Toll-Free)',
    fees: '₹0 Free Application',
    internalTab: 'schemes',
    internalId: 'pm-awas-yojana-urban-gramin'
  },
  {
    id: 'ayushman-bharat',
    type: 'scheme',
    title: 'Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)',
    hindiTitle: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (₹5 लाख मुफ्त इलाज)',
    state: 'all',
    keywords: ['ayushman', 'pmjay', 'health card', 'golden card', '5 lakh', 'free hospital', 'ayushman card', 'abha card', 'illness', 'treatment', 'mediclaim'],
    summary: 'Worlds largest health assurance scheme providing cashless hospitalisation cover of up to ₹5 Lakh per family per year across 28,000+ empanelled government and private hospitals in India.',
    hindiSummary: 'प्रति वर्ष प्रति परिवार ₹5,00,000 तक का मुफ्त व कैशलेस इलाज भारत के सभी सूचीबद्ध सरकारी व प्राइवेट अस्पतालों में।',
    benefits: '₹5,00,000 per family per year for secondary and tertiary hospital care (cashless & paperless)',
    eligibility: [
      'Households identified in SECC 2011 database / NFSA ration card database',
      'Senior citizens aged 70+ (under newly expanded Ayushman Vaya Vandana Yojana)',
      'Unorganized workers, BPL families, and state-specific eligible welfare beneficiaries'
    ],
    documents: ['Aadhaar Card', 'Ration Card / PM Letter / Family ID', 'Active Mobile Number for OTP'],
    processSteps: [
      'Visit beneficiary.nha.gov.in or download the Ayushman App',
      'Enter your mobile number and authenticate via OTP',
      'Search your family name using State, District, and Aadhaar or Ration Card number',
      'Complete instant e-KYC by taking a live selfie and Aadhaar OTP validation',
      'Download your Ayushman PVC / Digital Card PDF instantly with official QR code'
    ],
    officialUrl: 'https://beneficiary.nha.gov.in',
    officialPortalName: 'National Health Authority (NHA)',
    helpline: '14555 / 1800 111 565 (Toll-Free 24x7)',
    fees: '₹0 (100% Free)',
    internalTab: 'schemes',
    internalId: 'pm-jan-arogya-yojana'
  },
  {
    id: 'pm-ujjwala',
    type: 'scheme',
    title: 'Pradhan Mantri Ujjwala Yojana 2.0 (Free LPG Connection)',
    hindiTitle: 'प्रधानमंत्री उज्ज्वला योजना 2.0 (मुफ्त गैस कनेक्शन व सब्सिडी)',
    state: 'all',
    keywords: ['ujjwala', 'gas', 'lpg', 'cylinder', 'free gas', 'indane', 'hp gas', 'bharat gas', 'chulha', 'pmuy'],
    summary: 'Provides deposit-free LPG connection along with free first refill and stove to adult women from poor and low-income households across all states.',
    hindiSummary: 'गरीब व निर्धन परिवारों की वयस्क महिलाओं को मुफ्त गैस कनेक्शन, पहला भरा हुआ गैस सिलेंडर तथा चूल्हा प्रदान किया जाता है।',
    benefits: 'Deposit-free LPG connection + Free first cylinder + Free gas stove + ₹300 per cylinder DBT subsidy',
    eligibility: [
      'Adult woman (aged 18+) belonging to poor/SC/ST/BPL/AAY/PMAY household',
      'No other member in the same household must have an existing LPG connection'
    ],
    documents: ['Aadhaar Card of Applicant & adult family members', 'Ration Card / Family Composition Certificate', 'Bank Account Passbook (Aadhaar linked)', 'Address Proof'],
    processSteps: [
      'Visit pmuy.gov.in and click "Apply for New Ujjwala 2.0 Connection"',
      'Choose your preferred LPG distributor: Indane, Bharatgas, or HP Gas',
      'Fill basic details, upload Aadhaar, Ration card, and submit application online (or submit form at local LPG agency)',
      'LPG distributor conducts KYC check and delivers connection to your home'
    ],
    officialUrl: 'https://www.pmuy.gov.in',
    officialPortalName: 'Ministry of Petroleum and Natural Gas',
    helpline: '1800 266 6696 / 1906 (LPG Emergency Helpline)',
    fees: '₹0 (100% Free)',
    internalTab: 'schemes',
    internalId: 'pm-ujjwala-yojana-2'
  },
  {
    id: 'pm-mudra-yojana',
    type: 'scheme',
    title: 'Pradhan Mantri MUDRA Yojana (Business Loans up to ₹20 Lakh)',
    hindiTitle: 'प्रधानमंत्री मुद्रा योजना (व्यापार व स्वरोजगार ऋण)',
    state: 'all',
    keywords: ['mudra', 'loan', 'business loan', 'shishu', 'kishore', 'tarun', 'vyapar', 'self employed', 'msme', 'startup'],
    summary: 'Collateral-free loans for small businesses, shopkeepers, artisans, and entrepreneurs under three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun (up to ₹20 Lakh).',
    hindiSummary: 'बिना किसी गारंटी के छोटे दुकानदारों, व्यापारियों एवं उद्यमियों को ₹50,000 से लेकर ₹20 लाख तक का व्यवसाय ऋण।',
    benefits: 'Collateral-free loans with subsidized interest rates and affordable repayment tenure of 3-7 years',
    eligibility: ['Any Indian citizen with a viable non-farm business idea or existing micro-enterprise (manufacturing, trade, services)'],
    documents: ['Aadhaar & PAN Card', 'Business address proof / Udyam Registration', 'Last 6 months bank statement', 'Quotation of machinery/goods to be purchased', 'Project report'],
    processSteps: [
      'Visit udyamimitra.in or approach any Commercial Bank, RRB, or Small Finance Bank',
      'Select loan category: Shishu (up to ₹50k), Kishore (up to ₹5L), or Tarun (up to ₹20L)',
      'Submit loan proposal with business identity and bank statement',
      'Bank evaluates viability and disburses loan amount directly to supplier or business account'
    ],
    officialUrl: 'https://www.mudra.org.in',
    officialPortalName: 'MUDRA Official Portal / UdyamiMitra',
    helpline: '1800 180 1111 / 1800 11 0001 (National Helpline)',
    fees: 'No processing fee for Shishu loans',
    internalTab: 'schemes',
    internalId: 'pm-mudra-yojana'
  },
  {
    id: 'pm-svanidhi',
    type: 'scheme',
    title: 'PM SVANidhi Scheme (Street Vendors Micro-Credit)',
    hindiTitle: 'पीएम स्वनिधि योजना (स्ट्रीट वेंडर्स व रेहड़ी-पटरी ऋण)',
    state: 'all',
    keywords: ['svanidhi', 'vendor', 'rehri', 'patri', 'thela', 'street vendor loan', '10000', '20000', '50000'],
    summary: 'Working capital micro-loans of ₹10,000 (1st tranche), ₹20,000 (2nd tranche), and ₹50,000 (3rd tranche) with 7% interest subsidy and cashback on digital transactions.',
    hindiSummary: 'रेहड़ी-पटरी एवं ठेला लगाने वाले छोटे दुकानदारों को बिना गारंटी ₹10,000, ₹20,000 और ₹50,000 तक का सस्ता कार्यशील ऋण।',
    benefits: 'Collateral-free loans + 7% interest subsidy credited directly to bank + up to ₹1,200 annual digital cashback',
    eligibility: ['Street vendors possessing Certificate of Vending / Identity Card issued by Urban Local Bodies (ULBs)'],
    documents: ['Aadhaar Card', 'Vending Certificate / Letter of Recommendation (LoR)', 'Aadhaar-linked Bank Account'],
    processSteps: ['Apply online at pmsvanidhi.mohua.gov.in or through Banking Correspondent / CSC', 'Lender verifies and disburses loan within 7-15 days'],
    officialUrl: 'https://pmsvanidhi.mohua.gov.in',
    officialPortalName: 'Ministry of Housing and Urban Affairs',
    helpline: '1800 11 1979',
    fees: '₹0 Free',
    internalTab: 'schemes',
    internalId: 'pm-svanidhi-scheme'
  },
  {
    id: 'sukanya-samriddhi',
    type: 'scheme',
    title: 'Sukanya Samriddhi Yojana (SSY for Girl Child)',
    hindiTitle: 'सुकन्या समृद्धि योजना (बालिका बचत व उच्च शिक्षा योजना)',
    state: 'all',
    keywords: ['sukanya', 'ssy', 'beti', 'girl child', 'post office scheme', 'tax saving', '80c', 'high interest'],
    summary: 'Government-backed high-yield savings scheme for girl children (below 10 years) offering 8.2%+ interest rate with complete Section 80C tax exemption (EEE model).',
    hindiSummary: '10 वर्ष से कम उम्र की बालिकाओं के लिए सर्वाधिक ब्याज (8.2%) वाली कर-मुक्त सरकारी बचत योजना।',
    benefits: 'Highest government interest (8.2% p.a., compounded annually) + 100% Tax-Free investment, interest, and maturity',
    eligibility: ['Girl child below 10 years of age (maximum 2 accounts per family)'],
    documents: ['Girl Child Birth Certificate', 'Parents/Guardian Aadhaar & PAN Card', 'Address Proof', 'Initial deposit (Minimum ₹250)'],
    processSteps: ['Visit any India Post Office or Authorized Public/Private Bank branch', 'Fill Form SSA-1 and submit with birth certificate and deposit amount'],
    officialUrl: 'https://www.indiapost.gov.in',
    officialPortalName: 'Department of Posts / National Savings Institute',
    helpline: '1800 266 6868 (India Post)',
    fees: 'Minimum ₹250 initial deposit',
    internalTab: 'banking',
    internalId: 'sukanya'
  },

  // --- CORE SERVICES (PAN INDIA) ---
  {
    id: 'aadhaar-service',
    type: 'service',
    title: 'Aadhaar Card (New Enrolment, Biometric & Address Update)',
    hindiTitle: 'आधार कार्ड (नया नामांकन, बायोमेट्रिक एवं पता सुधार)',
    state: 'all',
    keywords: ['aadhaar', 'uidai', 'aadhar', 'address change', 'mobile update', 'pvc card', 'baal aadhaar', 'name change', 'dob correction', 'blue aadhaar'],
    summary: 'Official 12-digit biometric identity for all Indian residents. Book appointment, download e-Aadhaar PDF, order PVC Card, or update address online.',
    hindiSummary: 'सभी भारतीय नागरिकों की 12 अंकों की विशिष्ट पहचान। नया आधार, नाम/पता/मोबाइल नंबर अपडेट व डिजिटल ई-आधार डाउनलोड।',
    benefits: 'Universal identity and address proof accepted everywhere across India and mandatory for 1,000+ government DBT schemes',
    eligibility: ['All resident individuals in India (including newborns and senior citizens)'],
    documents: [
      'Proof of Identity (POI): Passport, PAN Card, Voter ID, Driving Licence',
      'Proof of Address (POA): Electricity/Water Bill, Bank Statement, Rent Agreement, Domicile',
      'Proof of Date of Birth (DOB): Birth Certificate, Marksheet, Passport',
      'For Child (0-5 yrs): Hospital Discharge Slip / Birth Certificate + Parent’s Aadhaar'
    ],
    processSteps: [
      'For Online Address Update: Log in to myaadhaar.uidai.gov.in using Aadhaar OTP -> Select "Update Address Online" -> Upload POA scan -> Pay ₹50 fee',
      'For New Aadhaar / Biometrics / Mobile Update: Book appointment online at appointments.uidai.gov.in -> Visit nearest Aadhaar Seva Kendra -> Complete biometric capture',
      'Track status via 14-digit Enrolment ID (EID) / Service Request Number (SRN)'
    ],
    officialUrl: 'https://myaadhaar.uidai.gov.in',
    officialPortalName: 'UIDAI Official Portal (Govt of India)',
    helpline: '1947 (Toll-Free 24x7) / help@uidai.gov.in',
    fees: 'New Enrolment: ₹0 (Free) | Biometric/Photo Update: ₹100 | Address Update: ₹50 | PVC Card: ₹50',
    internalTab: 'services',
    internalId: 'aadhaar-card-new-update'
  },
  {
    id: 'pan-service',
    type: 'service',
    title: 'PAN Card (Instant e-PAN & NSDL/UTIITSL Correction)',
    hindiTitle: 'पैन कार्ड (10 मिनट में इंस्टेंट ई-पैन एवं सुधार)',
    state: 'all',
    keywords: ['pan', 'pan card', 'epan', 'income tax', 'tin nsdl', 'utiitsl', 'pan link aadhaar', 'form 49a', 'instant pan'],
    summary: '10-digit alphanumeric tax identifier issued by Income Tax Department. Generate free instant e-PAN in 10 minutes using Aadhaar OTP or apply for new physical PVC card.',
    hindiSummary: 'आयकर विभाग द्वारा जारी 10 अंकों का पैन कार्ड। आधार कार्ड से 10 मिनट में बिल्कुल मुफ्त ई-पैन प्राप्त करें या नया कार्ड बनवाएं।',
    benefits: 'Mandatory for banking, opening bank accounts, filing ITR, business operations, and financial transactions above ₹50,000',
    eligibility: ['Any Indian citizen, minor, firm, or HUF possessing valid Aadhaar card'],
    documents: ['Aadhaar Card (with mobile linked for OTP verification)', 'Passport size photograph (for physical form 49A)', 'Signature copy'],
    processSteps: [
      'Instant Free e-PAN (10 Mins): Visit incometax.gov.in -> Instant e-PAN -> Get New e-PAN -> Enter 12-digit Aadhaar -> Authenticate with OTP -> Download PDF',
      'Physical PAN via NSDL/Protean or UTIITSL: Visit onlineservices.nsdl.com -> Form 49A -> Upload documents -> Pay ₹107 fee -> Delivery within 7-10 days'
    ],
    officialUrl: 'https://www.incometax.gov.in',
    officialPortalName: 'Income Tax Department (e-Filing Portal) / Protean NSDL',
    helpline: '1800 180 1961 (IT Dept) / 020 27218080 (NSDL)',
    fees: 'Instant e-PAN: ₹0 (Free) | Physical PAN: ₹107 (India Delivery)',
    internalTab: 'services',
    internalId: 'pan-card-apply-correction'
  },
  {
    id: 'ration-card-onorc',
    type: 'service',
    title: 'Ration Card (NFSA / ONORC National Portability & e-Ration)',
    hindiTitle: 'राशन कार्ड (राष्ट्रीय खाद्य सुरक्षा / वन नेशन वन राशन कार्ड)',
    state: 'all',
    keywords: ['ration', 'rashan', 'ration card', 'onorc', 'nfsa', 'aay', 'phh', 'mera ration', 'food security', 'add member'],
    summary: 'Entitles eligible families to subsidized and free foodgrains under NFSA and PMGKAY. Under One Nation One Ration Card (ONORC), collect grains anywhere in India using Aadhaar biometric authentication.',
    hindiSummary: 'राष्ट्रीय खाद्य सुरक्षा के तहत सस्ता व मुफ्त राशन प्राप्त करें। वन नेशन वन राशन कार्ड से भारत के किसी भी राज्य में राशन उठाएं।',
    benefits: 'Subsidized/Free Rice, Wheat & Coarse Grains + Family proof + National portability across all 36 States/UTs',
    eligibility: [
      'Antyodaya Anna Yojana (AAY): Poorest of poor families, single women, disabled heads',
      'Priority Household (PHH): Families meeting state socio-economic income criteria',
      'Senior-most female (18+) designated as Head of Family'
    ],
    documents: ['Aadhaar Cards of all members', 'Income Certificate', 'Address Proof', 'Bank Passbook of female HOF', 'Child Birth Certificate (for new member)'],
    processSteps: [
      'Visit your State Food & Supplies portal or nfsa.gov.in -> Apply for New Ration Card / Member Addition',
      'Enter HOF details, add family members with Aadhaar numbers, upload income/address proofs',
      'Submit application and track Food Inspector verification status',
      'Download digitally verified e-Ration PDF from DigiLocker or State Portal'
    ],
    officialUrl: 'https://nfsa.gov.in',
    officialPortalName: 'National Food Security Portal (NFSA) / Department of Food',
    helpline: '1967 / 1800 180 2087 (National Food Helpline)',
    fees: '₹0 (Free Application)',
    internalTab: 'services',
    internalId: 'ration-card-all-india-nfsa'
  },
  {
    id: 'passport-service',
    type: 'service',
    title: 'Passport Seva (Fresh / Tatkaal / Renewal & PSK Booking)',
    hindiTitle: 'पासपोर्ट सेवा केंद्र (नया पासपोर्ट, तत्काल व नवीनीकरण)',
    state: 'all',
    keywords: ['passport', 'psk', 'tatkaal', 'passport seva', 'mPassport', 'visa', 'popsk', 'police verification'],
    summary: 'Official travel document and high-authority citizenship proof issued by Ministry of External Affairs. Online appointment booking at 500+ PSKs and POPSKs across India.',
    hindiSummary: 'विदेश यात्रा एवं वैश्विक पहचान हेतु भारतीय पासपोर्ट। पासपोर्ट सेवा केंद्र (PSK/POPSK) पर ऑनलाइन अपॉइंटमेंट बुक करें।',
    benefits: 'Official international identity document valid for 10 years (Adults) or 5 years (Minors)',
    eligibility: ['Indian citizens by birth, descent, or registration without criminal disqualifications'],
    documents: [
      'Proof of Date of Birth: Birth Certificate, Matriculation Marksheet, PAN Card',
      'Proof of Present Address: Aadhaar Card, Electricity/Water Bill, Bank Passbook with photo, Rent Agreement',
      'Proof of Non-ECR (Emigration Check Not Required): 10th Class Marksheet / Degree Certificate'
    ],
    processSteps: [
      'Register at passportindia.gov.in or download mPassport Seva App',
      'Fill Application Form (Fresh / Renewal / Tatkaal), select 36 pages or 60 pages booklet',
      'Pay online fee (₹1,500 for Normal, ₹3,500 for Tatkaal) and book PSK slot date/time',
      'Visit PSK on appointment day with original documents for biometric capture & interview',
      'Track Police Verification (PVC) and Speed Post delivery of booklet'
    ],
    officialUrl: 'https://www.passportindia.gov.in',
    officialPortalName: 'Passport Seva Portal (Ministry of External Affairs)',
    helpline: '1800 258 1800 (National Toll-Free)',
    fees: 'Normal Passport (36 pgs): ₹1,500 | Tatkaal: ₹3,500 | Minor: ₹1,000',
    internalTab: 'services',
    internalId: 'passport-apply-tatkaal'
  },
  {
    id: 'driving-licence',
    type: 'service',
    title: 'Driving Licence (Learner Licence & Permanent DL via Parivahan)',
    hindiTitle: 'ड्राइविंग लाइसेंस (लर्नर लाइसेंस व पक्का डीएल - सारथी परिवहन)',
    state: 'all',
    keywords: ['driving licence', 'dl', 'learner licence', 'llr', 'parivahan', 'sarathi', 'rto', 'driving test', 'rc transfer', 'chalan'],
    summary: 'Get online Learner Licence (LLR) from home through Aadhaar authentication and apply for Permanent Driving Licence and slot booking across all state RTOs.',
    hindiSummary: 'घर बैठे आधार प्रमाणीकरण से ऑनलाइन लर्नर लाइसेंस बनवाएं तथा पक्के ड्राइविंग लाइसेंस हेतु आरटीओ स्लॉट बुक करें।',
    benefits: 'Legal authorization to drive 2-wheeler, 4-wheeler, or commercial vehicles across India + High-validity ID proof',
    eligibility: [
      'Age 16+ for gearless 2-wheeler (up to 50cc)',
      'Age 18+ for light motor vehicles (Car/Bike with gear)',
      'Age 20+ for commercial / transport vehicles'
    ],
    documents: ['Aadhaar Card', 'Age Proof (Birth Certificate / 10th Marksheet)', 'Address Proof', 'Form 1 (Medical Self Declaration)', 'Passport photo & signature'],
    processSteps: [
      'Visit sarathi.parivahan.gov.in -> Select your State -> Click "Apply for Learner Licence"',
      'Authenticate with Aadhaar (No RTO visit needed for LL in most states)',
      'Watch Road Safety Tutorial video and complete online 15-question Learner Test',
      'Download Instant Learner Licence PDF valid for 6 months',
      'After 30 days, book driving track test slot for Permanent DL'
    ],
    officialUrl: 'https://sarathi.parivahan.gov.in',
    officialPortalName: 'Sarathi Parivahan (Ministry of Road Transport & Highways)',
    helpline: '0120 4925555 / 1033 (National Transport Helpline)',
    fees: 'Learner Licence: ₹150 - ₹200 | Driving Test & DL: ₹500 - ₹700 (State specific)',
    internalTab: 'services',
    internalId: 'driving-license-apply-renew'
  },
  {
    id: 'voter-id-service',
    type: 'service',
    title: 'Voter ID Card (New Registration Form 6 & Correction Form 8)',
    hindiTitle: 'मतदाता पहचान पत्र (नया वोटर कार्ड व सुधार - ECINET)',
    state: 'all',
    keywords: ['voter id', 'epic', 'voter card', 'form 6', 'form 8', 'chunav', 'election', 'voters eci', 'download epic'],
    summary: 'Official constitutional election identity card issued by Election Commission of India. Register new voter online or download digital e-EPIC PDF.',
    hindiSummary: 'भारत निर्वाचन आयोग द्वारा जारी वोटर कार्ड। फॉर्म 6 से नया नाम जुड़वाएं तथा डिजिटल ई-एपिक डाउनलोड करें।',
    benefits: 'Constitutional right to vote + Official identity & address document',
    eligibility: ['Indian citizen who has attained 18 years of age on qualifying dates (Jan 1, Apr 1, Jul 1, Oct 1)'],
    documents: ['Passport size photo', 'Age Proof (Aadhaar / Birth Certificate / Marksheet)', 'Address Proof (Aadhaar / Electricity Bill / Ration Card)'],
    processSteps: [
      'Visit voters.eci.gov.in or download ECINET / Voter Helpline App',
      'Click "New Registration for General Electors (Form 6)"',
      'Enter personal details, Assembly Constituency, upload photo and address proof',
      'Submit form and receive Reference Number for tracking Booth Level Officer (BLO) field verification',
      'Download digital color e-EPIC PDF with QR code'
    ],
    officialUrl: 'https://voters.eci.gov.in',
    officialPortalName: 'Election Commission of India (ECI Voters Portal)',
    helpline: '1950 (National Voter Toll-Free Helpline)',
    fees: '₹0 (100% Free Service)',
    internalTab: 'services',
    internalId: 'voter-id-apply-download'
  },

  // --- 40+ FINDERS & LOCAL DIRECTORIES ---
  {
    id: 'finder-pincode',
    type: 'finder',
    title: 'All India PIN Code & Post Office Finder',
    hindiTitle: 'पिन कोड एवं डाकघर खोजक (संपूर्ण भारत)',
    state: 'all',
    keywords: ['pincode', 'pin code', 'post office', 'dakghar', 'speed post', 'area pin', 'district pin', 'zip code'],
    summary: 'Search and locate 6-digit postal PIN codes, Head Post Offices (HO), Sub Post Offices (SO), and delivery zones across all 28 states and 8 union territories.',
    hindiSummary: 'भारत के किसी भी शहर, गांव, मोहल्ले या डाकघर का 6 अंकों का पिन कोड तुरंत खोजें।',
    officialUrl: 'https://www.indiapost.gov.in',
    officialPortalName: 'India Post PIN Code Directory',
    helpline: '1800 266 6868',
    internalTab: 'finders',
    internalId: 'pincode'
  },
  {
    id: 'finder-ifsc',
    type: 'finder',
    title: 'Bank IFSC, MICR & SWIFT Code Finder',
    hindiTitle: 'बैंक IFSC, MICR एवं स्विफ्ट कोड खोजक',
    state: 'all',
    keywords: ['ifsc', 'micr', 'swift', 'bank branch', 'neft', 'rtgs', 'imps', 'bank code', 'sbi ifsc', 'pnb ifsc', 'hdfc ifsc'],
    summary: 'Search 11-digit IFSC codes, 9-digit MICR cheque codes, branch addresses, and phone numbers for all 150+ RBI-scheduled commercial and cooperative banks in India.',
    hindiSummary: 'सभी भारतीय बैंकों की शाखाओं के 11 अंकों के IFSC कोड, MICR कोड एवं पता तुरंत प्राप्त करें।',
    officialUrl: 'https://www.rbi.org.in',
    officialPortalName: 'Reserve Bank of India (RBI) Bank Branch Directory',
    internalTab: 'finders',
    internalId: 'ifsc'
  },
  {
    id: 'finder-police',
    type: 'finder',
    title: 'Police Station & Emergency Helpline Finder',
    hindiTitle: 'थाना / पुलिस स्टेशन एवं आपातकालीन हेल्पलाइन खोजक',
    state: 'all',
    keywords: ['police station', 'thana', 'sho', 'police', 'fir', 'emergency', '112', '100', 'lost mobile', 'complaint'],
    summary: 'Locate local police station jurisdiction, Station House Officer (SHO) contact numbers, ACP/DCP offices, cyber cell helplines, and online e-FIR citizen portals.',
    hindiSummary: 'अपने नजदीकी थाने का पता, एसएचओ (SHO) का संपर्क नंबर व ई-एफआईआर पोर्टल खोजें।',
    officialUrl: 'https://digitalpolice.gov.in',
    officialPortalName: 'National Digital Police Portal (MHA)',
    helpline: '112 (National Emergency Number 24x7)',
    internalTab: 'finders',
    internalId: 'police-station'
  },
  {
    id: 'finder-hospital',
    type: 'finder',
    title: 'Government Hospital & Ayushman Arogya Mandir Finder',
    hindiTitle: 'सरकारी अस्पताल एवं आयुष्मान आरोग्य मंदिर खोजक',
    state: 'all',
    keywords: ['hospital', 'ayushman hospital', 'dispensary', 'doctor', 'aiims', 'emergency', 'opd', 'health centre', 'swasthya kendra'],
    summary: 'Directory of Central & State Government Hospitals, Medical Colleges, District Hospitals, Community Health Centres (CHCs), and 1,70,000+ Ayushman Arogya Mandirs.',
    hindiSummary: 'मुफ्त इलाज, दवाइयां व ओपीडी सेवाओं हेतु नजदीकी सरकारी अस्पताल एवं स्वास्थ्य केंद्र खोजें।',
    officialUrl: 'https://hpr.abdm.gov.in',
    officialPortalName: 'National Health Portal / ABDM Facility Registry',
    helpline: '108 (Ambulance) / 102 (Pregnancy/Child Emergency)',
    internalTab: 'finders',
    internalId: 'hospital'
  },
  {
    id: 'finder-jan-aushadhi',
    type: 'finder',
    title: 'PM Jan Aushadhi Kendra Finder (50-90% Cheaper Medicines)',
    hindiTitle: 'प्रधानमंत्री जन औषधि केंद्र खोजक (सस्ती जेनेरिक दवाइयां)',
    state: 'all',
    keywords: ['jan aushadhi', 'generic medicine', 'cheap medicine', 'medical store', 'pmjak', 'davai', 'pradhan mantri jan aushadhi'],
    summary: 'Locate 10,000+ Pradhan Mantri Bhartiya Janaushadhi Kendras (PMBJK) providing high-quality generic medicines, surgical items, and sanitary pads at 50% to 90% lower prices.',
    hindiSummary: '50% से 90% सस्ती जेनेरिक दवाइयां खरीदने हेतु नजदीकी जन औषधि केंद्र का पता प्राप्त करें।',
    officialUrl: 'https://janaushadhi.gov.in',
    officialPortalName: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)',
    helpline: '1800 180 8080 (Toll-Free)',
    internalTab: 'finders',
    internalId: 'jan-aushadhi'
  },
  {
    id: 'finder-rto',
    type: 'finder',
    title: 'RTO Office & Driving Track Finder',
    hindiTitle: 'आरटीओ कार्यालय एवं वाहन पंजीकरण खोजक',
    state: 'all',
    keywords: ['rto', 'dto', 'arot', 'transport office', 'driving test track', 'vehicle registration', 'number plate', 'hsrp'],
    summary: 'Find Regional Transport Offices (RTOs/DTOs) across India with RTO codes (e.g. DL-01, UP-32, MH-01, BR-01, RJ-14), address, and official Sarathi services.',
    hindiSummary: 'भारत के सभी राज्यों के आरटीओ कार्यालयों के कोड, पता व ड्राइविंग टेस्ट केंद्र खोजें।',
    officialUrl: 'https://parivahan.gov.in',
    officialPortalName: 'Ministry of Road Transport and Highways (MoRTH)',
    internalTab: 'finders',
    internalId: 'rto-office'
  },

  // --- BANKING HUB (21+ MAJOR BANKS) ---
  {
    id: 'bank-sbi',
    type: 'bank',
    title: 'State Bank of India (SBI) - Zero Balance, Savings, Loans & Helpline',
    hindiTitle: 'भारतीय स्टेट बैंक (SBI) - खाता, ब्याज दरें व हेल्पलाइन',
    state: 'all',
    keywords: ['sbi', 'state bank of india', 'sbi account', 'sbi zero balance', 'sbi helpline', 'onlinesbi', 'yono', 'sbi customer care', '18001234'],
    summary: 'India’s largest public sector bank. Zero minimum balance requirement on all regular savings accounts, PMJDY zero balance accounts, PPF, Sukanya, and 24x7 customer care.',
    hindiSummary: 'भारत का सबसे बड़ा सरकारी बैंक। सेविंग्स अकाउंट पर जीरो मिनिमम बैलेंस, योनो एप व 24x7 टोल-फ्री कस्टमर केयर।',
    benefits: 'Zero Minimum Balance penalty on Savings Accounts + YONO App + Free RuPay Debit Card',
    officialUrl: 'https://www.onlinesbi.sbi',
    officialPortalName: 'State Bank of India (Official Portal)',
    helpline: '1800 1234 / 1800 2100 (Toll-Free 24x7)',
    fees: 'Zero Minimum Balance on Regular Savings & Jan Dhan Accounts',
    internalTab: 'banking',
    internalId: 'sbi'
  },
  {
    id: 'bank-pnb',
    type: 'bank',
    title: 'Punjab National Bank (PNB) - Accounts, Rates & Customer Care',
    hindiTitle: 'पंजाब नेशनल बैंक (PNB) - सेवाएं व हेल्पलाइन',
    state: 'all',
    keywords: ['pnb', 'punjab national bank', 'pnb helpline', 'pnb zero balance', 'pnb customer care', 'netpnb'],
    summary: 'Second largest public sector bank offering savings accounts, PMJDY, agricultural loans, home loans, and internet banking.',
    hindiSummary: 'पीएनबी सरकारी बैंक खाता, कृषि ऋण, आवास ऋण व ग्राहक सेवा।',
    officialUrl: 'https://www.pnbindia.in',
    officialPortalName: 'Punjab National Bank Official Portal',
    helpline: '1800 180 2222 / 1800 103 2222',
    internalTab: 'banking',
    internalId: 'pnb'
  },
  {
    id: 'bank-hdfc',
    type: 'bank',
    title: 'HDFC Bank - Savings, NetBanking & Helpline',
    hindiTitle: 'एचडीएफसी बैंक (HDFC Bank) - सेवाएं व ग्राहक सेवा',
    state: 'all',
    keywords: ['hdfc', 'hdfc bank', 'hdfc helpline', 'hdfc customer care', 'hdfc min balance', 'hdfc netbanking'],
    summary: 'Leading private sector bank offering DigiSave accounts, Basic Savings Bank Deposit Accounts (BSBDA Zero Balance), loans, and digital banking.',
    hindiSummary: 'एचडीएफसी बैंक बचत खाता, नेटबैंकिंग व 24x7 हेल्पलाइन।',
    officialUrl: 'https://www.hdfcbank.com',
    officialPortalName: 'HDFC Bank Official Website',
    helpline: '1800 202 6161 / 1800 2800 (Toll-Free)',
    internalTab: 'banking',
    internalId: 'hdfc'
  },
  {
    id: 'bank-icici',
    type: 'bank',
    title: 'ICICI Bank - Accounts, iMobile & Customer Care',
    hindiTitle: 'आईसीआईसीआई बैंक (ICICI Bank) - खाता व हेल्पलाइन',
    state: 'all',
    keywords: ['icici', 'icici bank', 'icici helpline', 'icici customer care', 'imobile', 'icici netbanking'],
    summary: 'Major private bank offering instant InstaSave accounts with video KYC, credit cards, FD, and zero balance salary accounts.',
    hindiSummary: 'आईसीआईसीआई बैंक बचत खाता, फिक्स्ड डिपॉजिट एवं ग्राहक सेवा।',
    officialUrl: 'https://www.icicibank.com',
    officialPortalName: 'ICICI Bank Official Portal',
    helpline: '1800 1080 (Toll-Free)',
    internalTab: 'banking',
    internalId: 'icici'
  },
  {
    id: 'bank-canara',
    type: 'bank',
    title: 'Canara Bank - Public Sector Banking & Toll-Free Helpline',
    hindiTitle: 'केनरा बैंक (Canara Bank) - खाता व ग्राहक सेवा',
    state: 'all',
    keywords: ['canara', 'canara bank', 'canara helpline', 'canara customer care', 'canara netbanking'],
    summary: 'Major public sector bank offering savings accounts, MSME loans, education loans, and Canara ai1 mobile banking.',
    hindiSummary: 'केनरा बैंक सरकारी खाता, मुद्रा ऋण, छात्रवृत्ति खाता व हेल्पलाइन।',
    officialUrl: 'https://canarabank.com',
    officialPortalName: 'Canara Bank Official Portal',
    helpline: '1800 1030 / 1800 425 0018 (Toll-Free)',
    internalTab: 'banking',
    internalId: 'canara'
  },
  {
    id: 'bank-union',
    type: 'bank',
    title: 'Union Bank of India - Accounts, Vyom App & Helpline',
    hindiTitle: 'यूनियन बैंक ऑफ इंडिया (Union Bank) - खाता व हेल्पलाइन',
    state: 'all',
    keywords: ['union bank', 'ubi', 'union bank helpline', 'union bank customer care', 'vyom app'],
    summary: 'Premier public sector bank offering zero balance BSBD accounts, retail loans, and digital banking through Union Vyom app.',
    hindiSummary: 'यूनियन बैंक ऑफ इंडिया खाता, ऋण एवं 24x7 ग्राहक सेवा।',
    officialUrl: 'https://www.unionbankofindia.co.in',
    officialPortalName: 'Union Bank of India Official Portal',
    helpline: '1800 22 2244 / 1800 208 2244 (Toll-Free)',
    internalTab: 'banking',
    internalId: 'union'
  },

  // --- LIFE EVENTS (PAN INDIA & STATE AWARE) ---
  {
    id: 'life-event-baby-born',
    type: 'life_event',
    title: 'Baby Born / Childbirth (Birth Certificate, Baal Aadhaar, Maternity Grant)',
    hindiTitle: 'बच्चे का जन्म (जन्म प्रमाण पत्र, बाल आधार एवं मातृत्व सहायता)',
    state: 'all',
    keywords: ['baby born', 'birth certificate', 'janam praman patra', 'baal aadhaar', 'blue aadhaar', 'pmmvy', 'janani suraksha', 'childbirth', 'hospital discharge'],
    summary: 'Complete step-by-step roadmap for new parents: Register birth within 21 days on Civil Registration System (CRS) or Municipal portal, obtain Baal Aadhaar (0-5 yrs), and claim ₹5,000 PMMVY maternity benefits.',
    hindiSummary: '21 दिनों के भीतर जन्म प्रमाण पत्र बनवाने, नीले बाल आधार कार्ड एवं ₹5,000 मातृत्व वंदना योजना की पूरी गाइड।',
    benefits: 'Legal birth certificate + Baal Aadhaar + up to ₹5,000/₹6,000 DBT maternity grant (PMMVY / JSY)',
    eligibility: ['Newborn babies born in hospital, nursing home, or residence within Indian territory'],
    documents: ['Hospital Discharge Summary / Birth Slip', 'Mother & Father Aadhaar Cards', 'Parents Marriage Certificate (optional/recommended)', 'Mother Aadhaar-linked Bank Passbook (for PMMVY grant)'],
    processSteps: [
      'Step 1 (Days 0-21): Hospital submits institutional birth report. Verify parents names matching Aadhaar exactly',
      'Step 2: Apply for Digital Birth Certificate on crsorgi.gov.in (or State Municipal Portal e.g. MCD/NDMC in Delhi, Nagar Nigam in UP/Bihar/Maha)',
      'Step 3: After receiving Birth Certificate, visit Aadhaar Kendra with baby & parent Aadhaar for Blue Baal Aadhaar (No fingerprints taken for 0-5 yrs)',
      'Step 4: Submit PMMVY Form at Anganwadi Centre or pmmvy.wcd.gov.in for ₹5,000 bank grant'
    ],
    officialUrl: 'https://crsorgi.gov.in',
    officialPortalName: 'Civil Registration System (CRS) / Ministry of Home Affairs',
    helpline: '011 23438284 (RGI) / 1947 (UIDAI)',
    fees: 'Birth Registration within 21 days: ₹0 (Free)',
    internalTab: 'life-events',
    internalId: 'baby-born'
  },
  {
    id: 'life-event-buying-house',
    type: 'life_event',
    title: 'Buying House & Property Registration (Registry, Stamp Duty, Mutation)',
    hindiTitle: 'मकान / जमीन खरीदना एवं रजिस्ट्री (स्टाम्प ड्यूटी व दाखिल-खारिज)',
    state: 'all',
    keywords: ['buying house', 'property registration', 'registry', 'stamp duty', 'mutation', 'dakhil kharij', 'sub registrar', 'encumbrance certificate', 'patta'],
    summary: 'Comprehensive legal roadmap for property buyers: Title verification, Encumbrance Certificate (EC), paying state e-Stamp Duty, booking Sub-Registrar registry slot, and completing Mutation (Dakhil-Kharij).',
    hindiSummary: 'प्लॉट, फ्लैट या जमीन की रजिस्ट्री, ई-स्टाम्प पेपर, सब-रजिस्ट्रार ऑफिस अपॉइंटमेंट एवं दाखिल-खारिज की पूरी प्रक्रिया।',
    benefits: 'Clear legal ownership title, protection against fraud, and official revenue record mutation',
    documents: ['Previous Sale Deeds (Chain of Title for 30 years)', 'Encumbrance Certificate (EC)', 'Approved Building Plan / NOC', 'Buyer & Seller Aadhaar and PAN Cards', '2 Witnesses with Aadhaar', 'E-Stamp Duty Receipt'],
    processSteps: [
      'Step 1: Check 13-30 years title search and obtain Encumbrance Certificate (EC) from State Registration portal',
      'Step 2: Draft Sale Deed through a certified deed writer or legal advocate',
      'Step 3: Calculate and pay State Stamp Duty & Registration Fee online (via Stock Holding SHCIL / State Treasury)',
      'Step 4: Book online appointment slot at jurisdictional Sub-Registrar Office (SRO)',
      'Step 5: Buyer, seller, and 2 witnesses appear before Sub-Registrar with originals for biometric capture & deed execution',
      'Step 6: Apply for Revenue Mutation (Dakhil-Kharij) online on State Bhulekh / Land Records portal within 30 days'
    ],
    officialUrl: 'https://dor.gov.in',
    officialPortalName: 'Department of Revenue / State Inspector General of Registration (IGR)',
    fees: 'State Stamp Duty (typically 4% - 7%) + Registration Fee (1%)',
    internalTab: 'life-events',
    internalId: 'buying-house'
  },
  {
    id: 'life-event-marriage',
    type: 'life_event',
    title: 'Marriage Registration (Hindu Marriage Act & Special Marriage Act)',
    hindiTitle: 'विवाह पंजीकरण (मैरिज सर्टिफिकेट - हिंदू व स्पेशल मैरिज एक्ट)',
    state: 'all',
    keywords: ['marriage registration', 'marriage certificate', 'vivah panjikaran', 'sdm marriage', 'court marriage', 'special marriage act'],
    summary: 'Official marriage certificate issued by Sub-Divisional Magistrate (SDM) / Registrar of Marriages under Hindu Marriage Act, 1955 or Special Marriage Act, 1954.',
    hindiSummary: 'एसडीएम कार्यालय से कानूनी विवाह प्रमाण पत्र (मैरिज सर्टिफिकेट) बनवाने की पूरी ऑनलाइन व ऑफलाइन प्रक्रिया।',
    benefits: 'Legal proof of marriage required for Passport spouse endorsement, joint bank accounts, visa/immigration, and property succession',
    eligibility: ['Bridegroom aged 21+ and Bride aged 18+ on the date of marriage'],
    documents: ['Marriage Invitation Card / Temple/Gurudwara/Church Certificate', 'Husband & Wife Aadhaar, Age Proof & Address Proof', 'Combined Marriage Photo (Postcard size)', '3 Witnesses with Aadhaar and Address Proof'],
    processSteps: [
      'Apply online on your State e-District portal (e.g. edistrict.delhigovt.nic.in in Delhi, igrsup.gov.in in UP, etc.)',
      'Fill bride and groom details, witness information, and upload documents',
      'Select appointment slot at SDM / Registrar office',
      'Both parties and witnesses appear before the Magistrate with original documents',
      'Download digitally signed Marriage Certificate PDF'
    ],
    officialUrl: 'https://services.india.gov.in',
    officialPortalName: 'National Government Services Portal / State e-District',
    fees: 'Statutory Fee: ₹50 - ₹150 (Varies by state)',
    internalTab: 'life-events',
    internalId: 'marriage'
  }
];

// Helper: Intelligent search across knowledge base
export function searchKnowledgeBase(query: string, currentStateId: string = 'national'): ChatbotKnowledgeItem[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);

  const results: { item: ChatbotKnowledgeItem; score: number }[] = [];

  for (const item of CHATBOT_KNOWLEDGE_BASE) {
    let score = 0;

    // Exact title / id match
    if (item.id === normalizedQuery || item.title.toLowerCase() === normalizedQuery) {
      score += 100;
    }

    // Keyword exact matches
    for (const kw of item.keywords) {
      if (normalizedQuery.includes(kw)) {
        score += 40;
      }
      for (const w of queryWords) {
        if (kw.includes(w)) {
          score += 15;
        }
      }
    }

    // Title / Hindi Title matches
    for (const w of queryWords) {
      if (item.title.toLowerCase().includes(w)) score += 25;
      if (item.hindiTitle.toLowerCase().includes(w)) score += 25;
      if (item.summary.toLowerCase().includes(w)) score += 10;
      if (item.hindiSummary.toLowerCase().includes(w)) score += 10;
    }

    // State preference boost
    if (item.state === currentStateId && currentStateId !== 'national') {
      score += 10;
    }

    if (score > 15) {
      results.push({ item, score });
    }
  }

  // Sort by highest score first
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 5).map(r => r.item);
}

// Detect State from query string
export function detectStateFromQuery(query: string): string | null {
  const q = query.toLowerCase();

  const stateKeywords: Record<string, string[]> = {
    'delhi': ['delhi', 'dilli', 'दिल्ली', 'nct', 'mcd', 'ndmc', 'dtc'],
    'uttar-pradesh': ['up', 'uttar pradesh', 'उत्तर प्रदेश', 'lucknow', 'kanpur', 'varanasi', 'noida', 'agra', 'ghaziabad', 'prayagraj', 'gorakhpur'],
    'bihar': ['bihar', 'बिहार', 'patna', 'gaya', 'muzaffarpur', 'bhagalpur', 'darbhanga'],
    'maharashtra': ['maharashtra', 'maha', 'महाराष्ट्र', 'mumbai', 'pune', 'nagpur', 'thane', 'nashik', 'bmc'],
    'madhya-pradesh': ['mp', 'madhya pradesh', 'मध्य प्रदेश', 'bhopal', 'indore', 'gwalior', 'jabalpur'],
    'rajasthan': ['rajasthan', 'राजस्थान', 'jaipur', 'jodhpur', 'udaipur', 'kota', 'bikaner'],
    'haryana': ['haryana', 'हरियाणा', 'gurgaon', 'gurugram', 'faridabad', 'panipat', 'ambala', 'karnal'],
    'punjab': ['punjab', 'पंजाब', 'chandigarh', 'ludhiana', 'amritsar', 'jalandhar', 'patiala'],
    'west-bengal': ['bengal', 'west bengal', 'पश्चिम बंगाल', 'kolkata', 'howrah', 'siliguri', 'asansol'],
    'gujarat': ['gujarat', 'गुजरात', 'ahmedabad', 'surat', 'vadodara', 'rajkot', 'gandhinagar'],
    'karnataka': ['karnataka', 'कर्नाटक', 'bangalore', 'bengaluru', 'mysore', 'hubli', 'mangalore'],
    'tamil-nadu': ['tamil nadu', 'तमिलनाडु', 'chennai', 'coimbatore', 'madurai', 'trichy', 'salem'],
    'kerala': ['kerala', 'केरल', 'thiruvananthapuram', 'kochi', 'kozhikode', 'thrissur'],
    'andhra-pradesh': ['andhra', 'andhra pradesh', 'आंध्र प्रदेश', 'visakhapatnam', 'vijayawada', 'guntur', 'tirupati'],
    'telangana': ['telangana', 'तेलंगाना', 'hyderabad', 'warangal', 'nizamabad'],
    'odisha': ['odisha', 'orissa', 'ओडिशा', 'bhubaneswar', 'cuttack', 'puri', 'rourkela'],
    'jharkhand': ['jharkhand', 'झारखंड', 'ranchi', 'jamshedpur', 'dhanbad', 'bokaro'],
    'chhattisgarh': ['chhattisgarh', 'छत्तीसगढ़', 'raipur', 'bilaspur', 'durg', 'bhilai'],
    'assam': ['assam', 'असम', 'guwahati', 'silchar', 'dibrugarh', 'jorhat'],
    'uttarakhand': ['uttarakhand', 'उत्तराखंड', 'dehradun', 'haridwar', 'rishikesh', 'haldwani'],
    'himachal-pradesh': ['himachal', 'himachal pradesh', 'हिमाचल प्रदेश', 'shimla', 'dharamshala', 'mandi', 'kullu'],
    'jammu-kashmir': ['jammu', 'kashmir', 'j&k', 'जम्मू कश्मीर', 'srinagar'],
  };

  for (const [stateId, keywords] of Object.entries(stateKeywords)) {
    for (const kw of keywords) {
      // Look for whole word or phrase
      const regex = new RegExp(`\\b${kw}\\b`, 'i');
      if (regex.test(q)) {
        return stateId;
      }
    }
  }

  return null;
}
