import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSpring, useTrail } from 'react-spring/web';
import { animated } from 'react-spring';

import Button from '../../../components/button';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import { scrollToSection } from '../../../util/util';
import { css } from '@emotion/core';
import { Parallax } from 'react-scroll-parallax';

const config = {
  tension: 2000,
  friction: 300,
};

const sentences = ['A digital force', 'to be reckoned', 'with.'];

const SENTENCE_DELAY = 100;
const DISABLE_ANIMATION = false;

type SentenceTrailProps = { sentence: string; delay: number };

function SentenceTrail({ sentence, delay }: SentenceTrailProps) {
  const [toggle, set] = useState(DISABLE_ANIMATION);
  const items = sentence.split(' ');

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: -50, height: 0 },
    delay,
  });

  useLayoutEffect(() => {
    if (DISABLE_ANIMATION) return;
    const handle = window.setTimeout(() => set(true), delay);
    return () => window.clearTimeout(handle);
  }, []);

  return (
    <div>
      {trail.map(({ x, height, ...rest }: any, index) => (
        <span key={index} className="ml-2">
          <animated.span
            className="inline-block"
            style={{
              ...rest,
              transform: x.interpolate((x: number) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.span style={{ height }}>{items[index]}</animated.span>
          </animated.span>
        </span>
      ))}
    </div>
  );
}

type Props = {
  onAnimationCompleting?: () => void;
};

function IntroSection({ onAnimationCompleting }: Props) {
  // useEffect(() => {
  //   const handle = setTimeout(() => {
  //     if (DISABLE_ANIMATION) return;

  //   }, totalTime);
  //   return () => clearTimeout(handle);
  // });

  const handleGoToContact = () => {
    scrollToSection('contact', 'end');
  }

  const underlineSpringProps = useSpring({
    to: async next => {
      await next({ opacity: 1, marginTop: '0rem', width: '15rem' });
    },
    from: { opacity: 0, marginTop: '1rem', width: '0rem' },
    delay: 1200,
    config,
  });

  const buttonSpringProps = useSpring({
    to: async next => {
      await next({ opacity: 1, marginRight: '0rem' });
    },
    from: { opacity: 0, marginRight: '-15rem'},
    delay: 2000,
    config,
  });

  return (
    <Section id="intro" className="bg-maio-grey text-white pb-10 relative">
      <ContentWrapper className="min-h-full">
        <div className="relative flex flex-col">
          <div className="inset-0 absolute w-full h-full">
            <animated.hr
              className="absolute md:invisible border-2 border-maio-blue"
              style={underlineSpringProps}
              css={css`
                top: 3.4rem;
                left: 4rem;
              `}
            />
          </div>

          <h1 className="text-5xl md:text-huge font-bold mb-6">
            {sentences.map((sentence, index) => (
              <SentenceTrail key={index} sentence={sentence} delay={300} />
            ))}
          </h1>
          <animated.div className="self-end" style={buttonSpringProps}>
            <Button onClick={handleGoToContact}>
              Got a project?
            </Button>
          </animated.div>
        </div>
      </ContentWrapper>
    </Section>
  );
}

export default IntroSection;
