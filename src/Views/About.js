import React from 'react';
import './About.scss';
import ExperienceCard from 'Components/Cards/ExperienceCard';
import {AboutStrings} from 'Utils/Strings';

const About = () => {
    return (
        <div className="about-container view-container">
            {AboutStrings?.map((item, i) =>
                <ExperienceCard
                    orientation={i % 2 === 0 ? 'left' : 'right'}
                    title={item.title}
                    color={item.color}
                    subtitle={item.subtitle}
                    imgSrc={item.imgSrc}
                    key={i}
                >
                    {item.detail}
                </ExperienceCard>
            )}
        </div>
    );
};

export default About;
