import { Download, PlayCircle, FileText, Lock, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function ResourcesHub() {
  return (
    <section id="resources" className="py-32 px-6 lg:px-12 relative bg-slate-blue border-t border-white/[0.05]">
      
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
           
           {/* Student Loan Hub block */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative rounded-[2.5rem] glass-panel bg-obsidian border border-white/10 p-10 lg:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
           >
             <div className="absolute top-0 right-0 p-8 blur-3xl opacity-20 pointer-events-none">
               <div className="w-32 h-32 bg-cyan-radiant rounded-full"></div>
             </div>
             <h3 className="text-3xl lg:text-4xl font-bold text-platinum mb-6 tracking-tight uppercase">Student Loan Hub</h3>
             <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
               <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
               <span className="text-emerald-400 font-semibold text-xs tracking-wider uppercase">Payments as low as $0/mo</span>
             </div>
             
             <p className="text-slate-400 leading-relaxed max-w-sm mb-10 font-light text-lg">
               Access active Income-Driven Repayment (IDR) timeline tracking and updates. Master forgiveness strategies and stop wage garnishments.
             </p>
             
             <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-5 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-cyan-radiant/30 transition-all duration-300 text-platinum group">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-cyan-radiant/10 flex items-center justify-center">
                       <ExternalLink className="w-5 h-5 text-cyan-radiant" strokeWidth={1.5} />
                     </div>
                     <span className="font-medium group-hover:text-cyan-radiant transition-colors">Verify Your Balance</span>
                   </div>
                   <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-radiant transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-5 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-cyan-radiant/30 transition-all duration-300 text-platinum group">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-cyan-radiant/10 flex items-center justify-center">
                       <FileText className="w-5 h-5 text-cyan-radiant" strokeWidth={1.5} />
                     </div>
                     <span className="font-medium group-hover:text-cyan-radiant transition-colors">Forgiveness Strategy Guide</span>
                   </div>
                   <Download className="w-4 h-4 text-slate-500 group-hover:text-cyan-radiant transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-5 rounded-2xl glass-panel bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-cyan-radiant/30 transition-all duration-300 text-platinum group">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-cyan-radiant/10 flex items-center justify-center">
                       <ShieldCheck className="w-5 h-5 text-cyan-radiant" strokeWidth={1.5} />
                     </div>
                     <span className="font-medium group-hover:text-cyan-radiant transition-colors">Default Resolution Mechanisms</span>
                   </div>
                   <Download className="w-4 h-4 text-slate-500 group-hover:text-cyan-radiant transition-colors" />
                </button>
             </div>
           </motion.div>

           {/* Credit Resources Asset Vault */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-7 flex flex-col justify-center h-full"
           >
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-cyan-radiant w-12 opacity-80"></div>
                  <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-radiant">Resource Hub</h2>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-platinum mb-4 uppercase tracking-tight">
                  The Credit Resources <br className="hidden lg:block"/> Asset Vault
                </h3>
                <p className="text-slate-400 font-light text-xl">Direct access to core corporate assets and complimentary deliverables.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                 {[
                   { title: 'Blog Network', icon: <FileText strokeWidth={1.5} />, locked: false },
                   { title: 'Damages Invoice Generator', icon: <Lock strokeWidth={1.5} />, locked: true, highlight: true },
                   { title: 'Grayson Codicil Registry', icon: <Lock strokeWidth={1.5} />, locked: true },
                   { title: '800Shield Software', icon: <Download strokeWidth={1.5} />, locked: false },
                   { title: 'Credit Score Check-lists', icon: <FileText strokeWidth={1.5} />, locked: false },
                   { title: 'Workshop Replays', icon: <PlayCircle strokeWidth={1.5} />, locked: false },
                 ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -4 }}
                      className={`p-8 rounded-[2rem] glass-panel border flex flex-col justify-between min-h-[160px] group transition-all duration-500 ${
                        item.highlight 
                          ? 'border-cyan-radiant/40 bg-obsidian hover:bg-obsidian/80 cursor-pointer shadow-[0_10px_40px_-10px_rgba(56,189,248,0.3)]' 
                          : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer hover:border-white/20 shadow-lg'
                      }`}
                    >
                       <div className="flex justify-between items-start mb-6">
                         <div className={`p-3 rounded-xl transition-colors duration-500 ${item.highlight ? 'bg-cyan-radiant/20 text-cyan-radiant' : 'bg-white/5 text-slate-300 group-hover:bg-cyan-radiant/10 group-hover:text-cyan-radiant'}`}>
                           {item.icon}
                         </div>
                         {item.locked && <Lock className="w-5 h-5 text-amber-500/60" strokeWidth={1.5} />}
                       </div>
                       <div className="font-semibold text-lg text-platinum group-hover:text-cyan-radiant transition-colors">
                         {item.title}
                       </div>
                    </motion.div>
                 ))}
              </div>
           </motion.div>
        
        </div>
      </div>
    </section>
  );
}
