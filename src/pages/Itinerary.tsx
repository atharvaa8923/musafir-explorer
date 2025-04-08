
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ItineraryDetails from "@/components/ItineraryDetails";
import { Button } from "@/components/ui/button";
import { Mountain, Compass, Map, Tent, Camera } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";
import XRayView from "@/components/xray/XRayView";
import useXRayData from "@/hooks/useXRayData";

const Itinerary = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState("");
  const { t } = useTranslation();
  const { xrayData } = useXRayData(selectedDestination);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // This function will be called from ItineraryDetails when a destination is selected
  const handleDestinationSelected = (destinationId: string) => {
    setSelectedDestination(destinationId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{t('explore_itineraries')}</h1>
            {xrayData && (
              <XRayView 
                info={xrayData} 
                trigger={
                  <Button variant="outline" className="gap-2">
                    <Camera className="h-4 w-4" />
                    XR-AY View
                  </Button>
                }
              />
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => handleCategoryChange("all")}
              className={selectedCategory === "all" ? "bg-musafir-brown" : ""}
            >
              <Compass className="mr-2 h-4 w-4" />
              {t('all')}
            </Button>
            <Button 
              variant={selectedCategory === "trekking" ? "default" : "outline"}
              onClick={() => handleCategoryChange("trekking")}
              className={selectedCategory === "trekking" ? "bg-musafir-trekking" : ""}
            >
              <Tent className="mr-2 h-4 w-4" />
              {t('trekking')}
            </Button>
            <Button 
              variant={selectedCategory === "meditation" ? "default" : "outline"}
              onClick={() => handleCategoryChange("meditation")}
              className={selectedCategory === "meditation" ? "bg-musafir-meditation" : ""}
            >
              <Map className="mr-2 h-4 w-4" />
              {t('meditation')}
            </Button>
            <Button 
              variant={selectedCategory === "religious" ? "default" : "outline"}
              onClick={() => handleCategoryChange("religious")}
              className={selectedCategory === "religious" ? "bg-musafir-spiritual" : ""}
            >
              <Map className="mr-2 h-4 w-4" />
              {t('pilgrimages')}
            </Button>
            <Button 
              variant={selectedCategory === "hiking" ? "default" : "outline"}
              onClick={() => handleCategoryChange("hiking")}
              className={selectedCategory === "hiking" ? "bg-musafir-forest" : ""}
            >
              <Mountain className="mr-2 h-4 w-4" />
              {t('hiking')}
            </Button>
          </div>
        </div>
        <ItineraryDetails 
          selectedCategory={selectedCategory} 
          onDestinationSelected={handleDestinationSelected}
        />
      </main>
      
      <footer className="bg-musafir-brown text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Musafir</h2>
              <p className="text-white/70">Solo adventures under ₹5000</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="/" className="hover:text-white/70 transition-colors">{t('home')}</a>
              <a href="/itinerary" className="hover:text-white/70 transition-colors">{t('itineraries')}</a>
              <a href="#" className="hover:text-white/70 transition-colors">Offline Maps</a>
              <a href="#" className="hover:text-white/70 transition-colors">Weather</a>
              <a href="#" className="hover:text-white/70 transition-colors">Packing List</a>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Musafir. All rights reserved. Solo travel made affordable.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Itinerary;
