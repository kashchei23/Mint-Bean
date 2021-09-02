import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import './NavBar.scss';

const NavBar = () => {
  const [menuIsOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuIsOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMenu = () => {
    setMenu(false);
    scrollToTop();
  };

  return (
    <>
      <div className="navBar">
        <Link to="/" onClick={scrollToTop}>
          <img
            src="https://res.cloudinary.com/obkidz/image/upload/v1630371486/Mint%20Match/mint_match_logo-white2-01_cvnsac.png"
            alt="Mint Match Logo"
            className="navBar-logo"
          />
        </Link>
        <button type="button" className="menu-icon-button" onClick={toggleMenu}>
          {menuIsOpen ? (
            <i className="fas fa-times fa-2x" />
          ) : (
            <i className="fas fa-bars fa-2x" />
          )}
        </button>
        <DesktopNav />
      </div>
      <MobileNav menuIsOpen={menuIsOpen} onClick={closeMenu} />
    </>
  );
};
export default NavBar;
