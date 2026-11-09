import { BaseEntity, Opportunity, Tender } from '../../types';
import { CatalogQueryOptions, PaginatedResult } from '../../ingestion/types';

export interface CatalogIndexEntry {
  id: string;
  slug: string;
  projectIdLower?: string;
  titleLower: string;
  categoryLower: string;
  authorityLower: string;
  sourceAuthorityLower: string;
  statusLower: string;
  verificationStatusLower: string;
  stateLower?: string;
  districtLower?: string;
  sectorLower?: string;
  subSectorLower?: string;
  typeLower?: string;
  dateStr?: string;
  numericValue?: number;
  itemRef: any;
}

export interface CatalogFacets {
  states: string[];
  sectors: string[];
  types: string[];
  statuses: string[];
  sources: string[];
  categories: string[];
}

function parseFinancialValue(val?: string): number {
  if (!val) return 0;
  const clean = val.replace(/,/g, '').toLowerCase();
  const numMatch = clean.match(/[\d.]+/);
  if (!numMatch) return 0;
  const num = parseFloat(numMatch[0]);
  if (clean.includes('crore')) return num * 10000000;
  if (clean.includes('lakh')) return num * 100000;
  if (clean.includes('k')) return num * 1000;
  return num;
}

function cleanAlphaNumeric(str: string = ''): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function matchesStateFilter(entry: CatalogIndexEntry, filterState: string): boolean {
  const fNorm = cleanAlphaNumeric(filterState);
  if (!fNorm || fNorm === 'all') return true;

  const sNorm = entry.stateLower ? cleanAlphaNumeric(entry.stateLower) : '';
  const lNorm = entry.itemRef?.location ? cleanAlphaNumeric(entry.itemRef.location) : '';

  // Direct normalized substring match
  if (sNorm && (sNorm.includes(fNorm) || (sNorm.length >= 4 && fNorm.includes(sNorm)))) return true;
  if (lNorm && (lNorm.includes(fNorm) || (lNorm.length >= 4 && fNorm.includes(lNorm)))) return true;

  // Token-based matching ignoring common noise words like 'and', 'the', 'islands', 'of'
  const filterTokens = filterState.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 2 && t !== 'and' && t !== 'the');
  const targetText = ((entry.stateLower || '') + ' ' + (entry.itemRef?.location || '') + ' ' + (entry.titleLower || '')).toLowerCase();
  if (filterTokens.length > 0 && filterTokens.every(t => targetText.includes(t))) {
    return true;
  }

  return false;
}

function matchesSectorFilter(entry: CatalogIndexEntry, filterSector: string): boolean {
  const fNorm = cleanAlphaNumeric(filterSector);
  if (!fNorm || fNorm === 'all') return true;

  const sNorm = entry.sectorLower ? cleanAlphaNumeric(entry.sectorLower) : '';
  const cNorm = entry.categoryLower ? cleanAlphaNumeric(entry.categoryLower) : '';

  if (sNorm && (sNorm.includes(fNorm) || (sNorm.length >= 4 && fNorm.includes(sNorm)))) return true;
  if (cNorm && (cNorm.includes(fNorm) || (cNorm.length >= 4 && fNorm.includes(cNorm)))) return true;

  // Synonym & token-based matching
  const targetText = ((entry.sectorLower || '') + ' ' + (entry.categoryLower || '') + ' ' + (entry.titleLower || '')).toLowerCase();
  if (filterSector.includes('it') || filterSector.includes('tech')) {
    if (/information technology|electronics|software|technology|tech|saas|digital/i.test(targetText)) return true;
  }
  if (filterSector.includes('solar') || filterSector.includes('renewable')) {
    if (/solar|renewable|clean energy|wind|climate|pv/i.test(targetText)) return true;
  }

  const tokens = filterSector.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length >= 3 && t !== 'and' && t !== 'the');
  if (tokens.length > 0 && tokens.some(t => targetText.includes(t))) {
    return true;
  }

  return false;
}

export class IndexedCatalogStore<T extends BaseEntity> {
  private items: T[] = [];
  private idMap: Map<string, T> = new Map();
  private slugMap: Map<string, T> = new Map();
  private indexEntries: CatalogIndexEntry[] = [];
  
  // Facet sets
  private statesSet = new Set<string>();
  private sectorsSet = new Set<string>();
  private typesSet = new Set<string>();
  private statusesSet = new Set<string>();
  private sourcesSet = new Set<string>();
  private categoriesSet = new Set<string>();

  constructor(initialItems: T[] = []) {
    for (const item of initialItems) {
      this.addItemInternal(item);
    }
  }

