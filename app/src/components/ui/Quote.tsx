import { cn } from "@/lib/utils";

interface QuoteProps {
  text: string;
  attribution?: string;
  className?: string;
}

export function Quote({ text, attribution, className }: QuoteProps) {
  return (
    <figure className={cn("text-center", className)}>
      <div className="mx-auto w-10 h-px bg-bronze mb-10" />
      <blockquote className="font-italic italic text-xl md:text-2xl lg:text-3xl text-alabaster leading-relaxed tracking-wide">
        &ldquo;{text}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-8 font-sans text-[10px] tracking-[0.3em] uppercase text-bronze">
          — {attribution}
        </figcaption>
      )}
      <div className="mx-auto mt-10 w-10 h-px bg-bronze" />
    </figure>
  );
}
