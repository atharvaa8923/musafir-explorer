
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import FeatureCard from "@/components/FeatureCard";
import WeatherWidget from "@/components/WeatherWidget";
import BudgetTracker from "@/components/BudgetTracker";
import PackingList from "@/components/PackingList";
import { Map, MessageCircle, Wallet, Backpack, CloudSun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Valley of Flowers Trek",
      location: "Uttarakhand",
      price: 4800,
      days: 5,
      category: "trekking" as const
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      title: "Rishikesh Rafting Experience",
      location: "Rishikesh",
      price: 2500,
      days: 3,
      category: "rafting" as const
    },
    {
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      title: "Triund Trek",
      location: "Dharamshala",
      price: 3200,
      days: 2,
      category: "hiking" as const
    },
    {
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      title: "12 Jyotirlinga Pilgrimage",
      location: "Various States",
      price: 4900,
      days: 12,
      category: "religious" as const
    },
    {
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      title: "Meditation Retreat",
      location: "Rishikesh",
      price: 3500,
      days: 7,
      category: "meditation" as const
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      title: "Himachal Backpacking",
      location: "Himachal Pradesh",
      price: 4500,
      days: 6,
      category: "trekking" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        {/* Destinations Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-3">Explore Budget Adventures</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover affordable solo travel experiences across India for under ₹5000
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <DestinationCard key={index} {...destination} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button className="bg-musafir-spiritual hover:bg-musafir-spiritual/90">
                View All Destinations
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
        
        {/* Tools Section */}
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
        
        {/* Chatbot Section */}
        <section className="py-16 bg-musafir-light/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Multilingual Travel Assistant</h2>
                <p className="text-muted-foreground mb-6">
                  Get instant information about destinations, travel tips, and local insights in your preferred language
                </p>
                <Button className="bg-musafir-meditation hover:bg-musafir-meditation/90">
                  <MessageCircle className="mr-2" size={18} />
                  Start Chatting
                </Button>
              </div>
              <div className="md:w-1/2 bg-card rounded-lg p-6 border border-border">
                <div className="flex justify-end mb-4">
                  <div className="bg-musafir-meditation/20 text-musafir-meditation p-3 rounded-lg rounded-tr-none max-w-xs">
                    <p>Tell me about the best time to visit Valley of Flowers</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                    <p>The best time to visit Valley of Flowers is from July to September when the alpine flowers are in full bloom. The park is closed during winter months due to heavy snowfall.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-musafir-meditation/20 text-musafir-meditation p-3 rounded-lg rounded-tr-none max-w-xs">
                    <p>What's the budget for a 3-day trip?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-musafir-brown text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Musafir</h2>
              <p className="text-white/70">Solo adventures under ₹5000</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white/70 transition-colors">Destinations</a>
              <a href="#" className="hover:text-white/70 transition-colors">Offline Maps</a>
              <a href="#" className="hover:text-white/70 transition-colors">Budget Planner</a>
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

export default Index;
