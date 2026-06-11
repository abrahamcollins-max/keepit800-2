/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useSpring } from 'motion/react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesMatrix } from './components/ServicesMatrix';
import { Programs } from './components/Programs';
import { ResourcesHub } from './components/ResourcesHub';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <ServicesMatrix />
      </ErrorBoundary>
      <ErrorBoundary>
        <Programs />
      </ErrorBoundary>
      <ErrorBoundary>
        <ResourcesHub />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Decelerated motion
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly heavier wheel
      touchMultiplier: 2,
    });
    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-milk-white selection:bg-cyan-radiant/30 relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-cyan-radiant origin-left z-[100] pointer-events-none shadow-[0_0_12px_rgba(56,189,248,0.6)]"
        style={{ scaleX }}
      />
      <div className="noise-overlay"></div>
      
      {/* Editorial side margins */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden 2xl:block opacity-30">
        <span className="vertical-text text-xs tracking-[0.3em] font-serif uppercase text-platinum">Architecture of Wealth</span>
      </div>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden 2xl:block opacity-30">
        <span className="vertical-text text-xs tracking-[0.3em] font-serif uppercase text-platinum flex gap-8">
          <span>Est. 2026</span>
          <span>KEEP IT 800</span>
        </span>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
