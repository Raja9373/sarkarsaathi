import fs from 'fs';
import path from 'path';
import { InvestmentRepository, InvestmentSchemeRepository, OpportunityRepository, TenderRepository } from '../infrastructure/repositories/InvestmentRepository';
import { NewsRepository } from '../infrastructure/repositories/NewsRepository';
import { SubsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { getAllOfficialSources, getOfficialSourceSlug, stateOfficialSources } from './officialSources';

const baseUrl = 'https://sarkarsaathi.org';

const escapeXml = (str: string): string => {
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

const hubs = [
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
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms'
];

const repoMap = [
  { repo: new InvestmentRepository(), path: '/investments' },
  { repo: new InvestmentSchemeRepository(), path: '/investment-schemes' },
  { repo: new OpportunityRepository(), path: '/opportunities' },
  { repo: new TenderRepository(), path: '/tenders' },
  { repo: new NewsRepository(), path: '/news' },
  { repo: new SubsidyRepository(), path: '/subsidies' }
];

const sectors = [
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

export const generateSitemap = () => {
  const rawUrls: Set<string> = new Set();

  // Hubs
  hubs.forEach(h => {
    if (!h.includes('?') && !h.includes('search') && !h.includes('filter')) {
      const cleanPath = h === '/' ? '' : h;
      rawUrls.add(`${baseUrl}${cleanPath}`);
    }
  });

  let duplicateCount = 0;
  let invalidCount = 0;
  let searchFilterCount = 0;

  // State opportunity landing pages
  stateOfficialSources.forEach(s => {
    if (s.state) {
      const stateSlug = s.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (stateSlug) {
        rawUrls.add(`${baseUrl}/opportunities/state/${stateSlug}`);
      }
    }
  });

  // Sector opportunity landing pages
  sectors.forEach(sec => {
    rawUrls.add(`${baseUrl}/opportunities/sector/${sec}`);
  });

  // Repo items
  repoMap.forEach(({ repo, path: routePath }) => {
    const items = repo.getAll();
    items.forEach(i => {
      const slug = (i as any).slug || (i as any).id;
      if (slug) {
        const url = `${baseUrl}${routePath}/${slug}`;
        if (url.includes('?') || url.includes('search') || url.includes('filter')) {
          searchFilterCount++;
          return;
        }
        if (!url.startsWith('https://sarkarsaathi.org/')) {
          invalidCount++;
          return;
        }
        if (rawUrls.has(url)) {
          duplicateCount++;
          return;
        }
        rawUrls.add(url);
      }
    });
  });

  // Official sources
  const officialSources = getAllOfficialSources();
  officialSources.forEach(s => {
    const slug = getOfficialSourceSlug(s);
    if (slug) {
      const url = `${baseUrl}/official-sources/${slug}`;
      if (url.includes('?') || url.includes('search') || url.includes('filter')) {
        searchFilterCount++;
        return;
      }
      if (!url.startsWith('https://sarkarsaathi.org/')) {
        invalidCount++;
        return;
      }
      if (rawUrls.has(url)) {
        duplicateCount++;
        return;
      }
      rawUrls.add(url);
    }
  });

  const validUrls = Array.from(rawUrls);

  const urlElements = validUrls.map(u => {
    const escaped = escapeXml(u);
    return `  <url>\n    <loc>${escaped}</loc>\n  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;

  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');

  // Basic XML validation check
  const hasXmlHeader = sitemap.startsWith('<?xml');
  const hasUrlset = sitemap.includes('<urlset') && sitemap.includes('</urlset>');
  const unescapedAmp = sitemap.match(/&(?!(amp|lt|gt|apos|quot);)/g);
  const xmlValid = hasXmlHeader && hasUrlset && (!unescapedAmp || unescapedAmp.length === 0);

  console.log(`Sitemap generated successfully in public/sitemap.xml`);
  console.log(`Total URLs: ${validUrls.length}`);
  console.log(`Duplicates removed: ${duplicateCount}`);
  console.log(`Invalid URLs removed: ${invalidCount}`);
  console.log(`Search/Filter URLs removed: ${searchFilterCount}`);
  console.log(`XML Validation: ${xmlValid ? 'PASS' : 'FAIL'}`);

  return {
    totalUrls: validUrls.length,
    duplicateCount,
    invalidCount,
    searchFilterCount,
    xmlValid
  };
};
