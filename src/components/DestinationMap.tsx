
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { API_ENDPOINTS } from '@/config/apiConfig';
import { Download, Map, Navigation, X, Layers } from 'lucide-react';
import { useOfflineMaps } from '@/hooks/useOfflineMaps';

interface DestinationMapProps {
  location: [number, number];
  title?: string;
  showRoutes?: boolean;
  pointsOfInterest?: Array<{
    coordinates: [number, number];
    title: string;
    description?: string;
  }>;
}

const DestinationMap = ({ 
  location, 
  title, 
  showRoutes = false,
  pointsOfInterest = []
}: DestinationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(localStorage.getItem('mapbox_token') || '');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(!localStorage.getItem('mapbox_token'));
  const [routeVisible, setRouteVisible] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const { 
    downloadRegion, 
    offlineRegions, 
    isDownloading, 
    downloadProgress, 
    deleteRegion,
    isMapAvailableOffline
  } = useOfflineMaps(mapboxToken);

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

      // Add geolocate control
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        }),
        'top-right'
      );

      // Add marker at the main location
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3 class="font-bold">${title || 'Destination'}</h3>`)
        .setMaxWidth('300px');

      new mapboxgl.Marker({ color: '#E57373' })
        .setLngLat(location)
        .setPopup(popup)
        .addTo(map.current);

      // Add points of interest if available
      if (pointsOfInterest && pointsOfInterest.length > 0) {
        pointsOfInterest.forEach((poi, index) => {
          const poiPopup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <h3 class="font-bold">${poi.title}</h3>
              ${poi.description ? `<p>${poi.description}</p>` : ''}
            `)
            .setMaxWidth('300px');

          new mapboxgl.Marker({ color: '#4CAF50' })
            .setLngLat(poi.coordinates)
            .setPopup(poiPopup)
            .addTo(map.current);
        });
      }

      // Add atmosphere and fog effects
      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });

        // Add terrain if available
        map.current?.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        });
        
        map.current?.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
      });

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      setShowTokenInput(true);
    }
  }, [location, mapboxToken, title, pointsOfInterest]);

  // Effect for showing routes when showRoutes is enabled
  useEffect(() => {
    if (!showRoutes || !map.current || !mapboxToken || !routeVisible || selectedPoint === null) return;

    // Clear existing routes
    if (map.current.getSource('route')) {
      map.current.removeLayer('route-layer');
      map.current.removeSource('route');
    }

    const destinationCoords = selectedPoint !== null && pointsOfInterest[selectedPoint] 
      ? pointsOfInterest[selectedPoint].coordinates 
      : null;

    if (!destinationCoords) return;

    // Get route from current location to selected point
    const fetchRoute = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINTS.MAPS.DIRECTIONS}/walking/${location[0]},${location[1]};${destinationCoords[0]},${destinationCoords[1]}?steps=true&geometries=geojson&access_token=${mapboxToken}`
        );
        
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          const routeGeometry = route.geometry;
          
          // Add route to map
          map.current?.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: routeGeometry
            }
          });

          map.current?.addLayer({
            id: 'route-layer',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });

          // Fit bounds to show the entire route
          const bounds = new mapboxgl.LngLatBounds();
          routeGeometry.coordinates.forEach((coord: [number, number]) => {
            bounds.extend(coord);
          });
          
          map.current?.fitBounds(bounds, {
            padding: 50,
            duration: 1000
          });
          
          // Display route info
          const distance = route.distance;
          const duration = route.duration;
          
          toast({
            title: "Route Information",
            description: `Distance: ${(distance / 1000).toFixed(2)} km | Duration: ${Math.floor(duration / 60)} minutes`
          });
        }
      } catch (error) {
        console.error("Error fetching route:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load route information."
        });
      }
    };

    fetchRoute();
  }, [location, showRoutes, mapboxToken, routeVisible, selectedPoint, pointsOfInterest]);

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

  const handleDownloadMap = async () => {
    if (!map.current) return;
    
    const bounds = map.current.getBounds();
    const minLng = bounds.getWest();
    const minLat = bounds.getSouth();
    const maxLng = bounds.getEast();
    const maxLat = bounds.getNorth();
    
    try {
      await downloadRegion({
        name: title || 'Destination Map',
        bounds: [minLng, minLat, maxLng, maxLat],
        minZoom: 8,
        maxZoom: 14
      });
      
      toast({
        title: "Success",
        description: "Map area downloaded for offline use."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to download map for offline use."
      });
    }
  };

  const handleToggleRoute = (pointIndex: number) => {
    if (selectedPoint === pointIndex) {
      setRouteVisible(false);
      setSelectedPoint(null);
      
      // Remove route from map
      if (map.current?.getSource('route')) {
        map.current.removeLayer('route-layer');
        map.current.removeSource('route');
      }
    } else {
      setSelectedPoint(pointIndex);
      setRouteVisible(true);
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
    <div className="relative rounded-lg overflow-hidden">
      <div className="h-[300px]">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-2 right-12 z-10 flex flex-col gap-2">
        {mapboxToken && (
          <Button 
            size="sm"
            variant="secondary"
            className="px-2 py-1 bg-background/80 text-xs rounded"
            onClick={() => setShowTokenInput(true)}
          >
            Change Token
          </Button>
        )}
        
        <Button 
          size="sm"
          variant="secondary"
          className="px-2 py-1 bg-background/80 text-xs rounded flex items-center gap-1"
          onClick={handleDownloadMap}
          disabled={isDownloading || isMapAvailableOffline(title || 'Destination Map')}
        >
          <Download size={14} />
          {isMapAvailableOffline(title || 'Destination Map') ? 'Downloaded' : 'Download Map'}
        </Button>
      </div>
      
      {/* Points of Interest Panel */}
      {showRoutes && pointsOfInterest.length > 0 && (
        <div className="mt-2 border border-border rounded-lg p-2 bg-card">
          <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Map size={16} /> Points of Interest
          </h3>
          <div className="space-y-2 max-h-[150px] overflow-y-auto">
            {pointsOfInterest.map((poi, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span>{poi.title}</span>
                <Button 
                  size="sm" 
                  variant={selectedPoint === index && routeVisible ? "default" : "outline"}
                  className="h-7 px-2 flex items-center gap-1"
                  onClick={() => handleToggleRoute(index)}
                >
                  <Navigation size={14} />
                  {selectedPoint === index && routeVisible ? 'Hide Route' : 'Show Route'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Offline Maps Progress Indicator */}
      {isDownloading && (
        <div className="mt-2 border border-border rounded-lg p-2 bg-card">
          <div className="flex justify-between items-center">
            <span className="text-sm">Downloading map...</span>
            <span className="text-sm font-medium">{downloadProgress}%</span>
          </div>
          <div className="w-full bg-muted h-2 rounded-full mt-1">
            <div 
              className="bg-musafir-spiritual h-2 rounded-full" 
              style={{ width: `${downloadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Offline Maps Management */}
      {offlineRegions.length > 0 && (
        <div className="mt-2 border border-border rounded-lg p-2 bg-card">
          <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Layers size={16} /> Offline Maps
          </h3>
          <div className="space-y-2 max-h-[150px] overflow-y-auto">
            {offlineRegions.map((region, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span>{region.name}</span>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="h-7 px-2 text-destructive hover:text-destructive"
                  onClick={() => deleteRegion(region.id)}
                >
                  <X size={14} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationMap;
