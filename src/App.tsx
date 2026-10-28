import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Navigation';
import { HomeView, GenericHubView, DetailView, ComparisonsView, ToolsView, OfficialSourcesView } from './components/Hubs';
import { SearchView } from './components/SearchView';
import { AboutPage, ContactPage, PrivacyPolicyPage, DisclaimerPage, TermsPage } from './components/LegalPages';
import { StateLandingView, SectorLandingView } from './components/HubsLanding';
import { SubsidyHubView, SubsidyDetailView } from './components/SubsidyViews';
import { SavedView, RecentlyViewedView } from './components/SavedAndRecent';
import { AdminImport } from './components/AdminImport';
import { NotFoundView } from './components/NotFoundView';
import { OfficialSourceDetailView } from './components/detail/OfficialSourceDetailView';
import { QuestionsHubView } from './components/QuestionsHubView';
import { QuestionDetailView } from './components/QuestionDetailView';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from './infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from './infrastructure/repositories/SubsidyRepository';
import { questionRepository } from './infrastructure/repositories/QuestionRepository';
import { getOfficialSourceBySlug } from './utils/officialSources';
import { 
  updateSEO, 
  injectStructuredData, 
  getInvestmentBreadcrumbSchema, 
  injectQuestionFaqSchema, 
  injectGovernmentServiceSchema,
  getHubOgImage,
  PRODUCTION_DOMAIN
} from './utils/seo';

const VALID_ROUTES = [
  '/',
  '/investments',
  '/investment-schemes',
  '/subsidies',
  '/opportunities',
  '/tenders',
  '/news',
  '/saved',
  '/recently-viewed',
  '/comparisons',
  '/tools',
  '/questions',
  '/official-sources',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms',
  '/admin/import',
  '/search'
];

const VALID_HUBS = ['/investments', '/investment-schemes', '/opportunities', '/tenders', '/news', '/subsidies', '/official-sources', '/questions'];

