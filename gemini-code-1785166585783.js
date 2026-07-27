export const SERVICES_DATABASE = [
  {
    id: 'aadhaar-card-download',
    stateId: 'delhi',
    category: 'Identity & Documents',
    title: 'Aadhaar Card Download & Services',
    slug: 'aadhaar-card-download',
    metaTitle: 'Download Aadhaar Card Online Delhi | Official UIDAI Portal - SarkarSaathi',
    metaDescription: 'Step-by-step guide to download e-Aadhaar, check status, book appointment, and update details via official UIDAI portal.',
    lastUpdated: '2026-02-15',
    overview: 'e-Aadhaar is a digitally signed and valid legal document issued by UIDAI under the Aadhaar Act.',
    eligibility: ['Indian Resident', 'NRI with valid Indian Identity Proof'],
    requiredDocuments: ['Aadhaar Number / Enrolment ID (EID) / Virtual ID (VID)', 'Registered Mobile Number (for OTP)'],
    onlineProcess: [
      'Visit the official UIDAI myAadhaar portal.',
      'Click on "Download Aadhaar".',
      'Enter your 12-digit Aadhaar Number or 28-digit Enrolment ID.',
      'Enter the Security Captcha and click "Send OTP".',
      'Enter the OTP received on your registered mobile number.',
      'Download your password-protected PDF e-Aadhaar (Password format: First 4 letters of name in CAPITAL + Birth Year).'
    ],
    offlineProcess: [
      'Locate nearest Aadhaar Seva Kendra using our Finder.',
      'Fill up the Aadhaar Update/Correction Form.',
      'Submit required original biometric/demographic documents.',
      'Pay official fee ₹50 for update or ₹100 for biometric update.'
    ],
    fees: '₹0 (e-Download) | ₹50 (Demographic Update) | ₹100 (Biometric Update)',
    processingTime: 'Instant (Download) | 1-90 Days (Updates)',
    officialWebsite: 'https://uidai.gov.in',
    officialApplyLink: 'https://myaadhaar.uidai.gov.in',
    downloadForms: [
      { name: 'Aadhaar Enrolment & Update Form PDF', url: 'https://uidai.gov.in/images/aadhaar_enrolment_update_form.pdf' }
    ],
    faqs: [
      { question: 'Is e-Aadhaar equally valid as original printed Aadhaar?', answer: 'Yes, as per UIDAI circular and IT Act, e-Aadhaar is fully valid everywhere in India.' },
      { question: 'What is the password to open downloaded Aadhaar PDF?', answer: 'The password is the first 4 letters of your name in CAPITAL letters followed by your birth year (e.g., RAMA1990).' }
    ],
    relatedServices: ['pan-card-apply', 'voter-id-apply', 'passport-apply']
  },
  {
    id: 'income-certificate-delhi',
    stateId: 'delhi',
    category: 'Certificates',
    title: 'Income Certificate Delhi Online',
    slug: 'income-certificate-delhi',
    metaTitle: 'Apply Income Certificate Online Delhi | e-District Portal - SarkarSaathi',
    metaDescription: 'Complete step-by-step guide to apply for Income Certificate in Delhi via official e-District portal.',
    lastUpdated: '2026-01-20',
    overview: 'Income Certificate proves the annual income of an individual or family for government welfare schemes, scholarships, and fee concessions in Delhi.',
    eligibility: ['Resident of Delhi (Minimum 3 years)', 'Citizen of India'],
    requiredDocuments: [
      'Identity Proof (Aadhaar Card / Voter ID / Passport)',
      'Residence Proof of Delhi (Electricity Bill / Water Bill / Rent Agreement)',
      'Self-Declaration / Affidavit attested by Notary Public',
      'Salary Slip / Income Tax Return (ITR) / Income Proof',
      'Passport size photograph'
    ],
    onlineProcess: [
      'Visit the official Delhi e-District Portal (edistrict.delhigovt.nic.in).',
      'Register as a new user using Aadhaar or Voter ID.',
      'Login and select "Apply for Services" -> "Revenue Department".',
      'Click on "Issuance of Income Certificate".',
      'Fill the complete application form with family income details.',
      'Upload scanned self-attested documents in PDF/JPEG format.',
      'Submit the application and note down the Application Reference Number.'
    ],
    offlineProcess: [
      'Visit the concerned SDM office in your district.',
      'Obtain and fill the physical application form.',
      'Attach self-attested document photocopies.',
      'Submit at counter and collect acknowledgement slip.'
    ],
    fees: '₹0 (Free Service)',
    processingTime: '14 Working Days',
    officialWebsite: 'https://edistrict.delhigovt.nic.in',
    officialApplyLink: 'https://edistrict.delhigovt.nic.in/in/en/Public/ApplyService.html',
    downloadForms: [
      { name: 'Income Certificate Application Form PDF', url: 'https://edistrict.delhigovt.nic.in/downloads/income_form.pdf' },
      { name: 'Self Declaration Affidavit Format', url: 'https://edistrict.delhigovt.nic.in/downloads/affidavit.pdf' }
    ],
    faqs: [
      { question: 'What is the validity of Income Certificate in Delhi?', answer: 'Income Certificate issued by Delhi Revenue Dept is valid for 6 months from date of issue.' }
    ],
    relatedServices: ['caste-certificate-delhi', 'caste-certificate-delhi', 'ration-card-delhi']
  }
];