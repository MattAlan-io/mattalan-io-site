import React from 'react';

import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import MDImage from '../../../images/md.png';

const Founder = ({ name, imageSrc }) => (
  <Card>
    <img src={imageSrc} className="rounded w-32" />
    <p>{name}</p>
  </Card>
);

const FoundersSection = () => {
  return (
    <Section id="founders" className="text-black bg-white pt-10">
      <ContentWrapper>
        <h1>Founders</h1>
        <div className="flex align-center justify-center space-between">
          <Founder name="Matt" imageSrc={MDImage} />
          <Founder name="Alan" imageSrc={MDImage} />
        </div>
      </ContentWrapper>
    </Section>
  );
};

export default FoundersSection;
