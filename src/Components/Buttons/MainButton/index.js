import React from 'react';
import './index.scss'

const MainButton = ({children, disabled, disabledText}) => {
    return (
        <button className="main-button" disabled={disabled}>
            {disabled ? disabledText : children}
        </button>
    );
};

export default MainButton;
