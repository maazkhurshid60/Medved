import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { testimonials } from "@/mocks/home";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const current = testimonials[active];

  const go = (direction: 1 | -1) => setActive((prev) => (prev + direction + total) % total);

  return (
    <section className="px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading index="05" label="Client Stories" title="Testimonials" />

            <Reveal y={22} delay={140}>
              <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-foreground-700">
                A few words from the families, buyers, and investors we&apos;ve helped move across
                Los Angeles.
              </p>
            </Reveal>

            <Reveal y={22} delay={200}>
              <div className="mt-10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="glass flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-colors hover:bg-none hover:bg-primary-500 hover:text-background-50"
                >
                  <i className="ri-arrow-left-line text-base" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="glass flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-colors hover:bg-none hover:bg-primary-500 hover:text-background-50"
                >
                  <i className="ri-arrow-right-line text-base" />
                </button>
                <span className="ml-2 font-label text-[10px] text-foreground-500">
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal y={26} delay={100}>
            <div className="glass-strong relative overflow-hidden rounded-[32px] p-8 md:p-12">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-background-50">
                <i className="ri-double-quotes-l text-2xl" aria-hidden="true" />
              </span>

              <blockquote
                key={`quote-${active}`}
                className="relative mt-8 animate-fade-up font-heading text-2xl font-medium leading-snug text-foreground-950 md:text-3xl"
              >
                {current.quote}
              </blockquote>

              <div key={`meta-${active}`} className="relative mt-8 animate-fade-up">
                <p className="font-body text-sm font-semibold text-foreground-950">
                  {current.name}
                </p>
                <p className="mt-1 font-label text-[10px] text-secondary-600">
                  {current.role} · {current.location}
                </p>
              </div>

              <div className="relative mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-foreground-950/10 pt-6">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`cursor-pointer font-label text-[10px] transition-colors ${
                      index === active
                        ? "text-primary-700"
                        : "text-foreground-400 hover:text-foreground-700"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}