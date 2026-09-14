import { Opportunity, Tender } from '../types';
import { StagedOpportunity, StagedTender, VerificationState } from './types';

export class StagingQueue {
  private stagedOpportunities: StagedOpportunity[] = [];
  private stagedTenders: StagedTender[] = [];

  addOpportunity(record: StagedOpportunity) {
    this.stagedOpportunities.push(record);
  }

  addTender(record: StagedTender) {
    this.stagedTenders.push(record);
  }

  getStagedOpportunities(status?: VerificationState): StagedOpportunity[] {
    if (!status) return this.stagedOpportunities;
    return this.stagedOpportunities.filter(item => item.verificationStatus === status);
  }

  getStagedTenders(status?: VerificationState): StagedTender[] {
    if (!status) return this.stagedTenders;
    return this.stagedTenders.filter(item => item.verificationStatus === status);
  }

  removeStagedOpportunity(id: string): boolean {
    const idx = this.stagedOpportunities.findIndex(i => i.id === id);
    if (idx !== -1) {
      this.stagedOpportunities.splice(idx, 1);
      return true;
    }
    return false;
  }

  removeStagedTender(id: string): boolean {
    const idx = this.stagedTenders.findIndex(i => i.id === id);
    if (idx !== -1) {
      this.stagedTenders.splice(idx, 1);
      return true;
    }
    return false;
  }

  clear() {
    this.stagedOpportunities = [];
    this.stagedTenders = [];
  }
}

export const globalStagingQueue = new StagingQueue();
