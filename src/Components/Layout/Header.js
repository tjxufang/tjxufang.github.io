import React, {useEffect, useState} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import NavItems from "Components/Layout/Helpers/NavItems";

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
            <div className="header row">
                {/*<div className="company-logo">*/}
                {/*    <Link to={'/'}>*/}
                {/*        <img src='logo-text-color.svg' alt="logo" width='200px'/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div className="navigation-container">
                    <NavItems viewFrom="header"/>
                </div>
                {/*<div className="sys-btn-container">*/}
                {/*    <Link to={"/contact"}>*/}
                {/*        <div className="sys-btn row">*/}
                {/*            <img src="assets/star.svg" alt="star"/>*/}
                {/*            <div>Shoot Your Star</div>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                <div className="side-nav-icon">
                    <span onClick={toggleNav}>&#9776;</span>
                </div>
            </div>
            {navOpen &&
            <div className="responsive-nav col" onClick={toggleNav}>
                <NavItems viewFrom="footer"/>
            </div>
            }
        </div>
    );
};

export default Header;
