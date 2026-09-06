/**
 * Design Tokens — Typed TypeScript Constants
 *
 * These tokens mirror the CSS custom properties defined in globals.css.
 * Use them for programmatic access to design values (e.g., dynamic styles,
 * canvas drawing, third-party libraries that need raw color values).
 */

export const colors = {
  bgBase: { light: "#FAFAF8", dark: "#0F0F0F" },
  bgSubtle: { light: "#F5F5F0", dark: "#171717" },
  bgMuted: { light: "#EEEEE8", dark: "#1F1F1F" },
  textPrimary: { light: "#1A1A1A", dark: "#F5F5F5" },
  textSecondary: { light: "#525252", dark: "#A3A3A3" },
  textMuted: { light: "#8A8A8A", dark: "#737373" },
  border: { light: "#E5E5E0", dark: "#2A2A2A" },
  borderStrong: { light: "#D4D4CC", dark: "#3A3A3A" },
  accent: { light: "#0D7C5F", dark: "#34D399" },
  accentHover: { light: "#0A6B50", dark: "#6EE7B7" },
  accentMuted: { light: "#E6F5F0", dark: "#1A3A2F" },
  destructive: { light: "#DC2626", dark: "#EF4444" },
} as const;

export const typography = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  hero: "clamp(2.5rem, 5vw + 1rem, 3.75rem)",
} as const;

export const lineHeight = {
  tight: "1.1",
  snug: "1.25",
  normal: "1.5",
  relaxed: "1.75",
} as const;

export const letterSpacing = {
  tight: "-0.02em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
} as const;

export const spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
} as const;

export const borderRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
} as const;

export const shadowsDark = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.2)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.35), 0 4px 6px -4px rgba(0, 0, 0, 0.2)",
} as const;

export const duration = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
  verySlow: "800ms",
} as const;

export const easing = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const containers = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
} as const;

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  toast: 600,
} as const;
