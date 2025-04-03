
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      toast({
        title: "Please enter a search term",
        description: "Enter a destination or activity you'd like to explore",
        variant: "destructive",
      });
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-musafir-light to-background pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Discover India's Solo <span className="text-musafir-spiritual">Adventures</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            From sacred temples to mountain peaks, explore budget-friendly journeys under ₹5000
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="pl-10 pr-4 py-3 rounded-full w-full sm:w-80 border border-border focus:ring-2 focus:ring-musafir-earth focus:border-transparent outline-none"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            <Button 
              size="lg" 
              className="rounded-full bg-musafir-spiritual hover:bg-musafir-spiritual/90"
              onClick={handleSearch}
            >
              <span>Find Adventures</span>
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <CategoryTag label="Trekking" color="bg-musafir-trekking" />
            <CategoryTag label="Meditation" color="bg-musafir-meditation" />
            <CategoryTag label="Rafting" color="bg-musafir-water" />
            <CategoryTag label="Temples" color="bg-musafir-spiritual" />
            <CategoryTag label="Hiking" color="bg-musafir-forest" />
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-full h-48 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

const CategoryTag = ({ label, color }: { label: string; color: string }) => {
  return (
    <div className={`${color} text-white px-4 py-1.5 rounded-full text-sm font-medium`}>
      {label}
    </div>
  );
};

export default Hero;