  private addItemInternal(item: T): boolean {
    if (!item || !item.id) return false;
    if (this.idMap.has(item.id)) return false;

    this.items.push(item);
    this.idMap.set(item.id, item);
    if (item.slug) {
      this.slugMap.set(item.slug, item);
    }

    const anyItem = item as any;
    const state = anyItem.state || (anyItem.location && !anyItem.location.includes('/') ? anyItem.location : undefined);
    const district = anyItem.district;
    const sector = anyItem.sector || anyItem.category;
    const subSector = anyItem.subSector;
    const type = anyItem.opportunityType || anyItem.tenderType || anyItem.category;
    const date = anyItem.deadline || anyItem.submissionDeadline || anyItem.createdAt || anyItem.publishedDate || '';
    const val = anyItem.totalProjectCost || anyItem.fundingAmount || anyItem.tenderValue || (anyItem.minInvestment ? `₹${anyItem.minInvestment}` : '');
    const numVal = parseFinancialValue(val);

    if (state && state.trim()) this.statesSet.add(state.trim());
    if (sector && sector.trim()) this.sectorsSet.add(sector.trim());
    if (type && type.trim()) this.typesSet.add(type.trim());
    if (item.status) this.statusesSet.add(item.status.trim());
    if (item.sourceAuthority) this.sourcesSet.add(item.sourceAuthority.trim());
    else if (item.authority) this.sourcesSet.add(item.authority.trim());
    if (item.category) this.categoriesSet.add(item.category.trim());

    const entry: CatalogIndexEntry = {
      id: item.id,
      slug: item.slug || '',
      projectIdLower: anyItem.projectId ? anyItem.projectId.toLowerCase() : undefined,
      titleLower: (item.title || '').toLowerCase(),
      categoryLower: (item.category || '').toLowerCase(),
      authorityLower: (item.authority || '').toLowerCase(),
      sourceAuthorityLower: (item.sourceAuthority || '').toLowerCase(),
      statusLower: (item.status || anyItem.projectStatus || '').toLowerCase(),
      verificationStatusLower: (item.verificationStatus || '').toLowerCase(),
      stateLower: state ? state.toLowerCase() : undefined,
      districtLower: district ? district.toLowerCase() : undefined,
      sectorLower: sector ? sector.toLowerCase() : undefined,
      subSectorLower: subSector ? subSector.toLowerCase() : undefined,
      typeLower: type ? type.toLowerCase() : undefined,
      dateStr: date,
      numericValue: numVal,
      itemRef: item
    };

    this.indexEntries.push(entry);
    return true;
  }

  public add(item: T): boolean {
    return this.addItemInternal(item);
  }

  public getAll(): T[] {
    return this.items;
  }

  public getById(id: string): T | undefined {
    return this.idMap.get(id);
  }

  public getBySlug(slug: string): T | undefined {
    return this.slugMap.get(slug);
  }

  public getTotalCount(): number {
    return this.items.length;
  }

  public getFacets(): CatalogFacets {
    return {
      states: Array.from(this.statesSet).sort(),
      sectors: Array.from(this.sectorsSet).sort(),
      types: Array.from(this.typesSet).sort(),
      statuses: Array.from(this.statusesSet).sort(),
      sources: Array.from(this.sourcesSet).sort(),
      categories: Array.from(this.categoriesSet).sort()
    };
  }

  public search(query: string, category?: string): T[] {
    const q = query.toLowerCase().trim();
    if (!q && (!category || category === 'ALL')) {
      return this.items;
    }
    return this.indexEntries
      .filter(entry => {
        const matchesCat = !category || category === 'ALL' || entry.categoryLower === category.toLowerCase();
        if (!matchesCat) return false;
        if (!q) return true;
        return (
          entry.titleLower.includes(q) ||
          (entry.projectIdLower && entry.projectIdLower.includes(q)) ||
          entry.authorityLower.includes(q) ||
          entry.sourceAuthorityLower.includes(q) ||
          (entry.districtLower && entry.districtLower.includes(q)) ||
          (entry.stateLower && entry.stateLower.includes(q)) ||
          (entry.sectorLower && entry.sectorLower.includes(q)) ||
          (entry.subSectorLower && entry.subSectorLower.includes(q)) ||
          (entry.itemRef.description && entry.itemRef.description.toLowerCase().includes(q))
        );
      })
      .map(entry => entry.itemRef);
  }

