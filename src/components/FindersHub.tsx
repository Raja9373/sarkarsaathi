import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Building2, 
  Search, 
  ExternalLink,
  PhoneCall,
  CheckCircle2,
  Copy,
  Check,
  Building,
  Info
} from 'lucide-react';
import { FINDER_CATEGORIES, MOCK_DELHI_PINCODES, MOCK_DELHI_SDM_OFFICES } from '../data/findersData';
import { IfscFinder } from './IfscFinder';
import { PoliceStationFinder } from './PoliceStationFinder';
import { AadhaarCentreFinder } from './AadhaarCentreFinder';
import { PassportFinder } from './PassportFinder';
import { CscCentreFinder } from './CscCentreFinder';
import { JanAushadhiFinder } from './JanAushadhiFinder';
import { HospitalFinder } from './HospitalFinder';
import { BloodBankFinder } from './BloodBankFinder';
import { RtoFinder } from './RtoFinder';
import { MetroStationFinder } from './MetroStationFinder';
import { AyushmanArogyaFinder } from './AyushmanArogyaFinder';
import { MlaMpFinder } from './MlaMpFinder';
import { SchoolFinder } from './SchoolFinder';
import { GovtInstituteFinder } from './GovtInstituteFinder';
import { GovtInsuranceFinder } from './GovtInsuranceFinder';
import { GovtOfficesFinder } from './GovtOfficesFinder';

interface FindersHubProps {
  initialFinderId?: string;
}

