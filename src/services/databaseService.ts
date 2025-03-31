
import { destinations } from "@/data/destinations";

// Extended database service with admin capabilities
export interface DatabaseService {
  getDestinations: () => Promise<typeof destinations>;
  getDestinationById: (id: string) => Promise<typeof destinations[0] | undefined>;
  searchDestinations: (filters: any) => Promise<typeof destinations>;
  addDestination: (destination: any) => Promise<boolean>;
  updateDestination: (id: string, data: any) => Promise<boolean>;
  deleteDestination: (id: string) => Promise<boolean>;
  isAdmin: () => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

// Implementation using local storage for persistence
class LocalStorageDatabase implements DatabaseService {
  private storageKey = "musafir-destinations";
  private adminKey = "musafir-admin";
  private adminCredentials = { username: "admin", password: "musafir123" };

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

  private saveLocalData(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    return true;
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

  async addDestination(destination: any) {
    if (!await this.isAdmin()) return false;
    
    const allDestinations = this.getLocalData();
    const newDestination = {
      ...destination,
      id: destination.id || `destination-${Date.now()}`,
    };
    
    allDestinations.push(newDestination);
    return this.saveLocalData(allDestinations);
  }

  async updateDestination(id: string, data: any) {
    if (!await this.isAdmin()) return false;
    
    const allDestinations = this.getLocalData();
    const index = allDestinations.findIndex(dest => dest.id === id);
    
    if (index === -1) return false;
    
    allDestinations[index] = { ...allDestinations[index], ...data };
    return this.saveLocalData(allDestinations);
  }

  async deleteDestination(id: string) {
    if (!await this.isAdmin()) return false;
    
    const allDestinations = this.getLocalData();
    const filteredDestinations = allDestinations.filter(dest => dest.id !== id);
    
    if (filteredDestinations.length === allDestinations.length) return false;
    
    return this.saveLocalData(filteredDestinations);
  }

  async isAdmin() {
    return localStorage.getItem(this.adminKey) === 'true';
  }

  async login(username: string, password: string) {
    if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
      localStorage.setItem(this.adminKey, 'true');
      return true;
    }
    return false;
  }

  async logout() {
    localStorage.removeItem(this.adminKey);
  }
}

// Create and export a singleton instance
const databaseService = new LocalStorageDatabase();
export default databaseService;
