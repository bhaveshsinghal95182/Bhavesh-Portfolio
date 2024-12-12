"use client";

import { useState, useEffect } from "react";

const words = [
  "Performance",
  "Scalability",
  "Innovation",
  "Excellence",
  "Reliability",
  "Security",
  "Efficiency",
  "Architecture",
];

export function useTypewriter() {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const word = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentWord(word.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);

        if (currentIndex === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentWord(word.substring(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);

        if (currentIndex === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, wordIndex]);

  return currentWord;
}
