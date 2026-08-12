import { cn } from "@/lib/utils";
import { shop } from "@/lib/shop";

type Variant = "header" | "footer" | "mark" | "full";

const sources: Record<Variant, { src: string; className: string }> = {
  header: {
    src: "/brand/logo-header.png",
    className: "h-10 w-auto sm:h-11",
  },
  footer: {
    src: "/brand/logo-header.png",
    className: "h-12 w-auto",
  },
  mark: {
    src: "/brand/logo-icon-light.png",
    className: "h-9 w-9",
  },
  full: {
    src: "/brand/logo-full.png",
    className: "h-14 w-auto",
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
      width={variant === "mark" ? 36 : 180}
      height={variant === "mark" ? 36 : 44}
      decoding="async"
    />
  );
}
