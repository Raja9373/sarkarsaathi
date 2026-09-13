import React from 'react';

export const CoreDestinations: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const destinations = [
    {
      title: 'Explore Government Investments',
      description: 'Discover government-backed investment products, small savings schemes, and financial securities.',
      cta: 'Explore Investments',
      tab: 'investments'
    },
    {
      title: 'Investment Schemes & Incentives',
      description: 'Discover government schemes supporting investment, business, industry, and development.',
      cta: 'Explore Schemes',
      tab: 'investment-schemes'
    },
    {
      title: 'Find Investment Opportunities',
      description: 'Discover government-led infrastructure development opportunities, PPP projects, and business prospects.',
      cta: 'Explore Opportunities',
      tab: 'opportunities'
    },
    {
      title: 'Find Government Tenders',
      description: 'Discover procurement, contract, and business opportunities directly from official government sources.',
      cta: 'Explore Tenders',
      tab: 'tenders'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((d, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col hover:border-[#FF6B00] transition">
            <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
            <p className="text-zinc-400 text-sm mb-6 flex-grow">{d.description}</p>
            <button onClick={() => onNavigate(d.tab)} className="w-full bg-[#FF6B00] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e66000] transition">
              {d.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

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
