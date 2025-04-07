
import React from "react";
import { Train, Bed, Utensils, Coffee } from "lucide-react";

interface CategoryIconProps {
  category: string;
  className?: string;
  size?: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category, className = "", size = 18 }) => {
  const getIcon = () => {
    switch (category) {
      case "transport":
        return <Train size={size} className={className} />;
      case "accommodation":
        return <Bed size={size} className={className} />;
      case "food":
        return <Utensils size={size} className={className} />;
      case "activities":
        return <Coffee size={size} className={className} />;
      default:
        return <Coffee size={size} className={className} />;
    }
  };

  return getIcon();
};

export default CategoryIcon;
