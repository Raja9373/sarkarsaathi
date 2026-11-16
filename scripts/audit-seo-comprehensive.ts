import fs from 'fs';
import path from 'path';

interface AuditResult {
  name: string;
  pass: boolean;
  details: string;
}

const results: AuditResult[] = [];

function check(name: string, pass: boolean, details: string) {
  results.push({ name, pass, details });
  console.log(`[${pass ? 'PASS' : 'FAIL'}] ${name}: ${details}`);
}

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const SITEMAP_PATH = path.join(ROOT, 'public', 'sitemap.xml');
const ROBOTS_PATH = path.join(ROOT, 'public', 'robots.txt');

// 1. Sitemap XML structure & hygiene
const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
const locMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
const sitemapUrls = locMatches.map((m) => m.replace(/<\/?loc>/g, ''));
const lastmodMatches = sitemapXml.match(/<lastmod>(.*?)<\/lastmod>/g) || [];
const uniqueSitemapUrls = new Set(sitemapUrls);

check(
  'Sitemap XML Schema & Lastmod',
  sitemapXml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">') &&
    lastmodMatches.length === sitemapUrls.length,
  `${sitemapUrls.length} <loc> entries and ${lastmodMatches.length} <lastmod> entries`
);

check(
  'Sitemap Zero Duplicates',
  uniqueSitemapUrls.size === sitemapUrls.length,
  `Unique: ${uniqueSitemapUrls.size} / Total: ${sitemapUrls.length}`
);

check(
  'Sitemap Homepage Canonical Format',
  sitemapUrls.includes('https://sarkarsaathi.org/'),
  'Homepage listed with trailing slash matching <link rel="canonical">'
);

const disallowedPaths = ['/search', '/admin', '/404', '/saved', '/recently-viewed', '/compare'];
const leakedDisallowed = sitemapUrls.filter((u) => {
  const p = new URL(u).pathname;
  return disallowedPaths.some((d) => p === d || p.startsWith(`${d}/`));
});
check(
  'Sitemap Excludes Non-Indexable & Legacy Broken Paths',
  leakedDisallowed.length === 0,
  leakedDisallowed.length === 0 ? '0 leaked non-indexable paths' : `Leaked: ${leakedDisallowed.join(', ')}`
);

const bulkDoorwaysInSitemap = sitemapUrls.filter(
  (u) =>
    u.includes('mospi-paimana-infrastructure-project-') ||
    u.includes('haryana-industrial-investment-project-') ||
    u.includes('gidc-infrastructure-project-') ||
    u.includes('delhi-urban-tech-logistics-project-') ||
    u.includes('dfccil-freight-project-') ||
    u.includes('pm-mitra-textile-park-')
);
check(
  'Sitemap Excludes Repetitive Bulk Doorway Templates',
  bulkDoorwaysInSitemap.length === 0,
  `${bulkDoorwaysInSitemap.length} doorway templates present (expected 0)`
);

// 2. Robots.txt verification
const robotsTxt = fs.readFileSync(ROBOTS_PATH, 'utf8');
check(
  'Robots.txt Directives',
  robotsTxt.includes('Disallow: /search') &&
    robotsTxt.includes('Disallow: /admin') &&
    robotsTxt.includes('Disallow: /404') &&
    robotsTxt.includes('Disallow: /saved') &&
    robotsTxt.includes('Disallow: /recently-viewed') &&
    robotsTxt.includes('Sitemap: https://sarkarsaathi.org/sitemap.xml'),
  'Blocks utility/private routes and points cleanly to sitemap.xml'
);

