export interface AuditEntry {
  entityType: string;
  entityId: string;
  operation: string;
  source: string;
  timestamp: string;
  validationResult: any;
  oldState: any;
  newState: any;
  reason: string;
}

export class AuditLogger {
  log(entry: AuditEntry): void {
    console.log(`[AUDIT] ${entry.timestamp} | ${entry.entityType} | ${entry.entityId} | ${entry.operation} | ${entry.reason}`);
    // In a real system, this would write to a secure, immutable log.
  }
}
