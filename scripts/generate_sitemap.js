import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.sarkarsaathi.org';
const LASTMOD = '2026-08-17';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');

// 1. Core Pages
const corePages = [
  { url: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' },
  { url: `${BASE_URL}/schemes`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/services`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/find-yojana`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/states`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/delhi-govt`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/banking`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/finders`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/calculators`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/complaints`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/downloads`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/blog`, changefreq: 'daily', priority: '0.8' },
  { url: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.5' },
  { url: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.5' },
  { url: `${BASE_URL}/privacy`, changefreq: 'yearly', priority: '0.4' },
  { url: `${BASE_URL}/terms`, changefreq: 'yearly', priority: '0.4' },
  { url: `${BASE_URL}/disclaimer`, changefreq: 'yearly', priority: '0.4' },
];

const urls = new Set();
const sitemapEntries = [];

function addUrl(loc, changefreq = 'daily', priority = '0.8') {
  if (!urls.has(loc)) {
    urls.add(loc);
    sitemapEntries.push(
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    );
  }
}

// Add Core Pages
for (const page of corePages) {
  addUrl(page.url, page.changefreq, page.priority);
}

// 2. Load Sarkari Yojana & Services from src/data/servicesData.ts (Only Main Yojana Pages)
const servicesDataPath = path.join(process.cwd(), 'src', 'data', 'servicesData.ts');
if (fs.existsSync(servicesDataPath)) {
  const content = fs.readFileSync(servicesDataPath, 'utf-8');
  const serviceMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const id of serviceMatches) {
    addUrl(`${BASE_URL}/yojana/${id}`, 'daily', '0.9');
    addUrl(`${BASE_URL}/service/${id}`, 'daily', '0.8');
    addUrl(`${BASE_URL}/scheme/${id}`, 'daily', '0.8');
  }
}

// 3. Load Blog Posts from src/data/blogData.ts
const blogDataPath = path.join(process.cwd(), 'src', 'data', 'blogData.ts');
if (fs.existsSync(blogDataPath)) {
  const content = fs.readFileSync(blogDataPath, 'utf-8');
  const blogSlugs = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const slug of blogSlugs) {
    addUrl(`${BASE_URL}/blog/${slug}`, 'daily', '0.7');
  }
}

// 4. Load States from src/data/statesData.ts
const statesDataPath = path.join(process.cwd(), 'src', 'data', 'statesData.ts');
if (fs.existsSync(statesDataPath)) {
  const content = fs.readFileSync(statesDataPath, 'utf-8');
  const stateIds = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const id of stateIds) {
    addUrl(`${BASE_URL}/state/${id}`, 'daily', '0.7');
  }
}

// 5. Load Delhi Departments from src/data/delhiDeptsData.ts
const deptsDataPath = path.join(process.cwd(), 'src', 'data', 'delhiDeptsData.ts');
if (fs.existsSync(deptsDataPath)) {
  const content = fs.readFileSync(deptsDataPath, 'utf-8');
  const deptIds = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const id of deptIds) {
    addUrl(`${BASE_URL}/department/${id}`, 'daily', '0.7');
  }
}

// Build XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`Successfully generated public/sitemap.xml with ${urls.size} unique URLs (base: ${BASE_URL}, lastmod: ${LASTMOD}).`);

// Build Robots.txt - Disallow /faq/ and /faqs to protect SEO indexing
const robotsTxt = `User-agent: *
Allow: /
Allow: /yojana/
Allow: /scheme/
Allow: /service/
Allow: /blog/
Allow: /state/
Disallow: /api/
Disallow: /faq/
Disallow: /faqs

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
console.log(`Successfully generated public/robots.txt pointing to ${BASE_URL}/sitemap.xml`);
