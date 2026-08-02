import React, { useState } from 'react';
import { 
  Stethoscope, 
  Search, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Info, 
  PhoneCall, 
  Clock, 
  Pill, 
  TestTube, 
  ShieldCheck, 
  UserCheck, 
  Building2, 
  AlertCircle,
  Sparkles,
  Heart
} from 'lucide-react';
import { 
  AYUSHMAN_DISTRICTS, 
  getMatchingAyushmanMandirs, 
  AyushmanArogyaItem 
} from '../data/ayushmanData';

export const AyushmanArogyaFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const mandirs = getMatchingAyushmanMandirs(selectedDistrict, query);

  const handleCopyDetails = (item: AyushmanArogyaItem) => {
    const textToCopy = `Ayushman Arogya Mandir (AAM): ${item.name} (${item.hindiName})\nType: ${item.type}\nDistrict: ${item.district} | PIN Code: ${item.pincode}\nAddress: ${item.address}\nLandmark: ${item.landmark}\nOPD Timings: ${item.opdTimings}\nMedical Officer In-Charge: ${item.moicDoctor}\nPhone / Helpline: ${item.phone}\nFree Services: 212 Essential Medicines, 107 Diagnostic Tests, ABHA Health Card & Ayushman e-KYC\nOfficial Portal: https://aam.mohfw.gov.in`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_CLINIC_LOCATIONS = [
    { label: 'Saket (South)', q: 'Saket' },
    { label: 'Daryaganj (Central)', q: 'Daryaganj' },
    { label: 'Civil Lines (North)', q: 'Civil Lines' },
    { label: 'Dwarka (South West)', q: 'Dwarka' },
    { label: 'Lajpat Nagar', q: 'Lajpat Nagar' },
    { label: 'Laxmi Nagar (East)', q: 'Laxmi Nagar' },
    { label: 'Rohini (North West)', q: 'Rohini' },
    { label: 'Shahdara', q: 'Shahdara' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 via-teal-950/40 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Stethoscope className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Ayushman Arogya Mandir (Health & Wellness Centre)</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                Free Govt. Primary Care
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate government Ayushman Arogya Mandirs (Health & Wellness Centres) offering <strong>212 free essential medicines</strong>, <strong>107 free lab tests</strong>, free OPD consultation, and ABHA ID / Ayushman Card creation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://aam.mohfw.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>AAM Portal (aam.mohfw.gov.in)</span>
          </a>
          <a
            href="https://health.delhi.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Delhi Health Dept</span>
          </a>
        </div>
      </div>

      {/* Free Benefits Banner Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-zinc-900/90 border border-emerald-500/30 flex items-center gap-3">
          <Pill className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div>
            <span className="text-xs font-bold text-white block">212 Free Essential Medicines</span>
            <span className="text-[10px] text-zinc-400">Antibiotics, diabetes, BP & fever drugs</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-zinc-900/90 border border-teal-500/30 flex items-center gap-3">
          <TestTube className="w-5 h-5 text-teal-400 flex-shrink-0" />
          <div>
            <span className="text-xs font-bold text-white block">107 Free Diagnostic Tests</span>
            <span className="text-[10px] text-zinc-400">Blood sugar, CBC, hemoglobin & lipid</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-zinc-900/90 border border-amber-500/30 flex items-center gap-3">
          <UserCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <div>
            <span className="text-xs font-bold text-white block">Free ABHA & Ayushman Card</span>
            <span className="text-[10px] text-zinc-400">Instant digital health account creation</span>
          </div>
        </div>
      </div>

      {/* Interactive Search Controls */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search Box */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by area (Saket, Dwarka, Daryaganj), PIN code (110017), doctor name..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
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

          {/* District Filter Dropdown */}
          <div className="md:col-span-4">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-emerald-400 font-bold focus:outline-none focus:border-emerald-500"
            >
              {AYUSHMAN_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Clinics:</span>
          {QUICK_CLINIC_LOCATIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-white transition text-[11px]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Counter Header */}
      <div className="flex items-center justify-between text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-300 font-medium">
            Showing <strong className="text-white">{mandirs.length}</strong> Ayushman Arogya Mandir Clinic{mandirs.length !== 1 ? 's' : ''}
            {selectedDistrict !== 'All Districts' && ` in ${selectedDistrict}`}
          </span>
        </div>
        {(query || selectedDistrict !== 'All Districts') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="text-[11px] text-emerald-400 hover:underline font-bold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Mandirs List */}
      {mandirs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mandirs.map((item) => (
            <div 
              key={item.id} 
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/60 transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header Title & Type */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white flex items-center gap-1.5">
                        <Stethoscope className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {item.name}
                      </h4>
                    </div>
                    <span className="text-xs text-zinc-400 font-bold block mt-0.5">
                      ({item.hindiName})
                    </span>

                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                        {item.type}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-emerald-400 border border-zinc-800 font-mono font-bold">
                        PIN: {item.pincode}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        District: <strong className="text-zinc-200">{item.district}</strong>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyDetails(item)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy Ayushman Arogya Mandir details"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Timings & MOIC Doctor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">OPD Timings</span>
                      <span className="text-zinc-200 font-bold text-[11px]">{item.opdTimings}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">In-Charge Doctor</span>
                      <span className="text-zinc-200 font-bold text-[11px]">{item.moicDoctor}</span>
                    </div>
                  </div>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{item.address}</p>
                      <p className="text-[11px] text-zinc-400">Landmark: {item.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Facilities List */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Free Services Offered:
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {item.keyFacilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                        <Sparkles className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 flex-wrap">
                <a
                  href="https://aam.mohfw.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AAM Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`tel:${item.phone.split('/')[0].trim()}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-xs font-bold inline-flex items-center gap-1 border border-zinc-700"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {item.phone.split('/')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No Ayushman Arogya Mandir found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by district or locality name (Saket, Daryaganj, Rohini, Dwarka, Laxmi Nagar) or PIN code.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Ayushman Arogya Mandirs
          </button>
        </div>
      )}

      {/* Footer Official Portal Citations */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Directory synchronized with <strong className="text-zinc-200">Ayushman Arogya Mandir Official Portal (aam.mohfw.gov.in)</strong> and <strong className="text-zinc-200">Delhi Health Department (health.delhi.gov.in)</strong>.
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 font-bold text-[11px]">
          <a
            href="https://aam.mohfw.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>aam.mohfw.gov.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://health.delhi.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:underline flex items-center gap-1"
          >
            <span>health.delhi.gov.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
