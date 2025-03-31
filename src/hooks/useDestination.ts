
import { useState, useEffect } from 'react';
import databaseService from '@/services/databaseService';
import { toast } from '@/components/ui/use-toast';

export const useDestination = (id: string) => {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchDestination = async () => {
      try {
        setLoading(true);
        const data = await databaseService.getDestinationById(id);
        
        if (isMounted) {
          setDestination(data || null);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching destination:', err);
        
        if (isMounted) {
          setError(err);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to load destination details. Please try again later.",
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDestination();
    
    // Subscribe to changes for this specific destination
    const unsubscribe = databaseService.subscribeToDestination(id, (updatedDestination) => {
      if (isMounted) {
        if (updatedDestination) {
          setDestination(updatedDestination);
        } else {
          // If destination was deleted
          setDestination(null);
          setError(new Error("Destination no longer exists"));
          toast({
            variant: "destructive",
            title: "Destination Removed",
            description: "This destination has been removed from the database.",
          });
        }
      }
    });
    
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [id]);

  return { destination, loading, error };
};

export default useDestination;
