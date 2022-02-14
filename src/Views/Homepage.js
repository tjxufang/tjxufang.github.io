import React from 'react';
import './Homepage.scss'
import Intro from 'Components/Intro';

const Homepage = () => {
    return (
        <div className="homepage-container view-container">
            <div className="homepage-intro">
                <Intro/>
            </div>
        </div>
    );
};

export default Homepage;
