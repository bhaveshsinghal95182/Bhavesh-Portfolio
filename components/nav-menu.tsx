"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";

interface NavMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const navItems = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export function NavMenu({ isOpen, onClose, isMobile }: NavMenuProps) {
  const scrollTo = useScrollTo();

  const handleNavClick = (href: string) => {
    scrollTo(href);
    if (onClose) {
      onClose();
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/bhavesh-singhal.pdf";
    link.download = "developer-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuContent = (
    <>
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleNavClick(item.href)}
          className="text-muted-foreground hover:text-primary transition-colors px-4 py-2"
        >
          {item.name}
        </button>
      ))}
      <Button variant="ghost" onClick={handleDownloadCV} className="gap-2">
        <Download className="h-4 w-4" />
        CV
      </Button>
    </>
  );

  if (isMobile) {
    return isOpen ? (
      <div className="absolute top-full left-0 right-0 mt-2 py-4 bg-background/95 backdrop-blur-sm rounded-lg border shadow-lg">
        <div className="flex flex-col items-center gap-4">{menuContent}</div>
      </div>
    ) : null;
  }

  return <div className="flex items-center gap-2">{menuContent}</div>;
}
