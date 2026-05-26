import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Education & Insights",
  description:
    "Financial education, articles, and resources from Veritas Capital Partners. Knowledge is the most powerful wealth-building tool.",
};

const articles = [
  {
    category: "Wealth Strategy",
    title: "Why Protection-First Wealth Planning Matters More Than Ever",
    excerpt:
      "Most conversations about wealth start with growth. We believe the more important conversation starts with protection. Here's why the order matters.",
    readTime: "6 min read",
  },
  {
    category: "Legacy Planning",
    title: "The Difference Between Having an Estate Plan and Having a Legacy Plan",
    excerpt:
      "Estate plans handle legal documents. Legacy plans handle meaning. Understanding the distinction could change how you think about everything you're building.",
    readTime: "8 min read",
  },
  {
    category: "Family Stewardship",
    title: "How to Talk About Money with Your Family — And Why Most People Get It Wrong",
    excerpt:
      "Financial silence is one of the most damaging things a family can do. We explore practical frameworks for building healthy financial communication.",
    readTime: "7 min read",
  },
  {
    category: "Financial Education",
    title: "The Five Questions to Ask Before You Trust Any Financial Advisor",
    excerpt:
      "Not all financial guidance is created equal. These five questions cut through the noise and reveal whether someone truly has your interests at heart.",
    readTime: "5 min read",
  },
  {
    category: "Faith & Stewardship",
    title: "What Biblical Stewardship Looks Like in a Modern Financial Plan",
    excerpt:
      "For those who approach wealth through a faith lens, we explore how ancient principles of stewardship translate into remarkably sound modern financial strategy.",
    readTime: "9 min read",
  },
  {
    category: "Income Strategy",
    title: "Building Income Streams That Outlast Your Career",
    excerpt:
      "A single income source is a vulnerability. We break down the principles behind building diversified, resilient income — and why starting earlier matters.",
    readTime: "6 min read",
  },
];

export default function EducationPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="bg-obsidian pt-40 pb-24">
        <Container size="lg">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-6">
            Education &amp; Insights
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-alabaster leading-[1.08] max-w-4xl mb-8">
            Knowledge Is the Most Powerful Wealth-Building Tool
          </h1>
          <p className="font-body text-stone-gray text-lg leading-relaxed max-w-2xl">
            We believe financial education should be accessible, honest, and
            free of jargon. This is where we share what we know — about
            strategy, stewardship, legacy, and everything in between.
          </p>
        </Container>
      </section>

      {/* ── Coming soon banner ────────────────────────── */}
      <div className="bg-slate-teal/15 border-y border-slate-teal/25 py-5">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-1">
                Coming Soon
              </p>
              <p className="font-body text-stone-gray text-sm">
                The Veritas podcast, YouTube channel, and resource library are
                currently in development. Subscribe to be notified at launch.
              </p>
            </div>
            <Button href="/contact" variant="outline" size="sm">
              Stay Informed
            </Button>
          </div>
        </Container>
      </div>

      {/* ── Article grid ──────────────────────────────── */}
      <section className="bg-forest-black py-24">
        <Container>
          <div className="mb-12">
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-3">
              Articles
            </p>
            <h2 className="font-serif text-3xl text-alabaster">
              Insights &amp; Perspectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {articles.map((post) => (
              <article
                key={post.title}
                className="bg-forest-black p-8 hover:bg-slate-teal/[0.07] transition-colors duration-300 group"
              >
                <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-5">
                  {post.category}
                </p>
                <h3 className="font-serif text-xl text-alabaster leading-snug mb-3 group-hover:text-bronze-gold transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="font-body text-stone-gray/65 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-sans text-[9px] tracking-wide text-stone-gray/40">
                    {post.readTime}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-bronze/50 group-hover:text-bronze transition-colors">
                    Full Article Coming Soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Media vision ──────────────────────────────── */}
      <section className="bg-obsidian py-28 lg:py-36">
        <Container size="md" className="text-center">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bronze mb-4">
            The Vision
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-alabaster leading-tight mb-6">
            More Than Advice — A Platform for Financial Truth
          </h2>
          <p className="font-body text-stone-gray leading-relaxed mb-4">
            Veritas Education is our long-term vision for a full-scale financial
            media platform: articles, video content, a podcast, downloadable
            resources, and community-driven learning — all anchored in the same
            calm, educational, truth-first voice.
          </p>
          <p className="font-body text-stone-gray leading-relaxed mb-10">
            We are building it carefully and intentionally. Subscribe to stay
            informed as it develops.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Stay Connected
          </Button>
        </Container>
      </section>
    </>
  );
}
