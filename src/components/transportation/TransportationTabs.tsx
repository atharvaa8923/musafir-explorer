
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransportTabContent from './TransportTabContent';
import { groupTransportOptions } from './TransportUtils';
import { Bus, Train, Plane, Ship, Car } from 'lucide-react';
import transportationApiService from '@/services/transportationApiService';
import { toast } from '@/components/ui/use-toast';
import useTranslation from '@/hooks/useTranslation';

interface TransportationTabsProps {
  destination: string;
  transportOptions: Array<{
    type: string;
    from: string;
    price: number;
    duration: string;
    schedule?: string;
    link?: string;
  }>;
}

const TransportationTabs = ({ destination, transportOptions }: TransportationTabsProps) => {
  const [loading, setLoading] = useState(false);
  const [allTransportOptions, setAllTransportOptions] = useState(transportOptions);
  const { t } = useTranslation();
  
  useEffect(() => {
    const fetchAdditionalOptions = async () => {
      setLoading(true);
      try {
        const apiOptions = await transportationApiService.getTransportationOptions(destination);
        
        // Convert API options to match the expected format
        const formattedOptions = apiOptions.map(opt => ({
          type: opt.type,
          from: opt.from,
          price: opt.price,
          duration: opt.duration,
          schedule: opt.schedule,
          link: `https://booking.musafir-travel.example.com/${opt.type}/${opt.id}`,
          provider: opt.provider,
          rating: opt.rating,
          amenities: opt.amenities
        }));
        
        // Combine with existing options, avoiding duplicates
        const existingFromTypes = new Set(
          transportOptions.map(opt => `${opt.from}-${opt.type}`)
        );
        
        const uniqueNewOptions = formattedOptions.filter(
          opt => !existingFromTypes.has(`${opt.from}-${opt.type}`)
        );
        
        setAllTransportOptions([...transportOptions, ...uniqueNewOptions]);
      } catch (error) {
        console.error('Error fetching additional transport options:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not load additional transportation options.",
        });
      } finally {
        setLoading(false);
      }
    };
    
    if (destination) {
      fetchAdditionalOptions();
    }
  }, [destination, transportOptions]);
  
  const { busOptions, trainOptions, flightOptions, waterOptions, roadOptions } = 
    groupTransportOptions(allTransportOptions);
  
  return (
    <Tabs defaultValue="bus" className="w-full">
      <TabsList className="grid grid-cols-5 w-full">
        <TabsTrigger value="bus" className="flex items-center gap-2">
          <Bus className="h-4 w-4" />
          <span className="hidden sm:inline">{t('bus')}</span>
        </TabsTrigger>
        <TabsTrigger value="train" className="flex items-center gap-2">
          <Train className="h-4 w-4" />
          <span className="hidden sm:inline">{t('train')}</span>
        </TabsTrigger>
        <TabsTrigger value="flight" className="flex items-center gap-2">
          <Plane className="h-4 w-4" />
          <span className="hidden sm:inline">{t('flight')}</span>
        </TabsTrigger>
        <TabsTrigger value="water" className="flex items-center gap-2">
          <Ship className="h-4 w-4" />
          <span className="hidden sm:inline">{t('ferry')}</span>
        </TabsTrigger>
        <TabsTrigger value="road" className="flex items-center gap-2">
          <Car className="h-4 w-4" />
          <span className="hidden sm:inline">{t('local')}</span>
        </TabsTrigger>
      </TabsList>
      
      {loading ? (
        <div className="py-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-2 text-muted-foreground">{t('loading_transport_options')}</p>
        </div>
      ) : (
        <>
          <TransportTabContent 
            value="bus" 
            options={busOptions} 
            destination={destination}
            emptyMessage="no_bus_options"
            buttonColorClass="bg-blue-600 hover:bg-blue-700"
          />
          <TransportTabContent 
            value="train" 
            options={trainOptions} 
            destination={destination}
            emptyMessage="no_train_options"
            buttonColorClass="bg-green-600 hover:bg-green-700"
          />
          <TransportTabContent 
            value="flight" 
            options={flightOptions} 
            destination={destination}
            emptyMessage="no_flight_options"
            buttonColorClass="bg-purple-600 hover:bg-purple-700"
          />
          <TransportTabContent 
            value="water" 
            options={waterOptions} 
            destination={destination}
            emptyMessage="no_water_options"
            buttonColorClass="bg-cyan-600 hover:bg-cyan-700"
          />
          <TransportTabContent 
            value="road" 
            options={roadOptions} 
            destination={destination}
            emptyMessage="no_road_options"
            buttonColorClass="bg-amber-600 hover:bg-amber-700"
          />
        </>
      )}
    </Tabs>
  );
};

export default TransportationTabs;
