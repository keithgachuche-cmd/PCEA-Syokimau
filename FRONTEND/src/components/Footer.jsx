import { Link } from "react-router-dom";
import LocationModal from "./LocationModal";

export default function Footer() {
  return (
    <footer className="mt-10 bg-navy text-white">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-bold">P.C.E.A Syokimau Church</p>
          <p className="mt-2 text-white/75">Syokimau, Katani Road, Machakos County</p>
          <div className="mt-4">
            <LocationModal />
          </div>
        </div>
        <div>
          <p className="mb-2 font-semibold text-coral">Sunday services</p>
          <p className="text-white/75">English 8:30am</p>
          <p className="text-white/75">Kiswahili and Youth 10:30am</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-2 font-semibold text-coral">Explore</p>
          <ul className="space-y-1 text-white/75">
            <li><Link className="hover:text-white" to="/about/leaders">Our Leaders</Link></li>
            <li><Link className="hover:text-white" to="/ministries-groups">Ministries &amp; Groups</Link></li>
            <li><Link className="hover:text-white" to="/services-districts">Services &amp; Districts</Link></li>
            <li><Link className="hover:text-white" to="/social-media">Social Media</Link></li>
            <li><Link className="hover:text-white" to="/#give">Give</Link></li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} P.C.E.A Syokimau Church
      </p>
    </footer>
  );
}