
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import FormField from './FormField';

interface DescriptionFieldsProps {
  description: string;
  longDescription: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const DescriptionFields = ({ description, longDescription, onChange }: DescriptionFieldsProps) => {
  return (
    <>
      <FormField label="Short Description" htmlFor="description" required>
        <Textarea
          id="description"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Short description"
          required
        />
      </FormField>
      
      <FormField label="Long Description" htmlFor="longDescription" required>
        <Textarea
          id="longDescription"
          name="longDescription"
          value={longDescription}
          onChange={onChange}
          placeholder="Detailed description"
          rows={5}
          required
        />
      </FormField>
    </>
  );
};

export default DescriptionFields;
