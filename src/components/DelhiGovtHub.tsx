import React, { useState, useEffect } from 'react';
import { Landmark, ExternalLink, PhoneCall, Mail, MapPin, Search, X, CheckCircle } from 'lucide-react';
import { DELHI_DEPARTMENTS } from '../data/delhiDeptsData';

interface DelhiGovtHubProps {
  initialDeptId?: string | null;
  onResetDept?: () => void;
}

export const DelhiGovtHub: React.FC<DelhiGovtHubProps> = ({ initialDeptId, onResetDept }) => {
  const [query, setQuery] = useState('');
  const [activeDeptId, setActiveDeptId] = useState<string | null>(initialDeptId || null);

  useEffect(() => {
    if (initialDeptId) {
      setActiveDeptId(initialDeptId);
    }
  }, [initialDeptId]);

  const focusedDept = activeDeptId ? DELHI_DEPARTMENTS.find(d => d.id === activeDeptId) : null;

  const filteredDepts = DELHI_DEPARTMENTS.filter(d => {
    if (activeDeptId) {
      return d.id === activeDeptId;
    }
    return (
      d.name.toLowerCase().includes(query.toLowerCase()) || 
      d.hindiName.includes(query) || 
      d.shortCode.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleClearFocus = () => {
    setActiveDeptId(null);
    setQuery('');
    if (onResetDept) onResetDept();
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="mb-8 border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase mb-2">
            <Landmark className="w-3.5 h-3.5" /> Govt of NCT of Delhi Directory
          </div>
          <h2 className="text-3xl font-black text-white">Delhi Government Departments & Portals</h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
            Official contact helplines, head office addresses, and direct web links for MCD, DDA, Delhi Jal Board, Delhi Police, Transport, and Revenue Department.
          </p>
        </div>

        {!activeDeptId && (
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search MCD, DDA, Police, Jal Board..."
              className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
            />
          </div>
        )}
      </div>

      {/* Banner if focused on a specific department */}
      {focusedDept && (
        <div className="mb-6 p-4 rounded-2xl bg-[#162032] border border-[#FF6B00]/40 flex flex-wrap items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Direct Department Link & Details</p>
              <h3 className="text-base font-bold text-white">{focusedDept.name} ({focusedDept.shortCode})</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={focusedDept.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center gap-1.5"
            >
              <span>Launch {focusedDept.shortCode} Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleClearFocus}
              className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Show All Departments</span>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDepts.map((dept) => {
          const isHighlighted = dept.id === activeDeptId;
          return (
            <div
              key={dept.id}
              className={`p-6 rounded-2xl border space-y-4 transition shadow-xl ${
                isHighlighted
                  ? 'bg-[#162032] border-[#FF6B00] ring-2 ring-[#FF6B00]/30'
                  : 'bg-[#121824] border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800 uppercase">
                    {dept.shortCode}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{dept.name}</h3>
                  <p className="text-xs text-zinc-400">{dept.hindiName}</p>
                </div>

                <a
                  href={dept.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">{dept.description}</p>

              {/* Key Services Tags */}
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">Key Online Services</span>
                <div className="flex flex-wrap gap-1.5">
                  {dept.keyServices.map((ks, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 font-medium">
                      {ks}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Specs */}
              <div className="pt-2 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span>Helpline: <strong className="text-white font-mono">{dept.helpline}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                  <span className="truncate">{dept.headOffice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
