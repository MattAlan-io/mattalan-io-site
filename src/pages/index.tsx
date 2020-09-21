import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import VisibilitySensor from 'react-visibility-sensor'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

import Layout from '../components/layout'
import Image from '../components/logo'
import SEO from '../components/seo'
import { Colours } from '../style/colours'
import Typography from '../components/typography/typography'
import { Spacing } from '../style/spacing'

import MDImage from '../images/md.png'
import { Spring, config } from 'react-spring/renderprops-universal'
import {
  DeviceWidth,
  useDeviceSize,
  byDeviceWidth,
} from '../hooks/useDeviceSize'
import { Col, Row } from '../components/grid'

const Sections = {
  about: 'about',
  founders: 'founders',
  skills: 'skills',
}

const Section = ({ children, style, id }) => (
  <section
    id={id}
    style={{
      width: '100%',
      paddingTop: Spacing.xlarge,
      ...style,
    }}
  >
    {children}
  </section>
)

const Content = ({ center = false, children, style = {} }) => {
  return (
    <div
      style={{
        ...(center && { textAlign: 'center' }),
        maxWidth: '960px',
        margin: 'auto',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

const Card = ({ children, style = {} }) => (
  <div style={{ display: 'inline-block', padding: Spacing.xlarge, ...style }}>
    {children}
  </div>
)

const Founder = ({ name, imageSrc }) => (
  <Card>
    <img
      src={imageSrc}
      style={{ borderRadius: '50%', maxWidth: '150px', display: 'block' }}
    />
    <Typography inline p>
      {name}
    </Typography>
  </Card>
)

const Skill = ({ name, style = {} }) => (
  <Card style={style}>
    <Typography inline h3>
      {name}
    </Typography>
  </Card>
)

const AboutSection = () => {
  const [deviceWidth] = useDeviceSize()
  const interpolate = byDeviceWidth(deviceWidth)

  return (
    <Section
      id={Sections.about}
      style={{ color: Colours.white, backgroundColor: Colours.darkGrey }}
    >
      <Content>
        <Typography h1 alignRight>
          MattAlan.io
        </Typography>
        <Row>
          <Col sm={12} md={4} >
            <Image />
          </Col>
          <Col>
            <Typography h1>A digital force to be reckoned with.</Typography>
            <Typography p>With years of FTSE 100 & 250 experience.</Typography>
          </Col>
        </Row>
      </Content>
    </Section>
  )
}

const FoundersSection = () => {
  const [deviceWidth] = useDeviceSize()
  const interpolate = byDeviceWidth(deviceWidth)

  return (
    <Section
      id={Sections.founders}
      style={{
        color: Colours.black,
        backgroundColor: Colours.white,
        height: interpolate({
          [DeviceWidth.Desktop]: '500px',
          [DeviceWidth.Tablet]: '800px',
        }),
        paddingTop: Spacing.xxlarge,
      }}
    >
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            delay={200}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
            }}
          >
            {style => (
              <Content center style={style}>
                <Typography h1>Founders</Typography>
                <Founder name="Matt" imageSrc={MDImage} />
                <Founder name="Alan" imageSrc={MDImage} />
              </Content>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </Section>
  )
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const SkillsSection = () => {
  const skills = [
    'Project Management',
    'Web Development',
    'Dev Ops',
    'Cloud Infrastructure',
    'Database Design',
  ]

  const getRandomOffsets = () => ({
    // x: [getRandomInt(-50, 50), getRandomInt(-50, 50)],
    x: [getRandomInt(-100, 0), getRandomInt(0, 100)],
  })

  const getRandomScaleProps = () => {
    const scale = getRandomInt(1, 10)
    const xTransformBound = 100 * (1 / scale)
    const x = [
      getRandomInt(-1 * xTransformBound, 0),
      getRandomInt(0, xTransformBound),
    ]

    return {
      color: 'transparent',
      textShadow: '0 0 5px rgba(0,0,0,0.5)',
      x,
      transform: `scale(${scale})`,
    }
  }

  const skillProps = useMemo(
    () =>
      skills.map(skill => ({
        parallax: getRandomScaleProps(),
        skill,
      })),
    []
  )

  return (
    <Section
      id={Sections.skills}
      style={{
        color: Colours.white,
        backgroundColor: Colours.lightBlue,
        height: '1000px',
      }}
    >
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
              <Content center style={style}>
                <Typography h1>Skills</Typography>
                {skillProps.map(({ parallax, skill }) => (
                  <Parallax key={skill} {...parallax}>
                    <Skill name={skill} />
                  </Parallax>
                ))}
              </Content>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </Section>
  )
}

const Background = ({ children }) => (
  <div
    style={{
      backgroundColor: Colours.darkGrey,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    }}
  >
    {children}
  </div>
)

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Background>
        <Layout>
          <SEO title="Home" />

          <Parallax y={[0, 0]}>
            <AboutSection />
          </Parallax>

          <SkillsSection />

          <Parallax y={[100, 200]}>
            <FoundersSection />
          </Parallax>
        </Layout>
      </Background>
    </ParallaxProvider>
  )
}

export default IndexPage
