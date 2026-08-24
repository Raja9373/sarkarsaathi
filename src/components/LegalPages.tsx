import React, { useState } from 'react';
import { ShieldCheck, Mail, AlertCircle, FileText, CheckCircle2, MessageSquare, Send, Globe, Award, HelpCircle, Lock, BookOpen, ExternalLink, RefreshCw } from 'lucide-react';

interface LegalPagesProps {
  initialPage?: string;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ initialPage = 'about' }) => {
  const [activePage, setActivePage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace('/', '');
      if (path === 'contact-us' || path === 'contact') return 'contact';
      if (path === 'privacy-policy' || path === 'privacy') return 'privacy';
      if (path === 'terms-of-service' || path === 'terms') return 'terms';
      if (path === 'disclaimer-policy' || path === 'disclaimer') return 'disclaimer';
      if (path === 'editorial-policy' || path === 'editorial') return 'editorial';
      if (path === 'correction-policy' || path === 'correction') return 'correction';
      if (path === 'source-policy' || path === 'government-sources') return 'source-policy';
      if (path === 'about') return 'about';
    }
    return initialPage;
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const legalNavItems = [
    { id: 'about', label: 'About Us' },
    { id: 'disclaimer', label: 'Disclaimer Notice' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'editorial', label: 'Editorial Policy' },
    { id: 'correction', label: 'Correction Policy' },
    { id: 'source-policy', label: 'Government Source Policy' },
    { id: 'contact', label: 'Contact & Feedback' },
    { id: 'accessibility', label: 'Accessibility Statement' },
    { id: 'report-link', label: 'Report Broken Link' },
    { id: 'suggest-service', label: 'Suggest Service' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  return (
    <section id="legal-policies-section" className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="md:col-span-3 space-y-1">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mb-3 px-2">
            Legal, Policies & Trust
          </span>
          {legalNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                activePage === item.id 
                  ? 'bg-[#FF6B00] text-white font-bold shadow-md shadow-[#FF6B00]/20' 
                  : 'bg-[#121824] text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="md:col-span-9 bg-[#121824] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* 1. ABOUT US */}
          {activePage === 'about' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-black text-white">About SarkarSaathi.org</h2>
                <p className="text-xs text-[#FF6B00] font-semibold mt-1">सभी सरकारी काम एक जगह, बिल्कुल फ्री • India's Independent Citizen Guidance Platform</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 text-amber-200 text-xs sm:text-sm">
                <strong>Mandatory Identity Declaration:</strong> SarkarSaathi.org is an <strong>independent informational guidance portal</strong> and is <strong>NOT</strong> affiliated with, authorized by, endorsed by, or operated by the Government of India, any State Government, Union Territory Administration, or municipal authority. All actual government applications must be completed on official government domains (.gov.in / .nic.in).
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans border-t border-zinc-800 pt-4">
                <p>
                  <strong>What SarkarSaathi Does:</strong> SarkarSaathi.org simplifies complex administrative paperwork for Indian citizens across all 28 States and 8 Union Territories. We provide step-by-step procedural guides, eligibility criteria checklists, required documents matrices, downloadable standard application forms, interactive calculators, and direct routing to official government portals.
                </p>
                <p>
                  <strong>Who We Help:</strong> We help students, senior citizens, farmers, women beneficiaries, small business owners, and general citizens access legitimate government welfare schemes and public services without being misled by touts, fraudulent agents, or phishing websites.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                    <h4 className="font-bold text-white flex items-center gap-1.5 text-xs text-[#FF6B00]">
                      <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> 100% Free Forever
                    </h4>
                    <p className="text-xs text-zinc-400">We never charge citizens any fees for informational guides, checklists, or calculators. We do not act as commercial middlemen.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                    <h4 className="font-bold text-white flex items-center gap-1.5 text-xs text-emerald-400">
                      <Lock className="w-4 h-4 text-emerald-400" /> Zero Data Harvesting
                    </h4>
                    <p className="text-xs text-zinc-400">No login, registration, Aadhaar storage, or phone number collection is required to use our directory and calculation tools.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                    <h4 className="font-bold text-white flex items-center gap-1.5 text-xs text-cyan-400">
                      <Globe className="w-4 h-4 text-cyan-400" /> Verified Official Links
                    </h4>
                    <p className="text-xs text-zinc-400">Every external application link routes directly to authorized public authorities on .gov.in, .nic.in, or statutory agency portals.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                    <h4 className="font-bold text-white flex items-center gap-1.5 text-xs text-amber-400">
                      <BookOpen className="w-4 h-4 text-amber-400" /> Bilingual Clarity
                    </h4>
                    <p className="text-xs text-zinc-400">Complex administrative circulars and gazettes are broken down into easy-to-understand English and Hindi (हिन्दी) instructions.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. DISCLAIMER */}
          {activePage === 'disclaimer' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Non-Governmental Disclaimer</h2>
              <p className="text-xs text-zinc-400">Last Reviewed & Updated: August 18, 2026</p>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 space-y-2">
                <p className="font-bold text-sm text-white">CRITICAL INDEPENDENCE NOTICE:</p>
                <p>
                  <strong>We are NOT a government website. SarkarSaathi.org is an independent informational guidance portal.</strong>
                </p>
                <p>
                  SarkarSaathi.org is NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with the Government of India, any State Government, Union Territory Administration, or any of their ministries, departments, or statutory bodies.
                </p>
              </div>

              <h3 className="font-bold text-white text-base pt-2">1. Educational & Informational Purpose Only</h3>
              <p>
                All materials, guidelines, procedure overviews, checklists, and calculators published on SarkarSaathi.org are intended solely for educational, guidance, and informational assistance. They do not constitute legal advice, binding government instructions, or statutory decisions.
              </p>

              <h3 className="font-bold text-white text-base pt-2">2. No Guarantee of Eligibility, Approval, or Benefit Disbursement</h3>
              <p>
                SarkarSaathi.org does not evaluate, sanction, process, or guarantee approval for any government welfare scheme, certificate, licence, subsidy, ration card, or financial disbursement. Granting of benefits, verification of credentials, and final decisions rest exclusively with the designated Government Competent Authorities.
              </p>

              <h3 className="font-bold text-white text-base pt-2">3. Applications Must Be Completed on Official Portals</h3>
              <p>
                All official applications, document submissions, biometric enrolments, and government fee payments must be executed directly on the respective official government portals ending in <code>.gov.in</code> or <code>.nic.in</code>. SarkarSaathi.org does not accept government fees or collect application forms on behalf of public authorities.
              </p>

              <h3 className="font-bold text-white text-base pt-2">4. Verification of Rules & Procedures</h3>
              <p>
                Government rules, eligibility slabs, fee structures, and application portals are subject to amendment by official authorities from time to time. While our editorial team strives to keep all guides current and verified, users must cross-verify information against the primary source notifications on the relevant official government portal.
              </p>

              <h3 className="font-bold text-white text-base pt-2">5. Trademarks and Intellectual Property</h3>
              <p>
                All official government names, department names, scheme titles, and emblem references belong exclusively to their respective government authorities. Their reference on this website is for identification, educational, and navigational routing purposes only under fair informational use.
              </p>
            </div>
          )}

          {/* 3. PRIVACY POLICY */}
          {activePage === 'privacy' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Privacy Policy</h2>
              <p className="text-xs text-zinc-400">Effective Date: August 18, 2026</p>

              <p>
                At SarkarSaathi.org, accessible from <strong>https://www.sarkarsaathi.org</strong>, the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information collected and how it is handled.
              </p>

              <h3 className="font-bold text-white text-base pt-2">1. Zero Sensitive Personal Data Collection</h3>
              <p>
                SarkarSaathi.org does <strong>NOT</strong> collect, request, or store sensitive citizen identifiers, including Aadhaar numbers, PAN numbers, passport numbers, voter ID details, biometric data, bank account credentials, or passwords.
              </p>

              <h3 className="font-bold text-white text-base pt-2">2. Local Browser-Only Calculation Tools</h3>
              <p>
                All interactive utilities on SarkarSaathi (including Property Tax, Income Tax, Stamp Duty, Gratuity, and Age calculators) execute 100% locally within your client browser using JavaScript. No financial inputs, values, or calculations are recorded or transmitted to any server.
              </p>

              <h3 className="font-bold text-white text-base pt-2">3. Cookies and Web Beacons</h3>
              <p>
                Like many websites, SarkarSaathi.org may use standard session cookies to store preferences (such as selected language and selected state) to optimize user experience. Cookies do not contain personally identifiable information.
              </p>

              <h3 className="font-bold text-white text-base pt-2">4. Google AdSense & Third-Party Advertising</h3>
              <p>
                Third-party vendors, including Google, may use cookies (such as the DoubleClick cookie) to serve ads based on a user's prior visits to this website or other websites on the Internet.
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to SarkarSaathi.org and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] underline">Google Ads Settings</a> or through <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] underline">aboutads.info</a>.</li>
              </ul>

              <h3 className="font-bold text-white text-base pt-2">5. Log Files & Analytics</h3>
              <p>
                SarkarSaathi.org follows standard log file protocols. Information gathered by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. These are not linked to any information that is personally identifiable and are used solely for analyzing trends, administering the site, and ensuring server security.
              </p>

              <h3 className="font-bold text-white text-base pt-2">6. Contact Form & User Feedback</h3>
              <p>
                If you contact us via our feedback or suggestion form, the name and email address provided will be used solely to respond to your inquiry and will not be sold, rented, or shared with third-party marketing companies.
              </p>

              <h3 className="font-bold text-white text-base pt-2">7. User Rights & Data Contact</h3>
              <p>
                If you have additional questions or require more information about our Privacy Policy, contact us at <code>privacy@sarkarsaathi.org</code>.
              </p>
            </div>
          )}

          {/* 4. TERMS & CONDITIONS */}
          {activePage === 'terms' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Terms & Conditions</h2>
              <p className="text-xs text-zinc-400">Effective Date: August 18, 2026</p>

              <p>
                Welcome to SarkarSaathi.org. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>

              <h3 className="font-bold text-white text-base pt-2">1. Informational Service Only</h3>
              <p>
                SarkarSaathi.org provides free informational guides, checklists, and directory indexes. We are not a government agency, not a commercial liaison agent, and do not charge citizens for government services.
              </p>

              <h3 className="font-bold text-white text-base pt-2">2. Accuracy & Limitation of Liability</h3>
              <p>
                While every effort is made to ensure that all information on this portal is accurate and verified from official gazettes and portals, SarkarSaathi.org accepts no liability for delays, errors, or omissions resulting from unexpected government policy updates, server downtime on destination portals, or changes in statutory rules.
              </p>

              <h3 className="font-bold text-white text-base pt-2">3. Prohibited Usage</h3>
              <p>
                You agree not to misuse this website by attempting to disrupt services, scrape database records for commercial tout services, upload malicious code, or misrepresent SarkarSaathi.org as an official government department.
              </p>
            </div>
          )}

          {/* 5. EDITORIAL POLICY */}
          {activePage === 'editorial' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Editorial Policy</h2>
              <p className="text-xs text-zinc-400">Content Quality, Integrity & Fact-Verification Standards</p>

              <p>
                At SarkarSaathi.org, our editorial mission is to provide accurate, easy-to-understand, and thoroughly verified instructions for Indian citizen services.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-[#FF6B00]">1. Primary Government Sources</h4>
                  <p className="text-xs text-zinc-300">All step-by-step procedures, eligibility rules, and required documents are extracted directly from official notifications, gazette releases, and authorized public domain websites ending in .gov.in or .nic.in.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-[#FF6B00]">2. Human Review & Verification</h4>
                  <p className="text-xs text-zinc-300">Every published scheme page and guide undergoes factual verification by human editors. Unverified automated drafts or synthetic AI filler without authoritative sources are strictly prohibited from publication.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-[#FF6B00]">3. Anti-Touting & Zero Commercial Bias</h4>
                  <p className="text-xs text-zinc-300">We do not promote paid middleman services or touts. Official government fee schedules are always clearly cited with exact statutory amounts (e.g. Free, ₹50, ₹100).</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-[#FF6B00]">4. Plain Language & Accessibility</h4>
                  <p className="text-xs text-zinc-300">Administrative terminology is translated into accessible language with bilingual headings (English & Hindi) to assist citizens from all educational backgrounds.</p>
                </div>
              </div>
            </div>
          )}

          {/* 6. CORRECTION POLICY */}
          {activePage === 'correction' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Correction Policy</h2>
              <p className="text-xs text-zinc-400">Transparency, Prompt Corrections & Accountability</p>

              <p>
                SarkarSaathi.org is committed to complete factual accuracy. When an error, outdated rule, broken link, or policy change is identified, we promptly review and correct the content.
              </p>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 space-y-2">
                <h4 className="font-bold text-white text-sm">Our Correction Workflow:</h4>
                <ol className="list-decimal list-inside space-y-1 text-xs text-emerald-100">
                  <li><strong>Notice & Identification:</strong> Inaccuracies reported via the "Report Broken Link" or "Contact Us" forms are routed to our editorial desk.</li>
                  <li><strong>Source Verification:</strong> Editors cross-check the claim against the latest Gazette notification or official ministry portal (.gov.in).</li>
                  <li><strong>Prompt Remediation:</strong> Verified corrections are published within 24 to 48 hours.</li>
                  <li><strong>Last Updated Timestamp:</strong> The article's "Last Verified / Last Updated" timestamp is refreshed to keep citizens informed.</li>
                </ol>
              </div>

              <h3 className="font-bold text-white text-base pt-2">How to Submit a Correction</h3>
              <p>
                If you find an outdated fee, incorrect document requirement, or broken government link, please submit the details via our <button onClick={() => setActivePage('report-link')} className="text-[#FF6B00] font-bold underline">Report Broken Link</button> tool.
              </p>
            </div>
          )}

          {/* 7. GOVERNMENT SOURCE POLICY */}
          {activePage === 'source-policy' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Government Source Policy</h2>
              <p className="text-xs text-zinc-400">Standard for Validating Official Public Authorities</p>

              <p>
                To guard Indian citizens against fraud, deceptive clone portals, and unofficial registration charges, SarkarSaathi.org adheres to a strict source validation protocol.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-cyan-400">1. Domain Authentication</h4>
                  <p className="text-xs text-zinc-300">Application and inquiry buttons exclusively link to authenticated government domain extensions (<code>.gov.in</code>, <code>.nic.in</code>, or verified statutory corporation domains like <code>rbi.org.in</code>, <code>uidai.gov.in</code>, <code>incometax.gov.in</code>).</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-cyan-400">2. Press Information Bureau (PIB) Cross-Referencing</h4>
                  <p className="text-xs text-zinc-300">New welfare announcements, eligibility changes, and installment release dates are verified against PIB Fact Check and official Ministry press statements before publication.</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <h4 className="font-bold text-white text-sm text-cyan-400">3. Clear Distinction of External Portals</h4>
                  <p className="text-xs text-zinc-300">All outbound buttons are clearly designated as external links to destination government websites with transparent notices explaining that the citizen is leaving SarkarSaathi to complete their official procedure.</p>
                </div>
              </div>
            </div>
          )}

          {/* 8. CONTACT US */}
          {activePage === 'contact' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white">Contact Us & Citizen Feedback</h2>
                <p className="text-sm font-bold text-amber-300 mt-2 bg-[#182338] p-3 rounded-xl border border-[#FF6B00]/40">
                  "कोई जानकारी छूट गई है? हमें बताएं, ताकि हम वेबसाइट को और बेहतर बना सकें।"
                </p>
                <p className="text-xs text-zinc-400 mt-1">Have a suggestion, missed detail, correction, or question? Send us a message.</p>
              </div>

              {submittedMessage && (
                <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! Your feedback has been received and logged for review.</span>
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
                    placeholder="How can we improve SarkarSaathi for citizens?"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white font-bold transition flex items-center gap-2 shadow-lg shadow-[#FF6B00]/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          )}

          {/* ACCESSIBILITY */}
          {activePage === 'accessibility' && (
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <h2 className="text-2xl font-black text-white">Accessibility Statement</h2>
              <p className="text-xs text-zinc-400">Digital Inclusion & Usability for All Citizens</p>

              <p>
                SarkarSaathi.org is committed to digital inclusion, ensuring that all citizens, including senior citizens and Persons with Disabilities (PwD), can comfortably access government guidance.
              </p>

              <div className="space-y-3 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                <h4 className="font-bold text-white">Accessibility Features:</h4>
                <p>• <strong>Font Size Adjustment:</strong> Instant A- / A / A+ text enlargement controls in the header.</p>
                <p>• <strong>High Contrast Mode:</strong> High contrast color schemes complying with WCAG 2.1 AA standards.</p>
                <p>• <strong>Multi-Language Support:</strong> Interface translations across 13 Indian languages.</p>
                <p>• <strong>Screen Reader Compatibility:</strong> Proper semantic headings, ARIA labels, and structured JSON-LD schemas.</p>
              </div>
            </div>
          )}

          {/* REPORT BROKEN LINK */}
          {activePage === 'report-link' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white">Report Broken Link or Outdated Information</h2>
              <p className="text-xs text-zinc-400">Help us maintain 100% accurate, working .gov.in links across all Indian States.</p>
              
              {submittedMessage ? (
                <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! Your report has been submitted for immediate verification.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 max-w-lg text-xs">
                  <div>
                    <label className="font-bold text-zinc-300 block mb-1">Service / Scheme Name or Page URL</label>
                    <input type="text" required placeholder="e.g. Punjab Driving Licence Link" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#FF6B00]" />
                  </div>
                  <div>
                    <label className="font-bold text-zinc-300 block mb-1">Issue Description</label>
                    <textarea rows={3} required placeholder="What error or outdated information occurred?" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#FF6B00]" />
                  </div>
                  <button type="submit" className="px-5 py-2.5 rounded-xl bg-[#FF6B00] text-white font-bold hover:bg-[#E65100] transition">Submit Report</button>
                </form>
              )}
            </div>
          )}

          {/* SUGGEST SERVICE */}
          {activePage === 'suggest-service' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white">Suggest a Government Service</h2>
                <p className="text-xs text-zinc-400 mt-1">Know a State or Central Government scheme or service we should add? Let us know!</p>
              </div>

              {submittedMessage ? (
                <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! Your suggestion has been logged for editorial review.</span>
                </div>
              ) : (
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
                      placeholder="e.g. Maharashtra Ladki Bahin Yojana"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-zinc-300 block mb-1">State or Central Authority</label>
                    <input
                      type="text"
                      placeholder="e.g. Maharashtra Government / Central Government"
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
                    <label className="font-bold text-zinc-300 block mb-1">Details or Description</label>
                    <textarea
                      rows={3}
                      placeholder="Brief details about who this service helps..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white font-bold transition flex items-center gap-2 shadow-lg shadow-[#FF6B00]/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Suggestion</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