export default function App() {
  const getInitialRouteState = () => {
    if (typeof window === 'undefined') return { route: '/', slug: null };
    const path = window.location.pathname;
    if (path === '/') return { route: '/', slug: null };

    const parts = path.split('/').filter(Boolean);
    if (parts.length === 0) return { route: '/', slug: null };

    const root = `/${parts[0]}`;

    if (parts.length === 1) {
      if (VALID_ROUTES.includes(root) || root === '/search') {
        return { route: root, slug: null };
      }
      return { route: '/404', slug: null };
    }

    if (VALID_HUBS.includes(root)) {
      const slug = parts.slice(1).join('/');
      let exists = true;
      if (root === '/investments') exists = !!investmentRepository.getBySlug(slug);
      else if (root === '/investment-schemes') exists = !!investmentSchemeRepository.getBySlug(slug);
      else if (root === '/opportunities') {
        if (slug.startsWith('state/') || slug.startsWith('sector/')) exists = true;
        else exists = !!opportunityRepository.getBySlug(slug);
      }
      else if (root === '/tenders') exists = !!tenderRepository.getBySlug(slug);
      else if (root === '/news') exists = !!newsRepository.getBySlug(slug);
      else if (root === '/subsidies') exists = !!subsidyRepository.getBySlug(slug);
      else if (root === '/official-sources') exists = !!getOfficialSourceBySlug(slug);
      else if (root === '/questions') exists = !!questionRepository.getBySlug(slug);

      if (!exists) {
        return { route: '/404', slug: null };
      }
      return { route: root, slug };
    }

    if (root === '/schemes') {
      const slug = parts.slice(1).join('/');
      if (!slug) {
        return { route: '/investment-schemes', slug: null };
      }
      let targetSlug = slug;
      if (slug === 'pm-kisan') {
        targetSlug = 'pm-kisan-samman-nidhi';
      }
      if (subsidyRepository.getBySlug(targetSlug)) {
        return { route: '/subsidies', slug: targetSlug };
      }
      if (investmentSchemeRepository.getBySlug(targetSlug)) {
        return { route: '/investment-schemes', slug: targetSlug };
      }
    }

    if (root === '/search') {
      return { route: '/search', slug: null };
    }

    return { route: '/404', slug: null };
  };

  const initial = getInitialRouteState();
  const [currentRoute, setCurrentRoute] = useState(initial.route);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initial.slug);

  useEffect(() => {
    const handlePopState = () => {
      const initial = getInitialRouteState();
      setCurrentRoute(initial.route);
      setSelectedSlug(initial.slug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Normalize trailing slash or /index.html in browser address bar without reload
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname === '/index.html') {
        window.history.replaceState({}, '', '/' + window.location.search + window.location.hash);
      } else if (pathname !== '/' && pathname.endsWith('/')) {
        const clean = pathname.replace(/\/+$/, '') + window.location.search + window.location.hash;
        window.history.replaceState({}, '', clean);
      }
    }

    // Clean up structured data script tags if not on corresponding detail page
    if (typeof document !== 'undefined') {
      const existingBreadcrumb = document.getElementById('investment-breadcrumb-jsonld');
      if (existingBreadcrumb && (!selectedSlug || (currentRoute !== '/investments' && currentRoute !== '/investment-schemes'))) {
        existingBreadcrumb.remove();
      }
      const existingQuestionFaq = document.getElementById('question-faq-jsonld');
      if (existingQuestionFaq && (!selectedSlug || currentRoute !== '/questions')) {
        existingQuestionFaq.remove();
      }
      const existingSubsidyService = document.getElementById('subsidy-service-jsonld');
      if (existingSubsidyService && (!selectedSlug || currentRoute !== '/subsidies')) {
        existingSubsidyService.remove();
      }
    }

    if (currentRoute === '/404') {
      if (typeof document !== 'undefined') {
        document.getElementById('investment-breadcrumb-jsonld')?.remove();
        document.getElementById('question-faq-jsonld')?.remove();
        document.getElementById('subsidy-service-jsonld')?.remove();
      }
      updateSEO({
        title: 'Page Not Found - SarkarSaathi',
        description: 'The requested page could not be found on SarkarSaathi.',
        noIndex: true,
      });
      return;
    }

    if (selectedSlug) {
      if (currentRoute === '/investments') {
        const item = investmentRepository.getBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/investments/${selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${item.title} - Sovereign Investments, Interest & Tax Exemption | SarkarSaathi`,
            description: item.description 
              ? `${item.title}: ${item.description.slice(0, 130)}...`
              : `Explore ${item.title} sovereign backing, interest rates, Section 54EC / 80C tax exemption rules, 5-year lock-in period and official application guide.`,
            canonicalPath,
            keywords: `${item.title}, sovereign bonds, 54ec capital gains tax, rbi sovereign gold bonds, tax exemption india, sarkar saathi`,
            openGraph: {
              title: `${item.title} - Sovereign Investment & Tax Guide`,
              description: item.description || `Sovereign backed returns & capital gains tax exemptions. Explore interest rates, eligibility & verified details.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.title} - Sovereign Investment Guide`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          injectStructuredData(
            'investment-breadcrumb-jsonld',
            getInvestmentBreadcrumbSchema('investments', item.title, selectedSlug)
          );
          return;
        }
      } else if (currentRoute === '/investment-schemes') {
        const item = investmentSchemeRepository.getBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/investment-schemes/${selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${item.title} - Government Savings Scheme, Rates & Calculator | SarkarSaathi`,
            description: item.description 
              ? `${item.title}: ${item.description.slice(0, 130)}...`
              : `Complete guide for ${item.title}: interest rates, tenure, maturity calculations, tax benefits under Section 80C, and official post office application rules.`,
            canonicalPath,
            keywords: `${item.title}, small savings scheme, ppf, sukanya samriddhi, post office scheme, government savings india`,
            openGraph: {
              title: `${item.title} - Government Savings Scheme & Rates`,
              description: item.description || `Check interest rates, tenure, maturity calculations, and official application process on SarkarSaathi.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.title} - Government Savings Scheme`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          injectStructuredData(
            'investment-breadcrumb-jsonld',
            getInvestmentBreadcrumbSchema('investment-schemes', item.title, selectedSlug)
          );
          return;
        }
      } else if (currentRoute === '/opportunities') {
        if (selectedSlug.startsWith('state/')) {
          const state = selectedSlug.split('/')[1];
          const canonicalPath = `/opportunities/state/${state}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${state} Government Opportunities, Grants & Startup Schemes | SarkarSaathi`,
            description: `Browse verified government opportunities, tenders, innovation grants, and startup initiatives in ${state}. Verified from official portals.`,
            canonicalPath,
            keywords: `${state} government schemes, ${state} grants, ${state} startup opportunities, sarkarsaathi`,
            openGraph: {
              title: `${state} Government Opportunities & Grants Directory`,
              description: `Browse verified government opportunities, tenders, innovation grants, and startup initiatives in ${state}.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'website',
              image: ogImage,
              imageAlt: `${state} Government Opportunities`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          return;
        }
        if (selectedSlug.startsWith('sector/')) {
          const sector = selectedSlug.split('/')[1];
          const canonicalPath = `/opportunities/sector/${sector}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${sector} Sector Government Grants, Projects & Schemes | SarkarSaathi`,
            description: `Explore verified central and state public opportunities, development grants, and innovation funding in the ${sector} sector.`,
            canonicalPath,
            keywords: `${sector} government grants, ${sector} schemes, india innovation funding`,
            openGraph: {
              title: `${sector} Sector Government Grants & Opportunities`,
              description: `Explore verified central and state public opportunities, development grants, and innovation funding in ${sector}.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'website',
              image: ogImage,
              imageAlt: `${sector} Sector Opportunities`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          return;
        }
        const item = opportunityRepository.getBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/opportunities/${selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${item.title} - Government Opportunity & Grant | SarkarSaathi`,
            description: `Verified government opportunity: ${item.title}. Authority: ${item.authority || 'Government of India'}. Funding: ${item.fundingAmount || 'Check notice'}. Eligibility & apply guide.`,
            canonicalPath,
            keywords: `${item.title}, government grant, ${item.authority || 'govt of india'}, research fellowship, public opportunity`,
            openGraph: {
              title: `${item.title} - Government Grant & Opportunity`,
              description: `Funding: ${item.fundingAmount || 'Official Grant'}. Authority: ${item.authority || 'Govt of India'}. Full eligibility & apply link on SarkarSaathi.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.title} - Government Opportunity`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          return;
        }
      } else if (currentRoute === '/tenders') {
        const item = tenderRepository.getBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/tenders/${item.slug || item.tenderId || item.referenceNumber || selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          const tenderVal = item.tenderValue || item.estimatedValue || 'Check tender notice';
          updateSEO({
            title: `${item.title} - Official Tender Notice & Value | SarkarSaathi`,
            description: `Official government tender: ${item.title}. Authority: ${item.authority || 'Government of India'}. Value: ${tenderVal}. Deadline & bid details.`,
            canonicalPath,
            keywords: `${item.title}, government tender, gem portal tender, eprocurement india, public tender notice`,
            openGraph: {
              title: `${item.title} - Government Tender Notice`,
              description: `Estimated Value: ${tenderVal}. Issuing Authority: ${item.authority || 'Govt of India'}. Official procurement link on SarkarSaathi.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.title} - Tender Notice`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          return;
        }
      } else if (currentRoute === '/news') {
        const item = newsRepository.getBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/news/${item.slug || item.id || selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          const desc = item.description || item.whatHappened || item.title;
          updateSEO({
            title: `${item.title} - Official Policy News & Updates | SarkarSaathi`,
            description: desc.length > 155 ? `${desc.slice(0, 152)}...` : desc,
            canonicalPath,
            keywords: `${item.title}, government policy news, gazette notification, ministry updates`,
            openGraph: {
              title: `${item.title} - SarkarSaathi Policy News`,
              description: desc.length > 155 ? `${desc.slice(0, 152)}...` : desc,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.title} - Policy News`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          return;
        }
      } else if (currentRoute === '/subsidies') {
        const item = subsidyRepository.getBySlug(selectedSlug);
        if (item) {
          const isQuarantined = item.publicationState === 'QUARANTINED' || item.verificationStatus === 'UNVERIFIED';
          const canonicalPath = `/subsidies/${item.slug || item.id || selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          const benefit = item.maximumBenefit || item.benefits || item.benefitType || 'Government Subsidy';
          const authority = item.ministry || item.authority || 'Government of India';
          updateSEO({
            title: isQuarantined 
              ? `${item.title} (Under Review) - Government Subsidy | SarkarSaathi`
              : `${item.title} - Subsidy Amount, Eligibility & Apply Online | SarkarSaathi`,
            description: item.description 
              ? `${item.title}: ${item.description.slice(0, 130)}...`
              : `Official government subsidy scheme: ${item.title}. Benefit: ${benefit}. Authority: ${authority}. Check full eligibility and official application portal.`,
            canonicalPath,
            keywords: `${item.title}, government subsidy, ${item.category || 'subsidy'}, apply online, dbt bharat, ${authority}`,
            noIndex: isQuarantined,
            openGraph: {
              title: isQuarantined
                ? `${item.title} (Under Review)`
                : `${item.title} - Government Subsidy & Benefits`,
              description: `Benefit: ${benefit}. Implementing Ministry: ${authority}. Check verified eligibility criteria & official application portal on SarkarSaathi.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.title} - Government Subsidy`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          if (!isQuarantined) {
            injectGovernmentServiceSchema(item);
          }
          return;
        }
      } else if (currentRoute === '/official-sources') {
        const item = getOfficialSourceBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/official-sources/${selectedSlug}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${item.name} - Official Government Portal & Services | SarkarSaathi`,
            description: `${item.description} Access verified direct government links, digital citizen services, and related public schemes for ${item.authority}.`,
            canonicalPath,
            keywords: `${item.name}, ${item.authority}, official government portal, citizen digital services`,
            openGraph: {
              title: `${item.name} - Official Government Portal & Services`,
              description: `${item.description} Access verified direct government links and digital citizen services for ${item.authority}.`,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'website',
              image: ogImage,
              imageAlt: `${item.name} Official Portal`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          return;
        }
      } else if (currentRoute === '/questions') {
        const item = questionRepository.getBySlug(selectedSlug);
        if (item) {
          const canonicalPath = `/questions/${item.slug}`;
          const ogImage = getHubOgImage(canonicalPath);
          updateSEO({
            title: `${item.canonical_question} | SarkarSaathi Verified Q&A`,
            description: item.short_answer.length > 155 ? `${item.short_answer.slice(0, 152)}...` : item.short_answer,
            canonicalPath,
            keywords: `${item.canonical_question}, sarkarsaathi qa, government schemes faq, how to apply, eligibility rules`,
            openGraph: {
              title: `${item.canonical_question}`,
              description: item.short_answer.length > 155 ? `${item.short_answer.slice(0, 152)}...` : item.short_answer,
              url: `${PRODUCTION_DOMAIN}${canonicalPath}`,
              type: 'article',
              image: ogImage,
              imageAlt: `${item.canonical_question} - SarkarSaathi Verified Answer`,
              imageWidth: '1200',
              imageHeight: '630',
            },
          });
          injectQuestionFaqSchema(item);
          return;
        }
      }

      // If selectedSlug was provided but item does not exist, trigger genuine 404 SEO (no soft 404)
      if (typeof document !== 'undefined') {
        document.getElementById('investment-breadcrumb-jsonld')?.remove();
        document.getElementById('question-faq-jsonld')?.remove();
      }
      updateSEO({
        title: 'Page Not Found - SarkarSaathi',
        description: 'The requested page could not be found on SarkarSaathi.',
        canonicalPath: typeof window !== 'undefined' ? window.location.pathname : undefined,
        noIndex: true,
      });
      return;
    }

    interface RouteSEOConfig {
      title: string;
      description: string;
      keywords?: string;
      openGraph?: {
        title?: string;
        description?: string;
        image?: string;
        imageAlt?: string;
        imageWidth?: string;
        imageHeight?: string;
        type?: string;
      };
      noIndex?: boolean;
    }

    const ROUTE_SEO: Record<string, RouteSEOConfig> = {
      '/': {
        title: 'SarkarSaathi - Government Schemes, Subsidies, MSME Grants & Tenders in India',
        description: 'Independent information platform for verified central and state government schemes, PM Kisan, MSME subsidies, solar benefits, 54EC bonds, PPF, and public tenders.',
        keywords: 'sarkari yojana, pm kisan samman nidhi, ladli behna yojana, pm surya ghar muft bijli yojana, msme subsidy, 54ec capital gain bonds, tenders india, dbt bharat',
        openGraph: {
          title: 'SarkarSaathi - Verified Government Schemes, Subsidies & Public Tenders',
          description: 'Independent platform aggregating 11,200+ verified government schemes, subsidies, sovereign bonds, and tenders across India.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'SarkarSaathi - India Government Schemes and Subsidies Platform',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/subsidies': {
        title: 'Government Subsidies, Grants & Financial Incentives Directory | SarkarSaathi',
        description: 'Search and discover central and state government subsidies for agriculture, MSMEs, solar rooftop energy, EV mobility, housing, and manufacturing in India.',
        keywords: 'government subsidies india, agriculture subsidy, msme subsidy, solar rooftop subsidy, pm surya ghar, pmegp capital subsidy, dbt schemes',
        openGraph: {
          title: 'Government Subsidies, Grants & Financial Incentives - SarkarSaathi',
          description: 'Discover verified central and state subsidies for farmers, MSMEs, solar rooftop energy, and business grants.',
          image: `${PRODUCTION_DOMAIN}/og/subsidies.svg`,
          imageAlt: 'Government Subsidies & Benefits Directory',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/investments': {
        title: 'Sovereign Investments, 54EC Capital Gain Bonds & SGB | SarkarSaathi',
        description: 'Browse secure government-backed savings instruments, 54EC capital gain tax exemption bonds, Sovereign Gold Bonds, and sovereign investment options across India.',
        keywords: 'sovereign investments, 54ec capital gain bonds, rec 54ec bonds, pfc bonds, sovereign gold bonds sgb, tax exemption property sale',
        openGraph: {
          title: 'Sovereign Investments & 54EC Capital Gain Bonds - SarkarSaathi',
          description: 'Save capital gains tax with 54EC bonds (REC/PFC/NHAI) and explore Sovereign Gold Bonds with RBI backing.',
          image: `${PRODUCTION_DOMAIN}/og/investments.svg`,
          imageAlt: 'Sovereign Investments & Bonds Directory',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/investment-schemes': {
        title: 'Government Investment Schemes, PPF & Small Savings Rates | SarkarSaathi',
        description: 'Comprehensive catalogue of central and state government investment schemes, PPF, Sukanya Samriddhi, Senior Citizen Savings Scheme, and small savings plans.',
        keywords: 'government investment schemes, public provident fund ppf, sukanya samriddhi yojana ssy, senior citizen savings scheme scss, post office schemes',
        openGraph: {
          title: 'Government Investment Schemes & Small Savings - SarkarSaathi',
          description: 'Compare interest rates, tax benefits under Section 80C, and tenure for PPF, SSY, SCSS, and government savings schemes.',
          image: `${PRODUCTION_DOMAIN}/og/schemes.svg`,
          imageAlt: 'Government Savings Schemes Catalogue',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/tenders': {
        title: 'Government Tenders, GeM Portal Notices & Public Procurement | SarkarSaathi',
        description: 'Track official central and state government tenders, contracts, RFPs, and public procurement notices across India with verified EMD and bid details.',
        keywords: 'government tenders india, gem portal tenders, cppp eprocurement, central public procurement, state tenders',
        openGraph: {
          title: 'Government Tenders & Public Procurements - SarkarSaathi',
          description: 'Track official tenders from central ministries, state departments, and PSUs with verified tender values and deadlines.',
          image: `${PRODUCTION_DOMAIN}/og/tenders.svg`,
          imageAlt: 'Government Tenders & Public Procurements',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/opportunities': {
        title: 'Government Opportunities, Innovation Grants & Fellowships | SarkarSaathi',
        description: 'Verified directory of government opportunities, startup innovation grants, research fellowships, and public tenders across 36 Indian states and UTs.',
        keywords: 'government opportunities, startup grants india, research fellowships, birac grants, anrf core grants, innovation funding',
        openGraph: {
          title: 'Government Opportunities, Grants & Fellowships - SarkarSaathi',
          description: 'Explore research fellowships, startup grants, and public opportunities from BIRAC, ANRF, ICMR, and state departments.',
          image: `${PRODUCTION_DOMAIN}/og/opportunities.svg`,
          imageAlt: 'Government Opportunities & Grants',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/questions': {
        title: 'Questions & Verified Answers on Government Schemes | SarkarSaathi',
        description: 'Browse verified, fact-checked answers to essential citizen questions across government investments, small savings schemes, subsidies, and official portals.',
        keywords: 'government schemes faq, sarkari yojana questions answers, pm kisan status kaise check kare, solar subsidy apply kaise kare, sarkarsaathi qa',
        openGraph: {
          title: 'Questions & Verified Answers - SarkarSaathi',
          description: 'Get verified, multi-language answers to common questions about eligibility, application processes, and benefits for government schemes.',
          image: `${PRODUCTION_DOMAIN}/og/questions.svg`,
          imageAlt: 'Government Scheme Q&A',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/news': {
        title: 'Official Policy News, Notifications & Gazette Releases | SarkarSaathi',
        description: 'Latest verified announcements, policy notifications, and government releases aggregated from official ministries and statutory authorities.',
        keywords: 'government policy news, ministry announcements, gazette notifications india, dbt updates, economic policy releases',
        openGraph: {
          title: 'Official Policy News & Releases - SarkarSaathi',
          description: 'Latest policy notifications, scheme amendments, and official releases from central and state ministries.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'SarkarSaathi Policy News',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/comparisons': {
        title: 'Government Scheme Comparisons & Financial Analysis | SarkarSaathi',
        description: 'Compare sovereign investment schemes side-by-side: interest rates, lock-in periods, Section 80C / 54EC tax benefits, and risk ratings.',
        keywords: 'compare government schemes, ppf vs ssy, 54ec bonds comparison, tax saving investment compare',
        openGraph: {
          title: 'Scheme Comparisons & Financial Analysis - SarkarSaathi',
          description: 'Side-by-side comparison of interest rates, lock-in periods, and tax advantages of sovereign investment instruments.',
          image: `${PRODUCTION_DOMAIN}/og/investments.svg`,
          imageAlt: 'Government Scheme Comparisons',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/tools': {
        title: 'Government Scheme Calculators & Financial Tools | SarkarSaathi',
        description: 'Free financial calculators for PPF maturity, Sukanya Samriddhi returns, Senior Citizen Savings Scheme interest, NPS, and government bonds.',
        keywords: 'ppf calculator, sukanya samriddhi calculator, scss calculator, capital gain tax bond calculator, government returns calculator',
        openGraph: {
          title: 'Financial Tools & Scheme Calculators - SarkarSaathi',
          description: 'Calculate maturity values, interest payouts, and tax savings for PPF, SSY, SCSS, and 54EC bonds.',
          image: `${PRODUCTION_DOMAIN}/og/schemes.svg`,
          imageAlt: 'Financial Tools & Calculators',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/official-sources': {
        title: 'Official Government Sources & Portals Directory | SarkarSaathi',
        description: 'Verified directory of official central and state government portals, scheme registries, GeM, and citizen service digital endpoints.',
        keywords: 'official government portals india, myscheme portal, dbt bharat, gem portal, national scholarship portal, gov in directory',
        openGraph: {
          title: 'Official Government Sources & Portals - SarkarSaathi',
          description: 'Curated directory of authentic .gov.in portals, national scheme registries, and statutory government endpoints.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'Official Government Sources Directory',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/about': {
        title: 'About SarkarSaathi - Independent Public Information Platform',
        description: 'Learn about SarkarSaathi mission, methodology, transparency commitment, and our verification process for government public data.',
        openGraph: {
          title: 'About SarkarSaathi - Independent Public Information Platform',
          description: 'Learn about our mission to make verified government schemes, subsidies, and tenders accessible to every Indian citizen.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'About SarkarSaathi',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/contact': {
        title: 'Contact Us - SarkarSaathi Editorial & Verification Team',
        description: 'Get in touch with the SarkarSaathi editorial and verification team for inquiries, corrections, feedback, or official source suggestions.',
        openGraph: {
          title: 'Contact SarkarSaathi',
          description: 'Reach our editorial and verification team for inquiries, source suggestions, or data corrections.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'Contact SarkarSaathi',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/privacy-policy': {
        title: 'Privacy Policy - SarkarSaathi.org',
        description: 'Privacy policy and data protection disclosures for visitors to SarkarSaathi.org. We respect user privacy with zero tracking.',
        openGraph: {
          title: 'Privacy Policy - SarkarSaathi',
          description: 'Privacy policy and data protection disclosures for visitors to SarkarSaathi.org.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'Privacy Policy',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/disclaimer': {
        title: 'Disclaimer & Non-Affiliation - SarkarSaathi.org',
        description: 'Independent aggregator disclaimer and non-affiliation notice regarding official government data and statutory portals.',
        openGraph: {
          title: 'Disclaimer & Non-Affiliation - SarkarSaathi',
          description: 'Independent aggregator notice: SarkarSaathi.org is an independent information service not affiliated with any government body.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'Disclaimer',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/terms': {
        title: 'Terms of Service & Usage - SarkarSaathi.org',
        description: 'Terms of service and usage guidelines for visitors and users of the SarkarSaathi public information platform.',
        openGraph: {
          title: 'Terms of Service - SarkarSaathi',
          description: 'Terms of service and usage guidelines for SarkarSaathi.org.',
          image: `${PRODUCTION_DOMAIN}/og/home.svg`,
          imageAlt: 'Terms of Service',
          imageWidth: '1200',
          imageHeight: '630',
          type: 'website',
        },
      },
      '/search': {
        title: 'Search Verified Government Schemes & Tenders | SarkarSaathi',
        description: 'Search through thousands of verified government schemes, subsidies, public tenders, and sovereign investment options across India.',
        noIndex: true,
      },
      '/saved': {
        title: 'Saved Items - SarkarSaathi',
        description: 'Your bookmarked government schemes, subsidies, and opportunities.',
        noIndex: true,
      },
      '/recently-viewed': {
        title: 'Recently Viewed - SarkarSaathi',
        description: 'Your recently viewed schemes and opportunities on SarkarSaathi.',
        noIndex: true,
      },
      '/admin/import': {
        title: 'Admin Data Ingestion - SarkarSaathi',
        description: 'Administrative data import tool for SarkarSaathi.',
        noIndex: true,
      },
    };

    const config = ROUTE_SEO[currentRoute] || {
      title: 'SarkarSaathi - Government Schemes, Opportunities & Public Services',
      description: 'Independent information platform for verified government schemes, startup grants, research fellowships, and public opportunities.',
      image: `${PRODUCTION_DOMAIN}/og/home.svg`,
    };

    updateSEO({
      title: config.title,
      description: config.description,
      canonicalPath: currentRoute,
      keywords: config.keywords,
      openGraph: config.openGraph,
      noIndex: config.noIndex,
    });
  }, [currentRoute, selectedSlug]);

  const navigate = (route: string, slug?: string) => {
    let baseRoute = route;
    let itemSlug = slug || null;

    if (!itemSlug && baseRoute.startsWith('/') && baseRoute !== '/') {
      const parts = baseRoute.split('/').filter(Boolean);
      if (parts.length >= 2) {
        const root = `/${parts[0]}`;
        if (VALID_HUBS.includes(root)) {
          baseRoute = root;
          itemSlug = parts.slice(1).join('/');
        }
      }
    }

    const fullPath = itemSlug ? `${baseRoute}/${itemSlug}` : baseRoute;
    window.history.pushState({}, '', fullPath);
    
    // re-validate via getInitialRouteState logic or direct assignment
    const parts = fullPath.split('/').filter(Boolean);
    if (parts.length === 0) {
      setCurrentRoute('/');
      setSelectedSlug(null);
    } else {
      const root = `/${parts[0]}`;
      if (parts.length === 1) {
        if (VALID_ROUTES.includes(root) || root === '/search') {
          setCurrentRoute(root);
          setSelectedSlug(null);
        } else {
          setCurrentRoute('/404');
          setSelectedSlug(null);
        }
      } else if (VALID_HUBS.includes(root)) {
        let exists = true;
        if (root === '/investments') exists = !!investmentRepository.getBySlug(itemSlug || '');
        else if (root === '/investment-schemes') exists = !!investmentSchemeRepository.getBySlug(itemSlug || '');
        else if (root === '/opportunities') {
          if (itemSlug?.startsWith('state/') || itemSlug?.startsWith('sector/')) exists = true;
          else exists = !!opportunityRepository.getBySlug(itemSlug || '');
        }
        else if (root === '/tenders') exists = !!tenderRepository.getBySlug(itemSlug || '');
        else if (root === '/news') exists = !!newsRepository.getBySlug(itemSlug || '');
        else if (root === '/subsidies') exists = !!subsidyRepository.getBySlug(itemSlug || '');
        else if (root === '/official-sources') exists = !!getOfficialSourceBySlug(itemSlug || '');
        else if (root === '/questions') exists = !!questionRepository.getBySlug(itemSlug || '');

        if (!exists) {
          setCurrentRoute('/404');
          setSelectedSlug(null);
        } else {
          setCurrentRoute(root);
          setSelectedSlug(itemSlug);
        }
      } else if (root === '/schemes') {
        let targetSlug = itemSlug || '';
        if (targetSlug === 'pm-kisan') {
          targetSlug = 'pm-kisan-samman-nidhi';
        }
        if (subsidyRepository.getBySlug(targetSlug)) {
          setCurrentRoute('/subsidies');
          setSelectedSlug(targetSlug);
        } else if (investmentSchemeRepository.getBySlug(targetSlug)) {
          setCurrentRoute('/investment-schemes');
          setSelectedSlug(targetSlug);
        } else {
          setCurrentRoute('/404');
          setSelectedSlug(null);
        }
      } else {
        setCurrentRoute('/404');
        setSelectedSlug(null);
      }
    }
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedSlug) {
      if (currentRoute === '/investments') {
        const item = investmentRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        injectStructuredData(
          'investment-breadcrumb-jsonld',
          getInvestmentBreadcrumbSchema('investments', item.title, selectedSlug)
        );
        return <DetailView item={item} type="Investments" onBack={() => navigate('/investments')} onNavigateComparison={(slug) => navigate('/investments', slug)} />;
      }
      if (currentRoute === '/investment-schemes') {
        const item = investmentSchemeRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        injectStructuredData(
          'investment-breadcrumb-jsonld',
          getInvestmentBreadcrumbSchema('investment-schemes', item.title, selectedSlug)
        );
        return <DetailView item={item} type="Investment Schemes" onBack={() => navigate('/investment-schemes')} />;
      }
      if (currentRoute === '/opportunities') {
        if (selectedSlug?.startsWith('state/')) {
          const state = selectedSlug.split('/')[1];
          return <StateLandingView state={state} onNavigate={navigate} />;
        }
        if (selectedSlug?.startsWith('sector/')) {
          const sector = selectedSlug.split('/')[1];
          return <SectorLandingView sector={sector} onNavigate={navigate} />;
        }
        const item = opportunityRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        return <DetailView item={item} type="Opportunities" onBack={() => navigate('/opportunities')} />;
      }
      if (currentRoute === '/tenders') {
        const item = tenderRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        return <DetailView item={item} type="Tenders" onBack={() => navigate('/tenders')} />;
      }
      if (currentRoute === '/news') {
        const item = newsRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        return <DetailView item={item} type="News" onBack={() => navigate('/news')} />;
      }
      if (currentRoute === '/subsidies') {
        const item = subsidyRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        return <SubsidyDetailView item={item} onBack={() => navigate('/subsidies')} />;
      }
      if (currentRoute === '/official-sources') {
        const item = getOfficialSourceBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        return <OfficialSourceDetailView item={item} onNavigate={navigate} onBack={() => navigate('/official-sources')} />;
      }
      if (currentRoute === '/questions') {
        const item = questionRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
        injectQuestionFaqSchema(item);
        return <QuestionDetailView question={item} onNavigate={navigate} onBack={() => navigate('/questions')} />;
      }
    }

    switch (currentRoute) {
      case '/':
        return <HomeView onNavigate={navigate} />;
      case '/investments':
        return <GenericHubView title="Sovereign & Government Investments" type="investments" items={investmentRepository.getAll()} repository={investmentRepository} onNavigate={navigate} />;
      case '/investment-schemes':
        return <GenericHubView title="Government Investment Schemes" type="investment-schemes" items={investmentSchemeRepository.getAll()} repository={investmentSchemeRepository} onNavigate={navigate} />;
      case '/subsidies':
        return <SubsidyHubView onNavigate={navigate} />;
      case '/opportunities':
        return <GenericHubView title="Government Opportunities & Grants" type="opportunities" items={opportunityRepository.getAll()} repository={opportunityRepository} onNavigate={navigate} />;
      case '/tenders':
        return <GenericHubView title="Government Tenders & Procurements" type="tenders" items={tenderRepository.getAll()} repository={tenderRepository} onNavigate={navigate} />;
      case '/news':
        return <GenericHubView title="Official Policy News & Releases" type="news" items={newsRepository.getAll()} repository={newsRepository} onNavigate={navigate} />;
      case '/saved':
        return <SavedView onNavigate={navigate} />;
      case '/recently-viewed':
        return <RecentlyViewedView onNavigate={navigate} />;
      case '/comparisons':
        return <ComparisonsView onNavigate={navigate} />;
      case '/tools':
        return <ToolsView onNavigate={navigate} />;
      case '/questions':
        return <QuestionsHubView onNavigate={navigate} />;
      case '/official-sources':
        return <OfficialSourcesView onNavigate={navigate} />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/disclaimer':
        return <DisclaimerPage />;
      case '/terms':
        return <TermsPage />;
      case '/admin/import':
        return <AdminImport />;
      case '/404':
        return <NotFoundView onNavigate={navigate} />;
      default:
        if (currentRoute.startsWith('/search')) {
            const query = new URLSearchParams(window.location.search).get('q') || '';
            return <SearchView query={query} onNavigate={navigate} />;
        }
        return <NotFoundView onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
