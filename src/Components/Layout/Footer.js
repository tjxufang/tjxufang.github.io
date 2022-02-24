import React from 'react';
import './Footer.scss'
import {SocialMediaLinks} from "Utils/constants";
import RedirectButton from 'Components/UI/RedirectButton/RedirectButton';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer col">
                <div className="footer-content row">
                    <div className="footer-left col">
                        <div className="footer-link-container col">
                            <RedirectButton link={SocialMediaLinks.LinkedIn}>LinkedIn</RedirectButton>
                            <RedirectButton link={SocialMediaLinks.Email}>Email</RedirectButton>
                            <br/>
                            <RedirectButton>Back to top</RedirectButton>
                        </div>
                    </div>
                    <div className="footer-right row">
                        <div>
                            Designed, developed, and maintained by Fang Xu
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>2022 &copy; Fang Xu | v0.0.1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
