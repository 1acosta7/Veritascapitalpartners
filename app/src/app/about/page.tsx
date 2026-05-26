import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Quote } from "@/components/ui/Quote";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Veritas Capital Partners — a husband-and-wife-led wealth and legacy platform built on truth, relationship, and generational thinking.",
};

const values = [
  {
    label: "Truth",
    text: "We say what we mean and mean what we say. No jargon, no fine print, no hidden agendas.",
  },
  {
    label: "Protection",
    text: "Our first obligation is to protect what you have already built — then to help you build more.",
  },
  {
    label: "Stewardship",
    text: "Wealth is a responsibility. We help you carry it wisely, generously, and intentionally.",
  },
  {
    label: "Family",
    text: "Every decision considers not just the individual client, but their family, legacy, and community.",
  },
];

const leaders = [
  {
    name: "Mathew Acosta",
    role: "Co-Founder · Licensed Life & Wealth Strategist",
    bio: "Mathew leads Veritas's wealth protection and strategy practice. He specializes in life insurance structures that build generational wealth, tax-advantaged growth strategies, legacy and estate planning, and long-term family financial security. Mathew built Veritas on a conviction he holds deeply: that every family deserves protection-first wealth strategy — not a product pitch, not a one-size-fits-all plan, but real strategy rooted in their specific situation and goals.",
  },
  {
    name: "Roxy Acosta",
    role: "Co-Founder · CMT Candidate & Market Educator",
    bio: "Roxy leads Veritas's education and market intelligence practice. As a CMT Candidate, she brings institutional-level technical analysis and market education to everyday families — the same tools and frameworks used by professional traders, made accessible and actionable. Her mission is simple: financial confidence for families who have never been taught how money and markets actually work.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="bg-obsidian pt-40 pb-24">
        <Container size="lg">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-6">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-alabaster leading-[1.08] max-w-4xl mb-8">
            Built on Truth.
            <br />
            Guided by Stewardship.
          </h1>
          <p className="font-body text-stone-gray text-lg leading-relaxed max-w-2xl">
            Veritas Capital Partners was founded with a single conviction: that
            the families who work hardest to build wealth deserve the same
            caliber of thoughtful, education-first guidance typically reserved
            for only the most affluent clients.
          </p>
        </Container>
      </section>

      {/* ── Mission & Values ──────────────────────────── */}
      <section className="bg-forest-black py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Mission */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
                Our Mission
              </p>
              <h2 className="font-serif text-4xl text-alabaster leading-tight mb-6">
                Education Before Everything
              </h2>
              <p className="font-body text-stone-gray leading-relaxed mb-4">
                We believe that true financial empowerment begins with
                understanding. Before any strategy is implemented, every client
                should understand why — the reasoning, the trade-offs, and the
                long-term implications.
              </p>
              <p className="font-body text-stone-gray leading-relaxed mb-4">
                This is not a transactional relationship. It is a partnership
                built over years, guided by trust, and defined by outcomes that
                matter to real families.
              </p>
              <p className="font-body text-stone-gray leading-relaxed">
                We serve clients who are serious about protecting their
                families, building generational wealth, and leaving behind
                something that reflects who they are and what they believed.
              </p>
            </div>

            {/* Values */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
                Our Values
              </p>
              <div className="flex flex-col gap-7">
                {values.map((v) => (
                  <div key={v.label} className="border-l-2 border-bronze/50 pl-5">
                    <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-1.5">
                      {v.label}
                    </p>
                    <p className="font-body text-stone-gray text-sm leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Quote band ────────────────────────────────── */}
      <section className="bg-obsidian py-28 lg:py-36">
        <Container size="md">
          <Quote
            text="We built Veritas because we believe every family deserves a trusted partner who shows up not just with strategy, but with genuine care for what they are building."
            attribution="The Founding Partners"
          />
        </Container>
      </section>

      {/* ── Leadership ───────────────────────────────── */}
      <section className="bg-alabaster py-24 lg:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
              Leadership
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-obsidian leading-tight">
              Meet the Founding Partners
            </h2>
            <p className="font-body text-obsidian/65 leading-relaxed mt-4">
              Veritas is a husband-and-wife-led firm. We bring complementary
              perspectives and a shared mission to every client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Joint founders photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/founders.png"
              alt="The Founding Partners of Veritas Capital Partners"
              className="w-full object-cover"
            />

            {/* Bios stacked */}
            <div className="flex flex-col gap-10">
              {leaders.map((leader, i) => (
                <div
                  key={leader.name}
                  className={i > 0 ? "border-t border-stone-gray/30 pt-10" : ""}
                >
                  <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-1.5">
                    {leader.role}
                  </p>
                  <h3 className="font-serif text-2xl text-obsidian mb-4 leading-snug">
                    {leader.name}
                  </h3>
                  <p className="font-body text-obsidian/65 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-obsidian py-24">
        <Container className="text-center max-w-2xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
            Connect With Us
          </p>
          <h2 className="font-display text-4xl text-alabaster mb-6 leading-tight">
            Begin the Conversation
          </h2>
          <p className="font-body text-stone-gray leading-relaxed mb-10">
            We work with a selective number of families to ensure every client
            receives the attention and depth their situation deserves.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
