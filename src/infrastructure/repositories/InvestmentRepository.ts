import { Investment } from '../../types/investment';

export interface IInvestmentRepository {
  getAll(): Promise<Investment[]>;
  getBySlug(slug: string): Promise<Investment | null>;
  getByCategory(category: string): Promise<Investment[]>;
}
