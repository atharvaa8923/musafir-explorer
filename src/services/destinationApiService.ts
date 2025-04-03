
import { Destination, Destinations, SearchFilters } from './types';
import { API_ENDPOINTS, API_KEYS } from '@/config/apiConfig';

// API configuration
const API_ENDPOINT = API_ENDPOINTS.DESTINATIONS;
const API_KEY = API_KEYS.DESTINATION_API;

export class DestinationApiService {
  // Fetch all destinations
  async fetchDestinations(): Promise<Destinations> {
    try {
      const response = await fetch(`${API_ENDPOINT}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.destinations;
    } catch (error) {
      console.error('Error fetching destinations from API:', error);
      // Fallback to local data in case API fails
      const { destinations } = await import('@/data');
      return destinations;
    }
  }
  
  // Fetch a specific destination by ID
  async fetchDestinationById(id: string): Promise<Destination | undefined> {
    try {
      const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.destination;
    } catch (error) {
      console.error(`Error fetching destination ${id} from API:`, error);
      // Fallback to local data in case API fails
      const { destinations } = await import('@/data');
      return destinations.find(d => d.id === id);
    }
  }
  
  // Search destinations with filters
  async searchDestinations(filters: SearchFilters): Promise<Destinations> {
    try {
      const queryParams = new URLSearchParams();
      
      // Add filter parameters
      if (filters.searchQuery) queryParams.append('query', filters.searchQuery);
      if (filters.location) queryParams.append('location', filters.location);
      if (filters.budget && filters.budget.length === 2) {
        queryParams.append('minPrice', filters.budget[0].toString());
        queryParams.append('maxPrice', filters.budget[1].toString());
      }
      if (filters.days && filters.days.length === 2) {
        queryParams.append('minDays', filters.days[0].toString());
        queryParams.append('maxDays', filters.days[1].toString());
      }
      if (filters.categories && filters.categories.length > 0) {
        filters.categories.forEach(category => 
          queryParams.append('categories', category)
        );
      }
      
      const response = await fetch(`${API_ENDPOINT}/search?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.destinations;
    } catch (error) {
      console.error('Error searching destinations from API:', error);
      // Fallback to local filtering in case API fails
      const { destinations } = await import('@/data');
      const { SearchService } = await import('./searchService');
      const searchService = new SearchService();
      return searchService.searchDestinations(destinations, filters);
    }
  }
}

// Create and export a singleton instance
const destinationApiService = new DestinationApiService();
export default destinationApiService;
