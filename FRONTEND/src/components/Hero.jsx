import { useEffect, useState } from "react";

const slides = ["/church-1.png", "/church-2.png", "/church-3.png"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5 seconds (the timer restarts after a manual change)
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="top" className="mx-auto w-[92%] max-w-6xl pb-10 pt-6">
      <div className="grid gap-5 lg:grid-cols-12">
        {/* Welcome card */}
        <div className="flex flex-col justify-center rounded-[36px] border border-white bg-white/75 p-8 shadow-[0_20px_60px_rgba(60,40,160,0.12)] backdrop-blur md:p-12 lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-brand">
            Welcome to
          </p>
          <h1 className="mt-3 text-4xl text-navy sm:text-5xl md:text-6xl">
            P.C.E.A Syokimau{" "}
            <span className="bg-gradient-to-r from-indigo-brand to-coral bg-clip-text text-transparent">
              Church
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted">
            “God is light; in him there is no darkness.”{" "}
            <span className="font-semibold text-coral-dark">1 John 1:5</span>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Join us this Sunday
            </a>
            <a
              href="#sermons"
              className="rounded-full border border-[#d9d6f5] bg-white px-7 py-3.5 font-semibold text-navy transition hover:-translate-y-0.5 hover:border-indigo-brand"
            >
              Watch sermons
            </a>
          </div>
        </div>

        {/* This Sunday card */}
        <div className="flex flex-col justify-between rounded-[36px] bg-gradient-to-br from-indigo-brand via-violet-brand to-coral p-8 text-white lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            This Sunday
          </p>
          <div className="mt-10">
            <p className="font-serif text-5xl font-bold leading-none">8:30am</p>
            <p className="mt-2 opacity-90">English Service</p>
            <p className="mt-6 font-serif text-3xl font-bold leading-none">
              10:30am
            </p>
            <p className="mt-1 opacity-90">Kiswahili and Youth Service</p>
          </div>
        </div>

        {/* Photo slider */}
        <div className="relative overflow-hidden rounded-[36px] border border-white shadow-[0_20px_60px_rgba(60,40,160,0.15)] lg:col-span-12">
          <div
            className="flex aspect-[16/9] transition-transform duration-700 ease-in-out sm:aspect-[3/1]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((src) => (
              <div
                key={src}
                className="h-full w-full shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-2xl text-navy shadow backdrop-blur transition hover:bg-white"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-2xl text-navy shadow backdrop-blur transition hover:bg-white"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-indigo-brand" : "w-2.5 bg-navy/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}