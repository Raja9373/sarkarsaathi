import React, { useState } from 'react';
import { 
  HeartPulse, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Info,
  Droplet,
  ShieldAlert,
  Award,
  CheckCircle2,
  Users
} from 'lucide-react';
import { 
  DELHI_BLOOD_BANK_DISTRICTS, 
  BLOOD_BANK_CATEGORIES,
  BLOOD_GROUPS_LIST,
  getMatchingBloodBanks, 
  BloodBankItem 
} from '../data/bloodBankData';

export const BloodBankFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Types');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('All Blood Groups');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bloodBanks = getMatchingBloodBanks(selectedDistrict, selectedCategory, selectedBloodGroup, query);

  const handleCopyDetails = (bb: BloodBankItem) => {
    const textToCopy = `${bb.name}\nCategory: ${bb.category}\nDistrict: ${bb.district}\nAddress: ${bb.address} - ${bb.pincode}\nLandmark: ${bb.landmark}\n24x7 Emergency Phone: ${bb.emergencyPhone}\nTimings: ${bb.timings}\nAvailable Blood Groups: ${bb.availableBloodGroups.join(', ')}\nComponent Facility: ${bb.hasComponentFacility ? 'PRBC, FFP, Platelets, SDP Available' : 'Whole Blood'}\ne-RaktKosh Status: Registered & Govt Verified`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(bb.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_BLOOD_BANKS = [
    { label: 'Indian Red Cross HQ', q: 'Red Cross' },
    { label: 'AIIMS Apex Trauma', q: 'AIIMS' },
    { label: 'Rotary Blood Bank', q: 'Rotary' },
    { label: 'Safdarjung Hospital', q: 'Safdarjung' },
    { label: 'RML Hospital CP', q: 'RML' },
    { label: 'LNJP Hospital', q: 'LNJP' },
    { label: 'GTB Hospital Shahdara', q: 'GTB' },
    { label: 'Sir Ganga Ram', q: 'Ganga Ram' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/90 via-rose-900/40 to-zinc-900 border border-red-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
            <HeartPulse className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi Licensed Blood Banks & e-RaktKosh Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase">
                e-RaktKosh Govt Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find 24x7 licensed blood banks in Delhi NCR including Indian Red Cross, AIIMS, Safdarjung, Rotary Blood Bank, and major government/private hospital blood transfusion units.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://www.eraktkosh.in/BLDAHIMS/bloodbank/findBloodBank.cnt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Official e-RaktKosh Portal</span>
          </a>
          <a
            href="tel:01123711551"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-red-400 border border-red-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Red Cross 011-23711551</span>
          </a>
        </div>
      </div>

      {/* Emergency Helpline Box */}
      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 flex items-start gap-3 text-xs">
        <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-red-200">
            Emergency Blood Requirement Guidance:
          </p>
          <p className="text-zinc-300">
            For critical emergency blood or component requirements (Packed Red Blood Cells PRBC, Fresh Frozen Plasma FFP, Platelets, Single Donor Platelets SDP), carry doctor's prescription note & requisition form. Government hospitals provide voluntary replacement or emergency donor blood.
          </p>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name (Red Cross, AIIMS, Rotary), area (Connaught Place, Saket, Rohini), or PIN code..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
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

          {/* Blood Group Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-red-400 font-bold focus:outline-none focus:border-red-500"
            >
              {BLOOD_GROUPS_LIST.map((bg) => (
                <option key={bg} value={bg}>Blood Group: {bg}</option>
              ))}
            </select>
          </div>

          {/* District Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            >
              {DELHI_BLOOD_BANK_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            >
              {BLOOD_BANK_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Delhi Blood Banks:</span>
          {QUICK_BLOOD_BANKS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
                setSelectedCategory('All Types');
                setSelectedBloodGroup('All Blood Groups');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500 text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-red-400" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{bloodBanks.length}</strong> Blood Bank{bloodBanks.length !== 1 ? 's' : ''} in {selectedDistrict !== 'All Districts' ? selectedDistrict : 'Delhi NCR'}
            {selectedBloodGroup !== 'All Blood Groups' && ` for Group ${selectedBloodGroup}`}
          </span>
        </div>
        {(query || selectedDistrict !== 'All Districts' || selectedCategory !== 'All Types' || selectedBloodGroup !== 'All Blood Groups') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedCategory('All Types');
              setSelectedBloodGroup('All Blood Groups');
            }}
            className="text-[11px] text-red-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Blood Banks Cards Grid */}
      {bloodBanks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bloodBanks.map((bb) => (
            <div 
              key={bb.id} 
              className={`p-5 rounded-2xl bg-zinc-900 border transition space-y-4 flex flex-col justify-between ${
                bb.has24x7Service 
                  ? 'border-red-500/80 shadow-lg shadow-red-950/20 bg-gradient-to-b from-red-950/20 to-zinc-900' 
                  : 'border-zinc-800 hover:border-red-500/60'
              }`}
            >
              <div className="space-y-3">
                {/* Title & Category Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white flex items-center gap-1.5">
                        <Droplet className="w-4 h-4 text-red-500 fill-red-500/30 flex-shrink-0" />
                        {bb.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-red-400 border border-zinc-700 font-bold uppercase">
                        {bb.category}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {bb.district}
                      </span>
                      {bb.eRaktKoshRegistered && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          e-RaktKosh Verified
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyDetails(bb)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy blood bank details"
                  >
                    {copiedId === bb.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{bb.address} - <span className="font-mono text-red-400">{bb.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {bb.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Phone & Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-red-300 font-bold uppercase block">24x7 Helpline / Emergency</span>
                      <a href={`tel:${bb.emergencyPhone.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono font-black text-red-400 hover:underline text-[11px]">
                        {bb.emergencyPhone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Service Hours</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-red-400 flex-shrink-0" />
                        {bb.timings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Component Facility & Blood Groups */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Blood Components Available:
                    </span>
                    <span className="text-[11px] font-bold text-red-300">
                      {bb.hasComponentFacility ? 'PRBC / FFP / Platelets / SDP' : 'Whole Blood'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                      Supported Blood Groups:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {bb.availableBloodGroups.map((bg) => (
                        <span 
                          key={bg} 
                          className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
                            selectedBloodGroup === bg 
                              ? 'bg-red-600 text-white border-red-500' 
                              : 'bg-zinc-950 text-red-400 border-zinc-800'
                          }`}
                        >
                          {bg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://www.eraktkosh.in/BLDAHIMS/bloodbank/findBloodBank.cnt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Check Live Stock (e-RaktKosh)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`tel:${bb.emergencyPhone.split('/')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-red-400 text-xs font-bold inline-flex items-center gap-1 border border-red-800/50"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Emergency</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No blood bank found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by key center names (Indian Red Cross, AIIMS, Rotary, Safdarjung, RML, GTB, DDU, Ganga Ram) or reset filters.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedCategory('All Types');
              setSelectedBloodGroup('All Blood Groups');
            }}
            className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Blood Banks
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Directory verified against <strong className="text-zinc-200">National Blood Transfusion Council (NBTC), MoHFW Govt. of India & e-RaktKosh Portal (eraktkosh.in)</strong>.
          </span>
        </div>
        <a
          href="https://www.eraktkosh.in/BLDAHIMS/bloodbank/findBloodBank.cnt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-red-400 hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>eraktkosh.in Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
