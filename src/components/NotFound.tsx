import { motion } from 'motion/react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Immersive background gradients matching the site theme */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cobalt/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] -right-1/4 w-[600px] h-[600px] bg-cyan-radiant/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center object-cover -z-10 blur-sm" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel p-12 md:p-20 rounded-[2.5rem] border-cyan-radiant/30 flex flex-col items-center text-center max-w-2xl relative z-10 shadow-[0_0_50px_rgba(56,189,248,0.05)]"
      >
        <div className="w-20 h-20 rounded-2xl glass-panel border border-cyan-radiant/40 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <ShieldAlert className="w-10 h-10 text-cyan-radiant" strokeWidth={1.5} />
        </div>
        
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-platinum tracking-tight mb-4">
          404 Target Not Found
        </h1>
        <p className="text-slate-400 font-light text-xl leading-relaxed mb-12">
          The structural blueprint or asset pathway you are attempting to locate is currently out of jurisdiction. 
        </p>

        <Link 
          to="/"
          className="relative group overflow-hidden bg-gradient-to-r from-cyan-radiant to-blue-500 text-obsidian px-8 py-4 font-bold tracking-widest text-xs uppercase transition-all duration-500 justify-center flex items-center gap-3 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <span className="relative z-10 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            Return to Assessment
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
