
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Link, useLocation } from "react-router-dom";
import DestinationCard from "@/components/DestinationCard";
import { SearchAndFilter } from "@/components/search";
import { useDestinations } from "@/hooks/useDestinations";
import { FiltersState } from "@/hooks/useFilters";
import { Button } from "@/components/ui/button";
import { RefreshCw, MapPin, MapIcon, Heart, List, ArrowUpDown } from "lucide-react";
import DestinationMap from "@/components/DestinationMap";
import TravelInsights from "@/components/TravelInsights";
import RelatedDestinations from "@/components/RelatedDestinations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

// Type for sortable fields
type SortField = 'price' | 'days' | 'popularity';

// Type for sort order
type SortOrder = 'asc' | 'desc';

const Destinations = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get('search') || '';
  const { toast } = useToast();
  
  // State for view type (list or map)
  const [viewType, setViewType] = useState<'list' | 'map'>('list');
  
  // State for favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  // State for sorting
  const [sortField, setSortField] = useState<SortField>('price');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const {
    destinations: unsortedDestinations,
    loading,
    filters,
    handleFilterChange,
    refreshDestinations
  } = useDestinations({
    searchQuery: initialSearchQuery,
    location: '',
    budget: [0, 5000],
    days: [1, 14],
    categories: [],
  });

  // Sort destinations based on sort field and order
  const filteredDestinations = [...unsortedDestinations].sort((a, b) => {
    if (sortField === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortField === 'days') {
      return sortOrder === 'asc' ? a.days - b.days : b.days - a.days;
    } else if (sortField === 'popularity') {
      // Fallback sorting by id for now
      return sortOrder === 'asc' 
        ? (a.popularity || 0) - (b.popularity || 0) 
        : (b.popularity || 0) - (a.popularity || 0);
    }
    return 0;
  });

  // Apply search from URL when component mounts
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      handleFilterChange({
        ...filters,
        searchQuery
      });
    }
  }, [location.search]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Handle toggling a destination as favorite
  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        toast({
          title: "Removed from favorites",
          description: "This destination has been removed from your favorites.",
        });
        return prev.filter(favId => favId !== id);
      } else {
        toast({
          title: "Added to favorites",
          description: "This destination has been added to your favorites.",
        });
        return [...prev, id];
      }
    });
  };

  // Handle sorting change
  const handleSortChange = (value: string) => {
    const [field, order] = value.split('-') as [SortField, SortOrder];
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Explore Destinations</h1>
            <p className="text-muted-foreground">
              Discover budget-friendly solo adventures across India under ₹5000
            </p>
          </div>
          
          <div className="mb-8 p-4 border border-border rounded-lg bg-card">
            <SearchAndFilter 
              onFilterChange={handleFilterChange}
              initialFilters={{
                ...filters,
                searchQuery: initialSearchQuery
              }}
            />
          </div>
          
          <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold">{filteredDestinations.length} destinations found</h2>
              {Object.values(filters).some(value => 
                Array.isArray(value) 
                  ? value.length > 0 
                  : value !== '' && value !== 0
              ) && (
                <p className="text-sm text-muted-foreground">Filtered results based on your preferences</p>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <Select defaultValue="price-asc" onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="days-asc">Duration: Short to Long</SelectItem>
                  <SelectItem value="days-desc">Duration: Long to Short</SelectItem>
                  <SelectItem value="popularity-desc">Most Popular</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Toggle View Type */}
              <div className="flex rounded-md overflow-hidden border border-input">
                <Button 
                  variant={viewType === 'list' ? 'default' : 'outline'} 
                  className="rounded-none"
                  onClick={() => setViewType('list')}
                  size="sm"
                >
                  <List className="h-4 w-4 mr-1" />
                  List
                </Button>
                <Button 
                  variant={viewType === 'map' ? 'default' : 'outline'} 
                  className="rounded-none"
                  onClick={() => setViewType('map')}
                  size="sm"
                >
                  <MapIcon className="h-4 w-4 mr-1" />
                  Map
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refreshDestinations}
                disabled={loading}
                className="flex items-center gap-1"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[...Array(6)].map((_, index) => (
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
            <>
              {viewType === 'list' ? (
                filteredDestinations.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {filteredDestinations.map((destination, index) => (
                      <div key={destination.id || index} className="relative">
                        <Link to={`/destination/${destination.id}`} className="block h-full">
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
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm z-10"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(destination.id);
                          }}
                        >
                          <Heart 
                            className={`h-4 w-4 ${favorites.includes(destination.id) ? 'fill-red-500 text-red-500' : ''}`} 
                          />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border border-border rounded-lg bg-card">
                    <h3 className="text-xl font-medium mb-2">No destinations found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters to find destinations that match your preferences.
                    </p>
                    <button 
                      className="text-musafir-spiritual font-medium"
                      onClick={() => handleFilterChange({
                        searchQuery: '',
                        location: '',
                        budget: [0, 5000],
                        days: [1, 14],
                        categories: [],
                      })}
                    >
                      Clear all filters
                    </button>
                  </div>
                )
              ) : (
                <div className="mb-10 border border-border rounded-lg overflow-hidden h-[500px]">
                  <DestinationMap locations={filteredDestinations} />
                </div>
              )}
            </>
          )}
          
          {/* Travel Insights Section */}
          <TravelInsights />
          
          {/* Related Destinations */}
          {filteredDestinations.length > 0 && (
            <RelatedDestinations currentDestinations={filteredDestinations} />
          )}
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
              <Link to="/destinations" className="hover:text-white/70 transition-colors">Destinations</Link>
              <Link to="/itinerary" className="hover:text-white/70 transition-colors">Itineraries</Link>
              <a href="#" className="hover:text-white/70 transition-colors">Offline Maps</a>
              <a href="#" className="hover:text-white/70 transition-colors">Weather</a>
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

export default Destinations;
