import { Subsidy } from '../../types';
import { Repository } from './InvestmentRepository';
import { CatalogQueryOptions, PaginatedResult } from '../../ingestion/types';
import { IndexedCatalogStore, CatalogFacets } from './IndexedCatalogStore';
import { VERIFIED_SUBSIDIES_PILOT } from './subsidiesPilotData';

export class SubsidyRepository implements Repository<Subsidy> {
  private items: Subsidy[] = [...VERIFIED_SUBSIDIES_PILOT];
  private store: IndexedCatalogStore<Subsidy>;

  constructor() {
    this.store = new IndexedCatalogStore<Subsidy>(this.items);
  }

  getAll(): Subsidy[] {
    return this.items;
  }

  getById(id: string): Subsidy | undefined {
    return this.store.getById(id) || this.items.find(i => i.id === id);
  }

  getBySlug(slug: string): Subsidy | undefined {
    return this.store.getBySlug(slug) || this.items.find(i => i.slug === slug);
  }

  search(query: string, category?: string): Subsidy[] {
    return this.store.search(query, category);
  }

  add(item: Subsidy): boolean {
    if (!this.items.some(i => i.id === item.id)) {
      this.items.push(item);
      this.store.add(item);
      return true;
    }
    return false;
  }

  getTotalCount(): number {
    return this.store.getTotalCount();
  }

  getFacets(): CatalogFacets {
    return this.store.getFacets();
  }

  getPaginated(options: CatalogQueryOptions): PaginatedResult<Subsidy> {
    return this.store.getPaginated(options);
  }
}

export const subsidyRepository = new SubsidyRepository();
