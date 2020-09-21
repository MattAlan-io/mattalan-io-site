import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import VisibilitySensor from 'react-visibility-sensor';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import Image from '../components/logo';
import SEO from '../components/seo';

import MDImage from '../images/md.png';
import { Spring, config } from 'react-spring/renderprops-universal';
import { DeviceWidth, useDeviceSize, byDeviceWidth } from '../hooks/useDeviceSize';

const Sections = {
  about: 'about',
  founders: 'founders',
  skills: 'skills',
};

const Section = ({ children, className, id }) => (
  <section id={id} className={className}>
    {children}
  </section>
);

const Content = ({ center = false, children, style = {} }) => {
  return (
    <div
      style={{
        ...(center && { textAlign: 'center' }),
        maxWidth: '960px',
        margin: 'auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ children }) => <div className="inline-block pa-10">{children}</div>;

const Founder = ({ name, imageSrc }) => (
  <Card>
    <img src={imageSrc} style={{ borderRadius: '50%', maxWidth: '150px', display: 'block' }} />
    <p>{name}</p>
  </Card>
);

const Skill = ({ name, style = {} }) => (
  <Card style={style}>
    <h3>{name}</h3>
  </Card>
);

const AboutSection = () => {
  const [deviceWidth] = useDeviceSize();
  const interpolate = byDeviceWidth(deviceWidth);

  return (
    <Section id={Sections.about} className="bg-maio-grey text-white">
      <Content>
        <h1>MattAlan.io</h1>
        <div>
          <Image />
          <h1>A digital force to be reckoned with.</h1>
          <p>With years of FTSE 100 & 250 experience.</p>
        </div>
      </Content>
    </Section>
  );
};

const FoundersSection = () => {
  const [deviceWidth] = useDeviceSize();
  const interpolate = byDeviceWidth(deviceWidth);

  return (
    <Section id={Sections.founders} className="text-black bg-white pt-10">
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
            }}
          >
            {style => (
              <Content center style={style}>
                <h1>Founders</h1>
                <Founder name="Matt" imageSrc={MDImage} />
                <Founder name="Alan" imageSrc={MDImage} />
              </Content>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </Section>
  );
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SkillsSection = () => {
  const skills = ['Project Management', 'Web Development', 'Dev Ops', 'Cloud Infrastructure', 'Database Design'];

  const getRandomOffsets = () => ({
    // x: [getRandomInt(-50, 50), getRandomInt(-50, 50)],
    x: [getRandomInt(-100, 0), getRandomInt(0, 100)],
  });

  const getRandomScaleProps = () => {
    const scale = getRandomInt(1, 10);
    const xTransformBound = 100 * (1 / scale);
    const x = [getRandomInt(-1 * xTransformBound, 0), getRandomInt(0, xTransformBound)];

    return {
      color: 'transparent',
      textShadow: '0 0 5px rgba(0,0,0,0.5)',
      x,
      transform: `scale(${scale})`,
    };
  };

  const skillProps = useMemo(
    () =>
      skills.map(skill => ({
        parallax: getRandomScaleProps(),
        skill,
      })),
    []
  );

  return (
    <Section id={Sections.skills} className="font-white bg-maio-blue">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateY(100px)',
            }}
          >
            {style => (
              <Content center style={style}>
                <h1>Skills</h1>
                {skillProps.map(({ parallax, skill }) => (
                  <Parallax key={skill} {...parallax}>
                    <Skill name={skill} />
                  </Parallax>
                ))}
              </Content>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </Section>
  );
};

const Background = ({ children }) => (
  <div className="inset-0 bg-maio-grey absolute">
    {children}
  </div>
);

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Background>
          <SEO title="Home" />

          <Parallax y={[0, 0]}>
            <AboutSection />
          </Parallax>

          <SkillsSection />

          <Parallax y={[100, 200]}>
            <FoundersSection />
          </Parallax>
      </Background>
    </ParallaxProvider>
  );
};

export default IndexPage;
