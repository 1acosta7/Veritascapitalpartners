import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-black border-t border-white/5">
      <Container className="pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" width={150} height={58} />
            <p className="font-italic italic text-stone-gray/80 text-sm leading-relaxed mt-1">
              Truth. Protection. Wealth.
            </p>
            <p className="font-body text-stone-gray/50 text-sm leading-relaxed">
              A premium legacy and wealth platform committed to protecting what
              matters and building what lasts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-bronze mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-stone-gray/60 hover:text-alabaster text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-bronze mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm font-body text-stone-gray/60">
              <p>Manhattan Beach, CA</p>
              <a
                href="mailto:info@veritascapitalpartners.net"
                className="hover:text-alabaster transition-colors"
              >
                info@veritascapitalpartners.net
              </a>
              <p>By appointment only</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-5">
          <p className="text-xs font-body text-stone-gray/30">
            © {year} Veritas Capital Partners. All rights reserved.
          </p>
          <p className="text-xs font-body text-stone-gray/30 md:max-w-lg md:text-right leading-relaxed">
            <span className="text-stone-gray/50 font-sans uppercase tracking-wider text-[9px]">
              Disclosure:{" "}
            </span>
            The information on this site is for educational and informational
            purposes only and does not constitute financial, legal, tax, or
            investment advice. Consult a qualified professional before acting on
            any information herein.
          </p>
        </div>
      </Container>
    </footer>
  );
}
