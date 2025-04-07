
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, X, Filter, MapPin, Image as ImageIcon, 
  ChevronLeft, ChevronRight, Download, Share, Info
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PhotoCard from "./PhotoCard";
import { PhotoItem, photoGalleryData } from "@/data/gallery-data";
import PhotoCategories from "./PhotoCategories";

const PhotoGalleryView = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPhotos, setFilteredPhotos] = useState<PhotoItem[]>(photoGalleryData);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  
  // Extract all unique locations from the data
  const allLocations = Array.from(
    new Set(photoGalleryData.map((photo) => photo.location))
  ).sort();
  
  // Extract all unique categories from the data
  const allCategories = Array.from(
    new Set(photoGalleryData.flatMap((photo) => photo.categories))
  ).sort();
  
  // Apply filters whenever any filter changes
  useEffect(() => {
    let filtered = photoGalleryData;
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (photo) => 
          photo.title.toLowerCase().includes(query) ||
          photo.location.toLowerCase().includes(query) ||
          photo.description.toLowerCase().includes(query) ||
          photo.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }
    
    // Apply location filter
    if (selectedLocation) {
      filtered = filtered.filter(photo => photo.location === selectedLocation);
    }
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(photo => 
        photo.categories.includes(selectedCategory)
      );
    }
    
    setFilteredPhotos(filtered);
  }, [searchQuery, selectedLocation, selectedCategory]);
  
  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocation(null);
    setSelectedCategory(null);
  };
  
  // Set current photo index when selected photo changes
  useEffect(() => {
    if (selectedPhoto) {
      const index = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      if (index !== -1) {
        setCurrentPhotoIndex(index);
      }
    }
  }, [selectedPhoto, filteredPhotos]);
  
  // Navigate to previous photo in lightbox
  const goToPreviousPhoto = () => {
    const newIndex = (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
    setCurrentPhotoIndex(newIndex);
  };
  
  // Navigate to next photo in lightbox
  const goToNextPhoto = () => {
    const newIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
    setCurrentPhotoIndex(newIndex);
  };
  
  // Download the current photo
  const handleDownload = () => {
    if (selectedPhoto) {
      // In a real app, you would implement actual download functionality
      // This is just a simulation for the demo
      toast({
        title: "Download started",
        description: `Downloading ${selectedPhoto.title}...`,
      });
    }
  };
  
  // Share the current photo
  const handleShare = () => {
    if (selectedPhoto) {
      // In a real app, you would implement actual sharing functionality
      // This is just a simulation for the demo
      toast({
        title: "Share options",
        description: "Sharing options would appear here in a real app.",
      });
    }
  };

  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search photos by name, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8" 
              onClick={() => setSearchQuery("")}
            >
              <X size={16} />
            </Button>
          )}
        </div>
        
        <div>
          <select 
            value={selectedLocation || ""}
            onChange={(e) => setSelectedLocation(e.target.value || null)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="">All locations</option>
            {allLocations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'} 
            onClick={() => setViewMode('grid')}
            className="flex-1"
          >
            Grid
          </Button>
          <Button 
            variant={viewMode === 'masonry' ? 'default' : 'outline'} 
            onClick={() => setViewMode('masonry')}
            className="flex-1"
          >
            Masonry
          </Button>
        </div>
      </div>
      
      {/* Active Filters */}
      {(selectedLocation || selectedCategory || searchQuery) && (
        <div className="mb-6 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          
          {selectedLocation && (
            <Badge variant="outline" className="flex gap-1 items-center">
              <MapPin size={14} />
              {selectedLocation}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 ml-1 p-0" 
                onClick={() => setSelectedLocation(null)}
              >
                <X size={12} />
              </Button>
            </Badge>
          )}
          
          {selectedCategory && (
            <Badge variant="outline" className="flex gap-1 items-center">
              <ImageIcon size={14} />
              {selectedCategory}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 ml-1 p-0" 
                onClick={() => setSelectedCategory(null)}
              >
                <X size={12} />
              </Button>
            </Badge>
          )}
          
          {searchQuery && (
            <Badge variant="outline" className="flex gap-1 items-center">
              <Search size={14} />
              "{searchQuery}"
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 ml-1 p-0" 
                onClick={() => setSearchQuery("")}
              >
                <X size={12} />
              </Button>
            </Badge>
          )}
          
          <Button variant="ghost" size="sm" onClick={resetFilters} className="text-sm">
            Clear all
          </Button>
        </div>
      )}
      
      {/* Photo Gallery Tabs */}
      <Tabs defaultValue="gallery" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="gallery">All Photos</TabsTrigger>
          <TabsTrigger value="categories">Browse by Category</TabsTrigger>
          <TabsTrigger value="featured">Featured Collections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery">
          {filteredPhotos.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4"
            }>
              {filteredPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className={viewMode === 'grid' ? "" : "mb-4 break-inside-avoid"}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <PhotoCard 
                    photo={photo} 
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed rounded-lg">
              <ImageIcon size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No photos found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find more photos.
              </p>
              <Button onClick={resetFilters}>Clear Filters</Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="categories">
          <PhotoCategories 
            categories={allCategories} 
            onSelectCategory={setSelectedCategory}
            photoGalleryData={photoGalleryData}
          />
        </TabsContent>
        
        <TabsContent value="featured">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Spiritual Journeys</h3>
              <p className="text-muted-foreground mb-4">
                Explore the most sacred and serene spiritual destinations across India.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {photoGalleryData
                  .filter(photo => photo.categories.includes("Spiritual"))
                  .slice(0, 4)
                  .map(photo => (
                    <div key={photo.id} className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src={photo.url} 
                        alt={photo.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))
                }
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory("Spiritual")}
                className="w-full"
              >
                View Collection
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-3">Mountain Escapes</h3>
              <p className="text-muted-foreground mb-4">
                Breathtaking views from the highest peaks and peaceful mountain retreats.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {photoGalleryData
                  .filter(photo => photo.categories.includes("Mountains"))
                  .slice(0, 4)
                  .map(photo => (
                    <div key={photo.id} className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src={photo.url} 
                        alt={photo.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))
                }
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory("Mountains")}
                className="w-full"
              >
                View Collection
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Photo Lightbox */}
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl h-[80vh] p-0">
          {selectedPhoto && (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex items-center justify-between">
                <h3 className="font-semibold">{selectedPhoto.title}</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={handleDownload}>
                    <Download size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share size={18} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setSelectedPhoto(null)}
                  >
                    <X size={18} />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedPhoto.url} 
                    alt={selectedPhoto.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black/70"
                    onClick={goToPreviousPhoto}
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black/70"
                    onClick={goToNextPhoto}
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
                
                <div className="md:w-80 p-4 border-t md:border-t-0 md:border-l overflow-y-auto">
                  <div className="mb-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <MapPin size={16} className="text-musafir-spiritual" />
                      {selectedPhoto.location}
                    </h4>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">{selectedPhoto.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPhoto.categories.map(category => (
                        <Badge 
                          key={category} 
                          variant="outline"
                          className="cursor-pointer hover:bg-accent"
                          onClick={() => {
                            setSelectedCategory(category);
                            setSelectedPhoto(null);
                          }}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {selectedPhoto.photographer && (
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Info size={14} />
                      Photo by: {selectedPhoto.photographer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGalleryView;
