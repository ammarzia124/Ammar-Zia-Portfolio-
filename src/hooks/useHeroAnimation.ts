"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DEFAULT_EASE } from "@/lib/animations";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Hero entrance animation — staggered reveal per element.
 *
 * Sequence:
 *   1. Label      → 0ms delay
 *   2. H1         → 100ms delay
 *   3. Paragraph  → 200ms delay
 *   4. CTAs       → 300ms delay
 *   5. Visual     → 400ms delay (fade only, no translateY)
 *
 * Respects prefers-reduced-motion: skips all animation, renders final state.
 */
export function useHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReduced) return;

    const label = el.querySelector<HTMLElement>("[data-hero-label]");
    const heading = el.querySelector<HTMLElement>("[data-hero-heading]");
    const paragraph = el.querySelector<HTMLElement>("[data-hero-paragraph]");
    const ctas = el.querySelector<HTMLElement>("[data-hero-ctas]");
    const visual = el.querySelector<HTMLElement>("[data-hero-visual]");

    const textTargets = [label, heading, paragraph, ctas].filter(Boolean);
    const visualTarget = visual ?? null;

    gsap.set(textTargets, { opacity: 0, y: 24 });
    if (visualTarget) {
      gsap.set(visualTarget, { opacity: 0 });
    }

    const tl = gsap.timeline({ delay: 0.15 });

    if (label) {
      tl.to(label, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0);
    }
    if (heading) {
      tl.to(heading, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.1);
    }
    if (paragraph) {
      tl.to(paragraph, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.2);
    }
    if (ctas) {
      tl.to(ctas, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.3);
    }
    if (visualTarget) {
      tl.to(visualTarget, { opacity: 1, duration: 0.8, ease: DEFAULT_EASE }, 0.4);
    }

    return () => {
      tl.kill();
    };
  }, [prefersReduced]);

  return containerRef;
}
