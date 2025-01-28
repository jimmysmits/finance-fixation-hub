import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-[#1E3A5F] py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
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
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="bg-primary p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Total Balance</div>
                    <div className="text-2xl font-bold text-primary">$24,500</div>
                    <div className="text-xs text-green-500">+12.5% this month</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                    <div className="text-2xl font-bold text-primary">$1,850</div>
                    <div className="text-xs text-green-500">+5.2% vs last month</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent rounded-full animate-pulse opacity-75"></div>
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