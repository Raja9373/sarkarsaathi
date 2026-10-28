import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Share2, 
  MessageCircle, 
  Send, 
  TrendingUp, 
  Search, 
  Globe, 
  Users, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface TrafficGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOP_VIRAL_SCHEMES = [
  {
    name: 'PM-Kisan Samman Nidhi Yojana',
    benefit: '₹6,000 yearly DBT direct in bank accounts',
    authority: 'Ministry of Agriculture',
    slug: 'pm-kisan-samman-nidhi',
    category: 'Farmers'
  },
  {
    name: 'PM Surya Ghar Muft Bijli Yojana',
    benefit: 'Up to ₹78,000 solar rooftop subsidy + 300 units free electricity',
    authority: 'Ministry of New and Renewable Energy',
    slug: 'pm-surya-ghar-muft-bijli-yojana',
    category: 'Solar / Energy'
  },
  {
    name: 'PMEGP - Prime Minister Employment Generation Programme',
    benefit: '15% to 35% capital subsidy on MSME projects up to ₹50 Lakhs',
    authority: 'Ministry of MSME / KVIC',
    slug: 'pmegp-prime-minister-employment-generation-programme',
    category: 'Business & MSME'
  },
  {
    name: 'Ladli Behna Yojana',
    benefit: '₹1,250 monthly direct cash transfer for women',
    authority: 'Department of Women & Child Development',
    slug: 'ladli-behna-yojana-mp',
    category: 'Women'
  },
  {
    name: 'Sukanya Samriddhi Yojana (SSY)',
    benefit: '8.2% annual interest + complete Section 80C tax exemption',
    authority: 'Ministry of Finance / Post Office',
    slug: 'sukanya-samriddhi-yojana',
    category: 'Savings & Girl Child'
  },
  {
    name: '54EC Capital Gain Tax Exemption Bonds',
    benefit: '100% long-term capital gains tax exemption on property sale up to ₹50L',
    authority: 'REC / PFC / NHAI / IRFC',
    slug: 'rec-54ec-capital-gain-tax-exemption-bonds',
    category: 'Tax Exemption'
  }
];

