
import React, { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import databaseService from '@/services/databaseService';
import { DestinationFormProps, DestinationFormData } from './types';
import FormSection from './FormSection';
import BasicInfoFields from './BasicInfoFields';
import TripDetailsFields from './TripDetailsFields';
import ImageInput from './ImageInput';
import CoordinatesInput from './CoordinatesInput';
import DescriptionFields from './DescriptionFields';
import DestinationFormActions from './DestinationFormActions';
import { getCategoryInfo, CategoryType } from './categoryUtils';

const DestinationForm = ({ destination, onSave, onCancel }: DestinationFormProps) => {
  const [formData, setFormData] = useState<DestinationFormData>({
    id: '',
    title: '',
    location: '',
    description: '',
    longDescription: '',
    price: 0,
    days: 1,
    category: 'trekking',
    image: '',
    coordinates: [0, 0],
  });
  const [loading, setLoading] = useState(false);
  const isEditing = !!destination;

  useEffect(() => {
    if (destination) {
      setFormData({
        id: destination.id || '',
        title: destination.title || '',
        location: destination.location || '',
        description: destination.description || '',
        longDescription: destination.longDescription || '',
        price: destination.price || 0,
        days: destination.days || 1,
        category: destination.category || 'trekking',
        image: destination.image || '',
        coordinates: destination.coordinates || [0, 0],
      });
    }
  }, [destination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleCoordinateChange = (index: number, value: string) => {
    const newCoordinates = [...formData.coordinates];
    newCoordinates[index] = Number(value);
    setFormData(prev => ({ ...prev, coordinates: newCoordinates as [number, number] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get category info
      const categoryInfo = getCategoryInfo(formData.category as CategoryType);
      
      // Prepare the full destination data with category info
      const fullDestination = {
        ...formData,
        categoryLabel: categoryInfo.label,
        categoryColor: categoryInfo.color,
      };

      let success;
      if (isEditing) {
        success = await databaseService.updateDestination(destination.id, fullDestination);
      } else {
        success = await databaseService.addDestination(fullDestination);
      }

      if (success) {
        toast({
          title: "Success",
          description: isEditing ? "Destination updated successfully" : "Destination created successfully",
        });
        onSave();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to save destination",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while saving",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormSection>
        <BasicInfoFields
          title={formData.title}
          location={formData.location}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection>
        <TripDetailsFields
          price={formData.price}
          days={formData.days}
          category={formData.category as CategoryType}
          onNumberChange={handleNumberChange}
          onCategoryChange={(value) => handleSelectChange('category', value)}
        />
      </FormSection>

      <FormSection>
        <ImageInput
          imageUrl={formData.image}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection>
        <CoordinatesInput
          coordinates={formData.coordinates}
          onChange={handleCoordinateChange}
        />
      </FormSection>

      <FormSection>
        <DescriptionFields
          description={formData.description}
          longDescription={formData.longDescription}
          onChange={handleChange}
        />
      </FormSection>

      <DestinationFormActions 
        loading={loading}
        isEditing={isEditing}
        onCancel={onCancel}
      />
    </form>
  );
};

export default DestinationForm;
