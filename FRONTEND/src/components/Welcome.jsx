import { useEffect, useState } from "react";

// Lives only until the page is reloaded, so a reload shows the welcome
// screen again, but moving between pages on the site does not.
let alreadyEntered = false;

export default function Welcome() {
  const [show, setShow] = useState(!alreadyEntered);
  const [leaving, setLeaving] = useState(false);

  // Stop the page behind from scrolling while the welcome screen is open
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const enter = () => {
    alreadyEntered = true;
    setLeaving(true);
    setTimeout(() => setShow(false), 700);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-y-auto bg-[#08072a] text-white transition duration-700 ${
        leaving ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
    >
      {/* Grid + glowing blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="welcome-float pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-coral/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="welcome-float pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/30 blur-[130px]"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative mx-auto flex min-h-full w-[92%] max-w-3xl flex-col items-center justify-center py-16 text-center">
        <span className="welcome-up grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-[#fff] p-2 shadow-[0_0_60px_-10px_#6366f1]">
          <img
            src="/logo.png"
            alt="P.C.E.A Syokimau logo"
            className="h-full w-full object-contain"
          />
        </span>

        <p
          className="welcome-up mt-8 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#ff8a70]"
          style={{ animationDelay: "0.15s" }}
        >
          Karibu · Welcome
        </p>

        <h1
          className="welcome-up mt-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.3s" }}
        >
          Welcome to P.C.E.A Syokimau Church
        </h1>

        <p
          className="welcome-up mt-5 max-w-xl text-lg italic text-white/75"
          style={{ animationDelay: "0.45s" }}
        >
          “God is light; in him there is no darkness.”{" "}
          <span className="font-semibold not-italic text-[#ff8a70]">
            1 John 1:5
          </span>
        </p>

        <p
          className="welcome-up mt-6 max-w-xl text-white/70"
          style={{ animationDelay: "0.6s" }}
        >
          We are glad you are here. Join us to worship God and care for
          humanity in obedience to the Great Commission.
        </p>

        <div
          className="welcome-up mt-8 flex flex-wrap justify-center gap-3 text-sm"
          style={{ animationDelay: "0.75s" }}
        >
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
            Sunday 8:30am · English Service
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
            10:30am · Kiswahili &amp; Youth
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
            Syokimau, Katani Road
          </span>
        </div>

        <button
          onClick={enter}
          autoFocus
          className="welcome-up mt-10 rounded-full bg-coral px-9 py-4 font-semibold text-[#1a0a06] shadow-[0_0_50px_-8px_#f26b4e] transition hover:-translate-y-0.5 hover:bg-[#ff8a70]"
          style={{ animationDelay: "0.9s" }}
        >
          Enter our website →
        </button>
      </div>
    </div>
  );
}