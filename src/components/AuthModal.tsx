import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export function AuthModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose(); // mock successful login close
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md p-10 glass-panel rounded-3xl border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center mb-8 relative z-10">
              <div className="w-16 h-16 rounded-full glass-panel border border-gold/40 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Lock className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl font-bold text-platinum text-center">Secure Access</h2>
              <p className="text-slate-400 text-sm mt-2 text-center">Authenticate to access the private portal.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 relative z-10">
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-gold transition-colors peer" 
                  placeholder=" " 
                  required
                />
                <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none">Email</label>
              </div>
              <div className="relative group">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-platinum focus:outline-none focus:border-gold transition-colors peer" 
                  placeholder=" " 
                  required
                />
                <label className="absolute left-0 top-3 text-slate-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm pointer-events-none">Password</label>
              </div>
              
              <div className="flex justify-between items-center text-xs mt-2">
                <label className="flex items-center gap-2 cursor-pointer group text-slate-400 hover:text-white transition-colors">
                  <input type="checkbox" className="accent-gold" />
                  Remember me
                </label>
                <button type="button" className="text-gold hover:text-white transition-colors border-b border-gold/50 hover:border-white">
                  Reset Credentials
                </button>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full mt-8 py-4 px-6 relative overflow-hidden group rounded-xl bg-gold text-obsidian font-bold tracking-widest uppercase text-xs disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Initialize Session</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {!isLoading && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
