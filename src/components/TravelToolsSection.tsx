
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BudgetPlanner from "@/components/BudgetPlanner";
import TripCountdown from "@/components/TripCountdown";
import TravelChecklist from "@/components/TravelChecklist";
import WeatherWidget from "@/components/WeatherWidget";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock, ListChecks, Wallet, Cloud } from "lucide-react";

const TravelToolsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Travel Tools</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Plan your journey with our comprehensive travel tools
          </p>
        </div>
        
        <Tabs defaultValue="checklist" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="checklist" className="flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <span className="hidden sm:inline">Packing List</span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Budget</span>
            </TabsTrigger>
            <TabsTrigger value="countdown" className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4" />
              <span className="hidden sm:inline">Countdown</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              <span className="hidden sm:inline">Weather</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 gap-8">
            <TabsContent value="checklist" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <TravelChecklist />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="budget" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <BudgetPlanner />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="countdown" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <TripCountdown />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="weather" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <WeatherWidget />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TravelToolsSection;
