import React, { useState } from 'react';
import { 
  UserCheck, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  CalendarCheck, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Info,
  Sparkles
} from 'lucide-react';
import { 
  DELHI_AADHAAR_DISTRICTS, 
  getMatchingAadhaarCentres, 
  AadhaarCentreItem 
} from '../data/aadhaarData';

export const AadhaarCentreFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const centres = getMatchingAadhaarCentres(selectedDistrict, query, selectedType);

  const handleCopyCentreDetails = (centre: AadhaarCentreItem) => {
    const textToCopy = `${centre.name}\nType: ${centre.type}\nDistrict: ${centre.district}\nAddress: ${centre.address} - ${centre.pincode}\nLandmark: ${centre.landmark}\nTimings: ${centre.timings}\nPhone: ${centre.phone}\nServices: ${centre.servicesOffered.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(centre.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_AREAS = [
    { label: 'Karol Bagh (ASK)', q: 'Karol Bagh' },
    { label: 'Dwarka Sec 12 (ASK)', q: 'Dwarka' },
    { label: 'Inderlok (ASK)', q: 'Inderlok' },
    { label: 'Akshardham (ASK)', q: 'Akshardham' },
    { label: 'Parliament Street PO', q: 'Parliament' },
    { label: 'Kalkaji Post Office', q: 'Kalkaji' },
    { label: 'Janakpuri HO', q: 'Janakpuri' },
    { label: 'Rohini Sec 7 HO', q: 'Rohini' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/80 via-amber-900/40 to-zinc-900 border border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi Aadhaar Seva Kendra & Enrolment Centre Finder</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                UIDAI Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find nearest official UIDAI Aadhaar Seva Kendras, Post Offices, Bank branches, and CSC centers for new enrolment, biometric update, or document updation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://appointments.uidai.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book ASK Appointment</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="tel:1947"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>UIDAI Toll-Free 1947</span>
          </a>
        </div>
      </div>

      {/* Mandatory Free Document Update Advisory Box */}
      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-start gap-3 text-xs">
        <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-blue-200">
            Mandatory Document Update Notice (PoI & PoA):
          </p>
          <p className="text-zinc-300">
            If your Aadhaar was issued over 10 years ago and has never been updated, UIDAI recommends uploading your Proof of Identity (PoI) & Proof of Address (PoA) online at <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-semibold">myAadhaar portal</a> or visiting any Aadhaar Seva Kendra listed below.
          </p>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by locality (e.g. Karol Bagh, Dwarka, Rohini), PIN code (110005), or landmark..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
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
          <div className="md:col-span-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              {DELHI_AADHAAR_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              <option value="All Types">All Centre Types</option>
              <option value="ASK (UIDAI Seva Kendra)">UIDAI Seva Kendra (ASK)</option>
              <option value="Post Office">Post Office Centres</option>
              <option value="Bank Branch">Bank Branch Centres</option>
              <option value="CSC / Govt Office">CSC / Govt Office Centres</option>
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Seva Kendras:</span>
          {QUICK_AREAS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
                setSelectedType('All Types');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#FF6B00]" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{centres.length}</strong> Aadhaar Centre{centres.length !== 1 ? 's' : ''} in {selectedDistrict !== 'All Districts' ? selectedDistrict : 'Delhi NCR'}
          </span>
        </div>
        {(query || selectedDistrict !== 'All Districts' || selectedType !== 'All Types') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedType('All Types');
            }}
            className="text-[11px] text-amber-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Aadhaar Centres Grid */}
      {centres.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {centres.map((c) => (
            <div 
              key={c.id} 
              className={`p-5 rounded-2xl bg-zinc-900 border transition space-y-4 flex flex-col justify-between ${
                c.isUidaiASK 
                  ? 'border-amber-500/60 shadow-lg shadow-amber-950/20 bg-gradient-to-b from-amber-950/20 to-zinc-900' 
                  : 'border-zinc-800 hover:border-[#FF6B00]/60'
              }`}
            >
              <div className="space-y-3">
                {/* Title & Type Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white">{c.name}</h4>
                      {c.isUidaiASK && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black uppercase">
                          Official UIDAI ASK
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700 font-bold uppercase">
                        {c.type}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {c.district}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyCentreDetails(c)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy centre details"
                  >
                    {copiedId === c.id ? (
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
                      <p className="font-medium text-white">{c.address} - <span className="font-mono text-amber-400">{c.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {c.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Timings & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Timings</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        {c.timings}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Phone / Helpline</span>
                      <a href={`tel:${c.phone.split('/')[0].trim()}`} className="font-mono font-bold text-amber-400 hover:underline text-[11px]">
                        {c.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>

                {/* Services Offered */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Available Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.servicesOffered.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700/60 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                {c.appointmentSupported ? (
                  <a
                    href="https://appointments.uidai.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Book Online Slot</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-zinc-400 font-medium flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-amber-400" />
                    <span>Walk-in Token Service</span>
                  </span>
                )}

                <a
                  href="https://myaadhaar.uidai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold inline-flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Update Online</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No Aadhaar centre found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by locality (e.g., Karol Bagh, Dwarka, Rohini, Laxmi Nagar) or PIN code (e.g., 110005, 110078).
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedType('All Types');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Aadhaar Centres
          </button>
        </div>
      )}

      {/* Reference Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Aadhaar centre directory verified against <strong className="text-zinc-200">UIDAI Resident Portal & Official Delhi District Enrolment Records</strong>.
          </span>
        </div>
        <a
          href="https://myaadhaar.uidai.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>UIDAI Official Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
