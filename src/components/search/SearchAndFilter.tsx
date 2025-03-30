
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, IndianRupee } from 'lucide-react';
import LocationSelector from './LocationSelector';
import RangeSlider from './RangeSlider';
import CategorySelector from './CategorySelector';
import ActiveFilters from './ActiveFilters';

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

interface FiltersState {
  searchQuery: string;
  location: string;
  budget: [number, number];
  days: [number, number];
  categories: string[];
}

interface SearchAndFilterProps {
  onFilterChange: (filters: FiltersState) => void;
}

const SearchAndFilter = ({ onFilterChange }: SearchAndFilterProps) => {
  const [filters, setFilters] = useState<FiltersState>({
    searchQuery: '',
    location: '',
    budget: [0, 5000],
    days: [1, 14],
    categories: [],
  });
  
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, searchQuery: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleLocationSelect = (location: string) => {
    const newFilters = { ...filters, location };
    setFilters(newFilters);
    onFilterChange(newFilters);
    setOpen(false);
  };

  const handleBudgetChange = (value: number[]) => {
    // Ensure we have exactly two values for the budget tuple
    const budgetTuple: [number, number] = [
      value[0] ?? filters.budget[0],
      value[1] ?? filters.budget[1]
    ];
    
    const newFilters = { ...filters, budget: budgetTuple };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDaysChange = (value: number[]) => {
    // Ensure we have exactly two values for the days tuple
    const daysTuple: [number, number] = [
      value[0] ?? filters.days[0],
      value[1] ?? filters.days[1]
    ];
    
    const newFilters = { ...filters, days: daysTuple };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (value: string) => {
    let newCategories: string[];
    
    if (filters.categories.includes(value)) {
      newCategories = filters.categories.filter(cat => cat !== value);
    } else {
      newCategories = [...filters.categories, value];
    }
    
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryClear = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    const newCategories = filters.categories.filter(cat => cat !== category);
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    const resetFilters: FiltersState = {
      searchQuery: '',
      location: '',
      budget: [0, 5000],
      days: [1, 14],
      categories: [],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const clearLocation = () => {
    const newFilters = { ...filters, location: '' };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

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
