
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "@/components/ui/use-toast";
import useTranslation from "@/hooks/useTranslation";
import useItineraryData from "@/hooks/useItineraryData";
import { 
  Calendar, 
  Train, 
  Bus, 
  Bed, 
  Utensils, 
  Coffee, 
  Navigation, 
  IndianRupee,
  ChevronDown,
  Info,
  Pin,
  AlertTriangle
} from "lucide-react";

interface ItineraryDetailsProps {
  selectedCategory: string;
}

const ItineraryDetails: React.FC<ItineraryDetailsProps> = ({ selectedCategory }) => {
  const [duration, setDuration] = useState("5d");
  const [expanded, setExpanded] = useState<string | null>(null);
  const { t } = useTranslation();
  
  const {
    loading,
    destinations,
    destination,
    setDestination,
    selectedDestinationData
  } = useItineraryData(selectedCategory);
  
  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin h-10 w-10 border-4 border-musafir-spiritual rounded-full border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (destinations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12 border border-border rounded-lg bg-card">
          <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">{t('no_itineraries')}</h3>
          <p className="text-muted-foreground">
            {t('no_itineraries_desc')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Select value={destination} onValueChange={setDestination}>
          <SelectTrigger className="w-full sm:w-[300px]">
            <SelectValue placeholder={t('select_destination')} />
          </SelectTrigger>
          <SelectContent>
            {destinations.map(dest => (
              <SelectItem key={dest.id} value={dest.id}>
                {dest.title} ({dest.location})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={duration} onValueChange={setDuration}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder={t('duration')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3d">3 {t('days')}</SelectItem>
            <SelectItem value="5d">5 {t('days')}</SelectItem>
            <SelectItem value="7d">7 {t('days')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {selectedDestinationData && (
        <>
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-2xl">{selectedDestinationData.title}</CardTitle>
                  <p className="text-muted-foreground">{selectedDestinationData.location}</p>
                </div>
                <div className="flex items-center gap-2 text-musafir-spiritual font-bold">
                  <IndianRupee className="h-5 w-5" />
                  <span className="text-xl">{selectedDestinationData.totalCost}</span>
                  <span className="text-sm text-muted-foreground font-normal">({selectedDestinationData.days} {t('days')})</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{selectedDestinationData.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-1 bg-musafir-light/60 text-musafir-trekking px-3 py-1 rounded-full text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedDestinationData.days} {t('days')}</span>
                </div>
                <div className="flex items-center gap-1 bg-musafir-light/60 text-musafir-spiritual px-3 py-1 rounded-full text-sm">
                  <IndianRupee className="h-4 w-4" />
                  <span>{t('budget')} ₹{selectedDestinationData.totalCost}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="day-by-day" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="day-by-day">{t('day_by_day')}</TabsTrigger>
              <TabsTrigger value="transportation">{t('transportation')}</TabsTrigger>
              <TabsTrigger value="accommodation">{t('accommodation')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="day-by-day" className="space-y-4 mt-4">
              {selectedDestinationData.dayWiseItinerary.length > 0 ? (
                selectedDestinationData.dayWiseItinerary.map((day: any, index: number) => (
                  <Collapsible
                    key={index}
                    open={expanded === `day-${day.day}`}
                    onOpenChange={() => toggleExpand(`day-${day.day}`)}
                    className="border rounded-lg overflow-hidden"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-muted/50">
                      <div className="flex items-center">
                        <div className="bg-musafir-spiritual text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {day.day}
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium">{day.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-3 text-musafir-spiritual font-medium">₹{day.budget}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${expanded === `day-${day.day}` ? 'rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-0 border-t">
                      <p className="mb-3">{day.description}</p>
                      <div className="flex items-center text-musafir-spiritual">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        <span>{t('budget')}: ₹{day.budget}</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))
              ) : (
                <div className="text-center py-6">
                  <p className="text-muted-foreground">Day-by-day itinerary is not available for this destination.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="transportation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  {selectedDestinationData.transportation.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">{t('type')}</TableHead>
                          <TableHead>{t('route')}</TableHead>
                          <TableHead>{t('duration')}</TableHead>
                          <TableHead>{t('time')}</TableHead>
                          <TableHead>{t('options')}</TableHead>
                          <TableHead className="text-right">{t('cost')}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedDestinationData.transportation.map((transport: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                {transport.type === "Train" ? (
                                  <Train className="mr-2 h-4 w-4 text-musafir-spiritual" />
                                ) : transport.type === "Bus" ? (
                                  <Bus className="mr-2 h-4 w-4 text-musafir-forest" />
                                ) : (
                                  <Navigation className="mr-2 h-4 w-4 text-musafir-water" />
                                )}
                                {transport.type}
                              </div>
                            </TableCell>
                            <TableCell>{transport.from} → {transport.to}</TableCell>
                            <TableCell>{transport.duration}</TableCell>
                            <TableCell>{transport.time}</TableCell>
                            <TableCell>
                              <Select>
                                <SelectTrigger className="w-[140px]">
                                  <SelectValue placeholder={t('select_option')} />
                                </SelectTrigger>
                                <SelectContent>
                                  {transport.options.map((option: string, idx: number) => (
                                    <SelectItem key={idx} value={option.toLowerCase().replace(' ', '-')}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell className="text-right">₹{transport.cost}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">Transportation details are not available for this destination.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="accommodation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  {selectedDestinationData.accommodation.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[150px]">{t('type')}</TableHead>
                          <TableHead>{t('location')}</TableHead>
                          <TableHead>{t('options')}</TableHead>
                          <TableHead className="text-right">{t('cost')}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedDestinationData.accommodation.map((accom: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <Bed className="mr-2 h-4 w-4 text-musafir-trekking" />
                                {accom.type}
                              </div>
                            </TableCell>
                            <TableCell>{accom.location}</TableCell>
                            <TableCell>
                              <Select>
                                <SelectTrigger className="w-[160px]">
                                  <SelectValue placeholder={t('select_option')} />
                                </SelectTrigger>
                                <SelectContent>
                                  {accom.options.map((option: string, idx: number) => (
                                    <SelectItem key={idx} value={option.toLowerCase().replace(' ', '-')}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell className="text-right">
                              ₹{accom.cost}
                              {accom.perNight && <span className="text-sm text-muted-foreground">/night</span>}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">Accommodation details are not available for this destination.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Info className="h-4 w-4" />
                  {t('travel_tips')}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">{t('travel_tips')} for {selectedDestinationData.title}</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Book train tickets at least 1 month in advance</li>
                    <li>Carry sufficient cash as ATMs may not be available</li>
                    <li>Pack rain gear regardless of season</li>
                    <li>Respect local customs and traditions</li>
                    <li>Ensure to carry required permits if needed</li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            
            <Button className="bg-musafir-spiritual hover:bg-musafir-spiritual/80 w-full sm:w-auto">
              {t('book_itinerary')}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItineraryDetails;
