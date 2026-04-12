const DEFAULT_RADIUS_KM = 3;

const searchInput = document.getElementById("searchInput");
const storesGrid = document.getElementById("storesGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const locationStatus = document.getElementById("locationStatus");
const locateBtn = document.getElementById("locateBtn");

let userLocation = null;
let renderedStores = [];

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

  const textPool = [
    store.name,
    store.type,
    store.city,
    store.area,
    store.address,
    store.description,
    ...(store.keywords || [])
  ]
    .join(" ")
    .toLowerCase();

  return textPool.includes(q);
}

function createStoreCard(store) {
  const distanceText =
    typeof store.distance === "number"
      ? `${store.distance.toFixed(2)} كم`
      : "غير معروف";

  return `
    <article class="store-card">
      <img class="store-image" src="${store.cover}" alt="${store.name}" />
      <div class="store-card-body">
        <div class="store-top-row">
          <div>
            <h3 class="store-name">${store.name}</h3>
            <p class="store-meta">${store.city} - ${store.area}</p>
          </div>
          <span class="store-type">${store.type}</span>
        </div>

        <p class="store-desc">${store.description}</p>

        <div class="store-footer">
          <span class="distance-badge">يبعد: ${distanceText}</span>
          <a class="view-btn" href="store.html?id=${store.id}">عرض</a>
        </div>
      </div>
    </article>
  `;
}

function renderStores(stores) {
  renderedStores = stores;

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

function setFallbackLocation() {
  userLocation = {
    lat: 51.4556,
    lng: 7.0116
  };
  locationStatus.textContent = "تم استخدام موقع افتراضي لعرض النتائج القريبة";
  applyFilters();
}

function handleLocationSuccess(position) {
  userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  locationStatus.textContent = "تم تحديد موقعك وعرض الأعمال ضمن 3 كم";
  applyFilters();
}

function handleLocationError() {
  locationStatus.textContent = "تعذر تحديد موقعك، تم استخدام موقع افتراضي";
  setFallbackLocation();
}

function requestLocation() {
  locationStatus.textContent = "جارٍ تحديد موقعك...";
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
locateBtn.addEventListener("click", requestLocation);

requestLocation();
