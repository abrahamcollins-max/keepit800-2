import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  y?: number;
  x?: number;
  scrub?: number | boolean;
  start?: string;
  end?: string;
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  containerRef: RefObject<HTMLElement | null>,
  options: ParallaxOptions
) {
  useEffect(() => {
    const el = ref.current;
    const trigger = containerRef.current;
    
    if (!el || !trigger) return;

    const animation = gsap.to(el, {
      y: options.y || 0,
      x: options.x || 0,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: options.start || 'top bottom',
        end: options.end || 'bottom top',
        scrub: options.scrub ?? 1.5,
      }
    });

    return () => {
      animation.kill();
    };
  }, [ref, containerRef, options.y, options.x, options.scrub, options.start, options.end]);
}
