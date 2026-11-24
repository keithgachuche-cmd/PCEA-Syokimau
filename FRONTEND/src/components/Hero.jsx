import { useEffect, useState } from "react";

const slides = [
  { src: "/church-1.webp", alt: "P.C.E.A Syokimau church building" },
  { src: "/church-2.webp", alt: "The congregation gathered for worship" },
  { src: "/church-3.webp", alt: "Inside the church sanctuary" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 6 seconds (the timer restarts after a manual change)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, [index, paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="top" className="mx-auto w-[92%] max-w-6xl pb-10 pt-6">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Photos of our church"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        className="relative isolate flex min-h-[560px] flex-col justify-end overflow-hidden rounded-[36px] border border-white/20 bg-[#0d0b2b] shadow-[0_24px_70px_rgba(26,23,64,0.35)] md:min-h-[600px]"
      >
        {/* Photos cross-fade behind everything */}
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={i !== index}
            className={`kb-img absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "is-active opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark gradient so the white text is always readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d0b2b] via-[#0d0b2b]/75 to-[#0d0b2b]/30 md:via-[#0d0b2b]/60 md:to-[#0d0b2b]/10"
        />

        {/* Slide controls, top right */}
        <div className="absolute right-4 top-4 flex items-center gap-2 sm:right-6 sm:top-6">
          <div className="flex gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="grid h-10 w-10 place-items-center rounded-full bg-black/30 text-xl text-white backdrop-blur transition hover:bg-black/50"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="grid h-10 w-10 place-items-center rounded-full bg-black/30 text-xl text-white backdrop-blur transition hover:bg-black/50"
          >
            ›
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-end gap-8 p-6 pt-20 text-white sm:p-10 sm:pt-24 lg:grid-cols-12 lg:p-14">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Welcome to
            </p>
            <h1 className="mt-3 text-4xl text-white sm:text-5xl md:text-6xl">
              P.C.E.A Syokimau{" "}
              <span className="bg-gradient-to-r from-[#a5b4fc] to-[#ff8a70] bg-clip-text text-transparent">
                Church
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              “God is light; in him there is no darkness.”{" "}
              <span className="font-semibold text-[#ff8a70]">1 John 1:5</span>
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#services"
                className="btn-shine rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
              >
                Join us this Sunday
              </a>
              <a
                href="#sermons"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Watch sermons
              </a>
            </div>
          </div>

          {/* This Sunday glass card */}
          <div className="min-w-0 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              This Sunday
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 lg:block">
              <div>
                <p className="font-serif text-3xl font-bold leading-none sm:text-4xl">8:30am</p>
                <p className="mt-1.5 text-sm text-white/85">English Service</p>
              </div>
              <div className="lg:mt-5">
                <p className="font-serif text-3xl font-bold leading-none sm:text-4xl">10:30am</p>
                <p className="mt-1.5 text-sm text-white/85">Kiswahili and Youth Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}