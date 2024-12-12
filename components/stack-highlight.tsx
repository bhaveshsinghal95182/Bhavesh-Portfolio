"use client";

import { useStackHighlight } from "@/hooks/use-stack-highlight";

export function StackHighlight() {
  const word = useStackHighlight();

  return (
    <span
      className="inline-block min-w-[100px] text-center transition-all duration-500
        bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent font-bold
        relative after:absolute after:bottom-0 after:left-0 after:w-full
        after:h-[2px] after:bg-gradient-to-r after:from-violet-400 after:to-purple-500 after:opacity-50"
    >
      {word}
    </span>
  );
}
