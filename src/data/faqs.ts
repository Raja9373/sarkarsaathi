export interface FaqItem {
  id: number;
  slug: string;
  category: string;
  categorySlug?: string;
  question: string;
  q?: string;
  q_en?: string;
  answer: string;
  a?: string;
  a_en?: string;
  answer_en?: string;
  keywords?: string[];
  updatedDate?: string;
  updated?: string;
  officialSource?: string;
}

export const faqs: FaqItem[] = [];
export const allFaqs: FaqItem[] = [];
export default allFaqs;
