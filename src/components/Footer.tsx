import { MessageSquare, Phone, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useForm, Controller } from "react-hook-form";

export function Footer() {
  const { control, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      objective: ''
    }
  });

  const onSubmit = async (data: any) => {
    // Artificial delay to simulate processing
    return new Promise(resolve => setTimeout(resolve, 1500));
  };
  return (
    <>
      <section className="bg-slate-blue pt-32 relative z-10 border-t border-white/[0.05]">
        
        {/* High-Impact Bottom Banner / Intake embedded */}
        <div className="max-w-[1400px] mx-auto px-6 mb-32">
          <div className="relative overflow-hidden rounded-none glass-panel border-[0.5px] border-gold/30 flex flex-col lg:flex-row items-center">
             <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"></div>
             
             <div className="p-12 lg:p-20 relative z-10 flex-1 w-full lg:border-r border-gold/20">
               <div className="flex items-center gap-4 mb-8">
                 <div className="h-px bg-gold w-12 opacity-50"></div>
                 <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Immediate Action Required</h2>
               </div>
               <p className="font-serif text-5xl md:text-7xl font-bold text-platinum mb-8 tracking-tight leading-none">
                 Secure Your <br /> Assessment.
               </p>
               <p className="text-slate-400 font-light text-xl max-w-md mb-12">
                 Bypass traditional barriers and connect directly with our strategic architects.
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-6">
                 <a href="tel:8885515533" className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-gold to-yellow-500 text-obsidian px-10 py-5 font-bold tracking-widest text-sm uppercase transition-all duration-500 justify-center flex items-center gap-3 rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:scale-105">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                   <span className="relative z-10 flex items-center gap-3">Call 888-551-5533 <Phone className="w-4 h-4" strokeWidth={2} /></span>
                 </a>
                 <span className="text-slate-500 font-serif italic text-sm">Targeted Resolution in 48 Hrs</span>
               </div>
             </div>

             {/* Minimal Embedded Intake Form */}
             <div className="p-12 lg:p-20 w-full lg:w-1/3 relative z-10 bg-obsidian/50 backdrop-blur-xl h-full flex flex-col justify-center">
                <h4 className="font-serif text-2xl font-bold text-platinum mb-8">Confidential Intake</h4>
                {isSubmitSuccessful ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center p-6 bg-gold/10 border border-gold/20 rounded-xl">
                    <ShieldCheck className="w-12 h-12 text-gold mb-3" />
                    <p className="text-platinum font-bold text-lg mb-1">Request Received</p>
                    <p className="text-slate-400 text-sm text-center">A strategic architect will contact you within 48 hours for your confidential assessment.</p>
                  </motion.div>
                ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                   <div className="relative group">
                     <Controller
                       name="fullName"
                       control={control}
                       rules={{ required: "Full Name is required" }}
                       render={({ field }) => (
                         <input {...field} type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-gold transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Full Name</label>
                     {errors.fullName && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.fullName.message}</span>}
                   </div>
                   <div className="relative group mt-8">
                     <Controller
                       name="email"
                       control={control}
                       rules={{ required: "Corporate Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } }}
                       render={({ field }) => (
                         <input {...field} type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-gold transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Corporate Email</label>
                     {errors.email && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.email.message}</span>}
                   </div>
                   <div className="relative group mb-8 mt-8">
                     <Controller
                       name="objective"
                       control={control}
                       rules={{ required: "Objective is required" }}
                       render={({ field }) => (
                         <input {...field} type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-gold transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Primary Objective</label>
                     {errors.objective && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.objective.message}</span>}
                   </div>
                   <button type="submit" disabled={isSubmitting} className="w-full mt-6 pt-4 flex items-center justify-between group disabled:opacity-50">
                      <span className="font-semibold text-xs tracking-[0.2em] uppercase text-platinum group-hover:text-gold transition-colors">
                        {isSubmitting ? 'Authenticating...' : 'Submit Request'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
                   </button>
                </form>
                )}
             </div>

          </div>
        </div>

        <footer className="max-w-[1400px] mx-auto px-6 pb-12 border-t py-20 border-white/[0.05]">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
             
             <div className="md:col-span-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/40 border-dashed animate-spin-slow"></div>
                  <div className="absolute ml-2">
                    <ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1} />
                  </div>
                  <span className="font-serif font-bold text-3xl tracking-tight text-platinum">KEEP IT 800</span>
                </div>
                <p className="text-slate-400 font-light max-w-sm mb-10 leading-relaxed text-lg">
                  Institutional financial authority blended seamlessly with an elite, reassuring private-wealth management infrastructure.
                </p>
                <div className="flex flex-col gap-4">
                   <a href="mailto:office@keepit800.com" className="flex items-center gap-3 text-slate-300 hover:text-gold transition-colors">
                     <Mail className="w-5 h-5 opacity-50" strokeWidth={1.5} />
                     <span className="font-serif italic text-lg">office@keepit800.com</span>
                   </a>
                   <div className="flex items-center gap-3 text-slate-300">
                     <MapPin className="w-5 h-5 opacity-50" strokeWidth={1.5} />
                     <span className="font-light">National Headquarters, US</span>
                   </div>
                </div>
             </div>

             <div className="md:col-span-2 md:col-start-6">
                <h4 className="font-bold text-platinum mb-8 uppercase tracking-[0.2em] text-xs">Architecture</h4>
                <ul className="space-y-5">
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Foreclosure Defense</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Student Loan Cancelation</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Business Capital</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Protection Shields</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="font-bold text-platinum mb-8 uppercase tracking-[0.2em] text-xs">Resources</h4>
                <ul className="space-y-5">
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Dr. Grayson</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Affiliate Portal</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Sign our Petitions</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Make a Donation</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="font-bold text-platinum mb-8 uppercase tracking-[0.2em] text-xs">Legal</h4>
                <ul className="space-y-5">
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Disclaimers</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Privacy Policy</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-400 hover:text-gold transition-colors">Terms of Service</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span></li>
                </ul>
             </div>

           </div>
           
           <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] text-xs font-semibold tracking-widest uppercase text-slate-600">
              <p>&copy; 2026 KEEPIT800. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <span>Designed for Authority</span>
              </div>
           </div>
        </footer>
      </section>

      {/* Persistent Triggers */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
         <motion.button 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 1, type: 'spring' }}
           className="w-14 h-14 rounded-full glass-panel border-gold/30 bg-gold/10 hover:bg-gold/30 text-gold flex items-center justify-center shadow-[0_10px_40px_rgba(212,175,55,0.2)] transition-all group backdrop-blur-xl"
         >
           <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
         </motion.button>
         
         <motion.button 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 1.2, type: 'spring' }}
           className="w-14 h-14 rounded-full glass-panel border-platinum/30 bg-platinum/10 hover:bg-platinum/30 text-platinum flex items-center justify-center shadow-[0_10px_40px_rgba(229,228,226,0.2)] transition-all group relative backdrop-blur-xl"
         >
           <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
           <span className="absolute 0 top-0 right-0 w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"></span>
         </motion.button>
      </div>
    </>
  );
}
