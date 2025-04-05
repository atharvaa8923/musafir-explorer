
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Church, User, Clock, Route } from "lucide-react";
import useTranslation from '@/hooks/useTranslation';

interface PilgrimageDetailCardProps {
  title: string;
  location: string;
  description: string;
  duration: string;
  bestTime: string;
  pilgrimageType: 'temple' | 'mountain' | 'river' | 'sacred site';
  difficulty: 'easy' | 'moderate' | 'challenging' | 'difficult';
  onViewDetails: () => void;
}

const PilgrimageDetailCard = ({
  title,
  location,
  description,
  duration,
  bestTime,
  pilgrimageType,
  difficulty,
  onViewDetails
}: PilgrimageDetailCardProps) => {
  const { t } = useTranslation();
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-500';
      case 'moderate': return 'text-yellow-500';
      case 'challenging': return 'text-orange-500';
      case 'difficult': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };
  
  const getPilgrimageTypeIcon = (type: string) => {
    switch (type) {
      case 'temple': return <Church className="h-5 w-5 text-musafir-spiritual" />;
      case 'mountain': return <Route className="h-5 w-5 text-musafir-trekking" />;
      case 'river': return <MapPin className="h-5 w-5 text-musafir-water" />;
      case 'sacred site': return <Church className="h-5 w-5 text-musafir-meditation" />;
      default: return <Church className="h-5 w-5 text-musafir-spiritual" />;
    }
  };
  
  return (
    <Card className="mb-6 hover:shadow-md transition-all">
      <CardHeader className="bg-musafir-spiritual/10 pb-2">
        <CardTitle className="flex items-center text-xl">
          {getPilgrimageTypeIcon(pilgrimageType)}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{t('best_time')}: {bestTime}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{t('duration')}: {duration}</span>
          </div>
          <div className="flex items-center text-sm">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>
              {t('difficulty')}: <span className={getDifficultyColor(difficulty)}>{difficulty}</span>
            </span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        <Button 
          onClick={onViewDetails} 
          className="w-full bg-musafir-spiritual hover:bg-musafir-spiritual/90"
        >
          {t('view_details')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PilgrimageDetailCard;
