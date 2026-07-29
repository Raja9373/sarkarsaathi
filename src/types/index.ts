export type StateId = 'delhi' | 'haryana' | 'punjab' | 'up' | 'rajasthan' | 'maharashtra' | 'national';

export interface StateInfo {
  id: StateId;
  name: string;
  hindiName: string;
  isAvailable: boolean;
  code: string;
  capital: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: string;
  state: StateId | 'all';
  department: string;
  shortDesc: string;
  overview: string;
  eligibility: string[];
  requiredDocs: string[];
  onlineProcess: string[];
  offlineProcess: string[];
  fees: string;
  processingTime: string;
  officialWebsiteName: string;
  officialGovUrl: string;
  downloadForms?: { name: string; url: string; isOfficialPdf: boolean }[];
  faqs: { question: string; answer: string }[];
  commonMistakes: string[];
  importantNotes: string[];
  lastUpdated: string;
  relatedServiceIds: string[];
  tags: string[];
  secondaryCategories?: string[];
  isPopular?: boolean;
}

export interface LifeEvent {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
  requiredServices: string[];
  requiredDocuments: string[];
  estimatedFees: string;
  officialLinks: { label: string; url: string }[];
  timeline: string;
  checklist: string[];
  relatedEvents: string[];
}

export interface BankProduct {
  id: string;
  category: 'saving' | 'current' | 'salary' | 'zero-balance' | 'nre-nro' | 'fd-rd' | 'ppf-nps' | 'sukanya' | 'jan-dhan' | 'locker' | 'cards-upi';
  title: string;
  hindiTitle: string;
  eligibility: string[];
  documentsRequired: string[];
  minBalance: string;
  charges: string;
  processingTime: string;
  benefits: string[];
  features: string[];
  officialWebsite: string;
  officialApplyLink: string;
  faqs: { question: string; answer: string }[];
}

export interface BankInfo {
  id: string;
  name: string;
  shortName: string;
  type: 'Public' | 'Private' | 'Small Finance';
  logoText: string;
  officialWebsite: string;
  customerCare: string;
  netBankingUrl: string;
}

export interface IfscBranch {
  ifsc: string;
  bankId: string;
  bankName: string;
  branchName: string;
  branchCode: string;
  micrCode: string;
  address: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  phone: string;
  neft: boolean;
  rtgs: boolean;
  imps: boolean;
  upi: boolean;
  swiftCode?: string;
}

export interface FinderCategory {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'Govt Forms' | 'PDF Forms' | 'Application Forms' | 'Self Declaration' | 'Affidavits' | 'Undertakings' | 'NOC Formats';
  department: string;
  description: string;
  formatText?: string;
  officialPdfUrl: string;
  isCustomFormatAvailable: boolean;
}

export interface GovtOffice {
  id: string;
  officeName: string;
  hindiName: string;
  department: string;
  category: 'Secretariat & HQs' | 'District Magistrates & Revenue' | 'Municipal & Utilities' | 'Police & Judicial' | 'Transport & Licences' | 'Central Govt Ministries';
  district: string;
  address: string;
  pincode: string;
  phone: string;
  helpline?: string;
  email: string;
  timing: string;
  website: string;
  officerInCharge?: string;
  keyServices: string[];
}

export interface CalculatorDef {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  category: string;
}

export interface DelhiDepartment {
  id: string;
  name: string;
  hindiName: string;
  shortCode: string;
  description: string;
  ministerName?: string;
  headOffice: string;
  helpline: string;
  email: string;
  officialWebsite: string;
  portalUrl: string;
  keyServices: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  hindiTitle: string;
  slug: string;
  category: 'Document Guides' | 'Banking Guides' | 'Delhi Services' | 'Government Updates' | 'Citizen Rights';
  summary: string;
  contentMarkdown: string;
  publishedDate: string;
  author: string;
  readTime: string;
  relatedServiceIds?: string[];
}

export type ActiveTab = 
  | 'home' 
  | 'categories' 
  | 'services' 
  | 'life-events' 
  | 'banking' 
  | 'finders' 
  | 'status-check' 
  | 'online-apply' 
  | 'payments' 
  | 'downloads' 
  | 'calculators' 
  | 'delhi-govt' 
  | 'complaints'
  | 'blog' 
  | 'legal' 
  | 'service-detail';
