import React, { useState, useEffect } from 'react';
import { Mic, MicOff, X, Sparkles, Volume2, Search, CheckCircle2 } from 'lucide-react';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchResult: (spokenText: string) => void;
}

export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({
  isOpen,
  onClose,
  onSearchResult
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = true;
        rec.lang = 'hi-IN'; // Default to Hindi, supports English keywords naturally

        rec.onstart = () => {
          setIsListening(true);
          setErrorMsg('');
        };

        rec.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setTranscript(currentTranscript);
        };

        rec.onerror = (event: any) => {
          setIsListening(false);
          setErrorMsg(`Voice recognition error: ${event.error}. Please type your search.`);
        };

        rec.onend = () => {
          setIsListening(false);
        };

        setRecognition(rec);
      } else {
        setErrorMsg('Voice search is not supported in this browser. Please use keyboard search.');
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen && recognition) {
      setTranscript('');
      setErrorMsg('');
      try {
        recognition.start();
      } catch (err) {
        // Recognition already started
      }
    } else if (!isOpen && recognition) {
      try {
        recognition.stop();
      } catch (err) {
        // Recognition already stopped
      }
    }
  }, [isOpen, recognition]);

  const toggleListening = () => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
    } else {
      setTranscript('');
      setErrorMsg('');
      try {
        recognition.start();
      } catch (err) {
        //
      }
    }
  };

  const handleApplySpokenText = () => {
    if (transcript.trim() !== '') {
      onSearchResult(transcript.trim());
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121824] border border-zinc-700 p-6 sm:p-8 text-center shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-semibold text-[#FF6B00]">
          <Sparkles className="w-3.5 h-3.5" /> Voice Search • बोलकर खोजें
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white">
          {isListening ? 'Listening... (बोलिए...)' : 'Tap Microphone to Speak'}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400">
          Try saying: <span className="text-amber-400 font-medium">"Delhi Lakshmi Yojana"</span>, <span className="text-amber-400 font-medium">"PAN Card correction"</span>, or <span className="text-amber-400 font-medium">"200 units free power"</span>
        </p>

        {/* Big Pulse Microphone Button */}
        <div className="flex justify-center py-4">
          <button
            onClick={toggleListening}
            className={`relative p-8 rounded-full transition-all duration-300 shadow-2xl ${
              isListening
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white animate-pulse ring-8 ring-red-500/30'
                : 'bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white hover:scale-105'
            }`}
          >
            {isListening ? <Mic className="w-12 h-12" /> : <MicOff className="w-12 h-12" />}
          </button>
        </div>

        {/* Live Transcript Display */}
        {transcript && (
          <div className="p-4 rounded-2xl bg-[#0B0F17] border border-zinc-800 text-left">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Spoken Query:</span>
            <p className="text-base font-bold text-[#FF6B00]">{transcript}</p>
          </div>
        )}

        {errorMsg && (
          <p className="text-xs text-red-400 bg-red-950/40 border border-red-800/40 p-3 rounded-xl">
            {errorMsg}
          </p>
        )}

        <div className="flex items-center justify-center gap-3 pt-2">
          {transcript && (
            <button
              onClick={handleApplySpokenText}
              className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold text-sm shadow-lg transition flex items-center gap-2"
            >
              <Search className="w-4 h-4" /> Search for "{transcript}"
            </button>
          )}
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-sm transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
