import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/#about", label: "About" },
  { to: "/ministries-groups", label: "Ministries & Groups" },
  { to: "/services-districts", label: "Services & Districts" },
  { to: "/#sermons", label: "Sermons" },
  { to: "/social-media", label: "Social Media" },
  { to: "/#give", label: "Give" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white bg-white/70 px-5 shadow-[0_8px_30px_rgba(60,40,160,0.1)] backdrop-blur-xl">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-serif text-lg font-bold text-navy"
        >
          <img src="/logo.png" alt="" className="h-9 w-auto" />
          <span>P.C.E.A Syokimau</span>
        </Link>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-navy"></span>
          <span className="block h-0.5 w-6 bg-navy"></span>
          <span className="block h-0.5 w-6 bg-navy"></span>
        </button>

        <nav
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col items-stretch gap-1 rounded-3xl border border-white bg-white/95 p-4 shadow-[0_20px_50px_rgba(60,40,160,0.15)] backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-[#eceaff] hover:text-navy lg:px-0 lg:py-0 lg:hover:bg-transparent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-brand lg:mt-0"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}