import React, { useState, useEffect } from 'react';
import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { Investment } from '../types/investment';
import { SEOHead } from './SEOHead';

interface InvestmentDetailProps {
  slug: string;
}

export const InvestmentDetail: React.FC<InvestmentDetailProps> = ({ slug }) => {
  const [investment, setInvestment] = useState<Investment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvestment = async () => {
      setLoading(true);
      const repo = new MockInvestmentRepository();
      const inv = await repo.getBySlug(slug);
      setInvestment(inv);
      setLoading(false);
    };
    fetchInvestment();
  }, [slug]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!investment) return <div className="text-white p-8">Investment not found.</div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto text-zinc-100">
      <SEOHead activeInvestment={investment} canonicalUrl={`https://www.sarkarsaathi.org/investments/${investment.slug}`} />
      <a href="/investments" className="text-[#FF6B00] mb-4 inline-block hover:underline">&larr; Back to Investments</a>
      
      <h1 className="text-4xl font-black mb-2">{investment.name}</h1>
      <div className="flex gap-4 mb-6">
        <span className="px-3 py-1 bg-zinc-800 rounded text-sm">{investment.category}</span>
        <span className={`px-3 py-1 rounded text-sm ${investment.status === 'ACTIVE' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
            {investment.status}
        </span>
      </div>

      {investment.description && <p className="text-lg text-zinc-300 mb-8">{investment.description}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {investment.interestRate && (
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <h4 className="text-zinc-400 text-xs uppercase">Interest/Return</h4>
                <p className="text-xl font-bold">{investment.interestRate}</p>
            </div>
        )}
        {investment.tenure && (
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <h4 className="text-zinc-400 text-xs uppercase">Tenure</h4>
                <p className="text-xl font-bold">{investment.tenure}</p>
            </div>
        )}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Key Information</h2>
        {investment.eligibility && (
            <div>
                <h3 className="font-semibold text-zinc-300">Who can invest</h3>
                <p className="text-zinc-400">{investment.eligibility}</p>
            </div>
        )}
        {investment.taxation && (
            <div>
                <h3 className="font-semibold text-zinc-300">Taxation</h3>
                <p className="text-zinc-400">{investment.taxation}</p>
            </div>
        )}
      </div>

      <div className="mt-12 p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
        <h3 className="font-bold mb-4">Official Sources & Verification</h3>
        <p className="text-sm text-zinc-400 mb-2">Authority: {investment.authority}</p>
        <p className="text-sm text-zinc-400 mb-4">Last Verified: {investment.lastVerified}</p>
        <a href={investment.officialInformationUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:underline">
            Visit Official Website &rarr;
        </a>
      </div>

      <div className="mt-8 p-4 bg-zinc-800/50 rounded text-xs text-zinc-500">
        <p>SarkarSaathi.org is an independent informational platform and is not affiliated with or operated by any government authority. Information provided is for educational purposes based on official sources. Please verify with official websites before making financial decisions.</p>
      </div>
    </div>
  );
};
