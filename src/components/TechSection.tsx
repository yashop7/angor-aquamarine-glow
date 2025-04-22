
import { Check } from "lucide-react";

export function TechSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-angor-darkTeal to-angor-cyan/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,108,129,0.3)_0%,rgba(2,34,41,0.6)_70%)]"></div>
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(203, 221, 225, 0.3)" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-angor-steel text-sm uppercase tracking-wider mb-2">BEHIND THE TECH</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Angor has no backend<br />and is open source</h3>
          <p className="max-w-2xl mx-auto text-angor-steel/90 text-lg">
            It relies on Bitcoin explorers and Nostr relays, which users can run on their own.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 md:order-1">
            <div className="flex justify-center">
              <div className="glass-card bg-angor-darkTeal/50 p-8 rounded-xl shadow-lg h-64 w-64 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f2a9b647-794c-49e4-be26-1f4f77230ed8.png" 
                  alt="Angor Logo" 
                  className="h-32 w-auto animate-float" 
                />
              </div>
            </div>
            <div className="flex justify-center mt-8 sm:mt-16">
              <div className="glass-card bg-angor-darkTeal/50 p-8 rounded-xl shadow-lg h-64 w-64 flex items-center justify-center">
                <div className="text-angor-steel text-5xl font-bold">HUB</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-white mb-3">Tech stack:</h4>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-steel/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Multisig 2-of-2 for revocation</p>
                  <p className="text-angor-steel/70 text-sm">Enhanced security with dual signature requirements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-steel/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Taproot for efficiency</p>
                  <p className="text-angor-steel/70 text-sm">Improved scalability and privacy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-steel/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Time-lock contracts (CLTV, CSV) for milestones</p>
                  <p className="text-angor-steel/70 text-sm">Programmatic release of funds based on predefined conditions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-steel/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Nostr protocol for comms and web of trust</p>
                  <p className="text-angor-steel/70 text-sm">Decentralized social networking for project communications</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-steel/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Hash locks for group revocation</p>
                  <p className="text-angor-steel/70 text-sm">Cryptographic security for collaborative control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
