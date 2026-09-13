import { IOfficialDataSource } from '../types/infrastructure';
import { TenderRecord } from '../types/tender';
import { OpportunityRecord } from '../types/opportunity';

export interface IngestionPipelineStage<T, U> {
  process(data: T): Promise<U>;
}

export interface IngestionPipeline<T> {
  run(source: IOfficialDataSource): Promise<T[]>;
}

export interface NormalizationStage<T, U> {
  normalize(raw: T): U;
}

export interface ValidationStage<T> {
  validate(data: T): boolean;
}

export interface DeduplicationStage<T> {
  isDuplicate(data: T): boolean;
}
