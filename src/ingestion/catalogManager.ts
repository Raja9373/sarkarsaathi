import { Opportunity, Tender } from '../types';
import { CatalogQueryOptions, PaginatedResult } from './types';

export class CatalogQueryManager {
  static paginateOpportunities(items: Opportunity[], options: CatalogQueryOptions): PaginatedResult<Opportunity> {
    let filtered = [...items];

    if (options.search) {
      const q = options.search.toLowerCase();
      filtered = filtered.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.description.toLowerCase().includes(q) ||
        i.authority.toLowerCase().includes(q)
      );
    }

    if (options.category && options.category !== 'ALL') {
      filtered = filtered.filter(i => i.category === options.category);
    }

    if (options.authority && options.authority !== 'ALL') {
      filtered = filtered.filter(i => i.authority === options.authority);
    }

    if (options.verificationStatus && options.verificationStatus !== 'ALL') {
      filtered = filtered.filter(i => i.verificationStatus === options.verificationStatus);
    }

    if (options.sortBy === 'title') {
      filtered.sort((a, b) => options.sortOrder === 'desc' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title));
    } else if (options.sortBy === 'date') {
      filtered.sort((a, b) => {
        const da = (a as Opportunity).deadline || '';
        const db = (b as Opportunity).deadline || '';
        return options.sortOrder === 'desc' ? db.localeCompare(da) : da.localeCompare(db);
      });
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
      const q = options.search.toLowerCase();
      filtered = filtered.filter(i => 
        i.title.toLowerCase().includes(q) || 
        i.description.toLowerCase().includes(q) ||
        i.authority.toLowerCase().includes(q) ||
        i.location.toLowerCase().includes(q)
      );
    }

    if (options.category && options.category !== 'ALL') {
      filtered = filtered.filter(i => i.category === options.category);
    }

    if (options.authority && options.authority !== 'ALL') {
      filtered = filtered.filter(i => i.authority === options.authority);
    }

    if (options.verificationStatus && options.verificationStatus !== 'ALL') {
      filtered = filtered.filter(i => i.verificationStatus === options.verificationStatus);
    }

    if (options.sortBy === 'title') {
      filtered.sort((a, b) => options.sortOrder === 'desc' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title));
    } else if (options.sortBy === 'date') {
      filtered.sort((a, b) => {
        const da = (a as Tender).submissionDeadline || '';
        const db = (b as Tender).submissionDeadline || '';
        return options.sortOrder === 'desc' ? db.localeCompare(da) : da.localeCompare(db);
      });
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
