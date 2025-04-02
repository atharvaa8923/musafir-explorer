import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import databaseService from "@/services/databaseService";
import { toast } from "@/components/ui/use-toast";
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
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("5d");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDestinationData, setSelectedDestinationData] = useState<any>(null);
  
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
  
  useEffect(() => {
    if (!destination || destinations.length === 0) return;
    
    const selectedDest = destinations.find(dest => dest.id === destination);
    if (!selectedDest) return;
    
    const itineraryData = {
      title: selectedDest.title,
      location: selectedDest.location,
      totalCost: selectedDest.price,
      days: selectedDest.days,
      description: selectedDest.longDescription || selectedDest.description,
      transportation: selectedDest.transportation?.map((transport: any) => ({
        type: transport.type === "bus" ? "Bus" : "Train",
        from: transport.from,
        to: selectedDest.location,
        cost: transport.price,
        duration: transport.duration,
        time: transport.schedule,
        options: ["Standard", "Premium"]
      })) || [],
      accommodation: selectedDest.accommodation?.map((accom: any) => ({
        type: accom.name,
        location: accom.location,
        cost: Math.round(selectedDest.price / selectedDest.days / 2),
        perNight: true,
        options: accom.amenities?.map((a: string) => a) || ["Standard Room", "Deluxe Room"]
      })) || [],
      dayWiseItinerary: selectedDest.itinerary?.map((day: any, index: number) => ({
        day: index + 1,
        title: day.title,
        description: day.description,
        budget: Math.round(selectedDest.price / selectedDest.days)
      })) || []
    };
    
    setSelectedDestinationData(itineraryData);
  }, [destination, destinations]);
  
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
          <h3 className="text-xl font-medium mb-2">No itineraries found</h3>
          <p className="text-muted-foreground">
            We couldn't find any itineraries matching the selected category.
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
            <SelectValue placeholder="Select destination" />
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
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3d">3 Days</SelectItem>
            <SelectItem value="5d">5 Days</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
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
                  <span className="text-sm text-muted-foreground font-normal">({selectedDestinationData.days} days)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{selectedDestinationData.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-1 bg-musafir-light/60 text-musafir-trekking px-3 py-1 rounded-full text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedDestinationData.days} Days</span>
                </div>
                <div className="flex items-center gap-1 bg-musafir-light/60 text-musafir-spiritual px-3 py-1 rounded-full text-sm">
                  <IndianRupee className="h-4 w-4" />
                  <span>Budget ₹{selectedDestinationData.totalCost}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="day-by-day" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="day-by-day">Day by Day</TabsTrigger>
              <TabsTrigger value="transportation">Transportation</TabsTrigger>
              <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
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
                        <span>Budget: ₹{day.budget}</span>
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
                          <TableHead className="w-[100px]">Type</TableHead>
                          <TableHead>Route</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Options</TableHead>
                          <TableHead className="text-right">Cost</TableHead>
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
                                  <SelectValue placeholder="Select option" />
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
                          <TableHead className="w-[150px]">Type</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Options</TableHead>
                          <TableHead className="text-right">Cost</TableHead>
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
                                  <SelectValue placeholder="Select option" />
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
                  Travel Tips
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">Travel Tips for {selectedDestinationData.title}</h4>
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
              Book This Itinerary
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItineraryDetails;
