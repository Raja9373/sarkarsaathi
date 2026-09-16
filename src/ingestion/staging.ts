import { Opportunity, Tender } from '../types';
import { StagedOpportunity, StagedTender, VerificationState, ReviewStatus } from './types';

export class StagingQueue {
  private stagedOpportunities: StagedOpportunity[] = [];
  private stagedTenders: StagedTender[] = [];

  addOpportunity(record: StagedOpportunity) {
    if (!record.reviewStatus) {
      record.reviewStatus = record.verificationStatus === 'VERIFIED' ? 'APPROVED' : 'PENDING_REVIEW';
    }
    this.stagedOpportunities.push(record);
  }

  addTender(record: StagedTender) {
    if (!record.reviewStatus) {
      record.reviewStatus = record.verificationStatus === 'VERIFIED' ? 'APPROVED' : 'PENDING_REVIEW';
    }
    this.stagedTenders.push(record);
  }

  getStagedOpportunities(status?: VerificationState | ReviewStatus): StagedOpportunity[] {
    if (!status) return this.stagedOpportunities;
    return this.stagedOpportunities.filter(item => 
      item.reviewStatus === status || item.verificationStatus === status
    );
  }

  getStagedTenders(status?: VerificationState | ReviewStatus): StagedTender[] {
    if (!status) return this.stagedTenders;
    return this.stagedTenders.filter(item => 
      item.reviewStatus === status || item.verificationStatus === status
    );
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

  // Individual Review Status Setters
  setOpportunityReviewStatus(id: string, status: ReviewStatus, rejectionReason?: string): boolean {
    const opp = this.stagedOpportunities.find(i => i.id === id);
    if (opp) {
      opp.reviewStatus = status;
      opp.reviewedAt = new Date().toISOString();
      if (status === 'APPROVED') {
        opp.verificationStatus = 'VERIFIED';
        opp.rejectionReason = undefined;
      } else if (status === 'REJECTED') {
        opp.verificationStatus = 'REJECTED';
        opp.rejectionReason = rejectionReason || 'Rejected by Administrator';
      } else {
        opp.verificationStatus = 'PENDING';
        opp.rejectionReason = undefined;
      }
      return true;
    }
    return false;
  }

  setTenderReviewStatus(id: string, status: ReviewStatus, rejectionReason?: string): boolean {
    const tnd = this.stagedTenders.find(i => i.id === id);
    if (tnd) {
      tnd.reviewStatus = status;
      tnd.reviewedAt = new Date().toISOString();
      if (status === 'APPROVED') {
        tnd.verificationStatus = 'VERIFIED';
        tnd.rejectionReason = undefined;
      } else if (status === 'REJECTED') {
        tnd.verificationStatus = 'REJECTED';
        tnd.rejectionReason = rejectionReason || 'Rejected by Administrator';
      } else {
        tnd.verificationStatus = 'PENDING';
        tnd.rejectionReason = undefined;
      }
      return true;
    }
    return false;
  }

  // Approve single opportunity
  approveOpportunity(id: string): boolean {
    return this.setOpportunityReviewStatus(id, 'APPROVED');
  }

  // Reject single opportunity
  rejectOpportunity(id: string, reason: string): boolean {
    return this.setOpportunityReviewStatus(id, 'REJECTED', reason);
  }

  // Bulk Approve Opportunities
  approveOpportunities(ids: string[]): number {
    const idSet = new Set(ids);
    let count = 0;
    for (const opp of this.stagedOpportunities) {
      if (idSet.has(opp.id)) {
        opp.reviewStatus = 'APPROVED';
        opp.verificationStatus = 'VERIFIED';
        opp.rejectionReason = undefined;
        opp.reviewedAt = new Date().toISOString();
        count++;
      }
    }
    return count;
  }

  // Bulk Reject Opportunities
  rejectOpportunities(ids: string[], reason: string): number {
    const idSet = new Set(ids);
    let count = 0;
    for (const opp of this.stagedOpportunities) {
      if (idSet.has(opp.id)) {
        opp.reviewStatus = 'REJECTED';
        opp.verificationStatus = 'REJECTED';
        opp.rejectionReason = reason;
        opp.reviewedAt = new Date().toISOString();
        count++;
      }
    }
    return count;
  }

  approveAllOpportunities(): number {
    let count = 0;
    for (const opp of this.stagedOpportunities) {
      if (opp.reviewStatus !== 'APPROVED') {
        opp.reviewStatus = 'APPROVED';
        opp.verificationStatus = 'VERIFIED';
        opp.rejectionReason = undefined;
        opp.reviewedAt = new Date().toISOString();
        count++;
      }
    }
    return count;
  }

  // Approve single tender
  approveTender(id: string): boolean {
    return this.setTenderReviewStatus(id, 'APPROVED');
  }

  // Reject single tender
  rejectTender(id: string, reason: string): boolean {
    return this.setTenderReviewStatus(id, 'REJECTED', reason);
  }

  // Bulk Approve Tenders
  approveTenders(ids: string[]): number {
    const idSet = new Set(ids);
    let count = 0;
    for (const tnd of this.stagedTenders) {
      if (idSet.has(tnd.id)) {
        tnd.reviewStatus = 'APPROVED';
        tnd.verificationStatus = 'VERIFIED';
        tnd.rejectionReason = undefined;
        tnd.reviewedAt = new Date().toISOString();
        count++;
      }
    }
    return count;
  }

  // Bulk Reject Tenders
  rejectTenders(ids: string[], reason: string): number {
    const idSet = new Set(ids);
    let count = 0;
    for (const tnd of this.stagedTenders) {
      if (idSet.has(tnd.id)) {
        tnd.reviewStatus = 'REJECTED';
        tnd.verificationStatus = 'REJECTED';
        tnd.rejectionReason = reason;
        tnd.reviewedAt = new Date().toISOString();
        count++;
      }
    }
    return count;
  }

  approveAllTenders(): number {
    let count = 0;
    for (const tnd of this.stagedTenders) {
      if (tnd.reviewStatus !== 'APPROVED') {
        tnd.reviewStatus = 'APPROVED';
        tnd.verificationStatus = 'VERIFIED';
        tnd.rejectionReason = undefined;
        tnd.reviewedAt = new Date().toISOString();
        count++;
      }
    }
    return count;
  }

  publishApprovedOpportunities(repository: { getAll: () => Opportunity[]; add?: (item: Opportunity) => boolean }): { published: number; skipped: number } {
    const existing = repository.getAll();
    const existingIds = new Set(existing.map(i => i.id));
    const existingProjIds = new Set(existing.map(i => i.projectId).filter(Boolean));

    let published = 0;
    let skipped = 0;
    const remaining: StagedOpportunity[] = [];

    for (const staged of this.stagedOpportunities) {
      // Only publish APPROVED records (verificationStatus === 'VERIFIED' and reviewStatus !== 'REJECTED')
      const isApproved = staged.reviewStatus === 'APPROVED' || (staged.verificationStatus === 'VERIFIED' && staged.reviewStatus !== 'REJECTED');
      
      if (isApproved) {
        // Never overwrite existing records or create duplicates
        if (existingIds.has(staged.id) || (staged.projectId && existingProjIds.has(staged.projectId))) {
          skipped++;
          remaining.push(staged);
          continue;
        }

        // Clean Opportunity preserving exact source URLs and provenance
        const cleanOpportunity: Opportunity = {
          id: staged.id,
          projectId: staged.projectId,
          title: staged.title,
          slug: staged.slug,
          description: staged.description,
          authority: staged.authority,
          category: staged.category,
          status: staged.status || 'ACTIVE',
          sourceUrl: staged.sourceUrl,
          sourceAuthority: staged.sourceAuthority,
          verificationStatus: 'VERIFIED',
          deadline: staged.deadline,
          fundingAmount: staged.fundingAmount,
          state: staged.state,
          sector: staged.sector,
          subSector: staged.subSector,
          opportunityType: staged.opportunityType,
          totalProjectCost: staged.totalProjectCost,
          projectStatus: staged.projectStatus,
          sourceName: staged.sourceName,
          location: staged.location
        };

        if (repository.add) {
          const added = repository.add(cleanOpportunity);
          if (added) {
            existingIds.add(cleanOpportunity.id);
            if (cleanOpportunity.projectId) existingProjIds.add(cleanOpportunity.projectId);
            published++;
          } else {
            skipped++;
            remaining.push(staged);
          }
        } else {
          remaining.push(staged);
        }
      } else {
        // Keep non-approved (PENDING_REVIEW / REJECTED) in staging queue
        remaining.push(staged);
      }
    }

    this.stagedOpportunities = remaining;
    return { published, skipped };
  }

  publishApprovedTenders(repository: { getAll: () => Tender[]; add?: (item: Tender) => boolean }): { published: number; skipped: number } {
    const existing = repository.getAll();
    const existingIds = new Set(existing.map(i => i.id));

    let published = 0;
    let skipped = 0;
    const remaining: StagedTender[] = [];

    for (const staged of this.stagedTenders) {
      // Only publish APPROVED records (verificationStatus === 'VERIFIED' and reviewStatus !== 'REJECTED')
      const isApproved = staged.reviewStatus === 'APPROVED' || (staged.verificationStatus === 'VERIFIED' && staged.reviewStatus !== 'REJECTED');

      if (isApproved) {
        // Never overwrite existing records or create duplicates
        if (existingIds.has(staged.id)) {
          skipped++;
          remaining.push(staged);
          continue;
        }

        // Clean Tender preserving exact source URLs and provenance
        const cleanTender: Tender = {
          id: staged.id,
          title: staged.title,
          slug: staged.slug,
          description: staged.description,
          authority: staged.authority,
          category: staged.category,
          status: staged.status || 'OPEN',
          sourceUrl: staged.sourceUrl,
          sourceAuthority: staged.sourceAuthority,
          verificationStatus: 'VERIFIED',
          tenderValue: staged.tenderValue,
          submissionDeadline: staged.submissionDeadline,
          location: staged.location,
          state: staged.state,
          sector: staged.sector,
          tenderType: staged.tenderType,
          sourceName: staged.sourceName
        };

        if (repository.add) {
          const added = repository.add(cleanTender);
          if (added) {
            existingIds.add(cleanTender.id);
            published++;
          } else {
            skipped++;
            remaining.push(staged);
          }
        } else {
          remaining.push(staged);
        }
      } else {
        // Keep non-approved (PENDING_REVIEW / REJECTED) in staging queue
        remaining.push(staged);
      }
    }

    this.stagedTenders = remaining;
    return { published, skipped };
  }

  clear() {
    this.stagedOpportunities = [];
    this.stagedTenders = [];
  }
}

export const globalStagingQueue = new StagingQueue();
