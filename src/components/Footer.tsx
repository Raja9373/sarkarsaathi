import React, { useMemo } from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { ActiveTab, StateId } from '../types';
import { getStateInfo } from '../data/statesData';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenEmergency: () => void;
  onSelectServiceById?: (serviceId: string) => void;
  onSelectDeptById?: (deptId: string) => void;
  onOpenSitemap?: () => void;
  currentStateId?: StateId | string;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenEmergency,
  onSelectServiceById,
  onSelectDeptById,
  onOpenSitemap,
  currentStateId = 'all',
}) => {
  const stateInfo = useMemo(() => getStateInfo(currentStateId || 'all'), [currentStateId]);
  const stateUpper = (stateInfo?.name || 'ALL INDIA').toUpperCase();
  const stateSlug = (stateInfo?.id || 'national').toLowerCase();
  const stateName = stateInfo?.name || 'India';

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId?: string) => {
    if (serviceId && onSelectServiceById) {
      onSelectServiceById(serviceId);
      return;
    }
    handleNav('services');
  };

  const handleDeptClick = (deptId?: string) => {
    if (onSelectDeptById && deptId) {
      onSelectDeptById(deptId);
    } else {
      handleNav('finders');
    }
  };

  // State-specific dynamic services list
  const stateServices = useMemo(() => {
    if (stateSlug === 'delhi') {
      return [
        { name: `${stateName} Aadhaar Enrolment & Update`, slug: 'aadhaar-enrolment', id: 'aadhaar-card-new-update' },
        { name: `${stateName} Instant e-PAN Application`, slug: 'pan-card-apply', id: 'pan-card-apply' },
        { name: `${stateName} Passport PSK Appointment`, slug: 'passport-seva', id: 'passport-seva-delhi' },
        { name: `${stateName} Learner & Driving Licence (RTO)`, slug: 'driving-licence', id: 'driving-licence-delhi-transport' },
        { name: `${stateName} e-District Income & Domicile`, slug: 'income-certificate', id: 'income-certificate-delhi-revenue' },
        { name: `${stateName} Digital Ration Card (NFSA)`, slug: 'ration-card', id: 'ration-card-delhi-nfs' },
      ];
    }
    if (stateSlug === 'punjab') {
      return [
        { name: 'Punjab e-Sewa Citizen Portal', slug: 'punjab-esewa-portal' },
        { name: 'Punjab Domicile & Residence Certificate', slug: 'punjab-domicile-certificate' },
        { name: 'Punjab Sarathi Driving Licence & RC', slug: 'punjab-driving-licence' },
        { name: 'Punjab Ration Card (NFSA / Atta Dal)', slug: 'punjab-ration-card' },
        { name: 'Punjab Jamabandi & Land Records', slug: 'punjab-jamabandi-records' },
        { name: 'Punjab Social Security & Pension Schemes', slug: 'punjab-pension-schemes' },
      ];
    }
    if (stateSlug === 'maharashtra') {
      return [
        { name: 'Aaple Sarkar / MahaOnline Portal', slug: 'aaple-sarkar-portal' },
        { name: 'Maharashtra Domicile & Income Certificate', slug: 'maharashtra-domicile-certificate' },
        { name: 'Maharashtra RTO Sarathi Driving Licence', slug: 'maharashtra-driving-licence' },
        { name: 'Mahafood Digital Ration Card (PDS)', slug: 'mahafood-ration-card' },
        { name: 'Mahabhulekh 7/12 Land Records Online', slug: 'mahabhulekh-712-records' },
        { name: 'Sanjay Gandhi Niradhar Pension Yojana', slug: 'sanjay-gandhi-pension' },
      ];
    }
    if (stateSlug === 'tamil-nadu') {
      return [
        { name: 'TNeGA / e-Sevai Citizen Portal', slug: 'tnega-esevai-portal' },
        { name: 'Tamil Nadu Nativity & Community Certificate', slug: 'tamil-nadu-nativity-certificate' },
        { name: 'TN Sarathi Driving Licence & RC', slug: 'tamil-nadu-driving-licence' },
        { name: 'TNPDS Smart Ration Card Portal', slug: 'tnpds-smart-ration-card' },
        { name: 'Patta Chitta Land Records Online', slug: 'patta-chitta-records' },
        { name: 'Kalaignar Magalir Urimai Thittam', slug: 'kalaignar-magalir-urimai' },
      ];
    }
    if (stateSlug === 'uttar-pradesh' || stateSlug === 'up') {
      return [
        { name: 'UP eDistrict Citizen Services Portal', slug: 'up-edistrict-portal' },
        { name: 'UP Domicile, Caste & Income Certificate', slug: 'up-domicile-certificate' },
        { name: 'UP Sarathi Driving Licence & RTO', slug: 'up-driving-licence' },
        { name: 'UP FCS Food & Ration Card Portal', slug: 'up-fcs-ration-card' },
        { name: 'UP Bhulekh Khasra Khatauni Records', slug: 'up-bhulekh-records' },
        { name: 'Mukhyamantri Kanya Sumangala Yojana', slug: 'kanya-sumangala-yojana' },
      ];
    }
    if (stateSlug === 'bihar') {
      return [
        { name: 'Bihar RTPS Citizen Services Portal', slug: 'bihar-rtps-portal' },
        { name: 'Bihar Residential, Caste & Income Cert', slug: 'bihar-domicile-certificate' },
        { name: 'Bihar Sarathi Driving Licence & RC', slug: 'bihar-driving-licence' },
        { name: 'Bihar epds Ration Card Portal', slug: 'bihar-epds-ration-card' },
        { name: 'Bihar Bhumi Land & Dakhil Kharij', slug: 'bihar-bhumi-records' },
        { name: 'Mukhyamantri Udyami Yojana Bihar', slug: 'bihar-udyami-yojana' },
      ];
    }
    if (stateSlug === 'gujarat') {
      return [
        { name: 'Digital Gujarat Citizen Portal', slug: 'digital-gujarat-portal' },
        { name: 'Gujarat Domicile & Income Certificate', slug: 'gujarat-domicile-certificate' },
        { name: 'Gujarat RTO Sarathi Driving Licence', slug: 'gujarat-driving-licence' },
        { name: 'Gujarat Digital PDS Ration Card', slug: 'gujarat-digital-pds' },
        { name: 'AnyRoR Gujarat 7/12 Land Records', slug: 'gujarat-anyror-records' },
        { name: 'Mukhyamantri Mahila Utkarsh Yojana', slug: 'gujarat-mahila-utkarsh' },
      ];
    }
    if (stateSlug === 'karnataka') {
      return [
        { name: 'Seva Sindhu Citizen Portal', slug: 'seva-sindhu-portal' },
        { name: 'Karnataka Caste & Income Certificate', slug: 'karnataka-caste-income-cert' },
        { name: 'Karnataka Sarathi Driving Licence & RC', slug: 'karnataka-driving-licence' },
        { name: 'Karnataka Ahara Ration Card Portal', slug: 'karnataka-ahara-ration-card' },
        { name: 'Bhoomi RTC Land Records Online', slug: 'karnataka-bhoomi-records' },
        { name: 'Gruha Lakshmi & Shakti Schemes', slug: 'gruha-lakshmi-scheme' },
      ];
    }
    if (stateSlug === 'west-bengal') {
      return [
        { name: 'WB e-District Citizen Portal', slug: 'wb-edistrict-portal' },
        { name: 'West Bengal Domicile & Income Cert', slug: 'wb-domicile-certificate' },
        { name: 'WB Sarathi Driving Licence & RC', slug: 'wb-driving-licence' },
        { name: 'WB Khadya Sathi Digital Ration Card', slug: 'wb-khadya-sathi-ration' },
        { name: 'Banglarbhumi Land Records & Mutation', slug: 'banglarbhumi-records' },
        { name: 'Lakshmir Bhandar Welfare Scheme', slug: 'lakshmir-bhandar-scheme' },
      ];
    }
    if (stateSlug === 'rajasthan') {
      return [
        { name: 'e-Mitra Rajasthan Citizen Services', slug: 'emitra-rajasthan-portal' },
        { name: 'Rajasthan Mool Niwas & Caste Cert', slug: 'rajasthan-mool-niwas-cert' },
        { name: 'Rajasthan Sarathi Driving Licence & RC', slug: 'rajasthan-driving-licence' },
        { name: 'Rajasthan Food & Supplies Ration Card', slug: 'rajasthan-ration-card' },
        { name: 'Apna Khata Jamabandi Land Records', slug: 'apna-khata-records' },
        { name: 'Mukhyamantri Ayushman Swasthya Yojana', slug: 'rajasthan-chiranjeevi-yojana' },
      ];
    }
    if (stateSlug === 'assam') {
      return [
        { name: 'Assam Sewa Setu Citizen Services', slug: 'assam-sewa-setu-portal' },
        { name: 'Assam Permanent Resident Certificate (PRC)', slug: 'assam-prc-certificate' },
        { name: 'Assam Sarathi Driving Licence & RTO', slug: 'assam-driving-licence' },
        { name: 'Assam FCS & CA Ration Card Portal', slug: 'assam-ration-card-portal' },
        { name: 'Dharitree Assam Land Revenue Records', slug: 'dharitree-assam-records' },
        { name: 'Orunodoi Welfare Scheme Assam', slug: 'assam-orunodoi-scheme' },
      ];
    }

    // Default Dynamic State Services for any other state/UT
    return [
      { name: `${stateName} e-District & Citizen Services`, slug: `${stateSlug}-edistrict-services` },
      { name: `${stateName} Domicile & Residence Certificate`, slug: `${stateSlug}-domicile-certificate` },
      { name: `${stateName} Sarathi Driving Licence & RTO`, slug: `${stateSlug}-driving-licence` },
      { name: `${stateName} NFSA Digital Ration Card Portal`, slug: `${stateSlug}-ration-card` },
      { name: `${stateName} Land Records & Revenue Portal`, slug: `${stateSlug}-land-records` },
      { name: `${stateName} Citizen Welfare Schemes & Subsidies`, slug: `${stateSlug}-welfare-schemes` },
    ];
  }, [stateSlug, stateName]);

  // State-specific dynamic departments list
  const stateDepartments = useMemo(() => {
    if (stateSlug === 'delhi') {
      return [
        { name: 'MCD Municipal Corporation', slug: 'mcd', id: 'mcd' },
        { name: 'DDA Delhi Development Authority', slug: 'dda', id: 'dda' },
        { name: 'Delhi Jal Board (DJB)', slug: 'djb', id: 'djb' },
        { name: 'Delhi Traffic Police', slug: 'delhi-police', id: 'delhi-police' },
        { name: 'Revenue Department SDM Office', slug: 'revenue-dept', id: 'revenue-dept' },
      ];
    }
    if (stateSlug === 'punjab') {
      return [
        { name: 'Punjab Municipal Corporation (MC)', slug: 'punjab-municipal-corp' },
        { name: 'PUDA (Punjab Urban Planning & Dev)', slug: 'puda-development-authority' },
        { name: 'Punjab Water Supply & Sewerage Board', slug: 'punjab-water-board' },
        { name: 'Punjab Police & Traffic Wing', slug: 'punjab-police' },
        { name: 'District Collectorate / DC Office Punjab', slug: 'punjab-dc-office' },
      ];
    }
    if (stateSlug === 'maharashtra') {
      return [
        { name: 'BMC / Municipal Corporation', slug: 'bmc-municipal-corp' },
        { name: 'MMRDA / CIDCO Development Authority', slug: 'mmrda-development-authority' },
        { name: 'Maharashtra Jeevan Pradhikaran (MJP)', slug: 'maharashtra-water-board' },
        { name: 'Maharashtra Police & Traffic Branch', slug: 'maharashtra-police' },
        { name: 'Revenue Department & Collector Office', slug: 'maharashtra-collector-office' },
      ];
    }
    if (stateSlug === 'tamil-nadu') {
      return [
        { name: 'Greater Chennai / TN Municipal Admin', slug: 'tamil-nadu-municipal-corp' },
        { name: 'CMDA (Chennai Metro Development)', slug: 'cmda-development-authority' },
        { name: 'TWAD Board / CMWSSB (Metro Water)', slug: 'tamil-nadu-water-board' },
        { name: 'Tamil Nadu Police & Traffic Wing', slug: 'tamil-nadu-police' },
        { name: 'Taluk Office & District Revenue Dept', slug: 'tamil-nadu-revenue-dept' },
      ];
    }
    if (stateSlug === 'uttar-pradesh' || stateSlug === 'up') {
      return [
        { name: 'UP Nagar Nigam / Municipal Corporation', slug: 'up-nagar-nigam' },
        { name: 'LDA / NOIDA Development Authority', slug: 'up-development-authority' },
        { name: 'UP Jal Nigam / Water Supply Board', slug: 'up-jal-nigam' },
        { name: 'UP Police & Traffic Directorate', slug: 'up-police' },
        { name: 'District Magistrate (DM) & Tehsil Office', slug: 'up-dm-tehsil-office' },
      ];
    }
    if (stateSlug === 'bihar') {
      return [
        { name: 'Patna / Bihar Municipal Corporation', slug: 'bihar-municipal-corp' },
        { name: 'PRDA (Patna Regional Development)', slug: 'bihar-development-authority' },
        { name: 'PHED Bihar (Public Health Engineering)', slug: 'bihar-water-supply' },
        { name: 'Bihar Police & Cyber Crime Cell', slug: 'bihar-police' },
        { name: 'District Collectorate / Anchal Adhikari', slug: 'bihar-anchal-office' },
      ];
    }
    if (stateSlug === 'gujarat') {
      return [
        { name: 'Ahmedabad / Gujarat Municipal Corp (AMC)', slug: 'gujarat-municipal-corp' },
        { name: 'AUDA / GUDA Development Authority', slug: 'gujarat-development-authority' },
        { name: 'Gujarat Water Supply & Sewerage Board', slug: 'gujarat-water-board' },
        { name: 'Gujarat Police & Traffic Wing', slug: 'gujarat-police' },
        { name: 'Mamlatdar Office & District Collectorate', slug: 'gujarat-collectorate' },
      ];
    }
    if (stateSlug === 'karnataka') {
      return [
        { name: 'BBMP / Karnataka Municipal Admin', slug: 'karnataka-municipal-corp' },
        { name: 'BDA (Bangalore Development Authority)', slug: 'karnataka-development-authority' },
        { name: 'BWSSB / KUWSDB Water Supply Board', slug: 'karnataka-water-board' },
        { name: 'Karnataka State Police & Traffic Wing', slug: 'karnataka-police' },
        { name: 'Tahasildar Office & Deputy Commissioner', slug: 'karnataka-dc-office' },
      ];
    }
    if (stateSlug === 'west-bengal') {
      return [
        { name: 'KMC / WB Municipal Affairs Dept', slug: 'west-bengal-municipal-corp' },
        { name: 'KMDA (Kolkata Metro Development)', slug: 'kmda-development-authority' },
        { name: 'PHE Dept West Bengal / Water Works', slug: 'west-bengal-water-board' },
        { name: 'West Bengal Police & Kolkata Police', slug: 'west-bengal-police' },
        { name: 'BL&LRO & District Magistrate Office', slug: 'west-bengal-dm-office' },
      ];
    }
    if (stateSlug === 'rajasthan') {
      return [
        { name: 'Jaipur / Rajasthan Nagar Nigam', slug: 'rajasthan-nagar-nigam' },
        { name: 'JDA (Jaipur Development Authority)', slug: 'rajasthan-development-authority' },
        { name: 'PHED Rajasthan (Water Supply Dept)', slug: 'rajasthan-phed-water' },
        { name: 'Rajasthan Police & Traffic Directorate', slug: 'rajasthan-police' },
        { name: 'District Collectorate & SDM Office', slug: 'rajasthan-sdm-office' },
      ];
    }
    if (stateSlug === 'assam') {
      return [
        { name: 'Guwahati / Assam Municipal Corporation', slug: 'assam-municipal-corp' },
        { name: 'GMDA (Guwahati Metro Development)', slug: 'assam-development-authority' },
        { name: 'Guwahati Jal Board / PHED Assam', slug: 'assam-water-board' },
        { name: 'Assam Police & Cyber Cell', slug: 'assam-police' },
        { name: 'District Commissioner & Circle Office', slug: 'assam-circle-office' },
      ];
    }

    // Default Dynamic State Departments for any other state/UT
    return [
      { name: `${stateName} Municipal Corporation`, slug: `${stateSlug}-municipal-corp` },
      { name: `${stateName} Urban Development Authority`, slug: `${stateSlug}-development-authority` },
      { name: `${stateName} Water Supply & Sewerage Board`, slug: `${stateSlug}-water-board` },
      { name: `${stateName} State Police & Traffic Wing`, slug: `${stateSlug}-state-police` },
      { name: `${stateName} District Collectorate & SDM`, slug: `${stateSlug}-collectorate-office` },
    ];
  }, [stateSlug, stateName]);

  return (
    <footer id="main-footer" className="bg-[#070A10] border-t border-zinc-800/80 text-zinc-400 text-xs py-12 px-4 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800/80 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#CC5200] flex items-center justify-center text-white font-black text-lg shadow-sm">
                S
              </div>
              <span className="text-xl font-black text-white">
                SarkarSaathi<span className="text-[#FF6B00]">.org</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 font-bold text-[10px] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {stateName} Live
              </span>
            </div>
            <p className="text-zinc-400 max-w-md text-xs leading-relaxed">
              Government Investments, Opportunities & Tenders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="footer-emergency-btn"
              onClick={onOpenEmergency}
              className="px-4 py-2 rounded-xl bg-red-950/80 text-red-400 border border-red-800/60 font-bold text-xs hover:bg-red-900 transition flex items-center gap-1.5 shadow-sm"
            >
              <span>🚨 {stateName} Support</span>
            </button>
            <button
              id="footer-disclaimer-btn"
              onClick={() => handleNav('legal')}
              className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800 font-bold text-xs hover:bg-zinc-800 transition"
            >
              Non-Governmental Disclaimer
            </button>
          </div>
        </div>

        {/* Citizen Hindi Feedback Callout Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-[#182338] via-[#111827] to-[#0D131F] border border-[#FF6B00]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-300 leading-snug">
                "कोई जानकारी छूट गई है? हमें बताएं, ताकि हम वेबसाइट को और बेहतर बना सकें।"
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Did we miss any details, service, or official link for {stateName}? Help us improve SarkarSaathi for all citizens.
              </p>
            </div>
          </div>
          <button
            id="footer-feedback-btn"
            onClick={() => handleNav('legal')}
            className="px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs transition shrink-0 whitespace-nowrap shadow-lg shadow-[#FF6B00]/25"
          >
            Feedback & Suggestion
          </button>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Col 1-5: New Navigation */}
          {[
            { title: 'Investments', action: 'investments' },
            { title: 'Opportunities', action: 'opportunities' },
            { title: 'Tenders', action: 'tenders' },
            { title: 'News & Updates', action: 'news' },
            { title: 'Comparisons', action: 'comparisons' },
            { title: 'Saved Items', action: 'saved' },
            { title: 'Recently Viewed', action: 'recently-viewed' }
          ].map(item => (
              <button key={item.title} onClick={() => handleNav(item.action as ActiveTab)} className="hover:text-[#FF6B00] transition text-left">
                {item.title}
              </button>
          ))}
          {[
            { title: 'About', action: 'legal' },
            { title: 'Contact', action: 'legal' },
            { title: 'Privacy Policy', action: 'legal' },
            { title: 'Terms', action: 'legal' },
            { title: 'Disclaimer', action: 'legal' }
          ].map(item => (
              <button key={item.title} onClick={() => handleNav(item.action as ActiveTab)} className="hover:text-[#FF6B00] transition text-left">
                {item.title}
              </button>
          ))}
        </div>

        {/* Disclaimer & Copyright Footer Bar */}
        <div className="pt-8 border-t border-zinc-800/80 space-y-4 text-center text-zinc-500 text-[11px]">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> SarkarSaathi.org is an independent informational platform. It is not an official Government website and is not affiliated with or endorsed by any government department, ministry, PSU or regulator. Users should verify important information with the relevant official source before acting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400 font-medium pt-2">
            <span>© 2026 SarkarSaathi.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
