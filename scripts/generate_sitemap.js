import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.sarkarsaathi.org';
const LASTMOD = '2026-08-17';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');

// 1. Core Platform Pages
const corePages = [
  { url: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' },
  { url: `${BASE_URL}/schemes`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/services`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/find-yojana`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/states`, changefreq: 'daily', priority: '0.9' },
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

// 2. All 36 States & Union Territories of India
const STATES = [
  'andhra-pradesh',
  'arunachal-pradesh',
  'assam',
  'bihar',
  'chhattisgarh',
  'goa',
  'gujarat',
  'haryana',
  'himachal-pradesh',
  'jharkhand',
  'karnataka',
  'kerala',
  'madhya-pradesh',
  'maharashtra',
  'manipur',
  'meghalaya',
  'mizoram',
  'nagaland',
  'odisha',
  'punjab',
  'rajasthan',
  'sikkim',
  'tamil-nadu',
  'telangana',
  'tripura',
  'uttar-pradesh',
  'uttarakhand',
  'west-bengal',
  'delhi',
  'andaman-nicobar',
  'chandigarh',
  'dadra-nagar-haveli-daman-diu',
  'jammu-kashmir',
  'ladakh',
  'lakshadweep',
  'puducherry',
];

// 3. 42 Core Citizen Services across every State
const CORE_SERVICES = [
  'passport-seva',
  'driving-licence',
  'ration-card',
  'domicile-certificate',
  'income-certificate',
  'caste-certificate',
  'birth-certificate',
  'death-certificate',
  'marriage-certificate',
  'property-tax',
  'water-bill-connection',
  'electricity-bill-connection',
  'trade-licence',
  'police-clearance-certificate',
  'senior-citizen-card',
  'disability-certificate',
  'e-shram-card',
  'ayushman-bharat-card',
  'pm-kisan-samman',
  'pm-awas-yojana',
  'sukanya-samriddhi',
  'epfo-pf-withdrawal',
  'aadhaar-enrolment',
  'aadhaar-update',
  'pan-card-apply',
  'voter-id-card',
  'land-records-mutation',
  'vehicle-rc-transfer',
  'high-security-number-plate',
  'food-licence-fssai',
  'udyam-msme-registration',
  'old-age-pension',
  'widow-pension',
  'divyang-pension',
  'crop-insurance-pmfby',
  'mudra-loan',
  'jan-dhan-account',
  'esewa-citizen-services',
  'edistrict-services',
  'land-jamabandi-records',
  'employment-exchange-registration',
  'arms-licence-portal',
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

// 1. Add Core Pages
for (const page of corePages) {
  addUrl(page.url, page.changefreq, page.priority);
}

// 2. Add State Index Pages (/state/${stateSlug})
for (const stateSlug of STATES) {
  addUrl(`${BASE_URL}/state/${stateSlug}`, 'daily', '0.9');
}

// 3. Add Pan-India State-Specific Services (36 states x 42 services = ~1512 URLs)
for (const stateSlug of STATES) {
  for (const serviceSlug of CORE_SERVICES) {
    addUrl(`${BASE_URL}/${stateSlug}/${serviceSlug}`, 'weekly', '0.85');
  }
}

// 4. Backward Compatibility: Maintain /yojana/* and /service/* entries
const servicesDataPath = path.join(process.cwd(), 'src', 'data', 'servicesData.ts');
if (fs.existsSync(servicesDataPath)) {
  const content = fs.readFileSync(servicesDataPath, 'utf-8');
  const serviceMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const id of serviceMatches) {
    addUrl(`${BASE_URL}/yojana/${id}`, 'weekly', '0.8');
    addUrl(`${BASE_URL}/service/${id}`, 'weekly', '0.8');
    addUrl(`${BASE_URL}/scheme/${id}`, 'weekly', '0.8');
  }
}

// 5. Load Blog Posts
const blogDataPath = path.join(process.cwd(), 'src', 'data', 'blogData.ts');
if (fs.existsSync(blogDataPath)) {
  const content = fs.readFileSync(blogDataPath, 'utf-8');
  const blogSlugs = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const slug of blogSlugs) {
    addUrl(`${BASE_URL}/blog/${slug}`, 'weekly', '0.7');
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

// Also write to dist/sitemap.xml if dist directory exists
const distDir = path.join(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
}

// Build Robots.txt
const robotsTxt = `User-agent: *
Allow: /
Allow: /state/
Allow: /yojana/
Allow: /scheme/
Allow: /service/
Allow: /blog/
Disallow: /api/
Disallow: /faq/
Disallow: /faqs

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
}
console.log(`Successfully generated public/robots.txt pointing to ${BASE_URL}/sitemap.xml`);
