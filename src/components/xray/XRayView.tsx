
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Clock, Info, MapPin } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export interface HistoricalImage {
  url: string;
  year: string;
  description: string;
}

export interface XRayInfo {
  title: string;
  location: string;
  coordinates?: [number, number];
  historicalImages: HistoricalImage[];
  historicalFacts: string[];
  description: string;
}

interface XRayViewProps {
  info: XRayInfo;
  trigger?: React.ReactNode;
}

const XRayView: React.FC<XRayViewProps> = ({ info, trigger }) => {
  const { t } = useTranslation();
  
  const defaultTrigger = (
    <Button variant="outline" className="gap-2">
      <Camera className="h-4 w-4" />
      <span>XR-AY View</span>
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">{info.title} XR-AY View</DialogTitle>
          <DialogDescription className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1 text-musafir-spiritual" />
            {info.location}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="historical" className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="mb-4">
            <TabsTrigger value="historical">
              <Clock className="h-4 w-4 mr-2" />
              {t('historical')}
            </TabsTrigger>
            <TabsTrigger value="facts">
              <Info className="h-4 w-4 mr-2" />
              {t('facts')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="historical" className="flex-1 overflow-hidden flex flex-col">
            <ScrollArea className="flex-1">
              <div className="space-y-6">
                <p className="text-muted-foreground">{info.description}</p>
                
                <div className="grid grid-cols-1 gap-6">
                  {info.historicalImages.map((image, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="relative aspect-video bg-muted">
                        <img 
                          src={image.url} 
                          alt={`Historical image of ${info.title} - ${image.year}`}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                          <div className="text-sm font-medium">Circa {image.year}</div>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="facts" className="flex-1 overflow-hidden flex flex-col">
            <ScrollArea className="flex-1">
              <div className="space-y-6">
                <p className="text-muted-foreground">{info.description}</p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{t('historical_facts')}</h3>
                  <ul className="space-y-3">
                    {info.historicalFacts.map((fact, index) => (
                      <li key={index} className="flex">
                        <span className="bg-musafir-spiritual/20 text-musafir-spiritual flex-shrink-0 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          {index + 1}
                        </span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default XRayView;
