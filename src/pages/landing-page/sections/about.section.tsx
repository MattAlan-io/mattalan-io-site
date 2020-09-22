import React, { useMemo } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Spring } from 'react-spring/renderprops';
import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import {  LORUM_IPSUM } from '../../../util/util';
import VisibilitySensor from 'react-visibility-sensor';

const AboutSection = () => {
  return (
    <Section id="about" className="font-white bg-maio-blue">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {style => (
              <ContentWrapper style={style}>
                <div className="flex-col items-right">
                <h2 className=" text-4xl font-bold text-white text-right mb-6">
                    We execute software projects
                    the right way.
                  </h2>
                  <p className=" text-white text-right">{LORUM_IPSUM}</p>
     
                </div>
              </ContentWrapper>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </Section>
  );
};

export default AboutSection;
