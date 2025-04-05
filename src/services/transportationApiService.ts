
export interface TransportationOption {
  id: string;
  type: 'bus' | 'train' | 'jeep' | 'flight' | 'shared taxi' | 'shared sumo' | 'ferry' | 'local bus' | 'helicopter';
  from: string;
  to: string;
  price: number;
  duration: string;
  schedule: string;
  provider?: string;
  link?: string;
  amenities?: string[];
  rating?: number;
}

class TransportationApiService {
  // Simulated API endpoint for transportation options
  private async fetchFromAPI(destination: string): Promise<TransportationOption[]> {
    // In a real implementation, this would make an actual API call
    // For now, we'll return simulated data based on the destination
    console.log(`Fetching transportation options for ${destination}...`);
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return simulated data based on destination
    return this.getSimulatedTransportationOptions(destination);
  }
  
  /**
   * Get all transportation options for a specific destination
   */
  async getTransportationOptions(destination: string): Promise<TransportationOption[]> {
    try {
      return await this.fetchFromAPI(destination);
    } catch (error) {
      console.error('Error fetching transportation options:', error);
      return [];
    }
  }
  
  /**
   * Get transportation options filtered by type
   */
  async getTransportationOptionsByType(destination: string, type: string): Promise<TransportationOption[]> {
    try {
      const options = await this.fetchFromAPI(destination);
      return options.filter(option => option.type === type);
    } catch (error) {
      console.error('Error fetching transportation options by type:', error);
      return [];
    }
  }
  
  /**
   * Get transportation options below a certain price
   */
  async getBudgetTransportationOptions(destination: string, maxPrice: number): Promise<TransportationOption[]> {
    try {
      const options = await this.fetchFromAPI(destination);
      return options.filter(option => option.price <= maxPrice);
    } catch (error) {
      console.error('Error fetching budget transportation options:', error);
      return [];
    }
  }
  
  /**
   * Get the fastest transportation options for a destination
   */
  async getFastestTransportationOptions(destination: string, limit: number = 3): Promise<TransportationOption[]> {
    try {
      const options = await this.fetchFromAPI(destination);
      
      // Sort by duration (this is a simplified approach - in reality would need to parse duration strings)
      // For this simulation, we'll assume the pattern is always "X hours" or "X-Y hours"
      const sortedOptions = [...options].sort((a, b) => {
        const durationA = parseInt(a.duration.split('-')[0].split(' ')[0]);
        const durationB = parseInt(b.duration.split('-')[0].split(' ')[0]);
        return durationA - durationB;
      });
      
      return sortedOptions.slice(0, limit);
    } catch (error) {
      console.error('Error fetching fastest transportation options:', error);
      return [];
    }
  }
  
