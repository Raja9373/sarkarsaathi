import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';

export interface SearchResult {
  id: string;
  type: 'Investment' | 'Scheme' | 'Opportunity' | 'Tender' | 'News';
  title: string;
  authority: string;
  status?: string;
  slug: string;
}

const investRepo = new MockInvestmentRepository();
const schemeRepo = new MockInvestmentSchemeRepository();
const oppRepo = new MockOpportunityRepository();
const tenderRepo = new MockTenderRepository();
const newsRepo = new MockNewsRepository();

export async function globalSearch(query: string): Promise<SearchResult[]> {
  const q = query.toLowerCase().trim();
  
  const [investments, schemes, opps, tenders, news] = await Promise.all([
    investRepo.getAll(),
    schemeRepo.getAll(),
    oppRepo.getAll(),
    tenderRepo.getAll(),
    newsRepo.getAll(),
  ]);

  const results: SearchResult[] = [];

  const matches = (text: string) => q === '' || text.toLowerCase().includes(q);

  investments.forEach(item => {
    if (matches(item.name) || matches(item.description || '')) {
      results.push({ id: item.id, type: 'Investment', title: item.name, authority: item.authority, status: item.status, slug: item.slug });
    }
  });

  schemes.forEach(item => {
    if (matches(item.schemeName) || matches(item.shortDescription)) {
      results.push({ id: item.id, type: 'Scheme', title: item.schemeName, authority: item.ministry, status: item.status, slug: item.slug });
    }
  });

  opps.forEach(item => {
    if (matches(item.title) || matches(item.description)) {
      results.push({ id: item.id, type: 'Opportunity', title: item.title, authority: item.authority, status: item.status, slug: item.slug });
    }
  });

  tenders.forEach(item => {
    if (matches(item.title) || matches(item.description)) {
      results.push({ id: item.id, type: 'Tender', title: item.title, authority: item.organisation, status: item.status, slug: item.slug });
    }
  });

  news.forEach(item => {
    if (matches(item.title) || matches(item.shortSummary)) {
      results.push({ id: item.id, type: 'News', title: item.title, authority: item.sourceAuthority, status: item.status, slug: item.slug });
    }
  });

  return results;
}
