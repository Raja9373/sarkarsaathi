import React from 'react';
import { OfficialSourceRegistry } from '../infrastructure/sources/OfficialSourceRegistry';

export const OfficialSourcesHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-black">Official Data Sources</h1>
      <p className="text-zinc-400">SarkarSaathi aggregates information from authoritative government sources. We do not maintain live databases and information should always be verified on the official portal before making decisions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OfficialSourceRegistry.map(source => (
          <div key={source.id} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-2">{source.name}</h3>
            <p className="text-sm text-zinc-500 mb-4">{source.authority}</p>
            <a href={source.officialUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] font-bold">
              Visit Official Portal →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
