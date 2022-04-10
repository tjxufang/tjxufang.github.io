import React, {useEffect, useState} from 'react';
import './Header.scss'
import NavItems from "Components/Layout/Helpers/NavItems";
import {Link} from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const toggleNav = () => setNavOpen(!navOpen)

    const handleToggle = () => {
        const width = window.innerWidth;
        if (width>1050){
            setNavOpen(false)
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleToggle, { passive: true });
        return () => {
            window.removeEventListener('resize', handleToggle);
        };
    }, []);

    return (
        <div className="header-container"
             style={{height: navOpen && '275px'}}
        >
            <div className="thumbnail">
                <img src="/assets/fx-logo.png" alt="thumbnail"/>
            </div>
            <div className="header row">
                <div className="company-logo row">
                    <Link to={'/'}>
                        <img src='/assets/fx-logo-dark.png' alt="logo" width='50px'/>
                    </Link>
                    <div className="company-logo-text flex-center">
                        Fang Xu
                    </div>
                </div>
                <div className="navigation-container">
                    <NavItems viewFrom="header"/>
                </div>
                <div className="side-nav-icon flex-center">
                    <span onClick={toggleNav}>&#9776;</span>
                </div>
            </div>
            {navOpen &&
            <div className="responsive-nav col" onClick={toggleNav}>
                <NavItems viewFrom="footer"/>
                <div className="bg-img">
                    <img src="assets/nav-bg.jpg" alt="nav-background"/>
                </div>
            </div>
            }
        </div>
    );
};

export default Header;
