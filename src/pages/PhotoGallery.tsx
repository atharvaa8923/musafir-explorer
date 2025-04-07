
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import { Toaster } from "@/components/ui/toaster";
import PhotoGalleryView from "@/components/gallery/PhotoGalleryView";
import { useToast } from "@/components/ui/use-toast";
import usePageTransition from "@/hooks/usePageTransition";

const PhotoGallery = () => {
  // Add page transition effect
  usePageTransition();
  const { toast } = useToast();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Destination Photo Gallery</h1>
          <p className="text-muted-foreground">
            Explore breathtaking images from budget-friendly travel destinations across India
          </p>
        </div>
        
        <PhotoGalleryView />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default PhotoGallery;
