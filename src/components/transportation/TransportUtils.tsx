
import React from 'react';
import { TransportationOption } from '@/services/transportationApiService';
import { Bus, Train, Plane, Ship, Car } from 'lucide-react';

export interface TransportationOptionsProps {
  destination: string;
  options: Array<{
    type: string;
    from: string;
    price: number;
    duration: string;
    schedule?: string;
    link?: string;
  }>;
}

export interface TransportOption {
  type: string;
  from: string;
  price: number;
  duration: string;
  schedule?: string;
  link?: string;
}

export const groupTransportOptions = (options: TransportationOptionsProps['options']) => {
  const busOptions = options.filter(opt => opt.type === 'bus' || opt.type === 'local bus');
  const trainOptions = options.filter(opt => opt.type === 'train');
  const flightOptions = options.filter(opt => opt.type === 'flight');
  const waterOptions = options.filter(opt => opt.type === 'ferry');
  const roadOptions = options.filter(opt => 
    ['jeep', 'shared taxi', 'shared sumo'].includes(opt.type)
  );
  
  return {
    busOptions,
    trainOptions,
    flightOptions,
    waterOptions,
    roadOptions
  };
};

export const getTransportIcon = (type: string, className?: string) => {
  switch (type.toLowerCase()) {
    case 'bus':
    case 'local bus':
      return <Bus className={className} />;
    case 'train':
      return <Train className={className} />;
    case 'flight':
      return <Plane className={className} />;
    case 'ferry':
      return <Ship className={className} />;
    case 'jeep':
    case 'shared taxi':
    case 'shared sumo':
      return <Car className={className} />;
    default:
      return <Car className={className} />;
  }
};
