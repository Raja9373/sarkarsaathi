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
  HelpCircle
} from 'lucide-react';
import { 
  DELHI_RTO_DISTRICTS, 
  getMatchingRtoOffices, 
  RtoOfficeItem 
} from '../data/rtoData';

export const RtoFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const rtoOffices = getMatchingRtoOffices(selectedDistrict, query);

  const handleCopyDetails = (rto: RtoOfficeItem) => {
    const textToCopy = `RTO Code: ${rto.rtoCode}\nZone: ${rto.zoneName}\nDistrict: ${rto.district}\nAddress: ${rto.address} - ${rto.pincode}\nLandmark: ${rto.landmark}\nJurisdiction Areas: ${rto.jurisdictionAreas.join(', ')}\nHelpline Phone: ${rto.phone}\nEmail: ${rto.email || 'N/A'}\nTimings: ${rto.timings}\nServices: ${rto.servicesOffered.join(', ')}\nAutomated Driving Track: ${rto.automatedTrackAvailable ? 'Available (Sensor Track)' : 'Manual Track'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(rto.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_RTO_CODES = [
    { label: 'DL-01 Mall Road', q: 'DL-01' },
    { label: 'DL-02 ITO', q: 'DL-02' },
    { label: 'DL-03 Sheikh Sarai', q: 'DL-03' },
    { label: 'DL-04 Janakpuri', q: 'DL-04' },
    { label: 'DL-06 Sarai Kale Khan', q: 'DL-06' },
    { label: 'DL-07 Mayur Vihar', q: 'DL-07' },
    { label: 'DL-09 Dwarka', q: 'DL-09' },
    { label: 'DL-10 Raja Garden', q: 'DL-10' },
    { label: 'DL-11 Rohini', q: 'DL-11' },
    { label: 'DL-12 Vasant Vihar', q: 'DL-12' },
    { label: 'DL-15 Burari Auto/Taxi', q: 'DL-15' }
  ];

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
              <h3 className="text-base font-black text-white">Delhi Transport RTO Zonal Directory (DL-01 to DL-17)</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                Parivahan Govt Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find official Delhi Transport Department zonal RTO offices, MLO contacts, jurisdiction areas, automated driving test tracks, and online Parivahan e-District services.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://parivahan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Parivahan Portal</span>
          </a>
          <a
            href="tel:1800118181"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Helpline 1800-11-8181</span>
          </a>
        </div>
      </div>

      {/* Online Services Quick Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <a
          href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition flex items-center gap-2.5"
        >
          <FileText className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <div>
            <span className="font-bold text-white block">Apply Learner / DL</span>
            <span className="text-[10px] text-zinc-400">Sarathi Parivahan</span>
          </div>
        </a>

        <a
          href="https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statewise/homepage.xhtml"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition flex items-center gap-2.5"
        >
          <CreditCard className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <div>
            <span className="font-bold text-white block">Vehicle RC & Transfer</span>
            <span className="text-[10px] text-zinc-400">Vahan Parivahan</span>
          </div>
        </a>

        <a
          href="https://bookmyhsrp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition flex items-center gap-2.5"
        >
          <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <div>
            <span className="font-bold text-white block">Book HSRP Number Plate</span>
            <span className="text-[10px] text-zinc-400">Book-MY-HSRP Delhi (bookmyhsrp.com)</span>
          </div>
        </a>

        <a
          href="https://transport.delhi.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition flex items-center gap-2.5"
        >
          <Building2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <div>
            <span className="font-bold text-white block">Delhi Transport Dept</span>
            <span className="text-[10px] text-zinc-400">Official Portal</span>
          </div>
        </a>
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
              placeholder="Search by RTO code (DL-01, DL-03), locality (Janakpuri, Dwarka, Rohini), or PIN code..."
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

          {/* District Dropdown */}
          <div className="md:col-span-4">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {DELHI_RTO_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Delhi RTO Codes:</span>
          {QUICK_RTO_CODES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500 text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{rtoOffices.length}</strong> Zonal RTO Office{rtoOffices.length !== 1 ? 's' : ''} in {selectedDistrict !== 'All Districts' ? selectedDistrict : 'Delhi NCT'}
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
            Reset All Filters
          </button>
        )}
      </div>

      {/* RTO Cards Grid */}
      {rtoOffices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rtoOffices.map((rto) => (
            <div 
              key={rto.id} 
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/60 transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-black">
                        {rto.rtoCode}
                      </span>
                      <h4 className="text-base font-black text-white">
                        {rto.zoneName}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-[10px] text-zinc-400 font-medium">
                        District: <strong className="text-zinc-200">{rto.district}</strong>
                      </span>
                      {rto.automatedTrackAvailable && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          Sensor Driving Track
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyDetails(rto)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy RTO details"
                  >
                    {copiedId === rto.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{rto.address} - <span className="font-mono text-amber-400">{rto.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {rto.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Phone & Timings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Helpline / Inquiry</span>
                      <a href={`tel:${rto.phone.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono font-bold text-amber-400 hover:underline text-[11px]">
                        {rto.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Public Timings</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        {rto.timings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Jurisdiction Areas */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Jurisdiction Localities & Areas:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {rto.jurisdictionAreas.map((area, idx) => (
                      <span key={idx} className="text-[11px] bg-zinc-950 text-zinc-300 border border-zinc-800 px-2 py-0.5 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services Provided */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Zonal Counter Services:
                  </span>
                  <p className="text-xs text-amber-200/90 font-medium">
                    {rto.servicesOffered.join(' • ')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Book DL Test Slot</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`tel:${rto.phone.split('/')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 text-xs font-bold inline-flex items-center gap-1 border border-amber-800/50"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call RTO Office</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No RTO office found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by RTO code (DL-01, DL-03, DL-04, DL-07, DL-09, DL-11) or area name (Janakpuri, Sheikh Sarai, Mall Road, Dwarka, Rohini).
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi RTO Offices
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Verified against <strong className="text-zinc-200">Delhi Transport Department, Govt. of NCT of Delhi & Ministry of Road Transport and Highways (MoRTH Parivahan)</strong>.
          </span>
        </div>
        <a
          href="https://transport.delhi.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-amber-400 hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>transport.delhi.gov.in</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
