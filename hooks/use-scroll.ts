"use client";

import { useState, useEffect } from "react";

export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we've scrolled past threshold
      if (currentScrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY) {
        setHidden(true); // Scrolling down
      } else {
        setHidden(false); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  return { scrolled, hidden };
}
