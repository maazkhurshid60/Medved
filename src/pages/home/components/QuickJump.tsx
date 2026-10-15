import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { quickJumpCards } from "@/mocks/home";

export default function QuickJump() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="01"
          label="Start Here"
          title="Where would you like to begin?"
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quickJumpCards.map((card, index) => (
            <Reveal key={card.title} index={index} step={130} y={40} className="h-full">
              <Link
                to={card.to}
                className="group relative block h-full cursor-pointer overflow-hidden rounded-[28px] border border-foreground-950/8"
              >
                <div className="aspect-[3/4] w-full">
                  <img
                    src={card.image}
                    alt={`${card.title} — Team Medved Los Angeles real estate`}
                    title={`${card.title} — Team Medved`}
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>

                <div className="glass-dark-strong absolute inset-x-3 bottom-3 rounded-2xl p-5 md:p-6">
                  <span className="block h-px w-10 bg-background-50/40" aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-2xl leading-tight text-background-50">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-background-50/75">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 btn-label text-background-50 transition-colors group-hover:text-primary-300">
                    {card.cta}
                    <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}