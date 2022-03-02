import React from 'react';
import './About.scss';
import ExperienceCard from 'Components/Cards/ExperienceCard';

const About = () => {
    return (
        <div className="about-container view-container">
            <ExperienceCard
                title="Queen's University"
                color="blue"
                description="Graduated from Queen's University"
                logoSrc="assets/fx-logo-dark.png"
                imgSrc="assets/fx-logo-dark.png"
            >
                Queen's University
            </ExperienceCard>
            <ExperienceCard
                title="Queen's University"
                color="blue"
                description="Graduated from Queen's University"
                logoSrc="assets/fx-logo-dark.png"
                imgSrc="assets/fx-logo-dark.png"
                orientation="left"
            >
                Queen's University
            </ExperienceCard>
        </div>
    );
};

export default About;
