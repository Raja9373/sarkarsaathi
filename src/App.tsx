import React, { useState } from 'react';
import { Header } from './components/Header';
import { NewHomepageHero } from './components/NewHomepageHero';
import { HomepagePillars } from './components/HomepagePillars';
import { InvestmentCategories, OpportunitiesSection, TendersSection, InvestmentSchemesSection, TrustSection, HowItWorks } from './components/HomepageSections';
import { BlogHub } from './components/BlogHub';
import { ServicesFaqPage } from './components/ServicesFaqPage';
import { LegalPages } from './components/LegalPages';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';
import { ComparisonsHub } from './components/ComparisonsHub';
import { InvestmentsHub } from './components/InvestmentsHub';
import { InvestmentDetail } from './components/InvestmentDetail';
import { NewsHub } from './components/NewsHub';
import { NewsDetail } from './components/NewsDetail';
import { TendersHub } from './components/TendersHub';
import { TenderDetail } from './components/TenderDetail';
import { OpportunitiesHub } from './components/OpportunitiesHub';
import { OpportunityDetail } from './components/OpportunityDetail';
import { InvestmentSchemesHub } from './components/InvestmentSchemesHub';
import { InvestmentSchemeDetail } from './components/InvestmentSchemeDetail';
// ... existing imports

// ... existing imports
import { SEOHead } from './components/SEOHead';
import { VoiceSearchModal } from './components/VoiceSearchModal';
import { SitemapModal } from './components/SitemapModal';
import { BharatSaathiChatbot } from './components/BharatSaathiChatbot';

import { ActiveTab, ServiceItem, StateId } from './types';
import { SERVICES_LIST } from './data/servicesData';
import { BLOG_POSTS } from './data/blogData';
import { Mic } from 'lucide-react';

export default function App() {
  const [servicesData, setServicesData] = useState<ServiceItem[]>(SERVICES_LIST);
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currentStateId, setCurrentStateId] = useState<StateId>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [voiceSearchOpen, setVoiceSearchOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);

  const [selectedInvestmentSlug, setSelectedInvestmentSlug] = useState<string | null>(null);
  const [selectedNewsSlug, setSelectedNewsSlug] = useState<string | null>(null);
  const [selectedTenderSlug, setSelectedTenderSlug] = useState<string | null>(null);
  const [selectedOpportunitySlug, setSelectedOpportunitySlug] = useState<string | null>(null);
  const [selectedInvestmentSchemeSlug, setSelectedInvestmentSchemeSlug] = useState<string | null>(null);
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Synchronize URL path with activeTab and selected modal/service
  React.useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;

      if (!path || path === '/') {
        setActiveTab('home');
        return;
      }
      
      if (path === '/investments') {
        setActiveTab('investments');
      } else if (path.startsWith('/investments/')) {
        const slug = path.split('/')[2];
        if (slug) {
          setSelectedInvestmentSlug(slug);
          setActiveTab('investment-detail');
        } else {
          setActiveTab('investments');
        }
      } else if (path === '/news') {
        setActiveTab('news');
      } else if (path.startsWith('/news/')) {
        const slug = path.split('/')[2];
        if (slug) {
          setSelectedNewsSlug(slug);
          setActiveTab('news-detail');
        } else {
          setActiveTab('news');
        }
      } else if (path === '/tenders') {
        setActiveTab('tenders');
      } else if (path.startsWith('/tenders/')) {
        const slug = path.split('/')[2];
        if (slug) {
          setSelectedTenderSlug(slug);
          setActiveTab('tenders-detail');
        } else {
          setActiveTab('tenders');
        }
      } else if (path === '/opportunities') {
        setActiveTab('opportunities');
      } else if (path.startsWith('/opportunities/')) {
        const slug = path.split('/')[2];
        if (slug) {
          setSelectedOpportunitySlug(slug);
          setActiveTab('opportunities-detail');
        } else {
          setActiveTab('opportunities');
        }
      } else if (path === '/comparisons') {
        setActiveTab('comparisons');
      } else if (path === '/investment-schemes') {
        setActiveTab('investment-schemes');
      } else if (path.startsWith('/investment-schemes/')) {
        const slug = path.split('/')[2];
        if (slug) {
          setSelectedInvestmentSchemeSlug(slug);
          setActiveTab('investment-scheme-detail');
        } else {
          setActiveTab('investment-schemes');
        }
      } else if (['/about', '/contact', '/privacy', '/terms', '/disclaimer'].includes(path)) {
        setActiveTab('legal');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  const fontClass = fontSizeLevel === 1 ? 'text-[105%]' : fontSizeLevel === 2 ? 'text-[112%]' : fontSizeLevel === -1 ? 'text-[92%]' : '';

  return (
    <div className={`min-h-screen bg-[#0B0F17] text-zinc-100 font-sans selection:bg-[#FF6B00] selection:text-white ${fontClass} ${highContrast ? 'contrast-125' : ''}`}>
      <SEOHead activeService={null} />

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
          <div className="space-y-12 pb-12">
            <NewHomepageHero 
                onSearch={(query) => { console.log('Search:', query); setActiveTab('investments'); }}
                onNavigate={(tab) => setActiveTab(tab as ActiveTab)}
            />
            <HomepagePillars onNavigate={(tab) => setActiveTab(tab as ActiveTab)} />
            <InvestmentCategories />
            <OpportunitiesSection />
            <TendersSection />
            <InvestmentSchemesSection onNavigate={(tab) => setActiveTab(tab as ActiveTab)} />
            <HowItWorks />
            <TrustSection />
          </div>
        )}
        
        {activeTab === 'investments' && <InvestmentsHub />}
        {activeTab === 'investment-detail' && selectedInvestmentSlug && <InvestmentDetail slug={selectedInvestmentSlug} />}
        {activeTab === 'news' && <NewsHub />}
        {activeTab === 'news-detail' && selectedNewsSlug && <NewsDetail slug={selectedNewsSlug} />}
        {activeTab === 'tenders' && <TendersHub />}
        {activeTab === 'tenders-detail' && selectedTenderSlug && <TenderDetail slug={selectedTenderSlug} />}
        {activeTab === 'opportunities' && <OpportunitiesHub />}
        {activeTab === 'opportunities-detail' && selectedOpportunitySlug && <OpportunityDetail slug={selectedOpportunitySlug} />}
        {activeTab === 'investment-schemes' && <InvestmentSchemesHub />}
        {activeTab === 'investment-scheme-detail' && selectedInvestmentSchemeSlug && <InvestmentSchemeDetail slug={selectedInvestmentSchemeSlug} />}
        {activeTab === 'comparisons' && <ComparisonsHub />}
        {activeTab === 'legal' && <LegalPages />}
      </main>

      <Footer
        setActiveTab={setActiveTab}
        onOpenEmergency={() => setEmergencyOpen(true)}
        onSelectServiceById={() => {}}
        onSelectDeptById={() => {}}
        onOpenSitemap={() => setSitemapOpen(true)}
        currentStateId={currentStateId}
      />
    </div>
  );
}

