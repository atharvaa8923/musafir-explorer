
import { API_ENDPOINTS, API_KEYS } from '@/config/apiConfig';

// API configuration
const BUS_API_ENDPOINT = API_ENDPOINTS.TRANSPORTATION.BUS;
const TRAIN_API_ENDPOINT = API_ENDPOINTS.TRANSPORTATION.TRAIN;
const API_KEY = API_KEYS.TRANSPORTATION_API;

export interface TransportationOption {
  id: string;
  type: 'bus' | 'train';
  from: string;
  to: string;
  price: number;
  duration: string;
  schedule: string;
  availableSeats: number;
  classes?: string[];
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
        schedule: 'Daily at 06:00',
        availableSeats: 23
      },
      {
        id: 'BUS-002',
        type: 'bus',
        from: 'Mumbai',
        to: destination,
        price: 1200,
        duration: '12 hours',
        schedule: 'Mon, Wed, Fri at 20:00',
        availableSeats: 15
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
        schedule: 'Daily at 08:30',
        availableSeats: 45,
        classes: ['Sleeper', 'AC 3-Tier', 'AC 2-Tier']
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
        classes: ['Sleeper', 'AC 3-Tier']
      }
    ];
  }
}

// Create and export a singleton instance
const transportationApiService = new TransportationApiService();
export default transportationApiService;
