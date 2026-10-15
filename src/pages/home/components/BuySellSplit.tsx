import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import { buySellPanels } from "@/mocks/home";

export default function BuySellSplit() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {buySellPanels.map((panel, index) => (
            <Reveal key={panel.title} index={index} step={140} y={44}>
              <Link
                to={panel.to}
                className="group relative flex h-[420px] cursor-pointer flex-col justify-end overflow-hidden rounded-[32px] border border-foreground-950/8 md:h-[520px]"
              >
                <img
                  src={panel.image}
                  alt={`${panel.title} — Team Medved Los Angeles real estate guidance`}
                  title={`${panel.title} — Team Medved`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/85 via-foreground-950/30 to-transparent" />

                <div className="relative z-10 p-5 md:p-8">
                  <div className="glass-dark rounded-2xl p-6 md:p-7">
                    <span className="block h-px w-10 bg-background-50/40" aria-hidden="true" />
                    <h3 className="mt-3 font-heading text-3xl font-medium leading-tight text-background-50 md:text-4xl">
                      {panel.title}
                    </h3>
                    <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-background-50/80">
                      {panel.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 btn-label text-background-50 transition-colors group-hover:text-primary-300">
                      {panel.cta}
                      <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}