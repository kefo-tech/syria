const LANG = (navigator.language || "en").split("-")[0].toLowerCase();
export const APP_LANG = ["ar","en","de","tr","hi"].includes(LANG) ? LANG : "en";

const I18N = {
  ar: {
    title:"بوابة الخدمات",
    install:"تثبيت التطبيق",
    share:"مشاركة التطبيق",
    weatherCardTitle:"الطقس الآن",
    locationCardTitle:"موقعك الحالي",
    welcome:"أهلاً بك في:",
    locationSubline:"تحديد تلقائي حسب موقعك",
    servicesTitle:"الخدمات",
    osmNote:"تعتمد أسماء المناطق على دقة الموقع.",
    copyright:"© KeFo.tech 2026",
    weatherUpdating:"جاري التحديث",
    weatherUpdated:"تم التحديث",
    locationLocating:"جارٍ التحديد",
    locationDone:"تم التحديد",
    afterHour:"بعد ساعة:",
  },

  en: {
    title:"Services Portal",
    install:"Install App",
    share:"Share App",
    weatherCardTitle:"Weather Now",
    locationCardTitle:"Your Location",
    welcome:"Welcome to:",
    locationSubline:"Auto detected location",
    servicesTitle:"Services",
    osmNote:"Location names depend on accuracy.",
    copyright:"© KeFo.tech 2026",
    weatherUpdating:"Updating",
    weatherUpdated:"Updated",
    locationLocating:"Locating",
    locationDone:"Detected",
    afterHour:"In 1 hour:",
  },

  de: {
    title:"Serviceportal",
    install:"App installieren",
    share:"App teilen",
    weatherCardTitle:"Wetter",
    locationCardTitle:"Standort",
    welcome:"Willkommen in:",
    locationSubline:"Automatisch erkannt",
    servicesTitle:"Dienste",
    osmNote:"Ortsnamen abhängig von Genauigkeit.",
    copyright:"© KeFo.tech 2026",
    weatherUpdating:"Aktualisiert",
    weatherUpdated:"Fertig",
    locationLocating:"Suche",
    locationDone:"Gefunden",
    afterHour:"In 1 Stunde:",
  },

  tr: {
    title:"Hizmet Portalı",
    install:"Yükle",
    share:"Paylaş",
    weatherCardTitle:"Hava Durumu",
    locationCardTitle:"Konum",
    welcome:"Hoş geldiniz:",
    locationSubline:"Otomatik algılandı",
    servicesTitle:"Hizmetler",
    osmNote:"Konum doğruluğuna bağlıdır.",
    copyright:"© KeFo.tech 2026",
    weatherUpdating:"Güncelleniyor",
    weatherUpdated:"Güncel",
    locationLocating:"Bulunuyor",
    locationDone:"Bulundu",
    afterHour:"1 saat sonra:",
  },

  hi: {
    title:"सेवा पोर्टल",
    install:"इंस्टॉल",
    share:"शेयर",
    weatherCardTitle:"मौसम",
    locationCardTitle:"स्थान",
    welcome:"आप यहाँ हैं:",
    locationSubline:"स्वचालित पहचान",
    servicesTitle:"सेवाएँ",
    osmNote:"स्थान सटीकता पर निर्भर।",
    copyright:"© KeFo.tech 2026",
    weatherUpdating:"अपडेट",
    weatherUpdated:"ताज़ा",
    locationLocating:"खोज",
    locationDone:"मिल गया",
    afterHour:"1 घंटे बाद:",
  }
};

export const T = I18N[APP_LANG];

export const SERVICES_TEXT = {
  ar: {
    qibla:"اتجاه القبلة",
    prayer:"أوقات الصلاة",
    posts:"إنشاء منشورات",
    map:"مساعد السائق",
    coming:"خدمة قادمة"
  },
  en: {
    qibla:"Qibla",
    prayer:"Prayer",
    posts:"Posts",
    map:"Driver Assistant",
    coming:"Coming Soon"
  },
  de: {
    qibla:"Qibla",
    prayer:"Gebet",
    posts:"Beiträge",
    map:"Fahrerhilfe",
    coming:"Demnächst"
  },
  tr: {
    qibla:"Kıble",
    prayer:"Namaz",
    posts:"Gönderi",
    map:"Sürücü",
    coming:"Yakında"
  },
  hi: {
    qibla:"क़िबला",
    prayer:"नमाज़",
    posts:"पोस्ट",
    map:"ड्राइवर",
    coming:"जल्द"
  }
};
