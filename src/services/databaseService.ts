
import { LocalStorageDatabase } from './localStorageDatabase';
import { DatabaseService } from './types';
import { destinations } from '@/data/index';
import destinationApiService from './destinationApiService';

// Create a database service that uses API for destinations but local storage for other operations
class EnhancedDatabaseService implements DatabaseService {
  private localDb: LocalStorageDatabase;
  
  constructor() {
    this.localDb = new LocalStorageDatabase(destinations);
  }
  
  // Use API service for destination operations
  async getDestinations() {
    try {
      return await destinationApiService.fetchDestinations();
    } catch (error) {
      console.error('API service failed, falling back to local database:', error);
      return this.localDb.getDestinations();
    }
  }
  
  async getDestinationById(id: string) {
    try {
      return await destinationApiService.fetchDestinationById(id);
    } catch (error) {
      console.error('API service failed, falling back to local database:', error);
      return this.localDb.getDestinationById(id);
    }
  }
  
  async searchDestinations(filters: any) {
    try {
      return await destinationApiService.searchDestinations(filters);
    } catch (error) {
      console.error('API service failed, falling back to local database:', error);
      return this.localDb.searchDestinations(filters);
    }
  }
  
  // Use local database for other operations
  async addDestination(destination: any) {
    return this.localDb.addDestination(destination);
  }
  
  async updateDestination(id: string, data: any) {
    return this.localDb.updateDestination(id, data);
  }
  
  async deleteDestination(id: string) {
    return this.localDb.deleteDestination(id);
  }
  
  isAdmin() {
    return this.localDb.isAdmin();
  }
  
  login(username: string, password: string) {
    return this.localDb.login(username, password);
  }
  
  logout() {
    return this.localDb.logout();
  }
  
  subscribeToDestinations(callback: (destinations: any) => void) {
    return this.localDb.subscribeToDestinations(callback);
  }
  
  subscribeToDestination(id: string, callback: (destination: any) => void) {
    return this.localDb.subscribeToDestination(id, callback);
  }
  
  // Blog methods
  async getBlogs() {
    return this.localDb.getBlogs();
  }
  
  async getBlogById(id: string) {
    return this.localDb.getBlogById(id);
  }
}

// Create and export a singleton instance
const databaseService: DatabaseService = new EnhancedDatabaseService();
export default databaseService;
