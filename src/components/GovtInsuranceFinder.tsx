import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Info,
  Sparkles,
  Award,
  Shield,
  Briefcase,
  Heart,
  Landmark,
  Layers
} from 'lucide-react';
import { 
  GOVT_INSURANCE_COMPANIES, 
  GovtInsuranceCompany, 
  getFilteredInsuranceCompanies 
} from '../data/insuranceData';

export const GovtInsuranceFinder: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Govt Insurers & Schemes' },
    { id: 'Life Insurance', label: 'Life Insurance (LIC / PLI)' },
    { id: 'General Insurance', label: 'General Insurance PSUs' },
    { id: 'Health Insurance Scheme', label: 'Govt Health & Social Security' },
    { id: 'Specialized & Agriculture', label: 'Crop & Export Credit' }
  ];

  const filteredCompanies = getFilteredInsuranceCompanies(selectedCategory, query);

  const handleCopyDetails = (item: GovtInsuranceCompany) => {
    const textToCopy = `${item.name} (${item.hindiName})\nCategory: ${item.category}\nOwnership: ${item.ownership}\nOfficial Website: ${item.officialWebsite}\nCustomer Portal: ${item.portalUrl}\nHelpline / Call Centre: ${item.helpline}\nHead Office: ${item.headOffice}\nDelhi Zonal / Regional Office: ${item.delhiOffice}\nKey Insurance Plans: ${item.keyProducts.join(', ')}\nClaim Process Summary: ${item.claimProcess}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_SEARCHES = [
    { label: 'LIC of India', q: 'LIC' },
    { label: 'New India Assurance (NIACL)', q: 'New India' },
    { label: 'Oriental Insurance (OICL)', q: 'Oriental' },
    { label: 'National Insurance (NICL)', q: 'National' },
    { label: 'United India (UIIC)', q: 'United' },
    { label: 'Postal Life Insurance (PLI)', q: 'Postal' },
    { label: 'ESIC Health Cover', q: 'ESIC' },
    { label: 'Ayushman Bharat (PM-JAY)', q: 'Ayushman' },
    { label: 'PMJJBY ₹2 Lakh Life Cover', q: 'PMJJBY' },
    { label: 'PM Fasal Bima (PMFBY)', q: 'Fasal' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-zinc-900 border border-blue-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-black text-white">Government Insurance Companies & Public Sector Undertakings (PSUs) Directory</h3>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold uppercase tracking-wide">
                DFS Ministry of Finance & IRDAI Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-1 max-w-3xl leading-relaxed">
              Complete official directory of Public Sector Insurance Companies (LIC, NIACL, OICL, NICL, UIIC, GIC Re, AICIL, ECGC), Postal Life Insurance (PLI), ESIC, and Govt Social Security Insurance Schemes (Ayushman Bharat, PMJJBY, PMSBY).
            </p>
          </div>
        </div>

        <a
          href="https://www.irdai.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition flex-shrink-0 self-start md:self-center"
        >
          <span>IRDAI Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                selectedCategory === cat.id 
                  ? 'bg-[#FF6B00] text-white shadow-md' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {cat.id === 'Life Insurance' && <Shield className="w-3.5 h-3.5" />}
              {cat.id === 'General Insurance' && <Building2 className="w-3.5 h-3.5" />}
              {cat.id === 'Health Insurance Scheme' && <Heart className="w-3.5 h-3.5" />}
              {cat.id === 'Specialized & Agriculture' && <Landmark className="w-3.5 h-3.5" />}
              {cat.id === 'all' && <Layers className="w-3.5 h-3.5" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Quick Example Searches */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-zinc-400 text-[11px]">Quick Search:</span>
          {QUICK_SEARCHES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(item.q)}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
          {query && (
            <button
              onClick={() => setQuery('')}
              className="px-2 py-1 rounded bg-zinc-800 text-amber-400 text-[10px] font-bold hover:bg-zinc-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Search Bar Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by insurance company name (e.g. LIC, New India), policy type, helpline, or scheme..."
            className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] transition"
          />
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1 pt-1 border-b border-zinc-800 pb-2">
        <span className="font-medium">
          Showing <strong className="text-white">{filteredCompanies.length}</strong> Government Insurers & Public Social Schemes
        </span>
        <span className="text-[11px] text-zinc-500 font-mono">100% Verified Government Organisations</span>
      </div>

      {/* Company Cards Grid */}
      {filteredCompanies.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredCompanies.map((item) => (
            <div 
              key={item.id} 
              className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-blue-500/50 transition shadow-xl space-y-4 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header Title & Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-extrabold bg-blue-950 text-blue-400 border border-blue-800">
                        {item.category}
                      </span>
                      {item.irdaRegistrationNo && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                          {item.irdaRegistrationNo}
                        </span>
                      )}
                      {item.isPopular && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold">
                          ★ Key Govt Insurer
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-black text-white group-hover:text-blue-300 transition leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-amber-400 font-medium">{item.hindiName}</p>
                  </div>

                  <button
                    onClick={() => handleCopyDetails(item)}
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-blue-950/80 border border-zinc-800 hover:border-blue-500/50 text-zinc-400 hover:text-white transition flex-shrink-0"
                    title="Copy Company Details & Portal Info"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Ownership Tag */}
                <p className="text-[11px] text-zinc-400 mt-2 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800/60">
                  <strong className="text-zinc-200">Structure & Ownership:</strong> {item.ownership}
                </p>

                {/* Key Policies & Plans */}
                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Key Insurance Plans / Schemes</span>
                  <ul className="grid grid-cols-1 gap-1 text-xs text-zinc-200">
                    {item.keyProducts.map((prod, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-zinc-200">{prod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div className="mt-3 space-y-1">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Key Highlights</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyFeatures.map((feat, fIdx) => (
                      <span key={fIdx} className="text-[11px] px-2 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800/80">
                        • {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Claim Process Box */}
                <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <FileText className="w-3 h-3 text-amber-400" /> Claim Settlement Process
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.claimProcess}</p>
                </div>

                {/* Addresses */}
                <div className="mt-3 space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">Head Office:</span>
                      <p className="text-zinc-300 text-[11px]">{item.headOffice}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">Delhi Zonal / Regional Office:</span>
                      <p className="text-zinc-300 text-[11px]">{item.delhiOffice}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions: Helpline & Portals */}
              <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-mono font-bold">{item.helpline}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={item.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-bold transition inline-flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>

                  <a
                    href={item.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold transition inline-flex items-center gap-1 shadow"
                  >
                    <span>Online Portal / Renewal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <p className="text-sm text-zinc-300 font-semibold">No government insurance company found for "{query}"</p>
          <p className="text-xs text-zinc-500 max-w-md mx-auto">
            Try searching for LIC, New India Assurance, Oriental Insurance, National Insurance, United India, PLI, ESIC, or Ayushman Bharat.
          </p>
          <button
            onClick={() => { setQuery(''); setSelectedCategory('all'); }}
            className="px-4 py-2 rounded-lg bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Verification Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-zinc-400">
            Public Sector Insurance Companies & Schemes verified against <strong className="text-zinc-200">Department of Financial Services (financialservices.gov.in) & IRDAI</strong>.
          </span>
        </div>
        <a
          href="https://financialservices.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>DFS Govt Insurance Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
