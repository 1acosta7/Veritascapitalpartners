import { cn } from "@/lib/utils";

type SectionVariant = "dark" | "light" | "alt" | "teal";
type Tag = "section" | "div" | "article";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  variant?: SectionVariant;
  id?: string;
  as?: Tag;
}

const variants: Record<SectionVariant, string> = {
  dark: "bg-obsidian text-alabaster",
  alt: "bg-forest-black text-alabaster",
  light: "bg-alabaster text-obsidian",
  teal: "bg-slate-teal text-alabaster",
};

export function Section({
  className,
  children,
  variant = "dark",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("py-24 lg:py-32", variants[variant], className)}
    >
      {children}
    </Tag>
  );
}
