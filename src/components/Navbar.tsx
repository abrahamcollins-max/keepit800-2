import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';
import { AuthModal } from './AuthModal';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#programs' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Resources', href: '#resources' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center px-4 sm:px-6 lg:px-12",
          scrolled ? "top-4" : "top-0 pt-4 lg:pt-6"
        )}
      >
        <div className={cn(
          "w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-in-out border rounded-full px-4 lg:px-6 py-3",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-slate-200/50" : "bg-transparent border-transparent"
        )}>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-radiant to-blue-600 shadow-[0_0_15px_rgba(56,189,248,0.3)] ring-1 ring-cyan-radiant/40">
              <Shield className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div className={cn(
              "font-serif font-bold text-2xl tracking-tight transition-colors duration-500",
              scrolled ? "text-slate-900" : "text-white"
            )}>
              KEEP IT 800
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center xl:gap-8 gap-4 flex-nowrap shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 relative group whitespace-nowrap",
                  scrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-200 hover:text-white"
                )}
               >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 ease-out group-hover:w-full opacity-60",
                  scrolled ? "bg-blue-600" : "bg-cyan-radiant"
                )}></span>
              </a>
            ))}
            
            <div className={cn(
              "flex items-center gap-4 ml-2 pr-6 border-r transition-colors duration-500",
              scrolled ? "border-slate-300" : "border-white/20"
            )}>
              <a href="#" className={cn("transition-colors", scrolled ? "text-slate-400 hover:text-blue-600" : "text-slate-400 hover:text-cyan-radiant")}><Facebook className="w-[16px] h-[16px]" /></a>
              <a href="#" className={cn("transition-colors", scrolled ? "text-slate-400 hover:text-blue-600" : "text-slate-400 hover:text-cyan-radiant")}><Instagram className="w-[16px] h-[16px]" /></a>
              <a href="#" className={cn("transition-colors", scrolled ? "text-slate-400 hover:text-blue-600" : "text-slate-400 hover:text-cyan-radiant")}><Linkedin className="w-[16px] h-[16px]" /></a>
              <a href="#" className={cn("transition-colors", scrolled ? "text-slate-400 hover:text-blue-600" : "text-slate-400 hover:text-cyan-radiant")}><TikTokIcon className="w-[16px] h-[16px]" /></a>
              <a href="#" className={cn("transition-colors", scrolled ? "text-slate-400 hover:text-blue-600" : "text-slate-400 hover:text-cyan-radiant")}><Twitter className="w-[16px] h-[16px]" /></a>
            </div>
          </div>

          <div className="hidden lg:flex">
            <button onClick={() => setIsAuthOpen(true)} className={cn(
              "group relative px-7 py-2.5 rounded-full overflow-hidden transition-all duration-500 border",
              scrolled ? "border-slate-200 bg-slate-50 hover:border-blue-600 hover:bg-white text-slate-900 shadow-sm" : "border-white/20 glass-panel hover:border-cyan-radiant/40 text-white"
            )}>
              <span className={cn(
                "relative flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-colors duration-500",
                scrolled ? "group-hover:text-blue-600" : "group-hover:text-cyan-radiant"
              )}>
                Client Login
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-slate-800 hover:text-blue-600" : "text-slate-200 hover:text-cyan-radiant"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-slate-900/95 flex flex-col pt-20 px-6 pb-6"
          >
            <button 
              className="absolute top-6 right-6 p-3 text-white hover:text-cyan-radiant bg-white/5 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <div className="flex flex-col gap-8 mt-12 px-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl font-bold text-white hover:text-cyan-radiant transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="mt-8 w-full py-5 rounded-full bg-cyan-radiant/10 border border-cyan-radiant/30 text-cyan-radiant text-xs uppercase tracking-[0.2em] font-bold flex justify-center items-center gap-2 hover:bg-cyan-radiant hover:text-white transition-colors"
              >
                Client Login <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
