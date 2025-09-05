import { Check } from "lucide-react";

export function TechSection() {
  const techStack = [
    {
      title: "Multisig 2-of-2 for revocation",
      description: "Enhanced security with dual signature requirements",
    },
    {
      title: "Taproot for efficiency",
      description: "Improved scalability and privacy",
    },
    {
      title: "Time-lock contracts (CLTV, CSV) for milestones",
      description: "Programmatic release of funds based on predefined conditions",
    },
    {
      title: "Nostr protocol for comms and web of trust",
      description: "Decentralized social networking for project communications",
    },
    {
      title: "Hash locks for group revocation",
      description: "Cryptographic security for collaborative control",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-angor-darkTeal to-angor-cyan/95 overflow-hidden">
      {/* Enhanced background overlay with a pulsating radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,108,129,0.45)_0%,rgba(2,34,41,0.85)_70%)] animate-[pulse_6s_ease-in-out_infinite]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,108,129,0.3)_0%,rgba(2,34,41,0.7)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-angor-cyan/30 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-angor-steel/20 blur-[120px]"></div>
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-angor-steel text-sm uppercase tracking-wide mb-3">
            BEHIND THE TECH
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
            Angor has no backend<br />and is open source
          </h3>
          <p className="max-w-2xl mx-auto text-angor-steel/90 text-lg">
            It relies on Bitcoin explorers and Nostr relays, which users can run on their own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Animated Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:order-1 order-2">
            <div className="flex justify-center">
              <div className="glass-card ring-2 ring-angor-cyan/20 bg-gradient-to-br from-angor-darkTeal to-angor-teal/80 p-8 rounded-xl shadow-2xl h-64 w-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                <img 
                  src="/angor-app-icon-dark.png" 
                  alt="Angor Logo" 
                  className="h-32 w-auto animate-float" 
                />
              </div>
            </div>
            <div className="flex justify-center mt-8 sm:mt-16">
              <div className="glass-card ring-2 ring-angor-cyan/20 bg-gradient-to-br from-angor-darkTeal to-angor-teal/80 p-8 rounded-xl shadow-2xl h-64 w-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                <div className="text-angor-steel text-5xl font-bold tracking-wide">
                  HUB
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Details */}
          <div className="space-y-10 md:order-2 order-1">
            <div className="mb-8">
              <h4 className="text-3xl font-bold text-white mb-4 relative inline-block group">
                <span className="bg-gradient-to-r from-white via-angor-steel to-angor-cyan bg-clip-text text-transparent">
                  Tech stack
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-angor-cyan via-angor-steel/80 to-transparent rounded-full transform transition-all duration-500 group-hover:scale-x-110 group-hover:translate-x-1"></div>
              </h4>
            </div>

            <div className="grid gap-6 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-angor-cyan/5 to-transparent rounded-2xl blur-xl -z-10"></div>
              
              {techStack.map(({ title, description }, index) => (
                <div 
                  key={index} 
                  className="group flex items-start rounded-xl p-4 backdrop-blur-lg bg-gradient-to-br from-angor-darkTeal/80 to-angor-darkTeal/40 border border-angor-steel/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-angor-cyan/20 hover:to-angor-darkTeal/60 hover:shadow-lg hover:shadow-angor-cyan/20 hover:border-angor-steel/30"
                  style={{ animationDelay: `${index * 150}ms` }}
                  data-aos="fade-up"
                >
                  <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-angor-cyan/60 to-angor-darkTeal/40 rounded-full p-3 mr-5 shadow-inner shadow-angor-steel/10 ring-1 ring-white/20 group-hover:from-angor-cyan/80 group-hover:to-angor-darkTeal/60 group-hover:shadow-angor-steel/30 group-hover:ring-white/30 transition-all duration-300 group-hover:scale-110">
                    <Check className="h-5 w-5 text-white group-hover:text-angor-steel group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg tracking-tight group-hover:text-angor-cyan transition-colors duration-300">{title}</p>
                    <p className="text-angor-steel/90 text-sm mt-2 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-angor-steel/30 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
