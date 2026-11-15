import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";

// Put each page's real link in "url". Cards with an empty url show "Link coming soon".
const platforms = [
  {
    name: "Facebook",
    handle: "PCEA Syokimau Church",
    blurb: "Church news, events and photos.",
    icon: FaFacebookF,
    color: "#1877F2",
    url: "",
  },
  {
    name: "YouTube",
    handle: "PCEA Syokimau Church",
    blurb: "Watch our services and sermons.",
    icon: FaYoutube,
    color: "#FF0000",
    url: "",
  },
  {
    name: "Instagram",
    blurb: "Moments from our church life.",
    icon: FaInstagram,
    color: "#E4405F",
    url: "",
  },
  {
    name: "X (Twitter)",
    blurb: "Updates and announcements.",
    icon: FaXTwitter,
    color: "#111111",
    url: "",
  },
  {
    name: "Pinterest",
    blurb: "Inspiration and church themes.",
    icon: FaPinterestP,
    color: "#E60023",
    url: "",
  },
];

export default function SocialMedia() {
  return (
    <>
      {/* Page banner */}
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h1 className="text-4xl md:text-5xl">Social Media</h1>
          <p className="mt-3 opacity-80">
            Follow P.C.E.A Syokimau and stay connected wherever you are.
          </p>
        </div>
      </section>

      {/* Platform cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => {
              const Icon = p.icon;
              const hasLink = Boolean(p.url);
              const Tag = hasLink ? "a" : "div";
              const linkProps = hasLink
                ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Tag
                  key={p.name}
                  {...linkProps}
                  className={`flex items-center gap-5 rounded-2xl border border-[#f0ece5] bg-white p-6 shadow-[0_10px_30px_rgba(20,18,74,0.08)] transition ${
                    hasLink
                      ? "hover:-translate-y-1 hover:shadow-xl"
                      : "opacity-70"
                  }`}
                >
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-navy">
                      {p.name}
                    </span>
                    {p.handle && (
                      <span className="block text-sm text-muted">
                        {p.handle}
                      </span>
                    )}
                    <span className="block text-sm text-muted">{p.blurb}</span>
                    <span
                      className={`mt-1 block text-sm font-semibold ${
                        hasLink ? "text-coral-dark" : "text-muted"
                      }`}
                    >
                      {hasLink ? "Visit page →" : "Link coming soon"}
                    </span>
                  </span>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}