import { Link } from "react-router-dom";

const cards = [
  {
    icon: "✦",
    title: "Our Motto",
    text: "To worship God and care for humanity in obedience to the Great Commission.",
  },
  {
    icon: "✚",
    title: "Our Mission",
    text: "To see people redeemed, healed, spiritually equipped and empowered to serve God through Evangelism and Discipleship.",
  },
  {
    icon: "◉",
    title: "Our Vision",
    text: "To become a diverse community of Christians that glorifies God and evangelizes Christ across all nations.",
  },
];

const values = [
  "Love",
  "Faithfulness",
  "Joy",
  "Peace",
  "Patience",
  "Kindness",
  "Goodness",
  "Holiness",
  "Self-Control",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-coral-dark">
            About us
          </p>
          <h2 className="text-3xl text-navy md:text-4xl">
            A community that worships, cares and serves
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-[#f0ece5] bg-white p-7 shadow-[0_10px_30px_rgba(20,18,74,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-coral/10 text-xl text-coral">
                {c.icon}
              </div>
              <h3 className="mb-2 text-xl text-navy">{c.title}</h3>
              <p className="text-[0.97rem] text-muted">{c.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-xl text-navy">Our Values</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {values.map((v) => (
              <li
                key={v}
                className="rounded-full border border-[#eadfce] bg-cream px-5 py-2 font-medium text-navy"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { to: "/about/history", label: "Our History" },
            { to: "/about/structure", label: "Management Structure" },
            { to: "/about/leaders", label: "Church Leaders" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}