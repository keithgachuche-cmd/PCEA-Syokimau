import { Link } from "react-router-dom";

// Edit this list to change what shows on the page.
// "full" is the spelled-out name under an abbreviation; "note" is an optional extra line.
const ministries = [
  {
    name: "Women's Guild",
    note: "Prayers and fellowship every Tuesday, 6:00 PM at the church.",
  },
  { name: "PCMF", full: "Presbyterian Church Men's Fellowship" },
  { name: "Church School" },
  { name: "Brigade" },
  { name: "Youth" },
  { name: "Evangelism" },
  { name: "Christian Education" },
  { name: "JPRC", full: "Justice, Peace and Reconciliation Committee" },
  { name: "Health Board" },
  {
    name: "Choir",
    note: "Practice every Monday and Friday, 6:00 PM at the church.",
  },
  { name: "Development" },
  { name: "IT, Media & Communication" },
  { name: "TEE", full: "Theological Education by Extension" },
];

export default function MinistriesGroups() {
  return (
    <>
      {/* Page banner */}
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h1 className="text-4xl md:text-5xl">Ministries &amp; Groups</h1>
          <p className="mt-3 opacity-80">
            There is a place for everyone in our church family.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <article
                key={m.name}
                className="flex items-start gap-4 rounded-2xl border border-[#f0ece5] bg-white p-5 shadow-[0_10px_30px_rgba(20,18,74,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-coral/10 font-serif text-xl font-semibold text-coral">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{m.name}</h3>
                  {m.full && (
                    <p className="text-sm text-muted">{m.full}</p>
                  )}
                  {m.note && (
                    <p className="mt-1 text-sm text-muted">{m.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="mb-4 text-muted">
              Would you like to join a ministry or group?
            </p>
            <Link
              to="/#contact"
              className="inline-block rounded-full bg-coral px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}