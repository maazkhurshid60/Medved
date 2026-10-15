import type { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  /** "light" = frosted ivory over light areas; "dark" = smoked glass over imagery. */
  tone?: "light" | "soft" | "strong" | "dark" | "darkStrong";
  /** Apply a generous card radius (feature cards) instead of the default. */
  rounded?: "2xl" | "3xl" | "full";
}

const toneMap: Record<NonNullable<GlassPanelProps["tone"]>, string> = {
  light: "glass",
  soft: "glass",
  strong: "glass-strong",
  dark: "glass-dark",
  darkStrong: "glass-dark-strong",
};

const radiusMap: Record<NonNullable<GlassPanelProps["rounded"]>, string> = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-[28px]",
  full: "rounded-full",
};

export default function GlassPanel({
  children,
  className = "",
  tone = "light",
  rounded = "3xl",
}: GlassPanelProps) {
  return (
    <div className={`${toneMap[tone]} ${radiusMap[rounded]} ${className}`}>{children}</div>
  );
}