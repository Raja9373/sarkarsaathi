import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Briefcase,
  Sparkles,
  Info
} from 'lucide-react';
import { getStateDataSet } from '../data/stateDataManager';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { DELHI_GOVT_OFFICES_DIRECTORY } from '../data/findersData';

interface GovtOfficesFinderProps {
  currentStateId?: string;
}

export const GovtOfficesFinder: React.FC<GovtOfficesFinderProps> = ({ currentStateId = 'delhi' }) => {
  const [selectedState, setSelectedState] = useState<string>(currentStateId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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

  // If Delhi is selected, we can use the comprehensive Delhi directory; for other states, we load their dedicated office dataset
  const rawOffices = (selectedState === 'delhi' || selectedState === 'dl')
    ? DELHI_GOVT_OFFICES_DIRECTORY.map(d => ({
        id: d.id,
        name: d.officeName,
        hindiName: d.hindiName,
        category: d.category,
        district: d.district,
        state: 'Delhi',
        address: d.address,
        pincode: d.pincode,
        helpline: d.phone,
        email: d.email,
        website: d.website,
        publicHours: d.timing,
        services: d.keyServices
      }))
    : stateData.offices;

  const categories = ['All', ...Array.from(new Set(rawOffices.map(o => o.category))).filter(Boolean)];
  const districts = ['All', ...Array.from(new Set(rawOffices.map(o => o.district))).filter(Boolean)];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredOffices = rawOffices.filter((office) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      q === '' ||
      office.name.toLowerCase().includes(q) ||
      (office.hindiName || '').includes(q) ||
      office.address.toLowerCase().includes(q) ||
      office.pincode.includes(q) ||
      office.district.toLowerCase().includes(q) ||
      office.services.some(s => s.toLowerCase().includes(q));

    const matchesCategory = selectedCategory === 'All' || office.category === selectedCategory;
    const matchesDistrict = selectedDistrict === 'All' || office.district === selectedDistrict;

    return matchesSearch && matchesCategory && matchesDistrict;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#121824] to-zinc-900 border border-zinc-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Official Public Directory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {stateInfo.name} Government Offices & Public Headquarters
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Find verified addresses, landline phone numbers, email contacts, working hours, and citizen services for District Magistrate (DM) Collectorate offices, SDM courts, and Common Service Centers (CSC) in {stateInfo.name}.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3.5 py-2 rounded-xl flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>.gov.in Official Contacts</span>
          </div>
        </div>
      </div>

      {/* State Selector Bar */}
      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#FF6B00]" />
          <span className="font-bold text-zinc-200">Select State / UT for Government Offices:</span>
        </div>
        <div className="w-full sm:w-72">
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCategory('All');
              setSelectedDistrict('All');
            }}
            className="w-full bg-zinc-950 border border-zinc-700 text-white rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-[#FF6B00]"
          >
            {STATES_LIST.filter(s => s.id !== 'national').map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.hindiName})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Controls / Filter Section */}
      <div className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 space-y-4 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search office name, department, officer, PIN code, or service in ${stateInfo.name}...`}
              className="w-full bg-zinc-900 border border-zinc-700/60 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* District Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist === 'All' ? 'All Districts / Zones' : dist}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
        <span>
          Showing <strong className="text-white">{filteredOffices.length}</strong> government administrative office{filteredOffices.length === 1 ? '' : 's'} in <strong className="text-[#FF6B00]">{stateInfo.name}</strong>
        </span>
        <span className="text-[11px] text-zinc-500">
          Source: National Portal of India & State NIC Portal
        </span>
      </div>

      {/* Offices Grid */}
      {filteredOffices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOffices.map((office) => (
            <div
              key={office.id}
              className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20">
                        {office.category}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-zinc-800 text-zinc-300">
                        {office.district}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition">
                      {office.name}
                    </h4>
                    {office.hindiName && (
                      <p className="text-xs text-zinc-400 mt-0.5">{office.hindiName}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleCopy(`${office.name}\n${office.address} - ${office.pincode}\nPhone: ${office.helpline}\nEmail: ${office.email}\nWebsite: ${office.website}`, office.id)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex-shrink-0 transition"
                    title="Copy Office Info"
                  >
                    {copiedId === office.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Details list */}
                <div className="space-y-2 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span>{office.address} - <strong className="text-white font-mono">{office.pincode}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-mono text-zinc-200">{office.helpline}</span>
                  </div>

                  {office.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-blue-300 hover:underline">
                        {office.email}
                      </a>
                    </div>
                  )}

                  {office.publicHours && (
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{office.publicHours}</span>
                    </div>
                  )}
                </div>

                {/* Services Tags */}
                {office.services && office.services.length > 0 && (
                  <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Key Citizen Services / Counters:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {office.services.map((srv, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Link */}
              {office.website && (
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <a
                    href={office.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B00] hover:text-[#FF6B00]/80 transition"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-[#121824] rounded-2xl border border-zinc-800 space-y-3">
          <Info className="w-10 h-10 text-[#FF6B00] mx-auto" />
          <h4 className="text-base font-bold text-white">No office found matching "{searchQuery}" in {stateInfo.name}</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try adjusting your search terms or switch state to view corresponding district offices.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedDistrict('All');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
