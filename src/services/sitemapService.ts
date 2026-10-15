import {
  investmentRepository,
  investmentSchemeRepository,
  opportunityRepository,
  tenderRepository,
  newsRepository
} from '../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { questionRepository } from '../infrastructure/repositories/QuestionRepository';
import { getAllOfficialSources, getOfficialSourceSlug, stateOfficialSources } from '../utils/officialSources';

export const BASE_SITE_URL = 'https://sarkarsaathi.org';

export const escapeXml = (str: string): string => {
  return str.replace(/[&<>'"]/g, (tag) => {
    const chars: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&apos;',
      '"': '&quot;',
    };
    return chars[tag] || tag;
  });
};

export const isExcludedSearchOrFilterUrl = (url: string): boolean => {
  if (url.includes('?') || url.includes('#')) {
    return true;
  }
  try {
    const parsed = new URL(url.startsWith('http') ? url : `${BASE_SITE_URL}${url}`);
    const pathname = parsed.pathname.toLowerCase();
    if (
      pathname === '/search' ||
      pathname.startsWith('/search/') ||
      pathname === '/filter' ||
      pathname.startsWith('/filter/') ||
      pathname.includes('/filter') ||
      pathname.split('/').includes('search')
    ) {
      return true;
    }
  } catch {
    if (url.includes('?') || url.includes('#') || url.includes('/search') || url.includes('/filter')) {
      return true;
    }
  }
  return false;
};

export const STATIC_HUBS = [
  '/',
  '/investments',
  '/investment-schemes',
  '/opportunities',
  '/tenders',
  '/news',
  '/subsidies',
  '/official-sources',
  '/comparisons',
  '/tools',
  '/questions',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms'
];

export const SECTORS = [
  'agriculture',
  'infrastructure',
  'healthcare',
  'education',
  'technology',
  'renewable-energy',
  'manufacturing',
  'tourism',
  'msme',
  'defense'
];

export interface SitemapCategoryBreakdown {
  hubs: number;
  states: number;
  sectors: number;
  investments: number;
  investmentSchemes: number;
  opportunities: number;
  tenders: number;
  news: number;
  subsidies: number;
  questions: number;
  officialSources: number;
}

export interface DynamicSitemapResult {
  sitemapXml: string;
  totalUrls: number;
  categoryBreakdown: SitemapCategoryBreakdown;
  duplicateCount: number;
  invalidCount: number;
  searchFilterCount: number;
  xmlValid: boolean;
  generatedAt: string;
  sampleUrls: string[];
}

/**
 * Dynamically generates a production sitemap.xml string and statistics from live repository data.
 */
