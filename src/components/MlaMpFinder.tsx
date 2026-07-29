import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Info, 
  PhoneCall, 
  Mail, 
  Building2, 
  FileText, 
  Landmark, 
  Sparkles,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { 
  DELHI_VIDHAN_SABHA_MLAS, 
  DELHI_LOK_SABHA_MPS, 
  searchMlaAndMp, 
  MlaItem, 
  MpItem 
} from '../data/mlaMpData';

export const MlaMpFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'ALL' | 'MLA' | 'MP'>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { mlas, mps } = searchMlaAndMp(query, activeTab);

  const handleCopyMla = (item: MlaItem) => {
    const textToCopy = `Delhi Vidhan Sabha MLA Details:\nConstituency No. ${item.constituencyNo}: ${item.constituencyName} (${item.hindiName})\nMLA: ${item.mlaName} (${item.party})\nLok Sabha Constituency: ${item.lokSabhaConstituency}\nOffice Address: ${item.officeAddress}\nPhone: ${item.phone}\nEmail: ${item.email}\nPIN Codes: ${item.pincodes.join(', ')}\nKey Areas: ${item.keyAreas.join(', ')}\nOfficial Delhi Assembly: https://delhiassembly.delhi.gov.in`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(`mla-${item.constituencyNo}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyMp = (item: MpItem) => {
    const textToCopy = `Delhi Lok Sabha Member of Parliament (MP) Details:\nConstituency: ${item.constituencyName} (${item.hindiName})\nMP: ${item.mpName} (${item.party})\nOffice Address: ${item.officeAddress}\nPhone: ${item.phone}\nEmail: ${item.email}\nAreas Covered: ${item.areasCovered.join(', ')}\nOfficial Sansad Portal: https://sansad.in`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_AREAS = [
    { label: 'New Delhi (AC-40)', q: 'New Delhi' },
    { label: 'Rohini (AC-13)', q: 'Rohini' },
    { label: 'Dwarka (AC-33)', q: 'Dwarka' },
    { label: 'Chandni Chowk', q: 'Chandni Chowk' },
    { label: 'Laxmi Nagar', q: 'Laxmi Nagar' },
    { label: 'Malviya Nagar', q: 'Malviya Nagar' },
    { label: 'Okhla', q: 'Okhla' },
    { label: 'PIN 110001', q: '110001' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-orange-950/80 via-amber-950/40 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00]">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi MLA & MP Representative Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 font-bold uppercase">
                70 Vidhan Sabha & 7 Lok Sabha
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find contact details, constituency office addresses, telephone numbers, and email IDs for all <strong>70 Delhi Legislative Assembly (Vidhan Sabha) MLAs</strong> and <strong>7 Lok Sabha Members of Parliament (MPs)</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://delhiassembly.delhi.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <Building2 className="w-4 h-4" />
            <span>Delhi Assembly Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://delhiassembly.delhi.gov.in/sites/default/files/2025-04/list_of_member.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Official MLA List PDF</span>
          </a>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="space-y-3">
        {/* Search Bar & Tab Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-7 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by locality (Rohini, Dwarka), constituency name, MLA/MP name, PIN code..."
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

          <div className="md:col-span-5 flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`flex-1 py-1.5 rounded-lg font-bold text-center transition ${
                activeTab === 'ALL'
                  ? 'bg-[#FF6B00] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All (77)
            </button>
            <button
              onClick={() => setActiveTab('MLA')}
              className={`flex-1 py-1.5 rounded-lg font-bold text-center transition ${
                activeTab === 'MLA'
                  ? 'bg-[#FF6B00] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              MLAs (70)
            </button>
            <button
              onClick={() => setActiveTab('MP')}
              className={`flex-1 py-1.5 rounded-lg font-bold text-center transition ${
                activeTab === 'MP'
                  ? 'bg-[#FF6B00] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              MPs (7)
            </button>
          </div>
        </div>

        {/* Quick Location Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Quick Lookup:</span>
          {QUICK_AREAS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setActiveTab('ALL');
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
            Found <strong className="text-white">{mlas.length}</strong> MLA(s) and <strong className="text-white">{mps.length}</strong> MP(s)
            {query && ` matching "${query}"`}
          </span>
        </div>
        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-[11px] text-[#FF6B00] hover:underline font-bold"
          >
            Reset Query
          </button>
        )}
      </div>

      {/* SECTION 1: LOK SABHA MPs */}
      {mps.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Lok Sabha Members of Parliament (MPs) ({mps.length})
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mps.map((mp) => (
              <div 
                key={mp.id}
                className="p-5 rounded-2xl bg-zinc-900 border border-amber-500/30 hover:border-amber-400 transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                          Lok Sabha MP
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-amber-400 border border-zinc-800 font-bold">
                          {mp.party}
                        </span>
                      </div>
                      <h4 className="text-base font-black text-white mt-1">
                        {mp.mpName}
                      </h4>
                      <p className="text-xs text-amber-300 font-bold">
                        {mp.constituencyName} Constituency ({mp.hindiName})
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyMp(mp)}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                      title="Copy MP contact details"
                    >
                      {copiedId === mp.id ? (
                        <Check className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-zinc-400" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-300 pt-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">{mp.officeAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="font-mono text-zinc-200">{mp.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-zinc-300 font-mono text-[11px]">{mp.email}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/80 text-xs">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                      Key Vidhan Sabha Belts Covered ({mp.vidhanSabhaCount} Assemblies):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {mp.areasCovered.map((area, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${mp.phone.split('/')[0].trim()}`}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-bold inline-flex items-center gap-1.5 border border-amber-500/30"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Office</span>
                  </a>

                  <a
                    href="https://sansad.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <span>Sansad Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: VIDHAN SABHA MLAs */}
      {mlas.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
            <Users className="w-4 h-4 text-[#FF6B00]" />
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Delhi Legislative Assembly (Vidhan Sabha) MLAs ({mlas.length})
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mlas.map((mla) => (
              <div 
                key={mla.constituencyNo}
                className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00]/60 transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 font-bold">
                          Constituency No. {mla.constituencyNo}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-white border border-zinc-800 font-bold">
                          {mla.party}
                        </span>
                      </div>
                      <h4 className="text-base font-black text-white mt-1">
                        {mla.mlaName}
                      </h4>
                      <p className="text-xs text-[#FF6B00] font-bold">
                        AC-{mla.constituencyNo}: {mla.constituencyName} ({mla.hindiName})
                      </p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">
                        Lok Sabha: <strong className="text-zinc-200">{mla.lokSabhaConstituency}</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyMla(mla)}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                      title="Copy MLA contact details"
                    >
                      {copiedId === `mla-${mla.constituencyNo}` ? (
                        <Check className="w-4 h-4 text-[#FF6B00]" />
                      ) : (
                        <Copy className="w-4 h-4 text-zinc-400" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-300 pt-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">{mla.officeAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                      <span className="font-mono text-zinc-200">{mla.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                      <span className="text-zinc-300 font-mono text-[11px]">{mla.email}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/80 text-xs">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                      Key Areas & Pockets Covered:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {mla.keyAreas.map((area, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <a
                    href={`tel:${mla.phone.split('/')[0].trim()}`}
                    className="px-3 py-1.5 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] hover:bg-[#FF6B00]/30 text-xs font-bold inline-flex items-center gap-1.5 border border-[#FF6B00]/30"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Office</span>
                  </a>

                  <a
                    href="https://delhiassembly.delhi.gov.in/sites/default/files/2025-04/list_of_member.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <span>PDF Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Citations */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
          <span>
            Data aligned with <strong className="text-zinc-200">Delhi Legislative Assembly Official Member Directory (delhiassembly.delhi.gov.in)</strong>.
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 font-bold text-[11px]">
          <a
            href="https://delhiassembly.delhi.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B00] hover:underline flex items-center gap-1"
          >
            <span>delhiassembly.delhi.gov.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
