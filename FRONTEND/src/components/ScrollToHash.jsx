import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Stop the browser from restoring an old scroll position on reload
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    // "instant" so it doesn't glide slowly (the site uses smooth scrolling)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}