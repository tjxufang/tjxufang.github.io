import React from 'react';
import './Footer.scss'
import {SocialMediaLinks} from "Utils/constants";
import RedirectButton from 'Components/UI/RedirectButton/RedirectButton';
import {FooterStrings} from 'Utils/Strings';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer col">
                <div className="footer-content row">
                    <div className="footer-left col">
                        <div className="footer-link-container col">
                            <RedirectButton link={SocialMediaLinks.LinkedIn}>LinkedIn</RedirectButton>
                            <RedirectButton link={SocialMediaLinks.GitHub}>GitHub</RedirectButton>
                            <RedirectButton link={SocialMediaLinks.Email}>Email</RedirectButton>
                            <br/>
                            <RedirectButton isScrollingTop>Back to top</RedirectButton>
                            <RedirectButton isSharing>Copy Link</RedirectButton>
                        </div>
                    </div>
                    <div className="footer-right row">
                        <div className="banner">
                            {FooterStrings.Banner}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>{FooterStrings.Bottom}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
