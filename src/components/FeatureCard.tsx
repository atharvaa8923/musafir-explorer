
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  link?: string;
}

const FeatureCard = ({ icon: Icon, title, description, color, link }: FeatureCardProps) => {
  const CardContent = () => (
    <>
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="block p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow duration-300">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow duration-300">
      <CardContent />
    </div>
  );
};

export default FeatureCard;
