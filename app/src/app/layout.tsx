import type { Metadata } from "next";
import {
  playfair,
  cormorant,
  montserrat,
  lato,
  libreBaskerville,
} from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Veritas Capital Partners — Truth. Protection. Wealth.",
    template: "%s | Veritas Capital Partners",
  },
  description:
    "Veritas Capital Partners is a premium wealth strategy and legacy planning platform committed to protecting what matters and building what lasts.",
  keywords: [
    "wealth management",
    "legacy planning",
    "family stewardship",
    "financial education",
    "wealth protection",
    "faith-guided financial planning",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Veritas Capital Partners",
    title: "Veritas Capital Partners — Truth. Protection. Wealth.",
    description:
      "A premium wealth strategy and legacy planning platform for families who think in generations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas Capital Partners",
    description:
      "Protect What Matters. Build What Lasts. Premium wealth strategy and legacy planning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        playfair.variable,
        cormorant.variable,
        montserrat.variable,
        lato.variable,
        libreBaskerville.variable,
        "antialiased",
      ].join(" ")}
    >
      <body className="min-h-screen flex flex-col bg-obsidian text-alabaster font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
