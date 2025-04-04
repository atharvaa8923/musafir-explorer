
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDestinations />
        <FeaturesSection />
        <ToolsSection />
        <ChatbotPreview />
      </main>
      
      <ChatBot />
      
      <Footer />
    </div>
  );
};

export default Index;
