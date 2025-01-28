import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-[#1E3A5F] py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Design Your
              <br />
              <span className="bg-gradient-to-r from-accent to-[#FFA726] bg-clip-text text-transparent">
                Financial Freedom
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The easiest way to budget, invest, and grow your wealth – no spreadsheets needed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            
            <div className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full w-fit mb-6">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Join 2M+ users who saved $1B+</span>
            </div>
            
            <div className="w-full max-w-md">
              <div className="flex justify-between text-sm text-blue-100 mb-2">
                <span>Trial spots remaining</span>
                <span>35/50 spots left</span>
              </div>
              <Progress value={70} className="h-2 bg-white/20" />
            </div>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://placehold.co/600x400/2A5C8A/FFF?text=Dashboard+Preview"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute top-1/4 left-1/4 w-24 h-24 border-4 border-accent rounded-full animate-pulse opacity-75" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <img src="https://placehold.co/120x40/2A5C8A/FFF?text=Forbes" alt="Forbes" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="https://placehold.co/120x40/2A5C8A/FFF?text=TechCrunch" alt="TechCrunch" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};