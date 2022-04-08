import React, {useEffect, useState} from 'react';
import './Footer.scss'
import {SocialMediaLinks} from "Utils/constants";
import Index from 'Components/Buttons/RedirectButton';
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
        dispatch(triggerBanner("copied", 'info'))
    }

    return (
        <div className="footer-container">
            <div className="footer col">
                <div className="footer-content row">
                    <div className="footer-left col">
                        <div className="footer-link-container col">
                            <Index link={SocialMediaLinks.LinkedIn}>LinkedIn</Index>
                            <Index link={SocialMediaLinks.GitHub}>GitHub</Index>
                            <Index link={SocialMediaLinks.Email}>Email</Index>
                            <br/>
                            <Index isScrollingTop>Back to top</Index>
                            <div onClick={handleCopyLink}>
                                <Index isSharing disabled={isCopied}>
                                    {!isCopied ?
                                        <>Copy Link</>
                                        :
                                        <>Copied ({counter})</>
                                    }
                                </Index>
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
