import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
import { LegalPages } from './components/LegalPages';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';

import { ActiveTab, ServiceItem, StateId } from './types';
import { SERVICES_LIST } from './data/servicesData';
import { ExternalLink, CheckCircle2, Search, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';


export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currentStateId, setCurrentStateId] = useState<StateId>('delhi');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [finderInitialId, setFinderInitialId] = useState<string>('govt-offices');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchFilterQuery, setSearchFilterQuery] = useState<string>('');
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  const fontClass = fontSizeLevel === 1 ? 'text-[105%]' : fontSizeLevel === 2 ? 'text-[112%]' : fontSizeLevel === -1 ? 'text-[92%]' : '';

  const filteredServices = SERVICES_LIST.filter(srv => {
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
    return matchesCat && matchesSearch;
  });

  const handleSelectCategory = (catName: string) => {
    setSelectedCategoryFilter(catName);
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchQueryFromHero = (query: string) => {
    setSearchFilterQuery(query);
    if (query.trim() !== '') {
      setActiveTab('services');
    }
  };

  const handleSelectRelatedService = (relatedId: string) => {
    const found = SERVICES_LIST.find(s => s.id === relatedId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleSelectDept = (deptId: string) => {
    setSelectedDeptId(deptId);
    setActiveTab('delhi-govt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-zinc-100 font-sans selection:bg-[#FF6B00] selection:text-white ${fontClass} ${highContrast ? 'contrast-125' : ''}`}>
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

      <main className="min-h-[70vh]">
        {activeTab === 'home' && (
          <div>
            <HeroSection
              allServices={SERVICES_LIST}
              onSelectService={(srv) => setSelectedService(srv)}
              onSearchQuery={handleSearchQueryFromHero}
            />
            <CategoryGrid
              onSelectCategory={handleSelectCategory}
              setActiveTab={setActiveTab}
              onOpenEmergency={() => setEmergencyOpen(true)}
              onSelectGovtOffices={() => {
                setFinderInitialId('govt-offices');
                setActiveTab('finders');
              }}
              onSelectGovernmentFinders={() => {
                setFinderInitialId('govt-offices');
                setActiveTab('finders');
              }}
            />
            <LifeEventsSection />
            <BankingHub />
          </div>
        )}

        {activeTab === 'services' && (
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-8 border-b border-zinc-800 pb-6">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Citizen Directory</span>
              <h2 className="text-3xl font-black text-white mt-1">Government Services Directory</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchFilterQuery}
                  onChange={(e) => setSearchFilterQuery(e.target.value)}
                  placeholder="Filter by service name..."
                  className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition cursor-pointer"
                >
                  <h3 className="text-base font-bold text-white">{srv.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{srv.hindiTitle}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'life-events' && <LifeEventsSection />}
        {activeTab === 'banking' && <BankingHub />}
        {activeTab === 'finders' && <FindersHub initialFinderId={finderInitialId} />}
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
        {activeTab === 'legal' && <LegalPages />}
      </main>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectRelated={handleSelectRelatedService}
      />

      <EmergencyModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />

      <Footer
        setActiveTab={setActiveTab}
        onOpenEmergency={() => setEmergencyOpen(true)}
        onSelectServiceById={handleSelectRelatedService}
        onSelectDeptById={handleSelectDept}
      />
      <Analytics />
    </div>
  );
}
