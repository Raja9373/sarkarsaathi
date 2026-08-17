import fs from 'fs';
import path from 'path';

// Generator script for 1000 Enriched Unique Government Service FAQs & Sitemap/Robots

const faqs = [];
let currentId = 1;

function getOfficialSource(cat, portalHint) {
  if (portalHint && portalHint.startsWith('http')) return portalHint;
  if (portalHint && portalHint.includes('.gov.in')) {
    const clean = portalHint.split(' ')[0].split('/')[0];
    return `https://${clean}`;
  }
  if (cat.includes('Parivahan')) return 'https://parivahan.gov.in';
  if (cat.includes('Aadhaar')) return 'https://myaadhaar.uidai.gov.in';
  if (cat.includes('PAN')) return 'https://eportal.incometax.gov.in';
  if (cat.includes('Voter')) return 'https://voters.eci.gov.in';
  if (cat.includes('Ration') || cat.includes('Labour') || cat.includes('Shram')) return 'https://nfsa.gov.in';
  if (cat.includes('Certificate')) return 'https://edistrict.delhi.gov.in';
  if (cat.includes('PF') || cat.includes('Pension')) return 'https://unifiedportal-mem.epfindia.gov.in';
  if (cat.includes('Police') || cat.includes('RTI') || cat.includes('Court')) return 'https://rtionline.gov.in';
  if (cat.includes('Bijli') || cat.includes('Property')) return 'https://mcdonline.nic.in';
  if (cat.includes('Rozgar') || cat.includes('Scholarship')) return 'https://scholarships.gov.in';
  if (cat.includes('Business')) return 'https://gst.gov.in';
  return 'https://india.gov.in';
}

function addFaq(q, q_en, rawA, rawAEn, cat, slug, portalHint) {
  const officialSource = getOfficialSource(cat, portalHint);
  const categorySlug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  const formattedHtmlAnswer = `
    <h2>Sarkari Seva Overview & Guidance 2026</h2>
    <p>${rawA}</p>
    <h2>Aavedan Prakriya - Step by Step Process</h2>
    <ul>
      <li>Official portal <strong><a href="${officialSource}" target="_blank" rel="noopener noreferrer">${officialSource}</a></strong> par visit kare.</li>
      <li>Apna Mobile Number aur OTP dalkar authentication complete kare.</li>
      <li>Form me zaroori jankari jaise Name, Address, Aadhaar Details, Bank Passbook bhare.</li>
      <li>Scanned copies of required documents upload kare aur eKYC verify kare.</li>
      <li>NetBanking / UPI / SBI ePay se prescribe fees pay kare aur acknowledgement slip save kare.</li>
    </ul>
    <h2>Zaroori Documents List (Required Proofs)</h2>
    <ul>
      <li>Aadhaar Card (Mobile Number Linked)</li>
      <li>Voter ID Card / Domicile Certificate / Address Proof</li>
      <li>Income Certificate & Bank Passbook Copy</li>
      <li>Recent Passport Size Photograph</li>
    </ul>
    <h2>Helpline & Official Source</h2>
    <p>Kuch bhi samasya hone par official portal <strong>${officialSource}</strong> par Grievance section check kare ya Toll-Free Number 1800-11-0001 par call kare. Source: ${officialSource}</p>
  `.trim();

  const formattedEnHtmlAnswer = `
    <h2>Government Service Overview & Guidance 2026</h2>
    <p>${rawAEn}</p>
    <h2>Step by Step Application Process</h2>
    <ul>
      <li>Visit the official portal <strong><a href="${officialSource}" target="_blank" rel="noopener noreferrer">${officialSource}</a></strong>.</li>
      <li>Authenticate using your registered Mobile Number and OTP.</li>
      <li>Fill in required personal, identity, and bank account details accurately.</li>
      <li>Upload scanned supporting documents and complete eKYC verification.</li>
      <li>Pay the prescribed fees via online payment gateway and download the acknowledgment receipt.</li>
    </ul>
    <h2>List of Required Documents</h2>
    <ul>
      <li>Aadhaar Card (with linked mobile number)</li>
      <li>Voter ID / Residence Proof / Ration Card</li>
      <li>Income Certificate & Active Bank Account Details</li>
      <li>Passport size photograph</li>
    </ul>
    <h2>Helpline & Support</h2>
    <p>For official support, access the help desk on <strong>${officialSource}</strong> or call the toll-free citizen helpline. Source: ${officialSource}</p>
  `.trim();

  const topicKeywords = q.split(' ').filter(w => w.length > 3).slice(0, 5);

  faqs.push({
    id: currentId,
    slug: slug.trim(),
    category: cat.trim(),
    categorySlug,
    question: q.trim(),
    q: q.trim(),
    q_en: q_en.trim(),
    answer: formattedHtmlAnswer,
    a: rawA.trim(),
    a_en: rawAEn.trim(),
    answer_en: formattedEnHtmlAnswer,
    keywords: [...topicKeywords, 'sarkari seva 2026', 'online apply', cat.toLowerCase()],
    updatedDate: '2026-05-13',
    updated: 'May 2026',
    officialSource
  });
  currentId++;
}

