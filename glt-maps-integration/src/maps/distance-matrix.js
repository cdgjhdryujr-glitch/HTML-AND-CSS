// distance-matrix.js - small promise wrapper around google.maps.DistanceMatrixService
function calculateDistanceMatrix(originCoords, destCoords) {
  return new Promise((resolve, reject) => {
    if (!window.google || !google.maps) return reject(new Error('Maps not loaded'));
    if (!originCoords || !destCoords) return reject(new Error('Missing origin/destination'));

    const service = new google.maps.DistanceMatrixService();
    const origins = [new google.maps.LatLng(originCoords.lat, originCoords.lng)];
    const destinations = [new google.maps.LatLng(destCoords.lat, destCoords.lng)];

    service.getDistanceMatrix({
      origins,
      destinations,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, (response, status) => {
      if (status !== 'OK') return reject(new Error('DistanceMatrix failed: ' + status));
      try {
        const elem = response.rows[0].elements[0];
        if (elem.status !== 'OK') return reject(new Error('No route: ' + elem.status));
        resolve({
          distanceMeters: elem.distance.value,
          distanceText: elem.distance.text,
          durationSeconds: elem.duration.value,
          durationText: elem.duration.text
        });
      } catch (err) {
        reject(err);
      }
    });
  });
}