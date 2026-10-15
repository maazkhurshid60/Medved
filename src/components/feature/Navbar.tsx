import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logos } from "@/mocks/home";
import ButtonLabel from "@/components/base/ButtonLabel";

interface NavbarProps {
  onOpenContact: () => void;
}

interface NavItem {
  label: string;
  to: string;
}

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "Properties",
    items: [
      { label: "Featured Listings", to: "/properties/sale" },
      { label: "For Leases", to: "/properties/lease" },
      { label: "Sold Listings", to: "/properties/sold" },
      { label: "Leased Properties", to: "/properties/leased" },
    ],
  },
  {
    label: "Buyers & Sellers",
    items: [
      { label: "Buyer's Guide", to: "/buyers-guide" },
      { label: "Seller's Guide", to: "/sellers-guide" },
    ],
  },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleContact = () => {
    setMenuOpen(false);
    onOpenContact();
  };

  const linkBase =
    "link-underline text-[0.9rem] font-medium text-foreground-800 transition-colors hover:text-primary-700";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
        <div
          className={`mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-full px-3 transition-all duration-500 md:h-[72px] md:px-4 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link
            to="/"
            className="flex items-center pl-2"
            aria-label="Team Medved home"
          >
            <img
              src={logos.dark}
              alt="Team Medved — Los Angeles luxury real estate"
              className="h-8 w-auto max-w-[170px] object-contain md:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <Link to="/about" className={linkBase}>
              Meet the Team
            </Link>
            <Link to="/properties/sale" className={linkBase}>
              Featured Listings
            </Link>
            <Link to="/communities" className={linkBase}>
              Neighborhoods
            </Link>
            <a href="tel:+13102664236" className={linkBase}>
              (310) 266-4236
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={handleContact}
              className="btn btn-fill hidden cursor-pointer items-center justify-center whitespace-nowrap bg-primary-500 px-6 py-3 btn-label text-background-50 md:inline-flex"
            >
              <ButtonLabel>Contact Us</ButtonLabel>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-colors hover:text-primary-700 md:h-11 md:w-11"
            >
              <i className="ri-menu-3-line text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out navigation */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 h-full w-full cursor-pointer bg-foreground-950/50 backdrop-blur-sm"
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col rounded-l-[2rem] border-l border-foreground-950/10 bg-background-50/95 backdrop-blur-xl transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-foreground-950/10 px-6 py-5">
            <img
              src={logos.dark}
              alt="Team Medved"
              className="h-8 w-auto max-w-[170px] object-contain"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground-900 transition-colors hover:text-primary-700"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar" aria-label="Sidebar">
            <span className="font-label text-[10px] text-foreground-500">Navigation</span>
            <ul className="mt-6 flex flex-col">
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/about"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Meet the Team
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/our-community"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Our Community
                </Link>
              </li>

              {navGroups.map((group) => {
                const isOpen = openGroup === group.label;
                return (
                  <li key={group.label} className="border-b border-foreground-950/10">
                    <button
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.label)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                    >
                      {group.label}
                      <i
                        className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="min-h-0 pb-3">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              className="block py-1.5 pl-4 font-body text-sm text-foreground-700 transition-colors hover:text-primary-700"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}

              <li className="border-b border-foreground-950/10">
                <Link
                  to="/communities"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Neighborhoods
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/home-valuation"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Home Valuation
                </Link>
              </li>
              <li className="border-b border-foreground-950/10">
                <Link
                  to="/testimonials"
                  className="block py-3 font-heading text-2xl text-foreground-950 transition-colors hover:text-primary-700"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>

          <div className="border-t border-foreground-950/10 px-6 py-6">
            <button
              type="button"
              onClick={handleContact}
              className="btn btn-fill flex w-full cursor-pointer items-center justify-center whitespace-nowrap bg-primary-500 px-6 py-4 btn-label text-background-50"
            >
              <ButtonLabel>Contact Us</ButtonLabel>
            </button>
            <a
              href="tel:+13102664236"
              className="mt-4 block text-center font-label text-[10px] text-secondary-600 transition-colors hover:text-primary-700"
            >
              (310) 266-4236
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}