export function TrafficGrowthGuideModal({ isOpen, onClose }: TrafficGuideModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'google' | 'whatsapp' | 'bing' | 'checklist'>('google');

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleShareSchemeWhatsApp = (scheme: typeof TOP_VIRAL_SCHEMES[0]) => {
    const url = `https://sarkarsaathi.org/subsidies/${scheme.slug}`;
    const message = [
      `📢 *${scheme.name}*`,
      `💰 *Benefit:* ${scheme.benefit}`,
      `🏛 *Authority:* ${scheme.authority}`,
      '',
      '✅ *Check eligibility, documents & how to apply online on SarkarSaathi:*',
      `👉 ${url}`
    ].join('\n');

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                Traffic &amp; Indexing Action Playbook
              </h3>
              <p className="text-xs text-blue-200 font-medium">
                वेबसाइट पर रियल ऑर्गेनिक सर्च और सोशल ट्रैफ़िक लाने के 4 जरूरी स्टेप्स
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 overflow-x-auto scrollbar-none shrink-0 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('google')}
            className={`py-3.5 px-3 border-b-2 whitespace-nowrap transition cursor-pointer flex items-center space-x-2 ${
              activeTab === 'google'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>1. Google Search Console</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`py-3.5 px-3 border-b-2 whitespace-nowrap transition cursor-pointer flex items-center space-x-2 ${
              activeTab === 'whatsapp'
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600" />
            <span>2. WhatsApp Viral Broadcast</span>
          </button>

          <button
            onClick={() => setActiveTab('bing')}
            className={`py-3.5 px-3 border-b-2 whitespace-nowrap transition cursor-pointer flex items-center space-x-2 ${
              activeTab === 'bing'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>3. Bing &amp; IndexNow</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3.5 px-3 border-b-2 whitespace-nowrap transition cursor-pointer flex items-center space-x-2 ${
              activeTab === 'checklist'
                ? 'border-amber-600 text-amber-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>4. SEO Health Status</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* TAB 1: Google Search Console */}
          {activeTab === 'google' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 text-blue-950 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-sm text-blue-900">
                  <Search className="w-4 h-4 text-blue-600" />
                  <span>Google को अपनी साइट के बारे में कैसे बताएं? (Zero to First Click)</span>
                </div>
                <p className="text-xs leading-relaxed text-blue-900/90">
                  नई वेबसाइट्स पर जब तक Google Search Console में Sitemap सबमिट नहीं किया जाता, तब तक Google के पास आपके पेजों की सूची नहीं होती। आपकी साइट पर पहले से ही <strong>11,219 Verified Pages</strong> का Sitemap पूरी तरह तैयार है!
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-extrabold text-slate-900 text-base">
                  Google Search Console में सबमिट करने के 3 आसान स्टेप्स:
                </h4>

                <div className="space-y-3">
                  {/* Step A */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                        <span>Google Search Console खोलें</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        अपने Google अकाउंट से सर्च कंसोल में लॉगिन करें और "Add Property" पर क्लिक करें।
                      </p>
                    </div>
                    <a
                      href="https://search.google.com/search-console"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs shrink-0"
                    >
                      <span>Open Search Console</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Step B */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                        <span>अपना डोमेन वेरीफाई करें (Verification Tag Ready)</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        HTML Tag या Verification Code विकल्प चुनें। आपकी साइट पर यह कोड पहले से लगा हुआ है:
                      </p>
                      <code className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-200 text-blue-700 inline-block">
                        google-site-verification: google9716624b6641a1be
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopy('google9716624b6641a1be', 'verifyCode')}
                      className="inline-flex items-center space-x-1.5 px-3 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer"
                    >
                      {copiedKey === 'verifyCode' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'verifyCode' ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>

                  {/* Step C */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                        <span>Sitemap URL सबमिट करें (11,219 Verified URLs)</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        बाईं ओर "Sitemaps" मेनू में जाएं और यह URL पेस्ट करके <strong>Submit</strong> दबाएं:
                      </p>
                      <code className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-200 text-emerald-700 inline-block font-bold">
                        https://sarkarsaathi.org/sitemap.xml
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopy('https://sarkarsaathi.org/sitemap.xml', 'sitemapUrl')}
                      className="inline-flex items-center space-x-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shrink-0 cursor-pointer"
                    >
                      {copiedKey === 'sitemapUrl' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'sitemapUrl' ? 'Copied Sitemap URL' : 'Copy Sitemap URL'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WhatsApp Viral Broadcast */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 text-emerald-950 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-sm text-emerald-900">
                  <MessageCircle className="w-4 h-4 fill-emerald-600" />
                  <span>भारत में 90% ट्रैफ़िक WhatsApp ग्रुप्स और कम्युनिटी से आता है!</span>
                </div>
                <p className="text-xs leading-relaxed text-emerald-900/90">
                  सरकारी योजनाओं के लिए सबसे बड़ा ट्रैफ़िक सोर्स WhatsApp होता है। नीचे दी गई टॉप 6 सबसे लोकप्रिय योजनाओं को अपने ग्रुप्स, परिवार, और CSC/Cyber Cafe ऑपरेटर्स को तुरंत 1-क्लिक में शेयर करें:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TOP_VIRAL_SCHEMES.map((scheme, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {scheme.category}
                        </span>
                      </div>
                      <h5 className="font-extrabold text-slate-900 text-sm">{scheme.name}</h5>
                      <p className="text-xs text-slate-600">{scheme.benefit}</p>
                    </div>

                    <button
                      onClick={() => handleShareSchemeWhatsApp(scheme)}
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Share on WhatsApp Group</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Bing & IndexNow */}
          {activeTab === 'bing' && (
            <div className="space-y-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 sm:p-5 text-indigo-950 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-sm text-indigo-900">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span>Bing Webmaster Tools &amp; Microsoft Copilot Search</span>
                </div>
                <p className="text-xs leading-relaxed text-indigo-900/90">
                  Bing Webmaster Tools में सबमिट करने से आपकी साइट Bing, Yahoo, DuckDuckGo और Microsoft Copilot में भी दिखने लगेगी।
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                    <span>Bing Webmaster Tools में 1-क्लिक Import करें</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    यदि आपने Google Search Console सेट कर लिया है, तो Bing Webmaster Tools आपको सीधे <strong>"Import from Google Search Console"</strong> का विकल्प देता है। कोई अलग कोड जोड़ने की जरूरत नहीं है!
                  </p>
                  <a
                    href="https://www.bing.com/webmasters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
                  >
                    <span>Open Bing Webmaster Tools</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                    <span>Common Service Center (CSC) &amp; Cyber Cafe Outreach</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    भारत में लाखों ग्रामीण व शहरी CSC और Cyber Cafe संचालक रोज़ाना नागरिकों के लिए सरकारी योजनाओं के फॉर्म भरते हैं। SarkarSaathi.org का लिंक अपने स्थानीय CSC WhatsApp ग्रुप्स में शेयर करें ताकि वे आपकी साइट को एक विश्वसनीय रेफरेंस पोर्टल के रूप में इस्तेमाल करें।
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Checklist & Technical SEO Status */}
          {activeTab === 'checklist' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">11,219 Canonical URLs in Sitemap</h5>
                    <p className="text-xs text-slate-600">All verified central and state schemes are mapped in <code>/sitemap.xml</code> with zero duplicates.</p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Google Site Verification Configured</h5>
                    <p className="text-xs text-slate-600">Both meta tag and verification file are live for instant ownership verification.</p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">JSON-LD Structured Data Schema</h5>
                    <p className="text-xs text-slate-600">WebSite SearchAction, GovernmentService, BreadcrumbList, and FAQPage schemas active.</p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Rich OpenGraph &amp; Twitter Cards</h5>
                    <p className="text-xs text-slate-600">Includes 1200x630 social preview card images for high click-through rate on WhatsApp &amp; Facebook.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Next Immediate Action</span>
                  </div>
                  <h4 className="text-base font-bold">Submit Sitemap to Google Search Console Today</h4>
                  <p className="text-xs text-slate-400">
                    Once submitted, indexing begins within 24 to 48 hours for top search terms.
                  </p>
                </div>

                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm whitespace-nowrap shrink-0 flex items-center space-x-2"
                >
                  <span>Go to Search Console</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>SarkarSaathi Organic Growth Toolkit</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
