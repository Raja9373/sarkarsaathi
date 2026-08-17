export interface YojanaItem {
  id: string;
  name: string;
  hindiName: string;
  state: string; // stateId or 'all'
  category: 'kisan' | 'mahila' | 'student' | 'business' | 'garib' | 'senior' | 'health';
  categoryLabel: string;
  subsidyAmount: string;
  subsidyHindi: string;
  department: string;
  eligibility: string[];
  documents: string[];
  applyLink: string;
  lastDate: string;
  overview: string;
  hindiOverview: string;
  featured?: boolean;
}

export const YOJANA_CATEGORIES = [
  { id: 'all', label: 'All Schemes', hindi: 'सभी योजनाएं' },
  { id: 'kisan', label: '🌾 Farmers (किसान)', hindi: 'किसान कल्याण' },
  { id: 'mahila', label: '👩 Women (महिला)', hindi: 'महिला सशक्तिकरण' },
  { id: 'student', label: '🎓 Students & Youth (युवा व छात्र)', hindi: 'छात्रवृत्ति व शिक्षा' },
  { id: 'business', label: '💼 MSME & Self-Employed (व्यापार)', hindi: 'ऋण व स्वरोजगार' },
  { id: 'garib', label: '🏠 Poor & Housing (गरीब व आवास)', hindi: 'आवास व राशन' },
  { id: 'health', label: '🏥 Health & Insurance (स्वास्थ्य)', hindi: 'मुफ्त उपचार' },
  { id: 'senior', label: '👴 Senior Citizens (बुजुर्ग)', hindi: 'पेंशन व सहायता' },
];

