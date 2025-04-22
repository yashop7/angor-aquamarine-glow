
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-angor-darkTeal to-angor-cyan/95">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,108,129,0.2)_0%,rgba(2,34,41,0.5)_70%)]"></div>
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(203, 221, 225, 0.2)" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
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
                className="border-angor-steel text-angor-steel hover:bg-angor-steel hover:text-angor-darkTeal group"
              >
                Angor App
                <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="glass-card bg-angor-darkTeal/50 p-6 w-full max-w-md rounded-xl shadow-lg animate-float">
              <div className="flex items-center justify-between mb-4 text-angor-steel">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/f2a9b647-794c-49e4-be26-1f4f77230ed8.png" 
                    alt="Angor Logo" 
                    className="h-6 w-auto mr-2" 
                  />
                  <span>Browse</span>
                </div>
                <div className="text-sm opacity-70">Only use test wallets (testnet)</div>
              </div>
              <div className="bg-angor-darkTeal/70 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <div className="bg-angor-cyan/20 rounded-md p-2 mr-3">
                    <svg className="w-6 h-6 text-angor-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-angor-steel font-medium">Browse</div>
                    <div className="text-angor-steel/70 text-sm">Browse Projects</div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="bg-angor-darkTeal rounded-lg p-3 flex items-center">
                  <input 
                    type="text"
                    placeholder="Enter Angor project identifier"
                    className="bg-transparent text-angor-steel placeholder-angor-steel/50 outline-none flex-1"
                  />
                  <svg className="w-5 h-5 text-angor-steel/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center py-8">
                <div className="bg-[#F7931A] p-4 rounded-full animate-pulse-gentle">
                  <img 
                    src="/lovable-uploads/e31fd17c-e8bf-46af-bc0d-d640f284b832.png" 
                    alt="Bitcoin" 
                    className="w-12 h-12" 
                  />
                </div>
              </div>
              <div className="text-center text-angor-steel/70 text-sm">
                Version: 0.0.30.0
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-angor-steel/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-angor-cyan/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-angor-darkTeal"></div>
    </section>
  );
}
