import { Destination, Destinations, SearchFilters } from './types';
import { API_ENDPOINTS, API_KEYS } from '@/config/apiConfig';
import transportationApiService from '@/services/transportationApiService';

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
      
      // Enhance destinations with transportation data
      const enhancedDestinations = await this.enhanceDestinationsWithTransportation(data.destinations);
      return enhancedDestinations;
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
      
      // Enhance destination with transportation data
      if (data.destination) {
        const enhancedDestination = await this.enhanceDestinationWithTransportation(data.destination);
        return enhancedDestination;
      }
      
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
      
      // Enhance destinations with transportation data
      const enhancedDestinations = await this.enhanceDestinationsWithTransportation(data.destinations);
      return enhancedDestinations;
    } catch (error) {
      console.error('Error searching destinations from API:', error);
      // Fallback to local filtering in case API fails
      const { destinations } = await import('@/data');
      const { SearchService } = await import('./searchService');
      const searchService = new SearchService();
      return searchService.searchDestinations(destinations, filters);
    }
  }
  
  // Helper method to enhance a destination with transportation data
  private async enhanceDestinationWithTransportation(destination: Destination): Promise<Destination> {
    try {
      // Only attempt to enhance if destination has a location
      if (!destination.location) return destination;
      
      // Get bus and train options from transportation API
      const busOptions = await transportationApiService.fetchBusOptions(destination.location);
      const trainOptions = await transportationApiService.fetchTrainOptions(destination.location);
      
      // Format to match existing transportation structure
      const formattedBusOptions = busOptions.map(opt => ({
        type: 'bus' as const,
        from: opt.from,
        price: opt.price,
        duration: opt.duration,
        schedule: opt.schedule,
        link: `https://booking.musafir-travel.example.com/bus/${opt.id}`
      }));
      
      const formattedTrainOptions = trainOptions.map(opt => ({
        type: 'train' as const,
        from: opt.from,
        price: opt.price,
        duration: opt.duration,
        schedule: opt.schedule,
        link: `https://booking.musafir-travel.example.com/train/${opt.id}`
      }));
      
      // Combine with existing transportation options or create new array
      let transportationOptions = destination.transportation || [];
      transportationOptions = [
        ...transportationOptions,
        ...formattedBusOptions,
        ...formattedTrainOptions
      ];
      
      // Remove duplicates (based on from+type)
      const uniqueTransportation = Array.from(
        new Map(transportationOptions.map(item => 
          [`${item.from}-${item.type}`, item]
        )).values()
      );
      
      // Return enhanced destination with updated transportation
      return {
        ...destination,
        transportation: uniqueTransportation
      };
    } catch (error) {
      console.error('Error enhancing destination with transportation data:', error);
      // Return original destination if enhancement fails
      return destination;
    }
  }
  
  // Helper method to enhance multiple destinations with transportation data
  private async enhanceDestinationsWithTransportation(destinations: Destinations): Promise<Destinations> {
    // For better performance, we'll enhance only the first 3 destinations with transportation data
    const enhancedDestinations = [...destinations];
    
    // Only enhance top 3 destinations to avoid too many API calls
    for (let i = 0; i < Math.min(3, enhancedDestinations.length); i++) {
      enhancedDestinations[i] = await this.enhanceDestinationWithTransportation(enhancedDestinations[i]);
    }
    
    return enhancedDestinations;
  }
}

// Create and export a singleton instance
const destinationApiService = new DestinationApiService();
export default destinationApiService;
