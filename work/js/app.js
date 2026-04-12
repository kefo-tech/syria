const DEFAULT_RADIUS_KM = 3;

const searchInput = document.getElementById("searchInput");
const storesGrid = document.getElementById("storesGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const locationStatus = document.getElementById("locationStatus");
const welcomeText = document.getElementById("welcomeText");

/* حماية */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("dragstart", e => e.preventDefault());

document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (
    (e.ctrlKey && ["u", "c", "x", "s", "a"].includes(key)) ||
    e.key === "F12"
  ) {
    e.preventDefault();
  }
});

let userLocation = null;

function toRadians(deg) {
  return deg * (Math.PI / 180);
}

function calcDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function normalizeText(text) {
  return (text || "").toString().trim().toLowerCase();
}

function matchesSearch(store, query) {
  if (!query) return true;

  const q = normalizeText(query);

  const pool = [
    store.name,
    store.type,
    store.city,
    store.area,
    store.address,
    store.description,
    ...(store.keywords || [])
  ].join(" ").toLowerCase();

  return pool.includes(q);
}

function createStoreCard(store) {
  const distanceText =
    typeof store.distance === "number"
      ? `${store.distance.toFixed(2)} كم`
      : "غير معروف";

  return `
    <article class="store-card">
      <div class="store-card-image-wrap">
        <img class="store-card-image" src="${store.cover}" alt="${store.name}" />
        <span class="store-card-type">${store.type}</span>
      </div>

      <div class="store-card-body">
        <h3 class="store-card-title">${store.name}</h3>
        <p class="store-card-meta">${store.city} - ${store.area}</p>
        <p class="store-card-desc">${store.description}</p>

        <div class="store-card-footer">
          <span class="distance-pill">يبعد: ${distanceText}</span>
          <a class="view-store-btn" href="store.html?id=${store.id}">عرض المتجر</a>
        </div>
      </div>
    </article>
  `;
}

function renderStores(stores) {
  if (!stores.length) {
    storesGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    resultsCount.textContent = "0 نتيجة";
    return;
  }

  emptyState.classList.add("hidden");
  storesGrid.innerHTML = stores.map(createStoreCard).join("");
  resultsCount.textContent = `${stores.length} نتيجة`;
}

function applyFilters() {
  const query = searchInput.value.trim();

  let filtered = [...STORES];

  if (userLocation) {
    filtered = filtered
      .map(store => ({
        ...store,
        distance: calcDistanceKm(
          userLocation.lat,
          userLocation.lng,
          store.lat,
          store.lng
        )
      }))
      .filter(store => store.distance <= DEFAULT_RADIUS_KM)
      .sort((a, b) => a.distance - b.distance);
  } else {
    filtered = filtered.map(store => ({
      ...store,
      distance: null
    }));
  }

  filtered = filtered.filter(store => matchesSearch(store, query));

  renderStores(filtered);
}

async function updateWelcomeLocation(lat, lng) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=ar`
    );
    const data = await res.json();

    const areaName =
      data?.address?.suburb ||
      data?.address?.borough ||
      data?.address?.city_district ||
      data?.address?.neighbourhood ||
      data?.address?.quarter ||
      data?.address?.town ||
      data?.address?.city ||
      data?.address?.village ||
      "منطقتك";

    welcomeText.textContent = `أهلاً بك في: ${areaName}`;
  } catch (err) {
    welcomeText.textContent = "أهلاً بك في: منطقتك";
  }
}

function setFallbackLocation() {
  userLocation = {
    lat: 51.4556,
    lng: 7.0116
  };

  locationStatus.textContent = "تعذر تحديد موقعك، تم استخدام موقع افتراضي";
  welcomeText.textContent = "أهلاً بك في: Essen";
  applyFilters();
}

async function handleLocationSuccess(position) {
  userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  locationStatus.textContent = "تم تحديد موقعك بنجاح";
  await updateWelcomeLocation(userLocation.lat, userLocation.lng);
  applyFilters();
}

function handleLocationError() {
  setFallbackLocation();
}

function requestLocation() {
  locationStatus.textContent = "جارٍ تحديد الموقع...";

  if (!navigator.geolocation) {
    handleLocationError();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    handleLocationSuccess,
    handleLocationError,
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

searchInput.addEventListener("input", applyFilters);

requestLocation();
