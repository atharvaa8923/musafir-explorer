
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, IndianRupee, Calendar, ExternalLink } from "lucide-react";
import useTranslation from '@/hooks/useTranslation';
import { getTransportIcon, TransportOption } from './TransportUtils';

interface TransportOptionCardProps {
  option: TransportOption;
  destination: string;
  buttonColorClass?: string;
  buttonText?: string;
}

const TransportOptionCard = ({ 
  option, 
  destination, 
  buttonColorClass = "bg-primary", 
  buttonText 
}: TransportOptionCardProps) => {
  const { t } = useTranslation();
  
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="mr-3 text-muted-foreground">
              {getTransportIcon(option.type, "h-6 w-6")}
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize">{option.type}</h3>
              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <MapPin size={14} className="mr-1" />
                <span>{option.from} to {destination}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-lg flex items-center">
              <IndianRupee size={16} />
              <span>{option.price}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <Clock size={14} className="mr-2 text-muted-foreground" />
            <span>{option.duration}</span>
          </div>
          {option.schedule && (
            <div className="flex items-center">
              <Calendar size={14} className="mr-2 text-muted-foreground" />
              <span>{option.schedule}</span>
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <a href={option.link} target="_blank" rel="noopener noreferrer">
            <Button className={`w-full ${buttonColorClass} flex items-center justify-center`}>
              {buttonText || t('book_now')}
              <ExternalLink size={14} className="ml-2" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransportOptionCard;
