
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface RangeSliderProps {
  label: string;
  value: [number, number];
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefixSymbol?: React.ReactNode;
  onChange: (value: number[]) => void;
}

const RangeSlider = ({
  label,
  value,
  min,
  max,
  step,
  unit = '',
  prefixSymbol,
  onChange
}: RangeSliderProps) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <Label>{label}</Label>
        <span className="text-sm text-muted-foreground">
          {prefixSymbol}{value[0]}{unit} - {prefixSymbol}{value[1]}{unit}
        </span>
      </div>
      <Slider
        defaultValue={[min, max]}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
        value={[value[0], value[1]]}
        className="mt-2"
      />
    </div>
  );
};

export default RangeSlider;
