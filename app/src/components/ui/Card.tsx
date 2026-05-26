import { cn } from "@/lib/utils";

type CardVariant = "dark" | "light" | "teal";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: CardVariant;
}

const variants: Record<CardVariant, string> = {
  dark: "bg-forest-black border border-white/5",
  light: "bg-white border border-stone-gray/30",
  teal: "bg-slate-teal/15 border border-slate-teal/25",
};

export function Card({ className, children, variant = "dark" }: CardProps) {
  return (
    <div className={cn("p-8", variants[variant], className)}>
      {children}
    </div>
  );
}
