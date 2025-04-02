
import { LanguageService, SupportedLanguage } from './types';

// Simple translations for demonstration
const translations: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    home: "Home",
    destinations: "Destinations",
    itineraries: "Itineraries",
    search: "Search destinations...",
    explore: "Explore Destinations",
    budget_friendly: "Discover budget-friendly solo adventures across India under ₹5000",
    blog: "Travel Blog",
    location: "Location",
    budget: "Budget",
    duration: "Duration (days)",
    categories: "Categories",
    no_destinations: "No destinations found",
    clear_filters: "Clear all filters",
    found_destinations: "destinations found",
    welcome: "Welcome to Musafir",
    travel_companion: "Your budget-friendly travel companion is ready to help!",
  },
  hi: {
    home: "होम",
    destinations: "गंतव्य स्थान",
    itineraries: "यात्रा कार्यक्रम",
    search: "गंतव्य खोजें...",
    explore: "गंतव्य स्थानों का अन्वेषण करें",
    budget_friendly: "₹5000 से कम में भारत भर में किफायती एकल साहसिक यात्राएं खोजें",
    blog: "यात्रा ब्लॉग",
    location: "स्थान",
    budget: "बजट",
    duration: "अवधि (दिन)",
    categories: "श्रेणियाँ",
    no_destinations: "कोई गंतव्य नहीं मिला",
    clear_filters: "सभी फ़िल्टर साफ़ करें",
    found_destinations: "गंतव्य स्थान मिले",
    welcome: "मुसाफिर में आपका स्वागत है",
    travel_companion: "आपका किफायती यात्रा साथी मदद करने के लिए तैयार है!",
  },
  ta: {
    home: "முகப்பு",
    destinations: "இடங்கள்",
    itineraries: "பயண திட்டங்கள்",
    search: "இடங்களைத் தேடுங்கள்...",
    explore: "இடங்களை ஆராயுங்கள்",
    budget_friendly: "₹5000க்கும் குறைவான விலையில் இந்தியா முழுவதும் தனி சாகச பயணங்களைக் கண்டறியுங்கள்",
    blog: "பயண வலைப்பதிவு",
    location: "இடம்",
    budget: "பட்ஜெட்",
    duration: "காலம் (நாட்கள்)",
    categories: "வகைகள்",
    no_destinations: "எந்த இடமும் கிடைக்கவில்லை",
    clear_filters: "அனைத்து வடிகட்டிகளையும் அழிக்கவும்",
    found_destinations: "இடங்கள் கண்டுபிடிக்கப்பட்டன",
    welcome: "முசாபிர்க்கு வரவேற்கிறோம்",
    travel_companion: "உங்கள் பட்ஜெட் நட்பு பயண துணை உதவ தயாராக உள்ளது!",
  },
  te: {
    home: "హోమ్",
    destinations: "గమ్యస్థానాలు",
    itineraries: "ప్రయాణ పథకాలు",
    search: "గమ్యస్థానాలను శోధించండి...",
    explore: "గమ్యస్థానాలను అన్వేషించండి",
    budget_friendly: "₹5000 లోపు భారతదేశం అంతటా బడ్జెట్-స్నేహపూర్వక సోలో సాహసాలను కనుగొనండి",
    blog: "ప్రయాణ బ్లాగ్",
    location: "ప్రదేశం",
    budget: "బడ్జెట్",
    duration: "వ్యవధి (రోజులు)",
    categories: "వర్గాలు",
    no_destinations: "గమ్యస్థానాలు కనుగొనబడలేదు",
    clear_filters: "అన్ని ఫిల్టర్లను క్లియర్ చేయండి",
    found_destinations: "గమ్యస్థానాలు కనుగొనబడ్డాయి",
    welcome: "ముసాఫిర్‌కి స్వాగతం",
    travel_companion: "మీ బడ్జెట్-స్నేహపూర్వక ప్రయాణ సహచరుడు సహాయం చేయడానికి సిద్ధంగా ఉన్నాడు!",
  },
  bn: {
    home: "হোম",
    destinations: "গন্তব্য",
    itineraries: "ভ্রমণসূচী",
    search: "গন্তব্য অনুসন্ধান করুন...",
    explore: "গন্তব্য অন্বেষণ করুন",
    budget_friendly: "₹5000 এর কম খরচে ভারতজুড়ে বাজেট-বান্ধব একক অ্যাডভেঞ্চার খুঁজুন",
    blog: "ভ্রমণ ব্লগ",
    location: "অবস্থান",
    budget: "বাজেট",
    duration: "সময়কাল (দিন)",
    categories: "বিভাগ",
    no_destinations: "কোন গন্তব্য পাওয়া যায়নি",
    clear_filters: "সমস্ত ফিল্টার পরিষ্কার করুন",
    found_destinations: "গন্তব্য পাওয়া গেছে",
    welcome: "মুসাফিরে স্বাগতম",
    travel_companion: "আপনার বাজেট-বান্ধব ভ্রমণ সঙ্গী সাহায্য করতে প্রস্তুত!",
  },
  mr: {
    home: "होम",
    destinations: "गंतव्य स्थाने",
    itineraries: "प्रवास योजना",
    search: "गंतव्य स्थाने शोधा...",
    explore: "गंतव्य स्थाने एक्सप्लोर करा",
    budget_friendly: "₹5000 पेक्षा कमी किंमतीत भारतभर बजेट-अनुकूल एकटे साहस शोधा",
    blog: "प्रवास ब्लॉग",
    location: "स्थान",
    budget: "बजेट",
    duration: "कालावधी (दिवस)",
    categories: "श्रेणी",
    no_destinations: "कोणतीही गंतव्य स्थाने आढळली नाहीत",
    clear_filters: "सर्व फिल्टर्स साफ करा",
    found_destinations: "गंतव्य स्थाने सापडली",
    welcome: "मुसाफिरमध्ये आपले स्वागत आहे",
    travel_companion: "आपला बजेट-अनुकूल प्रवास साथीदार मदत करण्यास तयार आहे!",
  }
};

