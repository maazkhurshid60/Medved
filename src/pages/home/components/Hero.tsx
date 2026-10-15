import { Link } from "react-router-dom";
import { heroShowcase } from "@/mocks/home";
import Reveal from "@/components/base/Reveal";
import Eyebrow from "@/components/base/Eyebrow";
import ButtonLabel from "@/components/base/ButtonLabel";
import HeroPropertyCarousel from "@/pages/home/components/HeroPropertyCarousel";

/**
 * Hero — full-bleed editorial composition.
 * A single high-quality photograph fills the entire section, with the copy
 * layered over a soft left-to-right gradient so the text stays clearly legible
 * while the image remains bright and visible. Content and typography are
 * unchanged; only the image, format, and composition are new.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
      {/* Full-bleed background photograph */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroShowcase.background}
          alt="Modern luxury villa in the Hollywood Hills with a reflecting pool and expansive glass walls — Team Medved Los Angeles real estate"
          title="Team Medved — luxury Los Angeles homes"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Soft primary-tinted gradient overlay — no white and no dark wash.
          The brand teal keeps the copy legible while letting the photograph
          stay bright and clearly visible. A gentle vertical blend ties the
          image back into the canvas at the top and bottom edges. */}
      <div className="absolute inset-0 -z-10 bg-primary-100/70 md:hidden" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-primary-200 via-primary-100/80 to-primary-100/0 md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-100/60 via-primary-100/0 to-primary-100/60"
        aria-hidden="true"
      />

      {/* Copy column — unchanged content and hierarchy */}
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="max-w-2xl">
          <Reveal y={18}>
            <Eyebrow>Los Angeles Luxury Real Estate</Eyebrow>
          </Reveal>

          <Reveal y={26} delay={80}>
            <h1
              className="mt-8 font-heading text-[3.6rem] font-medium leading-[0.94] tracking-[-0.03em] text-foreground-950 sm:text-7xl lg:text-[6.2rem]"
              spellCheck={false}
            >
              Team Medved
            </h1>
          </Reveal>

          <Reveal y={22} delay={150}>
            <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-foreground-800 md:text-lg">
              Top producing agents in the Lake Hollywood, Los Feliz, Silver Lake, Studio City,
              Valley Village, Sherman Oaks, Toluca Lake, and surrounding areas.
            </p>
          </Reveal>

          <Reveal y={22} delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/properties/sale"
                className="btn btn-fill-light inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-primary-500 px-8 py-4 btn-label text-background-50"
              >
                <ButtonLabel>Browse Properties</ButtonLabel>
                <i className="ri-arrow-right-line btn-arrow text-sm" />
              </Link>
              <Link
                to="/home-valuation"
                className="glass btn inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-8 py-4 btn-label text-foreground-900 hover:text-primary-700"
              >
                <ButtonLabel>Home Valuation</ButtonLabel>
              </Link>
            </div>
          </Reveal>

          <Reveal y={22} delay={300}>
            <div className="glass mt-12 inline-flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/90 text-background-50">
                  <i className="ri-map-pin-2-line text-base" />
                </span>
                <div>
                  <p className="font-label text-[9px] text-foreground-600">Serving</p>
                  <p className="font-body text-sm font-medium text-foreground-950">
                    Hills to the Sea
                  </p>
                </div>
              </div>
              <span className="hidden h-10 w-px bg-foreground-950/10 sm:block" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 text-background-50">
                  <i className="ri-award-line text-base" />
                </span>
                <div>
                  <p className="font-label text-[9px] text-foreground-600">Established</p>
                  <p className="font-body text-sm font-medium text-foreground-950">Since 2004</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Featured listings carousel — floats in from the right, above the
          photograph and its gradient shade. Hidden on small screens to keep
          the copy column unobstructed. */}
      <HeroPropertyCarousel />

      {/* Floating glass detail — sits over the bright side of the photograph */}
      <Reveal
        x={40}
        y={0}
        delay={360}
        className="absolute bottom-16 right-8 hidden lg:block lg:right-14"
      >
        <div className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-background-50">
            <i className="ri-star-smile-line text-lg" />
          </span>
          <div>
            <p className="font-heading text-xl leading-none text-foreground-950">500+</p>
            <p className="mt-1 font-label text-[9px] text-foreground-600">Homes Sold</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}