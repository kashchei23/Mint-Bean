import React from 'react';
import { Link } from 'react-router-dom';

import './DesktopNav.scss';

const DesktopNav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <ul className="desktop-menu">
      <li>
        <Link to="/" onClick={scrollToTop}>
          Objective
        </Link>
      </li>
      <li>
        <a href="#developer">Developer</a>
      </li>
      <li>
        <Link to="/mint-match-game" id="menu-cta" onClick={scrollToTop}>
          Play game
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNav;
