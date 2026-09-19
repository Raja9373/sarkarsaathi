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
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from './infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from './infrastructure/repositories/SubsidyRepository';

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

const VALID_HUBS = ['/investments', '/investment-schemes', '/opportunities', '/tenders', '/news', '/subsidies'];

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
        return <OfficialSourcesView />;
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
