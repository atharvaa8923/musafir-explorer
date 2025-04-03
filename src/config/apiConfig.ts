
// API Configuration
export const API_KEYS = {
  DESTINATION_API: import.meta.env.VITE_DESTINATION_API_KEY || 'demo-api-key-for-development',
  WEATHER_API: import.meta.env.VITE_WEATHER_API_KEY || 'demo-weather-api-key',
  MAPS_API: import.meta.env.VITE_MAPS_API_KEY || 'demo-maps-api-key',
  TRANSPORTATION_API: import.meta.env.VITE_TRANSPORTATION_API_KEY || 'demo-transportation-api-key'
};

// API Endpoints
export const API_ENDPOINTS = {
  DESTINATIONS: 'https://api.musafir-travel.example.com/v1/destinations',
  WEATHER: 'https://api.openweathermap.org/data/2.5',
  MAPS: {
    GEOCODING: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    DIRECTIONS: 'https://api.mapbox.com/directions/v5/mapbox',
    STATIC: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static',
    TILES: 'https://api.mapbox.com/v4/mapbox.outdoors',
    OFFLINE: 'https://api.mapbox.com/downloads/v1'
  },
  TRANSPORTATION: {
    BUS: 'https://api.musafir-travel.example.com/v1/transportation/bus',
    TRAIN: 'https://api.musafir-travel.example.com/v1/transportation/train'
  }
};

// API Configuration Settings
export const API_CONFIG = {
  CACHE_DURATION: 30 * 60 * 1000, // 30 minutes in milliseconds
  RETRY_ATTEMPTS: 3,
  TIMEOUT: 10000 // 10 seconds
};
