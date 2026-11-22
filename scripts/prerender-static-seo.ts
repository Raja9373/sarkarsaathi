import fs from 'fs';
import path from 'path';
import {
  investmentRepository,
  investmentSchemeRepository,
  opportunityRepository,
  tenderRepository,
  newsRepository,
} from '../src/infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { questionRepository } from '../src/infrastructure/repositories/QuestionRepository';
import { editorialGuides } from '../src/data/editorialGuidesData';
import {
  centralOfficialSources,
  getAllOfficialSources,
  getOfficialSourceSlug,
  stateOfficialSources,
} from '../src/utils/officialSources';
import { SECTOR_ROUTES } from '../src/utils/sitemapGenerator';
import { isIndexableOpportunity } from '../src/utils/seoQualityGate';
import {
  getGovernmentServiceSchema,
  getInvestmentBreadcrumbSchema,
  getHubOgImage,
  PRODUCTION_DOMAIN,
} from '../src/utils/seo';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

function renderListSection(title: string, items: unknown, ordered: boolean = false): string {
  if (!items) return '';
  const arr = Array.isArray(items)
    ? items.map((x) => String(x || '').trim()).filter(Boolean)
    : typeof items === 'string' && items.trim()
      ? [items.trim()]
      : [];
  if (arr.length === 0) return '';
  if (arr.length === 1 && !ordered) {
    return `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">${escapeHtml(title)}</h2><p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(arr[0])}</p></section>`;
  }
  const tag = ordered ? 'ol' : 'ul';
  const listClass = ordered ? 'list-decimal' : 'list-disc';
  return `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">${escapeHtml(title)}</h2><${tag} class="${listClass} pl-5 text-sm text-gray-700 space-y-1">${arr.map((entry) => `<li>${escapeHtml(entry)}</li>`).join('')}</${tag}></section>`;
}

function escapeHtml(str: string = ''): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface BreadcrumbStep {
  name: string;
  path: string;
}

interface PageMeta {
  routePath: string; // e.g., '/subsidies/pm-kisan-samman-nidhi'
  canonicalPath?: string; // defaults to routePath
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbStep[];
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
  bodyHtml: string;
}

function buildBreadcrumbSchema(steps: BreadcrumbStep[]): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: steps.map((step, index) => {
      const cleanPath = step.path.replace(/^\/+|\/+$/g, '').toLowerCase();
      const itemUrl = cleanPath ? `${PRODUCTION_DOMAIN}/${cleanPath}` : `${PRODUCTION_DOMAIN}/`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: step.name,
        item: itemUrl,
      };
    }),
  };
}

function buildBreadcrumbNavHtml(steps?: BreadcrumbStep[]): string {
  if (!steps || steps.length === 0) return '';
  const items = steps.map((step, idx) => {
    const isLast = idx === steps.length - 1;
    if (isLast) {
      return `<li aria-current="page" class="font-semibold text-gray-900 truncate">${escapeHtml(step.name)}</li>`;
    }
    return `<li><a href="${escapeHtml(step.path)}" class="text-blue-700 hover:underline">${escapeHtml(step.name)}</a><span aria-hidden="true" class="mx-1.5 text-gray-400">/</span></li>`;
  });
  return `<nav aria-label="Breadcrumb" class="mb-4 text-xs sm:text-sm text-gray-600"><ol class="flex flex-wrap items-center">${items.join('')}</ol></nav>`;
}

function buildHtmlDocument(templateHtml: string, meta: PageMeta): string {
  const cleanCanonical = (meta.canonicalPath || meta.routePath).replace(/^\/+|\/+$/g, '').toLowerCase();
  const canonicalUrl = cleanCanonical ? `${PRODUCTION_DOMAIN}/${cleanCanonical}` : `${PRODUCTION_DOMAIN}/`;
  const ogImage = getHubOgImage(meta.canonicalPath || meta.routePath);
  const safeTitle = escapeHtml(meta.title);
  const safeDesc = escapeHtml(meta.description.slice(0, 165));
  const safeKeywords = meta.keywords ? escapeHtml(meta.keywords) : '';

  let html = templateHtml;

  // 0. Enforce noindex, follow AND strip AdSense script when flagged (AdSense policy hygiene)
  if (meta.noIndex) {
    html = html.replace(
      /<meta\s+name="(robots|googlebot|bingbot)"\s+content="[^"]*"\s*\/?>/gi,
      '<meta name="$1" content="noindex, follow" />'
    );
    html = html.replace(
      /<script[^>]*pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js[^>]*>[\s\S]*?<\/script>\s*/gi,
      ''
    );
  }

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);

  // 2. Replace <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${safeDesc}" />`
  );

  // 3. Replace <meta name="keywords"> if provided
  if (safeKeywords) {
    html = html.replace(
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="keywords" content="${safeKeywords}" />`
    );
  }

  // 4. Replace OpenGraph & Twitter meta tags
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${meta.ogType || 'website'}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`
  );
  if (/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
    );
  } else {
    html = html.replace('</head>', `    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />\n  </head>`);
  }
  if (/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
    );
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n  </head>`);
  }
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`
  );

  // 5. Inject Page-Specific JSON-LD (plus BreadcrumbList if missing) before </head>
  const schemasToInject: Array<Record<string, any>> = meta.jsonLd
    ? Array.isArray(meta.jsonLd)
      ? [...meta.jsonLd]
      : [meta.jsonLd]
    : [];
  const hasBreadcrumbSchema = schemasToInject.some(
    (s) => s['@type'] === 'BreadcrumbList' || Boolean(s.breadcrumb)
  );
  if (meta.breadcrumbs && meta.breadcrumbs.length > 0 && !hasBreadcrumbSchema) {
    schemasToInject.push(buildBreadcrumbSchema(meta.breadcrumbs));
  }
  if (schemasToInject.length > 0) {
    const scripts = schemasToInject
      .map((s) => `    <script type="application/ld+json">\n${JSON.stringify(s)}\n    </script>`)
      .join('\n');
    html = html.replace('</head>', `${scripts}\n  </head>`);
  }

  const breadcrumbNavHtml = buildBreadcrumbNavHtml(meta.breadcrumbs);

  // 6. Replace <div id="root">...</div> with page-specific semantic HTML
  const wrappedBody = `    <div id="root">
      <header class="bg-blue-900 text-white py-5 px-4">
        <div class="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <a href="/" class="text-xl font-bold text-white">SarkarSaathi.org</a>
          <nav aria-label="Primary Navigation" class="flex flex-wrap gap-4 text-sm">
            <a href="/guides" class="underline">Guides</a>
            <a href="/subsidies" class="underline">Subsidies</a>
            <a href="/investments" class="underline">54EC &amp; Bonds</a>
            <a href="/investment-schemes" class="underline">Savings Schemes</a>
            <a href="/tenders" class="underline">Tenders</a>
            <a href="/questions" class="underline">Hindi/Hinglish Q&amp;A</a>
            <a href="/tools" class="underline">Calculators</a>
          </nav>
        </div>
      </header>
      <main class="max-w-6xl mx-auto px-4 py-8">
        ${breadcrumbNavHtml}
${meta.bodyHtml}
      </main>
      <footer class="bg-gray-900 text-gray-300 py-6 px-4 mt-12 text-sm">
        <div class="max-w-6xl mx-auto flex flex-wrap justify-between gap-4">
          <p>SarkarSaathi.org — Independent Government Schemes &amp; Sovereign Investments Research Platform.</p>
          <nav class="flex flex-wrap gap-4">
            <a href="/about" class="underline">About</a>
            <a href="/contact" class="underline">Contact</a>
            <a href="/privacy-policy" class="underline">Privacy Policy</a>
            <a href="/disclaimer" class="underline">Disclaimer</a>
            <a href="/terms" class="underline">Terms</a>
          </nav>
        </div>
      </footer>
    </div>`;

  const rootStart = html.indexOf('<div id="root">');
  const bodyEnd = html.lastIndexOf('</body>');
  if (rootStart !== -1 && bodyEnd !== -1 && bodyEnd > rootStart) {
    html = html.substring(0, rootStart) + wrappedBody + '\n  ' + html.substring(bodyEnd);
  } else {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, wrappedBody);
  }

  return html;
}

function writeRouteHtml(templateHtml: string, meta: PageMeta): void {
  const cleanRoute = meta.routePath.replace(/^\/+|\/+$/g, '');
  if (!cleanRoute) return;
  const targetDir = path.join(DIST_DIR, cleanRoute);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');
  const html = buildHtmlDocument(templateHtml, meta);
  fs.writeFileSync(targetFile, html, 'utf8');
}

