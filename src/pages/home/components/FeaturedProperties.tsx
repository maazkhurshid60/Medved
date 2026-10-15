import { Link } from "react-router-dom";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { featuredProperties } from "@/mocks/home";

export default function FeaturedProperties() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="02"
          label="Portfolio"
          title="Featured Properties"
          actions={
            <Link
              to="/properties/sale"
              className="link-underline hidden cursor-pointer items-center gap-2 whitespace-nowrap btn-label text-foreground-950 transition-colors hover:text-primary-700 md:inline-flex"
            >
              View All
              <i className="ri-arrow-right-line text-sm" />
            </Link>
          }
        />

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} index={index} step={110} y={40} className="h-full">
              <Link
                to={`/properties/${property.id}`}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-foreground-950/8 bg-background-50/60 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={property.image}
                    alt={`${property.name} — ${property.address} luxury home listed by Team Medved`}
                    title={`${property.name}, ${property.address}`}
                    className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="glass-dark absolute left-3 top-3 rounded-full px-3 py-1.5 font-label text-[9px] text-background-50">
                    {property.tag}
                  </span>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground-950/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100">
                    <span className="glass-dark-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 btn-label text-background-50">
                      View Property
                      <i className="ri-arrow-right-line text-sm" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-heading text-base leading-snug text-foreground-950">
                    {property.name}
                  </h3>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-foreground-600">
                    {property.address}
                    {property.meta ? ` · ${property.meta}` : ""}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <span className="glass inline-flex rounded-full px-3.5 py-1.5 font-body text-sm font-semibold text-primary-800">
                      {property.price}
                    </span>
                    <i className="ri-arrow-right-line text-foreground-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-700" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            to="/properties/sale"
            className="link-underline inline-flex cursor-pointer items-center gap-2 whitespace-nowrap btn-label text-foreground-950"
          >
            View All Properties
            <i className="ri-arrow-right-line text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}