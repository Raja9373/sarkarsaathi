export interface SupportingClaim {
  claim: string;
  citation_source: string;
  source_url: string;
}

export interface QuestionTranslation {
  short_answer: string;
  detailed_answer: string;
  status: string;
}

export interface VerifiedQuestionItem {
  id: string; // e.g. "Q-GI-001"
  slug: string; // e.g. "q-gi-001"
  canonical_question: string;
  category: string;
  subcategory: string;
  search_intent: string;
  audience: string;
  geography: string;
  suggested_existing_page: string;
  alternate_phrasings: string[];
  
  // Verified Answer content
  short_answer: string;
  detailed_answer: string;
  answer_language: 'en' | 'hi' | 'hinglish';
  translations?: {
    hi?: QuestionTranslation;
    hinglish?: QuestionTranslation;
  };
  supporting_claims: SupportingClaim[];
  official_source_urls: string[];
  source_title: string;
  source_publisher: string;
  evidence_type: 
    | 'PRIMARY_STATUTORY_RULE'
    | 'OFFICIAL_GOV_NOTIFICATION'
    | 'OFFICIAL_DEPARTMENT_PORTAL'
    | 'OFFICIAL_FAQ_DOCUMENT'
    | 'RESEARCH_SYNTHESIS'
    | 'SECONDARY_VERIFIED';
  effective_date: string | null;
  verified_at: string;
  answer_status: 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'NEEDS_REVIEW' | 'UNVERIFIED' | 'OUTDATED';
  verification_status: 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'NEEDS_REVIEW' | 'UNVERIFIED' | 'OUTDATED' | 'CONFLICTING_EVIDENCE';
  review_required: boolean;
  reviewer_notes?: string | null;
  conflicting_evidence?: string | null;
  next_review_due?: string | null;

  // Publishing gate state
  is_published: boolean;
}

export interface QuestionQueryOptions {
  search?: string;
  category?: string;
  language?: 'all' | 'en' | 'hi' | 'hinglish';
  page?: number;
  pageSize?: number;
  publishedOnly?: boolean;
}

export interface PaginatedQuestionResult {
  items: VerifiedQuestionItem[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
