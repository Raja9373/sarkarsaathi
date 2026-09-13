import { Investment } from '../types/investment';
import { OpportunityRecord, OpportunityStatus } from '../types/opportunity';
import { TenderRecord, TenderStatus } from '../types/tender';

export class LifecycleEvaluator {
  static evalInvestmentStatus(investment: Investment, isDiscontinued: boolean): string {
    if (isDiscontinued) return 'DISCONTINUED';
    return 'ACTIVE';
  }

  static evalOpportunityStatus(opp: OpportunityRecord, deadline: string, isClosed: boolean, isCancelled: boolean, isExtended: boolean): OpportunityStatus {
    if (isCancelled) return 'CANCELLED';
    if (isClosed) return 'CLOSED';
    
    const now = new Date().toISOString();
    if (deadline < now) return 'CLOSED';
    
    return 'ACTIVE';
  }

  static evalTenderStatus(tender: TenderRecord, deadline: string, isClosed: boolean, isCancelled: boolean, isExtended: boolean): TenderStatus {
    if (isCancelled) return 'CANCELLED';
    if (isClosed) return 'CLOSED';
    
    const now = new Date().toISOString();
    if (deadline < now) return 'CLOSED';
    
    return 'ACTIVE';
  }
}
