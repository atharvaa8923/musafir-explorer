
import { useState } from 'react';

export interface FiltersState {
  searchQuery: string;
  location: string;
  budget: [number, number];
  days: [number, number];
  categories: string[];
}

interface UseFiltersReturn {
  filters: FiltersState;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationSelect: (location: string) => void;
  clearLocation: () => void;
  handleBudgetChange: (value: number[]) => void;
  handleDaysChange: (value: number[]) => void;
  handleCategoryChange: (value: string) => void;
  handleCategoryClear: (e: React.MouseEvent, category: string) => void;
  handleClearAll: () => void;
}

export const useFilters = (
  initialFilters: FiltersState = {
    searchQuery: '',
    location: '',
    budget: [0, 5000],
    days: [1, 14],
    categories: [],
  },
  onFilterChange?: (filters: FiltersState) => void
): UseFiltersReturn => {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, searchQuery: e.target.value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleLocationSelect = (location: string) => {
    const newFilters = { ...filters, location };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearLocation = () => {
    const newFilters = { ...filters, location: '' };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleBudgetChange = (value: number[]) => {
    // Ensure we have exactly two values for the budget tuple
    const budgetTuple: [number, number] = [
      value[0] ?? filters.budget[0],
      value[1] ?? filters.budget[1]
    ];
    
    const newFilters = { ...filters, budget: budgetTuple };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleDaysChange = (value: number[]) => {
    // Ensure we have exactly two values for the days tuple
    const daysTuple: [number, number] = [
      value[0] ?? filters.days[0],
      value[1] ?? filters.days[1]
    ];
    
    const newFilters = { ...filters, days: daysTuple };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
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
    onFilterChange?.(newFilters);
  };

  const handleCategoryClear = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    const newCategories = filters.categories.filter(cat => cat !== category);
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
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
    onFilterChange?.(resetFilters);
  };

  return {
    filters,
    handleSearchChange,
    handleLocationSelect,
    clearLocation,
    handleBudgetChange,
    handleDaysChange,
    handleCategoryChange,
    handleCategoryClear,
    handleClearAll,
  };
};
