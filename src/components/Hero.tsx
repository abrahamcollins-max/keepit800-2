import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldAlert, TrendingUp, ArrowRight, X, ChevronRight, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

export function Hero() {
  const [activePanel, setActivePanel] = useState<'stop' | 'build' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  useEffect(() => {
    if (activePanel) {
      document.body.style.overflow = 'hidden';
      // @ts-ignore
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      // @ts-ignore
      if (window.lenis) window.lenis.start();
    }
    return () => { 
        document.body.style.overflow = ''; 
        // @ts-ignore
        if (window.lenis) window.lenis.start();
    };
  }, [activePanel]);

  const containerRef = useRef<HTMLDivElement>(null);

  const stopItems = [
    'Stop a Foreclosure',
    'Stop a Collection/Judgment/Garnishment',
    'Stop Student Loans',
    'Eliminate Bad Debt without Filing Bankruptcy',
    'Predatory Loan Elimination',
    'Tax Debt Program',
    'Aggressive Inquiries Scrub - $500 Per Bureau',
    'Generate a Damages Invoice'
  ];

  const buildItems = [
    'Build Business Credit',
    'Monetize Your Credit – Get Money - $50,000 to $5 Billion',
    'Get $100,000 in 2-5 Days',
    'Business Blank Check Program',
    'Become a Credit Investor',
    'Become an Affiliate',
    'The Highest Credit Score in the World',
    'Debt Filtration - Pay Bills with Cancelation and Forgiveness',
    'Zero Point Conversion'
  ];

  return (
    <>
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-center items-center pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dxyaxgbjl/video/upload/v1781024313/6036406_Document_Business_1920x1080_kyntcp.mp4" type="video/mp4" />
        </video>
        {/* Premium brand blue overlay */}
        <div className="absolute inset-0 bg-[#09152B]/60 mix-blend-multiply"></div>
        {/* Edge blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Emblem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
          <motion.div 
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-gold/40 bg-obsidian flex items-center justify-center relative z-10 shadow-[inset_0_0_20px_rgba(212,175,55,0.2),0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-md"
          >
            <span className="font-serif font-bold text-2xl md:text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gold-light to-gold">800</span>
          </motion.div>
        </motion.div>

        {/* Headlines */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 relative z-50"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-platinum mb-6 drop-shadow-[0_4px_30px_rgba(212,175,55,0.2)]">
            KEEP IT 800
          </h1>
          <p className="text-lg md:text-2xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <span className="text-gold font-medium">Build, Maintain, and Monetize</span> your financial freedom.
          </p>
        </motion.div>

        {/* Banner */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="px-8 py-3 rounded-full glass-panel mb-16 shadow-[0_0_40px_rgba(212,175,55,0.05)] border-gold/20 flex items-center gap-3"
        >
          <Lock className="w-4 h-4 text-gold" strokeWidth={1.5} />
          <p className="text-xs md:text-sm font-semibold text-platinum tracking-[0.2em] uppercase">
            Your Credit Will Make You More Money Than Your Job Ever Will
          </p>
        </motion.div>

        {/* Search Command Bar (Micro-Interaction) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mb-20 relative"
        >
          <div className={cn("relative group transition-all duration-700", isInputFocused ? "scale-[1.02]" : "scale-100")}>
            <div className={cn("absolute -inset-0.5 rounded-2xl blur transition duration-1000", isInputFocused ? "bg-gradient-to-r from-gold/30 via-platinum/20 to-gold/30 opacity-70" : "bg-gold/10 opacity-30 group-hover:opacity-50")}></div>
            <div className="relative glass-panel rounded-2xl flex flex-col p-2 transition-all">
              <label 
                className={cn("absolute left-[52px] transition-all duration-300 font-medium pointer-events-none flex items-center gap-2", 
                isInputFocused || searchQuery ? "-top-6 text-xs text-gold uppercase tracking-wider" : "top-1/2 -translate-y-1/2 text-base text-slate-400")}
              >
                What financial roadblock can we remove for you today?
              </label>
              <div className="flex items-center">
                <Search className={cn("w-6 h-6 ml-4 shrink-0 transition-colors duration-300", isInputFocused ? "text-gold" : "text-slate-500")} strokeWidth={1.5} />
                <input
                  type="text"
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-platinum px-4 py-5 focus:outline-none text-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Orchestrated 3D / Horizontal Slide Funnel */}
        <div className="w-full max-w-5xl relative z-20">
             <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="grid md:grid-cols-2 gap-6 h-full"
               >
                 {/* Panel 1 */}
                 <div 
                   onClick={() => setActivePanel('stop')}
                   className="glass-panel group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer flex flex-col hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-700 h-full"
                 >
                   <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="w-16 h-16 rounded-2xl glass-panel border-gold/20 flex items-center justify-center mb-8">
                     <ShieldAlert className="w-8 h-8 text-gold" strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-platinum mb-4">STOP THE DAMAGE</h3>
                   <p className="text-slate-400 leading-relaxed font-light mb-8 max-w-sm flex-grow">
                     Instantly halt foreclosures, collections, judgments, garnishments, and predatory debt cycles.
                   </p>
                   <div className="mt-auto flex items-center justify-between text-gold font-semibold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500 pt-4">
                     <span>Execute Defense</span>
                     <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                   </div>
                 </div>

                 {/* Panel 2 */}
                 <div 
                   onClick={() => setActivePanel('build')}
                   className="glass-panel group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer flex flex-col hover:border-cyan-radiant/30 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] transition-all duration-700 h-full"
                 >
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-radiant/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="w-16 h-16 rounded-2xl glass-panel border-cyan-radiant/20 flex items-center justify-center mb-8">
                     <TrendingUp className="w-8 h-8 text-cyan-radiant" strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-platinum mb-4">BUILD WEALTH & FUNDING</h3>
                   <p className="text-slate-400 leading-relaxed font-light mb-8 max-w-sm flex-grow">
                     Access corporate capital, maximize strategic investments, and build lifelong asset architectures.
                   </p>
                   <div className="mt-auto flex items-center justify-between text-cyan-radiant font-semibold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500 pt-4">
                     <span>Execute Ascent</span>
                     <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                   </div>
                 </div>
               </motion.div>
        </div>

      </div>
    </section>

    {/* Detail View Modal */}
    <AnimatePresence>
        {activePanel !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pt-20 px-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
              className="absolute inset-0 bg-obsidian/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
                 key="detail"
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
                 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                 className={cn(
                   "glass-panel w-full max-w-5xl max-h-[85vh] md:max-h-[80vh] rounded-[2.5rem] p-8 md:p-12 relative flex flex-col md:flex-row gap-12 z-10",
                   activePanel === 'stop' ? "border-gold/30 shadow-[0_0_60px_rgba(212,175,55,0.15)] bg-obsidian/95" : "border-cyan-radiant/30 shadow-[0_0_60px_rgba(56,189,248,0.15)] bg-obsidian/95"
                 )}
               >
                 <button 
                   onClick={() => setActivePanel(null)}
                   className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full hover:bg-white/10 text-slate-300 transition-colors z-20 flex items-center justify-center bg-black/40 border border-white/10 shadow-xl"
                 >
                   <X className="w-5 h-5" strokeWidth={1.5} />
                 </button>

                 <div className="md:w-1/3 flex flex-col justify-center">
                    <div className={cn("w-20 h-20 rounded-2xl glass-panel flex items-center justify-center mb-8", activePanel === 'stop' ? "border-gold/30" : "border-cyan-radiant/30")}>
                      {activePanel === 'stop' ? <ShieldAlert className="w-10 h-10 text-gold" strokeWidth={1} /> : <TrendingUp className="w-10 h-10 text-cyan-radiant" strokeWidth={1} />}
                    </div>
                    <h2 className="font-serif text-4xl font-bold text-platinum mb-4 uppercase">
                      {activePanel === 'stop' ? 'Stop The Damage' : 'Build Wealth'}
                    </h2>
                    <p className="text-slate-400 font-light leading-relaxed mb-8">
                       Select your precise target below to initiate the structural blueprint for immediate resolution.
                    </p>
                 </div>

                 <div className="md:w-2/3 h-full max-h-[60vh] overflow-y-auto hide-scrollbar pb-8 pr-4 pointer-events-auto relative" onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()} data-lenis-prevent="true">
                    <div className="flex flex-col gap-3">
                      {(activePanel === 'stop' ? stopItems : buildItems)
                        .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item, i) => (
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.5 }}
                          key={i}
                          className="w-full text-left p-6 rounded-2xl glass-panel group/btn hover:bg-white/5 transition-all flex items-center justify-between"
                        >
                          <span className="font-medium text-platinum group-hover/btn:text-white transition-colors">{item}</span>
                          <div className={cn("w-8 h-8 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 group-hover/btn:scale-110 ml-4", activePanel === 'stop' ? "border-gold/50 text-gold" : "border-cyan-radiant/50 text-cyan-radiant")}>
                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                          </div>
                        </motion.button>
                      ))}
                      {(activePanel === 'stop' ? stopItems : buildItems).filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                        <div className="p-8 text-center text-slate-500 font-serif italic border border-white/5 rounded-2xl">No protocols found. Please revise search.</div>
                      )}
                    </div>
                 </div>
               </motion.div>
          </div>
        )}
      </AnimatePresence>

    {/* High-Contrast Trust Ribbon */}
    <div className="w-full border-y border-white/5 bg-obsidian py-8 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 md:gap-24 opacity-40 grayscale flex-wrap px-4">
        <span className="font-serif text-xl font-bold tracking-widest text-slate-300">CDMI</span>
        <span className="font-serif text-xl font-bold tracking-widest text-slate-300">FORBES.</span>
        <span className="font-serif text-xl font-bold tracking-widest text-slate-300">WSJ</span>
        <span className="font-serif text-xl font-bold tracking-widest text-slate-300">BLOOMBERG</span>
      </div>
    </div>
    </>
  );
}
