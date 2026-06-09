import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Home, Building2, Scale, Shield, FileText, ChevronRight, X } from 'lucide-react';
import { cn } from '../lib/utils';
import gsap from 'gsap';

type ServiceAction = 'none' | 'student' | 'foreclosure' | 'business' | 'filtration' | 'shields' | 'tax';

export function ServicesMatrix() {
  const [activeService, setActiveService] = useState<ServiceAction>('none');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeService !== 'none') {
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
  }, [activeService]);

  const services = [
    {
      id: 'student',
      icon: <GraduationCap className="w-8 h-8" strokeWidth={1} />,
      title: 'Student Loans',
      subtitle: '$500 / $1,000',
      color: 'gold',  // Simplified for accent styling
      details: [
        { label: 'General program enrollment', value: '$500' },
        { label: 'Active wage garnishment mitigation', value: '$1,000' }
      ]
    },
    {
      id: 'foreclosure',
      icon: <Home className="w-8 h-8" strokeWidth={1} />,
      title: 'Foreclosure Defense',
      subtitle: 'Starting at $500',
      color: 'platinum',
      details: [
        { label: 'Total Comprehensive Strategy', value: '$15,000' },
        { label: 'Baseline Document Service', value: '$500' },
        { label: 'Quiet Title Action', value: '$15,000 + 20%' },
        { label: 'Priority Expedited Processing', value: '$1,500' }
      ]
    },
    {
      id: 'business',
      icon: <Building2 className="w-8 h-8" strokeWidth={1} />,
      title: 'Business Credit',
      subtitle: 'Complete Blueprint',
      color: 'gold',
      details: [
        { label: 'Structural corporate credit blueprints', value: 'Included' },
        { label: 'Lending pathways', value: 'Included' },
        { label: 'Direct institutional funding access', value: 'Included' }
      ]
    },
    {
      id: 'filtration',
      icon: <Scale className="w-8 h-8" strokeWidth={1} />,
      title: 'Debt Filtration',
      subtitle: 'Cancelation / Forgiveness',
      color: 'platinum',
      details: [
        { label: 'Outstanding balances under $10,000', value: '$1,000 flat rate' },
        { label: 'Outstanding balances over $10,000', value: '20% of total cleared liability' },
        { label: 'Debt Cancelation using Filtration', value: 'Legal balance clearings' }
      ]
    },
    {
      id: 'shields',
      icon: <Shield className="w-8 h-8" strokeWidth={1} />,
      title: 'Protection Shields',
      subtitle: 'Monthly Subscription',
      color: 'gold',
      details: [
        { label: 'Perfect Credit Protection (PCP)', value: '$29.95 / mo' },
        { label: 'Bad Debt Protection (BDP)', value: '$99.95 / mo' },
        { label: 'ID Theft Protection (ITP)', value: '$19.95 / mo' },
        { label: 'NSCRA Protection (NP)', value: '$39.95 / mo' },
        { label: 'NSCRA & Perfect Credit Program', value: '$299 down + $99 / mo' }
      ]
    },
    {
      id: 'tax',
      icon: <FileText className="w-8 h-8" strokeWidth={1} />,
      title: 'Tax Debt Removal',
      subtitle: 'OIC Tiered Pricing',
      color: 'platinum',
      details: [
        { label: 'Pricing Frame', value: '10% of total verified savings' },
        { label: 'Tax Lien Balance under $100k', value: '$1,000 Down' },
        { label: 'Tax Lien Balance $100k - $500k', value: '$5,000 Down' },
        { label: 'Tax Lien Balance $500k - $1M', value: '$10,000 Down' },
        { label: 'Tax Lien Balance over $1M', value: '$25,000 Down' }
      ]
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section ref={sectionRef} id="services" className="py-32 px-6 lg:px-12 relative z-10 bg-slate-blue border-y border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gold w-12 opacity-50"></div>
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Architecture of Wealth</h2>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-platinum tracking-tight leading-tight">
              Interactive Services Matrix.
            </h2>
          </div>
          <p className="text-lg text-slate-400 max-w-sm font-light">
            Select a program tier below to explore transparent pricing structures and strategic enrollment timelines.
          </p>
        </div>

        {/* Grid CSS Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
             <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id as ServiceAction)}
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "matrix-card w-full text-left relative overflow-hidden flex flex-col p-10 rounded-none border-[0.5px] border-white/10 glass-panel group transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
                service.id === 'shields' || service.id === 'foreclosure' ? "aspect-square justify-center" : ""
              )}
            >
              {/* Radial spotlight effect driven by JS mouse tracking */}
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(212,175,55,0.1),transparent_40%)]" />
              
              <div className="relative z-10 flex flex-col items-start h-full">
                 <div className={cn(
                   "w-16 h-16 rounded-full flex items-center justify-center mb-8 border transition-all duration-700", 
                   service.color === 'gold' ? "border-gold/30 text-gold group-hover:bg-gold/10" : "border-platinum/30 text-platinum group-hover:bg-platinum/10"
                 )}>
                  {service.icon}
                 </div>
                 <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                 <p className="font-medium text-xs tracking-[0.2em] uppercase text-slate-400 mb-6">{service.subtitle}</p>
                 
                 <div className="mt-auto w-full pt-6 border-t border-white/[0.05] flex items-center justify-between">
                   <span className="text-xs font-semibold text-slate-500 tracking-wider">VIEW BLUEPRINT</span>
                   <ChevronRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                 </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Detailed Modal / Panel Overlay (Cinematic Glassmorphism) */}
        <AnimatePresence>
          {activeService !== 'none' && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/80"
            >
              <motion.div
                 initial={{ scale: 0.95, opacity: 0, y: 40 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.95, opacity: 0, y: 40 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 data-lenis-prevent="true"
                 onWheel={(e) => e.stopPropagation()}
                 onTouchMove={(e) => e.stopPropagation()}
                 className="glass-panel border-gold/20 rounded-none p-10 md:p-16 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

                <button 
                  onClick={() => setActiveService('none')}
                  className="absolute top-8 right-8 p-3 glass-panel rounded-full hover:bg-white/10 text-slate-300 transition-colors group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" strokeWidth={1.5} />
                </button>
                
                {services.filter(s => s.id === activeService).map(service => (
                  <div key={service.id}>
                    <div className="flex items-center gap-6 mb-10">
                      <div className={cn("w-20 h-20 rounded-full flex items-center justify-center border", service.color === 'gold' ? "border-gold/30 text-gold" : "border-platinum/30 text-platinum")}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-4xl md:text-5xl font-bold text-platinum mb-2">{service.title}</h3>
                        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-12">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center p-5 rounded-none glass-panel border-[0.5px] border-white/[0.05] hover:border-gold/20 transition-colors">
                          <span className="font-light text-slate-300 mb-2 sm:mb-0">{detail.label}</span>
                          <span className="font-serif font-bold text-gold text-lg">{detail.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-start">
                      <button className="px-10 py-5 rounded-sm glass-panel border-gold/40 text-platinum hover:bg-yellow-400 hover:text-obsidian hover:border-yellow-400 font-bold text-sm tracking-widest uppercase transition-all duration-500 flex items-center gap-3">
                        Initialize Protocol <ChevronRight className="w-4 h-4" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
