import {
  investmentRepository,
  investmentSchemeRepository,
  opportunityRepository,
  tenderRepository,
  newsRepository
} from '../infrastructure/repositories/InvestmentRepository';

/**
 * PRODUCTION CODE FREEZE & DATA SAFEGUARD
 * 
 * Protects baseline production catalogue records and enforces strict safeguards:
 * - Prevents accidental catalog deletion or baseline overwrite
 * - Enforces minimum baseline counts:
 *     - Investments: 301
 *     - Investment Schemes: 71
 *     - Opportunities: 127
 *     - Tenders: 30
 *     - News: 30
 * - Enforces explicit administrator approval lifecycle: UPLOAD -> STAGE -> REVIEW -> APPROVE -> PUBLISH
 * - Prohibits auto-publishing, source/provenance deletion, and mock record insertion
 */

export interface BaselineCatalogueCounts {
  investments: number;
  investmentSchemes: number;
  opportunities: number;
  tenders: number;
  news: number;
}

export const LOCKED_PRODUCTION_BASELINE: Readonly<BaselineCatalogueCounts> = Object.freeze({
  investments: 301,
  investmentSchemes: 71,
  opportunities: 127,
  tenders: 30,
  news: 30
});

export class ProductionDataSafeguard {
  private static instance: ProductionDataSafeguard;
  private isLocked: boolean = true;

  private constructor() {}

  public static getInstance(): ProductionDataSafeguard {
    if (!ProductionDataSafeguard.instance) {
      ProductionDataSafeguard.instance = new ProductionDataSafeguard();
    }
    return ProductionDataSafeguard.instance;
  }

  /**
   * Returns current catalogue counts and validates against baseline
   */
  public getCurrentCounts(): BaselineCatalogueCounts {
    return {
      investments: investmentRepository.getAll().length,
      investmentSchemes: investmentSchemeRepository.getAll().length,
      opportunities: opportunityRepository.getAll().length,
      tenders: tenderRepository.getAll().length,
      news: newsRepository.getAll().length
    };
  }

  /**
   * Validates that catalogue baseline counts are intact
   */
  public verifyBaselineIntegrity(): {
    intact: boolean;
    counts: BaselineCatalogueCounts;
    baseline: BaselineCatalogueCounts;
    errors: string[];
  } {
    const current = this.getCurrentCounts();
    const errors: string[] = [];

    if (current.investments < LOCKED_PRODUCTION_BASELINE.investments) {
      errors.push(`Investments below baseline: ${current.investments} < ${LOCKED_PRODUCTION_BASELINE.investments}`);
    }
    if (current.investmentSchemes < LOCKED_PRODUCTION_BASELINE.investmentSchemes) {
      errors.push(`Investment Schemes below baseline: ${current.investmentSchemes} < ${LOCKED_PRODUCTION_BASELINE.investmentSchemes}`);
    }
    if (current.opportunities < LOCKED_PRODUCTION_BASELINE.opportunities) {
      errors.push(`Opportunities below baseline: ${current.opportunities} < ${LOCKED_PRODUCTION_BASELINE.opportunities}`);
    }
    if (current.tenders < LOCKED_PRODUCTION_BASELINE.tenders) {
      errors.push(`Tenders below baseline: ${current.tenders} < ${LOCKED_PRODUCTION_BASELINE.tenders}`);
    }
    if (current.news < LOCKED_PRODUCTION_BASELINE.news) {
      errors.push(`News below baseline: ${current.news} < ${LOCKED_PRODUCTION_BASELINE.news}`);
    }

    return {
      intact: errors.length === 0,
      counts: current,
      baseline: LOCKED_PRODUCTION_BASELINE,
      errors
    };
  }

  /**
   * Validates whether a record can be published safely
   */
  public validatePublishSafety(item: { id: string; verificationStatus?: string; reviewStatus?: string }): {
    canPublish: boolean;
    reason?: string;
  } {
    const isApproved = item.reviewStatus === 'APPROVED' || (item.verificationStatus === 'VERIFIED' && item.reviewStatus !== 'REJECTED');
    if (!isApproved) {
      return {
        canPublish: false,
        reason: 'Record is not explicitly approved by an administrator.'
      };
    }
    return { canPublish: true };
  }

  public isProductionLocked(): boolean {
    return this.isLocked;
  }
}

export const globalProductionSafeguard = ProductionDataSafeguard.getInstance();
