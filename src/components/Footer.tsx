import { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowRight, ShieldCheck, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useForm, Controller } from "react-hook-form";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const videos = [
  "https://res.cloudinary.com/dxyaxgbjl/video/upload/v1781108744/5102570_Car_Vehicle_3840x2160_uuplij.mp4",
  "https://res.cloudinary.com/dxyaxgbjl/video/upload/v1781108737/6034775_Handsome_Man_1920x1080_bqccn2.mp4",
  "https://res.cloudinary.com/dxyaxgbjl/video/upload/v1781108735/4777050_Businessman_Happy_1920x1080_wwmaol.mp4"
];

export function Footer() {
  const [footerVideo, setFooterVideo] = useState(videos[0]);

  useEffect(() => {
    setFooterVideo(videos[Math.floor(Math.random() * videos.length)]);
  }, []);

  const { control, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
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
      <section className="relative pt-32 pb-10 z-10 border-t border-white/[0.05] overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            key={footerVideo}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src={footerVideo} type="video/mp4" />
          </video>
          {/* Premium brand blue overlay matching hero */}
          <div className="absolute inset-0 bg-[#1C3D7A]/45 mix-blend-multiply"></div>
          {/* Edge blending */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-blue to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30"></div>
        </div>

        {/* High-Impact Bottom Banner / Intake embedded */}
        <div className="max-w-[1400px] mx-auto px-6 mb-32 relative z-10">
          <div className="relative overflow-hidden rounded-2xl glass-panel bg-obsidian/40 border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-center transform-gpu hover:-translate-y-1 transition-transform duration-500 backdrop-blur-xl">
             <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 to-transparent"></div>
             
             <div className="p-12 lg:p-20 relative z-10 flex-1 w-full lg:border-r border-white/10">
               <div className="flex items-center gap-4 mb-8">
                 <div className="h-px bg-cyan-radiant w-12 opacity-80"></div>
                 <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-radiant">Immediate Action Required</h2>
               </div>
               <p className="font-serif text-5xl md:text-7xl font-bold text-platinum mb-8 tracking-tight leading-none">
                 Secure Your <br /> Assessment.
               </p>
               <p className="text-slate-400 font-light text-xl max-w-md mb-12">
                 Bypass traditional barriers and connect directly with our strategic architects.
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-6">
                 <a href="tel:8885515533" className="w-full sm:w-auto relative group overflow-hidden bg-cyan-radiant text-obsidian px-10 py-5 font-bold tracking-widest text-sm uppercase transition-all duration-500 justify-center flex items-center gap-3 rounded-sm shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] hover:scale-105">
                   <span className="relative z-10 flex items-center gap-3">Call 888-551-5533 <Phone className="w-4 h-4 text-obsidian" strokeWidth={2} /></span>
                 </a>
                 <span className="text-slate-400 font-serif italic text-sm">Targeted Resolution in 48 Hrs</span>
               </div>
             </div>

        {/* Minimal Embedded Intake Form */}
             <div className="p-12 lg:p-20 w-full lg:w-1/3 relative z-10 bg-white/[0.02] h-full flex flex-col justify-center">
                <h4 className="font-serif text-2xl font-bold text-platinum mb-8">Confidential Intake</h4>
                {isSubmitSuccessful ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center p-6 bg-cyan-radiant/10 border border-cyan-radiant/20 rounded-xl">
                    <ShieldCheck className="w-12 h-12 text-cyan-radiant mb-3" />
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
                         <input {...field} type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-cyan-radiant transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-radiant transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Full Name</label>
                     {errors.fullName && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.fullName?.message as string}</span>}
                   </div>
                   <div className="relative group mt-8">
                     <Controller
                       name="phone"
                       control={control}
                       rules={{ required: "Phone Number is required" }}
                       render={({ field }) => (
                         <input {...field} type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-cyan-radiant transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-radiant transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Phone Number</label>
                     {errors.phone && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.phone?.message as string}</span>}
                   </div>
                   <div className="relative group mt-8">
                     <Controller
                       name="email"
                       control={control}
                       rules={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } }}
                       render={({ field }) => (
                         <input {...field} type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-cyan-radiant transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-radiant transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Email</label>
                     {errors.email && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.email?.message as string}</span>}
                   </div>
                   <div className="relative group mb-8 mt-8">
                     <Controller
                       name="objective"
                       control={control}
                       rules={{ required: "Objective is required" }}
                       render={({ field }) => (
                         <input {...field} type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-cyan-radiant transition-colors peer" placeholder=" " />
                       )}
                     />
                     <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-radiant transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">Primary Objective</label>
                     {errors.objective && <span className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.objective?.message as string}</span>}
                   </div>
                   <button type="submit" disabled={isSubmitting} className="w-full mt-6 pt-4 flex items-center justify-between group disabled:opacity-50">
                      <span className="font-semibold text-xs tracking-[0.2em] uppercase text-platinum group-hover:text-cyan-radiant transition-colors">
                        {isSubmitting ? 'Authenticating...' : 'Submit Request'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-cyan-radiant group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
                   </button>
                </form>
                )}
             </div>

          </div>
        </div>

        <footer className="max-w-[1400px] mx-auto px-6 pb-12 border-t py-20 border-white/[0.05]">
           {/* Enhanced Premium Newsletter Section */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="mb-24 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
           >
              <h3 className="font-serif text-3xl text-white font-medium mb-4 drop-shadow-md">Strategic Insights, Delivered.</h3>
              <p className="text-slate-300 font-light mb-8 drop-shadow">Join our private registry to receive unfiltered defense protocols and credit architecture updates.</p>
              <form className="w-full relative flex items-center group">
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address" 
                  className="w-full glass-panel border border-white/20 rounded-full py-4 pl-6 pr-32 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-radiant/50 transition-all font-medium"
                />
                <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white hover:bg-slate-50 text-slate-900 px-6 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-lg flex items-center gap-2">
                  Subscribe <ArrowRight className="w-4 h-4 text-cyan-radiant" />
                </button>
              </form>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
             
             <div className="md:col-span-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-cyan-radiant/40 border-dashed animate-spin-slow"></div>
                  <div className="absolute ml-2">
                    <ShieldCheck className="w-6 h-6 text-cyan-radiant" strokeWidth={1} />
                  </div>
                  <span className="font-serif font-bold text-3xl tracking-tight text-white drop-shadow-md">KEEP IT 800</span>
                </div>
                <p className="text-slate-300 font-light max-w-sm mb-10 leading-relaxed text-lg drop-shadow">
                  Institutional financial authority blended seamlessly with an elite, reassuring private-wealth management infrastructure.
                </p>
                <div className="flex flex-col gap-5">
                   <a href="mailto:office@keepit800.com" className="flex items-center gap-4 text-white hover:text-cyan-radiant transition-all duration-300 group/mail">
                     <div className="w-10 h-10 rounded-full bg-cyan-radiant/10 flex items-center justify-center border border-cyan-radiant/20 group-hover/mail:border-cyan-radiant/45 transition-colors">
                       <Mail className="w-5 h-5 text-cyan-radiant" strokeWidth={1.5} />
                     </div>
                     <span className="font-sans font-medium text-base tracking-wide text-platinum group-hover/mail:text-cyan-radiant transition-colors">office@keepit800.com</span>
                   </a>
                   <div className="flex items-center gap-4 text-white">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                       <MapPin className="w-5 h-5 text-cyan-radiant" strokeWidth={1.5} />
                     </div>
                     <span className="font-sans font-light text-base tracking-wide text-platinum">National Headquarters, US</span>
                   </div>
                </div>
             </div>

             <div className="md:col-span-2 md:col-start-6">
                <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs drop-shadow-sm">Architecture</h4>
                <ul className="space-y-5">
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Foreclosure Defense</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Student Loan Cancelation</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Business Capital</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span>
                  </li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Protection Shields</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs drop-shadow-sm">Resources</h4>
                <ul className="space-y-5">
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Dr. Grayson</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Affiliate Portal</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Sign our Petitions</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Make a Donation</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs drop-shadow-sm">Legal</h4>
                <ul className="space-y-5">
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Disclaimers</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Privacy Policy</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                  <li className="relative group w-fit"><a href="#" className="font-light text-slate-300 hover:text-cyan-radiant transition-colors drop-shadow-sm">Terms of Service</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-radiant transition-all duration-300 group-hover:w-full"></span></li>
                </ul>
             </div>

           </div>
           
           <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] text-xs font-semibold tracking-widest uppercase text-slate-600">
              <p>&copy; 2026 KEEPIT800. All rights reserved.</p>
              
              <div className="flex items-center gap-6 mt-6 md:mt-0">
                <div className="flex items-center gap-4 text-slate-400">
                  <a href="#" className="hover:text-cyan-radiant transition-colors"><Facebook className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-cyan-radiant transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-cyan-radiant transition-colors"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-cyan-radiant transition-colors"><TikTokIcon className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-cyan-radiant transition-colors"><Twitter className="w-4 h-4" /></a>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/10"></div>
                <span className="hidden md:block">Designed for Authority</span>
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
           className="w-14 h-14 rounded-full glass-panel border border-white/20 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all group hover:border-cyan-radiant/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
         >
           <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
         </motion.button>
         
         <motion.button 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 1.2, type: 'spring' }}
           className="w-14 h-14 rounded-full glass-panel border border-white/20 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all group relative hover:border-cyan-radiant/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
         >
           <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
           <span className="absolute top-0 right-0 w-3 h-3 bg-cyan-radiant rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"></span>
         </motion.button>
      </div>
    </>
  );
}
