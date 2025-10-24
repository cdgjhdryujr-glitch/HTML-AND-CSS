// autocomplete.js - attaches Places Autocomplete to pickup/dropoff inputs and places markers
(function () {
  function attachAutocomplete(inputId, key) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const ac = new google.maps.places.Autocomplete(input, {
      fields: ['geometry', 'name', 'formatted_address'],
      componentRestrictions: { country: 'ng' }
    });

    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      window._placeCoords = window._placeCoords || {};
      if (!place.geometry || !place.geometry.location) {
        window._placeCoords[key] = null;
        return;
      }
      window._placeCoords[key] = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        name: place.name || place.formatted_address || input.value
      };

      // update preview markers
      clearMarkers();
      if (window._placeCoords.pickup) addMarker(window._placeCoords.pickup, 'Pickup');
      if (window._placeCoords.dropoff) addMarker(window._placeCoords.dropoff, 'Dropoff');
      fitMapToMarkers();
    });
  }

  function initAutocompleteWhenReady() {
    if (!window.google || !google.maps || !google.maps.places) {
      // retry shortly if maps lib not loaded yet
      setTimeout(initAutocompleteWhenReady, 200);
      return;
    }
    attachAutocomplete('pickup', 'pickup');
    attachAutocomplete('dropoff', 'dropoff');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAutocompleteWhenReady);
  } else {
    initAutocompleteWhenReady();
  }
})();