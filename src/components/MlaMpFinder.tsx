import React, { useState, useEffect } from 'react';
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
  getMlaAndMpByState,
  MlaItem, 
  MpItem,
  StateAssemblyPortalInfo
} from '../data/mlaMpData';
import { getStateInfo } from '../data/statesData';

interface MlaMpFinderProps {
  currentStateId?: string;
}

export const MlaMpFinder: React.FC<MlaMpFinderProps> = ({ currentStateId = 'delhi' }) => {
  const [selectedState, setSelectedState] = useState<string>(currentStateId);
  const [query, setQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'ALL' | 'MLA' | 'MP'>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (currentStateId) {
      setSelectedState(currentStateId);
    }
  }, [currentStateId]);

  const stateInfo = getStateInfo(selectedState);
  const { mlas, mps, assemblyInfo } = getMlaAndMpByState(selectedState, query, activeTab);

  const handleCopyMla = (item: MlaItem) => {
    const textToCopy = `${stateInfo.name} Vidhan Sabha MLA Details:\nConstituency No. ${item.constituencyNo}: ${item.constituencyName} (${item.hindiName})\nMLA: ${item.mlaName} (${item.party})\nLok Sabha Constituency: ${item.lokSabhaConstituency}\nOffice Address: ${item.officeAddress}\nPhone: ${item.phone}\nEmail: ${item.email}\nPIN Codes: ${item.pincodes.join(', ')}\nKey Areas: ${item.keyAreas.join(', ')}\nOfficial Assembly Portal: ${assemblyInfo.assemblyPortalUrl}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(`mla-${item.constituencyNo}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyMp = (item: MpItem) => {
    const textToCopy = `${stateInfo.name} Lok Sabha Member of Parliament (MP) Details:\nConstituency: ${item.constituencyName} (${item.hindiName})\nMP: ${item.mpName} (${item.party})\nOffice Address: ${item.officeAddress}\nPhone: ${item.phone}\nEmail: ${item.email}\nAreas Covered: ${item.areasCovered.join(', ')}\nOfficial Sansad Portal: https://sansad.in`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
              <h3 className="text-base font-black text-white">{stateInfo.name} MLA & MP Representative Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 font-bold uppercase">
                {assemblyInfo.totalMlaSeats} Vidhan Sabha & {assemblyInfo.totalMpSeats} Lok Sabha
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find contact details, constituency office addresses, telephone numbers, and email IDs for <strong>{assemblyInfo.assemblyName} MLAs</strong> and <strong>Lok Sabha Members of Parliament (MPs)</strong> from {stateInfo.name}.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href={assemblyInfo.assemblyPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <Building2 className="w-4 h-4" />
            <span>State Assembly Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={assemblyInfo.mlaListPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Members Directory</span>
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
              placeholder={`Search constituency, MLA/MP name, PIN code in ${stateInfo.name}...`}
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
              All Representatives
            </button>
            <button
              onClick={() => setActiveTab('MLA')}
              className={`flex-1 py-1.5 rounded-lg font-bold text-center transition ${
                activeTab === 'MLA'
                  ? 'bg-[#FF6B00] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Vidhan Sabha MLAs ({assemblyInfo.totalMlaSeats})
            </button>
            <button
              onClick={() => setActiveTab('MP')}
              className={`flex-1 py-1.5 rounded-lg font-bold text-center transition ${
                activeTab === 'MP'
                  ? 'bg-[#FF6B00] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Lok Sabha MPs ({assemblyInfo.totalMpSeats})
            </button>
          </div>
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#FF6B00]" />
          <span className="font-semibold text-zinc-200">
            Showing {mlas.length} MLA(s) & {mps.length} MP(s) for {stateInfo.name}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Direct Office Verified
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            State Assembly Connected
          </span>
        </div>
      </div>

      {/* Grid of Representatives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Render MLAs */}
        {mlas.map((mla) => {
          const isCopied = copiedId === `mla-${mla.constituencyNo}`;
          return (
            <div
              key={`mla-${mla.constituencyNo}`}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-orange-500/50 rounded-xl p-4 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-zinc-800/60 pb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-[#FF6B00] border border-orange-500/20 font-black">
                        AC-{mla.constituencyNo}
                      </span>
                      <h4 className="font-bold text-sm text-white group-hover:text-[#FF6B00] transition">
                        {mla.constituencyName}
                      </h4>
                      <span className="text-xs text-zinc-400 font-medium">({mla.hindiName})</span>
                    </div>
                    <p className="text-xs font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{mla.mlaName}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700">
                        {mla.party}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyMla(mla)}
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy MLA Contact Details"
                  >
                    {isCopied ? (
                      <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                    <span>{mla.officeAddress}</span>
                  </div>

                  <div className="flex items-center gap-4 text-zinc-300 flex-wrap">
                    <a
                      href={`tel:${mla.phone.split('/')[0].trim()}`}
                      className="inline-flex items-center gap-1.5 text-orange-400 hover:underline font-medium"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{mla.phone}</span>
                    </a>
                    {mla.email && (
                      <a
                        href={`mailto:${mla.email}`}
                        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[180px]">{mla.email}</span>
                      </a>
                    )}
                  </div>

                  {mla.keyAreas && mla.keyAreas.length > 0 && (
                    <div className="pt-2 border-t border-zinc-900 flex flex-wrap gap-1">
                      <span className="text-[10px] text-zinc-500 font-semibold mr-1">Areas:</span>
                      {mla.keyAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Lok Sabha: <strong className="text-zinc-300">{mla.lokSabhaConstituency}</strong></span>
                <span className="text-emerald-400 font-medium">Vidhan Sabha Active</span>
              </div>
            </div>
          );
        })}

        {/* Render MPs */}
        {mps.map((mp) => {
          const isCopied = copiedId === mp.id;
          return (
            <div
              key={mp.id}
              className="bg-zinc-950 border border-amber-800/40 hover:border-amber-600/60 rounded-xl p-4 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-zinc-800/60 pb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-black">
                        Lok Sabha MP
                      </span>
                      <h4 className="font-bold text-sm text-white group-hover:text-amber-400 transition">
                        {mp.constituencyName}
                      </h4>
                      <span className="text-xs text-zinc-400 font-medium">({mp.hindiName})</span>
                    </div>
                    <p className="text-xs font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-amber-400" />
                      <span>{mp.mpName}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold border border-zinc-700">
                        {mp.party}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyMp(mp)}
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy MP Contact Details"
                  >
                    {isCopied ? (
                      <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                    <span>{mp.officeAddress}</span>
                  </div>

                  <div className="flex items-center gap-4 text-zinc-300 flex-wrap">
                    <a
                      href={`tel:${mp.phone.split('/')[0].trim()}`}
                      className="inline-flex items-center gap-1.5 text-amber-400 hover:underline font-medium"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{mp.phone}</span>
                    </a>
                    {mp.email && (
                      <a
                        href={`mailto:${mp.email}`}
                        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[180px]">{mp.email}</span>
                      </a>
                    )}
                  </div>

                  {mp.areasCovered && mp.areasCovered.length > 0 && (
                    <div className="pt-2 border-t border-zinc-900 flex flex-wrap gap-1">
                      <span className="text-[10px] text-zinc-500 font-semibold mr-1">Includes:</span>
                      {mp.areasCovered.map((area, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Vidhan Sabha Segments: <strong className="text-zinc-300">{mp.vidhanSabhaCount}</strong></span>
                <span className="text-amber-400 font-medium">Parliament Member</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Directory Guidance */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-2">
        <div className="flex items-center gap-2 text-zinc-200 font-bold">
          <Info className="w-4 h-4 text-[#FF6B00]" />
          <span>Constituency Office Notice & Representation Guidelines:</span>
        </div>
        <p>
          Citizens can visit their respective elected MLA / MP office on public hearing days (usually Saturday mornings or daily by appointment). For legislative questions, bills, and Vidhan Sabha proceedings, visit the official {assemblyInfo.assemblyName} portal (<a href={assemblyInfo.assemblyPortalUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">{assemblyInfo.assemblyPortalUrl}</a>).
        </p>
      </div>
    </div>
  );
};
