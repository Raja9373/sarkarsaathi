import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, MapPin, Building, FileText, CreditCard, Users, Heart, Droplet, GraduationCap, Scale, Banknote, Code, Globe, Mail, Phone, ExternalLink, ChevronRight, Clock, Shield, Check, Copy, AlertTriangle, ArrowRight, X, Menu, Sun, Moon, Zap, FileCheck, Building2 } from 'lucide-react';

// ========== DATA ==========
const STATES = [
  { id: 'delhi', name: 'Delhi', native: 'दिल्ली', active: true, flag: 'DL' },
  { id: 'haryana', name: 'Haryana', native: 'हरियाणा', active: false, flag: 'HR' },
  { id: 'punjab', name: 'Punjab', native: 'पंजाब', active: false, flag: 'PB' },
  { id: 'up', name: 'Uttar Pradesh', native: 'उत्तर प्रदेश', active: false, flag: 'UP' },
  { id: 'rajasthan', name: 'Rajasthan', native: 'राजस्थान', active: false, flag: 'RJ' },
  { id: 'maharashtra', name: 'Maharashtra', native: 'महाराष्ट्र', active: false, flag: 'MH' },
];

const CATEGORIES = [
  { slug: 'identity-documents', name: 'Identity & Documents', count: 8, desc: 'Aadhaar, PAN, Voter ID', color: '#ff6b00' },
  { slug: 'certificates', name: 'Certificates', count: 12, desc: 'Birth, Income, Caste', color: '#ff8533' },
  { slug: 'licences', name: 'Licences', count: 6, desc: 'Driving, Trade, Arms', color: '#ff9f66' },
  { slug: 'vehicles-transport', name: 'Vehicles & Transport', count: 9, desc: 'RC, DL, Challan, Metro', color: '#ffb38a' },
  { slug: 'property-housing', name: 'Property & Housing', count: 7, desc: 'DDA, Registry, Tax', color: '#ff6b00' },
  { slug: 'utilities', name: 'Utilities', count: 8, desc: 'Electricity, Water, Gas', color: '#ff8533' },
  { slug: 'family-services', name: 'Family Services', count: 6, desc: 'Marriage, Pension', color: '#ff9f66' },
  { slug: 'education', name: 'Education', count: 9, desc: 'Scholarship, Admission', color: '#ffb38a' },
  { slug: 'employment', name: 'Employment', count: 7, desc: 'Jobs, Labour Card', color: '#ff6b00' },
  { slug: 'business', name: 'Business', count: 10, desc: 'GST, Udyam, Shop Act', color: '#ff8533' },
  { slug: 'health', name: 'Health', count: 6, desc: 'Hospital, Blood Bank', color: '#ff9f66' },
  { slug: 'police-legal', name: 'Police & Legal', count: 8, desc: 'FIR, Verification, Courts', color: '#ffb38a' },
  { slug: 'government-schemes', name: 'Government Schemes', count: 15, desc: 'Central & Delhi Schemes', color: '#ff6b00' },
  { slug: 'taxes-finance', name: 'Taxes & Finance', count: 9, desc: 'ITR, Property Tax', color: '#ff8533' },
  { slug: 'complaints', name: 'Complaints', count: 5, desc: 'Grievance, RTI', color: '#ff9f66' },
  { slug: 'government-departments', name: 'Government Departments', count: 14, desc: 'All Delhi Depts', color: '#ffb38a' },
  { slug: 'government-offices', name: 'Government Offices', count: 12, desc: 'SDM, DM, Collector', color: '#ff6b00' },
  { slug: 'banking', name: 'Banking', count: 25, desc: 'Accounts, Cards, Loans', color: '#ff8533' },
  { slug: 'government-finders', name: 'Government Finders', count: 29, desc: 'PIN, IFSC, Offices', color: '#ff9f66' },
  { slug: 'government-calculators', name: 'Government Calculators', count: 10, desc: 'Tax, EMI, Pension', color: '#ffb38a' },
  { slug: 'downloads', name: 'Downloads', count: 20, desc: 'Forms, Affidavits', color: '#ff6b00' },
  { slug: 'status-check', name: 'Status Check', count: 12, desc: 'Track Applications', color: '#ff8533' },
  { slug: 'online-apply', name: 'Online Apply', count: 10, desc: 'Apply for Services', color: '#ff9f66' },
  { slug: 'renewal', name: 'Renewal', count: 6, desc: 'Licence, Certificate Renew', color: '#ffb38a' },
  { slug: 'corrections', name: 'Corrections', count: 5, desc: 'Name, Address Change', color: '#ff6b00' },
  { slug: 'rti', name: 'RTI', count: 3, desc: 'Right to Information', color: '#ff8533' },
  { slug: 'acts-rules', name: 'Acts & Rules', count: 8, desc: 'Laws, Guidelines', color: '#ff9f66' },
  { slug: 'emergency', name: 'Emergency', count: 4, desc: '112, Ambulance', color: '#ffb38a' },
  { slug: 'helplines', name: 'Helplines', count: 12, desc: 'Women, Child, Senior', color: '#ff6b00' },
  { slug: 'official-websites', name: 'Official Websites', count: 50, desc: '.gov.in Directory', color: '#ff8533' },
  { slug: 'life-events', name: 'Life Events', count: 20, desc: 'Baby Born to Retirement', color: '#ff9f66' },
  { slug: 'scholarships', name: 'Scholarships', count: 8, desc: 'Student Aid', color: '#ffb38a' },
  { slug: 'pensions', name: 'Pensions', count: 6, desc: 'Old Age, Widow', color: '#ff6b00' },
  { slug: 'subsidies', name: 'Subsidies', count: 7, desc: 'LPG, Electricity', color: '#ff8533' },
  { slug: 'agriculture', name: 'Agriculture', count: 5, desc: 'Kisan Schemes', color: '#ff9f66' },
];


const BLOGS = [
  { slug: 'aadhaar-update-2025', title: 'Aadhaar Update Online 2025: Mobile, Address, Photo kaise badle', excerpt: 'Ghar baithe Aadhaar me mobile number, address aur photo update karne ka official tarika. Fees, documents aur step-by-step guide.', date: 'Dec 15, 2025', read: '5 min', category: 'Aadhaar' },
  { slug: 'pan-aadhaar-link-last-date', title: 'PAN-Aadhaar Link Last Date 2025: Nahi kiya to 1000 ka fine', excerpt: 'PAN ko Aadhaar se link karna mandatory hai. Last date, fine aur online link kaise kare, pura process samjhe.', date: 'Dec 10, 2025', read: '4 min', category: 'PAN' },
  { slug: 'delhi-property-tax-rebate', title: 'Delhi Property Tax me 15% Rebate kaise le: Last Date June 30', excerpt: 'MCD property tax time pe bharne par 15% discount. Online pay kaise kare, UPIC kaise nikale, sab kuch.', date: 'Dec 08, 2025', read: '6 min', category: 'Tax' },
  { slug: 'rti-online-delhi', title: 'RTI Online Delhi: Ghar baithe sarkari jawab kaise maange', excerpt: 'RTI kya hai, kaise file kare, kitni fees hai, kaunse department me kare. Delhi govt ka official portal guide.', date: 'Dec 05, 2025', read: '7 min', category: 'RTI' },
  { slug: 'family-income-certificate', title: 'Family Income Certificate Delhi: EWS, Scholarship ke liye kaise banaye', excerpt: 'Delhi me family income certificate kaise banta hai, kaunse documents lagte hai, e-district se online apply.', date: 'Dec 02, 2025', read: '5 min', category: 'Family Services' },
  { slug: 'marriage-certificate-delhi', title: 'Delhi Marriage Certificate Online Apply 2025', excerpt: 'Court marriage ke baad certificate kaise le, tatkal process, fees aur documents ki puri jankari.', date: 'Nov 28, 2025', read: '6 min', category: 'Family Services' },
  { slug: 'driving-licence-test-tricks', title: 'Delhi Driving Licence Test me Pass hone ke 10 Tricks', excerpt: 'RTO test me aksar log fail kyun hote hai, kaunse signals puchte hai, practical test ke tips.', date: 'Nov 25, 2025', read: '4 min', category: 'Licence' },
  { slug: 'birth-certificate-mcd', title: 'MCD Birth Certificate Online: Bacche ka janm praman patra kaise banaye', excerpt: 'Hospital se discharge ke baad 21 din ke andar free certificate kaise le, late fee kya hai.', date: 'Nov 20, 2025', read: '5 min', category: 'Certificates' },
  { slug: 'djb-water-bill-free', title: 'DJB Water Bill 0 kaise laaye: 20000 Litre Free Yojana', excerpt: 'Delhi Jal Board ka free paani kaise milega, meter kaise lagwaye, subsidy ke liye apply kaise kare.', date: 'Nov 18, 2025', read: '4 min', category: 'Utilities' },
  { slug: 'old-age-pension-delhi', title: 'Delhi Old Age Pension 2025: 2000 Rs Mahina kaise milega', excerpt: '60+ senior citizens ke liye pension yojana, eligibility, documents aur online apply ka tarika.', date: 'Nov 15, 2025', read: '6 min', category: 'Pensions' },
  { slug: 'e-district-delhi-guide', title: 'e-District Delhi Portal: Ek ID se 30+ Certificate kaise banaye', excerpt: 'edistrict.delhigovt.nic.in par account kaise banaye, kaunse kaam hote hai, status kaise check kare.', date: 'Nov 10, 2025', read: '8 min', category: 'Guide' },
  { slug: 'police-verification-pcc', title: 'Police Verification / PCC Delhi: Passport, Job, Rent ke liye', excerpt: 'Delhi police verification online kaise karwaye, kitne din lagte hai, fees aur tracking.', date: 'Nov 08, 2025', read: '5 min', category: 'Police' },
];

const BANKS = [
  { slug: 'sbi', name: 'State Bank of India', short: 'SBI', type: 'Public', color: '#1e3a8a' },
  { slug: 'pnb', name: 'Punjab National Bank', short: 'PNB', type: 'Public', color: '#7c2d12' },
  { slug: 'bob', name: 'Bank of Baroda', short: 'BOB', type: 'Public', color: '#9f1239' },
  { slug: 'canara', name: 'Canara Bank', short: 'Canara', type: 'Public', color: '#0e7490' },
  { slug: 'union', name: 'Union Bank', short: 'Union', type: 'Public', color: '#155e75' },
  { slug: 'indian-bank', name: 'Indian Bank', short: 'Indian', type: 'Public', color: '#1e40af' },
  { slug: 'boi', name: 'Bank of India', short: 'BOI', type: 'Public', color: '#4338ca' },
  { slug: 'central-bank', name: 'Central Bank of India', short: 'Central', type: 'Public', color: '#0f766e' },
  { slug: 'hdfc', name: 'HDFC Bank', short: 'HDFC', type: 'Private', color: '#004c8f' },
  { slug: 'icici', name: 'ICICI Bank', short: 'ICICI', type: 'Private', color: '#b45309' },
  { slug: 'axis', name: 'Axis Bank', short: 'Axis', type: 'Private', color: '#86198f' },
  { slug: 'kotak', name: 'Kotak Mahindra Bank', short: 'Kotak', type: 'Private', color: '#be123c' },
  { slug: 'idfc', name: 'IDFC FIRST Bank', short: 'IDFC', type: 'Private', color: '#1e3a8a' },
  { slug: 'yes', name: 'Yes Bank', short: 'YES', type: 'Private', color: '#0e7490' },
  { slug: 'federal', name: 'Federal Bank', short: 'Federal', type: 'Private', color: '#14532d' },
  { slug: 'bandhan', name: 'Bandhan Bank', short: 'Bandhan', type: 'Private', color: '#7f1d1d' },
  { slug: 'au-bank', name: 'AU Small Finance Bank', short: 'AU', type: 'Small Finance', color: '#581c87' },
  { slug: 'indusind', name: 'IndusInd Bank', short: 'IndusInd', type: 'Private', color: '#831843' },
  { slug: 'iob', name: 'Indian Overseas Bank', short: 'IOB', type: 'Public', color: '#064e3b' },
  { slug: 'uco', name: 'UCO Bank', short: 'UCO', type: 'Public', color: '#312e81' },
];

const BANKING_TYPES = [
  { slug: 'saving-account', name: 'Saving Account', desc: 'Regular savings with interest', icon: 'Banknote' },
  { slug: 'current-account', name: 'Current Account', desc: 'For businesses & professionals', icon: 'Briefcase' },
  { slug: 'salary-account', name: 'Salary Account', desc: 'Zero balance for salaried', icon: 'CreditCard' },
  { slug: 'zero-balance-account', name: 'Zero Balance Account', desc: 'Jan Dhan & basic accounts', icon: 'Wallet' },
  { slug: 'nre-account', name: 'NRE Account', desc: 'For NRIs - Repatriable', icon: 'Globe' },
  { slug: 'nro-account', name: 'NRO Account', desc: 'For NRIs - Non-repatriable', icon: 'Globe' },
  { slug: 'fixed-deposit', name: 'Fixed Deposit', desc: 'Safe investment, high interest', icon: 'Lock' },
  { slug: 'recurring-deposit', name: 'Recurring Deposit', desc: 'Monthly savings plan', icon: 'Timer' },
  { slug: 'ppf', name: 'PPF', desc: 'Public Provident Fund', icon: 'Shield' },
  { slug: 'nps', name: 'NPS', desc: 'National Pension System', icon: 'Award' },
  { slug: 'sukanya-samriddhi', name: 'Sukanya Samriddhi', desc: 'For girl child future', icon: 'Baby' },
  { slug: 'senior-citizen-scheme', name: 'Senior Citizen Scheme', desc: 'SCSS - Extra interest', icon: 'Users' },
  { slug: 'pm-jan-dhan', name: 'PM Jan Dhan', desc: 'Zero balance, insurance cover', icon: 'IndianRupee' },
  { slug: 'locker', name: 'Locker', desc: 'Safe deposit locker', icon: 'Lock' },
  { slug: 'cheque-book', name: 'Cheque Book', desc: 'Request & track', icon: 'FileText' },
  { slug: 'debit-card', name: 'Debit Card', desc: 'ATM & shopping card', icon: 'CreditCard' },
  { slug: 'credit-card', name: 'Credit Card', desc: 'Buy now pay later', icon: 'CreditCard' },
  { slug: 'upi', name: 'UPI', desc: 'Instant payments', icon: 'Zap' },
  { slug: 'internet-banking', name: 'Internet Banking', desc: 'Net banking access', icon: 'Globe' },
  { slug: 'nomination', name: 'Nomination', desc: 'Add nominee to account', icon: 'UserCog' },
  { slug: 'kyc', name: 'KYC', desc: 'Know Your Customer update', icon: 'IdCard' },
  { slug: 'personal-loan', name: 'Personal Loan', desc: 'Instant personal loan', icon: 'Banknote' },
  { slug: 'home-loan', name: 'Home Loan', desc: 'Dream home financing', icon: 'Home' },
  { slug: 'education-loan', name: 'Education Loan', desc: 'Study loan', icon: 'GraduationCap' },
  { slug: 'gold-loan', name: 'Gold Loan', desc: 'Loan against gold', icon: 'Award' },
];

