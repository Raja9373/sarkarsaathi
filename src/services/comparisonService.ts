import { Investment } from '../types/investment';
import { Comparison } from '../types/comparison';

export const mapInvestmentsToComparison = (inv1: Investment, inv2: Investment): Comparison => {
  return {
    id: `${inv1.id}-vs-${inv2.id}`,
    name: `${inv1.name} vs ${inv2.name}`,
    investment1Id: inv1.id,
    investment2Id: inv2.id,
    attributes: [
      { label: 'Interest/Return', value1: inv1.interestRate || 'Not specified', value2: inv2.interestRate || 'Not specified' },
      { label: 'Tenure', value1: inv1.tenure || 'Not specified', value2: inv2.tenure || 'Not specified' },
      { label: 'Lock-in', value1: inv1.lockIn || 'Not specified', value2: inv2.lockIn || 'Not specified' },
      { label: 'Taxation', value1: inv1.taxation || 'Not specified', value2: inv2.taxation || 'Not specified' },
      { label: 'Tax Benefits', value1: inv1.taxBenefits || 'Not specified', value2: inv2.taxBenefits || 'Not specified' },
      { label: 'Eligibility', value1: inv1.eligibility || 'Not specified', value2: inv2.eligibility || 'Not specified' },
      { label: 'Risk', value1: inv1.riskInformation || 'Not specified', value2: inv2.riskInformation || 'Not specified' },
      { label: 'Maturity', value1: inv1.maturityRules || 'Not specified', value2: inv2.maturityRules || 'Not specified' },
      { label: 'Minimum Investment', value1: inv1.minimumInvestment || 'Not specified', value2: inv2.minimumInvestment || 'Not specified' },
      { label: 'Maximum Investment', value1: inv1.maximumInvestment || 'Not specified', value2: inv2.maximumInvestment || 'Not specified' },
      { label: 'Withdrawal/Liquidity', value1: inv1.withdrawalRules || 'Not specified', value2: inv2.withdrawalRules || 'Not specified' },
    ]
  };
};
