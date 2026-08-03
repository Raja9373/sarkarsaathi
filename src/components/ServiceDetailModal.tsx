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
  Code,
  Phone,
  Info
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SocialShareBar } from './SocialShareBar';

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

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-hidden animate-fadeIn">
      <div className="bg-[#0F1522] border border-zinc-700 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden text-zinc-100 flex flex-col h-full max-h-[92vh] my-auto">
        {/* Unified Sticky Modal Top Header Unit */}
        <div className="bg-[#141C2D] border-b border-zinc-800 shrink-0 z-20">
          {/* Top Title & Close Bar */}
          <div className="p-4 sm:p-6 flex items-start justify-between gap-4 border-b border-zinc-800/60">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-zinc-800 text-[#FF6B00] border border-zinc-700">
                  {service.category} • {service.department}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Official .gov.in Portal
                </span>
                {service.isNew && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF6B00] text-white">
                    NEW SCHEME
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">{service.title}</h2>
              <p className="text-xs text-[#FF6B00] font-semibold mt-0.5">{service.hindiTitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition shrink-0"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center px-4 sm:px-6 bg-[#111726] text-xs font-bold gap-1 sm:gap-2 overflow-x-auto custom-scrollbar shrink-0 pt-2 pb-0">
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
                className={`py-2.5 px-3.5 border-b-2 transition whitespace-nowrap shrink-0 text-xs sm:text-sm ${
                  activeTab === tab.id 
                    ? 'border-[#FF6B00] text-[#FF6B00] font-black bg-[#182136] rounded-t-lg' 
                    : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-t-lg'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 custom-scrollbar text-xs sm:text-sm flex-1 min-h-0">
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

          {/* Income & Age Criteria Highlights */}
          {(service.incomeCriteria || service.ageCriteria || service.helpline) && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.incomeCriteria && (
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-200">
                  <span className="text-[10px] font-bold text-amber-400 uppercase block">Income Criteria</span>
                  <span className="font-semibold text-xs">{service.incomeCriteria}</span>
                </div>
              )}
              {service.ageCriteria && (
                <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-800/40 text-sky-200">
                  <span className="text-[10px] font-bold text-sky-400 uppercase block">Age Bracket</span>
                  <span className="font-semibold text-xs">{service.ageCriteria}</span>
                </div>
              )}
              {service.helpline && (
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-200 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase block">Helpline</span>
                    <span className="font-mono text-xs">{service.helpline}</span>
                  </div>
                </div>
              )}
            </div>
          )}

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

              {/* Official Notification & Forms */}
              {((service.downloadForms && service.downloadForms.length > 0) || service.officialNotificationUrl) && (
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Official Guidelines & PDF Downloads</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.officialNotificationUrl && (
                      <a
                        href={service.officialNotificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 hover:border-emerald-500 text-emerald-300 text-xs font-bold transition flex items-center gap-2"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Official Scheme Notification PDF</span>
                      </a>
                    )}
                    {service.downloadForms?.map((form, idx) => (
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

              {/* Social Share Bar */}
              <SocialShareBar title={service.title} summary={service.shortDesc} />
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
            Official Source: <strong className="text-zinc-200">{service.department}</strong>
          </div>

          <a
            href={service.officialGovUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2"
          >
            <span>Apply / Access Official .gov.in Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

