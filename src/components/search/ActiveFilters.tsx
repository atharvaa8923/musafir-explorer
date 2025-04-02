
import React from 'react';
import { X } from 'lucide-react';
import { FiltersState } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import useTranslation from '@/hooks/useTranslation';

interface AdvancedFiltersState {
  difficulty: string;
  season: string;
  amenities: string[];
  transportation: string[];
}

interface ActiveFiltersProps {
  filters: FiltersState;
  clearLocation: () => void;
  handleClearAll: () => void;
  advancedFilters?: AdvancedFiltersState;
}

const ActiveFilters = ({ 
  filters, 
  clearLocation, 
  handleClearAll,
  advancedFilters
}: ActiveFiltersProps) => {
  const { t } = useTranslation();
  
  const hasActiveFilters = () => {
    return filters.searchQuery || 
           filters.location || 
           filters.categories.length > 0 || 
           filters.budget[0] > 0 || 
           filters.budget[1] < 5000 ||
           filters.days[0] > 1 || 
           filters.days[1] < 14 ||
           (advancedFilters?.difficulty) ||
           (advancedFilters?.season) ||
           (advancedFilters?.amenities && advancedFilters.amenities.length > 0) ||
           (advancedFilters?.transportation && advancedFilters.transportation.length > 0);
  };
  
  // Helper function to get display name for amenities and transportation
  const getDisplayName = (id: string): string => {
    const amenityMap: Record<string, string> = {
      'wifi': 'WiFi',
      'shower': 'Hot Shower',
      'food': 'Food Included',
      'guide': 'Guide',
      'equipment': 'Equipment',
      'bus': 'Bus',
      'train': 'Train',
      'taxi': 'Taxi/Car',
      'flight': 'Flight',
      'walking': 'Walking Distance'
    };
    
    return amenityMap[id] || id;
  };
  
  // Helper function to get difficulty display name
  const getDifficultyName = (difficulty: string): string => {
    const difficultyMap: Record<string, string> = {
      'easy': 'Easy - Beginner Friendly',
      'moderate': 'Moderate - Some Experience',
      'difficult': 'Difficult - Experienced',
      'extreme': 'Extreme - Experts Only'
    };
    
    return difficultyMap[difficulty] || difficulty;
  };
  
  // Helper function to get season display name
  const getSeasonName = (season: string): string => {
    const seasonMap: Record<string, string> = {
      'summer': 'Summer (Apr-Jun)',
      'monsoon': 'Monsoon (Jul-Sep)',
      'autumn': 'Autumn (Oct-Nov)',
      'winter': 'Winter (Dec-Mar)',
      'all-year': 'All Year Round'
    };
    
    return seasonMap[season] || season;
  };

  if (!hasActiveFilters()) {
    return null;
  }

  return (
    <div className="border rounded-md p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">Active Filters</h3>
        <Button variant="ghost" size="sm" onClick={handleClearAll} className="h-8 px-2">
          {t('clear_filters')}
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filters.searchQuery && (
          <Badge variant="outline" className="flex items-center gap-1">
            Search: {filters.searchQuery}
          </Badge>
        )}
        
        {filters.location && (
          <Badge variant="outline" className="flex items-center gap-1">
            Location: {filters.location}
            <button 
              onClick={clearLocation}
              className="ml-1 text-muted-foreground hover:text-foreground"
            >
              <X size={12} />
            </button>
          </Badge>
        )}
        
        {(filters.budget[0] > 0 || filters.budget[1] < 5000) && (
          <Badge variant="outline">
            Budget: ₹{filters.budget[0]} - ₹{filters.budget[1]}
          </Badge>
        )}
        
        {(filters.days[0] > 1 || filters.days[1] < 14) && (
          <Badge variant="outline">
            Duration: {filters.days[0]} - {filters.days[1]} days
          </Badge>
        )}
        
        {filters.categories.map((category) => (
          <Badge key={category} variant="outline" className="flex items-center gap-1">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        ))}
        
        {/* Advanced Filters */}
        {advancedFilters?.difficulty && (
          <Badge variant="outline">
            Difficulty: {getDifficultyName(advancedFilters.difficulty)}
          </Badge>
        )}
        
        {advancedFilters?.season && (
          <Badge variant="outline">
            Season: {getSeasonName(advancedFilters.season)}
          </Badge>
        )}
        
        {advancedFilters?.amenities?.map((amenity) => (
          <Badge key={`amenity-${amenity}`} variant="outline" className="flex items-center gap-1">
            Amenity: {getDisplayName(amenity)}
          </Badge>
        ))}
        
        {advancedFilters?.transportation?.map((transport) => (
          <Badge key={`transport-${transport}`} variant="outline" className="flex items-center gap-1">
            Transport: {getDisplayName(transport)}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
