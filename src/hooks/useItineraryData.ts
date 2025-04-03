import { useState, useEffect } from 'react';
import databaseService from '@/services/databaseService';
import transportationApiService from '@/services/transportationApiService';
import { toast } from '@/components/ui/use-toast';
import { Destination } from '@/data/types';

interface ItineraryData {
  title: string;
  location: string;
  totalCost: number;
  days: number;
  description: string;
  transportation: any[];
  accommodation: any[];
  dayWiseItinerary: any[];
}

export function useItineraryData(selectedCategory: string) {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState<string>("");
  const [selectedDestinationData, setSelectedDestinationData] = useState<ItineraryData | null>(null);
  
  // Fetch destinations based on selected category
  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      try {
        const allDestinations = await databaseService.getDestinations();
        
        let filteredDestinations;
        if (selectedCategory === "all") {
          filteredDestinations = allDestinations;
        } else {
          filteredDestinations = allDestinations.filter(
            dest => dest.category === selectedCategory
          );
        }
        
        setDestinations(filteredDestinations);
        
        if (filteredDestinations.length > 0) {
          if (destination && filteredDestinations.some(d => d.id === destination)) {
            // Keep existing selected destination if it's in the filtered list
          } else {
            setDestination(filteredDestinations[0].id);
          }
        } else {
          setDestination("");
          setSelectedDestinationData(null);
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load destinations. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchDestinations();
  }, [selectedCategory]);
  
  // Process selected destination data
  useEffect(() => {
    const processDestinationData = async () => {
      if (!destination || destinations.length === 0) return;
      
      const selectedDest = destinations.find(dest => dest.id === destination);
      if (!selectedDest) return;
      
      // Fetch additional transportation options
      let transportationOptions = selectedDest.transportation || [];
      
      try {
        // Try to get additional transportation options from API
        const busOptions = await transportationApiService.fetchBusOptions(selectedDest.location);
        const trainOptions = await transportationApiService.fetchTrainOptions(selectedDest.location);
        
        // Format API transportation options to match existing structure
        const formattedBusOptions = busOptions.map(opt => ({
          type: 'bus' as const,
          from: opt.from,
          price: opt.price,
          duration: opt.duration,
          schedule: opt.schedule,
          link: `https://booking.musafir-travel.example.com/bus/${opt.id}`
        }));
        
        const formattedTrainOptions = trainOptions.map(opt => ({
          type: 'train' as const,
          from: opt.from,
          price: opt.price,
          duration: opt.duration,
          schedule: opt.schedule,
          link: `https://booking.musafir-travel.example.com/train/${opt.id}`
        }));
        
        // Combine existing and new transportation options
        transportationOptions = [
          ...transportationOptions,
          ...formattedBusOptions,
          ...formattedTrainOptions
        ];
        
        // Remove duplicates (based on from+type)
        const uniqueTransportation = Array.from(
          new Map(transportationOptions.map(item => 
            [`${item.from}-${item.type}`, item]
          )).values()
        );
        
        transportationOptions = uniqueTransportation;
      } catch (error) {
        console.error("Error fetching additional transportation options:", error);
        // Continue with existing transportation options
      }
      
      const itineraryData = {
        title: selectedDest.title,
        location: selectedDest.location,
        totalCost: selectedDest.price,
        days: selectedDest.days,
        description: selectedDest.longDescription || selectedDest.description,
        transportation: transportationOptions.map((transport: any) => ({
          type: transport.type === "bus" ? "Bus" : "Train",
          from: transport.from,
          to: selectedDest.location,
          cost: transport.price,
          duration: transport.duration,
          time: transport.schedule,
          options: ["Standard", "Premium"]
        })),
        accommodation: selectedDest.accommodation?.map((accom: any) => ({
          type: accom.name,
          location: accom.location,
          cost: Math.round(selectedDest.price / selectedDest.days / 2),
          perNight: true,
          options: accom.amenities?.map((a: string) => a) || ["Standard Room", "Deluxe Room"]
        })) || [],
        dayWiseItinerary: selectedDest.itinerary?.map((day: any, index: number) => ({
          day: index + 1,
          title: day.title,
          description: day.description,
          budget: Math.round(selectedDest.price / selectedDest.days)
        })) || []
      };
      
      setSelectedDestinationData(itineraryData);
    };
    
    processDestinationData();
  }, [destination, destinations]);
  
  return {
    loading,
    destinations,
    destination,
    setDestination,
    selectedDestinationData
  };
}

export default useItineraryData;
