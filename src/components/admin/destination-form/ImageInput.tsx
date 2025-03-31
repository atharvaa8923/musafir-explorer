
import React from 'react';
import { Input } from '@/components/ui/input';
import FormField from './FormField';

interface ImageInputProps {
  imageUrl: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput = ({ imageUrl, onChange }: ImageInputProps) => {
  return (
    <FormField label="Image URL" htmlFor="image" required>
      <Input
        id="image"
        name="image"
        value={imageUrl}
        onChange={onChange}
        placeholder="Image URL"
        required
      />
    </FormField>
  );
};

export default ImageInput;
