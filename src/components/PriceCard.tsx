import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PriceCard = ({ title, price, description, features, isPopular }: PriceCardProps) => {
  return (
    <div className={`p-8 rounded-lg ${isPopular ? 'bg-primary text-white ring-2 ring-primary' : 'bg-white'} shadow-lg animate-fade-up`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm">/month</span>
      </div>
      <p className={`mb-6 ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
      <ul className="mb-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPopular ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary/90'}`}>
        Get Started
      </Button>
    </div>
  );
};