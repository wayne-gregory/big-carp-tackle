import { cn } from "@/lib/utils";
import { shop } from "@/lib/shop";

type Variant = "header" | "footer" | "mark" | "full";

const sources: Record<Variant, { src: string; className: string }> = {
  header: {
    src: "/brand/logo-header.png",
    className: "h-9 w-auto sm:h-10",
  },
  footer: {
    src: "/brand/logo-header.png",
    className: "h-11 w-auto max-w-[min(280px,80vw)]",
  },
  mark: {
    src: "/brand/logo-icon-light.png",
    className: "h-9 w-9",
  },
  full: {
    src: "/brand/logo-full.png",
    className: "h-12 w-auto sm:h-14 max-w-full",
  },
};

export function BrandLogo({
  variant = "header",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const conf = sources[variant];
  return (
    <img
      src={conf.src}
      alt={shop.name}
      className={cn(conf.className, "object-contain object-left", className)}
      width={variant === "mark" ? 36 : 220}
      height={variant === "mark" ? 36 : 40}
      decoding="async"
    />
  );
}
