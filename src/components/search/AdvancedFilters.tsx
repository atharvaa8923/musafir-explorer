
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useTranslation from '@/hooks/useTranslation';

interface AdvancedFiltersProps {
  difficulty: string;
  setDifficulty: (value: string) => void;
  season: string;
  setSeason: (value: string) => void;
  amenities: string[];
  setAmenities: (value: string[]) => void;
  transportation: string[];
  setTransportation: (value: string[]) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  difficulty,
  setDifficulty,
  season,
  setSeason,
  amenities,
  setAmenities,
  transportation,
  setTransportation,
}) => {
  const { t } = useTranslation();
  
  const amenityOptions = [
    { id: 'wifi', label: 'WiFi' },
    { id: 'shower', label: 'Hot Shower' },
    { id: 'food', label: 'Food Included' },
    { id: 'guide', label: 'Guide' },
    { id: 'equipment', label: 'Equipment' },
  ];
  
  const transportOptions = [
    { id: 'bus', label: 'Bus' },
    { id: 'train', label: 'Train' },
    { id: 'taxi', label: 'Taxi/Car' },
    { id: 'flight', label: 'Flight' },
    { id: 'walking', label: 'Walking Distance' },
  ];
  
  const handleAmenityChange = (checked: boolean | 'indeterminate', amenity: string) => {
    if (checked === true) {
      setAmenities([...amenities, amenity]);
    } else {
      setAmenities(amenities.filter(a => a !== amenity));
    }
  };
  
  const handleTransportationChange = (checked: boolean | 'indeterminate', transport: string) => {
    if (checked === true) {
      setTransportation([...transportation, transport]);
    } else {
      setTransportation(transportation.filter(t => t !== transport));
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Difficulty Level */}
        <div className="space-y-2">
          <Label>Difficulty Level</Label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Difficulty</SelectItem>
              <SelectItem value="easy">Easy - Beginner Friendly</SelectItem>
              <SelectItem value="moderate">Moderate - Some Experience</SelectItem>
              <SelectItem value="difficult">Difficult - Experienced</SelectItem>
              <SelectItem value="extreme">Extreme - Experts Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Best Season */}
        <div className="space-y-2">
          <Label>Best Season</Label>
          <Select value={season} onValueChange={setSeason}>
            <SelectTrigger>
              <SelectValue placeholder="Select season" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Season</SelectItem>
              <SelectItem value="summer">Summer (Apr-Jun)</SelectItem>
              <SelectItem value="monsoon">Monsoon (Jul-Sep)</SelectItem>
              <SelectItem value="autumn">Autumn (Oct-Nov)</SelectItem>
              <SelectItem value="winter">Winter (Dec-Mar)</SelectItem>
              <SelectItem value="all-year">All Year Round</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Amenities */}
        <div className="space-y-3">
          <Label>Amenities</Label>
          <div className="grid grid-cols-2 gap-2">
            {amenityOptions.map(option => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`amenity-${option.id}`}
                  checked={amenities.includes(option.id)}
                  onCheckedChange={(checked) => handleAmenityChange(checked, option.id)}
                />
                <label 
                  htmlFor={`amenity-${option.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Transportation Options */}
        <div className="space-y-3">
          <Label>Transportation</Label>
          <div className="grid grid-cols-2 gap-2">
            {transportOptions.map(option => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`transport-${option.id}`}
                  checked={transportation.includes(option.id)}
                  onCheckedChange={(checked) => handleTransportationChange(checked, option.id)}
                />
                <label 
                  htmlFor={`transport-${option.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;
