
// Import all destination data
import { trekDestinations } from './trekking-destinations';
import { hikingDestinations } from './hiking-destinations';
import { meditationDestinations } from './meditation-destinations';
import { raftingDestinations } from './rafting-destinations';
import { religiousDestinations } from './religious-destinations';
import { newDestinations } from './new-destinations';
import { Destinations } from './types';

// Combine all destinations
export const destinations: Destinations = [
  ...trekDestinations,
  ...hikingDestinations,
  ...meditationDestinations,
  ...raftingDestinations,
  ...religiousDestinations,
  ...newDestinations
];

// Export individual categories for direct access
export {
  trekDestinations,
  hikingDestinations,
  meditationDestinations,
  raftingDestinations,
  religiousDestinations,
  newDestinations
};

// Functions to get destinations by category
export const getDestinationsByCategory = (category: string): Destinations => {
  return destinations.filter(destination => destination.category === category);
};

// Functions to get destinations by price range
export const getDestinationsByPriceRange = (min: number, max: number): Destinations => {
  return destinations.filter(destination => destination.price >= min && destination.price <= max);
};

// Functions to get destinations by duration range
export const getDestinationsByDurationRange = (min: number, max: number): Destinations => {
  return destinations.filter(destination => destination.days >= min && destination.days <= max);
};

// Functions to get destinations by location
export const getDestinationsByLocation = (location: string): Destinations => {
  return destinations.filter(destination => 
    destination.location.toLowerCase().includes(location.toLowerCase())
  );
};

// Function to get a specific destination by ID
export const getDestinationById = (id: string) => {
  return destinations.find(destination => destination.id === id);
};

// Get featured destinations (can modify logic as needed)
export const getFeaturedDestinations = (count: number = 4): Destinations => {
  return destinations.slice(0, count);
};

// Get trending destinations (can modify logic as needed)
export const getTrendingDestinations = (count: number = 4): Destinations => {
  return [...destinations].sort(() => 0.5 - Math.random()).slice(0, count);
};

// Get budget-friendly destinations
export const getBudgetDestinations = (maxPrice: number = 3000, count: number = 4): Destinations => {
  return destinations
    .filter(destination => destination.price <= maxPrice)
    .sort((a, b) => a.price - b.price)
    .slice(0, count);
};

// Get quick getaway destinations (short duration trips)
export const getQuickGetaways = (maxDays: number = 3, count: number = 4): Destinations => {
  return destinations
    .filter(destination => destination.days <= maxDays)
    .sort((a, b) => a.days - b.days)
    .slice(0, count);
};
