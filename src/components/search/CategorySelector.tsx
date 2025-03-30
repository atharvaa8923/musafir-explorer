
import React from 'react';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface Category {
  label: string;
  value: string;
  color: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (value: string) => void;
  onCategoryClear: (e: React.MouseEvent, category: string) => void;
}

const CategorySelector = ({
  categories,
  selectedCategories,
  onCategoryChange,
  onCategoryClear
}: CategorySelectorProps) => {
  return (
    <div>
      <Label className="mb-2 block">Categories</Label>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category.value}
            variant={selectedCategories.includes(category.value) ? "default" : "outline"}
            className={`cursor-pointer ${
              selectedCategories.includes(category.value) ? category.color : ""
            }`}
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
            {selectedCategories.includes(category.value) && (
              <X
                size={14}
                className="ml-1 hover:opacity-70"
                onClick={(e) => onCategoryClear(e, category.value)}
              />
            )}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
