
import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '@/config/apiConfig';

interface Region {
  id: string;
  name: string;
  bounds: [number, number, number, number]; // [minLng, minLat, maxLng, maxLat]
  minZoom: number;
  maxZoom: number;
  size?: number;
  lastUpdated?: string;
}

interface DownloadRegionParams {
  name: string;
  bounds: [number, number, number, number]; // [minLng, minLat, maxLng, maxLat]
  minZoom: number;
  maxZoom: number;
}

export const useOfflineMaps = (mapboxToken: string) => {
  const [offlineRegions, setOfflineRegions] = useState<Region[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Load saved regions from localStorage
  useEffect(() => {
    const savedRegions = localStorage.getItem('offline_maps');
    if (savedRegions) {
      try {
        setOfflineRegions(JSON.parse(savedRegions));
      } catch (error) {
        console.error("Error parsing offline maps data:", error);
        localStorage.removeItem('offline_maps');
      }
    }
  }, []);

  // Save regions to localStorage when they change
  useEffect(() => {
    if (offlineRegions.length > 0) {
      localStorage.setItem('offline_maps', JSON.stringify(offlineRegions));
    }
  }, [offlineRegions]);

  // Function to check if a region is available offline
  const isMapAvailableOffline = (name: string): boolean => {
    return offlineRegions.some(region => region.name === name);
  };

  // Function to download a region for offline use
  const downloadRegion = async (params: DownloadRegionParams): Promise<void> => {
    if (!mapboxToken) {
      throw new Error("Mapbox token is required");
    }

    // Check if region already exists
    if (isMapAvailableOffline(params.name)) {
      return;
    }

    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      // In a real implementation, this would use Mapbox's offline API
      // Here we'll simulate the download process

      // Simulate download progress
      const totalSteps = 10;
      
      for (let i = 1; i <= totalSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setDownloadProgress(Math.floor((i / totalSteps) * 100));
      }

      // Create a new region object
      const newRegion: Region = {
        id: `region_${Date.now()}`,
        name: params.name,
        bounds: params.bounds,
        minZoom: params.minZoom,
        maxZoom: params.maxZoom,
        size: Math.floor(Math.random() * 50) + 10, // Simulate size in MB
        lastUpdated: new Date().toISOString()
      };

      // Add to the list of offline regions
      setOfflineRegions(prev => [...prev, newRegion]);

      // In a real implementation, we would also cache the actual map tiles
      // This would involve using the Mapbox GL JS offline APIs or a service worker

      setIsDownloading(false);
      setDownloadProgress(100);
      
      return;
    } catch (error) {
      console.error("Error downloading region:", error);
      setIsDownloading(false);
      throw error;
    }
  };

  // Function to delete an offline region
  const deleteRegion = (regionId: string): void => {
    setOfflineRegions(prev => prev.filter(region => region.id !== regionId));
    
    // If no regions left, remove the localStorage item
    if (offlineRegions.length === 1) {
      localStorage.removeItem('offline_maps');
    }
  };

  return {
    offlineRegions,
    isDownloading,
    downloadProgress,
    downloadRegion,
    deleteRegion,
    isMapAvailableOffline
  };
};
