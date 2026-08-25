import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Minimize2, Maximize2, Send, Sparkles, ExternalLink, 
  RefreshCw, MapPin, Building2, Shield, Phone, FileText, CheckCircle2,
  ChevronRight, ArrowRight, Info, AlertTriangle, Globe
} from 'lucide-react';
import { StateId, ServiceItem } from '../types';
import { getStateInfo, STATES_LIST } from '../data/statesData';
import { 
  searchKnowledgeBase, 
  detectStateFromQuery, 
  ChatbotKnowledgeItem,
  CHATBOT_KNOWLEDGE_BASE 
} from '../data/allIndiaServices';
import { SERVICES_LIST } from '../data/servicesData';
import { MASTER_YOJANA_LIST } from '../data/yojanaData';
import { MAJOR_BANKS } from '../data/bankingData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  matchedItems?: ChatbotKnowledgeItem[];
  detectedState?: string;
  directLink?: { label: string; url: string };
  internalAction?: { tab: string; id?: string; label: string };
}

interface BharatSaathiChatbotProps {
  currentStateId: StateId;
  onNavigateTab?: (tab: string, itemId?: string) => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const BharatSaathiChatbot: React.FC<BharatSaathiChatbotProps> = ({
  currentStateId = 'delhi',
  onNavigateTab,
  onSelectService
}) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeState, setActiveState] = useState<string>(currentStateId);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync state when parent state changes
  useEffect(() => {
    setActiveState(currentStateId);
  }, [currentStateId]);

  // Initial welcome message
  useEffect(() => {
    setMounted(true);
    const stateInfo = getStateInfo(currentStateId as StateId);
    const welcomeMsg: Message = {
      id: 'welcome-1',
      sender: 'bot',
      text: `🇮🇳 **नमस्ते! मैं हूँ आपका भारत साथी (Bharat Saathi AI Assistant)**\n\nमैं भारत के **सभी 28 राज्यों, 8 केंद्र शासित प्रदेशों एवं केंद्र सरकार** की 100+ सरकारी योजनाओं, प्रमाण पत्रों, आधार, पैन, राशन कार्ड, बैंक हेल्पलाइन व नजदीकी सेंटर्स की सटीक व आधिकारिक जानकारी प्रदान करता हूँ।\n\n📍 वर्तमान चयनित राज्य: **${stateInfo?.name || 'All India'}**`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([welcomeMsg]);
  }, [currentStateId]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  if (!mounted) return null;

  const currentStateInfo = getStateInfo(activeState as StateId);

  // Quick Action Chips
  const quickChips = [
    { label: '🌾 PM Kisan', query: 'PM Kisan samman nidhi' },
    { label: '🏠 PM Awas', query: 'PM Awas Yojana' },
    { label: '🏥 Ayushman Card', query: 'Ayushman Bharat 5 Lakh free ilaj' },
    { label: '🆔 Aadhaar Update', query: 'Aadhaar card address update' },
    { label: '💳 Instant PAN', query: 'Instant PAN card apply' },
    { label: '🌾 Ration Card / ONORC', query: 'Ration card add member and ONORC' },
    { label: '👶 Baby Born / Birth Cert', query: `Birth certificate baby born in ${currentStateInfo?.name || 'India'}` },
    { label: '🚗 Driving Licence', query: 'Driving licence Sarathi apply' },
    { label: '🏦 SBI Zero Balance', query: 'SBI zero balance account' },
    { label: '📍 Find Pincode / Post Office', query: 'Find Pincode and post office' },
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Detect state from user query if mentioned
    const detectedStateId = detectStateFromQuery(query);
    const queryState = detectedStateId || activeState;
    if (detectedStateId && detectedStateId !== activeState) {
      setActiveState(detectedStateId);
    }

    setTimeout(() => {
      const results = searchKnowledgeBase(query, queryState);
      const stateObj = getStateInfo(queryState as StateId);
      const stateName = stateObj?.name || 'All India';

      let botResponseText = '';
      let matchedItems: ChatbotKnowledgeItem[] = [];
      let directLink: { label: string; url: string } | undefined;
      let internalAction: { tab: string; id?: string; label: string } | undefined;

      if (results.length > 0) {
        matchedItems = results;
        const top = results[0];
        
        botResponseText = `### ${top.title}\n**${top.hindiTitle}**\n\n${top.hindiSummary}\n\n` +
          (top.benefits ? `✅ **लाभ (Benefits):** ${top.benefits}\n\n` : '') +
          (top.fees ? `💰 **सरकारी फीस:** ${top.fees}\n\n` : '') +
          (top.helpline ? `📞 **हेल्पलाइन नंबर:** ${top.helpline}\n\n` : '') +
          `🌐 **आधिकारिक पोर्टल:** ${top.officialPortalName}`;

        directLink = {
          label: `Open ${top.officialPortalName}`,
          url: top.officialUrl
        };

        if (top.internalTab) {
          internalAction = {
            tab: top.internalTab,
            id: top.internalId,
            label: `View on SarkarSaathi (${top.title.split('(')[0].trim()})`
          };
        }
      } else {
        // Fallback natural language answer for general queries
        const qLower = query.toLowerCase();
        if (qLower.includes('bank') || qLower.includes('khata') || qLower.includes('account')) {
          botResponseText = `🏦 **बैंकिंग सहायता (Pan-India Banking Hub)**\n\nआप भारत के 21+ प्रमुख सरकारी एवं निजी बैंकों (SBI, PNB, Canara, Union Bank, HDFC, ICICI, Axis आदि) के जीरो बैलेंस खाते, ब्याज दरें, न्यूनतम बैलेंस नियम एवं 24x7 टोल-फ्री हेल्पलाइन नंबर हमारे बैंकिंग हब से देख सकते हैं।`;
          internalAction = { tab: 'banking', label: 'Open Banking Hub (21+ Banks)' };
        } else if (qLower.includes('pincode') || qLower.includes('pin code') || qLower.includes('post office')) {
          botResponseText = `📍 **पिन कोड एवं डाकघर खोजक (All India PIN Code Directory)**\n\nभारत के सभी 28 राज्यों व 8 केंद्र शासित प्रदेशों का 6 अंकों का पोस्टल पिन कोड एवं डाकघर पता खोजने हेतु हमारे पिन कोड फाइंडर टूल का उपयोग करें।`;
          internalAction = { tab: 'finders', id: 'pincode', label: 'Open PIN Code Finder' };
        } else if (qLower.includes('police') || qLower.includes('thana') || qLower.includes('fir')) {
          botResponseText = `🚨 **थाना एवं पुलिस स्टेशन डायरेक्टरी**\n\nआपातकाल के लिए तुरंत **112 (National Emergency Helpline)** पर कॉल करें। अपने नजदीकी थाने का पता, एसएचओ (SHO) फोन नंबर व ई-एफआईआर हेतु हमारे पुलिस स्टेशन फाइंडर पर जाएं।`;
          internalAction = { tab: 'finders', id: 'police-station', label: 'Open Police Station Finder' };
        } else if (qLower.includes('hospital') || qLower.includes('ilaj') || qLower.includes('doctor')) {
          botResponseText = `🏥 **सरकारी अस्पताल एवं स्वास्थ्य केंद्र**\n\nमुफ्त ओपीडी, आयुष्मान आरोग्य मंदिर (Health & Wellness Centres) एवं 100% मुफ्त जेनेरिक दवाइयों (Jan Aushadhi) के लिए हमारे फाइंडर टूल का उपयोग करें। एम्बुलेंस हेल्पलाइन: **108**`;
          internalAction = { tab: 'finders', id: 'hospital', label: 'Open Hospital Finder' };
        } else {
          botResponseText = `🔎 **${stateName} राज्य एवं केंद्र सरकार सेवाएं**\n\nमैंने आपकी खोज *"${query}"* को प्रोसेस किया है। आप हमारे पोर्टल पर उपलब्ध 70+ सरकारी सेवाओं, योजनाओं, लाइफ इवेंट रोडमैप और डायरेक्टरी में से तुरंत सटीक जानकारी प्राप्त कर सकते हैं। नीचे दिए गए विकल्पों में से चुनें या स्पष्ट कीवर्ड (जैसे 'PM Kisan', 'Aadhaar', 'PAN Card', 'Ration Card') लिखें।`;
        }
      }

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        matchedItems: matchedItems.length > 0 ? matchedItems : undefined,
        detectedState: stateName,
        directLink,
        internalAction
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleActionClick = (action: { tab: string; id?: string }) => {
    if (onNavigateTab) {
      onNavigateTab(action.tab, action.id);
    }
    // Also if it's a specific service, try selecting it
    if (action.id && onSelectService) {
      const found = SERVICES_LIST.find(s => s.id === action.id);
      if (found) onSelectService(found);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right, Zero layout interference) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#E65100] text-white rounded-full shadow-2xl hover:shadow-[#FF6B00]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border-2 border-white/20 cursor-pointer"
            aria-label="Ask Bharat Saathi AI Government Assistant"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
              <span className="text-base">🇮🇳</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-black tracking-wide flex items-center gap-1 text-white uppercase">
                Bharat Saathi <span className="text-[10px] bg-white text-[#FF6B00] font-black px-1.5 py-0.2 rounded-full">AI</span>
              </span>
              <span className="text-[11px] font-medium text-amber-100/90 leading-tight">
                योजना व सेवा पूछें / Ask Govt Guide
              </span>
            </div>

            <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div 
          className={`fixed z-50 transition-all duration-300 ${
            isMinimized 
              ? 'bottom-6 right-6 w-80 h-14' 
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[410px] h-[580px] max-h-[85vh]'
          } bg-[#0F172A] border border-zinc-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#C2410C] p-3.5 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg shadow-inner">
                🇮🇳
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm tracking-tight text-white">Bharat Saathi</span>
                  <span className="text-[10px] bg-black/30 text-amber-200 font-bold px-1.5 py-0.2 rounded">Pan-India AI</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-amber-100/90">
                  <MapPin className="w-3 h-3 text-amber-200" />
                  <span className="font-semibold truncate max-w-[170px]">
                    State: {currentStateInfo?.name || 'All India'}
                  </span>
                </div>
              </div>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([{
                  id: `welcome-${Date.now()}`,
                  sender: 'bot',
                  text: `🔄 **Chat Reset**\n\nपूछिए: PM Kisan, PM Awas, Ayushman Bharat, राशन कार्ड, आधार सुधार, पैन कार्ड, या किसी भी राज्य (${currentStateInfo?.name || 'All India'}) की सरकारी सेवा की प्रक्रिया।`,
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }])}
                title="Clear Chat"
                className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Maximize" : "Minimize"}
                className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body content (Hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* State Notice Pill */}
              <div className="bg-[#1E293B] px-3.5 py-1.5 border-b border-zinc-800 text-[11px] text-zinc-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Globe className="w-3 h-3 text-[#FF6B00]" />
                  <span>100% Free • Direct Official .gov.in Links</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Guide
                </span>
              </div>

              {/* Chat Messages Log */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl p-3 shadow-md ${
                        msg.sender === 'user'
                          ? 'bg-[#FF6B00] text-white rounded-br-none'
                          : 'bg-[#1E293B] text-zinc-100 border border-zinc-700/60 rounded-bl-none'
                      }`}
                    >
                      {/* Message Text with structured Markdown-like formatting */}
                      <div className="whitespace-pre-line leading-relaxed">
                        {msg.text}
                      </div>

                      {/* Matched Structured Knowledge Details */}
                      {msg.matchedItems && msg.matchedItems[0] && (
                        <div className="mt-3 pt-2.5 border-t border-zinc-700/60 space-y-2 text-[11px]">
                          {/* Eligibility Checklist */}
                          {msg.matchedItems[0].eligibility && (
                            <div className="bg-black/20 p-2 rounded-lg">
                              <span className="font-bold text-amber-400 flex items-center gap-1 mb-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> पात्रता (Eligibility):
                              </span>
                              <ul className="list-disc list-inside space-y-0.5 text-zinc-300">
                                {msg.matchedItems[0].eligibility.slice(0, 3).map((el, i) => (
                                  <li key={i} className="text-[10.5px] leading-snug">{el}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Mandatory Documents */}
                          {msg.matchedItems[0].documents && (
                            <div className="bg-black/20 p-2 rounded-lg">
                              <span className="font-bold text-sky-400 flex items-center gap-1 mb-1">
                                <FileText className="w-3 h-3 text-sky-400" /> आवश्यक दस्तावेज (Docs):
                              </span>
                              <p className="text-zinc-300 text-[10.5px]">
                                {msg.matchedItems[0].documents.join(' • ')}
                              </p>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {msg.directLink && (
                              <a
                                href={msg.directLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-[10px] transition shadow"
                              >
                                <span>Official Govt Portal</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}

                            {msg.internalAction && (
                              <button
                                onClick={() => handleActionClick(msg.internalAction!)}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-amber-300 rounded-lg font-semibold text-[10px] transition cursor-pointer"
                              >
                                <span>{msg.internalAction.label}</span>
                                <ChevronRight className="w-2.5 h-2.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Direct standalone links */}
                      {!msg.matchedItems && msg.directLink && (
                        <div className="mt-2 pt-2 border-t border-zinc-700">
                          <a
                            href={msg.directLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-[10px] transition"
                          >
                            <span>{msg.directLink.label}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      )}

                      {!msg.matchedItems && msg.internalAction && (
                        <div className="mt-2 pt-2 border-t border-zinc-700">
                          <button
                            onClick={() => handleActionClick(msg.internalAction!)}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-amber-300 rounded-lg font-semibold text-[10px] transition cursor-pointer"
                          >
                            <span>{msg.internalAction.label}</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-zinc-500 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 bg-[#1E293B] border border-zinc-700/60 p-2.5 rounded-2xl rounded-bl-none w-20 text-zinc-400">
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="px-3 py-1.5 bg-[#0B1120] border-t border-zinc-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <span className="text-[10px] text-zinc-500 whitespace-nowrap font-medium flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5 text-[#FF6B00]" /> Quick:
                </span>
                {quickChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip.query)}
                    className="whitespace-nowrap px-2 py-0.8 bg-zinc-800 hover:bg-[#FF6B00] hover:text-white text-zinc-300 text-[10px] font-medium rounded-full transition cursor-pointer border border-zinc-700/50"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-3 bg-[#0F172A] border-t border-zinc-800 flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="योजना, सेवा या राज्य पूछें (e.g. PM Kisan, UP Aadhaar)..."
                  className="flex-1 bg-[#1E293B] text-white text-xs px-3.5 py-2.5 rounded-xl border border-zinc-700/80 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] placeholder-zinc-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="p-2.5 bg-[#FF6B00] hover:bg-[#E65100] disabled:opacity-40 disabled:hover:bg-[#FF6B00] text-white rounded-xl transition shadow cursor-pointer"
                  title="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Trust & Disclaimer */}
              <div className="px-3 py-1 bg-black/40 text-[9px] text-zinc-400 text-center border-t border-zinc-900 leading-tight">
                SarkarSaathi.org is an independent citizen guide. 100% Free • No Login • Apply only on official .gov.in portals.
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
