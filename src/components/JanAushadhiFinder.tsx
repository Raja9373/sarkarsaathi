import React, { useState } from 'react';
import { 
  Pill, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Info,
  Sparkles,
  HeartPulse,
  ShoppingBag,
  Award
} from 'lucide-react';
import { 
  DELHI_JAN_AUSHADHI_DISTRICTS, 
  getMatchingJanAushadhiKendras, 
  JanAushadhiKendraItem 
} from '../data/janAushadhiData';

export const JanAushadhiFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const kendras = getMatchingJanAushadhiKendras(selectedDistrict, query);

  const handleCopyKendraDetails = (kendra: JanAushadhiKendraItem) => {
    const textToCopy = `${kendra.name} (${kendra.kendraCode})\nOperator: ${kendra.operatorName || 'PMBJP Certified Pharmacist'}\nDistrict: ${kendra.district}\nAddress: ${kendra.address} - ${kendra.pincode}\nLandmark: ${kendra.landmark}\nTimings: ${kendra.timings}\nPhone/Helpline: ${kendra.phone}\nAvailable Generic Medicines: ~${kendra.medicinesAvailableCount || 1800}+ items`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(kendra.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_LOCATIONS = [
    { label: 'AIIMS OPD (24x7)', q: 'AIIMS' },
    { label: 'LNJP Hospital', q: 'LNJP' },
    { label: 'RML Hospital (24x7)', q: 'RML' },
    { label: 'Safdarjung Hospital', q: 'Safdarjung' },
    { label: 'GTB Hospital Shahdara', q: 'GTB' },
    { label: 'Connaught Place', q: 'Connaught' },
    { label: 'Karol Bagh', q: 'Karol Bagh' },
    { label: 'Dwarka Sec 12', q: 'Dwarka' },
    { label: 'Rohini Sec 7', q: 'Rohini' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-zinc-900 border border-emerald-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Pradhan Mantri Bharatiya Janaushadhi Kendra (PMBJP) Finder</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                PMBI Govt of India Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate official Pradhan Mantri Jan Aushadhi generic medicine stores across Delhi NCT & NCR for high-quality generic medicines & surgical items at 50% to 90% lower prices compared to branded medicines.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://janaushadhi.gov.in/locate-kendra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Official PMBJP Store Locator</span>
          </a>
          <a
            href="tel:18001808080"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-emerald-400 border border-emerald-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Toll-Free 1800-180-8080</span>
          </a>
        </div>
      </div>

      {/* Benefits Advisory Box */}
      <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-start gap-3 text-xs">
        <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-emerald-200">
            Key Highlights of PM Jan Aushadhi Generic Medicine Kendras:
          </p>
          <p className="text-zinc-300">
            Over <strong className="text-white">2,000+ quality generic medicines</strong> and <strong className="text-white">300+ surgical items</strong> available. All products manufactured in WHO-GMP compliant facilities and tested at NABL accredited laboratories. Download the <em>"Jan Aushadhi Sugam"</em> mobile app to check live stock & prices.
          </p>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-7 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by hospital (AIIMS, LNJP, RML, Safdarjung), area (Connaught Place, Dwarka, Rohini), PIN code, or Kendra ID..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* District Dropdown */}
          <div className="md:col-span-5">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
            >
              {DELHI_JAN_AUSHADHI_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Jan Aushadhi Stores:</span>
          {QUICK_LOCATIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{kendras.length}</strong> Jan Aushadhi Kendra{kendras.length !== 1 ? 's' : ''} in {selectedDistrict !== 'All Districts' ? selectedDistrict : 'Delhi NCR'}
          </span>
        </div>
        {(query || selectedDistrict !== 'All Districts') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="text-[11px] text-emerald-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Jan Aushadhi Kendras Grid */}
      {kendras.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kendras.map((kendra) => (
            <div 
              key={kendra.id} 
              className={`p-5 rounded-2xl bg-zinc-900 border transition space-y-4 flex flex-col justify-between ${
                kendra.isHospitalPremises 
                  ? 'border-emerald-500/80 shadow-lg shadow-emerald-950/20 bg-gradient-to-b from-emerald-950/20 to-zinc-900' 
                  : 'border-zinc-800 hover:border-emerald-500/60'
              }`}
            >
              <div className="space-y-3">
                {/* Title & Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white">{kendra.name}</h4>
                      {kendra.isHospitalPremises && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase flex items-center gap-1">
                          <HeartPulse className="w-3 h-3 text-emerald-400" />
                          24x7 Hospital Campus
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-zinc-700 font-bold">
                        {kendra.kendraCode}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {kendra.district}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyKendraDetails(kendra)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy Jan Aushadhi Kendra details"
                  >
                    {copiedId === kendra.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{kendra.address} - <span className="font-mono text-emerald-400">{kendra.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {kendra.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Timings & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Store Hours</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        {kendra.timings}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Contact / Helpline</span>
                      <a href={`tel:${kendra.phone.split('/')[0].trim()}`} className="font-mono font-bold text-emerald-400 hover:underline text-[11px]">
                        {kendra.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>

                {/* Stock Info */}
                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-300">
                  <span className="text-[11px] font-semibold text-zinc-400 flex items-center gap-1">
                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Generic Medicines Available:</span>
                  </span>
                  <span className="font-mono font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 text-xs">
                    ~{kendra.medicinesAvailableCount || 1800}+ Items
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://janaushadhi.gov.in/locate-kendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>PMBJP Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://janaushadhi.gov.in/productlist.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold inline-flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Check Medicine Prices</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No Jan Aushadhi Kendra found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by key hospitals (AIIMS, LNJP, RML, Safdarjung, GTB) or localities (Connaught Place, Karol Bagh, Dwarka, Rohini, Laxmi Nagar).
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Jan Aushadhi Kendras
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Jan Aushadhi Kendra directory verified against <strong className="text-zinc-200">Pharmaceuticals and Medical Devices Bureau of India (PMBI), Ministry of Chemicals & Fertilizers, Govt. of India</strong>.
          </span>
        </div>
        <a
          href="https://janaushadhi.gov.in/locate-kendra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>janaushadhi.gov.in Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
