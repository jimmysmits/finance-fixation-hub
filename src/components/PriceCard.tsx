import { Check, Shield } from "lucide-react";
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
    <div 
      className={`p-8 rounded-2xl ${
        isPopular 
          ? 'bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] text-foreground ring-2 ring-accent shadow-xl -translate-y-4' 
          : 'bg-card text-foreground hover:shadow-xl border border-primary/10'
      } transition-all duration-300 animate-fade-up`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm">/month</span>
      </div>
      <p className={`mb-6 ${isPopular ? 'text-foreground/90' : 'text-foreground/80'}`}>{description}</p>
      <ul className="mb-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="w-5 h-5 mr-2 flex-shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full transform transition-transform hover:scale-105 ${
          isPopular 
            ? 'bg-background text-foreground hover:bg-background/90' 
            : 'bg-primary text-background hover:bg-primary/90'
        }`}
      >
        Start Free Trial
      </Button>
      {isPopular && (
        <div className="flex items-center justify-center gap-2 mt-4 text-foreground/90">
          <Shield className="w-4 h-4" />
          <span className="text-sm">30-Day Money-Back Guarantee</span>
        </div>
      )}
    </div>
  );
};