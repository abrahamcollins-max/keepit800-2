import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { AuthModal } from './AuthModal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Services', href: '#services' },
    { name: 'Signature Programs', href: '#programs' },
    { name: 'Workshops & Speaking', href: '#workshops' },
    { name: 'Credit Resources', href: '#resources' },
    { name: 'About Dr. Grayson', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4 lg:px-12",
          scrolled ? "bg-obsidian/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold/80 to-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.3)] ring-1 ring-gold/40">
              <Shield className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div className="font-serif font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-platinum to-slate-400">
              KEEP IT 800
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-slate-200 hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-out group-hover:w-full opacity-60"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button onClick={() => setIsAuthOpen(true)} className="glass-panel group relative px-7 py-2.5 rounded-full overflow-hidden hover:border-gold/40 transition-all duration-500">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out -skew-x-12 transform -translate-x-full"></div>
              <span className="relative flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-platinum group-hover:text-gold transition-colors duration-500">
                Client Login
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-200 hover:text-gold transition-colors"
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
            className="fixed inset-0 z-[60] bg-obsidian/90 flex flex-col pt-20 px-6 pb-6"
          >
            <button 
              className="absolute top-6 right-6 p-3 text-slate-200 hover:text-gold glass-panel rounded-full"
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
                  className="font-serif text-3xl font-medium text-platinum hover:text-gold transition-colors"
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
                className="mt-8 w-full py-5 rounded-full glass-panel border-gold/30 text-gold text-xs uppercase tracking-widest font-semibold flex justify-center items-center gap-2 hover:bg-gold/10 transition-colors"
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
