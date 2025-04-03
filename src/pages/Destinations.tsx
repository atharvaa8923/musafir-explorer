
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Link, useLocation } from "react-router-dom";
import DestinationCard from "@/components/DestinationCard";
import { SearchAndFilter } from "@/components/search";
import { useDestinations } from "@/hooks/useDestinations";
import { FiltersState } from "@/hooks/useFilters";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const Destinations = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get('search') || '';
  
  const {
    destinations: filteredDestinations,
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
          
          <div className="mb-6 flex justify-between items-center">
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
          ) : filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredDestinations.map((destination, index) => (
                <Link to={`/destination/${destination.id}`} key={destination.id || index} className="block h-full">
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
