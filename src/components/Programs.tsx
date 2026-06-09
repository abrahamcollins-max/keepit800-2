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
    "Suing the Credit Bureaus for Fraud"
  ];

  return (
    <section id="programs" className="py-32 relative overflow-hidden bg-obsidian border-b border-white/[0.05]">
      
      <div className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gold w-12 opacity-50"></div>
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Masterclass Offerings</h2>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-platinum tracking-tight mb-4">Signature Programs</h2>
        <p className="text-slate-400 font-light text-xl">Tactical protocols and high-velocity defense systems.</p>
      </div>

      <div 
        className="relative group w-full flex overflow-x-hidden cursor-ew-resize"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>

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
                 "flex-shrink-0 w-[450px] glass-panel p-10 transition-all duration-700 flex flex-col group/card rounded-none border-[0.5px] border-white/10",
                 isHovered ? "opacity-40 hover:opacity-100 hover:scale-[1.02] hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)]" : "opacity-100"
               )}
             >
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-platinum leading-snug group-hover/card:text-gold transition-colors duration-500">{item}</h3>
                </div>
                <div className="mt-12 pt-6 border-t border-white/[0.05] flex items-center justify-between text-slate-500 group-hover/card:text-gold font-semibold text-xs tracking-widest uppercase transition-colors duration-500">
                  Read Blueprint
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover/card:opacity-100 -translate-x-2 group-hover/card:translate-x-0 transition-all duration-500" strokeWidth={1} />
                </div>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
