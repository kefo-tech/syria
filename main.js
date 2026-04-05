import { T, APP_LANG } from "./lang.js";

const SERVICES = [
  { titleKey: "qibla", subKey: "qiblaSub", href: "./qibla/", icon: "qibla" },
  { titleKey: "prayer", subKey: "prayerSub", href: "./salah/", icon: "prayer" },
  { titleKey: "posts", subKey: "postsSub", href: "./post/", icon: "posts" },
  { titleKey: "map", subKey: "mapSub", href: "./map/", icon: "car" },
  { titleKey: "coming", subKey: "comingSub", href: "javascript:void(0)", icon: "globe" },
  { titleKey: "coming", subKey: "comingSub2", href: "javascript:void(0)", icon: "box" },
  { titleKey: "coming", subKey: "comingSub3", href: "javascript:void(0)", icon: "settings" },
  { titleKey: "coming", subKey: "comingSub", href: "javascript:void(0)", icon: "globe" },
  { titleKey: "coming", subKey: "comingSub2", href: "javascript:void(0)", icon: "box" },
  { titleKey: "coming", subKey: "comingSub3", href: "javascript:void(0)", icon: "settings" },
  { titleKey: "coming", subKey: "comingSub", href: "javascript:void(0)", icon: "globe" },
  { titleKey: "coming", subKey: "comingSub2", href: "javascript:void(0)", icon: "box" }
];

const EXTRA_TEXT = {
  ar: {
    qibla: "اتجاه القبلة",
    qiblaSub: "الانتقال إلى صفحة الخدمة",
    prayer: "أوقات الصلاة",
    prayerSub: "عرض أوقات الصلاة اليومية",
    posts: "إنشاء منشورات",
    postsSub: "إنشاء منشورات وخدمات تفاعلية",
    map: "مساعد السائق",
    mapSub: "خرائط وبلاغات الطرقات",
    coming: "خدمة قادمة",
    comingSub: "زر إضافي للخدمات",
    comingSub2: "مساحة لخدمة جديدة",
    comingSub3: "يمكن ربطها بأي صفحة"
  },
  en: {
    qibla: "Qibla Direction",
    qiblaSub: "Open the service page",
    prayer: "Prayer Times",
    prayerSub: "Show daily prayer times",
    posts: "Create Posts",
    postsSub: "Create posts and interactive services",
    map: "Driver Assistant",
    mapSub: "Road maps and reports",
    coming: "Coming Soon",
    comingSub: "Extra service button",
    comingSub2: "Space for a new service",
    comingSub3: "Can link to any page"
  },
  de: {
    qibla: "Qibla-Richtung",
    qiblaSub: "Dienstseite öffnen",
    prayer: "Gebetszeiten",
    prayerSub: "Tägliche Gebetszeiten anzeigen",
    posts: "Beiträge erstellen",
    postsSub: "Beiträge und interaktive Dienste",
    map: "Fahrerassistent",
    mapSub: "Karten und Straßenmeldungen",
    coming: "Demnächst",
    comingSub: "Zusätzliche Diensttaste",
    comingSub2: "Platz für neuen Dienst",
    comingSub3: "Kann auf jede Seite verlinken"
  },
  tr: {
    qibla: "Kıble Yönü",
    qiblaSub: "Hizmet sayfasını aç",
    prayer: "Namaz Vakitleri",
    prayerSub: "Günlük namaz vakitlerini göster",
    posts: "Gönderi Oluştur",
    postsSub: "Gönderiler ve etkileşimli hizmetler",
    map: "Sürücü Asistanı",
    mapSub: "Harita ve yol bildirimleri",
    coming: "Yakında",
    comingSub: "Ek hizmet düğmesi",
    comingSub2: "Yeni hizmet alanı",
    comingSub3: "Her sayfaya bağlanabilir"
  },
  hi: {
    qibla: "क़िबला दिशा",
    qiblaSub: "सेवा पृष्ठ खोलें",
    prayer: "नमाज़ समय",
    prayerSub: "दैनिक नमाज़ समय दिखाएँ",
    posts: "पोस्ट बनाएँ",
    postsSub: "पोस्ट और इंटरैक्टिव सेवाएँ",
    map: "ड्राइवर सहायक",
    mapSub: "मैप और सड़क रिपोर्ट",
    coming: "जल्द आ रहा है",
    comingSub: "अतिरिक्त सेवा बटन",
    comingSub2: "नई सेवा के लिए स्थान",
    comingSub3: "किसी भी पृष्ठ से जोड़ा जा सकता है"
  }
};

const TT = EXTRA_TEXT[APP_LANG] || EXTRA_TEXT.en;

const weatherContent = document.getElementById("weatherContent");
const weatherBadge = document.getElementById("weatherBadge");
const areaName = document.getElementById("areaName");
const locationBadge = document.getElementById("locationBadge");
const shareBtn = document.getElementById("shareBtn");
const installBtn = document.getElementById("installBtn");
const weatherScene = document.getElementById("weatherScene");

let deferredPrompt = null;

