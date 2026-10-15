import fs from 'fs';
import path from 'path';
import {
  investmentRepository,
  investmentSchemeRepository,
  opportunityRepository,
  tenderRepository,
  newsRepository
} from '../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { questionRepository } from '../infrastructure/repositories/QuestionRepository';
import { getAllOfficialSources, getOfficialSourceSlug, stateOfficialSources } from './officialSources';

export const BASE_SITE_URL = 'https://sarkarsaathi.org';

/**
 * Escapes special characters for XML compliance.
 */
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

/**
 * Phase 10A Protection: Excludes search, filter, and query parameter URLs from sitemap index.
 */
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

/**
 * Static pages defined in App.tsx
 */
export const STATIC_APP_ROUTES = [
  '/',
  '/investments',
  '/investment-schemes',
  '/subsidies',
  '/opportunities',
  '/tenders',
  '/news',
  '/comparisons',
  '/tools',
  '/questions',
  '/official-sources',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms'
];

export const SECTOR_ROUTES = [
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

/**
 * Aggregates all route paths by iterating through the repositories
 * (investmentRepository, investmentSchemeRepository, opportunityRepository,
 * tenderRepository, newsRepository, subsidyRepository, and questionRepository)
 * as well as official sources and static pages in App.tsx.
 *
 * Returns a string representing a valid XML sitemap.
 */
export const generateSitemap = (): string => {
  const urlSet: Set<string> = new Set();

  // 1. Static Pages defined in App.tsx
  STATIC_APP_ROUTES.forEach((route) => {
    if (!isExcludedSearchOrFilterUrl(route)) {
      const cleanPath = route === '/' ? '' : route;
      urlSet.add(`${BASE_SITE_URL}${cleanPath}`);
    }
  });

  // 2. State Landing Pages
  stateOfficialSources.forEach((s) => {
    if (s.state) {
      const stateSlug = s.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (stateSlug) {
        const url = `${BASE_SITE_URL}/opportunities/state/${stateSlug}`;
        if (!isExcludedSearchOrFilterUrl(url)) {
          urlSet.add(url);
        }
      }
    }
  });

  // 3. Sector Landing Pages
  SECTOR_ROUTES.forEach((sec) => {
    const url = `${BASE_SITE_URL}/opportunities/sector/${sec}`;
    if (!isExcludedSearchOrFilterUrl(url)) {
      urlSet.add(url);
    }
  });

  // 4. Repositories
  const repoMapping: Array<{
    repo: { getAll(publishedOnly?: boolean): any[] };
    basePath: string;
    publishedOnly?: boolean;
  }> = [
    { repo: investmentRepository, basePath: '/investments' },
    { repo: investmentSchemeRepository, basePath: '/investment-schemes' },
    { repo: opportunityRepository, basePath: '/opportunities' },
    { repo: tenderRepository, basePath: '/tenders' },
    { repo: newsRepository, basePath: '/news' },
    { repo: subsidyRepository, basePath: '/subsidies', publishedOnly: true }
  ];

  repoMapping.forEach(({ repo, basePath, publishedOnly }) => {
    const rawItems = publishedOnly ? repo.getAll(true) : repo.getAll();
    // Phase 9 Safeguard: Exclude quarantined/unverified items from public sitemap
    const items = publishedOnly
      ? rawItems.filter((i: any) => i.publicationState === 'PUBLISHED' || i.verificationStatus === 'VERIFIED')
      : rawItems;

    items.forEach((item: any) => {
      const slug = item.slug || item.id;
      if (slug) {
        const url = `${BASE_SITE_URL}${basePath}/${slug}`;
        if (!isExcludedSearchOrFilterUrl(url) && url.startsWith(`${BASE_SITE_URL}/`)) {
          urlSet.add(url);
        }
      }
    });
  });

  // 5. Question Repository (questions)
  const publishedQuestions = questionRepository.getAll(true);
  publishedQuestions.forEach((q) => {
    if (q.slug) {
      const url = `${BASE_SITE_URL}/questions/${q.slug}`;
      if (!isExcludedSearchOrFilterUrl(url) && url.startsWith(`${BASE_SITE_URL}/`)) {
        urlSet.add(url);
      }
    }
  });

  // 6. Official Sources
  const officialSources = getAllOfficialSources();
  officialSources.forEach((s) => {
    const slug = getOfficialSourceSlug(s);
    if (slug) {
      const url = `${BASE_SITE_URL}/official-sources/${slug}`;
      if (!isExcludedSearchOrFilterUrl(url) && url.startsWith(`${BASE_SITE_URL}/`)) {
        urlSet.add(url);
      }
    }
  });

  const validUrls = Array.from(urlSet);

  const urlXmlNodes = validUrls
    .map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`)
    .join('\n');

  const xmlSitemapString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlXmlNodes}
</urlset>`;

  // Write to public/sitemap.xml if running in Node environment
  try {
    if (typeof process !== 'undefined' && process.cwd) {
      const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      fs.writeFileSync(outputPath, xmlSitemapString, 'utf8');
    }
  } catch {
    // Non-node environment
  }

  return xmlSitemapString;
};

export const generateSitemapXml = generateSitemap;

export default generateSitemap;
