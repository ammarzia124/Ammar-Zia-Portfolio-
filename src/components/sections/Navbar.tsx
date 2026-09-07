"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEFAULT_EASE } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Nav entrance animation
  useEffect(() => {
    if (prefersReduced) return;

    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, { opacity: 0, y: -12 });
    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: DEFAULT_EASE,
      delay: 0.1,
    });
  }, [prefersReduced]);

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Active section detection via Intersection Observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!mobileOpen) return;

      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab") {
        const menu = mobileMenuRef.current;
        if (!menu) return;

        const focusable = menu.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [mobileOpen]
  );

  // Focus mobile menu on open
  useEffect(() => {
    if (mobileOpen) {
      const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>(
        'a[href], button'
      );
      firstLink?.focus();
    }
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      data-animate="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      {/* Skip to content — visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to main content
      </a>

      <nav aria-label="Main navigation" className="container-custom flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          {profile.initials}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "nav-link text-sm font-medium transition-colors hover:text-foreground",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="#contact">Let&apos;s Connect</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-label="Mobile navigation"
          onKeyDown={handleKeyDown}
          className="mobile-menu-enter fixed inset-0 top-16 z-40 border-b border-border bg-background md:hidden"
        >
          <div className="container-custom flex flex-col gap-6 py-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-foreground",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-4 w-full">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                Let&apos;s Connect
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
