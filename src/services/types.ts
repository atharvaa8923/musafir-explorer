
import { Destination as DestinationType, Destinations as DestinationsType } from "@/data/types";

export type Destination = DestinationType;
export type Destinations = DestinationsType;

export interface DatabaseService {
  getDestinations: () => Promise<Destinations>;
  getDestinationById: (id: string) => Promise<Destination | undefined>;
  searchDestinations: (filters: SearchFilters) => Promise<Destinations>;
  addDestination: (destination: any) => Promise<boolean>;
  updateDestination: (id: string, data: any) => Promise<boolean>;
  deleteDestination: (id: string) => Promise<boolean>;
  isAdmin: () => Promise<boolean>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  subscribeToDestinations: (callback: (destinations: Destinations) => void) => () => void;
  subscribeToDestination: (id: string, callback: (destination: Destination | undefined) => void) => () => void;
  getBlogs: () => Promise<BlogPost[]>;
  getBlogById: (id: string) => Promise<BlogPost | undefined>;
}

export interface SearchFilters {
  searchQuery?: string;
  location?: string;
  budget?: [number, number];
  days?: [number, number];
  categories?: string[];
  difficulty?: string;
  season?: string;
  amenities?: string[];
  transportation?: string[];
  [key: string]: any;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: 'tips' | 'guides' | 'stories';
  tags: string[];
}

export type SupportedLanguage = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr';

export interface LanguageService {
  getCurrentLanguage: () => SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  translate: (key: string) => string;
  getAvailableLanguages: () => Array<{code: SupportedLanguage, name: string}>;
  subscribeToLanguageChange: (callback: (lang: SupportedLanguage) => void) => () => void;
}
