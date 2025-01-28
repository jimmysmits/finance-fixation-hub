import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-[#1E3A5F] py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Financial Control,<br />
            <span className="bg-gradient-to-r from-accent to-[#FFA726] bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Used by 5,000+ freelancers and sole traders to save 10+ hours every month. Automate budgeting, track investments, and prepare for tax season with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 transform transition-transform hover:scale-105"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo (2 mins)
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full w-fit mx-auto mb-6">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
          </div>
          
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between text-sm text-blue-100 mb-2">
              <span>Trial spots remaining</span>
              <span>35/50 spots left</span>
            </div>
            <Progress value={70} className="h-2 bg-white/20" />
          </div>

          <div className="flex justify-center gap-8 mt-12 opacity-80">
            <img src="https://placehold.co/120x40/2A5C8A/FFF?text=Forbes" alt="Forbes" className="h-8" />
            <img src="https://placehold.co/120x40/2A5C8A/FFF?text=TechCrunch" alt="TechCrunch" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};