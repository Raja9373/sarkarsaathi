import React from 'react';
import { ShieldCheck, Info, AlertCircle, Database } from 'lucide-react';
import { ContentCompletenessLevel } from '../../types';

interface CompletenessBadgeProps {
  level?: ContentCompletenessLevel;
  type: string;
}

export const CompletenessBadge: React.FC<CompletenessBadgeProps> = ({ level = 'MOSTLY_COMPLETE', type }) => {
  switch (level) {
    case 'COMPLETE':
      return (
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-800 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Gold-Standard Verified Record</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] uppercase font-bold text-emerald-700">Complete</span>
        </div>
      );
    case 'MOSTLY_COMPLETE':
      return (
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-800 shadow-xs">
          <Database className="w-3.5 h-3.5 text-blue-600" />
          <span>Verified Government {type}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-[10px] uppercase font-bold text-blue-700">Mostly Complete</span>
        </div>
      );
    case 'PARTIAL':
      return (
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-800 shadow-xs">
          <Info className="w-3.5 h-3.5 text-amber-600" />
          <span>Core Parameters Verified</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-[10px] uppercase font-bold text-amber-700">Partial</span>
        </div>
      );
    case 'SOURCE_DATA_LIMITED':
    default:
      return (
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
          <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
          <span>Official Summary Available</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span className="text-[10px] uppercase font-bold text-slate-600">Source Limited</span>
        </div>
      );
  }
};
