
import React from "react";
import TravelToolsSection from "@/components/TravelToolsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Image, MapPin, Globe, Utensils, Shield, Hotel, Train, Backpack } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      title: "Photo Gallery",
      icon: Image,
      description: "Discover stunning visuals from destinations across India",
      color: "text-musafir-trekking",
      bgColor: "bg-musafir-trekking/10",
      link: "/photos"
    },
    {
      title: "Language Translation",
      icon: Globe,
      description: "Essential phrases in local languages for your travels",
      color: "text-musafir-meditation",
      bgColor: "bg-musafir-meditation/10",
      link: "#"
    },
    {
      title: "Restaurant Finder",
      icon: Utensils,
      description: "Find budget-friendly local eateries near your destination",
      color: "text-musafir-spiritual",
      bgColor: "bg-musafir-spiritual/10",
      link: "#"
    },
    {
      title: "Safety Information",
      icon: Shield,
      description: "Important safety tips and emergency contacts",
      color: "text-musafir-rafting",
      bgColor: "bg-musafir-rafting/10",
      link: "#"
    },
    {
      title: "Accommodation Finder",
      icon: Hotel,
      description: "Compare budget stays across booking platforms",
      color: "text-musafir-forest",
      bgColor: "bg-musafir-forest/10",
      link: "#"
    },
    {
      title: "Transport Comparison",
      icon: Train,
      description: "Compare cost vs. time for different travel options",
      color: "text-musafir-brown",
      bgColor: "bg-musafir-brown/10",
      link: "#"
    },
    {
      title: "Packing List Templates",
      icon: Backpack,
      description: "Customized packing lists for your specific journey",
      color: "text-musafir-spiritual",
      bgColor: "bg-musafir-spiritual/10",
      link: "#"
    },
    {
      title: "Destination Maps",
      icon: MapPin,
      description: "Detailed destination maps with offline capability",
      color: "text-musafir-meditation",
      bgColor: "bg-musafir-meditation/10",
      link: "/destinations"
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Travel Tools & Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to plan and enjoy your budget-friendly solo adventures across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Link to={tool.link} key={index} className="block h-full">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-full ${tool.bgColor} flex items-center justify-center mb-4`}>
                    <tool.icon className={`${tool.color}`} size={24} />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{tool.description}</p>
                  
                  <Button variant="ghost" className={`${tool.color} justify-start px-0 hover:bg-transparent hover:underline`}>
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
