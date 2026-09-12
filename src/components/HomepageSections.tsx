import React from 'react';

export const InvestmentCategories: React.FC = () => (
  <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-3xl font-black mb-6">Explore Government Investments</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {['Government Savings', 'Government Securities', 'Pension & Retirement', 'Gold', 'EPFO', 'Social Security'].map(cat => (
        <div key={cat} className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center font-bold text-sm hover:border-[#FF6B00] cursor-pointer">
          {cat}
        </div>
      ))}
    </div>
  </div>
);

export const OpportunitiesSection: React.FC = () => (
  <div className="max-w-7xl mx-auto p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
    <h2 className="text-3xl font-black mb-4">Discover Government Investment Opportunities</h2>
    <p className="text-zinc-400 mb-6 max-w-2xl">Investment products and investment opportunities are different categories. SarkarSaathi keeps them separately organized so users can understand exactly what they are exploring.</p>
    <ul className="list-disc list-inside text-zinc-300 space-y-2">
      <li>Government & Development Projects</li>
      <li>Infrastructure Projects</li>
      <li>PPP Opportunities</li>
      <li>State & Central Opportunities</li>
    </ul>
  </div>
);

export const TendersSection: React.FC = () => (
  <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-3xl font-black mb-4">Government Tenders</h2>
    <p className="text-zinc-400 mb-6">Find government procurement and business opportunities from Central and State departments, PSUs and public authorities.</p>
    <button className="bg-[#FF6B00] text-white px-6 py-2 rounded-lg font-bold">Explore Tenders</button>
  </div>
);

export const InvestmentSchemesSection: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => (
  <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-3xl font-black mb-4">Investment Schemes & Incentives</h2>
    <p className="text-zinc-400 mb-6">Explore government investment-related schemes and incentives from official sources.</p>
    <button onClick={() => onNavigate('investment-schemes')} className="bg-[#FF6B00] text-white px-6 py-2 rounded-lg font-bold">Explore Schemes</button>
  </div>
);

export const TrustSection: React.FC = () => (
    <div className="max-w-7xl mx-auto p-6 border-t border-zinc-800 mt-12">
        <h2 className="text-3xl font-black mb-6">Information From Official Sources</h2>
        <p className="text-zinc-400 mb-4">SarkarSaathi links users directly to official government and regulatory sources.</p>
        <div className="flex gap-4 text-zinc-500 font-bold text-sm">
            <span>RBI</span><span>India Post</span><span>PFRDA</span><span>EPFO</span><span>Ministries/Departments</span>
        </div>
    </div>
);

export const HowItWorks: React.FC = () => (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
            {s: '1. Discover', d: 'Find an investment, opportunity, tender or update.'},
            {s: '2. Understand', d: 'Read eligibility, terms, status, important details.'},
            {s: '3. Verify', d: 'Check the linked official source.'},
            {s: '4. Act', d: 'Proceed through the relevant official channel.'}
        ].map((item, i) => (
            <div key={i} className="space-y-2">
                <h4 className="font-bold text-[#FF6B00]">{item.s}</h4>
                <p className="text-sm text-zinc-400">{item.d}</p>
            </div>
        ))}
    </div>
);
