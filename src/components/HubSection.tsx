import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function HubSection() {
  return (
    <section className="py-32 bg-angor-darkTeal relative overflow-hidden">
      {/* Enhanced background with multiple elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,108,129,0.3)_0%,rgba(2,34,41,0.7)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-angor-cyan/30 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-angor-steel/20 blur-[120px]"></div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-angor-steel text-sm uppercase tracking-wider mb-3 font-medium">WHERE CONNECTIONS HAPPEN</h2>
          <h3 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-angor-cyan/90">Angor Hub</h3>
          <div className="w-24 h-1 bg-angor-cyan/50 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 backdrop-blur-sm bg-angor-darkTeal/30 p-8 rounded-2xl border border-angor-steel/10">
            <p className="text-angor-steel text-2xl font-light leading-relaxed">
              Angor Hub is a Nostr client built around the Angor protocol, offering tools to explore crowdfunding projects, connect with investors, and engage directly with founders.
            </p>
            <p className="text-angor-steel/90 text-lg leading-relaxed">
              Whether you're seeking investment opportunities or funding for your project, Angor Hub provides secure messaging, project pages, and group channels for seamless interaction within a decentralized environment.
            </p>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-angor-cyan to-angor-cyan/80 hover:from-angor-cyan/90 hover:to-angor-cyan/70 text-white group border-0 shadow-lg shadow-angor-cyan/20 transition-all duration-300"
              >
                Explore Angor Hub
                <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-angor-cyan/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
              <div className="glass-card bg-gradient-to-br from-angor-darkTeal/80 to-angor-darkTeal/30 p-10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10 relative z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-angor-steel mb-4 drop-shadow-[0_0_15px_rgba(8,108,129,0.5)]">HUB</div>
                  <p className="text-angor-steel/80 text-lg tracking-wider font-light">Connect • Explore • Invest</p>
                  <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-angor-steel/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
