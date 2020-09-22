import React from 'react';

import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import Testemonial from '../../../components/testemonial';
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
        </ContentWrapper>
        <div className="flex content-between align-center justify-evenly p-4 space-x-4">
          <Testemonial title="Site Build" author="carbn.com" imageSrc={MDImage} />
          <Testemonial title="Bespoke CMS" author="The GP Locum Agency" imageSrc={MDImage} />
        </div>
    </Section>
  );
};

export default ClientsSection;
