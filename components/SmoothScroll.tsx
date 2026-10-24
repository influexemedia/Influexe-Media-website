"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Lenis ships its own (incompatible) global `window.lenis` typing; use a loose view of window.
type WindowWithLenis = { lenis?: Lenis };
const lenisWindow = () => window as unknown as WindowWithLenis;

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/** Wires Lenis smooth scrolling (skipped for reduced-motion) and smooth in-page anchor links. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: easeOutExpo,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
      infinite: false,
      autoRaf: false,
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    lenisWindow().lenis = lenis;

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (hash && hash.length > 1) {
        const target = document.querySelector<HTMLElement>(hash);
        if (target) {
          event.preventDefault();
          lenis.scrollTo(target, { offset: -75, duration: 1.25, easing: easeOutExpo });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete lenisWindow().lenis;
    };
  }, []);

  return null;
}
