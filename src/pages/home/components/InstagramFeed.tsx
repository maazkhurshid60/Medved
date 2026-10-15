import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { instagramPosts } from "@/mocks/home";
import ButtonLabel from "@/components/base/ButtonLabel";

const tileSpans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1 lg:col-span-1",
];

export default function InstagramFeed() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="07"
            label="Follow Our Journey"
            title="@team_medved"
            description="New listings, neighborhood stories, and behind-the-scenes moments from across Los Angeles — fresh on the feed every week."
            className="max-w-xl"
          />

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-6">
              <div>
                <p className="font-heading text-2xl font-medium text-foreground-950">12.4K</p>
                <p className="mt-1 font-label text-[9px] text-foreground-600">Followers</p>
              </div>
              <span className="h-10 w-px bg-foreground-950/15" aria-hidden="true" />
              <div>
                <p className="font-heading text-2xl font-medium text-foreground-950">890</p>
                <p className="mt-1 font-label text-[9px] text-foreground-600">Posts</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/team_medved/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="glass btn inline-flex items-center gap-2 whitespace-nowrap px-7 py-3.5 btn-label text-foreground-900 hover:text-primary-700"
            >
              <ButtonLabel>Follow Us</ButtonLabel>
              <i className="ri-instagram-line text-base" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:gap-4 lg:auto-rows-[230px] lg:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <Reveal
              key={post.image}
              index={index}
              step={90}
              y={34}
              className={`${tileSpans[index]}`}
            >
              <a
                href="https://www.instagram.com/team_medved/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={`${post.caption} — ${post.location}`}
                className="group relative block h-full w-full overflow-hidden rounded-[24px] border border-foreground-950/8"
              >
                <img
                  src={post.image}
                  alt={`${post.caption} in ${post.location} by Team Medved`}
                  title={`Team Medved — ${post.location}`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <span className="glass-dark absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-background-50 transition-colors duration-300 group-hover:bg-none group-hover:bg-primary-500 group-hover:text-background-50">
                  <i className="ri-instagram-line text-base" />
                </span>

                <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-2xl p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 glass-dark">
                  <span className="flex items-center gap-1.5 font-label text-[9px] text-background-50/85">
                    <i className="ri-map-pin-2-line text-sm" />
                    {post.location}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-snug text-background-50 md:text-base">
                    {post.caption}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs text-background-50/80">
                    <i className="ri-heart-3-fill text-sm text-primary-300" />
                    {post.likes}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}