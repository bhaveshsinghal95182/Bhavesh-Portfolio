"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Coffee, Instagram } from "lucide-react";
import { TypewriterText } from "./typewriter-text";
import { StackHighlight } from "./stack-highlight";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { socialLinks } from "@/config/social-links";

const HeroSection = () => {
  const scrollTo = useScrollTo();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse blur-xl opacity-50"></div>
            <img
              src="./photo_2024-12-11_15-24-22.jpg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-background relative z-10"
            />
          </div>
        </div>
        <div className="text-left space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl flex flex-wrap gap-1 items-center">
            Crafting modern web solutions with <StackHighlight /> for{" "}
            <TypewriterText />
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-[#0077B5] hover:bg-[#0077B5]/90">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-[#D44638] hover:bg-[#D44638]/90">
              <a
                href={`mailto:${socialLinks.email}`}
                className="transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-[#E4405F] hover:bg-[#E4405F]/90">
              <a
                href="https://www.instagram.com/descentkatil_00005/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="bg-[#FFDD00] hover:bg-[#FFDD00]/90">
              <a
                href="https://buymeacoffee.com/descentkatil"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
              >
                <Coffee className="h-5 w-5 text-black" />
              </a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="transition-all hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="transition-all hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
