import React from 'react';
import './Footer.scss'
import NavItems from "./Helpers/NavItems";
import {Links} from "Utils/constants";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-background">
                <img src="assets/footer-background2.jpg" alt="loading"/>
            </div>
            <div className="footer col">
                <div className="footer-content row">
                    <div className="footer-left col">
                        <div className="footer-logo">
                            <img src="logo-text-white.png" alt="loading"/>
                        </div>
                        <div className="footer-social-media-container">
                            Follow us:
                            <div className="footer-social-media-icons">
                                <a href={Links.CompanyLinkedIn} target="_blank" rel="noreferrer">
                                    <img src="assets/media/linkedin.png" alt="loading"/>
                                </a>
                                <a href={Links.CompanyFacebook} target="_blank" rel="noreferrer">
                                    <img src="assets/media/facebook.png" alt="loading"/>
                                </a>
                                <a href={Links.CompanyTwitter} target="_blank" rel="noreferrer">
                                    <img src="assets/media/twitter.png" alt="loading"/>
                                </a>
                                <a href={Links.CompanyInstagram} target="_blank" rel="noreferrer">
                                    <img src="assets/media/instagram.png" alt="loading"/>
                                </a>
                            </div>
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
                                Products
                            </div>
                            <div className="navigation col">
                                <a href={Links.FishoalWeb} target="_blank" rel="noreferrer">
                                    Fishoal
                                </a>
                                <a href={Links.FishoalIos} target="_blank" rel="noreferrer">
                                    Fishoal for iOS
                                </a>
                                <a href={Links.FishoalAndroid} target="_blank" rel="noreferrer">
                                    Fishoal for Android
                                </a>
                                <a href={Links.BeyooBusiness} target="_blank" rel="noreferrer">
                                    Beyoo Business
                                </a>
                            </div>
                        </div>
                        <div className="footer-nav">
                            <div className="heading">
                                Policies
                            </div>
                            <div className="navigation col">
                                <Link to={"/terms"}>
                                    <span>Terms & Conditions</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-content row">
                        <p>401 Bay Street, Toronto, ON</p>
                        <p>&copy; 2021 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
