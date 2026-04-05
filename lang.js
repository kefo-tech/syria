const LANG = (navigator.language || "en").split("-")[0].toLowerCase();
export const APP_LANG = ["ar", "en", "de", "tr", "hi"].includes(LANG) ? LANG : "en";

const I18N = {
  ar: {
    title: "بوابة الخدمات | KeFo.tech",
    install: "تثبيت التطبيق",
    share: "مشاركة التطبيق",

    weatherCardTitle: "الطقس الآن",
    weatherLoading: "جاري جلب الطقس...",
    weatherUpdating: "جاري التحديث",
    weatherUpdated: "تم التحديث",
    weatherUnavailable: "غير متاح",

    locationCardTitle: "موقعك الحالي",
    locationLocating: "جارٍ التحديد",
    locationSearching: "جاري البحث",
    locationDone: "تم التحديد",
    welcome: "أهلاً بك في:",
    areaLoading: "جارٍ تحديد المنطقة...",
    areaCurrent: "منطقتك الحالية",
    locationSubline: "تحديد تلقائي حسب موقعك",

    servicesTitle: "الخدمات",

    osmNote: "تعتمد أسماء المناطق على دقة الموقع.",
    copyright: "© KeFo.tech 2026 - جميع الحقوق محفوظة",

    weatherError: "فشل جلب الطقس",
    locationError: "فشل تحديد الموقع",
    geolocationNotSupported: "المتصفح لا يدعم الموقع",
    geolocationDenied: "تم رفض الإذن",

    shareText: "جرّب منصة KeFo الذكية",
    copied: "تم نسخ الرابط",
    installHint: "إذا لم يظهر التثبيت التلقائي، يمكنك تثبيت التطبيق من قائمة المتصفح.",

    afterHour: "بعد ساعة:",
    currentWeatherUnknown: "حالة غير معروفة",

    clear: "مشمس",
    partlyCloudy: "غائم جزئيًا",
    cloudy: "غائم",
    rain: "ماطر",
    snow: "ثلجي",
    fog: "ضباب",
    thunder: "عاصفة"
  },

  en: {
    title: "Services Portal | KeFo.tech",
    install: "Install App",
    share: "Share App",

    weatherCardTitle: "Weather Now",
    weatherLoading: "Loading weather...",
    weatherUpdating: "Updating",
    weatherUpdated: "Updated",
    weatherUnavailable: "Unavailable",

    locationCardTitle: "Your Location",
    locationLocating: "Locating",
    locationSearching: "Searching",
    locationDone: "Detected",
    welcome: "Welcome to:",
    areaLoading: "Detecting area...",
    areaCurrent: "Your area",
    locationSubline: "Auto detected location",

    servicesTitle: "Services",

    osmNote: "Location names depend on accuracy.",
    copyright: "© KeFo.tech 2026 - All rights reserved",

    weatherError: "Weather error",
    locationError: "Location error",
    geolocationNotSupported: "Geolocation not supported",
    geolocationDenied: "Permission denied",

    shareText: "Try KeFo smart services",
    copied: "Copied",
    installHint: "You can install the app from the browser menu.",

    afterHour: "In 1 hour:",
    currentWeatherUnknown: "Unknown",

    clear: "Clear",
    partlyCloudy: "Partly cloudy",
    cloudy: "Cloudy",
    rain: "Rain",
    snow: "Snow",
    fog: "Fog",
    thunder: "Storm"
  },

  de: {
    title: "Serviceportal | KeFo.tech",
    install: "App installieren",
    share: "App teilen",

    weatherCardTitle: "Wetter",
    weatherLoading: "Wetter wird geladen...",
    weatherUpdating: "Aktualisiert",
    weatherUpdated: "Aktuell",
    weatherUnavailable: "Nicht verfügbar",

    locationCardTitle: "Standort",
    locationLocating: "Suche läuft",
    locationSearching: "Suche...",
    locationDone: "Gefunden",
    welcome: "Willkommen in:",
    areaLoading: "Gebiet wird erkannt...",
    areaCurrent: "Ihr Gebiet",
    locationSubline: "Automatisch erkannt",

    servicesTitle: "Dienste",

    osmNote: "Ortsnamen hängen von der Genauigkeit ab.",
    copyright: "© KeFo.tech 2026 - Alle Rechte vorbehalten",

    weatherError: "Wetterfehler",
    locationError: "Standortfehler",
    geolocationNotSupported: "Nicht unterstützt",
    geolocationDenied: "Berechtigung verweigert",

    shareText: "Teste KeFo Dienste",
    copied: "Kopiert",
    installHint: "Sie können die App über das Browsermenü installieren.",

    afterHour: "In 1 Stunde:",
    currentWeatherUnknown: "Unbekannt",

    clear: "Klar",
    partlyCloudy: "Teilweise bewölkt",
    cloudy: "Bewölkt",
    rain: "Regen",
    snow: "Schnee",
    fog: "Nebel",
    thunder: "Gewitter"
  },

  tr: {
    title: "Hizmet Portalı | KeFo.tech",
    install: "Yükle",
    share: "Paylaş",

    weatherCardTitle: "Hava Durumu",
    weatherLoading: "Hava yükleniyor...",
    weatherUpdating: "Güncelleniyor",
    weatherUpdated: "Güncel",
    weatherUnavailable: "Mevcut değil",

    locationCardTitle: "Konum",
    locationLocating: "Belirleniyor",
    locationSearching: "Aranıyor",
    locationDone: "Bulundu",
    welcome: "Hoş geldiniz:",
    areaLoading: "Bölge belirleniyor...",
    areaCurrent: "Bulunduğunuz bölge",
    locationSubline: "Otomatik algılandı",

    servicesTitle: "Hizmetler",

    osmNote: "Konum doğruluğuna bağlıdır.",
    copyright: "© KeFo.tech 2026 - Tüm hakları saklıdır",

    weatherError: "Hava hatası",
    locationError: "Konum hatası",
    geolocationNotSupported: "Desteklenmiyor",
    geolocationDenied: "İzin reddedildi",

    shareText: "KeFo akıllı hizmetlerini deneyin",
    copied: "Kopyalandı",
    installHint: "Uygulamayı tarayıcı menüsünden yükleyebilirsiniz.",

    afterHour: "1 saat sonra:",
    currentWeatherUnknown: "Bilinmiyor",

    clear: "Açık",
    partlyCloudy: "Parçalı bulutlu",
    cloudy: "Bulutlu",
    rain: "Yağmur",
    snow: "Kar",
    fog: "Sis",
    thunder: "Fırtına"
  },

  hi: {
    title: "सेवा पोर्टल | KeFo.tech",
    install: "इंस्टॉल",
    share: "शेयर",

    weatherCardTitle: "मौसम",
    weatherLoading: "मौसम लोड हो रहा है...",
    weatherUpdating: "अपडेट",
    weatherUpdated: "अपडेटेड",
    weatherUnavailable: "उपलब्ध नहीं",

    locationCardTitle: "स्थान",
    locationLocating: "पता चल रहा है",
    locationSearching: "खोज जारी है",
    locationDone: "मिल गया",
    welcome: "आप यहाँ हैं:",
    areaLoading: "क्षेत्र पता चल रहा है...",
    areaCurrent: "आपका क्षेत्र",
    locationSubline: "स्वचालित पहचान",

    servicesTitle: "सेवाएँ",

    osmNote: "स्थान की शुद्धता पर निर्भर।",
    copyright: "© KeFo.tech 2026 - सर्वाधिकार सुरक्षित",

    weatherError: "मौसम त्रुटि",
    locationError: "स्थान त्रुटि",
    geolocationNotSupported: "समर्थित नहीं",
    geolocationDenied: "अनुमति अस्वीकृत",

    shareText: "KeFo smart services आज़माएँ",
    copied: "कॉपी हो गया",
    installHint: "आप ब्राउज़र मेनू से ऐप इंस्टॉल कर सकते हैं।",

    afterHour: "1 घंटे बाद:",
    currentWeatherUnknown: "अज्ञात",

    clear: "साफ",
    partlyCloudy: "आंशिक बादल",
    cloudy: "बादल",
    rain: "बारिश",
    snow: "बर्फ",
    fog: "कोहरा",
    thunder: "तूफ़ान"
  }
};

export const T = I18N[APP_LANG];
export { LANG };
