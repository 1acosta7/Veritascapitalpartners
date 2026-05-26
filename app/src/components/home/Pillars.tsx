"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    title: "Wealth Protection",
    description:
      "Your wealth is more than a number — it's decades of discipline and sacrifice. We design protection structures that guard against the unexpected and preserve your family's financial continuity.",
  },
  {
    title: "Income Strategies",
    description:
      "From diversified income planning to tax-efficient asset positioning, we help you create reliable, sustainable cash flow that supports your lifestyle today and your legacy tomorrow.",
  },
  {
    title: "Financial Education",
    description:
      "We believe the most powerful financial tool you possess is knowledge. Our approach ensures you understand every strategy we implement — no black boxes, no fine print, no confusion.",
  },
  {
    title: "Family Stewardship",
    description:
      "True wealth includes your family's cohesion, values, and preparedness. We work alongside families to build governance, communication frameworks, and shared financial literacy.",
  },
  {
    title: "Legacy Planning",
    description:
      "What do you want to leave behind? We help you articulate your legacy intentions and structure a plan — from estate coordination to philanthropic vision — that reflects who you are.",
  },
  {
    title: "Faith-Guided Principles",
    description:
      "For those who view stewardship through a faith lens, we honor that. We integrate values-aligned financial planning, charitable giving structures, and purpose-driven wealth decisions.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export function Pillars() {
  return (
    <section className="bg-forest-black py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
            Our Platform
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-alabaster leading-tight">
            A Complete Ecosystem for Modern Wealth
          </h2>
          <p className="mt-4 font-body text-stone-gray leading-relaxed">
            We don&rsquo;t sell products. We build strategy. Every pillar of our
            platform works together to protect your wealth, empower your
            decisions, and honor your legacy.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="bg-forest-black p-8 lg:p-10 hover:bg-slate-teal/[0.08] transition-colors duration-400 group"
            >
              {/* Bronze rule */}
              <div className="w-6 h-px bg-bronze mb-6 group-hover:w-10 transition-all duration-300" />
              <h3 className="font-serif text-xl text-alabaster mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-body text-stone-gray/75 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
