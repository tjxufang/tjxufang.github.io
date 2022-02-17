import React from 'react';
import './RedirectButton.scss'

const RedirectButton = ({children, link}) => {
    const onClick = () => {
        window.open(
            link,
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    return (
        <button className="redirect-button" onClick={onClick}>
            <div className="row">
                {children}
                <div className="redirect-button-icon">
                    &#8599;
                </div>
            </div>
        </button>
    );
};

export default RedirectButton;