init();

function init() {
  applyTranslations();
  buildServices();
  registerServiceWorker();
  setupInstallPrompt();
  setupShare();
  setupBottomActions();
  setupProtection();

  if (!navigator.geolocation) {
    showLocationError(T.geolocationNotSupported);
    showWeatherError(T.geolocationNotSupported);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      await Promise.all([
        loadWeather(lat, lon),
        loadAreaName(lat, lon)
      ]);
    },
    () => {
      showLocationError(T.geolocationDenied);
      showWeatherError(T.geolocationDenied);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

function applyTranslations() {
  document.documentElement.lang = APP_LANG;
  document.documentElement.dir = APP_LANG === "ar" ? "rtl" : "ltr";
  document.title = T.title;

  installBtn.textContent = T.install;
  shareBtn.textContent = T.share;

  document.getElementById("weatherCardTitle").textContent = T.weatherCardTitle;
  document.getElementById("locationCardTitle").textContent = T.locationCardTitle;
  document.getElementById("welcomeText").textContent = T.welcome;
  document.getElementById("locationSubline").textContent = T.locationSubline;
  document.getElementById("servicesTitle").textContent = T.servicesTitle;
  document.getElementById("osmNote").textContent = T.osmNote;
  document.getElementById("copyrightText").textContent = T.copyright;

  weatherBadge.textContent = T.weatherUpdating;
  locationBadge.textContent = T.locationLocating;
  weatherContent.textContent = T.weatherLoading;
  areaName.textContent = T.areaLoading;
}

function buildServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map(service => `
    <a class="service-btn" href="${service.href}">
      <div class="service-icon">${getServiceIcon(service.icon)}</div>
      <div class="service-title">${TT[service.titleKey] || TT.coming}</div>
      <div class="service-sub">${TT[service.subKey] || TT.comingSub}</div>
    </a>
  `).join("");
}

function getServiceIcon(type) {
  const icons = {
    qibla: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8"></circle>
        <path d="M12 4v3"></path>
        <path d="M20 12h-3"></path>
        <path d="M12 20v-3"></path>
        <path d="M4 12h3"></path>
        <path d="M10 14l5-5"></path>
        <path d="M15 9l-1 4-4 1 1-4 4-1z"></path>
      </svg>
    `,
    prayer: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20h14"></path>
        <path d="M7 20v-6a5 5 0 0 1 10 0v6"></path>
        <path d="M12 5a3 3 0 1 0 0 6"></path>
        <path d="M16 7a4 4 0 0 1-4-4"></path>
      </svg>
    `,
    posts: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16"></path>
        <path d="M7 16V5h10v11"></path>
        <path d="M9 8h6"></path>
        <path d="M9 11h6"></path>
        <path d="M9 14h4"></path>
      </svg>
    `,
    globe: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18"></path>
        <path d="M12 3a14 14 0 0 1 0 18"></path>
        <path d="M12 3a14 14 0 0 0 0 18"></path>
      </svg>
    `,
    box: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8l8-4 8 4-8 4-8-4z"></path>
        <path d="M4 8v8l8 4 8-4V8"></path>
        <path d="M12 12v8"></path>
      </svg>
    `,
    settings: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2"></circle>
        <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z"></path>
      </svg>
    `,
    car: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 16l1.2-4.2A2 2 0 0 1 8.1 10h7.8a2 2 0 0 1 1.9 1.8L19 16"></path>
        <path d="M4 16h16"></path>
        <path d="M6 16v2"></path>
        <path d="M18 16v2"></path>
        <circle cx="7.5" cy="17.5" r="1.2"></circle>
        <circle cx="16.5" cy="17.5" r="1.2"></circle>
      </svg>
    `
  };

  return icons[type] || icons.globe;
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

function setupInstallPrompt() {
  const markInstalledUI = () => {
    installBtn.style.display = "none";
    const bottomInstallBtn = document.getElementById("bottomInstallBtn");
    if (bottomInstallBtn) bottomInstallBtn.style.display = "none";
  };

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  window.addEventListener("appinstalled", () => {
    markInstalledUI();
  });

  if (window.matchMedia("(display-mode: standalone)").matches) {
    markInstalledUI();
  }

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      return;
    }

    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isSafari = isIOS && /safari/.test(ua) && !/crios|fxios|edgios/.test(ua);

    if (isSafari) {
      alert("في Safari: اضغط زر المشاركة ثم اختر Add to Home Screen.");
    } else {
      alert(T.installHint);
    }
  };

  installBtn.addEventListener("click", handleInstall);

  const bottomInstallBtn = document.getElementById("bottomInstallBtn");
  if (bottomInstallBtn) {
    bottomInstallBtn.addEventListener("click", handleInstall);
  }
}

function setupShare() {
  shareBtn.addEventListener("click", async () => {
    const shareData = {
      title: T.title,
      text: T.shareText,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(T.copied);
      }
    } catch (_) {}
  });
}

function setupBottomActions() {
  const bottomShareBtn = document.getElementById("bottomShareBtn");
  const bottomHomeBtn = document.getElementById("bottomHomeBtn");
  const bottomTopBtn = document.getElementById("bottomTopBtn");

  if (bottomShareBtn) {
    bottomShareBtn.addEventListener("click", async () => {
      const shareData = {
        title: T.title,
        text: T.shareText,
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          alert(T.copied);
        }
      } catch (_) {}
    });
  }

  if (bottomHomeBtn) {
    bottomHomeBtn.addEventListener("click", () => {
      window.location.href = "/syria/";
    });
  }

  if (bottomTopBtn) {
    bottomTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function setupProtection() {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());
  document.addEventListener("selectstart", (e) => e.preventDefault());
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());

  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (e.key === "F12") {
      e.preventDefault();
      return false;
    }

    if (e.ctrlKey && key === "u") {
      e.preventDefault();
      return false;
    }

    if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
      e.preventDefault();
      return false;
    }
  });
}

async function loadWeather(lat, lon) {
  try {
    weatherBadge.textContent = T.weatherUpdating;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&hourly=weather_code&forecast_hours=3&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather fetch failed");

    const data = await res.json();
    const current = data.current;
    const temp = Math.round(current.temperature_2m);
    const isDay = Number(current.is_day) === 1;
    const currentInfo = getWeatherInfo(current.weather_code);

    const nextHourCode = data.hourly?.weather_code?.[1];
    const nextHourInfo = typeof nextHourCode !== "undefined"
      ? getWeatherInfo(nextHourCode)
      : null;

    const nextWeatherHTML = nextHourInfo ? `
      <div class="next-weather">
        <span class="next-weather-icon">${nextHourInfo.icon}</span>
        <span>${T.afterHour} ${nextHourInfo.text}</span>
      </div>
    ` : "";

    weatherContent.innerHTML = `
      <div class="weather-card-content">
        <div class="weather-main">
          <div class="weather-temp">${temp}°</div>
          <div class="weather-desc">${currentInfo.text}</div>
          ${nextWeatherHTML}
        </div>
        <div class="weather-side-icon">${currentInfo.icon}</div>
      </div>
    `;

    setWeatherScene(current.weather_code, isDay);
    weatherBadge.textContent = T.weatherUpdated;
  } catch (_) {
    showWeatherError(T.weatherError);
  }
}

function setWeatherScene(code, isDay) {
  weatherScene.className = "weather-scene";
  const periodClass = isDay ? "day" : "night";
  const sceneClass = getSceneClass(code, isDay);
  weatherScene.classList.add(periodClass, sceneClass);
}

function getSceneClass(code, isDay) {
  if ([95, 96, 99].includes(code)) return "scene-stormy";
  if ([45, 48].includes(code)) return "scene-foggy";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return isDay ? "scene-snowy" : "scene-night-snowy";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return isDay ? "scene-rainy" : "scene-night-rainy";
  if ([1, 2].includes(code)) return isDay ? "scene-partly-cloudy" : "scene-night-cloudy";
  if ([3].includes(code)) return isDay ? "scene-cloudy" : "scene-night-cloudy";
  return isDay ? "scene-sunny" : "scene-night-clear";
}

async function loadAreaName(lat, lon) {
  try {
    locationBadge.textContent = T.locationSearching;

    const requestLang = (navigator.language || "en").split("-")[0];
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=${encodeURIComponent(requestLang)}`;

    const res = await fetch(url, {
      headers: { "Accept": "application/json" }
    });

    if (!res.ok) throw new Error("nominatim fetch failed");

    const data = await res.json();
    const address = data.address || {};

    const bestArea =
      address.suburb ||
      address.neighbourhood ||
      address.neighborhood ||
      address.quarter ||
      address.city_district ||
      address.residential ||
      address.borough ||
      address.hamlet ||
      address.village ||
      address.town ||
      address.city ||
      T.areaCurrent;

    areaName.textContent = bestArea;
    locationBadge.textContent = T.locationDone;
  } catch (_) {
    showLocationError(T.locationError);
  }
}

function showWeatherError(message) {
  weatherBadge.textContent = T.weatherUnavailable;
  weatherContent.innerHTML = `<div class="error-text">${message}</div>`;
  weatherScene.className = "weather-scene day scene-cloudy";
}

function showLocationError(message) {
  locationBadge.textContent = T.weatherUnavailable;
  areaName.textContent = message;
}

function getWeatherInfo(code) {
  if (code === 0) return { text: T.clear, icon: "☀️" };
  if ([1, 2].includes(code)) return { text: T.partlyCloudy, icon: "⛅" };
  if (code === 3) return { text: T.cloudy, icon: "☁️" };
  if ([45, 48].includes(code)) return { text: T.fog, icon: "🌫️" };
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return { text: T.rain, icon: "🌧️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { text: T.snow, icon: "❄️" };
  if ([95, 96, 99].includes(code)) return { text: T.thunder, icon: "⛈️" };
  return { text: T.currentWeatherUnknown, icon: "🌍" };
}
