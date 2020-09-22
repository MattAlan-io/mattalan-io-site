import { Link } from 'gatsby';

import React from 'react';

const NavButton = ({ text, to }) => (
  <Link to={to} className="border-b-2 border-maio-blue text-white mr-6 pb-2 inline-block">
    <h3 className="inline" >{text}</h3>
  </Link>
);

const NavBar = ({ children, style }) => <div style={{ display: 'inline', flexGrow: '1', alignSelf: 'center', ...style }}>{children}</div>;

const Header = ({ siteTitle }) => (
  <header className="bg-maio-grey">
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
        {/* <NavButton to="#skills" text="Skills"></NavButton> */}
        <NavButton to="#projects" text="Projects"></NavButton>
        {/* <NavButton to="#blog" text="Blog"></NavButton> */}
        <NavButton to="#os" text="Open Source"></NavButton>
      </NavBar>

      <h1 className="text-xl text-white">{siteTitle}</h1>
    </div>
  </header>
);

export default Header;
