import React, { useState, useEffect } from 'react';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { OpportunityRecord } from '../types/opportunity';
import { SEOHead } from './SEOHead';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';
import { addRecentlyViewed } from '../lib/recentlyViewed';
import { Briefcase, ShieldCheck, Info, CheckCircle2, Building, Layers, ExternalLink } from 'lucide-react';

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
      if (o) {
        addRecentlyViewed({
          id: o.id,
          type: 'opportunity',
          title: o.title,
          category: o.sector,
          slug: o.slug
        });
      }
      setLoading(false);
    };
    fetchOpportunity();
  }, [slug]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!opportunity) return <div className="text-white p-8">Opportunity not found.</div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto text-zinc-100">
      <SEOHead activeOpportunity={opportunity} />
      <div className="flex justify-between items-center mb-4">
        <a href="/opportunities" className="text-[#FF6B00] hover:underline">&larr; Back to Opportunities</a>
        <div className="flex items-center gap-2">
          <ShareButton title={opportunity.title} />
          <SaveButton item={{ id: opportunity.id, type: 'opportunity', title: opportunity.title, category: opportunity.sector, slug: opportunity.slug, savedAt: '' }} />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-black mb-2">{opportunity.title}</h1>
      <div className="flex flex-wrap gap-2 text-sm text-zinc-400 mb-6">
        <span className="bg-zinc-800 px-3 py-1 rounded text-zinc-200">{opportunity.sector}</span>
        <span className="bg-zinc-800 px-3 py-1 rounded text-zinc-200">{opportunity.opportunityType}</span>
        <span className="bg-[#FF6B00]/20 text-[#FF6B00] px-3 py-1 rounded font-medium">Stage: {opportunity.projectStage}</span>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 text-zinc-300">
        <p className="text-lg leading-relaxed text-zinc-200 mb-6">{opportunity.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border-t border-zinc-800 pt-4">
          <div>
            <span className="text-zinc-500 block text-xs uppercase mb-1">Nodal Authority / Organization</span>
            <span className="font-semibold text-white">{opportunity.authority}{opportunity.organisation ? `, ${opportunity.organisation}` : ''}</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-xs uppercase mb-1">Participation Framework</span>
            <span className="font-semibold text-white">{opportunity.participationType}</span>
          </div>
          {opportunity.projectValue && (
            <div>
              <span className="text-zinc-500 block text-xs uppercase mb-1">Estimated Project Value</span>
              <span className="font-semibold text-white">{opportunity.projectValue}</span>
            </div>
          )}
          {opportunity.state && (
            <div>
              <span className="text-zinc-500 block text-xs uppercase mb-1">Geographic Location</span>
              <span className="font-semibold text-white">{opportunity.state}{opportunity.city ? ` (${opportunity.city})` : ''}</span>
            </div>
          )}
        </div>
      </div>

      {/* SarkarSaathi Editorial Guide: How to Evaluate this Opportunity */}
      <div className="mb-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 text-zinc-300">
        <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
          <Briefcase className="text-[#FF6B00]" size={22} />
          <span>How to Evaluate This Opportunity (SarkarSaathi Guide)</span>
        </div>
        
        <p className="text-sm leading-relaxed text-zinc-300 mb-6">
          This project is an institutional infrastructure initiative structured under the <strong className="text-white">{opportunity.sector}</strong> sector. Long-term capital concessions and public-private models require systematic due diligence through statutory channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
              <Layers size={16} className="text-[#FF6B00]" />
              <span>Project Stage & Model Analysis</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Currently recorded at the <strong className="text-zinc-200">{opportunity.projectStage}</strong> phase under a <strong className="text-zinc-200">{opportunity.participationType}</strong> model. Project milestones determine whether the authority is conducting preliminary investor consultation, pre-qualification, or formal RFP concession bidding.
            </p>
          </div>

          <div className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Independent Due Diligence Steps</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Prospective concessionaires and investors must review the Detailed Project Report (DPR), concession terms, environmental impact clearances, and state land allocation status directly through the sponsoring agency (<strong className="text-zinc-200">{opportunity.sourceAuthority}</strong>).
            </p>
          </div>
        </div>
      </div>

      {opportunity.eligibility && (
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Info size={18} className="text-[#FF6B00]" />
            Eligibility & Qualification Criteria
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{opportunity.eligibility}</p>
        </div>
      )}

      {opportunity.applicationProcess && (
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-400" />
            Participation & Submission Pathway
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{opportunity.applicationProcess}</p>
        </div>
      )}

      <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-2xl mb-8">
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="text-[#FF6B00]" size={20} />
          Official Source & Verification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <span className="text-zinc-500 text-xs block">Source Authority</span>
            <span className="font-semibold text-white">{opportunity.sourceAuthority}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs block">Verification Status</span>
            <span className="font-semibold text-white">{opportunity.verificationStatus}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs block">Last Verified</span>
            <span className="font-semibold text-white">{opportunity.lastVerifiedAt}</span>
          </div>
        </div>
        <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
          Official RFP packages, Expression of Interest (EOI) schedules, and detailed technical specifications are governed exclusively by the issuing nodal agency.
        </p>
        <a 
          href={opportunity.officialSourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-white bg-[#FF6B00] px-6 py-3 rounded-xl font-bold hover:bg-[#e66000] transition text-sm"
        >
          Access Official Portal Listing <ExternalLink size={16} />
        </a>
      </div>

      <div className="p-4 bg-zinc-800/50 rounded-xl text-xs text-zinc-400 leading-relaxed">
        <p>SarkarSaathi.org is an independent informational platform and is not affiliated with or operated by any government authority. Information provided is for educational and reference purposes based on official public records.</p>
      </div>
    </div>
  );
};
