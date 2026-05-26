"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-obsidian overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-black via-obsidian to-obsidian" />
      {/* Very restrained bronze ambient glow — 3% opacity max */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_80%_60%_at_20%_60%,_#a56a3f_0%,_transparent_100%)]" />
      {/* Subtle top-right cool tone */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_60%_50%_at_85%_20%,_#425456_0%,_transparent_100%)]" />

      <Container className="relative z-10 pt-36 pb-28 md:pt-44 md:pb-36">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-bronze mb-7"
          >
            Wealth Strategy &nbsp;·&nbsp; Legacy Planning &nbsp;·&nbsp; Family Stewardship
          </motion.p>

          {/* Primary headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-alabaster leading-[1.08] tracking-tight mb-8"
          >
            Protect What Matters.
            <br />
            <span className="text-bronze-gold">Build What Lasts.</span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="font-body text-stone-gray text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          >
            Veritas Capital Partners is a premium wealth and legacy platform
            serving families who think in generations. We combine
            protection-first strategy, financial education, and faith-guided
            stewardship to help you build a legacy that outlasts you.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Conversation
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore Our Approach
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-bronze/0 via-bronze/30 to-bronze/0"
        />
      </Container>
    </section>
  );
}
