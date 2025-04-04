
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import DestinationCard from "@/components/DestinationCard";
import databaseService from "@/services/databaseService";
import useTranslation from "@/hooks/useTranslation";

const FeaturedDestinations = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        setLoading(true);
        const allDestinations = await databaseService.getDestinations();
        setFeaturedDestinations(allDestinations.slice(0, 6));
        
        toast({
          title: "Welcome to Musafir",
          description: "Your budget-friendly travel companion is ready to help!",
        });
      } catch (error) {
        console.error("Error loading destinations:", error);
        toast({
          variant: "destructive",
          title: "Error loading destinations",
          description: "Please try refreshing the page.",
        });
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">Explore Budget Adventures</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Discover affordable solo travel experiences across India for under ₹5000
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin h-10 w-10 border-4 border-musafir-spiritual rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard 
                key={index}
                id={destination.id}
                image={destination.image}
                title={destination.title}
                location={destination.location}
                price={destination.price}
                days={destination.days}
                category={destination.category}
              />
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <Link to="/destinations">
            <Button className="bg-musafir-spiritual hover:bg-musafir-spiritual/90">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
