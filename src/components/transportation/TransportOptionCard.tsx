
import React from 'react';
import { Button } from "@/components/ui/button";
import { IndianRupee, Clock, CalendarIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { getTransportIcon } from './TransportUtils';
import useTranslation from '@/hooks/useTranslation';
import { TransportOption } from './TransportUtils';

interface TransportOptionCardProps {
  option: TransportOption;
  destination: string;
  buttonColorClass?: string;
  customButtonText?: string;
}

const TransportOptionCard: React.FC<TransportOptionCardProps> = ({ 
  option, 
  destination, 
  buttonColorClass = "bg-musafir-trekking hover:bg-musafir-trekking/90",
  customButtonText
}) => {
  const { t } = useTranslation();

  const handleBooking = () => {
    window.open(option.link, '_blank');
    toast({
      title: `${option.type} booking initiated`,
      description: `You are being redirected to book transportation to ${destination}.`,
    });
  };

  return (
    <div className="border border-border rounded-lg p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {getTransportIcon(option.type, "mr-2 h-5 w-5 text-musafir-trekking")}
          <span className="font-medium">{option.type} {t('from')} {option.from}</span>
        </div>
        <span className="flex items-center text-musafir-spiritual font-medium">
          <IndianRupee className="h-4 w-4 mr-1" />
          {option.price}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{option.duration}</span>
        </div>
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{option.schedule}</span>
        </div>
      </div>
      
      <Button 
        className={`w-full ${buttonColorClass}`}
        onClick={handleBooking}
      >
        {customButtonText || `${t('book')} ${option.type}`}
      </Button>
    </div>
  );
};

export default TransportOptionCard;
