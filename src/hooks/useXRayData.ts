
import { useState, useEffect } from 'react';
import xrayService from '@/services/xrayService';
import { XRayInfo } from '@/components/xray/XRayView';
import { toast } from '@/components/ui/use-toast';

export function useXRayData(destinationId: string) {
  const [xrayData, setXrayData] = useState<XRayInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await xrayService.fetchXRayData(destinationId);
        
        if (isMounted) {
          setXrayData(data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching XR-AY data:', err);
        
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to load historical XR-AY data. Using fallback information.",
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (destinationId) {
      fetchData();
    }
    
    return () => {
      isMounted = false;
    };
  }, [destinationId]);

  return { xrayData, loading, error };
}

export default useXRayData;
