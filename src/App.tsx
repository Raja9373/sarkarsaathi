import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  Search, MapPin, ShieldCheck, BadgeCheck, Clock, FileText, CreditCard, Home, Car, GraduationCap,
  Briefcase, HeartPulse, Scale, Building2, Landmark, FileSearch, Calculator, Download, CheckCircle2,
  AlertTriangle, ChevronRight, ExternalLink, Phone, Menu, X, ArrowRight, Users, Baby, School, 
  Heart, Building, ShoppingBag, UserCog, Banknote, Plane, Info, Globe, Zap, Droplets, FileCheck,
  IdCard, ScrollText, Shield, Hammer, Megaphone, BookOpen, Siren, Headphones, Link2, Calendar,
  Fingerprint, FileStack, RefreshCw, Edit3, HelpCircle, Newspaper, Lock, Eye, Timer, Award,
  IndianRupee, FileBadge, SearchCode, LocateFixed, Bus, Train, Store, Gavel, LayoutDashboard
} from 'lucide-react';

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

// generate rest services quickly
const extraServiceSlugs = [
  'death-certificate','marriage-certificate','caste-certificate','domicile-certificate','voter-id','ration-card',
  'trade-licence','shop-establishment','gst-registration','udyam-registration','ews-certificate','obc-certificate',
  'disability-certificate','senior-citizen-card','labour-card','vehicle-registration','rc-status','puc-certificate',
  'learner-licence','arms-licence','police-verification','fir-online','rti-online','delhi-metro-card','dtc-bus-pass',
  'scholarship-delhi','old-age-pension','widow-pension','ladli-yojana','water-connection','sewer-connection','building-plan-approval'
];
extraServiceSlugs.forEach((slug, i)=>{
  if(!SERVICES.find(s=>s.slug===slug)){
    SERVICES.push({
      slug,
      title: slug.split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '),
      category: ['certificates','licences','identity-documents','vehicles-transport','property-housing'][i%5],
      state: 'delhi',
      keywords: [...slug.split('-'), 'rti', 'right to information', 'complaint', 'grievance', 'family', 'marriage', 'pension', 'income', 'caste', 'birth', 'death', 'property', 'tax', 'water', 'electricity', 'aadhaar', 'pan'],
      officialUrl: 'https://edistrict.delhigovt.nic.in',
      overview: `${slug.replace(/-/g,' ')} service in Delhi via e-District portal. Complete guide with official links, fees, and step-by-step process.`,
      eligibility: ['Delhi resident', 'Valid ID proof'],
      documents: ['Aadhaar Card', 'Address Proof', 'Passport Photo', 'Application Form'],
      onlineSteps: ['Visit official portal', 'Create e-District account', 'Fill application', 'Upload documents', 'Pay fee and track status'],
      offlineSteps: ['Visit concerned department office with documents'],
      fees: 'Rs 20-500 depending on service',
      processingTime: '7-21 days',
      lastUpdated: '2024-12-01',
      faqs: [{ q: 'Can I apply online?', a: 'Yes, via e-District Delhi portal.' }],
      commonMistakes: ['Incomplete documents'],
      importantNotes: ['Use only official .gov.in links'],
      related: ['aadhaar-card','income-certificate']
    } as any)
  }
});