  // Simulated data generator based on destination
  private getSimulatedTransportationOptions(destination: string): TransportationOption[] {
    // Base options that are generally available
    const baseOptions: TransportationOption[] = [
      {
        id: 'bus-1',
        type: 'bus',
        from: 'New Delhi',
        to: destination,
        price: 800,
        duration: '8-10 hours',
        schedule: 'Daily, 9:00 PM departure',
        provider: 'State Transport',
        link: 'https://statebustransport.com',
        amenities: ['Reclining seats', 'Charging points'],
        rating: 4.1
      },
      {
        id: 'train-1',
        type: 'train',
        from: 'New Delhi',
        to: destination,
        price: 1200,
        duration: '6-7 hours',
        schedule: 'Daily, multiple trains',
        provider: 'Indian Railways',
        link: 'https://www.irctc.co.in',
        amenities: ['Sleeper class', 'Food service'],
        rating: 4.3
      }
    ];
    
    // Additional options based on destination type/region
    let additionalOptions: TransportationOption[] = [];
    
    // Options for hill stations and mountain regions
    if (destination.includes('Himachal') || destination.includes('Uttarakhand') || 
        destination.includes('Sikkim') || destination.includes('Kashmir')) {
      additionalOptions.push(
        {
          id: 'shared-taxi-1',
          type: 'shared taxi',
          from: 'Nearest major city',
          to: destination,
          price: 600,
          duration: '3-4 hours',
          schedule: 'Departures between 6:00 AM - 2:00 PM',
          provider: 'Local operators',
          link: 'https://localtaxis.com',
          rating: 3.9
        },
        {
          id: 'jeep-1',
          type: 'jeep',
          from: 'Regional transport hub',
          to: destination,
          price: 800,
          duration: '2-3 hours',
          schedule: 'Morning departures, weather dependent',
          provider: 'Mountain Safari Services',
          link: 'https://mountainsafari.com',
          amenities: ['Off-road capability', '4x4 drive'],
          rating: 4.5
        },
        {
          id: 'helicopter-1',
          type: 'helicopter',
          from: 'Nearest major airport',
          to: destination,
          price: 4500,
          duration: '30-45 minutes',
          schedule: 'Daily, weather permitting, advance booking required',
          provider: 'Himalayan Heli Services',
          link: 'https://himalayanheli.com',
          amenities: ['Panoramic views', 'Luggage allowance: 15kg'],
          rating: 4.8
        }
      );
    }
    
    // Options for coastal destinations
    if (destination.includes('Goa') || destination.includes('Kerala') || 
        destination.includes('Andaman') || destination.includes('Mumbai')) {
      additionalOptions.push(
        {
          id: 'ferry-1',
          type: 'ferry',
          from: 'Nearest port city',
          to: destination,
          price: 500,
          duration: '1-3 hours',
          schedule: 'Multiple daily departures',
          provider: 'Coastal Ferries Ltd',
          link: 'https://coastalferries.com',
          amenities: ['Open deck', 'Refreshments available'],
          rating: 4.2
        },
        {
          id: 'flight-1',
          type: 'flight',
          from: 'New Delhi',
          to: destination,
          price: 3500,
          duration: '2-3 hours',
          schedule: 'Daily flights',
          provider: 'Major airlines',
          link: 'https://airlines.com',
          amenities: ['Checked baggage allowance', 'In-flight meals'],
          rating: 4.4
        }
      );
    }
    
    // Options for religious destinations
    if (destination.includes('Varanasi') || destination.includes('Rishikesh') || 
        destination.includes('Haridwar') || destination.includes('Pushkar') ||
        destination.includes('Ujjain') || destination.includes('Dwarka') ||
        destination.includes('Rameshwaram') || destination.includes('Kashi') ||
        destination.includes('Mathura') || destination.includes('Ayodhya') ||
        destination.includes('Somnath') || destination.includes('Puri')) {
      additionalOptions.push(
        {
          id: 'pilgrimage-bus-1',
          type: 'bus',
          from: 'Delhi/Mumbai',
          to: destination,
          price: 850,
          duration: '10-12 hours',
          schedule: 'Special pilgrimage buses during festivals',
          provider: 'Spiritual Journey Tours',
          link: 'https://spiritualjourneys.com',
          amenities: ['Onboard priest', 'Vegetarian meals', 'Prayer facilities'],
          rating: 4.6
        },
        {
          id: 'pilgrimage-train-1',
          type: 'train',
          from: 'Multiple cities',
          to: destination,
          price: 1100,
          duration: '8-14 hours',
          schedule: 'Special trains during major festivals',
          provider: 'Indian Railways - Pilgrim Special',
          link: 'https://www.irctc.co.in/pilgrim',
          amenities: ['Sleeper class', 'Vegetarian meals', 'Group booking'],
          rating: 4.2
        }
      );
    }
    
    // Remote area options
    if (destination.includes('Northeast') || destination.includes('Ladakh') || 
        destination.includes('Spiti') || destination.includes('Tawang')) {
      additionalOptions.push(
        {
          id: 'shared-sumo-1',
          type: 'shared sumo',
          from: 'Regional hub',
          to: destination,
          price: 700,
          duration: '6-8 hours',
          schedule: 'Morning departures, fills up based on demand',
          provider: 'Local operators',
          link: 'https://northeast-travel.com',
          amenities: ['Rugged vehicle', 'Experienced drivers for mountain terrain'],
          rating: 4.0
        },
        {
          id: 'local-bus-1',
          type: 'local bus',
          from: 'District headquarters',
          to: destination,
          price: 300,
          duration: '5-7 hours',
          schedule: 'Limited schedule, 2-3 times weekly',
          provider: 'State Road Transport',
          link: 'https://statebus.com',
          rating: 3.5
        }
      );
    }
    
    // Add some variety with different prices and timings
    const variants = this.generatePriceVariants([...baseOptions, ...additionalOptions]);
    
    return variants;
  }
  
