
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface DestinationMapProps {
  location: [number, number];
}

const DestinationMap = ({ location }: DestinationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(localStorage.getItem('mapbox_token') || '');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(!localStorage.getItem('mapbox_token'));

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: location,
        zoom: 10,
        pitch: 50,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker at the location
      new mapboxgl.Marker({ color: '#E57373' })
        .setLngLat(location)
        .addTo(map.current);

      // Add atmosphere and fog effects
      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });
      });

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      setShowTokenInput(true);
    }
  }, [location, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      localStorage.setItem('mapbox_token', mapboxToken);
      setShowTokenInput(false);
      toast({
        title: "Success",
        description: "Mapbox token saved. The map will now load.",
      });
      // Reload the map with the new token
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    }
  };

  if (showTokenInput) {
    return (
      <div className="border border-border rounded-lg p-4 bg-muted/30">
        <h3 className="text-lg font-medium mb-2">Mapbox Token Required</h3>
        <p className="text-sm text-muted-foreground mb-4">
          To display the interactive map, please enter your Mapbox public token. You can get one for free from{' '}
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-musafir-spiritual underline">
            mapbox.com
          </a>
        </p>
        <form onSubmit={handleTokenSubmit} className="space-y-2">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="bg-background"
          />
          <Button type="submit" className="w-full bg-musafir-spiritual hover:bg-musafir-spiritual/90">
            Save Token
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      {mapboxToken && (
        <button 
          className="absolute top-2 right-12 z-10 text-xs px-2 py-1 bg-background/80 rounded text-muted-foreground hover:bg-background"
          onClick={() => setShowTokenInput(true)}
        >
          Change Token
        </button>
      )}
    </div>
  );
};

export default DestinationMap;
