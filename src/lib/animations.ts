import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Default ease for all GSAP animations */
export const DEFAULT_EASE = "power2.out";

/** ScrollTrigger defaults */
export const SCROLL_TRIGGER_DEFAULTS = {
  start: "top 85%",
  once: true,
} as const;

/** Page load timeline defaults */
export const LOAD_TIMELINE_DEFAULTS = {
  defaults: { ease: "power2.out", duration: 0.5 },
} as const;
