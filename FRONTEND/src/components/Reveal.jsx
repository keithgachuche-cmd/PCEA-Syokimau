import { useEffect, useRef, useState } from "react";

// Fades and slides its children into view the first time they scroll on screen.
//
//   as       element to render (default "div")
//   delay    milliseconds to wait before animating, used to stagger a row of cards
//   variant  "up" (default), "fade" or "zoom"
//
// The animation styles live in index.css (.reveal), and are switched off
// automatically for visitors who prefer reduced motion.
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Very old browsers: just show the content
    if (!("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect(); // animate only once
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "fade" ? "reveal-fade" : variant === "zoom" ? "reveal-zoom" : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}