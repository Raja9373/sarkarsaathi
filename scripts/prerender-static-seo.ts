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

    writeRouteHtml(templateHtml, {
      routePath,
      title: `${inv.title} — Interest Rate (${returnVal}), Tax Exemption & Rules | SarkarSaathi`,
      description: `${inv.title}: Check current interest rate (${returnVal}), sovereign backing (${inv.authority || 'Government of India'}), Section 54EC / 80C tax exemption, lock-in period (${lockVal}), and application steps.`,
      ogType: 'article',
      jsonLd: getInvestmentBreadcrumbSchema('investments', inv.title, slug),
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase tracking-wide">Sovereign Investment · ${escapeHtml(inv.riskLevel || 'Low')} Risk · ${escapeHtml(inv.category || 'Government Bond')}</div>
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

          ${docsHtml}
          ${processHtml}
          ${faqsHtml}

          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/investments" class="text-blue-700 underline font-bold">← All Sovereign Investments &amp; 54EC Bonds</a>
            <a href="/investment-schemes" class="text-blue-700 underline font-bold">Small Savings Schemes</a>
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

    const stateOpps = opportunityRepository.getPaginated({ page: 1, limit: 12, state: stateSlug }).items;
    const oppListHtml = stateOpps.length > 0 
      ? `<div class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-3">Key Development Projects &amp; Opportunities in ${escapeHtml(st.state)}</h2><ul class="space-y-3">${stateOpps.map(o => `<li><a href="/opportunities/${escapeHtml(o.slug || o.id)}" class="font-bold text-blue-800 underline">${escapeHtml(o.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(o.authority || '')} (${escapeHtml(o.sector || '')})</span></li>`).join('\n')}</ul></div>`
      : '';

    const servicesHtml = st.services && st.services.length > 0
      ? `<div class="mt-4"><h3 class="text-sm font-bold text-gray-700 uppercase">Verified Digital Citizen &amp; Business Services:</h3><ul class="list-disc pl-5 text-sm text-gray-700 mt-1">${st.services.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul></div>`
      : '';

    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/state/${stateSlug}`,
      title: `${st.state} Government Opportunities, Schemes & Official Portal | SarkarSaathi`,
      description: `Explore verified ${st.state} state development initiatives, tenders, startup grants, and open central government opportunities applicable to citizens in ${st.state}.`,
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <div class="text-xs font-semibold text-emerald-700 uppercase">Verified State Governance Directory · ${escapeHtml(st.type || 'State')}</div>
          <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(st.state)} Government Investment &amp; Development Opportunities</h1>
          <p class="text-gray-700 leading-relaxed">${escapeHtml(st.description || '')}</p>
          <p class="text-sm">Official State Portal: <a href="${escapeHtml(st.officialUrl || '')}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">${escapeHtml(st.name)} (.gov.in)</a></p>
          ${servicesHtml}
          ${oppListHtml}
          <div class="pt-4 border-t border-gray-100 mt-6 flex gap-4 text-sm font-medium">
            <a href="/opportunities" class="text-blue-700 underline">← All Opportunities</a>
            <a href="/subsidies" class="text-blue-700 underline">State &amp; Central Subsidies</a>
            <a href="/official-sources" class="text-blue-700 underline">Official Portals Directory</a>
          </div>
        </article>`,
    });
    generatedCount++;
  }

  const allSectorRoutes = Array.from(new Set([
    ...SECTOR_ROUTES,
    'it-ites-technology-parks',
    'renewable-energy-solar'
  ]));

  for (const sec of allSectorRoutes) {
    let secLabel = sec.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    if (sec === 'it-ites-technology-parks') secLabel = 'IT, ITeS & Technology Parks';
    if (sec === 'renewable-energy-solar') secLabel = 'Renewable Energy & Solar';

    const secOpps = opportunityRepository.getPaginated({ page: 1, limit: 12, sector: sec }).items;
    const oppListHtml = secOpps.length > 0 
      ? `<div class="mt-6"><h2 class="text-lg font-bold text-gray-900 mb-3">Verified ${escapeHtml(secLabel)} Opportunities &amp; Projects (${secOpps.length}+)</h2><ul class="space-y-3">${secOpps.map(o => `<li><a href="/opportunities/${escapeHtml(o.slug || o.id)}" class="font-bold text-blue-800 underline">${escapeHtml(o.title)}</a> — <span class="text-sm text-gray-600">${escapeHtml(o.authority || '')} (${escapeHtml(o.state || 'India')})</span></li>`).join('\n')}</ul></div>`
      : '';

    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/sector/${sec}`,
      title: `${secLabel} Sector Investment Opportunities & Fellowships | SarkarSaathi`,
      description: `Browse verified government opportunities, tenders, fellowships, and startup grants in the ${secLabel} sector across India.`,
      bodyHtml: `
        <article class="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
          <div class="text-xs font-semibold text-blue-700 uppercase">Sector Opportunity Directory</div>
          <h1 class="text-2xl font-bold text-gray-900">${escapeHtml(secLabel)} Investment &amp; Development Opportunities</h1>
          <p class="text-gray-700 leading-relaxed">Explore active Central and State government tenders, research grants, manufacturing corridors, and infrastructure initiatives in the ${escapeHtml(secLabel)} domain.</p>
          ${oppListHtml}
          <div class="pt-4 border-t border-gray-100 mt-6 flex gap-4 text-sm font-medium">
            <a href="/opportunities" class="text-blue-700 underline">← All Opportunities</a>
            <a href="/tenders" class="text-blue-700 underline">Public Tenders</a>
            <a href="/investments" class="text-blue-700 underline">Sovereign Investments</a>
          </div>
        </article>`,
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
    const cost = opp.totalProjectCost || opp.fundingAmount || 'As per project notification';
    const loc = [opp.district, opp.location, opp.state].filter(Boolean).join(', ') || 'India';
    const statusVal = opp.projectStatus || opp.projectStage || 'Active';
    const sectorVal = [opp.sector, opp.subSector].filter(Boolean).join(' · ') || 'Development & Infrastructure';

    writeRouteHtml(templateHtml, {
      routePath: `/opportunities/${slug}`,
      title: `${opp.title} (${opp.state || 'India'}) — Project Details, Outlay & Authority | SarkarSaathi`,
      description: `${opp.title} in ${loc} (${sectorVal}): Nodal Authority: ${opp.authority || 'Government of India'}. Outlay: ${cost}. Status: ${statusVal}. Check participation procedure and official source link.`,
      ogType: 'article',
      bodyHtml: `
        <article class="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div class="text-xs font-semibold text-blue-700 uppercase tracking-wide">Government Opportunity · ${escapeHtml(sectorVal)} · ${escapeHtml(statusVal)}</div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900">${escapeHtml(opp.title)}</h1>
          <p class="text-base text-gray-700 leading-relaxed">${escapeHtml(opp.description || '')}</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Project Outlay</span><strong class="text-gray-900">${escapeHtml(cost)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Location / State</span><strong class="text-gray-900">${escapeHtml(loc)}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Implementing Agency</span><strong class="text-gray-900">${escapeHtml(opp.authority || 'Government of India')}</strong></div>
            <div><span class="block text-xs font-bold text-gray-500 uppercase">Status / Stage</span><strong class="text-emerald-800">${escapeHtml(statusVal)}</strong></div>
          </div>

          ${opp.infrastructureDetails ? `
          <section class="mt-4">
            <h2 class="text-lg font-bold text-gray-900 mb-1">Infrastructure &amp; Project Scope</h2>
            <p class="text-sm text-gray-700 leading-relaxed">${escapeHtml(opp.infrastructureDetails)}</p>
          </section>` : ''}

          ${opp.participationProcess && opp.participationProcess.length > 0 ? `
          <section class="mt-4">
            <h2 class="text-lg font-bold text-gray-900 mb-1">Participation &amp; Application Procedure</h2>
            <ol class="list-decimal pl-5 text-sm text-gray-700 space-y-1">${opp.participationProcess.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ol>
          </section>` : ''}

          <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm">
            <span class="font-bold text-blue-900">Official Source Citation: </span>
            <a href="${escapeHtml(opp.sourceUrl || '#')}" class="text-blue-700 font-bold underline" target="_blank" rel="noopener noreferrer">${escapeHtml(opp.sourceAuthority || opp.sourceName || 'Official Portal')}</a>
          </div>

          <div class="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-medium">
            <a href="/opportunities" class="text-blue-700 underline font-bold">← All Opportunities</a>
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
