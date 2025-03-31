
import React from 'react';
import { Input } from '@/components/ui/input';
import FormField from './FormField';

interface CoordinatesInputProps {
  coordinates: [number, number];
  onChange: (index: number, value: string) => void;
}

const CoordinatesInput = ({ coordinates, onChange }: CoordinatesInputProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField label="Latitude" htmlFor="lat" required>
        <Input
          id="lat"
          type="number"
          value={coordinates[0]}
          onChange={(e) => onChange(0, e.target.value)}
          placeholder="Latitude"
          step="0.0001"
          required
        />
      </FormField>
      
      <FormField label="Longitude" htmlFor="lng" required>
        <Input
          id="lng"
          type="number"
          value={coordinates[1]}
          onChange={(e) => onChange(1, e.target.value)}
          placeholder="Longitude"
          step="0.0001"
          required
        />
      </FormField>
    </div>
  );
};

export default CoordinatesInput;
