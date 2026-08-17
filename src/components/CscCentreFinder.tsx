import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Info,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { 
  MCD_ZONES, 
  getCscCentresByState, 
  CscCentreItem 
} from '../data/cscData';
import { getStateInfo } from '../data/statesData';

interface CscCentreFinderProps {
  currentStateId?: string;
}

export const CscCentreFinder: React.FC<CscCentreFinderProps> = ({ currentStateId = 'delhi' }) => {
  const [selectedState, setSelectedState] = useState<string>(currentStateId);
  const [query, setQuery] = useState<string>('');
  const [selectedZone, setSelectedZone] = useState<string>('All Zones');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (currentStateId) {
      setSelectedState(currentStateId);
      setSelectedZone('All Zones');
    }
  }, [currentStateId]);

  const stateInfo = getStateInfo(selectedState);
  const centres = getCscCentresByState(selectedState, selectedZone, query);

  const handleCopyCentreDetails = (centre: CscCentreItem) => {
    const textToCopy = `${centre.name}\nVLE: ${centre.vleName || 'Citizen Service Official'}\nZone/District: ${centre.mcdZone}\nAddress: ${centre.address} - ${centre.pincode}\nLandmark: ${centre.landmark}\nTimings: ${centre.timings}\nPhone/Helpline: ${centre.phone}\nServices: ${centre.servicesOffered.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(centre.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/80 via-amber-900/40 to-zinc-900 border border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">{stateInfo.name} Common Service Centre (CSC) & Citizen Facilitation Finder</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                Digital India Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate authorized Common Service Centres (CSC) and Citizen Facilitation Centres across {stateInfo.name} for Certificates, e-District services, utility bills, and welfare scheme registrations.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://findmycsc.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Digital India CSC Locator</span>
          </a>
          <a
            href="tel:14599"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>CSC National 14599</span>
          </a>
        </div>
      </div>

      {/* Advisory Box */}
      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-start gap-3 text-xs">
        <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-blue-200">
            MCD Digital Citizen Services Provided at CSCs:
          </p>
          <p className="text-zinc-300">
            All authorized CSC centers assist citizens with MCD Birth & Death digital certificates, Property Tax UPIC self-assessment filing, Factory/Health/Trade license applications, e-District Delhi certificates (OBC/SC, Income, Domicile), and water/electricity bill payments.
          </p>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-7 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by locality (e.g. Lajpat Nagar, Saket, Rohini, Dwarka), PIN code (110024), or VLE name..."
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

          {/* MCD Zone Dropdown */}
          <div className="md:col-span-5">
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              {MCD_ZONES.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#FF6B00]" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{centres.length}</strong> CSC / MCD Facilitation Centre{centres.length !== 1 ? 's' : ''} in {selectedZone !== 'All MCD Zones' ? selectedZone : 'Delhi MCD Circle'}
          </span>
        </div>
        {(query || selectedZone !== 'All MCD Zones') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedZone('All MCD Zones');
            }}
            className="text-[11px] text-amber-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* CSC Centres Grid */}
      {centres.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {centres.map((centre) => (
            <div 
              key={centre.id} 
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00]/60 transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Title & Type Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white">{centre.name}</h4>
                      {centre.mcdVerified && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          MCD Verified
                        </span>
                      )}
                    </div>
                    {centre.vleName && (
                      <p className="text-[11px] text-amber-400 font-semibold mt-1 flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                        <span>{centre.vleName}</span>
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 font-bold uppercase">
                        {centre.mcdZone}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyCentreDetails(centre)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy CSC centre details"
                  >
                    {copiedId === centre.id ? (
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
                      <p className="font-medium text-white">{centre.address} - <span className="font-mono text-amber-400">{centre.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {centre.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Timings & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Working Hours</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        {centre.timings}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Helpline / Phone</span>
                      <a href={`tel:${centre.phone.split('/')[0].trim()}`} className="font-mono font-bold text-amber-400 hover:underline text-[11px]">
                        {centre.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>

                {/* Services Offered */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Supported e-Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {centre.servicesOffered.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700/60 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://mcdonline.nic.in/portal/cscList"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>MCD Portal Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://edistrict.delhigovt.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold inline-flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>e-District Delhi</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No CSC centre found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by key locations such as Lajpat Nagar, Saket, Kalkaji, Rohini, Dwarka, Rajouri Garden, or Laxmi Nagar.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedZone('All MCD Zones');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi CSC Centres
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Common Service Centre (CSC) directory verified against <strong className="text-zinc-200">Municipal Corporation of Delhi (MCD) Official Portal & Digital Seva CSC Records</strong>.
          </span>
        </div>
        <a
          href="https://mcdonline.nic.in/portal/cscList"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>MCD Official CSC Directory Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
