import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "secondary" | "light";
}

const toneMap: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  primary: "text-primary-700",
  secondary: "text-secondary-600",
  light: "text-primary-300",
};

/**
 * A quiet editorial kicker: a short hairline rule followed by a small tracked
 * label. Deliberately not a frosted capsule.
 */
export default function Eyebrow({ children, className = "", tone = "primary" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-label text-[11px] font-medium ${toneMap[tone]} ${className}`}
    >
      <span className="h-px w-9 bg-current opacity-50" aria-hidden="true" />
      {children}
    </span>
  );
}