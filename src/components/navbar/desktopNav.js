import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import logo from '../../images/logo.png';

const DesktopNav = ({ navLinks }) => (
  <nav className="desk-nav">
    <header>
      <Link className="text-light h2" to="homePage">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </header>
    <ul>
      {navLinks.map((links) => (
        <li key={links.id} className={links.name}>
          <Link to={links.pageName} smooth duration={500} activeclassname="active" className="text-light nav-link">
            {links.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

DesktopNav.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DesktopNav;
