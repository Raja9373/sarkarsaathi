import React from 'react';
import { OfficialSourceRegistry } from '../infrastructure/sources/OfficialSourceRegistry';

export const OfficialSourcesHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-black">Official Data Sources</h1>
      <p className="text-zinc-400">SarkarSaathi aggregates information from authoritative government sources. We do not maintain live databases and information should always be verified on the official portal before making decisions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OfficialSourceRegistry.map(source => (
          <div key={source.id} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-2">
            <h3 className="text-xl font-bold">{source.name}</h3>
            <p className="text-sm text-zinc-500">{source.authority}</p>
            <p className="text-sm text-zinc-400">{source.description}</p>
            <p className="text-xs text-zinc-600 uppercase tracking-wider">{source.sourceCategory}</p>
            <a href={source.officialUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] font-bold block pt-2">
              Visit Official Portal →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
