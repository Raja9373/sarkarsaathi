import React, { useState, useEffect } from 'react';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { TenderRecord } from '../types/tender';
import { SEOHead } from './SEOHead';
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
      setLoading(false);
    };
    fetchTender();
  }, [slug]);

  if (loading) return <div className="text-white p-8 text-center">Loading tender details...</div>;
  if (!tender) return <div className="text-white p-8 text-center">Tender not found.</div>;

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto text-zinc-100">
      <SEOHead activeTender={tender} canonicalUrl={`https://www.sarkarsaathi.org/tenders/${tender.slug}`} />
      <a href="/tenders" className="text-[#FF6B00] mb-6 inline-block hover:underline font-bold">&larr; Back to Tenders</a>
      
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
