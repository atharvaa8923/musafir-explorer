
import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PhotoItem } from "@/data/gallery-data";

interface PhotoCardProps {
  photo: PhotoItem;
  setSelectedCategory: (category: string) => void;
}

const PhotoCard = ({ photo, setSelectedCategory }: PhotoCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-all">
      <div className="aspect-square overflow-hidden">
        <img 
          src={photo.url} 
          alt={photo.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-3">
        <h3 className="font-medium text-base mb-1 line-clamp-1">{photo.title}</h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin size={14} className="mr-1 flex-shrink-0" />
          <span className="truncate">{photo.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {photo.categories.slice(0, 2).map(category => (
            <Badge 
              key={category} 
              variant="outline" 
              className="text-xs cursor-pointer hover:bg-accent"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCategory(category);
              }}
            >
              {category}
            </Badge>
          ))}
          
          {photo.categories.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{photo.categories.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
