"use client";

import { useEffect } from "react";

// Reveals .reveal elements as they enter view. Everything is visible by
// default in CSS; this only adds the entrance. Belt-and-braces on purpose —
// a rescan, a scroll fallback and a hard show-all timer, so nothing can
// stay hidden if the observer misses an element.
export default function Reveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const all = () => document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    root.classList.add("js-anim");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );

    const scan = () =>
      all().forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i, 5) * 60}ms`;
        io.observe(el);
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });

    const onScroll = () =>
      all().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95 && r.bottom > 0) el.classList.add("in");
      });

    scan();
    const t1 = setTimeout(scan, 500);
    const t2 = setTimeout(() => all().forEach((el) => el.classList.add("in")), 2500);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      root.classList.remove("js-anim");
    };
  }, []);

  return null;
}