function runPrerender(): void {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.warn('[Prerender] dist/index.html not found, skipping static pre-render.');
    return;
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf8');
  let generatedCount = 0;

  const publishedSubsidies = subsidyRepository.getPublished();
  const investments = investmentRepository.getAll();
  const schemes = investmentSchemeRepository.getAll();
  const questions = questionRepository.getAll(true);
  const tenders = tenderRepository.getAll();
  const news = newsRepository.getAll();
  const officialSources = getAllOfficialSources();
  const opportunities = opportunityRepository.getAll();

  // 1. Static Hubs & Compliance Pages
  const hubPages: PageMeta[] = [
    {
      routePath: '/guides',
      title: `In-Depth Editorial Handbooks & Government Scheme Guides (${editorialGuides.length} Research Guides) | SarkarSaathi`,
      description: 'Original long-form citizen handbooks with worked Rupee math, statutory comparison tables, and .gov.in citations on Section 54EC bonds, PM Surya Ghar solar, GeM rules, PPF vs SSY vs SCSS, and MSME loans.',
      keywords: 'indian government scheme guides, 54ec bond guide, pm surya ghar subsidy guide, gem procurement rules guide, ppf vs ssy vs scss, pmegp mudra cgtmse guide',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Editorial Guides', path: '/guides' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'SarkarSaathi In-Depth Editorial Handbooks & Policy Guides',
        url: `${PRODUCTION_DOMAIN}/guides`,
        description: 'Original long-form research handbooks covering Indian government schemes, sovereign bonds, small savings tax rules, and public procurement compliance.',
        hasPart: editorialGuides.map((g) => ({
          '@type': 'Article',
          headline: g.title,
          url: `${PRODUCTION_DOMAIN}/guides/${g.slug}`,
          datePublished: g.publishedDate,
          dateModified: g.lastUpdated,
        })),
      },
      bodyHtml: `
        <article class="space-y-6">
          <div class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-blue-700">Original Civic Research &amp; Financial Literacy</div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">In-Depth Editorial Handbooks &amp; Statutory Guides (${editorialGuides.length} Guides)</h1>
            <p class="text-gray-700 leading-relaxed">Every handbook in our editorial desk is written from primary Income Tax Act provisions, RBI Master Directions, Ministry of Finance quarterly circulars, and GeM General Terms &amp; Conditions — complete with worked Rupee calculations, side-by-side comparison matrices, and step-by-step troubleshooting checklists.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${editorialGuides
              .map(
                (g) => `
              <section class="bg-white p-6 rounded-xl border border-gray-200 space-y-2">
                <div class="text-xs font-semibold text-indigo-700 uppercase">${escapeHtml(g.category)} · ${g.readTimeMinutes} min read · Updated ${escapeHtml(g.lastUpdated)}</div>
                <h2 class="text-lg font-bold text-gray-900"><a href="/guides/${escapeHtml(g.slug)}" class="text-blue-800 hover:underline">${escapeHtml(g.title)}</a></h2>
                <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(g.summary)}</p>
                <div class="text-xs text-gray-500 pt-1">By ${escapeHtml(g.authorName)} · Reviewed by ${escapeHtml(g.reviewerName)}</div>
              </section>`
              )
              .join('\n')}
          </div>
        </article>`,
    },
    {
      routePath: '/subsidies',
      title: `Government Subsidies & Sarkari Yojana List 2026 (${publishedSubsidies.length}+ Verified Schemes) | SarkarSaathi`,
      description: `Complete directory of ${publishedSubsidies.length}+ verified Central & State Government subsidies, PM-KISAN, PM Surya Ghar Solar, PMEGP MSME grants, eligibility & online apply links.`,
      keywords: 'sarkari yojana 2026, government subsidies india, pm kisan, pm surya ghar solar subsidy, pmegp loan subsidy, msme grant',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Verified Central &amp; State Government Subsidies Directory (${publishedSubsidies.length} Schemes)</h1>
        <p class="mb-6 text-gray-700">Browse official Direct Benefit Transfer (DBT) welfare schemes, agricultural machinery subsidies, rooftop solar grants, and MSME credit-linked subsidies verified against .gov.in notifications.</p>
        <ul class="space-y-3">
          ${publishedSubsidies
            .map(
              (s) =>
                `<li><a href="/subsidies/${escapeHtml(s.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(s.title)}</a> — <span>${escapeHtml(s.maximumBenefit || s.subsidyAmount || s.category)} (${escapeHtml(s.state || 'All India')})</span></li>`
            )
            .join('\n          ')}
        </ul>`,
    },
    {
      routePath: '/investments',
      title: '54EC Capital Gain Bonds, RBI Floating Rate & Sovereign Bonds (2026 Rates) | SarkarSaathi',
      description: 'Compare REC, PFC & IRFC Section 54EC Capital Gains Tax-Exemption Bonds (5.25% p.a.), RBI Floating Rate Savings Bonds (8.05%), and Sovereign Gold Bonds.',
      keywords: '54ec capital gain bonds, rec 54ec bonds, pfc capital gain bonds, irfc 54ec bond interest rate 2026, rbi floating rate bonds',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Sovereign Investments', path: '/investments' },
      ],
      bodyHtml: `
        <article class="space-y-6">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Sovereign Bonds, Section 54EC Capital Gains Bonds &amp; Public Sector ETFs</h1>
          <p class="text-gray-700 leading-relaxed">Compare ${investments.length} verified fixed-income, sovereign-guaranteed, and PSU investment instruments backed by the Government of India, RBI, and AAA-rated Navratna/Maharatna enterprises — covering Section 54EC LTCG tax exemptions (5.25% p.a.), RBI Floating Rate Bonds (8.05% p.a.), Sovereign Gold Bonds, State Development Loans (SDLs), and CPSE/Bharat Bond ETFs.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200"><h2 class="font-bold text-blue-900 mb-1">Section 54EC Capital Gains Bonds</h2><p class="text-blue-950">Save Long-Term Capital Gains tax up to ₹50 Lakh per financial year via REC, PFC, and IRFC bonds (5-year statutory lock-in, 5.25% p.a. annual payout).</p></div>
            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200"><h2 class="font-bold text-emerald-900 mb-1">RBI &amp; Sovereign Debt</h2><p class="text-emerald-950">Zero-default G-Secs, T-Bills, State Development Loans (SDLs), and RBI Floating Rate Savings Bonds via RBI Retail Direct.</p></div>
            <div class="p-4 bg-amber-50 rounded-xl border border-amber-200"><h2 class="font-bold text-amber-900 mb-1">Compare &amp; Calculate</h2><p class="text-amber-950">Use our <a href="/comparisons" class="underline font-bold">Scheme Comparison Matrix</a> and <a href="/tools" class="underline font-bold">Maturity &amp; 54EC Calculators</a> to evaluate post-tax returns.</p></div>
          </div>
          <ul class="space-y-2 bg-white p-6 rounded-xl border border-gray-200">
            ${investments
              .map(
                (inv) =>
                  `<li><a href="/investments/${escapeHtml(inv.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(inv.title)}</a> — <span>${escapeHtml(inv.expectedReturn || inv.category || 'Sovereign Security')} · ${escapeHtml(inv.authority || 'Government of India')}</span></li>`
              )
              .join('\n          ')}
          </ul>
        </article>`,
    },
    {
      routePath: '/investment-schemes',
      title: 'Post Office & Government Small Savings Schemes 2026 (PPF 7.1%, SSY 8.2%, SCSS 8.2%) | SarkarSaathi',
      description: 'Compare Government of India Small Savings Schemes: Public Provident Fund (PPF), Sukanya Samriddhi Yojana (SSY), Senior Citizen Savings Scheme (SCSS), NSC & KVP.',
      keywords: 'post office schemes 2026, ppf interest rate, sukanya samriddhi yojana calculator, senior citizen savings scheme scss, nsc kvp',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Investment Schemes', path: '/investment-schemes' },
      ],
      bodyHtml: `
        <article class="space-y-6">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Government Small Savings, Startup Recognition &amp; Post Office Schemes (${schemes.length} Verified Programs)</h1>
          <p class="text-gray-700 leading-relaxed">Explore Ministry of Finance notified Small Savings Schemes (PPF at 7.1% EEE, Sukanya Samriddhi Yojana at 8.2% EEE, Senior Citizens Savings Scheme at 8.2%, NSC, KVP), DPIIT startup credit guarantee schemes, and institutional R&amp;D incentive frameworks with official rules and <a href="/tools" class="text-blue-700 underline font-semibold">maturity calculators</a>.</p>
          <ul class="space-y-2 bg-white p-6 rounded-xl border border-gray-200">
            ${schemes
              .map(
                (sc) =>
                  `<li><a href="/investment-schemes/${escapeHtml(sc.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(sc.title)}</a> — <span>${escapeHtml(sc.authority || 'Ministry of Finance')}</span></li>`
              )
              .join('\n          ')}
          </ul>
        </article>`,
    },
    {
      routePath: '/questions',
      title: 'Sarkari Yojana, 54EC Bonds & Subsidy Q&A in Hindi, Hinglish & English | SarkarSaathi',
      description: `Read ${questions.length}+ verified answers in Hindi (हिंदी), Hinglish, and English on PM-KISAN, MSME subsidies, 54EC Capital Gain Bonds, PPF, and public tenders.`,
      keywords: 'sarkari yojana question answer hindi, 54ec bond faq, pm kisan status kaise check kare, msme subsidy rules',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Citizen Q&A', path: '/questions' },
      ],
      bodyHtml: `
        <article class="space-y-5">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Verified Citizen Q&amp;A Knowledge Base (${questions.length} Questions in English, Hindi &amp; Hinglish)</h1>
          <p class="text-gray-700 leading-relaxed">Fact-checked regulatory answers on GeM procurement rules (Direct Purchase ₹25,000/₹50,000, L1 limits, Auto-CRAC timelines), Small Savings (PPF, SCSS, SSY, KVP premature closure), Section 54EC Capital Gain Bonds, RBI FRSB, State Development Loans, and official portal verification.</p>
          <ul class="space-y-2 bg-white p-6 rounded-xl border border-gray-200">
            ${questions
              .map(
                (q) =>
                  `<li><a href="/questions/${escapeHtml(q.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(q.canonical_question)}</a> <span class="text-xs text-gray-600">(${escapeHtml(q.category)})</span></li>`
              )
              .join('\n          ')}
          </ul>
        </article>`,
    },
    {
      routePath: '/tenders',
      title: 'Live Government & PSU Tenders (GeM & CPPP eProcure Notices) | SarkarSaathi',
      description: 'Track active Central & State Government tenders, PSU procurement notices, EMD exemptions for MSMEs, and bid submission deadlines.',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Public Tenders', path: '/tenders' },
      ],
      bodyHtml: `
        <article class="space-y-5">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Verified Government &amp; PSU Procurement Tenders (${tenders.length} Notices)</h1>
          <p class="text-gray-700 leading-relaxed">Track verified Central Ministry, State Department, and Maharatna/Navratna PSU tenders sourced from CPPP eProcure and GeM, including estimated contract values, EMD exemptions for Udyam-registered MSEs, Make in India Class-I preference rules, and bid submission steps.</p>
          <ul class="space-y-3 bg-white p-6 rounded-xl border border-gray-200">
            ${tenders
              .map(
                (t) =>
                  `<li><a href="/tenders/${escapeHtml(t.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(t.title)}</a> — <span>${escapeHtml(t.authority || '')} · Value: ${escapeHtml(String(t.tenderValue || t.estimatedValue || 'As notified'))}</span></li>`
              )
              .join('\n          ')}
          </ul>
        </article>`,
    },
    {
      routePath: '/opportunities',
      title: 'India Infrastructure Projects & State Industrial Investment Opportunities | SarkarSaathi',
      description: 'Explore verified infrastructure development projects, industrial parks, and PLI manufacturing investment opportunities across all 28 States and 8 UTs.',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Opportunities', path: '/opportunities' },
      ],
      bodyHtml: `
        <article class="space-y-8">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">India Innovation Grants, Fellowships, Infrastructure &amp; State Investment Opportunities</h1>
            <p class="text-gray-700 leading-relaxed">Browse verified national research grants (BIRAC BIG, DST NIDHI PRAYAS, National Quantum Mission, ANRF), central/state industrial corridor opportunities across all 28 States and 8 Union Territories, and 13 priority technology and infrastructure sectors.</p>
          </div>
          <section class="bg-white p-6 rounded-xl border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-3">Curated National Grants, Innovation Calls &amp; Fellowships</h2>
            <ul class="space-y-2 text-sm">
              ${opportunities
                .filter((o) => isIndexableOpportunity(o))
                .map(
                  (o) =>
                    `<li><a href="/opportunities/${escapeHtml(o.slug || o.id)}" class="font-bold text-blue-800 underline">${escapeHtml(o.title)}</a> — <span>${escapeHtml(o.authority || 'Government of India')} (${escapeHtml(o.fundingAmount || o.sector || 'National Call')})</span></li>`
                )
                .join('\n              ')}
            </ul>
          </section>
          <section class="bg-white p-6 rounded-xl border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-3">Browse by Sector (13 Priority Domains)</h2>
            <ul class="flex flex-wrap gap-3 text-sm">
              ${[...SECTOR_ROUTES]
                .map(
                  (sec) =>
                    `<li><a href="/opportunities/sector/${escapeHtml(sec)}" class="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-lg font-medium underline">${escapeHtml(sec.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))}</a></li>`
                )
                .join('\n              ')}
            </ul>
          </section>
          <section class="bg-white p-6 rounded-xl border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-3">Browse by State &amp; Union Territory (${stateOfficialSources.length} Regions)</h2>
            <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
              ${stateOfficialSources
                .filter((s) => s.state)
                .map((s) => {
                  const stSlug = s.state!.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                  return `<li><a href="/opportunities/state/${escapeHtml(stSlug)}" class="text-blue-700 underline font-medium">${escapeHtml(s.state!)}</a></li>`;
                })
                .join('\n              ')}
            </ul>
          </section>
        </article>`,
    },
    {
      routePath: '/tools',
      title: 'Sarkari Yojana Subsidy, PPF, Sukanya Samriddhi & 54EC Tax Saving Calculators | SarkarSaathi',
      description: 'Free interactive calculators for Section 54EC Capital Gains Tax Exemption, PPF maturity, Sukanya Samriddhi Yojana (SSY), Senior Citizen Savings Scheme, and MSME subsidies.',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Calculators', path: '/tools' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'SarkarSaathi Sovereign Savings & 54EC Tax Calculator Suite',
        url: `${PRODUCTION_DOMAIN}/tools`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        inLanguage: ['en-IN', 'hi-IN'],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description: 'Interactive maturity, tax exemption, and subsidy eligibility calculators for PPF, Sukanya Samriddhi Yojana (SSY), Senior Citizen Savings Scheme (SCSS), and Section 54EC Capital Gains Bonds.',
      },
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <h1 class="text-2xl font-bold text-gray-900">Government Scheme &amp; Sovereign Tax-Saving Calculators</h1>
          <p class="text-gray-700 leading-relaxed">Calculate exact maturity values, Section 54EC Long-Term Capital Gains tax savings (up to ₹50 Lakh/year), Public Provident Fund (PPF at 7.1% p.a.) compounding, Sukanya Samriddhi Yojana (SSY at 8.2% p.a.) returns, Senior Citizens Savings Scheme (SCSS at 8.2% p.a.) quarterly payouts, and PMEGP/PM Surya Ghar MSME &amp; solar subsidy amounts.</p>
          <div class="flex flex-wrap gap-4 text-sm font-medium pt-2">
            <a href="/investments" class="text-blue-700 underline">54EC Capital Gain Bonds</a>
            <a href="/investment-schemes" class="text-blue-700 underline">PPF, SSY &amp; SCSS Schemes</a>
            <a href="/comparisons" class="text-blue-700 underline">Side-by-Side Comparison Matrix</a>
            <a href="/subsidies" class="text-blue-700 underline">Government Subsidies Directory</a>
          </div>
        </article>`,
    },
    {
      routePath: '/comparisons',
      title: 'Compare PPF vs SSY vs 54EC Bonds vs SCSS vs RBI Floating Rate Bonds | SarkarSaathi',
      description: 'Side-by-side comparison of Indian government investment schemes, interest rates, lock-in periods, and Section 80C / 54EC tax exemptions.',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Scheme Comparisons', path: '/comparisons' },
      ],
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 space-y-6">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Side-by-Side Government Scheme &amp; Sovereign Bond Comparison Matrix</h1>
          <p class="text-gray-700 leading-relaxed">Evaluate verified Government of India small savings instruments and sovereign bonds across notified interest rate, Income Tax treatment (Section 80C, Section 10(10D), Section 54EC LTCG exemption), lock-in period, and maximum annual deposit ceiling.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-100 border-b border-gray-300">
                  <th class="p-3 font-bold">Instrument</th>
                  <th class="p-3 font-bold">Notified Rate</th>
                  <th class="p-3 font-bold">Lock-In / Tenure</th>
                  <th class="p-3 font-bold">Investment Limit</th>
                  <th class="p-3 font-bold">Tax Treatment</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr><td class="p-3 font-bold"><a href="/investments/public-provident-fund" class="text-blue-700 underline">Public Provident Fund (PPF)</a></td><td class="p-3">7.1% p.a.</td><td class="p-3">15 Years</td><td class="p-3">₹500 – ₹1.50 Lakh/yr</td><td class="p-3">EEE (Sec 80C + Tax-Free Maturity)</td></tr>
                <tr><td class="p-3 font-bold"><a href="/investments/sukanya-samriddhi-account" class="text-blue-700 underline">Sukanya Samriddhi Yojana (SSY)</a></td><td class="p-3">8.2% p.a.</td><td class="p-3">21 Years (15 yrs deposit)</td><td class="p-3">₹250 – ₹1.50 Lakh/yr</td><td class="p-3">EEE (Sec 80C + Tax-Free Maturity)</td></tr>
                <tr><td class="p-3 font-bold"><a href="/investments/senior-citizens-savings-scheme" class="text-blue-700 underline">Senior Citizens Savings Scheme (SCSS)</a></td><td class="p-3">8.2% p.a. (Quarterly)</td><td class="p-3">5 Years (+3 yrs ext.)</td><td class="p-3">₹1,000 – ₹30 Lakh</td><td class="p-3">Sec 80C Deduction; Interest Taxable</td></tr>
                <tr><td class="p-3 font-bold"><a href="/investments/rbi-floating-rate-savings-bonds-2020" class="text-blue-700 underline">RBI Floating Rate Savings Bonds</a></td><td class="p-3">8.05% p.a. (Half-Yearly)</td><td class="p-3">7 Years</td><td class="p-3">₹1,000 – No Upper Cap</td><td class="p-3">Interest Taxable; Sovereign Backed</td></tr>
                <tr><td class="p-3 font-bold"><a href="/investments/54ec-capital-gain-bonds" class="text-blue-700 underline">54EC Capital Gain Bonds (REC/PFC/IRFC)</a></td><td class="p-3">5.25% p.a. (Annual)</td><td class="p-3">5 Years Non-Transferable</td><td class="p-3">₹10,000 – ₹50 Lakh/FY</td><td class="p-3">100% LTCG Exemption u/s 54EC</td></tr>
                <tr><td class="p-3 font-bold"><a href="/investments/sovereign-gold-bond-scheme" class="text-blue-700 underline">Sovereign Gold Bonds (SGB)</a></td><td class="p-3">2.50% p.a. + Gold Price</td><td class="p-3">8 Years (5th yr exit)</td><td class="p-3">1 gm – 4 kg (Individual)</td><td class="p-3">Capital Gains Tax-Free at Maturity</td></tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-wrap gap-4 text-sm font-medium pt-2">
            <a href="/tools" class="text-blue-700 underline font-bold">Open Interactive Return Calculators →</a>
            <a href="/questions" class="text-blue-700 underline font-bold">Read Small Savings &amp; 54EC Q&amp;A →</a>
          </div>
        </article>`,
    },
    {
      routePath: '/news',
      title: 'Latest Government Scheme Notifications, PIB Releases & RBI Updates | SarkarSaathi',
      description: 'Verified policy updates, PIB press releases, subsidy deadline extensions, and small savings interest rate revisions.',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Policy News', path: '/news' },
      ],
      bodyHtml: `
        <article class="space-y-5">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">Official Policy Updates, Gazette Amendments &amp; Regulatory Notifications (${news.length} Briefs)</h1>
          <p class="text-gray-700 leading-relaxed">Structured summaries of official circulars from SEBI, MCA, MeitY, Ministry of Finance, and RBI — explaining what changed, previous vs. new rules, affected beneficiaries, and compliance action items.</p>
          <ul class="space-y-3 bg-white p-6 rounded-xl border border-gray-200">
            ${news
              .map(
                (n) =>
                  `<li><a href="/news/${escapeHtml(n.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(n.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(n.authority || 'Government of India')} (${escapeHtml(n.publishedDate || '')})</span></li>`
              )
              .join('\n          ')}
          </ul>
        </article>`,
    },
    {
      routePath: '/official-sources',
      title: 'Directory of Verified .gov.in & .nic.in Official Government Portals | SarkarSaathi',
      description: 'Audited registry of official Central Ministries, State Government portals, RBI, NABARD, and SIDBI websites.',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Official Sources', path: '/official-sources' },
      ],
      bodyHtml: `
        <article class="space-y-8">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Verified Official Government Portals (.gov.in &amp; .nic.in Registry — ${officialSources.length} Portals)</h1>
            <p class="text-gray-700 leading-relaxed">Complete audited directory of Central Ministries, statutory regulators (RBI, SEBI, PFRDA, IRDAI), procurement platforms (GeM, CPPP eProcure), and official State/UT single-window portals across India. Always verify official schemes directly on authentic <code>.gov.in</code> or <code>.nic.in</code> domains.</p>
          </div>
          <section class="bg-white p-6 rounded-xl border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Central Ministries, Statutory Regulators &amp; Procurement Portals (${centralOfficialSources.length})</h2>
            <ul class="space-y-3 text-sm">
              ${centralOfficialSources
                .map((src) => {
                  const slug = getOfficialSourceSlug(src);
                  return `<li><a href="/official-sources/${escapeHtml(slug)}" class="font-bold text-blue-800 underline">${escapeHtml(src.name)}</a> — <span>${escapeHtml(src.authority)} · ${escapeHtml(src.description)}</span></li>`;
                })
                .join('\n              ')}
            </ul>
          </section>
          <section class="bg-white p-6 rounded-xl border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-4">State &amp; Union Territory Official Citizen &amp; Investment Portals (${stateOfficialSources.length})</h2>
            <ul class="space-y-3 text-sm">
              ${stateOfficialSources
                .map((src) => {
                  const slug = getOfficialSourceSlug(src);
                  return `<li><a href="/official-sources/${escapeHtml(slug)}" class="font-bold text-blue-800 underline">${escapeHtml(src.name)}</a> — <span>${escapeHtml(src.authority)} · ${escapeHtml(src.description)}</span></li>`;
                })
                .join('\n              ')}
            </ul>
          </section>
        </article>`,
    },
    {
      routePath: '/about',
      title: 'About SarkarSaathi.org — Editorial Methodology & 4-Stage Verification | SarkarSaathi',
      description: 'Learn about SarkarSaathi.org, our independent civic research mission, and our 4-stage verification workflow for Indian government schemes.',
      bodyHtml: `
        <article class="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div class="inline-block bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Independent Civic Research Platform</div>
          <h1 class="text-3xl font-extrabold text-gray-900">About SarkarSaathi.org &amp; Editorial Methodology</h1>
          <p class="text-base text-gray-700 leading-relaxed">SarkarSaathi.org is an independent, non-governmental civic research and public information platform dedicated to simplifying how Indian citizens, farmers, MSME entrepreneurs, students, and senior citizens discover, evaluate, and understand verified government schemes, sovereign savings instruments, subsidies, and public procurement opportunities.</p>
          
          <h2 class="text-xl font-bold text-gray-900 mt-6 mb-2">Our Mission &amp; Purpose</h2>
          <p class="text-gray-700 leading-relaxed">Across India, central ministries, state departments, and statutory public sector undertakings publish thousands of welfare notifications, capital investment subsidies, tax-saving bonds, and procurement tenders across hundreds of separate portals. For an ordinary citizen or small business owner, understanding exact eligibility rules, calculating maturity returns, preparing mandatory KYC documents, and identifying the authentic <code>.gov.in</code> application link is often overwhelming.</p>
          <p class="text-gray-700 leading-relaxed">SarkarSaathi bridges this critical gap by transforming complex gazette notifications into structured, easy-to-read editorial guides, side-by-side financial comparisons, interactive maturity calculators, and multilingual Q&amp;A explainers in English, Hindi, and Hinglish.</p>
          
          <h2 class="text-xl font-bold text-gray-900 mt-6 mb-2">Our 4-Stage Verification &amp; Data Governance Methodology</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 class="font-bold text-blue-900 mb-1">Stage 1: Authoritative Source Mapping</h3>
              <p>We only track announcements and guidelines from statutory domains including <code>.gov.in</code>, <code>.nic.in</code>, Reserve Bank of India (<code>rbi.org.in</code>), NABARD, SIDBI, NHB, and official state government portals across all 28 States and 8 Union Territories.</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 class="font-bold text-blue-900 mb-1">Stage 2: Schema &amp; Claim Validation</h3>
              <p>Every record is audited for five mandatory parameters: Official Scheme Name, Issuing Ministry/Department, Quantified Financial Benefit or Interest Rate, Specific Beneficiary Eligibility Criteria, and Working Official Portal URL.</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 class="font-bold text-blue-900 mb-1">Stage 3: Plain-Language Editorial Structuring</h3>
              <p>Legalistic circular language is distilled into structured citizen checklists: What is this scheme?, Who is eligible?, What financial benefit is available?, What documents are required?, and Step-by-step application procedure.</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 class="font-bold text-blue-900 mb-1">Stage 4: Continuous Freshness &amp; Expiry Audits</h3>
              <p>Small savings interest rates (reviewed quarterly by the Ministry of Finance), tender closing deadlines, and subsidy budget windows are audited continuously so citizens always see the last verified date on every page.</p>
            </div>
          </div>

          <h2 class="text-xl font-bold text-gray-900 mt-6 mb-2">Declaration of Editorial Independence &amp; Non-Affiliation</h2>
          <p class="text-sm text-gray-600 bg-amber-50 p-4 rounded-xl border border-amber-200 leading-relaxed">
            SarkarSaathi.org is a privately operated, independent public information platform. We are <strong>NOT affiliated with, endorsed by, sponsored by, or operated by the Government of India, any State Government, or any Ministry/Department</strong>. All official emblems, scheme names, and portal references belong to their respective statutory authorities and are cited strictly for public informational and educational purposes under fair-dealing principles.
          </p>
        </article>`,
    },
    {
      routePath: '/contact',
      title: 'Contact Us & Citizen Grievance / Data Correction Desk | SarkarSaathi',
      description: 'Contact the SarkarSaathi editorial and compliance team to report broken .gov.in links, request scheme updates, or submit general inquiries.',
      bodyHtml: `
        <article class="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div class="inline-block bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Editorial Desk &amp; Citizen Feedback</div>
          <h1 class="text-3xl font-extrabold text-gray-900">Contact SarkarSaathi.org</h1>
          <p class="text-base text-gray-700 leading-relaxed">We welcome feedback from citizens, researchers, CSC operators, and government officials. If you spot an outdated interest rate, a broken official portal link, or wish to suggest a newly notified Central or State government scheme for verification, please reach out to our team.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div class="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 class="font-bold text-gray-900 text-base mb-2">Editorial Desk &amp; Corrections</h2>
              <p class="text-xs text-gray-600 mb-3">For reporting scheme guideline updates, subsidy revisions, or broken .gov.in links:</p>
              <a href="mailto:support@sarkarsaathi.org" class="text-sm font-bold text-blue-700 underline">support@sarkarsaathi.org</a>
            </div>
            <div class="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 class="font-bold text-gray-900 text-base mb-2">Privacy &amp; Grievance Desk</h2>
              <p class="text-xs text-gray-600 mb-3">For data protection, privacy policy questions, or advertising inquiries:</p>
              <a href="mailto:grievance@sarkarsaathi.org" class="text-sm font-bold text-emerald-700 underline">grievance@sarkarsaathi.org</a>
            </div>
            <div class="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h2 class="font-bold text-gray-900 text-base mb-2">Office &amp; Response Time</h2>
              <p class="text-xs text-gray-600 mb-1">New Delhi, India</p>
              <p class="text-xs text-gray-600">Response Turnaround: <strong>24 to 48 business hours</strong> (Monday–Saturday, 10:00 AM – 6:00 PM IST).</p>
            </div>
          </div>

          <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm text-blue-900 leading-relaxed">
            <strong>Security Notice:</strong> SarkarSaathi never charges fees for scheme information and will never ask for your Aadhaar number, PAN, bank account password, or OTP. Never disclose sensitive personal credentials to anyone claiming to represent government departments or this platform.
          </div>
        </article>`,
    },
    {
      routePath: '/privacy-policy',
      title: 'Privacy Policy, DPDP Act 2023 Compliance & Google AdSense Cookie Disclosure | SarkarSaathi',
      description: 'Official Privacy Policy for SarkarSaathi.org including Google AdSense DoubleClick DART cookie disclosures, opt-out controls, and DPDP Act 2023 compliance.',
      bodyHtml: `
        <article class="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6 text-gray-700 text-sm leading-relaxed">
          <div class="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Privacy, Cookie &amp; Data Protection Policy</div>
          <h1 class="text-3xl font-extrabold text-gray-900">Privacy Policy — SarkarSaathi.org</h1>
          <p class="text-xs text-gray-500">Last Updated &amp; Effective Date: November 1, 2026</p>
          <p class="text-base text-gray-700">At <strong>SarkarSaathi.org</strong> ("we", "our", or "us"), accessible from <code>https://sarkarsaathi.org</code>, protecting visitor privacy is our highest commitment. This Privacy Policy details the types of information we collect, how it is used, and your rights under applicable Indian laws including the Digital Personal Data Protection Act (DPDP Act), 2023.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">1. Zero Sensitive Personal or KYC Data Collection</h2>
          <p>SarkarSaathi.org is an open civic information directory. We do not require account registration, and we never ask for or store sensitive personal or financial identifiers such as Aadhaar numbers, PAN cards, bank account details, IFSC codes, OTPs, or caste/income certificates. All interactive tools (PPF, SSY, SCSS, and 54EC bond calculators) and bookmarking features execute locally within your browser's <code>localStorage</code> and are never transmitted to our servers.</p>

          <div class="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <h2 class="text-lg font-bold text-gray-900">2. Google AdSense &amp; Third-Party Advertising Cookie Disclosure</h2>
            <p>We partner with <strong>Google AdSense</strong> to display advertisements across SarkarSaathi.org to fund ongoing civic research, server infrastructure, and daily verification of government schemes while keeping the service 100% free for all citizens.</p>
            <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
              <li><strong>Third-Party Vendors &amp; Cookies:</strong> Third-party vendors, including Google, use cookies (such as the DoubleClick DART cookie) to serve ads based on a user's prior visits to <code>https://sarkarsaathi.org</code> or other websites on the internet.</li>
              <li><strong>Personalized Advertising:</strong> Google's use of advertising cookies enables it and its partners to serve personalized ads to our visitors based on their visit to our site and/or other sites on the Internet.</li>
              <li><strong>How Users Can Opt Out:</strong> You may opt out of personalized advertising at any time by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold underline">Google Ads Settings (https://adssettings.google.com)</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold underline">www.aboutads.info/choices</a>.</li>
              <li><strong>Google Privacy Policy:</strong> To learn how Google handles user data in its advertising products, please visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold underline">How Google uses information from sites or apps that use our services</a>.</li>
            </ul>
          </div>

          <h2 class="text-lg font-bold text-gray-900 mt-6">3. Standard Web Server Log Files</h2>
          <p>SarkarSaathi.org follows industry-standard server logging procedures for security and performance optimization. These logs record non-identifiable parameters including IP addresses, browser types, Internet Service Providers (ISPs), date/time stamps, referring/exit pages, and click counts. None of this data is linked to personally identifiable information.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">4. External Links to Government Portals (.gov.in)</h2>
          <p>Our platform contains direct reference links to official government websites (e.g. <code>myscheme.gov.in</code>, <code>pmkisan.gov.in</code>, <code>pmsuryaghar.gov.in</code>, <code>gem.gov.in</code>, and <code>rbi.org.in</code>). Once you click an external link and navigate away from SarkarSaathi.org, our Privacy Policy no longer applies. We encourage citizens to review the privacy statements of every official portal they visit.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">5. Data Protection Officer &amp; Grievance Redressal</h2>
          <p>If you have questions regarding this Privacy Policy or wish to request data deletion for any contact correspondence, please email our Grievance Desk at <a href="mailto:grievance@sarkarsaathi.org" class="text-blue-700 font-bold underline">grievance@sarkarsaathi.org</a>.</p>
        </article>`,
    },
    {
      routePath: '/disclaimer',
      title: 'Official Non-Affiliation & Financial Information Disclaimer | SarkarSaathi',
      description: 'SarkarSaathi.org is an independent information platform and is not affiliated with any government ministry. Read our complete statutory disclaimer.',
      bodyHtml: `
        <article class="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6 text-gray-700 text-sm leading-relaxed">
          <div class="inline-block bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Statutory &amp; Non-Affiliation Notice</div>
          <h1 class="text-3xl font-extrabold text-gray-900">Disclaimer &amp; Non-Affiliation Notice</h1>
          <p class="text-base text-gray-700">Please read this disclaimer carefully before relying on any information, financial calculations, or scheme guides published on <strong>SarkarSaathi.org</strong>.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">1. Not an Official Government Website</h2>
          <p>SarkarSaathi.org is an independent civic research and informational portal. We are <strong>NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with the Government of India, any State Government, or any Ministry, Department, PSU, or statutory agency</strong>. All official government scheme names, emblems, and portal links are referenced solely for citizen awareness, public education, and fair commentary.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">2. No Financial, Tax, or Legal Advisory</h2>
          <p>Content regarding Sovereign Investments (including Section 54EC Capital Gain Tax Exemption Bonds, Sovereign Gold Bonds, and RBI Floating Rate Bonds) and Small Savings Schemes (including PPF, Sukanya Samriddhi Yojana, SCSS, and Senior Citizen Bonds) is compiled for general educational purposes. It does not constitute certified investment advice, financial planning, or tax advisory under SEBI or Income Tax regulations. Interest rates and tax exemptions are subject to periodic revision by the Ministry of Finance. Always consult a qualified Chartered Accountant or SEBI-registered financial advisor before making investment commitments.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">3. Mandatory Verification on Official Portals</h2>
          <p>While our editorial pipeline verifies records against official gazette notifications, government departments may update eligibility criteria, subsidy allocations, or application windows without notice. Citizens and enterprises must verify all scheme rules, corrigenda, and tender notices directly on the linked official <code>.gov.in</code> or <code>.nic.in</code> portal before submitting any application.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">4. Warning Against Fraudulent Middlemen</h2>
          <p>SarkarSaathi.org never charges fees for scheme guidance, never acts as an intermediary, and never collects fees to expedite government approvals. Apply exclusively through official government portals or authorized Common Service Centres (CSCs).</p>
        </article>`,
    },
    {
      routePath: '/terms',
      title: 'Terms of Use & Platform Conditions | SarkarSaathi',
      description: 'Terms and conditions governing the use of SarkarSaathi.org directories, calculators, and research archives.',
      bodyHtml: `
        <article class="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6 text-gray-700 text-sm leading-relaxed">
          <div class="inline-block bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Platform Terms &amp; Conditions</div>
          <h1 class="text-3xl font-extrabold text-gray-900">Terms of Use — SarkarSaathi.org</h1>
          <p class="text-xs text-gray-500">Effective Date: November 1, 2026</p>
          <p class="text-base text-gray-700">By accessing and using <strong>SarkarSaathi.org</strong>, you agree to comply with and be bound by these Terms of Service, our Privacy Policy, and our Statutory Disclaimer. If you do not agree with any part of these terms, please discontinue use of the platform.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">1. Permitted Informational &amp; Civic Use</h2>
          <p>SarkarSaathi.org grants visitors a revocable, non-exclusive, non-transferable license to access, view, bookmark, and share compiled scheme guides, financial calculators, and comparison matrices strictly for personal, non-commercial educational and informational use.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">2. Intellectual Property &amp; Editorial Content</h2>
          <p>While underlying statutory facts, public welfare notifications, and government rules are public domain information, all original editorial guides, multilingual translations (Hindi &amp; Hinglish), comparison matrices, visual formatting, and software code on SarkarSaathi.org are protected works under applicable copyright and intellectual property laws.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">3. Limitation of Liability</h2>
          <p>All information, calculators, and tools are provided on an "as-is" and "as-available" basis without warranties of any kind. Under no circumstances shall SarkarSaathi.org, its founders, or contributors be liable for any direct, indirect, incidental, or consequential damages resulting from rejected scheme applications, missed tender deadlines, or changes in government interest rates.</p>

          <h2 class="text-lg font-bold text-gray-900 mt-6">4. Governing Law &amp; Jurisdiction</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.</p>
        </article>`,
    },
  ];

  for (const hp of hubPages) {
    writeRouteHtml(templateHtml, hp);
    generatedCount++;
  }

  // 1B. All Long-Form Editorial Handbooks (/guides/:slug)
  for (const guide of editorialGuides) {
    const routePath = `/guides/${guide.slug}`;
    const sectionsHtml = guide.sections
      .map((sec) => {
        const parasHtml = sec.paragraphs
          .map((p) => `<p class="text-gray-700 leading-relaxed text-sm sm:text-base">${escapeHtml(p)}</p>`)
          .join('\n');
        const bulletsHtml = sec.bullets && sec.bullets.length > 0
          ? `<ul class="list-disc pl-5 space-y-1.5 text-sm text-gray-700">${sec.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
          : '';
        const tableHtml = sec.table
          ? `<div class="overflow-x-auto my-3"><table class="w-full text-left border-collapse text-sm border border-gray-200"><thead><tr class="bg-slate-100 border-b border-gray-200">${sec.table.headers.map((h) => `<th class="p-3 font-bold text-gray-900">${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody class="divide-y divide-gray-200">${sec.table.rows.map((r) => `<tr>${r.map((cell, ci) => `<td class="p-3 ${ci === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'}">${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
          : '';
        const calloutHtml = sec.callout
          ? `<div class="p-4 rounded-xl border ${sec.callout.tone === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-950' : sec.callout.tone === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-blue-50 border-blue-200 text-blue-950'} text-sm"><h3 class="font-bold mb-1">${escapeHtml(sec.callout.title)}</h3><p>${escapeHtml(sec.callout.body)}</p></div>`
          : '';
        return `<section class="space-y-3 pt-4 border-t border-gray-100"><h2 class="text-xl font-bold text-gray-900">${escapeHtml(sec.heading)}</h2>${parasHtml}${tableHtml}${bulletsHtml}${calloutHtml}</section>`;
      })
      .join('\n');

    const faqsHtml = guide.faqs && guide.faqs.length > 0
      ? `<section class="space-y-3 pt-6 border-t border-gray-200"><h2 class="text-xl font-bold text-gray-900">Frequently Asked Questions</h2><div class="space-y-3">${guide.faqs.map((f) => `<div class="p-4 bg-gray-50 rounded-lg border border-gray-200"><h3 class="font-bold text-sm text-gray-900 mb-1">${escapeHtml(f.question)}</h3><p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(f.answer)}</p></div>`).join('')}</div></section>`
      : '';

    const sourcesHtml = guide.primarySources && guide.primarySources.length > 0
      ? `<section class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2"><h2 class="text-base font-bold text-gray-900">Primary Statutory &amp; Official Portal Citations</h2><ul class="list-disc pl-5 text-sm space-y-1">${guide.primarySources.map((src) => `<li><a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline font-medium">${escapeHtml(src.label)}</a></li>`).join('')}</ul></section>`
      : '';

    const relatedHtml = guide.relatedLinks && guide.relatedLinks.length > 0
      ? `<section class="pt-4 border-t border-gray-200 space-y-2"><h2 class="text-base font-bold text-gray-900">Related Tools &amp; Scheme Profiles</h2><div class="flex flex-wrap gap-4 text-sm font-medium">${guide.relatedLinks.map((rl) => `<a href="${escapeHtml(rl.slug ? `${rl.path}/${rl.slug}` : rl.path)}" class="text-blue-700 underline font-bold">${escapeHtml(rl.label)}</a>`).join('')}<a href="/guides" class="text-blue-700 underline font-bold">← All Editorial Handbooks</a></div></section>`
      : '';

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.metaDescription,
      datePublished: guide.publishedDate,
      dateModified: guide.lastUpdated,
      inLanguage: 'en-IN',
      author: {
        '@type': 'Organization',
        name: guide.authorName,
        url: PRODUCTION_DOMAIN,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SarkarSaathi',
        url: PRODUCTION_DOMAIN,
        logo: {
          '@type': 'ImageObject',
          url: `${PRODUCTION_DOMAIN}/icon-192x192.png`,
        },
      },
      mainEntityOfPage: `${PRODUCTION_DOMAIN}${routePath}`,
    };

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${guide.title} | SarkarSaathi`,
      description: guide.metaDescription,
      keywords: guide.keywords.join(', '),
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Editorial Guides', path: '/guides' },
        { name: guide.shortTitle, path: routePath },
      ],
      jsonLd: articleSchema,
      bodyHtml: `
        <article class="bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm space-y-6">
          <div class="text-xs font-semibold text-indigo-700 uppercase tracking-wide">${escapeHtml(guide.category)} · ${guide.readTimeMinutes} Min Read · Published ${escapeHtml(guide.publishedDate)} · Updated ${escapeHtml(guide.lastUpdated)}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">${escapeHtml(guide.title)}</h1>
          <p class="text-base text-gray-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">${escapeHtml(guide.summary)}</p>
          <div class="text-xs text-gray-600">Author: <strong>${escapeHtml(guide.authorName)}</strong> (${escapeHtml(guide.authorRole)}) · Reviewed by: <strong>${escapeHtml(guide.reviewerName)}</strong></div>
          ${sectionsHtml}
          ${faqsHtml}
          ${sourcesHtml}
          ${relatedHtml}
        </article>`,
    });
    generatedCount++;
  }

  // 2. All Verified Subsidies (/subsidies/:slug)
  for (const sub of publishedSubsidies) {
    const slug = sub.slug || sub.id;
    const benefit = sub.maximumBenefit || sub.subsidyAmount || sub.benefitType || 'Government Financial Assistance';
    const ministry = sub.ministry || sub.authority || 'Government of India';
    const stateName = sub.state || 'All India';
    const routePath = `/subsidies/${slug}`;
    const bodyHtml = `
      <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
        <div class="text-xs font-semibold text-emerald-700">${escapeHtml(sub.category)} · ${escapeHtml(stateName)} · Verified Scheme${sub.lastVerified ? ` · Verified ${escapeHtml(sub.lastVerified)}` : ''}</div>
        <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(sub.title)} (2026): Benefit, Eligibility &amp; Online Application</h1>
        <p class="text-gray-700 leading-relaxed">${escapeHtml(sub.description || sub.shortDescription || '')}</p>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm">
          <div><dt class="font-bold text-gray-600">Nodal Ministry / Authority:</dt><dd>${escapeHtml(ministry)}</dd></div>
          <div><dt class="font-bold text-gray-600">Subsidy / Financial Benefit:</dt><dd class="font-bold text-emerald-800">${escapeHtml(benefit)}</dd></div>
          <div><dt class="font-bold text-gray-600">Target Beneficiary:</dt><dd>${escapeHtml(sub.beneficiaryType || 'Eligible Indian Citizens / MSMEs / Farmers')}</dd></div>
          <div><dt class="font-bold text-gray-600">Geographic Coverage &amp; Mode:</dt><dd>${escapeHtml(stateName)}${sub.applicationMode ? ` · ${escapeHtml(sub.applicationMode)}` : ''}</dd></div>
          <div class="sm:col-span-2"><dt class="font-bold text-gray-600">Official Government Portal:</dt><dd><a href="${escapeHtml(sub.applicationUrl || sub.officialSourceUrl || sub.sourceUrl || '#')}" class="text-blue-700 underline" rel="noopener noreferrer">${escapeHtml(sub.officialSource || sub.applicationUrl || sub.sourceUrl || 'Official Portal')}</a></dd></div>
        </dl>
        ${sub.benefits ? renderListSection('Detailed Scheme Benefits & Assistance Structure', sub.benefits, false) : ''}
        ${sub.eligibility ? renderListSection('Eligibility Criteria (पात्रता मापदंड)', sub.eligibility, false) : ''}
        ${sub.documentsRequired && sub.documentsRequired.length ? renderListSection('Required Documents (आवश्यक दस्तावेज)', sub.documentsRequired, false) : ''}
        ${sub.applicationProcess ? renderListSection('How to Apply Online (आवेदन प्रक्रिया)', sub.applicationProcess, Array.isArray(sub.applicationProcess)) : ''}
        ${sub.sourceNotes ? `<p class="text-xs text-gray-600 bg-slate-50 p-3 rounded-lg"><strong>Verification Note:</strong> ${escapeHtml(sub.sourceNotes)}</p>` : ''}
        <div class="text-xs text-gray-500 pt-4 border-t flex flex-wrap gap-4">
          <a href="/subsidies" class="underline text-blue-700 font-semibold">← Browse All ${publishedSubsidies.length} Verified Subsidies</a>
          <a href="/questions" class="underline text-blue-700 font-semibold">Scheme Eligibility Q&amp;A</a>
          <a href="/tools" class="underline text-blue-700 font-semibold">Subsidy &amp; Tax Calculators</a>
        </div>
      </article>`;

    const pageMeta: PageMeta = {
      routePath,
      title: `${sub.title} (2026) — ${benefit}, Eligibility & Online Apply | SarkarSaathi`,
      description: `${sub.title} (${ministry}): Get ${benefit}. Check 2026 eligibility rules, required documents, beneficiary status, and official .gov.in online application link.`,
      keywords: `${sub.title}, ${sub.title} online apply, ${sub.title} eligibility, ${sub.category} subsidy, ${stateName} sarkari yojana`,
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Subsidies & Benefits', path: '/subsidies' },
        { name: sub.title, path: routePath },
      ],
      jsonLd: getGovernmentServiceSchema(sub),
      bodyHtml,
    };

    writeRouteHtml(templateHtml, pageMeta);
    generatedCount++;

    // Also pre-render /schemes/pm-kisan alias with canonical to /subsidies/pm-kisan-samman-nidhi
    if (slug === 'pm-kisan-samman-nidhi') {
      writeRouteHtml(templateHtml, {
        ...pageMeta,
        routePath: '/schemes/pm-kisan',
        canonicalPath: '/subsidies/pm-kisan-samman-nidhi',
      });
      generatedCount++;
    }
  }

  // 3. All Sovereign Investments (/investments/:slug)
  for (const inv of investments) {
    const slug = inv.slug || inv.id;
    const routePath = `/investments/${slug}`;
    const minInv = inv.minInvestment ? `₹${inv.minInvestment.toLocaleString('en-IN')}` : 'As notified';
    const maxInv = inv.maxInvestment ? (typeof inv.maxInvestment === 'number' ? `₹${inv.maxInvestment.toLocaleString('en-IN')}` : inv.maxInvestment) : 'No upper limit';
    const returnVal = inv.expectedReturn || inv.notifiedRate || 'Sovereign Rate';
    const lockVal = inv.lockInPeriod || inv.tenure || 'Statutory Tenure';
    const taxVal = inv.taxTreatment || 'Section 54EC / Section 80C as applicable';

    const faqsHtml = inv.faqs && inv.faqs.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-2">Frequently Asked Questions</h2><div class="space-y-3">${inv.faqs.map(f => `<div class="p-4 bg-gray-50 rounded-lg"><h3 class="font-bold text-sm text-gray-900 mb-1">${escapeHtml(f.question)}</h3><p class="text-xs text-gray-700 leading-relaxed">${escapeHtml(f.answer)}</p></div>`).join('')}</div></section>`
      : '';

    const docsHtml = inv.requiredDocuments && inv.requiredDocuments.length > 0
      ? `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">Required Documents (KYC Checklist)</h2><ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">${inv.requiredDocuments.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul></section>`
      : '';

    const processHtml = inv.accountOpeningProcess && inv.accountOpeningProcess.length > 0
      ? `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">How to Invest &amp; Application Procedure</h2><ol class="list-decimal pl-5 text-sm text-gray-700 space-y-1">${inv.accountOpeningProcess.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ol></section>`
      : '';

    const invAny = inv as any;
    const extraInvSections = [
      renderListSection('Deposit, Denominations & Subscription Rules', invAny.depositRules),
      renderListSection('Return Mechanism & Interest Payout Schedule', invAny.returnMechanism),
      renderListSection('Premature Withdrawal, Exit & Redemption Rules', invAny.withdrawalRules),
      renderListSection('Loan Facility & Collateral Usage', invAny.loanFacilityRules),
      renderListSection('Key Statutory Conditions & Important Rules', invAny.importantRules),
    ].filter(Boolean).join('\n');

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${inv.title} — Interest Rate (${returnVal}), Tax Exemption & Rules | SarkarSaathi`,
      description: `${inv.title}: Check current interest rate (${returnVal}), sovereign backing (${inv.authority || 'Government of India'}), Section 54EC / 80C tax exemption, lock-in period (${lockVal}), and application steps.`,
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Sovereign Investments', path: '/investments' },
        { name: inv.title, path: routePath },
      ],
      jsonLd: getInvestmentBreadcrumbSchema('investments', inv.title, slug),
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase tracking-wide">Sovereign Investment · ${escapeHtml(inv.riskLevel || 'Low')} Risk · ${escapeHtml(inv.category || 'Government Bond')} · ${escapeHtml(inv.authority || 'Government of India')}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(inv.title)}</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(inv.description || '')}</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Return / Interest</span><strong class="text-base text-emerald-800">${escapeHtml(returnVal)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Lock-In Period</span><strong class="text-gray-900">${escapeHtml(lockVal)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Min Investment</span><strong class="text-gray-900">${escapeHtml(minInv)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Max Investment</span><strong class="text-gray-900">${escapeHtml(maxInv)}</strong></div>
          </div>

          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-sm text-emerald-950">
            <h2 class="font-bold mb-1">Tax Exemption &amp; Benefits</h2>
            <p>${escapeHtml(taxVal)}</p>
          </div>

          ${extraInvSections}
          ${docsHtml}
          ${processHtml}
          ${faqsHtml}

          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/investments" class="text-blue-700 underline font-bold">← All Sovereign Investments &amp; 54EC Bonds</a>
            <a href="/comparisons" class="text-blue-700 underline font-bold">Compare With PPF, SSY &amp; SCSS</a>
            <a href="/tools" class="text-blue-700 underline font-bold">Tax &amp; Return Calculators</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  // 4. All Investment Schemes (/investment-schemes/:slug)
  for (const sc of schemes) {
    const slug = sc.slug || sc.id;
    const routePath = `/investment-schemes/${slug}`;

    const faqsHtml = sc.faqs && sc.faqs.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-2">Frequently Asked Questions</h2><div class="space-y-3">${sc.faqs.map(f => `<div class="p-4 bg-gray-50 rounded-lg"><h3 class="font-bold text-sm text-gray-900 mb-1">${escapeHtml(f.question)}</h3><p class="text-xs text-gray-700 leading-relaxed">${escapeHtml(f.answer)}</p></div>`).join('')}</div></section>`
      : '';

    const docsHtml = sc.requiredDocuments && sc.requiredDocuments.length > 0
      ? `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">Mandatory Required Documents</h2><ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">${sc.requiredDocuments.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul></section>`
      : '';

    const processHtml = sc.registrationProcess && sc.registrationProcess.length > 0
      ? `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">Step-by-Step Application &amp; Account Opening</h2><ol class="list-decimal pl-5 text-sm text-gray-700 space-y-1">${sc.registrationProcess.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ol></section>`
      : (sc.applicationProcess ? `<section class="mt-4"><h2 class="text-lg font-bold text-gray-900 mb-1">Application Procedure</h2><p class="text-sm text-gray-700">${escapeHtml(sc.applicationProcess)}</p></section>` : '');

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${sc.title} (2026) — Interest Rate, Rules, Calculator & Benefits | SarkarSaathi`,
      description: `${sc.title} (${sc.authority || 'Ministry of Finance'}): Complete guide to 2026 interest rates, eligibility criteria, tax exemptions, and step-by-step application rules.`,
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Investment Schemes', path: '/investment-schemes' },
        { name: sc.title, path: routePath },
      ],
      jsonLd: getInvestmentBreadcrumbSchema('investment-schemes', sc.title, slug),
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Government Small Savings Scheme · ${escapeHtml(sc.authority || 'Ministry of Finance')}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(sc.title)} (2026 Rules &amp; Interest Rates)</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(sc.description || '')}</p>

          ${sc.financialParameters ? `
          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-sm text-emerald-950">
            <h2 class="font-bold mb-1">Financial Parameters &amp; Notified Rates</h2>
            <p>${escapeHtml(sc.financialParameters)}</p>
          </div>` : ''}

          ${sc.benefits ? `
          <section class="mt-4">
            <h2 class="text-lg font-bold text-gray-900 mb-1">Key Benefits &amp; Sovereign Guarantee</h2>
            <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(sc.benefits)}</p>
          </section>` : ''}

          ${sc.eligibility ? `
          <section class="mt-4">
            <h2 class="text-lg font-bold text-gray-900 mb-1">Eligibility Criteria &amp; Target Beneficiaries</h2>
            <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(sc.eligibility)}</p>
          </section>` : ''}

          ${docsHtml}
          ${processHtml}
          ${faqsHtml}

          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/investment-schemes" class="text-blue-700 underline font-bold">← All Small Savings Schemes</a>
            <a href="/investments" class="text-blue-700 underline font-bold">54EC Capital Gain Bonds</a>
            <a href="/tools" class="text-blue-700 underline font-bold">Maturity Calculators</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  // 5. All Verified Citizen Questions (/questions/:slug) with English + Hindi + Hinglish answers!
  for (const q of questions) {
    const routePath = `/questions/${q.slug}`;
    const hiQ = q.translations?.hi?.canonical_question || '';
    const hiA = q.translations?.hi?.detailed_answer || q.translations?.hi?.short_answer || '';
    const hinglishQ = q.translations?.hinglish?.canonical_question || '';
    const hinglishA = q.translations?.hinglish?.detailed_answer || q.translations?.hinglish?.short_answer || '';

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': ['WebPage', 'FAQPage'],
      '@id': `${PRODUCTION_DOMAIN}${routePath}#webpage`,
      url: `${PRODUCTION_DOMAIN}${routePath}`,
      name: q.canonical_question,
      description: q.short_answer,
      dateModified: q.verified_at || '2026-11-15',
      mainEntity: [
        {
          '@type': 'Question',
          name: q.canonical_question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.detailed_answer || q.short_answer,
          },
        },
      ],
      breadcrumb: buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Verified Q&A', path: '/questions' },
        { name: q.canonical_question, path: routePath },
      ]),
    };

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${q.canonical_question} | Verified Rule & Hindi Guide — SarkarSaathi`,
      description: q.short_answer.slice(0, 160),
      keywords: [...(q.keywords || []), q.category, q.subcategory].join(', '),
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Verified Q&A', path: '/questions' },
        { name: q.canonical_question, path: routePath },
      ],
      jsonLd: faqSchema,
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <div class="text-xs font-semibold text-blue-700">${escapeHtml(q.category)} · ${escapeHtml(q.subcategory)} · Source: ${escapeHtml(q.source_publisher)} · <a href="/about" class="underline">Verified by SarkarSaathi Editorial Desk</a></div>
          <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(q.canonical_question)}</h1>
          <div class="bg-blue-50 p-4 rounded-lg text-gray-900 font-medium">${escapeHtml(q.short_answer)}</div>
          <div class="text-gray-700 leading-relaxed">${escapeHtml(q.detailed_answer)}</div>
          ${
            hiA
              ? `<section class="pt-4 border-t border-gray-100"><h2 class="text-lg font-bold text-gray-900">हिंदी में जानकारी: ${escapeHtml(hiQ)}</h2><p class="text-gray-700 mt-1">${escapeHtml(hiA)}</p></section>`
              : ''
          }
          ${
            hinglishA
              ? `<section class="pt-4 border-t border-gray-100"><h2 class="text-lg font-bold text-gray-900">Hinglish Guide: ${escapeHtml(hinglishQ)}</h2><p class="text-gray-700 mt-1">${escapeHtml(hinglishA)}</p></section>`
              : ''
          }
          ${
            q.alternate_phrasings && q.alternate_phrasings.length > 0
              ? `<section class="pt-4 border-t border-gray-100"><h2 class="text-base font-bold text-gray-900 mb-1">Common Search Phrasings &amp; Related Queries</h2><ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">${q.alternate_phrasings.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul></section>`
              : ''
          }
          ${
            q.supporting_claims && q.supporting_claims.length > 0
              ? `<section class="pt-4 border-t border-gray-100"><h2 class="text-base font-bold text-gray-900 mb-1">Verified Regulatory Citations</h2><ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">${q.supporting_claims.map((c) => `<li><strong>${escapeHtml(c.citation_source)}:</strong> ${escapeHtml(c.claim)}</li>`).join('')}</ul></section>`
              : ''
          }
          ${
            q.reviewer_notes
              ? `<div class="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950"><strong>Editorial Advisory:</strong> ${escapeHtml(q.reviewer_notes)}</div>`
              : ''
          }
          <p class="text-xs text-gray-500 pt-3">Primary Authority: <a href="${escapeHtml(q.source_url)}" class="underline text-blue-700" rel="noopener noreferrer">${escapeHtml(q.source_title)}</a> · Last Verified: ${escapeHtml(q.verified_at || '2026-11-15')}</p>
          <div class="flex flex-wrap gap-4 pt-2 border-t text-sm">
            <a href="/questions" class="text-blue-700 underline">← Back to Citizen Q&amp;A Hub</a>
            <a href="/tools" class="text-blue-700 underline">Tax &amp; Maturity Calculators</a>
            <a href="/subsidies" class="text-blue-700 underline">Verified Subsidies Directory</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  // 6. All Tenders (/tenders/:slug) & News (/news/:slug) & Official Sources (/official-sources/:slug)
  for (const t of tenders) {
    const tAny = t as any;
    const slug = t.slug || t.id;
    const routePath = `/tenders/${slug}`;
    const tenderVal = tAny.tenderValue || tAny.estimatedValue || 'As per tender schedule';
    const emdVal = tAny.emdAmount || tAny.bidSecurity || 'See DNIT / MSE Exemption';
    const deadline = tAny.submissionDeadline || tAny.closingDate || 'Refer CPPP / GeM Notice';
    const portalUrl = tAny.nitDocumentUrl || tAny.officialDocumentUrl || tAny.officialPortalUrl || tAny.sourceUrl || '#';

    const tenderFaqsHtml = Array.isArray(tAny.faqs) && tAny.faqs.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-2">Tender Participation FAQs</h2><div class="space-y-3">${tAny.faqs.map((f: any) => `<div class="p-4 bg-gray-50 rounded-lg"><h3 class="font-bold text-sm text-gray-900 mb-1">${escapeHtml(f.question)}</h3><p class="text-xs text-gray-700 leading-relaxed">${escapeHtml(f.answer)}</p></div>`).join('')}</div></section>`
      : '';

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${t.title} — PSU / Government Tender Notice (${tenderVal}) | SarkarSaathi`,
      description: `${t.title} issued by ${t.authority || 'Government Authority'}. Estimated Value: ${tenderVal}, EMD: ${emdVal}, Closing Date: ${deadline}. Official eProcure / GeM bid guide.`,
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Public Tenders', path: '/tenders' },
        { name: t.title, path: routePath },
      ],
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase tracking-wide">${escapeHtml(tAny.tenderType || 'Public Tender')} · ${escapeHtml(tAny.tenderId || tAny.referenceNumber || 'Verified Notice')} · ${escapeHtml(tAny.status || 'OPEN')}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(t.title)}</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(tAny.detailedDescription || t.description || '')}</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Issuing Authority</span><strong class="text-gray-900">${escapeHtml(t.authority || tAny.procuringAuthority || 'Government of India')}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Estimated Value</span><strong class="text-emerald-800">${escapeHtml(String(tenderVal))}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">EMD / Bid Security</span><strong class="text-gray-900">${escapeHtml(String(emdVal))}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Submission Deadline</span><strong class="text-gray-900">${escapeHtml(String(deadline))}</strong></div>
          </div>
          ${tAny.scopeOfWork ? renderListSection('Scope of Work & Technical Procurement', tAny.scopeOfWork) : ''}
          ${tAny.eligibilityCriteria || tAny.eligibility ? renderListSection('Bidder Eligibility & Technical Qualifications', tAny.eligibilityCriteria || tAny.eligibility) : ''}
          ${tAny.requiredDocuments || tAny.documentsRequired ? renderListSection('Mandatory Cover-1 & Cover-2 Bid Documents', tAny.requiredDocuments || tAny.documentsRequired) : ''}
          ${tAny.bidSubmissionProcess || tAny.howToRespond ? renderListSection('Online Bid Submission & Evaluation Procedure', [tAny.bidSubmissionProcess, tAny.evaluationProcess, tAny.howToRespond].filter(Boolean)) : ''}
          ${tAny.paymentTerms ? renderListSection('Contract Period & Payment Terms', [tAny.contractPeriod ? `Contract Duration: ${tAny.contractPeriod}` : '', tAny.paymentTerms].filter(Boolean)) : ''}
          ${tAny.importantConditions ? renderListSection('Statutory Terms & Important Conditions', tAny.importantConditions) : ''}
          ${tenderFaqsHtml}
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm">
            <span class="font-bold text-blue-900">Official Procurement Portal: </span>
            <a href="${escapeHtml(portalUrl)}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">${escapeHtml(tAny.officialSource || tAny.sourceName || 'CPPP / GeM Official Notice')}</a>
          </div>
          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/tenders" class="text-blue-700 underline font-bold">← All Government &amp; PSU Tenders</a>
            <a href="/official-sources" class="text-blue-700 underline font-bold">eProcure &amp; GeM Official Portals</a>
            <a href="/questions" class="text-blue-700 underline font-bold">GeM Procurement Rules Q&amp;A</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  for (const n of news) {
    const nAny = n as any;
    const slug = n.slug || n.id;
    const routePath = `/news/${slug}`;
    const desc = (n.description || nAny.whatHappened || n.title).slice(0, 160);
    const newsSchema = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: n.title,
      description: desc,
      datePublished: nAny.publishedDate || '2026-10-01',
      dateModified: nAny.sourceVerificationDate || nAny.publishedDate || '2026-11-15',
      author: {
        '@type': 'Organization',
        name: 'SarkarSaathi Editorial Desk',
        url: PRODUCTION_DOMAIN,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SarkarSaathi',
        url: PRODUCTION_DOMAIN,
      },
      mainEntityOfPage: `${PRODUCTION_DOMAIN}${routePath}`,
    };

    const newsFaqsHtml = Array.isArray(nAny.faqs) && nAny.faqs.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-2">Policy Update FAQs</h2><div class="space-y-3">${nAny.faqs.map((f: any) => `<div class="p-4 bg-gray-50 rounded-lg"><h3 class="font-bold text-sm text-gray-900 mb-1">${escapeHtml(f.question)}</h3><p class="text-xs text-gray-700 leading-relaxed">${escapeHtml(f.answer)}</p></div>`).join('')}</div></section>`
      : '';

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${n.title} — Official Policy Update | SarkarSaathi`,
      description: desc,
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Policy News', path: '/news' },
        { name: n.title, path: routePath },
      ],
      jsonLd: newsSchema,
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase tracking-wide">${escapeHtml(nAny.category || 'Policy Update')} · ${escapeHtml(nAny.authority || 'Government of India')}${nAny.publishedDate ? ` · Published ${escapeHtml(nAny.publishedDate)}` : ''}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(n.title)}</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(nAny.content || n.description || '')}</p>
          ${nAny.whatHappened ? renderListSection('What Happened & Regulatory Notification', nAny.whatHappened) : ''}
          ${nAny.whatChanged || nAny.newRule ? renderListSection('Key Policy Changes (Previous Rule vs. New Rule)', [nAny.whatChanged, nAny.previousRule ? `Previous Rule: ${nAny.previousRule}` : '', nAny.newRule ? `New Rule: ${nAny.newRule}` : ''].filter(Boolean)) : ''}
          ${nAny.importantNumbers ? renderListSection('Key Figures, Thresholds & Highlights', nAny.importantNumbers) : ''}
          ${nAny.whyItMatters || nAny.whatThisUpdateMeans ? renderListSection('Why This Policy Update Matters', [nAny.whyItMatters, nAny.whatThisUpdateMeans, nAny.practicalImpact].filter(Boolean)) : ''}
          ${nAny.whoIsAffected || nAny.actionRequired ? renderListSection('Who Is Affected & Compliance Action Required', [nAny.whoIsAffected ? `Beneficiaries / Stakeholders: ${nAny.whoIsAffected}` : '', nAny.actionRequired ? `Action Required: ${nAny.actionRequired}` : ''].filter(Boolean)) : ''}
          ${nAny.importantConditions ? renderListSection('Important Regulatory Conditions', nAny.importantConditions) : ''}
          ${newsFaqsHtml}
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm">
            <span class="font-bold text-blue-900">Official Notification Reference: </span>
            <span>${escapeHtml(nAny.officialNotification || nAny.circularNumber || nAny.sourceName || 'Official Gazette')} · </span>
            <a href="${escapeHtml(nAny.sourceUrl || '#')}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">Official Authority Source</a>
          </div>
          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/news" class="text-blue-700 underline font-bold">← All Policy Updates</a>
            <a href="/subsidies" class="text-blue-700 underline font-bold">Verified Subsidies</a>
            <a href="/investments" class="text-blue-700 underline font-bold">Sovereign Investments</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  for (const src of officialSources) {
    const srcAny = src as any;
    const slug = getOfficialSourceSlug(src);
    if (!slug) continue;
    const routePath = `/official-sources/${slug}`;
    const portalHref = srcAny.officialUrl || srcAny.url || '#';
    const stateSlug = srcAny.state ? srcAny.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '';

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${src.name} — Verified Official Government Portal Guide | SarkarSaathi`,
      description: `${src.name} (${src.authority}): Official .gov.in portal link (${portalHref}), verified digital citizen services, and associated schemes.`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Official Sources', path: '/official-sources' },
        { name: src.name, path: routePath },
      ],
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-emerald-700 uppercase tracking-wide">${escapeHtml(srcAny.category || srcAny.type || 'Official Portal')} · ${escapeHtml(srcAny.sourceType || 'Government Authority')}${srcAny.lastVerified ? ` · Verified ${escapeHtml(srcAny.lastVerified)}` : ''}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(src.name)} — Official Citizen Portal Guide</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(src.description || '')}</p>
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div><dt class="font-bold text-gray-600">Statutory / Issuing Authority:</dt><dd class="font-semibold text-gray-900">${escapeHtml(src.authority || 'Government of India')}</dd></div>
            <div><dt class="font-bold text-gray-600">Jurisdiction Coverage:</dt><dd>${escapeHtml(srcAny.state || 'All India (Central)')}</dd></div>
            <div class="sm:col-span-2"><dt class="font-bold text-gray-600">Authenticated Official Government Domain:</dt><dd><a href="${escapeHtml(portalHref)}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">${escapeHtml(portalHref)}</a></dd></div>
          </dl>
          ${srcAny.services && srcAny.services.length > 0 ? renderListSection('Verified Digital Citizen & Enterprise Services Available', srcAny.services, false) : ''}
          <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950">
            <strong>Security Check:</strong> Always confirm that your browser address bar displays the exact <code>.gov.in</code>, <code>.nic.in</code>, or statutory regulator domain above before submitting KYC details or paying statutory fees.
          </div>
          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/official-sources" class="text-blue-700 underline font-bold">← All ${officialSources.length} Verified Official Portals</a>
            ${stateSlug ? `<a href="/opportunities/state/${escapeHtml(stateSlug)}" class="text-blue-700 underline font-bold">${escapeHtml(srcAny.state)} Opportunities &amp; Schemes</a>` : ''}
            <a href="/subsidies" class="text-blue-700 underline font-bold">Central &amp; State Subsidies</a>
            <a href="/tenders" class="text-blue-700 underline font-bold">Public Tenders</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  // 7. State & Sector Landing Pages (STRICTLY Curated Indexable Opportunities + Verified Subsidies — ZERO synthetic boilerplate templates!)
  const curatedOpportunities = opportunities.filter((o) => isIndexableOpportunity(o));

  for (const st of stateOfficialSources) {
    if (!st.state) continue;
    const stateSlug = st.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!stateSlug) continue;
    const stateLower = st.state.toLowerCase();

    const stateCuratedOpps = curatedOpportunities.filter((o) => {
      const oState = String(o.state || o.location || 'All India').toLowerCase();
      return (
        oState.includes(stateLower) ||
        oState.includes('all india') ||
        oState.includes('pan india') ||
        oState === 'india' ||
        oState === 'central'
      );
    }).slice(0, 12);

    const stateSubsidies = publishedSubsidies.filter((sub) => {
      const subState = String(sub.state || 'All India').toLowerCase();
      return subState.includes(stateLower) || subState === 'all india' || subState === 'central';
    }).slice(0, 12);

    const oppListHtml = stateCuratedOpps.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-3">Verified National &amp; Regional Grants Applicable in ${escapeHtml(st.state)} (${stateCuratedOpps.length})</h2><ul class="space-y-3">${stateCuratedOpps.map(o => `<li><a href="/opportunities/${escapeHtml(o.slug || o.id)}" class="font-bold text-blue-800 underline">${escapeHtml(o.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(o.authority || 'Government of India')} (${escapeHtml(o.fundingAmount || o.sector || 'National Program')})</span></li>`).join('\n')}</ul></section>`
      : '';

    const subsidyListHtml = stateSubsidies.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-3">Verified Government Subsidies Open to Citizens in ${escapeHtml(st.state)}</h2><ul class="space-y-2.5">${stateSubsidies.map(sub => `<li><a href="/subsidies/${escapeHtml(sub.slug)}" class="font-bold text-emerald-800 underline">${escapeHtml(sub.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(sub.maximumBenefit || sub.subsidyAmount || sub.category)} (${escapeHtml(sub.state || 'All India')})</span></li>`).join('\n')}</ul></section>`
      : '';

    const servicesHtml = st.services && st.services.length > 0
      ? `<section class="mt-4"><h2 class="text-base font-bold text-gray-900 mb-2">Verified Digital Citizen &amp; Business Services in ${escapeHtml(st.state)}</h2><ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">${st.services.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul></section>`
      : '';

    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/state/${stateSlug}`,
      title: `${st.state} Government Opportunities, Verified Subsidies & Official Portal | SarkarSaathi`,
      description: `Explore verified ${st.state} citizen portal services, Central & State government subsidies, startup grants, and innovation fellowships applicable to residents and MSMEs in ${st.state}.`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Opportunities', path: '/opportunities' },
        { name: st.state, path: `/opportunities/state/${stateSlug}` },
      ],
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 space-y-5">
          <div class="text-xs font-semibold text-emerald-700 uppercase">Verified State Governance Directory · ${escapeHtml(st.type || 'State')}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(st.state)} Government Subsidies, Innovation Grants &amp; Official Portal</h1>
          <p class="text-gray-700 leading-relaxed">${escapeHtml(st.description || '')} Residents, farmers, students, and Udyam-registered MSMEs in ${escapeHtml(st.state)} can apply directly through the authenticated state portal alongside pan-India Central Ministry schemes listed below.</p>
          <p class="text-sm bg-blue-50 p-4 rounded-xl border border-blue-200">Official State Portal: <a href="${escapeHtml(st.officialUrl || '')}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">${escapeHtml(st.name)} (.gov.in)</a></p>
          ${servicesHtml}
          ${subsidyListHtml}
          ${oppListHtml}
          <div class="pt-4 border-t border-gray-100 mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/opportunities" class="text-blue-700 underline">← Curated National Grants</a>
            <a href="/subsidies" class="text-blue-700 underline">All Verified Subsidies</a>
            <a href="/guides" class="text-blue-700 underline">In-Depth Editorial Handbooks</a>
            <a href="/official-sources" class="text-blue-700 underline">Official Portals Directory</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  const allSectorRoutes = Array.from(new Set([
    ...SECTOR_ROUTES,
    'it-ites-technology-parks',
    'renewable-energy-solar',
    'quantum-technologies-deep-tech'
  ]));

  const sectorKeywordMap: Record<string, RegExp> = {
    'agriculture': /agri|farm|kisan|food|rural|dairy|fisheries|biotech/i,
    'infrastructure': /infra|transport|urban|smart|housing|rail|port|logistics|civil/i,
    'healthcare': /health|bio|med|pharma|icmr|birac|clinical|ayush/i,
    'education': /edu|scholar|fellow|research|student|skill|anrf|dst|academic|science/i,
    'technology': /tech|it|digital|ai|cyber|quantum|software|electronics|semiconductor|meity|deeptech/i,
    'renewable-energy': /solar|energy|power|clean|green|ev|battery|climate|wind|hydrogen/i,
    'renewable-energy-solar': /solar|energy|power|clean|green|surya|kusum|hydrogen/i,
    'manufacturing': /manufact|pli|msme|textile|industrial|hardware|electronics|make in india/i,
    'tourism': /tourism|culture|heritage|hospitality|handicraft|artisan/i,
    'msme': /msme|startup|entrepreneur|business|pmegp|mudra|seed|grant|incubation/i,
    'defense': /defen|space|aero|idex|drdo|isro|security|drone/i,
    'it-ites-technology-parks': /tech|it|software|stpi|meity|digital|startup|electronics|ai|cyber/i,
    'quantum-technologies-deep-tech': /quantum|deep|ai|tech|research|dst|anrf|semiconductor|space/i,
  };

  for (const sec of allSectorRoutes) {
    let secLabel = sec.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    if (sec === 'it-ites-technology-parks') secLabel = 'IT, ITeS & Technology Parks';
    if (sec === 'renewable-energy-solar') secLabel = 'Renewable Energy & Solar';
    if (sec === 'quantum-technologies-deep-tech') secLabel = 'Quantum Technologies & Deep Tech';

    const secRegex = sectorKeywordMap[sec] || new RegExp(sec.split('-').filter(Boolean).join('|'), 'i');
    const matchedCuratedOpps = curatedOpportunities.filter((o) => {
      const hay = `${o.title} ${o.sector || ''} ${o.subSector || ''} ${o.description || ''} ${o.authority || ''}`;
      return secRegex.test(hay);
    });
    const secOpps = (matchedCuratedOpps.length > 0 ? matchedCuratedOpps : curatedOpportunities).slice(0, 12);

    const secSubsidies = publishedSubsidies.filter((sub) => {
      const hay = `${sub.title} ${sub.category || ''} ${sub.description || ''}`;
      return secRegex.test(hay);
    }).slice(0, 8);

    const oppListHtml = secOpps.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-3">Curated ${escapeHtml(secLabel)} National Grants &amp; Fellowships (${secOpps.length})</h2><ul class="space-y-3">${secOpps.map(o => `<li><a href="/opportunities/${escapeHtml(o.slug || o.id)}" class="font-bold text-blue-800 underline">${escapeHtml(o.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(o.authority || 'Government of India')} (${escapeHtml(o.fundingAmount || o.sector || 'National Call')})</span></li>`).join('\n')}</ul></section>`
      : '';

    const secSubsidyHtml = secSubsidies.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-3">Related ${escapeHtml(secLabel)} Government Subsidies</h2><ul class="space-y-2">${secSubsidies.map(sub => `<li><a href="/subsidies/${escapeHtml(sub.slug)}" class="font-bold text-emerald-800 underline">${escapeHtml(sub.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(sub.maximumBenefit || sub.subsidyAmount || sub.category)}</span></li>`).join('\n')}</ul></section>`
      : '';

    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/sector/${sec}`,
      title: `${secLabel} Government Grants, Subsidies & Fellowships | SarkarSaathi`,
      description: `Browse verified Central and State government grants, research fellowships, subsidies, and startup funding programs in the ${secLabel} sector across India.`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Opportunities', path: '/opportunities' },
        { name: secLabel, path: `/opportunities/sector/${sec}` },
      ],
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase">Verified Sector Research Directory</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(secLabel)} — Verified Government Grants, Fellowships &amp; Subsidies</h1>
          <p class="text-gray-700 leading-relaxed">Explore curated Central Ministry innovation calls, R&amp;D fellowships, startup prototyping grants, and capital subsidy schemes relevant to the ${escapeHtml(secLabel)} ecosystem in India. Every listing links directly to verified <code>.gov.in</code> or statutory agency portals.</p>
          ${oppListHtml}
          ${secSubsidyHtml}
          <div class="pt-4 border-t border-gray-100 mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/opportunities" class="text-blue-700 underline">← All Curated Grants</a>
            <a href="/guides" class="text-blue-700 underline">In-Depth Editorial Handbooks</a>
            <a href="/tenders" class="text-blue-700 underline">Public Tenders</a>
            <a href="/investments" class="text-blue-700 underline">Sovereign Investments</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  // 8. All Curated Indexable Opportunities (in sitemap.xml) + Legacy GSC Slugs marked noindex, follow
  const priorityOppSlugs = new Set([
    'haryana-industrial-investment-project-79',
    'gidc-infrastructure-project-10',
    'mospi-paimana-infrastructure-project-689-coal',
    'delhi-urban-tech-logistics-project-40',
    'dfccil-freight-project-49',
    'pm-mitra-textile-park-70',
    'union-territory-investment-project-18',
    'state-energy-infrastructure-project-85',
  ]);
  const indexableOpportunities = curatedOpportunities;
  const legacyNoIndexOpportunities = opportunities.filter(
    (o) => priorityOppSlugs.has(o.slug) && !isIndexableOpportunity(o)
  );
  const targetOpportunities = [...indexableOpportunities, ...legacyNoIndexOpportunities];

  const seenOpps = new Set<string>();
  for (const opp of targetOpportunities) {
    const oppAny = opp as any;
    const slug = opp.slug || opp.id;
    if (!slug || seenOpps.has(slug)) continue;
    seenOpps.add(slug);
    const isIndexed = isIndexableOpportunity(opp);
    const cost = oppAny.fundingAmount || opp.totalProjectCost || 'As per official notification';
    const loc = [opp.district, opp.location, opp.state].filter(Boolean).join(', ') || 'All India';
    const statusVal = opp.projectStatus || opp.projectStage || oppAny.status || 'Active';
    const sectorVal = [opp.sector, opp.subSector].filter(Boolean).join(' · ') || 'Innovation & Development';
    const authorityVal = opp.authority || oppAny.implementingAgency || 'Government of India';
    const routePath = `/opportunities/${slug}`;

    const oppFaqsHtml = Array.isArray(oppAny.faqs) && oppAny.faqs.length > 0
      ? `<section class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-2">Frequently Asked Questions</h2><div class="space-y-3">${oppAny.faqs.map((f: any) => `<div class="p-4 bg-gray-50 rounded-lg border border-gray-200"><h3 class="font-bold text-sm text-gray-900 mb-1">${escapeHtml(f.question)}</h3><p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(f.answer)}</p></div>`).join('')}</div></section>`
      : '';

    const richSections = [
      oppAny.projectDescription ? renderListSection('Program Overview & Statutory Objective', oppAny.projectDescription) : '',
      oppAny.opportunityDescription ? renderListSection('Funding Scope & Strategic Opportunity', oppAny.opportunityDescription) : '',
      oppAny.investorProfile ? renderListSection('Ideal Applicant / Institutional Profile', oppAny.investorProfile) : '',
      oppAny.eligibility ? renderListSection('Eligibility Criteria & Qualifying Conditions', oppAny.eligibility) : '',
      opp.infrastructureDetails ? renderListSection('Infrastructure & Technical Scope', opp.infrastructureDetails) : '',
      oppAny.applicationProcess ? renderListSection('Step-by-Step Application Process', oppAny.applicationProcess, Array.isArray(oppAny.applicationProcess)) : '',
      opp.participationProcess && opp.participationProcess.length > 0 ? renderListSection('Participation & Selection Workflow', opp.participationProcess, true) : '',
      oppAny.requiredDocuments ? renderListSection('Mandatory Documents & Proposal Checklist', oppAny.requiredDocuments) : '',
      oppAny.importantConditions ? renderListSection('Statutory Conditions & Compliance Rules', oppAny.importantConditions) : '',
      oppAny.howToEvaluate ? renderListSection('How Applicants Should Evaluate This Grant', oppAny.howToEvaluate) : '',
    ].filter(Boolean).join('\n');

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${opp.title} (${opp.state || 'India'}) — Grant Details, Eligibility & Official Portal | SarkarSaathi`,
      description: `${opp.title} (${sectorVal}): Nodal Authority: ${authorityVal}. Funding / Outlay: ${cost}. Check eligibility criteria, required documents, and official application steps.`,
      ogType: 'article',
      noIndex: !isIndexed,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Opportunities', path: '/opportunities' },
        { name: opp.title, path: routePath },
      ],
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase tracking-wide">${escapeHtml(oppAny.opportunityType || 'Government Grant / Call')} · ${escapeHtml(sectorVal)} · ${escapeHtml(statusVal)}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(opp.title)}</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(opp.description || '')}</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Funding / Outlay</span><strong class="text-emerald-800">${escapeHtml(cost)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Coverage / Location</span><strong class="text-gray-900">${escapeHtml(loc)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Implementing Agency</span><strong class="text-gray-900">${escapeHtml(authorityVal)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Timeline / Status</span><strong class="text-gray-900">${escapeHtml(oppAny.timeline || oppAny.deadline || statusVal)}</strong></div>
          </div>

          ${richSections}
          ${oppFaqsHtml}

          <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm">
            <span class="font-bold text-blue-900">Official Source Citation: </span>
            <a href="${escapeHtml(opp.sourceUrl || '#')}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">${escapeHtml(opp.sourceAuthority || opp.sourceName || authorityVal)}</a>
          </div>

          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/opportunities" class="text-blue-700 underline font-bold">← All Curated National Grants</a>
            <a href="/guides" class="text-blue-700 underline font-bold">In-Depth Editorial Handbooks</a>
            <a href="/subsidies" class="text-blue-700 underline font-bold">Subsidies Directory</a>
            <a href="/tenders" class="text-blue-700 underline font-bold">Public Tenders</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  console.log(`[Prerender-Static-SEO] Generated ${generatedCount} static HTML pages with unique <title>, canonical, JSON-LD, and semantic body in dist/.`);
}

runPrerender();
