
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhotoItem } from "@/data/gallery-data";

interface PhotoCategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  photoGalleryData: PhotoItem[];
}

const PhotoCategories = ({ categories, onSelectCategory, photoGalleryData }: PhotoCategoriesProps) => {
  // Get a representative photo for each category
  const getCategoryPhoto = (category: string) => {
    const photo = photoGalleryData.find(p => p.categories.includes(category));
    return photo?.url || '';
  };
  
  // Count photos in each category
  const getCategoryCount = (category: string) => {
    return photoGalleryData.filter(p => p.categories.includes(category)).length;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map(category => (
        <Card 
          key={category} 
          className="overflow-hidden cursor-pointer hover:shadow-md transition-all"
          onClick={() => onSelectCategory(category)}
        >
          <div className="h-40 overflow-hidden">
            <img 
              src={getCategoryPhoto(category)} 
              alt={category} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <CardContent className="p-4">
            <h3 className="font-medium mb-1">{category}</h3>
            <Badge variant="outline">{getCategoryCount(category)} photos</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PhotoCategories;
