"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Quote } from "@/components/ui/Quote";

export function MissionBand() {
  return (
    <section className="bg-obsidian py-28 lg:py-40 relative overflow-hidden">
      {/* Very subtle warm glow — ambient only */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_#c08a5a_0%,_transparent_100%)]" />

      <Container size="md" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Quote
            text="True wealth is not measured by what you accumulate, but by what you protect, what you give, and what you leave behind for those who follow."
            attribution="The Veritas Philosophy"
          />
        </motion.div>
      </Container>
    </section>
  );
}
