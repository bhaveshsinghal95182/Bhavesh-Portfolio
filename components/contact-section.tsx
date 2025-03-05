"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Code,
  Terminal,
  Github,
  Instagram,
  Coffee
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/config/social-links";
import { composeEmail } from "@/lib/email";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    composeEmail(formData);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-accent/50 pt-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Let`s collaborate on your next project and build something
                amazing together.
              </p>
            </div>

            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {socialLinks.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+91 9518208482</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Gurgaon, India</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Follow Me</h3>
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
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-8" />

        <div className="pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span>with</span>
              <Terminal className="h-5 w-5 text-red-500" />
              <span>by a passionate developer</span>
            </div>
            <div className="text-sm">© {currentYear} All rights reserved</div>
          </div>
          <div className="mt-4 text-center md:text-left text-sm text-muted-foreground/80">
            Turning coffee into code, one commit at a time
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
