import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import PageBanner from "../components/PageBanner";

// Put each page's real link in "url". Cards with an empty url show "Link coming soon".
const platforms = [
  { name: "Facebook", handle: "PCEA Syokimau Church", blurb: "Church news, events and photos.", icon: FaFacebookF, color: "#1877F2", url: "" },
  { name: "YouTube", handle: "PCEA Syokimau Church", blurb: "Watch our services and sermons.", icon: FaYoutube, color: "#E02424", url: "" },
  { name: "Instagram", blurb: "Moments from our church life.", icon: FaInstagram, color: "#D6336C", url: "" },
  { name: "X (Twitter)", blurb: "Updates and announcements.", icon: FaXTwitter, color: "#111111", url: "" },
  { name: "Pinterest", blurb: "Inspiration and church themes.", icon: FaPinterestP, color: "#E60023", url: "" },
];

export default function SocialMedia() {
  return (
    <>
      <PageBanner
        title="Social Media"
        subtitle="Follow P.C.E.A Syokimau and stay connected wherever you are."
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  className={`flex items-center gap-5 rounded-[28px] border border-white bg-white/75 p-6 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur transition ${
                    hasLink
                      ? "hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(60,40,160,0.16)]"
                      : "opacity-75"
                  }`}
                >
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    <Icon />
                  </span>
                  <span>
                    <span className="block font-serif text-lg font-bold text-navy">
                      {p.name}
                    </span>
                    {p.handle && (
                      <span className="block text-sm text-muted">{p.handle}</span>
                    )}
                    <span className="block text-sm text-muted">{p.blurb}</span>
                    <span
                      className={`mt-1 block text-sm font-semibold ${
                        hasLink ? "text-indigo-brand" : "text-muted"
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