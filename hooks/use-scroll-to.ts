"use client";

export function useScrollTo() {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return scrollTo;
}
