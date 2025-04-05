
export interface Destination {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  days: number;
  category: 'trekking' | 'meditation' | 'rafting' | 'religious' | 'hiking';
  categoryLabel: string;
  categoryColor: string;
  description: string;
  longDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  itinerary: {
    title: string;
    description: string;
    activities?: string[];
    meals?: string;
    accommodation?: string;
  }[];
  accommodation: {
    name: string;
    description: string;
    location: string;
    amenities?: string[];
  }[];
  gallery: string[];
  coordinates: [number, number];
  locationDescription: string;
  transportation: {
    type: 'bus' | 'train' | 'jeep' | 'flight' | 'shared taxi' | 'shared sumo' | 'ferry' | 'local bus' | 'helicopter' | 'taxi';
    from: string;
    price: number;
    duration: string;
    schedule: string;
    link: string;
    provider?: string;
    amenities?: string[];
    rating?: number;
  }[];
  specialFeatures?: {
    pilgrimageType?: 'temple' | 'mountain' | 'river' | 'sacred site';
    rituals?: string[];
    significance?: string;
    difficulty?: 'easy' | 'moderate' | 'challenging' | 'difficult';
    seasonality?: string;
    permits?: string[];
    restrictions?: string[];
  };
}

export type Destinations = Destination[];
