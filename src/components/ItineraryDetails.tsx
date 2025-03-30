
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  Info
} from "lucide-react";

const ItineraryDetails = () => {
  const [destination, setDestination] = useState("valley-of-flowers");
  const [duration, setDuration] = useState("5d");
  const [expanded, setExpanded] = useState<string | null>(null);

  // Sample itinerary data for each destination
  const itineraries = {
    "valley-of-flowers": {
      title: "Valley of Flowers Trek",
      location: "Uttarakhand",
      totalCost: 4800,
      days: 5,
      description: "Experience the breathtaking beauty of the UNESCO World Heritage Site, Valley of Flowers, famous for its meadows of endemic alpine flowers and variety of flora.",
      transportation: [
        { type: "Train", from: "Delhi", to: "Haridwar", cost: 600, duration: "5h 30m", time: "22:30 - 04:00", options: ["Sleeper", "AC 3-Tier"] },
        { type: "Bus", from: "Haridwar", to: "Govindghat", cost: 450, duration: "10h", time: "06:00 - 16:00", options: ["AC", "Non-AC"] },
        { type: "Shared Taxi", from: "Govindghat", to: "Ghangaria", cost: 300, duration: "1h", time: "Flexible", options: ["Shared Jeep"] },
      ],
      accommodation: [
        { type: "Guest House", location: "Ghangaria", cost: 500, perNight: true, options: ["Dormitory", "Basic Room", "Deluxe Room"] },
        { type: "Camping", location: "Valley of Flowers", cost: 700, perNight: true, options: ["Tent"] },
        { type: "Budget Hotel", location: "Haridwar", cost: 600, perNight: true, options: ["Single", "Double"] },
      ],
      dayWiseItinerary: [
        {
          day: 1,
          title: "Delhi to Haridwar",
          description: "Take an overnight train to Haridwar. Rest in a budget hotel upon arrival.",
          budget: 1200,
        },
        {
          day: 2,
          title: "Haridwar to Govindghat to Ghangaria",
          description: "Take an early morning bus to Govindghat, followed by a shared taxi to Ghangaria. Stay overnight in Ghangaria.",
          budget: 1250,
        },
        {
          day: 3,
          title: "Valley of Flowers Trek",
          description: "Full day trek to Valley of Flowers. Return to Ghangaria by evening.",
          budget: 800,
        },
        {
          day: 4,
          title: "Hemkund Sahib Trek (Optional)",
          description: "Trek to Hemkund Sahib or explore Ghangaria. Stay overnight in Ghangaria.",
          budget: 800,
        },
        {
          day: 5,
          title: "Return to Haridwar/Delhi",
          description: "Return to Govindghat, take a bus to Haridwar and then train to Delhi.",
          budget: 750,
        },
      ]
    },
    "rishikesh-rafting": {
      title: "Rishikesh Rafting Experience",
      location: "Rishikesh",
      totalCost: 2500,
      days: 3,
      description: "Experience the thrill of white water rafting in the adventure capital of India. Tackle rapids ranging from Grade I to Grade IV on the mighty Ganges.",
      transportation: [
        { type: "Train", from: "Delhi", to: "Haridwar", cost: 600, duration: "5h 30m", time: "06:00 - 11:30", options: ["Sleeper", "AC Chair Car", "AC 3-Tier"] },
        { type: "Bus", from: "Haridwar", to: "Rishikesh", cost: 100, duration: "1h", time: "12:00 - 13:00", options: ["AC", "Non-AC", "Shared Taxi"] },
      ],
      accommodation: [
        { type: "Hostel", location: "Rishikesh", cost: 350, perNight: true, options: ["Dormitory", "Private Room"] },
        { type: "Camping", location: "Shivpuri", cost: 450, perNight: true, options: ["Tent"] },
      ],
      dayWiseItinerary: [
        {
          day: 1,
          title: "Delhi to Rishikesh",
          description: "Morning train to Haridwar, connect to bus for Rishikesh. Evening explore local markets and attend Ganga Aarti.",
          budget: 1050,
        },
        {
          day: 2,
          title: "Rafting Day",
          description: "Full day white water rafting experience (16km stretch). Evening at leisure.",
          budget: 800,
        },
        {
          day: 3,
          title: "Return to Delhi",
          description: "Morning yoga by the Ganges. Afternoon return to Delhi.",
          budget: 650,
        },
      ]
    },
    "meditation-retreat": {
      title: "Meditation Retreat",
      location: "Rishikesh",
      totalCost: 3500,
      days: 7,
      description: "A week-long meditation and yoga retreat in the yoga capital of the world. Learn ancient techniques from experienced practitioners.",
      transportation: [
        { type: "Train", from: "Delhi", to: "Haridwar", cost: 600, duration: "5h 30m", time: "06:00 - 11:30", options: ["Sleeper", "AC 3-Tier"] },
        { type: "Bus", from: "Haridwar", to: "Rishikesh", cost: 100, duration: "1h", time: "12:00 - 13:00", options: ["AC", "Non-AC"] },
      ],
      accommodation: [
        { type: "Ashram", location: "Rishikesh", cost: 400, perNight: true, options: ["Shared Room", "Private Room"] },
      ],
      dayWiseItinerary: [
        {
          day: 1,
          title: "Delhi to Rishikesh",
          description: "Morning train to Haridwar, connect to bus for Rishikesh. Check-in at the ashram.",
          budget: 1100,
        },
        {
          day: 2,
          title: "Yoga and Meditation",
          description: "Morning yoga, followed by meditation sessions and philosophy classes.",
          budget: 400,
        },
        {
          day: 3,
          title: "Yoga and Nature Walk",
          description: "Morning yoga, afternoon nature walk along the Ganges.",
          budget: 400,
        },
        {
          day: 4,
          title: "Silent Day",
          description: "A day of silent meditation and introspection.",
          budget: 400,
        },
        {
          day: 5,
          title: "Yoga and Ayurveda",
          description: "Morning yoga, afternoon Ayurvedic cooking class.",
          budget: 400,
        },
        {
          day: 6,
          title: "Yoga and Waterfall Visit",
          description: "Morning yoga, afternoon visit to nearby waterfall.",
          budget: 400,
        },
        {
          day: 7,
          title: "Return to Delhi",
          description: "Morning concluding session, return to Delhi.",
          budget: 400,
        },
      ]
    }
  };

  // Get the current itinerary based on selected destination
  const currentItinerary = itineraries[destination as keyof typeof itineraries];
  
  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Itinerary Details</h1>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Select value={destination} onValueChange={setDestination}>
          <SelectTrigger className="w-full sm:w-[250px]">
            <SelectValue placeholder="Select destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="valley-of-flowers">Valley of Flowers Trek</SelectItem>
            <SelectItem value="rishikesh-rafting">Rishikesh Rafting Experience</SelectItem>
            <SelectItem value="meditation-retreat">Meditation Retreat</SelectItem>
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

      {currentItinerary && (
        <>
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-2xl">{currentItinerary.title}</CardTitle>
                  <p className="text-muted-foreground">{currentItinerary.location}</p>
                </div>
                <div className="flex items-center gap-2 text-musafir-spiritual font-bold">
                  <IndianRupee className="h-5 w-5" />
                  <span className="text-xl">{currentItinerary.totalCost}</span>
                  <span className="text-sm text-muted-foreground font-normal">({currentItinerary.days} days)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{currentItinerary.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-1 bg-musafir-light/60 text-musafir-trekking px-3 py-1 rounded-full text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{currentItinerary.days} Days</span>
                </div>
                <div className="flex items-center gap-1 bg-musafir-light/60 text-musafir-spiritual px-3 py-1 rounded-full text-sm">
                  <IndianRupee className="h-4 w-4" />
                  <span>Budget ₹{currentItinerary.totalCost}</span>
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
              {currentItinerary.dayWiseItinerary.map((day, index) => (
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
              ))}
            </TabsContent>
            
            <TabsContent value="transportation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
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
                      {currentItinerary.transportation.map((transport, index) => (
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
                                {transport.options.map((option, idx) => (
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
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="accommodation" className="mt-4">
              <Card>
                <CardContent className="pt-6">
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
                      {currentItinerary.accommodation.map((accom, index) => (
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
                                {accom.options.map((option, idx) => (
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
                  <h4 className="font-medium">Travel Tips for {currentItinerary.title}</h4>
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
