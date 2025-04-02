
import { LocalStorageDatabase } from './localStorageDatabase';
import { DatabaseService } from './types';
import { destinations } from '@/data/destinations';
import { additionalDestinations } from '@/data/additionalDestinations';
import { newDestinations } from '@/data/newDestinations';

// Merge all destinations
const allDestinations = [...destinations, ...additionalDestinations, ...newDestinations];

// Create and export a singleton instance
const databaseService: DatabaseService = new LocalStorageDatabase(allDestinations);
export default databaseService;
