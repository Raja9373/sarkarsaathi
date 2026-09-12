import { NewsRecord } from '../../types/news';

export interface INewsRepository {
  getAll(): Promise<NewsRecord[]>;
  getBySlug(slug: string): Promise<NewsRecord | null>;
  getByCategory(category: string): Promise<NewsRecord[]>;
}

const MOCK_NEWS: NewsRecord[] = [
  {
    id: 'epfo-rate-2024',
    slug: 'epfo-interest-rate-2023-24',
    title: 'EPFO Interest Rate declared for 2023-24',
    shortSummary: 'EPFO has declared an interest rate of 8.25% for the financial year 2023-24.',
    content: 'The Employees’ Provident Fund Organisation (EPFO) has declared an interest rate of 8.25% for its subscribers for the financial year 2023-24. This is an increase from the previous year.',
    category: 'EPFO',
    status: 'PUBLISHED',
    publishedAt: '2024-02-10',
    sourceAuthority: 'EPFO',
    sourceUrl: 'https://www.epfindia.gov.in',
    sourceType: 'Official Press Release',
    lastVerifiedAt: '2026-09-11',
    verificationStatus: 'VERIFIED',
    relatedInvestmentIds: ['epf'],
    tags: ['EPFO', 'Interest Rate'],
    seoTitle: 'EPFO Interest Rate 2023-24 Declared',
    seoDescription: 'Official declaration of EPFO interest rates for 2023-24.',
    canonicalUrl: 'https://www.sarkarsaathi.org/news/epfo-interest-rate-2023-24'
  },
  {
    id: 'rbi-sovereign-gold-bond-2026',
    slug: 'rbi-announces-sovereign-gold-bond-series-2026',
    title: 'RBI Announces New Series of Sovereign Gold Bonds',
    shortSummary: 'RBI has announced the opening of a new series for Sovereign Gold Bonds (SGB).',
    content: 'The Reserve Bank of India has announced the issuance of a new series of Sovereign Gold Bonds, offering investors a secure way to invest in gold without physical handling.',
    category: 'Investment',
    status: 'PUBLISHED',
    publishedAt: '2026-09-05',
    sourceAuthority: 'RBI',
    sourceUrl: 'https://www.rbi.org.in',
    sourceType: 'Official Notification',
    lastVerifiedAt: '2026-09-12',
    verificationStatus: 'VERIFIED',
    relatedInvestmentIds: ['sgb'],
    tags: ['Gold', 'RBI', 'Investment'],
    seoTitle: 'RBI Announces New Sovereign Gold Bonds Series',
    seoDescription: 'RBI notification regarding the new series of Sovereign Gold Bonds.',
    canonicalUrl: 'https://www.sarkarsaathi.org/news/rbi-announces-sovereign-gold-bond-series-2026'
  },
  {
    id: 'dpiit-pli-update-2026',
    slug: 'dpiit-updates-pli-scheme-guidelines',
    title: 'DPIIT Updates Guidelines for PLI Schemes',
    shortSummary: 'DPIIT has released updated operational guidelines for various Production Linked Incentive (PLI) schemes.',
    content: 'The Department for Promotion of Industry and Internal Trade (DPIIT) has issued updated operational guidelines to streamline the application and monitoring process for several PLI schemes.',
    category: 'Investment',
    status: 'PUBLISHED',
    publishedAt: '2026-09-08',
    sourceAuthority: 'DPIIT',
    sourceUrl: 'https://dpiit.gov.in',
    sourceType: 'Official Notification',
    lastVerifiedAt: '2026-09-12',
    verificationStatus: 'NEEDS_REVIEW',
    relatedInvestmentIds: [],
    tags: ['PLI', 'DPIIT', 'Manufacturing'],
    seoTitle: 'DPIIT Updates PLI Scheme Guidelines',
    seoDescription: 'Updated guidelines for PLI scheme operations released by DPIIT.',
    canonicalUrl: 'https://www.sarkarsaathi.org/news/dpiit-updates-pli-scheme-guidelines'
  }


];

export class MockNewsRepository implements INewsRepository {
  async getAll(): Promise<NewsRecord[]> {
    return MOCK_NEWS;
  }
  async getBySlug(slug: string): Promise<NewsRecord | null> {
    return MOCK_NEWS.find(n => n.slug === slug) || null;
  }
  async getByCategory(category: string): Promise<NewsRecord[]> {
    return MOCK_NEWS.filter(n => n.category === category);
  }
}
