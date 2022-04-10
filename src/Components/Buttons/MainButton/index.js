import React from 'react';
import './index.scss'

const MainButton = ({children, disabled, disabledText}) => {
    return (
        <button className="main-button" disabled={disabled}>
            <div className="bg-img">
                <img src="assets/btn-bg.png" alt="button-background"/>
            </div>
            {disabled ? disabledText : children}
        </button>
    );
};

export default MainButton;
