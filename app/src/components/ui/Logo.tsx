import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = "light",
  className = "",
  width = 180,
  height = 72,
}: LogoProps) {
  // Stopgap: logo-light.png not yet provided — render the dark logo with a
  // CSS invert filter so it reads as white/ivory on dark (obsidian) backgrounds.
  // Replace src + remove the style prop once logo-light.png is dropped into /public.
  const src = variant === "light" ? "/logo-dark.png" : "/logo-dark.png";
  const invertStyle = variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Veritas Capital Partners"
      width={width}
      height={height}
      style={invertStyle}
      className={cn("object-contain", className)}
    />
  );
}
