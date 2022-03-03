import React from 'react';
import 'Components/Cards/ExperienceCard.scss'

const ExperienceCard = ({title, color, subtitle, imgSrc, children, orientation="right"}) => {
    return (
        <div className="experience-card-container row">
            {orientation === "right" &&
            <div className="experience-card-picture">
                <img src={imgSrc} alt="loading"/>
            </div>
            }
            <div className="experience-card-picture experience-card-responsive-design">
                <img src={imgSrc} alt="loading"/>
            </div>
            <div className="experience-card-text">
                <div className="card-heading col">
                    <h1 style={{color: color}}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
            {orientation === "left" &&
            <div className="experience-card-picture">
                <img src={imgSrc} alt="loading"/>
            </div>
            }
        </div>
    );
};

export default ExperienceCard;
