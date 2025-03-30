
import { useState } from "react";
import { Cloud, CloudSun, Thermometer, Wind, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WeatherWidget = ({ location = "Rishikesh" }) => {
  // This is a placeholder component; in a real app, we'd fetch actual weather data
  const [weatherData] = useState({
    temp: 28,
    humidity: 65,
    windSpeed: 12,
    condition: "Partly Cloudy",
    forecasts: [
      { day: "Today", temp: 28, icon: CloudSun },
      { day: "Tue", temp: 30, icon: CloudSun },
      { day: "Wed", temp: 27, icon: Cloud },
      { day: "Thu", temp: 26, icon: Cloud },
    ]
  });

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-musafir-water to-musafir-water/80 text-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{location}</h3>
              <p className="text-sm text-white/80">Current Weather</p>
            </div>
            <CloudSun size={32} />
          </div>
          
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-bold">{weatherData.temp}°</span>
            <span className="text-white/80 mb-1">{weatherData.condition}</span>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="flex items-center">
              <Wind size={16} className="mr-2" />
              <span className="text-sm">{weatherData.windSpeed} km/h</span>
            </div>
            <div className="flex items-center">
              <Thermometer size={16} className="mr-2" />
              <span className="text-sm">Feels 30°</span>
            </div>
            <div className="flex items-center">
              <Droplets size={16} className="mr-2" />
              <span className="text-sm">{weatherData.humidity}%</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 grid grid-cols-4 gap-2 text-center">
          {weatherData.forecasts.map((forecast, index) => (
            <div key={index}>
              <p className="text-sm text-muted-foreground">{forecast.day}</p>
              <forecast.icon size={24} className="mx-auto my-1 text-musafir-water" />
              <p className="font-medium">{forecast.temp}°</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
