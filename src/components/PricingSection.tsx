import { PriceCard } from "./PriceCard";

export const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      price: "£9",
      description: "Perfect for freelancers just starting out",
      features: [
        "Up to 5 clients",
        "Basic invoicing",
        "Expense tracking",
        "Basic reports",
      ],
    },
    {
      title: "Professional",
      price: "£29",
      description: "For growing freelance businesses",
      features: [
        "Unlimited clients",
        "Custom branded invoices",
        "Tax preparation",
        "Advanced reporting",
        "Priority support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "£49",
      description: "For established businesses",
      features: [
        "Everything in Professional",
        "Multiple team members",
        "Custom workflows",
        "API access",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Choose the plan that works best for your business
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={plan.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <PriceCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};