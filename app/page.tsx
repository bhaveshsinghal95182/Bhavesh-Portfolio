'use client'

import NavHeader from '@/components/nav-header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects/projects-section';
import SkillsSection from '@/components/skills/skills-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavHeader />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
