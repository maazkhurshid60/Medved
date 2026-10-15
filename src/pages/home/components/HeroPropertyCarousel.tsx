import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { featuredProperties } from "@/mocks/home";

const AUTOPLAY_MS = 6500;
const TOTAL = featuredProperties.length;

/**
 * HeroPropertyCarousel — an overlay carousel of featured listings that floats
 * on the right side of the hero, above the photograph and its gradient shade.
 * One card is shown at a time with a smooth slide transition, arrow controls,
 * and clickable dots. Autoplay pauses on hover so the visitor stays in control.
 */
export default function HeroPropertyCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex(((next % TOTAL) + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="absolute right-6 top-1/2 z-10 hidden w-[420px] -translate-y-1/2 lg:block xl:right-12 xl:w-[440px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header — context label + slide count */}
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-label text-[10px] text-foreground-900">Featured Listings</span>
        <span className="font-body text-xs font-medium tabular-nums text-foreground-700">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-1 text-foreground-400">/</span>
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      {/* Viewport + sliding track */}
      <div className="overflow-hidden rounded-[26px]">
        <div
          className="flex transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              aria-hidden={featuredProperties[index].id !== property.id}
              tabIndex={featuredProperties[index].id === property.id ? 0 : -1}
              className="group glass-strong w-full shrink-0 cursor-pointer rounded-[26px] p-3 transition-transform duration-500"
            >
              <div className="flex h-[196px] w-full gap-4">
                <div className="relative h-full w-[150px] shrink-0 overflow-hidden rounded-[18px]">
                  <img
                    src={property.image}
                    alt={`${property.name} — ${property.address} luxury home listed by Team Medved`}
                    title={`${property.name}, ${property.address}`}
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="glass-dark absolute left-2 top-2 rounded-full px-2.5 py-1 font-label text-[8px] text-background-50">
                    {property.tag}
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <h3 className="line-clamp-2 font-heading text-lg leading-snug text-foreground-950">
                    {property.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 font-body text-xs leading-relaxed text-foreground-600">
                    {property.address}
                    {property.meta ? ` · ${property.meta}` : ""}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-body text-sm font-semibold text-primary-800">
                      {property.price}
                    </span>
                    <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 btn-label text-foreground-900 transition-colors duration-300 group-hover:text-primary-700">
                      View
                      <i className="ri-arrow-right-line btn-arrow text-xs" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Controls — left arrow, dots, right arrow */}
      <div className="mt-4 flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Show previous featured listing"
          className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-all duration-300 hover:bg-primary-500/90 hover:text-background-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        >
          <i className="ri-arrow-left-line text-lg" />
        </button>

        <div className="flex items-center gap-2">
          {featuredProperties.map((property, dotIndex) => (
            <button
              key={property.id}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Show listing ${dotIndex + 1}: ${property.name}`}
              aria-current={dotIndex === index}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                dotIndex === index
                  ? "w-7 bg-primary-500"
                  : "w-1.5 bg-foreground-950/25 hover:bg-foreground-950/45"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Show next featured listing"
          className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-all duration-300 hover:bg-primary-500/90 hover:text-background-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        >
          <i className="ri-arrow-right-line text-lg" />
        </button>
      </div>
    </div>
  );
}