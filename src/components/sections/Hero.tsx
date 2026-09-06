"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

/* ============================================
   NETWORK SVG — Decorative visual
   ============================================ */

const NODES = [
  { cx: 55, cy: 70, r: 7 },
  { cx: 170, cy: 45, r: 5 },
  { cx: 310, cy: 80, r: 8 },
  { cx: 130, cy: 155, r: 6 },
  { cx: 250, cy: 170, r: 4 },
  { cx: 350, cy: 145, r: 5 },
  { cx: 90, cy: 235, r: 4 },
] as const;

const EDGES: [number, number][] = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 5],
  [3, 4],
  [3, 6],
  [4, 5],
];

const DATA_PARTICLES = [
  { edge: 0, offset: 0, duration: 2.4 },
  { edge: 2, offset: 0.6, duration: 2.8 },
  { edge: 5, offset: 1.2, duration: 2.2 },
  { edge: 7, offset: 0.3, duration: 3.0 },
];

function NetworkVisual() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-auto w-full text-text-muted"
      fill="none"
      aria-hidden="true"
    >
      {/* Grid overlay — very subtle */}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 40}
          y1="0"
          x2={i * 40}
          y2="280"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.1"
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={i * 40}
          x2="400"
          y2={i * 40}
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.1"
        />
      ))}

      {/* Connection lines */}
      {EDGES.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={NODES[a].cx}
          y1={NODES[a].cy}
          x2={NODES[b].cx}
          y2={NODES[b].cy}
          className="stroke-accent-emerald"
          strokeWidth="1"
          opacity="0.25"
        />
      ))}

      {/* Data flow lines — animated dashed overlay */}
      {EDGES.map(([a, b], i) => (
        <line
          key={`flow-${i}`}
          x1={NODES[a].cx}
          y1={NODES[a].cy}
          x2={NODES[b].cx}
          y2={NODES[b].cy}
          className="stroke-accent-emerald"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.5"
          style={{
            animation: `dataFlow 2s linear infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Data particles — small circles traveling along edges */}
      {DATA_PARTICLES.map((p) => {
        const [a, b] = EDGES[p.edge];
        const x1 = NODES[a].cx;
        const y1 = NODES[a].cy;
        const x2 = NODES[b].cx;
        const y2 = NODES[b].cy;
        return (
          <circle
            key={`particle-${p.edge}`}
            r="2"
            className="fill-accent-emerald"
            opacity="0.8"
          >
            <animateMotion
              dur={`${p.duration}s`}
              repeatCount="indefinite"
              begin={`${p.offset}s`}
              path={`M${x1},${y1} L${x2},${y2}`}
            />
          </circle>
        );
      })}

      {/* Nodes */}
      {NODES.map((node, i) => (
        <g key={`node-${i}`}>
          {/* Glow ring */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r + 4}
            className="fill-accent-emerald"
            opacity="0.08"
          />
          {/* Node circle */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            className="fill-accent-emerald/15 stroke-accent-emerald"
            strokeWidth="1.5"
          />
          {/* Inner dot */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="2"
            className="fill-accent-emerald"
            opacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
}

/* ============================================
   HERO SECTION
   ============================================ */

export function Hero() {
  const containerRef = useHeroAnimation();

  return (
    <section className="section-padding flex min-h-[90vh] items-center pt-24">
      <div className="container-custom">
        <div
          ref={containerRef}
          className="grid items-center gap-12 lg:grid-cols-[55fr_45fr]"
        >
          {/* Left — Text content */}
          <div className="flex flex-col gap-6">
            <span
              data-hero-label
              className="text-sm font-medium uppercase tracking-widest text-accent-emerald"
            >
              Cyber Security &bull; Networking &bull; AI
            </span>

            <h1
              data-hero-heading
              className="heading-hero text-balance text-text-primary"
            >
              Building secure, intelligent, and reliable digital systems.
            </h1>

            <p
              data-hero-paragraph
              className="max-w-xl text-lg leading-relaxed text-text-secondary"
            >
              {profile.bio}
            </p>

            <div
              data-hero-ctas
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Let&apos;s Connect</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a
                  href={profile.resumeUrl}
                  download
                  aria-label="Download resume"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Network visual (hidden on mobile) */}
          <div data-hero-visual className="hidden md:block">
            <NetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
