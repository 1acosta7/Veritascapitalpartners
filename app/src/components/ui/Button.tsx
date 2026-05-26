import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "border border-bronze text-bronze hover:bg-bronze hover:text-obsidian transition-colors duration-300",
  ghost:
    "text-stone-gray hover:text-bronze-gold transition-colors duration-300",
  outline:
    "border border-alabaster/30 text-alabaster hover:border-bronze hover:text-bronze transition-colors duration-300",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[10px] tracking-[0.2em]",
  md: "px-7 py-3 text-[10px] tracking-[0.2em]",
  lg: "px-9 py-4 text-xs tracking-[0.2em]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-sans uppercase",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
