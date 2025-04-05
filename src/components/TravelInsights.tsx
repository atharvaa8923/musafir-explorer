
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Umbrella, Sun, Thermometer, Compass, Calendar } from 'lucide-react';

const TravelInsights: React.FC = () => {
  // Get current month
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Travel Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-musafir-spiritual" />
              Best Time to Travel
            </CardTitle>
            <CardDescription>Seasonal travel recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              <strong>Current Month ({currentMonth}):</strong> Great for trekking in Himachal, 
              beach destinations in Goa, and spiritual retreats in Rishikesh.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-musafir-trekking" />
              Weather Advisory
            </CardTitle>
            <CardDescription>Current weather patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Heavy rainfall expected in Kerala and coastal regions. Northern hills are experiencing moderate temperatures, 
              perfect for outdoor adventures.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-musafir-water" />
              Travel Tips
            </CardTitle>
            <CardDescription>Essential advice for solo travelers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Book transportation in advance for hill stations</li>
              <li>Carry cash in remote areas with limited ATMs</li>
              <li>Download offline maps before heading to remote locations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TravelInsights;
