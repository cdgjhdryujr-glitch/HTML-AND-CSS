// filepath: /glt-maps-integration/glt-maps-integration/src/utils/api.js

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

async function fetchFromGoogleMaps(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data from Google Maps API:', error);
        throw error;
    }
}

export async function getGeocode(address) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`;
    return await fetchFromGoogleMaps(url);
}

export async function getPlaceDetails(placeId) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`;
    return await fetchFromGoogleMaps(url);
}

export async function getDistanceMatrix(origins, destinations) {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origins)}&destinations=${encodeURIComponent(destinations)}&key=${API_KEY}`;
    return await fetchFromGoogleMaps(url);
}