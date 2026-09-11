import React, { useState, useEffect } from 'react';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { OpportunityRecord } from '../types/opportunity';
import { SEOHead } from './SEOHead';

interface OpportunityDetailProps {
  slug: string;
}

export const OpportunityDetail: React.FC<OpportunityDetailProps> = ({ slug }) => {
  const [opportunity, setOpportunity] = useState<OpportunityRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunity = async () => {
      setLoading(true);
      const repo = new MockOpportunityRepository();
      const o = await repo.getBySlug(slug);
      setOpportunity(o);
      setLoading(false);
    };
    fetchOpportunity();
  }, [slug]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!opportunity) return <div className="text-white p-8">Opportunity not found.</div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto text-zinc-100">
      <SEOHead activeOpportunity={opportunity} />
      <a href="/opportunities" className="text-[#FF6B00] mb-4 inline-block hover:underline">&larr; Back to Opportunities</a>
      
      <h1 className="text-4xl font-black mb-2">{opportunity.title}</h1>
      <p className="text-zinc-400 mb-8">{opportunity.sector} • {opportunity.opportunityType} • Stage: {opportunity.projectStage}</p>

      <div className="prose prose-zinc prose-invert mb-8">
        <p className="text-xl text-zinc-300">{opportunity.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold text-white">Authority:</h3>
          <p>{opportunity.authority}, {opportunity.organisation}</p>
          <h3 className="font-semibold text-white mt-4">Participation Type:</h3>
          <p>{opportunity.participationType}</p>
        </div>
      </div>

      <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
        <h3 className="font-bold mb-4">Official Source & Verification</h3>
        <p className="text-sm text-zinc-400 mb-2">Authority: {opportunity.sourceAuthority}</p>
        <p className="text-sm text-zinc-400 mb-2">Verification: {opportunity.verificationStatus}</p>
        <p className="text-sm text-zinc-400 mb-4">Last Verified: {opportunity.lastVerifiedAt}</p>
        <a href={opportunity.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:underline">
            Visit Official Source &rarr;
        </a>
      </div>

      <div className="mt-8 p-4 bg-zinc-800/50 rounded text-xs text-zinc-500">
        <p>SarkarSaathi.org is an independent informational platform and is not affiliated with or operated by any government authority. Information provided is for educational purposes based on official sources.</p>
      </div>
    </div>
  );
};
