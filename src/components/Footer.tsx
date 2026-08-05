import React from 'react';
import { Sparkles, ShieldCheck, Heart, MapPin, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenEmergency: () => void;
  onSelectServiceById?: (serviceId: string) => void;
  onSelectDeptById?: (deptId: string) => void;
  onOpenSitemap?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenEmergency, onSelectServiceById, onSelectDeptById, onOpenSitemap }) => {
  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    if (onSelectServiceById) {
      onSelectServiceById(serviceId);
    } else {
      handleNav('services');
    }
  };

  const handleDeptClick = (deptId: string) => {
    if (onSelectDeptById) {
      onSelectDeptById(deptId);
    } else {
      handleNav('delhi-govt');
    }
  };

  return (
    <footer className="bg-[#070A10] border-t border-zinc-800/80 text-zinc-400 text-xs py-12 px-4 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800/80 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#CC5200] flex items-center justify-center text-white font-black text-lg">
                S
              </div>
              <span className="text-xl font-black text-white">
                SarkarSaathi<span className="text-[#FF6B00]">.org</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 font-bold text-[10px]">
                Delhi Phase 1
              </span>
            </div>
            <p className="text-zinc-400 max-w-md text-xs">
              सभी सरकारी काम एक जगह, बिल्कुल फ्री • India's most comprehensive Government Assistance Platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-4 py-2 rounded-xl bg-red-950/80 text-red-400 border border-red-800/60 font-bold text-xs hover:bg-red-900 transition flex items-center gap-1.5"
            >
              <span>🚨 Delhi 24x7 Helplines (112)</span>
            </button>
            <button
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
                Did we miss any details, service, or official link? Help us improve SarkarSaathi for all citizens.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleNav('legal')}
            className="px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs transition shrink-0 whitespace-nowrap shadow-lg shadow-[#FF6B00]/25"
          >
            Feedback & Suggestion
          </button>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Delhi Services</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><button onClick={() => handleServiceClick('aadhaar-card-new-update')} className="hover:text-[#FF6B00] text-left">Aadhaar Enrolment & Update</button></li>
              <li><button onClick={() => handleServiceClick('pan-card-apply')} className="hover:text-[#FF6B00] text-left">Instant e-PAN Application</button></li>
              <li><button onClick={() => handleServiceClick('passport-seva-delhi')} className="hover:text-[#FF6B00] text-left">Delhi Passport PSK Appointment</button></li>
              <li><button onClick={() => handleServiceClick('driving-licence-delhi-transport')} className="hover:text-[#FF6B00] text-left">Delhi Learner Driving Licence</button></li>
              <li><button onClick={() => handleServiceClick('income-certificate-delhi-revenue')} className="hover:text-[#FF6B00] text-left">e-District Income Certificate</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Delhi Departments</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><button onClick={() => handleDeptClick('mcd')} className="hover:text-[#FF6B00] text-left">MCD Municipal Corp</button></li>
              <li><button onClick={() => handleDeptClick('dda')} className="hover:text-[#FF6B00] text-left">DDA Delhi Development</button></li>
              <li><button onClick={() => handleDeptClick('djb')} className="hover:text-[#FF6B00] text-left">Delhi Jal Board (DJB)</button></li>
              <li><button onClick={() => handleDeptClick('delhi-police')} className="hover:text-[#FF6B00] text-left">Delhi Traffic Police</button></li>
              <li><button onClick={() => handleDeptClick('revenue-dept')} className="hover:text-[#FF6B00] text-left">Revenue Department SDM</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Hubs & Tools</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><button onClick={() => handleNav('life-events')} className="hover:text-[#FF6B00]">19 Life Events Roadmap</button></li>
              <li><button onClick={() => handleNav('banking')} className="hover:text-[#FF6B00]">Banking Hub & 21 Banks</button></li>
              <li><button onClick={() => handleNav('finders')} className="hover:text-[#FF6B00]">PIN & IFSC Code Finders</button></li>
              <li><button onClick={() => handleNav('calculators')} className="hover:text-[#FF6B00]">Tax & Property Calculators</button></li>
              <li><button onClick={() => handleNav('downloads')} className="hover:text-[#FF6B00]">Download Forms & Formats</button></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Quick Actions</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><button onClick={() => handleNav('status-check')} className="hover:text-[#FF6B00]">Check Application Status</button></li>
              <li><button onClick={() => handleNav('online-apply')} className="hover:text-[#FF6B00]">Apply Online Direct Links</button></li>
              <li><button onClick={() => handleNav('payments')} className="hover:text-[#FF6B00]">Pay Property Tax & Utility Bills</button></li>
              <li><button onClick={() => handleNav('blog')} className="hover:text-[#FF6B00]">Knowledge Center Articles</button></li>
              <li><button onClick={() => handleNav('faqs')} className="hover:text-[#FF6B00] font-bold text-[#FF6B00]">❓ 1000+ Sarkari Seva FAQs</button></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Legal & AdSense</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><button onClick={() => handleNav('legal')} className="hover:text-[#FF6B00]">About SarkarSaathi</button></li>
              <li><button onClick={() => handleNav('legal')} className="hover:text-[#FF6B00]">Privacy Policy</button></li>
              <li><button onClick={() => handleNav('legal')} className="hover:text-[#FF6B00]">Disclaimer Notice</button></li>
              <li>{onOpenSitemap && <button onClick={onOpenSitemap} className="hover:text-[#FF6B00] font-bold text-amber-400">XML Sitemap & SEO</button>}</li>
              <li><button onClick={() => handleNav('legal')} className="hover:text-[#FF6B00]">Contact & Feedback</button></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright Footer Bar */}
        <div className="pt-8 border-t border-zinc-800/80 space-y-4 text-center text-zinc-500 text-[11px]">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> SarkarSaathi.org is an independent citizen assistance portal designed to guide Indian citizens through official government procedures. SarkarSaathi is NOT affiliated with, authorized by, or endorsed by the Government of India, Government of NCT of Delhi, or any government agency. All official services are executed solely on government domains ending in .gov.in or .nic.in.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400 font-medium pt-2">
            <span>© 2026 SarkarSaathi.org • Free Forever</span>
            <span>•</span>
            <span>Made with Care for Citizens of India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
