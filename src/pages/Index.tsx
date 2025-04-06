
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatBot from "@/components/ChatBot";
import {
  FeaturedDestinations,
  FeaturesSection,
  ToolsSection,
  ChatbotPreview,
  Footer
} from "@/components/home";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="relative">
          <Hero />
        </div>
        <FeaturedDestinations />
        <FeaturesSection />
        <ToolsSection />
        <ChatbotPreview />
      </main>
      
      <ChatBot />
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
