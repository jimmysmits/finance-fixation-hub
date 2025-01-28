import { Receipt, Calculator, FileText, PieChart } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Invoicing",
      description: "Create and send professional invoices in seconds with automated payment reminders.",
      icon: Receipt,
    },
    {
      title: "Expense Tracking",
      description: "Easily track and categorize expenses for better financial management.",
      icon: Calculator,
    },
    {
      title: "Tax Preparation",
      description: "Automatically organize your income and expenses for tax season.",
      icon: FileText,
    },
    {
      title: "Financial Insights",
      description: "Get real-time insights into your business performance with detailed reports.",
      icon: PieChart,
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Everything You Need to Succeed
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};