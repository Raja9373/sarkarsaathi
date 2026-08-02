import React, { useState } from 'react';
import { 
  Baby, 
  GraduationCap, 
  Heart, 
  Home, 
  Car, 
  Briefcase, 
  FileText, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  Plane,
  Building,
  UserX,
  UserCheck,
  ShieldAlert
} from 'lucide-react';
import { LIFE_EVENTS_LIST } from '../data/lifeEventsData';
import { LifeEvent } from '../types';

export const LifeEventsSection: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>(LIFE_EVENTS_LIST[0].id);

  const activeEvent = LIFE_EVENTS_LIST.find(e => e.id === selectedEventId) || LIFE_EVENTS_LIST[0];

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby': return <Baby className="w-5 h-5 text-pink-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-red-400" />;
      case 'Home': return <Home className="w-5 h-5 text-cyan-400" />;
      case 'Car': return <Car className="w-5 h-5 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#FF6B00]" />;
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      {/* Section Header */}
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Citizen Life Assistant
        </div>
        <h2 className="text-3xl font-black text-white">Life Events Roadmap (जीवन चक्र सेवाएं)</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Select what is happening in your life right now. SarkarSaathi automatically compiles all required government services, documents, fees, timeline, and official links for Delhi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: 19 Life Events Selector Cards */}
        <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {LIFE_EVENTS_LIST.map((event) => {
            const isSelected = event.id === selectedEventId;
            return (
              <button
                key={event.id}
                onClick={() => setSelectedEventId(event.id)}
                className={`w-full p-3.5 rounded-xl text-left border transition flex items-center justify-between gap-3 ${
                  isSelected 
                    ? 'bg-[#182235] border-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/10' 
                    : 'bg-[#121824] border-zinc-800 hover:bg-[#161F30] text-zinc-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${isSelected ? 'bg-[#FF6B00]/20 border-[#FF6B00]/40' : 'bg-zinc-900 border-zinc-800'}`}>
                    {getEventIcon(event.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{event.title}</h3>
                    <p className="text-xs text-zinc-400">{event.hindiTitle}</p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 transition ${isSelected ? 'text-[#FF6B00] translate-x-1' : 'text-zinc-600 opacity-0 group-hover:opacity-100'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Event Complete Action Plan */}
        <div className="lg:col-span-7 bg-[#121824] border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-2xl">
          {/* Header of selected event */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FF6B00]">
                  {getEventIcon(activeEvent.iconName)}
                </span>
                <div>
                  <h3 className="text-xl font-black text-white">{activeEvent.title}</h3>
                  <p className="text-xs text-[#FF6B00] font-semibold">{activeEvent.hindiTitle}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                {activeEvent.description}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-right">
              <span className="text-[10px] text-zinc-400 uppercase font-bold block">Estimated Fees</span>
              <span className="text-sm font-extrabold text-emerald-400">{activeEvent.estimatedFees}</span>
            </div>
          </div>

          {/* Timeline Badge */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-300 text-xs font-medium">
            <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Recommended Execution Window: <strong>{activeEvent.timeline}</strong></span>
          </div>

          {/* Required Government Services */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              1. Required Government Services (आवश्यक सेवाएं)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeEvent.requiredServices.map((srv, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              2. Required Document Proofs (आवश्यक दस्तावेज)
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              {activeEvent.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#FF6B00] font-bold">•</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklist */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              3. Citizen Step-by-Step Action Checklist
            </h4>
            <div className="space-y-2">
              {activeEvent.checklist.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official .gov.in Direct Links */}
          <div className="pt-2 border-t border-zinc-800">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Official Government Direct Portals
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeEvent.officialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900 text-emerald-300 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
