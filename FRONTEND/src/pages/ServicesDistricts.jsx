import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { districts } from "../data/districts";

const orderOfService = [
  { name: "English Service", time: "8:30am – 10:30am" },
  { name: "Kiswahili Service", time: "10:30am – 12:30pm" },
  { name: "Youth Service", time: "10:30am – 12:30pm" },
  { name: "Church School", time: "11:00am – 12:30pm" },
];

const news = [
  {
    title: "Choir Practice",
    text: "Choir practice every Monday and Friday, 6:00 PM at the church.",
  },
  {
    title: "Women's Guild Prayers & Fellowship",
    text: "Every Tuesday, 6:00 PM at the church.",
  },
  {
    title: "Parish Office",
    text: "The Parish Office at Embakasi church is open on Wednesdays from 9:00 AM – 4:00 PM. The Parish Minister is available on other days by appointment.",
  },
];

const tabs = ["Order of Service", "Districts"];

const card =
  "rounded-[28px] border border-white bg-white/75 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur";

export default function ServicesDistricts() {
  const [params] = useSearchParams();
  const [active, setActive] = useState(params.get("tab") === "districts" ? 1 : 0);

  return (
    <>
      <PageBanner
        title="Services & Districts"
        subtitle="Find our service times and the districts of our church."
      />

      {/* Tabs */}
      <div className="mx-auto mt-6 w-[92%] max-w-6xl">
        <div
          role="tablist"
          className="mx-auto flex w-fit gap-2 rounded-full border border-white bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(60,40,160,0.1)] backdrop-blur"
        >
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                i === active
                  ? "bg-gradient-to-r from-indigo-brand to-violet-brand text-white shadow-md shadow-indigo-500/30"
                  : "text-muted hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          {active === 0 ? (
            <>
              <h2 className="mb-6 text-center text-3xl text-navy">
                Order of Service
              </h2>
              <div className={`mx-auto max-w-xl divide-y divide-[#e6e3fa] ${card}`}>
                {orderOfService.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between gap-4 px-6 py-4"
                  >
                    <span className="font-semibold text-navy">{s.name}</span>
                    <span className="text-muted">{s.time}</span>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-14 text-center text-3xl text-navy">
                News &amp; Events
              </h2>
              <div className="grid gap-5 md:grid-cols-3">
                {news.map((n) => (
                  <article key={n.title} className={`${card} p-7`}>
                    <h3 className="mb-2 text-lg text-coral-dark">{n.title}</h3>
                    <p className="text-[0.97rem] text-muted">{n.text}</p>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="mb-8 text-center text-3xl text-navy">
                Our Districts
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {districts.map((d, i) => (
                  <Link
                    key={d.slug}
                    to={`/services-districts/${d.slug}`}
                    className={`${card} flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(60,40,160,0.16)]`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eceaff] font-serif font-bold text-indigo-brand">
                      {i + 1}
                    </span>
                    <span className="text-lg font-semibold text-navy">
                      {d.name} District
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}