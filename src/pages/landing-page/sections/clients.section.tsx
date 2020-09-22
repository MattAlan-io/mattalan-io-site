import React from 'react';

import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import MDImage from '../../../images/md.png';

const Client = ({ name, imageSrc }) => (
  <Card className="w-32">
    <img src={imageSrc} className="rounded-lg w-32" />
    <p className="text-lg text-center mt-4">{name}</p>
  </Card>
);

const ClientsSection = () => {
  return (
    <Section id="clients" className="text-white bg-maio-grey">
      <ContentWrapper>
        <h2 className="text-3xl font-bold text-center mb-6">Clients</h2>
        <div className="flex align-center justify-evenly">
          <Client name="carbn.com" imageSrc={MDImage} />
          <Client name="The GP Locum Agency" imageSrc={MDImage} />
        </div>
      </ContentWrapper>
    </Section>
  );
};

export default ClientsSection;
