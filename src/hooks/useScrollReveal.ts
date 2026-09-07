"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DEFAULT_EASE,
  SCROLL_TRIGGER_DEFAULTS,
} from "@/lib/animations";
import { useReducedMotion } from "./useReducedMotion";

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const children = el.querySelectorAll("[data-reveal]");
    const targets = children.length > 0 ? children : [el];

    gsap.set(targets, {
      opacity: 0,
      y: options.y ?? 24,
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: options.start ?? SCROLL_TRIGGER_DEFAULTS.start,
      once: SCROLL_TRIGGER_DEFAULTS.once,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.6,
          delay: options.delay ?? 0,
          stagger: options.stagger ?? 0.1,
          ease: DEFAULT_EASE,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [
    prefersReduced,
    options.y,
    options.duration,
    options.delay,
    options.stagger,
    options.start,
  ]);

  return ref;
}
