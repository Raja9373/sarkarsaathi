import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { LifeEventsSection } from './components/LifeEventsSection';
import { BankingHub } from './components/BankingHub';
import { FindersHub } from './components/FindersHub';
import { StatusCheckHub } from './components/StatusCheckHub';
import { OnlineApplyHub } from './components/OnlineApplyHub';
import { PaymentsHub } from './components/PaymentsHub';
import { DownloadCentre } from './components/DownloadCentre';
import { CalculatorsHub } from './components/CalculatorsHub';
import { DelhiGovtHub } from './components/DelhiGovtHub';
import { ComplaintsHub } from './components/ComplaintsHub';
import { BlogHub } from './components/BlogHub';
import { ServicesFaqPage } from './components/ServicesFaqPage';
import { LegalPages } from './components/LegalPages';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';

// New Infrastructure Components
import { SEOHead } from './components/SEOHead';
import { VoiceSearchModal } from './components/VoiceSearchModal';
import { SitemapModal } from './components/SitemapModal';
import { SchemesHub } from './components/SchemesHub';
import { AutoUpdateSystem } from './components/AutoUpdateSystem';
import { StateNoticeBanner } from './components/StateNoticeBanner';
import { NewsTicker } from './components/NewsTicker';
import { SarkariNewsSection } from './components/SarkariNewsSection';
import { YojanaFinder } from './components/YojanaFinder';

import { ActiveTab, ServiceItem, StateId } from './types';
import { SERVICES_LIST } from './data/servicesData';
import { BLOG_POSTS } from './data/blogData';
import { STATES_LIST, getStateInfo } from './data/statesData';
import { ExternalLink, CheckCircle2, Search, ArrowRight, ShieldCheck, Sparkles, Mic, MapPin, RefreshCw } from 'lucide-react';


