
import { Destination, Destinations, SearchFilters } from './types';

export class SearchService {
  searchDestinations(destinations: Destinations, filters: SearchFilters): Destinations {
    let filteredDestinations = [...destinations];

    // Apply search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filteredDestinations = filteredDestinations.filter(dest => 
        dest.title.toLowerCase().includes(query) || 
        dest.location.toLowerCase().includes(query) ||
        dest.description?.toLowerCase().includes(query)
      );
    }

    // Apply location filter
    if (filters.location && filters.location !== "") {
      filteredDestinations = filteredDestinations.filter(dest => 
        dest.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Apply budget filter
    if (filters.budget) {
      filteredDestinations = filteredDestinations.filter(dest => 
        dest.price >= filters.budget![0] && dest.price <= filters.budget![1]
      );
    }

    // Apply days filter
    if (filters.days) {
      filteredDestinations = filteredDestinations.filter(dest => 
        dest.days >= filters.days![0] && dest.days <= filters.days![1]
      );
    }

    // Apply categories filter
    if (filters.categories && filters.categories.length > 0) {
      filteredDestinations = filteredDestinations.filter(dest => 
        filters.categories!.includes(dest.category)
      );
    }

    return filteredDestinations;
  }
}
