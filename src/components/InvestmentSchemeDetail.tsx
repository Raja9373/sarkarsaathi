import React, { useState, useEffect } from 'react';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';
import { ExternalLink, ShieldCheck, Calendar, Info, Building } from 'lucide-react';

interface InvestmentSchemeDetailProps {
  slug: string;
}

export const InvestmentSchemeDetail: React.FC<InvestmentSchemeDetailProps> = ({ slug }) => {
  const [scheme, setScheme] = useState<GovernmentInvestmentSchemeRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScheme = async () => {
      setLoading(true);
      const repo = new MockInvestmentSchemeRepository();
      const s = await repo.getBySlug(slug);
      setScheme(s);
      setLoading(false);
    };
    fetchScheme();
  }, [slug]);

  if (loading) return <div className="text-white p-8 text-center">Loading scheme details...</div>;
  if (!scheme) return <div className="text-white p-8 text-center">Scheme not found.</div>;

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto text-zinc-100">
      <a href="/investment-schemes" className="text-[#FF6B00] mb-6 inline-block hover:underline font-bold">&larr; Back to Investment Schemes</a>
      
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{scheme.schemeName}</h1>
        <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#FF6B00]/20 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-bold uppercase">{scheme.category}</span>
            <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-bold uppercase">{scheme.status}</span>
        </div>

        <div className="prose prose-zinc prose-invert max-w-none">
            <h3 className="font-bold text-lg mb-2">Purpose</h3>
            <p className="text-zinc-300 mb-6">{scheme.investmentPurpose}</p>
            
            <h3 className="font-bold text-lg mb-2">Description</h3>
            <p className="text-zinc-300 mb-6">{scheme.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm mt-6">
            {[
                {label: 'Ministry', value: scheme.ministry},
                {label: 'Department', value: scheme.department},
                {label: 'Implementing Authority', value: scheme.implementingAuthority},
                {label: 'Level', value: scheme.level},
            ].map(item => (
                <div key={item.label} className="border-b border-zinc-800 pb-2 flex justify-between">
                    <span className="text-zinc-500 font-medium">{item.label}</span>
                    <span className="text-zinc-200 font-semibold">{item.value}</span>
                </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="font-bold mb-4">Eligibility</h3>
              <p className="text-sm text-zinc-300">{scheme.eligibility}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="font-bold mb-4">Benefits</h3>
              <p className="text-sm text-zinc-300">{scheme.benefits}</p>
          </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><ShieldCheck className="text-[#FF6B00]" /> Official Source & Verification</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
            <div className="p-4 bg-[#0B0F17] rounded-xl border border-zinc-800">
                <div className="text-zinc-500 text-xs">Official Source Authority</div>
                <div className="font-bold">{scheme.sourceAuthority}</div>
            </div>
            <div className="p-4 bg-[#0B0F17] rounded-xl border border-zinc-800">
                <div className="text-zinc-500 text-xs">Last Verified</div>
                <div className="font-bold">{scheme.lastVerifiedAt}</div>
            </div>
        </div>

        <p className="text-sm text-zinc-400 mb-6">SarkarSaathi is an independent information platform. Always verify the scheme details, eligibility requirements, and application procedures on the official government source before acting.</p>
        
        <div className="flex gap-4">
            <a href={scheme.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-[#FF6B00] px-8 py-4 rounded-xl font-bold hover:bg-[#e66000] transition">
                View Official Details <ExternalLink size={18} />
            </a>
            {scheme.mySchemeUrl && (
                <a href={scheme.mySchemeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-300 bg-zinc-800 px-8 py-4 rounded-xl font-bold hover:bg-zinc-700 transition">
                    View on myScheme <ExternalLink size={18} />
                </a>
            )}
        </div>
      </div>
    </div>
  );
};
