
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, IndianRupee } from 'lucide-react';
import LocationSelector from './LocationSelector';
import RangeSlider from './RangeSlider';
import CategorySelector from './CategorySelector';
import ActiveFilters from './ActiveFilters';
import { useFilters, FiltersState } from '@/hooks/useFilters';

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
}

const SearchAndFilter = ({ onFilterChange }: SearchAndFilterProps) => {
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
  } = useFilters(undefined, onFilterChange);
  
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          className="pl-10 pr-4 py-2"
          placeholder="Search destinations..."
          value={filters.searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Location Filter */}
        <LocationSelector 
          location={filters.location}
          open={open}
          setOpen={setOpen}
          onLocationSelect={handleLocationSelect}
          clearLocation={clearLocation}
          locationSuggestions={locationSuggestions}
        />
        
        {/* Budget Range Slider */}
        <RangeSlider
          label="Budget (₹)"
          value={filters.budget}
          min={0}
          max={5000}
          step={100}
          prefixSymbol={<IndianRupee size={12} className="inline" />}
          onChange={handleBudgetChange}
        />
        
        {/* Duration Range Slider */}
        <RangeSlider
          label="Duration (days)"
          value={filters.days}
          min={1}
          max={14}
          step={1}
          unit=" days"
          onChange={handleDaysChange}
        />
      </div>
      
      {/* Categories */}
      <CategorySelector
        categories={categories}
        selectedCategories={filters.categories}
        onCategoryChange={handleCategoryChange}
        onCategoryClear={handleCategoryClear}
      />
      
      {/* Selected filters summary */}
      <ActiveFilters 
        filters={filters}
        clearLocation={clearLocation}
        handleClearAll={handleClearAll}
      />
    </div>
  );
};

export default SearchAndFilter;
