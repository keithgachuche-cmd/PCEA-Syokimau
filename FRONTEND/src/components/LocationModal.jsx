import { useEffect, useRef, useState } from "react";

const PLACE = {
  lat: -1.3699318,
  lng: 36.9341911,
};

const embedUrl = `https://maps.google.com/maps?q=${PLACE.lat},${PLACE.lng}&z=16&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${PLACE.lat},${PLACE.lng}`;
// Opens the church's own Google Maps listing (photos, reviews, details)
const viewUrl =
  "https://www.google.com/maps/place/PCEA+Church+Syokimau/@-1.3699318,36.9341911,18z";

function PinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

// A button that opens a popup with the map and directions.
export default function LocationModal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // stop the page scrolling behind
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      // Keep keyboard focus inside the popup
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll("a[href], button");
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus(); // give focus back to the button
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
      >
        <PinIcon />
        Click to see the location
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-title"
            onClick={(e) => e.stopPropagation()}
            className="msg-in max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white bg-white text-navy shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-6 pb-4">
              <div>
                <h2 id="location-title" className="text-2xl text-navy">
                  Find your way to church
                </h2>
                <p className="mt-1 text-muted">
                  P.C.E.A Syokimau Church, Syokimau, Katani Road, Machakos County
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close map"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9d6f5] text-lg text-navy transition hover:bg-navy/10"
              >
                ✕
              </button>
            </div>

            {/* Map */}
            <iframe
              title="Map showing the location of P.C.E.A Syokimau Church"
              src={embedUrl}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[300px] w-full border-0 sm:h-[380px]"
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 p-6">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shine rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
              >
                Get directions
              </a>
              <a
                href={viewUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d9d6f5] px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-navy/10"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}