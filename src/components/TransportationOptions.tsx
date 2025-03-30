
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bus, TrainFront, CalendarIcon, Clock, IndianRupee } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface TransportOption {
  type: 'bus' | 'train';
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
  const [selectedTab, setSelectedTab] = useState<string>(options[0]?.type || 'bus');
  
  const busOptions = options.filter(option => option.type === 'bus');
  const trainOptions = options.filter(option => option.type === 'train');

  const handleBooking = (option: TransportOption) => {
    window.open(option.link, '_blank');
    toast({
      title: `${option.type === 'bus' ? 'Bus' : 'Train'} booking initiated`,
      description: `You are being redirected to book transportation to ${destination}.`,
    });
  };

  return (
    <div>
      <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="bus" disabled={busOptions.length === 0}>
            <Bus className="mr-2 h-4 w-4" />
            Bus
          </TabsTrigger>
          <TabsTrigger value="train" disabled={trainOptions.length === 0}>
            <TrainFront className="mr-2 h-4 w-4" />
            Train
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="bus" className="space-y-4">
          {busOptions.length > 0 ? (
            busOptions.map((option, index) => (
              <div key={index} className="border border-border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Bus className="mr-2 h-5 w-5 text-musafir-trekking" />
                    <span className="font-medium">Bus from {option.from}</span>
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
                  Book Bus Ticket
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              No bus options available for this destination.
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
                    <span className="font-medium">Train from {option.from}</span>
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
                  Book Train Ticket
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              No train options available for this destination.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransportationOptions;
