import { DelhiDepartment } from '../types';

export const DELHI_DEPARTMENTS: DelhiDepartment[] = [
  {
    id: 'mcd',
    name: 'Municipal Corporation of Delhi',
    hindiName: 'दिल्ली नगर निगम (MCD)',
    shortCode: 'MCD',
    description: 'Civic governance covering property tax, birth & death certificates, sanitation, trade licences, and building plan approvals.',
    headOffice: 'Civic Centre, Minto Road, New Delhi 110002',
    helpline: '155305 / 011-23227413',
    email: 'mcd-portal@mcd.nic.in',
    officialWebsite: 'https://mcdonline.nic.in',
    portalUrl: 'https://mcdonline.nic.in',
    keyServices: ['Property Tax Payment', 'Birth & Death Certificate', 'Trade Health Licence', 'Pet Dog Registration', 'Factory Licence']
  },
  {
    id: 'dda',
    name: 'Delhi Development Authority',
    hindiName: 'दिल्ली विकास प्राधिकरण (DDA)',
    shortCode: 'DDA',
    description: 'Urban planning, housing schemes, land acquisition, leasehold to freehold conversion, and park maintenance in Delhi.',
    headOffice: 'Vikas Sadan, INA, New Delhi 110023',
    helpline: '1800 110 332',
    email: 'cl@dda.org.in',
    officialWebsite: 'https://dda.gov.in',
    portalUrl: 'https://dda.gov.in',
    keyServices: ['DDA Housing Schemes', 'Freehold Conversion', 'DDA Land Allotment', 'e-Auction Property', 'Community Hall Booking']
  },
  {
    id: 'djb',
    name: 'Delhi Jal Board',
    hindiName: 'दिल्ली जल बोर्ड (DJB)',
    shortCode: 'DJB',
    description: 'Potable water supply, sewerage treatment, water bill payment, and new water/sewer connections in NCT of Delhi.',
    headOffice: 'Varunalaya Phase II, Karol Bagh, New Delhi 110005',
    helpline: '1916 / 011-23527679',
    email: 'djbcewater@gmail.com',
    officialWebsite: 'https://djb.gov.in/DJBRMSPortal/',
    portalUrl: 'https://djb.gov.in/DJBRMSPortal/',
    keyServices: ['Water Bill Payment', 'New Water Connection', 'Sewerage Connection', 'Water Tanker Booking', 'MSeva Mobile App']
  },
  {
    id: 'delhi-police',
    name: 'Delhi Police',
    hindiName: 'दिल्ली पुलिस',
    shortCode: 'DP',
    description: 'Law enforcement, crime prevention, traffic management, police verification, tenant verification, and lost property reports.',
    headOffice: 'Delhi Police Headquarters, Jai Singh Road, New Delhi 110001',
    helpline: '112 / 1090 / 1091 (Women)',
    email: 'cp.snshrivastava@delhipolice.gov.in',
    officialWebsite: 'https://delhipolice.gov.in/',
    portalUrl: 'https://delhipolice.gov.in/',
    keyServices: ['Police Clearance Certificate (PCC)', 'Lost Article Report', 'Tenant Verification', 'Senior Citizen Registration', 'E-FIR Cyber Crime']
  },
  {
    id: 'transport-dept',
    name: 'Transport Department, Delhi',
    hindiName: 'परिवहन विभाग, दिल्ली',
    shortCode: 'Transport',
    description: 'Vehicle registration, learner & permanent driving licence, pollution control (PUC), permit issuance, and electric vehicle subsidy.',
    headOffice: '5/9 Under Hill Road, Delhi 110054',
    helpline: '011-23994629 / 1073',
    email: 'mlo.adtt@delhi.gov.in',
    officialWebsite: 'https://transport.delhi.gov.in',
    portalUrl: 'https://sarathi.parivahan.gov.in',
    keyServices: ['Learner Licence Online Test', 'Permanent Driving Licence Slot', 'Vehicle RC Transfer', 'EV Subsidy Claim', 'High Security Number Plate (HSRP)']
  },
  {
    id: 'revenue-dept',
    name: 'Revenue Department (e-District Delhi)',
    hindiName: 'राजस्व विभाग (ई-डिस्ट्रिक्ट दिल्ली)',
    shortCode: 'Revenue',
    description: 'District Magistrates & SDM offices issuing income, caste, domicile, marriage certificates, and land revenue records.',
    headOffice: '5, Sham Nath Marg, Delhi 110054',
    helpline: '011-23935705 / 1077',
    email: 'edistrict.delhi@gov.in',
    officialWebsite: 'https://edistrict.delhigovt.nic.in',
    portalUrl: 'https://edistrict.delhigovt.nic.in',
    keyServices: ['Income Certificate', 'SC/ST/OBC Caste Certificate', 'Domicile / Residence Certificate', 'Marriage Registration', 'Survivor Member Certificate']
  },
  {
    id: 'education-dept',
    name: 'Directorate of Education (DoE Delhi)',
    hindiName: 'शिक्षा निदेशालय (DoE दिल्ली)',
    shortCode: 'DoE',
    description: 'School education, government school admissions, EWS/DG admissions, scholarship schemes, and teacher management.',
    headOffice: 'Old Secretariat, Delhi 110054',
    helpline: '011-23890072 / 1800 110 072',
    email: 'diredu@nic.in',
    officialWebsite: 'http://www.edudel.nic.in',
    portalUrl: 'http://www.edudel.nic.in',
    keyServices: ['Delhi Nursery Admission', 'EWS / DG Quota Admission', 'Higher Education Fee Waiver', 'Merit Scholarship Schemes', 'Govt School Transfer']
  },
  {
    id: 'health-dept',
    name: 'Department of Health & Family Welfare',
    hindiName: 'स्वास्थ्य एवं परिवार कल्याण विभाग',
    shortCode: 'Health',
    description: 'Delhi Govt hospitals, Aam Aadmi Mohalla Clinics, health insurance schemes, and organ donation registry.',
    headOffice: '9th Floor, A-Wing, Delhi Secretariat, IP Estate, New Delhi 110002',
    helpline: '102 / 104',
    email: 'psohealth@gmail.com',
    officialWebsite: 'https://health.delhi.gov.in',
    portalUrl: 'https://health.delhi.gov.in',
    keyServices: ['Ayushman Arogya Mandir (AAM) Finder', 'Mohalla Clinic Locator', 'Delhi Govt Hospital OPD Ticket Online', 'Delhi Arogya Kosh Scheme', 'Free Diagnostic Tests Locator']
  }
];
