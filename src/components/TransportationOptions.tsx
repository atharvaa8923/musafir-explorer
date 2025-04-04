
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bus, TrainFront, Car, Plane } from 'lucide-react';
import useTranslation from '@/hooks/useTranslation';
import TransportTabContent from './transportation/TransportTabContent';
import { groupTransportOptions, TransportationOptionsProps } from './transportation/TransportUtils';

const TransportationOptions = ({ destination, options }: TransportationOptionsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const { t } = useTranslation();
  
  // Group options by type
  const { busOptions, trainOptions, flightOptions, waterOptions, roadOptions } = groupTransportOptions(options);

  return (
    <div>
      <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-5 mb-4">
          <TabsTrigger value="all">
            {t('all')}
          </TabsTrigger>
          <TabsTrigger value="bus" disabled={busOptions.length === 0}>
            <Bus className="mr-2 h-4 w-4" />
            {t('bus')}
          </TabsTrigger>
          <TabsTrigger value="train" disabled={trainOptions.length === 0}>
            <TrainFront className="mr-2 h-4 w-4" />
            {t('train')}
          </TabsTrigger>
          <TabsTrigger value="flight" disabled={flightOptions.length === 0}>
            <Plane className="mr-2 h-4 w-4" />
            {t('flight')}
          </TabsTrigger>
          <TabsTrigger value="other" disabled={waterOptions.length === 0 && roadOptions.length === 0}>
            <Car className="mr-2 h-4 w-4" />
            {t('other')}
          </TabsTrigger>
        </TabsList>
        
        <TransportTabContent 
          value="all" 
          options={options} 
          destination={destination} 
          emptyMessage="no_transport_options" 
        />
        
        <TransportTabContent 
          value="bus" 
          options={busOptions} 
          destination={destination} 
          emptyMessage="no_bus_options"
          buttonColorClass="bg-musafir-trekking hover:bg-musafir-trekking/90"
          customButtonText={t('book_bus')} 
        />
        
        <TransportTabContent 
          value="train" 
          options={trainOptions} 
          destination={destination} 
          emptyMessage="no_train_options"
          buttonColorClass="bg-musafir-water hover:bg-musafir-water/90"
          customButtonText={t('book_train')} 
        />
        
        <TransportTabContent 
          value="flight" 
          options={flightOptions} 
          destination={destination} 
          emptyMessage="no_flight_options"
          buttonColorClass="bg-musafir-spiritual hover:bg-musafir-spiritual/90"
          customButtonText={t('book_flight')} 
        />
        
        <TransportTabContent 
          value="other" 
          options={[...waterOptions, ...roadOptions]} 
          destination={destination} 
          emptyMessage="no_other_options"
          buttonColorClass="bg-musafir-forest hover:bg-musafir-forest/90"
        />
      </Tabs>
    </div>
  );
};

export default TransportationOptions;
