import React, { useState } from 'react';
import { 
  Cross, 
  Search, 
  PhoneCall, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  FileText, 
  Info,
  Sparkles,
  HeartPulse,
  Activity,
  Bed,
  ShieldAlert
} from 'lucide-react';
import { 
  DELHI_HOSPITAL_DISTRICTS, 
  HOSPITAL_TYPES,
  getMatchingHospitals, 
  HospitalItem 
} from '../data/hospitalData';

export const HospitalFinder: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All Districts');
  const [selectedType, setSelectedType] = useState<string>('All Hospital Types');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const hospitals = getMatchingHospitals(selectedDistrict, selectedType, query);

  const handleCopyHospitalDetails = (hosp: HospitalItem) => {
    const textToCopy = `${hosp.name}\nType: ${hosp.type}\nDistrict: ${hosp.district}\nAddress: ${hosp.address} - ${hosp.pincode}\nLandmark: ${hosp.landmark}\nEmergency Helpline: ${hosp.emergencyNumber}\nGeneral Phone: ${hosp.phone}\nOPD Timings: ${hosp.opdTimings}\nBed Capacity: ~${hosp.bedCapacity} Beds\nSpecialties: ${hosp.specialties.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(hosp.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_HOSPITALS = [
    { label: 'LNJP Hospital (MAMC)', q: 'LNJP' },
    { label: 'AIIMS Apex Trauma (24x7)', q: 'AIIMS' },
    { label: 'RML Hospital (CP)', q: 'RML' },
    { label: 'Safdarjung Emergency', q: 'Safdarjung' },
    { label: 'GTB Hospital (Dilshad)', q: 'GTB' },
    { label: 'DDU Hospital (Hari Nagar)', q: 'Deen Dayal' },
    { label: 'BSA Hospital (Rohini)', q: 'Ambedkar' },
    { label: 'Hindu Rao (Civil Lines)', q: 'Hindu Rao' },
    { label: 'Chacha Nehru Pediatric', q: 'Chacha Nehru' }
  ];

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/90 via-red-900/40 to-zinc-900 border border-red-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
            <Cross className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-white">Delhi Government & Central Hospital Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase">
                Govt of Delhi Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate official Delhi Government Hospitals (DGHS), Autonomous Super Specialty Institutes, Central Govt Medical Colleges (AIIMS/RML/Safdarjung), and MCD Municipal Hospitals with 24x7 Emergency Casualty contacts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="https://health.delhi.gov.in/health/delhi-government-hospitals"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Delhi Govt Health Portal</span>
          </a>
          <a
            href="tel:102"
            className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-red-400 border border-red-800/60 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>CATS Ambulance 102 / 108</span>
          </a>
        </div>
      </div>

      {/* Emergency Advisory Box */}
      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 flex items-start gap-3 text-xs">
        <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-red-200">
            24x7 Free Emergency Casualty & Hospital Care in Delhi:
          </p>
          <p className="text-zinc-300">
            All Delhi Government and Central Government hospitals provide free 24x7 emergency casualty care, free essential medicines, and free diagnostic lab tests. Call <strong className="text-white font-mono">102 or 108</strong> for CATS free emergency ambulance service anywhere in Delhi NCT.
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
              placeholder="Search by hospital name (LNJP, AIIMS, RML, GTB), area, PIN code, or specialty (Cardiology, Trauma, Pediatrics)..."
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

          {/* District Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            >
              {DELHI_HOSPITAL_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Hospital Type Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            >
              {HOSPITAL_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-400 font-semibold text-[11px]">Popular Govt Hospitals:</span>
          {QUICK_HOSPITALS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(item.q);
                setSelectedDistrict('All Districts');
                setSelectedType('All Hospital Types');
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
            Showing <strong className="text-white">{hospitals.length}</strong> Government Hospital{hospitals.length !== 1 ? 's' : ''} in {selectedDistrict !== 'All Districts' ? selectedDistrict : 'Delhi NCR'}
          </span>
        </div>
        {(query || selectedDistrict !== 'All Districts' || selectedType !== 'All Hospital Types') && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedType('All Hospital Types');
            }}
            className="text-[11px] text-red-400 hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Hospital Cards Grid */}
      {hospitals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hospitals.map((hosp) => (
            <div 
              key={hosp.id} 
              className={`p-5 rounded-2xl bg-zinc-900 border transition space-y-4 flex flex-col justify-between ${
                hosp.hasTraumaCenter 
                  ? 'border-red-500/80 shadow-lg shadow-red-950/20 bg-gradient-to-b from-red-950/20 to-zinc-900' 
                  : 'border-zinc-800 hover:border-red-500/60'
              }`}
            >
              <div className="space-y-3">
                {/* Title & Type Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-black text-white">{hosp.name}</h4>
                      {hosp.hasTraumaCenter && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase flex items-center gap-1">
                          <Activity className="w-3 h-3 text-red-400" />
                          24x7 Trauma Center
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-red-400 border border-zinc-700 font-bold uppercase">
                        {hosp.type}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {hosp.district}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyHospitalDetails(hosp)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
                    title="Copy hospital details"
                  >
                    {copiedId === hosp.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{hosp.address} - <span className="font-mono text-red-400">{hosp.pincode}</span></p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Landmark: {hosp.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Emergency & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-red-300 font-bold uppercase block">24x7 Emergency / Casualty</span>
                      <a href={`tel:${hosp.emergencyNumber.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono font-black text-red-400 hover:underline text-[11px]">
                        {hosp.emergencyNumber}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">General Board / OPD</span>
                      <a href={`tel:${hosp.phone.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono font-bold text-zinc-200 hover:underline text-[11px]">
                        {hosp.phone}
                      </a>
                    </div>
                    <PhoneCall className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                </div>

                {/* OPD Timings & Bed Capacity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">OPD Hours</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-red-400 flex-shrink-0" />
                        {hosp.opdTimings}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase block">In-Patient Capacity</span>
                      <span className="font-medium text-zinc-200 text-[11px] flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                        ~{hosp.bedCapacity} Hospital Beds
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specialties Tags */}
                <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Key Specialties & Facilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hosp.specialties.map((s, idx) => (
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
                  href="https://health.delhi.gov.in/health/delhi-government-hospitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Delhi Health Directory</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`tel:${hosp.emergencyNumber.split('/')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-red-400 text-xs font-bold inline-flex items-center gap-1 border border-red-800/50"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Emergency</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No government hospital found matching "{query}"</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by key hospital names (LNJP, AIIMS, RML, Safdarjung, GTB, DDU, Ambedkar) or specialties (Cardiology, Trauma, Surgery, Pediatrics).
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All Districts');
              setSelectedType('All Hospital Types');
            }}
            className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All Delhi Government Hospitals
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Hospital directory verified against <strong className="text-zinc-200">Department of Health & Family Welfare, Govt. of NCT of Delhi (health.delhi.gov.in) & Ministry of Health and Family Welfare (MoHFW) Records</strong>.
          </span>
        </div>
        <a
          href="https://health.delhi.gov.in/health/delhi-government-hospitals"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-red-400 hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>health.delhi.gov.in Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
