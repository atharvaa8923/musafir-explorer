
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Bus, 
  TrainFront, 
  CalendarIcon, 
  Clock, 
  IndianRupee, 
  Plane, 
  Ship, 
  Car, 
  Truck 
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import useTranslation from '@/hooks/useTranslation';

interface TransportOption {
  type: string;
  from: string;
  price: number;
  duration: string;
  schedule: string;
  link: string;
}

interface TransportationOptionsProps {
  destination: string;
  options: TransportOption[];
}

const TransportationOptions = ({ destination, options }: TransportationOptionsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const { t } = useTranslation();
  
  // Group options by type
  const busOptions = options.filter(option => option.type.toLowerCase().includes('bus'));
  const trainOptions = options.filter(option => option.type.toLowerCase().includes('train'));
  const flightOptions = options.filter(option => option.type.toLowerCase().includes('flight'));
  const waterOptions = options.filter(option => option.type.toLowerCase().includes('ferry'));
  const roadOptions = options.filter(option => 
    option.type.toLowerCase().includes('taxi') || 
    option.type.toLowerCase().includes('jeep') || 
    option.type.toLowerCase().includes('sumo')
  );

  const handleBooking = (option: TransportOption) => {
    window.open(option.link, '_blank');
    toast({
      title: `${option.type} booking initiated`,
      description: `You are being redirected to book transportation to ${destination}.`,
    });
  };

  // Get the appropriate icon for a transport type
  const getTransportIcon = (type: string, className: string = "") => {
    const lowerType = type.toLowerCase();
    
    if (lowerType.includes('bus')) return <Bus className={className} />;
    if (lowerType.includes('train')) return <TrainFront className={className} />;
    if (lowerType.includes('flight')) return <Plane className={className} />;
    if (lowerType.includes('ferry')) return <Ship className={className} />;
    if (lowerType.includes('jeep')) return <Truck className={className} />; // Changed from Jeep to Truck
    if (lowerType.includes('taxi') || lowerType.includes('sumo')) return <Car className={className} />;
    
    return <Bus className={className} />;
  };

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
        
        <TabsContent value="all" className="space-y-4">
          {options.length > 0 ? (
            options.map((option, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {getTransportIcon(option.type, "mr-2 h-5 w-5 text-musafir-trekking")}
                    <span className="font-medium">{option.type} {t('from')} {option.from}</span>
                  </div>
                  <span className="flex items-center text-musafir-spiritual font-medium">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {option.price}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{option.schedule}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-musafir-trekking hover:bg-musafir-trekking/90"
                  onClick={() => handleBooking(option)}
                >
                  {t('book')} {option.type}
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              {t('no_transport_options')}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="bus" className="space-y-4">
          {busOptions.length > 0 ? (
            busOptions.map((option, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Bus className="mr-2 h-5 w-5 text-musafir-trekking" />
                    <span className="font-medium">{t('bus_from')} {option.from}</span>
                  </div>
                  <span className="flex items-center text-musafir-spiritual font-medium">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {option.price}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{option.schedule}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-musafir-trekking hover:bg-musafir-trekking/90"
                  onClick={() => handleBooking(option)}
                >
                  {t('book_bus')}
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              {t('no_bus_options')}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="train" className="space-y-4">
          {trainOptions.length > 0 ? (
            trainOptions.map((option, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <TrainFront className="mr-2 h-5 w-5 text-musafir-water" />
                    <span className="font-medium">{t('train_from')} {option.from}</span>
                  </div>
                  <span className="flex items-center text-musafir-spiritual font-medium">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {option.price}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{option.schedule}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-musafir-water hover:bg-musafir-water/90"
                  onClick={() => handleBooking(option)}
                >
                  {t('book_train')}
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              {t('no_train_options')}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="flight" className="space-y-4">
          {flightOptions.length > 0 ? (
            flightOptions.map((option, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Plane className="mr-2 h-5 w-5 text-musafir-spiritual" />
                    <span className="font-medium">{t('flight_from')} {option.from}</span>
                  </div>
                  <span className="flex items-center text-musafir-spiritual font-medium">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {option.price}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{option.schedule}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-musafir-spiritual hover:bg-musafir-spiritual/90"
                  onClick={() => handleBooking(option)}
                >
                  {t('book_flight')}
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              {t('no_flight_options')}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="other" className="space-y-4">
          {(waterOptions.length > 0 || roadOptions.length > 0) ? (
            [...waterOptions, ...roadOptions].map((option, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {getTransportIcon(option.type, "mr-2 h-5 w-5 text-musafir-forest")}
                    <span className="font-medium">{option.type} {t('from')} {option.from}</span>
                  </div>
                  <span className="flex items-center text-musafir-spiritual font-medium">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {option.price}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{option.schedule}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-musafir-forest hover:bg-musafir-forest/90"
                  onClick={() => handleBooking(option)}
                >
                  {t('book')} {option.type}
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              {t('no_other_options')}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransportationOptions;
