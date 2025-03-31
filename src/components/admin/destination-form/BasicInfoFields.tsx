
import React from 'react';
import { Input } from '@/components/ui/input';
import FormField from './FormField';

interface BasicInfoFieldsProps {
  title: string;
  location: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInfoFields = ({ title, location, onChange }: BasicInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField label="Title" htmlFor="title" required>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Destination title"
          required
        />
      </FormField>
      
      <FormField label="Location" htmlFor="location" required>
        <Input
          id="location"
          name="location"
          value={location}
          onChange={onChange}
          placeholder="Location"
          required
        />
      </FormField>
    </div>
  );
};

export default BasicInfoFields;
