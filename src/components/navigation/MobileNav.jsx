import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MobileNav.scss';

const MobileNav = (props) => {
  const { menuIsOpen, onClick } = props;
  return (
    <>
      <ul className={`mobile-menu ${menuIsOpen ? 'mobile-menu-open' : ''}`}>
        <li>
          <Link to="/" onClick={onClick}>
            Objective
          </Link>
        </li>
        <li>
          <a
            href="#developer"
            tabIndex={0}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
          >
            Developer
          </a>
        </li>
        <li>
          <Link
            to="/mint-match-game"
            onClick={onClick}
            onKeyPress={onClick}
            tabIndex={0}
            role="button"
          >
            Play game
          </Link>
        </li>
      </ul>
      <div
        className={`menu-shadow ${menuIsOpen ? 'fade-in' : ''}`}
        onClick={onClick}
        onKeyPress={onClick}
        tabIndex={0}
        role="button"
        aria-label="menu-shadow"
      />
    </>
  );
};
MobileNav.propTypes = {
  menuIsOpen: PropTypes.bool,
  onClick: PropTypes.func,
};
MobileNav.defaultProps = {
  menuIsOpen: false,
  onClick: () => {},
};

export default MobileNav;
