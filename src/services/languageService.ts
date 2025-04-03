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
    // Itinerary translations
    explore_itineraries: "Explore Itineraries",
    all: "All",
    trekking: "Trekking",
    meditation: "Meditation",
    pilgrimages: "Pilgrimages",
    hiking: "Hiking",
    select_destination: "Select destination",
    day_by_day: "Day by Day",
    transportation: "Transportation",
    accommodation: "Accommodation",
    travel_tips: "Travel Tips",
    book_itinerary: "Book This Itinerary",
    bus_from: "Bus from",
    train_from: "Train from",
    book_bus: "Book Bus Ticket",
    book_train: "Book Train Ticket",
    no_bus_options: "No bus options available for this destination.",
    no_train_options: "No train options available for this destination.",
    no_itineraries: "No itineraries found",
    no_itineraries_desc: "We couldn't find any itineraries matching the selected category.",
    select_option: "Select option",
    days: "Days",
    route: "Route",
    time: "Time",
    options: "Options",
    cost: "Cost",
    type: "Type",
    // Chat Assistant translations
    travel_assistant: "Travel Assistant",
    type_message: "Type your message...",
    welcome_message: "Hello! I'm your travel assistant. Ask me about destinations, budget tips, transportation, or accommodation for your solo adventure in India.",
    error: "Error",
    chat_error: "Sorry, there was an error processing your request. Please try again."
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
    // Itinerary translations
    explore_itineraries: "यात्रा कार्यक्रम का अन्वेषण करें",
    all: "सभी",
    trekking: "ट्रेकिंग",
    meditation: "ध्यान",
    pilgrimages: "तीर्थ यात्रा",
    hiking: "हाइकिंग",
    select_destination: "गंतव्य चुनें",
    day_by_day: "दिन-प्रतिदिन",
    transportation: "परिवहन",
    accommodation: "आवास",
    travel_tips: "यात्रा सुझाव",
    book_itinerary: "इस यात्रा कार्यक्रम को बुक करें",
    bus_from: "बस से",
    train_from: "ट्रेन से",
    book_bus: "बस टिकट बुक करें",
    book_train: "ट्रेन टिकट बुक करें",
    no_bus_options: "इस गंतव्य के लिए कोई बस विकल्प उपलब्ध नहीं है।",
    no_train_options: "इस गंतव्य के लिए कोई ट्रेन विकल्प उपलब्ध नहीं है।",
    no_itineraries: "कोई यात्रा कार्यक्रम नहीं मिला",
    no_itineraries_desc: "हमें चयनित श्रेणी से मेल खाते कोई यात्रा कार्यक्रम नहीं मिले।",
    select_option: "विकल्प चुनें",
    days: "दिन",
    route: "मार्ग",
    time: "समय",
    options: "विकल्प",
    cost: "कीमत",
    type: "प्रकार",
    // Chat Assistant translations
    travel_assistant: "यात्रा सहायक",
    type_message: "अपना संदेश लिखें...",
    welcome_message: "नमस्ते! मैं आपका यात्रा सहायक हूं। भारत में अपनी एकल यात्रा के लिए गंतव्यों, बजट टिप्स, परिवहन, या आवास के बारे में मुझसे पूछें।",
    error: "त्रुटि",
    chat_error: "क्षमा करें, आपके अनुरोध को संसाधित करने में एक त्रुटि हुई थी। कृपया पुनः प्रयास करें।"
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
    // Itinerary translations
    explore_itineraries: "பயணத் திட்டங்களை ஆராயுங்கள்",
    all: "அனைத்தும்",
    trekking: "மலைப்பயணம்",
    meditation: "தியானம்",
    pilgrimages: "புனித யாத்திரைகள்",
    hiking: "நடைப்பயணம்",
    select_destination: "இடத்தைத் தேர்ந்தெடுக்கவும்",
    day_by_day: "நாள் வாரியாக",
    transportation: "போக்குவரத்து",
    accommodation: "தங்குமிடம்",
    travel_tips: "பயண குறிப்புகள்",
    book_itinerary: "இந்த பயணத்தை முன்பதிவு செய்யுங்கள்",
    bus_from: "பஸ் இருந்து",
    train_from: "ரயில் இருந்து",
    book_bus: "பஸ் டிக்கெட் முன்பதிவு செய்யுங்கள்",
    book_train: "ரயில் டிக்கெட் முன்பதிவு செய்யுங்கள்",
    no_bus_options: "இந்த இடத்திற்கு பஸ் வசதிகள் இல்லை.",
    no_train_options: "இந்த இடத்திற்கு ரயில் வசதிகள் இல்லை.",
    no_itineraries: "பயணத் திட்டங்கள் எதுவும் கிடைக்கவில்லை",
    no_itineraries_desc: "தேர்ந்தெடுக்கப்பட்ட வகைக்கு பொருந்தும் பயணத் திட்டங்கள் எதுவும் கிடைக்கவில்லை.",
    select_option: "விருப்பத்தை தேர்வு செய்யவும்",
    days: "நாட்கள்",
    route: "வழி",
    time: "நேரம்",
    options: "விருப்பங்கள்",
    cost: "விலை",
    type: "வகை",
    // Chat Assistant translations
    travel_assistant: "பயண உதவியாளர்",
    type_message: "உங்கள் செய்தியை உள்ளிடவும்...",
    welcome_message: "வணக்கம்! நான் உங்கள் பயண உதவியாளர். இந்தியாவில் உங்கள் தனிப்பட்ட பயணத்திற்கான இடங்கள், பட்ஜெட் குறிப்புகள், போக்குவரத்து அல்லது தங்குமிடம் பற்றி என்னிடம் கேளுங்கள்.",
    error: "பிழை",
    chat_error: "மன்னிக்கவும், உங்கள் கோரிக்கையை செயலாக்குவதில் பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்."
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
    // Itinerary translations
    explore_itineraries: "ప్రయాణ పథకాలను అన్వేషించండి",
    all: "అన్నీ",
    trekking: "ట్రెక్కింగ్",
    meditation: "ధ్యానం",
    pilgrimages: "పుణ్యక్షేత్ర యాత్రలు",
    hiking: "హైకింగ్",
    select_destination: "గమ్యస్థానాన్ని ఎంచుకోండి",
    day_by_day: "రోజువారీగా",
    transportation: "రవాణా",
    accommodation: "వసతి",
    travel_tips: "ప్రయాణ చిట్కాలు",
    book_itinerary: "ఈ ప్రయాణ పథకాన్ని బుక్ చేయండి",
    bus_from: "బస్సు నుండి",
    train_from: "రైలు నుండి",
    book_bus: "బస్సు టికెట్ బుక్ చేయండి",
    book_train: "రైలు టికెట్ బుక్ చేయండి",
    no_bus_options: "ఈ గమ్యస్థానానికి బస్సు ఎంపికలు అందుబాటులో లేవు.",
    no_train_options: "ఈ గమ్యస్థానానికి రైలు ఎంపికలు అందుబాటులో లేవు.",
    no_itineraries: "ప్రయాణ పథకాలు కనుగొనబడలేదు",
    no_itineraries_desc: "ఎంచుకున్న వర్గానికి సరిపోలే ప్రయాణ పథకాలు మాకు కనిపించలేదు.",
    select_option: "ఎంపికను ఎంచుకోండి",
    days: "రోజులు",
    route: "మార్గం",
    time: "సమయం",
    options: "ఎంపికలు",
    cost: "ధర",
    type: "రకం",
    // Chat Assistant translations
    travel_assistant: "ప్రయాణ సహాయకుడు",
    type_message: "మీ సందేశాన్ని టైప్ చేయండి...",
    welcome_message: "హలో! నేను మీ ప్రయాణ సహాయకుడిని. భారతదేశంలో మీ సోలో అడ్వెంచర్ కోసం గమ్యస్థానాలు, బడ్జెట్ చిట్కాలు, రవాణా లేదా వసతి గురించి నన్ను అడగండి.",
    error: "లోపం",
    chat_error: "క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో లోపం ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి."
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
    // Itinerary translations
    explore_itineraries: "ভ্রমণসূচী অন্বেষণ করুন",
    all: "সব",
    trekking: "ট্রেকিং",
    meditation: "ধ্যান",
    pilgrimages: "তীর্থযাত্রা",
    hiking: "হাইকিং",
    select_destination: "গন্তব্য নির্বাচন করুন",
    day_by_day: "দিন অনুযায়ী",
    transportation: "পরিবহন",
    accommodation: "আবাসন",
    travel_tips: "ভ্রমণ টিপস",
    book_itinerary: "এই ভ্রমণসূচী বুক করুন",
    bus_from: "বাস থেকে",
    train_from: "ট্রেন থেকে",
    book_bus: "বাস টিকেট বুক করুন",
    book_train: "ট্রেন টিকেট বুক করুন",
    no_bus_options: "এই গন্তব্যের জন্য কোন বাস বিকল্প উপলব্ধ নেই।",
    no_train_options: "এই গন্তব্যের জন্য কোন ট্রেন বিকল্প উপলব্ধ নেই।",
    no_itineraries: "কোন ভ্রমণসূচী পাওয়া যায়নি",
    no_itineraries_desc: "আমরা নির্বাচিত বিভাগের সাথে মিলে যাওয়া কোন ভ্রমণসূচী খুঁজে পাইনি।",
    select_option: "বিকল্প নির্বাচন করুন",
    days: "দিন",
    route: "রুট",
    time: "সময়",
    options: "বিকল্পগুলি",
    cost: "খরচ",
    type: "ধরন",
    // Chat Assistant translations
    travel_assistant: "ভ্রমণ সহকারী",
    type_message: "আপনার বার্তা টাইপ করুন...",
    welcome_message: "হ্যালো! আমি আপনার ভ্রমণ সহকারী। ভারতে আপনার একক অ্যাডভেঞ্চারের জন্য গন্তব্য, বাজেট টিপস, পরিবহন, বা থাকার জায়গা সম্পর্কে আমাকে জিজ্ঞাসা করুন।",
    error: "ত্রুটি",
    chat_error: "দুঃখিত, আপনার অনুরোধ প্রক্রিয়াকরণে একটি ত্রুটি ছিল। অনুগ্রহ করে আবার চেষ্টা করুন।"
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
    // Itinerary translations
    explore_itineraries: "प्रवास योजना एक्सप्लोर करा",
    all: "सर्व",
    trekking: "ट्रेकिंग",
    meditation: "ध्यान",
    pilgrimages: "तीर्थक्षेत्र",
    hiking: "हायकिंग",
    select_destination: "गंतव्य स्थान निवडा",
    day_by_day: "दिवसेंदिवस",
    transportation: "वाहतूक",
    accommodation: "निवास",
    travel_tips: "प्रवास टिप्स",
    book_itinerary: "ही प्रवास योजना बुक करा",
    bus_from: "बस पासून",
    train_from: "ट्रेन पासून",
    book_bus: "बस तिकीट बुक करा",
    book_train: "ट्रेन तिकीट बुक करा",
    no_bus_options: "या गंतव्य स्थानासाठी कोणतेही बस पर्याय उपलब्ध नाहीत.",
    no_train_options: "या गंतव्य स्थानासाठी कोणतेही ट्रेन पर्याय उपलब्ध नाहीत.",
    no_itineraries: "कोणत्याही प्रवास योजना आढळल्या नाहीत",
    no_itineraries_desc: "आम्हाला निवडलेल्या श्रेणीशी जुळणाऱ्या कोणत्याही प्रवास योजना सापडल्या नाहीत.",
    select_option: "पर्याय निवडा",
    days: "दिवस",
    route: "मार्ग",
    time: "वेळ",
    options: "पर्याय",
    cost: "किंमत",
    type: "प्रकार",
    // Chat Assistant translations
    travel_assistant: "प्रवास सहाय्यक",
    type_message: "आपला संदेश टाइप करा...",
    welcome_message: "नमस्कार! मी तुमचा प्रवास सहाय्यक आहे. भारतात तुमच्या एकट्याच्या साहसासाठी गंतव्यस्थाने, बजेट टिप्स, वाहतूक किंवा निवास याबद्दल मला विचारा.",
    error: "त्रुटी",
    chat_error: "क्षमस्व, तुमची विनंती प्रक्रिया करण्यात त्रुटी आली. कृपया पुन्हा प्रयत्न करा."
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