  public getPaginated(options: CatalogQueryOptions): PaginatedResult<T> {
    let matches = this.indexEntries;

    // 1. Search (Title, Project ID, Description, Authority, Location, District, Sector, Sub-sector)
    if (options.search && options.search.trim()) {
      const q = options.search.toLowerCase().trim();
      matches = matches.filter(e => 
        e.titleLower.includes(q) ||
        (e.projectIdLower && e.projectIdLower.includes(q)) ||
        e.authorityLower.includes(q) ||
        e.sourceAuthorityLower.includes(q) ||
        (e.districtLower && e.districtLower.includes(q)) ||
        (e.stateLower && e.stateLower.includes(q)) ||
        (e.sectorLower && e.sectorLower.includes(q)) ||
        (e.subSectorLower && e.subSectorLower.includes(q)) ||
        (e.itemRef.description && e.itemRef.description.toLowerCase().includes(q)) ||
        (e.itemRef.projectDescription && e.itemRef.projectDescription.toLowerCase().includes(q)) ||
        (e.itemRef.opportunityDescription && e.itemRef.opportunityDescription.toLowerCase().includes(q)) ||
        (e.itemRef.location && e.itemRef.location.toLowerCase().includes(q))
      );
    }

    // 2. Category Filter
    if (options.category && options.category !== 'ALL') {
      const cat = options.category.toLowerCase().trim();
      matches = matches.filter(e => e.categoryLower === cat);
    }

    // 3. State Filter
    if (options.state && options.state !== 'ALL') {
      const stateMatches = matches.filter(e => matchesStateFilter(e, options.state!));
      // Soft 404 Prevention: If state-specific matches are sparse (< 4), append central/pan-India opportunities open to citizens in this state/UT
      if (stateMatches.length < 4) {
        const matchedIds = new Set(stateMatches.map(e => e.id));
        const panIndiaMatches = matches.filter(e => 
          !matchedIds.has(e.id) && 
          (!e.stateLower || e.stateLower === 'pan-india' || e.stateLower === 'pan-india / multi-state' || e.stateLower === 'central' || e.authorityLower.includes('government of india') || e.authorityLower.includes('ministry'))
        );
        matches = [...stateMatches, ...panIndiaMatches];
      } else {
        matches = stateMatches;
      }
    }

    // 4. District Filter
    if ((options as any).district && (options as any).district !== 'ALL') {
      const dist = (options as any).district.toLowerCase().trim();
      matches = matches.filter(e => 
        (e.districtLower && e.districtLower.includes(dist)) ||
        (e.itemRef.location && e.itemRef.location.toLowerCase().includes(dist))
      );
    }

    // 5. Sector Filter
    if (options.sector && options.sector !== 'ALL') {
      const sectorMatches = matches.filter(e => matchesSectorFilter(e, options.sector!));
      // Soft 404 Prevention: If sector matches are sparse (< 4), append cross-sectoral opportunities
      if (sectorMatches.length < 4) {
        const matchedIds = new Set(sectorMatches.map(e => e.id));
        const generalMatches = matches.filter(e => 
          !matchedIds.has(e.id) && 
          (e.categoryLower.includes('cross') || (e.sectorLower && e.sectorLower.includes('cross')) || e.authorityLower.includes('government of india') || e.authorityLower.includes('ministry'))
        );
        matches = [...sectorMatches, ...generalMatches];
      } else {
        matches = sectorMatches;
      }
    }

    // 6. Type Filter (Opportunity or Tender type)
    if (options.type && options.type !== 'ALL') {
      const tp = options.type.toLowerCase().trim();
      matches = matches.filter(e => 
        (e.typeLower && e.typeLower.includes(tp)) ||
        e.categoryLower.includes(tp)
      );
    }

    // 7. Status Filter
    if (options.status && options.status !== 'ALL') {
      const st = options.status.toLowerCase().trim();
      matches = matches.filter(e => e.statusLower === st || (e.itemRef.projectStatus && e.itemRef.projectStatus.toLowerCase() === st));
    }

    // 8. Source / Authority Filter
    if (options.source && options.source !== 'ALL') {
      const src = options.source.toLowerCase().trim();
      matches = matches.filter(e => 
        e.sourceAuthorityLower.includes(src) || 
        e.authorityLower.includes(src) ||
        (e.itemRef.sourceName && e.itemRef.sourceName.toLowerCase().includes(src))
      );
    }

    // 9. Verification Status
    if (options.verificationStatus && options.verificationStatus !== 'ALL') {
      const vs = options.verificationStatus.toLowerCase().trim();
      matches = matches.filter(e => e.verificationStatusLower === vs);
    }

    // 10. Financial Range Filter
    if ((options as any).minCost !== undefined && (options as any).minCost > 0) {
      const minVal = (options as any).minCost;
      matches = matches.filter(e => (e.numericValue || 0) >= minVal);
    }
    if ((options as any).maxCost !== undefined && (options as any).maxCost > 0) {
      const maxVal = (options as any).maxCost;
      matches = matches.filter(e => (e.numericValue || 0) <= maxVal);
    }

    // Sorting
    const sortOrder = options.sortOrder === 'desc' ? -1 : 1;
    if (options.sortBy === 'title') {
      matches = [...matches].sort((a, b) => a.titleLower.localeCompare(b.titleLower) * sortOrder);
    } else if (options.sortBy === 'date') {
      matches = [...matches].sort((a, b) => {
        const da = a.dateStr || '';
        const db = b.dateStr || '';
        return da.localeCompare(db) * sortOrder;
      });
    } else if (options.sortBy === 'value' || options.sortBy === 'cost') {
      matches = [...matches].sort((a, b) => {
        const va = a.numericValue || 0;
        const vb = b.numericValue || 0;
        return (va - vb) * sortOrder;
      });
    } else if (options.sortBy === 'id') {
      matches = [...matches].sort((a, b) => a.id.localeCompare(b.id) * sortOrder);
    }

    // Slicing pagination window
    const page = options.page && options.page > 0 ? options.page : 1;
    const limit = options.limit && options.limit > 0 ? options.limit : 20;
    const total = matches.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const start = (page - 1) * limit;
    const paginatedEntries = matches.slice(start, start + limit);

    return {
      items: paginatedEntries.map(e => e.itemRef),
      total,
      page,
      limit,
      totalPages
    };
  }
}
