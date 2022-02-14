import React from 'react';
import './MainButton.scss'

const MainButton = ({children}) => {
    return (
        <div className="main-btn-container">
            <button>
                {children}
            </button>
        </div>
    );
};

export default MainButton;
