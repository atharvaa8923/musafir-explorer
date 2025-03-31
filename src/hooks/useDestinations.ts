
import { useState, useEffect } from 'react';
import databaseService from '@/services/databaseService';
import { FiltersState } from '@/hooks/useFilters';
import { toast } from '@/components/ui/use-toast';

export const useDestinations = (initialFilters?: FiltersState) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters || {
    searchQuery: '',
    location: '',
    budget: [0, 5000],
    days: [1, 14],
    categories: [],
  });

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const data = await databaseService.searchDestinations(filters);
      setDestinations(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching destinations:', err);
      setError(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load destinations. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, [filters]);

  const handleFilterChange = (newFilters: FiltersState) => {
    setFilters(newFilters);
  };

  return {
    destinations,
    loading,
    error,
    filters,
    handleFilterChange,
    fetchDestinations,
  };
};

export default useDestinations;
