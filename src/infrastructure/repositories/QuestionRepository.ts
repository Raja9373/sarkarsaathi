import rawQuestions from '../../data/verifiedQuestionsData.json';
import { TOP_CITIZEN_QUERIES_ARTICLES } from '../../data/topCitizenQueriesData';
import { VerifiedQuestionItem, QuestionQueryOptions, PaginatedQuestionResult } from '../../types/question';

export class QuestionRepository {
  private items: VerifiedQuestionItem[];

  constructor() {
    const combined = [...TOP_CITIZEN_QUERIES_ARTICLES, ...(rawQuestions as any[])];
    const seenIds = new Set<string>();
    const uniqueItems: any[] = [];
    for (const q of combined) {
      if (!seenIds.has(q.id)) {
        seenIds.add(q.id);
        uniqueItems.push(q);
      }
    }
    this.items = uniqueItems.map((q) => ({
      ...q,
      is_published: this.isEligibleForPublication(q),
    }));
  }

  /**
   * Controlled Publishing Gate:
   * Only strictly verified, complete records with supporting official claims are eligible.
   */
  public isEligibleForPublication(item: Partial<VerifiedQuestionItem>): boolean {
    if (item.answer_status !== 'VERIFIED') return false;
    if (item.verification_status !== 'VERIFIED') return false;
    if (item.review_required === true) return false;
    if (!item.short_answer || item.short_answer.trim().length < 20) return false;
    if (!item.detailed_answer || item.detailed_answer.trim().length < 100) return false;
    if (!Array.isArray(item.official_source_urls) || item.official_source_urls.length === 0) return false;
    if (!Array.isArray(item.supporting_claims) || item.supporting_claims.length === 0) return false;
    if (item.conflicting_evidence) return false;
    return true;
  }

  public getAll(publishedOnly = true): VerifiedQuestionItem[] {
    if (publishedOnly) {
      return this.items.filter((item) => item.is_published);
    }
    return [...this.items];
  }

  public getById(id: string): VerifiedQuestionItem | undefined {
    const cleanId = id.trim().toUpperCase();
    return this.items.find((item) => item.id.toUpperCase() === cleanId && item.is_published);
  }

  public getBySlug(slug: string): VerifiedQuestionItem | undefined {
    if (!slug) return undefined;
    const cleanSlug = slug.trim().toLowerCase();
    return this.items.find(
      (item) => (item.slug.toLowerCase() === cleanSlug || item.id.toLowerCase() === cleanSlug) && item.is_published
    );
  }

  public getByCategory(category: string, publishedOnly = true): VerifiedQuestionItem[] {
    const cleanCat = category.trim().toLowerCase();
    return this.getAll(publishedOnly).filter(
      (item) => item.category.toLowerCase() === cleanCat
    );
  }

  public getCategories(): string[] {
    const set = new Set<string>();
    this.items.forEach((item) => {
      if (item.is_published) set.add(item.category);
    });
    return Array.from(set);
  }

  public search(query: string, category?: string, language: 'all' | 'en' | 'hi' | 'hinglish' = 'all'): VerifiedQuestionItem[] {
    const q = query.trim().toLowerCase();
    let results = this.getAll(true);

    if (category && category !== 'ALL') {
      results = results.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    }

    if (language && language !== 'all') {
      if (language === 'hi') {
        results = results.filter((item) => !!item.translations?.hi?.short_answer);
      } else if (language === 'hinglish') {
        results = results.filter((item) => !!item.translations?.hinglish?.short_answer);
      }
    }

    if (!q) {
      return results;
    }

    const cleanQ = q.replace(/[^a-z0-9]+/g, ' ').trim();
    const tokens = cleanQ.split(/\s+/).filter((t) => t.length > 2);

    return results.filter((item) => {
      const searchableText = [
        item.canonical_question,
        item.id,
        item.subcategory,
        item.short_answer,
        item.detailed_answer,
        ...item.alternate_phrasings,
        item.translations?.hi?.short_answer || '',
        item.translations?.hi?.detailed_answer || '',
        item.translations?.hinglish?.short_answer || '',
        item.translations?.hinglish?.detailed_answer || '',
        item.source_title || '',
        item.source_publisher || '',
      ]
        .join(' ')
        .toLowerCase();

      if (searchableText.includes(q)) return true;

      const normalizedSearchable = searchableText.replace(/[^a-z0-9]+/g, ' ');
      if (normalizedSearchable.includes(cleanQ)) return true;

      if (tokens.length >= 2 && tokens.every((tok) => normalizedSearchable.includes(tok))) {
        return true;
      }

      return false;
    });
  }

  public getPaginated(options: QuestionQueryOptions): PaginatedQuestionResult {
    const page = Math.max(1, options.page || 1);
    const pageSize = Math.max(1, Math.min(options.pageSize || 10, 50));
    const publishedOnly = options.publishedOnly !== false;

    let filtered = options.search
      ? this.search(options.search, options.category, options.language)
      : this.getAll(publishedOnly);

    if (!options.search && options.category && options.category !== 'ALL') {
      filtered = filtered.filter((i) => i.category.toLowerCase() === options.category!.toLowerCase());
    }

    if (!options.search && options.language && options.language !== 'all') {
      if (options.language === 'hi') {
        filtered = filtered.filter((i) => !!i.translations?.hi?.short_answer);
      } else if (options.language === 'hinglish') {
        filtered = filtered.filter((i) => !!i.translations?.hinglish?.short_answer);
      }
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / pageSize) || 1;
    const startIndex = (page - 1) * pageSize;
    const items = filtered.slice(startIndex, startIndex + pageSize);

    return {
      items,
      total,
      page,
      pageSize,
      totalPages,
    };
  }

  public getTotalCounts(): { total: number; published: number; excluded: number } {
    const total = this.items.length;
    const published = this.items.filter((i) => i.is_published).length;
    return {
      total,
      published,
      excluded: total - published,
    };
  }
}

export const questionRepository = new QuestionRepository();
