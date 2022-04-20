import React, { useEffect, useState } from 'react';
import './Header.scss';
import NavItems from 'Components/Layout/Helpers/NavItems';
import { Link } from 'react-router-dom';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const handleToggle = () => {
    const width = window.innerWidth;
    if (width > 1050) {
      setNavOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleToggle, { passive: true });
    return () => {
      window.removeEventListener('resize', handleToggle);
    };
  }, []);

  return (
    <div
      className="header-container"
      style={{ height: navOpen && '275px' }}
    >
      <div className="thumbnail">
        <img src={`${process.env.PUBLIC_URL}/assets/fx-logo.png`} alt="thumbnail" />
      </div>
      <div className="header row">
        <div className="company-logo row">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/fx-logo-dark.png`} alt="logo" width="50px" />
          </Link>
          <div className="company-logo-text flex-center">
            Fang Xu
          </div>
        </div>
        <div className="navigation-container">
          <NavItems viewFrom="header" />
        </div>
        <div className="side-nav-icon">
          <button className="btn-transparent" type="button" onClick={toggleNav}>
            &#9776;
          </button>
        </div>
      </div>
      {navOpen
      && (
        <div className="responsive-nav col">
          <NavItems viewFrom="footer" onClick={toggleNav} />
          <div className="bg-img">
            <img src={`${process.env.PUBLIC_URL}assets/nav-bg.jpg`} alt="nav-background" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
