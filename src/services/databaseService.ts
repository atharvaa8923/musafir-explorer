
import { destinations } from "@/data/destinations";
import { toast } from "@/components/ui/use-toast";

// Extended database service with dynamic capabilities
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
  subscribeToDestinations: (callback: (destinations: typeof destinations) => void) => () => void;
  subscribeToDestination: (id: string, callback: (destination: typeof destinations[0] | undefined) => void) => () => void;
}

// Implementation using local storage for persistence with dynamic capabilities
class DynamicLocalStorageDatabase implements DatabaseService {
  private storageKey = "musafir-destinations";
  private adminKey = "musafir-admin";
  private adminCredentials = { username: "admin", password: "musafir123" };
  private subscribers: Map<string, Set<Function>> = new Map();
  private lastFetch: number = 0;
  private cacheExpiryMs: number = 30000; // 30 seconds cache expiry

  constructor() {
    // Initialize local storage with sample data if it doesn't exist
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(destinations));
    }
    
    // Add event listener for storage changes from other tabs
    window.addEventListener('storage', this.handleStorageChange);
  }

  private handleStorageChange = (event: StorageEvent) => {
    if (event.key === this.storageKey && event.newValue) {
      try {
        const newData = JSON.parse(event.newValue);
        this.notifySubscribers('all', newData);
        
        // Also notify individual destination subscribers
        newData.forEach((dest: any) => {
          this.notifySubscribers(dest.id, dest);
        });
      } catch (error) {
        console.error('Error processing storage event:', error);
      }
    }
  }

  private notifySubscribers(key: string, data: any) {
    const keySubscribers = this.subscribers.get(key);
    if (keySubscribers) {
      keySubscribers.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in subscriber callback for ${key}:`, error);
        }
      });
    }
  }

  private getLocalData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : destinations;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      toast({
        variant: "destructive",
        title: "Data Error",
        description: "Failed to read destination data. Using default data instead.",
      });
      return destinations;
    }
  }

  private saveLocalData(data: any) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      this.notifySubscribers('all', data);
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      toast({
        variant: "destructive",
        title: "Save Error",
        description: "Failed to save data. Please try again.",
      });
      return false;
    }
  }

  async getDestinations() {
    // Simulate network delay and add cache validation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check if we need to invalidate cache
    const now = Date.now();
    if (now - this.lastFetch > this.cacheExpiryMs) {
      // This would be where we'd fetch from a real API in a production app
      this.lastFetch = now;
    }
    
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
        dest.location.toLowerCase().includes(filters.location.toLowerCase())
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
    
    try {
      const allDestinations = this.getLocalData();
      const newDestination = {
        ...destination,
        id: destination.id || `destination-${Date.now()}`,
      };
      
      allDestinations.push(newDestination);
      const success = this.saveLocalData(allDestinations);
      
      if (success) {
        this.notifySubscribers(newDestination.id, newDestination);
      }
      
      return success;
    } catch (error) {
      console.error('Error adding destination:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add destination.",
      });
      return false;
    }
  }

  async updateDestination(id: string, data: any) {
    if (!await this.isAdmin()) return false;
    
    try {
      const allDestinations = this.getLocalData();
      const index = allDestinations.findIndex(dest => dest.id === id);
      
      if (index === -1) return false;
      
      allDestinations[index] = { ...allDestinations[index], ...data };
      const success = this.saveLocalData(allDestinations);
      
      if (success) {
        this.notifySubscribers(id, allDestinations[index]);
      }
      
      return success;
    } catch (error) {
      console.error('Error updating destination:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update destination.",
      });
      return false;
    }
  }

  async deleteDestination(id: string) {
    if (!await this.isAdmin()) return false;
    
    try {
      const allDestinations = this.getLocalData();
      const filteredDestinations = allDestinations.filter(dest => dest.id !== id);
      
      if (filteredDestinations.length === allDestinations.length) return false;
      
      const success = this.saveLocalData(filteredDestinations);
      
      if (success) {
        this.notifySubscribers(id, undefined);
      }
      
      return success;
    } catch (error) {
      console.error('Error deleting destination:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete destination.",
      });
      return false;
    }
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

  // Subscribe to all destinations changes
  subscribeToDestinations(callback: (destinations: typeof destinations) => void) {
    if (!this.subscribers.has('all')) {
      this.subscribers.set('all', new Set());
    }
    
    const subscribers = this.subscribers.get('all')!;
    subscribers.add(callback);
    
    // Return unsubscribe function
    return () => {
      subscribers.delete(callback);
      if (subscribers.size === 0) {
        this.subscribers.delete('all');
      }
    };
  }

  // Subscribe to a specific destination changes
  subscribeToDestination(id: string, callback: (destination: typeof destinations[0] | undefined) => void) {
    if (!this.subscribers.has(id)) {
      this.subscribers.set(id, new Set());
    }
    
    const subscribers = this.subscribers.get(id)!;
    subscribers.add(callback);
    
    // Return unsubscribe function
    return () => {
      subscribers.delete(callback);
      if (subscribers.size === 0) {
        this.subscribers.delete(id);
      }
    };
  }
}

// Create and export a singleton instance
const databaseService = new DynamicLocalStorageDatabase();
export default databaseService;
