import PageBanner from "../components/PageBanner";
import AboutNav from "../components/AboutNav";
import { leaders } from "../data/leaders";

const card =
  "rounded-[28px] border border-white bg-white/75 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur";

function initials(name, role) {
  const source = name || role;
  return source
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ChurchLeaders() {
  return (
    <>
      <PageBanner
        title="Church Leaders"
        subtitle="The people God has called to serve and shepherd our church family."
      />
      <AboutNav />

      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <article
                key={`${l.role}-${i}`}
                className={`${card} flex flex-col items-center p-7 text-center transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(60,40,160,0.16)]`}
              >
                {l.photo ? (
                  <img
                    src={l.photo}
                    alt={l.name || l.role}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-[#eceaff] font-serif text-2xl font-bold text-indigo-brand">
                    {initials(l.name, l.role)}
                  </div>
                )}
                <h3 className="mt-4 text-lg text-navy">{l.name || "To be added"}</h3>
                <p className="text-sm text-coral-dark">{l.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}