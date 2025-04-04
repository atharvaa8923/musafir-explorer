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
          type: 'Bus',
          from: opt.from,
          to: selectedDest.location,
          cost: opt.price,
          duration: opt.duration,
          time: opt.schedule,
          options: ["Standard", "Premium"]
        }));
        
        const formattedTrainOptions = trainOptions.map(opt => ({
          type: 'Train',
          from: opt.from,
          to: selectedDest.location,
          cost: opt.price,
          duration: opt.duration,
          time: opt.schedule,
          options: ["Standard", "Premium"]
        }));
        
        // Process existing transportation options to match the expected format
        const processedExistingOptions = transportationOptions.map((transport: any) => ({
          type: transport.type === "bus" ? "Bus" : transport.type === "train" ? "Train" : "Jeep",
          from: transport.from,
          to: selectedDest.location,
          cost: transport.price || 0,
          duration: transport.duration || "N/A",
          time: transport.schedule || "N/A",
          options: ["Standard", "Premium"]
        }));
        
        // Combine existing and new transportation options
        const combinedTransportation = [
          ...processedExistingOptions,
          ...formattedBusOptions,
          ...formattedTrainOptions
        ];
        
        // Generate day-wise itinerary from the itinerary data if available
        const dayWiseItems = selectedDest.itinerary?.map((day: any, index: number) => ({
          day: index + 1,
          title: day.title || `Day ${index + 1}`,
          description: day.description || "Details not available",
          budget: Math.round(selectedDest.price / selectedDest.days)
        })) || [];
        
        // Generate accommodation options from the accommodation data if available
        const accommodationItems = selectedDest.accommodation?.map((accom: any) => ({
          type: accom.name,
          location: accom.location || selectedDest.location,
          cost: Math.round(selectedDest.price / selectedDest.days / 2),
          perNight: true,
          options: accom.amenities?.map((a: string) => a) || ["Standard Room", "Deluxe Room"]
        })) || [];
        
        const itineraryData = {
          title: selectedDest.title,
          location: selectedDest.location,
          totalCost: selectedDest.price,
          days: selectedDest.days,
          description: selectedDest.longDescription || selectedDest.description,
          transportation: combinedTransportation,
          accommodation: accommodationItems,
          dayWiseItinerary: dayWiseItems
        };
        
        setSelectedDestinationData(itineraryData);
      } catch (error) {
        console.error("Error processing destination data:", error);
        
        // Fallback to basic data if processing fails
        const basicItineraryData = {
          title: selectedDest.title,
          location: selectedDest.location,
          totalCost: selectedDest.price,
          days: selectedDest.days,
          description: selectedDest.longDescription || selectedDest.description,
          transportation: [],
          accommodation: [],
          dayWiseItinerary: []
        };
        
        setSelectedDestinationData(basicItineraryData);
      }
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
