
import React from 'react';
import { Comparison } from '../types/comparison';

interface ComparisonEngineProps {
  comparison: Comparison;
}

export const ComparisonEngine: React.FC<ComparisonEngineProps> = ({ comparison }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-zinc-50 border-b">
          <tr>
            <th className="px-6 py-4 font-semibold text-zinc-900">Attribute</th>
            <th className="px-6 py-4 font-semibold text-zinc-900">Option 1</th>
            <th className="px-6 py-4 font-semibold text-zinc-900">Option 2</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {comparison.attributes.map((attr, idx) => (
            <tr key={idx} className="hover:bg-zinc-50">
              <td className="px-6 py-4 font-medium text-zinc-700">{attr.label}</td>
              <td className="px-6 py-4 text-zinc-600">{attr.value1}</td>
              <td className="px-6 py-4 text-zinc-600">{attr.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
