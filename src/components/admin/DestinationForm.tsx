
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import databaseService from '@/services/databaseService';

interface DestinationFormProps {
  destination?: any;
  onSave: () => void;
  onCancel: () => void;
}

const DestinationForm = ({ destination, onSave, onCancel }: DestinationFormProps) => {
  const [formData, setFormData] = useState({
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
    setFormData(prev => ({ ...prev, coordinates: newCoordinates }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Calculate categoryLabel and categoryColor based on category
      const categoryInfo = {
        trekking: { label: 'Trekking', color: 'bg-musafir-trekking' },
        spiritual: { label: 'Spiritual', color: 'bg-musafir-spiritual' },
        rafting: { label: 'Rafting', color: 'bg-musafir-water' },
        meditation: { label: 'Meditation', color: 'bg-musafir-meditation' },
        forest: { label: 'Forest', color: 'bg-musafir-forest' },
      };
      
      const category = formData.category as keyof typeof categoryInfo;
      const fullDestination = {
        ...formData,
        categoryLabel: categoryInfo[category].label,
        categoryColor: categoryInfo[category].color,
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">Title</label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Destination title"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">Location</label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="price" className="text-sm font-medium">Price (₹)</label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleNumberChange}
            placeholder="Price"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="days" className="text-sm font-medium">Days</label>
          <Input
            id="days"
            name="days"
            type="number"
            value={formData.days}
            onChange={handleNumberChange}
            placeholder="Days"
            min={1}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="category" className="text-sm font-medium">Category</label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => handleSelectChange('category', value)}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trekking">Trekking</SelectItem>
              <SelectItem value="spiritual">Spiritual</SelectItem>
              <SelectItem value="rafting">Rafting</SelectItem>
              <SelectItem value="meditation">Meditation</SelectItem>
              <SelectItem value="forest">Forest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="image" className="text-sm font-medium">Image URL</label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="lat" className="text-sm font-medium">Latitude</label>
          <Input
            id="lat"
            type="number"
            value={formData.coordinates[0]}
            onChange={(e) => handleCoordinateChange(0, e.target.value)}
            placeholder="Latitude"
            step="0.0001"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="lng" className="text-sm font-medium">Longitude</label>
          <Input
            id="lng"
            type="number"
            value={formData.coordinates[1]}
            onChange={(e) => handleCoordinateChange(1, e.target.value)}
            placeholder="Longitude"
            step="0.0001"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">Short Description</label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short description"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="longDescription" className="text-sm font-medium">Long Description</label>
        <Textarea
          id="longDescription"
          name="longDescription"
          value={formData.longDescription}
          onChange={handleChange}
          placeholder="Detailed description"
          rows={5}
          required
        />
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-musafir-spiritual" disabled={loading}>
          {loading ? "Saving..." : (isEditing ? "Update" : "Create")}
        </Button>
      </div>
    </form>
  );
};

export default DestinationForm;
