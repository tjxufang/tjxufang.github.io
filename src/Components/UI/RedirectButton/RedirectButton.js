import React from 'react';
import './RedirectButton.scss'

const RedirectButton = ({children, link, isSharing, isScrollingTop, disabled}) => {
    const onClick = () => {
        if (isScrollingTop) { // back to top
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        } else if (isSharing) {
            navigator.clipboard.writeText(window.location.href)
        } else {
            window.open(
                link,
                '_blank'
            );
        }
    }

    return (
        <button className="redirect-button" onClick={onClick} disabled={disabled}>
            <div className="row">
                {children}
                {link ?
                    <div className="redirect-button-icon">
                        &#8599;
                    </div>
                    : isScrollingTop ?
                        <div className="redirect-button-icon" style={{marginRight: '4px'}}>
                            &#8593;
                        </div>
                        :
                        <div className="redirect-button-icon" style={{marginTop: '4px'}}>
                            &#9829;
                        </div>
                }
            </div>
        </button>
    );
};

export default RedirectButton;
