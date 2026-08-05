// Auto-generated aggregator for 10 FAQ chunk files
import part1 from './faqs-part-1.json';
import part2 from './faqs-part-2.json';
import part3 from './faqs-part-3.json';
import part4 from './faqs-part-4.json';
import part5 from './faqs-part-5.json';
import part6 from './faqs-part-6.json';
import part7 from './faqs-part-7.json';
import part8 from './faqs-part-8.json';
import part9 from './faqs-part-9.json';
import part10 from './faqs-part-10.json';

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

export const allFaqs: FaqItem[] = [
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
  ...part7,
  ...part8,
  ...part9,
  ...part10
];

export default allFaqs;
