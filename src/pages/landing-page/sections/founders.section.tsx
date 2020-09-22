import { css } from '@emotion/core';
import React from 'react';

import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import MDImage from '../../../images/md.png';

const Founder = ({ name, imageSrc }) => (
  <Card>
    <img src={imageSrc} className="rounded-lg w-32" />
    <p className="text-xl text-center mt-4">{name}</p>
  </Card>
);

const FoundersSection = () => {
  return (
    <Section id="founders" className="text-black bg-white" css={css`padding-top: 10em;`}>
      <ContentWrapper>
        <h2 className="text-3xl font-bold text-center mb-6">Founders</h2>
        <div className="flex align-center justify-evenly">
          <Founder name="Matt" imageSrc={MDImage} />
          <Founder name="Alan" imageSrc={MDImage} />
        </div>
      </ContentWrapper>
    </Section>
  );
};

export default FoundersSection;
