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
}

export interface Investment extends BaseEntity {
  minInvestment: number;
  expectedReturn: string;
  lockInPeriod: string;
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface InvestmentScheme extends BaseEntity {
  eligibility: string;
  benefits: string;
  applicationProcess: string;
}

export interface Opportunity extends BaseEntity {
  projectId?: string;
  deadline: string;
  fundingAmount?: string;
}

export interface Tender extends BaseEntity {
  tenderValue: string;
  submissionDeadline: string;
  location: string;
}

export interface NewsItem extends BaseEntity {
  publishedDate: string;
  content: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}
