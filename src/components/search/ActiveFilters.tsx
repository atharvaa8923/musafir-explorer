
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IndianRupee, Calendar, X } from 'lucide-react';

interface FiltersState {
  searchQuery: string;
  location: string;
  budget: [number, number];
  days: [number, number];
  categories: string[];
}

interface ActiveFiltersProps {
  filters: FiltersState;
  clearLocation: () => void;
  handleClearAll: () => void;
}

const ActiveFilters = ({ filters, clearLocation, handleClearAll }: ActiveFiltersProps) => {
  // Only show if there are active filters
  const hasActiveFilters = filters.searchQuery || 
                          filters.location || 
                          filters.budget[0] > 0 || 
                          filters.budget[1] < 5000 || 
                          filters.days[0] > 1 || 
                          filters.days[1] < 14 || 
                          filters.categories.length > 0;
  
  if (!hasActiveFilters) return null;
  
  return (
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
  );
};

export default ActiveFilters;
