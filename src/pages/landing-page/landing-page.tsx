import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Background from '../../components/background';
import SEO from '../../components/seo';
import AboutSection from './sections/about.section';
import ClientsSection from './sections/clients.section';
import ContactSection from './sections/contact.section';
import FoundersSection from './sections/founders.section';
import IntroSection from './sections/intro.section';
import SkillsSection from './sections/skills.section';

const LandingPage = () => {
  return (
    <div className="relative">
      <Background>
        <SEO title="Home" />

        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <FoundersSection />
        <ClientsSection />
        <ContactSection />
      </Background>
    </div>
  );
};

export default LandingPage;