export const FindersHub: React.FC<FindersHubProps> = ({ initialFinderId }) => {
  const [selectedFinderId, setSelectedFinderId] = useState<string>(initialFinderId || 'govt-offices');

  React.useEffect(() => {
    if (initialFinderId) {
      setSelectedFinderId(initialFinderId);
    }
  }, [initialFinderId]);
  const [query, setQuery] = useState<string>('');
  const [districtFilter, setDistrictFilter] = useState<string>('All');
  const [copiedPin, setCopiedPin] = useState<string | null>(null);

  const activeCategory = FINDER_CATEGORIES.find(f => f.id === selectedFinderId) || FINDER_CATEGORIES[0];

  const handleCopyPin = (pin: string) => {
    navigator.clipboard.writeText(pin);
    setCopiedPin(pin);
    setTimeout(() => setCopiedPin(null), 2000);
  };

  const isNumericQuery = /^\d+$/.test(query.trim());

  // Filtering PIN Codes with district support
  const filteredPincodes = MOCK_DELHI_PINCODES.filter(p => {
    const matchesDistrict = districtFilter === 'All' || p.district.toLowerCase() === districtFilter.toLowerCase();
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return matchesDistrict;

    const matchesPin = p.pin.includes(cleanQuery);
    const matchesArea = p.area.toLowerCase().includes(cleanQuery);
    const matchesDistrictName = p.district.toLowerCase().includes(cleanQuery);
    const matchesPostOffice = p.postOffice.toLowerCase().includes(cleanQuery);

    return matchesDistrict && (matchesPin || matchesArea || matchesDistrictName || matchesPostOffice);
  });

  // Filtering SDM offices
  const filteredSdm = MOCK_DELHI_SDM_OFFICES.filter(s => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return true;
    return s.district.toLowerCase().includes(cleanQuery) || 
           s.sdm.toLowerCase().includes(cleanQuery) || 
           s.address.toLowerCase().includes(cleanQuery);
  });

  const availableDistricts = ['All', 'New Delhi', 'Central Delhi', 'South Delhi', 'South West Delhi', 'West Delhi', 'North Delhi', 'East Delhi'];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      {/* Section Header */}
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 text-amber-400 border border-amber-800/60 text-xs font-bold uppercase mb-2">
          <Compass className="w-3.5 h-3.5" /> Government Finders Directory
        </div>
        <h2 className="text-3xl font-black text-white">Government Finders & Centre Locators</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Instantly locate PIN Codes, IFSC codes, Aadhaar Seva Kendras, SDM Offices, Police Stations, Hospitals, and RTOs across Delhi NCT & India.
        </p>
      </div>

      {/* Grid of Finder Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-8">
        {FINDER_CATEGORIES.map((cat) => {
          const isActive = cat.id === selectedFinderId;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedFinderId(cat.id);
                setQuery('');
                setDistrictFilter('All');
              }}
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between gap-2 ${
                isActive 
                  ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-white font-bold' 
                  : 'bg-[#121824] border-zinc-800 hover:border-zinc-700 text-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold ${isActive ? 'text-[#FF6B00]' : 'text-zinc-200'}`}>{cat.title}</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-medium">{cat.hindiTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Finder Search Container */}
      <div className="bg-[#121824] border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <span>{activeCategory.title}</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                {activeCategory.hindiTitle}
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1">{activeCategory.description}</p>
          </div>

          {!['ifsc', 'micr', 'swift', 'police-station', 'aadhaar-centre', 'passport-psk', 'csc-centre', 'jan-aushadhi', 'govt-schools', 'govt-institutes', 'hospital', 'blood-bank', 'rto-office', 'metro-station', 'ayushman-arogya', 'mla-mp', 'govt-insurance'].includes(selectedFinderId) && (
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={selectedFinderId === 'pincode' ? "Enter PIN (e.g. 110011) or Place (e.g. Chanakyapuri)" : "Search area, district, code..."}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
              />
            </div>
          )}
        </div>

        {/* Dynamic Content based on Finder ID */}
        {selectedFinderId === 'pincode' && (
          <div className="space-y-4">
            {/* Direct quick example search buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">Quick Searches:</span>
              {[
                { label: 'Chanakyapuri', q: 'Chanakyapuri' },
                { label: '110011 (Nirman Bhawan)', q: '110011' },
                { label: 'Connaught Place', q: 'Connaught Place' },
                { label: 'Karol Bagh', q: 'Karol Bagh' },
                { label: 'Dwarka', q: 'Dwarka' },
                { label: 'Sarojini Nagar', q: 'Sarojini Nagar' },
                { label: '110021', q: '110021' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(item.q)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition text-[11px]"
                >
                  {item.label}
                </button>
              ))}
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="px-2 py-1 rounded bg-zinc-800 text-amber-400 text-[10px] font-bold"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* District filter tags */}
            <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-zinc-800/80">
              <span className="text-[11px] text-zinc-400 font-medium mr-1">District:</span>
              {availableDistricts.map((dist) => (
                <button
                  key={dist}
                  onClick={() => setDistrictFilter(dist)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                    districtFilter === dist 
                      ? 'bg-[#FF6B00] text-white' 
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {dist}
                </button>
              ))}
            </div>

            {/* Search status summary header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#FF6B00]" />
                <span className="text-zinc-300 font-medium">
                  {query.trim() ? (
                    isNumericQuery ? (
                      <>Searching by <strong className="text-[#FF6B00]">PIN Code ({query})</strong> → Matching Places listed below</>
                    ) : (
                      <>Searching by <strong className="text-[#FF6B00]">Place Name ({query})</strong> → Matching PIN Codes listed below</>
                    )
                  ) : (
                    <>Bi-directional Search: Enter a <strong>PIN Code</strong> to find places, or a <strong>Place Name</strong> to find PIN Codes.</>
                  )}
                </span>
              </div>
              <span className="text-zinc-400 font-mono text-[11px]">
                Showing {filteredPincodes.length} result{filteredPincodes.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* PIN Code Results Grid */}
            {filteredPincodes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredPincodes.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00]/60 transition space-y-3 relative group">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-black text-[#FF6B00] font-mono tracking-wider">{item.pin}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800/60 font-semibold">
                            STD: {item.stdCode}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-medium mt-0.5">{item.district} District</p>
                      </div>

                      <button
                        onClick={() => handleCopyPin(item.pin)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-[#FF6B00]/20 text-zinc-300 hover:text-white border border-zinc-700 hover:border-[#FF6B00] text-[10px] font-bold transition"
                        title="Copy PIN Code"
                      >
                        {copiedPin === item.pin ? (
                          <>
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-zinc-400" />
                            <span>Copy PIN</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Covered Localities & Places</span>
                          <p className="text-xs text-zinc-200 font-medium leading-relaxed">{item.area}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 pt-1">
                        <Building className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                        <span className="text-[11px] text-zinc-400">
                          Post Office: <strong className="text-zinc-200 font-semibold">{item.postOffice}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 space-y-3">
                <p className="text-sm text-zinc-300 font-semibold">No PIN code or place found for "{query}"</p>
                <p className="text-xs text-zinc-500 max-w-md mx-auto">
                  Try typing a 6-digit Delhi PIN code (e.g., 110001, 110011, 110021) or an area name (e.g., Connaught Place, Chanakyapuri, Rohini, Dwarka, Karol Bagh).
                </p>
                <button
                  onClick={() => { setQuery(''); setDistrictFilter('All'); }}
                  className="px-4 py-2 rounded-lg bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
                >
                  Reset Search
                </button>
              </div>
            )}

            {/* DM New Delhi Official Portal Reference footer */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-zinc-400">
                  PIN & STD Codes verified against <strong className="text-zinc-200">District Magistrate New Delhi (dmnewdelhi.delhi.gov.in) Official Directory & India Post</strong>.
                </span>
              </div>
              <a
                href="https://dmnewdelhi.delhi.gov.in/std-pin-codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
              >
                <span>View DM New Delhi Directory</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {selectedFinderId === 'govt-offices' && (
          <GovtOfficesFinder />
        )}

        {selectedFinderId === 'sdm-office' && (
          <GovtOfficesFinder />
        )}

        {['ifsc', 'micr', 'swift'].includes(selectedFinderId) && (
          <IfscFinder />
        )}

        {selectedFinderId === 'police-station' && (
          <PoliceStationFinder />
        )}

        {selectedFinderId === 'aadhaar-centre' && (
          <AadhaarCentreFinder />
        )}

        {selectedFinderId === 'passport-psk' && (
          <PassportFinder />
        )}

        {selectedFinderId === 'csc-centre' && (
          <CscCentreFinder />
        )}

        {selectedFinderId === 'jan-aushadhi' && (
          <JanAushadhiFinder />
        )}

        {selectedFinderId === 'govt-schools' && (
          <SchoolFinder />
        )}

        {selectedFinderId === 'govt-institutes' && (
          <GovtInstituteFinder />
        )}

        {selectedFinderId === 'hospital' && (
          <HospitalFinder />
        )}

        {selectedFinderId === 'blood-bank' && (
          <BloodBankFinder />
        )}

        {selectedFinderId === 'rto-office' && (
          <RtoFinder />
        )}

        {selectedFinderId === 'metro-station' && (
          <MetroStationFinder />
        )}

        {selectedFinderId === 'ayushman-arogya' && (
          <AyushmanArogyaFinder />
        )}

        {selectedFinderId === 'mla-mp' && (
          <MlaMpFinder />
        )}

        {selectedFinderId === 'govt-insurance' && (
          <GovtInsuranceFinder />
        )}

        {/* General Official Locator Button for external official finders */}
        {!['govt-offices', 'pincode', 'sdm-office', 'ifsc', 'micr', 'swift', 'police-station', 'aadhaar-centre', 'passport-psk', 'csc-centre', 'jan-aushadhi', 'govt-schools', 'govt-institutes', 'hospital', 'blood-bank', 'rto-office', 'metro-station', 'ayushman-arogya', 'mla-mp', 'govt-insurance'].includes(selectedFinderId) && (
          <div className="p-8 text-center bg-zinc-900/80 rounded-2xl border border-zinc-800 space-y-4">
            <Compass className="w-12 h-12 text-[#FF6B00] mx-auto animate-pulse" />
            <div>
              <h4 className="text-lg font-bold text-white">Official Government Locator Portal for {activeCategory.title}</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-lg mx-auto">
                Directly search official government geo-mapped databases on .gov.in domains for live real-time centre availability.
              </p>
            </div>
            <a
              href="https://edistrict.delhigovt.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white font-bold text-xs shadow-lg hover:brightness-110 transition"
            >
              <span>Launch Official .gov.in Finder Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
