
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatBot from "@/components/ChatBot";
import AnimatedTraveler from "@/components/AnimatedTraveler";
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
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-musafir-light to-background">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" 
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" 
             }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-musafir-light/80 to-background/90"></div>
        
        <div className="absolute top-[25%] left-[5%] w-[300px] h-[250px] rounded-lg overflow-hidden shadow-xl transform rotate-[-5deg] animate-float">
          <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
               alt="Taj Mahal" 
               className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute top-[10%] right-[10%] w-[250px] h-[180px] rounded-lg overflow-hidden shadow-xl transform rotate-[8deg] animate-float opacity-90">
          <img src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
               alt="Varanasi" 
               className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute bottom-[20%] right-[15%] w-[280px] h-[200px] rounded-lg overflow-hidden shadow-xl transform rotate-[-7deg] animate-float opacity-80 delay-300">
          <img src="https://images.unsplash.com/photo-1591017683260-c2075a5d81c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
               alt="Kerala backwaters" 
               className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute bottom-[10%] left-[15%] w-[260px] h-[180px] rounded-lg overflow-hidden shadow-xl transform rotate-[5deg] animate-float opacity-85 delay-150">
          <img src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
               alt="Indian mountains" 
               className="w-full h-full object-cover" />
        </div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <div className="relative">
          <Hero />
          <AnimatedTraveler />
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
