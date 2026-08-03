import { cn } from "~/lib/utils";
import iconArrowSrc from "~/assets/home/icon-arrow.svg";

interface ProductCardProps {
  name: string;
  description: string[];
  href: string;
  ctaLabel: string;
  iconSrc: string;
  accentSrc: string;
  accentClassName?: string;
  featured?: boolean;
}

export function ProductCard({
  name,
  description,
  href,
  ctaLabel,
  iconSrc,
  accentSrc,
  accentClassName,
  featured = false,
}: ProductCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Explore ${name}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[8px] p-[49px]",
        featured
          ? "border border-[rgba(196,199,199,0.2)] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
          : "border border-transparent bg-[#f3f3f3]",
      )}
    >
      {/* Icon */}
      <span className="flex size-12 items-center justify-center rounded-full bg-black">
        <img src={iconSrc} alt="" className="size-[20px]" />
      </span>

      {/* Content */}
      <div className="mt-6 flex flex-col gap-[7px]">
        <h3 className="font-serif text-[32px] font-medium leading-[40px] text-black">
          {name}
        </h3>
        {description.map((line, i) => (
          <p
            key={i}
            className="font-serif text-[18px] leading-[24.75px] text-[#444748]"
          >
            {line}
          </p>
        ))}
        {/* CTA (hidden until hover) */}
        <span className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.7px] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {ctaLabel}
          <img
            src={iconArrowSrc}
            alt=""
            className="size-[9.333px]"
          />
        </span>
      </div>

      {/* Decorative accent */}
      <img
        src={accentSrc}
        alt=""
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-4 -right-4",
          accentClassName,
        )}
      />
    </a>
  );
}
