import React from 'react';
import { X, PhoneCall, ShieldAlert, HeartPulse, Flame, ExternalLink } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const emergencyNumbers = [
    { name: 'National Emergency Number', num: '112', desc: 'Single Unified Emergency Response Support System (ERSS)', icon: <ShieldAlert className="w-5 h-5 text-red-400" /> },
    { name: 'Delhi Police Control Room', num: '100 / 112', desc: '24x7 Delhi Police Emergency Control Room', icon: <ShieldAlert className="w-5 h-5 text-blue-400" /> },
    { name: 'Fire Control Room Delhi', num: '101', desc: 'Delhi Fire Services Emergency Helpline', icon: <Flame className="w-5 h-5 text-orange-400" /> },
    { name: 'Ambulance & Medical Emergency', num: '102 / 108', desc: 'CATS Medical Emergency Ambulance Delhi', icon: <HeartPulse className="w-5 h-5 text-emerald-400" /> },
    { name: 'Women Helpline Delhi', num: '1091 / 181', desc: '24x7 Women in Distress Helpline', icon: <PhoneCall className="w-5 h-5 text-pink-400" /> },
    { name: 'Senior Citizen Helpline', num: '14567', desc: 'Elder Line Helpline for Senior Citizens', icon: <PhoneCall className="w-5 h-5 text-amber-400" /> },
    { name: 'Delhi Jal Board Emergency Water Tanker', num: '1916', desc: 'DJB 24x7 Water Supply Leakage & Tanker', icon: <PhoneCall className="w-5 h-5 text-cyan-400" /> },
    { name: 'MCD Civic Complaints Helpline', num: '155305', desc: 'MCD Sanitation, Garbage & Drainage Helpline', icon: <PhoneCall className="w-5 h-5 text-yellow-400" /> }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121824] border border-red-800/80 w-full max-w-2xl rounded-2xl p-6 space-y-6 shadow-2xl text-zinc-100 my-auto">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-red-950 border border-red-800 text-red-400 animate-pulse">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Delhi & National Emergency Helplines</h2>
              <p className="text-xs text-red-400 font-semibold">24x7 Direct Toll-Free Government Numbers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {emergencyNumbers.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 transition flex items-start gap-3">
              <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-black text-red-400 font-mono block">{item.num}</span>
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-[11px] text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold"
          >
            Close Emergency Panel
          </button>
        </div>
      </div>
    </div>
  );
};
