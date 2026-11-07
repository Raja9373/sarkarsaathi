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
import {
  getAllOfficialSources,
  getOfficialSourceSlug,
  stateOfficialSources,
} from '../src/utils/officialSources';
import { SECTOR_ROUTES } from '../src/utils/sitemapGenerator';
import {
  getGovernmentServiceSchema,
  getInvestmentBreadcrumbSchema,
  getHubOgImage,
  PRODUCTION_DOMAIN,
} from '../src/utils/seo';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

function escapeHtml(str: string = ''): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface PageMeta {
  routePath: string; // e.g., '/subsidies/pm-kisan-samman-nidhi'
  canonicalPath?: string; // defaults to routePath
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
  bodyHtml: string;
}

function buildHtmlDocument(templateHtml: string, meta: PageMeta): string {
  const cleanCanonical = (meta.canonicalPath || meta.routePath).replace(/^\/+|\/+$/g, '').toLowerCase();
  const canonicalUrl = cleanCanonical ? `${PRODUCTION_DOMAIN}/${cleanCanonical}` : `${PRODUCTION_DOMAIN}/`;
  const ogImage = getHubOgImage(meta.canonicalPath || meta.routePath);
  const safeTitle = escapeHtml(meta.title);
  const safeDesc = escapeHtml(meta.description.slice(0, 165));
  const safeKeywords = meta.keywords ? escapeHtml(meta.keywords) : '';

  let html = templateHtml;

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
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />\n    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />\n    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  );
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

  // 5. Inject Page-Specific JSON-LD before </head>
  if (meta.jsonLd) {
    const schemas = Array.isArray(meta.jsonLd) ? meta.jsonLd : [meta.jsonLd];
    const scripts = schemas
      .map((s) => `    <script type="application/ld+json">\n${JSON.stringify(s)}\n    </script>`)
      .join('\n');
    html = html.replace('</head>', `${scripts}\n  </head>`);
  }

  // 6. Replace <div id="root">...</div> with page-specific semantic HTML
  const wrappedBody = `    <div id="root">
      <header class="bg-blue-900 text-white py-5 px-4">
        <div class="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <a href="/" class="text-xl font-bold text-white">SarkarSaathi.org</a>
          <nav aria-label="Primary Navigation" class="flex flex-wrap gap-4 text-sm">
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

  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script type="module")/i, `${wrappedBody}\n    `);

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
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Sovereign Bonds &amp; Section 54EC Capital Gains Tax-Exemption Instruments</h1>
        <p class="mb-6 text-gray-700">Official interest rates, lock-in periods, and Income Tax exemptions under Section 54EC and Section 80C.</p>
        <ul class="space-y-2">
          ${investments
            .slice(0, 60)
            .map(
              (inv) =>
                `<li><a href="/investments/${escapeHtml(inv.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(inv.title)}</a> — ${escapeHtml(inv.authority || 'Government of India')}</li>`
            )
            .join('\n          ')}
        </ul>`,
    },
    {
      routePath: '/investment-schemes',
      title: 'Post Office & Government Small Savings Schemes 2026 (PPF 7.1%, SSY 8.2%, SCSS 8.2%) | SarkarSaathi',
      description: 'Compare Government of India Small Savings Schemes: Public Provident Fund (PPF), Sukanya Samriddhi Yojana (SSY), Senior Citizen Savings Scheme (SCSS), NSC & KVP.',
      keywords: 'post office schemes 2026, ppf interest rate, sukanya samriddhi yojana calculator, senior citizen savings scheme scss, nsc kvp',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Government Small Savings &amp; Post Office Investment Schemes</h1>
        <ul class="space-y-2">
          ${schemes
            .map(
              (sc) =>
                `<li><a href="/investment-schemes/${escapeHtml(sc.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(sc.title)}</a> — ${escapeHtml(sc.authority || 'Ministry of Finance')}</li>`
            )
            .join('\n          ')}
        </ul>`,
    },
    {
      routePath: '/questions',
      title: 'Sarkari Yojana, 54EC Bonds & Subsidy Q&A in Hindi, Hinglish & English | SarkarSaathi',
      description: `Read ${questions.length}+ verified answers in Hindi (हिंदी), Hinglish, and English on PM-KISAN, MSME subsidies, 54EC Capital Gain Bonds, PPF, and public tenders.`,
      keywords: 'sarkari yojana question answer hindi, 54ec bond faq, pm kisan status kaise check kare, msme subsidy rules',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Verified Citizen Q&amp;A Knowledge Base (${questions.length} Questions in English, Hindi &amp; Hinglish)</h1>
        <ul class="space-y-2">
          ${questions
            .map(
              (q) =>
                `<li><a href="/questions/${escapeHtml(q.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(q.canonical_question)}</a> (${escapeHtml(q.category)})</li>`
            )
            .join('\n          ')}
        </ul>`,
    },
    {
      routePath: '/tenders',
      title: 'Live Government & PSU Tenders (GeM & CPPP eProcure Notices) | SarkarSaathi',
      description: 'Track active Central & State Government tenders, PSU procurement notices, EMD exemptions for MSMEs, and bid submission deadlines.',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Verified Government &amp; PSU Procurement Tenders</h1>
        <ul class="space-y-2">
          ${tenders
            .map(
              (t) =>
                `<li><a href="/tenders/${escapeHtml(t.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(t.title)}</a> — ${escapeHtml(t.authority || '')}</li>`
            )
            .join('\n          ')}
        </ul>`,
    },
    {
      routePath: '/opportunities',
      title: 'India Infrastructure Projects & State Industrial Investment Opportunities | SarkarSaathi',
      description: 'Explore verified infrastructure development projects, industrial parks, and PLI manufacturing investment opportunities across all 28 States and 8 UTs.',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">India Infrastructure &amp; Industrial Investment Opportunities</h1>
        <p class="mb-4">Browse state-wise and sector-wise infrastructure projects sourced from PAIMANA and official state investment portals.</p>`,
    },
    {
      routePath: '/tools',
      title: 'Sarkari Yojana Subsidy, PPF, Sukanya Samriddhi & 54EC Tax Saving Calculators | SarkarSaathi',
      description: 'Free interactive calculators for Section 54EC Capital Gains Tax Exemption, PPF maturity, Sukanya Samriddhi Yojana (SSY), Senior Citizen Savings Scheme, and MSME subsidies.',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Government Scheme &amp; Sovereign Tax-Saving Calculators</h1>
        <p>Calculate exact maturity values, Section 54EC LTCG tax savings, and subsidy eligibility amounts.</p>`,
    },
    {
      routePath: '/comparisons',
      title: 'Compare PPF vs SSY vs 54EC Bonds vs SCSS vs RBI Floating Rate Bonds | SarkarSaathi',
      description: 'Side-by-side comparison of Indian government investment schemes, interest rates, lock-in periods, and Section 80C / 54EC tax exemptions.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">Side-by-Side Government Scheme &amp; Bond Comparison Matrix</h1>`,
    },
    {
      routePath: '/news',
      title: 'Latest Government Scheme Notifications, PIB Releases & RBI Updates | SarkarSaathi',
      description: 'Verified policy updates, PIB press releases, subsidy deadline extensions, and small savings interest rate revisions.',
      bodyHtml: `
        <h1 class="text-2xl font-bold mb-3">Official Policy Updates &amp; Government Notifications</h1>
        <ul class="space-y-2">
          ${news.map((n) => `<li><a href="/news/${escapeHtml(n.slug)}" class="font-bold text-blue-800 underline">${escapeHtml(n.title)}</a></li>`).join('\n          ')}
        </ul>`,
    },
    {
      routePath: '/official-sources',
      title: 'Directory of Verified .gov.in & .nic.in Official Government Portals | SarkarSaathi',
      description: 'Audited registry of official Central Ministries, State Government portals, RBI, NABARD, and SIDBI websites.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">Verified Official Government Portals (.gov.in &amp; .nic.in Registry)</h1>`,
    },
    {
      routePath: '/about',
      title: 'About SarkarSaathi.org — Editorial Methodology & 4-Stage Verification | SarkarSaathi',
      description: 'Learn about SarkarSaathi.org, our independent civic research mission, and our 4-stage verification workflow for Indian government schemes.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">About SarkarSaathi.org &amp; Our 4-Stage Verification Methodology</h1><p>SarkarSaathi.org is an independent public-interest research platform dedicated to structuring verified Indian government subsidies, sovereign bonds, and public tenders.</p>`,
    },
    {
      routePath: '/contact',
      title: 'Contact Us & Citizen Grievance / Data Correction Desk | SarkarSaathi',
      description: 'Contact the SarkarSaathi editorial and compliance team to report broken .gov.in links, request scheme updates, or submit general inquiries.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">Contact the SarkarSaathi Editorial &amp; Verification Desk</h1><p>Email: contact@sarkarsaathi.org | Editorial corrections are reviewed within 48 business hours.</p>`,
    },
    {
      routePath: '/privacy-policy',
      title: 'Privacy Policy, DPDP Act 2023 Compliance & Google AdSense Cookie Disclosure | SarkarSaathi',
      description: 'Official Privacy Policy for SarkarSaathi.org including Google AdSense DoubleClick DART cookie disclosures, opt-out controls, and DPDP Act 2023 compliance.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">Privacy Policy &amp; Google AdSense Advertising Cookie Disclosure</h1><p>Third-party vendors, including Google, use cookies (such as the DoubleClick DART cookie) to serve ads based on a user's prior visits to SarkarSaathi.org or other websites on the internet. Users may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com).</p>`,
    },
    {
      routePath: '/disclaimer',
      title: 'Official Non-Affiliation & Financial Information Disclaimer | SarkarSaathi',
      description: 'SarkarSaathi.org is an independent information platform and is not affiliated with any government ministry. Read our complete statutory disclaimer.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">Official Non-Affiliation &amp; Financial Disclaimer</h1><p>SarkarSaathi.org is an independent information portal and is NOT an official government website. Always verify final eligibility on the linked .gov.in portal.</p>`,
    },
    {
      routePath: '/terms',
      title: 'Terms of Use & Platform Conditions | SarkarSaathi',
      description: 'Terms and conditions governing the use of SarkarSaathi.org directories, calculators, and research archives.',
      bodyHtml: `<h1 class="text-2xl font-bold mb-3">Terms of Use — SarkarSaathi.org</h1>`,
    },
  ];

  for (const hp of hubPages) {
    writeRouteHtml(templateHtml, hp);
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
        <div class="text-xs font-semibold text-emerald-700">${escapeHtml(sub.category)} · ${escapeHtml(stateName)} · Verified Scheme</div>
        <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(sub.title)} (2026): Benefit, Eligibility &amp; Online Application</h1>
        <p class="text-gray-700 leading-relaxed">${escapeHtml(sub.description)}</p>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm">
          <div><dt class="font-bold text-gray-600">Nodal Ministry / Authority:</dt><dd>${escapeHtml(ministry)}</dd></div>
          <div><dt class="font-bold text-gray-600">Subsidy / Financial Benefit:</dt><dd class="font-bold text-emerald-800">${escapeHtml(benefit)}</dd></div>
          <div><dt class="font-bold text-gray-600">Geographic Coverage:</dt><dd>${escapeHtml(stateName)}</dd></div>
          <div><dt class="font-bold text-gray-600">Official Portal:</dt><dd><a href="${escapeHtml(sub.applicationUrl || sub.sourceUrl || '#')}" class="text-blue-700 underline" rel="noopener noreferrer">${escapeHtml(sub.applicationUrl || sub.sourceUrl || 'Official Portal')}</a></dd></div>
        </dl>
        ${sub.eligibility ? `<section><h2 class="text-lg font-bold mt-4 mb-1">Eligibility Criteria (पात्रता मापदंड)</h2><p class="text-sm text-gray-700">${escapeHtml(Array.isArray(sub.eligibility) ? sub.eligibility.join('; ') : String(sub.eligibility))}</p></section>` : ''}
        ${sub.documentsRequired && sub.documentsRequired.length ? `<section><h2 class="text-lg font-bold mt-4 mb-1">Required Documents (आवश्यक दस्तावेज)</h2><ul class="list-disc pl-5 text-sm text-gray-700">${sub.documentsRequired.map((d: string) => `<li>${escapeHtml(d)}</li>`).join('')}</ul></section>` : ''}
        ${sub.applicationProcess ? `<section><h2 class="text-lg font-bold mt-4 mb-1">How to Apply Online (आवेदन प्रक्रिया)</h2><p class="text-sm text-gray-700">${escapeHtml(Array.isArray(sub.applicationProcess) ? sub.applicationProcess.join(' -> ') : String(sub.applicationProcess))}</p></section>` : ''}
        <p class="text-xs text-gray-500 pt-4 border-t"><a href="/subsidies" class="underline text-blue-700">← Browse All ${publishedSubsidies.length} Verified Government Subsidies</a></p>
      </article>`;

    const pageMeta: PageMeta = {
      routePath,
      title: `${sub.title} (2026) — ${benefit}, Eligibility & Online Apply | SarkarSaathi`,
      description: `${sub.title} (${ministry}): Get ${benefit}. Check 2026 eligibility rules, required documents, beneficiary status, and official .gov.in online application link.`,
      keywords: `${sub.title}, ${sub.title} online apply, ${sub.title} eligibility, ${sub.category} subsidy, ${stateName} sarkari yojana`,
      ogType: 'article',
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
    writeRouteHtml(templateHtml, {
      routePath,
      title: `${inv.title} — Interest Rate, Tax Exemption & Lock-In | SarkarSaathi`,
      description: `${inv.title}: Check current interest rate, sovereign backing (${inv.authority || 'Government of India'}), Section 54EC / 80C tax exemption, and investment procedure.`,
      ogType: 'article',
      jsonLd: getInvestmentBreadcrumbSchema('investments', inv.title, slug),
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(inv.title)}</h1>
          <p class="text-gray-700">${escapeHtml(inv.description || '')}</p>
          <p class="text-sm text-gray-600">Issuing Authority: <strong>${escapeHtml(inv.authority || 'Government of India')}</strong></p>
          <p><a href="/investments" class="text-blue-700 underline">← View All Sovereign Investments &amp; 54EC Bonds</a></p>
        </article>`,
    });
    generatedCount++;
  }

  // 4. All Investment Schemes (/investment-schemes/:slug)
  for (const sc of schemes) {
    const slug = sc.slug || sc.id;
    const routePath = `/investment-schemes/${slug}`;
    writeRouteHtml(templateHtml, {
      routePath,
      title: `${sc.title} (2026) — Interest Rate, Calculator & Post Office Rules | SarkarSaathi`,
      description: `${sc.title}: Complete guide to interest rates, maturity calculation, Section 80C tax benefits, and official application rules.`,
      ogType: 'article',
      jsonLd: getInvestmentBreadcrumbSchema('investment-schemes', sc.title, slug),
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(sc.title)}</h1>
          <p class="text-gray-700">${escapeHtml(sc.description || '')}</p>
          <p class="text-sm text-gray-600">Authority: <strong>${escapeHtml(sc.authority || 'Ministry of Finance')}</strong></p>
          <p><a href="/investment-schemes" class="text-blue-700 underline">← View All Government Investment Schemes</a></p>
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
      '@type': 'FAQPage',
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
    };

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${q.canonical_question} | Verified Rule & Hindi Guide — SarkarSaathi`,
      description: q.short_answer.slice(0, 160),
      keywords: [...(q.keywords || []), q.category, q.subcategory].join(', '),
      ogType: 'article',
      jsonLd: faqSchema,
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <div class="text-xs font-semibold text-blue-700">${escapeHtml(q.category)} · ${escapeHtml(q.subcategory)} · Source: ${escapeHtml(q.source_publisher)}</div>
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
          <p class="text-xs text-gray-500 pt-3">Primary Authority: <a href="${escapeHtml(q.source_url)}" class="underline text-blue-700">${escapeHtml(q.source_title)}</a></p>
          <p><a href="/questions" class="text-blue-700 underline text-sm">← Back to Citizen Q&amp;A Hub</a></p>
        </article>`,
    });
    generatedCount++;
  }

  // 6. All Tenders (/tenders/:slug) & News (/news/:slug) & Official Sources (/official-sources/:slug)
  for (const t of tenders) {
    const slug = t.slug || t.id;
    writeRouteHtml(templateHtml, {
      routePath: `/tenders/${slug}`,
      title: `${t.title} — PSU / Government Tender Notice | SarkarSaathi`,
      description: `${t.title} issued by ${t.authority || 'Government Authority'}. Check tender ID, bid deadline, EMD rules, and official eProcure / GeM link.`,
      ogType: 'article',
      bodyHtml: `<article class="bg-white p-6 rounded-xl border border-gray-200"><h1 class="text-2xl font-bold mb-2">${escapeHtml(t.title)}</h1><p>${escapeHtml(t.description || '')}</p></article>`,
    });
    generatedCount++;
  }

  for (const n of news) {
    const slug = n.slug || n.id;
    writeRouteHtml(templateHtml, {
      routePath: `/news/${slug}`,
      title: `${n.title} — Official Policy Update | SarkarSaathi`,
      description: (n.description || n.title).slice(0, 160),
      ogType: 'article',
      bodyHtml: `<article class="bg-white p-6 rounded-xl border border-gray-200"><h1 class="text-2xl font-bold mb-2">${escapeHtml(n.title)}</h1><p>${escapeHtml(n.description || '')}</p></article>`,
    });
    generatedCount++;
  }

  for (const src of officialSources) {
    const slug = getOfficialSourceSlug(src);
    if (!slug) continue;
    writeRouteHtml(templateHtml, {
      routePath: `/official-sources/${slug}`,
      title: `${src.name} — Verified Official Government Portal Guide | SarkarSaathi`,
      description: `${src.name}: Official portal link (${src.url}), department overview, and associated citizen schemes.`,
      bodyHtml: `<article class="bg-white p-6 rounded-xl border border-gray-200"><h1 class="text-2xl font-bold mb-2">${escapeHtml(src.name)}</h1><p>${escapeHtml(src.description || '')}</p><p class="mt-2"><a href="${escapeHtml(src.url)}" class="text-blue-700 underline">${escapeHtml(src.url)}</a></p></article>`,
    });
    generatedCount++;
  }

  // 7. State & Sector Landing Pages
  for (const st of stateOfficialSources) {
    if (!st.state) continue;
    const stateSlug = st.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!stateSlug) continue;
    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/state/${stateSlug}`,
      title: `${st.state} Government Schemes, Subsidies & Industrial Projects (2026) | SarkarSaathi`,
      description: `Explore verified ${st.state} government subsidies, MSME incentives, industrial parks, and official state portal links on SarkarSaathi.`,
      bodyHtml: `<article class="bg-white p-6 rounded-xl border border-gray-200"><h1 class="text-2xl font-bold mb-2">${escapeHtml(st.state)} Government Schemes, Subsidies &amp; Infrastructure Opportunities</h1><p>Official State Portal: <a href="${escapeHtml(st.url)}" class="text-blue-700 underline">${escapeHtml(st.name)}</a></p></article>`,
    });
    generatedCount++;
  }

  for (const sec of SECTOR_ROUTES) {
    const secLabel = sec.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/sector/${sec}`,
      title: `${secLabel} Sector Subsidies, Grants & Government Projects in India | SarkarSaathi`,
      description: `Browse verified Government of India subsidies, PLI incentives, tenders, and infrastructure projects in the ${secLabel} sector.`,
      bodyHtml: `<article class="bg-white p-6 rounded-xl border border-gray-200"><h1 class="text-2xl font-bold mb-2">${escapeHtml(secLabel)} Sector Government Schemes &amp; Projects</h1></article>`,
    });
    generatedCount++;
  }

  // 8. Top / Representative Opportunities (ensuring GSC inspected URLs have dedicated static HTML)
  const priorityOppSlugs = new Set([
    'haryana-industrial-investment-project-79',
    'gidc-infrastructure-project-10',
    'mospi-paimana-infrastructure-project-689-coal',
    'delhi-urban-tech-logistics-project-40',
    'dfccil-freight-project-49',
    'pm-mitra-textile-park-70',
  ]);
  const topOpportunities = [
    ...opportunities.filter((o) => priorityOppSlugs.has(o.slug)),
    ...opportunities.slice(0, 120),
  ];
  const seenOpps = new Set<string>();
  for (const opp of topOpportunities) {
    const slug = opp.slug || opp.id;
    if (!slug || seenOpps.has(slug)) continue;
    seenOpps.add(slug);
    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/${slug}`,
      title: `${opp.title} (${opp.state || 'India'}) — Project Details & Authority | SarkarSaathi`,
      description: `${opp.title} in ${opp.state || 'India'} (${opp.sector || 'Infrastructure'}): Implemented by ${opp.authority || 'Government of India'}. Check project outlay, status, and official source.`,
      ogType: 'article',
      bodyHtml: `<article class="bg-white p-6 rounded-xl border border-gray-200"><h1 class="text-2xl font-bold mb-2">${escapeHtml(opp.title)}</h1><p>${escapeHtml(opp.description || '')}</p><p class="text-sm text-gray-600 mt-2">Authority: ${escapeHtml(opp.authority || '')} | State: ${escapeHtml(opp.state || 'India')}</p></article>`,
    });
    generatedCount++;
  }

  console.log(`[Prerender-Static-SEO] Generated ${generatedCount} static HTML pages with unique <title>, canonical, JSON-LD, and semantic body in dist/.`);
}

runPrerender();
