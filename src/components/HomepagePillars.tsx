import React from 'react';
import { Briefcase, TrendingUp, FileText, Newspaper } from 'lucide-react';

export const HomepagePillars: React.FC<{onNavigate: (tab: string) => void}> = ({onNavigate}) => {
  const pillars = [
    { title: 'Government Investments', desc: 'Explore government savings, securities, pension and other government-backed investment products.', icon: TrendingUp, action: 'investments' },
    { title: 'Investment Opportunities', desc: 'Discover government and infrastructure projects, development opportunities and PPP-related opportunities.', icon: Briefcase, action: 'opportunities' },
    { title: 'Government Tenders', desc: 'Find procurement and tender opportunities from government departments, PSUs and public authorities.', icon: FileText, action: 'tenders' },
    { title: 'News & Updates', desc: 'Track important government investment, policy, rate, project and opportunity updates.', icon: Newspaper, action: 'news' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
      {pillars.map((p, i) => (
        <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#FF6B00] transition">
          <p.icon className="w-10 h-10 text-[#FF6B00] mb-4" />
          <h3 className="text-xl font-bold mb-2">{p.title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{p.desc}</p>
          <button onClick={() => onNavigate(p.action)} className="text-[#FF6B00] font-bold text-sm">
            {p.action === 'investments' ? 'Explore Investments' : p.action === 'opportunities' ? 'Explore Opportunities' : p.action === 'tenders' ? 'Find Tenders' : 'View Updates'} →
          </button>
        </div>
      ))}
    </div>
  );
};
