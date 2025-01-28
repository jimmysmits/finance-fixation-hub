import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#0A0A0F] py-24 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          background: `
            repeating-linear-gradient(90deg, transparent 0, transparent 1px, #00F0FF 1px, transparent 20px),
            repeating-linear-gradient(180deg, transparent 0, transparent 1px, #00F0FF 1px, transparent 20px)
          `
        }}/>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#E0E0E0]">
              Financial
              <br />
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#FF4D79] bg-clip-text text-transparent">
                Superpowers
              </span>
            </h1>
            <p className="text-xl text-[#E0E0E0]/80 mb-8">
              AI-driven wealth building for the digital age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-[#FF4D79] hover:bg-[#FF4D79]/90 transform transition-transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF4D79] opacity-0 group-hover:opacity-20 transition-opacity" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10 relative overflow-hidden group"
              >
                <Play className="w-4 h-4 mr-2" />
                <span className="relative z-10">Watch Demo</span>
                <div className="absolute inset-0 bg-[#00F0FF] opacity-0 group-hover:opacity-5 transition-opacity" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 bg-[#161622] text-[#E0E0E0] px-4 py-2 rounded-full w-fit mb-6 border border-[#00F0FF]/10">
              <Shield className="w-5 h-5 text-[#00F0FF]" />
              <span className="text-sm font-medium">Join 2M+ users who saved $1B+</span>
            </div>
            
            <div className="w-full max-w-md">
              <div className="flex justify-between text-sm text-[#E0E0E0]/80 mb-2">
                <span>Trial spots remaining</span>
                <span>35/50 spots left</span>
              </div>
              <Progress value={70} className="h-2 bg-[#161622]" indicatorClassName="bg-[#00F0FF]" />
            </div>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-[#161622] border border-[#00F0FF]/10">
              <div className="bg-[#0A0A0F] p-4 border-b border-[#00F0FF]/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0A0A0F]/50 p-4 rounded-lg border border-[#00F0FF]/10">
                    <div className="text-sm text-[#E0E0E0]/60">Total Balance</div>
                    <div className="text-2xl font-bold text-[#00F0FF]">$24,500</div>
                    <div className="text-xs text-[#00F0FF]">+12.5% this month</div>
                  </div>
                  <div className="bg-[#0A0A0F]/50 p-4 rounded-lg border border-[#00F0FF]/10">
                    <div className="text-sm text-[#E0E0E0]/60">Monthly Savings</div>
                    <div className="text-2xl font-bold text-[#00F0FF]">$1,850</div>
                    <div className="text-xs text-[#00F0FF]">+5.2% vs last month</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-[#0A0A0F]/50 rounded w-full border border-[#00F0FF]/10"></div>
                  <div className="h-4 bg-[#0A0A0F]/50 rounded w-3/4 border border-[#00F0FF]/10"></div>
                  <div className="h-4 bg-[#0A0A0F]/50 rounded w-5/6 border border-[#00F0FF]/10"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#FF4D79] rounded-full animate-pulse opacity-75"></div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <img src="https://placehold.co/120x40/161622/00F0FF?text=Forbes" alt="Forbes" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="https://placehold.co/120x40/161622/00F0FF?text=TechCrunch" alt="TechCrunch" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};