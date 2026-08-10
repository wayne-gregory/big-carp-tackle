import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { company } from "@/lib/company";

type LogoProps = {
  className?: string;
  /** full wordmark or icon mark only */
  variant?: "full" | "icon";
  /** light surfaces vs dark/ink surfaces */
  tone?: "color" | "on-dark";
  /** link to home */
  linked?: boolean;
  /** height class for the image */
  heightClass?: string;
  onClick?: () => void;
};

export function Logo({
  className,
  variant = "full",
  tone = "color",
  linked = true,
  heightClass = "h-9",
  onClick,
}: LogoProps) {
  const src =
    variant === "icon"
      ? "/brand/logo-icon.png"
      : tone === "on-dark"
        ? "/brand/logo-full.png"
        : "/brand/logo-header.png";

  const img = (
    <img
      src={src}
      alt={`${company.legalName} logo`}
      className={cn(
        "w-auto max-w-[min(100%,11.5rem)] object-contain object-left sm:max-w-[13rem]",
        heightClass,
        variant === "icon" && "max-w-none aspect-square",
      )}
      width={variant === "icon" ? 36 : 168}
      height={variant === "icon" ? 36 : 40}
      decoding="async"
    />
  );

  if (!linked) {
    return <span className={cn("inline-flex items-center", className)}>{img}</span>;
  }

  return (
    <Link
      to="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${company.name} home`}
      onClick={onClick}
    >
      {img}
    </Link>
  );
}
