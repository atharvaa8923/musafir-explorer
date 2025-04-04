
import React from "react";
import WeatherWidget from "@/components/WeatherWidget";
import BudgetTracker from "@/components/BudgetTracker";
import PackingList from "@/components/PackingList";

const ToolsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">Travel Tools</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Essential information to prepare for your journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <WeatherWidget />
          </div>
          <div className="col-span-1">
            <BudgetTracker />
          </div>
          <div className="col-span-1">
            <PackingList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
