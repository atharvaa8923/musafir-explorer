
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Church, Calendar, MapPin, Route, Clock } from "lucide-react";
import useTranslation from '@/hooks/useTranslation';

interface PilgrimageInfoProps {
  title: string;
  location: string;
  season: string;
  duration: string;
  significance: string;
  rituals: string[];
}

const PilgrimageInfo = ({
  title,
  location,
  season,
  duration,
  significance,
  rituals
}: PilgrimageInfoProps) => {
  const { t } = useTranslation();
  
  return (
    <Card className="mb-6">
      <CardHeader className="bg-musafir-spiritual/10 pb-2">
        <CardTitle className="flex items-center text-xl text-musafir-spiritual">
          <Church className="mr-2" size={20} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <MapPin className="mr-2 text-muted-foreground" size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 text-muted-foreground" size={16} />
            <span>{t('best_time')}: {season}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 text-muted-foreground" size={16} />
            <span>{t('duration')}: {duration}</span>
          </div>
          <div className="flex items-center">
            <Route className="mr-2 text-muted-foreground" size={16} />
            <span>{t('pilgrimage_route')}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">{t('spiritual_significance')}</h4>
          <p className="text-sm text-muted-foreground">{significance}</p>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h4 className="font-medium mb-2">{t('important_rituals')}</h4>
          <ul className="list-disc list-inside space-y-1">
            {rituals.map((ritual, index) => (
              <li key={index} className="text-sm text-muted-foreground">{ritual}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PilgrimageInfo;
