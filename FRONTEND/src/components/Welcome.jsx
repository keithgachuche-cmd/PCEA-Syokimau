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
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    setLeaving(true);
    setTimeout(() => setShow(false), 700);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden bg-[#08072a] text-white transition duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Background layer: clipped so nothing sticks out past the screen */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "clamp(36px, 4vmin, 64px) clamp(36px, 4vmin, 64px)",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="welcome-float absolute -left-[8vmax] -top-[8vmax] h-[min(60vmin,32rem)] w-[min(60vmin,32rem)] rounded-full bg-coral/30 blur-[100px]" />
        <div
          className="welcome-float absolute -bottom-[10vmax] -right-[8vmax] h-[min(70vmin,36rem)] w-[min(70vmin,36rem)] rounded-full bg-indigo-500/30 blur-[110px]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Content: everything scales with the screen size */}
      <div className="relative mx-auto flex min-h-[100dvh] w-[min(90vw,56rem)] flex-col items-center justify-center gap-[clamp(0.75rem,2.4vh,1.75rem)] py-[clamp(1.25rem,5vh,4rem)] text-center">
        <span className="welcome-up grid h-[clamp(4rem,12vmin,8rem)] w-[clamp(4rem,12vmin,8rem)] place-items-center overflow-hidden rounded-full bg-[#fff] p-[clamp(0.3rem,1vmin,0.6rem)] shadow-[0_0_60px_-10px_#6366f1]">
          <img
            src="/logo.png"
            alt="P.C.E.A Syokimau logo"
            className="h-full w-full object-contain"
          />
        </span>

        <p
          className="welcome-up inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[clamp(0.65rem,1.6vmin,0.85rem)] font-semibold uppercase tracking-[0.22em] text-[#ff8a70]"
          style={{ animationDelay: "0.15s" }}
        >
          Karibu · Welcome
        </p>

        <h1
          className="welcome-up bg-gradient-to-b from-white to-white/60 bg-clip-text text-[clamp(1.75rem,3.2vw+1rem,4.5rem)] text-transparent"
          style={{ animationDelay: "0.3s" }}
        >
          Welcome to P.C.E.A Syokimau Church
        </h1>

        <p
          className="welcome-up max-w-xl text-[clamp(0.95rem,1.2vw+0.6rem,1.35rem)] italic text-white/75"
          style={{ animationDelay: "0.45s" }}
        >
          “God is light; in him there is no darkness.”{" "}
          <span className="font-semibold not-italic text-[#ff8a70]">
            1 John 1:5
          </span>
        </p>

        {/* Hidden on very short screens (e.g. a phone held sideways) */}
        <p
          className="welcome-up max-w-xl text-[clamp(0.85rem,1vw+0.55rem,1.1rem)] text-white/70 [@media(max-height:520px)]:hidden"
          style={{ animationDelay: "0.6s" }}
        >
          We are glad you are here. Join us to worship God and care for
          humanity in obedience to the Great Commission.
        </p>

        <div
          className="welcome-up flex w-full flex-col items-center gap-2.5 text-[clamp(0.8rem,0.9vw+0.55rem,0.95rem)] min-[520px]:flex-row min-[520px]:flex-wrap min-[520px]:justify-center [@media(max-height:520px)]:hidden"
          style={{ animationDelay: "0.75s" }}
        >
          <span className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 min-[520px]:w-auto">
            Sunday 8:30am · English Service
          </span>
          <span className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 min-[520px]:w-auto">
            10:30am · Kiswahili &amp; Youth
          </span>
          <span className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 min-[520px]:w-auto">
            Syokimau, Katani Road
          </span>
        </div>

        <button
          onClick={enter}
          className="welcome-up mt-[clamp(0.25rem,1.5vh,1rem)] w-full rounded-full bg-coral px-9 py-[clamp(0.8rem,1.8vh,1.1rem)] text-[clamp(0.95rem,0.8vw+0.7rem,1.15rem)] font-semibold text-[#1a0a06] shadow-[0_0_50px_-8px_#f26b4e] transition hover:bg-[#ff8a70] min-[520px]:w-auto"
          style={{ animationDelay: "0.9s" }}
        >
          Enter our website →
        </button>
      </div>
    </div>
  );
}