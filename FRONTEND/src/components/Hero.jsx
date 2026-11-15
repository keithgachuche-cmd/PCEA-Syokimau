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
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy text-white"
    >
      {/* Sliding photos */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
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

      {/* Dark overlay so the text stays readable */}
      <div className="absolute inset-0 bg-linear-to-r from-navy/90 to-navy/30"></div>

      {/* Text */}
      <div className="relative mx-auto w-[92%] max-w-6xl py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
            Welcome to
          </p>
          <h1 className="mb-5 text-5xl text-white md:text-7xl">
            P.C.E.A Syokimau Church
          </h1>
          <p className="mb-8 text-lg italic opacity-90">
            “God is light; in him there is no darkness.”
            <span className="ml-1.5 font-semibold not-italic text-coral">
              1 John 1:5
            </span>
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-full border-2 border-coral bg-coral px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-coral-dark hover:bg-coral-dark"
            >
              Join us this Sunday
            </a>
            <a
              href="#sermons"
              className="rounded-full border-2 border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white/15"
            >
              Watch sermons
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-2xl transition hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-2xl transition hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-coral" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}