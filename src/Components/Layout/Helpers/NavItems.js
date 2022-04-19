import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItems({ viewFrom }) {
  const location = useLocation();

  // add your own parental css styles
  return (
    <>
      <Link to="/">
        <span style={{
          background: (location.pathname === '/' && viewFrom !== 'footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',
          backgroundPosition: (location.pathname === '/' && viewFrom !== 'footer') ? '0 100%' : '',
          backgroundSize: (location.pathname === '/' && viewFrom !== 'footer') ? '100% 2px' : '',
          backgroundRepeat: (location.pathname === '/' && viewFrom !== 'footer') ? 'repeat-x' : '',
          borderRadius: '5px',
        }}
        >
          Home
        </span>
      </Link>
      <Link to="/about">
        <span style={{
          background: (location.pathname === '/about' && viewFrom !== 'footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',
          backgroundPosition: (location.pathname === '/about' && viewFrom !== 'footer') ? '0 100%' : '',
          backgroundSize: (location.pathname === '/about' && viewFrom !== 'footer') ? '100% 2px' : '',
          backgroundRepeat: (location.pathname === '/about' && viewFrom !== 'footer') ? 'repeat-x' : '',
          borderRadius: '5px',
        }}
        >
          About
        </span>
      </Link>
      <Link to="/contact">
        <span style={{
          background: (location.pathname === '/contact' && viewFrom !== 'footer') ? 'linear-gradient(to left, #f69ec4, #f9dd94 100%)' : 'none',
          backgroundPosition: (location.pathname === '/contact' && viewFrom !== 'footer') ? '0 100%' : '',
          backgroundSize: (location.pathname === '/contact' && viewFrom !== 'footer') ? '100% 2px' : '',
          backgroundRepeat: (location.pathname === '/contact' && viewFrom !== 'footer') ? 'repeat-x' : '',
          borderRadius: '5px',
        }}
        >
          Contact
        </span>
      </Link>
    </>
  );
}

export default NavItems;
NavItems.defaultProps = {
  viewFrom: null,
};
NavItems.propTypes = {
  viewFrom: PropTypes.string,
};
