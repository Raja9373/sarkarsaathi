import React from 'react';
import { SchemaOrg } from '../components/common/SchemaOrg';
import { SearchBar } from '../components/common/SearchBar';
import { TrustBadges } from '../components/common/TrustBadges';
import { LIFE_EVENTS } from '../data/lifeEventsData';
import { SERVICES_DATABASE } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, HeartPulse, Building2, Car, Shield, FileText, Landmark, Calculator } from 'lucide-react';

export const Home = () => {
  const mainCategories = [
    { title: 'Identity & Documents', icon: FileText, count: '12 Services' },
    { title: 'Vehicles & Transport', icon: Car, count: '8 Services' },
    { title: 'Property & Housing', icon: Building2, count: '6 Services' },
    { title: 'Health & Medical', icon: HeartPulse, count: '10 Services' },
    { title: 'Banking & Schemes', icon: Landmark, count: '24 Services' },
    { title: 'Calculators & Tools', icon: Calculator, count: '10 Tools' },
  ];

  return (
    <div>
      <SchemaOrg 
        title="सभी सरकारी काम एक जगह, बिल्कुल फ्री | SarkarSaathi.org Delhi"
        description="Delhi Government Services, Official Links, Banking Guides, Finders, Calculators and Step-by-Step Help."
        canonicalUrl="https://sarkarsaathi.org/delhi"
      />

      {/* HERO SECTION */}
      <section className="pt-12 pb-8 px-4 text-center max-w-5xl mx-auto">
        <span className="inline-block bg-sarkar-orange/10 border border-sarkar-orange/30 text-sarkar-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          Delhi NCT Official Assistant • No Registration Needed
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          सभी सरकारी काम एक जगह, <span className="text-sarkar-orange">बिल्कुल फ्री</span>
        </h1>
        
        <p className="text-sarkar-textMuted text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          Delhi Government Services, Official Guides, Banking Guides, Official Links, Government Tools, Finders, Calculators and Step-by-Step Help.
        </p>

        {/* Smart Search */}
        <SearchBar />
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* LIFE EVENTS - MOST IMPORTANT FEATURE */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Life Events (जीवन के प्रमुख अवसर)</h2>
            <p className="text-xs sm:text-sm text-sarkar-textMuted">Select an event to view required government services, documents, and official links.</p>
          </div>
          <Link to="/delhi/life-events" className="text-xs sm:text-sm text-sarkar-orange font-semibold flex items-center hover:underline">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LIFE_EVENTS.map((evt) => (
            <div key={evt.id} className="bg-sarkar-card border border-sarkar-border p-5 rounded-xl hover:border-sarkar-orange/50 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">{evt.title}</h3>
              <p className="text-xs text-sarkar-textMuted mb-4">{evt.description}</p>
              
              <div className="space-y-1.5 mb-4">
                <span className="text-[11px] text-sarkar-orange font-bold uppercase tracking-wider">Services Required:</span>
                {evt.requiredServices.map((s, idx) => (
                  <div key={idx} className="text-xs text-sarkar-textLight flex items-center">
                    <span className="w-1.5 h-1.5 bg-sarkar-orange rounded-full mr-2"></span>
                    {s.name}
                  </div>
                ))}
              </div>

              <Link to={`/delhi/life-event/${evt.slug}`} className="inline-flex items-center text-xs font-bold text-sarkar-orange bg-sarkar-orange/10 px-3 py-1.5 rounded-lg border border-sarkar-orange/30 hover:bg-sarkar-orange hover:text-white transition-all">
                Open Checklist & Official Links <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {mainCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="bg-sarkar-card border border-sarkar-border p-4 rounded-xl text-center hover:border-sarkar-orange cursor-pointer transition-all">
                <Icon className="w-8 h-8 text-sarkar-orange mx-auto mb-2" />
                <h3 className="text-xs sm:text-sm font-semibold text-white">{cat.title}</h3>
                <span className="text-[10px] text-sarkar-textMuted">{cat.count}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED SERVICES DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Popular Delhi Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES_DATABASE.map((service) => (
            <div key={service.id} className="bg-sarkar-card border border-sarkar-border p-5 rounded-xl">
              <span className="text-[10px] text-sarkar-orange uppercase font-bold tracking-wider">{service.category}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{service.title}</h3>
              <p className="text-xs text-sarkar-textMuted line-clamp-2 mb-4">{service.overview}</p>
              
              <div className="flex items-center justify-between text-xs pt-3 border-t border-sarkar-border/50">
                <span className="text-sarkar-textMuted">Fee: <strong className="text-white">{service.fees}</strong></span>
                <Link to={`/delhi/service/${service.slug}`} className="text-sarkar-orange font-bold flex items-center hover:underline">
                  View Guide & Apply <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};