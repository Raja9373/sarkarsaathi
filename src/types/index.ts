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
  contactInformation?: string;
  howToEvaluate?: string;
  faqs?: Array<{ question: string; answer: string }>;
  employmentPotential?: string;
  implementingAgency?: string;
}

export interface Tender extends BaseEntity {
  tenderValue: string;
  submissionDeadline: string;
  location: string;
  state?: string;
  sector?: string;
  tenderType?: string;
  sourceName?: string;
  tenderId?: string;
  procuringEntity?: string;
  department?: string;
  organisation?: string;
  district?: string;
  tenderCategory?: string;
  publishedDate?: string;
  bidOpeningDate?: string;
  emdAmount?: string;
  tenderFee?: string;
  contractPeriod?: string;
  eligibility?: string;
  qualificationRequirements?: string[];
  scopeOfWork?: string;
  documentsRequired?: string[];
  contactInformation?: string;
  submissionMethod?: string;
  howToRead?: string;
}

export interface NewsItem extends BaseEntity {
  publishedDate: string;
  content: string;
  authorityIssued?: string;
  whatChanged?: string;
  whoIsAffected?: string;
  effectiveDate?: string;
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
