export interface DeptComplaintInfo {
  id: string;
  deptName: string;
  hindiDeptName: string;
  jurisdiction: 'Delhi Govt (PGMS)' | 'Central Govt (CPGRAMS)' | 'MCD Municipal' | 'Police & Crime' | 'Utility Discom / DJB' | 'Consumer & Banking';
  categoryIconName: string;
  shortDesc: string;
  commonIssues: string[];
  whereToComplain: {
    portalName: string;
    officialWebsite: string;
    appName?: string;
    helpline: string;
    whatsappNumber?: string;
    email?: string;
    physicalOffice: string;
  };
  toWhom: {
    level1: string;
    level2: string;
    level3: string;
  };
  stepByStepProcess: string[];
  resolutionTimeline: string;
  escalationTip: string;
}

export const DEPT_COMPLAINTS_DATA: DeptComplaintInfo[] = [
  {
    id: 'delhi-pgms-all-departments',
    deptName: 'Delhi Government All Departments (PGMS Portal)',
    hindiDeptName: 'दिल्ली सरकार सभी विभाग - जन शिकायत निवारण पोर्टल (PGMS)',
    jurisdiction: 'Delhi Govt (PGMS)',
    categoryIconName: 'Building2',
    shortDesc: 'Centralized Public Grievance Monitoring System for all Delhi Govt depts (Transport, Revenue, PWD, Health, Ration, Education, Excise).',
    commonIssues: [
      'Delay in issuing Revenue certificates (Income, Caste, Residence) by SDM office',
      'RTO DL / RC license approval delay or harassment by staff',
      'Hospital poor service or medicine unavailability in Delhi Govt Hospitals',
      'PWD road damage, open drains, or streetlight non-functional',
      'Ration card non-issuance or ration shopkeeper illegal holding',
      'School admission refusal under EWS / DG quota by private schools'
    ],
    whereToComplain: {
      portalName: 'Delhi Govt PGMS Portal',
      officialWebsite: 'https://pgms.delhi.gov.in/',
      appName: 'Delhi PGMS App',
      helpline: '1031 / 155355 / 011-23392314',
      email: 'pgms.delhi@gov.in',
      physicalOffice: 'Public Grievance Cell, Delhi Secretariat, I.P. Estate, New Delhi - 110002'
    },
    toWhom: {
      level1: 'Public Grievance Officer (PGO) of Concerned Department (e.g., SDM / RTO Officer / Medical Supt.)',
      level2: 'Head of Department (HOD) / Secretary of Concerned Ministry',
      level3: 'Public Grievances Commission (PGC) Delhi / Chief Minister’s Grievance Cell'
    },
    stepByStepProcess: [
      'Visit official Delhi PGMS Portal (pgms.delhi.gov.in) or call 1031.',
      'Click "Lodge Grievance" -> Select Department (e.g. Revenue, Transport, PWD, Health, Food & Supplies).',
      'Fill grievance details, location, and attach supporting proof (receipts, photo, application reference number).',
      'Submit to receive a unique 10-digit Grievance Registration Number via SMS.',
      'Track real-time status online under "Track Grievance" tab.',
      'Receive official written resolution report directly from the designated Nodal Officer.'
    ],
    resolutionTimeline: '15 to 30 Working Days',
    escalationTip: 'If unsatisfied with PGO response within 30 days, file an appeal before the Public Grievances Commission (PGC), 2nd Floor, M-Block, Vikas Bhawan, New Delhi.'
  },
  {
    id: 'cpgrams-central-govt-ministries',
    deptName: 'Central Government Ministries & Departments (CPGRAMS)',
    hindiDeptName: 'केंद्र सरकार मंत्रालय एवं विभाग (CPGRAMS शिकायत पोर्टल)',
    jurisdiction: 'Central Govt (CPGRAMS)',
    categoryIconName: 'Landmark',
    shortDesc: 'Single window grievance portal for Railways, Passports, Income Tax, Post, Banking, Highways, Telecom & Central PSUs.',
    commonIssues: [
      'Indian Railways train delay, cleanliness, refund failure, or food quality issue',
      'Passport Seva Kendra (PSK) police verification delay or passport dispatch stall',
      'Income Tax refund delay, AIS mismatch, or IT Portal portal technical error',
      'India Post parcel missing, delayed speed post, or savings account error',
      'EPFO PF withdrawal claim rejection or UAN transfer issue',
      'National Highway toll plaza overcharging or FASTag debit error'
    ],
    whereToComplain: {
      portalName: 'CPGRAMS Portal (DARPG)',
      officialWebsite: 'https://pgportal.gov.in/',
      appName: 'UMANG / CPGRAMS App',
      helpline: '1800-11-1555 / 011-23743182',
      email: 'darpg@nic.in',
      physicalOffice: 'Department of Administrative Reforms and Public Grievances (DARPG), Patel Bhawan, Parliament Street, New Delhi - 110001'
    },
    toWhom: {
      level1: 'Nodal Public Grievance Officer of the specific Ministry / Central PSU',
      level2: 'First Appellate Authority / Director Public Grievances of Ministry',
      level3: 'DARPG Public Grievances Division / Prime Minister’s Office (PMO Grievance Cell)'
    },
    stepByStepProcess: [
      'Visit CPGRAMS portal (pgportal.gov.in) or open UMANG App.',
      'Sign in using Mobile / Aadhaar OTP -> Click "Lodge Public Grievance".',
      'Select Ministry/Department (e.g. Ministry of Railways, MEA Passport, Income Tax, EPFO, Posts).',
      'Describe complaint concisely (up to 2000 characters) and upload supporting PDF document.',
      'Submit to get instant Registration Number starting with MINIS/E/...',
      'Officer investigates and uploads official Action Taken Report (ATR) online.'
    ],
    resolutionTimeline: '21 to 30 Days (Mandated by DARPG)',
    escalationTip: 'If ATR is unsatisfactory, use the "Appeal" button on CPGRAMS within 30 days to escalate directly to a Senior Nodal Officer.'
  },
  {
    id: 'mcd-civic-complaints',
    deptName: 'Municipal Corporation of Delhi (MCD Civic Complaints)',
    hindiDeptName: 'दिल्ली नगर निगम (MCD 311 नागरिक शिकायतें)',
    jurisdiction: 'MCD Municipal',
    categoryIconName: 'Building',
    shortDesc: 'Lodge civic complaints regarding garbage dumping, potholes, streetlights, stray dogs, illegal construction, & property tax in Delhi.',
    commonIssues: [
      'Garbage non-pickup, overflowing dhalao, or uncleaned street drains',
      'Non-functional streetlights or dark spots in residential colonies',
      'Road potholes, damaged pavements, or unauthorized road digging',
      'Stray dogs menace, monkey bites, or dead animal removal request',
      'Unauthorized illegal building construction or encroachment on public land',
      'Birth/Death certificate record correction delay or Property Tax UPIC error'
    ],
    whereToComplain: {
      portalName: 'MCD 311 App & Online Civic Portal',
      officialWebsite: 'https://mcdonline.nic.in/',
      appName: 'MCD 311 App (Android & iOS)',
      helpline: '155305 / 1800-11-8700 / 011-23227413',
      whatsappNumber: '9211728282',
      email: 'mcd-311@mcd.gov.in',
      physicalOffice: 'Concerned MCD Zonal Office (Rohini, Civil Lines, Karol Bagh, Shahdara, South Zone, Central Zone, etc.)'
    },
    toWhom: {
      level1: 'MCD Zonal Sanitary Inspector / Executive Engineer (Maintenance / Electrical)',
      level2: 'Deputy Commissioner (DC) of MCD Zone',
      level3: 'MCD Commissioner Office, Civic Centre, Minto Road, New Delhi'
    },
    stepByStepProcess: [
      'Download "MCD 311" app on smartphone or visit mcdonline.nic.in.',
      'Click "New Complaint" -> Enable GPS for geo-tagged photo location.',
      'Take live photo of pothole, garbage, or dark streetlight.',
      'Select Category (Sanitation, Engineering, Horticulture, Veterinary, Public Health).',
      'Submit -> Ticket automatically assigned to local MCD Ward Inspector.',
      'Track resolution photo uploaded by beat worker upon closure.'
    ],
    resolutionTimeline: '24 Hours (Garbage / Animal) | 48-72 Hours (Streetlight / Pothole)',
    escalationTip: 'If ticket is closed without actual work, reopen ticket on MCD 311 app and contact the Zonal DC Helpline.'
  },
  {
    id: 'delhi-jal-board-water-sewer',
    deptName: 'Delhi Jal Board (DJB Water & Sewer Complaints)',
    hindiDeptName: 'दिल्ली जल बोर्ड (पानी एवं सीवर समस्या हेल्पलाइन)',
    jurisdiction: 'Utility Discom / DJB',
    categoryIconName: 'Zap',
    shortDesc: 'Lodge complaints for water supply shortage, dirty/contaminated water, sewer line leakage, & inflated water bill issues.',
    commonIssues: [
      'No water supply or low pressure in piped water connection',
      'Dirty, yellow, or foul-smelling contaminated water pipeline',
      'Main sewer pipeline overflow, blockage, or foul sewage backflow in houses',
      'Water tanker non-arrival or illegal money demand by tanker driver',
      'Inflated water bill due to provisional meter reading error'
    ],
    whereToComplain: {
      portalName: 'Delhi Jal Board Grievance Portal',
      officialWebsite: 'https://djb.gov.in/ https://pgms.delhi.gov.in/',
      appName: 'DJB m-Seva App',
      helpline: '1916 (Toll-Free 24x7) / 1800-11-7118',
      whatsappNumber: '9650291021',
      email: 'customercare@djb.gov.in',
      physicalOffice: 'Local Zonal Water Emergency Office / DJB Zonal Executive Engineer Office'
    },
    toWhom: {
      level1: 'Zonal Assistant Engineer (AE Water / Sewer) / Executive Engineer (EE)',
      level2: 'Chief Engineer (Water Supply & Drainage) DJB',
      level3: 'Member Water / CEO, Delhi Jal Board, Varunalaya Phase-II, Karol Bagh, New Delhi'
    },
    stepByStepProcess: [
      'Call DJB 24x7 Helpline 1916 or use DJB m-Seva App.',
      'Provide KNO (Key Number Account) printed on water bill.',
      'Specify issue type: Water shortage, Water quality, Sewer blockage, Tanker request, or Billing.',
      'Note down 8-digit Complaint Registration Ticket Number.',
      'Water Emergency Team / Sewer Suction Machine dispatched to address.'
    ],
    resolutionTimeline: '12-24 Hours (Water Emergency / Sewer) | 7 Days (Billing dispute)',
    escalationTip: 'For urgent water tanker requirement during severe shortage, contact Zonal Water Emergency Control Room or DJB Chief Engineer.'
  },
  {
    id: 'power-electricity-discoms-delhi',
    deptName: 'Delhi Electricity Discoms (BSES Rajdhani, BSES Yamuna, Tata Power)',
    hindiDeptName: 'दिल्ली बिजली कंपनियां (BSES राजधानी, BSES यमुना, टाटा पावर)',
    jurisdiction: 'Utility Discom / DJB',
    categoryIconName: 'Zap',
    shortDesc: 'Report power outages, high voltage fluctuations, meter fault, incorrect bills, & transformer breakdown to BRPL, BYPL, or TPDDL.',
    commonIssues: [
      'Unscheduled power blackout / power cut in colony',
      'High voltage fluctuation causing appliance damage or sparking',
      'Electricity meter running fast, faulty meter, or display burnt',
      'Inflated / erroneous electricity bill or provisional tariff error',
      'New electricity meter connection application delay'
    ],
    whereToComplain: {
      portalName: 'Discom Customer Portals & WhatsApp Helplines',
      officialWebsite: 'https://www.bsesdelhi.com https://www.tatapower-ddl.com',
      appName: 'BSES Delhi App / TPDDL Connect App',
      helpline: 'BRPL: 19123 | BYPL: 19122 | TPDDL: 19124 | NDMC: 1912',
      whatsappNumber: 'BRPL: 9599920912 | BYPL: 8745999808 | TPDDL: 9667558000',
      physicalOffice: 'Nearest Customer Care Centre (CCC) / Division Office of BRPL / BYPL / TPDDL'
    },
    toWhom: {
      level1: 'Discom Division Business Manager (DBM) / Circle Head',
      level2: 'Consumer Grievance Redressal Forum (CGRF) of concerned Discom',
      level3: 'Electricity Ombudsman Delhi (DERC), B-53, Paschimi Marg, Vasant Vihar, New Delhi'
    },
    stepByStepProcess: [
      'Call Discom Helpline (19123 / 19122 / 19124) or send WhatsApp "NC" with CA Number.',
      'Enter 9-digit CA Number (Consumer Account No.) printed on bill.',
      'Register complaint -> Receive SMS ticket reference number.',
      'Field lineman / testing technician arrives for fault repair.',
      'If billing/meter dispute is unresolved, submit written grievance to Consumer Grievance Redressal Forum (CGRF).'
    ],
    resolutionTimeline: '2 to 4 Hours (Power Cut) | 15 Days (Billing / Meter Dispute)',
    escalationTip: 'If CGRF does not resolve bill dispute within 60 days, file appeal with Electricity Ombudsman Delhi under DERC regulations.'
  },
  {
    id: 'delhi-police-vigilance-cyber-traffic',
    deptName: 'Delhi Police & Traffic / Cyber Crime / Vigilance Helpline',
    hindiDeptName: 'दिल्ली पुलिस, ट्रैफिक पुलिस, साइबर अपराध एवं विजिलेंस',
    jurisdiction: 'Police & Crime',
    categoryIconName: 'ShieldAlert',
    shortDesc: 'How to complaint against police inaction, bribery demand, traffic misconduct, or file cyber crime financial fraud report.',
    commonIssues: [
      'Police station refusal to register FIR or delay in investigating complaint',
      'Demand for bribe / illegal gratification by police personnel',
      'Traffic police misbehavior, illegal towing, or wrong e-challan',
      'Online banking fraud, UPI scam, phishing, or cyber harassment',
      'Noise pollution from loudspeakers/pubs beyond 10 PM'
    ],
    whereToComplain: {
      portalName: 'National Cyber Crime Portal & Delhi Police Vigilance',
      officialWebsite: 'https://cybercrime.gov.in https://delhipolice.gov.in',
      appName: 'Delhi Police Tatpar App',
      helpline: 'Emergency: 112 | Cyber Fraud: 1930 | Police Vigilance: 1064 / 1800-11-1064',
      whatsappNumber: 'Traffic Helpline: 8750871491',
      email: 'cp.amulya-patnaik@delhipolice.gov.in / vigilance@delhipolice.gov.in',
      physicalOffice: 'Office of Joint CP Vigilance, Delhi Police HQ, Jai Singh Road, New Delhi - 110001'
    },
    toWhom: {
      level1: 'Assistant Commissioner of Police (ACP) / Sub-Divisional Police Officer',
      level2: 'Deputy Commissioner of Police (DCP) of District',
      level3: 'Joint CP Vigilance / Commissioner of Police Delhi / Anti-Corruption Branch (ACB)'
    },
    stepByStepProcess: [
      'For Cyber Online Fraud: Immediately dial 1930 within 1 hour ("Golden Hour") to freeze fraudulent bank account, or log on to cybercrime.gov.in.',
      'For Police Corruption / Inaction: Call Police Vigilance Helpline 1064 or email detailed complaint with proof to vigilance@delhipolice.gov.in.',
      'For Wrong Traffic Challan: Submit online grievance on traffic.delhipolice.gov.in or attend Virtual Traffic Court.',
      'Keep copy of complaint receipt with date stamp.'
    ],
    resolutionTimeline: 'Immediate (Cyber Freeze 1930) | 15 Days (Vigilance inquiry)',
    escalationTip: 'If local police refuses to register FIR for cognizable offense, send written complaint by Registered Post to District DCP under Section 154(3) CrPC / BNSS.'
  },
  {
    id: 'national-consumer-forum-ingram',
    deptName: 'National Consumer Helpline (NCH / INGRAM) & e-Daakhil Forum',
    hindiDeptName: 'राष्ट्रीय उपभोक्ता हेल्पलाइन एवं ई-दाखिल कंज्यूमर फोरम',
    jurisdiction: 'Consumer & Banking',
    categoryIconName: 'MessageSquare',
    shortDesc: 'File consumer complaints against defective products, unfair trade practices, e-commerce refund refusal, & service deficiencies.',
    commonIssues: [
      'E-commerce app (Amazon, Flipkart, Swiggy, Zomato) refusing return or refund for damaged item',
      'Defective electronic goods (TV, Fridge, AC, Car) manufacturer warranty refusal',
      'Real estate builder delay in flat possession or hidden charge demand',
      'Private hospital / doctor medical negligence or inflated billing',
      'Insurance company wrongful rejection of health or car insurance claim'
    ],
    whereToComplain: {
      portalName: 'National Consumer Helpline (INGRAM) & e-Daakhil',
      officialWebsite: 'https://consumerhelpline.gov.in https://e-daakhil.nic.in/',
      appName: 'NCH Mobile App',
      helpline: '1915 (Toll-Free) / 011-23386922',
      whatsappNumber: '8800001915',
      physicalOffice: 'District Consumer Disputes Redressal Commission (DCDRC) in concerned Delhi District'
    },
    toWhom: {
      level1: 'Company Nodal Officer / Pre-litigation Mediation via NCH 1915',
      level2: 'District Consumer Disputes Redressal Commission (DCDRC)',
      level3: 'State Consumer Commission (Delhi) / National Consumer Disputes Redressal Commission (NCDRC)'
    },
    stepByStepProcess: [
      'Call NCH Helpline 1915 or send WhatsApp "Consumer" to 8800001915.',
      'Register on consumerhelpline.gov.in -> Select Company / Brand Name.',
      'Provide invoice / purchase bill, order ID, and transaction proof.',
      'NCH sends notice to company for voluntary settlement.',
      'If company fails to settle within 15 days, file formal court case online via e-Daakhil (edaakhil.nic.in) for compensation.'
    ],
    resolutionTimeline: '15 to 30 Days (Pre-litigation NCH) | 90 Days (Consumer Court)',
    escalationTip: 'No lawyer is required to file a case in Consumer Court. Citizens can plead their own case using e-Daakhil online portal.'
  },
  {
    id: 'rbi-banking-ombudsman',
    deptName: 'RBI Integrated Banking & Digital Payments Ombudsman',
    hindiDeptName: 'भारतीय रिज़र्व बैंक (RBI) बैंकिंग एवं डिजिटल पेमेंट ओम्बुड्समैन',
    jurisdiction: 'Consumer & Banking',
    categoryIconName: 'Landmark',
    shortDesc: 'How to complaint against banks, ATMs, credit card issuers, & NBFCs for unauthorized debits, hidden charges, or loan harassment.',
    commonIssues: [
      'ATM cash not dispensed but money debited from bank account',
      'Unauthorized online banking or credit card fraudulent debit',
      'Bank delaying home loan NOC, property original documents return',
      'Loan recovery agents illegal harassment, threat calls, or abuse',
      'Hidden bank charges, minimum balance penalty without notice'
    ],
    whereToComplain: {
      portalName: 'RBI Complaint Management System (CMS)',
      officialWebsite: 'https://cms.rbi.org.in/',
      helpline: '14448 (Toll-Free 24x7)',
      email: 'CRPC@rbi.org.in',
      physicalOffice: 'Centralised Receipt and Processing Centre, Reserve Bank of India, 4th Floor, Sector 17, Chandigarh - 160017'
    },
    toWhom: {
      level1: 'Principal Nodal Officer (PNO) / Grievance Redressal Officer of concerned Bank',
      level2: 'Reserve Bank Integrated Ombudsman (RBI CMS Portal)',
      level3: 'Appellate Authority under RBI Integrated Ombudsman Scheme'
    },
    stepByStepProcess: [
      'First submit written complaint to your Bank’s Grievance Cell / Nodal Officer.',
      'Wait 30 days for bank response (or if bank rejects complaint).',
      'Visit RBI CMS Portal (cms.rbi.org.in) -> Click "File a Complaint".',
      'Select Bank / NBFC name, upload bank complaint copy and transaction proof.',
      'RBI Ombudsman assigns officer to order bank to refund money + compensation.'
    ],
    resolutionTimeline: '30 Days from lodging with RBI Ombudsman',
    escalationTip: 'Under RBI rules, if bank fails to credit failed ATM / UPI transaction within T+1 days, bank must pay ₹100 per day penalty to customer.'
  },
  {
    id: 'anti-corruption-lokayukta-delhi',
    deptName: 'Lokayukta Delhi & Anti-Corruption Branch (ACB)',
    hindiDeptName: 'लोकायुक्त दिल्ली एवं भ्रष्टाचार निरोधक शाखा (ACB)',
    jurisdiction: 'Police & Crime',
    categoryIconName: 'ShieldAlert',
    shortDesc: 'How to complaint against official bribery, corruption, & misuse of power by public servants, Ministers, MLAs, & officers in Delhi.',
    commonIssues: [
      'Government officer or clerk demanding bribe for sanctioning file, license, or scheme',
      'Misappropriation of public government funds or tender fraud',
      'Assets disproportionate to known sources of income of public servant',
      'Favoritism or nepotism in government recruitments/contracts'
    ],
    whereToComplain: {
      portalName: 'Office of Lokayukta Delhi & Anti-Corruption Branch',
      officialWebsite: 'https://lokayukta.delhi.gov.in https://pgms.delhi.gov.in',
      helpline: '1031 (CM Anti-Corruption Helpline) / 011-23813181',
      email: 'acb-delhi@nic.in / registrar-lokayukta@delhi.gov.in',
      physicalOffice: 'Office of Lokayukta, Block M, Vikas Bhawan, I.P. Estate, New Delhi - 110002 / ACB, 5 Attar Chand Market, Old Secretariat, Delhi - 110054'
    },
    toWhom: {
      level1: 'Director, Anti-Corruption Branch (ACB), Govt of NCT of Delhi',
      level2: 'Hon’ble Lokayukta of NCT of Delhi',
      level3: 'Directorate of Vigilance, Delhi Secretariat'
    },
    stepByStepProcess: [
      'For Bribery Trap: Immediately contact Anti-Corruption Branch (ACB) at 1031 before paying bribe.',
      'ACB sets up official trap with independent witnesses and marked currency notes.',
      'For Formal Lokayukta Complaint: Prepare affidavit in Form-I signed before Judicial Magistrate / Oath Commissioner.',
      'Submit affidavit along with nominal ₹2,000 court fee stamp to Office of Lokayukta.',
      'Lokayukta conducts formal judicial inquiry and recommends prosecution/removal.'
    ],
    resolutionTimeline: 'Trap Action: Immediate | Lokayukta Inquiry: 60-90 Days',
    escalationTip: 'Lokayukta has powers equal to a Civil Court to summon files, witnesses, and order bank account scrutinies of public servants.'
  }
];
