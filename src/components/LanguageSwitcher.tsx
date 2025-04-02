
import React, { useState, useEffect } from 'react';
import { Check, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import languageService from '@/services/languageService';
import { SupportedLanguage } from '@/services/types';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    languageService.getCurrentLanguage()
  );
  
  const languages = languageService.getAvailableLanguages();

  useEffect(() => {
    // Subscribe to language changes
    const unsubscribe = languageService.subscribeToLanguageChange((lang) => {
      setCurrentLanguage(lang);
    });
    
    return unsubscribe;
  }, []);

  const handleLanguageChange = (lang: SupportedLanguage) => {
    languageService.setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Globe size={16} />
          <span className="hidden md:inline-block">
            {languages.find(l => l.code === currentLanguage)?.name.split(' ')[0]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex items-center justify-between"
          >
            <span>{language.name}</span>
            {language.code === currentLanguage && <Check size={16} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
