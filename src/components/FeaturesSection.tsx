import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-angor-darkTeal to-angor-teal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,108,129,0.3)_0%,rgba(2,34,41,0.7)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-angor-cyan/30 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-angor-steel/20 blur-[120px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="inline-block bg-angor-steel/10 px-4 py-1.5 rounded-full backdrop-blur-sm mb-4">
            <h2 className="text-angor-steel text-sm uppercase tracking-wider font-semibold">Introduction</h2>
          </div>
          <h3 className="text-5xl sm:text-6xl font-extrabold text-white mb-8 drop-shadow-lg leading-tight">
            Decentralized <span className="bg-clip-text text-transparent bg-gradient-to-r from-angor-cyan to-white">Crowdfunding</span>
          </h3>
          <p className="max-w-2xl mx-auto text-angor-steel/90 text-xl leading-relaxed">
            We're shaking up how Bitcoin crowdfunding works. Angor is a decentralized protocol, uniquely merging the security of Bitcoin with the transparency of Nostr.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center text-xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-angor-steel/90 leading-relaxed backdrop-blur-sm bg-angor-darkTeal/30 p-6 rounded-xl border border-angor-cyan/20 shadow-xl">
              Investor funds are released in stages through time-lock contracts. Unspent funds can be recovered at any point, ensuring that investors maintain control and aligning the interests of investors and founders.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Investor Empowerment",
                  description: "Maintain control over your investment with staged funding releases",
                },
                {
                  title: "Founder Advantage",
                  description: "Clear milestones and funding schedule for project development",
                },
                {
                  title: "Transparent Platform",
                  description: "All transactions and communications visible on public ledgers",
                },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-start p-4 rounded-xl hover:bg-angor-darkTeal/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex-shrink-0 border-white bg-angor-cyan rounded-full p-2 mr-4 shadow-lg backdrop-blur-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{feature.title}</p>
                    <p className="text-angor-steel/80 text-base mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                img: "/angor-app-icon-dark.png",
                alt: "Bitcoin",
                title: "Bitcoin Security",
                desc: "Built on the most secure blockchain",
                extraClass: "",
              },
              {
                svg: (
                  <svg className="h-16 w-16 text-angor-cyan mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                ),
                title: "Time-Lock Contracts",
                desc: "Milestone-based funding",
                extraClass: "",
              },
              {
                svg: (
                  <svg className="h-16 w-16 text-angor-cyan mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                ),
                title: "Trust Minimized",
                desc: "No central authority",
                extraClass: "",
              },
              {
                img: "/angor-app-icon-dark.png",
                alt: "Nostr",
                title: "Nostr Integration",
                desc: "Decentralized communications",
                extraClass: "",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className={`feature-card bg-gradient-to-br from-angor-darkTeal/90 to-angor-darkTeal/60 backdrop-blur-sm border border-angor-cyan/30 rounded-2xl p-6 text-center flex flex-col items-center transition-all duration-300 shadow-lg ${card.extraClass}`}
              >
                <div className="bg-gradient-to-br from-angor-darkTeal to-angor-teal/80 rounded-full p-4 mb-5 shadow-lg ring-2 ring-angor-cyan/20">
                  {card.img ? (
                    <motion.img
                      src={card.img}
                      alt={card.alt}
                      className="h-16 w-16 mx-auto"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  ) : (
                    card.svg
                  )}
                </div>
                <h4 className="text-white font-bold text-lg drop-shadow mb-2">{card.title}</h4>
                <p className="text-angor-steel/80 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-angor-darkTeal"></div>
    </section>
  );
}
