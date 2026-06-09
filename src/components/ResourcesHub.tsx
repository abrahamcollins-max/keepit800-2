import { Download, PlayCircle, FileText, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function ResourcesHub() {
  return (
    <section id="resources" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-obsidian mix-blend-multiply -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* Student Loan Hub block */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative rounded-[2.5rem] bg-gradient-to-br from-slate-blue to-obsidian border border-white/5 p-10 overflow-hidden"
           >
             <div className="absolute top-0 right-0 p-8 blur-3xl opacity-20">
               <div className="w-32 h-32 bg-cyan-radiant rounded-full"></div>
             </div>
             <h3 className="text-3xl font-bold text-white mb-4">Student Loan Hub</h3>
             <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
               <span className="text-emerald-400 font-semibold text-sm">Payments as low as $0/mo</span>
             </div>
             
             <p className="text-slate-400 leading-relaxed mb-8">
               Access active Income-Driven Repayment (IDR) timeline tracking and updates. Master forgiveness strategies and stop wage garnishments.
             </p>
             
             <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-white group">
                   <div className="flex items-center gap-3">
                     <FileText className="w-5 h-5 text-cyan-radiant" />
                     <span className="font-medium">Forgiveness Strategy Guide</span>
                   </div>
                   <Download className="w-4 h-4 text-slate-500 group-hover:text-cyan-radiant transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-white group">
                   <div className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-cyan-radiant" />
                     <span className="font-medium">Default Resolution Mechanisms</span>
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
             className="lg:col-span-7"
           >
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white mb-2">The Credit Resources Asset Vault</h3>
                <p className="text-slate-400">Direct access to core corporate assets and complimentary deliverables.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   { title: 'Blog Network', icon: <FileText />, locked: false },
                   { title: 'Damages Invoice Generator', icon: <Lock />, locked: true, highlight: true },
                   { title: 'Grayson Codicil Registry', icon: <Lock />, locked: true },
                   { title: '800Shield Software', icon: <Download />, locked: false },
                   { title: 'Credit Score Check-lists', icon: <FileText />, locked: false },
                   { title: 'Workshop Replays', icon: <PlayCircle />, locked: false },
                 ].map((item, i) => (
                    <div 
                      key={i}
                      className={`p-6 rounded-2xl border flex flex-col justify-between min-h-[140px] group transition-all duration-300 ${
                        item.highlight 
                          ? 'border-cyan-radiant/30 bg-slate-blue hover:bg-slate-blue/80 cursor-pointer shadow-[0_0_30px_rgba(56,189,248,0.1)]' 
                          : 'border-white/5 bg-white/5 hover:bg-white/10 cursor-pointer'
                      }`}
                    >
                       <div className="flex justify-between items-start mb-4">
                         <div className={`p-2 rounded-lg ${item.highlight ? 'bg-cyan-radiant/20 text-cyan-radiant' : 'bg-white/10 text-slate-300 group-hover:text-white'}`}>
                           {item.icon}
                         </div>
                         {item.locked && <Lock className="w-4 h-4 text-amber-500/50" />}
                       </div>
                       <div className="font-semibold text-white group-hover:text-cyan-radiant transition-colors">
                         {item.title}
                       </div>
                    </div>
                 ))}
              </div>
           </motion.div>
        
        </div>
      </div>
    </section>
  );
}

// Quick dummy import for an icon used earlier without explicitly declaring in the top import block
import { ShieldCheck } from 'lucide-react';
