
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export function HubSection() {
  return (
    <section className="py-24 bg-angor-darkTeal relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,108,129,0.2)_0%,rgba(2,34,41,0.5)_70%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-angor-steel text-sm uppercase tracking-wider mb-2">WHERE CONNECTIONS HAPPEN</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Angor Hub</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-angor-steel text-lg">
              Angor Hub is a Nostr client built around the Angor protocol, offering tools to explore crowdfunding projects, connect with investors, and engage directly with founders.
            </p>
            <p className="text-angor-steel/90">
              Whether you're seeking investment opportunities or funding for your project, Angor Hub provides secure messaging, project pages, and group channels for seamless interaction within a decentralized environment.
            </p>
            
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-angor-cyan hover:bg-angor-cyan/80 text-white group"
              >
                Angor Hub
                <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-card bg-angor-darkTeal/50 p-6 rounded-xl shadow-lg max-w-md">
              <div className="text-center">
                <div className="text-8xl font-bold text-angor-steel mb-3">HUB</div>
                <p className="text-angor-steel/70">Connect, Explore, Invest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
