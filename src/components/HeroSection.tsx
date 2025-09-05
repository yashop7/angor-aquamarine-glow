
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-40 py-32 overflow-hidden ">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,108,129,0.3)_0%,rgba(2,34,41,0.7)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-angor-cyan/30 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-angor-steel/20 blur-[120px]"></div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Non Custodial</span><br />
              <span className="text-angor-steel">Crowdfunding</span><br />
              <span className="text-angor-steel">with</span> <span className="text-white">Angor</span>
            </h1>
            <p className="text-lg text-angor-steel/90">
              A decentralized crowdfunding protocol built on Bitcoin and Nostr, 
              providing security, transparency, and control for both investors and founders.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                size="lg" 
                className="bg-angor-cyan hover:bg-angor-cyan/80 text-white"
              >
                Angor Hub
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-angor-steel text-angor-black hover:bg-angor-steel hover:text-angor-darkTeal group"
              >
                Angor App
                <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
          src="dashboard.gif"
          alt="dashboard"
          />
        </div>
      </div>
      
    </section>
  );
}