// Create a singleton service for language
class LanguageServiceImpl implements LanguageService {
  private currentLanguage: SupportedLanguage = 'en';
  private subscribers: ((lang: SupportedLanguage) => void)[] = [];
  
  private supportedLanguages = [
    { code: 'en' as SupportedLanguage, name: 'English' },
    { code: 'hi' as SupportedLanguage, name: 'हिन्दी (Hindi)' },
    { code: 'ta' as SupportedLanguage, name: 'தமிழ் (Tamil)' },
    { code: 'te' as SupportedLanguage, name: 'తెలుగు (Telugu)' },
    { code: 'bn' as SupportedLanguage, name: 'বাংলা (Bengali)' },
    { code: 'mr' as SupportedLanguage, name: 'मराठी (Marathi)' },
  ];

  constructor() {
    // Try to load saved language preference from localStorage
    try {
      const savedLang = localStorage.getItem('musafir-language') as SupportedLanguage;
      if (savedLang && Object.keys(translations).includes(savedLang)) {
        this.currentLanguage = savedLang;
      }
    } catch (error) {
      console.error('Error loading language preference:', error);
    }
  }

  getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguage;
  }

  setLanguage(lang: SupportedLanguage): void {
    if (this.currentLanguage !== lang) {
      this.currentLanguage = lang;
      
      // Save preference to localStorage
      try {
        localStorage.setItem('musafir-language', lang);
      } catch (error) {
        console.error('Error saving language preference:', error);
      }
      
      // Notify subscribers
      this.subscribers.forEach(callback => callback(lang));
    }
  }

  translate(key: string): string {
    return translations[this.currentLanguage][key] || translations.en[key] || key;
  }

  getAvailableLanguages(): Array<{ code: SupportedLanguage; name: string }> {
    return this.supportedLanguages;
  }

  subscribeToLanguageChange(callback: (lang: SupportedLanguage) => void): () => void {
    this.subscribers.push(callback);
    
    // Return unsubscribe function
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }
}

// Create and export a singleton instance
const languageService: LanguageService = new LanguageServiceImpl();
export default languageService;
