export enum UpdateOperation {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  STATUS_CHANGE = 'STATUS_CHANGE',
  CLOSE = 'CLOSE',
  DISCONTINUE = 'DISCONTINUE',
  NO_CHANGE = 'NO_CHANGE',
  REJECT = 'REJECT',
}

export enum EntityType {
  INVESTMENT = 'INVESTMENT',
  OPPORTUNITY = 'OPPORTUNITY',
  TENDER = 'TENDER',
}

export interface SourceProvenance {
  sourceAuthority: string;
  officialSourceUrl: string;
  sourceRecordId?: string;
  sourceUpdateDate?: string;
  fetchedAt: string;
  connectorName: string;
}

export interface StagedUpdate<T> {
  id: string;
  entityType: EntityType;
  entityId: string;
  operation: UpdateOperation;
  payload: T;
  provenance: SourceProvenance;
  status: 'STAGED' | 'NEEDS_REVIEW' | 'APPROVED' | 'PUBLISHED' | 'REJECTED';
  validationResult: {
    isValid: boolean;
    errors: string[];
  };
}
