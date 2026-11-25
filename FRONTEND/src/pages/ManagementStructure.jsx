import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import AboutNav from "../components/AboutNav";
import { districts } from "../data/districts";
import { ministries } from "../data/ministries";

const card =
  "rounded-[28px] border border-white bg-white/75 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur";
const chip =
  "rounded-2xl border border-white bg-white/75 px-4 py-3 text-center font-semibold text-navy shadow-[0_8px_24px_rgba(60,40,160,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(60,40,160,0.16)]";

export default function ManagementStructure() {
  return (
    <>
      <PageBanner
        title="Management Structure"
        subtitle="How our church is organised and led."
      />
      <AboutNav />

      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          {/* Top */}
          <div className={`mx-auto max-w-xl ${card} p-7 text-center`}>
            <h2 className="text-2xl text-navy">P.C.E.A Syokimau Church</h2>
            <p className="mt-2 text-muted">Led by the Parish Minister and the church leadership.</p>
            <Link
              to="/about/leaders"
              className="mt-4 inline-block font-semibold text-indigo-brand hover:underline"
            >
              Meet our church leaders →
            </Link>
          </div>

          {/* Districts */}
          <h2 className="mb-6 mt-14 text-center text-3xl text-navy">Districts</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((d) => (
              <Link key={d.slug} to={`/services-districts/${d.slug}`} className={chip}>
                {d.name} District
              </Link>
            ))}
          </div>

          {/* Ministries */}
          <h2 className="mb-6 mt-14 text-center text-3xl text-navy">Ministries &amp; Groups</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <Link key={m.slug} to={`/ministries-groups/${m.slug}`} className={chip}>
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}