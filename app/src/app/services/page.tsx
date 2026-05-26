import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the Veritas Capital Partners approach to wealth strategy, protection, legacy planning, and financial education.",
};

const services = [
  {
    number: "01",
    title: "Wealth Protection & Risk Management",
    description:
      "Most wealth planning conversations begin with growth — ours begin with protection. Before we talk about returns, we assess what could go wrong and design frameworks that shield your family from the unexpected.",
    details: [
      "Life and disability income protection analysis",
      "Asset protection structures and strategies",
      "Business continuity and buy-sell planning",
      "Long-term care considerations",
      "Emergency fund and liquidity planning",
    ],
  },
  {
    number: "02",
    title: "Income Strategy & Cash Flow Planning",
    description:
      "Sustainable wealth requires sustainable income. We help you design income structures that support your lifestyle, minimize tax drag, and position you for long-term financial independence.",
    details: [
      "Tax-efficient income planning",
      "Diversified income stream development",
      "Retirement income sequencing",
      "Business owner compensation strategy",
      "Distribution planning and coordination",
    ],
  },
  {
    number: "03",
    title: "Financial Education & Empowerment",
    description:
      "We don't believe in keeping clients in the dark. Every recommendation comes with education — we want you to understand the 'why' behind every decision we make together.",
    details: [
      "One-on-one financial literacy coaching",
      "Family financial education sessions",
      "Customized learning resources and guides",
      "Introductory workshops for young adults and heirs",
      "Ongoing market and strategy commentary",
    ],
  },
  {
    number: "04",
    title: "Family Stewardship & Governance",
    description:
      "Wealth can either unite families or divide them. We help families develop the communication frameworks, governance structures, and shared values that allow wealth to serve its intended purpose.",
    details: [
      "Family meeting facilitation",
      "Wealth governance frameworks",
      "Heir preparation and financial education",
      "Family mission and values documentation",
      "Charitable giving strategy",
    ],
  },
  {
    number: "05",
    title: "Legacy & Estate Planning Coordination",
    description:
      "Your legacy is too important to leave to chance. We work alongside estate planning attorneys to ensure your documents, beneficiary designations, and asset structures all align with your intentions.",
    details: [
      "Legacy intention mapping",
      "Estate planning coordination",
      "Beneficiary and titling review",
      "Trust funding and coordination",
      "Charitable and philanthropic planning",
    ],
  },
  {
    number: "06",
    title: "Faith-Guided Financial Planning",
    description:
      "For clients who want their financial decisions to reflect their faith and values, we offer a thoughtful approach that aligns your wealth strategy with your beliefs and purpose.",
    details: [
      "Values-aligned investment considerations",
      "Biblically responsible giving structures",
      "Kingdom-minded legacy planning",
      "Tithing and charitable giving integration",
      "Purpose-driven wealth conversations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="bg-obsidian pt-40 pb-24">
        <Container size="lg">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-6">
            What We Do
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-alabaster leading-[1.08] max-w-4xl mb-8">
            Strategy Built Around Your Life, Not a Product
          </h1>
          <p className="font-body text-stone-gray text-lg leading-relaxed max-w-2xl">
            We don&rsquo;t offer off-the-shelf financial products. We build
            custom strategies that reflect your values, protect your family, and
            create a roadmap for everything you want to accomplish.
          </p>
        </Container>
      </section>

      {/* ── Services list ─────────────────────────────── */}
      <section className="bg-forest-black py-16">
        <Container>
          <div className="divide-y divide-white/5">
            {services.map((service) => (
              <div
                key={service.number}
                className="py-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16"
              >
                {/* Left — title */}
                <div>
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-bronze/70">
                    {service.number}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-alabaster mt-2 leading-snug">
                    {service.title}
                  </h2>
                </div>
                {/* Right — description + details */}
                <div className="lg:col-span-2">
                  <p className="font-body text-stone-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm font-body text-stone-gray/65"
                      >
                        <span className="text-bronze mt-[3px] text-[8px] flex-shrink-0">
                          ◆
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Approach ──────────────────────────────── */}
      <section className="bg-alabaster py-24 lg:py-32">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
                Our Approach
              </p>
              <h2 className="font-serif text-4xl text-obsidian leading-tight mb-6">
                Education Before Advice.
                <br />
                Strategy Before Product.
              </h2>
              <p className="font-body text-obsidian/65 leading-relaxed mb-4">
                Every client engagement at Veritas begins with a deep discovery
                process. We ask questions that most advisors don&rsquo;t —
                about your family, your values, your fears, and your vision.
                Only then do we begin to build strategy.
              </p>
              <p className="font-body text-obsidian/65 leading-relaxed mb-8">
                We are not compensated by product sales. Our incentive is your
                outcome. This alignment is the foundation of everything we do.
              </p>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="border-obsidian/25 text-obsidian hover:border-bronze hover:text-bronze"
              >
                Start the Conversation
              </Button>
            </div>
            {/* Placeholder image area */}
            <div className="bg-stone-gray/20 aspect-square flex items-center justify-center border border-stone-gray/30">
              <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-obsidian/30">
                Image Placeholder
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
