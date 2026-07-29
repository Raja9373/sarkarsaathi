import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertTriangle,
  FileText,
  Info,
  Navigation
} from 'lucide-react';
import { 
  DELHI_POLICE_DISTRICTS, 
  getMatchingPoliceStations, 
  PoliceStationItem 
} from '../data/policeStationData';

export const PoliceStationFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const stations = getMatchingPoliceStations(selectedDistrict, query);

  const handleCopyStationDetails = (station: PoliceStationItem) => {
    const textToCopy = `${station.name} (${station.hindiName})\nDistrict: ${station.district}\nAddress: ${station.address} - ${station.pincode}\nLandmark: ${station.landmark}\nPhone: ${station.phone}\nSHO / Control: ${station.shoPhone}\nJurisdiction: ${station.jurisdictionAreas.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(station.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_SEARCHES = [
    { label: 'Connaught Place', q: 'Connaught Place' },
    { label: 'Chanakyapuri', q: 'Chanakyapuri' },
    { label: 'Karol Bagh', q: 'Karol Bagh' },
    { label: 'Hauz Khas', q: 'Hauz Khas' },
    { label: 'Dwarka', q: 'Dwarka' },
    { label: 'Rajouri Garden', q: 'Rajouri Garden' },
    { label: 'Cyber Crime Cell', q: 'Cyber' },
    { label: 'Women Helpline', q: 'Women' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Search Header Banner */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-amber-200">Delhi Police Station & Jurisdiction Finder</h3>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate official Delhi Police Stations, SHO contacts, duty officer landlines, and covered colonies/markets.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="tel:112"
            className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-black text-xs inline-flex items-center gap-1.5 shadow-md"
          >
            <PhoneCall className="w-3.5 h-3.5" /> Emergency Call 112
          </a>
          <a
            href="https://delhipolice.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-800/60 text-xs font-bold inline-flex items-center gap-1"
          >
            <span>Delhi Police Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search locality (e.g. Connaught Place, Karol Bagh), PIN (110001), or PS name..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
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
          <div className="w-full md:w-64">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              {DELHI_POLICE_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Localities:</span>
          {QUICK_SEARCHES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Result Summary Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#FF6B00]" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{stations.length}</strong> Police Station{stations.length !== 1 ? 's' : ''} for {selectedDistrict !== 'All Districts' ? selectedDistrict : 'All Delhi Districts'}
          </span>
        </div>
        {(query || selectedDistrict !== 'All Districts') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="text-[11px] text-amber-400 hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Police Stations Grid */}
      {stations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stations.map((ps) => (
            <div 
              key={ps.id} 
              className={`p-5 rounded-2xl bg-zinc-900 border transition space-y-4 flex flex-col justify-between ${
                ps.isSpecialUnit 
                  ? 'border-amber-700/60 shadow-lg shadow-amber-950/30' 
                  : 'border-zinc-800 hover:border-[#FF6B00]/60'
              }`}
            >
              <div className="space-y-3">
                {/* Station Title & Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white">{ps.name}</h4>
                      {ps.isSpecialUnit && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase">
                          Special Unit
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-400 font-semibold mt-0.5">{ps.hindiName}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                      {ps.district}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyStationDetails(ps)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy full details"
                  >
                    {copiedId === ps.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{ps.address} - <span className="font-mono text-amber-400">{ps.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {ps.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Phone Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Station Landline</span>
                      <a href={`tel:${ps.phone.split('/')[0].trim()}`} className="font-mono font-bold text-white hover:text-[#FF6B00]">
                        {ps.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-[#FF6B00]" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">SHO / Control Phone</span>
                      <a href={`tel:${ps.shoPhone.split('/')[0].trim()}`} className="font-mono font-bold text-amber-400 hover:underline">
                        {ps.shoPhone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>

                {/* Covered Localities / Jurisdiction Areas */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Covered Localities & Jurisdiction:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ps.jurisdictionAreas.map((area, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700/60 font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center gap-2 flex-wrap">
                <a
                  href={`tel:${ps.phone.split('/')[0].trim()}`}
                  className="px-3 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call Station</span>
                </a>
                <a
                  href="https://delhipolice.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold inline-flex items-center gap-1"
                >
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>Report E-FIR / Lost Article</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No police station found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by area (e.g., Connaught Place, Hauz Khas, Rohini), district, or PIN code (110001, 110021).
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Police Stations
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Delhi Police station jurisdiction directory verified against <strong className="text-zinc-200">Delhi Police Official Directory & District Records</strong>.
          </span>
        </div>
        <a
          href="https://delhipolice.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>Delhi Police Official Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
