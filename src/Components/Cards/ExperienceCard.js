import React from 'react';
import 'Components/Cards/ExperienceCard.scss'

const ExperienceCard = ({title, color, subtitle, logoSrc, imgSrc, children, orientation="right"}) => {
    return (
        <div className="detailed-project-card-container row">
            {orientation === "right" &&
            <div className="detailed-project-card-picture">
                <img src={imgSrc} alt="loading"/>
            </div>
            }
            <div className="detailed-project-card-picture detailed-project-card-responsive-design">
                <img src={imgSrc} alt="loading"/>
            </div>
            <div className="detailed-project-card-text">
                <div className="card-heading row">
                    <img src={logoSrc} alt="loading"/>
                    <h2 style={{margin: 0, marginLeft: '15px', color: color}}>{title}</h2>
                </div>
                <h4 style={{margin: 0}}>{subtitle}</h4>
                {children}
            </div>
            {orientation === "left" &&
            <div className="detailed-project-card-picture">
                <img src={imgSrc} alt="loading"/>
            </div>
            }
        </div>
    );
};

export default ExperienceCard;
