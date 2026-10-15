import type { ReactNode } from "react";
import Reveal from "@/components/base/Reveal";

interface SectionHeadingProps {
  /** Kept for call-site compatibility. Not rendered — folio numbers read as filler. */
  index?: string;
  /** Small kicker sitting on the hairline rule. */
  label: string;
  title: ReactNode;
  description?: ReactNode;
  /** "dark" = dark ink text on a light canvas; "light" = light text over imagery. */
  tone?: "dark" | "light";
  /** Optional element pinned to the end of the header row (e.g. a "View all" link). */
  actions?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  tone = "dark",
  actions,
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={className}>
      <Reveal y={16}>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="inline-flex items-center gap-3">
            <span
              className={`h-px w-9 ${isLight ? "bg-background-50/45" : "bg-foreground-950/25"}`}
              aria-hidden="true"
            />
            <span
              className={`font-label text-[11px] ${
                isLight ? "text-background-50/85" : "text-foreground-700"
              }`}
            >
              {label}
            </span>
          </div>
          {actions}
        </div>
      </Reveal>

      <Reveal y={26} delay={80}>
        <h2
          className={`mt-7 max-w-4xl font-heading text-[2.5rem] font-medium leading-[1.04] tracking-[-0.025em] md:text-[3.6rem] ${
            isLight ? "text-background-50" : "text-foreground-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal y={22} delay={140}>
          <p
            className={`mt-6 max-w-xl font-body text-base leading-relaxed ${
              isLight ? "text-background-50/75" : "text-foreground-700"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}