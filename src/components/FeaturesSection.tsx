
import { Check } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-angor-darkTeal relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-angor-steel text-sm uppercase tracking-wider mb-2">INTRODUCTION</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Decentralized crowdfunding</h3>
          <p className="max-w-2xl mx-auto text-angor-steel/90 text-lg">
            We're shaking up how Bitcoin crowdfunding works. Angor is a decentralized protocol, uniquely merging the security of Bitcoin with the transparency of Nostr.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-angor-steel/90">
              Investors funds are released in stages through time-lock contracts. Unspent funds can be recovered at any point, ensuring that investors maintain control and aligning the interests of investors and founders.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-cyan/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Investor Empowerment</p>
                  <p className="text-angor-steel/70 text-sm">Maintain control over your investment with staged funding releases</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-cyan/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Founder Advantage</p>
                  <p className="text-angor-steel/70 text-sm">Clear milestones and funding schedule for project development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-angor-cyan/20 rounded-full p-1 mr-3">
                  <Check className="h-5 w-5 text-angor-steel" />
                </div>
                <div>
                  <p className="text-angor-steel font-medium">Transparent Platform</p>
                  <p className="text-angor-steel/70 text-sm">All transactions and communications visible on public ledgers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="feature-card bg-angor-darkTeal/80 border border-angor-cyan/20 rounded-lg p-6 text-center flex flex-col items-center">
              <div className="bg-angor-darkTeal rounded-lg p-4 mb-4">
                <img 
                  src="/lovable-uploads/e31fd17c-e8bf-46af-bc0d-d640f284b832.png" 
                  alt="Bitcoin" 
                  className="h-16 w-16 mx-auto" 
                />
              </div>
              <h4 className="text-white font-medium">Bitcoin Security</h4>
              <p className="text-angor-steel/70 text-sm mt-2">Built on the most secure blockchain</p>
            </div>
            
            <div className="feature-card bg-angor-darkTeal/80 border border-angor-cyan/20 rounded-lg p-6 text-center flex flex-col items-center mt-6">
              <div className="bg-angor-darkTeal rounded-lg p-4 mb-4">
                <img 
                  src="/lovable-uploads/934bae51-5f63-4ab6-8c90-bc6eb512da5a.png" 
                  alt="Nostr" 
                  className="h-16 w-16 mx-auto" 
                />
              </div>
              <h4 className="text-white font-medium">Nostr Integration</h4>
              <p className="text-angor-steel/70 text-sm mt-2">Decentralized communications</p>
            </div>
            
            <div className="feature-card bg-angor-darkTeal/80 border border-angor-cyan/20 rounded-lg p-6 text-center flex flex-col items-center">
              <div className="bg-angor-darkTeal rounded-lg p-4 mb-4">
                <svg className="h-16 w-16 text-angor-steel mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h4 className="text-white font-medium">Time-Lock Contracts</h4>
              <p className="text-angor-steel/70 text-sm mt-2">Milestone-based funding</p>
            </div>
            
            <div className="feature-card bg-angor-darkTeal/80 border border-angor-cyan/20 rounded-lg p-6 text-center flex flex-col items-center mt-6">
              <div className="bg-angor-darkTeal rounded-lg p-4 mb-4">
                <svg className="h-16 w-16 text-angor-steel mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-white font-medium">Trust Minimized</h4>
              <p className="text-angor-steel/70 text-sm mt-2">No central authority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
