import { pressNames } from "@/mocks/home";

const marqueeItems = [...pressNames, ...pressNames];

export default function PressMarquee() {
  return (
    <section className="overflow-hidden border-y border-foreground-950/10 py-12 md:py-16">
      <div className="mx-auto mb-9 max-w-[1400px] px-4 md:px-8">
        <span className="glass inline-flex rounded-full px-4 py-2 font-label text-[10px] text-foreground-700">
          As Seen In
        </span>
      </div>

      <div className="group relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {marqueeItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center whitespace-nowrap font-body text-xl font-medium tracking-tight text-foreground-500 transition-colors duration-300 hover:text-primary-700 md:text-2xl"
            >
              {name}
              <span className="mx-10 h-1.5 w-1.5 rounded-full bg-primary-400/70 md:mx-14" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}