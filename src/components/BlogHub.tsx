import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';

export const BlogHub: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 text-xs font-bold uppercase mb-2">
          <BookOpen className="w-3.5 h-3.5" /> Government Knowledge Center
        </div>
        <h2 className="text-3xl font-black text-white">Citizen Guides & Government Updates</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Detailed step-by-step guides on Delhi MCD Property Tax, instant e-PAN download, faceless learner driving licence, and banking rules.
        </p>
      </div>

      {activePost ? (
        <div className="bg-[#121824] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <button
            onClick={() => setActivePost(null)}
            className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1 mb-4"
          >
            ← Back to all Knowledge Articles
          </button>

          <span className="text-xs font-bold px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">
            {activePost.category}
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">{activePost.title}</h1>
          <p className="text-sm font-semibold text-[#FF6B00]">{activePost.hindiTitle}</p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-y border-zinc-800/80 py-3">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {activePost.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activePost.publishedDate}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activePost.readTime}</span>
          </div>

          <div className="text-xs sm:text-sm text-zinc-300 space-y-4 leading-relaxed font-sans">
            <pre className="whitespace-pre-wrap font-sans leading-relaxed">{activePost.contentMarkdown}</pre>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-white line-clamp-2">{post.title}</h3>
                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">{post.summary}</p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">{post.readTime}</span>
                <button
                  onClick={() => setActivePost(post)}
                  className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
                >
                  Read Article <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
