"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    label: "Education First",
    text: "Every recommendation comes with a clear explanation. We don't advise what we haven't taught.",
  },
  {
    label: "Family-Centered",
    text: "Founded and led by a husband-and-wife partnership. We understand that wealth is deeply personal.",
  },
  {
    label: "Integrity-Driven",
    text: "Veritas means truth. Our counsel is rooted in honesty, transparency, and genuine stewardship.",
  },
  {
    label: "Holistic Approach",
    text: "We look at your whole picture — not just your portfolio — to craft strategies that serve your entire life.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-alabaster py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — editorial copy */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-5">
              Why Veritas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-obsidian leading-tight mb-6">
              Built on Relationship.
              <br />
              Guided by Truth.
            </h2>
            <p className="font-body text-obsidian/65 leading-relaxed mb-4">
              Veritas Capital Partners was founded on a simple belief: that
              every family deserves access to the kind of thoughtful, holistic
              financial guidance that was once reserved only for the
              ultra-wealthy.
            </p>
            <p className="font-body text-obsidian/65 leading-relaxed">
              We are not a sales organization. We are a strategic partner — one
              that prioritizes your education, your values, and your long-term
              vision above any transaction.
            </p>
          </motion.div>

          {/* Right — trust points */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {pillars.map((p) => (
              <div key={p.label} className="border-l-2 border-bronze/60 pl-5">
                <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-obsidian mb-2">
                  {p.label}
                </p>
                <p className="font-body text-sm text-obsidian/60 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
