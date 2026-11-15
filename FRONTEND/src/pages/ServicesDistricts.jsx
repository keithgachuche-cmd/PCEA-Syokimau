import { useState } from "react";

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

const districts = [
  "Central",
  "Emanuel",
  "Kanisani",
  "Airport",
  "Genesis",
  "Siloam",
  "Bethsaida",
  "Jerusalem",
  "Highway",
];

const tabs = ["Order of Service", "Districts"];

export default function ServicesDistricts() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Page banner */}
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h1 className="text-4xl md:text-5xl">Services &amp; Districts</h1>
          <p className="mt-3 opacity-80">
            Find our service times and the districts of our church.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div role="tablist" className="flex justify-center gap-3 py-4">
            {tabs.map((t, i) => (
              <button
                key={t}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-full border px-6 py-2 text-sm font-semibold transition ${
                  i === active
                    ? "border-coral bg-coral text-white"
                    : "border-gray-200 text-navy hover:border-coral hover:text-coral"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-[92%] max-w-6xl">
          {active === 0 ? (
            <>
              <h2 className="mb-6 text-center text-3xl text-navy">
                Order of Service
              </h2>
              <div className="mx-auto max-w-xl divide-y divide-gray-200 rounded-2xl border border-[#f0ece5] bg-white shadow-[0_10px_30px_rgba(20,18,74,0.08)]">
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

              <h2 className="mb-6 mt-16 text-center text-3xl text-navy">
                News &amp; Events
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {news.map((n) => (
                  <article
                    key={n.title}
                    className="rounded-2xl border border-[#f0ece5] bg-white p-7 shadow-[0_10px_30px_rgba(20,18,74,0.08)]"
                  >
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {districts.map((d, i) => (
                  <div
                    key={d}
                    className="flex items-center gap-4 rounded-2xl border border-[#f0ece5] bg-white p-5 shadow-[0_10px_30px_rgba(20,18,74,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coral/10 font-semibold text-coral">
                      {i + 1}
                    </span>
                    <span className="text-lg font-semibold text-navy">
                      {d} District
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}