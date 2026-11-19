import { socials } from "../data/socials";

const youtube = socials.find((s) => s.key === "youtube");

export default function Sermons() {
  return (
    <section id="sermons" className="py-10 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="relative overflow-hidden rounded-[36px] border border-white bg-white/75 p-8 shadow-[0_20px_60px_rgba(60,40,160,0.12)] backdrop-blur md:p-12">
          <h2 className="text-3xl text-navy md:text-4xl">Missed a service?</h2>
          <p className="mt-3 max-w-xl text-muted">
            Watch our services and sermons on YouTube, whenever and wherever
            suits you.
          </p>
          {youtube?.url ? (
            <a
              href={youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Watch on YouTube
            </a>
          ) : (
            <p className="mt-6 font-semibold text-muted">Link coming soon</p>
          )}
        </div>
      </div>
    </section>
  );
}