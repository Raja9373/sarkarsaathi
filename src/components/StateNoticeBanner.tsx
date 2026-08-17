import React from 'react';
import { MapPin, Sparkles, RefreshCw, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { StateId } from '../types';

interface StateNoticeBannerProps {
  currentStateId: StateId;
  onChangeStateClick: () => void;
  onExploreSchemesClick?: () => void;
}

export const StateNoticeBanner: React.FC<StateNoticeBannerProps> = ({
  currentStateId,
  onChangeStateClick,
  onExploreSchemesClick
}) => {
  const stateInfo = getStateInfo(currentStateId);

  // If Delhi or National, show a subtle active indicator or return null if standard
  if (currentStateId === 'delhi') {
    return null; // Delhi has full dedicated dataset
  }

  const isNational = currentStateId === 'national';

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-2 animate-fadeIn">
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#141C2C] via-[#1A2336] to-[#121824] border border-amber-500/40 shadow-xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-full bg-[#FF6B00]/5 blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> State Selected: {stateInfo.name} ({stateInfo.hindiName})
                </span>
                
                {isNational ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                    All-India Services Active
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700/60 flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin" /> Coming Soon - Data Updating (डेटा अपडेट जारी है)
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {isNational ? (
                  <>Showing all Central Government Schemes, Pan-India Portals, UIDAI, Income Tax, Banking, and Calculators.</>
                ) : (
                  <>
                    <strong className="text-white">{stateInfo.name}</strong> is active. Showing all Central Government Services & Welfare Schemes valid across {stateInfo.name}. State-specific local municipal portal integration is currently updating.
                  </>
                )}
              </p>

              {stateInfo.popularCities && stateInfo.popularCities.length > 0 && !isNational && (
                <div className="text-[11px] text-zinc-400 flex flex-wrap items-center gap-1 pt-0.5">
                  <span className="text-zinc-500">Major Cities Covered:</span>
                  <span className="text-zinc-300 font-medium">
                    {stateInfo.popularCities.join(', ')}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-center shrink-0">
            <button
              onClick={onChangeStateClick}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 transition flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Change State / City</span>
            </button>

            {onExploreSchemesClick && (
              <button
                onClick={onExploreSchemesClick}
                className="px-3 py-1.5 rounded-xl bg-[#FF6B00] hover:bg-[#E65100] text-white text-xs font-bold transition flex items-center gap-1 shadow"
              >
                <span>View Central Schemes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
