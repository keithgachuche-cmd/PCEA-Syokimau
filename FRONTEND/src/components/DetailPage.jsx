import { Link } from "react-router-dom";
import PageBanner from "./PageBanner";

const card =
  "rounded-[28px] border border-white bg-white/75 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur";

// One page for a single ministry or district.
//   item       the entry from data/ministries.js or data/districts.js
//   title      heading shown in the banner
//   backTo     where the "Back" link goes
//   backLabel  text of the "Back" link
export default function DetailPage({ item, title, backTo, backLabel }) {
  if (!item) {
    return (
      <>
        <PageBanner title="Page not found" subtitle="We couldn't find that page." />
        <div className="py-10 text-center">
          <Link to={backTo} className="font-semibold text-indigo-brand hover:underline">
            ← {backLabel}
          </Link>
        </div>
      </>
    );
  }

  const rows = [
    ["Meeting time", item.meeting],
    ["Venue", item.venue],
    ["Leader", item.leader],
  ];

  return (
    <>
      <PageBanner title={title} subtitle={item.full || undefined} />

      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-3xl">
          <div className={`${card} p-7 md:p-9`}>
            <h2 className="mb-3 text-2xl text-navy">About</h2>
            <p className="text-muted">
              {item.description || "More details will be added soon."}
            </p>

            <dl className="mt-6 divide-y divide-[#e6e3fa]">
              {rows.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-semibold text-navy">{label}</dt>
                  <dd className="text-right text-muted">{value || "To be announced"}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={backTo}
              className="rounded-full border border-[#d9d6f5] px-6 py-3 font-semibold text-navy transition hover:bg-navy/10"
            >
              ← {backLabel}
            </Link>
            <Link
              to="/#contact"
              className="rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}