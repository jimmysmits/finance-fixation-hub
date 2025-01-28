import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#1E3A5F] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};