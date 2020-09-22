import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Background from '../../components/background';
import SEO from '../../components/seo';
import FoundersSection from './sections/founders.section';
import IntroSection from './sections/intro.section';
import SkillsSection from './sections/skills.section';

const LandingPage = () => {
  return (
    <div className="relative">
      <Background>
        <SEO title="Home" />

        <IntroSection />
        <SkillsSection />
        <FoundersSection />
      </Background>
    </div>
  );
};

export default LandingPage;
