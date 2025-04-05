
import { API_ENDPOINTS, API_KEYS } from '@/config/apiConfig';

// API configuration
const BUS_API_ENDPOINT = API_ENDPOINTS.TRANSPORTATION.BUS;
const TRAIN_API_ENDPOINT = API_ENDPOINTS.TRANSPORTATION.TRAIN;
const API_KEY = API_KEYS.TRANSPORTATION_API;

export interface TransportationOption {
  id: string;
  type: 'bus' | 'train' | 'jeep' | 'flight' | 'shared taxi' | 'shared sumo' | 'ferry' | 'local bus' | 'helicopter';
  from: string;
  to: string;
  price: number;
  duration: string;
  schedule: string;
  availableSeats: number;
  classes?: string[];
  provider?: string;
  amenities?: string[];
  rating?: number;
}

export interface BookingDetails {
  optionId: string;
  passengers: {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
  }[];
  class?: string;
  travelDate: string;
  contactPhone: string;
  contactEmail: string;
}

export class TransportationApiService {
  // Fetch available bus options for a destination
  async fetchBusOptions(destination: string, departureDate?: string): Promise<TransportationOption[]> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('destination', destination);
      if (departureDate) {
        queryParams.append('date', departureDate);
      }
      
      const response = await fetch(`${BUS_API_ENDPOINT}/options?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.options;
    } catch (error) {
      console.error('Error fetching bus options:', error);
      // Return dummy data in case API fails
      return this.getDummyBusOptions(destination);
    }
  }
  
  // Fetch available train options for a destination
  async fetchTrainOptions(destination: string, departureDate?: string): Promise<TransportationOption[]> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('destination', destination);
      if (departureDate) {
        queryParams.append('date', departureDate);
      }
      
      const response = await fetch(`${TRAIN_API_ENDPOINT}/options?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.options;
    } catch (error) {
      console.error('Error fetching train options:', error);
      // Return dummy data in case API fails
      return this.getDummyTrainOptions(destination);
    }
  }

  // Fetch all available transportation options for a destination
  async fetchAllTransportOptions(destination: string, departureDate?: string): Promise<TransportationOption[]> {
    try {
      const [busOptions, trainOptions] = await Promise.all([
        this.fetchBusOptions(destination, departureDate),
        this.fetchTrainOptions(destination, departureDate)
      ]);
      
      // Add additional options for certain destinations
      let additionalOptions: TransportationOption[] = [];
      
      if (destination.includes("Tibet") || destination === "Kailash Mansarovar") {
        additionalOptions = this.getPilgrimageTransportOptions(destination);
      } else if (destination.includes("Himachal") || destination === "Manali") {
        additionalOptions = this.getMountainTransportOptions(destination);
      } else if (destination.includes("Goa") || destination.includes("Kerala")) {
        additionalOptions = this.getCoastalTransportOptions(destination);
      }
      
      return [...busOptions, ...trainOptions, ...additionalOptions];
    } catch (error) {
      console.error('Error fetching all transport options:', error);
      return [...this.getDummyBusOptions(destination), ...this.getDummyTrainOptions(destination)];
    }
  }
  
  // Book a transportation option
  async bookTransportation(bookingDetails: BookingDetails): Promise<{ success: boolean; bookingId?: string; message?: string }> {
    try {
      const endpoint = bookingDetails.optionId.startsWith('BUS') 
        ? `${BUS_API_ENDPOINT}/book` 
        : `${TRAIN_API_ENDPOINT}/book`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(bookingDetails)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        bookingId: data.bookingId,
        message: data.message
      };
    } catch (error) {
      console.error('Error booking transportation:', error);
      return {
        success: false,
        message: 'Failed to book transportation. Please try again later.'
      };
    }
  }
  
  // Get specialized pilgrimage transport options
  private getPilgrimageTransportOptions(destination: string): TransportationOption[] {
    return [
      {
        id: 'SPECIAL-001',
        type: 'jeep',
        from: 'Dharchula',
        to: destination,
        price: 1200,
        duration: '8 hours',
        schedule: 'Daily at 05:00',
        availableSeats: 6,
        provider: 'Himalayan Pilgrim Tours',
        amenities: ['4x4 Vehicle', 'Experienced Driver', 'Oxygen Supply'],
        rating: 4.7
      },
      {
        id: 'SPECIAL-002',
        type: 'shared taxi',
        from: 'Kathgodam',
        to: 'Dharchula',
        price: 950,
        duration: '12 hours',
        schedule: 'Daily at 06:30',
        availableSeats: 8,
        provider: 'Mountain Travels',
        rating: 4.3
      },
      {
        id: 'SPECIAL-003',
        type: 'helicopter',
        from: 'Pithoragarh',
        to: 'Gunji',
        price: 3500,
        duration: '30 minutes',
        schedule: 'Weather dependent, usually mornings',
        availableSeats: 5,
        provider: 'Himalayan Heli Services',
        rating: 4.9
      }
    ];
  }
  
  // Get specialized mountain transport options
  private getMountainTransportOptions(destination: string): TransportationOption[] {
    return [
      {
        id: 'MOUNTAIN-001',
        type: 'bus',
        from: 'Delhi',
        to: destination,
        price: 1100,
        duration: '12 hours',
        schedule: 'Daily at 18:00, Luxury overnight',
        availableSeats: 20,
        provider: 'HPTDC',
        amenities: ['AC', 'Recliner Seats', 'Blankets'],
        rating: 4.5
      },
      {
        id: 'MOUNTAIN-002',
        type: 'shared sumo',
        from: 'Chandigarh',
        to: destination,
        price: 800,
        duration: '7 hours',
        schedule: 'Every 2 hours from 06:00 to 14:00',
        availableSeats: 9,
        provider: 'Himalayan Taxi Union',
        rating: 4.2
      }
    ];
  }
  
  // Get specialized coastal transport options
  private getCoastalTransportOptions(destination: string): TransportationOption[] {
    return [
      {
        id: 'COASTAL-001',
        type: 'ferry',
        from: 'Mumbai',
        to: destination,
        price: 2200,
        duration: '14 hours',
        schedule: 'Mon, Wed, Fri at 20:00',
        availableSeats: 40,
        provider: 'Coastal Ferries Ltd',
        amenities: ['Sleeper Berths', 'Meals Included', 'Sea View'],
        rating: 4.4
      },
      {
        id: 'COASTAL-002',
        type: 'flight',
        from: 'Delhi',
        to: destination,
        price: 3500,
        duration: '2 hours 30 minutes',
        schedule: 'Daily at 10:30 and 16:30',
        availableSeats: 180,
        provider: 'IndiGo',
        rating: 4.3
      }
    ];
  }
  
  // Dummy data in case API fails
  private getDummyBusOptions(destination: string): TransportationOption[] {
    return [
      {
        id: 'BUS-001',
        type: 'bus',
        from: 'Delhi',
        to: destination,
        price: 750,
        duration: '6 hours',
        schedule: 'Daily at 06:00, 10:00, 14:00, 22:00',
        availableSeats: 23,
        provider: 'UPSRTC Deluxe',
        amenities: ['AC', 'Charging Points'],
        rating: 4.1
      },
      {
        id: 'BUS-002',
        type: 'bus',
        from: 'Mumbai',
        to: destination,
        price: 1200,
        duration: '12 hours',
        schedule: 'Mon, Wed, Fri at 20:00',
        availableSeats: 15,
        provider: 'Prasanna Purple',
        amenities: ['AC', 'Sleeper', 'Toilet'],
        rating: 4.3
      },
      {
        id: 'BUS-003',
        type: 'local bus',
        from: 'Nearby Town',
        to: destination,
        price: 250,
        duration: '2-3 hours',
        schedule: 'Hourly from 06:00 to 18:00',
        availableSeats: 35,
        provider: 'Local State Transport',
        rating: 3.8
      }
    ];
  }
  
  private getDummyTrainOptions(destination: string): TransportationOption[] {
    return [
      {
        id: 'TRAIN-001',
        type: 'train',
        from: 'Delhi',
        to: destination,
        price: 550,
        duration: '5 hours',
        schedule: 'Daily at 08:30, 15:45',
        availableSeats: 45,
        classes: ['Sleeper', 'AC 3-Tier', 'AC 2-Tier'],
        provider: 'Indian Railways',
        amenities: ['Catering', 'Bedding in AC'],
        rating: 4.0
      },
      {
        id: 'TRAIN-002',
        type: 'train',
        from: 'Mumbai',
        to: destination,
        price: 950,
        duration: '10 hours',
        schedule: 'Tue, Thu, Sat at 22:15',
        availableSeats: 32,
        classes: ['Sleeper', 'AC 3-Tier'],
        provider: 'Indian Railways',
        amenities: ['Pantry Car', 'Charging Points'],
        rating: 4.2
      },
      {
        id: 'TRAIN-003',
        type: 'train',
        from: 'Kolkata',
        to: destination,
        price: 1050,
        duration: '14 hours',
        schedule: 'Mon, Fri at 23:50',
        availableSeats: 28,
        classes: ['Sleeper', 'AC 3-Tier', 'AC 2-Tier', 'AC 1st Class'],
        provider: 'Indian Railways',
        amenities: ['Pantry Car', 'Bedding', 'E-Catering'],
        rating: 4.4
      }
    ];
  }
}

// Create and export a singleton instance
const transportationApiService = new TransportationApiService();
export default transportationApiService;
