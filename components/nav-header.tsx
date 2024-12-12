"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled, hidden } = useScroll();

  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 w-fit z-50 transition-all duration-300",
        "mt-4",
        hidden && "translate-y-[-100%] opacity-0",
        scrolled ? "mt-2" : "mt-4"
      )}
    >
      <nav
        className={cn(
          "relative px-6 py-3 rounded-full border bg-background/95 backdrop-blur-sm shadow-lg",
          "transition-all duration-300",
          scrolled && "shadow-md"
        )}
      >
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* Mobile Navigation */}
          <NavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} isMobile />
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
