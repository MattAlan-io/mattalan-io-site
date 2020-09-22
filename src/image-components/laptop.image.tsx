import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const BackgroundSection = ({ className = '' }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "laptop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4096) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`#040e18`}>
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