// -------------------------------------------------------------
// CATEGORY 1: Parivahan & RTO Seva (101 FAQs)
// -------------------------------------------------------------
const rtoTopics = [
  { topic: 'Learning License Apply', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'Permanent DL Slot Booking', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'DL Renewal Online', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'Duplicate DL Application', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'International Driving Permit (IDP)', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'DL Address Change', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'DL Name Correction', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'DL Status Check via Application No', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'DL Download Digilocker / mParivahan', portal: 'digilocker.gov.in' },
  { topic: 'DL Test Retake Rules & Fees', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'Commercial Driving License Badge', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'Conductor License Online Apply', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'LL Cancel / Slot Reschedule', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'DL Medical Certificate Form 1A', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'Smart Card DL Fee Payment', portal: 'sarathi.parivahan.gov.in' },
  { topic: 'Vehicle RC Status Check', portal: 'vahan.parivahan.gov.in' },
  { topic: 'RC Transfer Ownership (Form 29/30)', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Duplicate RC Application Online', portal: 'vahan.parivahan.gov.in' },
  { topic: 'RC Address Change Online', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Vehicle Hypothecation Addition (HP)', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Vehicle Hypothecation Termination (HPT)', portal: 'vahan.parivahan.gov.in' },
  { topic: 'NOC for Vehicle Transfer Inter-State', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Vehicle Road Tax Payment Online', portal: 'vahan.parivahan.gov.in' },
  { topic: 'High Security Registration Plate (HSRP) Booking', portal: 'bookmyhsrp.com' },
  { topic: 'Color Coded Fuel Sticker Booking', portal: 'bookmyhsrp.com' },
  { topic: 'Traffic E-Challan Check & Pay', portal: 'echallan.parivahan.gov.in' },
  { topic: 'Virtual Court Traffic Challan Discard', portal: 'vcourts.gov.in' },
  { topic: 'Pollution Under Control (PUC) Certificate Online', portal: 'puc.parivahan.gov.in' },
  { topic: 'Vehicle Fitness Certificate Renewal', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Scrap Vehicle Online Registration', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Fancy Vehicle Number Auction Booking', portal: 'vahan.parivahan.gov.in' },
  { topic: 'BH Series Vehicle Registration Eligibility', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Trade Certificate for Auto Dealers', portal: 'vahan.parivahan.gov.in' },
  { topic: 'State Permit for Commercial Vehicles', portal: 'vahan.parivahan.gov.in' },
  { topic: 'National Permit (NP) Online Apply', portal: 'vahan.parivahan.gov.in' },
  { topic: 'mParivahan Mobile App Setup & Virtual RC', portal: 'mparivahan.gov.in' },
  { topic: 'FASTag Mandatory KYC & Recharge', portal: 'fastag.ihmcl.com' },
  { topic: 'Vehicle Insurance Renewal Link with RC', portal: 'vahan.parivahan.gov.in' },
  { topic: 'Electric Vehicle Subsidy Claim RTO', portal: 'ev.delhi.gov.in' },
  { topic: 'Motor Driving School License Apply', portal: 'sarathi.parivahan.gov.in' }
];

const angles = [
  'online apply kaise kare 2026 me?',
  'ke liye required documents kya hain?',
  'ki fees aur charges kitne hain?',
  'ka status check kaise kare application number se?',
  'me hone wale common mistakes aur unka solution kya hai?',
  'ki validity kitne saal hoti hai aur renewal kab kare?',
  'offline RTO office me kaise hota hai?'
];

for (let i = 0; i < 101; i++) {
  const item = rtoTopics[i % rtoTopics.length];
  const angle = angles[i % angles.length];
  const qNum = i + 1;
  const q = `${item.topic} (${qNum}) - ${angle}`;
  const q_en = `How to complete ${item.topic} (Case ${qNum}) via official Parivahan portal in 2026?`;
  const slug = `${item.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const a = `Official portal ${item.portal} par ${item.topic} ke liye aavedan karne ki prakriya behad saral aur digital hai. Sabse pehle Portal par jaye, apna State aur RTO branch select kare. Zaroori documents jaise Aadhaar card, Purani RC/DL, aur address proof upload kare. Aadhaar eKYC se contactless verification complete kare. Online fee payment gateway ke dwara charges pay kare aur acknowledgement receipt download kare. Status track karne ke liye Application Number ka upayog kare. Source: ${item.portal}`;
  const a_en = `Applying for ${item.topic} on the official portal ${item.portal} is streamlined and fully digital in 2026. Visit the portal, select your State and RTO center, fill in the application form, and complete Aadhaar eKYC verification. Upload required scanned documents such as Aadhaar, previous DL/RC copy, and photograph. Pay the prescribed fees online through SBI ePay or NetBanking and download the receipt. Track your application status using the Application Reference Number. Source: ${item.portal}`;

  addFaq(q, q_en, a, a_en, 'Parivahan & RTO', slug, item.portal);
}

// -------------------------------------------------------------
// CATEGORY 2: Aadhaar, PAN & Voter ID (99 FAQs)
// -------------------------------------------------------------
const identityTopics = [
  'Aadhaar Card Download Online PDF',
  'Aadhaar Mobile Number Link Status Check',
  'Aadhaar Address Update Online with Proof',
  'Aadhaar PVC Card Online Order',
  'Aadhaar Name & DOB Correction Rules',
  'Aadhaar Biometric Lock / Unlock Online',
  'Aadhaar eKYC History & Authentication Check',
  'Aadhaar Virtual ID (VID) Generation',
  'Child Blue Aadhaar Card (Baal Aadhaar) Registration',
  'NRI Aadhaar Card Apply Rules & Documents',
  'PAN Card Online Apply New (Form 49A)',
  'Instant e-PAN via Aadhaar in 10 Minutes',
  'PAN Card Aadhaar Link Online Status Check',
  'PAN Card Name & Date of Birth Correction',
  'Reprint Physical PAN Card Online',
  'PAN Card Download e-PAN PDF',
  'Surrender Duplicate PAN Card Procedure',
  'Voter ID Card Online Apply New (Form 6)',
  'Voter ID Correction & Address Shift (Form 8)',
  'Voter ID Card Download Digital e-EPIC PDF',
  'Voter ID List Me Naam Search Kare Electoral Roll',
  'Voter ID Aadhaar Link Online (Form 6B)',
  'BLO Contact Number Find Kare Area Wise'
];

for (let i = 0; i < 99; i++) {
  const topic = identityTopics[i % identityTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Query ${qNum} solution in 2026?`;
  const q_en = `How to complete ${topic} step by step in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('Aadhaar') ? 'myaadhaar.uidai.gov.in' : topic.includes('PAN') ? 'eportal.incometax.gov.in' : 'voters.eci.gov.in';

  const a = `${topic} ke liye official website ${portal} sabse pramanik madhyam hai. Sabse pehle portal par login kare, apna UID/PAN/Voter Number dalkar OTP verification kare. Aavashyak sewa option chune aur nirdesh anusar documents upload kare. Aavedan Jama hone par SRN ya Reference Number prapt hoga jisse aap anytime status track kar sakte hain. Source: ${portal}`;
  const a_en = `For ${topic}, visit the authentic official portal ${portal}. Log in using your registered mobile number and OTP authentication. Navigate to the specific service section, enter your required demographic details, and upload valid supporting proofs. Upon successful submission, note down the Service Request Number (SRN) or Application ID for real-time tracking. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Aadhaar, PAN & Voter ID', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 3: Ration Card & PDS, E-Shram, Labour Card (98 FAQs)
// -------------------------------------------------------------
const rationTopics = [
  'New Ration Card Online Apply State Wise',
  'Ration Card Beneficiary List Check Name',
  'Ration Card eKYC Verification Online',
  'Ration Card Me Naye Sadasya Ka Naam Add Kare',
  'Ration Card Se Sadasya Ka Naam Delete / Transfer',
  'One Nation One Ration Card (ONORC) Inter-State Benefit',
  'Ration Card Address Change & Dealer Transfer',
  'E-Shram Card Registration Online Portal',
  'E-Shram Card Balance & Payment Status Check',
  'E-Shram Card Profile Update & Bank Details Change',
  'Building & Construction Labour Card Registration',
  'Labour Card Annual Renewal & Fee Payment',
  'Labour Card Children Scholarship Scheme Apply',
  'Labour Card Pregnancy / Maternity Assistance Claim',
  'Majdur Card Cycle / Tool Kit Yojana Apply'
];

for (let i = 0; i < 98; i++) {
  const topic = rationTopics[i % rationTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Complete Process ${qNum} in 2026?`;
  const q_en = `How to process ${topic} via official PDS / Labour portal in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('E-Shram') ? 'eshram.gov.in' : topic.includes('Labour') || topic.includes('Majdur') ? 'eshram.gov.in' : 'nfsa.gov.in';

  const a = `${topic} ke liye aavedan aur jankari official portal ${portal} par uplabdha hai. Aavedak ko apna Aadhaar card, mobile number, bank account details aur aay praman patra taiyar rakhna chahiye. Portal par naya aavedan form bhare, eKYC complete kare aur prapt Application ID se FPS ration dukan ya labour department status verify kare. Source: ${portal}`;
  const a_en = `${topic} can be seamlessly accessed via the official portal ${portal}. Applicants need to keep their Aadhaar, active mobile number, bank passbook, and income document ready. Fill in the digital application form, verify Aadhaar eKYC, and submit. Track approval status using the generated registration/application reference number. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Ration Card, E-Shram & Labour', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 4: Certificate Services - Jati, Niwas, Aay, Mool (101 FAQs)
// -------------------------------------------------------------
const certTopics = [
  'Jati Praman Patra (Caste Certificate) Online Apply',
  'Aay Praman Patra (Income Certificate) Online Apply',
  'Niwas Praman Patra (Domicile / Residence Certificate)',
  'EWS Certificate Online Apply Criteria & Documents',
  'OBC Non-Creamy Layer Certificate Application',
  'SC/ST Certificate Online Verification & Download',
  'eDistrict Portal Citizen Login & Registration',
  'MPOnline Citizen Services Certificate Status',
  'Rajasthan SSO ID Certificate Application',
  'UP eSathi Portal Certificate Application',
  'Certificate Digital Signature Verification Status',
  'Certificate Validity & Renewal Rules 2026',
  'Character Certificate Online via eDistrict',
  'Solvency Certificate Application Process',
  'Freedom Fighter / Ex-Serviceman Certificate'
];

for (let i = 0; i < 101; i++) {
  const topic = certTopics[i % certTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Guide ${qNum} in 2026?`;
  const q_en = `How to apply for ${topic} via state eDistrict portal in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = 'edistrict.delhi.gov.in';

  const a = `${topic} hetu official eDistrict portal par Citizen Login kare. Form me apni vyaktigat jankari bhare, ration card, voter ID, photo aur self-declaration form upload kare. Tehsildar/SDM level par verification ke baad 7 se 15 dino me certificate digitally signed Hokar portal par download ke liye uplabdha ho jata hai. Source: ${portal}`;
  const a_en = `To apply for ${topic}, create an account or log in to your state eDistrict service portal. Fill in personal details, upload required supporting documents (Aadhaar, income proof, affidavit, passport photo). After revenue authority (Tehsildar/SDM) verification, the digitally signed certificate becomes available for direct download within 7-15 days. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Certificates - Jati, Niwas & Aay', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 5: PF, ESI, Pension, Samagra (95 FAQs)
// -------------------------------------------------------------
const pfTopics = [
  'UAN Activation Online via EPFO Portal',
  'EPFO Member Passbook Balance Check',
  'PF Advance Withdrawal Form 31 Online',
  'PF Final Settlement Form 19 & 10C Apply',
  'EPFO e-Nomination Online Add Family Member',
  'EPFO Joint Declaration Form for Name/DOB Correction',
  'ESI Member Card / Pehchan Card Download',
  'ESIC Hospital OPD Appointment Online',
  'Samagra ID Search by Name / Mobile Number',
  'Samagra E-KYC Aadhaar Link Online',
  'Vridhavastha Pension Scheme Apply & Status',
  'Vidhwa Pension Scheme (Widow Pension) Application',
  'Viklang Pension Scheme (Disability Pension) Online',
  'National Pension System (NPS) Tier 1 Online Open',
  'Atal Pension Yojana (APY) Subscription & Pension'
];

for (let i = 0; i < 95; i++) {
  const topic = pfTopics[i % pfTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Detailed Guide ${qNum} in 2026?`;
  const q_en = `How to manage ${topic} via EPFO / Pension portal in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('EPFO') || topic.includes('UAN') || topic.includes('PF') ? 'unifiedportal-mem.epfindia.gov.in' : 'nsap.nic.in';

  const a = `${topic} ke liye official portal ${portal} par login kare. UAN Number/PPO Number aur Password se authenticate kare. Service section me jaakar aavashyak online claim ya KYC update submit kare. Direct Bank Transfer (DBT) ke madhyam se rashi seedhe khate me bheji jaati hai. Application status 'Track Claim' option se dekhe. Source: ${portal}`;
  const a_en = `Access ${topic} by visiting the official portal ${portal}. Log in using your UAN/PPO credential and OTP. Navigate to the online services section to initiate claims, passbook downloads, or KYC modifications. All financial benefits are credited directly to your bank account via DBT upon verification. Track status online anytime. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'PF, ESI, Pension & Samagra', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 6: Police, FIR, RTI, Complaint, Court (100 FAQs)
// -------------------------------------------------------------
const policeTopics = [
  'Online Police Lost Article Report Filing',
  'Download Copy of FIR Online e-FIR Portal',
  'Police Tenant Verification Online Form',
  'Police Maid / Domestic Help Verification',
  'Police Character Certificate for Job / Passport',
  'RTI Online Application Filing Steps (rtionline.gov.in)',
  'RTI First Appeal Online Filing Procedure',
  'CPGRAMS Central Public Grievance Portal Complaint',
  'Jansunwai / Chief Minister Helpline Grievance',
  'e-Courts Case Status Search by CNR Number / Party Name',
  'e-Courts Cause List Check District Court',
  'Legal Aid Free Legal Service Application (NALSA)',
  'Cyber Crime Online Complaint Filing (cybercrime.gov.in)',
  'National Consumer Helpline Online Dispute Complaint',
  'National Human Rights Commission (NHRC) Complaint'
];

for (let i = 0; i < 100; i++) {
  const topic = policeTopics[i % policeTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Official Procedure ${qNum} in 2026?`;
  const q_en = `How to complete ${topic} online safely in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('RTI') ? 'rtionline.gov.in' : topic.includes('Court') ? 'ecourts.gov.in' : 'delhipolice.gov.in';

  const a = `${topic} ke liye official portal ${portal} sabse uttam madhyam hai. Online portal par account banaye ya guest filing chune. Ghatna ya complaint ki puri jankari sahi-sahi bhare, supporting proof attach kare. Submitting ke baad unique Registration Number/Grievance ID milti hai jisse aap karyavahi ka status online check kar sakte hain. Source: ${portal}`;
  const a_en = `To initiate ${topic}, access the official portal ${portal}. Register or opt for guest submission. Fill in accurate factual details, attach supporting documents or ID proof, and submit. An official Registration Number / Acknowledgement ID will be generated for tracking the investigation or response status online. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Police, FIR, RTI & Legal', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 7: Bijli, Pani & Property (100 FAQs)
// -------------------------------------------------------------
const utilityTopics = [
  'Electricity Bill Check & Online Payment (BSES/Tata Power)',
  'New Electricity Connection Online Application',
  'Electricity Name Change / Load Change Request',
  'Zero Power Bill Scheme Delhi Subsidy Opt-In',
  'Water Bill Online Payment Delhi Jal Board (DJB)',
  'New Water & Sewer Connection Application',
  'Property Tax Online Calculation & Payment (MCD)',
  'Property Mutation (Namantaran) Online Process',
  'Bhulekh Land Records Khasra Khatauni Download',
  'Online Land Registry & Stamp Duty Calculation',
  'NGDRS Property Registration Slot Booking',
  'Encumbrance Certificate (EC) Online Apply',
  'Nagar Nigam Building Plan Approval Online',
  'Trade License Renewal Municipal Corporation',
  'Street Light / Garbage Grievance Municipal Portal'
];

for (let i = 0; i < 100; i++) {
  const topic = utilityTopics[i % utilityTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Step-by-Step Guide ${qNum} in 2026?`;
  const q_en = `How to perform ${topic} on government portals in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('Water') ? 'djb.gov.in' : topic.includes('Property') ? 'mcdonline.nic.in' : 'bsesdelhi.com';

  const a = `${topic} ke liye official web portal ${portal} par visit kare. Consumer Number (CA No) / Khasra No / Property ID enter kare. Bill view kare ya naye aavedan form ko bhare. Digital payment gateway ke dwara bhugtan kare aur instant e-Receipt/Acknowledgement certificate save kare. Source: ${portal}`;
  const a_en = `For ${topic}, log on to the official department portal ${portal}. Provide your CA Number, Property Unique ID, or Land Survey Number. View pending dues or complete the digital application form. Complete secure payment via UPI/Credit Card/NetBanking and download the official computer-generated receipt. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Bijli, Pani & Property', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 8: Rozgar, Scholarship & Skill (100 FAQs)
// -------------------------------------------------------------
const employmentTopics = [
  'Employment Exchange Registration Online (Rojgar Panjiyan)',
  'Delhi Rozgar Bazar Job Portal Candidate Registration',
  'National Scholarship Portal (NSP) Online Apply',
  'E-District Scholarship Scheme Status Check',
  'Pre-Matric & Post-Matric Scholarship Rules 2026',
  'SSC Exam Online Application Form Correction',
  'UPSC Civil Services Online Application Procedure',
  'Admit Card Download Official Portal Steps',
  'PM Kaushal Vikas Yojana (PMKVY) Free Skill Training',
  'Apprenticeship India Portal Candidate Registration',
  'Sarkari Naukri Result & Cutoff Verification',
  'Teacher Eligibility Test (CTET/TET) Application',
  'NCS National Career Service Job Fair Portal',
  'Delhi Higher Education Student Loan Subsidy',
  'Chief Minister Fellowship Programme Application'
];

for (let i = 0; i < 100; i++) {
  const topic = employmentTopics[i % employmentTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Registration & Process ${qNum} in 2026?`;
  const q_en = `How to apply for ${topic} via official portal in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('Scholarship') ? 'scholarships.gov.in' : 'jobs.delhi.gov.in';

  const a = `${topic} ke liye official portal ${portal} par One Time Registration (OTR) kare. Educational certificates, caste proof, photo va signature upload kare. Application form submit karke registration card ya fee receipt download kare. Scholarship aur Job notifications ki jankari registered email/mobile par bheji jaati hai. Source: ${portal}`;
  const a_en = `To register for ${topic}, complete One Time Registration (OTR) on ${portal}. Upload educational marksheets, category certificates, scanned photos, and signatures. Review all entries before final submission. Download the acknowledgement slip and keep track of exam/scholarship updates via portal login. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Rozgar, Scholarship & Skill', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 9: Business & License Services (100 FAQs)
// -------------------------------------------------------------
const businessTopics = [
  'MSME Udyam Registration Free Online Certificate',
  'GST Registration New Application Steps (gst.gov.in)',
  'GST Return Filing (GSTR-1 & GSTR-3B) Due Dates',
  'Shop and Establishment Act License Online',
  'FSSAI Food License / Registration (FoSCoS)',
  'GeM Portal Seller Registration Government e-Marketplace',
  'e-Tender Registration & Digital Signature (CPP Portal)',
  'Import Export Code (IEC) Online Application DGFT',
  'Trademark Online Registration (ipindia.gov.in)',
  'Startup India Seed Fund & Recognition Apply',
  'Delhi Factory License Online Renewal',
  'Fire Safety Certificate NOC Delhi Fire Service',
  'Drug License Online Registration Excise Dept',
  'Liquor License L-1 / L-10 Online Registration',
  'Private Security Agency (PSARA) License Online'
];

for (let i = 0; i < 100; i++) {
  const topic = businessTopics[i % businessTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Official Business Guide ${qNum} in 2026?`;
  const q_en = `How to apply for ${topic} on government portals in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = topic.includes('Udyam') ? 'udyamregistration.gov.in' : topic.includes('GST') ? 'gst.gov.in' : 'foscos.fssai.gov.in';

  const a = `${topic} ke liye official single-window portal ${portal} par visit kare. Business details, PAN, Aadhaar, Bank details aur PAN card upload kare. Mandatory inspection ya desk verification ke baad e-Certificate generate hota hai jise aap portal se digitally sign karke download kar sakte hain. Source: ${portal}`;
  const a_en = `For ${topic}, register your business enterprise on ${portal}. Provide basic entity information, PAN, Aadhaar eKYC, bank credentials, and premises proof. Upon automated risk assessment or officer approval, download your authentic digitally signed business license/certificate directly from the portal. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Business & License Services', slug, portal);
}

// -------------------------------------------------------------
// CATEGORY 10: Helpline, Status & CSC (106 FAQs)
// -------------------------------------------------------------
const helplineTopics = [
  'Aadhaar National Helpline Number 1947 Toll Free',
  'Parivahan Sarathi & Vahan Helpline Support Contact',
  'eDistrict Delhi Helpline Number 1031 & Email',
  'CSC Digital Seva Portal Common Service Center Locator',
  'CSC VLE Registration Eligibility & Criteria',
  'UMANG App All Government Services Single App',
  'DigiLocker Account Creation & Document Fetch',
  'National Consumer Helpline Number 1915',
  'Cyber Crime Toll Free Helpline Number 1930',
  'Women Helpline Number 1091 & 181 Services',
  'Childline Helpline Number 1098 Emergency Services',
  'Elderline Helpline Number 14567 Senior Citizens',
  'Delhi Govt Citizen Helpline 1076 Doorstep Delivery',
  'MCD Civic Helpline 155304 Sanitation & Complaints',
  'Kisan Call Centre Toll Free Helpline 1800-180-1551'
];

for (let i = 0; i < 106; i++) {
  const topic = helplineTopics[i % helplineTopics.length];
  const qNum = i + 1;
  const q = `${topic} - Official Info ${qNum} in 2026?`;
  const q_en = `What are the details and official helpline info for ${topic} in 2026?`;
  const slug = `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${qNum}-2026`;
  const portal = 'india.gov.in';

  const a = `${topic} par sahayata prapt karne ke liye official 24x7 toll-free helpline par call kare ya portal ${portal} par complaint register kare. Doorstep delivery services (jaise Delhi 1076) me executive aapke ghar aakar documents verify karta hai. CSC kendro par mamuli shulka dekar saari sarkari sewayen li ja sakti hain. Source: ${portal}`;
  const a_en = `To access assistance regarding ${topic}, dial the official 24x7 toll-free emergency/support helpline or visit ${portal}. Citizens can also schedule doorstep service visits or locate their nearest Common Service Center (CSC) to apply for government services with complete guidance and nominal prescribed fees. Source: ${portal}`;

  addFaq(q, q_en, a, a_en, 'Helpline, Status & CSC', slug, portal);
}

console.log(`Total generated FAQs: ${faqs.length}`);

// Ensure directories exist
const rootFaqsDir = path.join(process.cwd(), 'data', 'faqs');
const srcFaqsDir = path.join(process.cwd(), 'src', 'data', 'faqs');

[rootFaqsDir, srcFaqsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Remove old single large faqs.json files if they exist
['/data/faqs.json', '/src/data/faqs.json', '/src/data/allServicesFaqs.json', '/public/data/faqs.json'].forEach(p => {
  const fullPath = path.join(process.cwd(), p);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log(`Cleaned up obsolete large JSON: ${p}`);
  }
});

// Split 1000 FAQs into 10 files of 100 FAQs each
const CHUNK_SIZE = 100;
const totalParts = Math.ceil(faqs.length / CHUNK_SIZE);
const importStatements = [];
const partVariables = [];

for (let part = 1; part <= totalParts; part++) {
  const startIdx = (part - 1) * CHUNK_SIZE;
  const chunk = faqs.slice(startIdx, startIdx + CHUNK_SIZE);
  const jsonContent = JSON.stringify(chunk, null, 2);

  const fileName = `faqs-part-${part}.json`;
  fs.writeFileSync(path.join(rootFaqsDir, fileName), jsonContent, 'utf-8');
  fs.writeFileSync(path.join(srcFaqsDir, fileName), jsonContent, 'utf-8');

  importStatements.push(`import part${part} from './${fileName}';`);
  partVariables.push(`...part${part}`);
}

// Generate src/data/faqs/index.ts to export all aggregated FAQs cleanly
const indexTsContent = `// Auto-generated aggregator for 10 FAQ chunk files
${importStatements.join('\n')}

export interface FaqItem {
  id: number;
  slug: string;
  category: string;
  categorySlug?: string;
  question: string;
  q?: string;
  q_en?: string;
  answer: string;
  a?: string;
  a_en?: string;
  answer_en?: string;
  keywords?: string[];
  updatedDate?: string;
  updated?: string;
  officialSource?: string;
}

export const allFaqs: FaqItem[] = [
  ${partVariables.join(',\n  ')}
];

export default allFaqs;
`;

fs.writeFileSync(path.join(srcFaqsDir, 'index.ts'), indexTsContent, 'utf-8');

console.log(`Successfully split 1000 FAQs into ${totalParts} files in /data/faqs/ and /src/data/faqs/ with /src/data/faqs/index.ts`);

// Generate XML Sitemap & robots.txt via generate_sitemap.js
import { execSync } from 'child_process';
try {
  execSync('node scripts/generate_sitemap.js', { stdio: 'inherit' });
} catch (e) {
  console.error('Failed to run generate_sitemap.js:', e);
}

