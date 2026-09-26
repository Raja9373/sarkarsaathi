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
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from './infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from './infrastructure/repositories/SubsidyRepository';
import { getOfficialSourceBySlug } from './utils/officialSources';
import { updateSEO } from './utils/seo';

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
  '/official-sources',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms',
  '/admin/import',
  '/search'
];

const VALID_HUBS = ['/investments', '/investment-schemes', '/opportunities', '/tenders', '/news', '/subsidies', '/official-sources'];

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

      if (!exists) {
        return { route: '/404', slug: null };
      }
      return { route: root, slug };
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

    if (currentRoute === '/404') {
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
          updateSEO({
            title: `${item.title} - Sovereign Investments | SarkarSaathi`,
            description: item.description || `Explore ${item.title} scheme details, interest rates, eligibility, and tax benefits on SarkarSaathi.`,
            canonicalPath: `/investments/${selectedSlug}`,
          });
          return;
        }
      } else if (currentRoute === '/investment-schemes') {
        const item = investmentSchemeRepository.getBySlug(selectedSlug);
        if (item) {
          updateSEO({
            title: `${item.title} - Government Investment Schemes | SarkarSaathi`,
            description: item.description || `Complete details, benefits, and eligibility criteria for ${item.title} on SarkarSaathi.`,
            canonicalPath: `/investment-schemes/${selectedSlug}`,
          });
          return;
        }
      } else if (currentRoute === '/opportunities') {
        if (selectedSlug.startsWith('state/')) {
          const state = selectedSlug.split('/')[1];
          updateSEO({
            title: `${state} Government Opportunities & Grants | SarkarSaathi`,
            description: `Browse verified government opportunities, tenders, schemes, and startup initiatives in ${state}.`,
            canonicalPath: `/opportunities/state/${state}`,
          });
          return;
        }
        if (selectedSlug.startsWith('sector/')) {
          const sector = selectedSlug.split('/')[1];
          updateSEO({
            title: `${sector} Opportunities & Grants | SarkarSaathi`,
            description: `Explore verified central and state public opportunities and grants in the ${sector} sector.`,
            canonicalPath: `/opportunities/sector/${sector}`,
          });
          return;
        }
        const item = opportunityRepository.getBySlug(selectedSlug);
        if (item) {
          updateSEO({
            title: `${item.title} - Government Opportunities | SarkarSaathi`,
            description: item.description || `Verified government opportunity: ${item.title}. Authority: ${item.authority || 'Government of India'}.`,
            canonicalPath: `/opportunities/${selectedSlug}`,
          });
          return;
        }
      } else if (currentRoute === '/tenders') {
        const item = tenderRepository.getBySlug(selectedSlug);
        if (item) {
          updateSEO({
            title: `${item.title} - Tender Details | SarkarSaathi`,
            description: `Official government tender: ${item.title}. Authority: ${item.authority || 'Government of India'}. Value: ${item.tenderValue || item.estimatedValue || 'Check tender notice'}.`,
            canonicalPath: `/tenders/${item.slug || item.tenderId || item.referenceNumber || selectedSlug}`,
          });
          return;
        }
      } else if (currentRoute === '/news') {
        const item = newsRepository.getBySlug(selectedSlug);
        if (item) {
          updateSEO({
            title: `${item.title} - SarkarSaathi Policy News`,
            description: item.description || item.whatHappened || item.title,
            canonicalPath: `/news/${item.slug || item.id || selectedSlug}`,
          });
          return;
        }
      } else if (currentRoute === '/subsidies') {
        const item = subsidyRepository.getBySlug(selectedSlug);
        if (item) {
          updateSEO({
            title: `${item.title} - Government Subsidy & Benefits | SarkarSaathi`,
            description: item.description || `Official government subsidy scheme: ${item.title}. Benefit: ${item.maximumBenefit || item.benefits || item.benefitType || 'Government Subsidy'}.`,
            canonicalPath: `/subsidies/${item.slug || item.id || selectedSlug}`,
          });
          return;
        }
      } else if (currentRoute === '/official-sources') {
        const item = getOfficialSourceBySlug(selectedSlug);
        if (item) {
          updateSEO({
            title: `${item.name} - Official Government Portal & Services | SarkarSaathi`,
            description: `${item.description} Access verified direct government links, digital citizen services, and related public schemes for ${item.authority}.`,
            canonicalPath: `/official-sources/${selectedSlug}`,
          });
          return;
        }
      }
    }

    const ROUTE_SEO: Record<string, { title: string; description: string; noIndex?: boolean }> = {
      '/': {
        title: 'SarkarSaathi - Government Schemes, Opportunities & Public Services',
        description: 'Independent information platform for verified government schemes, startup grants, research fellowships, and public opportunities.',
      },
      '/investments': {
        title: 'Sovereign & Government Investments - SarkarSaathi',
        description: 'Browse secure government-backed savings instruments, bonds, provident funds, and sovereign investment options across India.',
      },
      '/investment-schemes': {
        title: 'Government Investment Schemes & Savings - SarkarSaathi',
        description: 'Comprehensive catalogue of central and state government investment schemes, pension plans, and small savings options.',
      },
      '/subsidies': {
        title: 'Government Subsidies, Grants & Financial Incentives - SarkarSaathi',
        description: 'Search and discover central and state government subsidies for agriculture, MSMEs, solar energy, housing, and manufacturing.',
      },
      '/opportunities': {
        title: 'Government Opportunities, Grants & Fellowships - SarkarSaathi',
        description: 'Verified directory of government opportunities, innovation grants, research fellowships, and public tenders.',
      },
      '/tenders': {
        title: 'Government Tenders & Public Procurements - SarkarSaathi',
        description: 'Track official central and state government tenders, contracts, RFPs, and public procurement notices across India.',
      },
      '/news': {
        title: 'Official Policy News & Releases - SarkarSaathi',
        description: 'Latest verified announcements, policy notifications, and government releases aggregated from official ministries.',
      },
      '/comparisons': {
        title: 'Scheme Comparisons & Financial Analysis - SarkarSaathi',
        description: 'Compare sovereign investment schemes side-by-side: interest rates, lock-in periods, tax benefits, and risk ratings.',
      },
      '/tools': {
        title: 'Financial Tools & Scheme Calculators - SarkarSaathi',
        description: 'Free financial calculators for PPF, Sukanya Samriddhi, Senior Citizen Savings Scheme, NPS, and government returns.',
      },
      '/official-sources': {
        title: 'Official Government Sources & Portals - SarkarSaathi',
        description: 'Verified directory of official central and state government portals, scheme registries, and citizen service endpoints.',
      },
      '/about': {
        title: 'About SarkarSaathi - Independent Public Information Platform',
        description: 'Learn about SarkarSaathi mission, methodology, and commitment to transparency in public government information.',
      },
      '/contact': {
        title: 'Contact Us - SarkarSaathi',
        description: 'Get in touch with the SarkarSaathi editorial and verification team for inquiries, corrections, or source suggestions.',
      },
      '/privacy-policy': {
        title: 'Privacy Policy - SarkarSaathi',
        description: 'Privacy policy and data protection disclosures for visitors to SarkarSaathi.org.',
      },
      '/disclaimer': {
        title: 'Disclaimer & Non-Affiliation - SarkarSaathi',
        description: 'Independent aggregator disclaimer and non-affiliation notice regarding official government data.',
      },
      '/terms': {
        title: 'Terms of Service - SarkarSaathi',
        description: 'Terms of service and usage guidelines for the SarkarSaathi platform.',
      },
      '/search': {
        title: 'Search Schemes & Opportunities - SarkarSaathi',
        description: 'Search through thousands of government schemes, subsidies, tenders, and investment options.',
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
    };

    updateSEO({
      title: config.title,
      description: config.description,
      canonicalPath: currentRoute,
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
        setCurrentRoute(root);
        setSelectedSlug(itemSlug);
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
        return <DetailView item={item} type="Investments" onBack={() => navigate('/investments')} onNavigateComparison={(slug) => navigate('/investments', slug)} />;
      }
      if (currentRoute === '/investment-schemes') {
        const item = investmentSchemeRepository.getBySlug(selectedSlug);
        if (!item) return <NotFoundView onNavigate={navigate} />;
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
        return <ComparisonsView />;
      case '/tools':
        return <ToolsView />;
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
