
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What is Angor?",
      answer: "Angor is a decentralized crowdfunding protocol built on Bitcoin and Nostr. It enables secure, transparent funding for projects with milestone-based releases and integrated communications, all while maintaining investor control."
    },
    {
      question: "How does Angor work?",
      answer: "Angor uses Bitcoin's time-lock contracts to release funds to project creators in stages as milestones are reached. This protects investors while providing founders with clear funding paths. The Nostr protocol enables decentralized communications and updates."
    },
    {
      question: "What happens if the project is not fully funded?",
      answer: "If a project doesn't reach its funding goal, investors can reclaim their entire contribution. Angor's design ensures that funds remain recoverable until deliberately released according to the project's milestone schedule."
    },
    {
      question: "When and how are rewards/tokens paid to investors?",
      answer: "Project creators define reward structures in their project details. These can include tokens, products, services, or other benefits. Distribution schedules are transparent and typically tied to project milestones or completion events."
    },
    {
      question: "How can I get updates on the projects' progress?",
      answer: "All project updates are published through the Nostr protocol, which you can access via Angor Hub. This ensures that communications remain decentralized and accessible even if specific services go offline."
    },
    {
      question: "How do you select and vet crowdfunding projects?",
      answer: "Angor is permissionless by design, meaning anyone can create a project. However, the platform incorporates web-of-trust mechanisms through Nostr that help users identify credible projects based on community reputation and verification."
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-angor-darkTeal to-angor-cyan/90 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,108,129,0.3)_0%,rgba(2,34,41,0.7)_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-angor-cyan/30 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-angor-steel/20 blur-[120px]"></div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-angor-steel text-sm uppercase tracking-wider mb-2">HAVE ANY QUESTIONS?</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h3>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-angor-darkTeal/90 border border-angor-cyan/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-7 text-lg font-medium text-angor-steel hover:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-angor-steel/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
