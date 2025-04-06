
import React from 'react';
import DestinationMap from '@/components/DestinationMap';
import { getFeaturedDestinations } from '@/data';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapSection = () => {
  const featuredDestinations = getFeaturedDestinations(6);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Explore Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover budget-friendly adventures across India with our interactive map.
            Find perfect destinations for your next solo trip.
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-border shadow-md bg-card">
          <div className="h-[500px] relative">
            <DestinationMap 
              locations={featuredDestinations}
            />
          </div>
          
          <div className="p-6 bg-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2 text-musafir-spiritual" size={20} />
              Featured Destinations
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featuredDestinations.slice(0, 3).map((destination) => (
                <Link 
                  key={destination.id}
                  to={`/destination/${destination.id}`}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={destination.image} 
                      alt={destination.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{destination.title}</h4>
                    <p className="text-xs text-muted-foreground">{destination.location}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/destinations">
                <Button variant="outline" className="bg-card">
                  View All Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
