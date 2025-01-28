import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Financial Clarity,<br />Without the Complexity
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Used by 5,000+ freelancers and sole traders to save 10+ hours every month. Handle invoices, track expenses, and prepare for tax season with confidence.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 transform transition-transform hover:scale-105"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full w-fit">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
              </div>
              
              <div className="w-full max-w-md">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Trial spots remaining</span>
                  <span>35/50 spots left</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Financial Management"
              className="rounded-lg shadow-2xl animate-fade-up hover:shadow-3xl transition-shadow duration-300"
              style={{ animationDelay: "0.2s" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};