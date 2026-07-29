import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  MapPin, 
  Building2, 
  PhoneCall, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  School, 
  Award, 
  Compass, 
  Mail, 
  User, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { 
  DELHI_SCHOOL_DISTRICTS, 
  DELHI_SCHOOL_ZONES, 
  DELHI_SCHOOL_CATEGORIES, 
  getMatchingGovtSchools, 
  GovtSchoolItem 
} from '../data/schoolData';

export const SchoolFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedZone, setSelectedZone] = useState<string>('All Zones');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const schools = getMatchingGovtSchools(selectedDistrict, selectedZone, selectedCategory, query);

  const handleCopyDetails = (school: GovtSchoolItem) => {
    const textToCopy = `School Name: ${school.name}\nDoE School ID: ${school.schoolId}\nCategory: ${school.category}\nDistrict & Zone: ${school.district} (${school.zone})\nGender & Shift: ${school.gender} (${school.shift} Shift)\nAddress: ${school.address} - ${school.pincode}\nStreams: ${school.streams.join(', ')}\nPrincipal / HOS: ${school.principal}\nPhone: ${school.phone}\nDoE Email: ${school.email}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(school.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_SCHOOL_SEARCHES = [
    { label: 'SoSE Surajmal Vihar (1001204)', q: '1001204' },
    { label: 'SKV Anand Vihar (1001001)', q: 'Anand Vihar' },
    { label: 'RPVV Rohini (1411125)', q: 'RPVV' },
    { label: 'SoSE Dwarka 22 (1821037)', q: 'Dwarka' },
    { label: 'SKV Shalimar Bagh', q: 'Shalimar Bagh' },
    { label: 'AFPS Gautampuri SoSE', q: 'AFPS' },
    { label: 'SKV Kalkaji (1925001)', q: 'Kalkaji' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/90 via-indigo-900/40 to-zinc-900 border border-indigo-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi Directorate of Education (DoE) Govt Schools Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold uppercase">
                1,000+ Schools Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate Sarvodaya Vidyalayas (SKV/SBV), Dr. B.R. Ambedkar Schools of Specialized Excellence (SoSE), RPVVs, GBSSS, GGSSS & Model Schools across 29 DoE zones in Delhi NCT.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://www.edudel.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>DoE edudel.nic.in Portal</span>
          </a>
          <a
            href="tel:01123890041"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-indigo-300 border border-indigo-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>DoE Helpline: 011-23890041</span>
          </a>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-4 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Search Field */}
          <div className="relative md:col-span-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search DoE ID (e.g. 1001001), School Name, Area..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* District Filter */}
          <div>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
            >
              {DELHI_SCHOOL_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Zone Filter */}
          <div>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
            >
              {DELHI_SCHOOL_ZONES.map((zn) => (
                <option key={zn} value={zn}>{zn}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
            >
              {DELHI_SCHOOL_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-zinc-800/60 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Searches:</span>
          {QUICK_SCHOOL_SEARCHES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
                setSelectedZone('All Zones');
                setSelectedCategory('All Categories');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-indigo-500 text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
          {(query || selectedDistrict !== 'All Districts' || selectedZone !== 'All Zones' || selectedCategory !== 'All Categories') && (
            <button
              onClick={() => {
                setQuery('');
                setSelectedDistrict('All Districts');
                setSelectedZone('All Zones');
                setSelectedCategory('All Categories');
              }}
              className="px-2.5 py-1 rounded-lg bg-red-950/60 text-red-300 border border-red-800/60 hover:bg-red-900/60 text-[11px] font-bold transition"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
        <div>
          Showing <strong className="text-white">{schools.length}</strong> Delhi Government Schools
          {selectedDistrict !== 'All Districts' && <span> in <strong className="text-indigo-400">{selectedDistrict}</strong></span>}
          {selectedZone !== 'All Zones' && <span> (<strong className="text-indigo-300">{selectedZone}</strong>)</span>}
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>edudel.nic.in Verified Database</span>
        </div>
      </div>

      {/* School Cards Grid */}
      {schools.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-[#121824] border border-zinc-800 space-y-3">
          <School className="w-10 h-10 text-zinc-600 mx-auto" />
          <h4 className="text-base font-bold text-white">No Government Schools Found</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            No school matched your filter criteria. Try searching by 7-digit DoE School ID, area name, or clear selected district filters.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedZone('All Zones');
              setSelectedCategory('All Categories');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition"
          >
            Reset Search Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schools.map((school) => (
            <div
              key={school.id}
              className={`p-5 rounded-2xl bg-[#121824] border transition space-y-4 flex flex-col justify-between shadow-xl ${
                school.isSoseOrRpvv ? 'border-amber-500/40 hover:border-amber-500' : 'border-zinc-800 hover:border-indigo-500/50'
              }`}
            >
              <div className="space-y-3">
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/80 font-mono">
                      ID: {school.schoolId}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                      {school.district} • {school.zone}
                    </span>
                    {school.isSoseOrRpvv && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/80 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Excellence School
                      </span>
                    )}
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    school.gender === 'Girls' ? 'bg-pink-950/60 text-pink-300 border-pink-800/60' :
                    school.gender === 'Boys' ? 'bg-blue-950/60 text-blue-300 border-blue-800/60' :
                    'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                  }`}>
                    {school.gender} • {school.shift} Shift
                  </span>
                </div>

                {/* School Title */}
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition leading-snug">
                    {school.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5 font-sans">{school.hindiName}</p>
                </div>

                {/* Address & Pincode */}
                <div className="flex items-start gap-2 text-xs text-zinc-300 bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span>{school.address}</span>
                    <span className="block text-[11px] text-zinc-400 font-mono mt-0.5">PIN Code: {school.pincode}</span>
                  </div>
                </div>

                {/* Streams offered */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Senior Sec Streams Offered:</span>
                  <div className="flex flex-wrap gap-1">
                    {school.streams.map((st, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Principal & Contacts */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                    <span className="truncate">{school.principal}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <a href={`tel:${school.phone.split('/')[0].trim()}`} className="hover:underline font-mono">
                      {school.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => handleCopyDetails(school)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-[11px] font-semibold flex items-center gap-1.5 transition"
                >
                  {copiedId === school.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Info</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://www.edudel.nic.in`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-[11px] font-bold flex items-center gap-1 transition"
                >
                  <span>DoE Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DoE Admission Guidance Box */}
      <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/50 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h4 className="text-sm font-bold text-white">Delhi Directorate of Education (DoE) Admission Guidance</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 space-y-1">
            <span className="text-[11px] font-bold text-indigo-400 block">Plan & Non-Plan Admissions</span>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Classes 6th to 9th admissions in Delhi Govt schools are conducted in three online cycles (Cycle 1, 2, 3) on edudel.nic.in.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 space-y-1">
            <span className="text-[11px] font-bold text-indigo-400 block">SoSE Specialized Entrance Test</span>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Admissions to Dr. B.R. Ambedkar SoSE (STEM, AFPS, Humanities, Performing Arts) require online registration & entrance exam.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 space-y-1">
            <span className="text-[11px] font-bold text-indigo-400 block">EWS / DG Quota Nursery Admissions</span>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              25% seats reserved for Economically Weaker Section (EWS) and Disadvantaged Group (DG) children under RTE Act in private & govt schools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
