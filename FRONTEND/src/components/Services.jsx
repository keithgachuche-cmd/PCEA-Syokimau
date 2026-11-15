// Edit the text below with the church's real service times
const items = [
  { title: "Sunday Services", lines: ["Add service times here"] },
  { title: "Midweek Fellowship", lines: ["Add day and time here"] },
  { title: "Find us", lines: ["Syokimau, Katani Road", "Machakos County"] },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy text-white">
      <div className="mx-auto grid w-[92%] max-w-6xl md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-b border-white/10 px-2 py-6 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-9 md:last:border-r-0"
          >
            <h3 className="mb-1 text-lg text-coral">{item.title}</h3>
            {item.lines.map((line) => (
              <p key={line} className="opacity-90">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}