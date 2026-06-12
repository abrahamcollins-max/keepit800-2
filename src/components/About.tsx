import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useParallax } from '../hooks/useParallax';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const chartHeight = useTransform(scrollYProgress, [0.2, 0.5], ["20%", "100%"]);
  const chartHeight2 = useTransform(scrollYProgress, [0.3, 0.6], ["30%", "85%"]);
  const chartHeight3 = useTransform(scrollYProgress, [0.4, 0.7], ["15%", "120%"]);

  useParallax(portraitRef, containerRef, { y: -80, scrub: 1.5 });
  useParallax(badgeRef, containerRef, { y: -120, scrub: 1.5 });

  useGSAP(() => {
    // Signature draw effect using strokeDashoffset
    if (signatureRef.current) {
      const length = signatureRef.current.getTotalLength();
      gsap.set(signatureRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(signatureRef.current, {
        strokeDashoffset: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 2,
        }
      });
    }
  }, { scope: containerRef });

  const pillars = [
    {
      title: "The Absolute Mission",
      description: "We orchestrate comprehensive financial restoration, strategic consumer education, and highly engineered asset acceleration pathways."
    },
    {
      title: "The Foundation",
      description: "A deep legacy built on possessing all 3 credit industry records, 2 congressional awards and countless accolades for our unyielding pursuit of truth and unilateral access to capital."
    },
    {
      title: "Defending Rights",
      description: "Setting the national benchmark standard for taking decisive legal action by suing credit bureaus to enforce total consumer sovereignty."
    }
  ];

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden bg-obsidian">
      {/* Hairline Divider */}
      <div className="absolute top-0 left-10 right-10 h-px bg-white/[0.05]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        
        {/* Left Side: Editorial Portrait representation */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gold/10 blur-[100px] -z-10 rounded-full"></div>
          
          <div ref={portraitRef} className="aspect-[3/4] relative rounded-none overflow-hidden glass-panel p-2 shadow-2xl">
            {/* Dynamic Data Visualization Overlay inside portrait container */}
            <div className="absolute bottom-10 right-10 w-32 h-32 z-30 opacity-50 flex items-end gap-2 p-4 glass-panel border-gold/20 rounded-xl">
               <motion.div style={{ height: chartHeight, width: '100%' }} className="bg-gradient-to-t from-gold/80 to-gold/20 rounded-sm"></motion.div>
               <motion.div style={{ height: chartHeight2, width: '100%' }} className="bg-gradient-to-t from-cyan-radiant/80 to-cyan-radiant/20 rounded-sm"></motion.div>
               <motion.div style={{ height: chartHeight3, width: '100%' }} className="bg-gradient-to-t from-platinum/80 to-platinum/20 rounded-sm"></motion.div>
            </div>

            <div className="w-full h-full relative overflow-hidden flex flex-col justify-end p-10 bg-slate-900 grayscale-[0.8] contrast-125">
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                 alt="Professional Corporate Setting"
                 className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent"></div>
               <div className="relative z-20">
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">Dr. Michael C. Grayson</h3>
                  <p className="text-gold font-medium tracking-widest uppercase text-xs">The World’s Leading Credit Expert</p>
                  
                  {/* Buttons below image text */}
                  <div className="flex flex-col gap-3 mt-6">
                    <a href="tel:8885515533" className="w-full text-center py-3 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian transition-colors uppercase tracking-[0.1em] text-xs font-semibold rounded-sm">
                      Book a Financial Literacy Class, Credit Education
                    </a>
                    <a href="tel:8885515533" className="w-full text-center py-3 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian transition-colors uppercase tracking-[0.1em] text-xs font-semibold rounded-sm">
                      Book a Church or Community Workshops
                    </a>
                    <a href="tel:8885515533" className="w-full text-center py-3 bg-gold text-obsidian hover:bg-yellow-400 transition-colors uppercase tracking-[0.1em] text-xs font-bold rounded-sm">
                      Schedule a Call
                    </a>
                  </div>
                  
                  {/* GSAP Drawn Signature */}
                  <div className="mt-8 opacity-80 h-16 pointer-events-none">
                    <svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-auto">
                      <path ref={signatureRef} d="M10 50 Q 50 10 90 50 T 150 50 Q 180 20 220 50 T 280 40 M 120 70 Q 140 30 160 80 M 100 60 L 150 60" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
               </div>
            </div>
          </div>
          
          <div ref={badgeRef} className="absolute -right-12 top-24 glass-panel border-gold/30 p-6 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center gap-2 z-20">
            <ShieldCheck className="w-8 h-8 text-gold" strokeWidth={1} />
            <div className="text-center">
              <p className="font-serif font-bold text-platinum text-2xl">25+</p>
              <p className="text-[10px] text-gold uppercase tracking-[0.3em] font-semibold">Years Legacy</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Progressive Text Blocks */}
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gold w-12 opacity-50"></div>
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Fix Credit. Eliminate Debt. Build Wealth.</h2>
            </div>
            <h3 className="font-serif text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Credit and Debt Management Institute<br />
              <span className="text-slate-400 italic font-normal text-3xl">The Inventors of the Perfect Credit Formula™</span>
            </h3>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              We stand as the definitive credit architect bridging the gap between vulnerable consumers and elite asset defense. Our systematic approach replaces chaos with uncompromising protection.
            </p>
          </motion.div>

          {/* Sequentially Expanding List inside a timeline structure */}
          <div className="relative pl-8 border-l border-white/10 space-y-12 py-4">
             {/* Dynamic progress line */}
             <motion.div 
               className="absolute left-0 top-0 w-px bg-gold origin-top"
               style={{ height: "100%", scaleY: useTransform(scrollYProgress, [0.3, 0.7], [0, 1]) }}
             ></motion.div>

            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute -left-[53px] top-0 w-10 h-10 rounded-full bg-obsidian border border-gold/30 flex items-center justify-center font-serif text-gold text-lg z-10">
                  {index + 1}
                </div>
                
                <h4 className="font-serif text-2xl font-bold transition-colors duration-500 mb-3 text-platinum">
                  {pillar.title}
                </h4>
                
                <div className="overflow-hidden">
                  <p className="text-slate-400 leading-relaxed font-light text-lg">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
