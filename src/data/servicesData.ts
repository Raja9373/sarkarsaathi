import { ServiceItem } from '../types';

export const MAIN_CATEGORIES = [
  'Identity & Documents',
  'Certificates',
  'Licences',
  'Vehicles & Transport',
  'Property & Housing',
  'Utilities',
  'Family Services',
  'Education',
  'Employment',
  'Business',
  'Health',
  'Police & Legal',
  'Government Schemes',
  'Taxes & Finance',
  'Complaints',
  'Government Departments',
  'Government Offices',
  'Banking',
  'Government Finders',
  'Government Calculators',
  'Downloads',
  'Status Check',
  'Online Apply',
  'Renewal',
  'Corrections',
  'RTI',
  'Emergency & Helplines',
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'aadhaar-card-new-update',
    title: 'Aadhaar Card (New Enrolment & Correction)',
    hindiTitle: 'आधार कार्ड (नया बनवाएं व सुधार करें)',
    category: 'Identity & Documents',
    secondaryCategories: ['Corrections', 'Identity & Documents', 'Online Apply'],
    state: 'national',
    department: 'Unique Identification Authority of India (UIDAI)',
    shortDesc: 'Apply for fresh Aadhaar Card or update name, address, DOB, mobile number and biometrics.',
    overview: 'Aadhaar is a 12-digit unique identity number issued by UIDAI. It serves as proof of identity and proof of address anywhere in India.',
    eligibility: [
      'Resident of India (stayed in India for 182 days or more in the past 12 months)',
      'NRIs holding valid Indian Passport',
      'Infants and minors (Baal Aadhaar with parent biometric linkage)'
    ],
    requiredDocs: [
      'Proof of Identity (POI): Passport, PAN Card, Voter ID, Driving Licence, Ration Card',
      'Proof of Address (POA): Passport, Bank Passbook, Electricity Bill (under 3 months), Water Bill',
      'Proof of Date of Birth (PDB): Birth Certificate, SSLC Book/Certificate, Passport, PAN',
      'Proof of Relationship (POR): PDS Card, MNREGA Job Card, Birth Certificate'
    ],
    onlineProcess: [
      'Visit myAadhaar Portal (myaadhaar.uidai.gov.in)',
      'Log in using Aadhaar Number and OTP sent to registered mobile number',
      'Select "Update Address Online" or book an appointment at nearest Aadhaar Seva Kendra for demographic/biometric changes',
      'Upload scanned clear original documents in color',
      'Pay ₹50 fee online for demographic update or book appointment slot',
      'Save the URN (Update Request Number) for tracking status'
    ],
    offlineProcess: [
      'Visit nearest Aadhaar Seva Kendra or CSC (Common Service Centre)',
      'Fill Aadhaar Enrolment / Correction Form',
      'Submit original document verification at desk',
      'Provide biometrics (Iris scan, 10 fingerprints, photograph)',
      'Collect acknowledgment slip with 14-digit Enrolment ID (EID)'
    ],
    fees: 'New Enrolment: Free | Demographic Update: ₹50 | Biometric Update: ₹100',
    processingTime: '7 to 90 Working Days',
    officialWebsiteName: 'UIDAI myAadhaar Portal',
    officialGovUrl: 'https://myaadhaar.uidai.gov.in',
    downloadForms: [
      { name: 'Aadhaar Enrolment / Correction Form (PDF)', url: 'https://uidai.gov.in/images/aadhaar_enrolment_update_form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Is mobile number update mandatory online?', answer: 'You need an active registered mobile number to receive OTP for online address updates. For mobile number change itself, you must visit an Aadhaar Seva Kendra.' },
      { question: 'What is Baal Aadhaar?', answer: 'Aadhaar issued to children under 5 years is blue in color. No biometric is captured for children below 5. Mandatory biometric update is required at age 5 and 15.' }
    ],
    commonMistakes: [
      'Uploading black & white or blurred photo copies instead of original color documents',
      'Mismatched name format between Aadhaar and supporting PAN/Passport',
      'Not updating mobile number before attempting online self-service updates'
    ],
    importantNotes: [
      'Government of India has made document update mandatory for Aadhaar cards issued over 10 years ago.',
      'Aadhaar is free for first-time enrolment.'
    ],
    lastUpdated: '2026-07-01',
    relatedServiceIds: ['pan-card-apply', 'voter-id-apply'],
    tags: ['Aadhaar', 'UIDAI', 'Identity', 'Address Change', 'Biometric'],
    isPopular: true
  },
  {
    id: 'pan-card-apply',
    title: 'PAN Card Correction, Application & Duplicate (Form 49A / Form CSF / e-PAN)',
    hindiTitle: 'पैन कार्ड आवेदन एवं सुधार (Form 49A / Form CSF / e-PAN)',
    category: 'Identity & Documents',
    secondaryCategories: ['Corrections', 'Identity & Documents', 'Online Apply'],
    state: 'national',
    department: 'Income Tax Department (Protean / NSDL & UTIITSL)',
    shortDesc: 'Instant e-PAN via Aadhaar OTP or physical PAN card application & correction.',
    overview: 'Permanent Account Number (PAN) is a 10-character alphanumeric identifier issued by Income Tax Department for financial & tax reporting.',
    eligibility: [
      'Indian Citizen, Minor (through representative assessee), NRI, HUF, Firm, Company',
      'Valid Aadhaar card required for Instant e-PAN facility'
    ],
    requiredDocs: [
      'Proof of Identity: Aadhaar Card, Passport, Voter ID, Driving Licence',
      'Proof of Address: Aadhaar Card, Bank Passbook statement, Utility Bill',
      'Proof of Date of Birth: Birth Certificate, Matriculation Marksheet, Aadhaar'
    ],
    onlineProcess: [
      'For Instant e-PAN (Free): Visit Income Tax e-Filing portal (incometax.gov.in) -> Instant e-PAN -> Enter Aadhaar -> Verify OTP -> Download e-PAN PDF within minutes.',
      'For Physical Card: Visit Protean (NSDL) or UTIITSL website -> Select Form 49A -> Fill details -> Choose e-KYC (Aadhaar authentication) or submit physical documents -> Pay fee -> Submit.'
    ],
    offlineProcess: [
      'Obtain Form 49A from PAN center or TIN-FC center',
      'Affix 2 recent passport photographs and sign across photo',
      'Attach self-attested document proofs',
      'Pay fee at desk and collect acknowledgment receipt'
    ],
    fees: 'Instant e-PAN: Free | Physical PAN (India dispatch): ₹107 | Foreign dispatch: ₹1,017',
    processingTime: 'Instant (e-PAN) | 10 to 15 Days (Physical Card)',
    officialWebsiteName: 'Income Tax e-Filing Official Portal',
    officialGovUrl: 'https://www.incometax.gov.in',
    downloadForms: [
      { name: 'Form 49A - PAN Application (PDF)', url: 'https://www.tin-nsdl.com/downloads/pan/download/Form49A.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Is e-PAN legally valid equal to physical card?', answer: 'Yes, e-PAN contains a QR code and digital signature, making it legally valid across all banks and government departments as per IT Act.' },
      { question: 'What happens if Aadhaar is not linked with PAN?', answer: 'PAN becomes inoperative for high-value banking transactions and tax filing if not linked with Aadhaar.' }
    ],
    commonMistakes: [
      'Name spelling mismatch between Aadhaar and PAN form',
      'Signing inside photo box instead of signature box'
    ],
    importantNotes: [
      'Linking Aadhaar with PAN is mandatory for all taxpayers.'
    ],
    lastUpdated: '2026-07-10',
    relatedServiceIds: ['aadhaar-card-new-update', 'income-tax-filing'],
    tags: ['PAN', 'Income Tax', 'Taxation', 'e-PAN', 'NSDL'],
    isPopular: true
  },
  {
    id: 'passport-seva-delhi',
    title: 'Passport Application, Renewal & Name/Address Correction (Delhi PSKs)',
    hindiTitle: 'पासपोर्ट नया / नवीनीकरण व संशोधन (दिल्ली)',
    category: 'Identity & Documents',
    secondaryCategories: ['Renewal', 'Corrections', 'Online Apply'],
    state: 'delhi',
    department: 'Ministry of External Affairs - Passport Seva',
    shortDesc: 'Apply fresh passport, re-issue, Tatkaal passport, and renewal in Delhi PSKs (R.K. Puram, Herald House, Shalimar Bagh).',
    overview: 'Passport Seva enables Indian citizens to obtain Ordinary Passports (36 or 60 pages) or renew existing passports prior to expiry for international travel.',
    eligibility: [
      'Indian Citizen by birth, descent, or registration',
      'Minors require consent of parents/guardians'
    ],
    requiredDocs: [
      'Proof of Birth: Birth Certificate, Transfer/School Leaving Certificate, Aadhaar Card, PAN Card',
      'Proof of Present Address: Aadhaar, Bank Passbook, Electricity Bill, Water Bill, Rent Agreement (registered)',
      'Non-ECR Proof (for ECNR): 10th Pass Certificate / Degree Marksheet'
    ],
    onlineProcess: [
      'Register on Passport Seva Portal (passportindia.gov.in)',
      'Create account -> Apply for Fresh Passport / Re-issue of Passport',
      'Fill applicant details, address, emergency contact, and family info',
      'Pay fee online and book appointment slot at preferred Delhi PSK (R.K. Puram, Herald House ITO, Shalimar Bagh, Gurgaon/Noida)',
      'Visit PSK on appointment day with original documents + 1 set of self-attested photocopies',
      'Police Verification will be initiated by Delhi Police (mPassport Police App)'
    ],
    offlineProcess: [
      'Walk-in permitted only for Senior Citizens, Minors, and Tatkaal category after pre-filling form online.'
    ],
    fees: 'Fresh Normal 36 pages: ₹1,500 | Normal 60 pages: ₹2,000 | Tatkaal Scheme: Extra ₹2,000',
    processingTime: 'Normal: 7 to 21 Days | Tatkaal: 1 to 3 Days',
    officialWebsiteName: 'Passport Seva Official Portal',
    officialGovUrl: 'https://www.passportindia.gov.in',
    downloadForms: [
      { name: 'Passport Main Application Form (PDF)', url: 'https://www.passportindia.gov.in/AppOnlineProject/pdf/Main_Form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Can I apply for Passport with Delhi address if I live in rented house?', answer: 'Yes, registered rent agreement along with gas bill or bank statement showing continuous stay for 1 year is accepted as address proof.' }
    ],
    commonMistakes: [
      'Not carrying original marksheets for Non-ECR status verification',
      'Discrepancy in parent names across birth certificate and educational certificates'
    ],
    importantNotes: [
      'Police verification in Delhi is now tracked via digital mPassport app by Delhi Police.'
    ],
    lastUpdated: '2026-07-15',
    relatedServiceIds: ['police-clearance-certificate-delhi', 'aadhaar-card-new-update'],
    tags: ['Passport', 'PSK', 'MEA', 'Tatkaal', 'Travel'],
    isPopular: true
  },
  {
    id: 'driving-licence-delhi-transport',
    title: 'Driving Licence Renewal & Application (Delhi Transport)',
    hindiTitle: 'ड्राइविंग लाइसेंस (नवीनीकरण एवं नया - दिल्ली)',
    category: 'Licences',
    secondaryCategories: ['Renewal', 'Vehicles & Transport', 'Online Apply'],
    state: 'delhi',
    department: 'Transport Department, Govt. of NCT of Delhi',
    shortDesc: 'Apply for DL Renewal, Learner Licence (LL) online via Faceless Service, or Permanent DL test at Delhi RTOs.',
    overview: 'Delhi Transport Department offers 100% faceless online Learner Licence testing and appointment booking for driving skill test.',
    eligibility: [
      'Age 16+ for 50cc gearless two-wheeler',
      'Age 18+ for LMV (Motor Car/Bike with Gear)',
      'Age 20+ for Commercial/Transport Vehicles',
      'Applicant must possess active Aadhaar registered with mobile number for faceless Aadhaar-authenticated LL'
    ],
    requiredDocs: [
      'Aadhaar Card (for Faceless instant verification)',
      'Proof of Age: Birth Certificate, 10th Certificate, Passport, PAN',
      'Medical Certificate Form 1-A (Signed by registered doctor for age 40+ or commercial category)',
      'Existing Learner Licence number (for Permanent DL application)'
    ],
    onlineProcess: [
      'Visit Parivahan Sewa Portal (parivahan.gov.in) -> Select State: Delhi',
      'Click "Apply for Learner Licence" -> Choose "Submit via Aadhaar Authentication" (Faceless)',
      'Fill application, upload self-declaration Form 1 and photo/signature',
      'Pay fee online (₹500 for LL + Test)',
      'Take online Stall Test / LL test from home on computer with webcam',
      'Pass online test -> Instant download of Learner Licence PDF',
      'After 30 days, book slot for Permanent DL driving track test at Delhi ADTT (Automated Driving Test Track e.g. Shakur Basti, Mayur Vihar, Vishwas Nagar, Burari).'
    ],
    offlineProcess: [
      'Non-Aadhaar users must visit physical RTO for document verification and camera photo capture.'
    ],
    fees: 'Learner Licence: ₹500 | Permanent DL Test & Smart Card: ₹1,000 | DL Renewal: ₹400',
    processingTime: 'Learner Licence: Same Day (Faceless) | Permanent DL: 7 Days post driving test',
    officialWebsiteName: 'Parivahan Sarathi Portal (Govt of India)',
    officialGovUrl: 'https://sarathi.parivahan.gov.in',
    downloadForms: [
      { name: 'Form 1 (Self Declaration Physical Fitness) PDF', url: 'https://parivahan.gov.in/parivahan/sites/default/files/2023-01/Form1.pdf', isOfficialPdf: true },
      { name: 'Form 1-A (Medical Certificate) PDF', url: 'https://parivahan.gov.in/parivahan/sites/default/files/2023-01/Form1A.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Is driving test mandatory at Delhi ADTT track?', answer: 'Yes, permanent DL requires driving skill test on automated sensor track in Delhi. ADTT tracks test reverse parallel parking, gradient hill climb, and 8-figure turning.' }
    ],
    commonMistakes: [
      'Failing the online LL tutorial video requirement before starting test',
      'Appearing at ADTT without original vehicle RC and valid insurance/PUC for test vehicle'
    ],
    importantNotes: [
      'Delhi Learner Licence test can be taken 24x7 from home on laptop/PC with web camera.'
    ],
    lastUpdated: '2026-07-20',
    relatedServiceIds: ['traffic-challan-pay-delhi', 'rc-transfer-delhi'],
    tags: ['DL', 'Driving Licence', 'Transport', 'Delhi RTO', 'Faceless'],
    isPopular: true
  },
  {
    id: 'fssai-food-license-delhi',
    title: 'FSSAI Food Licence & Registration Renewal (FoSCoS)',
    hindiTitle: 'FSSAI खाद्य लाइसेंस एवं नवीनीकरण (FoSCoS)',
    category: 'Licences',
    secondaryCategories: ['Business', 'Renewal'],
    state: 'delhi',
    department: 'Food Safety and Standards Authority of India (FSSAI)',
    shortDesc: 'Apply or renew FSSAI Basic Registration (under ₹12 Lakhs turnover), State License, or Central License for food business, cloud kitchen, catering, and grocery in Delhi.',
    overview: 'FSSAI FoSCoS portal handles food business licensing and registration mandated under Food Safety and Standards Act 2006.',
    eligibility: [
      'Basic Registration: Annual turnover up to ₹12 Lakhs (Petty food manufacturers, small dhabas, street vendors, small retailers)',
      'State License: Annual turnover between ₹12 Lakhs and ₹20 Crores (Delhi restaurants, caterers, cloud kitchens, medium food processing units)',
      'Central License: Annual turnover above ₹20 Crores or multi-state operations / import-export'
    ],
    requiredDocs: [
      'Photo ID Proof (Aadhaar Card / PAN Card)',
      'Business Premises Proof (Electricity Bill / Rent Agreement / Property Tax Receipt)',
      'Food Safety Management System (FSMS) Plan & Water Test Report (for manufacturing/restaurants)',
      'List of Food Products / Categories to be manufactured or sold'
    ],
    onlineProcess: [
      'Visit FoSCoS FSSAI Portal (foscos.fssai.gov.in)',
      'Click "Apply for License/Registration"',
      'Select State: Delhi -> Choose Kind of Business (KOB) e.g. Food Manufacturer, Retailer, Restaurant, Cloud Kitchen',
      'Fill Form A (Basic Registration) or Form B (State/Central License)',
      'Upload applicant photo, address proof, and FSMS declaration',
      'Pay official fee online via payment gateway',
      'Track application status and download 14-digit FSSAI License Certificate PDF'
    ],
    offlineProcess: [
      'Visit Designated Food Safety Officer at Food Safety Dept, A-Block, Vikas Bhawan, ITO, New Delhi for query resolution.'
    ],
    fees: 'Basic Registration: ₹100/year | State License: ₹2,000 to ₹5,000/year | Central License: ₹7,500/year',
    processingTime: 'Basic Registration: 7 to 10 Working Days | State License: 15 to 30 Days',
    officialWebsiteName: 'FoSCoS FSSAI Official Licensing Portal',
    officialGovUrl: 'https://foscos.fssai.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is FSSAI registration mandatory for home bakers and cloud kitchens in Delhi?', answer: 'Yes, any individual selling food or operating home bakery/cloud kitchen must hold at least FSSAI Basic Registration.' }
    ],
    commonMistakes: [
      'Selecting incorrect Kind of Business (KOB) category during online application',
      'Uploading blurred address proof or expired rent agreement'
    ],
    importantNotes: [
      '14-digit FSSAI license number must be prominently displayed on food packaging and shop bill counter.'
    ],
    lastUpdated: '2026-07-25',
    relatedServiceIds: ['mcd-trade-health-license', 'shop-establishment-license-delhi'],
    tags: ['FSSAI', 'Food License', 'FoSCoS', 'Restaurant', 'Delhi Food Safety'],
    isPopular: true
  },
  {
    id: 'mcd-trade-health-license',
    title: 'MCD Trade, Health & Factory Licence Renewal',
    hindiTitle: 'MCD व्यापार, स्वास्थ्य एवं फैक्टरी लाइसेंस नवीनीकरण',
    category: 'Licences',
    secondaryCategories: ['Business', 'Renewal'],
    state: 'delhi',
    department: 'Municipal Corporation of Delhi (MCD)',
    shortDesc: 'Apply or renew MCD General Trade License, Health Trade License (eateries, sweet shops, hotels), and Factory License online across MCD Delhi zones.',
    overview: 'MCD mandates trade and health licenses for running commercial establishments, eateries, manufacturing units, and retail shops in Delhi.',
    eligibility: [
      'Owner or lessee of commercial premises / shop / factory in Delhi MCD jurisdiction',
      'Unit must comply with Master Plan Delhi (MPD 2021) mixed land use guidelines and commercial street notification'
    ],
    requiredDocs: [
      'Property ownership proof / Registered Rent Agreement',
      'Electricity Bill & UPIC Property Tax Unique ID',
      'Site Layout Plan / Fire NOC (for eating houses/hotels/factories above 100 sq meters)',
      'PAN & Aadhaar Card of proprietor/partners'
    ],
    onlineProcess: [
      'Visit MCD Unified Portal (mcdonline.nic.in)',
      'Select Zone -> Click "Trade & Health License"',
      'Register user account using mobile number & OTP',
      'Select license type: General Trade License / Health Trade License / Factory License',
      'Fill establishment details, square area (in sq. meters), and worker count',
      'Upload property documents and structural safety NOC',
      'Pay license fee calculated automatically by system',
      'Instant approval or inspection booking -> Download digital MCD Trade License Certificate'
    ],
    offlineProcess: [
      'Visit Zonal MCD Health & Trade Licensing counter in your respective MCD Zone office.'
    ],
    fees: 'Calculated dynamically based on covered area (sq meters), trade type, and location zone.',
    processingTime: 'General Trade: 3 to 7 Days | Health/Factory: 14 to 21 Days',
    officialWebsiteName: 'MCD Online Official Services Portal',
    officialGovUrl: 'https://mcdonline.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is the validity of MCD Trade License?', answer: 'MCD Trade and Health Licenses are valid for 1 fiscal year (April 1 to March 31) and must be renewed annually before April 30.' }
    ],
    commonMistakes: [
      'Applying for trade license without paid UPIC Property Tax receipt',
      'Operating in non-notified residential street without mixed land use approval'
    ],
    importantNotes: [
      'Eateries and restaurants require combined MCD Health Trade License + FSSAI + Delhi Fire Service NOC.'
    ],
    lastUpdated: '2026-07-22',
    relatedServiceIds: ['fssai-food-license-delhi', 'shop-establishment-license-delhi'],
    tags: ['MCD', 'Trade License', 'Health License', 'Delhi Shop', 'MCD Online'],
    isPopular: true
  },
  {
    id: 'drug-pharmacy-license-delhi',
    title: 'Retail & Wholesale Drug / Pharmacy License Renewal',
    hindiTitle: 'खुदरा एवं थोक दवा (ड्रग) लाइसेंस नवीनीकरण (दिल्ली)',
    category: 'Licences',
    secondaryCategories: ['Business', 'Renewal'],
    state: 'delhi',
    department: 'Drugs Control Department, Govt. of NCT of Delhi',
    shortDesc: 'Apply for Form 20 / 21 Retail Chemist Shop & Form 20B / 21B Wholesale Drug License with Delhi Drugs Control Department.',
    overview: 'Required for opening retail medical stores, chemist shops, or wholesale pharmaceutical distribution in Delhi under Drugs & Cosmetics Act 1940.',
    eligibility: [
      'Retail Chemist: Must employ a Registered Pharmacist registered with Delhi Pharmacy Council (DPC)',
      'Wholesale License: Graduate with 1 year experience in drug dealing or Registered Pharmacist',
      'Minimum Premises Area: 10 sq. meters for retail/wholesale, 15 sq. meters for combined retail + wholesale'
    ],
    requiredDocs: [
      'Delhi Pharmacy Council (DPC) Pharmacist Registration Certificate',
      'Premises ownership / Rent Agreement & Site Blueprint Map signed by architect',
      'Refrigerator purchase invoice & digital temperature monitoring log',
      'Affidavit of Registered Pharmacist / Competent Person'
    ],
    onlineProcess: [
      'Visit Delhi Drugs Control Portal (drugs.delhi.gov.in / edistrict.delhigovt.nic.in)',
      'Click "Apply for New Drug License (Form 20/21)"',
      'Fill shop details, registered pharmacist DPC registration number, and refrigeration facilities',
      'Upload premises blueprint, rent deed, and pharmacist qualification docs',
      'Pay government fee online',
      'Drugs Inspector (DI) schedules physical premises inspection',
      'Post inspection approval -> Download official Drug License PDF'
    ],
    offlineProcess: [
      'Drugs Control Department, Govt of NCT of Delhi, F-17, Karkardooma, Delhi 110092.'
    ],
    fees: 'Retail (Form 20/21): ₹3,000 | Wholesale (Form 20B/21B): ₹3,000 | Valid for 5 Years',
    processingTime: '30 to 45 Days (includes physical inspection by Drugs Inspector)',
    officialWebsiteName: 'Delhi Drugs Control Portal',
    officialGovUrl: 'https://drugs.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is a registered pharmacist compulsory for wholesale drug license?', answer: 'For wholesale, either a Registered Pharmacist or a graduate with 1 year experience in drug sale/distribution is qualified.' }
    ],
    commonMistakes: [
      'Premises ceiling height less than 2.75 meters or carpet area below 10 sq. meters',
      'Lack of valid refrigerator invoice in applicant or shop name'
    ],
    importantNotes: [
      'Retail pharmacy stores must maintain prescription registers for Schedule H and H1 drugs.'
    ],
    lastUpdated: '2026-07-24',
    relatedServiceIds: ['fssai-food-license-delhi', 'mcd-trade-health-license'],
    tags: ['Drug License', 'Pharmacy', 'Chemist', 'Delhi Drugs Control', 'Form 20'],
    isPopular: true
  },
  {
    id: 'shop-establishment-license-delhi',
    title: 'Delhi Shop & Establishment Registration & Renewal',
    hindiTitle: 'दिल्ली दुकान एवं स्थापना पंजीकरण एवं नवीनीकरण',
    category: 'Licences',
    secondaryCategories: ['Business', 'Renewal'],
    state: 'delhi',
    department: 'Labour Department, Govt. of NCT of Delhi',
    shortDesc: 'Register commercial establishment, office, or shop under Delhi Shops and Establishments Act 1954 for official bank account & GST proof.',
    overview: 'Mandatory registration for all commercial establishments, retail shops, IT companies, and service centers operating within Delhi NCT.',
    eligibility: [
      'Any shop, office, commercial establishment, or IT firm operating in Delhi within 90 days of commencement of business.'
    ],
    requiredDocs: [
      'PAN Card of Business / Proprietor',
      'Aadhaar Card of Applicant',
      'Proof of Commercial Address (Rent agreement / Electricity bill)',
      'Photo of shop front with signboard displaying shop name in Hindi/English'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in)',
      'Select Labour Department -> "Registration under Shops and Establishments Act"',
      'Fill Form A details (Establishment Name, Employer Name, Category, Employee count)',
      'Upload address proof, PAN, Aadhaar, and photo of shop front',
      'Submit application (Registration is free under Delhi Govt faceless reform)',
      'Instant processing -> Download Registration Certificate PDF'
    ],
    offlineProcess: [
      'Handled 100% online on e-District Delhi portal; no physical submission required.'
    ],
    fees: 'Free (₹0 government fee under Delhi Govt faceless service reform)',
    processingTime: '1 to 3 Working Days',
    officialWebsiteName: 'e-District Delhi Labour Services Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is Delhi Shop & Establishment Certificate required for opening current bank account?', answer: 'Yes, most banks accept Delhi Shops Act Registration Certificate as valid business entity proof for opening current accounts.' }
    ],
    commonMistakes: [
      'Uploading shop signboard photo without clear name visible in Hindi/English',
      'Entering residential address for purely commercial establishment'
    ],
    importantNotes: [
      'Registration is lifetime valid unless changes occur in establishment ownership or employee count.'
    ],
    lastUpdated: '2026-07-26',
    relatedServiceIds: ['mcd-trade-health-license', 'fssai-food-license-delhi'],
    tags: ['Shops Act', 'Labour Dept', 'Commercial License', 'e-District', 'Delhi Shop'],
    isPopular: true
  },
  {
    id: 'arms-license-delhi',
    title: 'Delhi Police Arms Licence Application & Renewal',
    hindiTitle: 'दिल्ली पुलिस शस्त्र (हथियार) लाइसेंस नया एवं नवीनीकरण',
    category: 'Licences',
    secondaryCategories: ['Police & Legal', 'Renewal'],
    state: 'delhi',
    department: 'Licensing Unit, Delhi Police (Govt of NCT of Delhi)',
    shortDesc: 'Apply fresh arms license for personal protection, weapon endorsement, or 3-year license renewal online with Delhi Police Licensing Unit.',
    overview: 'Delhi Police Licensing Unit regulates issuance of gun/arms licenses under Arms Act 1959 and Arms Rules 2016 for threat perception, sport shooting, or heirloom.',
    eligibility: [
      'Indian Citizen aged 21 years or above residing in Delhi',
      'Genuine threat perception or certified sportsperson / ex-serviceman',
      'No criminal antecedents or mental illness history'
    ],
    requiredDocs: [
      'Proof of Identity & Address (Aadhaar, Passport, Voter ID)',
      'Proof of Date of Birth & Medical Fitness Certificate Form S-1',
      'Specific Threat Perception Affidavit / Police Security Report',
      'Income Tax Returns (ITR for last 3 years) & Bank Statements'
    ],
    onlineProcess: [
      'Visit Delhi Police Licensing Portal (delhipolice.gov.in / PMSA)',
      'Click "Arms Licensing Portal"',
      'Register and fill Form A-1 for fresh arms license application',
      'Upload medical fitness certificate, ITRs, threat justification, and address proof',
      'Pay online application fee',
      'Physical interview at Delhi Police Licensing Unit, Defence Colony, New Delhi',
      'Local police station background verification & Crime Branch vetting',
      'Licensing Authority decision -> Issuance of Smart Card Arms License'
    ],
    offlineProcess: [
      'Visit Licensing Unit, Delhi Police, Police Station Defence Colony Complex, New Delhi 110024.'
    ],
    fees: 'Fresh Application: ₹1,000 | License Renewal: ₹500 (Valid 5 Years)',
    processingTime: '60 to 90 Days (includes multi-level police verification)',
    officialWebsiteName: 'Delhi Police Licensing Portal',
    officialGovUrl: 'https://delhipolice.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is the validity period of Delhi Police Arms Smart Card?', answer: 'Under revised Arms Rules 2016, fresh and renewed arms licenses are valid for 5 years across India.' }
    ],
    commonMistakes: [
      'Failing to submit specific documented proof justifying genuine threat to life',
      'Incomplete medical fitness certificate Form S-1 from registered MBBS doctor'
    ],
    importantNotes: [
      'All arms license holders must register Unique Identification Number (UIN) on MHA NDAL-ALIS portal.'
    ],
    lastUpdated: '2026-07-28',
    relatedServiceIds: ['police-clearance-certificate-delhi'],
    tags: ['Arms License', 'Delhi Police', 'Gun License', 'PMSA', 'Licensing'],
    isPopular: false
  },
  {
    id: 'mcd-property-tax-delhi',
    title: 'MCD Property Tax Online Payment (Delhi)',
    hindiTitle: 'एमसीडी संपत्ति कर (प्रॉपर्टी टैक्स) दिल्ली भुगतान',
    category: 'Property & Housing',
    state: 'delhi',
    department: 'Municipal Corporation of Delhi (MCD)',
    shortDesc: 'Pay MCD residential and commercial property tax online, generate UPIC ID and rebate calculations.',
    overview: 'All property owners in Delhi MCD jurisdiction must pay annual property tax based on Unit Area System.',
    eligibility: [
      'Owners or occupiers of residential, commercial, industrial, or vacant land in Delhi MCD zones (North, South, East, Central, West, etc.)'
    ],
    requiredDocs: [
      'UPIC (Unique Property Identification Code) 15-digit number',
      'Previous Property Tax Receipt / PTR Number',
      'Property covered area measurement in square meters'
    ],
    onlineProcess: [
      'Visit MCD Online Services Portal (mcdonline.nic.in)',
      'Select Property Tax -> Click "Pay Property Tax"',
      'Log in with registered mobile number & OTP',
      'Enter UPIC code or search property by address/owner name',
      'Verify unit area, usage factor, age factor, occupancy factor',
      'System automatically calculates tax and early bird rebate (10% rebate up to June 30)',
      'Pay via UPI, Net Banking, Credit/Debit Card',
      'Download official tax receipt and G-8 receipt PDF'
    ],
    offlineProcess: [
      'Visit nearest MCD Citizen Service Centre (CSC) or designated HDFC bank branch with previous receipt.'
    ],
    fees: 'Calculated as per Unit Area Value (UAV) x Covered Area x Factors',
    processingTime: 'Instant Receipt Generation',
    officialWebsiteName: 'MCD Official Online Portal',
    officialGovUrl: 'https://mcdonline.nic.in',
    downloadForms: [
      { name: 'MCD Property Tax Return Form (PTR) PDF', url: 'https://mcdonline.nic.in/pdf/PTR_Form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'What is UPIC in MCD Property Tax?', answer: 'UPIC is Unique Property Identification Code allotted to every property structure in Delhi for tax mapping.' }
    ],
    commonMistakes: [
      'Miscalculating covered area vs carpet area',
      'Selecting wrong usage factor (commercial vs residential rates)'
    ],
    importantNotes: [
      'MCD offers 10% rebate on early lump sum property tax payment before July 30 of financial year.'
    ],
    lastUpdated: '2026-07-02',
    relatedServiceIds: ['delhi-jal-board-water-bill', 'electricity-bill-pay-delhi'],
    tags: ['MCD', 'Property Tax', 'Delhi', 'UPIC', 'Tax Payment'],
    isPopular: true
  },
  {
    id: 'dda-housing-scheme-delhi',
    title: 'DDA Housing Schemes & Flat Allotment (Delhi)',
    hindiTitle: 'डीडीए हाउसिंग स्कीम एवं फ्लैट आवंटन',
    category: 'Property & Housing',
    state: 'delhi',
    department: 'Delhi Development Authority (DDA), Govt. of India',
    shortDesc: 'Apply online for DDA Housing Schemes, Festival Special Housing Scheme, e-Auction of DDA flats, and check allotment status.',
    overview: 'Delhi Development Authority (DDA) provides affordable and HIG/MIG/LIG/EWS housing flats across Dwarka, Narela, Jasola, Vasant Kunj, and Siraspur.',
    eligibility: [
      'Indian Citizen aged 18 years or above',
      'Must not own a freehold/leasehold residential plot or house in Delhi exceeding 67 sq. meters in applicant/spouse/minor children name',
      'One application per individual or joint applicants'
    ],
    requiredDocs: [
      'PAN Card & Aadhaar Card of Applicant(s)',
      'Bank Account details with IFSC Code for refund',
      'Income Certificate (for EWS category flats)',
      'Caste Certificate (for SC/ST quota reserved flats)'
    ],
    onlineProcess: [
      'Visit DDA Official e-Housing Portal (dda.gov.in)',
      'Register user profile -> Select active DDA Housing Scheme',
      'Select preferred locality (Dwarka, Narela, Loknayak Puram, Vasant Kunj, Jasola)',
      'Fill online application form and upload PAN/Aadhaar',
      'Pay registration application fee via online payment gateway',
      'Participate in computerized draw of lots or First-Come-First-Serve (FCFS) selection',
      'Download allotment letter (Demand-cum-Allotment Letter) upon selection'
    ],
    offlineProcess: [
      'DDA Nagrik Suvidha Kendra, Ground Floor, Vikas Sadan, INA, New Delhi 110023.'
    ],
    fees: 'Application Registration Fee: EWS: ₹10,000 | LIG: ₹1,00,000 | MIG/HIG: ₹4,00,000 (Refundable if not allotted)',
    processingTime: 'Draw of lots as per scheme schedule | Instant online allotment for FCFS schemes',
    officialWebsiteName: 'DDA Official Housing Services Portal',
    officialGovUrl: 'https://dda.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Can I apply for DDA flat if I live in a rented house in Delhi?', answer: 'Yes, any adult Indian citizen who does not own a residential plot or flat over 67 sq.m in Delhi is eligible.' }
    ],
    commonMistakes: [
      'Entering incorrect bank account or IFSC code for registration fee refund',
      'Applying under reserved category without valid caste/income certificate'
    ],
    importantNotes: [
      'DDA First-Come-First-Serve (FCFS) schemes allow instant flat booking and online token payment.'
    ],
    lastUpdated: '2026-07-28',
    relatedServiceIds: ['mcd-property-tax-delhi', 'property-registration-stamp-duty-delhi'],
    tags: ['DDA', 'Housing Scheme', 'Delhi Flat', 'e-Housing', 'Dwarka Flats'],
    isPopular: true
  },
  {
    id: 'property-registration-stamp-duty-delhi',
    title: 'Delhi Property Registration & e-Stamp Duty',
    hindiTitle: 'दिल्ली संपत्ति पंजीकरण एवं ई-स्टाम्प शुल्क',
    category: 'Property & Housing',
    state: 'delhi',
    department: 'Revenue Department, Govt. of NCT of Delhi / SHCIL',
    shortDesc: 'Calculate property registration fee, purchase e-Stamp paper online, and book appointment slot at Sub-Registrar Office (SRO) in Delhi.',
    overview: 'Mandatory property registration for sale deeds, gift deeds, lease agreements, and conveyance deeds under Indian Registration Act 1908.',
    eligibility: [
      'Buyers, sellers, or legal GPA holders of real estate property in Delhi NCT'
    ],
    requiredDocs: [
      'Drafted Sale Deed / Gift Deed / Conveyance Deed',
      'e-Stamp Paper Certificate purchased from SHCIL',
      'Aadhaar Card & PAN Card of Buyer, Seller, and 2 Witnesses',
      'Property Tax Receipt & NOC from MCD / DDA / L&DO'
    ],
    onlineProcess: [
      'Visit Stock Holding Corporation (SHCIL e-Stamp) or Delhi Revenue e-District Portal',
      'Purchase online e-Stamp Paper based on property circle rate valuation',
      'Visit DORIS Delhi Sub-Registrar Portal (doris.delhigovt.nic.in)',
      'Select Sub-Registrar Office (SRO) jurisdiction e.g. Mehrauli, Janakpuri, Pitampura, Defence Colony',
      'Enter property details, buyer/seller PAN/Aadhaar, and e-stamp certificate number',
      'Book online appointment date & time slot for biometrics',
      'Visit Sub-Registrar Office on appointed time for photo & fingerprint verification'
    ],
    offlineProcess: [
      'Concerned Sub-Registrar Office (SRO) in your district revenue department complex.'
    ],
    fees: 'Stamp Duty: Male Buyer 6% | Female Buyer 4% | Joint 5% + Registration Fee 1% of property value',
    processingTime: 'Appointment Slot Booking: 1 to 3 Days | Registration Certificate: Same Day at SRO',
    officialWebsiteName: 'Stock Holding Corp e-Stamp & DORIS Delhi Portal',
    officialGovUrl: 'https://www.stockholding.com/',
    downloadForms: [],
    faqs: [
      { question: 'What is the stamp duty rate for women property buyers in Delhi?', answer: 'Delhi Government offers 2% concession on stamp duty for female buyers (4% for women vs 6% for men).' }
    ],
    commonMistakes: [
      'Calculating stamp duty below official Delhi circle rate valuation',
      'Visiting Sub-Registrar office without 2 witnesses with valid Aadhaar IDs'
    ],
    importantNotes: [
      'e-Stamp papers can be verified instantly using 18-digit Certificate Number on SHCIL online portal.'
    ],
    lastUpdated: '2026-07-27',
    relatedServiceIds: ['mcd-property-tax-delhi', 'dda-housing-scheme-delhi'],
    tags: ['Stamp Duty', 'Property Registration', 'SRO', 'Sale Deed', 'SHCIL'],
    isPopular: true
  },
  {
    id: 'dda-freehold-conveyance-deed',
    title: 'DDA Freehold Conversion & Conveyance Deed',
    hindiTitle: 'डीडीए फ्रीहोल्ड परिवर्तन एवं कन्वेयेंस डीड',
    category: 'Property & Housing',
    state: 'delhi',
    department: 'Delhi Development Authority (DDA)',
    shortDesc: 'Convert DDA leasehold property (flat, residential plot, commercial shop) into freehold property and issue Conveyance Deed.',
    overview: 'DDA freehold conversion grants full legal ownership rights to leasehold property holders in Delhi, removing ground rent liabilities.',
    eligibility: [
      'Original DDA leaseholder or registered Power of Attorney (GPA) holder of DDA flat/plot'
    ],
    requiredDocs: [
      'Copy of Allotment Letter / Possession Letter / Lease Deed',
      'Paid Ground Rent receipts up to current financial year',
      'Aadhaar Card, PAN Card, and Property Site Plan',
      'Affidavit & Indemnity Bond on e-stamp paper'
    ],
    onlineProcess: [
      'Visit DDA e-Services Portal (eservices.dda.org.in)',
      'Select "Application for Conversion from Leasehold to Freehold"',
      'Fill property allotment number, scheme name, block, and pocket details',
      'Upload lease deed, ground rent clearance receipt, and applicant ID proof',
      'Pay online conversion charges and processing fee',
      'DDA officer verifies documents -> Generation of Conveyance Deed draft',
      'Book appointment for physical execution of Conveyance Deed at DDA Vikas Sadan'
    ],
    offlineProcess: [
      'Lease Administration Branch, DDA, Vikas Sadan, INA, New Delhi.'
    ],
    fees: 'Conversion charges based on property category, plot size, and year of allotment.',
    processingTime: '30 to 45 Days',
    officialWebsiteName: 'DDA e-Services Conversion Portal',
    officialGovUrl: 'https://dda.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Why convert DDA leasehold property to freehold?', answer: 'Freehold property allows easy home loan sanction, hassle-free property sale, and removes annual DDA ground rent charges.' }
    ],
    commonMistakes: [
      'Applying for conversion with outstanding DDA ground rent dues',
      'Mismatch in applicant name between lease deed and Aadhaar'
    ],
    importantNotes: [
      'Conveyance Deed must be registered at local Sub-Registrar Office post execution by DDA officer.'
    ],
    lastUpdated: '2026-07-26',
    relatedServiceIds: ['dda-housing-scheme-delhi', 'property-registration-stamp-duty-delhi'],
    tags: ['DDA Freehold', 'Conveyance Deed', 'Leasehold to Freehold', 'DDA'],
    isPopular: false
  },
  {
    id: 'mcd-building-plan-sanction',
    title: 'MCD Building Plan Sanction (OBPS Delhi)',
    hindiTitle: 'एमसीडी ऑनलाइन बिल्डिंग प्लान मंजूरी (OBPS)',
    category: 'Property & Housing',
    state: 'delhi',
    department: 'Municipal Corporation of Delhi (MCD)',
    shortDesc: 'Submit architectural building plan drawings for instant sanction, layout approval, and Completion Certificate online across Delhi MCD zones.',
    overview: 'MCD Online Building Plan System (OBPS) enables registered architects and property owners to obtain automated online building map sanctions.',
    eligibility: [
      'Property owners constructing or renovating residential/commercial buildings in Delhi MCD jurisdiction'
    ],
    requiredDocs: [
      'Property Ownership Documents (Registered Sale Deed / Conveyance Deed)',
      'Architectural Plan drawings prepared by MCD Registered Architect / Structural Engineer',
      'Structural Safety Certificate & Fire NOC (for buildings above 15m height)',
      'Water & Sewer NOC from Delhi Jal Board'
    ],
    onlineProcess: [
      'Visit MCD OBPS Portal (mcdonline.nic.in)',
      'Log in via MCD Registered Architect credentials',
      'Enter UPIC property ID and applicant ownership details',
      'Upload CAD drawing plan layout (.dwg / .pdf format) auto-checked by rule-engine',
      'System calculates stacking charges, betterment levy, and sanction fee',
      'Pay online fee -> Automated plan approval / Deemed Sanction Certificate download'
    ],
    offlineProcess: [
      'Town Planning Department, MCD Zonal Building Dept in concerned MCD Zone.'
    ],
    fees: 'Calculated automatically based on plot area, built-up area, and number of floors.',
    processingTime: '7 to 15 Days (Instant deemed sanction for small residential plots up to 500 sq meters)',
    officialWebsiteName: 'MCD OBPS Building Plan Portal',
    officialGovUrl: 'https://mcdonline.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is building plan sanction required for constructing additional floor in Delhi?', answer: 'Yes, constructing any new floor or structural modification requires approved building plan sanction from MCD.' }
    ],
    commonMistakes: [
      'Submitting CAD drawings violating setback or FAR (Floor Area Ratio) limits under MPD 2021',
      'Architect not registered with Council of Architecture or MCD'
    ],
    importantNotes: [
      'MCD provides deemed building sanction within 24 hours for residential plots up to 105 sq meters.'
    ],
    lastUpdated: '2026-07-25',
    relatedServiceIds: ['mcd-property-tax-delhi', 'mcd-trade-health-license'],
    tags: ['MCD Building Plan', 'OBPS', 'Map Sanction', 'Architect', 'Delhi MCD'],
    isPopular: false
  },
  {
    id: 'mcd-property-mutation-upic',
    title: 'MCD Property Mutation & UPIC Name Transfer',
    hindiTitle: 'एमसीडी संपत्ति नामांतरण (म्यूटेशन) एवं नाम परिवर्तन',
    category: 'Property & Housing',
    state: 'delhi',
    department: 'Municipal Corporation of Delhi (MCD)',
    shortDesc: 'Apply for MCD property tax mutation to transfer property tax assessment record in new buyer or legal heir name online.',
    overview: 'MCD Property Mutation updates municipal tax records after property purchase, inheritance, or gift, ensuring tax receipts are issued in new owner name.',
    eligibility: [
      'New property buyers, legal heirs after demise of owner, or gift deed beneficiaries in Delhi'
    ],
    requiredDocs: [
      'Registered Sale Deed / Conveyance Deed / Will / Succession Certificate',
      'Death Certificate of previous owner (for inheritance mutation)',
      'Paid MCD Property Tax Receipt up to current financial year',
      'Affidavit & Indemnity Bond on e-stamp paper'
    ],
    onlineProcess: [
      'Visit MCD Portal (mcdonline.nic.in) -> Select "Property Tax Mutation"',
      'Enter 15-digit UPIC property code',
      'Select mutation type: Sale Deed / Inheritance / Gift Deed / Will',
      'Upload registered transfer document, property tax receipt, and affidavit',
      'Pay official mutation fee online',
      'MCD Zonal Assessor verifies documents -> Issue of Mutation Certificate PDF'
    ],
    offlineProcess: [
      'Assessor & Collector Office at respective MCD Zonal Office.'
    ],
    fees: '₹100 to ₹500 nominal mutation fee depending on property category.',
    processingTime: '15 to 30 Days',
    officialWebsiteName: 'MCD Online Property Mutation Portal',
    officialGovUrl: 'https://mcdonline.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'Does property mutation grant legal title ownership?', answer: 'No, mutation is for municipal tax record assessment. Legal ownership title is established by registered Sale Deed / Conveyance Deed.' }
    ],
    commonMistakes: [
      'Applying for mutation with pending property tax arrears of previous owner',
      'Unregistered Will or missing death certificate in inheritance cases'
    ],
    importantNotes: [
      'Property mutation should be completed within 60 days of purchasing property in Delhi.'
    ],
    lastUpdated: '2026-07-27',
    relatedServiceIds: ['mcd-property-tax-delhi', 'property-registration-stamp-duty-delhi'],
    tags: ['MCD Mutation', 'UPIC Transfer', 'Property Name Transfer', 'Delhi MCD'],
    isPopular: true
  },
  {
    id: 'delhi-jal-board-water-bill',
    title: 'Delhi Jal Board (DJB Water Bill Payment & New Connection)',
    hindiTitle: 'दिल्ली जल बोर्ड (पानी का बिल भुगतान व नया कनेक्शन)',
    category: 'Utilities',
    state: 'delhi',
    department: 'Delhi Jal Board (DJB), Govt. of NCT of Delhi',
    shortDesc: 'Pay water bills, view meter reading history, apply new water/sewer connection online in Delhi.',
    overview: 'Delhi Jal Board provides potable water supply and sewerage services across Delhi NCT.',
    eligibility: [
      'Residents, property owners, and commercial establishments in Delhi'
    ],
    requiredDocs: [
      'K-No (10-digit Water Connection Account Number)',
      'For New Connection: Property Ownership Proof / Rent Agreement, Aadhaar Card, Site Layout plan'
    ],
    onlineProcess: [
      'Visit DJB Revenue Management System (djb.gov.in / mSeva App)',
      'Enter 10-digit K-No to view bill details',
      'Select payment gateway (UPI, Net Banking, Debit Card, PayTM)',
      'Complete payment and download instant water bill payment receipt',
      'For New Water Connection: Click "e-Apply for New Connection" -> Fill form -> Upload property proof -> Pay processing fee.'
    ],
    offlineProcess: [
      'Visit local DJB Zonal Revenue Office (ZRO) bill counter with bill bill copy.'
    ],
    fees: 'As per metered consumption slab | New connection fee: ₹1,000 + security deposit',
    processingTime: 'Bill Payment: Instant | New Connection: 15 Working Days',
    officialWebsiteName: 'Delhi Jal Board Revenue Portal',
    officialGovUrl: 'https://djb.gov.in/DJBRMSPortal/',
    downloadForms: [
      { name: 'DJB Revenue Management Portal (RMS)', url: 'https://djb.gov.in/DJBRMSPortal/', isOfficialPdf: false }
    ],
    faqs: [
      { question: 'Where do I find KNO in DJB bill?', answer: 'KNO is a 10-digit account number printed on top right corner of physical Delhi Jal Board bill statement.' }
    ],
    commonMistakes: [
      'Entering meter reading incorrectly on mSeva app',
      'Not keeping payment receipt for dispute resolution'
    ],
    importantNotes: [
      'Delhi Govt provides 20,000 liters free monthly water per household with functional working meter.'
    ],
    lastUpdated: '2026-07-05',
    relatedServiceIds: ['mcd-property-tax-delhi', 'electricity-bill-pay-delhi'],
    tags: ['DJB', 'Delhi Jal Board', 'Water Bill', 'KNO', 'Delhi'],
    isPopular: true
  },
  {
    id: 'electricity-bill-pay-delhi',
    title: 'Delhi Electricity Bill Payment (BSES Rajdhani/Yamuna & TPDDL)',
    hindiTitle: 'दिल्ली बिजली बिल भुगतान (BSES / टाटा पावर TPDDL)',
    category: 'Utilities',
    state: 'delhi',
    department: 'BSES Rajdhani (BRPL), BSES Yamuna (BYPL), Tata Power DDL',
    shortDesc: 'Pay electricity bills, apply subsidy scheme, and request meter upgrade in Delhi.',
    overview: 'Power distribution in Delhi is handled by BSES Rajdhani, BSES Yamuna, and TPDDL based on zonal area.',
    eligibility: [
      'Electricity consumer in Delhi with valid CA Number (BRPL/BYPL) or Consumer ID (TPDDL)'
    ],
    requiredDocs: [
      'CA Number (9-digit for BSES) / Consumer ID (11-digit for TPDDL)',
      'Aadhaar Card (for subsidy opt-in registration)'
    ],
    onlineProcess: [
      'For BSES: Visit bsesdelhi.com -> Enter CA Number -> Pay via UPI/Card -> Download receipt.',
      'For TPDDL: Visit tatapower-ddl.com -> Pay Online -> Enter CA Number -> Complete transaction.',
      'For Electricity Subsidy: Missed call to 7065111111 or WhatsApp chat to register subsidy preference.'
    ],
    offlineProcess: [
      'Pay at company customer care centers or ATPM (Any Time Payment Machines) across Delhi.'
    ],
    fees: 'As per DERC tariff slab rates',
    processingTime: 'Instant Online Receipt',
    officialWebsiteName: 'BSES Delhi & Tata Power DDL Portals',
    officialGovUrl: 'https://www.bsesdelhi.com',
    downloadForms: [
      { name: 'BSES New Meter Connection Application Form PDF', url: 'https://www.bsesdelhi.com/documents/BRPL_New_Connection_Form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'How do I apply for Delhi Power Subsidy?', answer: 'Give a missed call on 7065111111 from registered mobile or fill opt-in form on discom portal using CA number.' }
    ],
    commonMistakes: [
      'Confusing BYPL (East/Central Delhi) with BRPL (South/West Delhi) portal'
    ],
    importantNotes: [
      '0-200 units monthly consumption receives 100% subsidy upon opt-in.'
    ],
    lastUpdated: '2026-07-08',
    relatedServiceIds: ['delhi-jal-board-water-bill', 'mcd-property-tax-delhi', 'igl-png-gas-connection-bill-pay'],
    tags: ['BSES', 'TPDDL', 'Electricity', 'CA Number', 'Power Subsidy'],
    isPopular: true
  },
  {
    id: 'igl-png-gas-connection-bill-pay',
    title: 'Indraprastha Gas Limited (IGL PNG Gas Connection & Bill Pay)',
    hindiTitle: 'इंद्रप्रस्थ गैस लिमिटेड (IGL पीएनजी गैस कनेक्शन एवं बिल भुगतान)',
    category: 'Utilities',
    state: 'delhi',
    department: 'Indraprastha Gas Limited (IGL), Govt. of India & Govt. of NCT of Delhi JV',
    shortDesc: 'Apply new domestic/commercial PNG gas connection, view & pay IGL bills online using BP Number, self-meter reading, and find CNG stations.',
    overview: 'Indraprastha Gas Limited (IGL) is the leading City Gas Distribution utility in Delhi NCR, supplying eco-friendly Piped Natural Gas (PNG) to households, commercial establishments, and industries, along with Compressed Natural Gas (CNG) for automotive vehicles.',
    eligibility: [
      'Residential homeowners and tenants in Delhi NCR with PNG gas pipeline coverage',
      'Commercial establishments (restaurants, hotels, food courts, hostels, canteens) and industrial units in Delhi NCR'
    ],
    requiredDocs: [
      'Proof of Ownership / Possession (Sale Deed, Conveyance Deed, Property Tax Receipt, Allotment Letter) OR Rent Agreement with Owner NOC',
      'Proof of Identity: Aadhaar Card, Voter ID, Passport, or PAN Card',
      'Proof of Address: Aadhaar Card, Electricity Bill, Water Bill, or Bank Passbook',
      'Bank Account Details (Cancelled Cheque or Passbook copy for ECS refund/subsidy setup)'
    ],
    onlineProcess: [
      'Visit the official IGL Customer Portal (iglonline.net) or download IGL Smart Customer App.',
      'For New PNG Connection: Click "New Connection" -> Select "Domestic PNG" -> Enter Pincode/Area -> Fill details & upload property proof -> Pay refundable security deposit.',
      'For Online Bill Payment: Click "Pay Bill Online" -> Enter 10-digit BP (Business Partner) Number -> Verify bill details -> Pay via UPI, Net Banking, Debit/Credit Card, or Wallet -> Download instant receipt.',
      'Self-Meter Reading: Upload meter reading dial photo on IGL App or WhatsApp service to generate accurate bill statement.'
    ],
    offlineProcess: [
      'Visit the nearest IGL Zonal Customer Care Center or submit paper application form along with self-attested document copies and Demand Draft / Cheque.'
    ],
    fees: 'Refundable Security Deposit for Domestic PNG Connection (approx ₹6,000 adjustable) + Metered gas consumption (SCM tariff slabs)',
    processingTime: 'Online Bill Payment: Instant | New PNG Connection: 7–15 Working Days (subject to pipeline feasibility)',
    officialWebsiteName: 'Indraprastha Gas Limited (IGL) Official Portal',
    officialGovUrl: 'https://www.iglonline.net/',
    downloadForms: [
      { name: 'IGL Official Online Portal & Registration', url: 'https://www.iglonline.net/', isOfficialPdf: false },
      { name: 'IGL Online Bill Payment Portal', url: 'https://www.iglonline.net/customer-service/pay-bill-online', isOfficialPdf: false }
    ],
    faqs: [
      { question: 'What is a BP Number in IGL gas bill?', answer: 'BP Number (Business Partner Number) is a unique 10-digit customer account number printed at the top of your physical or digital IGL PNG gas bill statement.' },
      { question: 'How do I submit self-meter reading for IGL PNG?', answer: 'You can submit self-meter reading by logging into IGL Smart App, visiting iglonline.net, or sending a WhatsApp message with photo of your gas meter reading.' },
      { question: 'What happens if PNG pipeline is not available in my society?', answer: 'You can register your society or colony interest on IGL portal. Once minimum required connection requests are received in an area, IGL plans feeder line laying.' }
    ],
    commonMistakes: [
      'Entering incorrect 10-digit BP number during online bill payment',
      'Not obtaining NOC from property owner when applying for new PNG connection as a tenant'
    ],
    importantNotes: [
      'Piped Natural Gas (PNG) is safer, continuous, and economical compared to LPG cylinders with no hassle of booking or waiting for delivery.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-jal-board-water-bill', 'electricity-bill-pay-delhi'],
    tags: ['IGL', 'PNG Gas', 'Gas Connection', 'Indraprastha Gas', 'IGL Bill Pay', 'BP Number', 'CNG', 'Delhi Utilities'],
    isPopular: true
  },
  {
    id: 'birth-certificate-delhi-mcd',
    title: 'Birth Certificate Application & Download (Delhi MCD / NDMC)',
    hindiTitle: 'जन्म प्रमाण पत्र (दिल्ली एमसीडी / एनडीएमसी)',
    category: 'Certificates',
    state: 'delhi',
    department: 'MCD / NDMC / Delhi Cantonment Board',
    shortDesc: 'Apply new birth certificate or download digitally signed copy with QR code in Delhi.',
    overview: 'Birth registration in Delhi is managed by civic bodies (MCD, NDMC, DCB) within 21 days of birth.',
    eligibility: [
      'Child born within NCT of Delhi jurisdiction (hospital or home birth)'
    ],
    requiredDocs: [
      'Hospital Discharge Summary / Slip with child birth record',
      'Parents Aadhaar Cards',
      'Marriage Certificate of parents (optional but recommended)',
      'Delayed Birth Permission from SDM (if applying after 1 year of birth)'
    ],
    onlineProcess: [
      'Visit MCD e-Swaasthya / NDMC Birth Portal (mcdonline.nic.in)',
      'Click "Birth & Death Registration"',
      'Search event by Hospital Registration Number, Date of Birth, and Mother Name',
      'For Non-named birth: Add child name online using parents Aadhaar OTP',
      'Pay nominal fee online (₹10 to ₹20 per copy)',
      'Download QR-coded digitally signed official Birth Certificate instantly.'
    ],
    offlineProcess: [
      'Visit Zonal MCD Health Dept office or Registrar Office with hospital slip.'
    ],
    fees: 'Free within 21 days | Delayed fee: ₹10 to ₹50',
    processingTime: 'Instant Download (if registered) | 7 Days (New Name Addition)',
    officialWebsiteName: 'MCD Citizen Services Portal',
    officialGovUrl: 'https://mcdonline.nic.in',
    downloadForms: [
      { name: 'Delayed Birth Registration SDM Application Form PDF', url: 'https://mcdonline.nic.in/pdf/Birth_Delayed_Form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Can I add child name in Delhi Birth Certificate later?', answer: 'Yes, child name can be added online on MCD portal within 15 years of birth registration using parents declaration.' }
    ],
    commonMistakes: [
      'Spelling error in parents name matching hospital discharge summary'
    ],
    importantNotes: [
      'Digitally signed MCD Birth Certificates with QR code do not require physical stamp or signature.'
    ],
    lastUpdated: '2026-07-12',
    relatedServiceIds: ['income-certificate-delhi-revenue', 'marriage-certificate-delhi-revenue'],
    tags: ['Birth Certificate', 'MCD', 'NDMC', 'Delhi', 'Certificates'],
    isPopular: true
  },
  {
    id: 'income-certificate-delhi-revenue',
    title: 'Income Certificate (e-District Delhi Revenue Dept)',
    hindiTitle: 'आय प्रमाण पत्र (ई-डिस्ट्रिक्ट दिल्ली राजस्व विभाग)',
    category: 'Certificates',
    state: 'delhi',
    department: 'Revenue Department, Govt. of NCT of Delhi',
    shortDesc: 'Apply Income Certificate online via e-District Delhi portal for scholarships and EWS admissions.',
    overview: 'Income Certificate certifies annual family income from all sources and is issued by Tehsildar/SDM.',
    eligibility: [
      'Resident of NCT of Delhi holding valid ID and address proof'
    ],
    requiredDocs: [
      'Identity Proof: Aadhaar Card, Voter ID, Passport',
      'Address Proof: Rent Agreement, Electricity Bill, Water Bill, Ration Card',
      'Income Proof: Salary Slip / Form 16 / ITR / Bank Passbook / Self-Declaration Affidavit',
      'Passport size photograph'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in)',
      'Register citizen account or log in with User ID',
      'Click "Apply for Services" -> Select Revenue Dept -> "Issuance of Income Certificate"',
      'Fill applicant details, family income breakdown, and upload documents',
      'Submit self-declaration affidavit format',
      'Visit SDM counter if physical verification required or download digitally signed certificate using Application tracking number.'
    ],
    offlineProcess: [
      'Apply at Tehsildar / SDM office counter or Tehsil Suvidha Kendra.'
    ],
    fees: 'Free (Nil charge on e-District portal)',
    processingTime: '14 Working Days',
    officialWebsiteName: 'e-District Delhi Official Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in',
    downloadForms: [
      { name: 'Income Certificate Self Declaration Affidavit Format PDF', url: 'https://edistrict.delhigovt.nic.in/downloads/Income_Self_Dec.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'What is validity period of Income Certificate in Delhi?', answer: 'Income Certificate issued by Revenue Dept Delhi is valid for 1 year from date of issue.' }
    ],
    commonMistakes: [
      'Not submitting notarized self-declaration affidavit on ₹10 stamp paper format'
    ],
    importantNotes: [
      'Required for EWS school admission under RTE Act and Delhi Govt higher education fee waiver.'
    ],
    lastUpdated: '2026-07-14',
    relatedServiceIds: ['caste-certificate-delhi-revenue', 'birth-certificate-delhi-mcd'],
    tags: ['Income Certificate', 'e-District', 'Revenue Dept', 'Delhi', 'EWS'],
    isPopular: true
  },
  {
    id: 'marriage-certificate-delhi-revenue',
    title: 'Marriage Certificate Registration (e-District Delhi)',
    hindiTitle: 'विवाह पंजीकरण प्रमाण पत्र (दिल्ली)',
    category: 'Family Services',
    secondaryCategories: ['Certificates', 'Government Schemes'],
    state: 'delhi',
    department: 'Revenue Department (SDM Office), Govt. of NCT of Delhi',
    shortDesc: 'Register marriage under Hindu Marriage Act or Special Marriage Act online in Delhi.',
    overview: 'Legal registration of marriage before Registrar of Marriages / SDM in Delhi.',
    eligibility: [
      'Groom age 21+, Bride age 18+',
      'One of the spouses must have resided in Delhi NCT for at least 30 days prior to registration'
    ],
    requiredDocs: [
      'Age Proof of both spouses: Birth Certificate, Matriculation Certificate, Passport',
      'Address Proof: Aadhaar, Voter ID, Passport, Utility Bill in Delhi address',
      'Marriage invitation card or Religious marriage certificate from Priest/Gurudwara/Qazi',
      '4 joint passport photographs of couple + individual photos',
      '2 Witnesses with valid Aadhaar Card and Delhi address proof'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in)',
      'Click "Registration of Marriage"',
      'Fill details of Groom, Bride, and 2 Witnesses',
      'Upload document proofs and joint photos',
      'Pay fee online and select SDM Office appointment date',
      'Both spouses along with 2 witnesses must physically visit SDM office on appointment day with originals',
      'SDM issues Marriage Certificate after verification.'
    ],
    offlineProcess: [
      'Direct physical application at SDM office of respective district.'
    ],
    fees: 'Compulsory Marriage Registration Fee: ₹100 (Hindu Marriage Act) / ₹500 (Tatkal Scheme)',
    processingTime: 'Standard: 15 to 30 Days | Tatkal Scheme: 24 Hours',
    officialWebsiteName: 'e-District Delhi Official Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in',
    downloadForms: [
      { name: 'Marriage Registration Application Form PDF', url: 'https://edistrict.delhigovt.nic.in/downloads/Marriage_Form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Is Tatkal marriage registration available in Delhi?', answer: 'Yes, Delhi Revenue Dept offers Tatkal Marriage Registration within 24 hours for priority cases with ₹500 fee.' }
    ],
    commonMistakes: [
      'Witnesses not bringing original Aadhaar card on appointment day'
    ],
    importantNotes: [
      'Compulsory registration of marriage is mandatory under Delhi Registration of Marriage Rules.'
    ],
    lastUpdated: '2026-07-16',
    relatedServiceIds: ['income-certificate-delhi-revenue', 'passport-seva-delhi'],
    tags: ['Marriage Certificate', 'SDM', 'e-District', 'Delhi', 'Registration', 'Family'],
    isPopular: true
  },
  {
    id: 'delhi-ration-card-e-food-security',
    title: 'Delhi Family Ration Card & e-Food Security Card (NFSA Delhi)',
    hindiTitle: 'दिल्ली राशन कार्ड / ई-खाद्य सुरक्षा कार्ड',
    category: 'Family Services',
    secondaryCategories: ['Government Schemes', 'Identity & Documents'],
    state: 'delhi',
    department: 'Department of Food, Supplies & Consumer Affairs, Govt. of NCT of Delhi',
    shortDesc: 'Apply new NFS family ration card, add family member name, download e-Ration card PDF online in Delhi.',
    overview: 'National Food Security Act (NFSA) Delhi provides subsidized food grains (Wheat, Rice, Sugar) and e-Ration Cards to priority households and Antyodaya Anna Yojana (AAY) families.',
    eligibility: [
      'Resident family of Delhi NCT with total annual family income below ₹1 Lakh (for NFS priority card)',
      'Head of Family must preferably be the senior-most adult female member (aged 18+)'
    ],
    requiredDocs: [
      'Aadhaar Card of Head of Family & all family members',
      'Passport size photograph of Head of Family (Female HOF)',
      'Address proof in Delhi (Electricity Bill / Water Bill / Rent Agreement)',
      'Bank Passbook details of HOF'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in) or Delhi Food & Supplies Dept (nfs.delhi.gov.in)',
      'Click "Issuance of Priority Household Ration Card / Add Member Name"',
      'Fill family details, HOF female member details, and family income declaration',
      'Upload Aadhaar of all family members and address proof',
      'Submit application and note Acknowledgement Receipt Number',
      'Post inspector verification -> Download digital e-Ration Card PDF with QR code'
    ],
    offlineProcess: [
      'Visit Circle Office of Food & Supplies Officer (FSO) in your respective Assembly Constituency.'
    ],
    fees: 'Free (₹0 government fee under NFSA Delhi scheme)',
    processingTime: '15 to 30 Working Days',
    officialWebsiteName: 'Delhi Food Security Portal (NFSA Delhi)',
    officialGovUrl: 'https://nfs.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'How to add a newborn child name in Delhi Ration Card?', answer: 'Submit child birth certificate and Aadhaar card online on e-District portal under "Addition of Member in NFSA Ration Card".' }
    ],
    commonMistakes: [
      'Head of Family not chosen as female member aged above 18 years',
      'Aadhaar details mismatch with family member birth certificate'
    ],
    importantNotes: [
      'One Nation One Ration Card (ONORC) enables portability across any fair price shop in Delhi and India.'
    ],
    lastUpdated: '2026-07-28',
    relatedServiceIds: ['income-certificate-delhi-revenue', 'birth-certificate-delhi-mcd'],
    tags: ['Ration Card', 'NFSA', 'e-Ration', 'Food Security', 'Family Card', 'Delhi Food Dept'],
    isPopular: true
  },
  {
    id: 'delhi-ladli-scheme-girl-child',
    title: 'Delhi Ladli Scheme (Financial Aid for Girl Child)',
    hindiTitle: 'दिल्ली लाडली योजना (बालिका वित्तीय सहायता)',
    category: 'Family Services',
    secondaryCategories: ['Education', 'Government Schemes'],
    state: 'delhi',
    department: 'Department of Women & Child Development, Govt. of NCT of Delhi / SBI',
    shortDesc: 'Financial assistance up to ₹1,00,000 for girl child born in Delhi from birth through Class 12 education.',
    overview: 'Delhi Ladli Scheme provides term deposits in the name of girl children at milestone stages (birth, school admission, Class 6, 9, 10, 12) to promote education and prevent female foeticide.',
    eligibility: [
      'Girl child born in Delhi NCT',
      'Family resident in Delhi for at least 3 years',
      'Total annual family income up to ₹1,00,000'
    ],
    requiredDocs: [
      'Birth Certificate of Girl Child issued by MCD/NDMC',
      'Delhi Address proof of parents (3 years residency proof e.g. Voter ID/Aadhaar/Electricity Bill)',
      'Family Income Certificate issued by Revenue Dept SDM',
      'Passport size photograph of girl child with mother/father'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in) or WCD Delhi Portal (wcd.delhi.gov.in)',
      'Click "Delhi Ladli Scheme Application"',
      'Fill girl child birth details, school admission details, and parent income proof',
      'Upload birth certificate, 3-year Delhi residency proof, and income certificate',
      'Submit application to District WCD Officer or Government Recognized School principal',
      'SBICAP locks financial deposits; matured amount transferred upon passing Class 12 at age 18'
    ],
    offlineProcess: [
      'Submit filled application form at District Women & Child Development (WCD) Office or school principal.'
    ],
    fees: 'Free (₹0)',
    processingTime: '15 to 30 Days for initial registration certificate',
    officialWebsiteName: 'Delhi WCD Ladli Scheme Portal',
    officialGovUrl: 'https://wcd.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'When can the girl child withdraw the Delhi Ladli maturity amount?', answer: 'The accumulated amount with interest is released directly to the girl child bank account upon reaching 18 years of age and passing Class 12.' }
    ],
    commonMistakes: [
      'Failing to renew income certificate at subsequent school admission milestones',
      'Applying post 1 year of birth without delayed registration approval'
    ],
    importantNotes: [
      'Financial deposit of ₹11,000 given for hospital delivery and ₹10,000 for institutional school admissions.'
    ],
    lastUpdated: '2026-07-27',
    relatedServiceIds: ['birth-certificate-delhi-mcd', 'income-certificate-delhi-revenue'],
    tags: ['Ladli Scheme', 'Girl Child', 'WCD Delhi', 'Financial Aid', 'Family Scheme'],
    isPopular: true
  },
  {
    id: 'delhi-govt-schools-directory-doe',
    title: 'Delhi DoE Govt Schools Directory & Locator (1,000+ Schools)',
    hindiTitle: 'दिल्ली सरकार स्कूल निर्देशिका एवं लोकेटर (1,000+ स्कूल DoE)',
    category: 'Education',
    secondaryCategories: ['Government Finders', 'Government Offices'],
    state: 'delhi',
    department: 'Directorate of Education (DoE), Govt. of NCT of Delhi',
    shortDesc: 'Comprehensive directory and locator for 1,000+ Delhi DoE government schools (Sarvodaya, SoSE, RPVV, GBSSS, GGSSS) across 29 zones.',
    overview: 'Find full details of all 1,000+ Delhi Government Schools across 29 DoE zones including Sarvodaya Kanya/Bal Vidyalayas (SKV/SBV), Dr. B.R. Ambedkar Schools of Specialized Excellence (SoSE), Rajkiya Pratibha Vikas Vidyalayas (RPVV), Govt Boys/Girls Senior Secondary Schools, address, streams, shifts, and contact numbers.',
    eligibility: [
      'Open for all students residing in Delhi NCT seeking admission in Delhi Govt Schools (Pre-Primary to Class 12)',
      'Free education from Class Nursery to Class 12 in all Delhi Government Schools'
    ],
    requiredDocs: [
      'Student Birth Certificate / Aadhaar Card',
      'Parent Delhi Address Proof (Ration Card / Voter ID / Aadhaar / Utility Bill)',
      'Previous Class Marksheet / School Leaving Certificate (SLC) for Plan/Non-Plan transfer',
      'EWS / DG / Caste Certificate (if applying under reserved category)'
    ],
    onlineProcess: [
      'Use the SarkarSaathi Delhi Govt School Finder tool or visit DoE portal (edudel.nic.in)',
      'Search by 7-digit DoE School ID (e.g. 1001001), District (East, West, South, North, etc.), or Area name',
      'View complete school profile: Shift (Morning/Evening), Gender (Girls/Boys/Co-Ed), Streams offered (Science PCB/PCM, Commerce, Arts, Vocational), Principal phone, and email',
      'For new Non-Plan Admissions (Class 6th to 9th), fill the online registration form on edudel.nic.in during DoE admission cycles',
      'Check allotted school status online and report to the school with original documents for physical verification'
    ],
    offlineProcess: [
      'Visit the nearest Sarvodaya Vidyalaya or District DoE Education Office for manual helpdesk support for Non-Plan admissions.'
    ],
    fees: 'Free (₹0)',
    processingTime: 'Instant Directory Search / Admission per DoE Schedule',
    officialWebsiteName: 'Delhi Directorate of Education (DoE)',
    officialGovUrl: 'http://www.edudel.nic.in',
    downloadForms: [],
    faqs: [
      { question: 'How can I find my local Delhi Government School ID?', answer: 'Search by locality or PIN Code in our Govt School Finder. Every DoE school has a unique 7-digit ID (e.g. 1001001).' },
      { question: 'Are Delhi Government Schools completely free?', answer: 'Yes, tuition fees, textbooks, uniforms, and mid-day meals are provided free of cost to all students in Delhi Govt schools up to Class 12.' }
    ],
    commonMistakes: [
      'Searching without checking DoE zone or district',
      'Missing original Delhi address proof during physical document verification at allotted school'
    ],
    importantNotes: [
      'Delhi Govt Schools provide 100% free education, uniforms, textbooks, and free mid-day meals.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-ews-dg-nursery-admission', 'delhi-sose-specialized-excellence-admission'],
    tags: ['Govt Schools', 'Delhi Schools', 'DoE Delhi', 'edudel', 'Sarvodaya Vidyalaya', 'SoSE', 'RPVV', 'School Finder', 'Education', 'School List', 'Delhi Govt School List'],
    isPopular: true
  },
  {
    id: 'delhi-ews-dg-nursery-admission',
    title: 'Delhi EWS / DG Quota Nursery & Entry Level Admission',
    hindiTitle: 'दिल्ली ईडब्ल्यूएस / डीजी कोटा नर्सरी स्कूल प्रवेश',
    category: 'Education',
    secondaryCategories: ['Government Schemes'],
    state: 'delhi',
    department: 'Directorate of Education (DoE), Govt. of NCT of Delhi',
    shortDesc: '25% free seat reservation for Economically Weaker Section (EWS) and Disadvantaged Group (DG) children in private recognized schools under RTE Act.',
    overview: 'Centralized online computerized draw of lots conducted by DoE Delhi for free admission of EWS/DG category children in private unaided recognized schools at Nursery, KG, and Class 1 levels with free uniforms and textbooks.',
    eligibility: [
      'Child residing in Delhi NCT',
      'EWS Category: Annual family income less than ₹1,00,000 (certified by Revenue Dept SDM)',
      'DG Category: SC/ST/OBC Non-Creamy Layer / Orphan / Transgender / Child with Special Needs (CWSN)',
      'Age limit: Nursery (3-5 yrs), KG (4-6 yrs), Class 1 (5-7 yrs) as on 31st March'
    ],
    requiredDocs: [
      'Child Birth Certificate or Hospital / Anganwadi record',
      'Parent Income Certificate (less than ₹1,00,000 p.a.) issued by SDM (for EWS category)',
      'Caste Certificate / Disability Certificate / Orphan proof (for DG category)',
      'Delhi Address Proof (Ration Card / Voter ID / Aadhaar / Domicile / Utility Bill)'
    ],
    onlineProcess: [
      'Visit DoE Delhi Portal (edudel.nic.in) and click "EWS / DG Admissions"',
      'Register with mobile number and child basic details',
      'Fill child date of birth, category (EWS/DG), and parent income details',
      'Select up to 10 preferred private recognized schools within 0-1 km, 1-3 km, and 3-6 km radius',
      'Submit application and save unique registration number',
      'DoE conducts automated computerized draw of lots and publishes result list online',
      'Report to allotted school within specified deadline for document verification and free admission'
    ],
    offlineProcess: [
      'Helpdesk available at DoE District Offices for parents who need assistance with online application submission.'
    ],
    fees: 'Free (₹0)',
    processingTime: 'Per DoE Admission Notification Schedule',
    officialWebsiteName: 'Delhi DoE EWS Portal',
    officialGovUrl: 'http://www.edudel.nic.in',
    downloadForms: [],
    faqs: [
      { question: 'Is income certificate required for DG (SC/ST/OBC) category?', answer: 'No, income certificate is not mandatory for DG category applicants (SC/ST/OBC NCL/CWSN), only valid category certificate is required.' }
    ],
    commonMistakes: [
      'Income certificate issued after application closing date',
      'Selecting schools outside resident distance radius'
    ],
    importantNotes: [
      'Computerized draw of lots is strictly transparent and managed by Directorate of Education software.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-govt-schools-directory-doe', 'income-certificate-delhi-revenue'],
    tags: ['EWS Nursery', 'DG Quota', 'DoE Delhi', 'Free School Education', 'RTE Act', 'Computerized Draw', 'Nursery Admission'],
    isPopular: true
  },
  {
    id: 'delhi-sose-specialized-excellence-admission',
    title: 'Dr. B.R. Ambedkar School of Specialized Excellence (SoSE)',
    hindiTitle: 'डॉ. बी.आर. अंबेडकर स्पेशलाइज्ड एक्सीलेंस स्कूल प्रवेश (SoSE)',
    category: 'Education',
    state: 'delhi',
    department: 'Directorate of Education (DoE) & Delhi Board of School Education (DBSE)',
    shortDesc: 'World-class specialized education in STEM, Armed Forces Preparatory (AFPS), Humanities, High-End 21st Century Skills, and Performing Arts.',
    overview: 'Dr. B.R. Ambedkar Schools of Specialized Excellence (SoSE) are choice-based specialized Delhi Govt schools affiliated with DBSE & International Baccalaureate (IB) offering domain-focused learning from Class 9th and Class 11th.',
    eligibility: [
      'Students studying in recognized schools in Delhi (Govt / Govt Aided / Private)',
      'Applying for Class 9th or Class 11th admission in specialized domains'
    ],
    requiredDocs: [
      'Student Delhi School ID / Class 8th or 10th Admit Card / Marksheet',
      'Aadhaar Card of student',
      'Category Certificate (SC/ST/OBC/CWSN if applicable)'
    ],
    onlineProcess: [
      'Visit edudel.nic.in/sose online portal during registration window',
      'Select domain preference: STEM, AFPS (Armed Forces), Humanities, HE21 (High-End 21st Century Skills), or PVA (Performing & Visual Arts)',
      'Complete online form and download Aptitude Entrance Admit Card',
      'Appear for SoSE Aptitude Test & Domain Round (e.g. physical fitness round for AFPS / audition for PVA)',
      'Check merit list on DoE portal and complete document verification for final enrollment'
    ],
    offlineProcess: [
      'Written test and practical domain rounds conducted at designated examination centers.'
    ],
    fees: 'Free (₹0)',
    processingTime: 'Per DoE Entrance Exam Schedule',
    officialWebsiteName: 'Delhi SoSE Admission Portal',
    officialGovUrl: 'http://www.edudel.nic.in/sose',
    downloadForms: [],
    faqs: [
      { question: 'Are SoSE schools affiliated with CBSE or DBSE?', answer: 'SoSE schools are affiliated with Delhi Board of School Education (DBSE) in collaboration with International Baccalaureate (IB).' }
    ],
    commonMistakes: [
      'Not preparing for domain-specific aptitude assessment test'
    ],
    importantNotes: [
      'SoSE schools offer world-class specialized education with IB certification.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-govt-schools-directory-doe'],
    tags: ['SoSE', 'Specialized Excellence', 'AFPS', 'STEM', 'DBSE', 'IB School', 'Delhi Govt School'],
    isPopular: true
  },
  {
    id: 'delhi-govt-higher-education-institutes-igod',
    title: 'Delhi Government Educational Institutes & Universities Directory (iGOD Ref DL/E009)',
    hindiTitle: 'दिल्ली सरकार उच्च शिक्षा संस्थान एवं विश्वविद्यालय निर्देशिका (iGOD E009)',
    category: 'Education',
    secondaryCategories: ['Government Offices', 'Government Finders'],
    state: 'delhi',
    department: 'Directorate of Higher Education & DTTE, Govt. of NCT of Delhi',
    shortDesc: 'Official directory of Delhi State Universities, Technical & Engineering Institutes (DTU, NSUT, IIITD, IGDTUW, GGSIPU, AUD, DSEU), Medical Colleges, ITIs & DIETs.',
    overview: 'Directory of all Delhi Government higher education institutions, autonomous bodies, state universities, medical colleges (MAMC, DPSRU), engineering institutes, polytechnics, and teacher training councils listed on iGOD (Indian Government Open Data Portal, Ref: DL/E009).',
    eligibility: [
      'Delhi Domicile Students (85% seat quota in Delhi State Universities: DTU, NSUT, IIIT-Delhi, IGDTUW, AUD, GGSIPU, DSEU)',
      'All-India students (15% All India Quota in Delhi State Universities & Central Universities: DU, JNU, JMI, AIIMS, IIT Delhi)'
    ],
    requiredDocs: [
      'Delhi Address / Domicile Proof (for 85% Delhi Region Quota in State Universities)',
      'Class 10th & 12th Marksheets / Passing Certificates',
      'Entrance Exam Scorecards (JEE Main for DTU/NSUT/IIITD/IGDTUW, JAC Delhi counselling, NEET for MBBS/MAMC, CLAT/AILET for NLU, CUET for DU/AUD)',
      'Category Certificate (SC/ST/OBC-NCL Delhi/EWS) if claiming reservation'
    ],
    onlineProcess: [
      'Use the SarkarSaathi Government Institutes Finder or visit the iGOD Organizations Directory (igod.gov.in/sg/DL/E009/organizations)',
      'Filter by institute type: State University, Medical College, Engineering & Tech, Polytechnic & ITI, or Law & Arts',
      'Check course programs offered, admission entrance exams (JAC Delhi, CUET, NEET, IPU CET, CLAT)',
      'Click official university links for direct online application and counseling registration',
      'Verify iGOD organization reference code for authentic government credential verification'
    ],
    offlineProcess: [
      'Visit university main campuses in Delhi (e.g., DTU Rohini, NSUT Dwarka, IPU Dwarka, AUD Kashmere Gate) for administrative helpdesks and physical document verification during JAC/CUET counselling.'
    ],
    fees: 'Varies by University & Scholarship (Fee concessions for EWS/SC/ST available)',
    processingTime: 'Instant Directory Access / Admissions as per University Academic Calendars',
    officialWebsiteName: 'iGOD Delhi Education Directory (DL/E009)',
    officialGovUrl: 'https://igod.gov.in/sg/DL/E009/organizations',
    downloadForms: [],
    faqs: [
      { question: 'What is the Delhi Domicile seat quota in Delhi State Universities?', answer: '85% of total seats in Delhi State Universities (DTU, NSUT, IIITD, IGDTUW, AUD, GGSIPU, DPSRU, DSEU) are strictly reserved for candidates who completed Class 12 from a school located in NCT of Delhi.' },
      { question: 'Which counselling body manages admissions for DTU, NSUT, IIITD, and IGDTUW?', answer: 'Joint Admission Counselling Delhi (JAC Delhi) conducts common online counselling based on JEE Main CRL/Category ranks.' }
    ],
    commonMistakes: [
      'Assuming Delhi domicile requires a domicile certificate when passing Class 12 from a Delhi school qualifies you for the 85% Delhi quota',
      'Missing JAC Delhi counselling registration deadlines for engineering state universities'
    ],
    importantNotes: [
      'All listed institutes are officially verified government institutions listed under iGOD Directory Code DL/E009.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-govt-schools-directory-doe', 'delhi-sose-specialized-excellence-admission'],
    tags: ['Higher Education', 'Delhi Universities', 'DTU', 'NSUT', 'IIIT Delhi', 'GGSIPU', 'MAMC', 'DSEU', 'iGOD E009', 'Colleges', 'State University'],
    isPopular: true
  },
  {
    id: 'delhi-senior-citizen-pension-scheme',
    title: 'Delhi Senior Citizen Old Age Pension Scheme',
    hindiTitle: 'दिल्ली वरिष्ठ नागरिक (वृद्धावस्था) पेंशन योजना',
    category: 'Family Services',
    secondaryCategories: ['Government Schemes'],
    state: 'delhi',
    department: 'Department of Social Welfare, Govt. of NCT of Delhi',
    shortDesc: 'Monthly pension of ₹2,000 to ₹2,500 for senior citizens (60+ years) belonging to low income families in Delhi.',
    overview: 'Delhi Social Welfare Department provides monthly financial security to elderly family members aged 60 years and above.',
    eligibility: [
      'Senior citizen aged 60 years or above',
      'Resident of Delhi NCT for minimum 5 years',
      'Family annual income below ₹1,00,000',
      'Having active single-operated bank account linked with Aadhaar'
    ],
    requiredDocs: [
      'Aadhaar Card & Voter ID Card of Senior Citizen',
      'Age Proof (Birth Certificate / School Certificate / Passport / Voter ID)',
      '5-Year Residence Proof in Delhi',
      'Family Income Certificate issued by Revenue SDM',
      'Bank Passbook copy with Aadhaar DBT seeding'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in)',
      'Select Social Welfare Dept -> "Financial Assistance to Senior Citizens"',
      'Fill applicant age, Delhi residency duration, bank account, and Aadhaar details',
      'Upload age proof, 5-year address proof, income certificate, and bank passbook',
      'Submit form -> Track PFMS / DBT pension status online'
    ],
    offlineProcess: [
      'District Social Welfare Office or nearest Citizen Service Centre (CSC) in Delhi.'
    ],
    fees: 'Free (₹0)',
    processingTime: '30 to 45 Days',
    officialWebsiteName: 'e-District Delhi Social Welfare Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is the monthly pension amount for senior citizens in Delhi?', answer: '₹2,000/month for age group 60-69 years (₹2,500 for SC/ST/Disabled) and ₹2,500/month for age group 70+ years.' }
    ],
    commonMistakes: [
      'Bank account not linked with Aadhaar NPCI mapper for Direct Benefit Transfer (DBT)',
      'Submitting address proof less than 5 years old'
    ],
    importantNotes: [
      'Pension amount is credited directly to beneficiary bank account via Aadhaar-enabled DBT every month.'
    ],
    lastUpdated: '2026-07-26',
    relatedServiceIds: ['income-certificate-delhi-revenue', 'delhi-widow-pension-distress-women'],
    tags: ['Senior Citizen', 'Old Age Pension', 'Social Welfare', 'e-District', 'DBT'],
    isPopular: true
  },
  {
    id: 'delhi-widow-pension-distress-women',
    title: 'Delhi Financial Assistance to Women in Distress (Widow Pension)',
    hindiTitle: 'दिल्ली विधवा एवं बेसहारा महिला पेंशन योजना',
    category: 'Family Services',
    secondaryCategories: ['Government Schemes'],
    state: 'delhi',
    department: 'Department of Women & Child Development / Social Welfare, Govt. of NCT of Delhi',
    shortDesc: 'Monthly pension of ₹2,500 for widowed, divorced, destitute, or abandoned women aged 18 to 60 in Delhi.',
    overview: 'Provides monthly financial aid to widowed and destitute women to support household expenses and family sustenance.',
    eligibility: [
      'Female resident of Delhi NCT aged 18 to 60 years',
      'Widowed, divorced, abandoned, or destitute woman',
      'Family annual income below ₹1,00,000 from all sources'
    ],
    requiredDocs: [
      'Aadhaar Card & Voter ID of applicant',
      'Husband Death Certificate (for widows) or Divorce Decree / Abandonment Affidavit',
      '5-Year Delhi Residence Proof',
      'Income Certificate issued by SDM Revenue Dept',
      'Aadhaar linked Bank Account Passbook'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in)',
      'Select "Financial Assistance to Women in Distress (Widow Pension)"',
      'Enter personal details, husband death certificate registration number, and bank account',
      'Upload death certificate, income certificate, 5-year address proof, and photo',
      'Submit online application -> Direct monthly credit via DBT'
    ],
    offlineProcess: [
      'District WCD / Social Welfare Office or District e-District Facilitation Counters.'
    ],
    fees: 'Free (₹0)',
    processingTime: '30 Days',
    officialWebsiteName: 'e-District Delhi WCD Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'What happens to widow pension when the beneficiary reaches 60 years of age?', answer: 'At 60 years, the beneficiary is automatically migrated to the Delhi Senior Citizen Old Age Pension Scheme.' }
    ],
    commonMistakes: [
      'Not linking bank account with Aadhaar for NPCI DBT payments'
    ],
    importantNotes: [
      'Beneficiary receives ₹2,500 every month directly in bank account.'
    ],
    lastUpdated: '2026-07-28',
    relatedServiceIds: ['delhi-senior-citizen-pension-scheme', 'income-certificate-delhi-revenue'],
    tags: ['Widow Pension', 'Women in Distress', 'WCD Delhi', 'Social Aid', 'Family Pension'],
    isPopular: true
  },
  {
    id: 'delhi-birth-child-name-addition',
    title: 'Child Name Addition in Birth Certificate (MCD Delhi)',
    hindiTitle: 'जन्म प्रमाण पत्र में बच्चे का नाम जोड़ना (एमसीडी)',
    category: 'Family Services',
    secondaryCategories: ['Certificates', 'Corrections'],
    state: 'delhi',
    department: 'Municipal Corporation of Delhi (MCD) / NDMC / Delhi Cantt',
    shortDesc: 'Add newborn baby name to registered MCD birth certificate online without visiting civic centers.',
    overview: 'MCD allows parents to add child name in birth certificate within 15 years of birth registration online.',
    eligibility: [
      'Parents of child whose birth was registered in Delhi MCD/NDMC/DCB without child name'
    ],
    requiredDocs: [
      'Existing Birth Certificate without child name (Registration No & Registration Date)',
      'Joint Affidavit from Parents stating child name on ₹10 e-stamp paper',
      'Aadhaar Card / Identity Proof of Parents',
      'School ID or immunisation card (if child is enrolled in school)'
    ],
    onlineProcess: [
      'Visit MCD Official Services Portal (mcdonline.nic.in)',
      'Click "Birth & Death Registration" -> "Child Name Addition"',
      'Enter Birth Registration Number and Year',
      'Enter proposed child name in Hindi and English',
      'Upload parent affidavit and Aadhaar ID proof',
      'Pay nominal fee online',
      'Instant approval -> Download updated Birth Certificate PDF with child name'
    ],
    offlineProcess: [
      'MCD Citizen Facilitation Centre (CFC) in respective MCD Zone.'
    ],
    fees: '₹10 (Free if added within 1 year of birth registration)',
    processingTime: '1 to 3 Working Days (Instant for digital records)',
    officialWebsiteName: 'MCD Birth Registration Portal',
    officialGovUrl: 'https://mcdonline.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'Up to what age can parents add child name in Delhi birth certificate?', answer: 'Child name can be added up to 15 years from the date of birth registration under Registration of Births and Deaths Act.' }
    ],
    commonMistakes: [
      'Spelling mismatch between parent affidavit and proposed child name in Hindi/English'
    ],
    importantNotes: [
      'Once added, child name cannot be changed easily without gazette notification.'
    ],
    lastUpdated: '2026-07-25',
    relatedServiceIds: ['birth-certificate-delhi-mcd', 'marriage-certificate-delhi-revenue'],
    tags: ['Birth Certificate', 'Child Name Addition', 'MCD Delhi', 'Family Certificate'],
    isPopular: true
  },
  {
    id: 'rti-online-delhi',
    title: 'RTI Online Application & Appeal (Delhi Govt & Central)',
    hindiTitle: 'सूचना का अधिकार (आरटीआई) ऑनलाइन आवेदन',
    category: 'RTI',
    state: 'delhi',
    department: 'Department of Administrative Reforms (Delhi RTI Portal / Central RTI)',
    shortDesc: 'File online RTI application to Delhi Govt departments or Central Ministries for ₹10 fee.',
    overview: 'Right to Information Act 2005 empowers Indian citizens to seek information from public authorities.',
    eligibility: [
      'Citizen of India'
    ],
    requiredDocs: [
      'No complex docs required. Aadhaar or ID details for identification.'
    ],
    onlineProcess: [
      'For Delhi Govt: Visit rtionline.delhi.gov.in',
      'For Central Govt: Visit rtionline.gov.in',
      'Click "Submit Request" / "View Status"',
      'Select Department / Public Authority (e.g. MCD, Delhi Police, DDA, DJB)',
      'Draft concise, specific questions (up to 3,000 characters)',
      'Pay ₹10 RTI fee via Net Banking, UPI, or Debit Card (BPL cardholders exempt)',
      'Note down Registration Number for tracking 30-day response deadline.'
    ],
    offlineProcess: [
      'Submit written application on plain paper to PIO (Public Information Officer) with ₹10 IPO (Indian Postal Order).'
    ],
    fees: 'Application Fee: ₹10 | BPL Category: Free',
    processingTime: '30 Days mandatory deadline under RTI Act',
    officialWebsiteName: 'RTI Online Portal Delhi & National',
    officialGovUrl: 'https://rtionline.delhi.gov.in/',
    downloadForms: [
      { name: 'RTI Application Standard Format & Online Portal', url: 'https://rtionline.delhi.gov.in/', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'What happens if RTI reply is not received in 30 days?', answer: 'You can file First Appeal online within 30 days to First Appellate Authority (FAA) of same department.' }
    ],
    commonMistakes: [
      'Asking grievances or opinions instead of requesting specific official records/files'
    ],
    importantNotes: [
      'Life or liberty related RTI requests must be answered within 48 hours.'
    ],
    lastUpdated: '2026-07-18',
    relatedServiceIds: ['delhi-police-pcc', 'mcd-property-tax-delhi'],
    tags: ['RTI', 'Right to Information', 'Delhi RTI', 'Grievance', 'Govt Accountability'],
    isPopular: true
  },
  {
    id: 'traffic-challan-pay-delhi',
    title: 'Delhi Traffic Police e-Challan Payment & Virtual Court',
    hindiTitle: 'दिल्ली ट्रैफिक पुलिस चालान भुगतान एवं वर्चुअल कोर्ट',
    category: 'Vehicles & Transport',
    secondaryCategories: ['Police & Legal'],
    state: 'delhi',
    department: 'Delhi Traffic Police & Virtual Courts e-Courts',
    shortDesc: 'Pay camera red-light, overspeeding challans or contest in Delhi Virtual Court online.',
    overview: 'Delhi Traffic Police uses automated speed cameras and OSVD camera networks to issue e-challans.',
    eligibility: [
      'Vehicle owner or driver with pending traffic challan in Delhi'
    ],
    requiredDocs: [
      'Vehicle RC Number or Driving Licence Number or 18-digit Challan Number'
    ],
    onlineProcess: [
      'Visit Parivahan e-Challan Portal (echallan.parivahan.gov.in) or Delhi Traffic Police Portal (traffic.delhipolice.gov.in)',
      'Enter Challan Number / Vehicle Number / DL Number + Captcha',
      'View challan details, photo proof, speed evidence, and location',
      'If status is "Pending", click "Pay Now" -> Redirects to payment gateway -> Download receipt.',
      'If sent to "Virtual Court", visit vcourts.gov.in -> Select Delhi -> View fine -> Accept fine or contest -> Pay online.'
    ],
    offlineProcess: [
      'Visit Delhi Traffic Police Headquarters or attend Lok Adalat session.'
    ],
    fees: 'As per Motor Vehicles Act 2019 fine structure',
    processingTime: 'Instant Status Update',
    officialWebsiteName: 'Delhi Traffic Police e-Challan Portal',
    officialGovUrl: 'https://echallan.parivahan.gov.in',
    downloadForms: [],
    faqs: [
      { question: 'How do I resolve a Virtual Court challan?', answer: 'Visit vcourts.gov.in, select Delhi Traffic Virtual Court, enter mobile/challan number, verify OTP, accept judge proposed fine, and pay online.' }
    ],
    commonMistakes: [
      'Ignoring challans until vehicle NOC / fitness renewal is blocked'
    ],
    importantNotes: [
      'National Lok Adalat is held quarterly in Delhi offering discount/settlement on minor traffic challans.'
    ],
    lastUpdated: '2026-07-22',
    relatedServiceIds: ['driving-licence-delhi-transport', 'rc-transfer-delhi'],
    tags: ['Traffic Challan', 'Delhi Traffic Police', 'Virtual Court', 'e-Challan', 'Fine'],
    isPopular: true
  },
  {
    id: 'hsrp-booking-delhi',
    title: 'High Security Registration Plate (HSRP) & Color Sticker Booking',
    hindiTitle: 'हाई सिक्योरिटी रजिस्ट्रेशन प्लेट (HSRP) एवं कलर स्टिकर ऑनलाइन बुकिंग',
    category: 'Vehicles & Transport',
    state: 'delhi',
    department: 'Transport Department, Govt. of NCT of Delhi / Rosmerta Safety Systems',
    shortDesc: 'Mandatory online booking for High Security Number Plates (HSRP) & color-coded fuel stickers with dealer appointment or doorstep delivery in Delhi.',
    overview: 'As per Ministry of Road Transport & Highways (MoRTH) and Delhi Transport Department mandates, all vehicles registered prior to April 1, 2019 in Delhi must have High Security Registration Plates (HSRP) along with laser-engraved chromium hologram and color-coded fuel stickers.',
    eligibility: [
      'Two-wheelers, 3-wheelers, 4-wheelers, and commercial vehicles registered in Delhi NCT',
      'Mandatory for vehicles with old non-HSRP aluminium / acrylic number plates'
    ],
    requiredDocs: [
      'Vehicle Registration Certificate (RC) details (Chassis Number & Engine Number)',
      'Vehicle Registration Number (e.g., DL 01 AB 1234)',
      'Mobile Number for OTP and booking SMS updates',
      'Aadhaar / ID proof for doorstep home delivery (if opted)'
    ],
    onlineProcess: [
      'Visit the official Book-MY-HSRP portal (bookmyhsrp.com)',
      'Select "High Security Registration Plate with Colour Sticker" or "Only Colour Sticker"',
      'Select State (Delhi NCT) and Vehicle Category (Private / Commercial, 2-Wheeler / 4-Wheeler / EV)',
      'Select Vehicle Make/Brand (Maruti, Hyundai, Honda, Tata, Hero, TVS, etc.)',
      'Fill Vehicle Details: Registration Number, Chassis Number (last 5 digits), Engine Number (last 5 digits) + Captcha',
      'Choose Fitment Location: "Dealer Fitment" (visit nearby authorized dealer) or "Home Delivery" (doorstep fitment)',
      'Select Slot Date & Time for appointment',
      'Make online payment (Credit/Debit Card, UPI, Net Banking) -> Save & print HSRP Appointment Receipt PDF',
      'Show receipt to traffic police as proof of booking in case of enforcement checks.'
    ],
    offlineProcess: [
      'On the chosen appointment date, visit the selected vehicle dealership or keep vehicle ready at home for doorstep technician fitment.'
    ],
    fees: 'Two-Wheeler HSRP: ~₹300-₹400 | Four-Wheeler (Car) HSRP: ~₹600-₹800 | Color Sticker Only: ~₹150 (Home delivery charge extra ~₹125-₹250)',
    processingTime: '3 to 5 Working Days',
    officialWebsiteName: 'Book-MY-HSRP Official Portal (Delhi Govt Authorized)',
    officialGovUrl: 'https://bookmyhsrp.com',
    downloadForms: [],
    faqs: [
      { question: 'What is the fine for driving without HSRP in Delhi?', answer: 'Driving without HSRP or color-coded fuel sticker attracts a fine of up to ₹5,000 to ₹10,000 under Section 192 of Motor Vehicles Act in Delhi.' },
      { question: 'What if my HSRP plate is damaged or lost?', answer: 'Select "Replacement / Damage Plate" option on bookmyhsrp.com, enter RC details, and re-order single plate or fresh pair.' }
    ],
    commonMistakes: [
      'Entering mismatching chassis or engine number from old RC',
      'Not carrying printed booking receipt in vehicle during transit'
    ],
    importantNotes: [
      'Carrying valid HSRP booking receipt protects against traffic challans while waiting for installation slot.'
    ],
    lastUpdated: '2026-07-28',
    relatedServiceIds: ['driving-licence-delhi-transport', 'traffic-challan-pay-delhi'],
    tags: ['HSRP', 'Number Plate', 'Book My HSRP', 'Delhi Transport', 'Color Sticker', 'Vehicle'],
    isPopular: true
  },
  {
    id: 'ayushman-arogya-mandir-service',
    title: 'Ayushman Arogya Mandir (Health & Wellness Centre) OPD & ABHA Services',
    hindiTitle: 'आयुष्मान आरोग्य मंदिर (हेल्थ एंड वेलनेस सेंटर) मुफ़्त ओपीडी एवं आभा कार्ड सेवा',
    category: 'Health',
    secondaryCategories: ['Healthcare & Medical'],
    state: 'delhi',
    department: 'Ministry of Health & Family Welfare (MoHFW) / Health Dept Govt of NCT Delhi',
    shortDesc: 'Access free doctor OPD consultation, 212 free generic medicines, 107 diagnostic lab tests, and instant ABHA Card creation at nearby Ayushman Arogya Mandir clinics.',
    overview: 'Ayushman Arogya Mandirs (AAMs) are government-recognized primary health and wellness centres established across Delhi NCR to provide comprehensive, accessible, and free primary health care close to people’s homes.',
    eligibility: [
      'All residents, citizens, and families in Delhi NCR',
      'No income limit or ration card required for free OPD doctor consultation and medicines',
      'Aadhaar card and mobile number required for instant ABHA Health Account creation'
    ],
    requiredDocs: [
      'Aadhaar Card or Photo ID for patient registration',
      'Active Mobile Number for OTP and ABHA Digital Health Record linking'
    ],
    onlineProcess: [
      'Visit the official Ayushman Arogya Mandir Portal (aam.mohfw.gov.in) or Delhi Health Portal (health.delhi.gov.in)',
      'Search for nearest Ayushman Arogya Mandir by state (Delhi), district, PIN code, or facility type',
      'View doctor availability, OPD timing (8:00 AM - 2:00 PM), list of 212 free medicines, and 107 free lab tests available',
      'Walk into the selected Ayushman Arogya Mandir for free token registration, consultation, and medicine issue.'
    ],
    offlineProcess: [
      'Visit your nearest Ayushman Arogya Mandir between 8:00 AM to 2:00 PM (Monday to Saturday)',
      'Get a free OPD slip at the counter, consult the Medical Officer In-Charge (MBBS Doctor)',
      'Receive prescribed free generic medicines directly from the in-clinic pharmacy and complete free blood/urine tests.'
    ],
    fees: '100% Free (₹0 OPD Fee, ₹0 Medicine Cost, ₹0 Lab Test Fee)',
    processingTime: 'Same Day Walk-In Service',
    officialWebsiteName: 'Ayushman Arogya Mandir Official Portal (MoHFW)',
    officialGovUrl: 'https://aam.mohfw.gov.in',
    downloadForms: [],
    faqs: [
      { question: 'Do I need an Ayushman Bharat Card to visit an Ayushman Arogya Mandir?', answer: 'No. Doctor consultation, 212 medicines, and 107 lab tests are 100% free for all walk-in patients without any prior card.' },
      { question: 'What is ABHA ID and can I make it at AAM?', answer: 'ABHA (Ayushman Bharat Health Account) is a 14-digit digital health ID. Every Ayushman Arogya Mandir has a counter to generate your free ABHA ID.' }
    ],
    commonMistakes: [
      'Assuming AAM clinics charge fees for medicines or lab tests',
      'Visiting after 2:00 PM without checking morning OPD timing'
    ],
    importantNotes: [
      'Ayushman Arogya Mandirs also conduct regular screening for Hypertension, Diabetes, Breast & Oral Cancers free of charge.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['jan-aushadhi-delhi', 'delhi-govt-hospitals'],
    tags: ['Ayushman Arogya Mandir', 'AAM', 'Health Centre', 'Free Medicines', 'ABHA Card', 'Delhi Health'],
    isPopular: true
  },
  {
    id: 'delhi-mla-mp-directory-service',
    title: 'Delhi MLA & MP Representative Office Directory & Public Grievances',
    hindiTitle: 'दिल्ली विधायक (MLA) एवं सांसद (MP) कार्यालय निर्देशिका एवं जन शिकायत सेवा',
    category: 'Governance & Public Offices',
    state: 'delhi',
    department: 'Delhi Legislative Assembly (Vidhan Sabha) & Lok Sabha Secretariat',
    shortDesc: 'Find official contact numbers, constituency office addresses, email IDs, and public meeting hours for all 70 Delhi Vidhan Sabha MLAs and 7 Lok Sabha MPs.',
    overview: 'The Delhi Legislative Assembly (Vidhan Sabha) consists of 70 elected Members of Legislative Assembly (MLAs), and Delhi NCR is represented by 7 Members of Parliament (MPs) in the Lok Sabha. Citizens can visit their constituency office to submit petitions, request civic development funds, or lodge local grievances.',
    eligibility: [
      'All residents and citizens residing in any of the 70 Delhi Vidhan Sabha constituencies',
      'Voters and residents of the 7 Lok Sabha parliamentary constituencies of Delhi'
    ],
    requiredDocs: [
      'Written representation or grievance letter outlining the issue',
      'Supporting documents (photographs, previous complaints, utility bills for area verification)'
    ],
    onlineProcess: [
      'Visit the official Delhi Legislative Assembly portal (delhiassembly.delhi.gov.in) or use our finder tool',
      'Download or view the official Member List PDF (delhiassembly.delhi.gov.in/sites/default/files/2025-04/list_of_member.pdf)',
      'Search your constituency name, PIN code, or locality to obtain direct telephone numbers, email addresses, and office locations.',
      'Send your petition or grievance via email directly to the representative office.'
    ],
    offlineProcess: [
      'Locate your representative constituency office address using the finder',
      'Visit during designated public interaction hours (generally 10:00 AM to 1:00 PM on working weekdays)',
      'Submit your written representation directly to the MLA/MP office secretary and obtain a acknowledgment receipt.'
    ],
    fees: '100% Free Public Service (₹0 Fee)',
    processingTime: 'Immediate Consultation / Public Hours',
    officialWebsiteName: 'Delhi Legislative Assembly Official Portal',
    officialGovUrl: 'https://delhiassembly.delhi.gov.in',
    downloadForms: [
      {
        name: 'Official List of Members (Delhi Vidhan Sabha PDF)',
        url: 'https://delhiassembly.delhi.gov.in/sites/default/files/2025-04/list_of_member.pdf',
        isOfficialPdf: true
      }
    ],
    faqs: [
      { question: 'How can I find my MLA or MP in Delhi?', answer: 'Use the MLA / MP Finder by entering your locality name (e.g., Rohini, Dwarka, Laxmi Nagar) or 6-digit PIN code to instantly view your representative details.' },
      { question: 'Where can I access the official Delhi Vidhan Sabha Member List PDF?', answer: 'The official PDF is accessible at https://delhiassembly.delhi.gov.in/sites/default/files/2025-04/list_of_member.pdf.' }
    ],
    commonMistakes: [
      'Confusing Vidhan Sabha MLA constituency boundaries with Lok Sabha MP parliamentary boundaries',
      'Visiting constituency offices outside public grievance hearing hours'
    ],
    importantNotes: [
      'All 70 Delhi Assembly MLAs have designated public interaction hours at their constituency offices to address local infrastructure, water, sanitation, and civic issues.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['sdm-certificate-delhi', 'pgms-delhi-grievance'],
    tags: ['MLA', 'MP', 'Vidhan Sabha', 'Lok Sabha', 'Delhi Assembly', 'Public Representative', 'Delhi Government'],
    isPopular: true
  },
  {
    id: 'delhi-employment-exchange-registration',
    title: 'Delhi Government Employment Exchange Registration & Job Seekers Portal',
    hindiTitle: 'दिल्ली सरकार रोज़गार कार्यालय पंजीकरण एवं ऑनलाइन रोज़गार पोर्टल (onlineemploymentportal.delhi.gov.in)',
    category: 'Employment',
    state: 'delhi',
    department: 'Directorate of Employment, Govt. of NCT of Delhi',
    shortDesc: 'Register as a job seeker with Delhi Govt Employment Exchanges, get official Registration Number (X-10 card), upload skill qualifications, and participate in Job Fairs (Rojgar Melas).',
    overview: 'The Directorate of Employment, Government of NCT of Delhi operates the official Online Employment Portal (onlineemploymentportal.delhi.gov.in) and district employment exchanges across Delhi. It facilitates online job seeker registration, issuance of Employment Exchange Registration Cards (X-10), vocational career guidance, skill development training, and organizes regular Job Fairs (Rojgar Melas) connecting educated youth with private & public sector employers.',
    eligibility: [
      'Delhi Domicile / Resident candidates aged 18 years and above',
      'Minimum educational qualification: 8th Pass, 10th Pass, 12th Pass, Diploma, ITI, Graduate, or Post Graduate',
      'Unemployed, underemployed youth or candidates seeking career guidance and government vocational training'
    ],
    requiredDocs: [
      'Proof of Identity: Aadhaar Card, Voter ID, or Passport',
      'Proof of Address: Aadhaar Card, Passport, Water/Electricity Bill, or Voter ID showing Delhi address',
      'Educational Certificates & Marksheets (Class 10th, 12th, Graduation, ITI, Diploma degree certificates)',
      'Caste / Category Certificate (SC/ST/OBC-Delhi/EWS/PwD) if applicable for reservation benefits',
      'Passport size photograph and mobile number linked with Aadhaar'
    ],
    onlineProcess: [
      'Visit the official Delhi Employment Portal (onlineemploymentportal.delhi.gov.in).',
      'Click on "Job Seeker Registration" and enter Aadhaar number, basic details, and active mobile number.',
      'Fill in educational qualifications, technical skills, language fluency, and work experience details.',
      'Upload scanned copies of marksheets, address proof, and recent photograph.',
      'Submit the application to generate your official Delhi Employment Exchange Registration Number (X-10 Card).',
      'Download and print the digital Employment Exchange Identity Card for attending Rojgar Melas and government job calls.'
    ],
    offlineProcess: [
      'Visit your designated District Employment Exchange Office in Delhi (e.g., Curzon Road, Pusa, Shahdara, Kirby Place, Darya Ganj) with original certificates, Aadhaar card, and passport photos for physical registration.'
    ],
    fees: '100% Free Government Registration (₹0 Fee)',
    processingTime: 'Instant Online Registration & X-10 Card Generation',
    officialWebsiteName: 'Delhi Directorate of Employment Official Portal',
    officialGovUrl: 'https://onlineemploymentportal.delhi.gov.in/',
    downloadForms: [
      {
        name: 'Delhi Employment Exchange Portal & Registration Link',
        url: 'https://onlineemploymentportal.delhi.gov.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'What is the X-10 Card issued by Delhi Employment Exchange?', answer: 'The X-10 Card is an official registration card issued by the Delhi Directorate of Employment containing your unique registration number, qualification code, and renewal date.' },
      { question: 'Is Delhi domicile necessary for registering on Delhi Employment Portal?', answer: 'Yes, candidates residing or holding address proof in NCT of Delhi are eligible for registration in Delhi District Employment Exchanges.' },
      { question: 'How do I participate in Delhi Government Rojgar Melas (Job Fairs)?', answer: 'Once registered on onlineemploymentportal.delhi.gov.in, you will receive SMS notifications for upcoming Job Fairs and can directly log in to apply for participating employer stalls.' }
    ],
    commonMistakes: [
      'Not updating higher educational degrees or additional skills acquired after initial registration',
      'Forgetting to renew the Employment Exchange registration every 3 years'
    ],
    importantNotes: [
      'Registration with the Employment Exchange provides official proof of unemployment often required for government skill training grants, apprenticeships, and social welfare schemes.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-rozgar-bazar-job-portal', 'dsssb-delhi-govt-job-recruitment'],
    tags: ['Employment Exchange', 'Job Portal', 'Rojgar Mela', 'Directorate of Employment', 'Delhi Jobs', 'X-10 Card', 'Unemployment', 'Skill Delhi'],
    isPopular: true
  },
  {
    id: 'delhi-rozgar-bazar-job-portal',
    title: 'Delhi Rozgar Bazar 2.0 (Delhi Government Free Job & Placement Portal)',
    hindiTitle: 'दिल्ली रोज़गार बाज़ार 2.0 (दिल्ली सरकार मुफ़्त रोज़गार एवं जॉब पोर्टल)',
    category: 'Employment',
    state: 'delhi',
    department: 'Department of Labour & Employment, Govt. of NCT of Delhi',
    shortDesc: 'Free job matching portal connecting job seekers with verified employers across Delhi NCR for IT, retail, healthcare, administrative, sales, skilled & semi-skilled roles.',
    overview: 'Delhi Rozgar Bazar 2.0 (jobs.delhi.gov.in) is an official job platform launched by the Government of NCT of Delhi to connect job seekers directly with verified private and public employers across Delhi NCR. The platform eliminates middleman fees and offers free direct job applications, interview scheduling, and skill matching.',
    eligibility: [
      'All job seekers in Delhi NCR (Freshers, Experienced, Students, Skilled Workers)',
      'No minimum educational barrier - jobs available from 8th pass to Postgraduates, Engineers, and MBAs',
      'Employers offering legitimate job opportunities in Delhi NCR'
    ],
    requiredDocs: [
      'Updated Resume / Bio-data (PDF or Word format)',
      'Aadhaar Card or Photo ID proof',
      'Active Mobile Number for OTP verification and interview calls'
    ],
    onlineProcess: [
      'Visit the official Delhi Rozgar Bazar Portal (jobs.delhi.gov.in).',
      'Click "I Want a Job" (मुझे नौकरी चाहिए) and register using your mobile number.',
      'Select your preferred job categories (e.g., Accountant, Delivery, Telecaller, Software Developer, Nurse, Teacher, Retail Executive).',
      'Upload your updated resume and complete your profile details.',
      'Browse active job openings in your nearby Delhi locality, compare salaries, and click "Apply" or "Contact Employer" directly.'
    ],
    offlineProcess: [
      'Visit Delhi Government Job Fairs or District Labour Offices for walk-in spot interviews hosted under Rozgar Bazar.'
    ],
    fees: '100% Free Service for Job Seekers & Employers (No agency charges)',
    processingTime: 'Instant Job Application & Direct Employer Matching',
    officialWebsiteName: 'Delhi Rozgar Bazar Official Job Portal',
    officialGovUrl: 'https://jobs.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Does Rozgar Bazar Delhi charge any fee for placement?', answer: 'No. Delhi Rozgar Bazar is 100% free. Neither Delhi Govt nor registered employers are allowed to charge any fee from job seekers.' },
      { question: 'Can employers from Noida, Gurgaon, and Ghaziabad post jobs on Delhi Rozgar Bazar?', answer: 'Yes, employers operates within Delhi NCR region can register and post job vacancies.' }
    ],
    commonMistakes: [
      'Paying money to fake placement agencies claiming to represent Delhi Rozgar Bazar',
      'Not uploading a complete resume or contact details on the portal'
    ],
    importantNotes: [
      'Delhi Rozgar Bazar verified badging helps job seekers identify authentic employers and avoid job scams.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-employment-exchange-registration', 'dsssb-delhi-govt-job-recruitment'],
    tags: ['Rozgar Bazar', 'Delhi Job Portal', 'Jobs in Delhi', 'Job Seeker', 'Placement', 'Free Job Alert', 'Labour Dept'],
    isPopular: true
  },
  {
    id: 'dsssb-delhi-govt-job-recruitment',
    title: 'Delhi Subordinate Services Selection Board (DSSSB Govt Jobs & OTR Portal)',
    hindiTitle: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड (DSSSB सरकारी नौकरी एवं OTR पोर्टल)',
    category: 'Employment',
    state: 'delhi',
    department: 'Delhi Subordinate Services Selection Board (DSSSB), Govt. of NCT of Delhi',
    shortDesc: 'One-Time Registration (OTR), online application, admit cards, exam schedules, and results for Delhi Government teaching (TGT/PGT/PRT), nursing, clerk, IT, and administrative jobs.',
    overview: 'The Delhi Subordinate Services Selection Board (DSSSB) is the premier recruiting agency responsible for conducting written examinations and skill tests for Group "B" and Group "C" non-gazetted posts across Delhi Government departments, Municipal Corporation of Delhi (MCD), Directorate of Education (DoE), and autonomous institutions.',
    eligibility: [
      'Indian citizens meeting age limits, educational qualifications, and reservation criteria as specified in individual DSSSB job advertisement notifications',
      '85% Delhi domicile reservation applies to OBC candidates holding Delhi OBC certificates'
    ],
    requiredDocs: [
      'Aadhaar Card (Mandatory for DSSSB One-Time Registration OTR)',
      'Educational Marksheets & Passing Certificates (Class 10th, 12th, Graduation, B.Ed, CTET, Nursing, Diploma)',
      'Category Certificate (SC/ST/OBC-Delhi/EWS/PwD/Ex-Servicemen) issued by competent Delhi authority',
      'Recent postcard-size photograph with white background and digital signature'
    ],
    onlineProcess: [
      'Visit the official DSSSB Online Portal (dsssbonline.nic.in).',
      'Click "New Registration" to complete One-Time Registration (OTR) using Aadhaar Number, Class 10 roll number, and passing year.',
      'Log in with your OTR credentials to view active recruitment advertisements (e.g., TGT/PGT Teachers, Assistant Teacher Primary, Junior Assistant, Stenographer, Nursing Officer).',
      'Fill in post preference, exam center, category details, and pay online application fee (₹100 for General/OBC male; Exempted for Women/SC/ST/PwD).',
      'Download the submitted application form and keep track of exam dates, e-admit card release, and OMR/CBT answer keys.'
    ],
    offlineProcess: [
      'Examinations and document verification are conducted physically at designated Delhi examination centers and DSSSB Headquarters at Karkardooma, Delhi.'
    ],
    fees: '₹100 for General / OBC Males | ₹0 (Exempted) for Women, SC, ST, PwD, and Ex-Servicemen',
    processingTime: 'As per DSSSB Examination & Recruitment Calendar',
    officialWebsiteName: 'DSSSB Official Application Portal (Govt. of NCT of Delhi)',
    officialGovUrl: 'https://dsssbonline.nic.in/',
    downloadForms: [
      {
        name: 'DSSSB Official Online OTR & Application Portal',
        url: 'https://dsssbonline.nic.in/',
        isOfficialPdf: false
      },
      {
        name: 'DSSSB Main Official Website',
        url: 'https://dsssb.delhi.gov.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'Is Aadhaar mandatory for DSSSB One-Time Registration (OTR)?', answer: 'Yes, Aadhaar authentication is mandatory for DSSSB OTR registration to ensure identity verification and prevent impersonation during CBT exams.' },
      { question: 'Does OBC reservation in DSSSB apply to candidates from other states?', answer: 'No. As per Delhi Government rules, only OBC certificates issued by Government of NCT of Delhi (OBC-Delhi) are eligible for OBC reservation in DSSSB recruitment.' }
    ],
    commonMistakes: [
      'Applying for OBC quota using an OBC certificate issued by another state government instead of Delhi Govt',
      'Uploading blurred postcard photographs or signatures not conforming to DSSSB pixel dimensions'
    ],
    importantNotes: [
      'DSSSB conducts Computer Based Tests (CBT) with negative marking (0.25 marks deduction per wrong answer).'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-employment-exchange-registration', 'delhi-rozgar-bazar-job-portal'],
    tags: ['DSSSB', 'Delhi Govt Jobs', 'OTR', 'Teaching Jobs', 'CTET', 'DSSSB Admit Card', 'Government Recruitment', 'Karkardooma'],
    isPopular: true
  },
  {
    id: 'delhi-building-construction-workers-registration',
    title: 'Delhi Construction Worker Welfare Board Registration & Card Renewal',
    hindiTitle: 'दिल्ली भवन निर्माण मज़दूर कल्याण बोर्ड पंजीकरण एवं कार्ड नवीनीकरण',
    category: 'Employment',
    secondaryCategories: ['Renewal', 'Government Schemes'],
    state: 'delhi',
    department: 'Delhi Building & Other Construction Workers Welfare Board, Labour Dept, Govt. of NCT of Delhi',
    shortDesc: 'Register as a construction/building worker to receive monthly welfare stipends, tool kit allowances, safety equipment aid, skill enhancement, and maternity/education grants.',
    overview: 'The Delhi Building and Other Construction Workers Welfare Board (DBOCWWB) under the Department of Labour, Govt. of NCT of Delhi registers construction workers (masons, electricians, plumbers, painters, carpenters, tile fixers, laborers) across Delhi. Registered workers receive financial assistance for marriage, education scholarships for children, medical relief, tool kit allowances, pension, and life cover.',
    eligibility: [
      'Construction worker aged between 18 and 60 years',
      'Engaged in construction, renovation, painting, plumbing, or electrical work in Delhi for at least 90 days in the preceding 12 months',
      'Resident of NCT of Delhi'
    ],
    requiredDocs: [
      '90 Days Work Certificate signed by Employer, Construction Site Contractor, Registered Union, or Labour Inspector',
      'Aadhaar Card linked with active mobile number',
      'Delhi Bank Account Passbook (with IFSC Code and photo)',
      'Age Proof (Aadhaar / Voter ID / Birth Certificate / School Leaving Certificate)',
      'Passport size photographs and nominee details'
    ],
    onlineProcess: [
      'Visit the official Delhi e-District Portal (edistrict.delhigovt.nic.in).',
      'Select "Services of Labour Department" -> "Registration of Construction Worker under DBOCWWB".',
      'Register/Log in using Citizen User ID and upload the 90-day work experience certificate.',
      'Fill in worker profile, contractor details, bank account number, and upload Aadhaar card copy.',
      'Submit form to receive Application Reference Number and schedule document verification or physical inspection.',
      'Upon approval, download your official DBOCWWB Smart Registration Card for claiming welfare scheme funds.'
    ],
    offlineProcess: [
      'Visit your nearest District Labour Office or DBOCWWB Facilitation Center in Delhi along with employer 90-day certificate and bank passbook.'
    ],
    fees: 'Nominal Registration Fee (₹25 initial registration + ₹20 annual subscription)',
    processingTime: '15 to 30 Working Days',
    officialWebsiteName: 'Delhi e-District Labour Services Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in/',
    downloadForms: [
      {
        name: 'Delhi e-District Construction Worker Registration',
        url: 'https://edistrict.delhigovt.nic.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'Who qualifies as a construction worker under DBOCWWB?', answer: 'Masons, carpenters, plumbers, painters, electricians, tile layers, concrete workers, crane operators, and site laborers working in building construction or maintenance qualify.' },
      { question: 'What financial benefits do registered DBOCWWB construction workers receive?', answer: 'Benefits include tool kit grants (up to ₹10,000), children education grants (up to ₹10,000/yr), maternity relief (₹30,000), marriage assistance (₹35,000-₹51,000), and disability pension.' }
    ],
    commonMistakes: [
      'Submitting incomplete 90-day work certificate without contractor signature or employer details',
      'Providing non-Delhi bank account details or unlinked mobile numbers'
    ],
    importantNotes: [
      'Workers must renew their annual membership before expiration to keep welfare financial grants active.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-employment-exchange-registration', 'delhi-rozgar-bazar-job-portal'],
    tags: ['DBOCWWB', 'Construction Workers', 'Labour Board', 'Delhi Labour Dept', 'Worker Registration', 'Tool Kit Grant', 'e-District Delhi'],
    isPopular: true
  },
  {
    id: 'delhi-gst-registration-return-filing',
    title: 'GST Registration & Return Filing (Delhi State GST & Central GST Portal)',
    hindiTitle: 'जीएसटी पंजीकरण एवं रिटर्न दाखिल (दिल्ली राज्य जीएसटी पोर्टल)',
    category: 'Business',
    secondaryCategories: ['Licences', 'Taxes & Finance'],
    state: 'delhi',
    department: 'Department of Trade & Taxes, Govt. of NCT of Delhi / GST Council',
    shortDesc: 'Apply for new 15-digit GSTIN registration, GST Composition scheme opt-in, GSTR-1 & GSTR-3B monthly return filing, and e-Way Bill generation.',
    overview: 'The Department of Trade & Taxes, Government of NCT of Delhi and GSTN administer Goods and Services Tax registration for businesses in Delhi with annual turnover exceeding ₹20 Lakhs for services or ₹40 Lakhs for goods (or voluntary registration for inter-state and e-commerce traders).',
    eligibility: [
      'Traders, manufacturers, service providers, and e-commerce sellers operating in Delhi NCT',
      'Turnover exceeding ₹20 Lakhs (Services) or ₹40 Lakhs (Goods) OR mandatory inter-state supply / e-commerce platform sellers'
    ],
    requiredDocs: [
      'PAN Card of Proprietor / Firm / Company',
      'Aadhaar Card of Proprietor / Partners / Directors',
      'Proof of Business Premises in Delhi (Electricity Bill, Property Tax receipt, Sale Deed, or Rent Agreement with Owner NOC)',
      'Bank Account Passbook / Cancelled Cheque / Bank Statement with IFSC',
      'Digital Signature Certificate (DSC) for Companies/LLPs OR Aadhaar OTP for OTP-EVC verification'
    ],
    onlineProcess: [
      'Visit the official GST Portal (gst.gov.in).',
      'Click "Services" -> "Registration" -> "New Registration" (Form GST REG-01 Part A).',
      'Enter State (Delhi), District, Legal Name as per PAN, Email, and Mobile Number.',
      'Verify OTPs to generate Temporary Reference Number (TRN).',
      'Log in with TRN, complete Part B (business address, trade name, commodity HSN/SAC codes, and upload rent deed & photo).',
      'Perform Aadhaar Authentication online for instant biometric verification.',
      'Submit via Aadhaar OTP / EVC or DSC to receive ARN (Application Reference Number).',
      'Upon officer approval within 3–7 working days, download 15-digit GSTIN Registration Certificate (Form GST REG-06).'
    ],
    offlineProcess: [
      'Visit Department of Trade & Taxes, Vyapar Bhawan, IP Estate, ITO, New Delhi for grievance redressal and GST officer hearings.'
    ],
    fees: '100% Free Government Registration (₹0 Govt Fee)',
    processingTime: '3 to 7 Working Days (Subject to Aadhaar authentication)',
    officialWebsiteName: 'Official Goods and Services Tax (GST) Portal',
    officialGovUrl: 'https://www.gst.gov.in/',
    downloadForms: [
      {
        name: 'Official GST Portal New Registration Link',
        url: 'https://www.gst.gov.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'What is the turnover threshold for mandatory GST registration in Delhi?', answer: 'In Delhi, GST registration is mandatory if annual turnover exceeds ₹40 Lakhs for goods suppliers or ₹20 Lakhs for service providers.' },
      { question: 'Is physical verification of business premises mandatory for GST in Delhi?', answer: 'If Aadhaar authentication is successfully completed online, physical inspection is generally not required unless flagged by risk management systems.' }
    ],
    commonMistakes: [
      'Providing trade name that does not match PAN details',
      'Uploading electricity bill older than 2 months or unnotarized rent agreement'
    ],
    importantNotes: [
      'Failure to file GSTR-1 and GSTR-3B on time attracts a late fee of ₹50/day (₹20/day for NIL return) up to ₹5,000.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['shop-establishment-license-delhi', 'udyam-msme-registration-certificate'],
    tags: ['GST', 'GSTIN', 'GST Registration', 'Vyapar Bhawan', 'Trade & Taxes', 'GSTR-3B', 'Delhi Business'],
    isPopular: true
  },
  {
    id: 'udyam-msme-registration-certificate',
    title: 'Udyam MSME Registration & UDYAM Certificate (Ministry of MSME)',
    hindiTitle: 'उद्यम एमएसएमई पंजीकरण एवं प्रमाण पत्र (सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय)',
    category: 'Business',
    secondaryCategories: ['Licences', 'Government Schemes'],
    state: 'delhi',
    department: 'Ministry of Micro, Small and Medium Enterprises (MSME), Govt. of India',
    shortDesc: 'Paperless Aadhaar-based MSME registration for micro, small, and medium enterprises to claim collateral-free loans, 15% capital subsidies, and Govt tender exemptions.',
    overview: 'Udyam Registration (udyamregistration.gov.in) is the official online portal operated by the Ministry of MSME, Government of India. It grants permanent identification and Udyam Registration Certificate to micro, small, and medium businesses in Delhi NCR. Registered MSMEs qualify for priority sector lending, lower interest rates, collateral-free credit guarantee (CGTMSE), ISO certification reimbursement, and protection against delayed payments.',
    eligibility: [
      'Micro Enterprises: Investment up to ₹1 Crore & Turnover up to ₹5 Crores',
      'Small Enterprises: Investment up to ₹10 Crores & Turnover up to ₹50 Crores',
      'Medium Enterprises: Investment up to ₹50 Crores & Turnover up to ₹250 Crores',
      'Proprietorships, Partnerships, LLPs, Private Limited Companies, and Self-Help Groups (SHGs) operating in Delhi'
    ],
    requiredDocs: [
      'Aadhaar Card of Proprietor / Managing Partner / Director',
      'PAN Card of Business / Enterprise',
      'GSTIN (if applicable under GST laws)',
      'Bank Account Number and IFSC Code'
    ],
    onlineProcess: [
      'Visit the official Udyam Registration Portal (udyamregistration.gov.in).',
      'Select "For New Entrepreneurs who are not registered yet as MSME".',
      'Enter Aadhaar Number and Name of Entrepreneur -> Click "Validate & Generate OTP".',
      'Select Type of Organisation (Proprietorship, Partnership, Pvt Ltd, LLP) and enter PAN details.',
      'Fill in plant/unit address in Delhi, NIC Code for manufacturing/service activity, investment value, and turnover.',
      'Submit application with final Aadhaar OTP verification.',
      'Instant Udyam Registration Number is generated -> Download official Udyam Certificate with QR code.'
    ],
    offlineProcess: [
      '100% digital, paperless, and free process; MSME Development Institute (MSME-DI), Okhla Industrial Area Phase III, New Delhi provides helpdesk assistance.'
    ],
    fees: '100% Free Service (Beware of fake private portals charging fees)',
    processingTime: 'Instant / Same Day Certificate Generation',
    officialWebsiteName: 'Official Udyam MSME Registration Portal',
    officialGovUrl: 'https://udyamregistration.gov.in/',
    downloadForms: [
      {
        name: 'Official Udyam MSME Registration Portal Link',
        url: 'https://udyamregistration.gov.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'Is Udyam MSME Registration mandatory for small businesses in Delhi?', answer: 'While voluntary, Udyam registration is essential to avail government subsidies, CGTMSE collateral-free loans, and exemption from EMD in government tenders.' },
      { question: 'Is there any renewal required for Udyam MSME Certificate?', answer: 'No, Udyam Registration Certificate is permanent and does not require annual renewal.' }
    ],
    commonMistakes: [
      'Registering on third-party fake websites charging fees instead of the official udyamregistration.gov.in portal',
      'Selecting incorrect National Industry Classification (NIC) codes for business activity'
    ],
    importantNotes: [
      'Official Udyam Registration is 100% free with zero government processing charges.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-gst-registration-return-filing', 'shop-establishment-license-delhi'],
    tags: ['Udyam', 'MSME', 'MSME Registration', 'Ministry of MSME', 'Collateral Free Loan', 'Micro Enterprise', 'Small Business'],
    isPopular: true
  },
  {
    id: 'delhi-mca-company-llp-registration',
    title: 'Company & LLP Incorporation (MCA21 / Ministry of Corporate Affairs)',
    hindiTitle: 'कंपनी एवं एलएलपी पंजीकरण (MCA21 / कॉर्पोरेट मामलों का मंत्रालय)',
    category: 'Business',
    secondaryCategories: ['Licences', 'Taxes & Finance'],
    state: 'delhi',
    department: 'Ministry of Corporate Affairs (MCA), Govt. of India / ROC Delhi',
    shortDesc: 'Incorporate Private Limited Company, One Person Company (OPC), or Limited Liability Partnership (LLP) with ROC Delhi via SPICe+ MCA21 portal.',
    overview: 'The Ministry of Corporate Affairs (MCA) through the Registrar of Companies (ROC Delhi & Haryana) handles incorporation of corporate entities under Companies Act 2013 and LLP Act 2008. The SPICe+ integrated form provides name reservation, company incorporation, Director Identification Number (DIN), PAN, TAN, EPFO, ESIC, Professional Tax, GSTIN, and Bank Account opening in a single submission.',
    eligibility: [
      'Minimum 1 Director & Shareholder for One Person Company (OPC); Minimum 2 Directors & Shareholders for Private Limited; Minimum 2 Partners for LLP',
      'At least one director must be an Indian resident (resided in India for 182+ days in previous financial year)'
    ],
    requiredDocs: [
      'PAN Card & Aadhaar Card / Passport / Voter ID of all Directors & Shareholders',
      'Proof of Residence: Latest Bank Statement, Utility Bill, or Mobile Bill (less than 2 months old)',
      'Registered Office Proof in Delhi: Electricity Bill / Water Bill + Rent Agreement & Landlord NOC',
      'Digital Signature Certificate (DSC Class 3) of proposing Directors/Partners',
      'Passport size photos of Directors'
    ],
    onlineProcess: [
      'Visit the MCA21 Portal (mca.gov.in) and register a user account.',
      'Part A (SPICe+): Submit proposed company name for reservation approval by ROC.',
      'Part B (SPICe+): Fill company details, capital structure, registered office address, DIN allotment, and Memorandum & Articles of Association (e-MOA Form INC-33 & e-AOA Form INC-34).',
      'AGILE-PRO-S: Opt for integrated GSTIN, EPFO, ESIC, Professional Tax, and current bank account opening.',
      'Affix Digital Signature Certificates (DSC) of directors and certifying Chartered Accountant / CS / Cost Accountant.',
      'Pay ROC incorporation fee and stamp duty online.',
      'ROC Delhi verifies documents -> Issues Certificate of Incorporation (COI) containing CIN and Corporate PAN/TAN.'
    ],
    offlineProcess: [
      'Handled 100% online through MCA21 portal. ROC Delhi Office: IFCI Tower, 61 Nehru Place, New Delhi - 110019.'
    ],
    fees: 'Zero ROC fee for companies with authorised capital up to ₹15 Lakhs (Stamp Duty & DSC charges apply)',
    processingTime: '3 to 7 Working Days',
    officialWebsiteName: 'MCA21 Official Ministry of Corporate Affairs Portal',
    officialGovUrl: 'https://www.mca.gov.in/',
    downloadForms: [
      {
        name: 'Official MCA21 Company Incorporation Portal',
        url: 'https://www.mca.gov.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'What is SPICe+ form in MCA company incorporation?', answer: 'SPICe+ (Simple Proforma for Incorporating Company Electronically Plus) is an integrated web form that provides 10 services in 1 form including Name Reservation, DIN, Incorporation, PAN, TAN, EPFO, ESIC, GSTIN, and Bank Account.' },
      { question: 'Is a physical commercial office mandatory for company registration in Delhi?', answer: 'No, a company can initially register its official address at a residential property in Delhi provided an NOC and utility bill are attached.' }
    ],
    commonMistakes: [
      'Uploading utility bills or bank statements older than 2 months',
      'Proposing company names that infringe existing registered trademarks or logos'
    ],
    importantNotes: [
      'After incorporation, company must file Form INC-20A (Commencement of Business) within 180 days of COI issuance.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-gst-registration-return-filing', 'udyam-msme-registration-certificate'],
    tags: ['MCA', 'ROC Delhi', 'Pvt Ltd', 'Company Registration', 'LLP', 'SPICe+', 'CIN', 'Corporate Affairs'],
    isPopular: true
  },
  {
    id: 'delhi-single-window-clearance-invest-delhi',
    title: 'Delhi Single Window Clearance Portal (Invest Delhi / DSIIDC Industrial Areas)',
    hindiTitle: 'दिल्ली सिंगल विंडो क्लीयरेंस पोर्टल (इन्वेस्ट दिल्ली एवं उद्योग विभाग)',
    category: 'Business',
    secondaryCategories: ['Licences', 'Government Offices'],
    state: 'delhi',
    department: 'Department of Industries, Govt. of NCT of Delhi / DSIIDC',
    shortDesc: 'One-stop portal for setting up manufacturing & service units in Delhi industrial parks (Bawana, Narela, Okhla, Patparganj), obtaining DPCC NOC, water/power load, and building plan approvals.',
    overview: 'The Delhi Single Window Clearance System managed by the Department of Industries, Govt. of NCT of Delhi (investdelhi.gov.in) provides a unified gateway for entrepreneurs and industrialists seeking statutory clearances, factory building approvals, environmental Consent to Establish (CTE) & Consent to Operate (CTO) from DPCC, fire NOC, water connection from DJB, high-tension industrial power load from BSES/TPDDL, and plot allotment from DSIIDC.',
    eligibility: [
      'Industrialists, factory owners, enterprise units, and startup promoters establishing commercial/industrial projects in designated Delhi Industrial Areas (Bawana, Narela, Okhla, Patparganj, Mangolpuri, Kirti Nagar, Mayapuri, Jhendewalan)'
    ],
    requiredDocs: [
      'DSIIDC Industrial Plot Allotment Letter / Lease Deed / Rent Deed',
      'Project Detailed Project Report (DPR) & Manufacturing Process Flowchart',
      'Delhi Pollution Control Committee (DPCC) Green/Orange/White Category classification documents',
      'Site Blueprint Map approved by Licensed Architect / Structural Engineer',
      'PAN, Aadhaar, and GSTIN of the applicant entity'
    ],
    onlineProcess: [
      'Visit the Invest Delhi Single Window Clearance Portal (investdelhi.gov.in).',
      'Create Entrepreneur Profile and complete Common Application Form (CAF).',
      'System automatically identifies required department approvals (DPCC Pollution NOC, MCD Factory License, Fire Dept NOC, DJB Water, BSES/TPDDL Industrial Power).',
      'Upload project DPR, site layout map, and land proof.',
      'Pay unified single window processing fee online.',
      'Track real-time approval status across multiple Delhi Government departments on a single dashboard.'
    ],
    offlineProcess: [
      'Department of Industries, Govt. of NCT of Delhi, 419, Udyog Sadan, FIE Patparganj Industrial Area, Delhi - 110092.'
    ],
    fees: 'Varies based on project investment category and required departmental clearances',
    processingTime: '15 to 30 Working Days under Delhi Right to Public Services Act',
    officialWebsiteName: 'Invest Delhi Single Window System Portal',
    officialGovUrl: 'https://investdelhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Which industrial areas in Delhi are managed by DSIIDC?', answer: 'DSIIDC manages major industrial complexes including Bawana, Narela, Okhla, Patparganj, Rani Jhansi Road, Kirti Nagar, Mayapuri, and Mangolpuri.' },
      { question: 'Is DPCC consent required for non-polluting White Category industries in Delhi?', answer: 'White Category (non-polluting) industries do not require formal Consent to Operate (CTO) but must submit online undertaking on DPCC portal.' }
    ],
    commonMistakes: [
      'Operating industrial machinery in non-conforming residential zones not listed in Master Plan Delhi 2021',
      'Failing to submit DPCC Consent to Establish (CTE) before commencing factory construction'
    ],
    importantNotes: [
      'Delhi Government enforces strict environmental norms; polluting Red Category industries are prohibited inside NCT of Delhi.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['mcd-trade-health-license', 'delhi-gst-registration-return-filing'],
    tags: ['Invest Delhi', 'Single Window', 'DSIIDC', 'DPCC', 'Industries Dept', 'Bawana', 'Narela', 'Factory License'],
    isPopular: true
  },
  {
    id: 'delhi-startup-policy-registration-grant',
    title: 'Delhi Startup Policy Registration, Seed Grants & Incubation Support',
    hindiTitle: 'दिल्ली स्टार्टअप नीति पंजीकरण, बीज अनुदान एवं इनक्यूबेशन सहायता',
    category: 'Business',
    secondaryCategories: ['Government Schemes', 'Education'],
    state: 'delhi',
    department: 'Industries Department, Govt. of NCT of Delhi / Startup India',
    shortDesc: 'Register under Delhi Startup Policy 2022 for financial seed capital grants up to ₹10 Lakhs, lease rental subsidy, patent filing cost reimbursement, and university incubation support.',
    overview: 'The Delhi Startup Policy passed by the Government of NCT of Delhi aims to foster innovation and turn Delhi into a global startup hub. Eligible startups registered in Delhi receive financial seed grants up to ₹10 Lakhs, reimbursement of 50% patent/trademark registration expenses, lease rental subsidies, collateral-free credit, mentorship from top Delhi State Universities (DTU, NSUT, IIIT-Delhi, IGDTUW, AUD, DSEU), and access to state government procurement tenders.',
    eligibility: [
      'Entity registered as Private Limited Company, LLP, or Registered Partnership in NCT of Delhi',
      'Recognized by DPIIT Startup India (DPIIT Certificate)',
      'Incorporated not more than 10 years ago with turnover under ₹100 Crores',
      'Developing innovative product, process, or service with potential for commercial scale and job creation in Delhi'
    ],
    requiredDocs: [
      'DPIIT Startup Recognition Certificate',
      'Certificate of Incorporation (COI) in Delhi address',
      'Detailed Startup Pitch Deck & Product Innovation Roadmap',
      'PAN Card, Aadhaar Card of Founders, and Company Bank Account Passbook',
      'Bills / Receipts of Patent/Trademark filing or Incubator Lease agreement (for claim reimbursement)'
    ],
    onlineProcess: [
      'Visit the official Delhi Startup Portal / Industries Dept portal.',
      'Click "Apply under Delhi Startup Policy" and register founder account.',
      'Enter DPIIT recognition number and company incorporation details.',
      'Select required benefit: Financial Seed Grant (up to ₹10 Lakhs), Patent Cost Reimbursement, Lease Rental Subsidy, or University Incubation allotment.',
      'Upload Pitch Deck, Financial Projection, and Founder Credentials.',
      'Delhi Startup Task Force evaluates application and conducts pitch presentation for grant sanction.'
    ],
    offlineProcess: [
      'Startup Facilitation Helpdesk, Directorate of Industries, Govt. of NCT of Delhi, 419, FIE Patparganj Industrial Area, Delhi - 110092.'
    ],
    fees: '100% Free Scheme Application (₹0 Govt Fee)',
    processingTime: '30 to 45 Days (includes Startup Task Force review)',
    officialWebsiteName: 'Delhi Startup Policy & Innovation Portal',
    officialGovUrl: 'https://industries.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is the maximum seed grant amount provided under Delhi Startup Policy?', answer: 'Eligible early-stage startups in Delhi can receive financial seed grants up to ₹10 Lakhs for prototyping, product development, and market validation.' },
      { question: 'Which Delhi universities offer incubation support under the policy?', answer: 'Delhi Technological University (DTU IIF), Netaji Subhas University of Technology (NSUT IIF), IIIT-Delhi Innovation Hub, and IGDTUW Anveshan Foundation provide state-funded incubation centers.' }
    ],
    commonMistakes: [
      'Applying without first obtaining DPIIT Startup India Recognition Certificate',
      'Submitting entity registered outside NCT of Delhi address'
    ],
    importantNotes: [
      'Delhi Government provides relaxation in prior experience and turnover criteria for startups bidding in Delhi Govt procurement tenders.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['udyam-msme-registration-certificate', 'delhi-mca-company-llp-registration'],
    tags: ['Delhi Startup Policy', 'Seed Grant', 'Incubation', 'DPIIT', 'Startup India', 'DTU', 'NSUT', 'Patent Subsidy'],
    isPopular: true
  },
  {
    id: 'delhi-govt-hospitals-opd-registration-ors',
    title: 'Delhi Govt Hospitals Online OPD Registration & e-Sanjeevani Teleconsultation',
    hindiTitle: 'दिल्ली सरकारी अस्पताल ऑनलाइन ओपीडी पंजीकरण (ORS) एवं ई-संजीवनी परामर्श',
    category: 'Health',
    secondaryCategories: ['Healthcare & Medical', 'Government Finders'],
    state: 'delhi',
    department: 'Department of Health & Family Welfare, Govt. of NCT of Delhi / NIC ORS Portal',
    shortDesc: 'Skip hospital OPD queues by booking advance online OPD appointments (ORS Portal) and free e-Sanjeevani video doctor teleconsultation for LNJP, GB Pant, GTB, DDU, AIIMS, and Safdarjung hospitals.',
    overview: 'The Department of Health & Family Welfare, Government of NCT of Delhi along with National Informatics Centre (NIC) Online Registration System (ORS Portal ors.gov.in) enables patients across Delhi NCR to book advance OPD tokens, view lab test reports online, and consult doctors via e-Sanjeevani OPD tele-medicine service.',
    eligibility: [
      'All citizens and patients seeking outpatient medical consultation in Delhi Government and Central Hospitals (LNJP, GB Pant, GTB, Deen Dayal Upadhyay, Dr. Baba Saheb Ambedkar, AIIMS Delhi, Safdarjung, RML Hospital)'
    ],
    requiredDocs: [
      'Aadhaar Card or Mobile Number for patient registration & OTP verification',
      'UHID Number (if existing patient at the hospital)'
    ],
    onlineProcess: [
      'Visit the official Online Registration System (ORS) Portal (ors.gov.in) or Delhi Health Portal (dghs.delhi.gov.in).',
      'Click "Book Appointment" -> Select State (Delhi) -> Choose Hospital (e.g., Lok Nayak Hospital LNJP, AIIMS New Delhi, Safdarjung Hospital, GTB Shahdara).',
      'Select Department (General Medicine, Orthopedics, Cardiology, Pediatrics, Dermatology, ENT, Eye, Gynaecology).',
      'Select preferred appointment date and slot.',
      'Enter patient mobile number and Aadhaar/UHID details to confirm booking.',
      'Download and print the e-OPD token slip or show SMS on phone at the dedicated ORS fast-track counter at the hospital.'
    ],
    offlineProcess: [
      'Visit the hospital OPD registration counter between 8:00 AM and 11:30 AM (Monday to Saturday) for physical walk-in OPD token registration.'
    ],
    fees: '100% Free Service (₹0 Registration Fee in Delhi Govt Hospitals)',
    processingTime: 'Instant Online OPD Token Booking',
    officialWebsiteName: 'NIC Online Registration System (ORS Portal)',
    officialGovUrl: 'https://ors.gov.in/',
    downloadForms: [
      {
        name: 'ORS Online OPD Booking Portal',
        url: 'https://ors.gov.in/',
        isOfficialPdf: false
      }
    ],
    faqs: [
      { question: 'What is the advantage of booking OPD slip online through ORS?', answer: 'Booking online through ORS skips the long morning physical counter queue. You can directly proceed to the ORS priority counter or doctor room.' },
      { question: 'Is e-Sanjeevani telemedicine free in Delhi?', answer: 'Yes, e-Sanjeevani (esanjeevani.mohfw.gov.in) provides 100% free video doctor consultations and digital e-prescriptions from government doctors.' }
    ],
    commonMistakes: [
      'Arriving after OPD registration hours (11:30 AM) for walk-in visits',
      'Entering wrong UHID number when booking follow-up appointment'
    ],
    importantNotes: [
      'Emergency casualty departments at all Delhi Government hospitals operate 24x7 with free emergency medical care.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['ayushman-arogya-mandir-service', 'delhi-arogya-kosh-dak-medical-financial-aid'],
    tags: ['ORS', 'OPD Booking', 'Delhi Hospital', 'LNJP', 'AIIMS Delhi', 'e-Sanjeevani', 'Telemedicine', 'Doctor Appointment'],
    isPopular: true
  },
  {
    id: 'delhi-arogya-kosh-dak-medical-financial-aid',
    title: 'Delhi Arogya Kosh (DAK) Medical Financial Assistance & Free Surgery Scheme',
    hindiTitle: 'दिल्ली आरोग्य कोष (DAK) मुफ़्त बीमारी इलाज, सर्जरी एवं जांच योजना',
    category: 'Health',
    secondaryCategories: ['Healthcare & Medical', 'Government Schemes'],
    state: 'delhi',
    department: 'Delhi Arogya Kosh (DAK), Dept of Health & Family Welfare, Govt. of NCT of Delhi',
    shortDesc: 'Financial aid up to ₹5 Lakhs for life-threatening illness surgeries, free high-end diagnostic tests (MRI, CT Scan, PET Scan) at private labs, and free cashless surgeries at empanelled private hospitals.',
    overview: 'Delhi Arogya Kosh (DAK) is a registered society under the Department of Health & Family Welfare, Govt. of NCT of Delhi. It provides financial assistance up to ₹5 Lakhs to eligible Delhi residents suffering from major diseases (cancer, heart surgery, kidney transplant, neurosurgery) and offers free cashless high-end diagnostic tests (MRI, CT Scan, Ultrasound, PET Scan) and cashless surgeries in private empanelled hospitals if waiting times exceed 30 days in Delhi Govt hospitals.',
    eligibility: [
      'Resident of NCT of Delhi for at least 3 years (Aadhaar / Voter ID proof required)',
      'Annual family income up to ₹3 Lakhs per annum (or holding Delhi Ration Card / NFSA card)',
      'Patient referred for treatment/surgery by a Delhi Government Hospital doctor'
    ],
    requiredDocs: [
      'Proof of Residence in Delhi for 3 years: Aadhaar Card, Voter ID, or Ration Card',
      'Income Certificate issued by e-District Revenue Dept SDM (Income under ₹3 Lakhs/year)',
      'Estimate Certificate / Medical Referral Form signed by Medical Superintendent of Delhi Govt Hospital',
      'Passport size photographs of patient and bank account details'
    ],
    onlineProcess: [
      'Get medical diagnosis and treatment estimate from treating doctor at Delhi Govt Hospital (e.g., LNJP, GB Pant, GTB).',
      'If waiting list for surgery exceeds 30 days, doctor issues referral under Delhi Free Surgery Scheme.',
      'Submit DAK application form along with income certificate and Delhi residence proof to the hospital Medical Superintendent / DAK counter.',
      'DAK Sanction Committee verifies documents and approves direct payment release to hospital or empanelled private center.',
      'Patient undergoes surgery / MRI / CT scan at zero cost.'
    ],
    offlineProcess: [
      'Delhi Arogya Kosh Office: Room No. 20, Department of Health & Family Welfare, Govt. of NCT of Delhi, A-Wing, Delhi Secretariat, I.P. Estate, New Delhi - 110002.'
    ],
    fees: '100% Free Scheme (Aid up to ₹5 Lakhs per patient)',
    processingTime: '7 to 15 Days (Priority / Immediate approval for critical surgery)',
    officialWebsiteName: 'Delhi Health Department Official Portal',
    officialGovUrl: 'https://health.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What diagnostic tests are covered free under Delhi Arogya Kosh DAK scheme?', answer: 'Covered tests include MRI, CT Scan, PET Scan, Mammography, Colour Doppler, TMT, EEG, EMG, and 2D Echo at empanelled private diagnostic centers in Delhi.' },
      { question: 'What is the maximum financial assistance under DAK for surgery?', answer: 'DAK provides financial assistance up to ₹5,00,000 (Rupees Five Lakhs) for expensive surgeries and implants.' }
    ],
    commonMistakes: [
      'Submitting residence proof less than 3 years old in Delhi',
      'Seeking treatment at unempanelled private hospitals without Delhi Govt hospital doctor referral'
    ],
    importantNotes: [
      'DAK scheme ensures no Delhi resident is deprived of critical medical care or surgery due to financial constraints.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-govt-hospitals-opd-registration-ors', 'ayushman-arogya-mandir-service'],
    tags: ['DAK', 'Delhi Arogya Kosh', 'Free Surgery', 'Free MRI', 'Free CT Scan', 'Medical Financial Aid', 'Health Grant'],
    isPopular: true
  },
  {
    id: 'delhi-jan-aushadhi-kendra-free-generic-medicine',
    title: 'Delhi Jan Aushadhi Kendra Directory & Free Medicine Scheme (PMBJP)',
    hindiTitle: 'दिल्ली जन औषधि केंद्र एवं मुफ़्त जेनेरिक दवा योजना (PMBJP)',
    category: 'Health',
    secondaryCategories: ['Healthcare & Medical', 'Government Finders'],
    state: 'delhi',
    department: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI) / Delhi Health Dept',
    shortDesc: 'Find nearest Pradhan Mantri Bhartiya Janaushadhi Kendra (PMBJP) in Delhi for quality generic medicines, surgical items, and nutraceuticals at 50% to 90% cheaper prices than branded drugs.',
    overview: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) operated by PMBI, Ministry of Chemicals & Fertilizers, Govt. of India operates hundreds of Jan Aushadhi Kendras across all 11 districts of Delhi. These outlets make quality generic medicines, diabetes, BP, cardiac, anti-cancer drugs, and surgical items available to the public at 50% to 90% lower cost.',
    eligibility: [
      'Open to all citizens and patients across Delhi NCR',
      'No prescription restriction - valid medical prescription from qualified MBBS/BAMS doctor required for Schedule H/X medicines'
    ],
    requiredDocs: [
      'Valid Doctor Prescription for purchasing prescribed generic medicines'
    ],
    onlineProcess: [
      'Visit the official Janaushadhi Portal (janaushadhi.gov.in) or open Jan Aushadhi Sugam Mobile App.',
      'Click "Find Jan Aushadhi Kendra" -> Select State (Delhi) -> District (e.g., Central Delhi, South Delhi, East Delhi).',
      'View nearest kendra address, contact numbers, operating hours, and live stock availability of generic medicines.',
      'Compare prices of generic medicines versus branded counterparts directly on the app.'
    ],
    offlineProcess: [
      'Walk into any nearest Jan Aushadhi Kendra located in Delhi Metro stations, railway stations, government hospital campuses, or residential markets.'
    ],
    fees: '50% to 90% Discounted Generic Medicine Prices',
    processingTime: 'Instant OTC Purchase',
    officialWebsiteName: 'Official Pradhan Mantri Bhartiya Janaushadhi Pariyojana Portal',
    officialGovUrl: 'https://janaushadhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Are Jan Aushadhi generic medicines as safe and effective as branded medicines?', answer: 'Yes. All PMBJP generic medicines are procured exclusively from WHO-GMP certified pharmaceutical plants and tested at NABL accredited labs.' },
      { question: 'How much discount do Jan Aushadhi Kendras offer?', answer: 'Jan Aushadhi generic medicines are priced 50% to 90% lower than market prices of branded equivalents.' }
    ],
    commonMistakes: [
      'Believing generic medicines are lower quality due to lower prices',
      'Buying prescription drugs without a doctor prescription slip'
    ],
    importantNotes: [
      'Jan Aushadhi Sugam App allows users to search for Jan Aushadhi kendras, locate medicines by chemical name, and compare prices instantly.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['ayushman-arogya-mandir-service', 'delhi-govt-hospitals-opd-registration-ors'],
    tags: ['Jan Aushadhi', 'PMBJP', 'Generic Medicines', 'Discounted Medicine', 'Jan Aushadhi Kendra', 'Delhi Health'],
    isPopular: true
  },
  {
    id: 'delhi-e-raktkosh-blood-bank-finder-donation',
    title: 'e-RaktKosh Delhi Blood Bank Directory & Voluntary Blood Donation Portal',
    hindiTitle: 'ई-रक्तकोश दिल्ली ब्लड बैंक निर्देशिका एवं स्वेच्छिक रक्तदान पोर्टल',
    category: 'Health',
    secondaryCategories: ['Healthcare & Medical', 'Government Finders'],
    state: 'delhi',
    department: 'National Blood Transfusion Council (NBTC) / C-DAC e-RaktKosh / Delhi State Blood Transfusion Council',
    shortDesc: 'Find real-time live blood availability (A+, B+, O+, AB+, A-, B-, O-, AB-, Platelets, Plasma) in 80+ licensed Delhi blood banks and register for voluntary blood donation drives.',
    overview: 'e-RaktKosh (eraktkosh.in) is a Central Government initiative integrated with Delhi State Blood Transfusion Council (DSBTC). It connects 80+ licensed government and private hospital blood banks in Delhi on a centralized digital portal, displaying real-time blood stock availability by component (Whole Blood, PRBC, FFP, Platelets, Single Donor Platelets SDP) and facilitating voluntary blood donor registration.',
    eligibility: [
      'Blood Seekers: Patients requiring urgent blood or blood components in Delhi NCR hospitals',
      'Blood Donors: Healthy individuals aged 18 to 65 years, weight >= 45 kg, hemoglobin >= 12.5 g/dL'
    ],
    requiredDocs: [
      'For Blood Requisition: Hospital Blood Requisition Form signed by treating doctor & patient ID proof',
      'For Voluntary Donation: Aadhaar Card or any photo ID proof'
    ],
    onlineProcess: [
      'Visit the official e-RaktKosh Portal (eraktkosh.in).',
      'Click "Blood Availability Search" -> Select State (Delhi), District, Blood Group (e.g., O Negative, B Positive), and Blood Component (PRBC / Platelets / Whole Blood).',
      'System displays live stock units available at AIIMS, Red Cross, Safdarjung, LNJP, RML, Rotary Blood Bank, and private hospital blood banks along with nodal officer phone numbers.',
      'For Donors: Click "Register as Voluntary Donor" or search upcoming Delhi Blood Donation Camps near your location.'
    ],
    offlineProcess: [
      'Visit nearest Licensed Blood Bank in Delhi with hospital doctor requisition slip or visit Red Cross Blood Bank, 1 Red Cross Road, New Delhi - 110001.'
    ],
    fees: 'Government Blood Banks charge standard processing fee (free for Thalassemia and Hemophilia patients)',
    processingTime: 'Real-time Stock Information & Immediate Issue',
    officialWebsiteName: 'Official e-RaktKosh Centralized Blood Bank Portal',
    officialGovUrl: 'https://eraktkosh.in/',
    downloadForms: [],
    faqs: [
      { question: 'Does e-RaktKosh show real-time live blood stock in Delhi hospitals?', answer: 'Yes, licensed blood banks in Delhi update their live stock numbers on the e-RaktKosh portal after every issue or collection.' },
      { question: 'Is blood donation free and safe?', answer: 'Voluntary blood donation is completely safe, using sterile single-use disposable needles and takes under 15 minutes.' }
    ],
    commonMistakes: [
      'Relying on unverified social media posts for blood requirements instead of checking verified live stocks on e-RaktKosh',
      'Not carrying official hospital requisition slip signed by treating physician'
    ],
    importantNotes: [
      'e-RaktKosh helps eliminate replacement blood donation pressure during medical emergencies.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-govt-hospitals-opd-registration-ors', 'ayushman-arogya-mandir-service'],
    tags: ['e-RaktKosh', 'Blood Bank', 'Blood Donation', 'Platelets', 'AIIMS Blood Bank', 'Red Cross Delhi', 'Emergency Health'],
    isPopular: true
  },
  {
    id: 'delhi-police-pcc-character-clearance',
    title: 'Delhi Police Character Clearance Certificate (PCC) Online Application',
    hindiTitle: 'दिल्ली पुलिस चरित्र सत्यापन प्रमाण पत्र (PCC) ऑनलाइन आवेदन',
    category: 'Police & Legal',
    secondaryCategories: ['Certificates', 'Licences'],
    state: 'delhi',
    department: 'Special Branch / Licensing Unit, Delhi Police (Govt of NCT of Delhi)',
    shortDesc: 'Apply for official Police Clearance Certificate (PCC) for employment, passport, visa, or tender digitally signed by Delhi Police Special Branch.',
    overview: 'The Delhi Police Online Character Verification & Police Clearance Certificate (PCC) portal allows citizens, job applicants, contractors, and visa applicants residing in Delhi to apply for official character verification. Local police station officers conduct field verification and submit reports digitally.',
    eligibility: [
      'Resident of NCT of Delhi (present address must be in Delhi NCR under Delhi Police jurisdiction)',
      'Indian citizens applying for job, emigration, visa, adoption, government tender, or cab driver registration'
    ],
    requiredDocs: [
      'Aadhaar Card or Passport or Voter ID for identity and Delhi residence proof',
      'Passport size photograph of applicant',
      'Letter from employer / Embassy / Agency requesting Police Clearance Certificate (if applicable)'
    ],
    onlineProcess: [
      'Visit the official Delhi Police PCC Portal (pcc.delhipolice.gov.in).',
      'Register with active Delhi mobile number and email ID.',
      'Fill applicant personal details, present address, permanent address, and police station jurisdiction.',
      'Upload Aadhaar Card / Passport proof and recent photo.',
      'Pay official PCC processing fee online (₹250 per application via debit card / UPI / Net Banking).',
      'Local Beat Constable visits residential address for physical verification.',
      'Download digitally signed Police Clearance Certificate (PCC) PDF upon approval.'
    ],
    offlineProcess: [
      'Visit the office of Deputy Commissioner of Police (DCP Special Branch), Delhi Police Headquarters or Zonal DCP Office.'
    ],
    fees: '₹250 Government Verification Fee',
    processingTime: '7 to 15 Days',
    officialWebsiteName: 'Delhi Police PCC Portal',
    officialGovUrl: 'https://pcc.delhipolice.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is physical visit to police station required for Delhi Police PCC?', answer: 'In most cases, beat officer visits your residence for verification. If needed, you may be requested to visit local Police Station with original documents.' },
      { question: 'What is the validity of Delhi Police Character Certificate?', answer: 'PCC is valid for 6 months from date of issuance by Delhi Police Special Branch.' }
    ],
    commonMistakes: [
      'Providing incorrect Police Station name while submitting present address',
      'Uploading blurred photo or incomplete address proof document'
    ],
    importantNotes: [
      'Authenticity of issued Delhi Police PCC can be verified online using the certificate barcode / QR code.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-police-tenant-maid-verification', 'delhi-police-lost-report-fir'],
    tags: ['Delhi Police', 'PCC', 'Character Certificate', 'Police Verification', 'Visa PCC', 'Job Verification'],
    isPopular: true
  },
  {
    id: 'delhi-police-lost-report-fir',
    title: 'Delhi Police Lost Article & Document Digital Report (e-Lost Report)',
    hindiTitle: 'दिल्ली पुलिस गुमशुदा सामान एवं दस्तावेज़ डिजिटल रिपोर्ट (e-Lost Report)',
    category: 'Police & Legal',
    secondaryCategories: ['Complaints', 'Identity & Documents'],
    state: 'delhi',
    department: 'Delhi Police (Govt. of NCT of Delhi)',
    shortDesc: 'Instant digital lodging and download of digitally signed Delhi Police Lost Report for lost Mobile Phones, Passport, Aadhaar, Driving Licence, RC, or ATM cards.',
    overview: 'Delhi Police Lost Report portal and Tatpar Mobile App enable citizens to immediately log lost property, documents, or mobile phones anywhere in Delhi NCR without visiting a physical police station. An instant digitally signed e-Lost Report PDF with QR code is generated for SIM re-issuance, document duplicate copies, or insurance claims.',
    eligibility: [
      'Any individual who lost documents, mobile phone, or non-cognizable articles in Delhi NCT jurisdiction'
    ],
    requiredDocs: [
      'Aadhaar Card or Photo ID details',
      'IMEI Number & Mobile Number (for lost mobile phone report)',
      'Document Number (Passport No., DL No., RC No., Bank Card No.) lost in Delhi'
    ],
    onlineProcess: [
      'Visit the official Delhi Police Lost Report Portal (lostfound.delhipolice.gov.in) or open Delhi Police Tatpar App.',
      'Click "Lost Report" -> Select "Register Lost Report".',
      'Enter complainant name, mobile number, email ID, and place/date where item was lost.',
      'Select article type (Mobile / Passport / Driving Licence / RC / Voter ID / Aadhaar / ATM Card / Bag).',
      'Provide document number, IMEI number, and description.',
      'Submit OTP received on mobile.',
      'Instantly download digitally signed e-Lost Report PDF receipt.'
    ],
    offlineProcess: [
      'Visit nearest Delhi Police Station helpdesk counter to obtain digital lost report assistance.'
    ],
    fees: '100% Free Service (₹0 Fee)',
    processingTime: 'Instant (2 Minutes)',
    officialWebsiteName: 'Delhi Police Lost Report Portal',
    officialGovUrl: 'https://lostfound.delhipolice.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is e-Lost Report accepted by telecom companies for duplicate SIM replacement?', answer: 'Yes, all telecom providers (Airtel, Jio, Vi, BSNL) accept Delhi Police e-Lost Report PDF for issuing duplicate SIM card.' },
      { question: 'Can e-Lost Report be filed for stolen articles involving theft/robbery?', answer: 'No. Theft, burglary, or snatching requires filing a regular e-FIR / police FIR. Lost Report is strictly for misplaced or lost items.' }
    ],
    commonMistakes: [
      'Filing lost report for stolen articles instead of reporting theft FIR',
      'Entering incorrect 15-digit IMEI number for mobile phone'
    ],
    importantNotes: [
      'Delhi Police e-Lost Report is digitally signed and does not require physical stamp or signature from Police Station SHO.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-police-view-download-fir', 'delhi-police-pcc-character-clearance'],
    tags: ['Delhi Police', 'Lost Report', 'Lost Mobile', 'Lost Passport', 'e-Lost Report', 'Tatpar App', 'FIR'],
    isPopular: true
  },
  {
    id: 'delhi-police-tenant-maid-verification',
    title: 'Delhi Police Tenant & Domestic Servant / Servant Verification',
    hindiTitle: 'दिल्ली पुलिस किरायेदार एवं नौकर / घरेलू सहायक सत्यापन',
    category: 'Police & Legal',
    secondaryCategories: ['Property & Housing', 'Certificates'],
    state: 'delhi',
    department: 'Delhi Police (Govt. of NCT of Delhi)',
    shortDesc: 'Mandatory online background verification of tenants, domestic help, maids, drivers, and security guards with Delhi Police for citizen safety.',
    overview: 'Under Section 144 of CrPC / Delhi Police Act order, property owners, landlords, and employers in Delhi NCT are legally required to submit tenant and domestic servant background verification details. The online portal enables instant form submission and verification tracking with local beat police officers.',
    eligibility: [
      'Property owners / landlords letting out residential or commercial property in Delhi',
      'Employers hiring domestic servants, house maids, cooks, drivers, or private security guards'
    ],
    requiredDocs: [
      'Landlord / Employer Aadhaar Card & Contact Details',
      'Tenant / Servant Aadhaar Card, Permanent Address & Mobile Number',
      'Passport size photograph of Tenant / Servant',
      'Contact numbers of 2 references from tenant/servant permanent village/town'
    ],
    onlineProcess: [
      'Visit the official Delhi Police Tenant & Servant Verification Portal (delhipolice.gov.in) or Tatpar App.',
      'Select "Tenant Verification" or "Servant Verification".',
      'Fill landlord and tenant / servant personal details, occupation, and permanent native address.',
      'Upload tenant/servant photo and Aadhaar ID copy.',
      'Submit form to assign digital copy to local Police Station.',
      'Download acknowledgment slip with unique reference tracking number.'
    ],
    offlineProcess: [
      'Download physical Tenant / Servant Verification Form, attach photos and ID copies, and submit at local Delhi Police Station.'
    ],
    fees: '100% Free Service (₹0 Fee)',
    processingTime: 'Instant Acknowledgment | Field Check in 7 Days',
    officialWebsiteName: 'Delhi Police Citizen Portal',
    officialGovUrl: 'https://delhipolice.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is tenant verification legally mandatory in Delhi?', answer: 'Yes. Landlords failing to complete tenant verification face legal action under Section 188 IPC / Section 223 BNS.' },
      { question: 'Does online tenant verification slip serve as official proof?', answer: 'Yes, the digital acknowledgment receipt issued by Delhi Police portal is valid legal proof of compliance.' }
    ],
    commonMistakes: [
      'Not attaching permanent village address proof of tenant/servant',
      'Delaying verification filing beyond 7 days of tenant moving in'
    ],
    importantNotes: [
      'Regular tenant and servant verification significantly prevents property crime and assists police intelligence.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-police-pcc-character-clearance', 'delhi-police-lost-report-fir'],
    tags: ['Delhi Police', 'Tenant Verification', 'Servant Verification', 'Landlord Duty', 'Safety', 'Delhi House'],
    isPopular: true
  },
  {
    id: 'delhi-police-view-download-fir',
    title: 'Delhi Police Online e-FIR Registration & FIR Copy Download Portal',
    hindiTitle: 'दिल्ली पुलिस ऑनलाइन ई-एफआईआर दर्ज एवं एफआईआर कॉपी डाउनलोड',
    category: 'Police & Legal',
    secondaryCategories: ['Complaints', 'Governance & Public Offices'],
    state: 'delhi',
    department: 'Delhi Police (Govt. of NCT of Delhi)',
    shortDesc: 'Download certified FIR copies online or lodge e-FIR for Motor Vehicle Theft (MV Theft) and E-Eaarth / Cyber Crime in Delhi.',
    overview: 'As mandated by Supreme Court guidelines, Delhi Police uploads public FIR copies online within 24 hours of registration. Citizens can view, search, and download certified copy of FIR registered across all Delhi police stations, or lodge direct e-FIR for stolen vehicles (MV Theft) and cyber financial frauds.',
    eligibility: [
      'Complainant, victim, accused, or legal advocate seeking copy of registered FIR in Delhi',
      'Citizens reporting motor vehicle theft or cyber crime within Delhi NCT'
    ],
    requiredDocs: [
      'FIR Number, Police Station Name, & District (or Date of incident / Complainant name)',
      'For e-FIR MV Theft: Vehicle RC, DL, Insurance Policy & Aadhaar Card'
    ],
    onlineProcess: [
      'Visit the official Delhi Police FIR Download Portal (delhipolice.gov.in) or Tatpar App.',
      'Click "View / Download FIR".',
      'Select District (e.g. Central, South, East, New Delhi) and Police Station.',
      'Enter FIR Number and year (or search by date range / complainant name).',
      'Enter OTP sent to mobile number.',
      'View and download official certified PDF copy of FIR.'
    ],
    offlineProcess: [
      'Visit the concerned Police Station duty officer counter to request physical copy of FIR.'
    ],
    fees: '100% Free Online Download',
    processingTime: 'Instant PDF Download',
    officialWebsiteName: 'Delhi Police FIR Search Portal',
    officialGovUrl: 'https://delhipolice.gov.in/fir-view',
    downloadForms: [],
    faqs: [
      { question: 'How soon is FIR uploaded online after registration in Delhi?', answer: 'Delhi Police uploads public FIR copies within 24 hours of registration (except sensitive cases like sexual offenses or national security).' },
      { question: 'Can I file online e-FIR for stolen car or bike in Delhi?', answer: 'Yes, Delhi Police MV Theft e-FIR portal enables 100% online filing of vehicle theft FIR and untraced report for insurance claim.' }
    ],
    commonMistakes: [
      'Searching FIR without selecting correct Police Station jurisdiction',
      'Attempting online download of sensitive nature FIRs restricted by court order'
    ],
    importantNotes: [
      'e-FIR untraced reports issued by Delhi Police for stolen vehicles are accepted directly by insurance providers for claim settlement.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-police-lost-report-fir', 'delhi-police-pcc-character-clearance'],
    tags: ['Delhi Police', 'FIR Download', 'e-FIR', 'Vehicle Theft', 'Police Station', 'Cyber Crime FIR'],
    isPopular: true
  },
  {
    id: 'delhi-ecourts-case-status-legal-aid',
    title: 'Delhi District Courts e-Courts Case Status & Free Legal Aid (DSLSA)',
    hindiTitle: 'दिल्ली ज़िला अदालत ई-कोर्ट्स केस स्टेटस एवं मुफ़्त कानूनी सहायता (DSLSA)',
    category: 'Police & Legal',
    secondaryCategories: ['Governance & Public Offices', 'Certificates'],
    state: 'delhi',
    department: 'Delhi High Court, District Courts of Delhi & Delhi State Legal Services Authority (DSLSA)',
    shortDesc: 'Track live court case status, daily cause lists, order judgements across Tis Hazari, Patiala House, Karkardooma, Saket, Rohini, Dwarka courts, and apply for Free Advocate Aid.',
    overview: 'The e-Courts Services portal (services.ecourts.gov.in) and Delhi State Legal Services Authority (DSLSA) provide digital judicial access to all District Courts in Delhi (Tis Hazari, Patiala House, Karkardooma, Rohini, Saket, Dwarka, Rouse Avenue). Citizens can search case status, view court judgements, check Lok Adalat schedules, and apply for free legal representation.',
    eligibility: [
      'Litigants, advocates, and citizens with active legal matters in Delhi District Courts',
      'Free Legal Aid Eligibility: Women, children, SC/ST, custody victims, industrial workmen, or persons with annual income under ₹3 Lakhs'
    ],
    requiredDocs: [
      'CNR Number (16-digit unique court case number) or Case Type + Case Number + Year',
      'For Free Legal Aid: Income Certificate / Aadhaar Card / ID Proof'
    ],
    onlineProcess: [
      'Visit official e-Courts Portal (services.ecourts.gov.in) or download eCourts Services Mobile App.',
      'Select State (Delhi) -> Select District Court Complex (e.g., Tis Hazari, Saket, Karkardooma).',
      'Enter 16-digit CNR Number or search by Party Name / Advocate Name / Case Number / FIR Number.',
      'View next hearing date, court room number, judge name, and download daily court order sheets / judgments.',
      'For Free Advocate / Legal Aid: Visit dslsa.org or call DSLSA Toll-Free Helpline 15100.'
    ],
    offlineProcess: [
      'Visit Front Office / Legal Services Authority counter at any District Court Complex in Delhi NCR.'
    ],
    fees: '100% Free Public Portal Access & Free Legal Aid for eligible sections',
    processingTime: 'Instant Online Case Search',
    officialWebsiteName: 'eCourts Services National Portal',
    officialGovUrl: 'https://services.ecourts.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is CNR Number in e-Courts?', answer: 'CNR (Case Number Record) is a 16-digit unique alphanumeric code assigned to every case filed in Indian courts. You can track status anywhere in India using CNR.' },
      { question: 'Who is eligible for free government advocate in Delhi under DSLSA?', answer: 'Women, children, SC/ST citizens, persons with disability, victims of violence, and individuals with annual income up to ₹3,00,000 are provided free lawyers by DSLSA.' }
    ],
    commonMistakes: [
      'Searching case status on wrong court complex portal',
      'Entering incorrect case filing year or missing CNR digits'
    ],
    importantNotes: [
      'Virtual Courts in Delhi also enable online settlement of traffic challans without visiting physical court room.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['traffic-challan-pay-delhi', 'delhi-police-view-download-fir'],
    tags: ['e-Courts', 'Tis Hazari', 'Saket Court', 'Patiala House', 'CNR Number', 'DSLSA', 'Free Legal Aid', 'Court Order'],
    isPopular: true
  },
  {
    id: 'delhi-pgms-public-grievance-portal',
    title: 'Delhi Government Public Grievance Monitoring System (PGMS) & 1031 Helpline',
    hindiTitle: 'दिल्ली सरकार जन शिकायत निवारण पोर्टल (PGMS) एवं 1031 हेल्पलाइन',
    category: 'Complaints',
    secondaryCategories: ['Governance & Public Offices', 'Complaints'],
    state: 'delhi',
    department: 'Public Grievance Monitoring System (PGMS), Govt of NCT of Delhi',
    shortDesc: 'Single-window grievance portal to lodge official complaints against all Delhi Govt departments (Revenue, Transport, PWD, Health, DJB, Food & Supplies).',
    overview: 'The Public Grievance Monitoring System (PGMS) is the centralized government grievance redressal mechanism established by the Government of NCT of Delhi. Citizens can lodge online complaints regarding service delays, harassment, corruption, or non-performance by any Delhi Government department.',
    eligibility: [
      'Any citizen or resident of NCT of Delhi having a grievance against any Delhi Government department, officer, or public authority'
    ],
    requiredDocs: [
      'Applicant Mobile Number & Email ID',
      'Application Reference Number / Receipt / Bill copy related to the grievance (if applicable)',
      'Supporting photos or PDF documents (up to 2 MB)'
    ],
    onlineProcess: [
      'Visit official Delhi PGMS Portal (pgms.delhi.gov.in) or call 1031 / 155355.',
      'Click "Lodge Grievance" -> Enter mobile number to receive OTP.',
      'Select Department (e.g., Revenue SDM, Transport RTO, PWD, Delhi Jal Board, Health & Family Welfare, Food & Supplies).',
      'Select sub-category/issue type and write grievance details clearly.',
      'Upload supporting document/photo proof if available.',
      'Submit to generate a unique 10-digit Grievance Registration Number.',
      'Track real-time status online under "Track Grievance" tab until final Action Taken Report (ATR) is uploaded.'
    ],
    offlineProcess: [
      'Visit Public Grievance Cell at Delhi Secretariat, I.P. Estate, New Delhi or drop written petition at Public Grievance Box at concerned Zonal Office.'
    ],
    fees: '100% Free Service (₹0 Fee)',
    processingTime: '15 to 30 Working Days',
    officialWebsiteName: 'Delhi PGMS Official Portal',
    officialGovUrl: 'https://pgms.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'To whom does PGMS assign my grievance?', answer: 'PGMS automatically routes your grievance to the designated Public Grievance Officer (PGO) of the concerned department for mandatory investigation.' },
      { question: 'What can I do if PGMS grievance is closed without satisfactory resolution?', answer: 'You can appeal before the Public Grievances Commission (PGC), 2nd Floor, M-Block, Vikas Bhawan, New Delhi.' }
    ],
    commonMistakes: [
      'Selecting wrong department name while submitting online grievance',
      'Filing commercial or court sub-judice matters on PGMS portal'
    ],
    importantNotes: [
      'PGMS tracks turnaround time strictly. Department officers are accountable for delay in submitting Action Taken Reports.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['cpgrams-central-public-grievances', 'mcd-311-civic-complaints-app'],
    tags: ['PGMS', 'Delhi Government', 'Complaints', 'Public Grievance', '1031 Helpline', 'Chief Minister Grievance'],
    isPopular: true
  },
  {
    id: 'cpgrams-central-public-grievances',
    title: 'Central Government Public Grievance Portal (CPGRAMS / pgportal.gov.in)',
    hindiTitle: 'केंद्र सरकार जन शिकायत पोर्टल (CPGRAMS / pgportal.gov.in)',
    category: 'Complaints',
    secondaryCategories: ['Governance & Public Offices', 'Complaints'],
    state: 'national',
    department: 'Department of Administrative Reforms & Public Grievances (DARPG), Govt of India',
    shortDesc: 'Nationwide single-window grievance portal for Railways, Passports, Income Tax, EPFO, India Post, Banking, Highways & Central PSUs.',
    overview: 'CPGRAMS (Centralised Public Grievance Redressal and Monitoring System) is an online 24x7 platform hosted by DARPG. It connects over 2,000 Central Ministries, Departments, State Governments, and Central PSUs to redress public grievances within 21-30 days.',
    eligibility: [
      'All Indian citizens, Overseas Citizens of India (OCI), and residents having grievances against Central Govt ministries or departments'
    ],
    requiredDocs: [
      'Aadhaar / Mobile Number for OTP login',
      'Supporting PDF document (up to 5 MB) detailing transaction, PNR, Passport ARN, or UAN number'
    ],
    onlineProcess: [
      'Visit official CPGRAMS Portal (pgportal.gov.in) or open UMANG Mobile App.',
      'Register/Sign in using Mobile / OTP -> Click "Lodge Public Grievance".',
      'Select Ministry/Department (e.g., Ministry of Railways, MEA Passport, Income Tax, EPFO, Department of Posts, Telecom).',
      'Select Grievance Category and describe problem (up to 2000 characters).',
      'Upload supporting document proof.',
      'Submit to receive instant Registration Number starting with MINIS/E/...',
      'Nodal Officer investigates and uploads official Action Taken Report (ATR) online.'
    ],
    offlineProcess: [
      'Send written grievance petition to Secretary, DARPG, Patel Bhawan, Parliament Street, New Delhi 110001.'
    ],
    fees: '100% Free Service (₹0 Fee)',
    processingTime: '21 to 30 Days (DARPG Mandate)',
    officialWebsiteName: 'CPGRAMS Portal DARPG',
    officialGovUrl: 'https://pgportal.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What issues cannot be submitted on CPGRAMS?', answer: 'RTI matters, court sub-judice cases, religious matters, and personal family disputes cannot be entertained on CPGRAMS.' },
      { question: 'Can I appeal if CPGRAMS grievance is closed unsatisfactorily?', answer: 'Yes, CPGRAMS provides an "Appeal" option within 30 days of closure to escalate directly to a Senior Nodal Officer.' }
    ],
    commonMistakes: [
      'Submitting RTI application instead of grievance',
      'Not attaching reference/ticket numbers of previous communication with the department'
    ],
    importantNotes: [
      'CPGRAMS is monitored directly at Cabinet Secretariat and Prime Minister’s Office (PMO) level.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-pgms-public-grievance-portal', 'mcd-311-civic-complaints-app'],
    tags: ['CPGRAMS', 'pgportal', 'Central Govt Grievance', 'Railways Complaint', 'Passport Grievance', 'Income Tax Grievance', 'EPFO Grievance'],
    isPopular: true
  },
  {
    id: 'mcd-311-civic-complaints-app',
    title: 'MCD 311 Civic Complaints App & Online Portal (Garbage, Potholes, Streetlights)',
    hindiTitle: 'एमसीडी 311 नागरिक शिकायत ऐप एवं ऑनलाइन पोर्टल (कूड़ा, सड़क, स्ट्रीटलाइट)',
    category: 'Complaints',
    secondaryCategories: ['Property & Housing', 'Complaints'],
    state: 'delhi',
    department: 'Municipal Corporation of Delhi (MCD)',
    shortDesc: 'Geo-tagged mobile app to lodge instant civic complaints regarding garbage dumping, potholes, streetlights, stray animals, & illegal construction in Delhi.',
    overview: 'MCD 311 Mobile App and Online Portal enable citizens across all 12 MCD zones in Delhi to report civic deficiencies directly using geo-tagged photographs. Tickets are automatically routed to local ward sanitary inspectors and executive engineers for fast-track resolution.',
    eligibility: [
      'Any resident or visitor residing in NCT of Delhi (MCD municipal jurisdiction)'
    ],
    requiredDocs: [
      'Live photograph of civic problem taken through MCD 311 smartphone app',
      'Mobile Number for SMS updates'
    ],
    onlineProcess: [
      'Download "MCD 311" smartphone app or visit mcdonline.nic.in.',
      'Enable GPS location -> Click "Post Complaint".',
      'Take live photo of garbage, road pothole, dead animal, or broken streetlight.',
      'Select Category: Sanitation, Engineering, Horticulture, Veterinary, Public Health, or Building.',
      'Add short description and submit -> Ticket number generated instantly.',
      'Local MCD ward staff visits site, rectifies problem, and uploads closure photo.'
    ],
    offlineProcess: [
      'Call MCD Civic Control Room helpline 155305 / 1800-11-8700 or visit concerned MCD Zonal Office.'
    ],
    fees: '100% Free Service (₹0 Fee)',
    processingTime: '24 Hours (Garbage) | 48-72 Hours (Streetlight/Road)',
    officialWebsiteName: 'MCD Civic Complaints Portal',
    officialGovUrl: 'https://mcdonline.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'What if MCD closes my complaint without fixing the problem?', answer: 'You can reopen the ticket on MCD 311 app with a single click, which alerts the Zonal Deputy Commissioner.' },
      { question: 'Can I report illegal construction on MCD 311 app?', answer: 'Yes, unauthorized building construction and public land encroachment can be reported under Building Department category.' }
    ],
    commonMistakes: [
      'Uploading stock images from gallery instead of live geo-tagged photo in app',
      'Not turning on location GPS while capturing photo'
    ],
    importantNotes: [
      'MCD 311 app works 24x7 across all 250 municipal wards in Delhi.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-pgms-public-grievance-portal', 'cpgrams-central-public-grievances'],
    tags: ['MCD 311', 'MCD Complaints', 'Garbage Complaint', 'Road Potholes', 'Streetlight', 'Delhi Civic', 'Municipal Corporation'],
    isPopular: true
  },
  {
    id: 'anti-corruption-lokayukta-delhi-service',
    title: 'Lokayukta Delhi & Anti-Corruption Branch (ACB) - Bribery & Official Malpractice Complaints',
    hindiTitle: 'लोकायुक्त दिल्ली एवं भ्रष्टाचार निरोधक शाखा (ACB) - रिश्वतखोरी एवं भ्रष्टाचार शिकायत',
    category: 'Complaints',
    secondaryCategories: ['Governance & Public Offices', 'Complaints'],
    state: 'delhi',
    department: 'Office of Lokayukta Delhi & Anti-Corruption Branch (ACB), Govt of NCT of Delhi',
    shortDesc: 'File official bribery, corruption, & official misconduct complaints against public servants, Ministers, MLAs, & officers in Delhi.',
    overview: 'The Office of Lokayukta, Delhi and the Anti-Corruption Branch (ACB) are statutory anti-corruption authorities empowered to investigate corruption, bribery, disproportionate assets, and official misconduct by public servants in Delhi.',
    eligibility: [
      'Any citizen or resident of NCT of Delhi who has been asked for a bribe or has proof of corruption/official misconduct by a Delhi public servant'
    ],
    requiredDocs: [
      'Affidavit on Form-I signed before Oath Commissioner / Judicial Magistrate (for Lokayukta complaints)',
      'Audio/Video recording, WhatsApp chat, or documentary evidence of bribe demand (if available)',
      'Aadhaar / Photo ID proof of complainant'
    ],
    onlineProcess: [
      'For Instant Bribery Trap by ACB: Immediately call 1031 (CM Anti-Corruption Helpline) or 011-23813181 before paying bribe.',
      'ACB sets up an official trap with marked notes and independent witnesses.',
      'For Formal Lokayukta Judicial Complaint: Visit official Lokayukta Portal (lokayukta.delhi.gov.in), Directorate of Vigilance (dvigil.delhi.gov.in), or PGMS Portal (pgms.delhi.gov.in).',
      'Download Form-I affidavit, fill details of public officer, nature of corruption, and evidence.',
      'Submit affidavit along with nominal ₹2,000 court fee stamp to Office of Lokayukta at Vikas Bhawan, I.P. Estate, New Delhi.'
    ],
    offlineProcess: [
      'Visit Office of Lokayukta, Block M, Vikas Bhawan, New Delhi or Anti-Corruption Branch (ACB), 5 Attar Chand Market, Old Secretariat, Delhi - 110054.'
    ],
    fees: 'Trap Action via ACB: 100% Free | Formal Lokayukta Judicial Petition: ₹2,000 Court Fee Stamp',
    processingTime: 'Immediate Trap Action | 60-90 Days for Lokayukta Inquiry',
    officialWebsiteName: 'Lokayukta Delhi & ACB Official Portals',
    officialGovUrl: 'https://lokayukta.delhi.gov.in',
    downloadForms: [],
    faqs: [
      { question: 'What is the phone helpline for ACB bribery trap in Delhi?', answer: 'Call 1031 (CM Anti-Corruption Helpline) or 011-23813181 immediately.' },
      { question: 'Who comes under the jurisdiction of Lokayukta Delhi?', answer: 'Chief Minister, Ministers, MLAs, MCD Councillors, and Officers/Employees of Delhi Govt and statutory bodies.' }
    ],
    commonMistakes: [
      'Paying the bribe before contacting ACB instead of reporting before paying',
      'Filing anonymous complaints without supporting affidavit in Lokayukta'
    ],
    importantNotes: [
      'Lokayukta has civil court powers to summon official records, witnesses, and order bank account scrutinies.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-pgms-public-grievance-portal', 'cpgrams-central-public-grievances'],
    tags: ['Lokayukta', 'Anti Corruption', 'ACB Delhi', '1031 Helpline', 'Bribery Complaint', 'Rishwat', 'Corruption'],
    isPopular: true
  },
  {
    id: 'vehicle-rc-fitness-renewal-delhi',
    title: 'Vehicle Registration Certificate (RC) Renewal & Fitness Certificate (Delhi RTO)',
    hindiTitle: 'वाहन आरसी (RC) नवीनीकरण एवं फिटनेस प्रमाण पत्र (दिल्ली RTO)',
    category: 'Vehicles & Transport',
    secondaryCategories: ['Renewal', 'Online Apply'],
    state: 'delhi',
    department: 'Transport Department, Govt. of NCT of Delhi / Vahan Parivahan',
    shortDesc: 'Renew private vehicle Registration Certificate (RC) after 15 years or commercial vehicle Fitness Certificate online across Delhi RTOs.',
    overview: 'As per Central Motor Vehicles Rules (CMVR), private non-transport vehicles (cars & bikes) require RC re-registration/renewal every 5 years after completing initial 15-year validity. Commercial vehicles require annual Fitness Certificate renewal at Burari / Shakur Basti ADTT testing centers.',
    eligibility: [
      'Private vehicles (Cars/Bikes) completing 15 years from date of initial registration',
      'Commercial transport vehicles (Taxis, Autos, Trucks, Buses) requiring periodic fitness certificate',
      'Vehicle must pass physical automated emission and mechanical safety inspection at Delhi ADTT RTO track'
    ],
    requiredDocs: [
      'Original Vehicle Registration Certificate (RC) Smart Card',
      'Valid PUC (Pollution Under Control) Certificate',
      'Valid Vehicle Motor Insurance Policy Document',
      'Form 25 (Application for Renewal of RC) / Form 38 (Fitness Certificate)',
      'Chassis Pencil Trace impression & Address Proof of Owner (Aadhaar / Voter ID / Rent Agreement)'
    ],
    onlineProcess: [
      'Visit Vahan Parivahan Portal (vahan.parivahan.gov.in) -> Select State: Delhi.',
      'Enter Vehicle Registration Number & chassis last 5 digits.',
      'Select "Renewal of Registration" or "Fitness Certificate Renewal".',
      'Upload valid Insurance policy, PUC certificate, and self-declaration Form 25.',
      'Pay official government RC renewal fee + Green Tax / Road Tax online.',
      'Book appointment slot for physical vehicle inspection at designated Delhi RTO track (e.g., Burari / Shakur Basti / Mayur Vihar).',
      'Take vehicle for automated brake, headlight, suspension, and exhaust emissions test.',
      'Post inspector clearance -> Download updated digital RC or receive renewed RC Smart Card at registered address.'
    ],
    offlineProcess: [
      'Visit respective Zonal Delhi RTO office with vehicle, original RC, insurance, PUC, and chassis print on Form 25.'
    ],
    fees: 'Two-Wheeler RC Renewal: ~₹1,000 | Private Car RC Renewal: ~₹5,000 + Green Tax | Commercial Fitness: ₹600-₹1,000',
    processingTime: '7 to 15 Working Days (Post track inspection)',
    officialWebsiteName: 'Vahan Parivahan Sewa Portal (Govt of India)',
    officialGovUrl: 'https://vahan.parivahan.gov.in',
    downloadForms: [
      { name: 'Form 25 (Application for Renewal of Registration) PDF', url: 'https://parivahan.gov.in/parivahan/sites/default/files/2023-01/Form25.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'What is the penalty for late RC renewal in Delhi?', answer: 'A monthly penalty of ₹300 for 2-wheelers and ₹500 for 4-wheelers is levied for delay in renewing registration certificate beyond 15-year expiry date.' },
      { question: 'Can 15-year-old petrol or 10-year-old diesel vehicles be renewed in Delhi?', answer: 'As per NGT and Supreme Court guidelines in Delhi NCT, 15-year petrol and 10-year diesel vehicles cannot run on public roads unless issued NOC for transfer outside Delhi NCR.' }
    ],
    commonMistakes: [
      'Appearing at RTO track without active valid PUC or expired vehicle insurance',
      'Discrepancy in owner address on Aadhaar vs registered RC'
    ],
    importantNotes: [
      'Mandatory Green Tax / Environmental Compensation Fee is levied during 15-year RC renewal in Delhi NCR.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['driving-licence-delhi-transport', 'hsrp-booking-delhi', 'traffic-challan-pay-delhi'],
    tags: ['RC Renewal', 'Fitness Certificate', 'Vahan', 'Parivahan', 'Delhi RTO', 'Vehicle Registration', '15 Year RC', 'Renewal'],
    isPopular: true
  },
  {
    id: 'fire-noc-renewal-delhi',
    title: 'Delhi Fire Service No Objection Certificate (NOC) & Renewal',
    hindiTitle: 'दिल्ली फायर सर्विस अनापत्ति प्रमाण पत्र (NOC) एवं नवीनीकरण',
    category: 'Licences',
    secondaryCategories: ['Renewal', 'Police & Legal', 'Business'],
    state: 'delhi',
    department: 'Delhi Fire Service (DFS), Govt. of NCT of Delhi',
    shortDesc: 'Apply or renew Fire Safety Certificate / NOC for commercial buildings, schools, hospitals, hotels, guest houses, and high-rise apartments in Delhi.',
    overview: 'Under Delhi Fire Service Rules 2010, commercial establishments, high-rise buildings (above 9/15 meters), educational institutions, assembly halls, and hospitals in Delhi must possess a valid Fire Safety NOC renewed every 3 years (5 years for educational buildings).',
    eligibility: [
      'Building owners, occupiers, school management, hospital administrators, or hotel operators in Delhi NCT',
      'Premises equipped with functional firefighting system (hose reels, smoke detectors, sprinklers, fire pumps, emergency exits, and wider staircase width)'
    ],
    requiredDocs: [
      'Approved Building Architectural Plan & Structural Safety Certificate',
      'Previous Fire Safety Certificate NOC copy (for renewal applications)',
      'Third-party Fire Fighting System Maintenance & Audit Report signed by certified engineer',
      'FSC Compliance Checklist & Fire Pump / Water Storage Capacity proof'
    ],
    onlineProcess: [
      'Visit Delhi Fire Service Online Portal (dfs.delhigovt.nic.in).',
      'Click "Apply for Fire Safety Certificate (FSC) / Renewal".',
      'Enter Building Details, Height (meters), Plot Area, Usage Category (Residential / Educational / Institutional / Assembly / Mercantile / Industrial).',
      'Upload building plans, previous NOC copy, and fire equipment inspection logs.',
      'Submit application -> Assigned DFS Divisional Fire Officer (DFO) schedules site inspection.',
      'Fire Officers inspect functional water pressure, automatic sprinkler pumps, smoke alarms, and clear escape routes.',
      'Post satisfactory inspection -> Download official Fire Safety Certificate (NOC) PDF.'
    ],
    offlineProcess: [
      'Headquarters, Delhi Fire Service, 9, Connaught Lane, Barakhamba, New Delhi - 110001.'
    ],
    fees: 'No direct government fee; compliance audit and equipment maintenance required.',
    processingTime: '15 to 30 Days (includes physical inspection by DFS officers)',
    officialWebsiteName: 'Delhi Fire Service Official Portal',
    officialGovUrl: 'https://dfs.delhigovt.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is the validity of Fire Safety NOC in Delhi?', answer: 'Fire Safety Certificates are valid for 3 years for commercial, assembly, hotel, and hospital buildings, and 5 years for educational institutions.' },
      { question: 'Is Fire NOC compulsory for MCD Trade License or FSSAI?', answer: 'Yes, eating houses above 50 seating capacity, lodging houses, and factories over 100 sq meters require mandatory DFS Fire NOC for obtaining MCD Trade License and FSSAI license.' }
    ],
    commonMistakes: [
      'Blocked emergency staircases or locked fire exit doors during inspection',
      'Non-functional fire pumps or unpressurized fire hydrants during test'
    ],
    importantNotes: [
      'Annual third-party maintenance audit of automatic fire alarm and sprinkler systems is compulsory.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['mcd-trade-health-license', 'fssai-food-license-delhi'],
    tags: ['Fire NOC', 'Delhi Fire Service', 'DFS', 'Fire Safety Certificate', 'NOC Renewal', 'Building Safety', 'Renewal'],
    isPopular: true
  },
  {
    id: 'voter-id-card-correction',
    title: 'Voter ID Card Correction & Address Transfer (ECI Form 8)',
    hindiTitle: 'वोटर कार्ड में संशोधन व पता परिवर्तन (फॉर्म 8)',
    category: 'Identity & Documents',
    secondaryCategories: ['Corrections', 'Identity & Documents', 'Online Apply'],
    state: 'national',
    department: 'Election Commission of India (ECI) / CEO Delhi',
    shortDesc: 'Correct name, DOB, relative name, photograph, gender, or transfer polling address in Voter ID EPIC card using Form 8.',
    overview: 'The Election Commission of India (ECI) provides Form 8 on the Voter Helpline Portal and voters.eci.gov.in for correction of particulars in electoral roll, shifting of residence within or outside assembly constituency, replacement of EPIC card, and marking of PwD voters.',
    eligibility: [
      'Registered Indian voter possessing EPIC (Voter ID) number',
      'Voters shifting residence within Delhi or from another State/UT to Delhi'
    ],
    requiredDocs: [
      'Existing Voter ID Card (EPIC) Number',
      'Proof of Correct Name / DOB: Aadhaar Card, Matriculation Certificate, Birth Certificate, PAN Card, Passport',
      'Proof of New Address (if shifting residence): Electricity Bill, Water Bill, Aadhaar Card, Registered Rent Agreement, Bank Passbook',
      'Passport size Photograph (if updating photo on Voter Card)'
    ],
    onlineProcess: [
      'Visit official ECI Voters Service Portal (voters.eci.gov.in) or download Voter Helpline App.',
      'Log in with registered Mobile Number or Voter ID number.',
      'Select "Form 8 - Correction of Entries / Shifting of Residence / Replacement of EPIC".',
      'Choose application reason: "Correction of Entries in Existing Electoral Roll" or "Shifting of Residence".',
      'Enter state (Delhi), Assembly Constituency, and select fields to be corrected (Name, Gender, DOB/Age, Type of Relation, Name of Relation, Address, Mobile No, Photo).',
      'Upload valid supporting document proof for selected correction field.',
      'Submit form -> System generates a 12-digit Reference ID for tracking Form 8 status.',
      'Booth Level Officer (BLO) performs field verification -> Upon approval, updated Voter ID is dispatched via Speed Post.'
    ],
    offlineProcess: [
      'Submit physical Form 8 with document proofs to local Booth Level Officer (BLO) or District Voter Facilitation Centre (SDM Office).'
    ],
    fees: '100% Free Service (₹0 Govt Fee)',
    processingTime: '15 to 30 Working Days',
    officialWebsiteName: 'Election Commission of India Voters Service Portal',
    officialGovUrl: 'https://voters.eci.gov.in/',
    downloadForms: [
      { name: 'ECI Form 8 - Voter ID Correction & Address Shifting (PDF)', url: 'https://voters.eci.gov.in/download-forms', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'Can I change my address on Voter ID card online from another state to Delhi?', answer: 'Yes, select "Shifting of Residence" in Form 8, choose Delhi as state, and enter your new Delhi address along with valid proof.' },
      { question: 'How long does it take to get a new printed Voter ID card after Form 8 approval?', answer: 'Once BLO verifies and ERO approves Form 8, a fresh color plastic PVC Voter Card is printed and delivered by Speed Post within 3-4 weeks.' }
    ],
    commonMistakes: [
      'Uploading address proof without name matching applicant name or spouse/parent name',
      'Not verifying Reference ID status on voters.eci.gov.in portal'
    ],
    importantNotes: [
      'Mobile number linking with Voter ID via Form 8 enables instant e-EPIC PDF download.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['aadhaar-card-new-update', 'pan-card-apply'],
    tags: ['Voter ID Correction', 'Form 8', 'ECI', 'Address Change', 'Voter Helpline', 'EPIC Correction', 'Correction'],
    isPopular: true
  },
  {
    id: 'gst-details-correction-amendment',
    title: 'GST Registration Details Correction & Amendment (Form GST REG-14)',
    hindiTitle: 'जीएसटी विवरण संशोधन एवं अमेंडमेंट (Form REG-14)',
    category: 'Business',
    secondaryCategories: ['Corrections', 'Taxes & Finance', 'Business'],
    state: 'national',
    department: 'Department of Trade & Taxes, Govt. of NCT of Delhi / GSTN Portal',
    shortDesc: 'Amend core details (legal trade name, principal place of business, directors/partners) or non-core details (email, phone, HSN) on GST Portal.',
    overview: 'Registered taxpayers under Goods & Services Tax (GST) in Delhi can amend core and non-core registration information under Rule 19 of CGST/DGST Rules using Form GST REG-14 within 15 days of any change in business information.',
    eligibility: [
      'Active GSTIN taxpayer (Proprietorship, Partnership, LLP, Private Limited Company) in Delhi'
    ],
    requiredDocs: [
      'Proof of Changed Core Detail (e.g. New Rent Agreement / Electricity Bill for Address Change)',
      'Board Resolution / Partnership Deed amendment copy for change in Directors / Partners',
      'PAN Card & Aadhaar Card of new Authorized Signatory / Director',
      'Digital Signature Certificate (DSC) or Aadhaar OTP of authorized signatory'
    ],
    onlineProcess: [
      'Log in to GST Portal (gst.gov.in) with Username & Password.',
      'Go to "Services" -> "Registration" -> "Amendment of Registration Core Fields" or "Non-Core Fields".',
      'Select relevant tab: Business Details, Principal Place of Business, Additional Places, Goods and Services (HSN), or Authorized Signatory.',
      'Enter updated information and upload valid documentary proof.',
      'Verify details using Aadhaar OTP / EVC or DSC.',
      'System generates ARN (Application Reference Number).',
      'For Non-Core amendments -> Auto-approved instantly. For Core amendments -> Proper Officer approves within 7 working days.'
    ],
    offlineProcess: [
      'Vyapar Bhawan, Department of Trade & Taxes, ITO, IP Estate, New Delhi.'
    ],
    fees: '100% Free Government Service (₹0 Fee)',
    processingTime: 'Instant for Non-Core | 2 to 7 Days for Core Fields',
    officialWebsiteName: 'GST Official Portal (Govt of India)',
    officialGovUrl: 'https://www.gst.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What is the difference between Core and Non-Core GST amendments?', answer: 'Core fields (Business Name, Principal Address, Partners/Directors) require approval from GST Jurisdiction Officer. Non-Core fields (email, mobile number, HSN codes) are auto-approved instantly upon OTP verification.' },
      { question: 'Is physical inspection needed for GST address change in Delhi?', answer: 'If valid electricity bill and registered lease deed with landlord NOC are uploaded, physical inspection is usually waived.' }
    ],
    commonMistakes: [
      'Not updating GST certificate address within 15 days of shifting office premises',
      'Mismatch in new director name on MCA vs GST portal'
    ],
    importantNotes: [
      'Updated GSTIN Registration Certificate (Form GST REG-06) can be downloaded post approval from GST portal.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['delhi-gst-registration-return-filing', 'mcd-trade-health-license'],
    tags: ['GST Amendment', 'GST Correction', 'Form REG-14', 'GST Portal', 'Trade Name Change', 'Address Change GST', 'Correction'],
    isPopular: true
  },
  {
    id: 'dl-rc-details-correction',
    title: 'Driving Licence & RC Address / Name Correction (Delhi Transport RTO)',
    hindiTitle: 'ड्राइविंग लाइसेंस व आरसी पता/नाम संशोधन (दिल्ली आरटीओ)',
    category: 'Vehicles & Transport',
    secondaryCategories: ['Corrections', 'Vehicles & Transport', 'Online Apply'],
    state: 'delhi',
    department: 'Transport Department, Govt. of NCT of Delhi / Parivahan Sewa',
    shortDesc: 'Apply for Change of Address, Name Correction, or Photo/Signature update on Driving Licence (DL) and Vehicle Registration Certificate (RC) online.',
    overview: 'Delhi Transport Department offers 100% faceless online services on Sarathi & Vahan Parivahan portals for updating address, correcting name spelling errors, or updating mobile number on DL and RC without visiting RTO offices.',
    eligibility: [
      'Holders of valid Delhi Driving Licence or Delhi Registered Vehicle (DL-01 to DL-14 series)',
      'Aadhaar card linked with active mobile number for online faceless processing'
    ],
    requiredDocs: [
      'Original Driving Licence / RC Smart Card details',
      'Aadhaar Card with updated Delhi Address (for address change)',
      'Gazette Notification / Marriage Certificate (for legal name change)',
      'Valid Pollution Under Control (PUC) & Active Vehicle Insurance (for RC update)'
    ],
    onlineProcess: [
      'Visit Sarathi Parivahan Portal (sarathi.parivahan.gov.in) -> Select State: Delhi.',
      'Click "Apply for DL Services" -> Enter DL Number and Date of Birth.',
      'Select required service: "Change of Address in DL" or "Correction in DL".',
      'Authenticate via Aadhaar e-KYC for instant address fetch.',
      'Pay prescribed government fee online.',
      'Faceless application gets verified by Delhi RTO -> Updated DL Smart Card is dispatched via Speed Post.'
    ],
    offlineProcess: [
      'Respective Zonal Delhi RTO office in case of non-Aadhaar manual verification.'
    ],
    fees: 'DL Address Change / Correction: ₹200 + ₹200 Smart Card fee | RC Address Change: ₹300',
    processingTime: '7 to 15 Working Days',
    officialWebsiteName: 'Sarathi & Vahan Parivahan Official Portal',
    officialGovUrl: 'https://parivahan.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is DL address change faceless in Delhi?', answer: 'Yes, if your Aadhaar has your updated address and mobile number, DL address change is completely faceless and requires no physical RTO visit.' }
    ],
    commonMistakes: [
      'Mismatch between address formatting on Aadhaar vs Parivahan entry',
      'Expired vehicle insurance while requesting RC address change'
    ],
    importantNotes: [
      'Updating address on DL within 30 days of moving is mandatory under Motor Vehicles Act.'
    ],
    lastUpdated: '2026-07-29',
    relatedServiceIds: ['driving-licence-delhi-transport', 'vehicle-rc-fitness-renewal-delhi'],
    tags: ['DL Correction', 'RC Correction', 'Address Change DL', 'Delhi RTO', 'Parivahan', 'Faceless DL', 'Correction'],
    isPopular: true
  },
  {
    id: 'delhi-lakshmi-yojana',
    title: 'Delhi Lakshmi Yojana (दिल्ली लक्ष्मी योजना)',
    hindiTitle: 'दिल्ली लक्ष्मी योजना - कन्या वित्तीय प्रोत्साहन योजना',
    category: 'Government Schemes',
    secondaryCategories: ['Women Scheme', 'Student Scheme', 'Financial Assistance', 'Government Schemes', 'Online Apply'],
    state: 'delhi',
    department: 'Department of Women and Child Development, Govt. of NCT of Delhi',
    shortDesc: 'Official Delhi Government scheme providing structured financial assistance and term deposits for newborn girl children to ensure their education and financial security.',
    overview: 'Delhi Lakshmi Yojana managed by the Department of Women and Child Development, Govt. of NCT of Delhi (dly.delhi.gov.in), aims to eliminate discrimination against the girl child, promote registration of births, and ensure higher education by depositing fixed financial amounts in the name of the girl child upon reaching specific educational milestones.',
    eligibility: [
      'Girl child born in NCT of Delhi with birth registered at MCD / NDMC within prescribed period.',
      'Parents/Guardians must be continuous residents of Delhi for at least 3 years prior to application.',
      'Annual family income must not exceed ₹1,00,000/- (Rupees One Lakh) per annum.',
      'Enrolment must be submitted before child turns 1 year old (or at school admission milestones).'
    ],
    requiredDocs: [
      'Birth Certificate of Girl Child issued by MCD / NDMC',
      'Proof of 3 Years Residence in Delhi (Ration Card / Voter ID / Aadhaar / Electricity Bill)',
      'Family Income Certificate issued by Revenue Department / SDM Office',
      'Aadhaar Card of Mother / Father / Legal Guardian',
      'Joint Bank Account Passbook (Girl Child + Guardian) in PSU/Nationalised Bank',
      'Passport size photograph of Girl Child with Mother'
    ],
    onlineProcess: [
      'Visit the official Delhi Lakshmi Yojana portal (https://dly.delhi.gov.in/) or e-District Delhi Portal (edistrict.delhigovt.nic.in).',
      'Click "Citizen Registration / New Applicant" and log in using Aadhaar or Voter ID.',
      'Select "Department of Women & Child Development" -> "Delhi Lakshmi Yojana Application".',
      'Fill in applicant details, child birth details, MCD birth registration number, and bank account details.',
      'Upload scanned color copies of Birth Certificate, Income Certificate (issued by SDM), and Delhi Residence Proof.',
      'Submit the application and note down the 14-digit Application Reference Number for tracking.'
    ],
    offlineProcess: [
      'Obtain physical application form from WCD District Office or Sub-Divisional Magistrate (SDM) office.',
      'Fill in required fields and attach self-attested copies of Birth Certificate and Income Certificate.',
      'Submit form at WCD District Counter or SDM Revenue Desk.',
      'Collect physical acknowledgment slip containing application ID.'
    ],
    fees: '100% Free Government Scheme (₹0 Application Fee)',
    processingTime: '15 to 30 Working Days',
    officialWebsiteName: 'Delhi Lakshmi Yojana Official Portal (Govt of Delhi)',
    officialGovUrl: 'https://dly.delhi.gov.in/',
    officialNotificationUrl: 'https://dly.delhi.gov.in/notifications/delhi_lakshmi_yojana_guidelines.pdf',
    downloadForms: [
      { name: 'Delhi Lakshmi Yojana Application Form (PDF)', url: 'https://dly.delhi.gov.in/downloads/delhi_lakshmi_form.pdf', isOfficialPdf: true }
    ],
    faqs: [
      { question: 'What is the official website for Delhi Lakshmi Yojana?', answer: 'The official source and portal is https://dly.delhi.gov.in/ managed by the Dept. of Women and Child Development, Govt. of NCT of Delhi.' },
      { question: 'What is the annual income limit for Delhi Lakshmi Yojana?', answer: 'The annual family income must be within ₹1,00,000/- per annum as certified by the Competent Revenue Authority (SDM/Tehsildar).' },
      { question: 'When is the maturity amount disbursed?', answer: 'Financial assistance is invested in fixed term deposits and disbursed upon the girl child turning 18 years old and passing Class 10th or 12th examination.' }
    ],
    commonMistakes: [
      'Uploading income certificates issued by non-gazetted authorities instead of Revenue Dept/SDM',
      'Delaying application beyond 1 year of child birth without valid MCD birth certificate'
    ],
    importantNotes: [
      'Ensure the bank account is opened in a PSU Bank linked with Aadhaar for Direct Benefit Transfer (DBT).',
      'Check official portal https://dly.delhi.gov.in/ regularly for list of approved applicants.'
    ],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['delhi-ladli-yojana', 'delhi-mahila-samman-rashi', 'sukanya-samriddhi-yojana-account'],
    tags: ['Delhi Lakshmi Yojana', 'dly.delhi.gov.in', 'Girl Child Scheme', 'Delhi Govt Scheme', 'Women Welfare', 'Education Grant'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'Annual family income up to ₹1,00,000/- per annum',
    ageCriteria: 'Newborn up to 1 year for initial enrolment; payout at 18 years',
    helpline: '011-23388000 / 181 (Delhi Women Helpline)',
    importantDates: 'Ongoing Annual Enrollment',
    schemeType: 'Women Scheme',
    contentVerified: true,
    keywords: {
      primary: ['Delhi Lakshmi Yojana', 'dly.delhi.gov.in', 'Delhi Lakshmi Scheme', 'Delhi Girl Child Scheme'],
      secondary: ['Delhi WCD Girl Subsidy', 'Delhi Lakshmi Scheme Form', 'dly delhi gov in login'],
      longTail: ['how to apply delhi lakshmi yojana online at dly.delhi.gov.in', 'delhi lakshmi yojana eligibility documents income limit', 'delhi lakshmi yojana application status check'],
      questions: ['What is Delhi Lakshmi Yojana?', 'How to apply on dly.delhi.gov.in?', 'Who is eligible for Delhi Lakshmi Scheme?']
    }
  },
  {
    id: 'delhi-mahila-samman-rashi',
    title: 'Delhi Mahila Samman Rashi Yojana (महिला सम्मान राशि - ₹1000/माह)',
    hindiTitle: 'दिल्ली महिला सम्मान राशि योजना - ₹1000 प्रति माह',
    category: 'Government Schemes',
    secondaryCategories: ['Women Scheme', 'Financial Assistance', 'Government Schemes', 'Online Apply'],
    state: 'delhi',
    department: 'Department of Women & Child Development, Govt. of NCT of Delhi',
    shortDesc: 'Delhi Government scheme offering ₹1,000 monthly direct cash assistance to eligible adult women residing in Delhi.',
    overview: 'Delhi Mahila Samman Rashi Yojana provides financial independence to women aged 18 years and above in Delhi through ₹1,000 per month directly transferred into their Aadhaar-linked bank accounts.',
    eligibility: [
      'Female resident of NCT of Delhi aged 18 years or above.',
      'Must possess a valid Delhi Voter ID card (EPIC).',
      'Applicant should NOT be a taxpayer or government employee/pensioner.',
      'Must have an individual Aadhaar-linked bank account.'
    ],
    requiredDocs: [
      'Aadhaar Card of Applicant',
      'Delhi Voter ID Card (EPIC)',
      'Bank Account Passbook (Aadhaar Seeded)',
      'Self-Declaration Form regarding non-taxpayer status'
    ],
    onlineProcess: [
      'Visit e-District Delhi Portal (edistrict.delhigovt.nic.in) or myscheme.gov.in.',
      'Select "Mahila Samman Rashi Scheme" under Women & Child Development.',
      'Enter Voter ID details, Aadhaar number, and verify OTP.',
      'Upload Aadhaar and self-declaration of non-taxpayer status.',
      'Submit application and obtain Application ID.'
    ],
    offlineProcess: [
      'Visit local SDM office or Anganwadi Centre for physical form collection and submission.'
    ],
    fees: '100% Free Scheme (₹0 Fee)',
    processingTime: '15 to 30 Days',
    officialWebsiteName: 'Delhi e-District & Women Dept Portal',
    officialGovUrl: 'https://edistrict.delhigovt.nic.in/',
    downloadForms: [],
    faqs: [
      { question: 'Are income tax payers eligible for Mahila Samman Rashi?', answer: 'No, women paying income tax or receiving government pensions are excluded.' }
    ],
    commonMistakes: ['Uploading bank passbook that is not linked with Aadhaar'],
    importantNotes: ['Amount is transferred via Direct Benefit Transfer (DBT).'],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['delhi-lakshmi-yojana', 'delhi-ladli-yojana', 'delhi-widow-destitute-pension'],
    tags: ['Mahila Samman Rashi', 'Delhi Women Scheme', '₹1000 Monthly', 'Delhi Govt', 'DBT'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'Non-income tax payer',
    ageCriteria: '18 years and above',
    helpline: '011-23388000 / 181',
    importantDates: 'Active Scheme Registration',
    schemeType: 'Women Scheme',
    contentVerified: true,
    keywords: {
      primary: ['Delhi Mahila Samman Rashi', 'Delhi 1000 Rs Scheme for Women', 'Mahila Samman Rashi Apply'],
      secondary: ['Delhi Women Monthly Financial Assistance', 'Delhi Govt Women Scheme'],
      longTail: ['how to apply delhi mahila samman rashi yojana online', 'delhi mahila samman rashi form pdf download'],
      questions: ['Who is eligible for Delhi Mahila Samman Rashi?', 'How to register for ₹1000 monthly scheme in Delhi?']
    }
  },
  {
    id: 'delhi-electric-vehicle-subsidy',
    title: 'Delhi Electric Vehicle Subsidy 2.0 (दिल्ली ईवी सब्सिडी योजना)',
    hindiTitle: 'दिल्ली इलेक्ट्रिक वाहन (EV) सब्सिडी एवं चार्जर अनुदान',
    category: 'Government Schemes',
    secondaryCategories: ['Subsidy', 'Vehicles & Transport', 'Government Schemes', 'Online Apply'],
    state: 'delhi',
    department: 'Department of Transport, Govt. of NCT of Delhi / Delhi EV Cell',
    shortDesc: 'Delhi EV Policy 2.0 provides purchase incentives up to ₹30,000 for 2-wheelers/3-wheelers, ₹1.5 Lakh for 4-wheelers, plus 100% road tax and registration fee waiver.',
    overview: 'Delhi EV Policy managed by the Transport Dept (ev.delhi.gov.in) aims to accelerate EV adoption in Delhi by providing cash subsidies credited directly to buyer bank accounts within 7 working days, along with subsidies for installing private EV chargers.',
    eligibility: [
      'Purchasers of electric vehicles (2-wheeler, 3-wheeler, e-rickshaw, 4-wheeler) registered at Delhi RTOs.',
      'Purchased from Delhi authorised EV dealerships listed on EV portal.',
      'Home/commercial property owners installing approved EV chargers.'
    ],
    requiredDocs: [
      'Aadhaar Card of EV owner',
      'Vehicle Sales Invoice & Tax Invoice from authorised dealership',
      'Delhi RTO Temporary/Permanent RC copy',
      'Cancelled Cheque / Bank Passbook for direct subsidy transfer'
    ],
    onlineProcess: [
      'Dealership uploads vehicle sales invoice and customer details on Delhi EV Portal (ev.delhi.gov.in) at time of purchase.',
      'Customer receives SMS with application link.',
      'Verify bank account details and upload bank passbook copy.',
      'Transport Department verifies invoice -> Subsidy credited via DBT within 7 days.'
    ],
    offlineProcess: [
      'Handled digitally via authorised EV showrooms across Delhi.'
    ],
    fees: '₹0 (100% Free Subsidy Processing)',
    processingTime: '7 to 10 Days',
    officialWebsiteName: 'Delhi Electric Vehicle Official Portal',
    officialGovUrl: 'https://ev.delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is road tax waived for EVs in Delhi?', answer: 'Yes, Delhi Govt grants 100% waiver on road tax and registration fees for all electric vehicles registered in Delhi.' }
    ],
    commonMistakes: ['Purchasing EV outside NCT of Delhi where Delhi EV policy subsidy is not applicable'],
    importantNotes: ['Private charger installation subsidy of ₹6,000 is available through BSES / TPDDL power discoms.'],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['dl-rc-details-correction', 'driving-licence-delhi-transport'],
    tags: ['Delhi EV Subsidy', 'Electric Vehicle Delhi', 'ev.delhi.gov.in', 'EV Charger Subsidy', 'Road Tax Waiver'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'No income limit (Open to all Delhi EV buyers)',
    ageCriteria: '18 years and above',
    helpline: '1800-180-0022 (Delhi EV Helpline)',
    importantDates: 'Active EV Policy 2.0',
    schemeType: 'Subsidy',
    contentVerified: true,
    keywords: {
      primary: ['Delhi EV Subsidy', 'ev.delhi.gov.in', 'Delhi Electric Vehicle Policy', 'EV Charger Subsidy Delhi'],
      secondary: ['Delhi 2 wheeler EV subsidy', 'Delhi e rickshaw subsidy status'],
      longTail: ['how to get delhi ev subsidy in bank account', 'delhi electric vehicle subsidy application tracking'],
      questions: ['How much subsidy on electric scooter in Delhi?', 'How to apply for EV subsidy in Delhi?']
    }
  },
  {
    id: 'delhi-zero-power-bill-scheme',
    title: 'Delhi Free Electricity Scheme (200 Units Free & 50% Subsidy)',
    hindiTitle: 'दिल्ली बिजली सब्सिडी योजना (200 यूनिट फ्री बिजली)',
    category: 'Government Schemes',
    secondaryCategories: ['Subsidy', 'Utilities', 'Government Schemes', 'Online Apply'],
    state: 'delhi',
    department: 'Department of Power, Govt. of NCT of Delhi / DISCOMs (BSES Yamuna, BSES Rajdhani, TPDDL)',
    shortDesc: 'Delhi Government electricity subsidy providing 100% free electricity for consumption up to 200 units/month and 50% subsidy (up to ₹800) for 201-400 units.',
    overview: 'The Delhi Free Power Subsidy scheme empowers households by waiving electricity charges for low-to-medium consumption. Consumers can opt-in digitally or via missed call to receive zero electricity bills.',
    eligibility: [
      'Domestic electricity consumers registered with BSES Rajdhani (BRPL), BSES Yamuna (BYPL), or Tata Power Delhi Distribution (TPDDL).',
      'Monthly consumption up to 200 units (100% free) or 201-400 units (50% subsidy).'
    ],
    requiredDocs: [
      'Delhi Electricity Bill CA Number',
      'Aadhaar Card linked with registered mobile number'
    ],
    onlineProcess: [
      'Give a missed call to 7011311111 from your registered mobile number.',
      'Click the WhatsApp opt-in link received via SMS.',
      'Enter CA Number -> Confirm details -> Subsidy activated for current billing cycle.',
      'Alternatively visit discom portal (bsesdelhi.com or tatapower-ddl.com) and opt-in under Subsidy tab.'
    ],
    offlineProcess: [
      'Fill physical subsidy opt-in form attached with electricity bill and drop at nearest discom bill collection counter.'
    ],
    fees: '100% Free Service (₹0)',
    processingTime: 'Instant / Next Billing Cycle',
    officialWebsiteName: 'Delhi Power Department & DISCOM Portals',
    officialGovUrl: 'https://delhi.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'What happens if monthly power consumption crosses 200 units in Delhi?', answer: 'For 201 to 400 units consumption, a 50% subsidy up to ₹800 is provided on total bill amount.' }
    ],
    commonMistakes: ['Forgetting to submit annual subsidy opt-in request'],
    importantNotes: ['Commercial connections are not eligible for domestic electricity subsidy.'],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['delhi-electric-vehicle-subsidy'],
    tags: ['Delhi Free Electricity', '200 Units Free Power', 'BSES Subsidy', 'Tata Power Subsidy', 'Delhi Power Bill'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'Domestic electricity connections only',
    ageCriteria: '18 years and above',
    helpline: '19122 (BSES) / 19124 (Tata Power)',
    importantDates: 'Annual Opt-In Cycle',
    schemeType: 'Subsidy',
    contentVerified: true,
    keywords: {
      primary: ['Delhi Free Electricity Scheme', 'Delhi 200 Units Free Power', 'BSES Power Subsidy Opt In'],
      secondary: ['Delhi Zero Power Bill', 'Tata Power Delhi Subsidy'],
      longTail: ['how to opt in for delhi electricity subsidy on whatsapp 7011311111', 'delhi electricity bill 200 units zero calculation'],
      questions: ['How to get free electricity in Delhi?', 'What is the WhatsApp number for Delhi electricity subsidy?']
    }
  },
  {
    id: 'pm-kisan-samman-nidhi-yojana',
    title: 'PM Kisan Samman Nidhi Yojana (पीएम किसान सम्मान निधि - ₹6000/वर्ष)',
    hindiTitle: 'पीएम किसान सम्मान निधि योजना - ₹6000 वार्षिक सहायता एवं e-KYC',
    category: 'Government Schemes',
    secondaryCategories: ['Farmer Scheme', 'Financial Assistance', 'Government Schemes', 'Online Apply'],
    state: 'national',
    department: 'Department of Agriculture & Farmers Welfare, Govt. of India',
    shortDesc: 'Central Sector Scheme providing ₹6,000 per year in three equal instalments of ₹2,000 directly into bank accounts of eligible landholding farmer families.',
    overview: 'PM-Kisan (pmkisan.gov.in) provides income support to all landholding farmer families across India to supplement their financial needs for agricultural inputs and domestic needs.',
    eligibility: [
      'All landholding farmers families having cultivable landholding in their names.',
      'Exclusions: Institutional landholders, former/present constitutional post holders, government employees, income tax payers.'
    ],
    requiredDocs: [
      'Aadhaar Card of Farmer',
      'Land Ownership Record (Khata/Khasra/ROR copy)',
      'Aadhaar-seeded Bank Account Passbook',
      'Mobile Number linked with Aadhaar for e-KYC'
    ],
    onlineProcess: [
      'Visit official PM-Kisan Portal (pmkisan.gov.in).',
      'Click "New Farmer Registration" -> Enter Aadhaar Number and Select State.',
      'Fill landholding details (Khasra/Khata Number) and personal details.',
      'Complete Aadhaar OTP e-KYC under "e-KYC" corner.',
      'Submit for state revenue department verification.'
    ],
    offlineProcess: [
      'Visit nearest CSC (Common Service Centre) or District Agriculture Officer / Revenue Patwari.'
    ],
    fees: '100% Free Government Portal Service (₹0)',
    processingTime: '15 to 30 Days post verification',
    officialWebsiteName: 'PM-Kisan Official Portal (Govt of India)',
    officialGovUrl: 'https://pmkisan.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Is e-KYC mandatory for PM Kisan instalments?', answer: 'Yes, mandatory e-KYC via OTP or Biometric at CSC is required to receive instalments.' }
    ],
    commonMistakes: ['Mismatched name spelling between Aadhaar and Land Ownership Record'],
    importantNotes: ['Check payment status under "Beneficiary Status" using Registration Number on pmkisan.gov.in.'],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['pm-surya-ghar-muft-bijli-scheme', 'e-shram-card-pension-scheme'],
    tags: ['PM Kisan', 'pmkisan.gov.in', 'Farmer Scheme', '₹2000 Instalment', 'e-KYC PM Kisan'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'Non-income tax paying landholding farmers',
    ageCriteria: '18 years and above',
    helpline: '155261 / 1800-115-526 (PM Kisan Helpline)',
    importantDates: '19th Instalment Active Disbursement',
    schemeType: 'Farmer Scheme',
    contentVerified: true,
    keywords: {
      primary: ['PM Kisan Samman Nidhi', 'pmkisan.gov.in', 'PM Kisan 19th Instalment', 'PM Kisan e-KYC'],
      secondary: ['PM Kisan Status Check', 'PM Kisan New Farmer Registration'],
      longTail: ['how to check pm kisan beneficiary status by mobile number', 'pm kisan e kyc online OTP procedure'],
      questions: ['How to check PM Kisan balance?', 'Who is eligible for PM Kisan scheme?']
    }
  },
  {
    id: 'pm-surya-ghar-muft-bijli-scheme',
    title: 'PM Surya Ghar Muft Bijli Yojana (पीएम सूर्य घर मुफ्त बिजली योजना - ₹78,000 Subsidy)',
    hindiTitle: 'पीएम सूर्य घर मुफ्त बिजली योजना - रूफटॉप सोलर पर ₹78,000 तक सब्सिडी',
    category: 'Government Schemes',
    secondaryCategories: ['Subsidy', 'Utilities', 'Government Schemes', 'Online Apply'],
    state: 'national',
    department: 'Ministry of New and Renewable Energy (MNRE), Govt. of India',
    shortDesc: 'Central scheme providing up to ₹78,000 subsidy for installing rooftop solar systems, providing up to 300 units of free electricity every month to 1 crore households.',
    overview: 'PM Surya Ghar Muft Bijli Yojana (pmsuryaghar.gov.in) enables residential households to install rooftop solar panels with direct bank subsidy (₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW+ systems) plus collateral-free low-interest bank loans.',
    eligibility: [
      'Indian citizens owning a residential house with suitable roof space.',
      'Valid electricity connection in applicant name.',
      'Roof structure capable of holding solar panel installation.'
    ],
    requiredDocs: [
      'Recent Electricity Bill',
      'Aadhaar Card & PAN Card',
      'Property Ownership Document / Roof Clearance',
      'Bank Account Passbook for subsidy DBT transfer'
    ],
    onlineProcess: [
      'Visit National Portal for Rooftop Solar (pmsuryaghar.gov.in).',
      'Register with State DISCOM (e.g. Delhi BSES/Tata Power), Consumer Account Number, and Mobile Number.',
      'Apply for Rooftop Solar -> Select approved empaneled vendor.',
      'Post installation by vendor, DISCOM inspects and installs Net Meter.',
      'Submit bank details on portal -> Subsidy credited directly into bank account within 30 days.'
    ],
    offlineProcess: ['Assisted online process available through empaneled solar vendors and DISCOM offices.'],
    fees: '₹0 Portal Application Fee (Solar installation charges minus government subsidy)',
    processingTime: '30 to 45 Days',
    officialWebsiteName: 'PM Surya Ghar Official Portal (MNRE)',
    officialGovUrl: 'https://pmsuryaghar.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'How much subsidy is provided under PM Surya Ghar scheme?', answer: '₹30,000 for 1kW system, ₹60,000 for 2kW system, and maximum ₹78,000 for 3kW or higher capacity solar systems.' }
    ],
    commonMistakes: ['Selecting non-empaneled vendors who are not authorized for government subsidy release'],
    importantNotes: ['Low interest collateral-free loans @ 7% available from nationalized banks.'],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['delhi-zero-power-bill-scheme', 'pm-kisan-samman-nidhi-yojana'],
    tags: ['PM Surya Ghar', 'Rooftop Solar Subsidy', 'pmsuryaghar.gov.in', 'Solar Panel Subsidy', '300 Units Free Electricity'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'Open to all Indian residential homeowners',
    ageCriteria: '18 years and above',
    helpline: '15555 (Rooftop Solar Helpline)',
    importantDates: 'Active National Rollout',
    schemeType: 'Subsidy',
    contentVerified: true,
    keywords: {
      primary: ['PM Surya Ghar Muft Bijli Yojana', 'pmsuryaghar.gov.in', 'Solar Rooftop Subsidy', '78000 Solar Subsidy'],
      secondary: ['PM Free Solar Scheme', 'Rooftop Solar Panel Online Apply'],
      longTail: ['how to apply pm surya ghar muft bijli yojana online step by step', 'pm surya ghar subsidy calculation for 3kw solar system'],
      questions: ['How to get subsidy on rooftop solar panels?', 'What is PM Surya Ghar scheme?']
    }
  },
  {
    id: 'ayushman-bharat-pmjay-card',
    title: 'Ayushman Bharat PM-JAY & Delhi Arogya Kosh (आयुष्मान भारत कार्ड - ₹5 लाख फ्री इलाज)',
    hindiTitle: 'आयुष्मान भारत कार्ड एवं दिल्ली आरोग्य कोष - ₹5 लाख तक का नि:शुल्क इलाज',
    category: 'Government Schemes',
    secondaryCategories: ['Healthcare Scheme', 'Welfare Programme', 'Government Schemes', 'Online Apply'],
    state: 'national',
    department: 'National Health Authority (NHA) & Dept. of Health, Govt. of NCT of Delhi',
    shortDesc: 'Provides ₹5,000,000 (₹5 Lakhs) per family per year cash-free health insurance cover for secondary and tertiary hospitalisation across empanelled public and private hospitals.',
    overview: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (beneficiary.nha.gov.in) and Delhi Arogya Kosh provide comprehensive health coverage for surgery, medical treatment, diagnostics, and medicines without any out-of-pocket expenditure.',
    eligibility: [
      'Families identified under SECC 2011 data, Ration Card holders, or Senior Citizens aged 70+ years (Ayushman Vaya Vandana Card).',
      'Delhi residents seeking specialized surgeries and diagnostic tests under Delhi Arogya Kosh.'
    ],
    requiredDocs: [
      'Aadhaar Card',
      'Ration Card / Family ID',
      'Active Mobile Number linked with Aadhaar for OTP verification'
    ],
    onlineProcess: [
      'Visit Ayushman Beneficiary Portal (beneficiary.nha.gov.in) or download Ayushman App.',
      'Enter Mobile Number and select "Beneficiary Login".',
      'Search by State (Delhi), Scheme (PMJAY), and Ration Card / Aadhaar Number.',
      'Complete instant e-KYC using Aadhaar OTP or Face Authentication.',
      'Download Ayushman Card (PVC/Digital PDF) immediately upon approval.'
    ],
    offlineProcess: ['Visit Ayushman Mitras at empanelled government/private hospital desks or CSC centres.'],
    fees: '100% Free Government Health Card (₹0 Fee)',
    processingTime: 'Instant upon e-KYC',
    officialWebsiteName: 'NHA Beneficiary Portal',
    officialGovUrl: 'https://beneficiary.nha.gov.in/',
    downloadForms: [],
    faqs: [
      { question: 'Are senior citizens aged 70+ eligible regardless of income?', answer: 'Yes! Under Ayushman Vaya Vandana scheme, all senior citizens aged 70 years and above receive a distinct ₹5 Lakh top-up health card regardless of family income.' }
    ],
    commonMistakes: ['Paying money to unauthorized agents (Ayushman Card creation is 100% free)'],
    importantNotes: ['Covers pre-hospitalization up to 3 days and post-hospitalization up to 15 days including medicines.'],
    lastUpdated: '2026-08-01',
    createdDate: '2026-08-01',
    relatedServiceIds: ['delhi-lakshmi-yojana', 'pm-kisan-samman-nidhi-yojana'],
    tags: ['Ayushman Bharat', 'PMJAY Card', 'beneficiary.nha.gov.in', '5 Lakh Health Insurance', 'Delhi Arogya Kosh', 'Ayushman 70 Plus'],
    isPopular: true,
    isNew: true,
    incomeCriteria: 'SECC families / Priority Ration Card / Senior Citizens 70+',
    ageCriteria: 'No age bar (Special 70+ card available)',
    helpline: '14555 / 1800-111-565',
    importantDates: 'Active National & Delhi Rollout',
    schemeType: 'Healthcare Scheme',
    contentVerified: true,
    keywords: {
      primary: ['Ayushman Bharat Card', 'beneficiary.nha.gov.in', 'PMJAY 5 Lakh Card', 'Ayushman Card Download'],
      secondary: ['Ayushman Vaya Vandana 70 Plus', 'Delhi Arogya Kosh Free Surgery'],
      longTail: ['how to apply ayushman card online by mobile number and aadhaar', 'ayushman bharat hospital list in delhi ncr'],
      questions: ['How to download Ayushman Bharat card online?', 'Is Ayushman card free for senior citizens?']
    }
  }
];





