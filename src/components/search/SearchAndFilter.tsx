import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, IndianRupee, Filter } from 'lucide-react';
import LocationSelector from './LocationSelector';
import RangeSlider from './RangeSlider';
import CategorySelector from './CategorySelector';
import ActiveFilters from './ActiveFilters';
import AdvancedFilters from './AdvancedFilters';
import { useFilters, FiltersState } from '@/hooks/useFilters';
import databaseService from '@/services/databaseService';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import useTranslation from '@/hooks/useTranslation';

const categories = [
  { label: 'Trekking', value: 'trekking', color: 'bg-musafir-trekking' },
  { label: 'Meditation', value: 'meditation', color: 'bg-musafir-meditation' },
  { label: 'Rafting', value: 'rafting', color: 'bg-musafir-water' },
  { label: 'Religious', value: 'religious', color: 'bg-musafir-spiritual' },
  { label: 'Hiking', value: 'hiking', color: 'bg-musafir-forest' },
];

const locationSuggestions = [
  "Uttarakhand",
  "Rishikesh",
  "Dharamshala",
  "Himachal Pradesh",
  "Various States",
  "Manali",
  "Kasol",
  "Kedarnath",
];

interface SearchAndFilterProps {
  onFilterChange: (filters: FiltersState) => void;
  initialFilters?: FiltersState;
}

const SearchAndFilter = ({ onFilterChange, initialFilters }: SearchAndFilterProps) => {
  const { t } = useTranslation();
  
  const {
    filters,
    handleSearchChange,
    handleLocationSelect,
    clearLocation,
    handleBudgetChange,
    handleDaysChange,
    handleCategoryChange,
    handleCategoryClear,
    handleClearAll
  } = useFilters(initialFilters, onFilterChange);
  
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const [difficulty, setDifficulty] = useState('');
  const [season, setSeason] = useState('');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [transportation, setTransportation] = useState<string[]>([]);

  const fetchFilteredDestinations = async () => {
    try {
      setIsLoading(true);
      
      const allFilters = {
        ...filters,
        difficulty: difficulty || undefined,
        season: season || undefined,
        amenities: amenities.length > 0 ? amenities : undefined,
        transportation: transportation.length > 0 ? transportation : undefined
      };
      
      const results = await databaseService.searchDestinations(allFilters);
      console.log('Filtered destinations:', results);
      
      toast({
        title: "Search Results",
        description: `Found ${results.length} destinations matching your criteria.`,
      });
    } catch (error) {
      console.error('Error fetching destinations:', error);
      toast({
        title: "Error",
        description: "Could not fetch destinations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (difficulty || season || amenities.length > 0 || transportation.length > 0 ||
          filters.searchQuery || filters.location || 
          filters.categories.length > 0 || 
          filters.budget[0] > 0 || filters.budget[1] < 5000 ||
          filters.days[0] > 1 || filters.days[1] < 14) {
        fetchFilteredDestinations();
      }
    }, 500);
    
    return () => clearTimeout(handler);
  }, [filters, difficulty, season, amenities, transportation]);

  const handleAdvancedFiltersClear = () => {
    setDifficulty('');
    setSeason('');
    setAmenities([]);
    setTransportation([]);
  };

  const handleAllFiltersClear = () => {
    handleClearAll();
    handleAdvancedFiltersClear();
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          className="pl-10 pr-4 py-2"
          placeholder={t('search')}
          value={filters.searchQuery}
          onChange={handleSearchChange}
          disabled={isLoading}
        />
        {isLoading && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin h-4 w-4 border-2 border-musafir-spiritual rounded-full border-t-transparent"></div>
        </div>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LocationSelector 
          location={filters.location}
          open={open}
          setOpen={setOpen}
          onLocationSelect={handleLocationSelect}
          clearLocation={clearLocation}
          locationSuggestions={locationSuggestions}
        />
        
        <RangeSlider
          label={t('budget')}
          value={filters.budget}
          min={0}
          max={5000}
          step={100}
          prefixSymbol={<IndianRupee size={12} className="inline" />}
          onChange={handleBudgetChange}
        />
        
        <RangeSlider
          label={t('duration')}
          value={filters.days}
          min={1}
          max={14}
          step={1}
          unit=" days"
          onChange={handleDaysChange}
        />
      </div>
      
      <CategorySelector
        categories={categories}
        selectedCategories={filters.categories}
        onCategoryChange={handleCategoryChange}
        onCategoryClear={handleCategoryClear}
      />
      
      <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced} className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Advanced Filters</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              <Filter size={16} />
              <span className="sr-only">Toggle advanced filters</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-2">
          <div className="border rounded-md p-4">
            <AdvancedFilters 
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              season={season}
              setSeason={setSeason}
              amenities={amenities}
              setAmenities={setAmenities}
              transportation={transportation}
              setTransportation={setTransportation}
            />
            
            {(difficulty || season || amenities.length > 0 || transportation.length > 0) && (
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAdvancedFiltersClear}
                >
                  Clear Advanced Filters
                </Button>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <ActiveFilters 
        filters={filters}
        clearLocation={clearLocation}
        handleClearAll={handleAllFiltersClear}
        advancedFilters={{
          difficulty,
          season,
          amenities,
          transportation
        }}
      />
    </div>
  );
};

export default SearchAndFilter;
