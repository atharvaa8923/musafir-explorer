
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import TransportOptionCard from './TransportOptionCard';
import useTranslation from '@/hooks/useTranslation';
import { TransportOption } from './TransportUtils';

interface TransportTabContentProps {
  value: string;
  options: TransportOption[];
  destination: string;
  emptyMessage: string;
  buttonColorClass?: string;
  customButtonText?: string;
}

const TransportTabContent: React.FC<TransportTabContentProps> = ({
  value,
  options,
  destination,
  emptyMessage,
  buttonColorClass,
  customButtonText
}) => {
  const { t } = useTranslation();

  return (
    <TabsContent value={value} className="space-y-4">
      {options.length > 0 ? (
        options.map((option, index) => (
          <TransportOptionCard 
            key={index} 
            option={option} 
            destination={destination}
            buttonColorClass={buttonColorClass}
            customButtonText={customButtonText}
          />
        ))
      ) : (
        <div className="text-center py-4 text-muted-foreground">
          {t(emptyMessage)}
        </div>
      )}
    </TabsContent>
  );
};

export default TransportTabContent;
