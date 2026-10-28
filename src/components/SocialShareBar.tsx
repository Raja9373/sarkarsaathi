import React, { useState } from 'react';
import { Share2, Check, Copy, ExternalLink, Send, MessageCircle } from 'lucide-react';

export interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
  category?: string;
  benefit?: string;
  authority?: string;
  className?: string;
}

export function formatShareText({
  title,
  description,
  url,
  benefit,
  authority
}: {
  title: string;
  description?: string;
  url: string;
  benefit?: string;
  authority?: string;
}): string {
  const lines: string[] = [];
  lines.push(`📢 *${title}*`);
  if (benefit && benefit !== 'Not specified' && benefit !== 'Official Notification') {
    lines.push(`💰 *Benefit:* ${benefit}`);
  }
  if (authority) {
    lines.push(`🏛 *Authority:* ${authority}`);
  }
  if (description) {
    const cleanDesc = description.length > 120 ? `${description.slice(0, 117)}...` : description;
    lines.push(`ℹ️ ${cleanDesc}`);
  }
  lines.push('');
  lines.push('✅ *Check complete eligibility, documents & official apply guide on SarkarSaathi:*');
  lines.push(`👉 ${url}`);
  return lines.join('\n');
}

export function SocialShareBar({
  title,
  description,
  url,
  category,
  benefit,
  authority,
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const getCleanUrl = (): string => {
    if (url) return url;
    if (typeof window !== 'undefined') {
      const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
      return `https://sarkarsaathi.org/${cleanPath}`;
    }
    return 'https://sarkarsaathi.org/';
  };

  const shareUrl = getCleanUrl();
  const shareMessage = formatShareText({
    title,
    description,
    url: shareUrl,
    benefit,
    authority
  });

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {}
  };

  const handleWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleTelegram = () => {
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`📢 ${title} - Government Scheme details on SarkarSaathi`)}`;
    if (typeof window !== 'undefined') {
      window.open(tgUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleTwitter = () => {
    const text = `Verified details for ${title} on @SarkarSaathi: ${description ? description.slice(0, 100) : ''}`;
    const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    if (typeof window !== 'undefined') {
      window.open(twUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareMessage,
          url: shareUrl
        });
      } catch {}
    } else {
      handleCopy();
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* WhatsApp Share Button */}
      <button
        onClick={handleWhatsApp}
        className="inline-flex items-center space-x-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-xs font-semibold shadow-sm transition cursor-pointer"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </button>

      {/* Telegram Share Button */}
      <button
        onClick={handleTelegram}
        className="inline-flex items-center space-x-1.5 px-3 py-2 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white rounded-xl text-xs font-semibold shadow-sm transition cursor-pointer"
        title="Share on Telegram"
      >
        <Send className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Telegram</span>
      </button>

      {/* X / Twitter Button */}
      <button
        onClick={handleTwitter}
        className="inline-flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-black active:scale-95 text-white rounded-xl text-xs font-semibold shadow-sm transition cursor-pointer"
        title="Share on X (Twitter)"
      >
        <span className="font-bold text-xs">𝕏</span>
        <span className="hidden sm:inline">Post</span>
      </button>

      {/* Copy Link Button */}
      <button
        onClick={handleCopy}
        className="inline-flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95 rounded-xl text-xs font-semibold transition cursor-pointer"
        title="Copy Link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 font-bold">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Native Web Share on Mobile */}
      <button
        onClick={handleNativeShare}
        className="inline-flex sm:hidden items-center p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition cursor-pointer"
        title="More Share Options"
      >
        <Share2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

/**
 * Viral Callout Banner designed specifically for Indian audience:
 * Encourages sharing government scheme details on WhatsApp with family & community.
 */
export function WhatsAppShareBanner({
  title,
  benefit,
  authority,
  url
}: {
  title: string;
  benefit?: string;
  authority?: string;
  url?: string;
}) {
  const getCleanUrl = (): string => {
    if (url) return url;
    if (typeof window !== 'undefined') {
      const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
      return `https://sarkarsaathi.org/${cleanPath}`;
    }
    return 'https://sarkarsaathi.org/';
  };

  const shareUrl = getCleanUrl();
  const shareMessage = formatShareText({
    title,
    url: shareUrl,
    benefit,
    authority
  });

  const handleWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center space-x-3.5 w-full sm:w-auto">
        <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
          <MessageCircle className="w-6 h-6 fill-current" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-emerald-950">
            Share this Scheme with Family & Friends
          </h4>
          <p className="text-xs text-emerald-800 leading-snug">
            Help eligible citizens, farmers & entrepreneurs learn about this government benefit on WhatsApp.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-auto flex items-center gap-2">
        <button
          onClick={handleWhatsApp}
          className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Share on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
