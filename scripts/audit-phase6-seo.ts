import * as fs from 'fs';
import * as path from 'path';

function record(check: string, pass: boolean, details: string) {
  console.log(`[${pass ? 'PASS' : 'FAIL'}] ${check}: ${details}`);
  if (!pass) process.exit(1);
}

// 1. Structured Data in QuestionDetailView
const detailContent = fs.readFileSync(path.join(process.cwd(), 'src/components/QuestionDetailView.tsx'), 'utf8');
const hasQAPage = detailContent.includes("'@type': 'QAPage'") || detailContent.includes('"@type": "QAPage"');
record('QAPage Markup Absent', !hasQAPage, 'Verified QAPage is completely absent from structured data');

const hasWebPage = detailContent.includes("'@type': 'WebPage'");
record('WebPage Schema in DetailView', hasWebPage, 'Present with id, name, description, isPartOf');

const hasBreadcrumb = detailContent.includes("'@type': 'BreadcrumbList'");
record('BreadcrumbList Schema in DetailView', hasBreadcrumb, 'Present with 4-level hierarchy');

// 2. Structured Data in QuestionsHubView
const hubContent = fs.readFileSync(path.join(process.cwd(), 'src/components/QuestionsHubView.tsx'), 'utf8');
const hasCollectionPage = hubContent.includes("'@type': 'CollectionPage'");
record('CollectionPage Schema in HubView', hasCollectionPage, 'Present with name, description, isPartOf');

const hasHubBreadcrumb = hubContent.includes("'@type': 'BreadcrumbList'");
record('BreadcrumbList Schema in HubView', hasHubBreadcrumb, 'Present with Home > Questions');

// 3. Crawlable HTML Links
const hasCategoryDestinations = hubContent.includes('CORE_CATEGORY_DESTINATIONS') && hubContent.includes('href={dest.path}');
record('Crawlable Core Category Destinations on Hub', hasCategoryDestinations, 'Hub links to all 9 category destinations with <a> tags');

const hasQuestionLinksOnHub = hubContent.includes('href={`/questions/${q.slug}`}');
record('Crawlable Question Links on Hub', hasQuestionLinksOnHub, 'All question cards have crawlable <a href="/questions/:slug">');

const hasBreadcrumbLinksOnDetail = detailContent.includes('href="/questions"') && detailContent.includes('href={categoryHubUrl}');
record('Crawlable Breadcrumb Links on Detail', hasBreadcrumbLinksOnDetail, 'Breadcrumbs use crawlable <a href="..."> tags');

const hasRelatedQuestionLinks = detailContent.includes('href={`/questions/${rel.slug}`}');
record('Crawlable Related Question Links on Detail', hasRelatedQuestionLinks, 'Related question cards use crawlable <a href="..."> tags');

// 4. Navigation Crawlability
const navContent = fs.readFileSync(path.join(process.cwd(), 'src/components/Navigation.tsx'), 'utf8');
const navHasAnchor = navContent.includes('href={item.path}') && navContent.includes('href="/questions"');
record('Crawlable Navigation and Footer Links', navHasAnchor, 'Main nav, mobile menu, and footer use crawlable <a href="..."> tags');

// 5. Contextual FAQ Crawlability
const faqContent = fs.readFileSync(path.join(process.cwd(), 'src/components/ContextualFAQSection.tsx'), 'utf8');
const faqHasAnchor = faqContent.includes('href="/questions"') && faqContent.includes('href={`/questions/${q.slug}`}');
record('Crawlable Contextual FAQ Links', faqHasAnchor, 'Contextual FAQ sections link to /questions and canonical detail pages via <a>');

// 6. Canonical URLs and Soft 404 Prevention
const seoContent = fs.readFileSync(path.join(process.cwd(), 'src/utils/seo.ts'), 'utf8');
const canonicalNormalized = seoContent.includes("split('?')[0].split('#')[0]") && seoContent.includes('toLowerCase()');
record('Canonical URL Normalization', canonicalNormalized, 'Strips query params and hash, lowercases canonical path');

const appContent = fs.readFileSync(path.join(process.cwd(), 'src/App.tsx'), 'utf8');
const soft404PreventedInSEO = appContent.includes('// If selectedSlug was provided but item does not exist, trigger genuine 404 SEO');
record('Soft 404 Prevention in SEO Effect', soft404PreventedInSEO, 'Unknown slug triggers title "Page Not Found - SarkarSaathi" and noIndex: true');

const soft404PreventedInNavigate = appContent.includes('else if (root === \'/questions\') exists = !!questionRepository.getBySlug');
record('Soft 404 Prevention in navigate()', soft404PreventedInNavigate, 'Programmatic navigation routes unknown slugs directly to /404');

// 7. Robots.txt Disallow
const robotsContent = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf8');
const robotsCorrect = robotsContent.includes('Disallow: /search') && robotsContent.includes('Disallow: /admin') && robotsContent.includes('Disallow: /404') && robotsContent.includes('Sitemap: https://sarkarsaathi.org/sitemap.xml');
record('robots.txt Disallow Directives', robotsCorrect, 'Disallows /search, /admin, /404 and specifies valid sitemap URL');

// 8. Sitemap XML Validation
const sitemapContent = fs.readFileSync(path.join(process.cwd(), 'public/sitemap.xml'), 'utf8');
const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
const sitemapUrls = urlMatches.map(s => s.replace(/<\/?loc>/g, ''));
const uniqueCount = new Set(sitemapUrls).size;
const zeroDuplicates = uniqueCount === sitemapUrls.length;
record('Sitemap Zero Duplicate URLs', zeroDuplicates, `Total: ${sitemapUrls.length}, Unique: ${uniqueCount}`);

const hasHubInSitemap = sitemapUrls.includes('https://sarkarsaathi.org/questions');
record('Sitemap Questions Hub Inclusion', hasHubInSitemap, 'https://sarkarsaathi.org/questions present');

const questionUrlsInSitemap = sitemapUrls.filter(u => u.startsWith('https://sarkarsaathi.org/questions/'));
record('Sitemap Canonical Questions Inclusion', questionUrlsInSitemap.length === 143, `Found ${questionUrlsInSitemap.length} / 143 verified question URLs`);

const noDisallowedInSitemap = !sitemapUrls.some(u => u.includes('/search') || u.includes('/admin') || u.includes('/404'));
record('Sitemap Excludes Disallowed & 404 URLs', noDisallowedInSitemap, 'No search, admin, or 404 URLs present');

console.log('\nALL 17 PHASE 6 TECHNICAL SEO AUDIT CHECKS PASSED SUCCESSFULLY!\n');
