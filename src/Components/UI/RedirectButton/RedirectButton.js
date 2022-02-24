import React from 'react';
import './RedirectButton.scss'

const RedirectButton = ({children, link}) => {
    const onClick = () => {
        if (!link){ // back to top
            window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
        } else {
            window.open(
                link,
                '_blank'
            );
        }
    }
    return (
        <button className="redirect-button" onClick={onClick}>
            <div className="row">
                {children}
                {link ?
                    <div className="redirect-button-icon">
                        &#8599;
                    </div>
                    :
                    <div className="redirect-button-icon" style={{marginRight: '4px'}}>
                        &#8593;
                    </div>
                }
            </div>
        </button>
    );
};

export default RedirectButton;
