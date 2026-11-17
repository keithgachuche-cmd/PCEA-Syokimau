// Edit the text below to change what shows in the strip
const items = [
  {
    title: "Sunday Services",
    lines: [
      "English: 8:30am – 10:30am",
      "Kiswahili: 10:30am – 12:30pm",
      "Youth: 10:30am – 12:30pm",
    ],
  },
  {
    title: "During the week",
    lines: [
      "Choir practice: Mon & Fri, 6:00 PM",
      "Women's Guild: Tue, 6:00 PM",
      "Church School: Sun, 11:00am",
    ],
  },
  {
    title: "Find us",
    lines: ["Syokimau, Katani Road", "Machakos County"],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-[92%] max-w-6xl py-5">
      <div className="grid overflow-hidden rounded-[36px] bg-navy text-white shadow-[0_20px_60px_rgba(26,23,64,0.25)] md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-b border-white/10 px-8 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <h3 className="mb-3 text-lg text-coral">{item.title}</h3>
            {item.lines.map((line) => (
              <p key={line} className="leading-7 text-white/85">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}