export const generateDynamicSitemap = (): DynamicSitemapResult => {
  const rawUrls: Set<string> = new Set();
  const categoryBreakdown: SitemapCategoryBreakdown = {
    hubs: 0,
    states: 0,
    sectors: 0,
    investments: 0,
    investmentSchemes: 0,
    opportunities: 0,
    tenders: 0,
    news: 0,
    subsidies: 0,
    questions: 0,
    officialSources: 0
  };

  let duplicateCount = 0;
  let invalidCount = 0;
  let searchFilterCount = 0;

  // 1. Static Hubs
  STATIC_HUBS.forEach((h) => {
    if (!isExcludedSearchOrFilterUrl(h)) {
      const cleanPath = h === '/' ? '' : h;
      const url = `${BASE_SITE_URL}${cleanPath}`;
      if (!rawUrls.has(url)) {
        rawUrls.add(url);
        categoryBreakdown.hubs++;
      } else {
        duplicateCount++;
      }
    } else {
      searchFilterCount++;
    }
  });

  // 2. State landing pages
  stateOfficialSources.forEach((s) => {
    if (s.state) {
      const stateSlug = s.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (stateSlug) {
        const url = `${BASE_SITE_URL}/opportunities/state/${stateSlug}`;
        if (!isExcludedSearchOrFilterUrl(url)) {
          if (!rawUrls.has(url)) {
            rawUrls.add(url);
            categoryBreakdown.states++;
          } else {
            duplicateCount++;
          }
        } else {
          searchFilterCount++;
        }
      }
    }
  });

  // 3. Sector landing pages
  SECTORS.forEach((sec) => {
    const url = `${BASE_SITE_URL}/opportunities/sector/${sec}`;
    if (!isExcludedSearchOrFilterUrl(url)) {
      if (!rawUrls.has(url)) {
        rawUrls.add(url);
        categoryBreakdown.sectors++;
      } else {
        duplicateCount++;
      }
    } else {
      searchFilterCount++;
    }
  });

  // 4. Repositories
  const repoMap: Array<{
    repo: any;
    routePath: string;
    categoryKey: keyof SitemapCategoryBreakdown;
    filterPublishedOnly?: boolean;
  }> = [
    { repo: investmentRepository, routePath: '/investments', categoryKey: 'investments' },
    { repo: investmentSchemeRepository, routePath: '/investment-schemes', categoryKey: 'investmentSchemes' },
    { repo: opportunityRepository, routePath: '/opportunities', categoryKey: 'opportunities' },
    { repo: tenderRepository, routePath: '/tenders', categoryKey: 'tenders' },
    { repo: newsRepository, routePath: '/news', categoryKey: 'news' },
    { repo: subsidyRepository, routePath: '/subsidies', categoryKey: 'subsidies', filterPublishedOnly: true }
  ];

  repoMap.forEach(({ repo, routePath, categoryKey, filterPublishedOnly }) => {
    const rawItems = repo.getAll();
    // Phase 9 Safeguard: Exclude quarantined/unverified items from public sitemap
    const items = filterPublishedOnly
      ? rawItems.filter((i: any) => i.publicationState === 'PUBLISHED' || i.verificationStatus === 'VERIFIED')
      : rawItems;

    items.forEach((i: any) => {
      const slug = i.slug || i.id;
      if (slug) {
        const url = `${BASE_SITE_URL}${routePath}/${slug}`;
        if (isExcludedSearchOrFilterUrl(url)) {
          searchFilterCount++;
          return;
        }
        if (!url.startsWith(`${BASE_SITE_URL}/`)) {
          invalidCount++;
          return;
        }
        if (rawUrls.has(url)) {
          duplicateCount++;
          return;
        }
        rawUrls.add(url);
        categoryBreakdown[categoryKey]++;
      }
    });
  });

  // 5. Official Sources
  const officialSources = getAllOfficialSources();
  officialSources.forEach((s) => {
    const slug = getOfficialSourceSlug(s);
    if (slug) {
      const url = `${BASE_SITE_URL}/official-sources/${slug}`;
      if (isExcludedSearchOrFilterUrl(url)) {
        searchFilterCount++;
        return;
      }
      if (!url.startsWith(`${BASE_SITE_URL}/`)) {
        invalidCount++;
        return;
      }
      if (rawUrls.has(url)) {
        duplicateCount++;
        return;
      }
      rawUrls.add(url);
      categoryBreakdown.officialSources++;
    }
  });

  // 6. Verified Published Questions
  const publishedQuestions = questionRepository.getAll(true);
  publishedQuestions.forEach((q) => {
    if (q.slug) {
      const url = `${BASE_SITE_URL}/questions/${q.slug}`;
      if (isExcludedSearchOrFilterUrl(url)) {
        searchFilterCount++;
        return;
      }
      if (!url.startsWith(`${BASE_SITE_URL}/`)) {
        invalidCount++;
        return;
      }
      if (rawUrls.has(url)) {
        duplicateCount++;
        return;
      }
      rawUrls.add(url);
      categoryBreakdown.questions++;
    }
  });

  const validUrls = Array.from(rawUrls);

  const urlElements = validUrls
    .map((u) => {
      const escaped = escapeXml(u);
      return `  <url>\n    <loc>${escaped}</loc>\n  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;

  // XML Validation Check
  const hasXmlHeader = sitemapXml.startsWith('<?xml');
  const hasUrlset = sitemapXml.includes('<urlset') && sitemapXml.includes('</urlset>');
  const unescapedAmp = sitemapXml.match(/&(?!(amp|lt|gt|apos|quot);)/g);
  const xmlValid = hasXmlHeader && hasUrlset && (!unescapedAmp || unescapedAmp.length === 0);

  return {
    sitemapXml,
    totalUrls: validUrls.length,
    categoryBreakdown,
    duplicateCount,
    invalidCount,
    searchFilterCount,
    xmlValid,
    generatedAt: new Date().toISOString(),
    sampleUrls: validUrls.slice(0, 10)
  };
};

/**
 * Triggers a browser download of the generated sitemap.xml file.
 */
export const downloadSitemapXmlFile = (xmlString?: string, filename = 'sitemap.xml'): boolean => {
  try {
    const xml = xmlString || generateDynamicSitemap().sitemapXml;
    const blob = new Blob([xml], { type: 'application/xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (err) {
    console.error('Failed to trigger sitemap download:', err);
    return false;
  }
};
