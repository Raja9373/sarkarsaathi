import { VerificationMetadata, FreshnessStatus } from './infrastructure';
import { InvestmentFAQ } from './index';

export type CandidateStatus = 'DISCOVERED' | 'NEEDS_REVIEW' | 'APPROVED' | 'REJECTED' | 'DUPLICATE';

export interface InvestmentCandidate {
  id: string;
  name: string;
  slug: string;
  category: Investment['category'];
  description: string;
  officialSource: string;
  officialInformationUrl: string;
  status: CandidateStatus;
  verificationNote?: string;
  lastVerified: string;
  provenance: string;
}

export interface Investment {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  category: 'Government Savings' | 'Government Securities' | 'Gold' | 'Pension' | 'Social Security' | 'EPFO' | 'Infrastructure' | 'Mutual Funds';
  subcategory?: string;
  description?: string;
  plainLanguageSummary?: string;
  authority: string;
  administeringBody?: string;
  regulator?: string;
  governmentLevel?: 'Central' | 'State' | 'UT';
  applicableStates?: string[];
  status: 'ACTIVE' | 'OPEN_FOR_SUBSCRIPTION' | 'OPEN_FOR_APPLICATION' | 'ONGOING' | 'TEMPORARILY_SUSPENDED' | 'CLOSED' | 'DISCONTINUED' | 'MATURED' | 'LEGACY' | 'HISTORICAL' | 'ARCHIVED';
  launchDate?: string;
  closureDate?: string;
  lastUpdated?: string;
  
  lastVerified: string;
  nextReviewDate?: string;
  officialSource: string;
  officialInformationUrl: string;

  sourceLastChecked?: string;
  verificationStatus?: 'VERIFIED' | 'NEEDS_REVIEW';
  verificationNote?: string;

  verificationMetadata?: VerificationMetadata;
  freshness?: FreshnessStatus;

  officialApplicationUrl?: string;
  eligibility?: string;
  ageRules?: string;
  residencyRules?: string;
  minimumInvestment?: string;
  maximumInvestment?: string;
  contributionFrequency?: string;
  interestRate?: string;
  rateType?: string;
  rateEffectiveFrom?: string;
  rateEffectiveTo?: string;
  tenure?: string;
  lockIn?: string;
  maturityRules?: string;
  withdrawalRules?: string;
  prematureWithdrawalRules?: string;
  taxBenefits?: string;
  taxation?: string;
  riskInformation?: string;
  nominationRules?: string;
  transferRules?: string;
  applicationMethod?: string;
  documentsRequired?: string;
  whereToApply?: string;
  officialContact?: string;
  
  keyBenefits?: string[];
  availabilityNote?: string;
  statusNote?: string;
  faqItems?: InvestmentFAQ[];
  seoTitle?: string;
  seoDescription?: string;
  primaryKeywords?: string[];
  secondaryKeywords?: string[];
  
  changeHistory?: string;
  relatedInvestments?: string[];
  tags?: string[];
}
