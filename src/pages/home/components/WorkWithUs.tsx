import Reveal from "@/components/base/Reveal";
import { useParallax } from "@/hooks/useParallax";
import { heroMedia } from "@/mocks/home";
import ButtonLabel from "@/components/base/ButtonLabel";

interface WorkWithUsProps {
  onOpenContact: () => void;
}

export default function WorkWithUs({ onOpenContact }: WorkWithUsProps) {
  const parallaxRef = useParallax<HTMLDivElement>(0.12);

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden md:min-h-screen">
      <div
        ref={parallaxRef}
        className="absolute inset-x-0 -top-[15%] -bottom-[15%] will-change-transform"
      >
        <video
          className="h-full w-full animate-ken-burns object-cover object-center"
          poster={heroMedia.poster}
          playsInline
          loop
          muted
          autoPlay
          preload="auto"
          aria-label="Aerial footage of the Los Angeles skyline at sunset — Team Medved luxury real estate"
        >
          <source src={heroMedia.webm} type="video/webm" />
          <source src={heroMedia.mp4} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-foreground-950/70" />

      <Reveal
        y={40}
        className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 py-24 text-center md:px-8 md:py-32"
      >
        <span className="glass-dark inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-label text-[10px] text-primary-300">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
          Work With Us
        </span>

        <div className="glass-dark mt-8 max-w-3xl rounded-[32px] p-8 md:p-14">
          <h2 className="font-heading text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-background-50 md:text-6xl">
            Exceptional service for the world&apos;s most discerning clientele.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-background-50/80">
            Karen and Julie&apos;s expertise in developing and executing systems to achieve
            exceptional client satisfaction for some of the world&apos;s most discriminating
            clientele was an ideal foundation for a career in Los Angeles real estate.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="btn btn-fill-light mt-9 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-primary-500 px-10 py-4 btn-label text-background-50"
          >
            <ButtonLabel>Contact Us</ButtonLabel>
            <i className="ri-arrow-right-line btn-arrow text-sm" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}