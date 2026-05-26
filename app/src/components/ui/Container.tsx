import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: ContainerSize;
}

const sizes: Record<ContainerSize, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export function Container({
  className,
  children,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-12",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