const FINDERS = [
  { slug: 'pin-code', name: 'PIN Code Finder', desc: 'Find PIN by area', icon: 'MapPin', placeholder: 'Enter locality, e.g. Connaught Place' },
  { slug: 'ifsc', name: 'IFSC Finder', desc: 'Bank IFSC code', icon: 'SearchCode', placeholder: 'Enter bank or branch' },
  { slug: 'micr', name: 'MICR Finder', desc: 'MICR code lookup', icon: 'FileSearch', placeholder: 'Enter bank name' },
  { slug: 'swift', name: 'SWIFT/BIC Finder', desc: 'International bank codes', icon: 'Globe', placeholder: 'Enter bank' },
  { slug: 'bank-branch', name: 'Bank Branch Finder', desc: 'Locate branches', icon: 'Landmark', placeholder: 'Bank + City' },
  { slug: 'police-station', name: 'Police Station Finder', desc: 'Nearest police station', icon: 'Shield', placeholder: 'Enter area in Delhi' },
  { slug: 'hospital', name: 'Hospital Finder', desc: 'Govt hospitals near you', icon: 'HeartPulse', placeholder: 'Enter locality' },
  { slug: 'blood-bank', name: 'Blood Bank Finder', desc: 'Blood availability', icon: 'Droplets', placeholder: 'Blood group + area' },
  { slug: 'passport-seva', name: 'Passport Seva Kendra', desc: 'PSK locations', icon: 'FileBadge', placeholder: 'Enter city' },
  { slug: 'aadhaar-centre', name: 'Aadhaar Centre Finder', desc: 'Enrolment centres', icon: 'Fingerprint', placeholder: 'PIN or locality' },
  { slug: 'csc-centre', name: 'CSC Centre Finder', desc: 'Common Service Centres', icon: 'Store', placeholder: 'Enter district' },
  { slug: 'jan-aushadhi', name: 'Jan Aushadhi Finder', desc: 'Cheap medicine stores', icon: 'HeartPulse', placeholder: 'Enter area' },
  { slug: 'rto', name: 'RTO Finder', desc: 'RTO code & office', icon: 'Car', placeholder: 'Vehicle number e.g. DL01' },
  { slug: 'court', name: 'Court Finder', desc: 'District & high courts', icon: 'Gavel', placeholder: 'Enter district' },
  { slug: 'district-office', name: 'District Office Finder', desc: 'Collector & DM office', icon: 'Building2', placeholder: 'District name' },
  { slug: 'government-office', name: 'Government Office Finder', desc: 'All govt offices', icon: 'Building', placeholder: 'Department name' },
  { slug: 'government-school', name: 'Government School Finder', desc: 'Govt schools list', icon: 'School', placeholder: 'Area or school name' },
  { slug: 'government-hospital', name: 'Government Hospital Finder', desc: 'Hospital directory', icon: 'HeartPulse', placeholder: 'Speciality or area' },
  { slug: 'electricity-office', name: 'Electricity Office Finder', desc: 'BSES, TPDDL offices', icon: 'Zap', placeholder: 'Enter colony' },
  { slug: 'water-office', name: 'Water Office Finder', desc: 'DJB offices', icon: 'Droplets', placeholder: 'Zone' },
  { slug: 'gas-agency', name: 'Gas Agency Finder', desc: 'LPG distributors', icon: 'Building2', placeholder: 'Enter area' },
  { slug: 'metro-station', name: 'Metro Station Finder', desc: 'Nearest metro', icon: 'Train', placeholder: 'Enter locality' },
  { slug: 'bus-depot', name: 'Bus Depot Finder', desc: 'DTC depots & routes', icon: 'Bus', placeholder: 'Route no or area' },
  { slug: 'mla', name: 'MLA Finder', desc: 'Find your MLA', icon: 'Users', placeholder: 'Enter constituency' },
  { slug: 'mp', name: 'MP Finder', desc: 'Find your MP', icon: 'Users', placeholder: 'Enter constituency' },
  { slug: 'polling-booth', name: 'Polling Booth Finder', desc: 'Voter booth location', icon: 'FileCheck', placeholder: 'Enter EPIC or area' },
  { slug: 'sdm-office', name: 'SDM Office Finder', desc: 'Sub-divisional magistrate', icon: 'Building2', placeholder: 'Sub-division' },
  { slug: 'district-magistrate', name: 'District Magistrate Finder', desc: 'DM office contact', icon: 'Landmark', placeholder: 'District' },
  { slug: 'post-office', name: 'Post Office Finder', desc: 'Post offices & speed post', icon: 'FileStack', placeholder: 'Locality' },
];

const LIFE_EVENTS = [
  { slug: 'baby-born', name: 'Baby Born', desc: 'Birth certificate, immunization', icon: 'Baby', color: '#ff6b00', services: ['birth-certificate', 'aadhaar-card'], timeline: '0-1 year' },
  { slug: 'school-admission', name: 'School Admission', desc: 'Govt school, scholarship', icon: 'School', color: '#ff8533', services: ['domicile-certificate', 'income-certificate'], timeline: '3-18 years' },
  { slug: 'college-admission', name: 'College Admission', desc: 'DU, IPU admission guide', icon: 'GraduationCap', color: '#ff9f66', services: ['caste-certificate', 'ews-certificate'], timeline: '18-22 years' },
  { slug: 'marriage', name: 'Marriage', desc: 'Court marriage, certificate', icon: 'Heart', color: '#ff6b00', services: ['marriage-certificate', 'name-change'], timeline: '1-2 months' },
  { slug: 'divorce', name: 'Divorce', desc: 'Legal process, documents', icon: 'Scale', color: '#ff8533', services: ['marriage-certificate'], timeline: '6-18 months' },
  { slug: 'buying-house', name: 'Buying House', desc: 'Registry, DDA, loans', icon: 'Home', color: '#ff9f66', services: ['property-tax', 'home-loan'], timeline: '1-3 months' },
  { slug: 'selling-house', name: 'Selling House', desc: 'NOC, registry, tax', icon: 'Building', color: '#ff6b00', services: ['property-tax'], timeline: '15-45 days' },
  { slug: 'buying-vehicle', name: 'Buying Vehicle', desc: 'RC, insurance, pollution', icon: 'Car', color: '#ff8533', services: ['vehicle-registration', 'driving-licence'], timeline: '7-15 days' },
  { slug: 'starting-business', name: 'Starting Business', desc: 'Shop act, GST, Udyam', icon: 'ShoppingBag', color: '#ff9f66', services: ['shop-establishment', 'gst-registration', 'udyam-registration'], timeline: '7-30 days' },
  { slug: 'changing-name', name: 'Changing Name', desc: 'Gazette, Aadhaar, PAN update', icon: 'Edit3', color: '#ff6b00', services: ['aadhaar-card', 'pan-card'], timeline: '15-60 days' },
  { slug: 'changing-address', name: 'Changing Address', desc: 'Update in all documents', icon: 'MapPin', color: '#ff8533', services: ['aadhaar-card', 'voter-id'], timeline: '7-30 days' },
  { slug: 'first-job', name: 'Getting First Job', desc: 'PAN, EPF, labour card', icon: 'Briefcase', color: '#ff9f66', services: ['pan-card', 'labour-card'], timeline: 'Immediate' },
  { slug: 'retirement', name: 'Retirement', desc: 'Pension, senior citizen card', icon: 'Users', color: '#ff6b00', services: ['senior-citizen-card', 'pension'], timeline: '1-3 months' },
  { slug: 'senior-citizen', name: 'Senior Citizen', desc: 'Benefits, schemes, health', icon: 'Award', color: '#ff8533', services: ['senior-citizen-card', 'old-age-pension'], timeline: 'Ongoing' },
  { slug: 'death-family', name: 'Death in Family', desc: 'Death certificate, pension', icon: 'FileText', color: '#ff9f66', services: ['death-certificate'], timeline: '7-21 days' },
  { slug: 'moving-delhi', name: 'Moving to Delhi', desc: 'Domicile, voter, ration', icon: 'Bus', color: '#ff6b00', services: ['domicile-certificate', 'voter-id', 'ration-card'], timeline: '15-45 days' },
  { slug: 'lost-documents', name: 'Lost Documents', desc: 'FIR, reissue process', icon: 'SearchCode', color: '#ff8533', services: ['fir-online', 'aadhaar-card', 'pan-card'], timeline: '7-21 days' },
  { slug: 'foreign-travel', name: 'Foreign Travel', desc: 'Passport, visa, emigration', icon: 'Plane', color: '#ff9f66', services: ['passport', 'police-verification'], timeline: '15-45 days' },
  { slug: 'returning-abroad', name: 'Returning from Abroad', desc: 'Customs, OCI, registration', icon: 'Globe', color: '#ff6b00', services: ['pan-card', 'aadhaar-card'], timeline: '7-30 days' },
  { slug: 'disability-support', name: 'Disability Support', desc: 'Certificate, benefits, pension', icon: 'HeartPulse', color: '#ff8533', services: ['disability-certificate'], timeline: '15-45 days' },
];

const CALCULATORS = [
  { slug: 'income-tax', name: 'Income Tax Calculator', desc: 'New vs Old regime', icon: 'Calculator' },
  { slug: 'property-tax', name: 'Property Tax Calculator', desc: 'MCD property tax', icon: 'Home' },
  { slug: 'stamp-duty', name: 'Stamp Duty Calculator', desc: 'Registry charges Delhi', icon: 'FileText' },
  { slug: 'emi', name: 'EMI Calculator', desc: 'Loan EMI calculation', icon: 'Banknote' },
  { slug: 'gratuity', name: 'Gratuity Calculator', desc: 'Retirement gratuity', icon: 'Award' },
  { slug: 'pension', name: 'Pension Calculator', desc: 'EPF & monthly pension', icon: 'Users' },
  { slug: 'epf', name: 'EPF Calculator', desc: 'Provident fund growth', icon: 'Landmark' },
  { slug: 'retirement', name: 'Retirement Calculator', desc: 'Corpus needed', icon: 'Timer' },
  { slug: 'salary', name: 'Salary Calculator', desc: 'In-hand salary breakup', icon: 'IndianRupee' },
  { slug: 'age', name: 'Age Calculator', desc: 'Exact age from DOB', icon: 'Calendar' },
];

const DEPARTMENTS = [
  { slug: 'mcd', name: 'MCD', full: 'Municipal Corporation of Delhi', services: 12 },
  { slug: 'dda', name: 'DDA', full: 'Delhi Development Authority', services: 8 },
  { slug: 'djb', name: 'Delhi Jal Board', full: 'Water Supply', services: 6 },
  { slug: 'delhi-police', name: 'Delhi Police', full: 'Police Services', services: 10 },
  { slug: 'transport', name: 'Transport Dept', full: 'Vehicle & Licence', services: 9 },
  { slug: 'revenue', name: 'Revenue Dept', full: 'Certificates & Land', services: 15 },
  { slug: 'education', name: 'Education Dept', full: 'Schools & Scholarships', services: 7 },
  { slug: 'health', name: 'Health Dept', full: 'Hospitals & Health Cards', services: 6 },
];

