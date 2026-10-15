import { Link } from "react-router-dom";
import { compassLogo, logos } from "@/mocks/home";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Meet the Team", to: "/about" },
      { label: "Our Community", to: "/our-community" },
      { label: "Neighborhoods", to: "/communities" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  {
    title: "Properties",
    links: [
      { label: "Featured Listings", to: "/properties/sale" },
      { label: "For Leases", to: "/properties/lease" },
      { label: "Sold Listings", to: "/properties/sold" },
      { label: "Leased Properties", to: "/properties/leased" },
      { label: "Home Valuation", to: "/home-valuation" },
    ],
  },
  {
    title: "Buyers & Sellers",
    links: [
      { label: "Buyer's Guide", to: "/buyers-guide" },
      { label: "Seller's Guide", to: "/sellers-guide" },
      { label: "Contact Us", to: "/contact" },
      { label: "Privacy Policy", to: "/terms-and-conditions" },
    ],
  },
];

const socials = [
  { icon: "ri-facebook-fill", label: "Facebook", href: "https://www.facebook.com/karen.medved.1" },
  { icon: "ri-instagram-line", label: "Instagram", href: "https://www.instagram.com/team_medved/" },
  { icon: "ri-linkedin-fill", label: "LinkedIn", href: "https://www.linkedin.com/in/karen-medved-905ab15/" },
  { icon: "ri-compasses-2-line", label: "Compass", href: "https://www.compass.com/agents/team-medved/" },
];

export default function Footer() {
  return (
    <footer className="relative mt-4 overflow-hidden rounded-t-[2.5rem] bg-primary-950 text-background-50">
      <div className="relative px-4 py-16 md:px-10 md:py-24">
        {/* Masthead */}
        <div className="flex flex-col gap-8 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link to="/" className="inline-flex" aria-label="Team Medved home">
              <img
                src={logos.light}
                alt="Team Medved — Los Angeles luxury real estate"
                className="h-12 w-auto max-w-[200px] object-contain md:h-14"
              />
            </Link>
            <p className="mt-7 max-w-xl font-heading text-2xl font-light leading-snug text-background-50/90 md:text-3xl">
              Top producing agents across the hills, the valley, and everywhere in between.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-label text-[10px] text-background-50/50">Follow</span>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={social.label}
                className="glass-dark flex h-11 w-11 items-center justify-center rounded-full text-background-50 transition-colors hover:bg-none hover:bg-primary-500 hover:text-background-50"
              >
                <i className={`${social.icon} text-base`} />
              </a>
            ))}
          </div>
        </div>

        <div className="rule-light" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-label text-[10px] text-primary-300">Office</p>
            <address className="mt-6 flex flex-col items-start gap-3 not-italic">
              <span className="font-body text-sm leading-relaxed text-background-50/70">
                12001 Ventura Place, Ste 100
                <br />
                Studio City, CA 91604
              </span>
              <a
                href="tel:+13102664236"
                className="link-underline font-body text-sm text-background-50/70 transition-colors hover:text-background-50"
              >
                (310) 266-4236
              </a>
              <a
                href="mailto:teammedved@compass.com"
                className="link-underline font-body text-sm text-background-50/70 transition-colors hover:text-background-50"
              >
                teammedved@compass.com
              </a>
            </address>
            <p className="mt-8 font-body text-sm leading-relaxed text-background-50/60">
              Lake Hollywood · Los Feliz · Silver Lake · Studio City · Valley Village · Sherman
              Oaks · Toluca Lake
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-label text-[10px] text-background-50/50">
                <span>{column.title}</span>
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="link-underline font-body text-sm text-background-50/75 transition-colors hover:text-background-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-background-50/10 pt-10">
          <img
            src={compassLogo}
            alt="Compass"
            className="h-6 w-auto max-w-[150px] object-contain brightness-0 invert"
          />
          <p className="mt-8 font-body text-xs leading-relaxed text-background-50/55">
            <strong className="font-medium text-background-50/80">
              Karen Medved | CA DRE# 01235215
            </strong>
            <br />
            <strong className="font-medium text-background-50/80">
              Compass California, Inc. | CA DRE# 01991628
            </strong>
          </p>
          <p className="mt-4 max-w-4xl font-body text-xs leading-relaxed text-background-50/45">
            Team Medved is a team of real estate agents affiliated with Compass. Compass is a
            licensed real estate broker licensed by the state of California and abides by equal
            housing opportunity laws. All material presented herein is intended for informational
            purposes only. Information is compiled from sources deemed reliable but is subject to
            errors, omissions, changes in price, condition, sale, or withdrawal without notice. No
            statement is made as to accuracy of any description. All measurements and square
            footages are approximate. This is not intended to solicit property already listed.
            Nothing herein shall be construed as legal, accounting or other professional advice
            outside the realm of real estate brokerage.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-background-50/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-label text-[10px] text-background-50/50">
            © {new Date().getFullYear()} Team Medved
          </p>
          <Link
            to="/terms-and-conditions"
            className="link-underline font-label text-[10px] text-background-50/50 transition-colors hover:text-background-50"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}