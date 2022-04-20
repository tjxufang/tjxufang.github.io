import React from 'react';
import './NavItems.scss';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItems({ viewFrom, onClick }) {
  const location = useLocation();

  // add your own parental css styles
  return (
    <>
      <Link
        to="/"
        className={(location.pathname === '/' && viewFrom !== 'footer') ? 'link-on' : 'link-off'}
        onClick={onClick}
      >
        <span>
          Home
        </span>
      </Link>
      <Link
        to="/about"
        className={(location.pathname === '/about' && viewFrom !== 'footer') ? 'link-on' : 'link-off'}
        onClick={onClick}
      >
        <span>
          About
        </span>
      </Link>
      <Link
        to="/contact"
        className={(location.pathname === '/contact' && viewFrom !== 'footer') ? 'link-on' : 'link-off'}
        onClick={onClick}
      >
        <span>
          Contact
        </span>
      </Link>
    </>
  );
}

export default NavItems;
NavItems.defaultProps = {
  viewFrom: null,
  onClick: null,
};
NavItems.propTypes = {
  viewFrom: PropTypes.string,
  onClick: PropTypes.func,
};
