"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-obsidian/96 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Veritas Capital Partners — Home">
          <Logo variant="light" width={150} height={56} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-[10px] tracking-[0.22em] uppercase transition-colors duration-200",
                pathname === link.href
                  ? "text-bronze"
                  : "text-stone-gray hover:text-alabaster"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="sm">
            Schedule a Conversation
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span
            className={cn(
              "block w-6 h-px bg-alabaster transition-all duration-300 origin-center",
              menuOpen && "rotate-45 translate-y-[6px]"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-alabaster transition-all duration-300",
              menuOpen && "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-alabaster transition-all duration-300 origin-center",
              menuOpen && "-rotate-45 -translate-y-[6px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-forest-black border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-[10px] tracking-[0.25em] uppercase transition-colors",
                pathname === link.href
                  ? "text-bronze"
                  : "text-stone-gray hover:text-alabaster"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="sm" className="self-start mt-2">
            Schedule a Conversation
          </Button>
        </div>
      </div>
    </header>
  );
}
