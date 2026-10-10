import { Opportunity, Tender } from '../types';
import { CatalogQueryOptions, PaginatedResult } from './types';

function parseValue(val?: string): number {
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

export class CatalogQueryManager {
  static paginateOpportunities(items: Opportunity[], options: CatalogQueryOptions): PaginatedResult<Opportunity> {
    let filtered = [...items];

    if (options.search) {
      const q = options.search.toLowerCase().trim();
      filtered = filtered.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.description.toLowerCase().includes(q) ||
        i.authority.toLowerCase().includes(q) ||
        (i.sourceAuthority && i.sourceAuthority.toLowerCase().includes(q)) ||
        (i.location && i.location.toLowerCase().includes(q)) ||
        (i.sector && i.sector.toLowerCase().includes(q)) ||
        (i.state && i.state.toLowerCase().includes(q))
      );
    }

    if (options.category && options.category !== 'ALL') {
      const cat = options.category.toLowerCase().trim();
      filtered = filtered.filter(i => (i.category && i.category.toLowerCase() === cat) || (i.sector && i.sector.toLowerCase() === cat));
    }

    if (options.sector && options.sector !== 'ALL') {
      const sec = options.sector.toLowerCase().trim();
      const sectorMatches = filtered.filter(i => (i.sector && i.sector.toLowerCase().includes(sec)) || (i.category && i.category.toLowerCase().includes(sec)));
      if (sectorMatches.length < 4) {
        const sectorIds = new Set(sectorMatches.map(i => i.id));
        const generalMatches = filtered.filter(i => !sectorIds.has(i.id));
        filtered = [...sectorMatches, ...generalMatches];
      } else {
        filtered = sectorMatches;
      }
    }

    if (options.state && options.state !== 'ALL') {
      const st = options.state.toLowerCase().trim();
      const stateMatches = filtered.filter(i => 
        (i.state && i.state.toLowerCase().includes(st)) || 
        (i.location && i.location.toLowerCase().includes(st)) ||
        (i.title && i.title.toLowerCase().includes(st))
      );

      // Prevent Soft 404s: If state-specific matches are sparse (< 4), append central/pan-India opportunities open to applicants in this state
      if (stateMatches.length < 4) {
        const stateIds = new Set(stateMatches.map(i => i.id));
        const panIndiaMatches = filtered.filter(i => 
          !stateIds.has(i.id) && 
          (!i.state || i.state === 'Central' || i.state === 'All-India' || i.state === 'Pan-India' || i.authority?.toLowerCase().includes('government of india') || i.authority?.toLowerCase().includes('ministry') || i.authority?.toLowerCase().includes('department'))
        );
        filtered = [...stateMatches, ...panIndiaMatches];
      } else {
        filtered = stateMatches;
      }
    }

    if (options.type && options.type !== 'ALL') {
      const tp = options.type.toLowerCase().trim();
      filtered = filtered.filter(i => (i.opportunityType && i.opportunityType.toLowerCase().includes(tp)) || (i.category && i.category.toLowerCase().includes(tp)));
    }

    if (options.status && options.status !== 'ALL') {
      const s = options.status.toLowerCase().trim();
      filtered = filtered.filter(i => (i.status && i.status.toLowerCase() === s) || (i.projectStatus && i.projectStatus.toLowerCase() === s));
    }

    if (options.source && options.source !== 'ALL') {
      const src = options.source.toLowerCase().trim();
      filtered = filtered.filter(i => 
        (i.sourceAuthority && i.sourceAuthority.toLowerCase().includes(src)) ||
        (i.authority && i.authority.toLowerCase().includes(src)) ||
        (i.sourceName && i.sourceName.toLowerCase().includes(src))
      );
    }

    if (options.authority && options.authority !== 'ALL') {
      filtered = filtered.filter(i => i.authority === options.authority);
    }

    if (options.verificationStatus && options.verificationStatus !== 'ALL') {
      filtered = filtered.filter(i => i.verificationStatus === options.verificationStatus);
    }

    const sortOrder = options.sortOrder === 'desc' ? -1 : 1;
    if (options.sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title) * sortOrder);
    } else if (options.sortBy === 'date') {
      filtered.sort((a, b) => {
        const da = (a as Opportunity).deadline || '';
        const db = (b as Opportunity).deadline || '';
        return da.localeCompare(db) * sortOrder;
      });
    } else if (options.sortBy === 'value' || options.sortBy === 'cost') {
      filtered.sort((a, b) => {
        const va = parseValue((a as Opportunity).fundingAmount || (a as Opportunity).totalProjectCost);
        const vb = parseValue((b as Opportunity).fundingAmount || (b as Opportunity).totalProjectCost);
        return (va - vb) * sortOrder;
      });
    } else if (options.sortBy === 'id') {
      filtered.sort((a, b) => a.id.localeCompare(b.id) * sortOrder);
    }

    const page = options.page && options.page > 0 ? options.page : 1;
    const limit = options.limit && options.limit > 0 ? options.limit : 20;
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const start = (page - 1) * limit;
    const paginatedItems = filtered.slice(start, start + limit);

    return {
      items: paginatedItems,
      total,
      page,
      limit,
      totalPages
    };
  }

  static paginateTenders(items: Tender[], options: CatalogQueryOptions): PaginatedResult<Tender> {
    let filtered = [...items];

    if (options.search) {
      const q = options.search.toLowerCase().trim();
      filtered = filtered.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.description.toLowerCase().includes(q) ||
        i.authority.toLowerCase().includes(q) ||
        (i.sourceAuthority && i.sourceAuthority.toLowerCase().includes(q)) ||
        i.location.toLowerCase().includes(q) ||
        (i.sector && i.sector.toLowerCase().includes(q)) ||
        (i.state && i.state.toLowerCase().includes(q))
      );
    }

    if (options.category && options.category !== 'ALL') {
      const cat = options.category.toLowerCase().trim();
      filtered = filtered.filter(i => (i.category && i.category.toLowerCase() === cat) || (i.sector && i.sector.toLowerCase() === cat));
    }

    if (options.sector && options.sector !== 'ALL') {
      const sec = options.sector.toLowerCase().trim();
      filtered = filtered.filter(i => (i.sector && i.sector.toLowerCase().includes(sec)) || (i.category && i.category.toLowerCase().includes(sec)));
    }

    if (options.state && options.state !== 'ALL') {
      const st = options.state.toLowerCase().trim();
      filtered = filtered.filter(i => (i.state && i.state.toLowerCase().includes(st)) || i.location.toLowerCase().includes(st));
    }

    if (options.type && options.type !== 'ALL') {
      const tp = options.type.toLowerCase().trim();
      filtered = filtered.filter(i => (i.tenderType && i.tenderType.toLowerCase().includes(tp)) || (i.category && i.category.toLowerCase().includes(tp)));
    }

    if (options.status && options.status !== 'ALL') {
      const s = options.status.toLowerCase().trim();
      filtered = filtered.filter(i => i.status && i.status.toLowerCase() === s);
    }

    if (options.source && options.source !== 'ALL') {
      const src = options.source.toLowerCase().trim();
      filtered = filtered.filter(i => 
        (i.sourceAuthority && i.sourceAuthority.toLowerCase().includes(src)) ||
        (i.authority && i.authority.toLowerCase().includes(src)) ||
        (i.sourceName && i.sourceName.toLowerCase().includes(src))
      );
    }

    if (options.authority && options.authority !== 'ALL') {
      filtered = filtered.filter(i => i.authority === options.authority);
    }

    if (options.verificationStatus && options.verificationStatus !== 'ALL') {
      filtered = filtered.filter(i => i.verificationStatus === options.verificationStatus);
    }

    const sortOrder = options.sortOrder === 'desc' ? -1 : 1;
    if (options.sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title) * sortOrder);
    } else if (options.sortBy === 'date') {
      filtered.sort((a, b) => {
        const da = (a as Tender).submissionDeadline || '';
        const db = (b as Tender).submissionDeadline || '';
        return da.localeCompare(db) * sortOrder;
      });
    } else if (options.sortBy === 'value' || options.sortBy === 'cost') {
      filtered.sort((a, b) => {
        const va = parseValue((a as Tender).tenderValue);
        const vb = parseValue((b as Tender).tenderValue);
        return (va - vb) * sortOrder;
      });
    } else if (options.sortBy === 'id') {
      filtered.sort((a, b) => a.id.localeCompare(b.id) * sortOrder);
    }

    const page = options.page && options.page > 0 ? options.page : 1;
    const limit = options.limit && options.limit > 0 ? options.limit : 20;
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const start = (page - 1) * limit;
    const paginatedItems = filtered.slice(start, start + limit);

    return {
      items: paginatedItems,
      total,
      page,
      limit,
      totalPages
    };
  }
}
