import type { ReactNode } from "react";

interface ButtonLabelProps {
  children: ReactNode;
}

/**
 * Rolling button label.
 * Renders the visible label plus an identical twin beneath it. On hover the
 * track slides up so the twin takes its place, producing a smooth roll.
 */
export default function ButtonLabel({ children }: ButtonLabelProps) {
  return (
    <span className="btn-roll">
      <span className="btn-roll-track">
        <span className="btn-roll-item">{children}</span>
        <span className="btn-roll-item" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}