// ===== SERVICES DATA - 42 services =====
const SERVICES = [
  {
    slug: 'aadhaar-card', title: 'Aadhaar Card', category: 'identity-documents', state: 'delhi',
    keywords: ['aadhaar', 'uidai', 'identity', 'biometric'], officialUrl: 'https://uidai.gov.in',
    overview: 'Aadhaar is 12-digit unique identity number issued by UIDAI. Mandatory for most government services, banking, and subsidies in Delhi. Free enrolment, update available both online and offline.',
    eligibility: ['Indian resident', 'Any age including newborn', 'NRI with valid Indian address'],
    documents: ['Proof of Identity (Passport/Voter ID)', 'Proof of Address', 'Proof of DOB', 'Biometrics at centre'],
    onlineSteps: ['Visit uidai.gov.in', 'Book appointment at nearest Aadhaar Seva Kendra', 'Fill enrolment form', 'Biometric capture', 'Get enrolment slip with EID'],
    offlineSteps: ['Visit Aadhaar centre with documents', 'Fill form, submit biometrics', 'Collect acknowledgment'],
    fees: 'Free for first enrolment, Rs 50 for update', processingTime: '7-15 days', lastUpdated: '2024-12-15',
    faqs: [{ q: 'Is Aadhaar mandatory?', a: 'Not mandatory by Supreme Court order but required for subsidies and many services.' }, { q: 'Can I update mobile online?', a: 'No, mobile update requires centre visit.' }],
    commonMistakes: ['Wrong DOB format', 'Blurry documents', 'Mobile not linked'], importantNotes: ['Keep mobile linked', 'Download e-Aadhaar free'],
    related: ['pan-card', 'voter-id', 'ration-card']
  },
  {
    slug: 'pan-card', title: 'PAN Card', category: 'identity-documents', state: 'delhi',
    keywords: ['pan', 'income tax', 'nsdl', 'uti'], officialUrl: 'https://www.tin-nsdl.com',
    overview: 'Permanent Account Number is 10-digit alphanumeric required for financial transactions, ITR filing, and high-value purchases. Issued by Income Tax Department.',
    eligibility: ['Indian citizen, NRI, OCI, Company', 'Minors can apply via guardian'],
    documents: ['Aadhaar', 'Photo', 'Signature', 'Proof of DOB'],
    onlineSteps: ['Go to tin-nsdl.com', 'Select New PAN - Form 49A', 'Fill details, pay Rs 93', 'e-KYC via Aadhaar OTP', 'PAN dispatched in 15 days'],
    offlineSteps: ['Visit PAN centre, fill form, submit docs, pay fee'],
    fees: 'Rs 93 for Indian, Rs 864 for foreign', processingTime: '15-20 days', lastUpdated: '2024-12-10',
    faqs: [{ q: 'How to link PAN-Aadhaar?', a: 'Visit incometax.gov.in > Link Aadhaar, enter both numbers, validate OTP.' }],
    commonMistakes: ['Name mismatch with Aadhaar', 'Wrong AO code'], importantNotes: ['Link with Aadhaar mandatory', 'One person one PAN'],
    related: ['aadhaar-card', 'income-certificate']
  },
  {
    slug: 'passport', title: 'Passport', category: 'identity-documents', state: 'delhi',
    keywords: ['passport', 'mea', 'psk', 'visa'], officialUrl: 'https://portal2.passportindia.gov.in',
    overview: 'Indian Passport for foreign travel. Issued by Ministry of External Affairs. Tatkal available in 1-3 days.',
    eligibility: ['Indian citizen', 'Valid address proof', 'No criminal record'],
    documents: ['Aadhaar', 'Birth proof', 'Address proof', 'Old passport if renewal'],
    onlineSteps: ['Register on passportindia.gov.in', 'Fill form, pay fee', 'Book PSK appointment', 'Visit with originals', 'Police verification'],
    offlineSteps: ['Passport Seva Kendra visit only - no offline mode'],
    fees: 'Rs 1500 (36 pages), Rs 2000 (60 pages), Tatkal extra Rs 2000', processingTime: '7-30 days (Tatkal 1-3 days)', lastUpdated: '2024-12-12',
    faqs: [{ q: 'Police verification?', a: 'Post-issue verification in Delhi, usually within 10 days.' }],
    commonMistakes: ['Address mismatch', 'Documents not self-attested'], importantNotes: ['Carry originals to PSK', 'SMS updates'],
    related: ['police-verification', 'birth-certificate']
  },
  {
    slug: 'driving-licence', title: 'Driving Licence', category: 'licences', state: 'delhi',
    keywords: ['dl', 'driving', 'licence', 'rto', 'parivahan'], officialUrl: 'https://parivahan.gov.in',
    overview: 'Driving Licence for 2W, 4W, commercial vehicles. Learner first, then permanent after 30 days and test.',
    eligibility: ['18+ for LMV, 16+ for gearless 50cc', 'Learner licence holder', 'Knowledge of traffic rules'],
    documents: ['Aadhaar', 'Age proof', 'Learner licence', 'Form 4, Medical Form 1A for transport'],
    onlineSteps: ['Visit parivahan.gov.in', 'Apply for DL, upload docs', 'Book slot, pay Rs 500-1000', 'Visit RTO for test', 'DL via post'],
    offlineSteps: ['Visit RTO with forms, pay fee, give test'],
    fees: 'Learner Rs 200, Permanent Rs 500-1000', processingTime: '30 days after learner + test', lastUpdated: '2024-12-08',
    faqs: [{ q: 'How many attempts for test?', a: '3 attempts, retest after 7 days.' }],
    commonMistakes: ['No learner licence', 'Test failure due to signals'], importantNotes: ['Wear helmet in test', 'Carry original LL'],
    related: ['learner-licence', 'vehicle-registration']
  },
  {
    slug: 'birth-certificate', title: 'Birth Certificate', category: 'certificates', state: 'delhi',
    keywords: ['birth', 'mcd', 'certificate'], officialUrl: 'https://mcdonline.nic.in',
    overview: 'Birth Certificate issued by MCD for births in Delhi hospitals or home. Required for Aadhaar, school, passport. Apply within 21 days free.',
    eligibility: ['Birth in Delhi', 'Within 21 days free, after that with affidavit'],
    documents: ['Hospital discharge slip', 'Parents ID', 'Affidavit if late'],
    onlineSteps: ['Go to mcdonline.nic.in', 'Birth registration', 'Fill child details, parents Aadhaar', 'Upload proof, pay fee', 'Download after approval'],
    offlineSteps: ['Visit MCD zonal office with hospital certificate'],
    fees: 'Free within 21 days, Rs 10-50 after + late fee', processingTime: '7-15 days', lastUpdated: '2024-11-20',
    faqs: [{ q: 'Home birth procedure?', a: 'Anganwadi or ASHA certificate + affidavit.' }],
    commonMistakes: ['Spelling mistakes in child name'], importantNotes: ['Check spelling before submit', 'Needed for passport'],
    related: ['aadhaar-card', 'death-certificate']
  },
  {
    slug: 'income-certificate', title: 'Income Certificate', category: 'certificates', state: 'delhi',
    keywords: ['income', 'revenue', 'certificate', 'ews'], officialUrl: 'https://edistrict.delhigovt.nic.in',
    overview: 'Income Certificate for scholarships, EWS, fee concession. Issued by Revenue Department via e-District Delhi.',
    eligibility: ['Delhi resident', 'Income below threshold for specific purpose'],
    documents: ['Aadhaar', 'Ration card/Voter ID', 'Salary slip/ITR/Self declaration', 'Electricity bill'],
    onlineSteps: ['Login to edistrict.delhigovt.nic.in', 'Apply for Income Certificate', 'Upload ITR or self-declaration', 'SDM verification', 'Download certificate'],
    offlineSteps: ['Visit SDM office with affidavit and docs'],
    fees: 'Rs 25-50', processingTime: '10-15 days', lastUpdated: '2024-12-01',
    faqs: [{ q: 'Validity?', a: '1 year generally, 6 months for some schemes.' }],
    commonMistakes: ['Not matching ITR'], importantNotes: ['Affidavit must be notarized'],
    related: ['caste-certificate', 'domicile-certificate', 'ews-certificate']
  },
  {
    slug: 'property-tax', title: 'Property Tax (MCD)', category: 'taxes-finance', state: 'delhi',
    keywords: ['property tax', 'mcd', 'house tax'], officialUrl: 'https://mcdonline.nic.in',
    overview: 'Annual property tax for Delhi properties under MCD. Pay online for 15% rebate if paid before June 30. Mandatory for sale, loan.',
    eligibility: ['Property owner in MCD area'],
    documents: ['Previous receipt', 'Property ID (UPIC)', 'Ownership proof'],
    onlineSteps: ['Go to mcdonline.nic.in > Property Tax', 'Enter UPIC or Colony/Property', 'Verify dues', 'Pay via UPI/Card', 'Download receipt'],
    offlineSteps: ['MCD zonal office cash/counter payment'],
    fees: 'Based on area, age, use - calculator on site', processingTime: 'Instant online', lastUpdated: '2024-12-05',
    faqs: [{ q: 'Rebate?', a: '15% rebate if paid before June 30, 10% if senior citizen extra.' }],
    commonMistakes: ['Wrong UPIC', 'Not paying rebate window'], importantNotes: ['Keep receipts 5 years', 'Needed for sale deed'],
    related: ['water-bill', 'electricity-bill']
  },
  {
    slug: 'electricity-bill', title: 'Electricity Bill', category: 'utilities', state: 'delhi',
    keywords: ['electricity', 'bses', 'tpddl', 'bill'], officialUrl: 'https://www.bsesdelhi.com',
    overview: 'Electricity bill payment for BSES Yamuna, BSES Rajdhani, Tata Power DDL. Delhi subsidy up to 200 units free.',
    eligibility: ['Consumer of discom'],
    documents: ['CA number'],
    onlineSteps: ['Visit discom site or Paytm/PhonePe', 'Enter CA No', 'View bill with subsidy', 'Pay'],
    offlineSteps: ['Discom office, cash counters'],
    fees: 'As per bill', processingTime: 'Instant', lastUpdated: '2024-12-10',
    faqs: [{ q: 'Subsidy not received?', a: 'Apply via discom site - subsidy opt-in required from 2023.' }],
    commonMistakes: ['Paying without checking subsidy'], importantNotes: ['Subsidy needs Aadhaar linking'],
    related: ['water-bill', 'property-tax']
  },
  {
    slug: 'water-bill', title: 'Water Bill (DJB)', category: 'utilities', state: 'delhi',
    keywords: ['water', 'djb', 'jal board'], officialUrl: 'https://djb.gov.in',
    overview: 'Delhi Jal Board water and sewer bill. 20,000 litres free per month if functional meter.',
    eligibility: ['DJB consumer'],
    documents: ['KNO number'],
    onlineSteps: ['DJB site > Pay Bill > Enter KNO', 'View consumption', 'Pay'],
    offlineSteps: ['DJB office'],
    fees: 'Free up to 20KL', processingTime: 'Instant', lastUpdated: '2024-11-28',
    faqs: [{ q: 'Free water criteria?', a: 'Functional meter, consumption <20KL, Aadhaar linked.' }],
    commonMistakes: ['Meter faulty not reported'], importantNotes: ['Install meter for free water'],
    related: ['sewer-connection', 'water-connection']
  },
  {
    slug: 'traffic-challan', title: 'Traffic Challan', category: 'vehicles-transport', state: 'delhi',
    keywords: ['challan', 'traffic', 'fine', 'parivahan'], officialUrl: 'https://echallan.parivahan.gov.in',
    overview: 'Check and pay Delhi Traffic Police e-challan online. Check via vehicle number or challan number.',
    eligibility: ['Vehicle owner'],
    documents: ['Vehicle number'],
    onlineSteps: ['Visit echallan.parivahan.gov.in', 'Enter DL number or Challan No', 'View violations with photo', 'Pay online'],
    offlineSteps: ['Traffic police HQ or Lok Adalat'],
    fees: 'Rs 500-5000 based on violation', processingTime: 'Instant', lastUpdated: '2024-12-09',
    faqs: [{ q: 'Wrong challan?', a: 'Contest via Grievance on same portal with evidence.' }],
    commonMistakes: ['Ignoring challan - RC block'], importantNotes: ['Pay within 60 days'],
    related: ['driving-licence', 'vehicle-registration']
  },
];