export default function App() {
  const [servicesData, setServicesData] = useState<ServiceItem[]>(SERVICES_LIST);
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currentStateId, setCurrentStateId] = useState<StateId>('delhi');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [voiceSearchOpen, setVoiceSearchOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);

  const [finderInitialId, setFinderInitialId] = useState<string>('govt-offices');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchFilterQuery, setSearchFilterQuery] = useState<string>('');
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Synchronize URL path with activeTab and selected modal/service
  React.useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      const stateParam = searchParams.get('state') as StateId;
      const typeParam = searchParams.get('type');

      if (stateParam) {
        setCurrentStateId(stateParam);
      }
      if (typeParam) {
        setFinderInitialId(typeParam);
      }

      if (!path || path === '/') {
        setActiveTab('home');
        return;
      }

      if (path.startsWith('/finder/') || path.startsWith('/finders')) {
        const parts = path.split('/');
        if (parts[2]) {
          setFinderInitialId(parts[2]);
        }
        setActiveTab('finders');
        return;
      }

      if (path.startsWith('/yojana/') || path.startsWith('/service/') || path.startsWith('/scheme/')) {
        const id = path.split('/')[2];
        const found = servicesData.find(s => s.id === id);
        if (found) {
          setSelectedService(found);
          setActiveTab('schemes');
        } else {
          setActiveTab('services');
        }
      } else if (path.startsWith('/blog/')) {
        setActiveTab('blog');
      } else if (path.startsWith('/faq/') || path === '/faqs') {
        setActiveTab('faqs');
      } else if (path.startsWith('/state/') || path === '/states') {
        const stateId = path.split('/')[2] as StateId;
        if (stateId) setCurrentStateId(stateId);
        setActiveTab('services');
      } else if (path === '/schemes' || path === '/find-yojana') {
        setActiveTab('schemes');
      } else if (path === '/services' || path === '/eligibility' || path === '/documents' || path === '/news') {
        setActiveTab('services');
      } else if (path === '/blog') {
        setActiveTab('blog');
      } else if (path === '/banking') {
        setActiveTab('banking');
      } else if (path === '/status-check') {
        setActiveTab('status-check');
      } else if (path === '/online-apply') {
        setActiveTab('online-apply');
      } else if (path === '/finders') {
        setActiveTab('finders');
      } else if (path === '/calculators') {
        setActiveTab('calculators');
      } else if (path === '/delhi-govt' || path.startsWith('/dept/') || path.startsWith('/department/')) {
        const deptId = path.split('/')[2];
        if (deptId) setSelectedDeptId(deptId);
        setActiveTab('delhi-govt');
      } else if (path === '/complaints') {
        setActiveTab('complaints');
      } else if (path === '/downloads') {
        setActiveTab('downloads');
      } else if (['/about', '/contact', '/contact-us', '/privacy', '/privacy-policy', '/terms', '/terms-of-service', '/disclaimer', '/disclaimer-policy'].includes(path)) {
        setActiveTab('legal');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, [servicesData]);

  const fontClass = fontSizeLevel === 1 ? 'text-[105%]' : fontSizeLevel === 2 ? 'text-[112%]' : fontSizeLevel === -1 ? 'text-[92%]' : '';

  const filteredServices = servicesData.filter(srv => {
    // State matching: National services match all states; Delhi matches delhi; specific states match specific ID or national
    const matchesState = currentStateId === 'national'
      ? true
      : (srv.state === 'all' || srv.state === 'national' || srv.state === currentStateId || (currentStateId === 'delhi' && srv.state === 'delhi'));

    const catLower = selectedCategoryFilter.toLowerCase();
    const matchesCat = selectedCategoryFilter === 'all' ||
      srv.category === selectedCategoryFilter ||
      (srv.secondaryCategories && srv.secondaryCategories.includes(selectedCategoryFilter)) ||
      srv.tags.some(t => t.toLowerCase() === catLower);
    const matchesSearch = searchFilterQuery === '' ||
      srv.title.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      srv.hindiTitle.includes(searchFilterQuery) ||
      srv.department.toLowerCase().includes(searchFilterQuery.toLowerCase()) ||
      srv.tags.some(t => t.toLowerCase().includes(searchFilterQuery.toLowerCase()));
    return matchesState && matchesCat && matchesSearch;
  });

  const handleSelectCategory = (catName: string) => {
    if (catName.toLowerCase().includes('yojana') || catName.toLowerCase().includes('scheme')) {
      setActiveTab('schemes');
    } else {
      setSelectedCategoryFilter(catName);
      setActiveTab('services');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchQueryFromHero = (query: string) => {
    setSearchFilterQuery(query);
    if (query.trim() !== '') {
      setActiveTab('services');
    }
  };

  const handleSelectRelatedService = (relatedId: string) => {
    const found = servicesData.find(s => s.id === relatedId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleSelectDept = (deptId: string) => {
    setSelectedDeptId(deptId);
    setActiveTab('delhi-govt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublishNewScheme = (newScheme: ServiceItem) => {
    setServicesData(prev => [newScheme, ...prev]);
    setSelectedService(newScheme);
  };

  const handleNavigateToFinder = (finderId: string) => {
    setFinderInitialId(finderId);
    setActiveTab('finders');
    const url = new URL(window.location.href);
    url.searchParams.set('state', currentStateId);
    url.searchParams.set('type', finderId);
    window.history.pushState({}, '', `${url.pathname}?${url.searchParams.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-zinc-100 font-sans selection:bg-[#FF6B00] selection:text-white ${fontClass} ${highContrast ? 'contrast-125' : ''}`}>
      {/* Enterprise SEO Metadata & JSON-LD Injection */}
      <SEOHead activeService={selectedService} />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentStateId={currentStateId}
        setCurrentStateId={setCurrentStateId}
        onOpenEmergency={() => setEmergencyOpen(true)}
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      {/* Real-time PIB & Sarkari News Ticker */}
      <NewsTicker currentStateId={currentStateId} />

      {/* State Active Context & Updating Notice Banner for non-Delhi states */}
      <StateNoticeBanner
        currentStateId={currentStateId}
        onChangeStateClick={() => {
          const btn = document.getElementById('state-selector-btn');
          if (btn) btn.click();
        }}
        onExploreSchemesClick={() => {
          setActiveTab('schemes');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className="min-h-[70vh]">
        {activeTab === 'home' && (
          <div>
            <HeroSection
              allServices={servicesData}
              onSelectService={(srv) => setSelectedService(srv)}
              onSearchQuery={handleSearchQueryFromHero}
              currentStateId={currentStateId}
              onOpenStateSelector={() => {
                const btn = document.getElementById('state-selector-btn');
                if (btn) btn.click();
              }}
              onNavigateToFinder={handleNavigateToFinder}
            />
            <CategoryGrid
              onSelectCategory={handleSelectCategory}
              setActiveTab={setActiveTab}
              onOpenEmergency={() => setEmergencyOpen(true)}
              onSelectGovtOffices={() => handleNavigateToFinder('govt-offices')}
              onSelectGovernmentFinders={() => handleNavigateToFinder('pincode')}
              currentStateId={currentStateId}
              onNavigateToFinder={handleNavigateToFinder}
            />
            <YojanaFinder
              currentStateId={currentStateId}
              onOpenStateSelector={() => {
                const btn = document.getElementById('state-selector-btn');
                if (btn) btn.click();
              }}
            />
            <SarkariNewsSection
              currentStateId={currentStateId}
              onViewAllNews={() => {
                setActiveTab('auto-update');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <LifeEventsSection />
            <BankingHub />
          </div>
        )}

        {activeTab === 'schemes' && (
          <div className="space-y-12">
            <YojanaFinder
              currentStateId={currentStateId}
              onOpenStateSelector={() => {
                const btn = document.getElementById('state-selector-btn');
                if (btn) btn.click();
              }}
            />
            <SchemesHub
              allServices={servicesData}
              onSelectScheme={(sch) => setSelectedService(sch)}
              onOpenVoiceSearch={() => setVoiceSearchOpen(true)}
              currentStateId={currentStateId}
            />
          </div>
        )}

        {activeTab === 'auto-update' && (
          <div className="space-y-12">
            <SarkariNewsSection currentStateId={currentStateId} />
            <AutoUpdateSystem
              existingServices={servicesData}
              onPublishNewScheme={handlePublishNewScheme}
              onViewService={(srv) => setSelectedService(srv)}
            />
          </div>
        )}

        {activeTab === 'services' && (
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-8 border-b border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Citizen Directory</span>
                <h2 className="text-3xl font-black text-white mt-1">Government Services Directory</h2>
              </div>
              <button
                onClick={() => setVoiceSearchOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 text-xs font-bold transition"
              >
                <Mic className="w-4 h-4 text-[#FF6B00]" />
                <span>Voice Search (बोलकर खोजें)</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchFilterQuery}
                  onChange={(e) => setSearchFilterQuery(e.target.value)}
                  placeholder="Filter by service name, e.g., Delhi Lakshmi, Driving License, PAN..."
                  className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition cursor-pointer space-y-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-[#FF6B00] uppercase px-2 py-0.5 rounded bg-zinc-900">
                      {srv.category}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      Official .gov.in
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition">{srv.title}</h3>
                  <p className="text-xs text-zinc-400">{srv.hindiTitle}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'life-events' && <LifeEventsSection />}
        {activeTab === 'banking' && <BankingHub />}
        {activeTab === 'finders' && <FindersHub initialFinderId={finderInitialId} currentStateId={currentStateId} />}
        {activeTab === 'status-check' && <StatusCheckHub />}
        {activeTab === 'online-apply' && <OnlineApplyHub />}
        {activeTab === 'payments' && <PaymentsHub />}
        {activeTab === 'downloads' && <DownloadCentre />}
        {activeTab === 'calculators' && <CalculatorsHub />}
        {activeTab === 'delhi-govt' && (
          <DelhiGovtHub
            initialDeptId={selectedDeptId}
            onResetDept={() => setSelectedDeptId(null)}
          />
        )}
        {activeTab === 'complaints' && <ComplaintsHub />}
        {activeTab === 'blog' && <BlogHub />}
        {activeTab === 'faqs' && <ServicesFaqPage />}
        {activeTab === 'legal' && <LegalPages />}
      </main>

      {/* Voice Search Modal */}
      <VoiceSearchModal
        isOpen={voiceSearchOpen}
        onClose={() => setVoiceSearchOpen(false)}
        onSearchResult={(spokenText) => {
          setSearchFilterQuery(spokenText);
          setActiveTab('services');
        }}
      />

      {/* Sitemap & Robots.txt Generator Modal */}
      <SitemapModal
        isOpen={sitemapOpen}
        onClose={() => setSitemapOpen(false)}
        allServices={servicesData}
        allBlogPosts={BLOG_POSTS}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectRelated={handleSelectRelatedService}
      />

      {/* Emergency Modal */}
      <EmergencyModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenEmergency={() => setEmergencyOpen(true)}
        onSelectServiceById={handleSelectRelatedService}
        onSelectDeptById={handleSelectDept}
        onOpenSitemap={() => setSitemapOpen(true)}
        currentStateId={currentStateId}
      />
    </div>
  );
}

