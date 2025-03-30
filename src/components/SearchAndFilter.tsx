
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { IndianRupee, Calendar, Search, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    const newFilters = { ...filters, budget: [value[0], value[1]] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDaysChange = (value: number[]) => {
    const newFilters = { ...filters, days: [value[0], value[1]] };
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
        <div>
          <Label className="mb-2 block">Location</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {filters.location ? filters.location : "Select location..."}
                {filters.location ? (
                  <X className="ml-2 h-4 w-4 hover:opacity-70 cursor-pointer" onClick={clearLocation} />
                ) : (
                  <></>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search location..." />
                <CommandList>
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandGroup>
                    {locationSuggestions.map((location) => (
                      <CommandItem
                        key={location}
                        value={location}
                        onSelect={() => handleLocationSelect(location)}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            filters.location === location ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        {location}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Budget Range */}
        <div>
          <div className="flex justify-between mb-2">
            <Label>Budget (₹)</Label>
            <span className="text-sm text-muted-foreground">
              ₹{filters.budget[0]} - ₹{filters.budget[1]}
            </span>
          </div>
          <Slider
            defaultValue={[0, 5000]}
            max={5000}
            step={100}
            onValueChange={handleBudgetChange}
            value={[filters.budget[0], filters.budget[1]]}
            className="mt-2"
          />
        </div>
        
        {/* Duration Range */}
        <div>
          <div className="flex justify-between mb-2">
            <Label>Duration (days)</Label>
            <span className="text-sm text-muted-foreground">
              {filters.days[0]} - {filters.days[1]} days
            </span>
          </div>
          <Slider
            defaultValue={[1, 14]}
            min={1}
            max={14}
            step={1}
            onValueChange={handleDaysChange}
            value={[filters.days[0], filters.days[1]]}
            className="mt-2"
          />
        </div>
      </div>
      
      {/* Categories */}
      <div>
        <Label className="mb-2 block">Categories</Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.value}
              variant={filters.categories.includes(category.value) ? "default" : "outline"}
              className={`cursor-pointer ${
                filters.categories.includes(category.value) ? category.color : ""
              }`}
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.label}
              {filters.categories.includes(category.value) && (
                <X
                  size={14}
                  className="ml-1 hover:opacity-70"
                  onClick={(e) => handleCategoryClear(e, category.value)}
                />
              )}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Selected filters summary */}
      {(filters.searchQuery || filters.location || filters.budget[0] > 0 || filters.budget[1] < 5000 || 
         filters.days[0] > 1 || filters.days[1] < 14 || filters.categories.length > 0) && (
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Filters:</span>
            
            {filters.location && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.location}
                <X size={12} className="cursor-pointer" onClick={clearLocation} />
              </Badge>
            )}
            
            {(filters.budget[0] > 0 || filters.budget[1] < 5000) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <IndianRupee size={12} />
                {filters.budget[0]}-{filters.budget[1]}
              </Badge>
            )}
            
            {(filters.days[0] > 1 || filters.days[1] < 14) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar size={12} />
                {filters.days[0]}-{filters.days[1]} days
              </Badge>
            )}
          </div>
          
          <Button variant="ghost" size="sm" onClick={handleClearAll}>
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
