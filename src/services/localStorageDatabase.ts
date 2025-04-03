
import { destinations } from "@/data";
import { toast } from "@/components/ui/use-toast";
import { DatabaseService, Destination, Destinations, SearchFilters, BlogPost } from './types';
import { getFromStorage, saveToStorage } from './storageUtils';
import { SubscriberService } from './subscriberService';
import { AuthService } from './authService';
import { SearchService } from './searchService';

export class LocalStorageDatabase implements DatabaseService {
  private storageKey = "musafir-destinations";
  private blogStorageKey = "musafir-blogs";
  private subscribers = new SubscriberService<Destination | Destinations>();
  private authService = new AuthService();
  private searchService = new SearchService();
  private lastFetch: number = 0;
  private cacheExpiryMs: number = 30000; // 30 seconds cache expiry

  constructor(initialData: Destinations = destinations) {
    // Initialize local storage with sample data if it doesn't exist
    if (!localStorage.getItem(this.storageKey)) {
      saveToStorage(this.storageKey, initialData);
    }
    
    // Initialize blog storage if it doesn't exist
    if (!localStorage.getItem(this.blogStorageKey)) {
      // Sample blog data
      const sampleBlogs: BlogPost[] = [
        {
          id: "blog-1",
          title: "Top 10 Budget Tips for Solo Travelers in India",
          summary: "Essential budget-saving tips for solo travelers exploring India on a tight budget.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum quam...",
          author: "Raj Sharma",
          date: "2023-08-15",
          image: "/placeholder.svg",
          category: "tips",
          tags: ["budget", "solo travel", "india"]
        },
        {
          id: "blog-2",
          title: "A Complete Guide to Backpacking in the Himalayas",
          summary: "Everything you need to know before embarking on a Himalayan adventure.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum quam...",
          author: "Meera Patel",
          date: "2023-07-22",
          image: "/placeholder.svg",
          category: "guides",
          tags: ["himalayas", "trekking", "backpacking"]
        }
      ];
      saveToStorage(this.blogStorageKey, sampleBlogs);
    }
    
    // Add event listener for storage changes from other tabs
    window.addEventListener('storage', this.handleStorageChange);
  }

  private handleStorageChange = (event: StorageEvent) => {
    if (event.key === this.storageKey && event.newValue) {
      try {
        const newData = JSON.parse(event.newValue) as Destinations;
        this.subscribers.notify('all', newData);
        
        // Also notify individual destination subscribers
        newData.forEach((dest: Destination) => {
          this.subscribers.notify(dest.id, dest);
        });
      } catch (error) {
        console.error('Error processing storage event:', error);
      }
    }
  }

  private getLocalData(): Destinations {
    return getFromStorage<Destinations>(this.storageKey, destinations);
  }

  private saveLocalData(data: Destinations): boolean {
    const success = saveToStorage(this.storageKey, data);
    if (success) {
      this.subscribers.notify('all', data);
    }
    return success;
  }

  async getDestinations(): Promise<Destinations> {
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

  async getDestinationById(id: string): Promise<Destination | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const allDestinations = this.getLocalData();
    return allDestinations.find(dest => dest.id === id);
  }

  async searchDestinations(filters: SearchFilters): Promise<Destinations> {
    await new Promise(resolve => setTimeout(resolve, 400));
    const allDestinations = this.getLocalData();
    return this.searchService.searchDestinations(allDestinations, filters);
  }

  async addDestination(destination: any): Promise<boolean> {
    if (!await this.authService.isAdmin()) return false;
    
    try {
      const allDestinations = this.getLocalData();
      const newDestination = {
        ...destination,
        id: destination.id || `destination-${Date.now()}`,
      };
      
      allDestinations.push(newDestination);
      const success = this.saveLocalData(allDestinations);
      
      if (success) {
        this.subscribers.notify(newDestination.id, newDestination);
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

  async updateDestination(id: string, data: any): Promise<boolean> {
    if (!await this.authService.isAdmin()) return false;
    
    try {
      const allDestinations = this.getLocalData();
      const index = allDestinations.findIndex(dest => dest.id === id);
      
      if (index === -1) return false;
      
      allDestinations[index] = { ...allDestinations[index], ...data };
      const success = this.saveLocalData(allDestinations);
      
      if (success) {
        this.subscribers.notify(id, allDestinations[index]);
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

  async deleteDestination(id: string): Promise<boolean> {
    if (!await this.authService.isAdmin()) return false;
    
    try {
      const allDestinations = this.getLocalData();
      const filteredDestinations = allDestinations.filter(dest => dest.id !== id);
      
      if (filteredDestinations.length === allDestinations.length) return false;
      
      const success = this.saveLocalData(filteredDestinations);
      
      if (success) {
        this.subscribers.notify(id, undefined);
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

  isAdmin(): Promise<boolean> {
    return this.authService.isAdmin();
  }

  login(username: string, password: string): Promise<boolean> {
    return this.authService.login(username, password);
  }

  logout(): Promise<void> {
    return this.authService.logout();
  }

  // Subscribe to all destinations changes
  subscribeToDestinations(callback: (destinations: Destinations) => void): () => void {
    return this.subscribers.subscribe('all', callback);
  }

  // Subscribe to a specific destination changes
  subscribeToDestination(id: string, callback: (destination: Destination | undefined) => void): () => void {
    return this.subscribers.subscribe(id, callback);
  }

  // New blog-related methods
  async getBlogs(): Promise<BlogPost[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return getFromStorage<BlogPost[]>(this.blogStorageKey, []);
  }

  async getBlogById(id: string): Promise<BlogPost | undefined> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    const blogs = getFromStorage<BlogPost[]>(this.blogStorageKey, []);
    return blogs.find(blog => blog.id === id);
  }
}