const STATIC_PAGES: any = {
  about: { title: 'About SarkarSaathi.org', desc: 'India most trusted government assistance platform.' },
  privacy: { title: 'Privacy Policy', desc: 'We do not collect personal data.' },
  contact: { title: 'Contact Us', desc: 'Report broken links, suggest services.' },
  disclaimer: { title: 'Disclaimer', desc: 'Official links only, not a government website.' },
  terms: { title: 'Terms & Conditions', desc: 'Free forever, no login.' },
  sitemap: { title: 'Sitemap', desc: 'All services, finders, calculators.' },
  faq: { title: 'FAQ', desc: 'Common questions about SarkarSaathi.' },
};
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { LifeEventsSection } from './components/LifeEventsSection';
import { BankingHub } from './components/BankingHub';
import { FindersHub } from './components/FindersHub';
import { StatusCheckHub } from './components/StatusCheckHub';
import { OnlineApplyHub } from './components/OnlineApplyHub';
import { PaymentsHub } from './components/PaymentsHub';
import { DownloadCentre } from './components/DownloadCentre';
import { CalculatorsHub } from './components/CalculatorsHub';
import { DelhiGovtHub } from './components/DelhiGovtHub';
import { ComplaintsHub } from './components/ComplaintsHub';
import { BlogHub } from './components/BlogHub';
import { LegalPages } from './components/LegalPages';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';

