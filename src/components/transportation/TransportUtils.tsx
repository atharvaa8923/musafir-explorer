
import React from 'react';
import { 
  Bus, 
  TrainFront, 
  Plane, 
  Ship, 
  Car, 
  Truck 
} from 'lucide-react';

// Get the appropriate icon for a transport type
export const getTransportIcon = (type: string, className: string = "") => {
  const lowerType = type.toLowerCase();
  
  if (lowerType.includes('bus')) return <Bus className={className} />;
  if (lowerType.includes('train')) return <TrainFront className={className} />;
  if (lowerType.includes('flight')) return <Plane className={className} />;
  if (lowerType.includes('ferry')) return <Ship className={className} />;
  if (lowerType.includes('jeep')) return <Truck className={className} />; // Using Truck icon for Jeep
  if (lowerType.includes('taxi') || lowerType.includes('sumo')) return <Car className={className} />;
  
  return <Bus className={className} />;
};

// Group options by type
export const groupTransportOptions = (options: TransportOption[]) => {
  return {
    busOptions: options.filter(option => option.type.toLowerCase().includes('bus')),
    trainOptions: options.filter(option => option.type.toLowerCase().includes('train')),
    flightOptions: options.filter(option => option.type.toLowerCase().includes('flight')),
    waterOptions: options.filter(option => option.type.toLowerCase().includes('ferry')),
    roadOptions: options.filter(option => 
      option.type.toLowerCase().includes('taxi') || 
      option.type.toLowerCase().includes('jeep') || 
      option.type.toLowerCase().includes('sumo')
    )
  };
};

export interface TransportOption {
  type: string;
  from: string;
  price: number;
  duration: string;
  schedule: string;
  link: string;
}

export interface TransportationOptionsProps {
  destination: string;
  options: TransportOption[];
}
