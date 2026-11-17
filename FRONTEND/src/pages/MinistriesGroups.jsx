import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

// Edit this list to change what shows on the page.
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
      <PageBanner
        title="Ministries & Groups"
        subtitle="There is a place for everyone in our church family."
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <article
                key={m.name}
                className="flex items-start gap-4 rounded-[28px] border border-white bg-white/75 p-6 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(60,40,160,0.16)]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eceaff] font-serif text-xl font-bold text-indigo-brand">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg text-navy">{m.name}</h3>
                  {m.full && <p className="text-sm text-muted">{m.full}</p>}
                  {m.note && <p className="mt-1 text-sm text-muted">{m.note}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted">
              Would you like to join a ministry or group?
            </p>
            <Link
              to="/#contact"
              className="inline-block rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}