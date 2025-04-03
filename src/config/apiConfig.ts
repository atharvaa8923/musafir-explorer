
// API Configuration
export const API_KEYS = {
  DESTINATION_API: import.meta.env.VITE_DESTINATION_API_KEY || 'demo-api-key-for-development',
  WEATHER_API: import.meta.env.VITE_WEATHER_API_KEY || 'demo-weather-api-key',
  MAPS_API: import.meta.env.VITE_MAPS_API_KEY || 'demo-maps-api-key'
};

// API Endpoints
export const API_ENDPOINTS = {
  DESTINATIONS: 'https://api.musafir-travel.example.com/v1/destinations',
  WEATHER: 'https://api.openweathermap.org/data/2.5',
  MAPS: 'https://api.mapbox.com/geocoding/v5/mapbox.places'
};

// API Configuration Settings
export const API_CONFIG = {
  CACHE_DURATION: 30 * 60 * 1000, // 30 minutes in milliseconds
  RETRY_ATTEMPTS: 3,
  TIMEOUT: 10000 // 10 seconds
};
