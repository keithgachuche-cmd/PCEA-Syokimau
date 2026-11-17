import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import PageBanner from "../components/PageBanner";
import { socials } from "../data/socials";

const icons = {
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
  x: FaXTwitter,
  pinterest: FaPinterestP,
};

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
            {socials.map((p) => {
              const Icon = icons[p.key];
              const hasLink = Boolean(p.url);
              const Tag = hasLink ? "a" : "div";
              const linkProps = hasLink
                ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Tag
                  key={p.key}
                  {...linkProps}
                  className={`group flex items-center gap-5 rounded-[28px] border border-white bg-white/75 p-6 shadow-[0_16px_40px_rgba(60,40,160,0.08)] backdrop-blur transition ${
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
                  <span className="min-w-0">
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
                      {hasLink ? (
                        <>
                          Visit page{" "}
                          <span className="inline-block transition group-hover:translate-x-1">
                            →
                          </span>
                        </>
                      ) : (
                        "Link coming soon"
                      )}
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