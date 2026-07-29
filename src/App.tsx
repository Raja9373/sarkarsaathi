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

  // Finder Initial Selection state
  const [finderInitialId, setFinderInitialId] = useState<string>('govt-offices');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

  // Search & Filter state
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchFilterQuery, setSearchFilterQuery] = useState<string>('');

  // Accessibility state
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  const fontClass = fontSizeLevel === 1 ? 'text-[105%]' : fontSizeLevel === 2 ? 'text-[112%]' : fontSizeLevel === -1 ? 'text-[92%]' : '';

  const filteredServices = SERVICES_LIST.filter(srv => {
    const catLower = selectedCategoryFilter.toLowerCase();
    const matchesCat = selectedCategoryFilter === 'all' ||
      srv.category === selectedCategoryFilter ||
      (srv.secondaryCategories && srv.secondaryCategories.includes(selectedCategoryFilter)) ||
      srv.tags.some(t => t.toLowerCase() === catLower) ||
      (catLower === 'renewal' && (
        srv.category === 'Renewal' ||
        (srv.secondaryCategories && srv.secondaryCategories.includes('Renewal')) ||
        srv.tags.some(t => t.toLowerCase().includes('renew') || t.toLowerCase().includes('re-issue') || t.toLowerCase().includes('reissue')) ||
        srv.title.toLowerCase().includes('renew') ||
        srv.title.toLowerCase().includes('re-issue') ||
        srv.shortDesc.toLowerCase().includes('renew')
      )) ||
      (catLower === 'corrections' && (
        srv.category === 'Corrections' ||
        (srv.secondaryCategories && srv.secondaryCategories.includes('Corrections')) ||
        srv.tags.some(t => t.toLowerCase().includes('correct') || t.toLowerCase().includes('update') || t.toLowerCase().includes('change') || t.toLowerCase().includes('rectif')) ||
        srv.title.toLowerCase().includes('correction') ||
        srv.title.toLowerCase().includes('update')
      )) ||
      (catLower === 'rti' && (
        srv.category === 'RTI' ||
        (srv.secondaryCategories && srv.secondaryCategories.includes('RTI')) ||
        srv.tags.some(t => t.toLowerCase().includes('rti')) ||
        srv.title.toLowerCase().includes('rti')
      )) ||
      (catLower === 'family services' && (srv.category === 'Family Services' || srv.tags.some(t => t.toLowerCase().includes('family') || t.toLowerCase().includes('ration') || t.toLowerCase().includes('marriage') || t.toLowerCase().includes('ladli')))) ||
      (catLower === 'health' && (srv.category === 'Health' || srv.category === 'Healthcare & Medical' || (srv.secondaryCategories && (srv.secondaryCategories.includes('Health') || srv.secondaryCategories.includes('Healthcare & Medical'))) || srv.tags.some(t => t.toLowerCase().includes('health') || t.toLowerCase().includes('hospital') || t.toLowerCase().includes('medical') || t.toLowerCase().includes('arogya')))) ||
      (catLower === 'business' && (srv.category === 'Business' || (srv.secondaryCategories && srv.secondaryCategories.includes('Business')) || srv.tags.some(t => t.toLowerCase().includes('business') || t.toLowerCase().includes('gst') || t.toLowerCase().includes('msme') || t.toLowerCase().includes('company')))) ||
      ((catLower === 'police & legal' || catLower.includes('police') || catLower.includes('legal')) && (
        srv.category === 'Police & Legal' ||
        srv.category.toLowerCase().includes('police') ||
        srv.category.toLowerCase().includes('legal') ||
        (srv.secondaryCategories && srv.secondaryCategories.some(c => c.toLowerCase().includes('police') || c.toLowerCase().includes('legal'))) ||
        srv.tags.some(t => t.toLowerCase().includes('police') || t.toLowerCase().includes('pcc') || t.toLowerCase().includes('fir') || t.toLowerCase().includes('court') || t.toLowerCase().includes('legal') || t.toLowerCase().includes('challan') || t.toLowerCase().includes('arms')) ||
        srv.department.toLowerCase().includes('police') ||
        srv.department.toLowerCase().includes('court')
      )) ||
      ((catLower === 'complaints' || catLower.includes('complaint') || catLower.includes('grievance')) && (
        srv.category === 'Complaints' ||
        (srv.secondaryCategories && srv.secondaryCategories.some(c => c.toLowerCase().includes('complaint') || c.toLowerCase().includes('grievance'))) ||
        srv.tags.some(t => t.toLowerCase().includes('complaint') || t.toLowerCase().includes('grievance') || t.toLowerCase().includes('pgms') || t.toLowerCase().includes('cpgrams') || t.toLowerCase().includes('1031') || t.toLowerCase().includes('mcd 311'))
      ));

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
      {/* Header Bar */}
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

      {/* Main Tab Router View */}
      <main className="min-h-[70vh]">
        {activeTab === 'home' && (
          <div>
            {/* Large Hero Banner */}
            <HeroSection
              allServices={SERVICES_LIST}
              onSelectService={(srv) => setSelectedService(srv)}
              onSearchQuery={handleSearchQueryFromHero}
            />

            {/* Main Categories Grid */}
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

            {/* Featured Popular Services Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto border-t border-zinc-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Fast Access Portals</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Popular Delhi & Central Services</h2>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
                >
                  View All Services ({SERVICES_LIST.length}) <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES_LIST.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition cursor-pointer space-y-3 flex flex-col justify-between shadow-xl group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800">
                          {srv.category}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> .gov.in Verified
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition">{srv.title}</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{srv.hindiTitle}</p>
                      <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">{srv.shortDesc}</p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                      <span className="text-zinc-400 font-semibold">{srv.fees}</span>
                      <span className="font-bold text-[#FF6B00] group-hover:translate-x-1 transition flex items-center gap-1">
                        Step-by-Step Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Life Events Featured Section */}
            <LifeEventsSection />

            {/* Banking Hub Section */}
            <BankingHub />
          </div>
        )}

        {activeTab === 'services' && (
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-8 border-b border-zinc-800 pb-6">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Citizen Directory</span>
              <h2 className="text-3xl font-black text-white mt-1">Government Services Directory</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Step-by-step guides, required document lists, and official .gov.in links.
              </p>
            </div>

            {/* Filter Search Input */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchFilterQuery}
                  onChange={(e) => setSearchFilterQuery(e.target.value)}
                  placeholder="Filter by service name, Aadhaar, PAN, Passport, MCD..."
                  className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              {selectedCategoryFilter !== 'all' && (
                <button
                  onClick={() => setSelectedCategoryFilter('all')}
                  className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white"
                >
                  Clear Category Filter ({selectedCategoryFilter})
                </button>
              )}
            </div>

            {filteredServices.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-[#121824] border border-zinc-800 space-y-4 max-w-lg mx-auto my-8">
                <Search className="w-10 h-10 text-zinc-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No Direct Services Found</h3>
                <p className="text-xs text-zinc-400">
                  No directory entries match your current search criteria or category filter. Try clearing filters or searching for terms like Aadhaar, Property Tax, Licence, or DDA.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setSearchFilterQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition"
                >
                  View All Government Services
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition cursor-pointer space-y-3 flex flex-col justify-between shadow-xl group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800">
                          {srv.category}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> .gov.in Verified
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition">{srv.title}</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{srv.hindiTitle}</p>
                      <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{srv.shortDesc}</p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                      <span className="text-zinc-400 font-semibold">{srv.fees}</span>
                      <span className="font-bold text-[#FF6B00] group-hover:translate-x-1 transition flex items-center gap-1">
                        View Procedure <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'categories' && (
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

      {/* In-Depth Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectRelated={handleSelectRelatedService}
      />

      {/* Emergency Helplines Modal */}
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
      />
    </div>
  );
}
