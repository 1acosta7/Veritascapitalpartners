"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    title: "Life Insurance That Builds Wealth",
    description:
      "Most people think of life insurance as protection only. We structure it as a wealth-building tool — tax-advantaged, living-benefit-rich strategies that protect your family and grow your legacy simultaneously.",
  },
  {
    title: "Tax-Advantaged Growth",
    description:
      "We position your assets for intelligent, long-term growth inside structures that minimize tax drag. More of what you earn stays with your family — now and across generations.",
  },
  {
    title: "Market Education & Technical Analysis",
    description:
      "Roxy brings CMT-level market education to everyday families. We teach you how markets actually move, how to read price and trends, and how to make confident, informed financial decisions — not just trust someone else to make them for you.",
  },
  {
    title: "Strategic Money Management",
    description:
      "Understanding how to manage money with intention is a skill most families are never taught. We close that gap — giving you frameworks, habits, and real knowledge that compound over time.",
  },
  {
    title: "Legacy & Estate Planning",
    description:
      "What do you want to leave behind? We help you build a real plan for what you pass down — financially, generationally, and in terms of values — so your legacy is protected and intentional.",
  },
  {
    title: "Long-Term Family Security",
    description:
      "Everything we build is designed to hold. Protection structures, income strategies, education frameworks, and legacy plans that keep your family secure through every stage of life.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
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
