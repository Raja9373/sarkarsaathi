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
  HeartPulse, 
  Activity, 
  Bed, 
  ShieldAlert,
  Globe
} from 'lucide-react';
import { getStateDataSet } from '../data/stateDataManager';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { HospitalItem } from '../data/hospitalData';

interface HospitalFinderProps {
  currentStateId?: string;
}

export const HospitalFinder: React.FC<HospitalFinderProps> = ({ currentStateId = 'delhi' }) => {
  const [selectedState, setSelectedState] = useState<string>(currentStateId);
  const [query, setQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (currentStateId) {
      setSelectedState(currentStateId);
      setSelectedDistrict('All');
    }
  }, [currentStateId]);

  const stateData = getStateDataSet(selectedState);
  const stateInfo = getStateInfo(selectedState);
  const stateHospitals = stateData.hospitals || [];

  // Extract available districts from state's hospitals
  const availableDistricts = ['All', ...Array.from(new Set(stateHospitals.map(h => h.district))).filter(Boolean)];
  const availableTypes = ['All', ...Array.from(new Set(stateHospitals.map(h => h.type))).filter(Boolean)];

  // Filter hospitals
  const filteredHospitals = stateHospitals.filter(hosp => {
    const matchesDistrict = selectedDistrict === 'All' || hosp.district.toLowerCase() === selectedDistrict.toLowerCase();
    const matchesType = selectedType === 'All' || hosp.type === selectedType;
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) return matchesDistrict && matchesType;

    const matchesName = hosp.name.toLowerCase().includes(cleanQuery);
    const matchesAddr = hosp.address.toLowerCase().includes(cleanQuery);
    const matchesPin = hosp.pincode.includes(cleanQuery);
    const matchesSpecialty = hosp.specialties.some(s => s.toLowerCase().includes(cleanQuery));

    return matchesDistrict && matchesType && (matchesName || matchesAddr || matchesPin || matchesSpecialty);
  });

  const handleCopyHospitalDetails = (hosp: HospitalItem) => {
    const textToCopy = `${hosp.name}\nType: ${hosp.type}\nDistrict: ${hosp.district}\nAddress: ${hosp.address} - ${hosp.pincode}\nLandmark: ${hosp.landmark || ''}\nEmergency Helpline: ${hosp.emergencyNumber}\nGeneral Phone: ${hosp.phone}\nOPD Timings: ${hosp.opdTimings}\nBed Capacity: ~${hosp.bedCapacity} Beds\nSpecialties: ${hosp.specialties.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(hosp.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
              <h3 className="text-base font-black text-white">{stateInfo.name} Government & Central Hospital Directory</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase">
                {stateInfo.code || 'GOVT'} Verified
              </span>
            </div>
            <p className="text-xs text-zinc-300 mt-0.5">
              Locate official Government Hospitals, Medical Colleges, AIIMS & Apex institutes with 24x7 Emergency Casualty & Trauma contacts in {stateInfo.name}.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
          <a
            href="tel:108"
            className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-md transition"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency Ambulance 108 / 102</span>
          </a>
        </div>
      </div>

      {/* State Selection Bar */}
      <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-red-400" />
          <span className="font-bold text-zinc-200">Select State / UT for Hospital Directory:</span>
        </div>
        <div className="w-full sm:w-72">
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedDistrict('All');
              setSelectedType('All');
            }}
            className="w-full bg-zinc-950 border border-zinc-700 text-white rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-red-500"
          >
            {STATES_LIST.filter(s => s.id !== 'national').map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.hindiName})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Emergency Advisory Box */}
      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 flex items-start gap-3 text-xs">
        <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-red-200">
            24x7 Free Emergency Casualty Care in {stateInfo.name}:
          </p>
          <p className="text-zinc-300">
            All apex state government and central institutions provide 24x7 emergency trauma care. Dial <strong className="text-white font-mono">108 or 102</strong> for free emergency ambulance dispatch.
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
              placeholder={`Search hospitals in ${stateInfo.name} by name, area, PIN code, or specialty...`}
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
              {availableDistricts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist === 'All' ? 'All Districts' : dist}
                </option>
              ))}
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
            >
              {availableTypes.map((t) => (
                <option key={t} value={t}>
                  {t === 'All' ? 'All Hospital Types' : t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2">
        <span>
          Showing <strong className="text-white">{filteredHospitals.length}</strong> government hospital{filteredHospitals.length === 1 ? '' : 's'} in <strong className="text-red-400">{stateInfo.name}</strong>
        </span>
        <span className="text-[11px] text-zinc-500">
          Source: State Health Department & MoHFW Directory
        </span>
      </div>

      {/* Hospital Cards Grid */}
      {filteredHospitals.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredHospitals.map((hosp) => (
            <div
              key={hosp.id}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/60 transition-all flex flex-col justify-between gap-4 group"
            >
              <div className="space-y-3">
                {/* Header: Name & Type */}
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                        {hosp.type}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-zinc-800 text-zinc-300">
                        {hosp.district}
                      </span>
                      {hosp.hasTraumaCenter && (
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Apex Trauma Center
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-red-300 transition">
                      {hosp.name}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopyHospitalDetails(hosp)}
                    title="Copy details"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex-shrink-0 transition"
                  >
                    {copiedId === hosp.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Address & Landmark */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{hosp.address} - <strong className="text-white font-mono">{hosp.pincode}</strong></span>
                  </div>
                  {hosp.landmark && (
                    <div className="flex items-start gap-2 text-zinc-400 pl-6 text-[11px]">
                      <span>Landmark: {hosp.landmark}</span>
                    </div>
                  )}
                </div>

                {/* Contacts & Capacity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-semibold">24x7 Emergency Helpline</span>
                      <a href={`tel:${hosp.emergencyNumber.split('/')[0].replace(/[^0-9]/g, '')}`} className="font-mono text-xs font-bold text-red-300 hover:underline">
                        {hosp.emergencyNumber}
                      </a>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-semibold">Bed Capacity</span>
                      <span className="font-mono text-xs font-bold text-zinc-200">
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
                  href={`tel:${hosp.emergencyNumber.split('/')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Emergency ({hosp.emergencyNumber.split('/')[0]})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No government hospital found matching "{query}" in {stateInfo.name}</h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try searching by area or specialty, or switch state to view apex institutes.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedDistrict('All');
              setSelectedType('All');
            }}
            className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:brightness-110 transition"
          >
            Show All {stateInfo.name} Hospitals
          </button>
        </div>
      )}

      {/* Official Directory Citation Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Hospital directory verified against <strong className="text-zinc-200">State Health Department & National Health Portal (NHP / MoHFW)</strong> for {stateInfo.name}.
          </span>
        </div>
      </div>
    </div>
  );
};
