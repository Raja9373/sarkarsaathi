import React from 'react';
import { OfficialSourceRegistry } from '../infrastructure/sources/OfficialSourceRegistry';
import { Building2, ShieldCheck, ExternalLink, ArrowRight, Landmark, FileText, Briefcase, Newspaper, Layers } from 'lucide-react';

interface OfficialSourcesHubProps {
  onNavigate?: (tab: string) => void;
}

export const OfficialSourcesHub: React.FC<OfficialSourcesHubProps> = ({ onNavigate }) => {
  const regulators = OfficialSourceRegistry.filter(s => s.authorityType === 'REGULATOR');
  const ministries = OfficialSourceRegistry.filter(s => s.authorityType === 'MINISTRY');
  const departmentsAndPsus = OfficialSourceRegistry.filter(s => s.authorityType === 'DEPARTMENT' || s.authorityType === 'PSU');

  const navigationCards = [
    { title: 'Investments Hub', desc: 'Browse government-backed investment schemes & savings instruments.', tab: 'investments', icon: Landmark },
    { title: 'Opportunities Hub', desc: 'Explore career, skilling, and entrepreneurial opportunities.', tab: 'opportunities', icon: Briefcase },
    { title: 'Tenders Hub', desc: 'View public procurement notices and government tenders.', tab: 'tenders', icon: FileText },
    { title: 'News & Updates', desc: 'Stay updated with verified policy announcements.', tab: 'news', icon: Newspaper },
    { title: 'Investment Schemes', desc: 'Comprehensive guide to central and state welfare schemes.', tab: 'investment-schemes', icon: Layers },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-12">
      {/* Header & Distinction Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Transparency & Official Registry
        </div>
        <h1 className="text-4xl font-black text-white">Official Data Sources & Governance</h1>
        <p className="text-zinc-400 max-w-3xl leading-relaxed">
          SarkarSaathi aggregates verified information directly from authoritative government registries and portals. Below is the complete directory of official government regulators, ministries, and departments referenced across our platform.
        </p>

        {/* SarkarSaathi Distinction Notice */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-zinc-300">
          <div className="p-3 bg-[#FF6B00]/20 text-[#FF6B00] rounded-xl shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base mb-1">Independent Informational Platform Notice</h3>
            <p className="text-zinc-400">
              <strong className="text-white">SarkarSaathi is an independent informational platform</strong> and is not a government department, ministry, or official agency. We do not process applications or issue government benefits directly. All official actions, financial transactions, and applications take place solely on the official government portals linked below.
            </p>
          </div>
        </div>
      </div>

      {/* Useful Navigation Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Explore Platform Hubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {navigationCards.map(card => {
            const Icon = card.icon;
            return (
              <button
                key={card.tab}
                onClick={() => onNavigate && onNavigate(card.tab)}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-5 rounded-xl text-left transition flex items-start justify-between group"
              >
                <div className="space-y-1">
                  <div className="p-2.5 bg-zinc-800 group-hover:bg-[#FF6B00]/20 text-[#FF6B00] rounded-lg w-fit transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base pt-2">{card.title}</h3>
                  <p className="text-xs text-zinc-400">{card.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#FF6B00] transition mt-1" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Grouped Official Sources */}
      <div className="space-y-10">
        {/* Regulators */}
        {regulators.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Landmark className="w-6 h-6 text-[#FF6B00]" /> Financial Regulators & Apex Bodies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regulators.map(source => (
                <div key={source.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-lg font-bold text-white">{source.name}</h3>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        {source.verificationStatus}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">{source.authority} • {source.scope}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{source.description}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                    <span>Verified: {source.lastVerified}</span>
                    <a 
                      href={source.officialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#FF6B00] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Visit Official Portal <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ministries */}
        {ministries.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#FF6B00]" /> Central Government Ministries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map(source => (
                <div key={source.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-bold text-white">{source.name}</h3>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                        {source.verificationStatus}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">{source.authority}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{source.description}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                    <span>Verified: {source.lastVerified}</span>
                    <a 
                      href={source.officialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#FF6B00] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Official Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Departments and PSUs */}
        {departmentsAndPsus.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#FF6B00]" /> Government Departments & Public Sector Agencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentsAndPsus.map(source => (
                <div key={source.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-bold text-white">{source.name}</h3>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                        {source.verificationStatus}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">{source.authority}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{source.description}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                    <span>Verified: {source.lastVerified}</span>
                    <a 
                      href={source.officialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#FF6B00] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Official Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
