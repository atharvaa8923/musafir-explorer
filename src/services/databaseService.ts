
import { destinations } from "@/data/destinations";

// Mock database service with local storage persistence
export interface DatabaseService {
  getDestinations: () => Promise<typeof destinations>;
  getDestinationById: (id: string) => Promise<typeof destinations[0] | undefined>;
  searchDestinations: (filters: any) => Promise<typeof destinations>;
}

// Implementation using local storage for persistence
class LocalStorageDatabase implements DatabaseService {
  private storageKey = "musafir-destinations";

  constructor() {
    // Initialize local storage with sample data if it doesn't exist
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(destinations));
    }
  }

  private getLocalData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : destinations;
  }

  async getDestinations() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.getLocalData();
  }

  async getDestinationById(id: string) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const allDestinations = this.getLocalData();
    return allDestinations.find(dest => dest.id === id);
  }

  async searchDestinations(filters: any) {
    await new Promise(resolve => setTimeout(resolve, 400));
    let filteredDestinations = this.getLocalData();

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
        dest.location.includes(filters.location)
      );
    }

    // Apply budget filter
    if (filters.budget) {
      filteredDestinations = filteredDestinations.filter(dest => 
        dest.price >= filters.budget[0] && dest.price <= filters.budget[1]
      );
    }

    // Apply days filter
    if (filters.days) {
      filteredDestinations = filteredDestinations.filter(dest => 
        dest.days >= filters.days[0] && dest.days <= filters.days[1]
      );
    }

    // Apply categories filter
    if (filters.categories && filters.categories.length > 0) {
      filteredDestinations = filteredDestinations.filter(dest => 
        filters.categories.includes(dest.category)
      );
    }

    return filteredDestinations;
  }
}

// Create and export a singleton instance
const databaseService = new LocalStorageDatabase();
export default databaseService;
