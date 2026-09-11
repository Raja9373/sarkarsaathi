import React, { useState, useEffect } from 'react';
import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { ComparisonEngine } from './ComparisonEngine';
import { mapInvestmentsToComparison } from '../services/comparisonService';
import { Comparison } from '../types/comparison';

export const ComparisonsHub: React.FC = () => {
  const [comparison, setComparison] = useState<Comparison | null>(null);

  useEffect(() => {
    const runTest = async () => {
      const repo = new MockInvestmentRepository();
      const investments = await repo.getAll();
      const ppf = investments.find(i => i.id === 'ppf');
      const nps = investments.find(i => i.id === 'nps');
      if (ppf && nps) {
        setComparison(mapInvestmentsToComparison(ppf, nps));
      }
    };
    runTest();
  }, []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black text-white mb-8">Investment Comparisons</h1>
      {comparison ? <ComparisonEngine comparison={comparison} /> : <p className="text-zinc-400">Loading comparison...</p>}
    </div>
  );
};
