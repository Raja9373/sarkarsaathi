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
  Navigation,
  Globe
} from 'lucide-react';
import { getStateDataSet } from '../data/stateDataManager';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { PoliceStationItem } from '../data/policeStationData';

interface PoliceStationFinderProps {
  currentStateId?: string;
}

export const PoliceStationFinder: React.FC<PoliceStationFinderProps> = ({ currentStateId = 'delhi' }) => {
  const [selectedState, setSelectedState] = useState<string>(currentStateId);
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  React.useEffect(() => {
    if (currentStateId) {
      setSelectedState(currentStateId);
      setSelectedDistrict('All');
    }
  }, [currentStateId]);

  const stateData = getStateDataSet(selectedState);
  const stateInfo = getStateInfo(selectedState);
  const stateStations = stateData.police || [];

  const availableDistricts = ['All', ...Array.from(new Set(stateStations.map(s => s.district))).filter(Boolean)];

  const filteredStations = stateStations.filter(station => {
    const matchesDistrict = selectedDistrict === 'All' || station.district.toLowerCase() === selectedDistrict.toLowerCase();
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) return matchesDistrict;

    const matchesName = station.name.toLowerCase().includes(cleanQuery);
    const matchesHindiName = (station.hindiName || '').toLowerCase().includes(cleanQuery);
    const matchesAddr = station.address.toLowerCase().includes(cleanQuery);
    const matchesPin = station.pincode.includes(cleanQuery);
    const matchesJurisdiction = station.jurisdictionAreas.some(area => area.toLowerCase().includes(cleanQuery));

    return matchesDistrict && (matchesName || matchesHindiName || matchesAddr || matchesPin || matchesJurisdiction);
  });

  const handleCopyStationDetails = (station: PoliceStationItem) => {
    const textToCopy = `${station.name} (${station.hindiName || ''})\nDistrict: ${station.district}\nAddress: ${station.address} - ${station.pincode}\nLandmark: ${station.landmark || ''}\nPhone: ${station.phone}\nSHO / Control: ${station.shoPhone}\nJurisdiction: ${station.jurisdictionAreas.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(station.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Search Header Banner */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-bold text-amber-200">{stateInfo.name} Police Station & Jurisdiction Directory</h3>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate official Police Stations, SHO landlines/mobiles, and jurisdiction areas in {stateInfo.name}.
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
        </div>
      </div>

      {/* State Selector Bar */}
      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-zinc-200">Select State / UT for Police Jurisdiction:</span>
        </div>
        <div className="w-full sm:w-72">
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedDistrict('All');
            }}
            className="w-full bg-zinc-950 border border-zinc-700 text-white rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-amber-500"
          >
            {STATES_LIST.filter(s => s.id !== 'national').map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.hindiName})
              </option>
            ))}
          </select>
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
              placeholder={`Search locality, area, PIN, or Police Station name in ${stateInfo.name}...`}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
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
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {availableDistricts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist === 'All' ? 'All Districts / Zones' : dist}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2">
        <span>
          Showing <strong className="text-white">{filteredStations.length}</strong> Police Station{filteredStations.length === 1 ? '' : 's'} in <strong className="text-amber-400">{stateInfo.name}</strong>
        </span>
        <span className="text-[11px] text-zinc-500">
          Emergency Dial: 112 (National Emergency Helpline)
        </span>
      </div>

      {/* Police Station Cards Grid */}
      {filteredStations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/60 transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {station.district}
                      </span>
                      {station.isSpecialUnit && (
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                          Special Unit / HQ
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition">
                      {station.name}
                    </h4>
                    {station.hindiName && (
                      <p className="text-xs text-zinc-400 font-medium">{station.hindiName}</p>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopyStationDetails(station)}
                    title="Copy details"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex-shrink-0 transition"
                  >
                    {copiedId === station.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{station.address} - <strong className="text-white font-mono">{station.pincode}</strong></span>
                  </div>
                  {station.landmark && (
                    <div className="flex items-start gap-2 text-zinc-400 pl-6 text-[11px]">
                      <span>Landmark: {station.landmark}</span>
                    </div>
                  )}
                </div>

                {/* Contacts Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80 text-xs">
                  <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Duty Officer Landline</span>
                      <a href={`tel:${station.phone.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono text-xs font-bold text-zinc-200 hover:underline">
                        {station.phone}
                      </a>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                    <Building className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-400 block">SHO / Control Phone</span>
                      <span className="font-mono text-xs font-bold text-red-300">
                        {station.shoPhone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Jurisdiction tags */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Jurisdiction / Areas Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {station.jurisdictionAreas.map((area, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href={`tel:${station.phone.split('/')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold inline-flex items-center gap-1.5 border border-zinc-700"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Station</span>
                </a>

                <a
                  href="tel:112"
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Emergency 112</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <Info className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No police station found matching "{query}" in {stateInfo.name}</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by key colony name, district, or landmark, or dial emergency 112 directly.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All {stateInfo.name} Police Stations
          </button>
        </div>
      )}
    </div>
  );
};
