import React from 'react';
import './Footer.scss'
import NavItems from "./Helpers/NavItems";
import {ProjectLinks, SocialMediaLinks} from "Utils/constants";
import {Link} from "react-router-dom";
import RedirectButton from 'Components/UI/RedirectButton/RedirectButton';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer col">
                <div className="footer-content row">
                    <div className="footer-left col">
                        <div className="footer-social-media-container col">
                            {/*<div className="footer-social-media-icons">*/}
                            {/*    <a href={SocialMediaLinks.LinkedIn} target="_blank" rel="noreferrer">*/}
                            {/*        <img src="assets/icons/linkedin.png" alt="loading"/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            <RedirectButton link={SocialMediaLinks.LinkedIn}>LinkedIn</RedirectButton>
                            <RedirectButton link={SocialMediaLinks.Email}>Email</RedirectButton>
                        </div>
                    </div>
                    <div className="footer-right row">
                        <div className="footer-nav">
                            <div className="heading">
                                Company
                            </div>
                            <div className="navigation col">
                                <NavItems viewFrom="footer"/>
                            </div>
                        </div>
                        <div className="footer-nav">
                            <div className="heading">
                                Live Public Projects
                            </div>
                            <div className="navigation col">
                                <a href={ProjectLinks.Fishoal} target="_blank" rel="noreferrer">
                                    Fishoal
                                </a>
                                <a href={ProjectLinks.BeyooBusiness} target="_blank" rel="noreferrer">
                                    Beyoo Business
                                </a>
                            </div>
                        </div>
                        {/*<div className="footer-nav">*/}
                        {/*    <div className="heading">*/}
                        {/*        Policies*/}
                        {/*    </div>*/}
                        {/*    <div className="navigation col">*/}
                        {/*        <Link to={"/terms"}>*/}
                        {/*            <span>Terms & Conditions</span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>2022 &copy; Designed, developed, and maintained by Fang Xu</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
