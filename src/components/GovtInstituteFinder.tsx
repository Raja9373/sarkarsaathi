import React, { useState, useMemo } from 'react';
import { 
  DELHI_INSTITUTE_CATEGORIES, 
  DELHI_GOVERNING_BODIES, 
  getMatchingGovtInstitutes, 
  GovtInstituteItem 
} from '../data/instituteData';
import { 
  Building2, 
  Search, 
  ExternalLink, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Filter, 
  Copy, 
  Check, 
  Compass, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

export const GovtInstituteFinder: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedBody, setSelectedBody] = useState<string>('All Governing Bodies');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredInstitutes = useMemo(() => {
    return getMatchingGovtInstitutes(selectedCategory, selectedBody, searchQuery);
  }, [selectedCategory, selectedBody, searchQuery]);

  const handleCopy = (inst: GovtInstituteItem) => {
    const text = `${inst.name} (${inst.hindiName})
Governing Body: ${inst.governingBody}
Category: ${inst.category}
Address: ${inst.address}, PIN: ${inst.pincode}
Courses: ${inst.coursesOffered.join(', ')}
Website: ${inst.website} | Phone: ${inst.phone}
iGOD Directory Code: ${inst.igodRefCode}`;

    navigator.clipboard.writeText(text);
    setCopiedId(inst.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-zinc-900 to-zinc-900 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Official iGOD Directory (E009 / Higher & Technical Education)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-emerald-400 shrink-0" />
              Delhi Government Institutes & DU Colleges Finder
            </h2>
            <p className="text-zinc-300 text-sm max-w-2xl">
              Directory of Delhi University (DU North, South & Off-Campus) Affiliated Colleges, Delhi State Universities (DTU, NSUT, IPU, IIITD, AUD, DSEU), Medical Colleges (MAMC, AIIMS), Engineering Institutes, ITIs, and DIETs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 bg-zinc-950/60 p-3.5 rounded-xl border border-zinc-800 text-xs text-zinc-300">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-white">Verified Government Directory</p>
              <p className="text-zinc-400 text-[11px]">Directory Code: <span className="font-mono text-emerald-400 font-bold">DL/E009</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search institute name, course, area, pin code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <Filter className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
            >
              {DELHI_INSTITUTE_CATEGORIES.map(cat => (
                <option key={cat} value={cat} className="bg-zinc-900 text-zinc-100">{cat}</option>
              ))}
            </select>
          </div>

          {/* Governing Body Dropdown */}
          <div className="relative">
            <Building2 className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedBody}
              onChange={(e) => setSelectedBody(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer"
            >
              {DELHI_GOVERNING_BODIES.map(body => (
                <option key={body} value={body} className="bg-zinc-900 text-zinc-100">{body}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1 pt-1 border-t border-zinc-800/60">
          <span>
            Showing <strong className="text-emerald-400">{filteredInstitutes.length}</strong> government institutes matching criteria
          </span>
          {(searchQuery || selectedCategory !== 'All Categories' || selectedBody !== 'All Governing Bodies') && (
            <button
              onClick={() => {
                setSelectedCategory('All Categories');
                setSelectedBody('All Governing Bodies');
                setSearchQuery('');
              }}
              className="text-emerald-400 hover:underline font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Institutes Cards Grid */}
      {filteredInstitutes.length === 0 ? (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-12 text-center space-y-3">
          <Building2 className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-lg font-semibold text-zinc-200">No Institutes Found</h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            No government educational institute matched your search filter. Try clearing the search query or selecting "All Categories".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredInstitutes.map((inst) => (
            <div 
              key={inst.id}
              className="bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-5 space-y-4 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Title and Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {inst.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800 text-zinc-300">
                        {inst.governingBody}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-zinc-400">{inst.hindiName}</p>
                  </div>

                  <button
                    onClick={() => handleCopy(inst)}
                    title="Copy details"
                    className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors shrink-0"
                  >
                    {copiedId === inst.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {inst.description}
                </p>

                {/* Address & District */}
                <div className="bg-zinc-950/70 rounded-xl p-3 space-y-1.5 text-xs text-zinc-300 border border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-zinc-200">{inst.address}</p>
                      <p className="text-zinc-500 text-[11px]">District: {inst.district} | PIN: {inst.pincode}</p>
                    </div>
                  </div>
                </div>

                {/* Key Courses Offered */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Key Programs & Degrees Offered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {inst.coursesOffered.map((course, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-zinc-800/90 text-zinc-300 rounded text-[11px] border border-zinc-700/50">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contacts */}
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400 pt-1">
                  <div className="flex items-center gap-1.5 truncate">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{inst.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{inst.email}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3 text-xs">
                <span className="text-[11px] font-mono text-zinc-500">
                  iGOD Code: {inst.igodRefCode}
                </span>

                <a
                  href={inst.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
                >
                  Visit Official Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reference Footer Banner */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Information sourced directly from Indian Government Open Data Portal (iGOD) - Delhi E009 Organizations.</span>
        </div>
        <a
          href="https://igod.gov.in/sg/DL/E009/organizations"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:underline flex items-center gap-1 font-medium shrink-0"
        >
          View Source iGOD Portal <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
