"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HomeCTA() {
  return (
    <section className="bg-slate-teal py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle dark gradient overlay to keep it premium, not garish */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian/30 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-bronze mb-5">
            Begin the Conversation
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-alabaster leading-tight mb-6">
            Your Legacy Begins with a Single Conversation
          </h2>
          <p className="font-body text-alabaster/70 leading-relaxed mb-10">
            We offer a complimentary introductory consultation to understand
            your situation and determine whether Veritas is the right fit for
            your family. There is no obligation — only an honest conversation.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Schedule Your Consultation
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
