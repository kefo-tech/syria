export const LANG = (navigator.language || "en").split("-")[0].toLowerCase();

export const APP_LANG = ["ar", "en", "de", "tr", "hi"].includes(LANG) ? LANG : "en";

export const I18N = {
  ar: {
    title: "بوابة الخدمات | KeFo.tech",
    install: "تثبيت التطبيق",
    share: "مشاركة التطبيق",

    weatherCardTitle: "الطقس الآن",
    weatherLoading: "جاري جلب الطقس...",
    weatherUpdating: "تحديث",
    weatherUpdated: "محدث",
    weatherUnavailable: "غير متاح",

    locationCardTitle: "موقعك الحالي",
    locationLocating: "تحديد...",
    locationSearching: "بحث...",
    locationDone: "تم",
    welcome: "أهلاً بك في:",
    areaLoading: "جاري تحديد المنطقة...",
    areaCurrent: "منطقتك الحالية",
    locationSubline: "تحديد تلقائي حسب موقعك",

    servicesTitle: "الخدمات",

    osmNote: "تعتمد أسماء المناطق على دقة الموقع.",
    copyright: "© 2026 KeFo.tech - جميع الحقوق محفوظة",

    weatherError: "فشل جلب الطقس",
    locationError: "فشل تحديد الموقع",
    geolocationNotSupported: "المتصفح لا يدعم الموقع",
    geolocationDenied: "تم رفض الإذن",

    shareText: "جرّب منصة KeFo الذكية",
    copied: "تم نسخ الرابط",
    installHint: "يمكنك تثبيت التطبيق من قائمة المتصفح",

    afterHour: "بعد ساعة:",

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
    share: "Share",

    weatherCardTitle: "Weather",
    weatherLoading: "Loading weather...",
    weatherUpdating: "Updating",
    weatherUpdated: "Updated",
    weatherUnavailable: "Unavailable",

    locationCardTitle: "Your Location",
    locationLocating: "Locating...",
    locationSearching: "Searching...",
    locationDone: "Done",
    welcome: "Welcome to:",
    areaLoading: "Detecting area...",
    areaCurrent: "Your area",
    locationSubline: "Auto-detected location",

    servicesTitle: "Services",

    osmNote: "Area names depend on map accuracy.",
    copyright: "© 2026 KeFo.tech - All rights reserved",

    weatherError: "Weather error",
    locationError: "Location error",
    geolocationNotSupported: "Geolocation not supported",
    geolocationDenied: "Permission denied",

    shareText: "Try KeFo smart services",
    copied: "Copied",
    installHint: "Install from browser menu",

    afterHour: "In 1 hour:",

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
    install: "Installieren",
    share: "Teilen",

    weatherCardTitle: "Wetter",
    weatherLoading: "Wetter wird geladen...",
    weatherUpdating: "Aktualisieren",
    weatherUpdated: "Aktuell",
    weatherUnavailable: "Nicht verfügbar",

    locationCardTitle: "Standort",
    locationLocating: "Ermitteln...",
    locationSearching: "Suchen...",
    locationDone: "Fertig",
    welcome: "Willkommen in:",
    areaLoading: "Gebiet wird erkannt...",
    areaCurrent: "Ihr Gebiet",
    locationSubline: "Automatisch erkannt",

    servicesTitle: "Dienste",

    osmNote: "Gebietsnamen hängen von Kartendaten ab.",
    copyright: "© 2026 KeFo.tech - Alle Rechte vorbehalten",

    weatherError: "Wetterfehler",
    locationError: "Standortfehler",
    geolocationNotSupported: "Nicht unterstützt",
    geolocationDenied: "Erlaubnis verweigert",

    shareText: "Teste KeFo Dienste",
    copied: "Kopiert",
    installHint: "Im Browser installieren",

    afterHour: "In 1 Stunde:",

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

    weatherCardTitle: "Hava",
    weatherLoading: "Yükleniyor...",
    weatherUpdating: "Güncelleniyor",
    weatherUpdated: "Güncel",
    weatherUnavailable: "Yok",

    locationCardTitle: "Konum",
    locationLocating: "Belirleniyor...",
    locationSearching: "Aranıyor...",
    locationDone: "Tamam",
    welcome: "Hoş geldiniz:",
    areaLoading: "Bölge belirleniyor...",
    areaCurrent: "Bölgeniz",
    locationSubline: "Otomatik algılandı",

    servicesTitle: "Hizmetler",

    osmNote: "Konum doğruluğuna bağlıdır.",
    copyright: "© 2026 KeFo.tech",

    weatherError: "Hava hatası",
    locationError: "Konum hatası",
    geolocationNotSupported: "Desteklenmiyor",
    geolocationDenied: "İzin reddedildi",

    shareText: "KeFo deneyin",
    copied: "Kopyalandı",
    installHint: "Tarayıcıdan yükleyin",

    afterHour: "1 saat sonra:",

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
    weatherLoading: "लोड हो रहा है...",
    weatherUpdating: "अपडेट",
    weatherUpdated: "अपडेटेड",
    weatherUnavailable: "उपलब्ध नहीं",

    locationCardTitle: "स्थान",
    locationLocating: "पता चल रहा...",
    locationSearching: "खोज...",
    locationDone: "हो गया",
    welcome: "आपका स्वागत है:",
    areaLoading: "क्षेत्र पता चल रहा...",
    areaCurrent: "आपका क्षेत्र",
    locationSubline: "स्वचालित पहचान",

    servicesTitle: "सेवाएँ",

    osmNote: "डेटा पर निर्भर",
    copyright: "© 2026 KeFo.tech",

    weatherError: "मौसम त्रुटि",
    locationError: "स्थान त्रुटि",
    geolocationNotSupported: "समर्थित नहीं",
    geolocationDenied: "अनुमति अस्वीकृत",

    shareText: "KeFo आज़माएँ",
    copied: "कॉपी हो गया",
    installHint: "ब्राउज़र से इंस्टॉल करें",

    afterHour: "1 घंटे बाद:",

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