// 3. Built dist/ verification (100% sitemap parity + schema + canonical + zero duplicate FAQPage)
if (!fs.existsSync(DIST_DIR)) {
  check('Dist Build Exists', false, 'dist/ directory missing; run npm run build first');
} else {
  const missingPrerender: string[] = [];
  const missingCanonical: string[] = [];
  const duplicateFaqPages: string[] = [];
  const titlesSeen = new Map<string, string>();
  const duplicateTitles: Array<{ title: string; a: string; b: string }> = [];

  for (const urlStr of sitemapUrls) {
    const pathname = new URL(urlStr).pathname.replace(/^\/+|\/+$/g, '');
    const htmlFile = pathname
      ? path.join(DIST_DIR, pathname, 'index.html')
      : path.join(DIST_DIR, 'index.html');

    if (!fs.existsSync(htmlFile)) {
      missingPrerender.push(urlStr);
      continue;
    }

    const html = fs.readFileSync(htmlFile, 'utf8');
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const titleText = titleMatch ? titleMatch[1].trim() : '';
    if (!titleText) {
      missingCanonical.push(`${urlStr} (missing <title>)`);
    } else if (titlesSeen.has(titleText)) {
      duplicateTitles.push({ title: titleText, a: titlesSeen.get(titleText)!, b: urlStr });
    } else {
      titlesSeen.set(titleText, urlStr);
    }

    const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    if (!canonicalMatch || canonicalMatch[1] !== urlStr) {
      missingCanonical.push(`${urlStr} -> found ${canonicalMatch?.[1] || 'none'}`);
    }

    const faqMatches = html.match(/"FAQPage"/g) || [];
    if (faqMatches.length > 1) {
      duplicateFaqPages.push(`${urlStr} (${faqMatches.length} FAQPage occurrences)`);
    }
  }

  check(
    '100% Sitemap-to-Prerender Static HTML Parity',
    missingPrerender.length === 0,
    missingPrerender.length === 0
      ? `All ${sitemapUrls.length} / ${sitemapUrls.length} sitemap URLs have static pre-rendered HTML in dist/`
      : `Missing ${missingPrerender.length}: ${missingPrerender.slice(0, 5).join(', ')}`
  );

  check(
    'Unique Titles Across Indexed Pages',
    duplicateTitles.length === 0,
    duplicateTitles.length === 0
      ? `${titlesSeen.size} unique titles across ${sitemapUrls.length} pages`
      : `Found ${duplicateTitles.length} duplicate titles (e.g., ${duplicateTitles[0].a} vs ${duplicateTitles[0].b})`
  );

  check(
    'Exact Self-Referencing Canonical Tags',
    missingCanonical.length === 0,
    missingCanonical.length === 0
      ? `All ${sitemapUrls.length} pre-rendered pages have matching canonical tags`
      : `Mismatches (${missingCanonical.length}): ${missingCanonical.slice(0, 3).join('; ')}`
  );

  check(
    'Zero Duplicate FAQPage Schemas in Pre-rendered HTML',
    duplicateFaqPages.length === 0,
    duplicateFaqPages.length === 0
      ? '0 duplicate FAQPage schema blocks'
      : `Duplicates found: ${duplicateFaqPages.slice(0, 3).join(', ')}`
  );

  // Check legacy GSC URL has noindex, follow
  const legacySlugsToCheck = [
    'haryana-industrial-investment-project-79',
    'union-territory-investment-project-18',
    'state-energy-infrastructure-project-85',
  ];
  const legacyPass = legacySlugsToCheck.every((s) => {
    const f = path.join(DIST_DIR, 'opportunities', s, 'index.html');
    return fs.existsSync(f) && fs.readFileSync(f, 'utf8').includes('content="noindex, follow"');
  });
  check(
    'Legacy Bulk URL Noindex Safeguard',
    legacyPass,
    legacyPass
      ? `All ${legacySlugsToCheck.length} GSC-flagged opportunity URLs emit static HTML with <meta name="robots" content="noindex, follow">`
      : 'One or more legacy GSC URLs missing static HTML or noindex, follow'
  );

  // Check Vercel 301 redirects for legacy 404 & .html paths + sitemap X-Robots-Tag
  const vercelCfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
  const redirectSources = (vercelCfg.redirects || []).map((r: any) => r.source);
  const redirectsOk =
    redirectSources.includes('/investment-schemes/pli-food-processing') &&
    redirectSources.includes('/dadra-nagar-haveli-daman-diu/:service*') &&
    redirectSources.includes('/karnataka/:service*') &&
    redirectSources.includes('/disclaimer.html') &&
    redirectSources.includes('/privacy-policy.html');
  check(
    'GSC 404 & Legacy .html 301 Redirects Configured',
    redirectsOk,
    '301 permanent redirects active in vercel.json for pli-food-processing, legacy state URLs, and .html compliance paths'
  );

  const sitemapHeaderRule = (vercelCfg.headers || []).find((h: any) => String(h.source || '').includes('sitemap'));
  const hasSitemapNoindexHeader = Boolean(
    sitemapHeaderRule?.headers?.some((kv: any) => kv.key === 'X-Robots-Tag' && String(kv.value).includes('noindex'))
  );
  check(
    'Sitemap X-Robots-Tag Noindex Header',
    hasSitemapNoindexHeader,
    'vercel.json sets X-Robots-Tag: noindex, follow on XML sitemaps to prevent GSC Crawled-not-indexed noise'
  );

  // Check thin-content prevention on all key hub static HTML files & sector parity
  const hubPaths = [
    'investments',
    'investment-schemes',
    'opportunities',
    'tenders',
    'news',
    'official-sources',
    'comparisons',
    'tools',
    'opportunities/sector/quantum-technologies-deep-tech',
  ];
  const thinHubs: string[] = [];
  for (const hp of hubPaths) {
    const f = path.join(DIST_DIR, hp, 'index.html');
    if (!fs.existsSync(f)) {
      thinHubs.push(`${hp} (missing)`);
      continue;
    }
    const raw = fs.readFileSync(f, 'utf8');
    const mainMatch = raw.match(/<main[\s\S]*?<\/main>/i);
    const textOnly = (mainMatch ? mainMatch[0] : '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textOnly ? textOnly.split(' ').length : 0;
    if (wordCount < 60) {
      thinHubs.push(`${hp} (${wordCount} words)`);
    }
  }
  check(
    'Zero Thin Pre-Rendered Hubs & Sector Pages',
    thinHubs.length === 0,
    thinHubs.length === 0
      ? `All ${hubPaths.length} hubs & key sectors exceed 60+ static semantic words in raw HTML`
      : `Thin/missing pages: ${thinHubs.join(', ')}`
  );

  // Check WebApplication JSON-LD on /tools and Organization JSON-LD on /
  const rootHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
  const toolsHtml = fs.existsSync(path.join(DIST_DIR, 'tools', 'index.html'))
    ? fs.readFileSync(path.join(DIST_DIR, 'tools', 'index.html'), 'utf8')
    : '';
  check(
    'Root Organization + WebSite & /tools WebApplication JSON-LD',
    rootHtml.includes('"@type": "Organization"') &&
      rootHtml.includes('"@type": "WebSite"') &&
      !rootHtml.includes('href="/compare"') &&
      toolsHtml.includes('"@type":"WebApplication"'),
    'Organization/WebSite schemas active, broken /compare link eliminated, and WebApplication schema active on /tools'
  );
}

const failed = results.filter((r) => !r.pass);
console.log(`\nSummary: ${results.length - failed.length}/${results.length} comprehensive SEO checks passed.`);
if (failed.length > 0) {
  process.exit(1);
}
