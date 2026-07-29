import React, { useState } from 'react';
import { 
  Train, 
  Search, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Info, 
  Compass, 
  ParkingCircle, 
  Layers, 
  ArrowRightLeft, 
  ShieldCheck, 
  PhoneCall, 
  CreditCard,
  Building2,
  AlertCircle
} from 'lucide-react';
import { 
  METRO_LINE_OPTIONS, 
  METRO_DISTRICTS, 
  getMatchingMetroStations, 
  MetroStationItem 
} from '../data/metroData';

export const MetroStationFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedLine, setSelectedLine] = useState<string>('All Lines');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Zones');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const metroStations = getMatchingMetroStations(selectedLine, selectedDistrict, query);

  const handleCopyDetails = (station: MetroStationItem) => {
    const linesStr = station.lines.map(l => `${l.lineName} (${l.terminalStations})`).join('\n  • ');
    const textToCopy = `Delhi Metro Station: ${station.name} (${station.hindiName})\nPIN Code: ${station.pincode}\nZone/District: ${station.district}\nLandmark: ${station.landmark}\nInterchange: ${station.isInterchange ? 'Yes (' + (station.interchangeLines?.join(', ') || '') + ')' : 'No'}\nParking Available: ${station.hasParking ? 'Yes' : 'No'}\nStation Structure: ${station.isElevatedOrUnderground}\nLines Connected:\n  • ${linesStr}\nGates Info: ${station.gatesInfo}\nDMRC Helpline: 155370 / 011-23417910`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(station.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getLineBadgeStyle = (colorName: string) => {
    const c = colorName.toLowerCase();
    if (c.includes('yellow')) return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
    if (c.includes('blue')) return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
    if (c.includes('red')) return 'bg-red-500/20 text-red-300 border-red-500/50';
    if (c.includes('pink')) return 'bg-pink-500/20 text-pink-300 border-pink-500/50';
    if (c.includes('magenta')) return 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/50';
    if (c.includes('violet')) return 'bg-purple-500/20 text-purple-300 border-purple-500/50';
    if (c.includes('green')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50';
    if (c.includes('orange') || c.includes('airport')) return 'bg-amber-500/20 text-amber-300 border-amber-500/50';
    if (c.includes('grey')) return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/50';
    if (c.includes('aqua')) return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50';
    return 'bg-zinc-800 text-zinc-300 border-zinc-700';
  };

  const getLineDotColor = (colorName: string) => {
    const c = colorName.toLowerCase();
    if (c.includes('yellow')) return 'bg-yellow-400';
    if (c.includes('blue')) return 'bg-blue-400';
    if (c.includes('red')) return 'bg-red-500';
    if (c.includes('pink')) return 'bg-pink-400';
    if (c.includes('magenta')) return 'bg-fuchsia-400';
    if (c.includes('violet')) return 'bg-purple-400';
    if (c.includes('green')) return 'bg-emerald-400';
    if (c.includes('orange') || c.includes('airport')) return 'bg-amber-500';
    if (c.includes('grey')) return 'bg-zinc-400';
    if (c.includes('aqua')) return 'bg-cyan-400';
    return 'bg-zinc-400';
  };

  const QUICK_INTERCHANGES = [
    { label: 'Rajiv Chowk (CP)', q: 'Rajiv Chowk' },
    { label: 'Kashmere Gate ISBT', q: 'Kashmere Gate' },
    { label: 'Hauz Khas IIT', q: 'Hauz Khas' },
    { label: 'Central Secretariat', q: 'Central Secretariat' },
    { label: 'Botanical Garden', q: 'Botanical Garden' },
    { label: 'Anand Vihar ISBT', q: 'Anand Vihar' },
    { label: 'NSP Pitampura', q: 'Netaji Subhash' },
    { label: 'Janakpuri West', q: 'Janakpuri West' },
    { label: 'IGI Airport T3', q: 'IGI Airport' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/80 via-blue-950/40 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
            <Train className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi Metro Station & Line Directory (DMRC)</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                DMRC Official Station Data
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Find DMRC Metro stations with line color codes (Red, Yellow, Blue, Pink, Magenta, Violet, Green, Airport Express), 6-digit PIN codes, interchange junctions, and parking facilities.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://www.delhimetrorail.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Official DMRC Station List</span>
          </a>
          <a
            href="https://delhimetrorail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <CreditCard className="w-3.5 h-3.5 text-red-400" />
            <span>DMRC Route & Fare</span>
          </a>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search station name (Rajiv Chowk, Hauz Khas), PIN code (110001), or landmark..."
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

          {/* Line Color Filter Dropdown */}
          <div className="md:col-span-4">
            <select
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-red-400 font-bold focus:outline-none focus:border-red-500"
            >
              {METRO_LINE_OPTIONS.map((line) => (
                <option key={line} value={line}>Line: {line}</option>
              ))}
            </select>
          </div>

          {/* Zone / District Filter Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            >
              {METRO_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Major Interchanges:</span>
          {QUICK_INTERCHANGES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedLine('All Lines');
                setSelectedDistrict('All Zones');
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
            Showing <strong className="text-white">{metroStations.length}</strong> Metro Station{metroStations.length !== 1 ? 's' : ''}
            {selectedLine !== 'All Lines' && ` on ${selectedLine}`}
            {selectedDistrict !== 'All Zones' && ` in ${selectedDistrict}`}
          </span>
        </div>
        {(query || selectedLine !== 'All Lines' || selectedDistrict !== 'All Zones') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedLine('All Lines');
              setSelectedDistrict('All Zones');
            }}
            className="text-[11px] text-red-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Metro Stations Grid */}
      {metroStations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metroStations.map((station) => (
            <div 
              key={station.id} 
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/60 transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Station Title & Hindi Name */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white flex items-center gap-1.5">
                        <Train className="w-4 h-4 text-red-400 flex-shrink-0" />
                        {station.name}
                      </h4>
                      <span className="text-xs text-zinc-400 font-bold">
                        ({station.hindiName})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-red-400 border border-zinc-800 font-mono font-bold">
                        PIN: {station.pincode}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        Zone: <strong className="text-zinc-200">{station.district}</strong>
                      </span>
                      {station.isInterchange && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold flex items-center gap-1">
                          <ArrowRightLeft className="w-3 h-3 text-purple-400" />
                          Interchange Station
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyDetails(station)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy Metro station details"
                  >
                    {copiedId === station.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Line Colors Badges & Route */}
                <div className="space-y-2 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Connected Metro Line(s):
                  </span>
                  <div className="space-y-1.5">
                    {station.lines.map((l, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${getLineDotColor(l.lineColor)}`} />
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getLineBadgeStyle(l.lineColor)}`}>
                            {l.lineName}
                          </span>
                        </div>
                        <span className="text-[10px] text-zinc-400 font-mono">
                          {l.terminalStations}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Landmark & PIN Code Location */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{station.landmark}</p>
                      <p className="text-[11px] text-zinc-400">Postal PIN Code Area: <strong className="text-red-400 font-mono">{station.pincode}</strong> ({station.district})</p>
                    </div>
                  </div>
                </div>

                {/* Parking & Gates Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Parking Facility</span>
                      <span className={`font-bold text-[11px] flex items-center gap-1 ${station.hasParking ? 'text-emerald-400' : 'text-zinc-400'}`}>
                        <ParkingCircle className="w-3.5 h-3.5" />
                        {station.hasParking ? 'Paid Parking Available' : 'No Parking Facility'}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Station Structure</span>
                      <span className="font-bold text-zinc-300 text-[11px] flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-red-400" />
                        {station.isElevatedOrUnderground}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gates Info */}
                <div className="pt-2 border-t border-zinc-800/80 text-xs">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-0.5">
                    Gate & Exit Directions:
                  </span>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    {station.gatesInfo}
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://www.delhimetrorail.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <Train className="w-3.5 h-3.5" />
                  <span>DMRC Station List Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="tel:155370"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-red-400 text-xs font-bold inline-flex items-center gap-1 border border-zinc-700"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Helpline 155370</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No metro station found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by station name (Rajiv Chowk, Kashmere Gate, Hauz Khas, Dwarka), PIN code (110001), or line color (Yellow, Blue, Red, Pink, Magenta).
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedLine('All Lines');
              setSelectedDistrict('All Zones');
            }}
            className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Metro Stations
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Directory synchronized with <strong className="text-zinc-200">Delhi Metro Rail Corporation (DMRC) Official Smart Card & Station Directory (dmrcsmartcard.com)</strong>.
          </span>
        </div>
        <a
          href="https://www.delhimetrorail.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-red-400 hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>dmrcsmartcard.com Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
