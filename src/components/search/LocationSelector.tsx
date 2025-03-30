
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { X, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';

interface LocationSelectorProps {
  location: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onLocationSelect: (location: string) => void;
  clearLocation: () => void;
  locationSuggestions: string[];
}

const LocationSelector = ({
  location,
  open,
  setOpen,
  onLocationSelect,
  clearLocation,
  locationSuggestions
}: LocationSelectorProps) => {
  return (
    <div>
      <Label className="mb-2 block">Location</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {location ? location : "Select location..."}
            {location ? (
              <X className="ml-2 h-4 w-4 hover:opacity-70 cursor-pointer" onClick={clearLocation} />
            ) : (
              <></>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search location..." />
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locationSuggestions.map((loc) => (
                  <CommandItem
                    key={loc}
                    value={loc}
                    onSelect={() => onLocationSelect(loc)}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        location === loc ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {loc}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LocationSelector;
