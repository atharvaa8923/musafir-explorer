
import { CategoryType } from './categoryUtils';

export interface DestinationFormData {
  id: string;
  title: string;
  location: string;
  description: string;
  longDescription: string;
  price: number;
  days: number;
  category: CategoryType;
  image: string;
  coordinates: [number, number];
  categoryLabel?: string;
  categoryColor?: string;
}

export interface DestinationFormProps {
  destination?: any;
  onSave: () => void;
  onCancel: () => void;
}
