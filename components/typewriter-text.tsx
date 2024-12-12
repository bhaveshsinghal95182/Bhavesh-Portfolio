"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

export function TypewriterText() {
  const word = useTypewriter();

  return (
    <span className="inline-block min-w-[120px]">
      <span className="text-blue-500">{word}</span>
      <span className="animate-pulse">|</span>
    </span>
  );
}