import { ActiveTab, ServiceItem, StateId } from './types';
import { SERVICES_LIST } from './data/servicesData';
import { ExternalLink, CheckCircle2, Search, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currentStateId, setCurrentStateId] = useState<StateId>('delhi');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  // Finder Initial Selection state
  const [finderInitialId, setFinderInitialId] = useState<string>('govt-offices');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

  // Search & Filter state
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchFilterQuery, setSearchFilterQuery] = useState<string>('');

  // Accessibility state
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  const fontClass = fontSizeLevel === 1 ? 'text-[105%]' : fontSizeLevel === 2 ? 'text-[112%]' : fontSizeLevel === -1 ? 'text-[92%]' : '';

  const filteredServices = SERVICES_LIST.filter(srv => {
    const catLower = selectedCategoryFilter.toLowerCase();
    const matchesCat = selectedCategoryFilter === 'all' ||
      srv.category === selectedCategoryFilter ||
      (srv.secondaryCategories && srv.secondaryCategories.includes(selectedCategoryFilter)) ||
      srv.tags.some(t => t.toLowerCase() === catLower) ||
      (catLower === 'renewal' && (
        srv.category === 'Renewal' ||
        (srv.secondaryCategories && srv.secondaryCategories.includes('Renewal')) ||
        srv.tags.some(t => t.toLowerCase().includes('renew') || t.toLowerCase().includes('re-issue') || t.toLowerCase().includes('reissue')) ||
        srv.title.toLowerCase().includes('renew') ||
        srv.title.toLowerCase().includes('re-issue') ||
        srv.shortDesc.toLowerCase().includes('renew')
      )) ||
      (catLower === 'corrections' && (
        srv.category === 'Corrections' ||
        (srv.secondaryCategories && srv.secondaryCategories.includes('Corrections')) ||
        srv.tags.some(t => t.toLowerCase().includes('correct') || t.toLowerCase().includes('update') || t.toLowerCase().includes('change') || t.toLowerCase().includes('rectif')) ||
        srv.title.toLowerCase().includes('correction') ||
        srv.title.toLowerCase().includes('update')
      )) ||
      (catLower === 'rti' && (
        srv.category === 'RTI' ||
        (srv.secondaryCategories && srv.secondaryCategories.includes('RTI')) ||
        srv.tags.some(t => t.toLowerCase().includes('rti')) ||
        srv.title.toLowerCase().includes('rti')
      )) ||
      (catLower === 'family services' && (srv.category === 'Family Services' || srv.tags.some(t => t.toLowerCase().includes('family') || t.toLowerCase().includes('ration') || t.toLowerCase().includes('marriage') || t.toLowerCase().includes('ladli')))) ||
      (catLower === 'health' && (srv.category === 'Health' || srv.category === 'Healthcare & Medical' || (srv.secondaryCategories && (srv.secondaryCategories.includes('Health') || srv.secondaryCategories.includes('Healthcare & Medical'))) || srv.tags.some(t => t.toLowerCase().includes('health') || t.toLowerCase().includes('hospital') || t.toLowerCase().includes('medical') || t.toLowerCase().includes('arogya')))) ||
      (catLower === 'business' && (srv.category === 'Business' || (srv.secondaryCategories && srv.secondaryCategories.includes('Business')) || srv.tags.some(t => t.toLowerCase().includes('business') || t.toLowerCase().includes('gst') || t.toLowerCase().includes('msme') || t.toLowerCase().includes('company')))) ||
      ((catLower === 'police & legal' || catLower.includes('police') || catLower.includes('legal')) && (
        srv.category === 'Police & Legal' ||
        srv.category.toLowerCase().includes('police') ||
        srv.category.toLowerCase().includes('legal') ||
        (srv.secondaryCategories && srv.secondaryCategories.some(c => c.toLowerCase().includes('police') || c.toLowerCase().includes('legal'))) ||
        srv.tags.some(t => t.toLowerCase().includes('police') || t.toLowerCase().includes('pcc') || t.toLowerCase().includes('fir') || t.toLowerCase().includes('court') || t.toLowerCase().includes('legal') || t.toLowerCase().includes('challan') || t.toLowerCase().includes('arms')) ||
        srv.department.toLowerCase().includes('police') ||
        srv.department.toLowerCase().includes('court')
      )) ||
      ((catLower === 'complaints' || catLower.includes('complaint') || catLower.includes('grievance')) && (
        srv.category === 'Complaints' ||
        (srv.secondaryCategories && srv.secondaryCategories.some(c => c.toLowerCase().includes('complaint') || c.toLowerCase().includes('grievance'))) ||
        srv.tags.some(t => t.toLowerCase().includes('complaint') || t.toLowerCase().includes('grievance') || t.toLowerCase().includes('pgms') || t.toLowerCase().includes('cpgrams') || t.toLowerCase().includes('1031') || t.toLowerCase().includes('mcd 311'))
      ));

    const matchesSearch = searchFilterQuery === '' ||
      srv.title.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      srv.hindiTitle.includes(searchFilterQuery) ||
      srv.department.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      srv.tags.some(t => t.toLowerCase().includes(searchFilterQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleSelectCategory = (catName: string) => {
    setSelectedCategoryFilter(catName);
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchQueryFromHero = (query: string) => {
    setSearchFilterQuery(query);
    if (query.trim() !== '') {
      setActiveTab('services');
    }
  };

  const handleSelectRelatedService = (relatedId: string) => {
    const found = SERVICES_LIST.find(s => s.id === relatedId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleSelectDept = (deptId: string) => {
    setSelectedDeptId(deptId);
    setActiveTab('delhi-govt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-zinc-100 font-sans selection:bg-[#FF6B00] selection:text-white ${fontClass} ${highContrast ? 'contrast-125' : ''}`}>
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentStateId={currentStateId}
        setCurrentStateId={setCurrentStateId}
        onOpenEmergency={() => setEmergencyOpen(true)}
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      {/* Main Tab Router View */}
      <main className="min-h-[70vh]">
        {activeTab === 'home' && (
          <div>
            {/* Large Hero Banner */}
            <HeroSection
              allServices={SERVICES_LIST}
              onSelectService={(srv) => setSelectedService(srv)}
              onSearchQuery={handleSearchQueryFromHero}
            />

            {/* Main Categories Grid */}
            <CategoryGrid
              onSelectCategory={handleSelectCategory}
              setActiveTab={setActiveTab}
              onOpenEmergency={() => setEmergencyOpen(true)}
              onSelectGovtOffices={() => {
                setFinderInitialId('govt-offices');
                setActiveTab('finders');
              }}
              onSelectGovernmentFinders={() => {
                setFinderInitialId('govt-offices');
                setActiveTab('finders');
              }}
            />

            {/* Featured Popular Services Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto border-t border-zinc-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Fast Access Portals</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Popular Delhi & Central Services</h2>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
                >
                  View All Services ({SERVICES_LIST.length}) <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES_LIST.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition cursor-pointer space-y-3 flex flex-col justify-between shadow-xl group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800">
                          {srv.category}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> .gov.in Verified
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition">{srv.title}</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{srv.hindiTitle}</p>
                      <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">{srv.shortDesc}</p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                      <span className="text-zinc-400 font-semibold">{srv.fees}</span>
                      <span className="font-bold text-[#FF6B00] group-hover:translate-x-1 transition flex items-center gap-1">
                        Step-by-Step Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Life Events Featured Section */}
            <LifeEventsSection />

            {/* Banking Hub Section */}
            <BankingHub />
          </div>
        )}

        {activeTab === 'services' && (
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-8 border-b border-zinc-800 pb-6">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Citizen Directory</span>
              <h2 className="text-3xl font-black text-white mt-1">Government Services Directory</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Step-by-step guides, required document lists, and official .gov.in links.
              </p>
            </div>

            {/* Filter Search Input */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchFilterQuery}
                  onChange={(e) => setSearchFilterQuery(e.target.value)}
                  placeholder="Filter by service name, Aadhaar, PAN, Passport, MCD..."
                  className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              {selectedCategoryFilter !== 'all' && (
                <button
                  onClick={() => setSelectedCategoryFilter('all')}
                  className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white"
                >
                  Clear Category Filter ({selectedCategoryFilter})
                </button>
              )}
            </div>

            {filteredServices.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-[#121824] border border-zinc-800 space-y-4 max-w-lg mx-auto my-8">
                <Search className="w-10 h-10 text-zinc-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No Direct Services Found</h3>
                <p className="text-xs text-zinc-400">
                  No directory entries match your current search criteria or category filter. Try clearing filters or searching for terms like Aadhaar, Property Tax, Licence, or DDA.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setSearchFilterQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition"
                >
                  View All Government Services
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition cursor-pointer space-y-3 flex flex-col justify-between shadow-xl group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800">
                          {srv.category}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> .gov.in Verified
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition">{srv.title}</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{srv.hindiTitle}</p>
                      <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{srv.shortDesc}</p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                      <span className="text-zinc-400 font-semibold">{srv.fees}</span>
                      <span className="font-bold text-[#FF6B00] group-hover:translate-x-1 transition flex items-center gap-1">
                        View Procedure <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'categories' && (
          <CategoryGrid
            onSelectCategory={handleSelectCategory}
            setActiveTab={setActiveTab}
            onOpenEmergency={() => setEmergencyOpen(true)}
            onSelectGovtOffices={() => {
              setFinderInitialId('govt-offices');
              setActiveTab('finders');
            }}
            onSelectGovernmentFinders={() => {
              setFinderInitialId('govt-offices');
              setActiveTab('finders');
            }}
          />
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
      <Analytics />
        {activeTab === 'life-events' && <LifeEventsSection />}
        {activeTab === 'banking' && <BankingHub />}
        {activeTab === 'finders' && <FindersHub initialFinderId={finderInitialId} />}
        {activeTab === 'status-check' && <StatusCheckHub />}
        {activeTab === 'online-apply' && <OnlineApplyHub />}
        {activeTab === 'payments' && <PaymentsHub />}
        {activeTab === 'downloads' && <DownloadCentre />}
        {activeTab === 'calculators' && <CalculatorsHub />}
        {activeTab === 'delhi-govt' && (
          <DelhiGovtHub
            initialDeptId={selectedDeptId}
            onResetDept={() => setSelectedDeptId(null)}
          />
        )}
        {activeTab === 'complaints' && <ComplaintsHub />}
        {activeTab === 'blog' && <BlogHub />}
        {activeTab === 'legal' && <LegalPages />}
      </main>

      {/* In-Depth Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectRelated={handleSelectRelatedService}
      />

      {/* Emergency Helplines Modal */}
      <EmergencyModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenEmergency={() => setEmergencyOpen(true)}
        onSelectServiceById={handleSelectRelatedService}
        onSelectDeptById={handleSelectDept}
      />
    </div>
  );
}
