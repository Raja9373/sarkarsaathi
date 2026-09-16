import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2, Info } from 'lucide-react';

interface SourceTransparencyCardProps {
  authority: string;
  sourceAuthority: string;
  sourceUrl: string;
  verificationStatus: string;
  lastVerifiedDate?: string;
  secondarySources?: Array<{ name: string; url: string; authority: string }>;
}

export const SourceTransparencyCard: React.FC<SourceTransparencyCardProps> = ({
  authority,
  sourceAuthority,
  sourceUrl,
  verificationStatus,
  lastVerifiedDate,
  secondarySources
}) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <h3 className="text-sm font-bold text-slate-900">Official Source Transparency & Provenance</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>{verificationStatus || 'VERIFIED'}</span>
          </span>
          {lastVerifiedDate && (
            <span className="text-xs text-slate-500 font-mono">
              Verified: {lastVerifiedDate}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1">
          <span className="font-semibold text-slate-500 block uppercase tracking-wider text-[10px]">
            Administering Government Authority
          </span>
          <p className="font-bold text-slate-800 text-sm">{authority}</p>
        </div>

        <div className="space-y-1">
          <span className="font-semibold text-slate-500 block uppercase tracking-wider text-[10px]">
            Primary Statutory Source
          </span>
          <p className="font-bold text-slate-800 text-sm">{sourceAuthority || authority}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs text-slate-600 max-w-xl">
          <span className="font-semibold text-slate-700">Authoritative URL: </span>
          <span className="font-mono text-slate-500 truncate block sm:inline">{sourceUrl}</span>
        </div>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl text-xs font-bold transition shadow-xs shrink-0"
        >
          <span>Open Official Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {secondarySources && secondarySources.length > 0 && (
        <div className="pt-3 border-t border-slate-200 space-y-2">
          <span className="font-semibold text-slate-700 text-xs block">Additional Official Gazette & Reference Links:</span>
          <div className="flex flex-wrap gap-2">
            {secondarySources.map((sec, idx) => (
              <a
                key={idx}
                href={sec.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition"
              >
                <span>{sec.name} ({sec.authority})</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 flex items-start space-x-2">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>Statutory Platform Notice: </strong>
          SarkarSaathi is an independent citizen information and decision-support portal. Official deposits, statutory claims, tenders, and applications must be processed through official ministry/department portals or authorized banking partners.
        </div>
      </div>
    </div>
  );
};
