import React from 'react';
import './MainButton.scss'

const MainButton = ({children}) => {
    return (
        <button className="main-button">
            {children}
        </button>
    );
};

export default MainButton;