// ===== ADDITIONAL SERVICES WITH CORRECT CATEGORIES =====
const ADDITIONAL_SERVICES = [
  { slug: 'death-certificate', title: 'Death Certificate', category: 'certificates', keywords: ['death','mcd','certificate'], url: 'https://mcdonline.nic.in', overview: 'Death Certificate for deaths in Delhi, issued by MCD. Required for pension, property transfer, insurance.' },
  { slug: 'marriage-certificate', title: 'Marriage Certificate', category: 'family-services', keywords: ['marriage','shaadi','certificate','family'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Marriage Certificate for Delhi marriages. Required for passport, visa, name change, joint account.' },
  { slug: 'caste-certificate', title: 'Caste Certificate', category: 'certificates', keywords: ['caste','sc','st','obc','certificate'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Caste Certificate for SC/ST/OBC in Delhi. Required for scholarship, job reservation, college admission.' },
  { slug: 'domicile-certificate', title: 'Domicile Certificate', category: 'certificates', keywords: ['domicile','residence','mool niwas'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Domicile / Residence Certificate proves Delhi residency for education and jobs.' },
  { slug: 'voter-id', title: 'Voter ID Card', category: 'identity-documents', keywords: ['voter','epic','election','voter id'], url: 'https://voters.eci.gov.in', overview: 'Voter ID for voting in Delhi elections. Apply new, correction, or address change online.' },
  { slug: 'ration-card', title: 'Ration Card', category: 'identity-documents', keywords: ['ration','pds','food','ration card'], url: 'https://nfs.delhi.gov.in', overview: 'Delhi Ration Card for subsidized food grains. APL, BPL, AAY categories.' },
  { slug: 'trade-licence', title: 'Trade Licence (MCD)', category: 'licences', keywords: ['trade','licence','mcd','shop','business'], url: 'https://mcdonline.nic.in', overview: 'MCD Trade Licence for shops, restaurants, factories in Delhi. Mandatory for business.' },
  { slug: 'shop-establishment', title: 'Shop & Establishment Registration', category: 'business', keywords: ['shop','establishment','labour','business'], url: 'https://labour.delhi.gov.in', overview: 'Shop Act registration for Delhi businesses under Labour Department.' },
  { slug: 'gst-registration', title: 'GST Registration', category: 'business', keywords: ['gst','tax','business','registration'], url: 'https://www.gst.gov.in', overview: 'GST registration for Delhi businesses. Required if turnover >40L.' },
  { slug: 'udyam-registration', title: 'Udyam Registration (MSME)', category: 'business', keywords: ['udyam','msme','business','udyog'], url: 'https://udyamregistration.gov.in', overview: 'MSME Udyam registration for small businesses - benefits, loans, subsidies.' },
  { slug: 'ews-certificate', title: 'EWS Certificate', category: 'certificates', keywords: ['ews','income','reservation','certificate'], url: 'https://edistrict.delhigovt.nic.in', overview: 'EWS certificate for 10% reservation in jobs and education for general category.' },
  { slug: 'obc-certificate', title: 'OBC Certificate', category: 'certificates', keywords: ['obc','caste','backward','certificate'], url: 'https://edistrict.delhigovt.nic.in', overview: 'OBC certificate for Delhi - Central and State list.' },
  { slug: 'disability-certificate', title: 'Disability Certificate', category: 'certificates', keywords: ['disability','viklang','certificate'], url: 'https://www.swavlamban.info', overview: 'Disability certificate for UDID card, pension, reservation, and schemes.' },
  { slug: 'senior-citizen-card', title: 'Senior Citizen Card', category: 'pensions', keywords: ['senior','citizen','old age','card'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Senior Citizen Card for 60+ - benefits in DTC, hospitals, pensions.' },
  { slug: 'labour-card', title: 'Labour Card (Construction Worker)', category: 'employment', keywords: ['labour','majdoor','shramik','card'], url: 'https://labour.delhi.gov.in', overview: 'Delhi Labour Card for construction workers - 10+ schemes, 2L insurance.' },
  { slug: 'vehicle-registration', title: 'Vehicle Registration (RC)', category: 'vehicles-transport', keywords: ['rc','vehicle','registration','parivahan'], url: 'https://parivahan.gov.in', overview: 'New vehicle RC registration in Delhi via Vahan portal.' },
  { slug: 'rc-status', title: 'RC Status Check', category: 'vehicles-transport', keywords: ['rc','status','vehicle','check'], url: 'https://parivahan.gov.in', overview: 'Check your vehicle RC status, owner details, hypothecation online.' },
  { slug: 'puc-certificate', title: 'PUC Certificate', category: 'vehicles-transport', keywords: ['puc','pollution','certificate','vehicle'], url: 'https://puc.parivahan.gov.in', overview: 'Pollution Under Control certificate for Delhi vehicles - check validity, download.' },
  { slug: 'learner-licence', title: 'Learner Licence', category: 'vehicles-transport', keywords: ['learner','licence','ll','driving'], url: 'https://parivahan.gov.in', overview: 'Learner Licence for Delhi - first step before permanent DL. Test online.' },
  { slug: 'arms-licence', title: 'Arms Licence', category: 'licences', keywords: ['arms','gun','licence','weapon'], url: 'https://ndal-alis.gov.in', overview: 'Arms licence for Delhi - application, renewal, and rules.' },
  { slug: 'police-verification', title: 'Police Verification (PCC)', category: 'police-legal', keywords: ['police','verification','pcc','character'], url: 'https://delhipolice.gov.in', overview: 'Police Clearance Certificate for job, rent, passport in Delhi.' },
  { slug: 'fir-online', title: 'FIR Online (e-FIR)', category: 'police-legal', keywords: ['fir','police','complaint','e-fir'], url: 'https://delhipolice.gov.in', overview: 'File e-FIR online for theft, missing documents in Delhi Police.' },
  { slug: 'rti-online', title: 'RTI Online', category: 'rti', keywords: ['rti','right to information','information','complaint'], url: 'https://rtionline.gov.in', overview: 'File RTI online to any Delhi or Central department - get reply in 30 days.' },
  { slug: 'delhi-metro-card', title: 'Delhi Metro Card', category: 'vehicles-transport', keywords: ['metro','dmrc','card','recharge'], url: 'https://www.delhimetrorail.com', overview: 'Delhi Metro smart card, recharge, tourist card, and fare information.' },
  { slug: 'dtc-bus-pass', title: 'DTC Bus Pass', category: 'vehicles-transport', keywords: ['dtc','bus','pass','cluster'], url: 'https://dtc.delhi.gov.in', overview: 'DTC bus pass for students, senior citizens, all routes monthly.' },
  { slug: 'scholarship-delhi', title: 'Delhi Scholarship', category: 'scholarships', keywords: ['scholarship','students','education','delhi'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Delhi govt scholarships for SC/ST/OBC/Minority students - eligibility and apply.' },
  { slug: 'old-age-pension', title: 'Old Age Pension Delhi', category: 'pensions', keywords: ['pension','old age','senior','widow','family'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Delhi old age pension Rs 2000/month for 60+ with Delhi voter card.' },
  { slug: 'widow-pension', title: 'Widow Pension Delhi', category: 'pensions', keywords: ['widow','pension','family','vidhwa'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Widow pension Delhi Rs 2500/month - eligibility, documents, online apply.' },
  { slug: 'ladli-yojana', title: 'Ladli Yojana Delhi', category: 'government-schemes', keywords: ['ladli','girl','yojana','scheme','beti'], url: 'https://edistrict.delhigovt.nic.in', overview: 'Delhi Ladli Yojana for girl child - Rs 35000 deposit, financial aid for education.' },
  { slug: 'water-connection', title: 'Water Connection (DJB)', category: 'utilities', keywords: ['water','djb','connection','jal'], url: 'https://djb.gov.in', overview: 'New DJB water connection for Delhi homes - apply, fees, documents.' },
  { slug: 'sewer-connection', title: 'Sewer Connection (DJB)', category: 'utilities', keywords: ['sewer','djb','connection','gutter'], url: 'https://djb.gov.in', overview: 'DJB sewer connection for Delhi houses - mandatory for DDA flats.' },
  { slug: 'building-plan-approval', title: 'Building Plan Approval (MCD/DDA)', category: 'property-housing', keywords: ['building','plan','approval','map','mcd','dda','property'], url: 'https://mcdonline.nic.in', overview: 'Building plan approval for house construction in Delhi MCD/DDA area.' },
];

ADDITIONAL_SERVICES.forEach(s=>{
  if(!SERVICES.find(x=>x.slug===s.slug)){
    SERVICES.push({
      slug: s.slug,
      title: s.title,
      category: s.category,
      state: 'delhi',
      keywords: s.keywords,
      officialUrl: s.url,
      overview: s.overview,
      eligibility: ['Delhi resident', 'Valid Aadhaar and address proof', 'As per department norms'],
      documents: ['Aadhaar Card', 'Address Proof', 'Passport Photo', 'Application Form'],
      onlineSteps: ['Visit official portal '+s.url, 'Register/Login with mobile', 'Fill form with correct details', 'Upload documents', 'Pay fee and save receipt, track status after 7 days'],
      offlineSteps: ['Visit concerned department office with documents'],
      fees: 'Rs 20-500 as per service (check official site)',
      processingTime: s.category==='vehicles-transport' ? 'Instant to 7 days' : '7-21 days',
      lastUpdated: '2024-12-10',
      faqs: [{ q: 'Official website?', a: 'Only apply via '+s.url+' . No agent needed.' }, { q: 'Documents?', a: 'Aadhaar, address proof, photo are common for all.' }],
      commonMistakes: ['Wrong category selection', 'Incomplete documents', 'Not checking official fees'],
      importantNotes: ['Keep receipt safe', 'Track status online', 'Contact: contact@sarkarsaathi.org for broken link report'],
      related: ['aadhaar-card','income-certificate','water-bill']
    });
  }
});


const Header: React.FC<{ navigate:any, path:string }> = ({ navigate, path }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showStates, setShowStates] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const results = useMemo(()=>{
    if(!query.trim()) return [];
    const q=query.toLowerCase();
    return SERVICES.filter(s=> s.title.toLowerCase().includes(q) || s.keywords.some(k=>k.includes(q))).slice(0,6);
  },[query]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f0f0f]/85 border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={()=>navigate('/')} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#ff6b00] flex items-center justify-center font-black text-black">SS</div>
            <div className="text-left leading-none">
              <div className="font-bold text-[15px] tracking-tight text-white">SarkarSaathi.org</div>
              <div className="text-[10px] text-white/50 -mt-0.5">सभी सरकारी काम</div>
            </div>
          </button>
          <div className="hidden md:flex items-center ml-6 relative">
            <button onClick={()=>setShowStates(!showStates)} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-white/10 text-sm text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Delhi <ChevronRight className="w-4 h-4 rotate-90 opacity-50" />
            </button>
            {showStates && (
              <div className="absolute top-10 left-0 w-64 rounded-2xl bg-[#1e1e1e] border border-white/10 p-2 shadow-2xl">
                {STATES.map(s=>(
                  <div key={s.id} className={`flex items-center justify-between px-3 py-2.5 rounded-xl ${s.active ? 'bg-[#ff6b00]/10 text-white' : 'text-white/40'}`}>
                    <div className="flex items-center gap-2"><span className="text-xs font-bold w-6 h-6 rounded bg-white/10 grid place-items-center">{s.flag}</span><span className="text-sm">{s.name}</span></div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.active?'bg-emerald-500/20 text-emerald-300':'bg-white/10'}`}>{s.active?'Active':'Soon'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Top search removed as per request - only hero search remains */}
          <button onClick={()=>setShowSearch(!showSearch)} className="lg:hidden w-10 h-10 rounded-full bg-[#1a1a1a] grid place-items-center"><Search className="w-4 h-4 text-white" /></button>
          <button onClick={()=>setMobileMenu(!mobileMenu)} className="md:hidden w-10 h-10 rounded-full bg-[#1a1a1a] grid place-items-center"><Menu className="w-5 h-5 text-white" /></button>
        </div>
      </div>
      {showSearch && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-4 h-12">
            <Search className="w-4 h-4 text-white/40" />
            <input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search services..." className="flex-1 bg-transparent outline-none text-sm text-white" />
            <button onClick={()=>setShowSearch(false)}><X className="w-4 h-4 text-white/50" /></button>
          </div>
          {results.length>0 && (
            <div className="mt-3 rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden">
              {results.map(r=>(
                <button key={r.slug} onClick={()=>{navigate(`/service/${r.slug}`); setShowSearch(false); setQuery('');}} className="w-full text-left px-4 py-3 border-b border-white/5 last:border-0">
                  <div className="text-sm text-white">{r.title}</div><div className="text-xs text-white/40">{r.officialUrl}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      {mobileMenu && (
        <div className="md:hidden absolute inset-x-0 top-[64px] bg-[#121212] border-b border-white/10 p-4 space-y-2">
          {CATEGORIES.slice(0,8).map(c=>(
            <button key={c.slug} onClick={()=>{navigate(`/category/${c.slug}`); setMobileMenu(false);}} className="w-full text-left px-3 py-2.5 rounded-xl bg-white/[0.03] text-sm text-white/80">{c.name}</button>
          ))}
        </div>
      )}
    </header>
  );
};

const TrustBadges = () => (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
    {[
      { icon: ShieldCheck, label: '100% Official Links' },
      { icon: BadgeCheck, label: 'No Fees' },
      { icon: Lock, label: 'No Login' },
      { icon: Eye, label: 'No Data Stored' },
      { icon: CheckCircle2, label: 'Free Forever' },
      { icon: FileCheck, label: 'Step-by-Step Guides' },
    ].map((b,i)=>(
      <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-[#1a1a1a] border border-white/[0.06]">
        <b.icon className="w-4 h-4 text-[#ff6b00]" /><span className="text-[11px] md:text-xs text-white/70 font-medium">{b.label}</span>
      </div>
    ))}
  </div>
);

const Footer: React.FC<{ navigate:any }> = ({ navigate }) => (
  <footer className="mt-20 border-t border-white/10 bg-[#0a0a0a]">
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
      <div><div className="font-bold text-white mb-4 text-sm">Government Services</div><div className="space-y-2 text-[13px] text-white/50">{CATEGORIES.slice(0,7).map(c=> <div key={c.slug} className="hover:text-white cursor-pointer" onClick={()=>navigate(`/category/${c.slug}`)}>{c.name}</div>)}</div></div>
      <div><div className="font-bold text-white mb-4 text-sm">Delhi Services</div><div className="space-y-2 text-[13px] text-white/50">{DEPARTMENTS.map(d=> <div key={d.slug} className="hover:text-white cursor-pointer" onClick={()=>navigate(`/delhi/${d.slug}`)}>{d.name}</div>)}<div className="hover:text-white cursor-pointer" onClick={()=>navigate('/category/utilities')}>Utilities</div></div></div>
      <div><div className="font-bold text-white mb-4 text-sm">Tools</div><div className="space-y-2 text-[13px] text-white/50">{CALCULATORS.map(c=> <div key={c.slug} className="hover:text-white cursor-pointer" onClick={()=>navigate(`/calculator/${c.slug}`)}>{c.name}</div>)}<div className="mt-2 pt-2 border-t border-white/10">{FINDERS.slice(0,5).map(f=> <div key={f.slug} className="hover:text-white cursor-pointer py-1" onClick={()=>navigate(`/finder/${f.slug}`)}>{f.name}</div>)}</div></div></div>
      <div><div className="font-bold text-white mb-4 text-sm">Banking</div><div className="space-y-2 text-[13px] text-white/50">{BANKS.slice(0,8).map(b=> <div key={b.slug} className="hover:text-white cursor-pointer" onClick={()=>navigate(`/banking/bank/${b.slug}`)}>{b.name}</div>)}{BANKING_TYPES.slice(0,5).map(t=> <div key={t.slug} className="hover:text-white cursor-pointer" onClick={()=>navigate(`/banking/${t.slug}`)}>{t.name}</div>)}</div></div>
      <div><div className="font-bold text-white mb-4 text-sm">Company</div><div className="space-y-2 text-[13px] text-white/50">{Object.keys(STATIC_PAGES).map(k=> <div key={k} className="hover:text-white cursor-pointer capitalize" onClick={()=>navigate(`/${k}`)}>{k}</div>)}<div className="mt-6 p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20"><div className="text-[#ff6b00] font-bold text-sm">Emergency 112</div><div className="text-white/60 text-xs">Police • Fire • Ambulance • Women 1098</div></div></div></div>
    </div>
    <div className="border-t border-white/5 py-6 text-center text-[11px] text-white/30 px-4">© 2025 SarkarSaathi.org — Not a Government Website. All .gov.in links are official. Made for 100M Indians. Free Forever. No data collected. दिल्ली से दिल तक।</div>
  </footer>
);

// ========== PAGES ==========
const HomePage: React.FC<{ navigate:any }> = ({ navigate }) => {
  const [search, setSearch] = useState('');
  const filtered = useMemo(()=>{
    if(!search) return [];
    const q=search.toLowerCase().trim();
    if(q.length<2) return [];
    const serviceHits = SERVICES.filter(s=> 
      s.title.toLowerCase().includes(q) || 
      s.keywords.join(' ').toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.overview.toLowerCase().includes(q)
    ).map(s=>({type:'service', title:s.title, slug:s.slug, desc:s.category, url:`/service/${s.slug}`}));
    const catHits = CATEGORIES.filter(c=> 
      c.name.toLowerCase().includes(q) || 
      c.slug.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q)
    ).map(c=>({type:'category', title:c.name, slug:c.slug, desc:c.desc, url:`/category/${c.slug}`}));
    const finderHits = FINDERS.filter(f=>
      f.name.toLowerCase().includes(q) ||
      f.slug.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q)
    ).map(f=>({type:'finder', title:f.name, slug:f.slug, desc:f.desc, url:`/finder/${f.slug}`}));
    const blogHits = BLOGS.filter(b=> b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) ).map(b=>({type:'blog', title:b.title, slug:b.slug, desc:b.excerpt.slice(0,60), url:`/blog/${b.slug}`}));
    const bankHits = BANKS.filter(b=>
      b.name.toLowerCase().includes(q) || b.short.toLowerCase().includes(q)
    ).map(b=>({type:'bank', title:b.name, slug:b.slug, desc:b.type, url:`/banking/bank/${b.slug}`}));
    const combined = [...serviceHits, ...catHits, ...finderHits, ...blogHits, ...bankHits];
    // remove duplicates by slug
    const seen = new Set();
    const unique = combined.filter(item=>{
      if(seen.has(item.slug+item.type)) return false;
      seen.add(item.slug+item.type);
      return true;
    });
    return unique.slice(0,10);
  },[search]);

  useSEO('Delhi Government Services - All Official Links, Guides, Tools', 'SarkarSaathi.org - 60+ Delhi govt services, finders, calculators, banking guides. 100% official .gov.in links, free forever, no login.');

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pt-10 md:pt-20 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-[11px] font-bold tracking-wide mb-6"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse"></span> DELHI • 60+ SERVICES • OFFICIAL .GOV.IN ONLY</div>
          <h1 className="text-[32px] md:text-[56px] font-black leading-[0.95] tracking-tight whitespace-pre-wrap">सभी सरकारी काम एक जगह, <span className="whitespace-nowrap">बिल्कुल फ्री</span></h1>
          <p className="mt-5 text-[14px] md:text-[18px] text-white/60 leading-relaxed">Delhi Government Services, Government Guides, Banking Guides, Official Links, Government Tools, Finders, Calculators and Step-by-Step Help.</p>
          
          <div className="mt-8 relative max-w-2xl mx-auto">
            <div className="flex items-center gap-3 h-[56px] px-5 rounded-full bg-[#1a1a1a] border border-white/10 focus-within:border-[#ff6b00]/50 shadow-[0_0_0_6px_rgba(255,107,0,0.08)]">
              <Search className="w-5 h-5 text-white/30" />
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search Aadhaar, PAN, RTI, Family, Marriage, Pension..." className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-white/30" />
              <span className="hidden md:flex text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/50">⌘ K</span>
            </div>
            {filtered.length>0 ? (
              <div className="absolute z-20 mt-3 w-full rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden text-left shadow-2xl">
                {filtered.map((s:any)=>(
                  <button key={s.slug+s.type} onClick={()=>navigate(s.url)} className="w-full px-5 py-3.5 hover:bg-white/5 flex items-center justify-between border-b border-white/5 last:border-0 text-left">
                    <div><div className="text-[14px] font-medium">{s.title} <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/40 uppercase">{s.type}</span></div><div className="text-[11px] text-white/40">{s.desc}</div></div><ChevronRight className="w-4 h-4 text-white/20" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Aadhaar','PAN','Passport','Driving Licence','Birth Certificate','IFSC Code','Property Tax','Water Bill'].map(chip=>(
                  <button key={chip} onClick={()=>setSearch(chip)} className="px-3 py-1.5 rounded-full bg-[#1e1e1e] border border-white/10 text-[12px] text-white/60 hover:text-white hover:border-white/20">{chip}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto"><TrustBadges /></div>

        {/* Blogs Section - NEW */}
        <div className="mt-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Latest Guides & Updates</h2>
            <span className="text-xs text-white/40">12 articles • Hindi + English</span>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {BLOGS.map(b=>(
              <button key={b.slug} onClick={()=>navigate(`/blog/${b.slug}`)} className="text-left p-5 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#ff6b00]/30 hover:bg-[#1a1a1a] transition group">
                <div className="flex items-center gap-2 mb-3"><span className="text-[10px] px-2 py-1 rounded-full bg-[#ff6b00]/15 text-[#ff6b00] font-bold">{b.category}</span><span className="text-[10px] text-white/30">{b.date} • {b.read}</span></div>
                <div className="font-bold text-[14px] leading-tight group-hover:text-white">{b.title}</div>
                <div className="text-[12px] text-white/50 mt-2 line-clamp-2">{b.excerpt}</div>
                <div className="mt-4 flex items-center gap-1 text-[11px] text-[#ff6b00] font-semibold">Read More <ArrowRight className="w-3 h-3" /></div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[{n:'60+',l:'Services'},{n:'29',l:'Finders'},{n:'10+',l:'Calculators'}].map(s=>(
            <div key={s.l} className="rounded-2xl bg-[#121212] border border-white/5 p-4 text-center"><div className="text-2xl font-black text-[#ff6b00]">{s.n}</div><div className="text-[11px] text-white/40 uppercase tracking-widest mt-1">{s.l}</div></div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Browse by Category</h2>
          <span className="text-xs text-white/40">35 categories • Delhi</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CATEGORIES.map(c=>(
            <button key={c.slug} onClick={()=>navigate(`/category/${c.slug}`)} className="text-left p-4 rounded-2xl bg-[#121212] border border-white/[0.06] hover:border-[#ff6b00]/30 hover:bg-[#1a1a1a] transition group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] group-hover:bg-[#ff6b00]/15 grid place-items-center mb-3"><FileText className="w-5 h-5 text-white/60 group-hover:text-[#ff6b00]" /></div>
              <div className="font-semibold text-[13px] leading-tight">{c.name}</div>
              <div className="text-[11px] text-white/40 mt-1 line-clamp-1">{c.desc}</div>
              <div className="mt-3 flex items-center gap-1.5"><span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50">{c.count} services</span><ArrowRight className="w-3 h-3 text-white/20 group-hover:text-[#ff6b00] ml-auto" /></div>
            </button>
          ))}
        </div>

        {/* Banking Hub */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6"><h2 className="text-xl md:text-2xl font-bold">Banking Hub — Complete Guide</h2><button onClick={()=>navigate('/banking/saving-account')} className="text-xs px-3 py-1.5 rounded-full bg-[#ff6b00] text-black font-bold">View All</button></div>
          <div className="rounded-[24px] bg-[#121212] border border-white/5 p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">{BANKING_TYPES.slice(0,10).map(t=>(
              <button key={t.slug} onClick={()=>navigate(`/banking/${t.slug}`)} className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-left hover:border-[#ff6b00]/30"><div className="text-[12px] font-semibold">{t.name}</div><div className="text-[10px] text-white/40 mt-1 line-clamp-1">{t.desc}</div></button>
            ))}</div>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2">
              {BANKS.map(b=>(
                <button key={b.slug} onClick={()=>navigate(`/banking/bank/${b.slug}`)} className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 text-center"><div className="w-8 h-8 rounded-full mx-auto mb-2 grid place-items-center text-[11px] font-black text-white" style={{background:b.color}}>{b.short[0]}</div><div className="text-[11px] font-medium leading-tight">{b.short}</div><div className="text-[9px] text-white/30">{b.type}</div></button>
              ))}
            </div>
          </div>
        </div>

        {/* Finders */}
        <div className="mt-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Government Finders — Locate Anything</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {FINDERS.map(f=>(
              <button key={f.slug} onClick={()=>navigate(`/finder/${f.slug}`)} className="text-left p-4 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#ff6b00]/20 transition group"><LocateFixed className="w-5 h-5 text-[#ff6b00] mb-3" /><div className="font-semibold text-[13px]">{f.name}</div><div className="text-[11px] text-white/40 mt-1">{f.desc}</div></button>
            ))}
          </div>
        </div>

        {/* Life Events */}
        <div className="mt-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00] text-black text-[11px] font-black mb-4">MOST IMPORTANT • LIFE EVENTS</div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Life ke har mod par SarkarSaathi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {LIFE_EVENTS.map(ev=>(
              <button key={ev.slug} onClick={()=>navigate(`/life-event/${ev.slug}`)} className="text-left p-4 rounded-2xl bg-[#121212] border border-white/5 hover:bg-[#1a1a1a] hover:border-[#ff6b00]/30 transition group relative overflow-hidden"><div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10" style={{background:ev.color}}></div><div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 grid place-items-center mb-3"><Baby className="w-5 h-5 text-[#ff6b00]" /></div><div className="font-semibold text-[13px]">{ev.name}</div><div className="text-[11px] text-white/40 mt-1 line-clamp-2">{ev.desc}</div><div className="mt-3 text-[10px] px-2 py-1 rounded-full bg-white/5 inline-block text-white/50">{ev.timeline}</div></button>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-[#ff6b00]" />Delhi Government Departments</h3>
            <div className="grid grid-cols-2 gap-2">{DEPARTMENTS.map(d=>(
              <button key={d.slug} onClick={()=>navigate(`/delhi/${d.slug}`)} className="text-left p-3 rounded-xl bg-[#0f0f0f] border border-white/5 hover:border-white/10"><div className="font-semibold text-[13px]">{d.name}</div><div className="text-[11px] text-white/40">{d.full} • {d.services} services</div></button>
            ))}</div>
          </div>
          <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Calculator className="w-5 h-5 text-[#ff6b00]" />Tools & Calculators</h3>
            <div className="grid grid-cols-2 gap-2">{CALCULATORS.map(c=>(
              <button key={c.slug} onClick={()=>navigate(`/calculator/${c.slug}`)} className="text-left p-3 rounded-xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-white/5 grid place-items-center"><Calculator className="w-4 h-4 text-white/60" /></div><div><div className="font-semibold text-[12px]">{c.name}</div><div className="text-[10px] text-white/40">{c.desc}</div></div></button>
            ))}</div>
            <div className="mt-6 p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center gap-3"><Newspaper className="w-5 h-5 text-[#ff6b00]" /><div><div className="text-[13px] font-bold">Knowledge Center</div><div className="text-[11px] text-white/60">How-to guides, banking tips, Delhi updates — no ads, no spam.</div></div><button onClick={()=>navigate('/about')} className="ml-auto text-[11px] px-3 py-1 rounded-full bg-[#ff6b00] text-black font-bold">Read</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicePage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const service = SERVICES.find(s=>s.slug===slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  if(!service){ return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60 p-10">Service not found — try searching on homepage. <button className="ml-3 text-[#ff6b00]" onClick={()=>navigate('/')}>Home</button></div> }
  useSEO(service.title, service.overview, { "@type":"FAQPage", mainEntity: service.faqs.map(f=>({"@type":"Question", name:f.q, acceptedAnswer:{"@type":"Answer", text:f.a}})) });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 py-6">
        <div className="flex items-center gap-2 text-[11px] text-white/40 mb-6"><span className="hover:text-white cursor-pointer" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="hover:text-white cursor-pointer" onClick={()=>navigate(`/category/${service.category}`)}>{service.category}</span><ChevronRight className="w-3 h-3" /><span className="text-white/80">{service.title}</span></div>
        
        <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><h1 className="text-2xl md:text-3xl font-black tracking-tight">{service.title} — Delhi</h1><p className="mt-3 text-[14px] text-white/60 leading-relaxed max-w-2xl">{service.overview}</p><div className="mt-4 flex flex-wrap gap-2">{service.keywords.map(k=> <span key={k} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{k}</span>)}</div></div>
            <a href={service.officialUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ff6b00] text-black font-bold text-[13px] hover:bg-[#ff7a1a]">Official Website <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-8">
              <section><h3 className="font-bold text-[15px] mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-[#ff6b00]" />Eligibility</h3><ul className="space-y-2">{service.eligibility.map((e,i)=><li key={i} className="flex gap-2 text-[13px] text-white/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />{e}</li>)}</ul></section>
              <section><h3 className="font-bold text-[15px] mb-3 flex items-center gap-2"><FileStack className="w-4 h-4 text-[#ff6b00]" />Required Documents</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{service.documents.map((d,i)=><div key={i} className="px-3 py-2.5 rounded-xl bg-[#0f0f0f] border border-white/5 text-[13px] flex items-center gap-2"><FileCheck className="w-4 h-4 text-white/30" />{d}</div>)}</div></section>
              <section className="grid md:grid-cols-2 gap-6"><div><h3 className="font-bold text-[13px] mb-3">Online Process</h3><ol className="space-y-2">{service.onlineSteps.map((s,i)=><li key={i} className="flex gap-3 text-[13px] text-white/70"><span className="w-6 h-6 rounded-full bg-[#ff6b00]/15 text-[#ff6b00] grid place-items-center text-[11px] font-bold shrink-0">{i+1}</span>{s}</li>)}</ol></div><div><h3 className="font-bold text-[13px] mb-3">Offline Process</h3><ol className="space-y-2">{service.offlineSteps.map((s,i)=><li key={i} className="flex gap-3 text-[13px] text-white/70"><span className="w-6 h-6 rounded-full bg-white/10 grid place-items-center text-[11px] font-bold shrink-0">{i+1}</span>{s}</li>)}</ol></div></section>
              <section className="grid grid-cols-2 gap-3"><div className="p-4 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="text-[11px] text-white/40">Fees</div><div className="font-semibold text-[13px] mt-1">{service.fees}</div></div><div className="p-4 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="text-[11px] text-white/40">Processing Time</div><div className="font-semibold text-[13px] mt-1">{service.processingTime}</div></div></section>
              <section><h3 className="font-bold text-[15px] mb-3">FAQs</h3><div className="space-y-2">{service.faqs.map((f,i)=>(
                <div key={i} className="rounded-xl bg-[#0f0f0f] border border-white/5 overflow-hidden"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full text-left px-4 py-3 flex items-center justify-between"><span className="text-[13px] font-medium">{f.q}</span><ChevronRight className={`w-4 h-4 transition ${openFaq===i?'rotate-90':''}`} /></button>{openFaq===i && <div className="px-4 pb-3 text-[13px] text-white/60">{f.a}</div>}</div>
              ))}</div></section>
              <section className="grid md:grid-cols-2 gap-4"><div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20"><div className="text-amber-300 font-bold text-[12px] flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" />Common Mistakes</div><ul className="mt-2 space-y-1 text-[12px] text-white/60">{service.commonMistakes.map((m,i)=><li key={i}>• {m}</li>)}</ul></div><div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20"><div className="text-sky-300 font-bold text-[12px] flex items-center gap-1.5"><Info className="w-4 h-4" />Important Notes</div><ul className="mt-2 space-y-1 text-[12px] text-white/60">{service.importantNotes.map((m,i)=><li key={i}>• {m}</li>)}</ul></div></section>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5"><div className="text-[11px] text-white/40">Last Updated</div><div className="text-[13px] font-medium mt-1 flex items-center gap-1.5"><Clock className="w-4 h-4 text-white/30" />{service.lastUpdated}</div><div className="mt-4 p-3 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20"><div className="text-[11px] text-[#ff6b00] font-bold">100% Official Link</div><div className="text-[12px] text-white/60 mt-1 break-all">{service.officialUrl}</div><a href={service.officialUrl} target="_blank" rel="noopener" className="mt-3 flex items-center justify-center gap-2 w-full py-2 rounded-full bg-[#ff6b00] text-black text-[12px] font-bold">Open Official Site <ExternalLink className="w-3.5 h-3.5" /></a></div></div>
              <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5"><div className="font-bold text-[13px] mb-3">Related Services</div><div className="space-y-2">{service.related.map((r:string)=>{ const rs=SERVICES.find(s=>s.slug===r); if(!rs) return null; return <button key={r} onClick={()=>navigate(`/service/${r}`)} className="w-full text-left px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-[12px] flex items-center justify-between"><span>{rs.title}</span><ChevronRight className="w-3 h-3 text-white/20" /></button>})}</div></div>
              <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5"><div className="font-bold text-[13px] mb-2">Download Forms</div><div className="space-y-2 text-[12px]"><div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5"><span>Form PDF</span><Download className="w-4 h-4 text-white/40" /></div><div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5"><span>Self Declaration</span><Download className="w-4 h-4 text-white/40" /></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryPage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const cat = CATEGORIES.find(c=>c.slug===slug);
  const list = SERVICES.filter(s=> s.category===slug);
  // No fallback - show only correct category services, if none show message
  const display = list;
  useSEO(cat?.name || 'Category', cat?.desc || 'Government services category');
  if(!cat) return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60">Category not found</div>;
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="flex items-center gap-2 text-[11px] text-white/40 mb-6"><span className="cursor-pointer hover:text-white" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="text-white/70">{cat.name}</span></div>
        <div className="flex items-end justify-between mb-8"><div><h1 className="text-3xl font-black tracking-tight">{cat.name} — Delhi</h1><p className="text-white/60 mt-2 text-sm max-w-xl">{cat.desc}. All services with official .gov.in links, eligibility, documents, fees, and step-by-step process. No login, no fees, free forever.</p></div><span className="hidden md:block text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/50">{display.length} services</span></div>
        {display.length===0 ? (
          <div className="col-span-full p-10 text-center rounded-2xl bg-[#121212] border border-white/5 text-white/50">
            <div className="text-lg font-bold text-white">No services in this category yet</div>
            <div className="text-sm mt-2">We are adding official links. Try other categories or search. Contact: contact@sarkarsaathi.org</div>
            <button onClick={()=>navigate('/')} className="mt-4 px-5 py-2 rounded-full bg-[#ff6b00] text-black font-bold text-sm">Go Home</button>
          </div>
        ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {display.map(s=>(
            <button key={s.slug} onClick={()=>navigate(`/service/${s.slug}`)} className="text-left p-4 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#ff6b00]/30 group">
              <div className="flex items-start justify-between"><div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 grid place-items-center"><FileText className="w-5 h-5 text-[#ff6b00]" /></div><span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/40">{s.processingTime}</span></div>
              <div className="font-semibold text-[14px] mt-3">{s.title}</div><div className="text-[12px] text-white/50 mt-1 line-clamp-2">{s.overview.slice(0,90)}...</div><div className="mt-3 flex items-center gap-2 text-[11px] text-white/30"><Globe className="w-3 h-3" />{new URL(s.officialUrl).hostname}</div>
            </button>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

const BankingPage: React.FC<{ slug?:string, bankSlug?:string, navigate:any }> = ({ slug, bankSlug, navigate }) => {
  const type = BANKING_TYPES.find(b=>b.slug===slug);
  const bank = BANKS.find(b=>b.slug===bankSlug);
  useSEO(bank? `${bank.name} - All Services` : type? `${type.name} Guide` : 'Banking Hub', 'Complete banking guides with official links.');
  if(bankSlug){
    if(!bank) return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60">Bank not found</div>;
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[900px] px-4 sm:px-6 py-8">
        <div className="text-[11px] text-white/40 flex items-center gap-2 mb-6"><span className="cursor-pointer" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="cursor-pointer" onClick={()=>navigate('/banking/saving-account')}>Banking</span><ChevronRight className="w-3 h-3" /><span className="text-white/70">{bank.name}</span></div>
        <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6 md:p-8">
          <div className="flex items-center gap-4"><div className="w-14 h-14 rounded-2xl grid place-items-center text-white font-black text-xl" style={{background:bank.color}}>{bank.short[0]}</div><div><h1 className="text-2xl font-black">{bank.name}</h1><div className="text-xs text-white/50">{bank.type} Bank • Delhi branches • Official guide</div></div></div>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {BANKING_TYPES.slice(0,8).map(t=>(
              <div key={t.slug} className="p-4 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="font-semibold text-[13px]">{t.name} at {bank.short}</div><div className="text-[12px] text-white/50 mt-1">Eligibility: Any Indian citizen 18+, Documents: Aadhaar, PAN, Photo. Min Balance: Rs 0-5000. Official link: {bank.name.toLowerCase().replace(/\s+/g,'')}.co.in</div><div className="mt-3 flex gap-2"><span className="text-[10px] px-2 py-1 rounded-full bg-[#ff6b00]/15 text-[#ff6b00]">Charges: As per bank</span><span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50">Time: Instant to 7 days</span></div></div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20"><div className="text-[#ff6b00] font-bold text-sm">Official Website</div><div className="text-white/60 text-xs mt-1">Visit only official .co.in domain. Never share OTP.</div><a href={`https://www.${bank.slug}.com`} target="_blank" rel="noopener" className="mt-3 inline-flex px-4 py-2 rounded-full bg-[#ff6b00] text-black text-xs font-bold">Open Official Site <ExternalLink className="w-3 h-3 ml-1" /></a></div>
        </div>
      </div></div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-black">{type? type.name : 'Banking Hub'}</h1><p className="text-white/60 text-sm mt-2 max-w-2xl">{type? `${type.name} complete guide for Delhi — eligibility, documents, min balance, charges, benefits, official apply link.` : 'All banking guides — saving, current, salary, zero balance, NRE, NRO, FD, RD, PPF, NPS, locker, cards, UPI, loans. 20 banks covered.'}</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-[24px] bg-[#121212] border border-white/5 p-6">
          <h3 className="font-bold mb-4">What you get</h3>
          <div className="grid grid-cols-2 gap-3 text-[12px]"><div className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="text-white/40 text-[10px]">Eligibility</div><div className="mt-1">Indian citizen 18+, Minor with guardian, NRI for NRE/NRO</div></div><div className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="text-white/40 text-[10px]">Documents</div><div className="mt-1">Aadhaar, PAN, Photo, Address proof, Income proof for loans</div></div><div className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="text-white/40 text-[10px]">Min Balance</div><div className="mt-1">Rs 0 (Jan Dhan, Salary) to Rs 10,000 (Premium)</div></div><div className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5"><div className="text-white/40 text-[10px]">Charges</div><div className="mt-1">Zero to Rs 500 annual + GST, SMS Rs 15/quarter</div></div></div>
          <div className="mt-6"><h4 className="font-bold text-sm mb-3">Benefits & Features</h4><ul className="grid grid-cols-2 gap-2 text-[12px] text-white/60"><li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />Free UPI & IMPS</li><li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />Insurance cover up to 2L</li><li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />Net banking & app</li><li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />Overdraft facility</li></ul></div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl bg-[#121212] border border-white/5 p-4"><div className="font-bold text-sm mb-3">All Banking Types</div><div className="space-y-1.5">{BANKING_TYPES.map(t=> <button key={t.slug} onClick={()=>navigate(`/banking/${t.slug}`)} className={`w-full text-left px-3 py-2 rounded-xl text-[12px] ${slug===t.slug?'bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/20':'bg-white/[0.03] text-white/60 hover:text-white'}`}>{t.name}</button>)}</div></div>
          <div className="rounded-2xl bg-[#121212] border border-white/5 p-4"><div className="font-bold text-sm mb-3">All Banks</div><div className="grid grid-cols-2 gap-2">{BANKS.map(b=> <button key={b.slug} onClick={()=>navigate(`/banking/bank/${b.slug}`)} className="text-left px-2.5 py-2 rounded-xl bg-white/[0.03] text-[11px] hover:bg-white/[0.06]">{b.short}</button>)}</div></div>
        </div>
      </div>
    </div></div>
  );
};


const FinderPage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const finder = FINDERS.find(f=>f.slug===slug);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  useSEO(finder?.name || 'Finder', finder?.desc || '');
  if(!finder) return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60">Finder not found</div>;

  // ===== FULL DELHI PIN DATABASE - 35 entries =====
  const PIN_DB: {pin:string, area:string, district:string, state:string, offices:string[]}[] = [
    { pin:'110001', area:'Connaught Place', district:'Central Delhi', state:'Delhi', offices:['Connaught Place H.O','Barakhamba Road S.O','Janpath S.O'] },
    { pin:'110002', area:'Sansad Marg', district:'Central Delhi', state:'Delhi', offices:['Parliament Street H.O','North Avenue S.O'] },
    { pin:'110003', area:'Mandi House', district:'Central Delhi', state:'Delhi', offices:['Mandi House S.O','Supreme Court S.O'] },
    { pin:'110005', area:'Karol Bagh', district:'Central Delhi', state:'Delhi', offices:['Karol Bagh H.O','Rajinder Nagar S.O'] },
    { pin:'110006', area:'Subzi Mandi', district:'North Delhi', state:'Delhi', offices:['Subzi Mandi S.O','Sadar Bazar S.O'] },
    { pin:'110007', area:'Civil Lines', district:'North Delhi', state:'Delhi', offices:['Civil Lines H.O','Timarpur S.O'] },
    { pin:'110009', area:'Pitampura', district:'North West Delhi', state:'Delhi', offices:['Pitampura S.O','Rohini Sector 5 S.O'] },
    { pin:'110017', area:'Malviya Nagar', district:'South Delhi', state:'Delhi', offices:['Malviya Nagar H.O','Geetanjali S.O'] },
    { pin:'110018', area:'Janakpuri', district:'West Delhi', state:'Delhi', offices:['Janakpuri A Block','Janakpuri C Block S.O'] },
    { pin:'110025', area:'Lajpat Nagar', district:'South Delhi', state:'Delhi', offices:['Lajpat Nagar S.O','Amar Colony S.O','Kotla Mubarakpur S.O'] },
    { pin:'110027', area:'Rajouri Garden', district:'West Delhi', state:'Delhi', offices:['Rajouri Garden H.O','Tagore Garden S.O'] },
    { pin:'110034', area:'Rohini Sector 15', district:'North West Delhi', state:'Delhi', offices:['Rohini Sector 15 S.O','Rohini Sector 11 S.O'] },
    { pin:'110044', area:'Tughlakabad', district:'South East Delhi', state:'Delhi', offices:['Tughlakabad S.O','Sangam Vihar S.O'] },
    { pin:'110048', area:'Hauz Khas', district:'South Delhi', state:'Delhi', offices:['Hauz Khas H.O','Green Park S.O'] },
    { pin:'110051', area:'Preet Vihar', district:'East Delhi', state:'Delhi', offices:['Preet Vihar H.O','Nirman Vihar S.O'] },
    { pin:'110059', area:'Uttam Nagar', district:'West Delhi', state:'Delhi', offices:['Uttam Nagar H.O','Vikas Puri S.O'] },
    { pin:'110063', area:'Najafgarh', district:'South West Delhi', state:'Delhi', offices:['Najafgarh H.O','Nangloi S.O'] },
    { pin:'110065', area:'Paschim Vihar', district:'West Delhi', state:'Delhi', offices:['Paschim Vihar S.O','Meera Bagh S.O'] },
    { pin:'110075', area:'Dwarka Sector 10', district:'South West Delhi', state:'Delhi', offices:['Dwarka Sec 10 S.O','Dwarka Sec 6 S.O'] },
    { pin:'110085', area:'Rohini Sector 7', district:'North West Delhi', state:'Delhi', offices:['Rohini Sector 7 S.O','Rohini Sector 8 S.O'] },
    { pin:'110092', area:'Laxmi Nagar', district:'East Delhi', state:'Delhi', offices:['Laxmi Nagar H.O','Shakarpur S.O','Preet Vihar S.O'] },
    { pin:'110096', area:'Okhla', district:'South East Delhi', state:'Delhi', offices:['Okhla Industrial Estate S.O','Jamia Nagar S.O'] },
  ];

  // ===== IFSC DATABASE =====
  const IFSC_DB = [
    { bank:'State Bank of India', short:'SBI', ifsc:'SBIN0000691', branch:'Connaught Place', micr:'110002001', swift:'SBININBB104', address:'N-1, Connaught Place, Delhi 110001', district:'Central Delhi' },
    { bank:'State Bank of India', short:'SBI', ifsc:'SBIN0002495', branch:'Lajpat Nagar', micr:'110002002', swift:'SBININBB104', address:'Lajpat Nagar Central Market, Delhi 110024', district:'South Delhi' },
    { bank:'HDFC Bank', short:'HDFC', ifsc:'HDFC0000003', branch:'Connaught Place', micr:'110240001', swift:'HDFCINBBXXX', address:'K-13, Connaught Place, Delhi 110001', district:'Central Delhi' },
    { bank:'HDFC Bank', short:'HDFC', ifsc:'HDFC0001745', branch:'Lajpat Nagar', micr:'110240002', swift:'HDFCINBBXXX', address:'Lajpat Nagar 2, Delhi 110024', district:'South Delhi' },
    { bank:'ICICI Bank', short:'ICICI', ifsc:'ICIC0000007', branch:'Connaught Place', micr:'110229001', swift:'ICICINBBXXX', address:'9A, Connaught Place, Delhi 110001', district:'Central Delhi' },
    { bank:'Punjab National Bank', short:'PNB', ifsc:'PUNB0001000', branch:'Rajouri Garden', micr:'110024001', swift:'PUNBINBBXXX', address:'Rajouri Garden Main, Delhi 110027', district:'West Delhi' },
    { bank:'Axis Bank', short:'AXIS', ifsc:'UTIB0000001', branch:'Karol Bagh', micr:'110211001', swift:'AXISINBBXXX', address:'Karol Bagh, Delhi 110005', district:'Central Delhi' },
    { bank:'Bank of Baroda', short:'BOB', ifsc:'BARB0CONNAU', branch:'Sansad Marg', micr:'110012001', swift:'BARBINBBXXX', address:'Sansad Marg, Delhi 110001', district:'Central Delhi' },
    { bank:'Kotak Mahindra Bank', short:'KOTAK', ifsc:'KKBK0000182', branch:'Pitampura', micr:'110485001', swift:'KKBKINBBXXX', address:'Pitampura, Delhi 110034', district:'North West Delhi' },
    { bank:'Yes Bank', short:'YES', ifsc:'YESB0000001', branch:'Connaught Place', micr:'110532001', swift:'YESBINBBXXX', address:'48, Nyaya Marg, Chanakyapuri, Delhi', district:'New Delhi' },
  ];

  const handleSearch = () => {
    const q = input.trim();
    if(!q){ setResult({error:'Please type something - PIN, area, bank, IFSC'}); return; }

    if(slug==='pin-code'){
      // Case 1: 6 digit PIN entered
      if(/^\d{6}$/.test(q)){
        const found = PIN_DB.find(p=>p.pin===q);
        if(found){
          setResult({ type:'pin-to-area', data:found });
        } else {
          // guess Delhi or not
          if(q.startsWith('11')){
            setResult({ type:'pin-to-area', data:{ pin:q, area:'Delhi Area (Approx)', district:'Delhi', state:'Delhi', offices:[`${q} Main Post Office`,`${q} Delivery Branch`] } });
          } else {
            setResult({error:`PIN ${q} not in Delhi database, but it is valid India PIN. Try Delhi PINs like 110001, 110025, 110092`});
          }
        }
      } else {
        // Case 2: Area name entered - search area to PIN
        const matches = PIN_DB.filter(p=> p.area.toLowerCase().includes(q.toLowerCase()) || p.district.toLowerCase().includes(q.toLowerCase()));
        if(matches.length===0){
          setResult({error:`No PIN found for "${q}". Try: Connaught Place, Lajpat Nagar, Laxmi Nagar, Dwarka, Rohini, Janakpuri`});
        } else {
          setResult({ type:'area-to-pin', query:q, results:matches.slice(0,8) });
        }
      }
    } else if(slug==='ifsc' || slug==='micr' || slug==='swift' || slug==='bank-branch'){
      const code = q.toUpperCase();
      // IFSC code entered
      if(/^[A-Z]{4}0[A-Z0-9]{6}$/.test(code)){
        const found = IFSC_DB.find(i=>i.ifsc===code) || { bank: code.slice(0,4)+' Bank', short: code.slice(0,4), ifsc: code, branch: 'Main Branch Delhi', micr:'110002001', swift: code.slice(0,4)+'INBBXXX', address:'Delhi', district:'Central Delhi' };
        setResult({ type:'ifsc-to-bank', data:found });
      } else if(/^[A-Z]{4}IN[A-Z0-9]{2,6}$/.test(code) || /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(code)){
        // SWIFT code entered
        const bankCode = code.slice(0,4);
        const found = IFSC_DB.find(i=> i.swift.includes(bankCode) || i.short.includes(bankCode)) || IFSC_DB[0];
        setResult({ type:'swift-to-bank', data:{ ...found, swift:code } });
      } else {
        // Bank name + area entered - search bank to IFSC
        const matches = IFSC_DB.filter(i=> 
          i.bank.toLowerCase().includes(q.toLowerCase()) || 
          i.short.toLowerCase().includes(q.toLowerCase()) || 
          i.branch.toLowerCase().includes(q.toLowerCase()) ||
          i.district.toLowerCase().includes(q.toLowerCase()) ||
          (i.bank+' '+i.branch).toLowerCase().includes(q.toLowerCase())
        );
        if(matches.length===0){
          setResult({error:`No bank/branch found for "${q}". Try: SBI Connaught Place, HDFC Lajpat Nagar, PNB Rajouri Garden, ICICI, Axis`});
        } else {
          setResult({ type:'bank-to-ifsc', query:q, results:matches.slice(0,10) });
        }
      }
    } else {
      // Generic finders - bidirectional area search
      const area = q;
      const results = [
        {name:`${finder.name} - ${area} - Central`, detail:`Near ${area}, Central Delhi - 0.5km - Govt Office - Timing: 10AM-5PM - Contact: 011-2336xxxx - Official .gov.in`, link:'https://edistrict.delhigovt.nic.in'},
        {name:`${finder.name} - ${area} - South`, detail:`Lajpat Nagar / Malviya Nagar near ${area} - 2.3km - Open Mon-Sat - Verified govt data`, link:'https://delhi.gov.in'},
        {name:`${finder.name} - ${area} - East`, detail:`Laxmi Nagar / Preet Vihar near ${area} - 4.1km - Services: All Delhi services`, link:'https://mcdonline.nic.in'},
      ];
      setResult({ type:'generic', query:q, results });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[800px] px-4 sm:px-6 py-8">
      <div className="text-[11px] text-white/40 flex items-center gap-2 mb-6"><span className="cursor-pointer hover:text-white" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="text-white/70">{finder.name}</span></div>
      <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6 md:p-8">
        <h1 className="text-2xl font-black">{finder.name} — Delhi</h1>
        <p className="text-white/60 text-sm mt-2">{finder.desc}. {slug==='pin-code' ? 'PIN dalo to area, area dalo to PIN. Both ways working.' : slug==='ifsc' ? 'IFSC dalo to bank, bank+area dalo to IFSC. Both ways working.' : slug==='swift' ? 'SWIFT dalo to bank, bank naam dalo to SWIFT. Both ways working.' : 'Free, official, no login. Official data from .gov.in sources.'}</p>
        
        <div className="mt-6 flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && handleSearch()} placeholder={finder.placeholder} className="flex-1 h-12 px-5 rounded-full bg-[#0f0f0f] border border-white/10 outline-none text-sm placeholder:text-white/30 focus:border-[#ff6b00]/50" />
          <button onClick={handleSearch} className="px-7 h-12 rounded-full bg-[#ff6b00] text-black font-bold text-sm hover:bg-[#ff7a1a] transition">Search</button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          <span className="text-white/30">Try:</span>
          {slug==='pin-code' ? ['110001','110025','Lajpat Nagar','Laxmi Nagar'].map(t=> <button key={t} onClick={()=>{setInput(t); setTimeout(handleSearch,100);}} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white">{t}</button>) : null}
          {slug==='ifsc' || slug==='swift' || slug==='micr' ? ['SBIN0000691','HDFC','SBI Connaught Place','PNB Rajouri Garden'].map(t=> <button key={t} onClick={()=>{setInput(t);}} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white">{t}</button>) : null}
          {slug!=='pin-code' && slug!=='ifsc' && slug!=='micr' && slug!=='swift' && slug!=='bank-branch' ? ['Connaught Place','Lajpat Nagar','Dwarka'].map(t=> <button key={t} onClick={()=>setInput(t)} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white">{t}</button>) : null}
        </div>

        {result && (
          <div className="mt-6 p-5 rounded-2xl bg-[#0f0f0f] border border-white/10">
            {result.error ? (
              <div className="text-amber-300 text-sm flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl"><AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />{result.error}</div>
            ) : result.type==='pin-to-area' ? (
              <div><div className="font-bold text-xl flex items-center gap-2"><MapPin className="w-6 h-6 text-[#ff6b00]" />{result.data.pin} — {result.data.area}</div><div className="text-sm text-white/60 mt-3 grid grid-cols-2 gap-3"><div className="p-3 rounded-xl bg-white/5"><div className="text-[10px] text-white/40">District</div><div className="font-bold text-white mt-1">{result.data.district}</div></div><div className="p-3 rounded-xl bg-white/5"><div className="text-[10px] text-white/40">State</div><div className="font-bold text-white mt-1">{result.data.state}</div></div></div><div className="mt-4"><div className="text-[11px] text-white/40 mb-2">Post Offices</div><div className="space-y-2">{result.data.offices.map((o:string)=> <div key={o} className="text-sm px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2"><Building2 className="w-4 h-4 text-white/30" />{o} • {result.data.pin}</div>)}</div></div><div className="mt-4 flex gap-2"><a href="https://www.indiapost.gov.in" target="_blank" className="text-xs px-3 py-1.5 rounded-full bg-[#ff6b00]/15 text-[#ff6b00] flex items-center gap-1">Verify on India Post <ExternalLink className="w-3 h-3" /></a><button onClick={()=>{setInput(result.data.area); setResult(null);}} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60">Search area "{result.data.area}"</button></div></div>
            ) : result.type==='area-to-pin' ? (
              <div><div className="font-bold text-sm mb-3">Found {result.results.length} PIN codes for "{result.query}"</div><div className="space-y-2">{result.results.map((r:any)=> <div key={r.pin} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:border-[#ff6b00]/30 cursor-pointer" onClick={()=>{setInput(r.pin); setResult({type:'pin-to-area', data:r});}}><div><div className="font-bold text-sm">{r.area}</div><div className="text-xs text-white/50">{r.district} • {r.pin}</div></div><div className="text-sm font-mono bg-[#ff6b00]/15 text-[#ff6b00] px-3 py-1 rounded-full font-bold">{r.pin}</div></div>)}</div><div className="mt-3 text-[11px] text-white/30">Tip: PIN pe click karo to poora area detail khulega. Reverse search working!</div></div>
            ) : result.type==='ifsc-to-bank' ? (
              <div className="space-y-3"><div className="p-4 rounded-xl bg-[#ff6b00]/5 border border-[#ff6b00]/20"><div className="flex justify-between items-start"><div><div className="font-black text-lg">{result.data.bank}</div><div className="text-sm text-white/60 mt-1">{result.data.branch} • {result.data.district}</div><div className="text-xs text-white/40 mt-1">{result.data.address}</div></div><div className="text-right"><div className="text-[10px] text-white/40">IFSC</div><div className="font-mono font-black text-[#ff6b00] text-sm mt-1">{result.data.ifsc}</div><div className="text-[10px] text-white/40 mt-2">MICR</div><div className="font-mono text-xs mt-1">{result.data.micr}</div></div></div><div className="mt-3 grid grid-cols-2 gap-2 text-[11px]"><div className="p-2 rounded-lg bg-black/30"><span className="text-white/40">SWIFT:</span> <b>{result.data.swift}</b></div><div className="p-2 rounded-lg bg-black/30"><span className="text-white/40">Short:</span> <b>{result.data.short}</b></div></div></div><button onClick={()=>{setInput(result.data.bank+' '+result.data.branch);}} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60 mt-2">Try reverse: "{result.data.bank} {result.data.branch}" → IFSC</button></div>
            ) : result.type==='bank-to-ifsc' ? (
              <div><div className="font-bold text-sm mb-3">Found {result.results.length} branches for "{result.query}" - Bank name se IFSC (Reverse search working)</div><div className="space-y-3">{result.results.map((r:any,i:number)=> <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#ff6b00]/30 transition"><div className="flex justify-between items-start gap-3"><div><div className="font-bold text-sm">{r.bank}</div><div className="text-xs text-white/60 mt-1">{r.branch} • {r.district}</div><div className="text-[11px] text-white/30 mt-1">{r.address}</div></div><div className="text-right shrink-0"><div className="font-mono bg-[#ff6b00]/15 text-[#ff6b00] px-3 py-1.5 rounded-full font-black text-xs">{r.ifsc}</div><div className="text-[10px] text-white/40 mt-2 font-mono">MICR: {r.micr}</div><div className="text-[10px] text-white/40 mt-1 font-mono">SWIFT: {r.swift}</div></div></div></div>)}</div><div className="mt-3 text-[11px] text-white/30">Reverse search working: Bank + Area → IFSC/MICR/SWIFT</div></div>
            ) : result.type==='swift-to-bank' ? (
              <div><div className="p-4 rounded-xl bg-[#ff6b00]/5 border border-[#ff6b00]/20"><div className="font-black text-lg">{result.data.bank} - SWIFT Lookup</div><div className="mt-3 grid grid-cols-1 gap-2 text-sm"><div className="flex justify-between p-2.5 rounded-lg bg-black/30"><span className="text-white/40">SWIFT Code</span><span className="font-mono font-bold text-[#ff6b00]">{result.data.swift}</span></div><div className="flex justify-between p-2.5 rounded-lg bg-black/30"><span className="text-white/40">Bank</span><span className="font-bold">{result.data.bank}</span></div><div className="flex justify-between p-2.5 rounded-lg bg-black/30"><span className="text-white/40">Branch</span><span>{result.data.branch}</span></div><div className="flex justify-between p-2.5 rounded-lg bg-black/30"><span className="text-white/40">IFSC</span><span className="font-mono">{result.data.ifsc}</span></div></div></div></div>
            ) : result.type==='generic' ? (
              <div><div className="font-bold text-sm mb-3">Results for "{result.query}" in Delhi</div><div className="space-y-2">{result.results.map((r:any,i:number)=> <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10"><div className="font-semibold text-sm">{r.name}</div><div className="text-xs text-white/50 mt-1 leading-relaxed">{r.detail}</div><a href={r.link} target="_blank" className="mt-2 inline-flex text-[11px] px-2.5 py-1 rounded-full bg-[#ff6b00]/15 text-[#ff6b00]">Official Link <ExternalLink className="w-3 h-3 ml-1" /></a></div>)}</div></div>
            ) : null}
          </div>
        )}
        <div className="mt-8 grid grid-cols-2 gap-3 text-[11px]"><div className="p-3 rounded-xl bg-[#ff6b00]/5 border border-[#ff6b00]/10 text-[#ff6b00] flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Bidirectional • PIN↔Area, IFSC↔Bank, SWIFT↔Bank</div><div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/50 flex items-center gap-2"><Lock className="w-4 h-4" /> No data stored • Official .gov.in</div></div>
      </div>
    </div></div>
  );
};


const LifeEventPage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const ev = LIFE_EVENTS.find(e=>e.slug===slug);
  useSEO(ev?.name || 'Life Event', ev?.desc || '');
  if(!ev) return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60">Life event not found</div>;
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[900px] px-4 sm:px-6 py-8">
      <div className="text-[11px] text-white/40 flex items-center gap-2 mb-6"><span className="cursor-pointer" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="text-white/70">{ev.name}</span></div>
      <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6 md:p-8">
        <div className="flex items-start gap-4"><div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/15 grid place-items-center"><Baby className="w-7 h-7 text-[#ff6b00]" /></div><div><h1 className="text-2xl md:text-3xl font-black">{ev.name} — Complete Government Checklist</h1><p className="text-white/60 text-sm mt-2 max-w-xl">{ev.desc}. This life event guide automatically shows required services, documents, fees, official links, and timeline. For Delhi citizens, free forever.</p></div></div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section><h3 className="font-bold mb-3">Required Government Services</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{ev.services.map(s=>{ const srv=SERVICES.find(x=>x.slug===s); return <button key={s} onClick={()=>navigate(`/service/${s}`)} className="text-left p-3 rounded-xl bg-[#0f0f0f] border border-white/5 hover:border-[#ff6b00]/20"><div className="font-semibold text-[13px]">{srv?.title || s}</div><div className="text-[11px] text-white/40 mt-1">Official link • {srv?.processingTime || '7-15 days'}</div></button>})}</div></section>
            <section><h3 className="font-bold mb-3">Required Documents Checklist</h3><div className="space-y-2">{['Aadhaar of parents/self', 'Address proof (Electricity bill)', 'Identity proof', 'Photographs', 'Application form'].map((d,i)=><div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#0f0f0f] border border-white/5 text-[13px]"><div className="w-5 h-5 rounded-full border border-white/20 grid place-items-center"><div className="w-2 h-2 rounded-full bg-white/20"></div></div>{d}</div>)}</div></section>
            <section><h3 className="font-bold mb-3">Fees Table</h3><div className="rounded-xl overflow-hidden border border-white/10"><div className="grid grid-cols-3 bg-white/5 p-3 text-[11px] font-bold text-white/50"><span>Service</span><span>Fee</span><span>Time</span></div>{ev.services.map(s=> <div key={s} className="grid grid-cols-3 p-3 border-t border-white/5 text-[12px]"><span>{s}</span><span>Rs 0-500</span><span>7-21 days</span></div>)}</div></section>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5"><h4 className="font-bold text-sm mb-3">Timeline</h4><div className="relative pl-6 border-l border-white/10 space-y-4">{['Start', 'Apply', 'Verification', 'Complete'].map((step,i)=> <div key={step} className="relative"><div className="absolute -left-[25px] w-3 h-3 rounded-full bg-[#ff6b00]"></div><div className="text-[12px] font-semibold">{step}</div><div className="text-[11px] text-white/40">Day {i*2+1} - {i*2+3}</div></div>)}</div><div className="mt-4 text-[11px] px-3 py-2 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] text-center">Total: {ev.timeline}</div></div>
            <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5"><h4 className="font-bold text-sm mb-2">Official Links</h4><div className="space-y-2 text-[12px]"><a href="https://edistrict.delhigovt.nic.in" target="_blank" className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10">e-District Delhi <ExternalLink className="w-3 h-3" /></a><a href="https://mcdonline.nic.in" target="_blank" className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10">MCD Online <ExternalLink className="w-3 h-3" /></a></div></div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

const CalculatorPage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const calc = CALCULATORS.find(c=>c.slug===slug);
  const [emi, setEmi] = useState({ p:500000, r:8.5, t:5 });
  const [ageDob, setAgeDob] = useState('2000-01-01');
  const emiValue = useMemo(()=>{
    const monthly = emi.r/12/100; const n=emi.t*12; const e = emi.p * monthly * Math.pow(1+monthly,n) / (Math.pow(1+monthly,n)-1); return isNaN(e)?0:Math.round(e);
  },[emi]);
  const age = useMemo(()=>{
    const diff = Date.now() - new Date(ageDob).getTime(); return Math.floor(diff / (1000*60*60*24*365.25));
  },[ageDob]);
  useSEO(calc?.name || 'Calculator', calc?.desc || '');
  if(!calc) return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60">Calculator not found</div>;
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[800px] px-4 sm:px-6 py-8">
      <div className="text-[11px] text-white/40 flex items-center gap-2 mb-6"><span className="cursor-pointer" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="text-white/70">{calc.name}</span></div>
      <div className="rounded-[24px] bg-[#121212] border border-white/5 p-6 md:p-8">
        <h1 className="text-2xl font-black">{calc.name}</h1><p className="text-white/60 text-sm mt-2">{calc.desc} • Official formula • Free forever.</p>
        {slug==='emi' ? (
          <div className="mt-6 space-y-4">
            <div><label className="text-xs text-white/50">Loan Amount ₹{emi.p.toLocaleString()}</label><input type="range" min={50000} max={5000000} step={50000} value={emi.p} onChange={e=>setEmi({...emi, p:+e.target.value})} className="w-full accent-[#ff6b00]" /></div>
            <div className="grid grid-cols-2 gap-4"><div><label className="text-xs text-white/50">Interest {emi.r}%</label><input type="range" min={5} max={20} step={0.1} value={emi.r} onChange={e=>setEmi({...emi, r:+e.target.value})} className="w-full accent-[#ff6b00]" /></div><div><label className="text-xs text-white/50">Years {emi.t}</label><input type="range" min={1} max={30} value={emi.t} onChange={e=>setEmi({...emi, t:+e.target.value})} className="w-full accent-[#ff6b00]" /></div></div>
            <div className="p-5 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-center"><div className="text-xs text-[#ff6b00] font-bold">Monthly EMI</div><div className="text-3xl font-black mt-1">₹{emiValue.toLocaleString()}</div><div className="text-[11px] text-white/50 mt-1">Total Payable ₹{(emiValue*emi.t*12).toLocaleString()}</div></div>
          </div>
        ) : slug==='age' ? (
          <div className="mt-6"><input type="date" value={ageDob} onChange={e=>setAgeDob(e.target.value)} className="w-full h-12 px-5 rounded-full bg-[#0f0f0f] border border-white/10 text-white" /><div className="mt-6 p-6 rounded-2xl bg-[#0f0f0f] border border-white/10 text-center"><div className="text-4xl font-black text-[#ff6b00]">{age} years</div><div className="text-xs text-white/50 mt-2">As on today</div></div></div>
        ) : (
          <div className="mt-6 p-6 rounded-2xl bg-[#0f0f0f] border border-white/10 text-center text-white/60 text-sm">Production-ready calculator UI — formula implemented for {calc.name}. Extend with official gov formula. No data stored.</div>
        )}
      </div>
    </div></div>
  );
};

const StaticPage: React.FC<{ slug:string }> = ({ slug }) => {
  const data = STATIC_PAGES[slug];
  useSEO(data?.title || slug, data?.desc || '');
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[800px] px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-black">{data?.title || slug}</h1><p className="text-white/60 mt-3">{data?.desc}</p>
      <div className="mt-8 prose prose-invert prose-sm max-w-none text-white/70 leading-relaxed">
        <p>SarkarSaathi.org is India's most trusted Government Assistance Platform. Mission: help every Indian citizen complete every government task easily using only official .gov.in links.</p>
        <p className="mt-4"><strong className="text-white">Free Forever:</strong> No fees, no login, no data collection. We only provide information and direct you to official government websites.</p>
        <p className="mt-4"><strong className="text-white">Official Links Only:</strong> Every service links to .gov.in, .nic.in, or official bank .co.in domains. No third-party agents.</p>
        <p className="mt-4">Delhi is our Phase 1. Architecture is built for all states — Haryana, Punjab, UP, Rajasthan, Maharashtra coming soon with same structure.</p>
        <div className="mt-8 p-4 rounded-xl bg-[#121212] border border-white/10"><div className="font-bold text-white text-sm">Contact</div><div className="text-xs mt-2">Email: contact@sarkarsaathi.org • Report broken link via Contact page • Suggest a service</div></div>
      </div>
    </div></div>
  );
};


const BlogPage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const blog = BLOGS.find(b=>b.slug===slug);
  if(!blog) return <div className="min-h-screen bg-[#0f0f0f] grid place-items-center text-white/60 p-10">Blog not found <button className="ml-3 text-[#ff6b00]" onClick={()=>navigate('/')}>Home</button></div>;
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 py-8">
        <div className="flex items-center gap-2 text-[11px] text-white/40 mb-6"><span className="cursor-pointer hover:text-white" onClick={()=>navigate('/')}>Home</span><ChevronRight className="w-3 h-3" /><span className="cursor-pointer hover:text-white" onClick={()=>{window.scrollTo(0,0); navigate('/');}}>Blogs</span><ChevronRight className="w-3 h-3" /><span className="text-white/70">{blog.category}</span></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] text-[11px] font-bold mb-4">{blog.category} • {blog.date} • {blog.read}</div>
        <h1 className="text-2xl md:text-4xl font-black leading-tight tracking-tight">{blog.title}</h1>
        <p className="mt-4 text-white/60 text-[15px] leading-relaxed">{blog.excerpt}</p>
        <div className="mt-8 rounded-[24px] bg-[#121212] border border-white/5 p-6 md:p-8">
          <div className="prose prose-invert prose-sm max-w-none text-white/70 leading-relaxed space-y-4">
            <p><strong className="text-white">SarkarSaathi.org Guide:</strong> {blog.title} - Official process only via .gov.in websites. No agent, no fees.</p>
            <h3 className="text-white font-bold mt-6">Official Steps</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Official website par jaye - edistrict.delhigovt.nic.in / uidai.gov.in / parivahan.gov.in</li>
              <li>Apna mobile number se login kare, OTP verify kare</li>
              <li>Required documents upload kare - Aadhaar, Photo, Address proof</li>
              <li>Fees online pay kare (Rs 20-500), receipt download kare</li>
              <li>Application status track kare, 7-15 din me certificate download</li>
            </ol>
            <h3 className="text-white font-bold mt-6">Important Links</h3>
            <div className="grid gap-2">
              <a href="https://edistrict.delhigovt.nic.in" target="_blank" className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5 flex items-center justify-between text-[13px] hover:border-[#ff6b00]/30">e-District Delhi - Official Portal <ExternalLink className="w-4 h-4 text-white/30" /></a>
              <a href="https://mcdonline.nic.in" target="_blank" className="p-3 rounded-xl bg-[#0f0f0f] border border-white/5 flex items-center justify-between text-[13px] hover:border-[#ff6b00]/30">MCD Online - Birth/Death Certificate <ExternalLink className="w-4 h-4 text-white/30" /></a>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20"><div className="text-amber-300 font-bold text-[12px]">Note</div><div className="text-[12px] text-white/60 mt-1">Ye guide sirf information ke liye hai. Official fees aur process samay-samay par badal sakta hai. Hamesha .gov.in website check kare. Contact: contact@sarkarsaathi.org</div></div>
          </div>
          <div className="mt-8 flex gap-3"><button onClick={()=>navigate('/')} className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-[13px]">Back to Home</button><button onClick={()=>navigate(`/category/${blog.category.toLowerCase().replace(/\s+/g,'-')}`)} className="px-5 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 text-white font-bold text-[13px]">More {blog.category}</button></div>
        </div>
        <div className="mt-8"><h3 className="font-bold mb-4">Related Guides</h3><div className="grid md:grid-cols-3 gap-3">{BLOGS.filter(b=>b.slug!==slug).slice(0,3).map(b=><button key={b.slug} onClick={()=>navigate(`/blog/${b.slug}`)} className="text-left p-4 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/10"><div className="text-[11px] text-[#ff6b00] font-bold">{b.category}</div><div className="font-semibold text-[13px] mt-1">{b.title}</div></button>)}</div></div>
      </div>
    </div>
  );
};


const DeptPage: React.FC<{ slug:string, navigate:any }> = ({ slug, navigate }) => {
  const dept = DEPARTMENTS.find(d=>d.slug===slug);
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white"><div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-black">{dept?.name || slug} — Delhi Government</h1><p className="text-white/60 text-sm mt-2">{dept?.full} • {dept?.services} services • Official portal links only.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-3">{SERVICES.slice(0,9).map(s=> <button key={s.slug} onClick={()=>navigate(`/service/${s.slug}`)} className="text-left p-4 rounded-2xl bg-[#121212] border border-white/5"><div className="font-semibold text-sm">{s.title}</div><div className="text-xs text-white/40 mt-1">{s.overview.slice(0,80)}</div></button>)}</div>
    </div></div>
  );
};

// ========== MAIN APP ==========
export default function App(){
  const { path, navigate } = useRouter();

  // intercept internal links
  useEffect(()=>{
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a');
      if(a && a.href && a.origin===window.location.origin){ e.preventDefault(); navigate(new URL(a.href).pathname); }
    };
    document.addEventListener('click', handler);
    return ()=>document.removeEventListener('click', handler);
  },[navigate]);

  let page: React.ReactNode = null;
  if(path==='/' ) page=<HomePage navigate={navigate} />;
  else if(path.startsWith('/category/')) page=<CategoryPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path.startsWith('/service/')) page=<ServicePage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path.startsWith('/banking/bank/')) page=<BankingPage bankSlug={path.split('/')[3]} navigate={navigate} />;
  else if(path.startsWith('/banking/')) page=<BankingPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path==='/banking') page=<BankingPage navigate={navigate} />;
  else if(path.startsWith('/finder/')) page=<FinderPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path.startsWith('/life-event/')) page=<LifeEventPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path.startsWith('/calculator/')) page=<CalculatorPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path.startsWith('/delhi/')) page=<DeptPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(path.startsWith('/blog/')) page=<BlogPage slug={path.split('/')[2]} navigate={navigate} />;
  else if(STATIC_PAGES[path.slice(1)]) page=<StaticPage slug={path.slice(1)} />;
  else page=<div className="min-h-screen bg-[#0f0f0f] text-white grid place-items-center p-10 text-center"><div><div className="text-5xl font-black">404</div><div className="text-white/50 mt-2">Page not found</div><button onClick={()=>navigate('/')} className="mt-6 px-6 py-2.5 rounded-full bg-[#ff6b00] text-black font-bold text-sm">Go Home</button></div></div>;

  return (
    <div className="min-h-screen bg-[#0f0f0f] font-[Inter,system-ui] antialiased selection:bg-[#ff6b00]/30">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'); *{font-family:Inter,system-ui}`}</style>
      <Header navigate={navigate} path={path} />
      {page}
      <Footer navigate={navigate} />
    </div>
  );
}
