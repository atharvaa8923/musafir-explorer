
import { LocalStorageDatabase } from './localStorageDatabase';
import { DatabaseService } from './types';

// Create and export a singleton instance
const databaseService: DatabaseService = new LocalStorageDatabase();
export default databaseService;
