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
    title: "Life Insurance Built to Create Wealth",
    description:
      "Led by Mathew Acosta, our protection practice starts with a question most advisors skip: how can this policy do more than just pay out? We structure life insurance as a living wealth-building tool — not a cost, but an asset.",
    details: [
      "Whole life & indexed universal life structuring",
      "Cash value accumulation strategies",
      "Living benefits & income protection",
      "Business owner life insurance planning",
      "Policy design for long-term wealth building",
    ],
  },
  {
    number: "02",
    title: "Tax-Advantaged Growth Strategies",
    description:
      "We help families position their assets inside structures that compound intelligently and minimize tax drag over time. More of what you earn stays with your family — now and across generations.",
    details: [
      "Tax-advantaged accumulation vehicles",
      "Indexed growth strategies",
      "Retirement income positioning",
      "Tax-efficient wealth transfer",
      "Long-term asset positioning",
    ],
  },
  {
    number: "03",
    title: "Market Education & Technical Analysis",
    description:
      "Led by Roxy Acosta, CMT Candidate, this is institutional-level market education made accessible. Most families are never taught how markets actually work — that changes here.",
    details: [
      "Technical analysis & chart reading",
      "Market structure & price action",
      "Trend identification & trading education",
      "Risk management frameworks",
      "Understanding macro & market cycles",
    ],
  },
  {
    number: "04",
    title: "Strategic Money Management",
    description:
      "Knowing how to manage money with intention is a skill set most families are never given. We provide the frameworks, habits, and real financial knowledge that compound over a lifetime.",
    details: [
      "Personal financial architecture",
      "Cash flow strategy & budgeting frameworks",
      "Debt positioning & elimination strategy",
      "Emergency reserve structuring",
      "Financial confidence for the whole family",
    ],
  },
  {
    number: "05",
    title: "Legacy & Estate Planning Coordination",
    description:
      "Your legacy is too important to leave unplanned. We build a real plan for what you leave behind — financially and generationally — and coordinate with estate planning professionals to ensure every structure aligns with your intentions.",
    details: [
      "Legacy intention mapping",
      "Estate planning coordination",
      "Beneficiary & titling review",
      "Trust funding & coordination",
      "Multigenerational wealth transfer planning",
    ],
  },
  {
    number: "06",
    title: "Faith-Guided Financial Planning",
    description:
      "For families who view stewardship through a faith lens, we honor that perspective fully. We integrate values-aligned financial planning, purpose-driven wealth decisions, and charitable giving structures that reflect what you believe.",
    details: [
      "Values-aligned wealth strategy",
      "Kingdom-minded legacy planning",
      "Tithing & charitable giving integration",
      "Purpose-driven financial frameworks",
      "Biblically responsible structuring",
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
