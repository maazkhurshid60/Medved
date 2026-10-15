/**
 * Ambient page backdrop. A fixed, non-interactive layer behind all content.
 * Deliberately quiet: a clean paper canvas with one soft, static wash of tint
 * at the top and a barely-there square grid for depth. No drifting colour
 * fields, no animated blobs.
 */
export default function BackdropMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background-50" />
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-b from-primary-100/60 via-background-50/0 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
    </div>
  );
}