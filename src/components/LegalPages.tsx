import React from 'react';

export const AboutPage: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">About SarkarSaathi</h1>
    
    <div className="prose prose-slate max-w-none text-slate-700">
      <p className="text-lg leading-relaxed">
        SarkarSaathi.org is an independent information platform dedicated to simplifying the discovery, tracking, and understanding of government-led initiatives across India.
      </p>
      
      <p>
        Our mission is to provide an accessible, streamlined interface for citizens to navigate the vast landscape of government information. We achieve this by aggregating publicly available data from authoritative, official sources to create a more user-friendly experience for exploring infrastructure projects, investment opportunities, subsidy schemes, tenders, and public news.
      </p>
    </div>

    <div className="prose prose-slate max-w-none text-slate-700">
      <h2 className="text-2xl font-semibold text-slate-900">Our Methodology</h2>
      <p>
        SarkarSaathi operates as an aggregator. We do not generate government policies, schemes, or project data ourselves. Instead, our process involves:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Sourcing:</strong> Systematically identifying and mapping verified official government portals (<code>.gov.in</code> domains).</li>
        <li><strong>Aggregation:</strong> Collecting publicly available information to organize it into accessible categories.</li>
        <li><strong>Transparency:</strong> Clearly citing the original official source authority for every item listed, ensuring users know exactly where the information originates.</li>
      </ul>
      <p>
        This methodical approach allows us to maintain our role as a neutral, independent facilitator of public information.
      </p>
    </div>

    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
      <h2 className="font-bold text-indigo-950 mb-2">Our Stance on Affiliation</h2>
      <p className="text-indigo-900">
        SarkarSaathi.org is a private, independent information platform and is <strong>not affiliated with, authorized, or endorsed by the Government of India</strong> or any of its departments or ministries.
      </p>
    </div>

    <div className="prose prose-slate max-w-none text-slate-700">
      <h2 className="text-2xl font-semibold text-slate-900">Our Commitment to Accuracy & Official Sources</h2>
      <p>
        While we are committed to maintaining the accuracy and timeliness of the information we display, we act solely as an aggregator.
      </p>
      <p className="font-medium">
        Users must always verify critical information directly on the official government website before making decisions or taking any action based on the information provided here.
      </p>
    </div>
  </div>
);

export const ContactPage: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <p>If you have any general enquiries, suggestions for source updates, or reports regarding errors on our platform, please reach out to us.</p>
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <h2 className="font-bold mb-2">Support & Feedback</h2>
      <p>For corrections or feedback, email: <a href="mailto:support@sarkarsaathi.org" className="text-indigo-600 font-semibold underline">support@sarkarsaathi.org</a></p>
    </div>
  </div>
);

export const PrivacyPolicyPage: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6">
    <h1 className="text-3xl font-bold">Privacy Policy</h1>
    <p>Your privacy is important to us. As an informational website, we aim to minimize data collection.</p>
    <h2 className="text-xl font-semibold">Data Usage</h2>
    <p>We do not store or sell user data. Our platform primarily serves public information sourced from official government portals.</p>
  </div>
);

export const DisclaimerPage: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6">
    <h1 className="text-3xl font-bold">Disclaimer</h1>
    <p>SarkarSaathi.org is an independent information platform and is not a government website.</p>
    <p>Government names, logos, trademarks, and source material belong to their respective authorities.</p>
    <p>We do not guarantee approval for any tender, investment, subsidy, or scheme. Information is for informational purposes only. Always verify details on the official government portal.</p>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6">
    <h1 className="text-3xl font-bold">Terms of Service</h1>
    <p>By using SarkarSaathi.org, you agree to these terms.</p>
    <p>This is an informational platform. We do not own government data. You are responsible for verifying any action taken based on information from this site.</p>
  </div>
);
