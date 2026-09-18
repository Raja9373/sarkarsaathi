import { Opportunity } from '../../types';
import { opportunitiesDataPart1 } from './opportunitiesDataPart1';
import { opportunitiesDataPart2 } from './opportunitiesDataPart2';
import { opportunitiesDataPart3 } from './opportunitiesDataPart3';
import { opportunitiesDataPart4 } from './opportunitiesDataPart4';

/**
 * Authoritative production catalogue of verified Opportunity records (including 1,775 PAIMANA Infrastructure Projects).
 */
export const publishedOpportunities: Opportunity[] = [
  ...opportunitiesDataPart1,
  ...opportunitiesDataPart2,
  ...opportunitiesDataPart3,
  ...opportunitiesDataPart4,
];