  // Generate variants with different prices and schedules
  private generatePriceVariants(options: TransportationOption[]): TransportationOption[] {
    const result: TransportationOption[] = [...options];
    
    // For each transportation type, create 1-2 variants with different prices/times
    options.forEach((option, index) => {
      // Add a cheaper variant with longer duration
      if (option.type === 'bus' || option.type === 'train') {
        result.push({
          ...option,
          id: `${option.id}-economy`,
          price: Math.round(option.price * 0.7), // 30% cheaper
          duration: this.incrementDuration(option.duration, 2), // 2 hours longer
          schedule: this.adjustSchedule(option.schedule),
          amenities: option.amenities ? option.amenities.filter(a => !a.includes('food') && !a.includes('meal')) : [],
          rating: Math.max(option.rating ? option.rating - 0.5 : 3.5, 3.0)
        });
      }
      
      // Add a premium variant with shorter duration for flights
      if (option.type === 'flight') {
        result.push({
          ...option,
          id: `${option.id}-premium`,
          price: Math.round(option.price * 1.4), // 40% more expensive
          duration: this.decrementDuration(option.duration, 0.5), // 30 min shorter
          schedule: 'Daily, premium timings',
          provider: `${option.provider} - Premium`,
          amenities: [...(option.amenities || []), 'Priority boarding', 'Extra legroom'],
          rating: Math.min(option.rating ? option.rating + 0.2 : 4.7, 5.0)
        });
      }
    });
    
    return result;
  }
  
  // Helper to adjust duration strings
  private incrementDuration(duration: string, hoursToAdd: number): string {
    // Simple implementation for this simulation - would be more complex in real app
    const parts = duration.split('-');
    if (parts.length === 2) {
      const start = parseInt(parts[0]) + hoursToAdd;
      const end = parseInt(parts[1].split(' ')[0]) + hoursToAdd;
      return `${start}-${end} hours`;
    } else {
      const hours = parseInt(duration.split(' ')[0]) + hoursToAdd;
      return `${hours} hours`;
    }
  }
  
  private decrementDuration(duration: string, hoursToSubtract: number): string {
    // Similar to increment but subtracting
    const parts = duration.split('-');
    if (parts.length === 2) {
      const start = Math.max(parseInt(parts[0]) - hoursToSubtract, 0.5);
      const end = Math.max(parseInt(parts[1].split(' ')[0]) - hoursToSubtract, 1);
      return `${start}-${end} hours`;
    } else {
      const hours = Math.max(parseInt(duration.split(' ')[0]) - hoursToSubtract, 0.5);
      return `${hours} hours`;
    }
  }
  
  private adjustSchedule(schedule: string): string {
    // Randomize schedule slightly for variants
    if (schedule.includes('PM')) {
      return schedule.replace('PM', 'AM');
    } else if (schedule.includes('daily')) {
      return schedule.replace('daily', 'weekdays only');
    } else {
      return 'Alternative timings available';
    }
  }
}

// Create and export a singleton instance
const transportationApiService = new TransportationApiService();
export default transportationApiService;
