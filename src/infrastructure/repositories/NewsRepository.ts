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
