"use client";

import { useState, useEffect } from "react";

const stackWords = ["MongoDB", "Express.js", "React.js", "Node.js", "GenAI", "Rust", "Python", "django"];

export function useStackHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stackWords.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return stackWords[currentIndex];
}
