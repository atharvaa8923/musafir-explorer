
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PilgrimageInfo from '@/components/pilgrimage/PilgrimageInfo';
import { Church, Calendar, MapPin, Route } from 'lucide-react';
import useTranslation from '@/hooks/useTranslation';

interface PilgrimageDetailCardProps {
  title: string;
  location: string;
  pilgrimageType: 'temple' | 'mountain' | 'river' | 'sacred site';
  season: string;
  duration: string;
  significance: string;
  rituals: string[];
}

const PilgrimageDetailCard = ({
  title,
  location,
  pilgrimageType,
  season,
  duration,
  significance,
  rituals
}: PilgrimageDetailCardProps) => {
  const { t } = useTranslation();
  
  // Get icon based on pilgrimage type
  const getPilgrimageIcon = () => {
    switch (pilgrimageType) {
      case 'temple':
        return <Church size={16} className="mr-1 text-musafir-spiritual" />;
      case 'mountain':
        return <Route size={16} className="mr-1 text-musafir-spiritual" />;
      case 'river':
        return <Route size={16} className="mr-1 text-musafir-spiritual" />;
      case 'sacred site':
        return <Church size={16} className="mr-1 text-musafir-spiritual" />;
      default:
        return <Church size={16} className="mr-1 text-musafir-spiritual" />;
    }
  };

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                {getPilgrimageIcon()}
                {title}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin size={16} className="mr-1" /> {location}
              </div>
            </div>
            <Badge className="bg-musafir-spiritual hover:bg-musafir-spiritual/90">
              {pilgrimageType.charAt(0).toUpperCase() + pilgrimageType.slice(1)}
            </Badge>
          </div>
          
          <PilgrimageInfo
            title={title}
            location={location}
            season={season}
            duration={duration}
            significance={significance}
            rituals={rituals}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-muted-foreground" />
              <span className="text-sm">{t('best_time')}: {season}</span>
            </div>
            <div className="flex items-center">
              <Route size={16} className="mr-2 text-muted-foreground" />
              <span className="text-sm">{t('journey_duration')}: {duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PilgrimageDetailCard;
