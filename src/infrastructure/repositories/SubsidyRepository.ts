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

  getAll(publishedOnly: boolean = false): Subsidy[] {
    if (publishedOnly) {
      return this.items.filter(i => i.publicationState === 'PUBLISHED' || i.verificationStatus === 'VERIFIED');
    }
    return this.items;
  }

  getPublished(): Subsidy[] {
    return this.items.filter(i => i.publicationState === 'PUBLISHED' || i.verificationStatus === 'VERIFIED');
  }

  getQuarantined(): Subsidy[] {
    return this.items.filter(i => i.publicationState === 'QUARANTINED');
  }

  getById(id: string): Subsidy | undefined {
    return this.store.getById(id) || this.items.find(i => i.id === id);
  }

  getBySlug(slug: string): Subsidy | undefined {
    // Support legacy alias for pilot unverified records
    if (slug.startsWith('verified-government-subsidy-scheme-')) {
      const idx = slug.replace('verified-government-subsidy-scheme-', '');
      const legacyId = `SUB-${idx.padStart(3, '0')}`;
      const found = this.items.find(i => i.id === legacyId);
      if (found) return found;
    }
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

  remove(id: string): boolean {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx !== -1) {
      this.items.splice(idx, 1);
      this.store = new IndexedCatalogStore<Subsidy>(this.items);
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
