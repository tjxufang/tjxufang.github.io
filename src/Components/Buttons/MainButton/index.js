import React from 'react';
import './index.scss'

const MainButton = ({children}) => {
    return (
        <button className="main-button">
            {children}
        </button>
    );
};

export default MainButton;
