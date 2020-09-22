import React, { useMemo } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Spring } from 'react-spring/renderprops';
import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import { getRandomInt, LORUM_IPSUM } from '../../../util/util';
import VisibilitySensor from 'react-visibility-sensor';

const Skill = ({ name, style = {} }) => (
  <Card>
    <h3>{name}</h3>
  </Card>
);

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
    <Section id="skills" className="font-white bg-maio-blue">
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
              <ContentWrapper style={style}>
                <div className="flex-col items-right">
                <h2 className=" text-3xl font-bold text-white text-right">
                    We execute software projects
                    <br />
                    the right way.
                  </h2>
                  <p className=" text-white text-right">{LORUM_IPSUM}</p>
     
                </div>
                {skillProps.map(({ parallax, skill }) => (
                  <Skill name={skill} />
                ))}
              </ContentWrapper>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </Section>
  );
};

export default SkillsSection;
