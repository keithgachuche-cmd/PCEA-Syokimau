import { Link, useLocation } from "react-router-dom";

const tabs = [
  { to: "/about/history", label: "Our History" },
  { to: "/about/structure", label: "Management Structure" },
  { to: "/about/leaders", label: "Church Leaders" },
  { to: "/services-districts", label: "News & Events" },
  { to: "/#sermons", label: "Sermons" },
];

// Pill tabs shown at the top of the About Us pages (same look as the
// Services & Districts tabs).
export default function AboutNav() {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto mt-6 w-[92%] max-w-6xl">
      <nav
        aria-label="About us"
        className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-[28px] border border-white bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(60,40,160,0.1)] backdrop-blur"
      >
        {tabs.map((t) => {
          const active = pathname === t.to;
          return (
            <Link
              key={t.to}
              to={t.to}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active
                  ? "bg-gradient-to-r from-indigo-brand to-violet-brand text-white shadow-md shadow-indigo-500/30"
                  : "text-muted hover:text-navy"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}