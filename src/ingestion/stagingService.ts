import { StagedUpdate, EntityType, UpdateOperation, SourceProvenance } from '../types/update';
import { AuditLogger } from '../infrastructure/auditLogger';

export class StagingService<T> {
  private stagedUpdates: Map<string, StagedUpdate<T>> = new Map();
  private auditLogger = new AuditLogger();

  stageUpdate(
    entityId: string,
    entityType: EntityType,
    operation: UpdateOperation,
    payload: T,
    provenance: SourceProvenance,
    validationResult: { isValid: boolean; errors: string[] }
  ): StagedUpdate<T> {
    const stagedUpdate: StagedUpdate<T> = {
      id: `${entityId}-${Date.now()}`,
      entityType,
      entityId,
      operation,
      payload,
      provenance,
      status: validationResult.isValid ? 'STAGED' : 'NEEDS_REVIEW',
      validationResult,
    };

    this.stagedUpdates.set(stagedUpdate.id, stagedUpdate);

    this.auditLogger.log({
      entityType,
      entityId,
      operation,
      source: provenance.connectorName,
      timestamp: new Date().toISOString(),
      validationResult,
      oldState: null, // Should fetch old state if UPDATE
      newState: payload,
      reason: 'Staging update',
    });

    return stagedUpdate;
  }

  getStagedUpdates(): StagedUpdate<T>[] {
    return Array.from(this.stagedUpdates.values());
  }

  approveUpdate(updateId: string): void {
    const update = this.stagedUpdates.get(updateId);
    if (update && update.status === 'STAGED') {
      update.status = 'APPROVED';
      // In a real system, this would trigger the actual repository update.
      console.log(`Update ${updateId} approved.`);
    }
  }
}
