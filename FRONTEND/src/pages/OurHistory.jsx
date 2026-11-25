import PageBanner from "../components/PageBanner";
import AboutNav from "../components/AboutNav";
import { history } from "../data/history";

const card =
  "rounded-[28px] border border-white bg-white/75 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur";

export default function OurHistory() {
  return (
    <>
      <PageBanner
        title="Our History"
        subtitle="How P.C.E.A Syokimau Church has grown by God's grace."
      />
      <AboutNav />

      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-3xl">
          {history.length === 0 ? (
            <div className={`${card} p-8 text-center`}>
              <p className="text-muted">
                Our church history is being put together and will be shared here soon.
              </p>
            </div>
          ) : (
            <ol className="space-y-5 border-l-2 border-[#d9d6f5] pl-6">
              {history.map((h, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-white bg-indigo-brand" />
                  <article className={`${card} p-6`}>
                    {h.year && (
                      <p className="text-sm font-semibold text-coral-dark">{h.year}</p>
                    )}
                    {h.title && <h3 className="text-lg text-navy">{h.title}</h3>}
                    {h.text && <p className="mt-1 text-muted">{h.text}</p>}
                  </article>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </>
  );
}