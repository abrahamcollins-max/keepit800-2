import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Programs() {
  const [isHovered, setIsHovered] = useState(false);

  const flags = [
    "Extreme Credit - The Secret 800 Credit Score Formula",
    "Become Collection Proof, Stop Debt Collection Fraud",
    "Become Garnishment Proof",
    "Student Loan Cancelation and Forgiveness",
    "Faith & Financial Freedom Revival Tour",
    "Become Foreclosure Proof - Stop Bank Foreclosure Fraud",
    "Get $100,000 in 2-5 days",
    "NSCRA System Integration",
    "Commercial Development Projects",
    "Bankruptcy Removal",
    "Books that will change your life",
    "Perfect Credit Program – PCP – 700 - 750",
    "Suing the Credit Bureaus for Fraud"
  ];

  return (
    <section id="programs" className="py-32 relative overflow-hidden bg-milk-white border-b border-white">
      
      <div className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-cyan-radiant w-12 opacity-50"></div>
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-radiant">Masterclass Offerings</h2>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Signature Programs</h2>
        <p className="text-slate-600 font-light text-xl">Tactical protocols and high-velocity defense systems.</p>
      </div>

      <div 
        className="relative group w-full flex overflow-x-hidden cursor-ew-resize py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
           animate={{ x: [0, -2800] }}
           transition={{ ease: "linear", duration: isHovered ? 120 : 40, repeat: Infinity }}
           className="flex gap-6 px-6 relative w-max"
        >
           {/* Double array to create seamless loop */}
          {[...flags, ...flags].map((item, index) => (
             <div 
               key={index} 
               className={cn(
                 "flex-shrink-0 w-[450px] bg-white p-10 transition-all duration-700 flex flex-col group/card border border-slate-200 shadow-xl transform-gpu rounded-xl z-0",
                 isHovered ? "opacity-30 hover:opacity-100 hover:scale-105 hover:border-cyan-radiant/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_40px_rgba(56,189,248,0.1)] hover:z-10 hover:-translate-y-2" : "opacity-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
               )}
             >
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug group-hover/card:text-slate-blue transition-colors duration-500">{item}</h3>
                </div>
                <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-slate-500 group-hover/card:text-slate-blue font-semibold text-xs tracking-widest uppercase transition-colors duration-500">
                  View Details
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover/card:opacity-100 -translate-x-2 group-hover/card:translate-x-0 transition-all duration-500" strokeWidth={1} />
                </div>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
