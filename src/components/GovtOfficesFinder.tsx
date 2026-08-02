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
import { DELHI_GOVT_OFFICES_DIRECTORY } from '../data/findersData';
import { GovtOffice } from '../types';

export const GovtOfficesFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    'All',
    'Secretariat & HQs',
    'District Magistrates & Revenue',
    'Municipal & Utilities',
    'Police & Judicial',
    'Transport & Licences',
    'Central Govt Ministries'
  ];

  const districts = [
    'All',
    'Central Delhi',
    'New Delhi',
    'South Delhi',
    'South West Delhi',
    'West Delhi',
    'North West Delhi',
    'East Delhi'
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredOffices = DELHI_GOVT_OFFICES_DIRECTORY.filter((office) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      q === '' ||
      office.officeName.toLowerCase().includes(q) ||
      office.hindiName.includes(q) ||
      office.department.toLowerCase().includes(q) ||
      office.address.toLowerCase().includes(q) ||
      office.pincode.includes(q) ||
      office.district.toLowerCase().includes(q) ||
      office.keyServices.some(s => s.toLowerCase().includes(q));

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
              Delhi Government Offices & Public Headquarters
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Find complete addresses, phone numbers, email contacts, working hours, and officer details for Delhi Secretariats, District Magistrate (DM) revenue offices, MCD, Jal Board, DDA, Police, and Central Ministries.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3.5 py-2 rounded-xl flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>.gov.in Official Contacts</span>
          </div>
        </div>
      </div>

      {/* Controls / Filter Section */}
      <div className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 space-y-4 shadow-lg">
        {/* Search Input & District Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search office name, department, address, DM office, SDM, MCD, Jal Board, PIN code..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] transition"
            />
          </div>

          <div>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-300 font-semibold focus:outline-none focus:border-[#FF6B00] transition"
            >
              <option value="All">All Districts ({districts.length - 1})</option>
              {districts.filter(d => d !== 'All').map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider flex-shrink-0 mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Active Filters */}
      <div className="flex items-center justify-between text-xs px-1 text-zinc-400">
        <span>
          Showing <strong className="text-white font-bold">{filteredOffices.length}</strong> government office directory listings
        </span>
        {(searchQuery || selectedCategory !== 'All' || selectedDistrict !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedDistrict('All');
            }}
            className="text-[#FF6B00] font-bold hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Office Cards List */}
      {filteredOffices.length === 0 ? (
        <div className="p-10 text-center rounded-2xl bg-[#121824] border border-zinc-800 space-y-3 max-w-md mx-auto">
          <Building2 className="w-10 h-10 text-zinc-600 mx-auto" />
          <h4 className="text-sm font-bold text-white">No Government Offices Found</h4>
          <p className="text-xs text-zinc-400">
            No listings match "{searchQuery}". Try clearing your search term or selecting "All Districts".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedDistrict('All');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Reset Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredOffices.map((office) => (
            <div
              key={office.id}
              className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/40 transition space-y-4 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Title & Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800">
                        {office.category}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900/80 text-zinc-300 border border-zinc-800">
                        {office.district}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition leading-snug">
                      {office.officeName}
                    </h4>
                    <p className="text-xs text-zinc-400 font-medium">{office.hindiName}</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 font-semibold flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span>{office.department}</span>
                </div>

                {/* Details Section */}
                <div className="space-y-2 text-xs text-zinc-300">
                  {/* Address */}
                  <div className="flex items-start gap-2 pt-1">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-400 font-medium block">Address:</span>
                      <span className="text-white font-semibold">{office.address} - {office.pincode}</span>
                    </div>
                  </div>

                  {/* Phone & Helpline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="text-zinc-500 text-[10px] block uppercase font-bold">Phone Nos:</span>
                        <a
                          href={`tel:${office.phone.split(',')[0].trim()}`}
                          className="text-white font-mono font-bold hover:text-[#FF6B00] hover:underline"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>

                    {office.helpline && (
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <div>
                          <span className="text-zinc-500 text-[10px] block uppercase font-bold">Helpline:</span>
                          <span className="text-emerald-400 font-mono font-bold">{office.helpline}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Email & Timings */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                      <div>
                        <span className="text-zinc-500 text-[10px] block uppercase font-bold">Email Contact:</span>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-zinc-300 hover:text-white font-mono text-[11px] hover:underline truncate block max-w-[200px]"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <div>
                        <span className="text-zinc-500 text-[10px] block uppercase font-bold">Public Hours:</span>
                        <span className="text-zinc-300 text-[11px] font-medium leading-tight block">{office.timing}</span>
                      </div>
                    </div>
                  </div>

                  {/* Officer In Charge */}
                  {office.officerInCharge && (
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400">
                      <Users className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                      <span>Administrative Officer: <strong className="text-zinc-200">{office.officerInCharge}</strong></span>
                    </div>
                  )}

                  {/* Key Services */}
                  <div className="pt-2">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">
                      Key Services & Public Counters:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {office.keyServices.map((srv, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => handleCopy(`${office.officeName}\n${office.address} - ${office.pincode}\nPhone: ${office.phone}`, office.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-bold text-[11px] transition"
                >
                  {copiedId === office.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied Details</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${office.phone.split(',')[0].trim()}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 hover:text-white font-bold text-[11px] transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Office</span>
                  </a>

                  <a
                    href={office.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#E65100] text-white font-bold text-[11px] shadow-md transition"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Disclaimer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>
            Directory compiled & verified against official Delhi State Portal (<strong className="text-zinc-200">delhi.gov.in</strong>) & Revenue Department e-District portals.
          </span>
        </div>
        <a
          href="https://delhi.gov.in/departments/revenue/directory"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>View Delhi Govt Directory</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
