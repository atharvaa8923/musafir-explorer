import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, IndianRupee, MapPin, Clock, Bus, TrainFront, Info, Utensils, Hotel, Camera, Navigation } from "lucide-react";
import DestinationMap from "@/components/DestinationMap";
import TransportationOptions from "@/components/TransportationOptions";
import { useToast } from "@/components/ui/use-toast";
import { destinations } from "@/data";
import useDestination from "@/hooks/useDestination";
import XRayView from "@/components/xray/XRayView";
import useXRayData from "@/hooks/useXRayData";

const DestinationDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { destination, loading, error } = useDestination(id || '');
  const { xrayData, loading: xrayLoading } = useXRayData(id || '');
  
  const destinationData = destination || destinations.find(d => d.id === id);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-musafir-spiritual rounded-full border-t-transparent"></div>
        </main>
      </div>
    );
  }
  
  if (error || !destinationData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
            <p className="mb-6">The destination you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleBookNow = () => {
    toast({
      title: "Booking initiated",
      description: "Your booking for " + destinationData.title + " has been initiated.",
    });
  };
  
  const pointsOfInterest = destinationData.itinerary
    ? destinationData.itinerary
        .flatMap(day => day.locations || [])
        .filter(location => location && location.coordinates)
        .map(location => ({
          coordinates: location.coordinates as [number, number],
          title: location.name,
          description: location.description
        }))
    : [];

  const xrayButton = (
    <Button variant="outline" className="flex items-center gap-2 ml-auto">
      <Camera className="h-4 w-4" />
      XR-AY View
    </Button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative h-[50vh]">
          <img 
            src={destinationData.image} 
            alt={destinationData.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <Badge className={`mb-3 ${destinationData.categoryColor} hover:${destinationData.categoryColor}`}>
                {destinationData.categoryLabel}
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-2">{destinationData.title}</h1>
              <div className="flex items-center text-white/80 mb-2">
                <MapPin size={18} className="mr-1" />
                <span>{destinationData.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-white/80">
                  <IndianRupee size={18} className="mr-1" />
                  <span className="font-medium">{destinationData.price}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar size={18} className="mr-1" />
                  <span>{destinationData.days} days</span>
                </div>
                {xrayData && !xrayLoading && (
                  <div className="ml-auto">
                    <XRayView 
                      info={xrayData} 
                      trigger={
                        <Button variant="outline" className="bg-black/40 text-white border-white/30 hover:bg-black/60 hover:text-white">
                          <Camera className="mr-2 h-4 w-4" />
                          XR-AY View
                        </Button>
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="routes">Routes & Maps</TabsTrigger>
                  </TabsList>
                  
                  {xrayData && !xrayLoading && (
                    <XRayView info={xrayData} />
                  )}
                </div>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">About {destinationData.title}</h2>
                    <p className="mb-4">{destinationData.description}</p>
                    <p>{destinationData.longDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {destinationData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Info size={18} className="mr-2 text-musafir-spiritual flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                    <div className="flex items-start">
                      <Clock size={18} className="mr-2 text-musafir-spiritual flex-shrink-0 mt-1" />
                      <span>{destinationData.bestTimeToVisit}</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Day-by-Day Itinerary</h2>
                  {destinationData.itinerary.map((day, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2">Day {index + 1}: {day.title}</h3>
                      <p className="mb-3">{day.description}</p>
                      
                      {day.activities && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Activities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {day.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {day.meals && (
                        <div className="mt-4 flex items-start">
                          <Utensils size={16} className="mr-2 text-musafir-trekking flex-shrink-0 mt-1" />
                          <span><strong>Meals:</strong> {day.meals}</span>
                        </div>
                      )}
                      
                      {day.accommodation && (
                        <div className="mt-2 flex items-start">
                          <Hotel size={16} className="mr-2 text-musafir-meditation flex-shrink-0 mt-1" />
                          <span><strong>Stay:</strong> {day.accommodation}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="accommodation" className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Accommodation Details</h2>
                  {destinationData.accommodation.map((item, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="mb-2">{item.description}</p>
                      <div className="flex items-start mt-3">
                        <MapPin size={16} className="mr-2 text-musafir-spiritual flex-shrink-0 mt-1" />
                        <span>{item.location}</span>
                      </div>
                      {item.amenities && (
                        <div className="mt-3">
                          <h4 className="font-medium mb-2">Amenities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.amenities.map((amenity, i) => (
                              <Badge key={i} variant="outline">{amenity}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="gallery" className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {destinationData.gallery.map((image, index) => (
                      <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${destinationData.title} - Photo ${index + 1}`} 
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="routes" className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4">Routes & Offline Maps</h2>
                  <p className="mb-6">
                    View recommended routes and download maps for offline use during your journey to {destinationData.title}.
                  </p>
                  
                  <div className="bg-card border border-border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <Navigation className="mr-2 text-musafir-spiritual" size={20} />
                        Interactive Route Map
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Explore the area and view routes to key points of interest. Download the map for offline use during your travels.
                      </p>
                    </div>
                    
                    <div className="h-[400px] relative">
                      <DestinationMap 
                        location={destinationData.coordinates} 
                        title={destinationData.title}
                        showRoutes={true}
                        pointsOfInterest={pointsOfInterest}
                      />
                    </div>
                    
                    <div className="p-4 border-t border-border">
                      <h4 className="font-medium mb-2">Map Instructions:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Click "Download Map" to save this area for offline use</li>
                        <li>Use the "Show Route" buttons to view directions to each point of interest</li>
                        <li>Tap the markers to see information about each location</li>
                        <li>Once downloaded, this map will be available even without internet connection</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Key Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pointsOfInterest.map((poi, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <h4 className="font-medium">{poi.title}</h4>
                          {poi.description && <p className="text-sm text-muted-foreground mt-1">{poi.description}</p>}
                          <div className="flex items-center mt-2 text-sm">
                            <MapPin size={14} className="mr-1 text-musafir-spiritual" />
                            <span>
                              {poi.coordinates[1].toFixed(6)}, {poi.coordinates[0].toFixed(6)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4">Book This Trip</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>₹{destinationData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>{destinationData.days} days</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{destinationData.price}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-musafir-spiritual hover:bg-musafir-spiritual/90 mb-3"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Secure your spot with a refundable deposit
                </p>
              </div>
              
              {xrayData && !xrayLoading && (
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Historical XR-AY</h3>
                    <XRayView 
                      info={xrayData} 
                      trigger={
                        <Button variant="outline" size="sm">
                          <Camera className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      }
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore historical images and discover the fascinating history of {destinationData.title}.
                  </p>
                  {xrayData.historicalImages[0] && (
                    <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src={xrayData.historicalImages[0].url} 
                        alt={`Historical image of ${destinationData.title}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                        <div className="text-sm font-medium">Circa {xrayData.historicalImages[0].year}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4">Location & Map</h3>
                <div className="h-[300px] rounded-lg overflow-hidden mb-4">
                  <DestinationMap location={destinationData.coordinates} title={destinationData.title} />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {destinationData.locationDescription}
                </p>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4">Transportation Options</h3>
                <TransportationOptions 
                  destination={destinationData.location} 
                  options={destinationData.transportation} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-musafir-brown text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Musafir</h2>
              <p className="text-white/70">Solo adventures under ₹5000</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
              <Link to="/itinerary" className="hover:text-white/70 transition-colors">Itineraries</Link>
              <a href="#" className="hover:text-white/70 transition-colors">Offline Maps</a>
              <a href="#" className="hover:text-white/70 transition-colors">Weather</a>
              <a href="#" className="hover:text-white/70 transition-colors">Packing List</a>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Musafir. All rights reserved. Solo travel made affordable.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DestinationDetail;
