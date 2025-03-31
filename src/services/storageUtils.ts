
import { toast } from "@/components/ui/use-toast";

export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    toast({
      variant: "destructive",
      title: "Data Error",
      description: `Failed to read ${key} data. Using default data instead.`,
    });
    return defaultValue;
  }
}

export function saveToStorage<T>(key: string, data: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage (${key}):`, error);
    toast({
      variant: "destructive",
      title: "Save Error",
      description: "Failed to save data. Please try again.",
    });
    return false;
  }
}
