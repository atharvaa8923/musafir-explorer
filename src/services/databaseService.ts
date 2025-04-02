
import { LocalStorageDatabase } from './localStorageDatabase';
import { DatabaseService } from './types';
import { destinations } from '@/data/destinations';
import { additionalDestinations } from '@/data/additionalDestinations';

// Merge destinations
const allDestinations = [...destinations, ...additionalDestinations];

// Create and export a singleton instance
const databaseService: DatabaseService = new LocalStorageDatabase(allDestinations);
export default databaseService;
