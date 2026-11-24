import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-10 md:py-16">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl text-navy md:text-4xl">Get in touch</h2>
          <p className="mt-3 text-muted">
            Questions, prayer requests, or want to join a ministry? Send us a
            message and we will get back to you.
          </p>
          <p className="mt-5 text-muted">
            Or email{" "}
            <a className="font-semibold text-indigo-brand underline" href="mailto:info@pceasyokimau.or.ke">
              info@pceasyokimau.or.ke
            </a>
          </p>
        </div>

        <form
          onSubmit={submit}
          className="space-y-4 rounded-[28px] border border-white bg-white/75 p-7 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur lg:col-span-3"
        >
          <div>
            <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-navy">Your name</label>
            <input id="c-name" className="field" required minLength={2} maxLength={100} autoComplete="name" value={form.name} onChange={update("name")} />
          </div>
          <div>
            <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-navy">Email</label>
            <input id="c-email" type="email" className="field" required autoComplete="email" value={form.email} onChange={update("email")} />
          </div>
          <div>
            <label htmlFor="c-msg" className="mb-1.5 block text-sm font-semibold text-navy">Message</label>
            <textarea id="c-msg" rows={5} className="field" required minLength={5} maxLength={2000} value={form.message} onChange={update("message")} />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-shine w-full rounded-full bg-gradient-to-r from-indigo-brand to-violet-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? (
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                />
                Sending…
              </span>
            ) : (
              "Send message"
            )}
          </button>
          <p role="status" aria-live="polite" className="min-h-6 text-sm font-semibold">
            {status === "sent" && <span className="msg-in inline-block text-emerald-600 dark:text-emerald-300">Thank you! Your message has been sent.</span>}
            {status === "error" && <span className="msg-in inline-block text-red-600 dark:text-red-300">Sorry, that did not send. Please try again or email us.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}