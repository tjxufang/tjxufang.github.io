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
                {children?.map((para, i)=>
                    <div className="card-content" key={i}>
                        {para}
                    </div>
                )}
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
