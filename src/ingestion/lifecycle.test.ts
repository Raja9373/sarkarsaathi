import { LifecycleEvaluator } from './lifecycleEvaluator';
import { OpportunityRecord } from '../types/opportunity';
import { TenderRecord } from '../types/tender';
import assert from 'assert';

async function runTests() {
  const future = new Date(Date.now() + 86400000).toISOString();
  const past = new Date(Date.now() - 86400000).toISOString();

  console.log('Running Lifecycle Tests...');

  assert.strictEqual(LifecycleEvaluator.evalTenderStatus({} as TenderRecord, future, false, false, false), 'ACTIVE', 'A Failed');
  assert.strictEqual(LifecycleEvaluator.evalTenderStatus({} as TenderRecord, past, false, false, false), 'CLOSED', 'B Failed');
  assert.strictEqual(LifecycleEvaluator.evalTenderStatus({} as TenderRecord, future, false, false, true), 'ACTIVE', 'C Failed');
  assert.strictEqual(LifecycleEvaluator.evalTenderStatus({} as TenderRecord, future, false, true, false), 'CANCELLED', 'D Failed');
  assert.strictEqual(LifecycleEvaluator.evalOpportunityStatus({} as OpportunityRecord, future, false, false, false), 'ACTIVE', 'E Failed');
  assert.strictEqual(LifecycleEvaluator.evalOpportunityStatus({} as OpportunityRecord, past, false, false, false), 'CLOSED', 'F Failed');
  assert.strictEqual(LifecycleEvaluator.evalOpportunityStatus({} as OpportunityRecord, future, false, false, true), 'ACTIVE', 'G Failed');
  assert.strictEqual(LifecycleEvaluator.evalInvestmentStatus({} as any, false), 'ACTIVE', 'H Failed');
  assert.strictEqual(LifecycleEvaluator.evalInvestmentStatus({} as any, true), 'DISCONTINUED', 'I Failed');
  
  console.log('All Lifecycle Tests Passed!');
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
