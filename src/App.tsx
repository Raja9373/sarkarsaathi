import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Navigation';
import { HomeView, GenericHubView, DetailView, ComparisonsView, ToolsView, OfficialSourcesView } from './components/Hubs';
import { SavedView, RecentlyViewedView } from './components/SavedAndRecent';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from './infrastructure/repositories/InvestmentRepository';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const parts = path.split('/').filter(Boolean);
      if (parts.length === 0) {
        setCurrentRoute('/');
        setSelectedSlug(null);
      } else if (parts.length === 1) {
        setCurrentRoute(`/${parts[0]}`);
        setSelectedSlug(null);
      } else if (parts.length === 2) {
        setCurrentRoute(`/${parts[0]}`);
        setSelectedSlug(parts[1]);
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: string, slug?: string) => {
    const fullPath = slug ? `${route}/${slug}` : route;
    window.history.pushState({}, '', fullPath);
    setCurrentRoute(route);
    setSelectedSlug(slug || null);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedSlug) {
      if (currentRoute === '/investments') {
        const item = investmentRepository.getBySlug(selectedSlug);
        return <DetailView item={item} type="Investments" onBack={() => navigate('/investments')} />;
      }
      if (currentRoute === '/investment-schemes') {
        const item = investmentSchemeRepository.getBySlug(selectedSlug);
        return <DetailView item={item} type="Investment Schemes" onBack={() => navigate('/investment-schemes')} />;
      }
      if (currentRoute === '/opportunities') {
        const item = opportunityRepository.getBySlug(selectedSlug);
        return <DetailView item={item} type="Opportunities" onBack={() => navigate('/opportunities')} />;
      }
      if (currentRoute === '/tenders') {
        const item = tenderRepository.getBySlug(selectedSlug);
        return <DetailView item={item} type="Tenders" onBack={() => navigate('/tenders')} />;
      }
      if (currentRoute === '/news') {
        const item = newsRepository.getBySlug(selectedSlug);
        return <DetailView item={item} type="News" onBack={() => navigate('/news')} />;
      }
    }

    switch (currentRoute) {
      case '/':
        return <HomeView onNavigate={navigate} />;
      case '/investments':
        return <GenericHubView title="Sovereign & Government Investments" type="investments" items={investmentRepository.getAll()} onNavigate={navigate} />;
      case '/investment-schemes':
        return <GenericHubView title="Government Investment Schemes" type="investment-schemes" items={investmentSchemeRepository.getAll()} onNavigate={navigate} />;
      case '/opportunities':
        return <GenericHubView title="Government Opportunities & Grants" type="opportunities" items={opportunityRepository.getAll()} onNavigate={navigate} />;
      case '/tenders':
        return <GenericHubView title="Government Tenders & Procurements" type="tenders" items={tenderRepository.getAll()} onNavigate={navigate} />;
      case '/news':
        return <GenericHubView title="Official Policy News & Releases" type="news" items={newsRepository.getAll()} onNavigate={navigate} />;
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
      default:
        return <HomeView onNavigate={navigate} />;
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
