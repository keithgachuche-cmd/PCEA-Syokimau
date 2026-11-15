import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/#about", label: "About" },
  { to: "/ministries-groups", label: "Ministries & Groups" },
  { to: "/services-districts", label: "Services & Districts" },
  { to: "/social-media", label: "Social Media" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-18 w-[92%] max-w-6xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-serif text-xl text-navy"
        >
          <img src="/logo.png" alt="" className="h-11 w-auto" />
          <span>
            P.C.E.A <strong>Syokimau</strong>
          </span>
        </Link>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-navy"></span>
          <span className="block h-0.5 w-6 bg-navy"></span>
          <span className="block h-0.5 w-6 bg-navy"></span>
        </button>

        <nav
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-18 flex-col items-start border-b border-gray-200 bg-white px-[4%] pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="w-full py-3 text-sm font-medium transition-colors hover:text-coral md:w-auto md:py-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-dark md:mt-0"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}