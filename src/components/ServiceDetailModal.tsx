import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Download, 
  HelpCircle, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  Sparkles,
  Layers,
  Code
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectRelated: (relatedId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectRelated
}) => {
  if (!service) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'online' | 'offline' | 'docs' | 'faqs' | 'schema'>('overview');

  // Generate JSON-LD Schema Markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to apply for ${service.title}`,
    "description": service.overview,
    "step": service.onlineProcess.map((stepText, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "text": stepText
    }))
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto custom-scrollbar">
      <div className="bg-[#0F1522] border border-zinc-700 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto text-zinc-100 flex flex-col max-h-[90vh]">
        {/* Modal Top Header Bar */}
        <div className="bg-[#141C2D] border-b border-zinc-800 p-4 sm:p-6 flex items-start justify-between gap-4 sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-[#FF6B00] border border-zinc-700">
                {service.category} • {service.department}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                Official .gov.in Portal
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">{service.title}</h2>
            <p className="text-xs text-[#FF6B00] font-semibold">{service.hindiTitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex-shrink-0"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-zinc-800 px-4 sm:px-6 bg-[#111726] text-xs font-bold gap-1 overflow-x-auto custom-scrollbar">
          {[
            { id: 'overview', label: 'Overview & Eligibility' },
            { id: 'online', label: 'Online Step-by-Step' },
            { id: 'offline', label: 'Offline Process' },
            { id: 'docs', label: 'Required Documents' },
            { id: 'faqs', label: 'FAQs & Notes' },
            { id: 'schema', label: 'SEO Schema Markup' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-3.5 border-b-2 transition whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'border-[#FF6B00] text-[#FF6B00] font-black' 
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 custom-scrollbar text-xs sm:text-sm">
          {/* Quick Metrics Header Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-bold block uppercase">Official Fee</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400">{service.fees}</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-bold block uppercase">Processing Time</span>
              <span className="text-xs sm:text-sm font-bold text-amber-400">{service.processingTime}</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-bold block uppercase">Last Updated</span>
              <span className="text-xs sm:text-sm font-bold text-zinc-300">{service.lastUpdated}</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-bold block uppercase">Verified Source</span>
              <span className="text-xs sm:text-sm font-bold text-cyan-400">{service.officialWebsiteName}</span>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Service Overview</h3>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                  {service.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Eligibility Criteria</h3>
                <div className="space-y-2">
                  {service.eligibility.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloadable Forms if available */}
              {service.downloadForms && service.downloadForms.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Official Downloadable PDF Forms</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.downloadForms.map((form, idx) => (
                      <a
                        key={idx}
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#FF6B00] text-zinc-200 text-xs font-bold transition flex items-center gap-2"
                      >
                        <Download className="w-3.5 h-3.5 text-[#FF6B00]" />
                        <span>{form.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'online' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Online Step-by-Step Application Process</h3>
              <div className="space-y-3">
                {service.onlineProcess.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FF6B00] text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'offline' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Offline Application Process</h3>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                {service.offlineProcess.map((step, idx) => (
                  <p key={idx} className="text-xs text-zinc-300 leading-relaxed">• {step}</p>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Mandatory Document Proofs</h3>
              <div className="space-y-2">
                {service.requiredDocs.map((doc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
                      <p className="font-bold text-white">Q: {faq.question}</p>
                      <p className="text-zinc-300 mt-1 leading-relaxed">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes & Pitfalls */}
              {service.commonMistakes && service.commonMistakes.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Common Mistakes To Avoid
                  </h3>
                  <div className="space-y-1.5 bg-rose-950/20 border border-rose-900/40 p-3 rounded-xl text-xs text-rose-300">
                    {service.commonMistakes.map((err, idx) => (
                      <p key={idx}>• {err}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Automated Google Rich Snippet JSON-LD Schema</h3>
              <div className="bg-[#090D14] border border-zinc-800 rounded-xl p-4 font-mono text-[11px] text-emerald-400 leading-relaxed overflow-x-auto">
                <pre>{JSON.stringify(faqSchema, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Action Bar */}
        <div className="bg-[#141C2D] border-t border-zinc-800 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-zinc-400">
            Source: <strong className="text-zinc-200">{service.department}</strong>
          </div>

          <a
            href={service.officialGovUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2"
          >
            <span>Proceed to Official .gov.in Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
