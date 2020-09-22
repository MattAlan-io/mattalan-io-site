import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from '../components/header';
import LandingPage from './landing-page/landing-page';

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Header siteTitle="ma.io" />
      <LandingPage />
    </ParallaxProvider>
  );
};

export default IndexPage;
