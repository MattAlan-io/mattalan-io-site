import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Spacing } from "../style/spacing";
import { Colours } from "../style/colours";
import Typography from "./typography/typography";

const NavButton = ({ text, to }) => (
  <Link
    to={to}
    style={{
      color: `white`,
      textDecoration: `none`,
      marginRight: '16px',
      paddingBottom: '3px',
      borderBottom: `${Spacing.xxsmall} solid ${Colours.lightBlue}`,
    }}
    >
    <Typography inline h3>
      {text}
    </Typography>
  </Link>
);

const NavBar = ({ children, style }) => (
  <div style={{ display: 'inline', flexGrow: '1', alignSelf: 'center', ...style }}>{children}</div>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: Colours.darkGrey,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
      }}
    >
      <NavBar>
        <NavButton to="#about" text="About"></NavButton>
        <NavButton to="#skills" text="Skills"></NavButton>
        <NavButton to="#projects" text="Projects"></NavButton>
        <NavButton to="#blog" text="Blog"></NavButton>
        <NavButton to="#os" text="Open Source"></NavButton>
      </NavBar>

      <h1 style={{ margin: 0, color: 'white', display: 'inline' }}>
          { siteTitle }
        </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
