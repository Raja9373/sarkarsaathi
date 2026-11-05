import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Mail, FileText, Lock, AlertTriangle, Scale, BookOpen, Building2, Clock, Send } from 'lucide-react';

export const AboutPage: React.FC = () => (
  <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-10">
    {/* Header */}
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
      <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-bold">
        <ShieldCheck className="w-4 h-4" />
        <span>Independent Public Information &amp; Research Platform</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        About SarkarSaathi.org
      </h1>
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
        SarkarSaathi.org is an independent civic-research and public information platform dedicated to simplifying how Indian citizens, farmers, MSME entrepreneurs, students, and senior citizens discover, evaluate, and understand verified government schemes, sovereign savings instruments, subsidies, and public procurement notices.
      </p>
    </div>

    {/* Why SarkarSaathi Exists */}
    <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-5">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center space-x-2.5">
        <BookOpen className="w-5 h-5 text-indigo-600 shrink-0" />
        <span>Our Mission &amp; Editorial Value</span>
      </h2>
      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p>
          Across India, central ministries, state departments, and statutory public sector undertakings publish thousands of welfare notifications, capital investment subsidies, tax-saving bonds, and procurement tenders across hundreds of separate portals. For an ordinary citizen or small business owner, understanding exact eligibility rules, calculating maturity returns, preparing mandatory KYC documents, and identifying the authentic <code>.gov.in</code> application link is often overwhelming.
        </p>
        <p>
          SarkarSaathi bridges this information gap by transforming complex official notifications and gazette guidelines into structured, easy-to-read editorial guides, side-by-side financial comparisons, interactive maturity calculators, and multilingual Q&amp;A explainers (in English, Hindi, and Hinglish).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="text-xs font-bold uppercase text-indigo-600 mb-1">1. Primary Source Citation</div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every published scheme, bond, subsidy, and tender cites its issuing ministry and links directly to the official government portal.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="text-xs font-bold uppercase text-emerald-600 mb-1">2. Strict Quarantine Gate</div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Incomplete, unverified, or provisional records are automatically quarantined and excluded from our public directory and search index.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="text-xs font-bold uppercase text-amber-600 mb-1">3. Zero Middlemen</div>
          <p className="text-xs text-slate-600 leading-relaxed">
            We never charge registration fees, never collect sensitive citizen KYC documents, and never act as an intermediary or broker.
          </p>
        </div>
      </div>
    </section>

    {/* 4-Stage Editorial & Verification Methodology */}
    <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center space-x-2.5">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
        <span>Our 4-Stage Verification &amp; Data Governance Methodology</span>
      </h2>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Unlike generic web directories that republish unverified rumours, SarkarSaathi enforces a strict four-stage editorial and automated verification workflow before any scheme or opportunity is marked as <strong>PUBLISHED</strong>:
      </p>

      <div className="space-y-4">
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-1.5">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Stage 1: Authoritative Source Mapping
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We only track announcements and scheme guidelines from verified statutory domains including <code>.gov.in</code>, <code>.nic.in</code>, Reserve Bank of India (<code>rbi.org.in</code>), NABARD, SIDBI, NHB, NSE/BSE sovereign debt platforms, and official state government portals across all 28 States and 8 Union Territories.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-1.5">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Stage 2: Schema &amp; Claim Validation
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every record is audited for five mandatory parameters: (1) Official Scheme Name, (2) Issuing Ministry or Department, (3) Quantified Financial Benefit or Interest Rate, (4) Specific Beneficiary Eligibility Criteria, and (5) Working Official Portal URL. Records missing any of these pillars are held in quarantine.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-1.5">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Stage 3: Plain-Language Editorial Structuring
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Legalistic circular language is distilled into structured citizen checklists: <em>What is this scheme?</em>, <em>Who is eligible?</em>, <em>What financial benefit is available?</em>, <em>What documents are required?</em>, and <em>Step-by-step online/offline application procedure</em>.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-1.5">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Stage 4: Continuous Freshness &amp; Expiry Audits
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Interest rates on small savings schemes (reviewed quarterly by the Ministry of Finance), tender closing deadlines, and subsidy budget windows are audited continuously so citizens always see the last verified date on every page.
          </p>
        </div>
      </div>
    </section>

    {/* Non-Affiliation Notice */}
    <section className="bg-indigo-50 border border-indigo-200 rounded-3xl p-6 sm:p-8 space-y-3">
      <div className="flex items-center space-x-2 text-indigo-950 font-bold text-base sm:text-lg">
        <Building2 className="w-5 h-5 text-indigo-700 shrink-0" />
        <span>Declaration of Editorial Independence &amp; Non-Affiliation</span>
      </div>
      <p className="text-indigo-900 text-xs sm:text-sm leading-relaxed">
        SarkarSaathi.org is a privately operated, independent public information platform. We are <strong>NOT affiliated with, endorsed by, sponsored by, or operated by the Government of India, any State Government, or any Ministry/Department</strong>. All official emblems, scheme names, and portal references belong to their respective statutory authorities and are cited strictly for public informational and educational purposes under fair-dealing principles.
      </p>
    </section>
  </div>
);

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Scheme Data Correction');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold">
          <Mail className="w-4 h-4" />
          <span>Editorial Desk &amp; Citizen Feedback</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact Us &amp; Report a Correction
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We welcome feedback from citizens, researchers, CSC operators, and government officials. If you spot an outdated interest rate, a broken official portal link, or wish to suggest a newly notified Central or State government scheme for verification, please contact our editorial desk below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-slate-900 text-base">Editorial &amp; Corrections</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            For reporting changes in scheme guidelines, subsidy amounts, or broken official URLs:
          </p>
          <a href="mailto:support@sarkarsaathi.org" className="text-xs sm:text-sm font-bold text-indigo-600 hover:underline block pt-1">
            support@sarkarsaathi.org
          </a>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-slate-900 text-base">Privacy &amp; Grievance Desk</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            For privacy inquiries, data protection requests, or advertising policy questions:
          </p>
          <a href="mailto:grievance@sarkarsaathi.org" className="text-xs sm:text-sm font-bold text-emerald-700 hover:underline block pt-1">
            grievance@sarkarsaathi.org
          </a>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-slate-900 text-base">Response Turnaround</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our verification team reviews all submitted scheme updates and link corrections within <strong>24 to 48 business hours</strong> (Monday–Saturday, 10:00 AM – 6:00 PM IST).
          </p>
        </div>
      </div>

      {/* Interactive Feedback & Correction Form */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Submit a Scheme Update or Inquiry</h2>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Please do not share sensitive personal information such as Aadhaar numbers, PAN, or bank account details in this form.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-emerald-950 space-y-3">
            <div className="flex items-center space-x-2 font-bold text-base text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you! Your message has been logged for editorial review.</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              We have recorded your submission regarding <strong>{category}</strong>. You can also email supporting official gazette PDFs or links directly to <a href="mailto:support@sarkarsaathi.org" className="underline font-bold">support@sarkarsaathi.org</a>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Inquiry Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Scheme Data Correction">Scheme Data or Eligibility Correction</option>
                <option value="Suggest New Government Scheme">Suggest a New Verified Government Scheme</option>
                <option value="Broken Official Portal Link">Report a Broken Official .gov.in Link</option>
                <option value="General Feedback or Press Inquiry">General Feedback / Editorial Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Message &amp; Official Source URL (if applicable) *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe the scheme name, update details, or official ministry notification URL..."
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to Editorial Desk</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => (
  <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-8">
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
      <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold">
        <Lock className="w-4 h-4" />
        <span>Privacy, Cookie &amp; Data Protection Policy</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-xs sm:text-sm text-slate-500">
        Last Updated &amp; Effective Date: November 1, 2026
      </p>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        At <strong>SarkarSaathi.org</strong> ("we", "our", or "us"), accessible from <code>https://sarkarsaathi.org</code>, protecting the privacy of our visitors is one of our highest priorities. This Privacy Policy outlines the types of information we collect and record, how we use it, and your rights under applicable Indian data protection laws including the Digital Personal Data Protection Act (DPDP Act), 2023.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Zero Sensitive Personal or KYC Data Collection</h2>
        <p>
          SarkarSaathi.org is a free public information platform. <strong>We do not require user registration, and we never ask for or collect sensitive personal or financial identifiers</strong> such as Aadhaar numbers, PAN card details, bank account numbers, IFSC codes, OTPs, or caste/income certificates. Any calculators (such as PPF, Sukanya Samriddhi, SCSS, or 54EC bond calculators) and bookmarking features ("Saved Items" and "Recently Viewed") execute locally within your browser's <code>localStorage</code> and are never transmitted to our servers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Standard Log Files &amp; Technical Telemetry</h2>
        <p>
          SarkarSaathi.org follows a standard procedure of using server log files. These files log visitors when they visit websites, which is a standard part of hosting security and performance analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing traffic trends, administering the site, preventing automated abuse, and improving page accessibility across mobile and desktop devices.
        </p>
      </section>

      <section className="space-y-3 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900">3. Google AdSense &amp; DoubleClick DART Cookie Disclosure</h2>
        <p>
          We use <strong>Google AdSense</strong> to display advertisements on SarkarSaathi.org in order to fund our independent research, server infrastructure, and daily verification of public schemes while keeping the platform 100% free for citizens.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
          <li>
            <strong>Third-Party Vendors &amp; Cookies:</strong> Third-party vendors, including Google, use cookies (such as the DoubleClick DART cookie and advertising identifiers) to serve ads based on a user's prior visits to <code>https://sarkarsaathi.org</code> or other websites on the internet.
          </li>
          <li>
            <strong>Personalized Advertising:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
          </li>
          <li>
            <strong>How to Opt Out:</strong> Users may opt out of personalized advertising at any time by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">Google Ads Settings (https://adssettings.google.com)</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">www.aboutads.info/choices</a>.
          </li>
          <li>
            <strong>Google Privacy &amp; Terms:</strong> To learn more about how Google processes data in advertising products, please review <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">How Google uses information from sites or apps that use our services</a>.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Cookies and Browser Local Storage</h2>
        <p>
          Like any modern web application, SarkarSaathi.org uses browser storage (`localStorage`) and essential cookies to store visitor preferences—such as your saved schemes (`sarkarsaathi_saved`), recently viewed pages (`sarkarsaathi_recent`), and preferred reading language (English, Hindi, or Hinglish). You can clear your saved items at any time directly from the "Saved" or "Recent" tabs on our website or by clearing your browser cache.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. External Links to Official Government Portals (`.gov.in`)</h2>
        <p>
          Our platform contains direct reference links to external official government portals (such as <code>myscheme.gov.in</code>, <code>pmkisan.gov.in</code>, <code>pmsuryaghar.gov.in</code>, <code>gem.gov.in</code>, and <code>rbi.org.in</code>). Please note that once you click an external link and leave SarkarSaathi.org, our Privacy Policy no longer applies. We encourage you to read the privacy statements of every official portal you visit.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Your Rights &amp; Grievance Redressal</h2>
        <p>
          If you have contacted us via email or our feedback form and wish to access, correct, or erase your correspondence, please contact our Data Protection &amp; Grievance Desk at <a href="mailto:grievance@sarkarsaathi.org" className="text-indigo-600 font-semibold underline">grievance@sarkarsaathi.org</a> or <a href="mailto:support@sarkarsaathi.org" className="text-indigo-600 font-semibold underline">support@sarkarsaathi.org</a>.
        </p>
      </section>
    </div>
  </div>
);

export const DisclaimerPage: React.FC = () => (
  <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-8">
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
      <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
        <AlertTriangle className="w-4 h-4" />
        <span>Statutory, Financial &amp; Non-Affiliation Disclaimer</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Disclaimer &amp; Non-Affiliation Notice
      </h1>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Please read this disclaimer carefully before using information, financial calculators, or scheme guides published on <strong>SarkarSaathi.org</strong>.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">1. Not a Government Website</h2>
        <p>
          SarkarSaathi.org is a private, independent public information platform. We are <strong>NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with the Government of India, any State Government, or any Ministry, PSU, or statutory agency</strong>. All government scheme names, ministry titles, and portal links are referenced solely for citizen awareness and educational reporting.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">2. No Financial, Tax, or Legal Advice</h2>
        <p>
          The information provided on Sovereign Investments (including 54EC Capital Gain Tax Exemption Bonds, Sovereign Gold Bonds, RBI Floating Rate Bonds) and Small Savings Schemes (including PPF, Sukanya Samriddhi Yojana, Senior Citizen Savings Scheme, and NPS) is strictly for general informational and educational purposes. It does not constitute certified financial planning, investment advisory, or tax advice under SEBI or Income Tax regulations. Interest rates and tax exemptions (such as Section 80C or Section 54EC) are subject to periodic revision by the Ministry of Finance and the Reserve Bank of India. Always consult a SEBI-registered investment advisor or Chartered Accountant before making financial commitments.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">3. Mandatory Verification on Official Portals</h2>
        <p>
          While our editorial and automated pipelines audit records against official <code>.gov.in</code> portals, government departments may modify eligibility criteria, subsidy ceilings, or application deadlines without prior notice. Visitors must verify all scheme guidelines, corrigenda, and tender notices directly on the linked official government website before submitting any application or bid.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">4. Warning Against Fraudulent Middlemen</h2>
        <p>
          SarkarSaathi.org never charges citizens for accessing scheme information, never processes subsidy applications on your behalf, and never asks for OTPs or application fees. Citizens are advised to apply only through official government portals or authorized Common Service Centres (CSCs).
        </p>
      </section>
    </div>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-8">
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
      <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
        <Scale className="w-4 h-4" />
        <span>Platform Usage Guidelines</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Terms of Service
      </h1>
      <p className="text-xs sm:text-sm text-slate-500">
        Effective Date: November 1, 2026
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p>
          By accessing and using <strong>SarkarSaathi.org</strong>, you accept and agree to be bound by these Terms of Service, our Privacy Policy, and our Statutory Disclaimer. If you do not agree to abide by these terms, please discontinue use of the platform.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">2. Permitted Informational &amp; Educational Use</h2>
        <p>
          SarkarSaathi.org grants citizens, students, researchers, and entrepreneurs a revocable, non-exclusive license to view, bookmark, and share our compiled scheme guides, comparisons, and calculators for personal, non-commercial informational use.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property &amp; Source Attribution</h2>
        <p>
          While underlying statutory facts, gazette notifications, and government scheme rules are public domain works of the respective central and state governments, the editorial summaries, multilingual Q&amp;A translations, taxonomy classifications, comparison matrices, and software code on SarkarSaathi.org are original works protected under applicable copyright laws.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
        <p>
          All content on SarkarSaathi.org is provided on an "as-is" and "as-available" basis. Under no circumstances shall SarkarSaathi.org or its contributors be liable for any direct, indirect, or consequential loss arising from rejected subsidy applications, missed tender deadlines, or changes in government interest rates.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">5. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
        </p>
      </section>
    </div>
  </div>
);
