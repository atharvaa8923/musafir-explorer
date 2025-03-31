
import React from 'react';
import { Input } from '@/components/ui/input';
import FormField from './FormField';
import CategorySelect from './CategorySelect';
import { CategoryType } from './categoryUtils';

interface TripDetailsFieldsProps {
  price: number;
  days: number;
  category: CategoryType;
  onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (value: CategoryType) => void;
}

const TripDetailsFields = ({ 
  price, 
  days, 
  category, 
  onNumberChange, 
  onCategoryChange 
}: TripDetailsFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FormField label="Price (₹)" htmlFor="price" required>
        <Input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={onNumberChange}
          placeholder="Price"
          required
        />
      </FormField>
      
      <FormField label="Days" htmlFor="days" required>
        <Input
          id="days"
          name="days"
          type="number"
          value={days}
          onChange={onNumberChange}
          placeholder="Days"
          min={1}
          required
        />
      </FormField>
      
      <CategorySelect 
        value={category} 
        onChange={onCategoryChange} 
      />
    </div>
  );
};

export default TripDetailsFields;
