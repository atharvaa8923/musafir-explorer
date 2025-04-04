
import React from "react";
import FeatureCard from "@/components/FeatureCard";
import { Map, Wallet, Backpack, CloudSun } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-musafir-light/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">Plan Your Solo Journey</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a seamless, budget-friendly adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Map}
            title="Offline Maps"
            description="Access detailed maps even without internet connection"
            color="bg-musafir-forest"
          />
          <FeatureCard 
            icon={Wallet}
            title="Budget Planner"
            description="Track expenses and stay within your ₹5000 budget"
            color="bg-musafir-spiritual"
            link="/itinerary"
          />
          <FeatureCard 
            icon={Backpack}
            title="Packing Assistant"
            description="Get customized packing lists based on your destination"
            color="bg-musafir-trekking"
          />
          <FeatureCard 
            icon={CloudSun}
            title="Weather Updates"
            description="Real-time weather forecasts for your destination"
            color="bg-musafir-water"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
