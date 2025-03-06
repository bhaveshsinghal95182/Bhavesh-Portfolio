'use client'

import NavHeader from '@/components/nav-header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects/projects-section';
import SkillsSection from '@/components/skills/skills-section';
import ContactSection from '@/components/contact-section';
import ThunderText from '@/components/thunder-text';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThunderText 
        text="BHAVESH SINGHAL " 
        fontSize={120}
        fontFamily='TurboType'
        textColor="#FFA500"
        thunderColor="#FFD700"
        thunderGlow="#FFD700"
      />
      <NavHeader />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}