export type ContentCompletenessLevel = 'COMPLETE' | 'MOSTLY_COMPLETE' | 'PARTIAL' | 'SOURCE_DATA_LIMITED';

export interface BaseEntity {
  id: string;
  title: string;
  slug: string;
  description: string;
  authority: string;
  category: string;
  status: string;
  sourceUrl: string;
  sourceAuthority: string;
  verificationStatus: string;
  createdAt?: string;
  lastVerifiedDate?: string;
  completenessLevel?: ContentCompletenessLevel;
}

export interface Investment extends BaseEntity {
  minInvestment: number;
  expectedReturn: string;
  lockInPeriod: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  maxInvestment?: number | string;
  depositRules?: string;
  returnMechanism?: string;
  notifiedRate?: string;
  rateEffectivePeriod?: string;
  tenure?: string;
  maturityRules?: string;
  extensionRules?: string;
  withdrawalRules?: string;
  prematureClosureRules?: string;
  loanFacilityRules?: string;
  taxTreatment?: string;
  nominationRules?: string;
  accountOpeningProcess?: string[];
  whereToInvest?: string;
  requiredDocuments?: string[];
  importantRules?: string[];
  risksAndLimitations?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  comparisonSlugs?: string[];
  calculatorType?: 'ppf' | 'ssy' | 'compound' | 'simple';
}

export interface InvestmentScheme extends BaseEntity {
  eligibility: string;
  benefits: string;
  applicationProcess: string;
  objective?: string;
  targetBeneficiaries?: string;
  incentives?: string;
  financialParameters?: string;
  registrationProcess?: string[];
  requiredDocuments?: string[];
  implementingAuthority?: string;
  coverage?: string;
  importantConditions?: string[];
  exclusions?: string[];
  notifications?: string[];
  howToUnderstand?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface Opportunity extends BaseEntity {
  projectId?: string;
  deadline: string;
  fundingAmount?: string;
  state?: string;
  sector?: string;
  subSector?: string;
  opportunityType?: string;
  totalProjectCost?: string;
  projectStatus?: string;
  sourceName?: string;
  location?: string;
  district?: string;
  projectStage?: string;
  landLocationDetails?: string;
  infrastructureDetails?: string;
  department?: string;
  investorProfile?: string;
  participationProcess?: string[];
  applicationProcess?: string;
  contactInformation?: string;
  howToEvaluate?: string;
  faqs?: Array<{ question: string; answer: string }>;
  employmentPotential?: string;
  implementingAgency?: string;
  promoter?: string;
  eligibility?: string;
  requiredDocuments?: string[];
  importantConditions?: string[];
  timeline?: string;
  projectDescription?: string;
  opportunityDescription?: string;
}

export interface TenderDateEvent {
  event: string;
  date: string;
}

export interface TenderFAQ {
  question: string;
  answer: string;
}

export interface Tender extends BaseEntity {
  tenderId?: string;
  referenceNumber?: string;
  tenderType?: string;
  procuringAuthority?: string;
  procuringEntity?: string;
  department?: string;
  ministry?: string;
  psu?: string;
  organisation?: string;
  state?: string;
  location: string;
  district?: string;
  tenderCategory?: string;
  workCategory?: string;
  sector?: string;
  detailedDescription?: string;
  scopeOfWork?: string;
  tenderValue: string;
  estimatedValue?: string;
  emdAmount?: string;
  bidSecurity?: string;
  tenderFee?: string;
  eligibility?: string;
  eligibilityCriteria?: string;
  technicalQualification?: string[];
  financialQualification?: string[];
  experienceRequirements?: string[];
  qualificationRequirements?: string[];
  requiredDocuments?: string[];
  documentsRequired?: string[];
  importantDates?: TenderDateEvent[];
  publishedDate?: string;
  submissionDeadline: string;
  bidOpeningDate?: string;
  preBidMeeting?: string;
  bidSubmissionProcess?: string;
  submissionMethod?: string;
  evaluationProcess?: string;
  selectionProcess?: string;
  contractPeriod?: string;
  workPeriod?: string;
  paymentTerms?: string;
  commercialTerms?: string;
  importantConditions?: string[];
  nitDocumentUrl?: string;
  officialDocumentUrl?: string;
  officialPortalUrl?: string;
  officialSource?: string;
  sourceName?: string;
  sourceVerificationDate?: string;
  contactInformation?: string;
  faqs?: TenderFAQ[];
  howToRead?: string;
  howToRespond?: string;
}

export interface NewsItem extends BaseEntity {
  publishedDate: string;
  content: string;
  sourceName?: string;
  authorityIssued?: string;
  ministry?: string;
  department?: string;
  whatHappened?: string;
  whatChanged?: string;
  whyItMatters?: string;
  whoIsAffected?: string;
  relevance?: string;
  keyAnnouncement?: string;
  effectiveDate?: string;
  effectiveStatus?: 'CURRENT' | 'EFFECTIVE' | 'HISTORICAL' | 'SUPERSEDED' | 'WITHDRAWN' | 'CANCELLED' | 'FUTURE_EFFECTIVE' | 'STATUS_UNKNOWN';
  importantNumbers?: string[];
  previousRule?: string;
  newRule?: string;
  practicalImpact?: string;
  actionRequired?: string;
  importantConditions?: string[];
  officialNotification?: string;
  circularNumber?: string;
  sourceVerificationDate?: string;
  relatedInvestment?: string;
  relatedScheme?: string;
  relatedOpportunity?: string;
  relatedTender?: string;
  faqs?: Array<{ question: string; answer: string }>;
  whatThisUpdateMeans?: string;
  relevantInstrument?: string;
  practicalSignificance?: string;
  previousVsCurrent?: string;
  factBreakdown?: {
    fact: string;
    source: string;
    explanation: string;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

export interface Subsidy extends BaseEntity {
  shortDescription?: string;
  subcategory?: string;
  benefitType?: string;
  beneficiaryType?: string;
  state?: string;
  ministry?: string;
  department?: string;
  eligibility: string;
  benefits: string;
  subsidyAmount?: string;
  subsidyPercentage?: string;
  maximumBenefit?: string;
  minimumInvestment?: string;
  documentsRequired?: string[];
  applicationProcess: string;
  applicationMode?: string;
  applicationUrl?: string;
  startDate?: string;
  endDate?: string;
  officialSource?: string;
  officialSourceUrl?: string;
  lastVerified?: string;
  sourceNotes?: string;
  disclaimer?: string;
}
