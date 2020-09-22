import React, { useMemo } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Spring } from 'react-spring/renderprops';
import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import { getRandomInt, LORUM_IPSUM, LORUM_IPSUM_MEDIUM } from '../../../util/util';
import VisibilitySensor from 'react-visibility-sensor';
import LaptopImage from '../../../image-components/laptop.image';
import { css } from '@emotion/core';

const Skill = ({ name, style = {}, flip = false }) => {
  const textDirection = !flip ? 'text-left' : 'text-right';
  const titleDirection = flip ? 'text-left' : 'text-right';

  const items = [
      <h3 className={`${titleDirection} text-2xl py-3 font-bold flex-1`}>{name}</h3>,
    <p className={`${textDirection}`}>{LORUM_IPSUM_MEDIUM}</p>
  ];


  return (
    <div className={`text-white grid grid-cols-2 gap-5 items-center py-10`}>
      { flip ? [...items].reverse() : items }
    </div>
  );
};

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
    <Section id="skills" className="font-white bg-maio-blue text-cente mb-10">

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="relative">
            <Parallax y={[-6, 20]}>
            <LaptopImage css={css`
              height: 1100px;
            `}>
              </LaptopImage>
            </Parallax>
            <div className="absolute top-0 mt-10">
            <ContentWrapper>
              <h2 className="text-3xl text-white text-left font-bold mb-4 text-center">Our areas of expertise</h2>
            </ContentWrapper>
            <Spring
              delay={200}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateY(100px)',
              }}
            >
              {style => (

                  <ContentWrapper style={style} className="block flex flex-col justify-evenly">
                    {skillProps.map(({ parallax, skill }, index) => (
                      <Skill name={skill} flip={index % 2 === 1}/>
                    ))}
                  </ContentWrapper>
              )}
              
            </Spring>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </Section>
  );
};

export default SkillsSection;
