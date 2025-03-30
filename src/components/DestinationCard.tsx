
import { MapPin, Calendar, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  days: number;
  category: 'trekking' | 'meditation' | 'rafting' | 'religious' | 'hiking';
}

const DestinationCard = ({ image, title, location, price, days, category }: DestinationCardProps) => {
  const categoryColors = {
    trekking: "bg-musafir-trekking",
    meditation: "bg-musafir-meditation",
    rafting: "bg-musafir-water",
    religious: "bg-musafir-spiritual",
    hiking: "bg-musafir-forest"
  };
  
  const categoryLabels = {
    trekking: "Trekking",
    meditation: "Meditation",
    rafting: "Rafting",
    religious: "Religious",
    hiking: "Hiking"
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-3 left-3 ${categoryColors[category]} hover:${categoryColors[category]}`}>
          {categoryLabels[category]}
        </Badge>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
          <div className="flex items-center text-musafir-spiritual font-medium">
            <IndianRupee size={16} className="mr-1" />
            <span>{price}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-1" />
            <span>{days} days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
