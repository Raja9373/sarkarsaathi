import { LifeEvent } from '../types';

export const LIFE_EVENTS_LIST: LifeEvent[] = [
  {
    id: 'baby-born',
    title: 'Baby Born (Childbirth in Delhi)',
    hindiTitle: 'बच्चे का जन्म (दिल्ली)',
    description: 'Complete guide for birth certificate, Aadhaar Baal Enrolment, immunization record, maternity benefits, and health card.',
    iconName: 'Baby',
    requiredServices: [
      'Birth Certificate (MCD/NDMC)',
      'Baal Aadhaar Card (UIDAI)',
      'Delhi CM Swasthya Bima / Ayushman Card',
      'Janani Suraksha Yojana / PMMVY Maternity Scheme'
    ],
    requiredDocuments: [
      'Hospital Discharge Slip / Birth Slip',
      'Parents Aadhaar Cards',
      'Parents Marriage Certificate',
      'Parents Bank Account Passbook (for maternity grant deposit)'
    ],
    estimatedFees: '₹0 to ₹50 (MCD certificate copy fee)',
    officialLinks: [
      { label: 'MCD Birth Portal', url: 'https://mcdonline.nic.in' },
      { label: 'UIDAI Baal Aadhaar', url: 'https://myaadhaar.uidai.gov.in' },
      { label: 'Pradhan Mantri Matru Vandana Yojana', url: 'https://pmmvy.wcd.gov.in' }
    ],
    timeline: 'Within 21 days of birth (0-21 days ideal)',
    checklist: [
      'Ensure hospital records parents names matching Aadhaar exactly',
      'Collect official hospital birth discharge slip before leaving',
      'Register for MCD Birth Certificate online within 21 days',
      'Add child official name on MCD portal within 1 year',
      'Get Baal Aadhaar linked with parents Aadhaar'
    ],
    relatedEvents: ['school-admission', 'changing-address']
  },
  {
    id: 'school-admission',
    title: 'School Admission (EWS / Nursery Delhi)',
    hindiTitle: 'स्कूल प्रवेश (ईडब्ल्यूएस / नर्सरी दिल्ली)',
    description: 'Delhi Nursery Admissions, EWS/DG quota admissions, Income Certificate requirement, and transfer certificate guidelines.',
    iconName: 'GraduationCap',
    requiredServices: [
      'Income Certificate (e-District Delhi)',
      'Birth Certificate (MCD)',
      'Caste Certificate (if applicable)',
      'Delhi Directorate of Education (DoE) EWS Portal'
    ],
    requiredDocuments: [
      'Child Birth Certificate',
      'Parents Aadhaar Cards with Delhi address',
      'Valid Delhi Revenue Dept Income Certificate (< ₹1 Lakh family income for EWS)',
      'Address Proof (Electricity Bill / Rent Agreement / Voter ID)',
      'Child passport photos'
    ],
    estimatedFees: 'Free application on DoE Portal',
    officialLinks: [
      { label: 'Delhi Directorate of Education Portal', url: 'http://www.edudel.nic.in' },
      { label: 'e-District Delhi (Income Certificate)', url: 'https://edistrict.delhigovt.nic.in' }
    ],
    timeline: 'December to March (Nursery Admission cycle)',
    checklist: [
      'Apply Income Certificate before November to avoid admission deadline rush',
      'Check school neighborhood distance points system',
      'Register on DoE EWS online portal during centralized draw of lots window'
    ],
    relatedEvents: ['baby-born', 'college-admission']
  },
  {
    id: 'marriage',
    title: 'Marriage & Wedlock',
    hindiTitle: 'विवाह / मैरिज रजिस्ट्रेशन',
    description: 'Legal marriage registration under Hindu/Special Marriage Act, updating surname in PAN/Aadhaar, and spousal passport endorsement.',
    iconName: 'Heart',
    requiredServices: [
      'Marriage Certificate Registration (SDM Office Delhi)',
      'Aadhaar Name / Address Update after Marriage',
      'PAN Card Name Change Form',
      'Passport Spouse Name Endorsement'
    ],
    requiredDocuments: [
      'Age Proof (Birth Certificate / Matriculation) for Groom (21+) and Bride (18+)',
      'Address Proof in Delhi',
      'Marriage Invitation Card & Wedding Photos',
      'Aadhaar Cards of 2 Witnesses with Delhi proofs'
    ],
    estimatedFees: '₹100 (Standard) | ₹500 (Tatkal Scheme)',
    officialLinks: [
      { label: 'e-District Delhi Marriage Booking', url: 'https://edistrict.delhigovt.nic.in' },
      { label: 'Passport Spouse Endorsement', url: 'https://www.passportindia.gov.in' }
    ],
    timeline: 'Within 60 days of wedding ceremony',
    checklist: [
      'Preserve original marriage card and wedding photographs',
      'Book SDM appointment on e-District portal',
      'Both spouses & 2 witnesses must carry original ID cards to SDM office'
    ],
    relatedEvents: ['buying-house', 'changing-name']
  },
  {
    id: 'buying-house',
    title: 'Buying House / Property in Delhi',
    hindiTitle: 'मकान / संपत्ति खरीदना (दिल्ली)',
    description: 'Property registration, e-Stamp duty calculation, DDA NOC, MCD mutation, DJB & electricity meter connection transfer.',
    iconName: 'Home',
    requiredServices: [
      'Delhi e-Stamping & Sub-Registrar Appointment (SHCIL)',
      'MCD Property Tax Mutation (UPIC Transfer)',
      'DDA Property Transfer & Conveyance Deed',
      'Delhi Jal Board Water Meter Name Transfer',
      'BSES / TPDDL Electricity Meter Transfer'
    ],
    requiredDocuments: [
      'Sale Deed draft / Title Deed',
      'e-Stamp Duty Payment Receipt',
      'Buyer & Seller Aadhaar, PAN Cards',
      'Property Tax Clearance Receipt (MCD PTR)',
      'Electricity & Water Bill NOC'
    ],
    estimatedFees: 'Stamp Duty: 6% (Male) / 4% (Female) / 5% (Joint) + 1% Registration Fee',
    officialLinks: [
      { label: 'Stock Holding e-Stamping Delhi', url: 'https://www.stockholding.com' },
      { label: 'DDA Citizen Portal', url: 'https://dda.gov.in' },
      { label: 'MCD Mutation Portal', url: 'https://mcdonline.nic.in' }
    ],
    timeline: '15 to 30 Days for registration & utility transfers',
    checklist: [
      'Verify title search & encumbrance certificate at Sub-Registrar office',
      'Pay correct e-stamp duty based on gender rebate',
      'Complete MCD property tax mutation within 60 days of buying'
    ],
    relatedEvents: ['selling-house', 'moving-to-delhi']
  },
  {
    id: 'buying-vehicle',
    title: 'Buying Vehicle (Car / Bike)',
    hindiTitle: 'वाहन खरीदना (कार/बाइक)',
    description: 'Vehicle registration (RC), High Security Registration Plate (HSRP), PUC certificate, and Fastag issuing.',
    iconName: 'Car',
    requiredServices: [
      'Parivahan Vehicle RC Registration',
      'HSRP Online Booking (bookmyhsrp.com)',
      'National Highway Fastag Activation',
      'Pollution Under Control (PUC) Certificate'
    ],
    requiredDocuments: [
      'Form 20, 21 (Sale Certificate from dealer), Form 22 (Road worthiness)',
      'Buyer Aadhaar Card & PAN Card',
      'Valid Motor Insurance Policy',
      'Delhi Address Proof'
    ],
    estimatedFees: 'Road Tax: 4% to 12% as per fuel type and ex-showroom price',
    officialLinks: [
      { label: 'Parivahan Vahan Portal', url: 'https://vahan.parivahan.gov.in' },
      { label: 'Book My HSRP Delhi', url: 'https://bookmyhsrp.com' }
    ],
    timeline: '1 to 7 Days via Dealer Point Registration',
    checklist: [
      'Ensure dealer registers vehicle before physical delivery',
      'Book HSRP color-coded fuel sticker for Delhi NCR driving',
      'Download mParivahan app for digital RC storage'
    ],
    relatedEvents: ['driving-licence-delhi-transport', 'traffic-challan-pay-delhi']
  },
  {
    id: 'starting-business',
    title: 'Starting a Business in Delhi',
    hindiTitle: 'व्यवसाय/स्टार्टअप शुरू करना',
    description: 'GST registration, Udyam MSME, MCD Trade Licence, FSSAI Food License, Delhi Labour Shop & Establishment registration.',
    iconName: 'Briefcase',
    requiredServices: [
      'Udyam MSME Registration (Free)',
      'GST Registration (gst.gov.in)',
      'MCD Trade Health Licence (Delhi)',
      'Delhi Shop & Establishment Registration',
      'Current Bank Account Opening'
    ],
    requiredDocuments: [
      'PAN Card of Owner / Firm / Company',
      'Aadhaar Card',
      'Business Premise Proof (Electricity Bill / Rent Agreement + NOC from landlord)',
      'Cancelled Cheque / Bank Statement'
    ],
    estimatedFees: 'Udyam: Free | GST: Free | MCD Trade Licence: ₹1,000 to ₹5,000 as per trade',
    officialLinks: [
      { label: 'Udyam Registration Portal', url: 'https://udyamregistration.gov.in' },
      { label: 'GST Official Portal', url: 'https://www.gst.gov.in' },
      { label: 'MCD Trade Licence Portal', url: 'https://mcdonline.nic.in' }
    ],
    timeline: '3 to 10 Working Days',
    checklist: [
      'Register Udyam MSME first to get priority banking benefits and subsidy eligibility',
      'Obtain MCD Trade Licence if running physical retail shop or factory in Delhi',
      'Open Current Account with bank'
    ],
    relatedEvents: ['getting-first-job', 'buying-house']
  },
  {
    id: 'changing-name',
    title: 'Changing Official Name / Gazetted Gazette Notice',
    hindiTitle: 'आधिकारिक नाम परिवर्तन / गजट',
    description: 'Name change affidavit, newspaper advertisement notice, Central Gazette publication, and updating PAN, Aadhaar, Passport.',
    iconName: 'FileText',
    requiredServices: [
      'Name Change Affidavit (Notarized)',
      'Newspaper Publication (English & Hindi Daily)',
      'Department of Publication Gazette Notice (cgazette.nic.in)',
      'Aadhaar & PAN Name Update'
    ],
    requiredDocuments: [
      'Original Notarized Affidavit on ₹10 or ₹50 stamp paper',
      'Original full page copies of 2 newspapers publishing name change ad',
      'Proforma for Gazette notification signed by applicant and 2 witnesses',
      'CD/Drive soft copy of text in MS Word format'
    ],
    estimatedFees: '₹1,100 to ₹1,500 (Gazette fee + Newspaper Ad costs)',
    officialLinks: [
      { label: 'Department of Publication e-Gazette', url: 'https://egazette.gov.in' },
      { label: 'UIDAI Aadhaar Update', url: 'https://myaadhaar.uidai.gov.in' }
    ],
    timeline: '30 to 60 Days for official Gazette publishing',
    checklist: [
      'Execute notarized name change affidavit first',
      'Publish advertisement in one English daily and one Hindi newspaper in Delhi',
      'Submit application packet to Controller of Publications Civil Lines Delhi'
    ],
    relatedEvents: ['marriage', 'lost-documents']
  },
  {
    id: 'lost-documents',
    title: 'Lost Important Documents (Aadhaar/PAN/DL/Ration)',
    hindiTitle: 'दस्तावेज गुम होना (पुलिस रिपोर्ट व री-इश्यू)',
    description: 'Filing Delhi Police Lost Article Report online, obtaining duplicate PAN/Aadhaar/DL, and university marksheet duplicate copy.',
    iconName: 'AlertTriangle',
    requiredServices: [
      'Delhi Police Lost Article Report Online',
      'Duplicate PAN Card Re-print',
      'Download e-Aadhaar / PVC Card Order',
      'Duplicate Driving Licence (Parivahan)'
    ],
    requiredDocuments: [
      'Delhi Police Lost Article Report LR Copy (PDF generated online)',
      'Photocopy / Number of lost document',
      'Identity Proof'
    ],
    estimatedFees: 'Police LR: Free | Duplicate PVC Aadhaar: ₹50 | Duplicate PAN: ₹50',
    officialLinks: [
      { label: 'Delhi Police Lost Property Portal', url: 'https://delhipolice.gov.in/' },
      { label: 'UIDAI Order Aadhaar PVC', url: 'https://myaadhaar.uidai.gov.in' },
      { label: 'Protean NSDL Reprint PAN', url: 'https://www.tin-nsdl.com' }
    ],
    timeline: 'Instant Police Report | 3 to 7 Days for duplicate cards',
    checklist: [
      'File Delhi Police Lost Property Report immediately online (free & instant)',
      'Use Police LR number while applying for duplicate Driving Licence or University Degree',
      'Order Aadhaar PVC card online for ₹50 delivered to home'
    ],
    relatedEvents: ['foreign-travel', 'changing-address']
  }
];
