import { NewsItem } from '../../types';
import { newsDataPart1 } from './newsDataPart1';
import { newsDataPart2 } from './newsDataPart2';
import { Repository } from './InvestmentRepository';

export class NewsRepository implements Repository<NewsItem> {
  private items: NewsItem[] = [
    ...newsDataPart1,
    ...newsDataPart2
  ];

  getAll(): NewsItem[] { return this.items; }
  getById(id: string): NewsItem | undefined { return this.items.find(i => i.id === id); }
  getBySlug(slug: string): NewsItem | undefined { return this.items.find(i => i.slug === slug); }
  search(query: string, category?: string): NewsItem[] {
    const q = query.toLowerCase();
    return this.items.filter(i => (i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) && (!category || category === 'ALL' || i.category === category));
  }
}

export const newsRepository = new NewsRepository();
