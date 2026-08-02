import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  CalendarCheck, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Info,
  Globe,
  Award,
  Sparkles
} from 'lucide-react';
import { 
  DELHI_PASSPORT_REGIONS, 
  getMatchingPassportOffices, 
  PassportOfficeItem 
} from '../data/passportData';

export const PassportFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const offices = getMatchingPassportOffices(selectedRegion, query, selectedType);

  const handleCopyOfficeDetails = (office: PassportOfficeItem) => {
    const textToCopy = `${office.name}\nType: ${office.type}\nRegion: ${office.region}\nAddress: ${office.address} - ${office.pincode}\nLandmark: ${office.landmark}\nTimings: ${office.timings}\nPhone/Helpline: ${office.phone}\nServices: ${office.servicesOffered.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(office.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_AREAS = [
    { label: 'PSK ITO Herald House', q: 'Herald House' },
    { label: 'PSK Shalimar Bagh', q: 'Shalimar Bagh' },
    { label: 'RPO Bhikaji Cama', q: 'Bhikaji' },
    { label: 'PSK Gurgaon', q: 'Gurgaon' },
    { label: 'PSK Noida Sec 62', q: 'Noida' },
    { label: 'POPSK Yamuna Vihar', q: 'Yamuna Vihar' },
    { label: 'POPSK Rohini Sec 7', q: 'Rohini' },
    { label: 'POPSK Kalkaji', q: 'Kalkaji' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/80 via-amber-900/40 to-zinc-900 border border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi Passport Seva Kendra (PSK) & RPO Finder</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                MEA Govt of India Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate official Regional Passport Offices (RPO), Passport Seva Kendras (PSK), and Post Office PSKs (POPSK) across Delhi NCT & NCR for fresh passports, Tatkaal, or Police Clearance Certificates (PCC).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://www.passportindia.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Passport Appointment</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="tel:18002581800"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-amber-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Toll-Free 1800-258-1800</span>
          </a>
        </div>
      </div>

      {/* Advisory Box for Passport Applicants */}
      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-start gap-3 text-xs">
        <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-blue-200">
            Important Passport Application Guidelines:
          </p>
          <p className="text-zinc-300">
            Prior appointment booking on the official <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-semibold">Passport Seva Portal</a> is mandatory before visiting any PSK or POPSK. Carry original Proof of Birth, Proof of Identity, Address Proof (Aadhaar, Voter ID, Utility bill), and ARN printout.
          </p>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by locality (e.g. ITO, Shalimar Bagh, Rohini, Gurgaon), PIN code, or office name..."
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

          {/* Region Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              {DELHI_PASSPORT_REGIONS.map((reg) => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
            >
              <option value="All Types">All Office Types</option>
              <option value="PSK (Passport Seva Kendra)">Passport Seva Kendra (PSK)</option>
              <option value="POPSK (Post Office PSK)">Post Office PSK (POPSK)</option>
              <option value="RPO (Regional Passport Office)">Regional Passport Office (RPO)</option>
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Passport Kendras:</span>
          {QUICK_AREAS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedRegion('All Regions');
                setSelectedType('All Types');
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
            Showing <strong className="text-white">{offices.length}</strong> Passport Kendra{offices.length !== 1 ? 's' : ''} in {selectedRegion !== 'All Regions' ? selectedRegion : 'Delhi NCR'}
          </span>
        </div>
        {(query || selectedRegion !== 'All Regions' || selectedType !== 'All Types') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedRegion('All Regions');
              setSelectedType('All Types');
            }}
            className="text-[11px] text-amber-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Passport Offices Grid */}
      {offices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offices.map((office) => (
            <div 
              key={office.id} 
              className={`p-5 rounded-2xl bg-zinc-900 border transition space-y-4 flex flex-col justify-between ${
                office.isMainRpo 
                  ? 'border-amber-500/80 shadow-lg shadow-amber-950/20 bg-gradient-to-b from-amber-950/20 to-zinc-900' 
                  : 'border-zinc-800 hover:border-[#FF6B00]/60'
              }`}
            >
              <div className="space-y-3">
                {/* Title & Type Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white">{office.name}</h4>
                      {office.isMainRpo && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black uppercase">
                          Delhi Zonal HQ
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700 font-bold uppercase">
                        {office.type}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {office.region}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyOfficeDetails(office)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy passport office details"
                  >
                    {copiedId === office.id ? (
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
                      <p className="font-medium text-white">{office.address} - <span className="font-mono text-amber-400">{office.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {office.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Timings & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Timings</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        {office.timings}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">Helpline / Phone</span>
                      <a href={`tel:${office.phone.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono font-bold text-amber-400 hover:underline text-[11px]">
                        {office.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>

                {/* Services Offered */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Available Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {office.servicesOffered.map((s, idx) => (
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
                  href="https://www.passportindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://www.passportindia.gov.in/psp/trackApplicationService"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold inline-flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Track Status</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No passport centre found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by key locations such as ITO, Shalimar Bagh, Bhikaji Cama Place, Rohini, Dwarka, Gurgaon, or Noida.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedRegion('All Regions');
              setSelectedType('All Types');
            }}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Passport Kendras
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Passport Seva Kendra directory verified against <strong className="text-zinc-200">Passport Seva Division, Ministry of External Affairs, Govt. of India & Regional Passport Office Delhi Records</strong>.
          </span>
        </div>
        <a
          href="https://www.passportindia.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>Passport Seva Official Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
