
import { Destination as DestinationType, Destinations as DestinationsType } from "@/data/types";

export type Destination = DestinationType;
export type Destinations = DestinationsType;

export interface DatabaseService {
  getDestinations: () => Promise<Destinations>;
  getDestinationById: (id: string) => Promise<Destination | undefined>;
  searchDestinations: (filters: any) => Promise<Destinations>;
  addDestination: (destination: any) => Promise<boolean>;
  updateDestination: (id: string, data: any) => Promise<boolean>;
  deleteDestination: (id: string) => Promise<boolean>;
  isAdmin: () => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  subscribeToDestinations: (callback: (destinations: Destinations) => void) => () => void;
  subscribeToDestination: (id: string, callback: (destination: Destination | undefined) => void) => () => void;
}

export interface SearchFilters {
  searchQuery?: string;
  location?: string;
  budget?: [number, number];
  days?: [number, number];
  categories?: string[];
  [key: string]: any;
}