export const MASTER_YOJANA_LIST: YojanaItem[] = [
  // Central Schemes (Pan India)
  {
    id: 'pm-kisan-samman-nidhi',
    name: 'PM Kisan Samman Nidhi Yojana',
    hindiName: 'प्रधानमंत्री किसान सम्मान निधि योजना',
    state: 'all',
    category: 'kisan',
    categoryLabel: 'Farmers / किसान',
    subsidyAmount: '₹6,000 / Year (3 equal installments of ₹2,000)',
    subsidyHindi: '₹6,000 प्रति वर्ष (₹2,000 की 3 समान किस्तें)',
    department: 'Ministry of Agriculture & Farmers Welfare',
    eligibility: [
      'Small and marginal landholder farmer families',
      'Valid cultivable landholding in revenue records in applicant name',
      'Aadhaar-linked bank account with active e-KYC'
    ],
    documents: [
      'Aadhaar Card',
      'Landholding documents / Khatiyan / Khasra-Khatauni',
      'Bank passbook copy & IFSC',
      'Mobile number linked to Aadhaar'
    ],
    applyLink: 'https://pmkisan.gov.in',
    lastDate: 'Ongoing (Open 365 Days)',
    overview: 'Income support scheme providing direct bank transfer to all landholding farmer families across India.',
    hindiOverview: 'भारत के सभी भूमिधारक किसान परिवारों को वित्तीय सहायता प्रदान करने वाली केंद्रीय योजना।',
    featured: true
  },
  {
    id: 'pm-surya-ghar-muft-bijli',
    name: 'PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar)',
    hindiName: 'पीएम सूर्य घर: मुफ्त बिजली योजना (सोलर रूफटॉप)',
    state: 'all',
    category: 'garib',
    categoryLabel: 'Household / परिवार',
    subsidyAmount: 'Up to ₹78,000 Direct Subsidy + 300 Units Free Power/month',
    subsidyHindi: '₹78,000 तक सीधी सब्सिडी + 300 यूनिट तक फ्री बिजली',
    department: 'Ministry of New and Renewable Energy',
    eligibility: [
      'Residential household with valid electricity connection',
      'Adequate roof space for solar panel installation (at least 100 sq ft)',
      'Not availed previous central solar subsidy for same consumer number'
    ],
    documents: [
      'Electricity bill of recent 6 months',
      'Aadhaar Card of electricity consumer',
      'Bank Account passbook or cancelled cheque',
      'Roof ownership proof or NOC'
    ],
    applyLink: 'https://pmsuryaghar.gov.in',
    lastDate: 'Active Nationwide',
    overview: 'Free electricity scheme providing substantial capital subsidy for residential rooftop solar systems.',
    hindiOverview: 'घरेलू बिजली बिल शून्य करने और छत पर सोलर सिस्टम लगाने के लिए ₹78,000 तक की सरकारी सब्सिडी।',
    featured: true
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat PM-JAY & Vaya Vandana (Health Cover)',
    hindiName: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना एवं वय वंदना',
    state: 'all',
    category: 'health',
    categoryLabel: 'Health / स्वास्थ्य',
    subsidyAmount: '₹5 Lakh Free Cashless Hospital Treatment per Family / Year',
    subsidyHindi: '₹5,00,000 तक का मुफ्त कैशलेस इलाज प्रति वर्ष',
    department: 'National Health Authority (NHA)',
    eligibility: [
      'Identified low-income families as per SECC database',
      'Universal coverage for ALL Senior Citizens aged 70+ (Vaya Vandana Card)',
      'Valid Ration Card or Aadhaar identification'
    ],
    documents: [
      'Aadhaar Card',
      'Ration Card / NFSA database receipt',
      'Active mobile number for OTP'
    ],
    applyLink: 'https://beneficiary.nha.gov.in',
    lastDate: 'Active (Free Enrolment)',
    overview: 'World largest government-funded healthcare assurance scheme covering 27,000+ empanelled hospitals.',
    hindiOverview: 'सरकारी और निजी सूचीबद्ध अस्पतालों में ₹5 लाख तक का पूर्णतः मुफ्त इलाज और ऑपरेशन।',
    featured: true
  },
  {
    id: 'pm-vishwakarma-yojana',
    name: 'PM Vishwakarma Kaushal Samman Yojana',
    hindiName: 'पीएम विश्वकर्मा कौशल सम्मान योजना',
    state: 'all',
    category: 'business',
    categoryLabel: 'Artisans & Craftsmen',
    subsidyAmount: '₹15,000 Toolkit Grant + Up to ₹3 Lakh Collateral-Free Loan at 5%',
    subsidyHindi: '₹15,000 टूलकिट अनुदान + ₹3,00,000 तक का सस्ता ऋण (5% ब्याज)',
    department: 'Ministry of MSME',
    eligibility: [
      'Traditional artisans & craftsmen (Carpenters, Blacksmiths, Tailors, Masons, Barbers, etc.)',
      'Minimum age 18 years',
      'Not availed PMEGP or Mudra loans in previous 5 years'
    ],
    documents: [
      'Aadhaar Card',
      'Bank Account details',
      'Trade skill declaration certificate',
      'Ration card'
    ],
    applyLink: 'https://pmvishwakarma.gov.in',
    lastDate: 'Active (Apply at CSC)',
    overview: 'Comprehensive support scheme for traditional craftsmen providing training stipend, toolkit voucher, and low-interest credit.',
    hindiOverview: 'पारंपरिक 18 शिल्पकलाओं और कारीगरों को आधुनिक टूलकिट और आसान व्यवसाय ऋण उपलब्ध कराने की योजना।',
    featured: true
  },
  {
    id: 'pm-svanidhi-street-vendor',
    name: 'PM SVANidhi Micro-Credit Scheme for Street Vendors',
    hindiName: 'पीएम स्वनिधि रेहड़ी-पटरी विक्रेता आत्मनिर्भर निधि',
    state: 'all',
    category: 'business',
    categoryLabel: 'Self-Employed / स्ट्रीट वेंडर',
    subsidyAmount: 'Collateral-Free Working Capital Loan ₹10,000 → ₹20,000 → ₹50,000 with 7% Interest Subsidy',
    subsidyHindi: 'बिना गारंटी ₹10,000 से ₹50,000 तक का कार्यशील पूंजी ऋण + 7% ब्याज सब्सिडी',
    department: 'Ministry of Housing and Urban Affairs',
    eligibility: [
      'Street vendors vending in urban areas',
      'Possession of Certificate of Vending or Urban Local Body survey ID',
      'Active mobile phone linked with bank account'
    ],
    documents: [
      'Aadhaar Card',
      'Voter ID or municipal vending proof',
      'Bank account passbook'
    ],
    applyLink: 'https://pmsvanidhi.mohua.gov.in',
    lastDate: 'Active',
    overview: 'Affordable working capital credit to street vendors to resume or scale their urban livelihood.',
    hindiOverview: 'शहरी रेहड़ी-पटरी व खोमचे वालों को बिना किसी गारंटी के बैंक से पूंजी ऋण और डिजिटल कैशबैक।',
    featured: true
  },
  {
    id: 'pm-awas-yojana-urban-gramin',
    name: 'Pradhan Mantri Awas Yojana (PMAY Urban & Gramin)',
    hindiName: 'प्रधानमंत्री आवास योजना (शहरी एवं ग्रामीण)',
    state: 'all',
    category: 'garib',
    categoryLabel: 'Housing / आवास',
    subsidyAmount: 'Direct Financial Assistance ₹1.2 Lakh to ₹2.67 Lakh for Pucca House',
    subsidyHindi: 'पक्का मकान बनाने हेतु ₹1.2 लाख से ₹2.67 लाख तक की सीधी सरकारी सहायता',
    department: 'Ministry of Housing and Urban Affairs / MoRD',
    eligibility: [
      'Families without pucca house anywhere in India',
      'EWS / LIG / MIG income category or rural SECC census listing',
      'Female family member as sole or co-owner'
    ],
    documents: [
      'Aadhaar Card of all family members',
      'Income certificate',
      'Bank account details',
      'Land revenue document or affidavit of no pucca house'
    ],
    applyLink: 'https://pmaymis.gov.in',
    lastDate: 'Active (PMAY 2.0)',
    overview: 'Housing for all flagship mission assisting urban and rural poor to build durable pucca houses.',
    hindiOverview: 'बेघर और कच्चे मकान में रहने वाले परिवारों को पक्का मकान निर्माण हेतु सीधी वित्तीय सहायता।',
    featured: true
  },
  {
    id: 'sukanya-samriddhi-yojana',
    name: 'Sukanya Samriddhi Yojana (SSY Girl Child Investment)',
    hindiName: 'सुकन्या समृद्धि योजना (बालिका समृद्धि खाता)',
    state: 'all',
    category: 'mahila',
    categoryLabel: 'Girl Child / बेटियां',
    subsidyAmount: 'High Interest 8.2% p.a. + Triple Tax Exemption (EEE) under 80C',
    subsidyHindi: '8.2% उच्चतम सरकारी ब्याज दर + 100% टैक्स फ्री रिटर्न',
    department: 'Department of Posts / Ministry of Finance',
    eligibility: [
      'Girl child aged below 10 years at time of account opening',
      'Parent or legal guardian of the girl',
      'Maximum 2 accounts per family (3 in case of twins/triplets)'
    ],
    documents: [
      'Girl child birth certificate',
      'Identity & address proof of guardian (Aadhaar/PAN)',
      'Photographs of child and guardian'
    ],
    applyLink: 'https://www.indiapost.gov.in',
    lastDate: 'Anytime at Post Office or Bank',
    overview: 'Government small deposit savings scheme targeted at parents of girl children for higher education and marriage fund.',
    hindiOverview: 'बेटियों की उच्च शिक्षा और विवाह के लिए डाकघर या बैंक में 8.2% ब्याज दर वाला सुरक्षित सरकारी खाता।',
    featured: true
  },

  // Punjab Schemes
  {
    id: 'punjab-kisan-crop-diversification',
    name: 'Punjab Crop Diversification & DSR Incentive Scheme',
    hindiName: 'पंजाब फसल विविधीकरण एवं धान सीधी बुवाई प्रोत्साहन योजना',
    state: 'punjab',
    category: 'kisan',
    categoryLabel: 'Farmers / किसान',
    subsidyAmount: '₹7,000 per Acre for DSR Paddy & Alternative Crops',
    subsidyHindi: '₹7,000 प्रति एकड़ सीधी प्रोत्साहन राशि',
    department: 'Department of Agriculture & Farmers Welfare, Punjab',
    eligibility: ['Farmers cultivating in Punjab with registered land in Anaaj Kharid portal'],
    documents: ['Aadhaar Card', 'Jamabandi/Fard land record', 'Bank passbook', 'Mobile number'],
    applyLink: 'https://agri.punjab.gov.in',
    lastDate: 'Kharif Season Window',
    overview: 'Incentive transfer to promote underground water conservation and alternative crops.',
    hindiOverview: 'पंजाब में भूजल संरक्षण और फसल विविधीकरण अपनाने वाले किसानों को प्रति एकड़ वित्तीय सहायता।',
    featured: true
  },
  {
    id: 'punjab-aam-aadmi-clinic',
    name: 'Punjab Aam Aadmi Clinic Free Diagnostics & Medicine',
    hindiName: 'पंजाब आम आदमी क्लिनिक मुफ्त जांच एवं दवा योजना',
    state: 'punjab',
    category: 'health',
    categoryLabel: 'Health / स्वास्थ्य',
    subsidyAmount: '100% Free Consultation + 80+ Clinical Lab Tests + 100+ Essential Medicines',
    subsidyHindi: '100% मुफ्त डॉक्टर परामर्श, 80+ लैब टेस्ट व 100+ दवाएं',
    department: 'Health & Family Welfare Dept, Punjab',
    eligibility: ['All residents of Punjab visiting nearest Aam Aadmi Clinic'],
    documents: ['Aadhaar or Punjab residence proof'],
    applyLink: 'https://health.punjab.gov.in',
    lastDate: 'Walk-in (Open 6 Days a week)',
    overview: 'Neighborhood primary healthcare clinics offering paperless OPD, diagnostic testing, and medicines.',
    hindiOverview: 'पंजाब के नागरिकों को मोहल्ले में मुफ्त डॉक्टर परामर्श, 80 से अधिक टेस्ट और दवाएं।',
    featured: true
  },
  {
    id: 'punjab-ashirwad-scheme',
    name: 'Punjab Ashirwad Scheme (Shagun for Girl Marriage)',
    hindiName: 'पंजाब आशीर्वाद योजना (शगुन योजना)',
    state: 'punjab',
    category: 'mahila',
    categoryLabel: 'Women & SC/BC / बेटियां',
    subsidyAmount: '₹51,000 Direct Cash Grant for Daughter Marriage',
    subsidyHindi: '₹51,000 सीधी आर्थिक सहायता बेटी के विवाह पर',
    department: 'Social Justice, Empowerment & Minorities, Punjab',
    eligibility: ['SC, BC, EWS families with annual family income under ₹32,790, resident of Punjab'],
    documents: ['Aadhaar Card', 'Caste/Income Certificate', 'Age proof of bride (18+)', 'Bank details'],
    applyLink: 'https://punjab.gov.in',
    lastDate: 'Apply up to 30 days post-marriage',
    overview: 'One-time marriage grant to daughters of underprivileged families in Punjab.',
    hindiOverview: 'पंजाब की जरूरतमंद बेटियों के विवाह पर ₹51,000 की सीधी शगुन राशि बैंक खाते में।',
    featured: true
  },

  // Maharashtra Schemes
  {
    id: 'mh-majhi-ladki-bahin',
    name: 'Maharashtra Mukhyamantri Majhi Ladki Bahin Yojana',
    hindiName: 'महाराष्ट्र मुख्यमंत्री माझी लाडकी बहीण योजना',
    state: 'maharashtra',
    category: 'mahila',
    categoryLabel: 'Women / महिला',
    subsidyAmount: '₹1,500 Monthly Direct Cash Transfer (₹18,000 / Year)',
    subsidyHindi: '₹1,500 प्रति माह (₹18,000 सालाना) सीधे बैंक खाते में',
    department: 'Women and Child Development Department, Maharashtra',
    eligibility: ['Women aged 21 to 65 years resident of Maharashtra with family income under ₹2.5 Lakh'],
    documents: ['Aadhaar Card', 'Ration Card (Yellow/Orange)', 'Bank Passbook with Aadhaar link', 'Domicile certificate or Election Card'],
    applyLink: 'https://ladakibahin.maharashtra.gov.in',
    lastDate: 'Active Nationwide at Aaple Sarkar Setu',
    overview: 'Financial independence direct benefit scheme for underprivileged women in Maharashtra.',
    hindiOverview: 'महाराष्ट्र की 21 से 65 वर्ष की महिलाओं को प्रतिमाह ₹1,500 की सीधी आर्थिक सहायता।',
    featured: true
  },
  {
    id: 'mh-namo-shetkari-mahasamman',
    name: 'Maharashtra Namo Shetkari Maha Samman Nidhi',
    hindiName: 'महाराष्ट्र नमो शेतकरी महासन्मान निधी योजना',
    state: 'maharashtra',
    category: 'kisan',
    categoryLabel: 'Farmers / किसान',
    subsidyAmount: '₹6,000 / Year State Top-up (Total ₹12,000 with PM-Kisan)',
    subsidyHindi: '₹6,000 प्रति वर्ष राज्य टॉप-अप (PM किसान मिलाकर ₹12,000 सालाना)',
    department: 'Department of Agriculture, Maharashtra',
    eligibility: ['All beneficiaries active under PM-Kisan in Maharashtra with e-KYC'],
    documents: ['PM-Kisan Registration ID', '7/12 Land Extract', 'Aadhaar Card'],
    applyLink: 'https://krishi.maharashtra.gov.in',
    lastDate: 'Auto-credited with PM-Kisan',
    overview: 'State financial top-up matching the central PM-Kisan grant for farmers.',
    hindiOverview: 'महाराष्ट्र के किसानों को केंद्र की पीएम किसान के अलावा राज्य सरकार से ₹6,000 अतिरिक्त।',
    featured: true
  },
  {
    id: 'mh-mahadbt-scholarship',
    name: 'MahaDBT Post-Matric & Higher Education Scholarships',
    hindiName: 'महाडीबीटी पोस्ट-मैट्रिक एवं उच्च शिक्षा छात्रवृत्ति',
    state: 'maharashtra',
    category: 'student',
    categoryLabel: 'Students / छात्र',
    subsidyAmount: '100% Tuition Fee Waiver + Hostel Maintenance Allowance',
    subsidyHindi: '100% शिक्षण शुल्क प्रतिपूर्ति + छात्रावास भत्ता',
    department: 'Higher & Technical Education / Social Justice Dept, Maharashtra',
    eligibility: ['SC, ST, VJNT, OBC, SEBC, EBC students enrolled in recognized Maharashtra colleges'],
    documents: ['HSC/SSC Marksheets', 'Caste & Non-Creamy Layer Certificate', 'Income Certificate', 'Fee Receipt'],
    applyLink: 'https://mahadbt.maharashtra.gov.in',
    lastDate: 'Academic Session Cycle',
    overview: 'Centralized direct benefit transfer portal for all academic fee waivers and stipends in Maharashtra.',
    hindiOverview: 'महाराष्ट्र के कॉलेज विद्यार्थियों के लिए शिक्षण शुल्क छूट और भत्ते की एकीकृत योजना।',
    featured: true
  },

  // Uttar Pradesh Schemes
  {
    id: 'up-kanya-sumangala-yojana',
    name: 'UP Mukhyamantri Kanya Sumangala Yojana',
    hindiName: 'उत्तर प्रदेश मुख्यमंत्री कन्या सुमंगला योजना',
    state: 'uttar-pradesh',
    category: 'mahila',
    categoryLabel: 'Girl Child / बेटियां',
    subsidyAmount: '₹25,000 in 6 Milestone Stages from Birth to College',
    subsidyHindi: '₹25,000 की कुल सहायता जन्म से लेकर स्नातक तक 6 चरणों में',
    department: 'Women and Child Development, Uttar Pradesh',
    eligibility: ['Permanent resident of UP, maximum 2 daughters per family, annual income up to ₹3 Lakh'],
    documents: ['Birth certificate', 'Vaccination card', 'School admission certificate', 'Income & Domicile proof'],
    applyLink: 'https://mksy.up.gov.in',
    lastDate: 'Active Online',
    overview: 'Milestone-based financial grant to support girl child education and health in Uttar Pradesh.',
    hindiOverview: 'उत्तर प्रदेश की बालिकाओं के जन्म, टीकाकरण, स्कूल दाखिले व कॉलेज में ₹25,000 की कुल सहायता।',
    featured: true
  },
  {
    id: 'up-abhyudaya-coaching',
    name: 'UP Mukhyamantri Abhyudaya Free Coaching Scheme',
    hindiName: 'उत्तर प्रदेश मुख्यमंत्री अभ्युदय निःशुल्क कोचिंग योजना',
    state: 'uttar-pradesh',
    category: 'student',
    categoryLabel: 'Youth / प्रतियोगी छात्र',
    subsidyAmount: '100% Free Coaching for UPSC, UPPSC, JEE, NEET, NDA, CDS + Free Tablet',
    subsidyHindi: 'UPSC, UPPSC, JEE, NEET की मुफ्त कोचिंग + फ्री टैबलेट वितरण',
    department: 'Social Welfare Department, Uttar Pradesh',
    eligibility: ['Aspirants residing in Uttar Pradesh preparing for competitive exams'],
    documents: ['Aadhaar Card', 'Educational Marksheets', 'Entrance Exam Admit Card'],
    applyLink: 'http://abhyuday.up.gov.in',
    lastDate: 'Annual Entrance Test Cycle',
    overview: 'Free classroom coaching and digital study materials provided by IAS/IPS and subject experts.',
    hindiOverview: 'आईएएस, पीसीएस, जेईई, नीट की तैयारी के लिए उत्तर प्रदेश सरकार की मुफ्त कोचिंग योजना।',
    featured: true
  },
  {
    id: 'up-vridha-pension',
    name: 'UP Old Age Pension (SSP Vridha Pension Scheme)',
    hindiName: 'उत्तर प्रदेश वृद्धावस्था पेंशन योजना',
    state: 'uttar-pradesh',
    category: 'senior',
    categoryLabel: 'Seniors / बुजुर्ग',
    subsidyAmount: '₹1,000 per Month (₹12,000 / Year)',
    subsidyHindi: '₹1,000 प्रति माह सीधे पेंशनर के बैंक खाते में',
    department: 'Social Welfare Department, Uttar Pradesh',
    eligibility: ['Age 60 years or above, resident of UP, income under ₹46,080 (rural) or ₹56,460 (urban)'],
    documents: ['Age proof / Aadhaar Card', 'Income Certificate', 'Bank Passbook with Aadhaar link'],
    applyLink: 'https://sspy-up.gov.in',
    lastDate: 'Active (Apply via CSC or Online)',
    overview: 'Monthly social security allowance for senior citizens living below poverty line in UP.',
    hindiOverview: 'उत्तर प्रदेश के 60 वर्ष से अधिक उम्र के बुजुर्गों को ₹1,000 मासिक सम्मान पेंशन।',
    featured: true
  },

  // Bihar Schemes
  {
    id: 'bihar-student-credit-card',
    name: 'Bihar Student Credit Card (MNSSBY Higher Education Loan)',
    hindiName: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना',
    state: 'bihar',
    category: 'student',
    categoryLabel: 'Students / छात्र',
    subsidyAmount: 'Up to ₹4 Lakh Collateral-Free Loan at 0% for Girls & 1% for Boys',
    subsidyHindi: 'उच्च शिक्षा हेतु ₹4,00,000 तक का ऋण (लड़कियों के लिए 0% व लड़कों के लिए 1% ब्याज)',
    department: 'Education Department, Bihar',
    eligibility: ['12th pass students resident of Bihar pursuing higher technical/general education'],
    documents: ['10th & 12th Marksheets', 'College Admission Proof & Fee Structure', 'Aadhaar & Residential Certificate'],
    applyLink: 'https://www.7nischay-yuvaupmission.bihar.gov.in',
    lastDate: 'Open for Academic Year',
    overview: 'State-guaranteed zero or low-interest education loan under Saat Nischay mission.',
    hindiOverview: 'बिहार के विद्यार्थियों को बी.टेक, एमबीबीएस, बीएड व उच्च शिक्षा हेतु ₹4 लाख तक का आसान ऋण।',
    featured: true
  },
  {
    id: 'bihar-mukhyamantri-udyamiyojana',
    name: 'Bihar Mukhyamantri Udyami Yojana (Youth & Women)',
    hindiName: 'बिहार मुख्यमंत्री उद्यमी योजना (युवा, महिला, एससी/एसटी/ईबीसी)',
    state: 'bihar',
    category: 'business',
    categoryLabel: 'Entrepreneurs / रोजगार',
    subsidyAmount: '₹10 Lakh Project Grant: ₹5 Lakh Direct Subsidy + ₹5 Lakh Interest-Free Loan',
    subsidyHindi: '₹10 लाख की सहायता: ₹5 लाख अनुदान (माफ) + ₹5 लाख ब्याज मुक्त ऋण',
    department: 'Industries Department, Bihar',
    eligibility: ['10+2 / ITI / Polytechnic / Graduate passed residents of Bihar aged 18 to 50 years'],
    documents: ['Aadhaar Card', 'Educational qualification certificate', 'Caste certificate', 'Bank current account & cancelled cheque', 'PAN Card'],
    applyLink: 'https://udyami.bihar.gov.in',
    lastDate: 'Annual Application Window',
    overview: 'Flagship enterprise creation initiative offering 50% capital subsidy and 50% soft loan to start manufacturing/service units.',
    hindiOverview: 'बिहार में अपना उद्योग या व्यवसाय शुरू करने के लिए ₹10 लाख की सहायता जिसमें ₹5 लाख पूर्णतः अनुदान।',
    featured: true
  },

  // Tamil Nadu Schemes
  {
    id: 'tn-kalaignar-magalir-urimai',
    name: 'Tamil Nadu Kalaignar Magalir Urimai Thittam (KMUT)',
    hindiName: 'तमिलनाडु कलैग्नार मगलीर उरीमई थिट्टम (महिला अधिकार योजना)',
    state: 'tamil-nadu',
    category: 'mahila',
    categoryLabel: 'Women / महिला',
    subsidyAmount: '₹1,000 Monthly Basic Income Grant (₹12,000 / Year)',
    subsidyHindi: '₹1,000 प्रति माह सीधे परिवार की महिला मुखिया के खाते में',
    department: 'Special Programme Implementation Dept, Tamil Nadu',
    eligibility: ['Women head of family in Tamil Nadu, annual income under ₹2.5 Lakh, landholding under limits'],
    documents: ['Smart Ration Card', 'Aadhaar Card', 'Electricity Consumer Number', 'Bank details'],
    applyLink: 'https://kmut.tn.gov.in',
    lastDate: 'Active at e-Sevai Centres',
    overview: 'Universal women basic income grant acknowledging unrecognized domestic labor in Tamil Nadu.',
    hindiOverview: 'तमिलनाडु की 1.15 करोड़ से अधिक महिलाओं को प्रति माह ₹1,000 की सीधी सहायता राशि।',
    featured: true
  },
  {
    id: 'tn-pudhumai-penn',
    name: 'Tamil Nadu Moovalur Ramamirtham Ammaiyar Pudhumai Penn Thittam',
    hindiName: 'तमिलनाडु पुधुमई पेन उच्च शिक्षा प्रोत्साहन योजना',
    state: 'tamil-nadu',
    category: 'student',
    categoryLabel: 'Girl Students / छात्राएं',
    subsidyAmount: '₹1,000 per Month Direct Stipend till College Completion',
    subsidyHindi: '₹1,000 प्रति माह कॉलेज की पढ़ाई पूरी होने तक',
    department: 'Social Welfare and Women Empowerment, Tamil Nadu',
    eligibility: ['Girl students who studied from Class 6 to 12 in Tamil Nadu Government schools pursuing higher education'],
    documents: ['EMIS school certificate', 'College ID card', 'Aadhaar & Bank details'],
    applyLink: 'https://www.pudhumaipenn.tn.gov.in',
    lastDate: 'Academic Term Cycle',
    overview: 'Higher education incentive for female students from government schools across Tamil Nadu.',
    hindiOverview: 'सरकारी स्कूलों में पढ़ी छात्राओं को कॉलेज में डिग्री या डिप्लोमा के दौरान प्रति माह ₹1,000।',
    featured: true
  },

  // Karnataka Schemes
  {
    id: 'ka-gruha-lakshmi',
    name: 'Karnataka Gruha Lakshmi Direct Financial Support',
    hindiName: 'कर्नाटक गृह लक्ष्मी योजना (महिला मुखिया सहायता)',
    state: 'karnataka',
    category: 'mahila',
    categoryLabel: 'Women / महिला',
    subsidyAmount: '₹2,000 Monthly Financial Assistance (₹24,000 / Year)',
    subsidyHindi: '₹2,000 प्रति माह (₹24,000 सालाना) महिला मुखिया को',
    department: 'Women and Child Development, Karnataka',
    eligibility: ['Female head of household as specified in BPL, APL, or Antyodaya cards in Karnataka'],
    documents: ['Ration Card', 'Aadhaar Card of wife and husband', 'Bank passbook linked to NPCI'],
    applyLink: 'https://sevasindhu.karnataka.gov.in',
    lastDate: 'Active at Grama One / Karnataka One',
    overview: 'Monthly livelihood cash assistance to the female breadwinner of each family in Karnataka.',
    hindiOverview: 'कर्नाटक की महिला मुखियाओं के बैंक खाते में सीधे प्रति माह ₹2,000 की गारंटी सहायता।',
    featured: true
  },
  {
    id: 'ka-yuva-nidhi',
    name: 'Karnataka Yuva Nidhi Unemployment Allowance for Graduates',
    hindiName: 'कर्नाटक युवा निधि बेरोजगारी भत्ता योजना',
    state: 'karnataka',
    category: 'student',
    categoryLabel: 'Youth / स्नातक युवा',
    subsidyAmount: '₹3,000/month for Degree Graduates & ₹1,500/month for Diploma Holders',
    subsidyHindi: 'डिग्री धारकों को ₹3,000/माह एवं डिप्लोमा धारकों को ₹1,500/माह',
    department: 'Skill Development, Entrepreneurship and Livelihood, Karnataka',
    eligibility: ['Karnataka graduates/diploma holders who passed recently and remain unemployed for 6 months'],
    documents: ['Degree/Diploma Certificate', 'Aadhaar Card', 'Domicile certificate', 'Bank details'],
    applyLink: 'https://sevasindhugs.karnataka.gov.in',
    lastDate: 'Active Online',
    overview: 'Direct financial cushion for educated youth seeking jobs and skill training in Karnataka.',
    hindiOverview: 'कर्नाटक के स्नातक और डिप्लोमा पास बेरोजगार युवाओं को 2 साल तक मासिक भत्ता।',
    featured: true
  },

  // West Bengal Schemes
  {
    id: 'wb-lakshmir-bhandar',
    name: 'West Bengal Lakshmir Bhandar Basic Income Scheme',
    hindiName: 'पश्चिम बंगाल लखीर भंडार महिला आर्थिक सहायता योजना',
    state: 'west-bengal',
    category: 'mahila',
    categoryLabel: 'Women / महिला',
    subsidyAmount: '₹1,200/month for SC/ST & ₹1,000/month for General Categories',
    subsidyHindi: 'SC/ST महिलाओं को ₹1,200/माह एवं सामान्य वर्ग को ₹1,000/माह',
    department: 'Women & Child Development and Social Welfare, West Bengal',
    eligibility: ['Women aged 25-60 years resident of West Bengal who are not permanent government employees'],
    documents: ['Swasthya Sathi Card', 'Aadhaar Card', 'SC/ST Certificate (if applicable)', 'Bank passbook'],
    applyLink: 'https://wb.gov.in',
    lastDate: 'Duare Sarkar Camps & BDO Offices',
    overview: 'Universal basic income support to empower women across rural and urban Bengal.',
    hindiOverview: 'पश्चिम बंगाल की महिलाओं को स्वास्थ्य साथी कार्ड के आधार पर मासिक आर्थिक सहायता।',
    featured: true
  },
  {
    id: 'wb-kanyashree-prakalpa',
    name: 'West Bengal Kanyashree Prakalpa (K1, K2 & K3 Grants)',
    hindiName: 'पश्चिम बंगाल कन्याश्री प्रकल्प योजना',
    state: 'west-bengal',
    category: 'student',
    categoryLabel: 'Girl Students / कन्याश्री',
    subsidyAmount: 'Annual Scholarship ₹1,000 + One-Time Grant of ₹25,000 at age 18',
    subsidyHindi: 'वार्षिक ₹1,000 छात्रवृत्ति + 18 वर्ष की आयु पर ₹25,000 का एकमुश्त अनुदान',
    department: 'Department of Women & Child Development, West Bengal',
    eligibility: ['Unmarried girls aged 13-18 enrolled in schools and colleges in West Bengal'],
    documents: ['School enrollment certificate', 'Birth certificate', 'Unmarried declaration', 'Bank passbook'],
    applyLink: 'https://www.wbkanyashree.gov.in',
    lastDate: 'School Enrolment Cycle',
    overview: 'Global UN award-winning conditional cash transfer to retain girls in education and prevent early marriage.',
    hindiOverview: 'पश्चिम बंगाल की छात्राओं को पढ़ाई जारी रखने और 18 वर्ष पर ₹25,000 का एकमुश्त सरकारी अनुदान।',
    featured: true
  },

  // Gujarat Schemes
  {
    id: 'gu-mukhyamantri-kisan-sahay',
    name: 'Gujarat Mukhyamantri Kisan Sahay Yojana (Zero Premium Crop Insurance)',
    hindiName: 'गुजरात मुख्यमंत्री किसान सहाय योजना',
    state: 'gujarat',
    category: 'kisan',
    categoryLabel: 'Farmers / किसान',
    subsidyAmount: 'Up to ₹25,000 per Hectare for Crop Loss (Drought, Flood, Unseasonal Rain)',
    subsidyHindi: 'फसल नुकसान पर ₹25,000 प्रति हेक्टेयर तक सीधी सहायता (शून्य प्रीमियम)',
    department: 'Agriculture, Farmers Welfare & Co-operation Dept, Gujarat',
    eligibility: ['All 8-A landholder farmers and forest right holders in Gujarat with 33%+ crop damage'],
    documents: ['7/12, 8-A Revenue Records', 'Aadhaar Card', 'Bank Passbook'],
    applyLink: 'https://ikhedut.gujarat.gov.in',
    lastDate: 'Active on i-Khedut Portal',
    overview: '100% state-funded zero-premium disaster crop compensation for Gujarat agriculturists.',
    hindiOverview: 'गुजरात के किसानों को बिना कोई बीमा प्रीमियम भरे प्राकृतिक आपदा में फसल का मुआवजा।',
    featured: true
  },
  {
    id: 'gu-vahli-dikri-yojana',
    name: 'Gujarat Vahli Dikri Yojana (Dear Daughter Grant)',
    hindiName: 'गुजरात व्हली दीकरी योजना',
    state: 'gujarat',
    category: 'mahila',
    categoryLabel: 'Girl Child / दीकरी',
    subsidyAmount: 'Total ₹1.1 Lakh Grant (₹4,000 in 1st Std + ₹6,000 in 9th + ₹1 Lakh at age 18)',
    subsidyHindi: 'कुल ₹1,10,000 की सहायता (कक्षा 1, 9 व 18 वर्ष की आयु पर)',
    department: 'Women and Child Development, Gujarat',
    eligibility: ['First two daughters of family born on or after Aug 2, 2019 with annual family income up to ₹2 Lakh'],
    documents: ['Birth certificate', 'Income certificate', 'Parents Aadhaar & Domicile proof'],
    applyLink: 'https://wcd.gujarat.gov.in',
    lastDate: 'Apply within 1 year of child birth',
    overview: 'Financial assistance and educational incentive to improve child sex ratio and promote girl education in Gujarat.',
    hindiOverview: 'गुजरात में बेटियों के जन्म पर तीन चरणों में ₹1,10,000 की कुल सरकारी आर्थिक सहायता।',
    featured: true
  },

  // Delhi Schemes
  {
    id: 'dl-zero-electricity-subsidy',
    name: 'Delhi 200 Units Free Electricity & 50% Subsidy Scheme',
    hindiName: 'दिल्ली 200 यूनिट मुफ्त बिजली एवं 50% सब्सिडी योजना',
    state: 'delhi',
    category: 'garib',
    categoryLabel: 'Power / बिजली बिल',
    subsidyAmount: '100% Free up to 200 Units + ₹800 Subsidy for 201-400 Units',
    subsidyHindi: '200 यूनिट तक 100% फ्री बिजली बिल + 201-400 यूनिट पर 50% छूट',
    department: 'Power Department, GNCTD',
    eligibility: ['All domestic electricity consumers of BSES Rajdhani, BSES Yamuna, and TPDDL in Delhi'],
    documents: ['CA Number / Electricity Bill', 'Registered mobile number'],
    applyLink: 'https://delhi.gov.in',
    lastDate: 'Active Online / Opt-in via 7690011111',
    overview: 'Direct tariff subsidy providing zero power bills to over 40 lakh households in Delhi NCR.',
    hindiOverview: 'दिल्ली के घरेलू उपभोक्ताओं के लिए 200 यूनिट तक पूर्णतः फ्री बिजली और 400 यूनिट तक 50% छूट।',
    featured: true
  },
  {
    id: 'dl-pink-pass-free-bus',
    name: 'Delhi DTC Pink Ticket Free Bus Travel for Women',
    hindiName: 'दिल्ली डीटीसी पिंक टिकट महिलाओं के लिए मुफ्त बस यात्रा',
    state: 'delhi',
    category: 'mahila',
    categoryLabel: 'Transport / यात्रा',
    subsidyAmount: '100% Free Travel in all DTC & Cluster AC/Non-AC Buses',
    subsidyHindi: 'दिल्ली की सभी डीटीसी व क्लस्टर बसों में 100% मुफ्त यात्रा',
    department: 'Transport Department, GNCTD',
    eligibility: ['All female commuters traveling within Delhi NCR on DTC & Cluster public buses'],
    documents: ['No documents required - Collect free Pink Ticket from conductor onboard'],
    applyLink: 'https://transport.delhi.gov.in',
    lastDate: 'Permanent Daily Service',
    overview: 'Universal fare-free bus transportation scheme boosting women mobility and safety in Delhi.',
    hindiOverview: 'दिल्ली की सभी सरकारी और क्लस्टर बसों में महिलाओं के लिए निशुल्क पिंक टिकट यात्रा।',
    featured: true
  },
  {
    id: 'dl-mukhyamantri-tirth-yatra',
    name: 'Delhi Mukhyamantri Tirth Yatra Yojana for Senior Citizens',
    hindiName: 'दिल्ली मुख्यमंत्री तीर्थ यात्रा योजना',
    state: 'delhi',
    category: 'senior',
    categoryLabel: 'Seniors / बुजुर्ग',
    subsidyAmount: '100% Free AC Train Travel, Food, AC Hotel & Sightseeing to 15+ Pilgrimages',
    subsidyHindi: '100% मुफ्त वातानुकूलित रेल यात्रा, होटल, भोजन व दर्शन (रामेश्वरम, द्वारका, अयोध्या आदि)',
    department: 'Tirth Yatra Vikas Samiti, GNCTD',
    eligibility: ['Delhi residents aged 60 years or above (one attendant allowed for 70+)'],
    documents: ['Voter ID Card of Delhi', 'Medical fitness certificate', 'Aadhaar Card'],
    applyLink: 'https://edistrict.delhigovt.nic.in',
    lastDate: 'Continuous Batches via e-District',
    overview: 'Full expense state-sponsored pilgrimage tour for elderly residents of the national capital.',
    hindiOverview: 'दिल्ली के 60 वर्ष से अधिक आयु के वरिष्ठ नागरिकों के लिए सम्पूर्ण निःशुल्क तीर्थ यात्रा।',
    featured: true
  }
];

export function getYojanasByState(stateId: string, categoryFilter: string = 'all'): YojanaItem[] {
  const normState = stateId ? stateId.toLowerCase().trim() : 'all';

  const list = MASTER_YOJANA_LIST.filter(item => {
    // Check state match: include universal central schemes (state === 'all') + exact state schemes
    const matchesState = (
      normState === 'all' || 
      normState === 'national' || 
      item.state === 'all' || 
      item.state.toLowerCase() === normState ||
      (normState === 'up' && item.state === 'uttar-pradesh') ||
      (normState === 'mh' && item.state === 'maharashtra') ||
      (normState === 'pb' && item.state === 'punjab') ||
      (normState === 'tn' && item.state === 'tamil-nadu') ||
      (normState === 'ka' && item.state === 'karnataka') ||
      (normState === 'wb' && item.state === 'west-bengal') ||
      (normState === 'gu' && item.state === 'gujarat') ||
      (normState === 'dl' && item.state === 'delhi')
    );

    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;

    return matchesState && matchesCategory;
  });

  return list;
}
