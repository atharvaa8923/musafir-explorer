
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, IndianRupee, Calendar } from "lucide-react";
import useTranslation from '@/hooks/useTranslation';

interface TransportTabContentProps {
  value: string;
  options: Array<{
    type: string;
    from: string;
    price: number;
    duration: string;
    schedule?: string;
    link?: string;
  }>;
  destination: string;
  emptyMessage: string;
  buttonColorClass?: string;
  customButtonText?: string;
}

const TransportOptionCard = ({ 
  option, 
  destination, 
  buttonColorClass = "bg-primary", 
  buttonText
}) => {
  const { t } = useTranslation();
  
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg capitalize">{option.type}</h3>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <MapPin size={14} className="mr-1" />
              <span>{option.from} to {destination}</span>
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
            <Button className={`w-full ${buttonColorClass}`}>
              {buttonText || t('book_now')}
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const TransportTabContent = ({ 
  value, 
  options, 
  destination, 
  emptyMessage,
  buttonColorClass,
  customButtonText
}: TransportTabContentProps) => {
  const { t } = useTranslation();
  
  return (
    <TabsContent value={value} className="mt-2">
      {options && options.length > 0 ? (
        <div>
          {options.map((option, index) => (
            <TransportOptionCard 
              key={index} 
              option={option} 
              destination={destination} 
              buttonColorClass={buttonColorClass}
              buttonText={customButtonText}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border border-border rounded-lg">
          <p className="text-muted-foreground">{t(emptyMessage)}</p>
        </div>
      )}
    </TabsContent>
  );
};

export default TransportTabContent;
