// maps.js - single clean map init + helper functions (initMap is global for Google callback)
let map = null;
let markers = [];

function initMap() {
  const lagos = { lat: 6.5244, lng: 3.3792 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: lagos,
    zoom: 11,
    disableDefaultUI: true
  });
}

function addMarker(position, title) {
  if (!map || !position) return null;
  const marker = new google.maps.Marker({
    position,
    map,
    title: title || ''
  });
  markers.push(marker);
  return marker;
}

function clearMarkers() {
  markers.forEach(m => m.setMap(null));
  markers = [];
}

function fitMapToMarkers(padding = 60) {
  if (!map || markers.length === 0) return;
  const bounds = new google.maps.LatLngBounds();
  markers.forEach(m => bounds.extend(m.getPosition()));
  map.fitBounds(bounds, padding);
}