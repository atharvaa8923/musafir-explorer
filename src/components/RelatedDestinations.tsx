
import React, { useEffect, useState } from 'react';
import DestinationCard from '@/components/DestinationCard';
import { Destination } from '@/data/types';
import { Link } from 'react-router-dom';
import databaseService from '@/services/databaseService';

interface RelatedDestinationsProps {
  currentDestinations: Destination[];
}

const RelatedDestinations: React.FC<RelatedDestinationsProps> = ({ currentDestinations }) => {
  const [relatedDestinations, setRelatedDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchRelatedDestinations = async () => {
      if (currentDestinations.length === 0) return;
      
      setLoading(true);
      
      try {
        // Get categories from current destinations
        const categories = currentDestinations
          .map(dest => dest.category)
          .filter((value, index, self) => self.indexOf(value) === index);
        
        // Get locations from current destinations
        const locations = currentDestinations
          .map(dest => dest.location.split(',')[0].trim())
          .filter((value, index, self) => self.indexOf(value) === index);
        
        // Get all destinations
        const allDestinations = await databaseService.getDestinations();
        
        // Filter destinations that are similar but not in current destinations
        const currentIds = currentDestinations.map(d => d.id);
        
        const similar = allDestinations.filter(dest => 
          // Not in current destinations
          !currentIds.includes(dest.id) && 
          (
            // Same category
            categories.includes(dest.category) ||
            // Same region (first part of location)
            locations.some(loc => 
              dest.location.toLowerCase().includes(loc.toLowerCase())
            )
          )
        );
        
        // Take a random selection of up to 3 related destinations
        const shuffled = [...similar].sort(() => 0.5 - Math.random());
        setRelatedDestinations(shuffled.slice(0, 3));
      } catch (error) {
        console.error('Error fetching related destinations:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRelatedDestinations();
  }, [currentDestinations]);
  
  if (relatedDestinations.length === 0) return null;
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-card h-[300px] animate-pulse">
              <div className="h-40 bg-muted"></div>
              <div className="p-4 space-y-3">
                <div className="h-5 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="flex justify-between mt-4">
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedDestinations.map((destination) => (
            <Link key={destination.id} to={`/destination/${destination.id}`} className="block h-full">
              <DestinationCard 
                id={destination.id}
                image={destination.image}
                title={destination.title}
                location={destination.location}
                price={destination.price}
                days={destination.days}
                category={destination.category}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedDestinations;
