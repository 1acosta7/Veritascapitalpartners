import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a conversation with Veritas Capital Partners. We offer a complimentary introductory consultation for families serious about wealth strategy and legacy planning.",
};

const contactDetails = [
  {
    label: "Location",
    value: "Manhattan Beach, CA",
    sub: "By appointment only",
  },
  {
    label: "Email",
    value: "info@veritascapitalpartners.net",
    href: "mailto:info@veritascapitalpartners.net",
  },
  {
    label: "Response Time",
    value: "1–2 business days",
    sub: "We review every inquiry personally",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="bg-obsidian pt-40 pb-20">
        <Container size="lg">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-6">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-alabaster leading-[1.08] max-w-3xl mb-6">
            Let&rsquo;s Begin the Conversation
          </h1>
          <p className="font-body text-stone-gray text-lg leading-relaxed max-w-xl">
            We offer a complimentary introductory consultation to understand
            your situation and determine whether Veritas is the right fit for
            your family. No obligation — only an honest conversation.
          </p>
        </Container>
      </section>

      {/* ── Form + Contact info ───────────────────────── */}
      <section className="bg-forest-black py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form — takes up 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl text-alabaster mb-8 leading-snug">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info — takes up 2/5 */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl text-alabaster mb-8 leading-snug">
                Contact Information
              </h2>
              <div className="flex flex-col gap-8">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-2">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="font-body text-stone-gray hover:text-alabaster transition-colors text-sm"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-body text-stone-gray text-sm">
                        {detail.value}
                      </p>
                    )}
                    {detail.sub && (
                      <p className="font-body text-stone-gray/40 text-xs mt-1">
                        {detail.sub}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-white/5 my-10" />

              {/* What to expect */}
              <div>
                <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-4">
                  What to Expect
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "A brief, no-pressure introductory call",
                    "An honest assessment of whether we are the right fit",
                    "Clear next steps with no commitment required",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-sans text-[9px] tracking-widest text-bronze mt-0.5 flex-shrink-0">
                        0{i + 1}
                      </span>
                      <p className="font-body text-stone-gray/70 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Compliance note ───────────────────────────── */}
      <section className="bg-obsidian py-12 border-t border-white/5">
        <Container size="lg">
          <p className="font-body text-stone-gray/35 text-xs leading-relaxed max-w-3xl">
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone-gray/50">
              Disclaimer:{" "}
            </span>
            The information provided through this website and any communications
            with Veritas Capital Partners is for educational and informational
            purposes only and does not constitute financial, legal, tax, or
            investment advice. Nothing herein should be construed as a
            solicitation or offer to buy or sell any security or financial
            product. Please consult a qualified financial, legal, or tax
            professional before making any financial decisions.
          </p>
        </Container>
      </section>
    </>
  );
}
