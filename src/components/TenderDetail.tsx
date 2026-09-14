import React, { useState, useEffect } from 'react';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { TenderRecord } from '../types/tender';
import { SEOHead } from './SEOHead';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';
import { addRecentlyViewed } from '../lib/recentlyViewed';
import { ExternalLink, ShieldCheck, Calendar, Info, Building } from 'lucide-react';

interface TenderDetailProps {
  slug: string;
}

export const TenderDetail: React.FC<TenderDetailProps> = ({ slug }) => {
  const [tender, setTender] = useState<TenderRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTender = async () => {
      setLoading(true);
      const repo = new MockTenderRepository();
      const t = await repo.getBySlug(slug);
      setTender(t);
      if (t) {
        addRecentlyViewed({
          id: t.id,
          type: 'tender',
          title: t.title,
          category: t.tenderCategory,
          slug: t.slug
        });
      }
      setLoading(false);
    };
    fetchTender();
  }, [slug]);

  if (loading) return <div className="text-white p-8 text-center">Loading tender details...</div>;
  if (!tender) return <div className="text-white p-8 text-center">Tender not found.</div>;

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto text-zinc-100">
      <SEOHead activeTender={tender} canonicalUrl={`https://www.sarkarsaathi.org/tenders/${tender.slug}`} />
      <div className="flex justify-between items-center mb-6">
        <a href="/tenders" className="text-[#FF6B00] hover:underline font-bold">&larr; Back to Tenders</a>
        <div className="flex items-center gap-2">
          <ShareButton title={tender.title} />
          <SaveButton item={{ id: tender.id, type: 'tender', title: tender.title, category: tender.tenderCategory, slug: tender.slug, savedAt: '' }} />
        </div>
      </div>
      
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{tender.title}</h1>
        <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#FF6B00]/20 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-bold uppercase">{tender.tenderCategory}</span>
            <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-bold uppercase">{tender.status}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            {[
                {label: 'Tender ID', value: tender.tenderId},
                {label: 'Reference No.', value: tender.referenceNumber},
                {label: 'Organisation', value: tender.organisation},
                {label: 'Department', value: tender.department},
                {label: 'State/Location', value: `${tender.state} / ${tender.district || tender.city || 'N/A'}`},
                {label: 'Procurement Cat.', value: tender.procurementCategory},
                {label: 'Est. Value', value: tender.estimatedValue || 'Not specified'},
                {label: 'Tender Fee', value: tender.tenderFee || 'Not specified'},
                {label: 'EMD Amount', value: tender.emdAmount || 'Not specified'},
            ].map(item => (
                <div key={item.label} className="border-b border-zinc-800 pb-2 flex justify-between">
                    <span className="text-zinc-500 font-medium">{item.label}</span>
                    <span className="text-zinc-200 font-semibold">{item.value}</span>
                </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
              {label: 'Publish Date', value: tender.publishDate, icon: Calendar},
              {label: 'Submission Deadline', value: tender.submissionDeadline, icon: Calendar},
              {label: 'Bid Opening Date', value: tender.bidOpeningDate || 'N/A', icon: Calendar},
          ].map(d => (
              <div key={d.label} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
                  <d.icon className="text-[#FF6B00]" />
                  <div>
                      <div className="text-xs text-zinc-500">{d.label}</div>
                      <div className="font-bold">{d.value}</div>
                  </div>
              </div>
          ))}
      </div>

      {/* SarkarSaathi Editorial Guide: How to Read & Respond to This Tender */}
      <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-zinc-300">
        <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
          <Info className="text-[#FF6B00]" size={22} />
          How to Read & Respond to This Tender (SarkarSaathi Guide)
        </h3>
        
        <p className="text-sm leading-relaxed text-zinc-300 mb-6">
          This procurement notice is issued by <strong className="text-white">{tender.organisation}</strong> ({tender.department}) under procurement category <strong className="text-white">{tender.procurementCategory || tender.tenderCategory}</strong>. Below is an overview of how prospective bidders should navigate this listing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800/80">
            <div className="flex items-center gap-2 font-semibold text-white mb-2">
              <Building size={16} className="text-[#FF6B00]" />
              <span>Critical Parameter Assessment</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Verify Tender ID (<strong className="text-zinc-200">{tender.tenderId}</strong>) and Official Reference (<strong className="text-zinc-200">{tender.referenceNumber}</strong>). Note financial prerequisites including Earnest Money Deposit (EMD: {tender.emdAmount || 'N/A'}) and Tender Document Fee ({tender.tenderFee || 'N/A'}).
            </p>
          </div>

          <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800/80">
            <div className="flex items-center gap-2 font-semibold text-white mb-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Corrigenda & Official Submission</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Tender timelines are strict. Any corrigenda, technical clarifications, or date extensions are published directly on the primary portal (<strong className="text-zinc-200">{tender.sourcePortal}</strong>). All formal bids and digital certificates (DSC) must be submitted through the official government e-procurement portal before {tender.submissionDeadline}.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><ShieldCheck className="text-[#FF6B00]" /> Official Source & Verification</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
            <div className="p-4 bg-[#0B0F17] rounded-xl border border-zinc-800">
                <div className="text-zinc-500 text-xs">Source Portal</div>
                <div className="font-bold">{tender.sourcePortal} ({tender.sourceName})</div>
            </div>
            <div className="p-4 bg-[#0B0F17] rounded-xl border border-zinc-800">
                <div className="text-zinc-500 text-xs">Last Verified</div>
                <div className="font-bold">{tender.lastVerifiedAt}</div>
            </div>
        </div>

        <p className="text-sm text-zinc-400 mb-6">SarkarSaathi is an independent information platform. Always verify the tender details, corrigenda, eligibility requirements, and deadlines on the official procurement portal before acting. SarkarSaathi does not accept bids.</p>
        
        <a href={tender.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-[#FF6B00] px-8 py-4 rounded-xl font-bold hover:bg-[#e66000] transition">
            View Official Tender <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};
