
import { useEffect, useState } from 'react';
import languageService from '@/services/languageService';
import { SupportedLanguage } from '@/services/types';
import { getChatResponse } from '@/services/chatService';

export const useTranslation = () => {
  const [language, setLanguage] = useState<SupportedLanguage>(
    languageService.getCurrentLanguage()
  );

  useEffect(() => {
    const unsubscribe = languageService.subscribeToLanguageChange((newLang) => {
      setLanguage(newLang);
    });
    
    return unsubscribe;
  }, []);

  const t = (key: string): string => {
    return languageService.translate(key);
  };

  return {
    t,
    language,
    setLanguage: languageService.setLanguage,
    availableLanguages: languageService.getAvailableLanguages(),
  };
};

export default useTranslation;
