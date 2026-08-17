import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageCode = 
  | 'hi' // Hindi (Default)
  | 'en' // English
  | 'as' // Assamese
  | 'bn' // Bengali
  | 'gu' // Gujarati
  | 'kn' // Kannada
  | 'ml' // Malayalam
  | 'mr' // Marathi
  | 'or' // Odia
  | 'pa' // Punjabi
  | 'ta' // Tamil
  | 'te' // Telugu
  | 'ur'; // Urdu

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
];

import hiJson from './i18n/hi.json';
import enJson from './i18n/en.json';
import asJson from './i18n/as.json';
import bnJson from './i18n/bn.json';
import guJson from './i18n/gu.json';
import knJson from './i18n/kn.json';
import mlJson from './i18n/ml.json';
import mrJson from './i18n/mr.json';
import orJson from './i18n/or.json';
import paJson from './i18n/pa.json';
import taJson from './i18n/ta.json';
import teJson from './i18n/te.json';
import urJson from './i18n/ur.json';

const translations: Record<LanguageCode, Record<string, string>> = {
  hi: hiJson,
  en: enJson,
  as: asJson,
  bn: bnJson,
  gu: guJson,
  kn: knJson,
  ml: mlJson,
  mr: mrJson,
  or: orJson,
  pa: paJson,
  ta: taJson,
  te: teJson,
  ur: urJson,
};

interface I18nContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: string, defaultVal?: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'hi',
  setLang: () => {},
  t: (key: string, defaultVal?: string) => defaultVal || key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selectedLang') as LanguageCode;
      if (saved && translations[saved]) {
        return saved;
      }
    }
    return 'hi'; // Default Hindi as explicitly mandated
  });

  const setLang = (newLang: LanguageCode) => {
    if (translations[newLang]) {
      setLangState(newLang);
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedLang', newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ur' ? 'rtl' : 'ltr';
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string, defaultVal?: string): string => {
    const dict = translations[lang] || translations.hi;
    if (dict && dict[key]) {
      return dict[key];
    }
    // fallback to English or Hindi
    if (translations.hi && translations.hi[key]) {
      return translations.hi[key];
    }
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return defaultVal || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
