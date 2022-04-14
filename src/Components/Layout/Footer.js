import React, {useEffect, useState} from 'react';
import './Footer.scss'
import {BannerTexts, SocialMediaLinks} from "Utils/constants";
import RedirectButton from 'Components/Buttons/RedirectButton';
import {FooterStrings} from 'Utils/Strings';
import {useDispatch} from 'react-redux';
import {triggerBanner} from 'Redux/actions';

const Footer = () => {
    const dispatch = useDispatch()
    const [isCopied, setIsCopied] = useState(false)
    const [counter, setCounter] = useState(3)
    const COUNTDOWN_SECONDS = 3
    useEffect(() => {
        let interval
        if (isCopied) {
            interval = setInterval(() => {
                setCounter(currentCounter => {
                    if (currentCounter <= 1) {
                        setIsCopied(false)
                        clearInterval(interval)
                        return COUNTDOWN_SECONDS
                    } else {
                        return currentCounter - 1
                    }
                })
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isCopied])

    const handleCopyLink = () => {
        setIsCopied(true)
        dispatch(triggerBanner(BannerTexts.CopyLink, 'success'))
    }

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
                            <RedirectButton isScrollingTop>Back to Top</RedirectButton>
                            <div onClick={handleCopyLink}>
                                <RedirectButton isSharing disabled={isCopied}>
                                    {!isCopied ?
                                        <>Copy Link</>
                                        :
                                        <>Copied ({counter})</>
                                    }
                                </RedirectButton>
                            </div>
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
