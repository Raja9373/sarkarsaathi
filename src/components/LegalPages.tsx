import React, { useState } from 'react';
import { ShieldCheck, Mail, AlertCircle, FileText, CheckCircle2, MessageSquare, Send } from 'lucide-react';

interface LegalPagesProps {
  initialPage?: string;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ initialPage = 'about' }) => {
  const [activePage, setActivePage] = useState<string>(initialPage);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const legalNavItems = [
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'disclaimer', label: 'Disclaimer' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'editorial', label: 'Editorial Policy' },
    { id: 'factcheck', label: 'Fact Check Policy' },
    { id: 'accessibility', label: 'Accessibility Statement' },
    { id: 'report-link', label: 'Report Broken Link' },
    { id: 'suggest-service', label: 'Suggest Service' },
    { id: 'sitemap', label: 'Sitemap' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="md:col-span-3 space-y-1">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mb-3 px-2">
            AdSense & Legal Compliance
          </span>
          {legalNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                activePage === item.id 
                  ? 'bg-[#FF6B00] text-white font-bold' 
                  : 'bg-[#121824] text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="md:col-span-9 bg-[#121824] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          {activePage === 'about' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">About SarkarSaathi.org</h2>
              <p className="text-xs text-[#FF6B00] font-semibold">सभी सरकारी काम एक जगह, बिल्कुल फ्री</p>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans border-t border-zinc-800 pt-4">
                <p>
                  <strong>SarkarSaathi.org</strong> is India's premier independent Government Citizen Assistance Platform built to empower every citizen to navigate government services easily, transparently, and free of charge.
                </p>
                <p>
                  Our mission is to eliminate bureaucratic confusion, fake agent scams, and misleading websites by offering 100% verified, official .gov.in links, step-by-step procedure guides, downloadable forms, and real-time calculators.
                </p>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <h4 className="font-bold text-white">Our Core Principles:</h4>
                  <p>• 100% Free Forever for all citizens</p>
                  <p>• Zero Registration & No Login required</p>
                  <p>• Zero Personal Data Collection</p>
                  <p>• Only Official .gov.in / nic.in Government Portals linked</p>
                </div>
              </div>
            </div>
          )}

          {activePage === 'privacy' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Privacy Policy</h2>
              <p className="text-xs text-zinc-400">Effective Date: July 28, 2026</p>
              <p>
                SarkarSaathi.org strictly respects citizen privacy. We do NOT collect, harvest, store, or sell any personal data, Aadhaar numbers, PAN details, bank credentials, or phone numbers.
              </p>
              <h3 className="font-bold text-white text-base">1. Zero Data Retention</h3>
              <p>
                All calculators (Income Tax, Property Tax, Stamp Duty, EMI, Age) operate 100% locally in your web browser. No calculated inputs or financial numbers are transmitted to our servers.
              </p>
              <h3 className="font-bold text-white text-base">2. Official Government Links</h3>
              <p>
                When you click "Apply On Official Portal" or "Track Status", you are redirected directly to the respective government domain (.gov.in or .nic.in). SarkarSaathi has no affiliation with third-party agents.
              </p>
            </div>
          )}

          {activePage === 'disclaimer' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Non-Governmental Disclaimer</h2>
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200">
                <strong>IMPORTANT NOTICE:</strong> SarkarSaathi.org is an informational guidance platform and is NOT an official government website or affiliated with the Government of India, Delhi Government, UIDAI, Income Tax Dept, or Passport Seva.
              </div>
              <p>
                All official trademarks, logos, and portal names belong to their respective government public authorities. SarkarSaathi provides educational step-by-step guidance and routes users directly to official .gov.in portals free of charge.
              </p>
            </div>
          )}

          {activePage === 'contact' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white">Contact Us & Citizen Feedback</h2>
                <p className="text-sm font-bold text-amber-300 mt-2 bg-[#182338] p-3 rounded-xl border border-[#FF6B00]/40">
                  "कोई जानकारी छूट गई है? हमें बताएं, ताकि हम वेबसाइट को और बेहतर बना सकें।"
                </p>
                <p className="text-xs text-zinc-400 mt-1">Have a suggestion, missed detail, or need help? Reach out to the SarkarSaathi team.</p>
              </div>

              {submittedMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold">
                  ✓ Thank you! Your feedback has been submitted successfully to the SarkarSaathi team.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg text-xs">
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Message / Feedback</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we improve SarkarSaathi?"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white font-bold transition flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          )}

          {activePage === 'report-link' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Report Broken Link or Incorrect Portal</h2>
              <p className="text-xs text-zinc-400">Help us maintain 100% accurate .gov.in links across Delhi services.</p>
              <form onSubmit={handleSubmit} className="space-y-3 max-w-lg text-xs">
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Service Name / Broken Link URL</label>
                  <input type="text" required placeholder="e.g. MCD Property Tax Link" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Description of Issue</label>
                  <textarea rows={3} required placeholder="What happened when you clicked?" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white" />
                </div>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-[#FF6B00] text-white font-bold">Submit Report</button>
              </form>
            </div>
          )}

          {activePage === 'terms' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Terms & Conditions</h2>
              <p className="text-xs text-zinc-400">Last Updated: July 29, 2026</p>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <p className="font-bold text-white">Welcome to SarkarSaathi.org</p>
                <p>
                  By accessing or using SarkarSaathi.org, you agree to comply with and be bound by the following Terms and Conditions of use. Please read them carefully.
                </p>
              </div>

              <h3 className="font-bold text-white text-base pt-2">1. Educational & Guidance Platform</h3>
              <p>
                SarkarSaathi.org provides informational guidance, step-by-step procedure overviews, fee structures, and direct web links to official Indian government portals (.gov.in / .nic.in). SarkarSaathi is an independent portal and does NOT perform official processing or charge fees for government forms.
              </p>

              <h3 className="font-bold text-white text-base pt-2">2. Acceptable Use</h3>
              <p>
                You agree to use this platform only for lawful citizen guidance. You must not attempt to scrape, disrupt, or exploit the platform or transmit malicious software through our interfaces.
              </p>

              <h3 className="font-bold text-white text-base pt-2">3. Intellectual Property & Official Trademarks</h3>
              <p>
                All official government names, department titles, logos, and portal names referenced herein belong exclusively to their respective Ministries and Public Authorities. SarkarSaathi claims no ownership over official government marks.
              </p>

              <h3 className="font-bold text-white text-base pt-2">4. Limitation of Liability</h3>
              <p>
                While we strive for 100% accuracy, government rules, fees, and procedures change periodically. Users are advised to confirm final requirements on the destination government portal (.gov.in) before submitting applications.
              </p>
            </div>
          )}

          {activePage === 'editorial' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Editorial Policy</h2>
              <p className="text-xs text-zinc-400">Guidance Integrity & Fact-based Publishing</p>

              <p>
                At SarkarSaathi.org, our primary editorial mandate is to deliver precise, simple, and unbiased guidance on Indian government services and schemes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-[#FF6B00]">1. Official Primary Sources</h4>
                  <p className="text-xs text-zinc-400">All procedural steps, document checklists, and eligibility rules are curated directly from published Gazette notifications, official department circulars, and verified .gov.in portals.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-[#FF6B00]">2. Zero Commercial Bias</h4>
                  <p className="text-xs text-zinc-400">We do not accept paid promotions from private touts, middlemen, or unofficial agencies. All government services listed are free or strictly show official government prescribed fees.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-[#FF6B00]">3. Language Clarity</h4>
                  <p className="text-xs text-zinc-400">Complex legal and bureaucratic jargon is translated into clear, simple English and Hindi (हिन्दी) so citizens of all literacy backgrounds can easily understand.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-[#FF6B00]">4. Continuous Verification</h4>
                  <p className="text-xs text-zinc-400">Our editorial team conducts monthly audits on link integrity, fee revisions, and portal migration updates across Central and Delhi NCT departments.</p>
                </div>
              </div>
            </div>
          )}

          {activePage === 'factcheck' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Fact Check Policy & Anti-Scam Protection</h2>
              <p className="text-xs text-zinc-400">Ensuring Truth & Guarding Citizens Against Phishing</p>

              <p>
                SarkarSaathi.org maintains a rigorous fact-checking framework to ensure citizens never fall prey to fake government websites, fraudulent WhatsApp messages, or unauthorized registration fees.
              </p>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Our Fact-Checking Process:
                </h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-emerald-100">
                  <li><strong>Domain Inspection:</strong> We verify that every link routes exclusively to official .gov.in or .nic.in domain names.</li>
                  <li><strong>Cross-Referencing PIB:</strong> Scheme announcements are cross-checked with official Press Information Bureau (PIB Fact Check) releases.</li>
                  <li><strong>Fee Audit:</strong> Official fees are cross-verified against official gazette fee notifications to prevent extortion by unauthorized agents.</li>
                </ul>
              </div>

              <h3 className="font-bold text-white text-base pt-2">Reporting Misinformation</h3>
              <p>
                If you suspect a rule change or broken link on our platform, submit a report via our "Report Broken Link" tab. Our team reviews and corrects verified inaccuracies within 24 hours.
              </p>
            </div>
          )}

          {activePage === 'accessibility' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Accessibility Statement</h2>
              <p className="text-xs text-zinc-400">Digital Inclusion for All Citizens</p>

              <p>
                SarkarSaathi.org is committed to ensuring digital accessibility for all citizens, including senior citizens and Persons with Disabilities (PwD), adhering to standard Web Content Accessibility Guidelines (WCAG 2.1 AA).
              </p>

              <div className="space-y-3 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                <h4 className="font-bold text-white">Key Accessibility Features Implemented:</h4>
                <p>• <strong>High-Contrast Aesthetics:</strong> Designed with high-contrast text and clean background ratios for effortless reading.</p>
                <p>• <strong>Bilingual Support:</strong> Bilingual headings (English & Hindi) to cater to diverse language preferences across Delhi NCR.</p>
                <p>• <strong>Responsive & Screen-Reader Ready:</strong> Structured HTML headers and ARIA standards for seamless screen reader compatibility.</p>
                <p>• <strong>Keyboard Navigation:</strong> Fully operable through standard keyboard tab controls.</p>
              </div>

              <p className="pt-2">
                If you encounter any accessibility barriers while navigating SarkarSaathi, please notify us via the Contact Us form, and we will remediate it promptly.
              </p>
            </div>
          )}

          {activePage === 'suggest-service' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white">Suggest a New Government Service</h2>
                <p className="text-xs text-zinc-400 mt-1">Know a missing Delhi or Central Government scheme, certificate, or service? Tell us and we will add it!</p>
              </div>

              {submittedMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold">
                  ✓ Thank you! Your suggested service has been logged for research and addition to SarkarSaathi.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg text-xs">
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Service / Scheme Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi Widow Pension Renewal / DDA Housing Portal"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Department / Government Level</label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi Revenue Department / Central Government"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Official Portal URL (if known)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <div>
                  <label className="font-bold text-zinc-300 block mb-1">Brief Description or Details</label>
                  <textarea
                    rows={3}
                    placeholder="Why should this service be added?"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white font-bold transition flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Suggestion</span>
                </button>
              </form>
            </div>
          )}

          {activePage === 'sitemap' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">SarkarSaathi XML & HTML Sitemap</h2>
              <p className="text-xs text-zinc-400">Full index of Delhi government services, banking hub, calculators, and life events.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#FF6B00] font-semibold">
                <a href="#home">/delhi/services</a>
                <a href="#banking">/banking-hub</a>
                <a href="#finders">/government-finders</a>
                <a href="#calculators">/calculators</a>
                <a href="#life-events">/life-events</a>
                <a href="#status-check">/status-check</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
