import React from 'react';
import { ComparableItem } from './ComparisonsHub';

interface ComparisonEngineProps {
  items: ComparableItem[];
  onRemove: (id: string) => void;
}

export const ComparisonEngine: React.FC<ComparisonEngineProps> = ({ items, onRemove }) => {
  const attributes = [
    { label: 'Category', getValue: (i: ComparableItem) => i.category },
    { label: 'Authority / Ministry', getValue: (i: ComparableItem) => i.authority },
    { label: 'Status', getValue: (i: ComparableItem) => i.status },
    { label: 'Return / Benefit', getValue: (i: ComparableItem) => i.returnOrBenefit },
    { label: 'Tenure', getValue: (i: ComparableItem) => i.tenure },
    { label: 'Lock-in Period', getValue: (i: ComparableItem) => i.lockIn },
    { label: 'Minimum Investment', getValue: (i: ComparableItem) => i.minInvestment },
    { label: 'Eligibility', getValue: (i: ComparableItem) => i.eligibility },
    { label: 'Tax Benefits / Subsidy', getValue: (i: ComparableItem) => i.taxOrSubsidy },
    { label: 'Official Source', getValue: (i: ComparableItem) => i.officialSource },
    { label: 'Verification Status', getValue: (i: ComparableItem) => `${i.verificationStatus} (${i.lastVerified})` },
    { label: 'Official URL', getValue: (i: ComparableItem) => (
      <a href={i.officialUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:underline font-semibold text-xs inline-flex items-center gap-1">
        Visit Official Portal ↗
      </a>
    )}
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-950">
            <th className="px-6 py-4 font-bold text-zinc-400 w-48 uppercase text-xs tracking-wider">Attribute</th>
            {items.map(item => (
              <th key={item.id} className="px-6 py-4 text-white min-w-[260px]">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider block mb-1">
                      {item.type} • {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">{item.name}</h3>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-zinc-500 hover:text-red-400 p-1 transition"
                    title="Remove from comparison"
                  >
                    ✕
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {attributes.map((attr, idx) => (
            <tr key={idx} className="hover:bg-zinc-800/40 transition">
              <td className="px-6 py-4 font-semibold text-zinc-400 bg-zinc-950/50 text-xs uppercase tracking-wider">{attr.label}</td>
              {items.map(item => (
                <td key={item.id} className="px-6 py-4 text-zinc-300">
                  {attr.getValue(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
