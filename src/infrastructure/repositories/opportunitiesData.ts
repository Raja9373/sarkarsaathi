import { Opportunity } from '../../types';
import { opportunitiesDataPart1 } from './opportunitiesDataPart1';
import { opportunitiesDataPart2 } from './opportunitiesDataPart2';
import { opportunitiesDataPart3 } from './opportunitiesDataPart3';

/**
 * Authoritative production catalogue of 62 verified Opportunity records.
 * Enriched with full 24-field schema from verified official sources.
 */
export const publishedOpportunities: Opportunity[] = [
  ...opportunitiesDataPart1,
  ...opportunitiesDataPart2,
  ...opportunitiesDataPart3,
];
