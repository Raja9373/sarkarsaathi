import React, { useState } from 'react';
import { 
  Car, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Info, 
  Award, 
  CheckCircle2, 
  FileText, 
  CreditCard, 
  Compass, 
  AlertCircle,
  Globe
} from 'lucide-react';
import { getStateDataSet } from '../data/stateDataManager';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { RtoOfficeItem } from '../data/rtoData';

interface RtoFinderProps {
  currentStateId?: string;
}

export const RtoFinder: React.FC<RtoFinderProps> = ({ currentStateId = 'delhi' }) => {
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
  const stateRtos = stateData.rto || [];

  const availableDistricts = ['All', ...Array.from(new Set(stateRtos.map(r => r.district))).filter(Boolean)];

  const filteredRtos = stateRtos.filter(rto => {
    const matchesDistrict = selectedDistrict === 'All' || rto.district.toLowerCase() === selectedDistrict.toLowerCase();
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) return matchesDistrict;

    const matchesCode = rto.rtoCode.toLowerCase().includes(cleanQuery);
    const matchesZone = rto.zoneName.toLowerCase().includes(cleanQuery);
    const matchesAddr = rto.address.toLowerCase().includes(cleanQuery);
    const matchesPin = rto.pincode.includes(cleanQuery);
    const matchesJurisdiction = rto.jurisdictionAreas.some(j => j.toLowerCase().includes(cleanQuery));

    return matchesDistrict && (matchesCode || matchesZone || matchesAddr || matchesPin || matchesJurisdiction);
  });

  const handleCopyDetails = (rto: RtoOfficeItem) => {
    const textToCopy = `RTO Code: ${rto.rtoCode}\nZone: ${rto.zoneName}\nDistrict: ${rto.district}\nAddress: ${rto.address} - ${rto.pincode}\nLandmark: ${rto.landmark || ''}\nJurisdiction Areas: ${rto.jurisdictionAreas.join(', ')}\nHelpline Phone: ${rto.phone}\nEmail: ${rto.email || 'N/A'}\nTimings: ${rto.timings}\nServices: ${rto.servicesOffered.join(', ')}\nAutomated Driving Track: ${rto.automatedTrackAvailable ? 'Available (Sensor Track)' : 'Standard Track'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(rto.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/80 via-zinc-900 to-zinc-900 border border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Car className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">{stateInfo.name} Transport RTO & DTO Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                Parivahan Govt Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find official Regional Transport Offices (RTO / DTO), Motor Licensing Officer contacts, jurisdiction areas, and automated driving tracks in {stateInfo.name}.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://parivahan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Parivahan Sarathi Portal</span>
          </a>
        </div>
      </div>

      {/* State Selection Bar */}
      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-zinc-200">Select State / UT for RTO Directory:</span>
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

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search by RTO code (e.g. ${stateInfo.code}-01), zone name, district, or area in ${stateInfo.name}...`}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
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

          {/* District Filter Dropdown */}
          <div className="md:col-span-4">
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

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2">
        <span>
          Showing <strong className="text-white">{filteredRtos.length}</strong> RTO / DTO Office{filteredRtos.length === 1 ? '' : 's'} in <strong className="text-amber-400">{stateInfo.name}</strong>
        </span>
        <span className="text-[11px] text-zinc-500">
          Source: State Transport Dept & Parivahan Portal
        </span>
      </div>

      {/* RTO Cards Grid */}
      {filteredRtos.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredRtos.map((rto) => (
            <div
              key={rto.id}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/60 transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-3">
                {/* Header: Code & Zone */}
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2.5 py-0.5 rounded-lg font-black bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        {rto.rtoCode}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-zinc-800 text-zinc-300">
                        {rto.district}
                      </span>
                      {rto.automatedTrackAvailable && (
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Automated Test Track
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition">
                      {rto.zoneName}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopyDetails(rto)}
                    title="Copy details"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex-shrink-0 transition"
                  >
                    {copiedId === rto.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Address & Timings */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{rto.address} - <strong className="text-white font-mono">{rto.pincode}</strong></span>
                  </div>
                  {rto.landmark && (
                    <div className="flex items-start gap-2 text-zinc-400 pl-6 text-[11px]">
                      <span>Landmark: {rto.landmark}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-zinc-400 pl-6 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Timings: {rto.timings}</span>
                  </div>
                </div>

                {/* Contact Helpline */}
                <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-semibold">RTO Helpline & Phone</span>
                      <a href={`tel:${rto.phone.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono text-xs font-bold text-zinc-200 hover:underline">
                        {rto.phone}
                      </a>
                    </div>
                  </div>
                  {rto.mloIncharge && (
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] text-zinc-400 block font-semibold">Officer In-Charge</span>
                      <span className="text-xs text-zinc-300 font-medium">{rto.mloIncharge}</span>
                    </div>
                  )}
                </div>

                {/* Areas Covered */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Jurisdiction / Colonies Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {rto.jurisdictionAreas.map((area, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services List */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Key Counter Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {rto.servicesOffered.map((srv, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-300/90 border border-amber-800/40 font-medium">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://sarathi.parivahan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Book Driving Slot (Sarathi)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`tel:${rto.phone.split('/')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold inline-flex items-center gap-1 border border-zinc-700"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call RTO</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No RTO office found matching "{query}" in {stateInfo.name}</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by RTO code (e.g. {stateInfo.code}-01), area name, or district.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All {stateInfo.name} RTO Offices
          </button>
        </div>
      )}
    </div>
  );
};
