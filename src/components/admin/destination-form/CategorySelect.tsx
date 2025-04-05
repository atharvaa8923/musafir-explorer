
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FormField from './FormField';
import { categories, CategoryType } from './categoryUtils';

interface CategorySelectProps {
  value: CategoryType;
  onChange: (value: CategoryType) => void;
}

const CategorySelect = ({ value, onChange }: CategorySelectProps) => {
  return (
    <FormField label="Category" htmlFor="category" required>
      <Select 
        value={value} 
        onValueChange={(value) => onChange(value as CategoryType)}
      >
        <SelectTrigger id="category">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>{category.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
};

export default CategorySelect;
