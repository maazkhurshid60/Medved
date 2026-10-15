import { useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { neighborhoods } from "@/mocks/home";

export default function Neighborhoods() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 20 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="relative px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="06"
          label="Where We Live"
          title="Neighborhoods"
          description="From the hills above Hollywood to the tree-lined streets of the valley, explore the communities Team Medved knows by heart."
          actions={
            <div className="hidden items-center gap-5 md:flex">
              <Link
                to="/communities"
                className="link-underline cursor-pointer whitespace-nowrap btn-label text-foreground-950 transition-colors hover:text-primary-700"
              >
                View All
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous neighborhoods"
                  onClick={() => scrollByCard(-1)}
                  className="glass flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-colors hover:bg-none hover:bg-primary-500 hover:text-background-50"
                >
                  <i className="ri-arrow-left-line text-base" />
                </button>
                <button
                  type="button"
                  aria-label="Next neighborhoods"
                  onClick={() => scrollByCard(1)}
                  className="glass flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-colors hover:bg-none hover:bg-primary-500 hover:text-background-50"
                >
                  <i className="ri-arrow-right-line text-base" />
                </button>
              </div>
            </div>
          }
        />
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-proximity scroll-pl-4 gap-5 overflow-x-auto overscroll-x-contain px-4 pb-8 md:scroll-pl-8 md:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {neighborhoods.map((hood, index) => (
          <Reveal
            key={hood.slug}
            index={index}
            step={90}
            y={24}
            className="w-[280px] shrink-0 snap-start md:w-[340px]"
          >
            <Link
              to={`/neighborhoods/${hood.slug}`}
              className="group block cursor-pointer overflow-hidden rounded-[28px] border border-foreground-950/8"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={hood.image}
                  alt={`${hood.name} neighborhood guide — Team Medved Los Angeles real estate`}
                  title={`${hood.name} — Team Medved`}
                  className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-foreground-950/5 to-transparent" />

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <h3 className="font-heading text-2xl leading-tight text-background-50">
                    {hood.name}
                  </h3>
                  <span className="glass-dark flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-background-50 transition-colors group-hover:bg-none group-hover:bg-primary-500 group-hover:text-background-50">
                    <i className="ri-arrow-right-up-line text-lg" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}