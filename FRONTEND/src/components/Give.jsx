import { useState } from "react";

// Details come from BACKEND/content.json. Please confirm they are correct.
const methods = [
  {
    title: "M-Pesa",
    rows: [
      { label: "Paybill", value: "247247", copy: true },
      { label: "Account", value: "0470292646312", copy: true },
    ],
  },
  {
    title: "Bank",
    rows: [
      { label: "Bank", value: "Equity Bank" },
      { label: "Account", value: "0470292646312", copy: true },
      { label: "Name", value: "P.C.E.A Syokimau" },
    ],
  },
];

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };
  return (
    <button
      onClick={copy}
      className="rounded-full border border-[#d9d6f5] px-3 py-1 text-xs font-semibold text-navy transition hover:bg-navy/10"
      aria-label={`Copy ${value}`}
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function Give() {
  return (
    <section id="give" className="py-10 md:py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl text-navy md:text-4xl">Give</h2>
          <p className="mt-3 text-muted">
            Thank you for supporting the work of our church. Tap Copy to paste
            the details straight into M-Pesa or your banking app.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {methods.map((m) => (
            <article
              key={m.title}
              className="rounded-[28px] border border-white bg-white/75 p-7 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur"
            >
              <h3 className="mb-4 text-xl text-navy">{m.title}</h3>
              <dl className="divide-y divide-[#e6e3fa]">
                {m.rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-sm text-muted">{r.label}</dt>
                    <dd className="flex items-center gap-3 font-semibold text-navy">
                      {r.value}
                      {r.copy && <CopyButton value={r.value} />}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}