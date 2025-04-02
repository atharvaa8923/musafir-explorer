
import { LocalStorageDatabase } from './localStorageDatabase';
import { DatabaseService } from './types';
import { destinations } from '@/data/index';

// Create and export a singleton instance
const databaseService: DatabaseService = new LocalStorageDatabase(destinations);
export default databaseService;
