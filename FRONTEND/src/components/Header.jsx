import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/#about", label: "About" },
  { to: "/ministries-groups", label: "Ministries & Groups" },
  { to: "/services-districts", label: "Services & Districts" },
  { to: "/#sermons", label: "Sermons" },
  { to: "/social-media", label: "Social Media" },
  { to: "/#give", label: "Give" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const { pathname, hash } = useLocation();

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  // Highlight the link for the page (or section) the visitor is on
  const isActive = (to) => {
    const [path, h] = to.split("#");
    if (h) return pathname === "/" && hash === `#${h}`;
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white bg-white/70 px-5 shadow-[0_8px_30px_rgba(60,40,160,0.1)] backdrop-blur-xl">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-serif text-lg font-bold text-navy"
        >
          <img src="/pceaheader.png" alt="" className="h-9 w-auto" />
          <span>P.C.E.A Syokimau</span>
        </Link>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col items-stretch gap-1 rounded-3xl border border-white bg-white/95 p-4 shadow-[0_20px_50px_rgba(60,40,160,0.15)] backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((l) => {
            const active = isActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-navy/10 hover:text-navy lg:px-0 lg:py-1 lg:hover:bg-transparent ${
                  active
                    ? "text-navy lg:border-b-2 lg:border-coral"
                    : "text-muted lg:border-b-2 lg:border-transparent"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <div className="mt-2 flex items-center gap-3 lg:mt-0">
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-brand lg:flex-none"
            >
              Contact
            </Link>
            <button
              onClick={toggleDark}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#d9d6f5] text-navy transition hover:bg-navy/10"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}