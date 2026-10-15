import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import ButtonLabel from "@/components/base/ButtonLabel";
import { aboutImage } from "@/mocks/home";

interface AboutUsProps {
  onOpenContact: () => void;
}

export default function AboutUs({ onOpenContact }: AboutUsProps) {
  return (
    <section className="px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Imagery */}
          <Reveal x={-40} y={0} delay={80}>
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-foreground-950/8">
                <img
                  src={aboutImage}
                  alt="Team Medved real estate advisors Karen Medved and Julie welcoming clients in Los Angeles"
                  title="About Team Medved — Los Angeles luxury real estate"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-foreground-950 px-6 py-5 md:block">
                <p className="font-heading text-3xl font-medium leading-none text-background-50">
                  Twenty-Plus
                </p>
                <p className="mt-2 font-label text-[10px] text-background-50/70">
                  Years In Los Angeles Real Estate
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading index="03" label="About Us" title="Team Medved" />

            <Reveal y={24} delay={120}>
              <p className="mt-8 font-body text-base leading-relaxed text-foreground-700">
                Best known as well respected, top producing agents in the Lake Hollywood, Los
                Feliz, Silver Lake, Studio City, Valley Village, Sherman Oaks, Toluca Lake, and
                surrounding areas, Team Medved has closed hundreds of transactions for loyal
                clients all across Los Angeles from the hills to the beach and everywhere in
                between.
              </p>
            </Reveal>

            <Reveal y={24} delay={160}>
              <p className="mt-5 font-body text-base leading-relaxed text-foreground-700">
                Armed with a broad array of skills and experience cultivated over twenty-plus years
                of closing hundreds of transactions, they pride themselves on approaching every
                transaction as if it were their own in order to achieve the highest and best
                outcome for their clients. This tenacious commitment to achieving results is
                appreciated by clients and colleagues alike who consider Team Medved the go-to
                group for all things real estate.
              </p>
            </Reveal>

            <Reveal y={24} delay={200}>
              <p className="glass mt-8 inline-flex rounded-full px-4 py-2 font-label text-[10px] text-secondary-600">
                Karen Medved | CA DRE# 01235215
              </p>
            </Reveal>

            <Reveal y={24} delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  to="/about"
                  className="btn btn-fill inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-primary-500 px-8 py-4 btn-label text-background-50"
                >
                  <ButtonLabel>Learn More</ButtonLabel>
                  <i className="ri-arrow-right-line btn-arrow text-sm" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="link-underline cursor-pointer btn-label text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Contact Us
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}