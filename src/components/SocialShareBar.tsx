import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Send, Twitter, Facebook, Linkedin } from 'lucide-react';

interface SocialShareBarProps {
  title: string;
  url?: string;
  summary?: string;
}

export const SocialShareBar: React.FC<SocialShareBarProps> = ({
  title,
  url = typeof window !== 'undefined' ? window.location.href : 'https://sarkarsaathi.org/',
  summary = "Explore official details, eligibility & step-by-step application process on SarkarSaathi.org"
}) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`${title} | SarkarSaathi.org`);
  const encodedSummary = encodeURIComponent(`${title}\n\n${summary}\n\nRead more at: ${url}`);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedSummary}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0B0F17] border border-zinc-800 my-6">
      <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
        <Share2 className="w-4 h-4 text-[#FF6B00]" />
        <span>Share with Citizens:</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-800/50 text-xs font-semibold transition"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Twitter/X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950/80 hover:bg-sky-900 text-sky-400 border border-sky-800/50 text-xs font-semibold transition"
          title="Share on Twitter"
        >
          <Twitter className="w-3.5 h-3.5" />
          <span>X / Twitter</span>
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-blue-400 border border-blue-800/50 text-xs font-semibold transition"
          title="Share on Facebook"
        >
          <Facebook className="w-3.5 h-3.5" />
          <span>Facebook</span>
        </a>

        {/* Telegram */}
        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-400 border border-cyan-800/50 text-xs font-semibold transition"
          title="Share on Telegram"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Telegram</span>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
};
