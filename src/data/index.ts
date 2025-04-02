
import { Destination, Destinations } from './types';
import { trekkingDestinations } from './trekking-destinations';
import { hikingDestinations } from './hiking-destinations';
import { raftingDestinations } from './rafting-destinations';
import { meditationDestinations } from './meditation-destinations';
import { religiousDestinations } from './religious-destinations';
import { newDestinations } from './new-destinations';

// Export all destination categories
export { trekkingDestinations } from './trekking-destinations';
export { hikingDestinations } from './hiking-destinations';
export { raftingDestinations } from './rafting-destinations';
export { meditationDestinations } from './meditation-destinations';
export { religiousDestinations } from './religious-destinations';
export { newDestinations } from './new-destinations';
export { Destination, Destinations } from './types';

// Combine all destinations into a single array
export const destinations: Destination[] = [
  ...trekkingDestinations,
  ...hikingDestinations,
  ...raftingDestinations,
  ...meditationDestinations,
  ...religiousDestinations,
  ...newDestinations
];

// Get destinations by category
export const getDestinationsByCategory = (category: string): Destination[] => {
  switch (category) {
    case 'trekking':
      return trekkingDestinations;
    case 'hiking':
      return hikingDestinations;
    case 'rafting':
      return raftingDestinations;
    case 'meditation':
      return meditationDestinations;
    case 'religious':
      return religiousDestinations;
    default:
      return destinations;
  }
};
