
import { TransportationOption } from '@/services/transportationApiService';

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
